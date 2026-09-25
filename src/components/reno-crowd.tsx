import { Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
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
import { weatherAt, type Weather } from "@/lib/reno/weather";
import { activityLine } from "@/lib/reno/schedules";
import { isNight } from "@/lib/reno/world";
import { zoneAt } from "@/lib/reno/zones";
import type { RenoLife, StreetCorpse } from "@/lib/reno/types";
import { woundTexture } from "@/lib/reno/wound";

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
  "/reno/tokens/velvet.webp",
  "/reno/tokens/chrome.webp",
  "/reno/tokens/fringe.webp",
  "/reno/tokens/emerald.webp",
  "/reno/tokens/lace.webp",
  "/reno/tokens/burgundy.webp",
  "/reno/tokens/player.webp",
  "/reno/dance/nia/a.webp",
  "/reno/dance/mei/a.webp",
  "/reno/dance/luz/a.webp",
  "/reno/dance/amira/a.webp",
  "/reno/dance/ines/a.webp",
  "/reno/dance/ines/b.webp",
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
  const chatAcc = useRef(0);
  const chatsRef = useRef<NpcChat[]>([]);
  const chatNodes = useRef<Record<string, THREE.Group | null>>({});
  const [chats, setChats] = useState<NpcChat[]>([]);

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
        const chasing =
          dist(goal.x, goal.z, px, pz) < 2.2 &&
          (soul.allegiance !== "citizen" || soul.role === "dancer" || soul.role === "walker");
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
          const wx = weatherAt(life.day, life.hour);
          const drag = wx === "storm" ? 0.55 : wx === "rain" ? 0.72 : wx === "dust" ? 0.84 : wx === "wind" ? 0.9 : 1;
          if (!paused && d > stop) {
            const step = Math.min(d - (chasing ? 4.4 : 0), (soul.allegiance === "law" || soul.blade ? 3.1 : 2.4) * drag * dt);
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
          : "Tourists, locals on the cut, families. No police. Click someone. They are on a schedule.",
      );
    }

    for (const chat of chatsRef.current) {
      const node = chatNodes.current[chat.key];
      const a = spots.get(chat.a);
      const b = spots.get(chat.b);
      if (!node || !a || !b) continue;
      node.position.set((a.x + b.x) / 2, HUMAN_M + 0.55, (a.z + b.z) / 2);
      node.visible = dist(px, pz, node.position.x, node.position.z) < 20;
    }
    chatAcc.current += dt;
    if (chatAcc.current > 0.45) {
      chatAcc.current = 0;
      const next = life.insideId ? [] : nearbyTalk(spots, px, pz, life.hour, weatherAt(life.day, life.hour));
      const prev = chatsRef.current;
      const changed =
        next.length !== prev.length || next.some((n, i) => n.key !== prev[i]?.key || n.topic !== prev[i]?.topic);
      if (changed) {
        chatsRef.current = next;
        setChats(next);
      }
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
      {chats.map((chat) => (
        <group
          key={chat.key}
          ref={(node) => {
            chatNodes.current[chat.key] = node;
          }}
        >
          <Html center distanceFactor={8} zIndexRange={[6, 0]} style={{ pointerEvents: "none" }}>
            <span className="block rounded-sm bg-black/75 px-1 py-px font-mono text-[9px] leading-none whitespace-nowrap text-[#f4efe6]">
              {chat.topic}
            </span>
          </Html>
        </group>
      ))}
      <StreetBodies lifeRef={lifeRef} cut={cut} />
    </group>
  );
}

function StreetBodies({
  lifeRef,
  cut,
}: {
  lifeRef: React.RefObject<RenoLife>;
  cut: Record<string, THREE.Texture>;
}) {
  const sig = useRef("");
  const [bodies, setBodies] = useState<StreetCorpse[]>([]);
  useFrame(() => {
    const list = lifeRef.current?.corpses ?? [];
    const key = list.map((b) => b.id).join(",");
    if (key === sig.current) return;
    sig.current = key;
    setBodies(list.map((b) => ({ ...b })));
  });
  const holes = useMemo(() => woundTexture(), []);
  return (
    <>
      {bodies.map((body) => (
        <group key={body.id} position={[body.x, 0, body.z]}>
          <sprite position={[0, 0.28, 0]} scale={[HUMAN_M, 0.42, 1]}>
            <spriteMaterial
              map={cut[body.sprite] ?? cut["/reno/tokens/gangster.webp"]}
              transparent
              alphaTest={0.35}
              depthWrite={false}
            />
          </sprite>
          {Array.from({ length: Math.min(3, body.wounds) }, (_, i) => (
            <sprite key={i} position={[-0.35 + i * 0.28, 0.34, 0.04]} scale={[0.28, 0.28, 1]}>
              <spriteMaterial map={holes} transparent depthWrite={false} />
            </sprite>
          ))}
        </group>
      ))}
    </>
  );
}

