import { Button } from "@/components/ui/button";
import type { RenoLife } from "@/lib/reno/types";

export function RenoLoot({
  life,
  onTake,
}: {
  life: RenoLife;
  onTake: (take: boolean) => void;
}) {
  const loot = life.loot;
  if (!loot) return null;
  return (
    <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">After the fight</p>
      <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight">Pockets</h3>
      <p className="mt-1 text-sm text-muted">
        {loot.foeNames.join(", ") || "Them"}. Weapons, armor, and pockets. {loot.summary}
      </p>
      <ul className="mt-3 space-y-1 rounded-lg bg-raised px-3 py-2 text-sm">
        {loot.drops.length ? (
          loot.drops.map((d, i) => (
            <li key={`${d.name}-${i}`} className="flex justify-between gap-2">
              <span>{d.name}</span>
              <span className="font-mono text-[11px] text-subtle tabular-nums">{d.qty}</span>
            </li>
          ))
        ) : (
          <li className="text-muted">Empty pockets.</li>
        )}
      </ul>
      <ol className="mt-3 max-h-40 space-y-1 overflow-auto font-mono text-xs leading-relaxed text-muted">
        {loot.log.slice(-16).map((line, i) => (
          <li key={`${i}-${line}`}>{line}</li>
        ))}
      </ol>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button className="min-h-11" onClick={() => onTake(true)}>
          Take it
        </Button>
        <Button variant="outline" className="min-h-11" onClick={() => onTake(false)}>
          Leave it
        </Button>
      </div>
    </section>
  );
}
