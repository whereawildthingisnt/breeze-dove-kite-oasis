import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { CityBuilding } from "@/lib/reno/city";
import { npcFor, remember, roomCopy } from "@/lib/reno/street";
import type { RenoLife } from "@/lib/reno/types";
import { clockLabel, DISTRICT_BY_ID } from "@/lib/reno/world";
import { revueOn } from "@/lib/reno/revue";
import { DOOR_H, HUMAN_M } from "@/lib/reno/scale";
import { cn } from "@/lib/utils";

const TOKEN: Record<string, string> = {
  clerk: "/reno/tokens/ped-woman.webp",
  lot: "/reno/tokens/ped-woman.webp",
  tout: "/reno/tokens/ped-man.webp",
  soldato: "/reno/tokens/gangster.webp",
  cop: "/reno/tokens/cop.webp",
  courier: "/reno/tokens/ped-man.webp",
  dealer: "/reno/tokens/junkie.webp",
  bartender: "/reno/tokens/velvet.webp",
  dancer: "/reno/tokens/lace.webp",
  mechanic: "/reno/tokens/ped-man.webp",
};

const REELS = ["7", "BAR", "BELL", "CHERRY"];

function reelFace(life: RenoLife, col: number) {
  const mins = life.hour * 60 + (life.minute ?? 0);
  return REELS[(mins + col * 5) % REELS.length]!;
}

