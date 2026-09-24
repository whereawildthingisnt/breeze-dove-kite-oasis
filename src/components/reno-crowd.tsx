import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { cutoutTexture } from "@/lib/reno/cutout";
import {
  SOULS,
  allegianceLabel,
  feudNear,
  ringColor,
  soulGoal,
  troubleOf,
  type SoulDef,
} from "@/lib/reno/ecosystem";
import { HUMAN_M, HUMAN_W, RUNS, runPose } from "@/lib/reno/scale";
import { activityLine } from "@/lib/reno/schedules";
import type { RenoLife } from "@/lib/reno/types";

const TOKEN_URLS = [
  "/reno/tokens/ped-man.webp",
  "/reno/tokens/ped-woman.webp",
  "/reno/tokens/cop.webp",
  "/reno/tokens/junkie.webp",
  "/reno/tokens/gangster.webp",
  "/reno/tokens/tourist-ncr.webp",
  "/reno/tokens/tourist-traveler.webp",
  "/reno/tokens/expat.webp",
  "/reno/tokens/guide.webp",
  "/reno/tokens/host.webp",
  "/reno/tokens/floor.webp",
  "/reno/tokens/driver.webp",
  "/reno/tokens/backpacker.webp",
];

export interface StreetContact {
  x: number;
  z: number;
  reason: string;
  surprise: boolean;
  cause: "feud" | "hunt" | "crime";
  foes: Array<{ id: string; name: string; kind: string; x: number; z: number }>;
  allies: Array<{ id: string; name: string; kind: string; x: number; z: number }>;
}

function dist(ax: number, az: number, bx: number, bz: number) {
  return Math.hypot(ax - bx, az - bz);
}

