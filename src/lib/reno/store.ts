import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { RenoLife } from "./types";
import { DISTRICT_POS, newLife } from "./world";
import { seedDealers, seedMarks } from "./intel";
import { ensureCity } from "./ecosystem";

interface RenoState {
  lives: Record<string, RenoLife>;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
  ensure: (characterId: string, hpMax: number) => RenoLife;
  setLife: (life: RenoLife) => void;
  remove: (characterId: string) => void;
}

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

function migrate(life: RenoLife, hpMax: number): RenoLife {
  const fallback = DISTRICT_POS[life.district] ?? DISTRICT_POS.virgin;
  const pos = {
    x: life.posX ?? fallback.x,
    z: life.posZ ?? fallback.z,
  };
  const base: RenoLife = {
    ...life,
    hpMax: life.hpMax || hpMax,
    trainBonus: life.trainBonus ?? 0,
    rentPaidWeek: life.rentPaidWeek ?? 0,
    posX: pos.x,
    posZ: pos.z,
    sighting: life.sighting ?? null,
    stash: {
      jet: life.stash?.jet ?? 0,
      psycho: life.stash?.psycho ?? 0,
      buffout: life.stash?.buffout ?? 0,
      mentats: life.stash?.mentats ?? 0,
      vodka: life.stash?.vodka ?? 0,
      cigarettes: life.stash?.cigarettes ?? 0,
      marijuana: life.stash?.marijuana ?? 0,
      cocaine: life.stash?.cocaine ?? 0,
    },
    gangRep: {
      mordinos: life.gangRep?.mordinos ?? 0,
      wrights: life.gangRep?.wrights ?? 0,
      salvatores: life.gangRep?.salvatores ?? 0,
      bishops: life.gangRep?.bishops ?? 0,
    },
    log: Array.isArray(life.log) ? life.log : [],
    dialogue: life.dialogue ?? null,
    angela: {
      met: life.angela?.met ?? false,
      mood: life.angela?.mood ?? "fresh",
      jetOffer: life.angela?.jetOffer ?? false,
      slept: life.angela?.slept ?? false,
      insulted: life.angela?.insulted ?? false,
      lastTalkDay: life.angela?.lastTalkDay ?? 0,
    },
    combat:
      life.combat && "hexes" in life.combat
        ? { ...life.combat, map: life.combat.map ?? null, targetId: life.combat.targetId ?? "" }
        : null,
    minute: life.minute ?? 0,
    second: life.second ?? 0,
    clock: life.clock ?? 1,
    loot: life.loot ?? null,
    inspecting: life.inspecting ?? null,
    insideId: life.insideId ?? null,
    npcMemory: life.npcMemory ?? {},
    job: life.job ?? null,
    worldDay: life.worldDay ?? 0,
    lastDose: life.lastDose ?? {},
    hunger: life.hunger ?? 22,
    thirst: life.thirst ?? 18,
    fatigue: life.fatigue ?? 12,
    boredom: life.boredom ?? 28,
    xp: life.xp ?? 0,
    dealers: life.dealers?.length ? life.dealers : seedDealers(),
    marks: life.marks?.length ? life.marks : seedMarks(),
    soughtDealer: life.soughtDealer ?? null,
    soughtMark: life.soughtMark ?? null,
    business: life.business ?? null,
    dealing: life.dealing ?? false,
    lab: life.lab ?? false,
    pressureDay: life.pressureDay ?? 0,
    rations: life.rations ?? 0,
    waters: life.waters ?? 0,
    fear: life.fear ?? 0,
    regard: life.regard ?? 0,
    warrant: life.warrant ?? 0,
    strain: life.strain ?? 0,
    tension: life.tension ?? 50,
    friction: {
      mordinos: life.friction?.mordinos ?? 0,
      wrights: life.friction?.wrights ?? 0,
      salvatores: life.friction?.salvatores ?? 0,
      bishops: life.friction?.bishops ?? 0,
    },
    grudges: life.grudges ?? {},
    absent: life.absent ?? {},
    reprieveMinute: life.reprieveMinute ?? 0,
    book: life.book ?? [],
    nav: life.nav ?? null,
  };
  return ensureCity(base);
}

export const useReno = create<RenoState>()(
  persist(
    (set, get) => ({
      lives: {},
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      ensure: (characterId, hpMax) => {
        const existing = get().lives[characterId];
        if (existing) {
          const ready = migrate(existing, hpMax);
          ready.hpMax = hpMax;
          if (ready.hp > hpMax) ready.hp = hpMax;
          set({ lives: { ...get().lives, [characterId]: ready } });
          return ready;
        }
        const life = migrate(newLife(characterId, hpMax), hpMax);
        set({ lives: { ...get().lives, [characterId]: life } });
        return life;
      },
      setLife: (life) => {
        set({ lives: { ...get().lives, [life.characterId]: life } });
      },
      remove: (characterId) => {
        const lives = { ...get().lives };
        delete lives[characterId];
        set({ lives });
      },
    }),
    {
      name: "special-forge-reno",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? noopStorage : localStorage,
      ),
      partialize: (state) => ({ lives: state.lives }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
