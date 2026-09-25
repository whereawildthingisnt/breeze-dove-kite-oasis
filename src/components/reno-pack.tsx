import { Backpack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoadoutBoard } from "@/components/loadout-board";
import type { RenoAction, RenoLife, StashId } from "@/lib/reno/types";
import { HOUSING_BY_ID, STASH_IDS, STASH_META } from "@/lib/reno/world";
import { ensureLoadout, stackItem } from "@/lib/special/loadout";
import type { Character, Loadout } from "@/lib/special/types";
import { cn } from "@/lib/utils";

function NeedBar({
  label,
  value,
  invert,
}: {
  label: string;
  value: number;
  invert?: boolean;
}) {
  const n = Math.max(0, Math.min(100, value));
  const warn = invert ? n <= 25 : n >= 70;
  return (
    <div>
      <div className="flex justify-between font-mono text-[10px] tracking-wide text-subtle uppercase">
        <span>{label}</span>
        <span className={warn ? "text-danger" : ""}>{Math.round(n)}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-inset">
        <div
          className={cn("h-full rounded-full", warn ? "bg-danger" : "bg-accent")}
          style={{ width: `${n}%` }}
        />
      </div>
    </div>
  );
}

export function RenoPack({
  life,
  character,
  onAction,
  onLoadout,
}: {
  life: RenoLife;
  character: Character;
  onAction: (action: RenoAction) => void;
  onLoadout: (loadout: Loadout) => void;
}) {
  const home = life.housingId ? HOUSING_BY_ID[life.housingId] : null;
  const loadout = ensureLoadout(character.loadout);
  const addictions = STASH_IDS.filter((id) => (life.addicted[id] ?? 0) > 0);
  const stash = STASH_IDS.filter((id) => (life.stash[id] ?? 0) > 0);
  const trader = (character.perks ?? []).includes("masterTrader");
  const meal = trader ? 10 : 12;
  const water = trader ? 3 : 4;

  return (
    <div className="space-y-4">
      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Needs</p>
        <h3 className="font-display mt-1 text-xl font-semibold tracking-tight">The body keeps score</h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <NeedBar label="Hunger" value={life.hunger ?? 0} />
          <NeedBar label="Thirst" value={life.thirst ?? 0} />
          <NeedBar label="Sleep" value={life.fatigue ?? 0} />
          <NeedBar label="Boredom" value={life.boredom ?? 0} />
        </div>
        <p className="mt-3 font-mono text-[10px] tracking-wide text-subtle uppercase">
          Reserve {life.rations ?? 0} meal{(life.rations ?? 0) === 1 ? "" : "s"} · {life.waters ?? 0} water
        </p>
        <p className="mt-1 text-sm text-muted">
          Hunger, thirst, and sleep climb over days. A bar turning red is not a collapse. Strain has to sit
          {(life.strain ?? 0) >= 180 ? " — and it has. Your hands know it." : " before it shows up in a roll."}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button size="sm" className="min-h-11" onClick={() => onAction({ type: "eat" })}>
            {(life.rations ?? 0) > 0 ? `Eat reserve (${life.rations})` : `Eat (${meal})`}
          </Button>
          <Button size="sm" variant="secondary" className="min-h-11" onClick={() => onAction({ type: "drink", kind: "water" })}>
            {(life.waters ?? 0) > 0 ? `Drink reserve (${life.waters})` : `Drink (${water})`}
          </Button>
          <Button size="sm" variant="outline" className="min-h-11" onClick={() => onAction({ type: "stock", kind: "meal" })}>
            Pack meal ({meal})
          </Button>
          <Button size="sm" variant="outline" className="min-h-11" onClick={() => onAction({ type: "stock", kind: "water" })}>
            Pack water ({water})
          </Button>
          <Button size="sm" variant="secondary" className="min-h-11" onClick={() => onAction({ type: "sleep" })}>
            Sleep
          </Button>
        </div>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Assets</p>
        <h3 className="font-display mt-1 text-xl font-semibold tracking-tight">{home ? home.name : "No roof"}</h3>
        <p className="mt-1 text-sm text-muted">
          {home
            ? home.kind === "squat"
              ? `Squat claimed. Converted ${life.squatProgress}%. ${home.note}`
              : `Rented. ${home.rent} caps a week. ${home.note}`
            : "Street and doorways. Rent the Desert Rose or claim a squat."}
        </p>
        <p className="mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase">
          Caps {life.caps} · Heat {Math.round(life.heat)} · Code {Math.round(life.warrant ?? 0)} · Fame {life.fame} · Regard {Math.round(life.regard ?? 0)} · Fear {Math.round(life.fear ?? 0)}
        </p>
      </section>

      {addictions.length ? (
        <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
          <p className="font-mono text-[11px] tracking-[0.22em] text-danger uppercase">Addictions</p>
          <ul className="mt-2 space-y-2">
            {addictions.map((id) => {
              const last = life.lastDose?.[id] ?? 0;
              const dry = life.day - last >= 1;
              return (
                <li key={id} className="flex items-center justify-between gap-2 rounded-lg bg-raised px-3 py-2">
                  <div>
                    <p className="font-medium">{STASH_META[id].name}</p>
                    <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">
                      intensity {life.addicted[id]} · {dry ? "withdrawal" : "dosed today"}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={(life.stash[id] ?? 0) <= 0}
                    onClick={() => onAction({ type: "useStash", stash: id })}
                  >
                    Use ({life.stash[id] ?? 0})
                  </Button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Stash</p>
        <h3 className="font-display mt-1 text-xl font-semibold">Chems and habits</h3>
        {stash.length ? (
          <ul className="mt-3 space-y-2">
            {stash.map((id) => (
              <li key={id} className="flex items-center justify-between gap-2 rounded-lg bg-raised px-3 py-2">
                <p className="font-medium">
                  {STASH_META[id].name}{" "}
                  <span className="font-mono text-[10px] text-subtle uppercase">×{life.stash[id]}</span>
                </p>
                <Button size="sm" variant="secondary" onClick={() => onAction({ type: "useStash", stash: id as StashId })}>
                  Use
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-muted">Empty. Buy on a corner or lift a bag off a table.</p>
        )}
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono flex items-center gap-2 text-[11px] tracking-[0.22em] text-subtle uppercase">
          <Backpack className="size-3.5" /> Equipment
        </p>
        <h3 className="font-display mt-1 text-xl font-semibold">Worn and packed</h3>
        <p className="mt-1 text-sm text-muted">
          Right {stackItem(loadout, loadout.right)?.name ?? "empty"} · Body{" "}
          {stackItem(loadout, loadout.body)?.name ?? "empty"}
        </p>
        <div className="mt-3">
          <LoadoutBoard character={character} compact onChange={onLoadout} />
        </div>
      </section>
    </div>
  );
}
