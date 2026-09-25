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
import { cellAt, HEX_METERS, worldToHex } from "@/lib/reno/hex";
import { blockedAt } from "@/lib/reno/nav";
import { HUMAN_M, HUMAN_W } from "@/lib/reno/scale";
import type { DistrictId, RenoLife } from "@/lib/reno/types";
import { DISTRICT_BY_ID, isNight } from "@/lib/reno/world";
import { weatherAt } from "@/lib/reno/weather";
import { dangerOf, ZONE_HINT, ZONE_LABEL } from "@/lib/reno/zones";

const SPEED = 5.2;
const TURN = 2.2;

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

function RouteLine({ id, points }: { id: string; points: Array<{ x: number; z: number }> }) {
  const line = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points.map((p) => new THREE.Vector3(p.x, 0.35, p.z)));
    const mat = new THREE.LineBasicMaterial({ color: "#e8c36a", transparent: true, opacity: 0.9 });
    const obj = new THREE.Line(geo, mat);
    obj.frustumCulled = false;
    return obj;
  }, [id]);
  useEffect(() => {
    return () => {
      line.geometry.dispose();
      const mat = line.material;
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
      else mat.dispose();
    };
  }, [line]);
  return <primitive object={line} />;
}

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
  onFieldTick,
  onRise,
  onNavArrive,
  onNavCancel,
  onGround,
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
  onFieldTick: () => void;
  onRise: () => void;
  onNavArrive: () => void;
  onNavCancel: () => void;
  onGround: (x: number, z: number) => void;
  inspecting: string | null;
  injected: React.MutableRefObject<Set<string> | null>;
}) {
  const player = useRef(new THREE.Vector3(life.posX, 0, life.posZ));
  const pawn = useRef<THREE.Sprite>(null);
  const lifeRef = useRef(life);
  const pausedRef = useRef(false);
  const hiddenRef = useRef<Set<string>>(new Set());
  lifeRef.current = life;
  pausedRef.current = Boolean(disabled || life.combat?.field);
  hiddenRef.current = new Set(
    life.combat?.onMap ? life.combat.combatants.filter((c) => !c.player).map((c) => c.id) : [],
  );
  const yaw = useRef(Math.PI);
  const speed = useRef(0);
  const walked = useRef(0);
  const lastDistrict = useRef<DistrictId>(life.district);
  const lastHex = useRef<{ q: number; r: number } | null>(null);
  const rose = useRef(false);
  const tickAt = useRef(0);
  const route = useRef<{ id: string; i: number } | null>(null);
  const cancelSent = useRef(false);
  const doneSent = useRef(false);
  const navId = life.nav?.id ?? "";
  const keysOf = useHeldKeys(injected);
  const { camera } = useThree();
  const sky = hourSky(life.hour);
  const night = isNight(life);
  const weather = weatherAt(life.day, life.hour);
  const arriveNav = useRef(onNavArrive);
  const cancelNav = useRef(onNavCancel);
  const fieldTick = useRef(onFieldTick);
  const rise = useRef(onRise);
  arriveNav.current = onNavArrive;
  cancelNav.current = onNavCancel;
  fieldTick.current = onFieldTick;
  rise.current = onRise;

  useEffect(() => {
    player.current.set(life.posX, 0, life.posZ);
  }, [life.posX, life.posZ, life.district]);

  useEffect(() => {
    cancelSent.current = false;
    doneSent.current = false;
    if (!navId || !life.nav?.waypoints.length) {
      route.current = null;
      return;
    }
    let i = 0;
    const pts = life.nav.waypoints;
    while (i < pts.length - 1 && Math.hypot(pts[i]!.x - life.posX, pts[i]!.z - life.posZ) < 2.2) i += 1;
    route.current = { id: navId, i };
  }, [navId]);

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
    const live = lifeRef.current;
    const overhead =
      live.combat?.onMap && !live.combat.field && live.combat.originX != null && live.combat.originZ != null
        ? live.combat
        : null;
    const field =
      live.combat?.field && live.combat.map && live.combat.originX != null && live.combat.originZ != null
        ? live.combat
        : null;
    if (overhead) {
      speed.current = 0;
      const span = ((overhead.map?.radius ?? 4) + 1.6) * (overhead.hexScale || HEX_METERS);
      camDesired.set(overhead.originX!, Math.max(18, span * 0.9), overhead.originZ! + span * 0.62);
      camera.position.lerp(camDesired, 1 - Math.exp(-2.6 * dt));
      lookAt.set(overhead.originX!, 0.2, overhead.originZ!);
      camera.lookAt(lookAt);
      if (pawn.current) pawn.current.visible = false;
      return;
    }
    if (disabled && !field) {
      speed.current = 0;
      if (pawn.current) {
        const flat = Boolean(live.flat);
        pawn.current.visible = !flat;
        pawn.current.position.set(player.current.x, flat ? 0.22 : HUMAN_M / 2, player.current.z);
        pawn.current.scale.set(flat ? 1.7 : HUMAN_W, flat ? 0.42 : HUMAN_M, 1);
      }
      return;
    }
    const keys = keysOf();
    let steer = 0;
    if (keys.has("KeyA") || keys.has("ArrowLeft")) steer += 1;
    if (keys.has("KeyD") || keys.has("ArrowRight")) steer -= 1;
    const forwardHeld = keys.has("KeyW") || keys.has("ArrowUp");
    const backHeld = keys.has("KeyS") || keys.has("ArrowDown");
    const manual = Boolean(steer || forwardHeld || backHeld);
    const leg = route.current;
    if (manual && leg && !field) {
      route.current = null;
      if (!cancelSent.current) {
        cancelSent.current = true;
        cancelNav.current();
      }
    }

    yaw.current += steer * TURN * dt;
    let move = 0;
    if (forwardHeld) move += 1;
    if (backHeld) move -= 1;

    const active = !manual && !field ? route.current : null;
    if (active && live.nav && active.id === live.nav.id) {
      const pt = live.nav.waypoints[active.i];
      if (!pt) {
        route.current = null;
      } else {
        const dx = pt.x - player.current.x;
        const dz = pt.z - player.current.z;
        const dist = Math.hypot(dx, dz);
        if (dist < 0.9) {
          active.i += 1;
          if (active.i >= live.nav.waypoints.length && !doneSent.current) {
            doneSent.current = true;
            route.current = null;
            arriveNav.current();
          }
        } else {
          yaw.current = Math.atan2(-dx, -dz);
          move = 1;
        }
      }
    }

    const fx = -Math.sin(yaw.current);
    const fz = -Math.cos(yaw.current);
    const pace = SPEED * (route.current && move > 0 && !manual ? 1.35 : 1);
    speed.current = move * pace;
    if (move) {
      const step = pace * dt * (move > 0 ? 1 : 0.65);
      const nx = player.current.x + fx * step;
      const nz = player.current.z + fz * step;
      if (field) {
        player.current.x = nx;
        player.current.z = nz;
        const scale = field.hexScale || HEX_METERS;
        const h = worldToHex(player.current.x, player.current.z, field.originX!, field.originZ!, scale);
        const cell = cellAt(field.map!, h.q, h.r);
        if (!cell || cell.kind === "wall") {
          player.current.x -= fx * step;
          player.current.z -= fz * step;
        } else if (!lastHex.current || lastHex.current.q !== h.q || lastHex.current.r !== h.r) {
          lastHex.current = { q: h.q, r: h.r };
          onCombatHex(h.q, h.r);
        }
        const now = performance.now();
        if (!field.result && now - tickAt.current > 850) {
          tickAt.current = now;
          fieldTick.current();
        }
      } else if (!blockedAt(nx, nz)) {
        player.current.x = nx;
        player.current.z = nz;
      } else if (!blockedAt(nx, player.current.z)) {
        player.current.x = nx;
      } else if (!blockedAt(player.current.x, nz)) {
        player.current.z = nz;
      } else if (route.current && live.nav) {
        const last = live.nav.waypoints.length - 1;
        if (route.current.i < last) route.current.i += 1;
      }
      walked.current += step;
      if (live.flat && !rose.current) {
        rose.current = true;
        rise.current();
      }
    }
    if (!live.flat) rose.current = false;
    if (!field) lastHex.current = null;

    const flat = Boolean(live.flat);
    if (pawn.current) {
      pawn.current.visible = !flat;
      pawn.current.position.set(player.current.x, flat ? 0.22 : HUMAN_M / 2, player.current.z);
      pawn.current.scale.set(flat ? 1.7 : HUMAN_W, flat ? 0.42 : HUMAN_M, 1);
    }

    camDesired.set(player.current.x - fx * 10, 4.8, player.current.z - fz * 10);
    camera.position.lerp(camDesired, 1 - Math.exp(-3.2 * dt));
    lookAt.set(player.current.x + fx * 14, 2.4, player.current.z + fz * 14);
    camera.lookAt(lookAt);

    if (!field) {
      const near = nearestDistrict(player.current.x, player.current.z);
      if (near.id !== lastDistrict.current && near.dist < 14) {
        lastDistrict.current = near.id;
        onArrive(near.id, player.current.x, player.current.z);
      }
      if (walked.current > 80) {
        walked.current = 0;
        onWalkTick(player.current.x, player.current.z);
      }
    }
  });

  const setWalk = (x: number, z: number) => {
    if (pausedRef.current || lifeRef.current.combat) return;
    onGround(x, z);
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
      <CityBlocks night={night} weather={weather} disabled={disabled} onInspect={onInspect} onWalk={setWalk} />
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
      {life.nav && life.nav.waypoints.length > 1 ? <RouteLine id={life.nav.id} points={life.nav.waypoints} /> : null}
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
  onFieldTick,
  onRise,
  onNavArrive,
  onNavCancel,
  onGround,
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
  onFieldTick: () => void;
  onRise: () => void;
  onNavArrive: () => void;
  onNavCancel: () => void;
  onGround: (x: number, z: number) => void;
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
            onFieldTick={onFieldTick}
            onRise={onRise}
            onNavArrive={onNavArrive}
            onNavCancel={onNavCancel}
            onGround={onGround}
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
            Click a person · click the street · WASD takes the wheel · rings mark who they belong to
            {life.nav ? ` · walking to ${life.nav.label}` : ""}
            {life.combat?.field
              ? " · this block, 40×40, no turns"
              : life.combat?.onMap
                ? " · hexes are this street, turn-based"
                : ""}
          </p>
          <button
            type="button"
            className="min-h-11 rounded-md bg-bg/80 px-3 font-mono text-[10px] tracking-wide text-fg uppercase"
            onClick={sound.toggle}
          >
            {sound.on ? "City sound on" : "City sound off"}
          </button>
          {life.nav ? (
            <button
              type="button"
              className="min-h-11 rounded-md bg-bg/80 px-3 font-mono text-[10px] tracking-wide text-fg uppercase"
              onClick={onNavCancel}
            >
              Stop · {life.nav.label} · {Math.max(0, Math.round(Math.hypot(life.posX - life.nav.x, life.posZ - life.nav.z)))} m
            </button>
          ) : null}
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
