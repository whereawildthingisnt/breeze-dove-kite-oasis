import { useState } from "react";
import { Button } from "@/components/ui/button";
import { reachableFrom, type HexUnitView } from "@/components/reno-hex-map";
import { RenoTable } from "@/components/reno-table";
import { AIMED_MELEE, AIMED_RANGED, foeOf, playerOf, sideOf, toHitInfo } from "@/lib/reno/combat";
import { FOE_TOKEN } from "@/lib/reno/actor";
import { hexKey } from "@/lib/reno/hex";
import type { BodyPart, CombatMove, CombatState, Combatant } from "@/lib/reno/types";
import { BODY_PARTS } from "@/lib/reno/types";
import { countItem } from "@/lib/special/loadout";
import type { Character } from "@/lib/special/types";
import { cn } from "@/lib/utils";

const MOVES: { id: CombatMove; label: string; hint: string }[] = [
  { id: "advance", label: "Close 1 hex", hint: "1 AP · walk" },
  { id: "sprint-in", label: "Sprint in", hint: "All AP toward" },
  { id: "withdraw", label: "Open 1 hex", hint: "1 AP · back" },
  { id: "sprint-out", label: "Sprint out", hint: "All AP away" },
  { id: "attack", label: "Single", hint: "Weapon AP" },
  { id: "aimed", label: "Aimed", hint: "Extra AP · body part" },
  { id: "burst", label: "Burst", hint: "−20% · extra AP" },
  { id: "crouch", label: "Crouch", hint: "2 AP · +10% guns" },
  { id: "prone", label: "Prone", hint: "2 AP · +25% guns" },
  { id: "stand", label: "Stand", hint: "2–4 AP" },
  { id: "cover", label: "Cover", hint: "1 AP · −30% incoming" },
  { id: "reload", label: "Reload", hint: "2 AP" },
  { id: "defend", label: "Guard", hint: "Leftover AP → AC" },
  { id: "stimpak", label: "Stimpak", hint: "2 AP · 1d10+10" },
  { id: "flee", label: "Flee", hint: "Break off" },
];

function sideLabel(c: Combatant): string {
  const side = sideOf(c);
  if (side === "player") return "You";
  if (side === "ally") return "With you";
  return "Hostile";
}

