import { Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";
import { CITY, type BuildingForm, type CityBuilding, type CityRoad } from "@/lib/reno/city";
import { CAR_H, CAR_L, CAR_W, DOOR_H, DOOR_W, MILE, RUNS, runPose } from "@/lib/reno/scale";

const WALK = 2.7;

const TINT: Record<string, string> = {
  tenement: "#cbb89a",
  shop: "#b7a48c",
  warehouse: "#6e6860",
  casino: "#e2d0aa",
  shack: "#7d5c42",
  motel: "#c8b296",
  bar: "#8d6844",
  crypt: "#6d726c",
  ring: "#8d734c",
};

const NEONS = ["#ff4d8d", "#5ce1ff", "#ffb14a", "#e85d4c", "#b388ff"];

function styleOf(sprite: string): keyof typeof TINT {
  if (sprite.includes("casino") || sprite.includes("neon")) return "casino";
  if (sprite.includes("warehouse") || sprite.includes("rail")) return "warehouse";
  if (sprite.includes("shack")) return "shack";
  if (sprite.includes("motel")) return "motel";
  if (sprite.includes("shop") || sprite.includes("pawn")) return "shop";
  if (sprite.includes("bar")) return "bar";
  if (sprite.includes("crypt")) return "crypt";
  if (sprite.includes("ring")) return "ring";
  return "tenement";
}

function gritColor(style: string, id: string): string {
  const pal: Record<string, string[]> = {
    tenement: ["#cbb89a", "#b89a78", "#dcc8a8", "#a68468", "#8f7358"],
    shop: ["#b7a48c", "#c6b39a", "#9c846c"],
    warehouse: ["#6e6860", "#5a564e", "#7c7468", "#4c5248"],
    casino: ["#e2d0aa", "#f0d8b0", "#d4bc96", "#c8b48a"],
    shack: ["#7d5c42", "#6a4832", "#8e6848", "#5a3e2c"],
    motel: ["#c8b296", "#d8c2a6", "#b49678", "#e4d0b4"],
    bar: ["#8d6844", "#754e32", "#a07850"],
    crypt: ["#6d726c", "#5e6460"],
    ring: ["#8d734c"],
  };
  const list = pal[style] ?? [TINT.tenement];
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 33 + id.charCodeAt(i)) >>> 0;
  return list[h % list.length]!;
}

function neonColorOf(b: CityBuilding): string {
  if (b.district === "shark") return "#ff4d8d";
  if (b.district === "mordino") return "#ffb14a";
  if (b.district === "desperado") return "#ff6a3a";
  if (b.district) return "#5ce1ff";
  let h = 0;
  for (let i = 0; i < b.id.length; i++) h = (h + b.id.charCodeAt(i)) >>> 0;
  return NEONS[h % NEONS.length]!;
}

function alongX(road: CityRoad): boolean {
  return road.w >= road.d;
}

function frontBox(ns: boolean, span: number, height: number, thick: number): [number, number, number] {
  return ns ? [thick, height, span] : [span, height, thick];
}

function alongFront(ns: boolean, w: number, d: number, t: number, y: number): [number, number, number] {
  if (ns) return [0, y, t * d];
  return [t * w, y, 0];
}

