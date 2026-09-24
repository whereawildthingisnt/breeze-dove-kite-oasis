import { Button } from "@/components/ui/button";
import type { CityBuilding } from "@/lib/reno/city";
import { npcFor, roomCopy } from "@/lib/reno/street";
import type { DistrictId } from "@/lib/reno/types";
import { millLabel, ZONE_HINT, ZONE_LABEL } from "@/lib/reno/zones";

export function RenoBuilding({
  building,
  night,
  district,
  onClose,
  onWalk,
  onEnter,
  onMill,
}: {
  building: CityBuilding;
  night?: boolean;
  district?: DistrictId;
  onClose: () => void;
  onWalk: () => void;
  onEnter: () => void;
  onMill: () => void;
}) {
  const use = building.abandoned ? "abandoned" : building.use;
  const room = roomCopy(use, Boolean(night), building.abandoned, building.name);
  const npc = npcFor(building.district ?? district ?? "virgin", Boolean(night), use);
  return (
    <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
        {ZONE_LABEL[building.zone]} · {building.abandoned ? "abandoned" : building.use}
      </p>
      <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight">{building.name}</h3>
      <p className="mt-1 font-mono text-[10px] tracking-wide text-subtle uppercase">{ZONE_HINT[building.zone]}</p>
      <p className="mt-2 text-sm text-muted">{building.rumor}</p>
      <p className="mt-2 text-sm text-fg">{building.people}</p>
      <p className="mt-2 text-sm text-muted">{room.body}</p>
      <p className="mt-2 text-sm text-fg">
        {npc.name} is the one on {npc.beat}. {night ? npc.night : npc.day}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button size="sm" onClick={onEnter} className="min-h-11">
          Go in
        </Button>
        <Button size="sm" variant="secondary" onClick={onWalk} className="min-h-11">
          Walk there
        </Button>
        <Button size="sm" variant="secondary" onClick={onMill} className="min-h-11">
          {millLabel(building.abandoned ? "abandoned" : building.use, building.abandoned)}
        </Button>
        <Button size="sm" variant="ghost" onClick={onClose} className="min-h-11">
          Close
        </Button>
      </div>
    </section>
  );
}
