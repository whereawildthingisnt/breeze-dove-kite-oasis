import type { ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Dices, Save } from "lucide-react";
import { useMemo, useState } from "react";
import {
  BACKGROUNDS,
  BACKGROUND_SKILL_BUDGET,
  BACKGROUND_SPECIAL_BUDGET,
  FREE_POINT_BUDGET,
  PNP_TRAITS,
  PNP_TRAIT_MAX,
  SKILL_META,
  SPECIAL_META,
  TAG_SKILL_COUNT,
  TRAITS,
  emptySpecial,
  genderOf,
  GENDER_META,
  rollArray,
  rollD10,
  sumSpecial,
} from "@/lib/special/data";
import {
  EDUCATIONS,
  LIVES,
  SCAR_MAX,
  SCARS,
  describeSpecial,
  pathNotes,
  type PathDef,
} from "@/lib/special/paths";
import { derive } from "@/lib/special/engine";
import { mascotLines } from "@/lib/special/comments";
import { useRoster } from "@/lib/special/store";
import {
  D20_TRAIT_IDS,
  GENDER_IDS,
  PNP_TRAIT_IDS,
  SKILL_IDS,
  SPECIAL_KEYS,
  characterEngine,
  type BackgroundId,
  type Character,
  type PnpTraitId,
  type ScarId,
  type SkillId,
  type SpecialKey,
  type TraitId,
} from "@/lib/special/types";
import { cn } from "@/lib/utils";
import { AppShell } from "./app-shell";
import { CharacterSheet } from "./character-sheet";
import { EquipmentDesk } from "./equipment-desk";
import { RoxyDock } from "./roxy-mascot";
import { StatStepper } from "./stat-stepper";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const STEPS_D20 = [
  "Dossier",
  "SPECIAL",
  "Background",
  "Free points",
  "Past",
  "Traits",
  "Tags",
  "Equipment",
  "Review",
] as const;

const STEPS_PNP = [
  "Dossier",
  "SPECIAL",
  "Free points",
  "Past",
  "Traits",
  "Tags",
  "Equipment",
  "Review",
] as const;

export function ForgeWizard({ mode }: { mode: "create" | "edit" }) {
  const navigate = useNavigate();
  const draft = useRoster((s) => s.draft);
  const patchDraft = useRoster((s) => s.patchDraft);
  const saveDraft = useRoster((s) => s.saveDraft);
  const engine = draft ? characterEngine(draft) : "d20";
  const steps = engine === "pnp" ? STEPS_PNP : STEPS_D20;
  const [step, setStep] = useState(mode === "edit" ? steps.length - 1 : 0);

  const derived = draft ? derive(draft) : null;
  const lines = useMemo(() => (draft ? mascotLines(draft) : []), [draft]);

  if (!draft || !derived) {
    return (
      <AppShell>
        <p className="text-muted">No character loaded.</p>
      </AppShell>
    );
  }

  const label = steps[Math.min(step, steps.length - 1)] ?? "Dossier";

  function save() {
    const saved = saveDraft();
    if (!saved) return;
    if (characterEngine(saved) === "pnp") {
      navigate({ to: "/reno/$id", params: { id: saved.id } });
    } else {
      navigate({ to: "/sheet/$id", params: { id: saved.id } });
    }
  }

  return (
    <AppShell special={derived.special}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
            {mode === "edit" ? "Revise" : "Create"} ·{" "}
            {engine === "pnp" ? "Fallout PnP d100" : "SPECIAL d20"} · no safety net
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {draft.name.trim() || "New personnel"}
          </h2>
        </div>
        <Button onClick={save}>
          <Save />
          {engine === "pnp" ? "Save and enter New Reno" : "Save to roster"}
        </Button>
      </div>

      <nav className="no-print mb-6 flex gap-1 overflow-x-auto pb-1">
        {steps.map((name, i) => (
          <button
            key={name}
            type="button"
            onClick={() => setStep(i)}
            className={cn(
              "rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors",
              i === step
                ? "bg-accent text-accent-fg"
                : "text-muted hover:bg-raised hover:text-fg",
            )}
          >
            {i + 1}. {name}
          </button>
        ))}
      </nav>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <section className="rounded-xl bg-surface p-5 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
          {label === "Dossier" ? <DossierStep draft={draft} patch={patchDraft} /> : null}
          {label === "SPECIAL" ? <SpecialStep draft={draft} patch={patchDraft} /> : null}
          {label === "Background" ? (
            <BackgroundStep draft={draft} patch={patchDraft} />
          ) : null}
          {label === "Free points" ? <FreeStep draft={draft} patch={patchDraft} /> : null}
          {label === "Past" ? <PastStep draft={draft} patch={patchDraft} /> : null}
          {label === "Traits" ? <TraitStep draft={draft} patch={patchDraft} /> : null}
          {label === "Tags" ? <TagStep draft={draft} patch={patchDraft} /> : null}
          {label === "Equipment" ? (
            <EquipmentDesk
              character={draft}
              onChange={(loadout) => patchDraft({ loadout })}
            />
          ) : null}
          {label === "Review" ? (
            <ReviewStep draft={draft} patch={patchDraft} onSave={save} />
          ) : null}

          <div className="mt-6 flex justify-between gap-3">
            <Button
              variant="ghost"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              Back
            </Button>
            {step < steps.length - 1 ? (
              <Button onClick={() => setStep((s) => s + 1)}>Next</Button>
            ) : (
              <Button onClick={save}>Save character</Button>
            )}
          </div>
        </section>

        <div className="space-y-4 lg:sticky lg:top-28">
          <RoxyDock lines={lines} compact />
          <CharacterSheet character={draft} compact />
        </div>
      </div>
    </AppShell>
  );
}

