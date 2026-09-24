import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { CityBlocks } from "@/components/reno-city-blocks";
import { StreetCrowd, type StreetContact } from "@/components/reno-crowd";
import type { StreetActor } from "@/lib/reno/interact";
import { StreetHexes } from "@/components/reno-street-hex";
import {
  BUILDING_BY_ID,
  CITY_POPULATION,
  hourSky,
  nearestDistrict,
  zoneAt,
} from "@/lib/reno/city";
import { createCityAmbience } from "@/lib/reno/ambience";
import { cutoutTexture } from "@/lib/reno/cutout";
import { HUMAN_M, HUMAN_W } from "@/lib/reno/scale";
import type { DistrictId, RenoLife } from "@/lib/reno/types";
import { DISTRICT_BY_ID, isNight } from "@/lib/reno/world";
import { dangerOf, ZONE_HINT, ZONE_LABEL } from "@/lib/reno/zones";

const SPEED = 16;
const TURN = 2.4;

type Keys = Set<string>;

function useHeldKeys(injected: React.MutableRefObject<Set<string> | null>) {
  const held = useRef<Keys>(new Set());
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      held.current.add(e.code);
    };
    const up = (e: KeyboardEvent) => {
      held.current.delete(e.code);
    };
    const clear = () => held.current.clear();
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", clear);
    document.addEventListener("visibilitychange", clear);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", clear);
      document.removeEventListener("visibilitychange", clear);
    };
  }, []);
  return () => {
    if (injected.current) return injected.current;
    return held.current;
  };
}