function Bar({ value, max, tone }: { value: number; max: number; tone: "hp" | "ap" }) {
  const pct = max <= 0 ? 0 : Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-inset">
      <div
        className={cn("h-full rounded-full", tone === "hp" ? "bg-danger" : "bg-accent")}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function RenoCombat({
  combat,
  character,
  onMove,
}: {
  combat: CombatState;
  character: Character;
  onMove: (move: CombatMove, part?: BodyPart, extra?: { q?: number; r?: number; targetId?: string }) => void;
}) {
  const player = playerOf(combat);
  const foe = foeOf(combat);
  const stimpaks = countItem(character.loadout, "stimpak");
  const playerTurn = !combat.result && combat.order[combat.turn] === "player";
  const [aiming, setAiming] = useState(false);
  const melee = player?.weaponSkill === "unarmed" || player?.weaponSkill === "melee";
  const table = melee ? AIMED_MELEE : AIMED_RANGED;
  const tokens = FOE_TOKEN;
  const activeId = combat.order[combat.turn];
  const active = combat.combatants.find((c) => c.id === activeId);
  const units: HexUnitView[] = combat.combatants
    .filter((c) => c.hp > 0 && !c.fled)
    .map((c) => ({
      id: c.id,
      q: c.hexQ,
      r: c.hexR,
      label: c.player ? "You" : c.name.split(" ")[0] ?? c.name,
      player: c.player,
      side: sideOf(c),
      hp: c.hp,
      hpMax: c.hpMax,
      down: c.down,
      token: tokens[c.kind] ?? (c.player ? tokens.player : tokens.tough),
    }));
  const blocked = new Set(
    combat.combatants.filter((c) => c.hp > 0 && !c.fled).map((c) => hexKey(c.hexQ, c.hexR)),
  );
  const steps = player ? Math.max(1, Math.floor(player.ap / (player.stance === "prone" ? 4 : player.stance === "crouching" ? 2 : 1))) : 0;
  const reachable =
    player && combat.map && playerTurn
      ? reachableFrom(combat.map, player.hexQ, player.hexR, Math.min(steps, 6), blocked)
      : undefined;
  const roster = [...combat.combatants].sort((a, b) => {
    const rank = (c: Combatant) => (sideOf(c) === "player" ? 0 : sideOf(c) === "ally" ? 1 : 2);
    return rank(a) - rank(b);
  });

  return (
    <div className="rounded-xl bg-surface p-3 shadow-[0_0_0_1px_rgba(236,234,227,0.08)] sm:p-4">
      <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
        {combat.kind === "boxing" ? "The Ring" : combat.kind === "raid" ? "Raid" : "Street fight"} · round{" "}
        {combat.round} · {combat.hexes} hex · {combat.lightingLabel}
      </p>
      <p className="mt-1 text-xs text-muted">
        {combat.onMap
          ? "The city is paused. Hexes are scaled to the people already standing on this street. Click a hex out there to step. Green hexes leave the fight."
          : "Drag the table to look around. Tap a hex to step, tap a figure to mark them. Green hexes leave the street."}
        {active && !combat.result
          ? sideOf(active) === "player"
            ? " Your sequence."
            : ` ${active.name} (${sideLabel(active)}) is spending this turn.`
          : ""}
      </p>
      <div className={`mt-3 grid gap-3 ${combat.onMap ? "" : "lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.85fr)]"}`}>
      {combat.map && !combat.onMap ? (
        <div>
          <RenoTable
            board={combat.map}
            units={units}
            selectedId={combat.targetId}
            activeId={activeId}
            reachable={reachable}
            night={combat.lighting < 0}
            disabled={!playerTurn || Boolean(combat.result)}
            onHex={(q, r) => {
              onMove("hex-step", undefined, { q, r });
            }}
          />
        </div>
      ) : null}
      <div className="space-y-3">
        {roster.map((c) => (
            <div key={c.id} className="rounded-lg bg-raised px-3 py-3">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-xl leading-none font-semibold">{c.name}</h3>
                <span className="font-mono text-[11px] text-subtle uppercase">{sideLabel(c)}</span>
              </div>
              <p className="mt-1 font-mono text-[11px] text-muted">
                {c.weaponName}
                {c.armorId ? ` · ${c.armorId.replace(/-/g, " ")}` : ""}
              </p>
              <div className="mt-2 space-y-1.5">
                <div className="flex justify-between font-mono text-[11px] text-muted">
                  <span>HP</span>
                  <span className="tabular-nums">
                    {c.hp}/{c.hpMax}
                  </span>
                </div>
                <Bar value={c.hp} max={c.hpMax} tone="hp" />
                <div className="flex justify-between font-mono text-[11px] text-muted">
                  <span>AP</span>
                  <span className="tabular-nums">
                    {c.ap}/{c.apMax}
                  </span>
                </div>
                <Bar value={c.ap} max={c.apMax} tone="ap" />
              </div>
              <p className="mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase">
                AC {c.ac} · DT {c.dt} · DR {c.dr}% · Seq {c.sequence} · ST {c.st} · PE {c.pe} · LK {c.lk}
                {c.down ? " · DOWN" : ""}
                {c.fled ? " · GONE" : ""}
                {c.cover ? ` · cover ${c.cover}` : ""}
                {c.mag > 0 ? ` · mag ${c.loaded}/${c.mag}` : ""}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-wide text-subtle uppercase">
                Unarmed {c.unarmed} · Melee {c.melee} · Guns {c.guns} · MD {c.md}
                {sideOf(c) === "foe" && c.hp <= 0 && !c.fled ? " · gear on the body" : ""}
              </p>
              {sideOf(c) === "foe" && c.hp > 0 && playerTurn ? (
                <Button
                  variant={combat.targetId === c.id ? "default" : "secondary"}
                  size="sm"
                  className="mt-2 min-h-11"
                  onClick={() => onMove("hex-step", undefined, { q: c.hexQ, r: c.hexR, targetId: c.id })}
                >
                  {combat.targetId === c.id ? "Marked" : "Mark"}
                </Button>
              ) : null}
            </div>
        ))}

      {player && foe && playerTurn && !combat.result ? (
        <p className="mt-3 font-mono text-[11px] leading-relaxed text-muted">
          {(() => {
            const info = toHitInfo(combat, player, foe, null, false);
            return info.canFire
              ? `Single ${info.breakdown}${player.fastShot ? " · Fast Shot, no aimed" : ""}`
              : info.reason;
          })()}
        </p>
      ) : null}

      <ol className="mt-3 max-h-28 space-y-1 overflow-auto font-mono text-xs leading-relaxed text-muted">
        {combat.log.slice(-8).map((line, i) => (
          <li key={`${i}-${line}`}>{line}</li>
        ))}
      </ol>

      {combat.result ? (
        <div className="mt-3 space-y-3">
          <p className="font-display text-2xl font-semibold">
            {combat.result === "win" ? "They drop." : combat.result === "flee" ? "You break off." : "You go down."}
          </p>
          <Button className="min-h-11" onClick={() => onMove("defend")}>
            {combat.result === "win" ? "Search the bodies" : combat.result === "flee" ? "Keep moving" : "It's over"}
          </Button>
        </div>
      ) : aiming && player && foe ? (
        <div className="mt-3">
          <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Aimed shot · Fallout 2 parts</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {BODY_PARTS.map((part) => {
              const info = toHitInfo(combat, player, foe, part, false);
              return (
                <Button
                  key={part}
                  variant="secondary"
                  size="sm"
                  disabled={!playerTurn || !info.canFire}
                  onClick={() => {
                    setAiming(false);
                    onMove("aimed", part);
                  }}
                  className="h-auto min-h-11 flex-col items-stretch gap-0 py-2"
                >
                  <span>{table[part].label}</span>
                  <span className="font-mono text-[10px] font-normal tracking-wide text-subtle uppercase">
                    {info.canFire ? `${info.chance}% · ${table[part].hit}` : info.reason ?? "--"}
                  </span>
                </Button>
              );
            })}
          </div>
          <Button variant="ghost" size="sm" className="mt-2" onClick={() => setAiming(false)}>
            Cancel aim
          </Button>
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {MOVES.map((m) => {
            const blocked =
              !playerTurn ||
              (m.id === "stimpak" && stimpaks <= 0) ||
              (m.id === "burst" && (player?.apBurst == null || (player?.loaded ?? 1) <= 0)) ||
              (m.id === "aimed" && (player?.fastShot || player?.apAimed == null)) ||
              (m.id === "reload" && (player?.mag ?? 0) <= 0);
            return (
              <Button
                key={m.id}
                variant={m.id === "attack" ? "default" : "secondary"}
                size="sm"
                disabled={blocked}
                onClick={() => {
                  if (m.id === "aimed") {
                    setAiming(true);
                    return;
                  }
                  onMove(m.id);
                }}
                className="h-auto min-h-11 flex-col items-stretch gap-0 py-2"
              >
                <span>{m.label}</span>
                <span className="font-mono text-[10px] font-normal tracking-wide text-subtle uppercase">
                  {m.hint}
                </span>
              </Button>
            );
          })}
        </div>
      )}
      </div>
      </div>
    </div>
  );
}
