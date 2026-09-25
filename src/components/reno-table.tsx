import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Html, OrbitControls, useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { hexToPixel } from "@/lib/reno/hex";
import type { EncounterSetting, HexBoard } from "@/lib/reno/types";
import type { HexUnitView } from "@/components/reno-hex-map";
import { woundTexture } from "@/lib/reno/wound";

const HEX = 0.86;
const CUTOUTS = new Map<string, THREE.Texture>();

const THEME: Record<
  EncounterSetting,
  { floor: string; wall: string; cover: string; fog: string; accent: string; ambient: number }
> = {
  street: { floor: "#5c5850", wall: "#3a342c", cover: "#7a6854", fog: "#12110f", accent: "#e2c9a4", ambient: 0.72 },
  alley: { floor: "#4e4844", wall: "#5a4038", cover: "#6e5c48", fog: "#100e12", accent: "#e23a78", ambient: 0.62 },
  casino: { floor: "#6a403c", wall: "#3a2c28", cover: "#8a6848", fog: "#140e10", accent: "#e2b15a", ambient: 0.7 },
  yard: { floor: "#6a5c44", wall: "#3c3428", cover: "#7a6244", fog: "#14120e", accent: "#d7b48a", ambient: 0.7 },
  crypt: { floor: "#3e4840", wall: "#2a332c", cover: "#5a6458", fog: "#0c120e", accent: "#8fb48a", ambient: 0.55 },
  ring: { floor: "#8a7058", wall: "#4a3c30", cover: "#6a5644", fog: "#16120e", accent: "#f0ddc0", ambient: 0.78 },
  rail: { floor: "#5a564e", wall: "#4a443c", cover: "#7a6a56", fog: "#121210", accent: "#d4c4aa", ambient: 0.66 },
  motel: { floor: "#5e5248", wall: "#4a3a30", cover: "#7a5e48", fog: "#14110e", accent: "#e2b06a", ambient: 0.64 },
};

function cutoutTexture(source: THREE.Texture, key: string): THREE.Texture {
  const cached = CUTOUTS.get(key);
  if (cached) return cached;
  const image = source.image as CanvasImageSource & { width?: number; height?: number };
  const w = image.width || 512;
  const h = image.height || 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return source;
  ctx.drawImage(image, 0, 0, w, h);
  const img = ctx.getImageData(0, 0, w, h);
  const data = img.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i] ?? 0;
    const g = data[i + 1] ?? 0;
    const b = data[i + 2] ?? 0;
    const mag = (r + b) * 0.5 - g;
    if (r > 150 && b > 150 && g < 170 && mag > 55) {
      const alpha = mag > 130 ? 0 : Math.max(0, 255 - mag * 3);
      data[i + 3] = Math.min(data[i + 3] ?? 255, alpha);
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  CUTOUTS.set(key, tex);
  return tex;
}

function worldPos(q: number, r: number, y: number): [number, number, number] {
  const p = hexToPixel(q, r, HEX);
  return [p.x, y, p.y];
}

function Mini({
  unit,
  active,
  selected,
  onPick,
}: {
  unit: HexUnitView;
  active: boolean;
  selected: boolean;
  onPick?: () => void;
}) {
  const url = unit.token || "/reno/tokens/gangster.webp";
  const src = useTexture(url);
  const tex = useMemo(() => cutoutTexture(src, url), [src, url]);
  const group = useRef<THREE.Group>(null);
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useFrame((state) => {
    if (!group.current || reduce) return;
    const t = state.clock.elapsedTime;
    const bob = Math.sin(t * 1.6 + unit.q * 0.7 + unit.r) * 0.035;
    group.current.position.y = (unit.down ? 0.12 : 0.2) + bob;
  });
  const base =
    unit.side === "ally" ? "#7d9a78" : unit.side === "player" || unit.player ? "#c5cdc8" : "#c45c4a";
  const height = unit.dead ? 0.42 : unit.down ? 1.05 : 1.85;
  const wide = unit.dead ? 1.7 : 0.95;

  return (
    <group
      ref={group}
      position={worldPos(unit.q, unit.r, unit.down ? 0.12 : 0.2)}
      onClick={(e) => {
        e.stopPropagation();
        onPick?.();
      }}
    >
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.42, 0.5, 0.12, 20]} />
        <meshStandardMaterial
          color={base}
          emissive={base}
          emissiveIntensity={selected ? 0.4 : active ? 0.22 : 0.08}
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.01, 0]}>
        <ringGeometry args={[0.46, 0.58, 24]} />
        <meshBasicMaterial color={base} />
      </mesh>
      <Billboard position={[0, unit.dead ? 0.28 : 0.95, 0]}>
        <mesh>
          <planeGeometry args={[wide, height]} />
          <meshBasicMaterial map={tex} transparent alphaTest={0.12} toneMapped={false} side={THREE.DoubleSide} />
        </mesh>
        {unit.dead ? (
          <mesh position={[0.05, 0.02, 0.02]}>
            <planeGeometry args={[0.38, 0.38]} />
            <meshBasicMaterial map={woundTexture()} transparent depthWrite={false} toneMapped={false} />
          </mesh>
        ) : null}
      </Billboard>
      <Html position={[0, 2.15, 0]} center distanceFactor={9} zIndexRange={[2, 0]} style={{ pointerEvents: "none" }}>
        <div className="rounded bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] tracking-wide whitespace-nowrap text-fg uppercase">
          {unit.label}
          {unit.hp != null ? ` ${unit.hp}` : ""}
        </div>
      </Html>
    </group>
  );
}