function useCityAmbience(night: boolean, ducked: boolean) {
  const api = useRef<ReturnType<typeof createCityAmbience> | null>(null);
  const [on, setOn] = useState(true);
  const nightRef = useRef(night);
  const onRef = useRef(on);
  const duckedRef = useRef(ducked);
  nightRef.current = night;
  onRef.current = on;
  duckedRef.current = ducked;

  useEffect(() => {
    const unlock = () => {
      if (!api.current) api.current = createCityAmbience();
      api.current.unlock();
      api.current.setNight(nightRef.current);
      api.current.setLevel(!onRef.current ? 0 : duckedRef.current ? 0.22 : 1);
    };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    const onVis = () => {
      if (document.visibilityState === "visible") unlock();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  useEffect(() => {
    api.current?.setNight(night);
    api.current?.setLevel(!on ? 0 : ducked ? 0.22 : 1);
  }, [night, on, ducked]);

  useEffect(() => () => api.current?.dispose(), []);

  return { on, toggle: () => setOn((v) => !v) };
}

function PlayerPawn({ spriteRef }: { spriteRef: React.RefObject<THREE.Sprite | null> }) {
  const src = useTexture("/reno/tokens/player.webp");
  const tex = useMemo(() => cutoutTexture(src, "player"), [src]);
  return (
    <sprite ref={spriteRef} position={[0, HUMAN_M / 2, 0]} scale={[HUMAN_W, HUMAN_M, 1]}>
      <spriteMaterial map={tex} transparent alphaTest={0.3} depthWrite={false} />
    </sprite>
  );
}

const camDesired = new THREE.Vector3();
const lookAt = new THREE.Vector3();

function Rig({
  life,
  disabled,
  onArrive,
  onWalkTick,
  onInspect,
  onStreetContact,
  onTalk,
  onNear,
  onCombatHex,
  walkTo,
  inspecting,
  injected,
}: {
  life: RenoLife;
  disabled?: boolean;
  onArrive: (id: DistrictId, x: number, z: number) => void;
  onWalkTick: (x: number, z: number) => void;
  onInspect: (id: string) => void;
  onStreetContact: (hit: StreetContact) => void;
  onTalk: (actor: StreetActor) => void;
  onNear: (line: string) => void;
  onCombatHex: (q: number, r: number) => void;
  walkTo: { x: number; z: number } | null;
  inspecting: string | null;
  injected: React.MutableRefObject<Set<string> | null>;
}) {
  const player = useRef(new THREE.Vector3(life.posX, 0, life.posZ));
  const pawn = useRef<THREE.Sprite>(null);
  const lifeRef = useRef(life);
  const pausedRef = useRef(false);
  const hiddenRef = useRef<Set<string>>(new Set());
  lifeRef.current = life;
  pausedRef.current = Boolean(disabled);
  hiddenRef.current = new Set(
    life.combat?.onMap ? life.combat.combatants.filter((c) => !c.player).map((c) => c.id) : [],
  );
  const yaw = useRef(0);
  const speed = useRef(0);
  const target = useRef<THREE.Vector3 | null>(null);
  const walked = useRef(0);
  const lastDistrict = useRef<DistrictId>(life.district);
  const keysOf = useHeldKeys(injected);
  const { camera } = useThree();
  const sky = hourSky(life.hour);
  const night = isNight(life);

  useEffect(() => {
    player.current.set(life.posX, 0, life.posZ);
  }, [life.posX, life.posZ, life.district]);

  useEffect(() => {
    if (!walkTo) return;
    target.current = new THREE.Vector3(walkTo.x, 0, walkTo.z);
  }, [walkTo]);

  useEffect(() => {
    const probe = {
      getYaw: () => yaw.current,
      getSpeed: () => speed.current,
      setKeys: (codes: string[]) => {
        injected.current = new Set(codes);
      },
    };
    window.__controlsTest = probe;
    return () => {
      if (window.__controlsTest === probe) delete window.__controlsTest;
    };
  }, [injected]);

  useFrame((_, raw) => {
    const dt = Math.min(raw, 0.1);
    const fight = life.combat?.onMap && life.combat.originX != null && life.combat.originZ != null ? life.combat : null;
    if (fight) {
      speed.current = 0;
      const span = ((fight.map?.radius ?? 4) + 1.6) * (fight.hexScale || 3.35);
      camDesired.set(fight.originX!, Math.max(18, span * 0.9), fight.originZ! + span * 0.62);
      camera.position.lerp(camDesired, 1 - Math.exp(-2.6 * dt));
      lookAt.set(fight.originX!, 0.2, fight.originZ!);
      camera.lookAt(lookAt);
      if (pawn.current) pawn.current.visible = false;
      return;
    }
    if (pawn.current) pawn.current.visible = true;
    if (disabled) {
      speed.current = 0;
      return;
    }
    const keys = keysOf();
    let steer = 0;
    if (keys.has("KeyA") || keys.has("ArrowLeft")) steer += 1;
    if (keys.has("KeyD") || keys.has("ArrowRight")) steer -= 1;
    const forwardHeld = keys.has("KeyW") || keys.has("ArrowUp");
    const backHeld = keys.has("KeyS") || keys.has("ArrowDown");

    if (steer || forwardHeld || backHeld) target.current = null;

    yaw.current += steer * TURN * dt;
    let move = 0;
    if (forwardHeld) move += 1;
    if (backHeld) move -= 1;

    if (target.current) {
      const dx = target.current.x - player.current.x;
      const dz = target.current.z - player.current.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.6) {
        target.current = null;
        speed.current = 0;
      } else {
        yaw.current = Math.atan2(-dx, -dz);
        move = 1;
      }
    }

    const fx = -Math.sin(yaw.current);
    const fz = -Math.cos(yaw.current);

    speed.current = move * SPEED;
    if (move) {
      player.current.x += fx * SPEED * dt * (move > 0 ? 1 : 0.65);
      player.current.z += fz * SPEED * dt * (move > 0 ? 1 : 0.65);
      walked.current += SPEED * dt;
    }
    if (pawn.current) {
      pawn.current.position.set(player.current.x, 1.25, player.current.z);
    }

    camDesired.set(player.current.x - fx * 16, 12, player.current.z - fz * 16);
    camera.position.lerp(camDesired, 1 - Math.exp(-3.2 * dt));
    lookAt.set(player.current.x + fx * 6, 1.5, player.current.z + fz * 6);
    camera.lookAt(lookAt);

    const near = nearestDistrict(player.current.x, player.current.z);
    if (near.id !== lastDistrict.current && near.dist < 14) {
      lastDistrict.current = near.id;
      onArrive(near.id, player.current.x, player.current.z);
    }
    if (walked.current > 80) {
      walked.current = 0;
      onWalkTick(player.current.x, player.current.z);
    }
  });

  const setWalk = (x: number, z: number) => {
    target.current = new THREE.Vector3(x, 0, z);
  };

  const mark = inspecting ? BUILDING_BY_ID[inspecting] : null;

  return (
    <>
      <color attach="background" args={[sky.sky]} />
      <fog attach="fog" args={[sky.fog, night ? 40 : 70, night ? 280 : 640]} />
      <hemisphereLight args={[sky.sky, "#1a1614", night ? 0.28 : 0.42 + sky.sun * 0.5]} />
      <directionalLight
        position={[40, 60, 18]}
        intensity={night ? 0.22 : 0.45 + sky.sun * 0.9}
        color={sky.sun > 0.6 ? "#fff4dc" : "#ff8a4a"}
      />
      <ambientLight intensity={night ? 0.16 : 0.16 + sky.sun * 0.22} />
      <CityBlocks night={night} disabled={disabled} onInspect={onInspect} onWalk={setWalk} />
      <StreetCrowd
        lifeRef={lifeRef}
        player={player}
        pausedRef={pausedRef}
        hiddenRef={hiddenRef}
        onContact={onStreetContact}
        onTalk={onTalk}
        onNear={onNear}
      />
      {life.combat?.onMap && life.combat.map ? <StreetHexes combat={life.combat} onHex={onCombatHex} /> : null}
      {mark ? (
        <mesh rotation-x={-Math.PI / 2} position={[mark.x, 0.16, mark.z]}>
          <ringGeometry args={[Math.max(2.4, mark.width * 0.46), Math.max(2.9, mark.width * 0.56), 28]} />
          <meshBasicMaterial color="#e8c36a" transparent opacity={0.85} depthWrite={false} />
        </mesh>
      ) : null}
      <PlayerPawn spriteRef={pawn} />
    </>
  );
}

function Pad({
  onHold,
  disabled,
}: {
  onHold: (codes: string[]) => void;
  disabled?: boolean;
}) {
  const hold = (codes: string[]) => {
    if (disabled) return;
    onHold(codes);
  };
  const clear = () => onHold([]);
  const btn = (label: string, codes: string[], extra?: string) => (
    <button
      type="button"
      className={`min-h-11 min-w-11 rounded-md bg-bg/80 font-mono text-xs text-fg ${extra ?? ""}`}
      onPointerDown={(e) => {
        e.preventDefault();
        hold(codes);
      }}
      onPointerUp={clear}
      onPointerCancel={clear}
      onPointerLeave={clear}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
  return (
    <div className="pointer-events-auto absolute bottom-3 left-3 grid grid-cols-3 gap-1 sm:hidden">
      <span />
      {btn("↑", ["KeyW"])}
      <span />
      {btn("←", ["KeyA"])}
      {btn("↓", ["KeyS"])}
      {btn("→", ["KeyD"])}
    </div>
  );
}

export function RenoCity3D({
  life,
  disabled,
  onArrive,
  onWalkTick,
  onInspect,
  onStreetContact,
  onTalk,
  onCombatHex,
  walkTo,
  inspecting,
}: {
  life: RenoLife;
  disabled?: boolean;
  onArrive: (id: DistrictId, x: number, z: number) => void;
  onWalkTick: (x: number, z: number) => void;
  onInspect: (id: string) => void;
  onStreetContact: (hit: StreetContact) => void;
  onTalk: (actor: StreetActor) => void;
  onCombatHex: (q: number, r: number) => void;
  walkTo: { x: number; z: number } | null;
  inspecting?: string | null;
}) {
  const [ready, setReady] = useState(false);
  const [near, setNear] = useState("Citizens, independents, families, police.");
  const injected = useRef<Set<string> | null>(null);
  useEffect(() => setReady(true), []);
  const district = DISTRICT_BY_ID[life.district];
  const night = isNight(life);
  const zone = zoneAt(life.posX, life.posZ);
  const danger = dangerOf(zone, night);
  const sound = useCityAmbience(night, Boolean(disabled));

  if (!ready) {
    return (
      <div className="reno-city3d flex items-center justify-center rounded-xl bg-inset text-sm text-muted">
        Loading New Reno…
      </div>
    );
  }

  return (
    <div className="reno-city3d relative overflow-hidden rounded-xl bg-inset shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [18, 16, 18], fov: 42, near: 0.35, far: 2400 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(night ? "#010006" : "#8aa3b0");
        }}
        style={{ touchAction: "none" }}
      >
        <Suspense fallback={null}>
          <Rig
            life={life}
            disabled={disabled}
            onArrive={onArrive}
            onWalkTick={onWalkTick}
            onInspect={onInspect}
            onStreetContact={onStreetContact}
            onTalk={onTalk}
            onNear={setNear}
            onCombatHex={onCombatHex}
            walkTo={walkTo}
            inspecting={inspecting ?? null}
            injected={injected}
          />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-2 p-3">
        <div className="rounded-md bg-bg/75 px-2 py-1.5">
          <p className="font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">New Reno</p>
          <p className="font-display text-lg leading-none font-semibold">
            {zone === "outskirts" ? "The Outskirts" : district.name}
          </p>
          <p className="mt-0.5 font-mono text-[10px] text-muted">
            ~{CITY_POPULATION.toLocaleString()} souls · {night ? "neon night" : "day"}
          </p>
          <p className="mt-1 font-mono text-[10px] tracking-wide text-muted">{near}</p>
          <p className={`mt-1 font-mono text-[10px] tracking-wide uppercase ${danger >= 6 ? "text-danger" : danger <= 2 ? "text-ok" : "text-muted"}`}>
            {ZONE_LABEL[zone]} · {ZONE_HINT[zone]}
          </p>
          <p className="mt-1 font-mono text-[10px] text-subtle">
            <span className="text-[#d9d0c1]">citizen</span>
            {" · "}
            <span className="text-[#e0b15a]">independent</span>
            {" · "}
            <span className="text-[#c4a574]">family</span>
            {" · "}
            <span className="text-[#7eb6e0]">police</span>
          </p>
        </div>
        <div className="pointer-events-auto flex flex-col items-end gap-1">
          <p className="rounded-md bg-bg/75 px-2 py-1 font-mono text-[10px] tracking-wide text-subtle uppercase">
            Click a person · click a block · WASD · rings mark who they belong to
            {life.combat?.onMap ? " · hexes are this street, turn-based" : ""}
          </p>
          <button
            type="button"
            className="min-h-11 rounded-md bg-bg/80 px-3 font-mono text-[10px] tracking-wide text-fg uppercase"
            onClick={sound.toggle}
          >
            {sound.on ? "City sound on" : "City sound off"}
          </button>
        </div>
      </div>
      <Pad
        disabled={disabled}
        onHold={(codes) => {
          injected.current = codes.length ? new Set(codes) : null;
        }}
      />
    </div>
  );
}

declare global {
  interface Window {
    __controlsTest?: {
      getYaw: () => number;
      getSpeed: () => number;
      setKeys?: (codes: string[]) => void;
    };
  }
}
