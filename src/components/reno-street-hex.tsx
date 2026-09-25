import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import { reachableFrom } from "@/components/reno-hex-map";
import { FOE_TOKEN } from "@/lib/reno/actor";
import { playerOf, sideOf } from "@/lib/reno/combat";
import { cutoutTexture } from "@/lib/reno/cutout";
import { woundTexture } from "@/lib/reno/wound";
import { HEX_METERS, hexKey, hexToWorld, isWalkable } from "@/lib/reno/hex";
import type { CombatState } from "@/lib/reno/types";

const geo = new THREE.ShapeGeometry(
  (() => {
    const shape = new THREE.Shape();
    const size = HEX_METERS * 0.9;
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 180) * (60 * i - 30);
      const x = Math.cos(a) * size;
      const y = -Math.sin(a) * size;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  })(),
);

export function StreetHexes({
  combat,
  onHex,
}: {
  combat: CombatState;
  onHex: (q: number, r: number) => void;
}) {
  const board = combat.map;
  const player = playerOf(combat);
  const activeId = combat.order[combat.turn];
  const playerTurn = !combat.result && activeId === "player";
  const manSrc = useTexture("/reno/tokens/ped-man.webp");
  const womanSrc = useTexture("/reno/tokens/ped-woman.webp");
  const copSrc = useTexture("/reno/tokens/cop.webp");
  const junkieSrc = useTexture("/reno/tokens/junkie.webp");
  const gangsterSrc = useTexture("/reno/tokens/gangster.webp");
  const playerSrc = useTexture("/reno/tokens/player.webp");
  const tex = useMemo(
    () => ({
      man: cutoutTexture(manSrc, "hex-man"),
      woman: cutoutTexture(womanSrc, "hex-woman"),
      cop: cutoutTexture(copSrc, "hex-cop"),
      junkie: cutoutTexture(junkieSrc, "hex-junkie"),
      gangster: cutoutTexture(gangsterSrc, "hex-gang"),
      player: cutoutTexture(playerSrc, "hex-player"),
    }),
    [manSrc, womanSrc, copSrc, junkieSrc, gangsterSrc, playerSrc],
  );
  if (!board || combat.originX == null || combat.originZ == null) return null;
  const originX = combat.originX;
  const originZ = combat.originZ;
  const scale = combat.hexScale || HEX_METERS;
  const blocked = new Set(
    combat.combatants.filter((c) => c.hp > 0 && !c.fled).map((c) => hexKey(c.hexQ, c.hexR)),
  );
  const steps = player
    ? Math.max(1, Math.floor(player.ap / (player.stance === "prone" ? 4 : player.stance === "crouching" ? 2 : 1)))
    : 0;
  const reachable =
    player && playerTurn ? reachableFrom(board, player.hexQ, player.hexR, Math.min(steps, 6), blocked) : undefined;
  const byHex = new Map(
    combat.combatants.filter((c) => !c.fled).map((c) => [hexKey(c.hexQ, c.hexR), c]),
  );

  const field = Boolean(combat.field);
  const cells = field
    ? board.cells.filter((cell) => cell.kind === "cover" || cell.kind === "exit")
    : board.cells;

  return (
    <group>
      {cells.map((cell) => {
        const key = hexKey(cell.q, cell.r);
        const at = hexToWorld(cell.q, cell.r, originX, originZ, scale);
        const unit = byHex.get(key);
        const can = Boolean(reachable?.has(key) && cell.kind !== "wall");
        const color =
          cell.kind === "wall"
            ? "#2a241c"
            : cell.kind === "exit"
              ? "#3d6b4f"
              : cell.kind === "cover"
                ? "#6a5434"
                : can
                  ? "#c4a15a"
                  : "#1c1916";
        const showUnit = unit && !(field && unit.player);
        const token = showUnit
          ? unit.player
            ? tex.player
            : tokenOf(tex, FOE_TOKEN[unit.kind] ?? "/reno/tokens/gangster.webp")
          : null;
        const dead = Boolean(showUnit && unit.hp <= 0);
        return (
          <group key={key} position={[at.x, 0, at.z]}>
            <mesh
              rotation-x={-Math.PI / 2}
              position={[0, 0.08, 0]}
              geometry={geo}
              raycast={field ? () => null : undefined}
              onClick={(e) => {
                e.stopPropagation();
                if (field) {
                  if (unit && unit.hp > 0 && !unit.player) onHex(cell.q, cell.r);
                  return;
                }
                if (cell.kind === "wall" || combat.result || !playerTurn) return;
                if (!isWalkable(board, cell.q, cell.r)) return;
                onHex(cell.q, cell.r);
              }}
            >
              <meshBasicMaterial
                color={color}
                transparent
                opacity={field ? (cell.kind === "exit" ? 0.28 : 0.4) : cell.kind === "wall" ? 0.55 : 0.72}
                depthWrite={false}
              />
            </mesh>
            {showUnit && token ? (
              <sprite
                position={[0, dead ? 0.22 : 1.25, 0]}
                scale={dead ? [1.7, 0.42, 1] : [1.05, 2.1, 1]}
                onClick={(e) => {
                  e.stopPropagation();
                  if (field && unit.hp > 0) onHex(unit.hexQ, unit.hexR);
                }}
              >
                <spriteMaterial
                  map={token}
                  transparent
                  alphaTest={0.3}
                  depthWrite={false}
                  color={sideOf(unit) === "ally" ? "#c8e2c2" : "#ffffff"}
                />
              </sprite>
            ) : null}
            {showUnit && (dead || (unit.wounds ?? 0) > 0) ? (
              <sprite position={[0.12, dead ? 0.3 : 1.15, 0.05]} scale={[0.42, 0.42, 1]}>
                <spriteMaterial map={woundTexture()} transparent depthWrite={false} />
              </sprite>
            ) : null}
          </group>
        );
      })}
      {field
        ? combat.combatants
            .filter((c) => !c.player && !c.fled)
            .filter((c) => !cells.some((cell) => cell.q === c.hexQ && cell.r === c.hexR))
            .map((unit) => {
              const at = hexToWorld(unit.hexQ, unit.hexR, originX, originZ, scale);
              const token = tokenOf(tex, FOE_TOKEN[unit.kind] ?? "/reno/tokens/gangster.webp");
              const dead = unit.hp <= 0;
              return (
                <group key={`body-${unit.id}`} position={[at.x, 0, at.z]}>
                  <sprite position={[0, dead ? 0.22 : 1.25, 0]} scale={dead ? [1.7, 0.42, 1] : [1.05, 2.1, 1]}>
                    <spriteMaterial map={token} transparent alphaTest={0.3} depthWrite={false} />
                  </sprite>
                  {dead || (unit.wounds ?? 0) > 0 ? (
                    <sprite position={[0.12, dead ? 0.3 : 1.15, 0.05]} scale={[0.42, 0.42, 1]}>
                      <spriteMaterial map={woundTexture()} transparent depthWrite={false} />
                    </sprite>
                  ) : null}
                </group>
              );
            })
        : null}
    </group>
  );
}

function tokenOf(
  tex: { man: THREE.Texture; woman: THREE.Texture; cop: THREE.Texture; junkie: THREE.Texture; gangster: THREE.Texture; player: THREE.Texture },
  url: string,
) {
  if (url.includes("player")) return tex.player;
  if (url.includes("woman")) return tex.woman;
  if (url.includes("cop")) return tex.cop;
  if (url.includes("junkie")) return tex.junkie;
  return tex.gangster;
}