function makeFacade(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const g = canvas.getContext("2d");
  if (!g) return new THREE.CanvasTexture(canvas);
  g.fillStyle = "#f4f1ea";
  g.fillRect(0, 0, 128, 128);
  g.strokeStyle = "#ddd6c8";
  g.lineWidth = 3;
  g.strokeRect(2, 2, 124, 124);
  for (let col = 0; col < 2; col++) {
    for (let row = 0; row < 3; row++) {
      const x = 16 + col * 54;
      const y = 12 + row * 38;
      g.fillStyle = "#14181e";
      g.fillRect(x, y, 30, 22);
      g.fillStyle = "#9fd4ea";
      g.globalAlpha = 0.45;
      g.fillRect(x + 3, y + 3, 9, 7);
      g.globalAlpha = 1;
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function nameTexture(name: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 160;
  const g = canvas.getContext("2d");
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  if (!g) return tex;
  g.clearRect(0, 0, 1024, 160);
  g.font = "700 78px Impact, Arial Black, Arial, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillStyle = "rgba(12,10,8,0.55)";
  g.fillText(name.toUpperCase(), 516, 86);
  g.fillStyle = "#f4efe2";
  g.fillText(name.toUpperCase(), 512, 78);
  tex.needsUpdate = true;
  return tex;
}

function RoadName({ road, tex }: { road: CityRoad; tex: THREE.Texture }) {
  const horizontal = alongX(road);
  const length = (horizontal ? road.w : road.d) * 0.9;
  const half = horizontal ? road.d / 2 : road.w / 2;
  const band = Math.min(1.35, Math.max(0.9, half * 0.38));
  const repeatLen = band * (1024 / 160);
  const off = Math.min(half * 0.38, 1.9);
  const map = useMemo(() => {
    const clone = tex.clone();
    clone.wrapS = THREE.RepeatWrapping;
    clone.repeat.set(Math.max(1, length / repeatLen), 1);
    clone.needsUpdate = true;
    return clone;
  }, [tex, length, repeatLen]);
  return (
    <group>
      {[1, -1].map((sign) => (
        <group
          key={sign}
          position={[road.x + (horizontal ? 0 : sign * off), 0.145, road.z + (horizontal ? sign * off : 0)]}
          rotation-y={horizontal ? 0 : Math.PI / 2}
        >
          <mesh rotation-x={-Math.PI / 2}>
            <planeGeometry args={[length, band]} />
            <meshBasicMaterial map={map} transparent depthWrite={false} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function sidewalkSpans(road: CityRoad): { spans: Array<[number, number]>; gaps: Array<[number, number]> } {
  const horizontal = alongX(road);
  const start = horizontal ? road.x - road.w / 2 : road.z - road.d / 2;
  const end = horizontal ? road.x + road.w / 2 : road.z + road.d / 2;
  const gaps: Array<[number, number]> = [];
  for (const other of CITY.roads) {
    if (other === road || alongX(other) === horizontal) continue;
    if (horizontal) {
      if (Math.abs(other.z - road.z) > other.d / 2 + road.d / 2 + 0.4) continue;
      const a = other.x - other.w / 2 - 0.2;
      const b = other.x + other.w / 2 + 0.2;
      if (b < start || a > end) continue;
      gaps.push([Math.max(start, a), Math.min(end, b)]);
    } else {
      if (Math.abs(other.x - road.x) > other.w / 2 + road.w / 2 + 0.4) continue;
      const a = other.z - other.d / 2 - 0.2;
      const b = other.z + other.d / 2 + 0.2;
      if (b < start || a > end) continue;
      gaps.push([Math.max(start, a), Math.min(end, b)]);
    }
  }
  gaps.sort((p, q) => p[0] - q[0]);
  const spans: Array<[number, number]> = [];
  let cursor = start;
  for (const [a, b] of gaps) {
    if (a - cursor > 2.2) spans.push([cursor, a]);
    cursor = Math.max(cursor, b);
  }
  if (end - cursor > 2.2) spans.push([cursor, end]);
  return { spans, gaps };
}

function facePoint(
  face: CityBuilding["face"],
  w: number,
  d: number,
  y: number,
  lift: number,
): [number, number, number] {
  if (face === "-z") return [0, y, -d / 2 - lift];
  if (face === "+x") return [w / 2 + lift, y, 0];
  if (face === "-x") return [-w / 2 - lift, y, 0];
  return [0, y, d / 2 + lift];
}

function Wall({
  args,
  position,
  rotation,
  map,
  color,
}: {
  args: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
  map?: THREE.Texture;
  color: string;
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={args} />
      <meshStandardMaterial map={map} color={color} roughness={0.9} metalness={0.03} />
    </mesh>
  );
}

function FormBody({
  form,
  w,
  h,
  d,
  ns,
  map,
  color,
}: {
  form: BuildingForm;
  w: number;
  h: number;
  d: number;
  ns: boolean;
  map: THREE.Texture;
  color: string;
}) {
  const cap = "#2a2724";
  const span = ns ? d : w;
  const thick = ns ? w : d;
  if (form === "step") {
    const baseH = h * 0.56;
    const topH = h - baseH;
    return (
      <group>
        <Wall args={[w, baseH, d]} position={[0, baseH / 2, 0]} map={map} color={color} />
        <Wall
          args={[w * 0.66, topH, d * 0.64]}
          position={[ns ? 0 : w * 0.05, baseH + topH / 2, ns ? d * 0.05 : 0]}
          map={map}
          color={color}
        />
        <Wall args={[w * 0.72, 0.16, d * 0.7]} position={[ns ? 0 : w * 0.05, h + 0.06, ns ? d * 0.05 : 0]} color={cap} />
      </group>
    );
  }
  if (form === "tower") {
    const pod = h * 0.4;
    return (
      <group>
        <Wall args={[w, pod, d]} position={[0, pod / 2, 0]} map={map} color={color} />
        <Wall args={[w * 0.56, h - pod, d * 0.56]} position={[0, pod + (h - pod) / 2, 0]} map={map} color={color} />
        <Wall args={[w * 0.64, 0.16, d * 0.64]} position={[0, h + 0.06, 0]} color={cap} />
        <mesh position={[w * 0.12, h + 0.7, 0]}>
          <cylinderGeometry args={[0.05, 0.07, 1.25, 6]} />
          <meshStandardMaterial color="#2c2a28" metalness={0.55} roughness={0.4} />
        </mesh>
      </group>
    );
  }
  if (form === "wing") {
    return (
      <group>
        <Wall args={frontBox(ns, span * 0.62, h, thick)} position={alongFront(ns, w, d, -0.16, h / 2)} map={map} color={color} />
        <Wall
          args={frontBox(ns, span * 0.4, h * 0.48, thick * 0.82)}
          position={alongFront(ns, w, d, 0.28, h * 0.24)}
          map={map}
          color={color}
        />
        <Wall args={frontBox(ns, span * 0.68, 0.16, thick + 0.2)} position={alongFront(ns, w, d, -0.16, h + 0.06)} color={cap} />
      </group>
    );
  }
  if (form === "motel") {
    return (
      <group>
        <Wall
          args={frontBox(ns, span * 0.76, h * 0.6, thick * 0.78)}
          position={alongFront(ns, w, d, 0.1, h * 0.3)}
          map={map}
          color={color}
        />
        <Wall
          args={frontBox(ns, span * 0.3, h * 0.9, thick * 0.86)}
          position={alongFront(ns, w, d, -0.34, h * 0.45)}
          map={map}
          color={color}
        />
        <Wall args={frontBox(ns, span * 0.7, 0.22, 0.1)} position={alongFront(ns, w, d, 0.08, h * 0.55)} color="#6a5644" />
        <Wall args={frontBox(ns, span * 0.34, 0.12, thick * 0.9)} position={alongFront(ns, w, d, -0.34, h * 0.92)} color={cap} />
      </group>
    );
  }
  if (form === "shack") {
    return (
      <group>
        <Wall args={[w * 0.9, h * 0.68, d * 0.86]} position={[0, h * 0.34, 0]} map={map} color={color} />
        <Wall
          args={[w * 1.12, 0.14, d * 1.08]}
          position={[0, h * 0.7, 0]}
          rotation={ns ? [0.22, 0, 0] : [0, 0, -0.2]}
          color="#5a4030"
        />
        <Wall args={frontBox(ns, span * 0.34, h * 0.36, thick * 0.55)} position={alongFront(ns, w, d, 0.4, h * 0.18)} color="#6a4c38" />
      </group>
    );
  }
  if (form === "casino") {
    const podium = h * 0.58;
    return (
      <group>
        <Wall args={[w, podium, d]} position={[0, podium / 2, 0]} map={map} color={color} />
        <Wall
          args={frontBox(ns, span * 0.2, h * 0.95, thick * 0.48)}
          position={alongFront(ns, w, d, 0.38, h * 0.48)}
          map={map}
          color={color}
        />
        <Wall args={[w + 0.25, 0.14, d + 0.25]} position={[0, podium + 0.06, 0]} color={cap} />
      </group>
    );
  }
  if (form === "shed") {
    return (
      <group>
        <Wall args={[w, h * 0.74, d * 1.05]} position={[0, h * 0.37, 0]} map={map} color={color} />
        <Wall args={[w * 0.42, h * 0.2, d * 0.36]} position={[0, h * 0.82, 0]} map={map} color={color} />
        <Wall args={frontBox(ns, span * 0.36, h * 0.22, 0.7)} position={alongFront(ns, w, d, 0, h * 0.12)} color="#4a463e" />
        <Wall args={[w + 0.2, 0.14, d * 1.08]} position={[0, h * 0.76, 0]} color={cap} />
      </group>
    );
  }
  return (
    <group>
      <Wall args={[w, h, d]} position={[0, h / 2, 0]} map={map} color={color} />
      <Wall args={[w + 0.3, 0.18, d + 0.3]} position={[0, h + 0.08, 0]} color={cap} />
    </group>
  );
}

function Block({
  b,
  facade,
  night,
  disabled,
  onInspect,
}: {
  b: CityBuilding;
  facade: THREE.Texture;
  night: boolean;
  disabled?: boolean;
  onInspect: (id: string) => void;
}) {
  const style = styleOf(b.sprite);
  const front = Math.max(3.5, b.width * 0.96);
  const thick =
    b.depth ?? (style === "warehouse" || style === "motel" ? Math.max(5.2, front * 0.62) : Math.max(4.2, front * 0.52));
  const ns = b.face === "+x" || b.face === "-x";
  const w = ns ? thick : front;
  const h = Math.max(2.8, b.height * 0.78);
  const d = ns ? front : thick;
  const face = b.face ?? "+z";
  const form: BuildingForm = b.form ?? (style === "motel" ? "motel" : style === "shack" ? "shack" : style === "casino" ? "casino" : "box");
  const map = useMemo(() => {
    const clone = facade.clone();
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping;
    clone.repeat.set(Math.max(1, w / 3.4), Math.max(1, h / 2.6));
    clone.needsUpdate = true;
    return clone;
  }, [facade, w, h]);
  const neon = style === "casino" || style === "bar" || Boolean(b.neon);
  const neonColor = neonColorOf(b);
  const color = gritColor(style, b.id);

  const inspect = (e: { stopPropagation: () => void }) => {
    if (disabled) return;
    e.stopPropagation();
    onInspect(b.id);
  };

  return (
    <group
      position={[b.x, 0, b.z]}
      onClick={inspect}
      onPointerOver={() => {
        if (!disabled) document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "";
      }}
    >
      {style === "ring" ? (
        <group>
          <mesh position={[0, h * 0.28, 0]}>
            <cylinderGeometry args={[w * 0.42, w * 0.48, h * 0.55, 10]} />
            <meshStandardMaterial color={color} roughness={0.82} />
          </mesh>
          <mesh position={[0, h * 0.55 + 0.12, 0]}>
            <boxGeometry args={[w + 0.35, 0.22, d + 0.35]} />
            <meshStandardMaterial color="#2e2b28" roughness={0.95} />
          </mesh>
        </group>
      ) : (
        <FormBody form={form} w={w} h={h} d={d} ns={ns} map={map} color={color} />
      )}
      {(form === "step" || form === "tower") && h > 8
        ? [0, 1, 2].map((i) => (
            <mesh key={i} position={ns ? [0, 1.6 + i * (h / 4.4), d / 2 + 0.16] : [w / 2 + 0.16, 1.6 + i * (h / 4.4), 0]}>
              <boxGeometry args={ns ? [Math.min(w * 0.7, 1.6), 0.08, 0.55] : [0.55, 0.08, Math.min(d * 0.7, 1.6)]} />
              <meshStandardMaterial color="#3a3632" roughness={0.8} />
            </mesh>
          ))
        : null}
      {h > 12 && form === "tower" ? (
        <mesh position={[w * 0.22, h + 0.55, -d * 0.08]}>
          <cylinderGeometry args={[0.32, 0.38, 0.9, 8]} />
          <meshStandardMaterial color="#5a544c" roughness={0.7} metalness={0.25} />
        </mesh>
      ) : null}
      {style !== "shack" && style !== "crypt" && style !== "ring" ? (
        <mesh position={facePoint(face, w, d, DOOR_H / 2, 0.06)}>
          <boxGeometry args={ns ? [0.08, DOOR_H, DOOR_W] : [DOOR_W, DOOR_H, 0.08]} />
          <meshStandardMaterial color="#1a120e" roughness={0.55} />
        </mesh>
      ) : null}
      {style !== "shack" && style !== "crypt" && style !== "ring" ? (
        <mesh position={facePoint(face, w, d, Math.min(1.15, h * 0.22), 0.05)}>
          <boxGeometry args={ns ? [0.12, Math.min(2.2, h * 0.38), front * 0.7] : [front * 0.7, Math.min(2.2, h * 0.38), 0.12]} />
          <meshStandardMaterial color="#14181c" roughness={0.35} metalness={0.15} />
        </mesh>
      ) : null}
      {style === "shop" || style === "bar" ? (
        <mesh position={facePoint(face, w, d, Math.min(h * 0.36, 2.3), 0.42)}>
          <boxGeometry args={ns ? [0.85, 0.12, front * 0.8] : [front * 0.8, 0.12, 0.85]} />
          <meshStandardMaterial color={style === "bar" ? "#6e2420" : "#5c3a28"} roughness={0.6} />
        </mesh>
      ) : null}
      {form === "motel" ? (
        <mesh position={alongFront(ns, w, d, -0.34, h + 0.35)}>
          <boxGeometry args={ns ? [0.12, 0.28, 0.9] : [0.9, 0.28, 0.12]} />
          <meshStandardMaterial color="#ff5a7a" emissive="#ff5a7a" emissiveIntensity={night ? 1.7 : 0.15} />
        </mesh>
      ) : null}
      {neon ? (
        <mesh position={facePoint(face, w, d, Math.min(h * 0.7, h - 0.4), 0.08)}>
          <boxGeometry args={ns ? [0.12, form === "casino" && h < 7 ? 0.28 : 0.4, front * (h < 7 ? 0.55 : 0.68)] : [front * (h < 7 ? 0.55 : 0.68), form === "casino" && h < 7 ? 0.28 : 0.4, 0.12]} />
          <meshStandardMaterial color={neonColor} emissive={neonColor} emissiveIntensity={night ? 1.8 : 0.25} roughness={0.35} />
        </mesh>
      ) : null}
      {b.label ? (
        <Html position={[0, h + 1.6, 0]} center distanceFactor={48} style={{ pointerEvents: "none" }} zIndexRange={[4, 0]}>
          <span className="rounded-sm bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-fg uppercase whitespace-nowrap">
            {b.label}
          </span>
        </Html>
      ) : null}
    </group>
  );
}

function Traffic() {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    const g = ref.current;
    if (!g) return;
    const t = performance.now() / 1000;
    RUNS.forEach((run, i) => {
      const pose = runPose(run, t);
      const child = g.children[i] as THREE.Group | undefined;
      if (!child) return;
      child.position.set(pose.x, 0.12, pose.z);
      child.rotation.y = pose.yaw;
    });
  });
  return (
    <group ref={ref}>
      {RUNS.map((run) => (
        <group key={run.id}>
          <mesh position={[0, 0.38, 0]}>
            <boxGeometry args={[CAR_W, 0.55, CAR_L]} />
            <meshStandardMaterial color={run.color} metalness={0.45} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.8, -0.15]}>
            <boxGeometry args={[CAR_W * 0.86, CAR_H - 0.7, CAR_L * 0.42]} />
            <meshStandardMaterial color="#141820" roughness={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function CityBlocks({
  night,
  disabled,
  onInspect,
  onWalk,
}: {
  night: boolean;
  disabled?: boolean;
  onInspect: (id: string) => void;
  onWalk: (x: number, z: number) => void;
}) {
  const asphalt = useTexture("/reno/tex/asphalt.webp");
  const dirt = useTexture("/reno/tex/dirt.webp");
  asphalt.wrapS = asphalt.wrapT = THREE.RepeatWrapping;
  dirt.wrapS = dirt.wrapT = THREE.RepeatWrapping;
  asphalt.colorSpace = THREE.SRGBColorSpace;
  dirt.colorSpace = THREE.SRGBColorSpace;
  asphalt.repeat.set(48, 40);
  dirt.repeat.set(90, 80);

  const facade = useMemo(() => makeFacade(), []);
  const names = useMemo(() => {
    const map = new Map<string, THREE.CanvasTexture>();
    for (const road of CITY.roads) {
      if (!map.has(road.name)) map.set(road.name, nameTexture(road.name));
    }
    return map;
  }, []);

  const walk = (e: { stopPropagation: () => void; point: { x: number; z: number } }) => {
    if (disabled) return;
    e.stopPropagation();
    onWalk(e.point.x, e.point.z);
  };

  const carColors = ["#3a3e44", "#6a3030", "#2c3a34", "#4a4038", "#1e242c"];

  return (
    <group>
      <mesh rotation-x={-Math.PI / 2} position={[20, -0.08, 40]} onPointerDown={walk}>
        <planeGeometry args={[MILE * 2 + 500, MILE * 2 + 500]} />
        <meshStandardMaterial map={dirt} color="#6a5844" roughness={1} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[22, 0.0, 32]} onPointerDown={walk}>
        <planeGeometry args={[250, 250]} />
        <meshStandardMaterial color="#3c3934" roughness={0.96} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[36, 0.015, 156]} onPointerDown={walk}>
        <circleGeometry args={[26, 20]} />
        <meshStandardMaterial color="#3c342c" roughness={1} />
      </mesh>

      {CITY.blocks.map((block) => (
        <mesh key={block.id} position={[block.x, 0.02, block.z]} onPointerDown={walk}>
          <boxGeometry args={[block.w, 0.05, block.d]} />
          <meshStandardMaterial color="#534e47" roughness={0.96} />
        </mesh>
      ))}

      {CITY.roads.map((road) => {
        const horizontal = alongX(road);
        const half = horizontal ? road.d / 2 : road.w / 2;
        const side = half + WALK / 2 - 0.12;
        const { spans, gaps } = sidewalkSpans(road);
        const yWalk = horizontal ? 0.07 : 0.082;
        return (
          <group key={`${road.name}-${road.x}-${road.z}`}>
            <mesh position={[road.x, 0.05, road.z]} onPointerDown={walk}>
              <boxGeometry args={[road.w, 0.1, road.d]} />
              <meshStandardMaterial map={asphalt} color="#5a5a58" roughness={0.94} metalness={0.04} />
            </mesh>
            {spans.map(([a, b], i) => {
              const len = b - a;
              const mid = (a + b) / 2;
              return (
                <group key={`span-${i}`}>
                  <mesh position={horizontal ? [mid, yWalk, road.z + side] : [road.x + side, yWalk, mid]} onPointerDown={walk}>
                    <boxGeometry args={horizontal ? [len, 0.12, WALK] : [WALK, 0.12, len]} />
                    <meshStandardMaterial color="#d4cfc4" roughness={0.88} />
                  </mesh>
                  <mesh position={horizontal ? [mid, yWalk, road.z - side] : [road.x - side, yWalk, mid]} onPointerDown={walk}>
                    <boxGeometry args={horizontal ? [len, 0.12, WALK] : [WALK, 0.12, len]} />
                    <meshStandardMaterial color="#d4cfc4" roughness={0.88} />
                  </mesh>
                  <mesh position={horizontal ? [mid, 0.09, road.z + half - 0.04] : [road.x + half - 0.04, 0.09, mid]}>
                    <boxGeometry args={horizontal ? [len, 0.16, 0.22] : [0.22, 0.16, len]} />
                    <meshStandardMaterial color="#ece7dc" roughness={0.78} />
                  </mesh>
                  <mesh position={horizontal ? [mid, 0.09, road.z - half + 0.04] : [road.x - half + 0.04, 0.09, mid]}>
                    <boxGeometry args={horizontal ? [len, 0.16, 0.22] : [0.22, 0.16, len]} />
                    <meshStandardMaterial color="#ece7dc" roughness={0.78} />
                  </mesh>
                  <mesh position={horizontal ? [mid, 0.115, road.z] : [road.x, 0.115, mid]}>
                    <boxGeometry args={horizontal ? [len * 0.92, 0.02, 0.12] : [0.12, 0.02, len * 0.92]} />
                    <meshBasicMaterial color="#c6a24a" />
                  </mesh>
                </group>
              );
            })}
            {gaps.flatMap(([a, b]) => {
              const stripes: ReactNode[] = [];
              const reach = Math.min(2.15, (b - a) / 2 - 0.55);
              if (reach < 0.7) return stripes;
              const across = Math.min(half * 0.95, 3.4);
              for (const inward of [1, -1] as const) {
                const edge = inward > 0 ? a : b;
                for (let s = 0; s < 3; s++) {
                  const along = edge + inward * (0.42 + s * 0.62);
                  if (along <= a + 0.2 || along >= b - 0.2) continue;
                  stripes.push(
                    <mesh key={`${road.name}-${a}-${inward}-${s}`} position={horizontal ? [along, 0.125, road.z] : [road.x, 0.125, along]}>
                      <boxGeometry args={horizontal ? [0.34, 0.02, across] : [across, 0.02, 0.34]} />
                      <meshBasicMaterial color="#d9d3c6" />
                    </mesh>,
                  );
                }
              }
              return stripes;
            })}
            <RoadName road={road} tex={names.get(road.name)!} />
          </group>
        );
      })}

      {CITY.buildings.map((b) => (
        <Block key={b.id} b={b} facade={facade} night={night} disabled={disabled} onInspect={onInspect} />
      ))}

      {CITY.cars.map((c, i) => (
        <group key={c.id} position={[c.x, 0.12, c.z]} rotation-y={c.yaw ?? 0}>
          <mesh position={[0, 0.38, 0]}>
            <boxGeometry args={[CAR_W, 0.55, CAR_L]} />
            <meshStandardMaterial color={carColors[i % carColors.length]} metalness={0.45} roughness={0.42} />
          </mesh>
          <mesh position={[0, 0.38 + 0.42, -0.15]}>
            <boxGeometry args={[CAR_W * 0.86, CAR_H - 0.7, CAR_L * 0.42]} />
            <meshStandardMaterial color="#141820" metalness={0.2} roughness={0.28} />
          </mesh>
        </group>
      ))}

      <Traffic />

      {CITY.junk.map((j) =>
        j.kind === "dumpster" ? (
          <group key={j.id} position={[j.x, 0, j.z]} rotation-y={j.yaw ?? 0}>
            <mesh position={[0, 0.62, 0]}>
              <boxGeometry args={[1.5, 1.25, 0.9]} />
              <meshStandardMaterial color="#3d4a38" roughness={0.72} metalness={0.2} />
            </mesh>
          </group>
        ) : (
          <mesh key={j.id} position={[j.x, 0.14, j.z]}>
            <boxGeometry args={[0.42, 0.28, 0.36]} />
            <meshStandardMaterial color="#2a2622" roughness={0.95} />
          </mesh>
        ),
      )}

      {CITY.lamps.map((lamp) => (
        <group key={lamp.id} position={[lamp.x, 0, lamp.z]}>
          <mesh position={[0, 2.35, 0]}>
            <cylinderGeometry args={[0.07, 0.1, 4.7, 6]} />
            <meshStandardMaterial color="#2a2926" metalness={0.55} roughness={0.4} />
          </mesh>
          <mesh position={[0.55, 4.55, 0]} rotation-z={Math.PI / 2}>
            <cylinderGeometry args={[0.05, 0.05, 1.1, 5]} />
            <meshStandardMaterial color="#2a2926" metalness={0.55} roughness={0.4} />
          </mesh>
          <mesh position={[1.05, 4.35, 0]}>
            <sphereGeometry args={[0.18, 8, 8]} />
            <meshStandardMaterial color="#ffe1b0" emissive="#ffb46a" emissiveIntensity={night ? 2.4 : 0.08} />
          </mesh>
        </group>
      ))}

      {night
        ? CITY.buildings
            .filter((b) => b.neon)
            .slice(0, 14)
            .map((b) => (
              <pointLight
                key={`neon-${b.id}`}
                position={[b.x, Math.max(3, b.height * 0.45), b.z + 2]}
                color={neonColorOf(b)}
                intensity={b.district ? 18 : 9}
                distance={b.district ? 28 : 16}
                decay={2}
              />
            ))
        : null}
    </group>
  );
}
