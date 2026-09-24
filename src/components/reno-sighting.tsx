import { Button } from "@/components/ui/button";
import { type HexUnitView } from "@/components/reno-hex-map";
import { RenoTable } from "@/components/reno-table";
import { FOE_TOKEN } from "@/lib/reno/actor";
import type { RenoLife } from "@/lib/reno/types";
import { derive } from "@/lib/special/engine";
import type { Character } from "@/lib/special/types";

export function RenoSighting({
  life,
  character,
  onChoice,
}: {
  life: RenoLife;
  character: Character;
  onChoice: (choice: "fight" | "flee" | "talk") => void;
}) {
  const sight = life.sighting;
  if (!sight) return null;
  const speech = derive(character).skills.speech?.total ?? 0;
  const units: HexUnitView[] = sight.placements.map((p) => {
    const foes = sight.placements.filter((x) => !x.player && !x.ally);
    const allies = sight.placements.filter((x) => x.ally);
    const foeIndex = foes.findIndex((x) => x.id === p.id);
    const allyIndex = allies.findIndex((x) => x.id === p.id);
    const name = p.player
      ? "You"
      : p.ally
        ? (sight.allyNames?.[allyIndex] ?? "Ally")
        : (sight.foeNames[foeIndex] ?? "Them");
    const kind = p.player ? "player" : p.ally ? (sight.allyIds?.[allyIndex] ?? "tough") : (sight.foeIds[foeIndex] ?? "tough");
    return {
      id: p.id,
      q: p.q,
      r: p.r,
      label: name.split(" ")[0] ?? name,
      player: p.player,
      side: p.player ? "player" : p.ally ? "ally" : "foe",
      token: FOE_TOKEN[kind] ?? FOE_TOKEN.tough,
    };
  });

  return (
    <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
        Encounter · {sight.setting} · {sight.lightingLabel}
      </p>
      <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight">
        {sight.spotted ? "You saw them first" : "Ambush"}
      </h3>
      <p className="mt-1 text-sm text-muted">{sight.reason}</p>
      <p className="mt-1 text-sm text-fg">
        {sight.foeNames.join(", ")} on the table.
        {sight.allyNames?.length
          ? ` With you: ${sight.allyNames.join(", ")}. They have their own sheet and they act on sequence.`
          : ""}{" "}
        Green hexes are the way back to the street.
      </p>
      <div className="mt-3">
        <RenoTable board={sight.map} units={units} night={sight.lighting < 0} disabled />
      </div>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Button onClick={() => onChoice("fight")} className="min-h-11">
          Sequence. Fight.
        </Button>
        {sight.spotted ? (
          <Button variant="secondary" onClick={() => onChoice("talk")} className="min-h-11">
            Talk ({speech}% Speech)
          </Button>
        ) : null}
        {sight.spotted ? (
          <Button variant="outline" onClick={() => onChoice("flee")} className="min-h-11">
            Slip the street
          </Button>
        ) : (
          <Button variant="outline" onClick={() => onChoice("fight")} className="min-h-11">
            They already closed. Fight.
          </Button>
        )}
      </div>
    </section>
  );
}