function nearbyTalk(
  spots: Map<string, { x: number; z: number }>,
  px: number,
  pz: number,
  hour: number,
  weather: Weather,
): NpcChat[] {
  const near: Array<{ soul: SoulDef; x: number; z: number }> = [];
  for (const soul of SOULS) {
    const s = spots.get(soul.id);
    if (!s) continue;
    if (dist(px, pz, s.x, s.z) > 22) continue;
    near.push({ soul, x: s.x, z: s.z });
  }
  near.sort((a, b) => dist(px, pz, a.x, a.z) - dist(px, pz, b.x, b.z));
  const used = new Set<string>();
  const out: NpcChat[] = [];
  for (let i = 0; i < near.length; i++) {
    const a = near[i]!;
    if (used.has(a.soul.id)) continue;
    let best: { soul: SoulDef; d: number } | null = null;
    for (let j = 0; j < near.length; j++) {
      if (i === j) continue;
      const b = near[j]!;
      if (used.has(b.soul.id)) continue;
      const d = dist(a.x, a.z, b.x, b.z);
      if (d > 2.6) continue;
      if (!best || d < best.d) best = { soul: b.soul, d };
    }
    if (!best) continue;
    used.add(a.soul.id);
    used.add(best.soul.id);
    const key = a.soul.id < best.soul.id ? `${a.soul.id}:${best.soul.id}` : `${best.soul.id}:${a.soul.id}`;
    out.push({ key, a: a.soul.id, b: best.soul.id, topic: chatterTopic(a.soul, best.soul, hour, weather) });
    if (out.length >= 5) break;
  }
  return out;
}

function chatterTopic(a: SoulDef, b: SoulDef, hour: number, weather: Weather): string {
  let pool: string[];
  if (a.gang && b.gang && a.gang !== b.gang) pool = ["the feud", "turf", "a name"];
  else if (a.gang && a.gang === b.gang) pool = ["the take", "a drop", "the family"];
  else if (a.role === "police" || b.role === "police") pool = ["a sheet", "the beat", "heat"];
  else if (a.role === "dancer" || b.role === "dancer") pool = ["caps", "a dance", "the rail"];
  else if (a.role === "walker" || b.role === "walker") pool = ["a rate", "the hour", "the stairs"];
  else if (a.role === "dealer" || b.role === "dealer") pool = ["jet", "a buyer", "the stash"];
  else if (a.role === "courier" || b.role === "courier" || a.role === "collector" || b.role === "collector")
    pool = ["a package", "what they owe", "the drop"];
  else if (a.allegiance === "wild" || b.allegiance === "wild") pool = ["the graves", "the glow"];
  else if (a.role === "tourist" || b.role === "tourist" || a.role === "guest" || b.role === "guest")
    pool = ["the train", "a room", "caps"];
  else if (a.role === "host" || b.role === "host" || a.role === "guide" || b.role === "guide")
    pool = ["the stool", "a door", "the cut"];
  else pool = ["the shift", "rent", "the block", "a drink"];
  if (weather === "storm") pool = ["the storm", "staying in", ...pool];
  else if (weather === "rain") pool = ["the rain", "the awning", ...pool];
  else if (weather === "dust") pool = ["the dust", "the grit", ...pool];
  else if (weather === "wind") pool = ["the wind", "the signs", ...pool];
  const seed = chatterHash(a.id, b.id, Math.floor(hour / 2));
  return pool[seed % pool.length]!;
}

function chatterHash(a: string, b: string, n: number): number {
  const s = a < b ? a + b : b + a;
  let h = n + 1;
  for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0;
  return h;
}

interface NpcChat {
  key: string;
  a: string;
  b: string;
  topic: string;
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
    const spotZone = zoneAt(s.x, s.z);
    if (spotZone === "strip" && (soul.blade || !isNight(life))) continue;
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