function TableScene({
  board,
  units,
  selectedId,
  activeId,
  reachable,
  onHex,
  disabled,
  night,
}: {
  board: HexBoard;
  units: HexUnitView[];
  selectedId?: string;
  activeId?: string;
  reachable?: Set<string>;
  onHex?: (q: number, r: number) => void;
  disabled?: boolean;
  night?: boolean;
}) {
  const theme = THEME[board.setting] ?? THEME.street;
  const backdrop = useTexture(board.scene);
  backdrop.colorSpace = THREE.SRGBColorSpace;
  const byHex = new Map(units.map((u) => [`${u.q},${u.r}`, u]));

  const step = (q: number, r: number, kind: string) => {
    if (disabled || kind === "wall") return;
    onHex?.(q, r);
  };

  return (
    <>
      <color attach="background" args={[theme.fog]} />
      <fog attach="fog" args={[theme.fog, 22, 64]} />
      <ambientLight intensity={night ? Math.max(0.55, theme.ambient * 0.9) : theme.ambient} />
      <directionalLight position={[6, 16, 8]} intensity={night ? 1.25 : 1.6} />
      <pointLight position={[0, 6, -board.radius * 2.2]} color={theme.accent} intensity={5} distance={14} />
      <hemisphereLight color="#eceae3" groundColor="#2a2824" intensity={0.4} />

      <mesh rotation-x={-Math.PI / 2} position={[0, -0.14, 0]}>
        <circleGeometry args={[board.radius * HEX * 2.15 + 3.2, 48]} />
        <meshStandardMaterial color="#141311" roughness={0.9} metalness={0.2} />
      </mesh>

      <mesh position={[0, 3.6, -(board.radius * HEX * 1.7 + 5.5)]}>
        <planeGeometry args={[board.radius * 6 + 16, 12]} />
        <meshBasicMaterial map={backdrop} toneMapped={false} />
      </mesh>

      {board.setting === "ring"
        ? [0, 1, 2, 3].map((i) => {
            const a = (i / 4) * Math.PI * 2;
            const rad = board.radius * HEX * 1.55;
            return (
              <mesh key={i} position={[Math.cos(a) * rad, 0.7, Math.sin(a) * rad]}>
                <cylinderGeometry args={[0.08, 0.08, 1.4, 8]} />
                <meshStandardMaterial color="#c5cdc8" metalness={0.6} roughness={0.35} />
              </mesh>
            );
          })
        : null}

      {board.cells.map((cell) => {
        const key = `${cell.q},${cell.r}`;
        const can = Boolean(reachable?.has(key));
        const selected = byHex.get(key)?.id === selectedId;
        const wall = cell.kind === "wall";
        const cover = cell.kind === "cover";
        const exit = cell.kind === "exit";
        const h = wall ? 1.05 : cover ? 0.16 : 0.16;
        const color = wall ? theme.wall : exit ? "#3d5340" : can ? "#6d756f" : selected ? "#5c635e" : theme.floor;
        return (
          <group key={key} position={worldPos(cell.q, cell.r, h / 2)}>
            <mesh
              rotation-y={Math.PI / 2}
              onClick={(e) => {
                e.stopPropagation();
                step(cell.q, cell.r, cell.kind);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                if (!disabled && cell.kind !== "wall") document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                document.body.style.cursor = "";
              }}
            >
              <cylinderGeometry args={[HEX * 0.93, HEX * 0.93, h, 6]} />
              <meshStandardMaterial
                color={color}
                emissive={exit ? "#7d9a78" : can ? "#c5cdc8" : "#000000"}
                emissiveIntensity={exit ? 0.55 : can ? 0.22 : 0}
                roughness={board.setting === "alley" ? 0.42 : 0.82}
                metalness={board.setting === "alley" ? 0.18 : 0.04}
              />
            </mesh>
            {cover ? (
              <mesh position={[0, 0.28, 0]} onClick={(e) => { e.stopPropagation(); step(cell.q, cell.r, cell.kind); }}>
                <boxGeometry args={[0.7, 0.42, 0.55]} />
                <meshStandardMaterial color={theme.cover} roughness={0.78} />
              </mesh>
            ) : null}
          </group>
        );
      })}

      {units.map((unit) => (
        <Mini
          key={unit.id}
          unit={unit}
          active={unit.id === activeId}
          selected={unit.id === selectedId}
          onPick={() => step(unit.q, unit.r, "open")}
        />
      ))}

      <OrbitControls
        enablePan={false}
        minPolarAngle={0.4}
        maxPolarAngle={1.12}
        minDistance={3.2}
        maxDistance={8 + board.radius * 4}
        target={[0, 0.2, 0]}
      />
    </>
  );
}

export function RenoTable({
  board,
  units,
  selectedId,
  activeId,
  reachable,
  onHex,
  disabled,
  night,
}: {
  board: HexBoard;
  units: HexUnitView[];
  selectedId?: string;
  activeId?: string;
  reachable?: Set<string>;
  onHex?: (q: number, r: number) => void;
  disabled?: boolean;
  night?: boolean;
}) {
  const vSpan = board.radius * HEX * 3.15 + 3.4;
  const fov = 40;
  const fit = vSpan / 2 / Math.tan((fov * Math.PI) / 360);
  return (
    <div className="reno-fight relative h-72 overflow-hidden rounded-xl bg-inset sm:h-96">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0.4, fit * 0.92, fit * 0.4], fov, near: 0.1, far: 140 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <TableScene
            board={board}
            units={units}
            selectedId={selectedId}
            activeId={activeId}
            reachable={reachable}
            onHex={onHex}
            disabled={disabled}
            night={night}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