export function RenoInterior({
  building,
  life,
  night,
  busy,
  onAct,
  onLinger,
  onPrivate,
  onExit,
}: {
  building: CityBuilding;
  life: RenoLife;
  night: boolean;
  busy?: boolean;
  onAct: (act: "talk" | "lean" | "bribe" | "shake" | "tip" | "door" | "deliver") => void;
  onLinger: () => void;
  onPrivate: (dancer: string) => void;
  onExit: () => void;
}) {
  const use = building.abandoned ? "abandoned" : building.use;
  const show = use === "club" || use === "bar" || use === "casino";
  const npc = npcFor(building.district ?? life.district, night, use);
  const mem = remember(life.npcMemory, npc.id);
  const room = roomCopy(use, night, building.abandoned, building.name);
  const depth = building.depth ?? Math.min(11, building.width * 0.62);
  const planW = Math.max(120, Math.min(320, building.width * 10));
  const planH = Math.max(72, Math.min(200, depth * 10));
  const personPx = Math.round((HUMAN_M / DOOR_H) * 64);
  const job = life.job;
  const [seat, setSeat] = useState<string | null>(null);
  const [look, setLook] = useState<"stage" | "machine" | "booth">(use === "casino" ? "machine" : "stage");
  const act = revueOn(building.district, life.hour);
  const paid = life.privateShows?.[act.id] ?? 0;
  const nextPrice = act.prices[Math.min(paid, act.prices.length - 1)]!;
  const publicFrame = act.public[Math.floor((life.hour * 60 + (life.minute ?? 0)) / 10) % act.public.length]!;
  const privateFrame = paid > 0 ? act.private[Math.min(paid, act.private.length) - 1]! : null;
  const lookingAtStage = Boolean(seat && look !== "machine" && look !== "booth");
  const machine = use === "casino" && seat?.startsWith("slot") && look === "machine";
  const booth = look === "booth";

  function sit(next: string) {
    setSeat(next);
    if (next.startsWith("slot")) setLook("machine");
    else setLook("stage");
  }

  return (
    <div className={`reno-room ${night ? "reno-room-night" : "reno-room-day"} reno-room-${use}`}>
      <p className="font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">{room.kicker}</p>
      <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight">{building.name}</h3>
      <p className="mt-1 font-mono text-[10px] tracking-wide text-subtle uppercase">{clockLabel(life)}</p>
      <p className="mt-2 text-sm text-muted">{room.body}</p>

      {show ? (
        <div className="mt-3 grid gap-3 sm:grid-cols-[11rem_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">Room</p>
            <div className="mt-1 grid gap-1 rounded-md bg-black/50 p-2">
              <button
                type="button"
                onClick={() => sit("rail")}
                className={cn(
                  "rounded-sm px-2 py-2 text-left font-mono text-[10px] tracking-wide uppercase",
                  seat === "rail" ? "bg-accent text-accent-fg" : "bg-white/10 text-fg",
                )}
              >
                Stage
                {seat === "rail" ? " · you" : ""}
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeat("booth");
                  setLook("booth");
                }}
                className={cn(
                  "rounded-sm px-2 py-2 text-left font-mono text-[10px] tracking-wide uppercase",
                  seat === "booth" ? "bg-accent text-accent-fg" : "bg-white/10 text-fg",
                )}
              >
                Booth
                {seat === "booth" ? " · you" : ""}
              </button>
              <div className="grid grid-cols-3 gap-1">
                {use === "casino"
                  ? [0, 1, 2].map((i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => sit(`slot-${i}`)}
                        className={cn(
                          "rounded-sm px-1 py-3 font-mono text-[9px] uppercase",
                          seat === `slot-${i}` ? "bg-accent text-accent-fg" : "bg-white/10 text-fg",
                        )}
                      >
                        Slot
                      </button>
                    ))
                  : [0, 1, 2].map((i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => sit("stool")}
                        className={cn(
                          "rounded-sm px-1 py-3 font-mono text-[9px] uppercase",
                          seat === "stool" ? "bg-accent text-accent-fg" : "bg-white/10 text-fg",
                        )}
                      >
                        Bar
                      </button>
                    ))}
              </div>
              <p className="px-1 pt-1 text-[10px] text-muted">
                {seat === "rail"
                  ? "At the rail. Public set."
                  : seat === "stool"
                    ? "On a stool. The stage is past the bottles."
                    : seat === "booth"
                      ? "In the booth. Private steps cost more as they go."
                      : seat?.startsWith("slot")
                        ? "In a chair. The machine is the view."
                        : "Pick a seat. The doorway does not count."}
              </p>
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                {machine ? "Your machine" : booth ? `Booth · ${act.name}` : `Stage · ${act.name}`}
              </p>
              {use === "casino" && seat?.startsWith("slot") ? (
                <div className="flex gap-1">
                  <Button size="sm" variant={look === "machine" ? "secondary" : "ghost"} onClick={() => setLook("machine")}>
                    Machine
                  </Button>
                  <Button size="sm" variant={look === "stage" ? "secondary" : "ghost"} onClick={() => setLook("stage")}>
                    Stage
                  </Button>
                </div>
              ) : null}
            </div>
            <div className="mt-1 flex h-52 items-end justify-center overflow-hidden rounded-md bg-[#120c10]">
              {!seat ? (
                <p className="px-4 text-center text-sm text-muted">Sit down. Then the room has a view.</p>
              ) : machine ? (
                <div className="mb-6 flex gap-2">
                  {[0, 1, 2].map((col) => (
                    <div
                      key={col}
                      className="flex h-24 w-16 items-center justify-center rounded-sm bg-[#1c1612] font-display text-xl font-semibold text-fg shadow-[inset_0_0_0_1px_rgba(236,234,227,0.16)]"
                    >
                      {reelFace(life, col)}
                    </div>
                  ))}
                </div>
              ) : booth ? (
                privateFrame ? (
                  <img
                    src={privateFrame}
                    alt=""
                    className="h-full w-auto object-contain"
                    style={{ filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.55))" }}
                  />
                ) : (
                  <p className="px-4 text-center text-sm text-muted">The booth stays dark until you pay the first step.</p>
                )
              ) : (
                <img
                  src={publicFrame}
                  alt=""
                  className="h-full w-auto object-contain"
                  style={{ filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.55))" }}
                />
              )}
            </div>
            {seat && lookingAtStage && !machine ? (
              <p className="mt-1 text-xs text-muted">The pose moves when the clock does. Pass time and the set changes.</p>
            ) : null}
            {booth ? (
              <p className="mt-1 text-xs text-muted">
                Step {paid} of {act.private.length}. Next is {nextPrice} caps.
                {paid > 0 ? ` ${act.steps[Math.min(paid, act.steps.length) - 1]}` : ""}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <div
          className="relative mt-3 overflow-hidden rounded-md bg-bg/70"
          style={{ width: planW, height: planH, maxWidth: "100%" }}
        >
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1a120e]" style={{ width: 18, height: 64 }} />
          <img
            src={TOKEN[npc.role] ?? TOKEN.clerk}
            alt=""
            className="absolute bottom-0 object-contain"
            style={{ height: personPx, left: "58%", filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.45))" }}
          />
        </div>
      )}

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
        <Button size="sm" className="min-h-11" disabled={busy} onClick={onLinger}>
          Pass half an hour
        </Button>
        {show ? (
          <Button
            size="sm"
            variant="secondary"
            className="min-h-11"
            disabled={busy}
            onClick={() => {
              setSeat("booth");
              setLook("booth");
              onPrivate(act.id);
            }}
          >
            Private step · {nextPrice}
          </Button>
        ) : null}
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
          Pay the code
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