export function StreetCrowd({
  lifeRef,
  player,
  pausedRef,
  hiddenRef,
  onContact,
  onTalk,
  onNear,
}: {
  lifeRef: React.RefObject<RenoLife>;
  player: React.RefObject<{ x: number; z: number }>;
  pausedRef: React.RefObject<boolean>;
  hiddenRef: React.RefObject<Set<string>>;
  onContact: (hit: StreetContact) => void;
  onTalk: (who: { id: string; name: string }) => void;
  onNear: (line: string) => void;
}) {
  const maps = useTexture(TOKEN_URLS);
  const cut = useMemo(() => {
    const list = (Array.isArray(maps) ? maps : [maps]) as THREE.Texture[];
    const rec: Record<string, THREE.Texture> = {};
    TOKEN_URLS.forEach((url, i) => {
      rec[url] = cutoutTexture(list[i]!, url);
    });
    return rec;
  }, [maps]);
  const group = useRef<THREE.Group>(null);
  const pos = useRef<Record<string, { x: number; z: number }>>({});
  const farStamp = useRef<Record<string, number>>({});
  const acc = useRef(0);
  const nearAcc = useRef(0);
  const lock = useRef(0);

  useFrame((_, dt) => {
    const life = lifeRef.current;
    if (!life) return;
    const paused = pausedRef.current;
    const px = player.current.x;
    const pz = player.current.z;
    const spots = new Map<string, { x: number; z: number }>();
    const g = group.current;
    const now = performance.now() / 1000;
    SOULS.forEach((soul, i) => {
      const gone = (life.absent?.[soul.id] ?? 0) > life.day;
      const child = g?.children[i] as THREE.Group | undefined;
      if (gone || hiddenRef.current?.has(soul.id)) {
        if (child) child.visible = false;
        return;
      }
      let cur = pos.current[soul.id];
      const goal = soulGoal(soul, life, px, pz);
      if (!cur) cur = { x: soul.home.x, z: soul.home.z };
      const ride = soul.ride ? RUNS.find((r) => r.id === soul.ride) : undefined;
      if (ride) {
        const p = runPose(ride, now);
        cur = { x: p.x + 0.45, z: p.z };
      } else {
        const hourKey = life.day * 24 + life.hour;
        const near =
          dist(cur.x, cur.z, px, pz) < 48 ||
          dist(goal.x, goal.z, px, pz) < 48 ||
          dist(soul.home.x, soul.home.z, px, pz) < 48;
        const chasing = dist(goal.x, goal.z, px, pz) < 2.2 && soul.allegiance !== "citizen";
        if (!near) {
          if (farStamp.current[soul.id] !== hourKey) {
            cur = { x: goal.x, z: goal.z };
            farStamp.current[soul.id] = hourKey;
          }
        } else {
          const dx = goal.x - cur.x;
          const dz = goal.z - cur.z;
          const d = Math.hypot(dx, dz);
          const stop = chasing ? 4.6 : 0.35;
          if (!paused && d > stop) {
            const step = Math.min(d - (chasing ? 4.4 : 0), (soul.allegiance === "law" || soul.blade ? 3.1 : 2.4) * dt);
            if (step > 0) {
              cur.x += (dx / d) * step;
              cur.z += (dz / d) * step;
            }
          }
        }
      }
      pos.current[soul.id] = cur;
      spots.set(soul.id, cur);
      if (child) {
        child.visible = true;
        child.position.set(cur.x, 0, cur.z);
        const bob = paused ? 0 : Math.sin(performance.now() / 280 + i) * 0.04;
        const sprite = child.children[1] as THREE.Sprite | undefined;
        if (sprite) sprite.position.y = HUMAN_M / 2 + bob;
      }
    });

    acc.current += dt;
    if (!paused && acc.current > 0.45 && performance.now() > lock.current && !life.insideId) {
      acc.current = 0;
      const hit = pickContact(life, px, pz, spots);
      if (hit) {
        lock.current = performance.now() + 8000;
        onContact(hit);
      }
    }
    nearAcc.current += dt;
    if (nearAcc.current > 0.35) {
      nearAcc.current = 0;
      let best: { soul: SoulDef; d: number } | null = null;
      for (const soul of SOULS) {
        const s = spots.get(soul.id);
        if (!s) continue;
        const d = dist(px, pz, s.x, s.z);
        if (d < 12 && (!best || d < best.d)) best = { soul, d };
      }
      onNear(
        best
          ? `${best.soul.name} · ${allegianceLabel(best.soul)}: ${activityLine(best.soul, life)}`
          : "Tourists, locals on the cut, families, police. Click someone. They are on a schedule.",
      );
    }
  });

  return (
    <group ref={group}>
      {SOULS.map((soul) => (
        <group key={soul.id} position={[soul.home.x, 0, soul.home.z]}>
          <mesh rotation-x={-Math.PI / 2} position={[0, 0.04, 0]}>
            <circleGeometry args={[0.42, 16]} />
            <meshBasicMaterial color={ringColor(soul)} transparent opacity={0.9} depthWrite={false} />
          </mesh>
          <sprite
            position={[0, HUMAN_M / 2, 0]}
            scale={[HUMAN_W, HUMAN_M, 1]}
            onClick={(e) => {
              e.stopPropagation();
              onTalk({ id: soul.id, name: soul.name });
            }}
          >
            <spriteMaterial
              map={cut[soul.sprite] ?? cut[TOKEN_URLS[0]!]}
              transparent
              alphaTest={0.35}
              depthWrite={false}
            />
          </sprite>
        </group>
      ))}
    </group>
  );
}

function pickContact(
  life: RenoLife,
  px: number,
  pz: number,
  spots: Map<string, { x: number; z: number }>,
): StreetContact | null {
  const toBody = (soul: SoulDef) => {
    const s = spots.get(soul.id)!;
    return { id: soul.id, name: soul.name, kind: soul.kind, x: s.x, z: s.z };
  };
  const feud = feudNear(life, px, pz, spots);
  if (feud && feud.foes.length) {
    return {
      x: feud.x,
      z: feud.z,
      reason: feud.reason,
      surprise: false,
      cause: "feud",
      foes: feud.foes.map(toBody),
      allies: feud.allies.map(toBody),
    };
  }
  let best: { soul: SoulDef; d: number; reason: string } | null = null;
  for (const soul of SOULS) {
    const s = spots.get(soul.id);
    if (!s) continue;
    const d = dist(px, pz, s.x, s.z);
    const reason = troubleOf(soul, life, d);
    if (!reason) continue;
    if (!best || d < best.d) best = { soul, d, reason };
  }
  if (!best) return null;
  const s = spots.get(best.soul.id)!;
  return {
    x: s.x,
    z: s.z,
    reason: best.reason,
    surprise: best.d > 4,
    cause: best.soul.allegiance === "law" ? "crime" : "hunt",
    foes: [toBody(best.soul)],
    allies: [],
  };
}