function DossierStep({
  draft,
  patch,
}: {
  draft: Character;
  patch: (p: Partial<Character>) => void;
}) {
  const pnp = characterEngine(draft) === "pnp";
  return (
    <div className="space-y-4">
      <Header
        title="Dossier"
        body={
          pnp
            ? "Classic Fallout PnP. No backgrounds. Skills are percentile. SPECIAL is still rolled and uncapped."
            : "Name is optional until you save. Level feeds derived stats live. Armor AC is a fallback if you skip the equipment step."
        }
      />
      <Field label="Name">
        <Input
          value={draft.name}
          placeholder="Personnel name"
          onChange={(e) => patch({ name: e.target.value })}
        />
      </Field>
      <Field label="Gender">
        <div className="grid grid-cols-3 gap-2">
          {GENDER_IDS.map((id) => {
            const selected = genderOf(draft) === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => patch({ gender: id })}
                className={cn(
                  "min-h-11 rounded-lg px-3 py-2 text-left transition-colors",
                  selected ? "bg-accent text-accent-fg" : "bg-raised text-fg hover:bg-border",
                )}
              >
                <span className="block text-sm font-medium">{GENDER_META[id].name}</span>
                <span className={cn("mt-0.5 block text-[11px] leading-snug", selected ? "text-accent-fg/80" : "text-subtle")}>
                  {GENDER_META[id].pronoun}/{GENDER_META[id].object}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-subtle">{GENDER_META[genderOf(draft)].blurb}</p>
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Level">
          <StatStepper
            ariaLabel="Level"
            value={draft.level}
            onChange={(level) => patch({ level })}
          />
        </Field>
        <Field label="Armor AC (if nothing worn)">
          <StatStepper
            ariaLabel="Armor AC"
            value={draft.armorAc}
            onChange={(armorAc) => patch({ armorAc })}
          />
        </Field>
      </div>
      {pnp ? (
        <Field label="Karma">
          <StatStepper
            ariaLabel="Karma"
            value={draft.karma ?? 0}
            onChange={(karma) => patch({ karma })}
          />
        </Field>
      ) : null}
      <Field label="Appearance">
        <Textarea
          rows={3}
          value={draft.appearance}
          onChange={(e) => patch({ appearance: e.target.value })}
        />
      </Field>
      <Field label="History">
        <Textarea
          rows={3}
          value={draft.history}
          onChange={(e) => patch({ history: e.target.value })}
        />
      </Field>
      <Field label="Goals">
        <Textarea
          rows={2}
          value={draft.goals}
          onChange={(e) => patch({ goals: e.target.value })}
        />
      </Field>
      <Field label="Equipment notes">
        <Textarea
          rows={2}
          value={draft.equipment}
          onChange={(e) => patch({ equipment: e.target.value })}
        />
      </Field>
    </div>
  );
}

function SpecialStep({
  draft,
  patch,
}: {
  draft: Character;
  patch: (p: Partial<Character>) => void;
}) {
  const total = sumSpecial(draft.rolled);
  const pnp = characterEngine(draft) === "pnp";
  return (
    <div className="space-y-4">
      <Header
        title="Roll SPECIAL"
        body={
          pnp
            ? "Classic PnP started everyone at 5 and handed out 5 points. Here you still roll 1d10 each. Ones stay ones. No racial min/max. Type any integer."
            : "1d10 each. Ones stay ones. Twos stay twos. Totals are not raised to 35 or cut to 55. Type any integer you want — including 0, negatives, and numbers past 10."
        }
      />
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => patch({ rolled: rollArray() })}>
          <Dices />
          Roll full array
        </Button>
        <Button
          variant="secondary"
          onClick={() => patch({ rolled: emptySpecial(0) })}
        >
          Zero the dice
        </Button>
        <Badge variant="outline">Rolled total {total}</Badge>
      </div>
      <div className="space-y-3">
        {SPECIAL_KEYS.map((key) => (
          <SpecialRow
            key={key}
            attr={key}
            value={draft.rolled[key]}
            onChange={(n) =>
              patch({ rolled: { ...draft.rolled, [key]: n } })
            }
            onReroll={() =>
              patch({ rolled: { ...draft.rolled, [key]: rollD10() } })
            }
          />
        ))}
      </div>
    </div>
  );
}

function SpecialRow({
  attr,
  value,
  onChange,
  onReroll,
}: {
  attr: SpecialKey;
  value: number;
  onChange: (n: number) => void;
  onReroll: () => void;
}) {
  const meta = SPECIAL_META[attr];
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-raised px-3 py-3 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-xs tracking-widest text-accent">{attr}</span>
          <span className="font-medium">{meta.name}</span>
        </div>
        <p className="text-xs text-subtle">{meta.blurb}</p>
      </div>
      <div className="flex items-center gap-2">
        <StatStepper ariaLabel={meta.name} value={value} onChange={onChange} />
        <Button variant="ghost" size="sm" onClick={onReroll}>
          d10
        </Button>
      </div>
    </div>
  );
}

