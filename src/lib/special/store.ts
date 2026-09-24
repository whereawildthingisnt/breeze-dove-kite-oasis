import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { exampleGeneralist, examplePnpDiplomat, newCharacter } from "./data";
import type { Character, EngineId } from "./types";

interface RosterState {
  characters: Character[];
  draft: Character | null;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
  setDraft: (character: Character | null) => void;
  patchDraft: (patch: Partial<Character> | ((current: Character) => Character)) => void;
  startDraft: (seed?: Character) => Character;
  startNew: (engine: EngineId) => Character;
  saveDraft: () => Character | null;
  upsert: (character: Character) => void;
  remove: (id: string) => void;
  duplicate: (id: string) => Character | null;
  get: (id: string) => Character | undefined;
  loadExample: () => Character;
  loadPnpExample: () => Character;
}

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useRoster = create<RosterState>()(
  persist(
    (set, get) => ({
      characters: [],
      draft: null,
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      setDraft: (character) => set({ draft: character }),
      patchDraft: (patch) => {
        const current = get().draft;
        if (!current) return;
        const next =
          typeof patch === "function"
            ? { ...patch(current), updatedAt: Date.now() }
            : { ...current, ...patch, updatedAt: Date.now() };
        set({ draft: next });
      },
      startDraft: (seed) => {
        const draft = seed
          ? { ...seed, updatedAt: Date.now() }
          : newCharacter();
        set({ draft });
        return draft;
      },
      startNew: (engine) => {
        const draft = newCharacter({ engine });
        set({ draft });
        return draft;
      },
      saveDraft: () => {
        const draft = get().draft;
        if (!draft) return null;
        const saved = { ...draft, updatedAt: Date.now() };
        get().upsert(saved);
        return saved;
      },
      upsert: (character) => {
        const list = get().characters;
        const idx = list.findIndex((c) => c.id === character.id);
        const next = [...list];
        if (idx >= 0) next[idx] = character;
        else next.unshift(character);
        set({ characters: next, draft: character });
      },
      remove: (id) => {
        set({
          characters: get().characters.filter((c) => c.id !== id),
          draft: get().draft?.id === id ? null : get().draft,
        });
      },
      duplicate: (id) => {
        const source = get().get(id);
        if (!source) return null;
        const copy = newCharacter({
          ...source,
          id: crypto.randomUUID(),
          name: source.name ? `${source.name} (copy)` : "Unnamed copy",
        });
        get().upsert(copy);
        return copy;
      },
      get: (id) => get().characters.find((c) => c.id === id),
      loadExample: () => {
        const example = exampleGeneralist();
        get().upsert(example);
        return example;
      },
      loadPnpExample: () => {
        const example = examplePnpDiplomat();
        get().upsert(example);
        return example;
      },
    }),
    {
      name: "special-forge-roster",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? noopStorage : localStorage,
      ),
      partialize: (state) => ({
        characters: state.characters,
        draft: state.draft,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
