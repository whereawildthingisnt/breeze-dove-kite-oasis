import { Button } from "@/components/ui/button";
import type { CityBuilding } from "@/lib/reno/city";
import { npcFor, remember, roomCopy } from "@/lib/reno/street";
import type { RenoLife } from "@/lib/reno/types";
import { DISTRICT_BY_ID } from "@/lib/reno/world";
import { DOOR_H, HUMAN_M } from "@/lib/reno/scale";

const TOKEN: Record<string, string> = {
  clerk: "/reno/tokens/ped-woman.webp",
  lot: "/reno/tokens/ped-woman.webp",
  tout: "/reno/tokens/ped-man.webp",
  soldato: "/reno/tokens/gangster.webp",
  cop: "/reno/tokens/cop.webp",
  courier: "/reno/tokens/ped-man.webp",
  dealer: "/reno/tokens/junkie.webp",
  bartender: "/reno/tokens/ped-woman.webp",
  mechanic: "/reno/tokens/ped-man.webp",
};

export function RenoInterior({
  building,
  life,
  night,
  busy,
  onAct,
  onExit,
}: {
  building: CityBuilding;
  life: RenoLife;
  night: boolean;
  busy?: boolean;
  onAct: (act: "talk" | "lean" | "bribe" | "shake" | "tip" | "door" | "deliver") => void;
  onExit: () => void;
}) {
  const use = building.abandoned ? "abandoned" : building.use;
  const npc = npcFor(building.district ?? life.district, night, use);
  const mem = remember(life.npcMemory, npc.id);
  const room = roomCopy(use, night, building.abandoned, building.name);
  const depth = building.depth ?? Math.min(11, building.width * 0.62);
  const planW = Math.max(120, Math.min(320, building.width * 10));
  const planH = Math.max(72, Math.min(200, depth * 10));
  const personPx = Math.round((HUMAN_M / DOOR_H) * 64);
  const job = life.job;

  return (
    <div className={`reno-room ${night ? "reno-room-night" : "reno-room-day"} reno-room-${use}`}>
      <p className="font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">{room.kicker}</p>
      <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight">{building.name}</h3>
      <p className="mt-2 text-sm text-muted">{room.body}</p>
      <div
        className="relative mt-3 overflow-hidden rounded-md bg-bg/70"
        style={{ width: planW, height: planH, maxWidth: "100%" }}
      >
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1a120e]"
          style={{ width: 18, height: 64 }}
        />
        <img
          src={TOKEN[npc.role] ?? TOKEN.clerk}
          alt=""
          className="absolute bottom-0 object-contain"
          style={{ height: personPx, left: "58%", filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.45))" }}
        />
      </div>
      <div className="mt-3 flex items-end gap-3">
        <img
          src={TOKEN[npc.role] ?? TOKEN.clerk}
          alt=""
          className="h-28 w-auto object-contain"
          style={{ filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.45))" }}
        />
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold">{npc.name}</p>
          <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">
            {npc.role} · {npc.beat}
            {mem.last ? ` · remembers: you ${mem.last}` : ""}
          </p>
          <p className="mt-1 text-sm text-fg">{night ? npc.night : npc.day}</p>
        </div>
      </div>
      {job ? (
        <p className="mt-3 text-sm text-muted">
          Carrying <span className="text-fg">{job.item}</span> for {job.giver}. Deliver at{" "}
          {DISTRICT_BY_ID[job.to]?.name ?? job.to}. {job.blurb}
        </p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">
        <Button size="sm" className="min-h-11" disabled={busy} onClick={() => onAct("talk")}>
          Talk
        </Button>
        <Button size="sm" variant="secondary" className="min-h-11" disabled={busy} onClick={() => onAct("lean")}>
          Lean
        </Button>
        <Button size="sm" variant="secondary" className="min-h-11" disabled={busy} onClick={() => onAct("door")}>
          Work the door
        </Button>
        <Button size="sm" variant="outline" className="min-h-11" disabled={busy} onClick={() => onAct("bribe")}>
          Bribe
        </Button>
        <Button size="sm" variant="outline" className="min-h-11" disabled={busy} onClick={() => onAct("shake")}>
          Shake down
        </Button>
        <Button size="sm" variant="outline" className="min-h-11" disabled={busy} onClick={() => onAct("tip")}>
          Tip a cop
        </Button>
        <Button size="sm" variant="secondary" className="min-h-11" disabled={busy || !job} onClick={() => onAct("deliver")}>
          Deliver
        </Button>
        <Button size="sm" variant="ghost" className="min-h-11" disabled={busy} onClick={onExit}>
          Step outside
        </Button>
      </div>
    </div>
  );
}