function BackgroundStep({
  draft,
  patch,
}: {
  draft: Character;
  patch: (p: Partial<Character>) => void;
}) {
  const customSpent = sumSpecial(draft.customBackground.special);
  const customSkills = Object.values(draft.customBackground.skills).reduce(
    (n, v) => n + (v ?? 0),
    0,
  );
  return (
    <div className="space-y-4">
      <Header
        title="Background"
        body="Every background is exactly +5 SPECIAL, already baked into the package. Custom still has to land on +5 SPECIAL and +5 skill ranks."
      />
      <div className="grid gap-2 sm:grid-cols-2">
        {BACKGROUNDS.map((bg) => {
          const active = draft.backgroundId === bg.id;
          return (
            <button
              key={bg.id}
              type="button"
              onClick={() => patch({ backgroundId: bg.id as BackgroundId })}
              className={cn(
                "rounded-lg px-3 py-3 text-left transition-colors",
                active
                  ? "bg-accent text-accent-fg"
                  : "bg-raised hover:bg-border",
              )}
            >
              <div className="font-medium">{bg.name}</div>
              <p className={cn("mt-1 text-xs", active ? "text-accent-fg/80" : "text-muted")}>
                {bg.pitch}
              </p>
              {bg.id !== "custom" ? (
                <p className={cn("mt-2 font-mono text-[11px]", active ? "text-accent-fg/70" : "text-subtle")}>
                  {SPECIAL_KEYS.filter((k) => (bg.special[k] ?? 0) > 0)
                    .map((k) => `${k} +${bg.special[k]}`)
                    .join(" · ")}
                </p>
              ) : null}
            </button>
          );
        })}
      </div>
      {draft.backgroundId === "custom" ? (
        <div className="space-y-3 rounded-lg bg-raised p-3">
          <Field label="Custom name">
            <Input
              value={draft.customBackground.name}
              onChange={(e) =>
                patch({
                  customBackground: {
                    ...draft.customBackground,
                    name: e.target.value,
                  },
                })
              }
            />
          </Field>
          <p className="text-xs text-muted">
            SPECIAL spent {customSpent}/{BACKGROUND_SPECIAL_BUDGET} · skills{" "}
            {customSkills}/{BACKGROUND_SKILL_BUDGET}
          </p>
          {SPECIAL_KEYS.map((key) => (
            <div key={key} className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs">{key}</span>
              <StatStepper
                ariaLabel={`Custom ${key}`}
                value={draft.customBackground.special[key]}
                onChange={(n) =>
                  patch({
                    customBackground: {
                      ...draft.customBackground,
                      special: { ...draft.customBackground.special, [key]: n },
                    },
                  })
                }
              />
            </div>
          ))}
          <div className="grid gap-2">
            {SKILL_IDS.map((id) => (
              <div key={id} className="flex items-center justify-between gap-2">
                <span className="text-sm">{SKILL_META[id].name}</span>
                <StatStepper
                  ariaLabel={`Custom ${SKILL_META[id].name}`}
                  value={draft.customBackground.skills[id] ?? 0}
                  onChange={(n) =>
                    patch({
                      customBackground: {
                        ...draft.customBackground,
                        skills: { ...draft.customBackground.skills, [id]: n },
                      },
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FreeStep({
  draft,
  patch,
}: {
  draft: Character;
  patch: (p: Partial<Character>) => void;
}) {
  const spent = sumSpecial(draft.free);
  const remaining = FREE_POINT_BUDGET - spent;
  return (
    <div className="space-y-4">
      <Header
        title="Five free points"
        body="Place +5 wherever you want. They may raise an attribute above 10. The budget is 5 points — the stats themselves have no cap."
      />
      <Badge variant={remaining === 0 ? "ok" : "outline"}>
        {remaining} unspent
      </Badge>
      {SPECIAL_KEYS.map((key) => (
        <div
          key={key}
          className="flex items-center justify-between gap-3 rounded-lg bg-raised px-3 py-2"
        >
          <div>
            <div className="font-mono text-xs tracking-widest text-accent">{key}</div>
            <div className="text-sm">{SPECIAL_META[key].name}</div>
          </div>
          <StatStepper
            ariaLabel={`Free ${key}`}
            value={draft.free[key]}
            disabledPlus={remaining <= 0}
            onChange={(n) => {
              const next = { ...draft.free, [key]: n };
              if (sumSpecial(next) > FREE_POINT_BUDGET && n > draft.free[key]) return;
              patch({ free: next });
            }}
          />
        </div>
      ))}
      <div className="pt-2">
        <Header
          title="Permanent adjust"
          body="Mutations, cyberware, aging, GM fiat. No floor. No ceiling."
        />
        {SPECIAL_KEYS.map((key) => (
          <div
            key={key}
            className="flex items-center justify-between gap-3 py-2"
          >
            <span className="font-mono text-xs">{key}</span>
            <StatStepper
              ariaLabel={`Adjust ${key}`}
              value={draft.adjust[key]}
              onChange={(n) =>
                patch({ adjust: { ...draft.adjust, [key]: n } })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PastStep({
  draft,
  patch,
}: {
  draft: Character;
  patch: (p: Partial<Character>) => void;
}) {
  const derived = derive(draft);
  const educationId = draft.educationId ?? "none";
  const lifeId = draft.lifeId ?? "none";
  const scars = draft.scars ?? [];
  const pnp = characterEngine(draft) === "pnp";

  function toggleScar(id: ScarId) {
    const has = scars.includes(id);
    let next = has ? scars.filter((s) => s !== id) : [...scars, id];
    if (!has && next.length > SCAR_MAX) next = [...next.slice(1)];
    patch({ scars: next });
  }

  return (
    <div className="space-y-8">
      <Header
        title="Past"
        body={
          pnp
            ? "Education and life are how a d100 sheet gets a biography without a background package. They rewrite skill formulas, shift SPECIAL, and can change HP, AP, carry, healing — the whole derived block. Scars cost something and pay something back."
            : "Background is the job. Education and life are how you got there. They rewrite skill formulas, not just add ranks, and they can rewrite HP and other derived stats. Scars are a bill with a refund."
        }
      />
      <p className="text-xs text-muted">
        Path SPECIAL on this sheet:{" "}
        <span className="font-mono text-fg">
          {describeSpecial(derived.pathSpecial)}
        </span>
      </p>

      <PathPicker
        title="Education"
        hint="One. What sat in your head before the campaign."
        items={EDUCATIONS}
        activeId={educationId}
        onPick={(id) => patch({ educationId: id })}
      />

      <PathPicker
        title="Life"
        hint="One. The years that put you on this paper. Stacks with education. Later rewrites win if they touch the same skill."
        items={LIVES}
        activeId={lifeId}
        onPick={(id) => patch({ lifeId: id })}
      />

      <section className="space-y-2">
        <h4 className="font-display text-lg font-semibold">Scars</h4>
        <p className="text-sm text-muted">
          Up to {SCAR_MAX}. Each one hurts and each one pays — a penalty plus a
          benefit, stacked after education and life. A glass eye will override a
          firing-line gun formula.
        </p>
        <p className="text-xs text-muted">
          {scars.length}/{SCAR_MAX} marked
        </p>
        <PathGrid
          items={SCARS}
          isActive={(id) => scars.includes(id as ScarId)}
          danger
          onPick={(id) => toggleScar(id as ScarId)}
        />
      </section>
    </div>
  );
}

function PathPicker<Id extends string>({
  title,
  hint,
  items,
  activeId,
  onPick,
}: {
  title: string;
  hint: string;
  items: PathDef<Id>[];
  activeId: Id;
  onPick: (id: Id) => void;
}) {
  return (
    <section className="space-y-2">
      <h4 className="font-display text-lg font-semibold">{title}</h4>
      <p className="text-sm text-muted">{hint}</p>
      <PathGrid
        items={items}
        isActive={(id) => id === activeId}
        onPick={(id) => onPick(id as Id)}
      />
    </section>
  );
}

function PathGrid<Id extends string>({
  items,
  isActive,
  onPick,
  danger = false,
}: {
  items: PathDef<Id>[];
  isActive: (id: Id) => boolean;
  onPick: (id: Id) => void;
  danger?: boolean;
}) {
  const [q, setQ] = useState("");
  const filtered = items.filter((item) => {
    if (!q.trim()) return true;
    const hay = `${item.name} ${item.summary} ${item.story}`.toLowerCase();
    return hay.includes(q.trim().toLowerCase());
  });
  return (
    <div className="space-y-2">
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={`Filter ${items.length} options`}
        aria-label="Filter paths"
      />
      <div className="grid gap-2 sm:grid-cols-2">
        {filtered.map((item) => (
          <PathCard
            key={item.id}
            active={isActive(item.id)}
            name={item.name}
            summary={item.summary}
            story={item.story}
            special={describeSpecial(item.special)}
            notes={pathNotes(item)}
            danger={danger}
            onClick={() => onPick(item.id)}
          />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-muted">Nothing matches that filter.</p>
      ) : null}
    </div>
  );
}

function PathCard({
  active,
  name,
  summary,
  story,
  special,
  notes,
  danger = false,
  onClick,
}: {
  active: boolean;
  name: string;
  summary: string;
  story: string;
  special: string;
  notes: string[];
  danger?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full rounded-lg px-4 py-3 text-left transition-colors",
        active
          ? danger
            ? "bg-danger text-fg"
            : "bg-accent text-accent-fg"
          : "bg-raised hover:bg-border",
      )}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-medium">{name}</span>
      </div>
      <p
        className={cn(
          "mt-0.5 text-xs leading-snug",
          active ? (danger ? "text-fg/70" : "text-accent-fg/70") : "text-subtle",
        )}
      >
        {summary}
      </p>
      <p
        className={cn(
          "mt-1 text-sm",
          active ? (danger ? "text-fg/85" : "text-accent-fg/80") : "text-muted",
        )}
      >
        {active ? story : story.length > 110 ? `${story.slice(0, 110)}…` : story}
      </p>
      <p
        className={cn(
          "mt-2 font-mono text-[11px]",
          active ? (danger ? "text-fg/70" : "text-accent-fg/70") : "text-subtle",
        )}
      >
        {special}
      </p>
      {notes.length && active ? (
        <ul
          className={cn(
            "mt-1 space-y-0.5 text-xs",
            danger ? "text-fg/75" : "text-accent-fg/75",
          )}
        >
          {notes.map((note, i) => (
            <li key={`${i}-${note}`}>{note}</li>
          ))}
        </ul>
      ) : null}
    </button>
  );
}

function TraitStep({
  draft,
  patch,
}: {
  draft: Character;
  patch: (p: Partial<Character>) => void;
}) {
  const pnp = characterEngine(draft) === "pnp";
  const ids = pnp ? PNP_TRAIT_IDS : D20_TRAIT_IDS;

  function toggle(id: TraitId) {
    const has = draft.traits.includes(id);
    let traits = has
      ? draft.traits.filter((t) => t !== id)
      : [...draft.traits, id];
    if (pnp && !has && traits.length > PNP_TRAIT_MAX) {
      traits = [...traits.slice(1)];
    }
    patch({ traits });
  }

  return (
    <div className="space-y-4">
      <Header
        title="Traits"
        body={
          pnp
            ? "Classic PnP allows two traits. Picking a third replaces the oldest. These use the original d100 effects."
            : "Classic Fallout trait list, converted to d20 numbers (percents ÷ 5). Lifegiver is a perk, not a trait. Pick as many as the table allows — the desk does not cap the count."
        }
      />
      {pnp ? (
        <p className="text-xs text-muted">
          {draft.traits.length}/{PNP_TRAIT_MAX} selected
        </p>
      ) : null}
      <div className="space-y-2">
        {ids.map((id) => {
          const active = draft.traits.includes(id);
          const t = pnp ? PNP_TRAITS[id as PnpTraitId] : TRAITS[id as keyof typeof TRAITS];
          if (!t) return null;
          return (
            <button
              key={id}
              type="button"
              onClick={() => toggle(id)}
              className={cn(
                "w-full rounded-lg px-4 py-3 text-left transition-colors",
                active ? "bg-accent text-accent-fg" : "bg-raised hover:bg-border",
              )}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-medium">{t.name}</span>
                <span className={cn("text-xs", active ? "text-accent-fg/70" : "text-subtle")}>
                  {t.summary}
                </span>
              </div>
              <p className={cn("mt-1 text-sm", active ? "text-accent-fg/80" : "text-muted")}>
                {t.detail}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TagStep({
  draft,
  patch,
}: {
  draft: Character;
  patch: (p: Partial<Character>) => void;
}) {
  const derived = derive(draft);
  const pnp = characterEngine(draft) === "pnp";
  function toggle(id: SkillId) {
    const has = draft.tagged.includes(id);
    let tagged = has
      ? draft.tagged.filter((s) => s !== id)
      : [...draft.tagged, id];
    if (!has && tagged.length > TAG_SKILL_COUNT) {
      tagged = [...tagged.slice(1)];
    }
    patch({ tagged });
  }
  return (
    <div className="space-y-4">
      <Header
        title="Tag skills"
        body={
          pnp
            ? "Three tags, no more, no less in the original rules. Each tagged skill gets +20% and grows twice as fast."
            : "Three tags, +4 each, applied after formulas, background, and traits. Tagging a fourth replaces the oldest."
        }
      />
      <p className="text-xs text-muted">
        {draft.tagged.length}/{TAG_SKILL_COUNT} tagged
      </p>
      <div className="space-y-1">
        {SKILL_IDS.map((id) => {
          const active = draft.tagged.includes(id);
          const row = derived.skills[id];
          return (
            <button
              key={id}
              type="button"
              onClick={() => toggle(id)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-left",
                active ? "bg-accent text-accent-fg" : "hover:bg-raised",
              )}
            >
              <span>
                {SKILL_META[id].name}
                <span className={cn("ml-2 text-xs", active ? "text-accent-fg/70" : "text-subtle")}>
                  {SKILL_META[id].blurb}
                </span>
              </span>
              <span className="font-mono tabular-nums">
                {row.total}
                {pnp ? "%" : ""}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ReviewStep({
  draft,
  patch,
  onSave,
}: {
  draft: Character;
  patch: (p: Partial<Character>) => void;
  onSave: () => void;
}) {
  return (
    <div className="space-y-4">
      <Header
        title="Review"
        body={
          characterEngine(draft) === "pnp"
            ? "Save drops you on Virgin Street. New Reno is the d100 life — housing, families, chems, the Ring."
            : "Derived numbers update from the live SPECIAL. Worn armor feeds AC. Save stores the dossier in this browser."
        }
      />
      <Field label="Notes">
        <Textarea
          rows={4}
          value={draft.notes}
          onChange={(e) => patch({ notes: e.target.value })}
        />
      </Field>
      <Button onClick={onSave} className="w-full">
        <Save />
        {characterEngine(draft) === "pnp" ? "Save and enter New Reno" : "Save to roster"}
      </Button>
    </div>
  );
}

function Header({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-muted">{body}</p>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <Label>{label}</Label>
      {children}
    </label>
  );
}
