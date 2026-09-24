import { useState } from "react";
import { ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { spendCost, xpIntoLevel, xpToReach } from "@/lib/reno/advance";
import type { RenoAction, RenoLife } from "@/lib/reno/types";
import { derive } from "@/lib/special/engine";
import { availablePerks } from "@/lib/special/perks";
import { SKILL_META } from "@/lib/special/data";
import { SKILL_IDS, type Character, type PerkId, type SkillId } from "@/lib/special/types";
import { cn } from "@/lib/utils";

export function RenoAdvance({
  life,
  character,
  onAction,
}: {
  life: RenoLife;
  character: Character;
  onAction: (action: RenoAction) => void;
}) {
  const d = derive(character);
  const bar = xpIntoLevel(life.xp ?? 0, character.level);
  const nextAt = xpToReach(character.level + 1);
  const bank = character.skillBank ?? 0;
  const perkBank = character.perkBank ?? 0;
  const perks = availablePerks(character, d);
  const owned = character.perks ?? [];
  const [tagPick, setTagPick] = useState<SkillId | "">("");

  return (
    <div className="space-y-4">
      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Level</p>
        <h3 className="font-display mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight">
          <ArrowUpCircle className="size-5" /> Level {character.level}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {life.xp ?? 0} XP · next at {nextAt} · {d.skillPointsPerLevel} SP a level · perks every{" "}
          {d.perkInterval}
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-inset">
          <div className="h-full rounded-full bg-accent" style={{ width: `${bar.pct}%` }} />
        </div>
        <p className="mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase">
          Bank {bank} SP · {perkBank} perk{perkBank === 1 ? "" : "s"} waiting
        </p>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Skills</p>
        <h3 className="font-display mt-1 text-xl font-semibold">Spend the points</h3>
        <p className="mt-1 text-sm text-muted">
          Tagged skills buy 2% for 1 point until 101%. After that the street gets expensive, Fallout 2 style.
        </p>
        <ul className="mt-3 space-y-1">
          {SKILL_IDS.map((id) => {
            const tagged = (character.tagged ?? []).includes(id);
            const total = d.skills[id]?.total ?? 0;
            const { cost, gain } = spendCost(total, tagged);
            return (
              <li key={id} className="flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-raised">
                <div className="min-w-0">
                  <p className={cn("truncate text-sm", tagged ? "text-fg" : "text-muted")}>
                    {SKILL_META[id].name}
                    {tagged ? " · tag" : ""}
                  </p>
                  <p className="font-mono text-[10px] text-subtle tabular-nums">
                    {total}% · +{gain}% costs {cost}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="min-h-11"
                  disabled={bank < cost}
                  onClick={() => onAction({ type: "spendSkill", skill: id })}
                >
                  +
                </Button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Perks</p>
        <h3 className="font-display mt-1 text-xl font-semibold">
          {perkBank > 0 ? "Choose" : "Earned"}
        </h3>
        {owned.length ? (
          <p className="mt-1 text-sm text-muted">Have: {owned.join(", ")}</p>
        ) : (
          <p className="mt-1 text-sm text-muted">None yet. First perk at level {d.perkInterval}.</p>
        )}
        {perkBank > 0 ? (
          <ul className="mt-3 space-y-2">
            {perks.length ? (
              perks.map((perk) => (
                <li key={perk.id} className="rounded-lg bg-raised px-3 py-2">
                  <p className="font-medium">{perk.name}</p>
                  <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">{perk.requires}</p>
                  <p className="mt-1 text-xs text-muted">{perk.blurb}</p>
                  {perk.id === "tag" ? (
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <select
                        className="min-h-11 rounded-md bg-inset px-2 text-sm"
                        value={tagPick}
                        onChange={(e) => setTagPick(e.target.value as SkillId | "")}
                      >
                        <option value="">Tag which skill</option>
                        {SKILL_IDS.filter((id) => !(character.tagged ?? []).includes(id)).map((id) => (
                          <option key={id} value={id}>
                            {SKILL_META[id].name}
                          </option>
                        ))}
                      </select>
                      <Button
                        size="sm"
                        disabled={!tagPick}
                        onClick={() =>
                          onAction({ type: "pickPerk", perk: perk.id, tagSkill: tagPick || undefined })
                        }
                      >
                        Take Tag!
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      className="mt-2 min-h-11"
                      onClick={() => onAction({ type: "pickPerk", perk: perk.id as PerkId })}
                    >
                      Take
                    </Button>
                  )}
                </li>
              ))
            ) : (
              <p className="text-sm text-muted">Nothing you qualify for yet. Raise SPECIAL or skills.</p>
            )}
          </ul>
        ) : null}
      </section>
    </div>
  );
}
