import { Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";
import { CITY, type BuildingForm, type CityBuilding, type CityRoad } from "@/lib/reno/city";
import { CAR_H, CAR_L, CAR_W, DOOR_H, DOOR_W, MILE, SIDEWALK, RUNS, runPose } from "@/lib/reno/scale";
import type { Weather } from "@/lib/reno/weather";

const WALK = SIDEWALK;

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

type Skin = "brick" | "stucco" | "concrete" | "metal" | "board" | "stone" | "plaster" | "chrome";

const STORY_PX = 160;
const FACADE_STORIES = 4;
const TILE_W = 128;

function idHash(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  return h >>> 0;
}

function paintSkin(skin: Skin, variant: number): { map: THREE.CanvasTexture; glow: THREE.CanvasTexture } {
  const H = STORY_PX * FACADE_STORIES;
  const canvas = document.createElement("canvas");
  canvas.width = TILE_W;
  canvas.height = H;
  const g = canvas.getContext("2d")!;
  const glowCanvas = document.createElement("canvas");
  glowCanvas.width = TILE_W;
  glowCanvas.height = H;
  const gl = glowCanvas.getContext("2d")!;
  gl.fillStyle = "#000";
  gl.fillRect(0, 0, TILE_W, H);
  let seed = (variant + 1) * 997 + skin.length * 17;
  const rnd = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const base: Record<Skin, string> = {
    brick: variant ? "#8c5340" : "#b16d52",
    stucco: variant ? "#cbb89a" : "#e6d4b6",
    concrete: variant ? "#7c827e" : "#a0a79f",
    metal: variant ? "#5a5646" : "#746e58",
    board: variant ? "#684430" : "#8d5c3a",
    stone: variant ? "#6c706a" : "#8c9088",
    plaster: variant ? "#ead4ae" : "#f6e6c8",
    chrome: variant ? "#c5ccd2" : "#e7ebef",
  };
  g.fillStyle = base[skin];
  g.fillRect(0, 0, TILE_W, H);
  if (skin === "brick") {
    const bh = 8;
    const bw = 18;
    for (let y = 0; y < H; y += bh) {
      const off = Math.floor(y / bh) % 2 ? bw / 2 : 0;
      for (let x = -bw; x < TILE_W + bw; x += bw) {
        const shade = 0.75 + rnd() * 0.45;
        g.fillStyle = `rgba(${Math.floor(70 * shade)},${Math.floor(32 * shade)},${Math.floor(24 * shade)},0.42)`;
        g.fillRect(x + off + 1, y + 1, bw - 2, bh - 2);
      }
      g.fillStyle = "rgba(36,18,12,0.55)";
      g.fillRect(0, y, TILE_W, 1);
    }
  } else if (skin === "board") {
    for (let y = 0; y < H; y += 10) {
      g.fillStyle = y % 20 === 0 ? "rgba(0,0,0,0.28)" : "rgba(255,214,170,0.06)";
      g.fillRect(0, y, TILE_W, 9);
      g.fillStyle = "rgba(28,14,8,0.65)";
      g.fillRect(0, y + 9, TILE_W, 1);
    }
  } else if (skin === "metal") {
    for (let x = 0; x < TILE_W; x += 7) {
      g.fillStyle = x % 14 === 0 ? "rgba(0,0,0,0.32)" : "rgba(255,255,255,0.07)";
      g.fillRect(x, 0, 3, H);
    }
  } else if (skin === "stone") {
    const bh = 26;
    const bw = 36;
    g.lineWidth = 2;
    for (let y = 0; y < H; y += bh) {
      const off = Math.floor(y / bh) % 2 ? 16 : 0;
      for (let x = -bw; x < TILE_W + bw; x += bw) {
        g.strokeStyle = "rgba(18,20,18,0.6)";
        g.strokeRect(x + off, y, bw, bh);
      }
    }
  } else if (skin === "stucco" || skin === "plaster") {
    for (let i = 0; i < 90; i++) {
      g.fillStyle = `rgba(70,48,28,${0.04 + rnd() * 0.09})`;
      g.fillRect(rnd() * TILE_W, rnd() * H, 2 + rnd() * 5, 2);
    }
  } else if (skin === "concrete") {
    for (let s = 0; s < FACADE_STORIES; s++) {
      g.fillStyle = "rgba(0,0,0,0.22)";
      g.fillRect(0, H - s * STORY_PX - 8, TILE_W, 5);
    }
  } else if (skin === "chrome") {
    g.fillStyle = "#8e1e22";
    g.fillRect(0, H - 22, TILE_W, 12);
  }
  const frame: Record<Skin, string> = {
    brick: "#d9cbb4",
    stucco: "#f3ecdf",
    concrete: "#c5ccc6",
    metal: "#2e3230",
    board: "#3a2418",
    stone: "#c8c2b4",
    plaster: "#c6a15a",
    chrome: "#f4f7f8",
  };
  const drawWin = (x: number, y: number, ww: number, wh: number, glowColor: string) => {
    g.fillStyle = "rgba(0,0,0,0.35)";
    g.fillRect(x - 8, y - 8, ww + 16, wh + 18);
    g.fillStyle = frame[skin];
    g.fillRect(x - 6, y - 6, ww + 12, wh + 14);
    g.fillStyle = "#0c1218";
    g.fillRect(x, y, ww, wh);
    g.fillStyle = "rgba(210,230,236,0.45)";
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + ww * 0.46, y);
    g.lineTo(x, y + wh * 0.55);
    g.fill();
    g.fillStyle = frame[skin];
    g.fillRect(x + ww * 0.47, y, 3, wh);
    if (glowColor !== "#000") {
      gl.fillStyle = glowColor;
      gl.globalAlpha = 0.45;
      gl.fillRect(x - 6, y - 6, ww + 12, wh + 12);
      gl.globalAlpha = 1;
      gl.fillRect(x + 2, y + 2, ww - 4, wh - 4);
    }
  };
  for (let s = 0; s < FACADE_STORIES; s++) {
    const y0 = H - (s + 1) * STORY_PX;
    const ground = s === 0;
    const lit = rnd();
    const palette = ["#ffc27a", "#ffe1b0", "#9fd4ff", "#ff6ea8", "#7af0ff", "#ffd27a", "#e7b0ff"];
    const glowColor = lit > 0.14 ? palette[Math.floor(rnd() * palette.length)]! : "#000";
    const shift = variant ? 6 : 0;
    if (skin === "metal") {
      drawWin(18 + shift, y0 + 22, 24, 20, glowColor);
      drawWin(78 - shift, y0 + 22, 24, 20, glowColor);
    } else if (skin === "concrete") {
      drawWin(8, y0 + 46, TILE_W - 16, 42, glowColor);
    } else if (skin === "board") {
      drawWin(44 + shift, y0 + 42, 32, 40, glowColor);
    } else if (ground && (skin === "plaster" || skin === "chrome" || skin === "brick" || skin === "stucco")) {
      drawWin(8, y0 + 34, 50, 86, glowColor);
      drawWin(70, y0 + 34, 50, 86, glowColor === "#000" ? "#ffc27a" : glowColor);
    } else {
      drawWin(14 + shift, y0 + 32, 40, 58, glowColor);
      drawWin(74 - shift, y0 + 32, 40, 58, rnd() > 0.22 ? glowColor : "#000");
    }
    g.fillStyle = "rgba(20,16,12,0.55)";
    g.fillRect(0, y0, TILE_W, 14);
    g.fillStyle = "rgba(255,255,255,0.2)";
    g.fillRect(0, y0 + 14, TILE_W, 3);
  }
  g.fillStyle = "rgba(20,16,12,0.28)";
  g.fillRect(0, H - 18, TILE_W, 18);
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  const glow = new THREE.CanvasTexture(glowCanvas);
  glow.colorSpace = THREE.SRGBColorSpace;
  glow.wrapS = glow.wrapT = THREE.RepeatWrapping;
  return { map, glow };
}

function paintSkins(): Record<Skin, Array<{ map: THREE.CanvasTexture; glow: THREE.CanvasTexture }>> {
  const skins: Skin[] = ["brick", "stucco", "concrete", "metal", "board", "stone", "plaster", "chrome"];
  const out = {} as Record<Skin, Array<{ map: THREE.CanvasTexture; glow: THREE.CanvasTexture }>>;
  for (const skin of skins) out[skin] = [paintSkin(skin, 0), paintSkin(skin, 1)];
  return out;
}

function skinFor(form: BuildingForm, style: string, id: string): Skin {
  if (form === "church") return "stone";
  if (form === "diner") return "chrome";
  if (form === "shack") return "board";
  if (form === "shed" || form === "loft" || form === "garage" || form === "depot") return "metal";
  if (form === "tower" || form === "slab" || form === "arena") return "concrete";
  if (form === "casino" || form === "marquee" || form === "hotel") return "plaster";
  if (form === "motel" || form === "court") return "stucco";
  if (style === "warehouse") return "metal";
  if (style === "bar" || form === "pawn") return "brick";
  return idHash(id) % 2 === 0 ? "brick" : "stucco";
}

function facadeTint(id: string): string {
  const tints = ["#ffffff", "#f4e7d6", "#efe4d4", "#e7eee6", "#f8f2e6", "#f3e4d6", "#e9e6df", "#f7f3ea"];
  return tints[idHash(id) % tints.length]!;
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

function Part({
  a,
  p,
  r,
  color,
  map,
  glow,
  night,
  metal = 0.05,
  rough = 0.86,
  em,
  ei,
}: {
  a: [number, number, number];
  p: [number, number, number];
  r?: [number, number, number];
  color: string;
  map?: THREE.Texture;
  glow?: THREE.Texture;
  night?: boolean;
  metal?: number;
  rough?: number;
  em?: string;
  ei?: number;
}) {
  return (
    <mesh position={p} rotation={r}>
      <boxGeometry args={a} />
      <meshStandardMaterial
        map={map}
        color={color}
        roughness={rough}
        metalness={metal}
        emissive={em ?? (glow ? "#ffffff" : "#000000")}
        emissiveMap={glow}
        emissiveIntensity={ei ?? (glow ? (night ? 2.15 : 0.05) : 0)}
      />
    </mesh>
  );
}

function StreetTrim({ w, h, d, form }: { w: number; h: number; d: number; form: BuildingForm }) {
  if (form === "arena" || form === "shack" || form === "diner") return null;
  const parapet = form === "shed" || form === "loft" || form === "garage" || form === "depot" ? 0.55 : 1.15;
  const bands = form === "shed" || form === "loft" || form === "garage" ? [] : h > 7 ? [0.34, 0.62] : [0.55];
  return (
    <group>
      <mesh position={[0, 1.15, 0]}>
        <boxGeometry args={[w + 0.22, 2.3, d + 0.22]} />
        <meshStandardMaterial color="#241e1a" roughness={0.94} />
      </mesh>
      {bands.map((t) => (
        <mesh key={t} position={[0, h * t, 0]}>
          <boxGeometry args={[w + 0.85, 0.32, d + 0.85]} />
          <meshStandardMaterial color="#f0e6d4" roughness={0.72} />
        </mesh>
      ))}
      <mesh position={[0, h + parapet / 2, 0]}>
        <boxGeometry args={[w + 0.85, parapet, d + 0.85]} />
        <meshStandardMaterial color="#efe4d2" roughness={0.7} />
      </mesh>
      {(
        [
          [w / 2, d / 2],
          [-w / 2, d / 2],
          [w / 2, -d / 2],
          [-w / 2, -d / 2],
        ] as Array<[number, number]>
      ).map(([x, z]) => (
        <mesh key={`${x}:${z}`} position={[x, h / 2, z]}>
          <boxGeometry args={[0.55, h + parapet, 0.55]} />
          <meshStandardMaterial color="#f4efe4" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function FormBody({
  form,
  w,
  h,
  d,
  ns,
  face,
  map,
  glow,
  night,
  accent,
}: {
  form: BuildingForm;
  w: number;
  h: number;
  d: number;
  ns: boolean;
  face: NonNullable<CityBuilding["face"]>;
  map: THREE.Texture;
  glow: THREE.Texture;
  night: boolean;
  accent: string;
}) {
  const cap = "#2a2724";
  const span = ns ? d : w;
  const thick = ns ? w : d;
  const wall = { map, glow, night, color: "#ffffff" };
  if (form === "step") {
    const baseH = h * 0.55;
    const topH = h - baseH;
    return (
      <group>
        <Part a={[w, baseH, d]} p={[0, baseH / 2, 0]} {...wall} />
        <Part a={[w * 0.62, topH, d * 0.58]} p={[w * 0.08, baseH + topH / 2, d * 0.06]} {...wall} />
        <Part a={[w * 0.7, 0.28, d * 0.66]} p={[w * 0.08, baseH + 0.1, d * 0.06]} color={cap} />
      </group>
    );
  }
  if (form === "tower") {
    const pod = Math.min(h * 0.22, 8);
    return (
      <group>
        <Part a={[w, pod, d]} p={[0, pod / 2, 0]} {...wall} />
        <Part a={[w * 0.38, h - pod, d * 0.38]} p={[0, pod + (h - pod) / 2, 0]} {...wall} />
        <Part a={[w * 0.58, 0.4, d * 0.58]} p={[0, pod + 0.15, 0]} color={cap} />
        <Part a={[w * 0.24, 2.4, d * 0.24]} p={[0, h + 1.2, 0]} {...wall} />
        <mesh position={[0, h + 3.6, 0]}>
          <cylinderGeometry args={[0.07, 0.09, 2.6, 6]} />
          <meshStandardMaterial color="#2c2a28" metalness={0.6} roughness={0.35} />
        </mesh>
        <mesh position={[0, h + 5, 0]}>
          <sphereGeometry args={[0.18, 8, 6]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={night ? 3.2 : 0.2} />
        </mesh>
      </group>
    );
  }
  if (form === "wing") {
    return (
      <group>
        <Part a={frontBox(ns, span * 0.62, h, thick)} p={alongFront(ns, w, d, -0.16, h / 2)} {...wall} />
        <Part a={frontBox(ns, span * 0.36, h * 0.55, thick * 0.78)} p={alongFront(ns, w, d, 0.3, h * 0.28)} {...wall} />
        <Part a={[0.9, h * 0.4, 0.9]} p={[0, h * 0.7, 0]} {...wall} />
      </group>
    );
  }
  if (form === "motel" || form === "hotel") {
    return (
      <group>
        <Part a={frontBox(ns, span * 0.8, h * 0.7, thick * 0.7)} p={alongFront(ns, w, d, 0.08, h * 0.35)} {...wall} />
        <Part a={frontBox(ns, span * 0.22, h, thick * 0.92)} p={alongFront(ns, w, d, -0.32, h / 2)} {...wall} />
        <Part a={frontBox(ns, span * 0.7, 0.14, 1.4)} p={facePoint(face, w, d, Math.min(h * 0.42, 4.2), 0.85)} color="#6a5344" />
        <Part a={frontBox(ns, span * 0.5, 0.18, 2.4)} p={facePoint(face, w, d, 3.05, 1.3)} color="#3a3028" />
      </group>
    );
  }
  if (form === "shack") {
    return (
      <group>
        <Part a={[w * 0.84, h * 0.6, d * 0.8]} p={[0, h * 0.3, 0]} {...wall} />
        <Part a={[w * 1.2, 0.18, d * 1.15]} p={[0, h * 0.64, 0]} r={ns ? [0.32, 0, 0] : [0, 0, -0.26]} color="#5a4030" rough={1} />
        <Part a={[0.28, 0.9, 0.28]} p={[w * 0.28, h * 0.8, 0]} color="#3a3028" />
        <Part a={frontBox(ns, span * 0.5, 0.1, 0.9)} p={facePoint(face, w, d, h * 0.34, 0.55)} color="#6a4c38" />
      </group>
    );
  }
  if (form === "casino" || form === "marquee") {
    const podium = Math.min(h, Math.max(4.2, h * 0.62));
    return (
      <group>
        <Part a={[w, podium, d]} p={[0, podium / 2, 0]} {...wall} />
        {form === "casino" ? <Part a={frontBox(ns, span * 0.16, h * 1.08, thick * 0.4)} p={alongFront(ns, w, d, 0.36, h * 0.5)} {...wall} /> : null}
        <Part a={frontBox(ns, span * 0.78, 0.7, 2.2)} p={facePoint(face, w, d, Math.min(h * 0.7, h - 0.4), 1.15)} color={accent} em={accent} ei={night ? 3.1 : 0.25} metal={0.2} rough={0.4} />
        <Part a={frontBox(ns, span * 0.62, 0.28, 2.05)} p={facePoint(face, w, d, Math.min(h * 0.7, h - 0.4) - 0.85, 1.05)} color="#7af0ff" em="#7af0ff" ei={night ? 2.4 : 0.12} metal={0.2} rough={0.35} />
        {form === "marquee" ? (
          <Part a={frontBox(ns, 0.55, Math.min(h * 0.9, 9), 2.2)} p={alongFront(ns, w, d, -0.42, h * 0.48)} color={accent} em={accent} ei={night ? 2.8 : 0.2} />
        ) : null}
      </group>
    );
  }
  if (form === "shed" || form === "loft") {
    return (
      <group>
        <Part a={[w, h * 0.68, d]} p={[0, h * 0.34, 0]} {...wall} />
        <Part a={frontBox(ns, span * 0.32, h * 0.32, 0.4)} p={facePoint(face, w, d, 1.1, 0.15)} color="#241f1c" metal={0.3} />
        {form === "loft"
          ? [-0.28, 0, 0.28].map((t) => (
              <Part key={t} a={[w * 0.96, 0.22, d * 0.3]} p={[0, h * 0.82, t * d * 0.62]} r={ns ? [0.7, 0, 0] : [0, 0, 0.7]} color="#4a463c" metal={0.4} rough={0.5} />
            ))
          : <Part a={[w * 0.3, h * 0.18, d * 0.26]} p={[0, h * 0.78, 0]} {...wall} />}
        <Part a={[0.7, h * 0.55, 0.7]} p={[w * 0.32, h * 0.9, -d * 0.18]} color="#5a4030" />
      </group>
    );
  }
  if (form === "walkup") {
    return (
      <group>
        <Part a={[w, h, d * 0.9]} p={[0, h / 2, 0]} {...wall} />
        <Part a={frontBox(ns, Math.min(span * 0.28, 3.2), h * 0.78, 1.1)} p={facePoint(face, w, d, h * 0.4, 0.4)} {...wall} />
        <Part a={[1.1, 1.3, 1.1]} p={[w * 0.22, h + 0.9, 0]} color="#5c564c" metal={0.25} />
      </group>
    );
  }
  if (form === "depot") {
    return (
      <group>
        <Part a={[w * 0.72, h * 0.55, d]} p={[w * 0.08, h * 0.28, 0]} {...wall} />
        <Part a={[w * 0.2, h, d * 0.48]} p={[-w * 0.34, h / 2, 0]} {...wall} />
        <Part a={frontBox(ns, span * 0.75, 0.16, 3.2)} p={facePoint(face, w, d, 3.6, 1.6)} color="#3a3834" metal={0.25} />
        <mesh position={[-w * 0.34, h * 0.72, face === "-z" ? -d * 0.26 : d * 0.26]}>
          <circleGeometry args={[0.7, 18]} />
          <meshStandardMaterial color="#f4efe2" emissive="#f4efe2" emissiveIntensity={night ? 0.45 : 0.08} />
        </mesh>
      </group>
    );
  }
  if (form === "garage") {
    return (
      <group>
        <Part a={[w * 0.55, h * 0.9, d * 0.62]} p={[-w * 0.14, h * 0.45, 0]} {...wall} />
        <Part a={[w * 0.9, 0.2, d * 0.7]} p={[w * 0.08, 3.3, 0]} color="#d5d0c4" metal={0.2} />
        <Part a={[0.14, 3.2, 0.14]} p={[w * 0.32, 1.6, d * 0.22]} color="#222" metal={0.45} />
        <Part a={[0.14, 3.2, 0.14]} p={[w * 0.32, 1.6, -d * 0.18]} color="#222" metal={0.45} />
        <mesh position={[w * 0.16, 0.9, d * 0.12]}>
          <cylinderGeometry args={[0.32, 0.32, 1.35, 10]} />
          <meshStandardMaterial color="#d23a32" metalness={0.25} roughness={0.4} />
        </mesh>
        <mesh position={[w * 0.16, 0.9, -d * 0.16]}>
          <cylinderGeometry args={[0.32, 0.32, 1.35, 10]} />
          <meshStandardMaterial color="#d23a32" metalness={0.25} roughness={0.4} />
        </mesh>
        <Part a={[0.16, 4.2, 0.16]} p={[-w * 0.4, 2.1, 0]} color="#1c1c1c" metal={0.5} />
        <Part a={[1.3, 0.9, 0.12]} p={[-w * 0.4, 4.1, 0]} color={accent} em={accent} ei={night ? 1.3 : 0.2} />
      </group>
    );
  }
  if (form === "church") {
    return (
      <group>
        <Part a={[w * 0.62, h * 0.62, d]} p={[w * 0.08, h * 0.31, 0]} {...wall} />
        <Part a={[w * 0.22, h * 1.35, d * 0.22]} p={[-w * 0.24, h * 0.67, 0]} color="#cfc8ba" map={map} glow={glow} night={night} />
        <Part a={[w * 0.1, h * 0.4, d * 0.1]} p={[-w * 0.24, h * 1.2, 0]} color="#6a6e68" />
        <Part a={[0.9, 0.1, 0.1]} p={[-w * 0.24, h * 1.45, 0]} color="#f4efe2" />
        <Part a={[0.1, 1.1, 0.1]} p={[-w * 0.24, h * 1.45, 0]} color="#f4efe2" />
      </group>
    );
  }
  if (form === "arena") {
    const rad = Math.min(w, d) * 0.36;
    return (
      <group>
        <mesh position={[0, h * 0.32, 0]}>
          <cylinderGeometry args={[rad * 0.78, rad, h * 0.55, 18]} />
          <meshStandardMaterial color="#8d8478" roughness={0.75} />
        </mesh>
        <Part a={[w * 0.95, h * 0.38, d * 0.32]} p={[0, h * 0.24, d * 0.28]} color="#4a463e" />
        <Part a={[w * 0.32, h * 0.38, d * 0.95]} p={[w * 0.28, h * 0.24, 0]} color="#4a463e" />
        <mesh position={[w * 0.3, h * 0.85, d * 0.22]}>
          <cylinderGeometry args={[0.1, 0.12, h, 6]} />
          <meshStandardMaterial color="#2a2826" metalness={0.5} />
        </mesh>
        <mesh position={[w * 0.3, h * 1.15, d * 0.22]}>
          <boxGeometry args={[1.4, 0.16, 0.4]} />
          <meshStandardMaterial color="#fff1c8" emissive="#fff1c8" emissiveIntensity={night ? 1.8 : 0.2} />
        </mesh>
      </group>
    );
  }
  if (form === "diner") {
    return (
      <group>
        <Part a={[w * 0.92, h * 0.58, d * 0.75]} p={[0, h * 0.29, 0]} {...wall} metal={0.25} rough={0.4} />
        <mesh position={[0, h * 0.66, 0]} rotation={ns ? [Math.PI / 2, 0, 0] : [0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[Math.min(w, d) * 0.34, Math.min(w, d) * 0.34, Math.max(w, d) * 0.9, 14, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#dfe4e8" metalness={0.6} roughness={0.25} side={THREE.DoubleSide} />
        </mesh>
        <Part a={[0.16, h * 1.2, 0.16]} p={[w * 0.42, h * 0.6, 0]} color="#222" metal={0.5} />
        <Part a={[0.2, 0.9, 1.6]} p={[w * 0.42, h * 1.15, 0]} color={accent} em={accent} ei={night ? 1.5 : 0.25} />
      </group>
    );
  }
  if (form === "pawn") {
    return (
      <group>
        <Part a={[w, h, d * 0.78]} p={[0, h / 2, 0]} {...wall} />
        <Part a={frontBox(ns, 0.16, 1.3, 1.1)} p={facePoint(face, w, d, h * 0.62, 0.7)} color={accent} em={accent} ei={night ? 1.2 : 0.15} />
        <Part a={frontBox(ns, span * 0.62, 0.1, 0.1)} p={facePoint(face, w, d, 1.7, 0.16)} color="#111" metal={0.7} />
      </group>
    );
  }
  if (form === "slab") {
    return (
      <group>
        <Part a={[w * 0.92, h, d * 0.92]} p={[0, h / 2, 0]} {...wall} />
        {[0.3, 0.55, 0.78].map((t) => (
          <Part key={t} a={[w + 0.5, 0.18, d + 0.5]} p={[0, h * t, 0]} color="#3e4440" metal={0.2} />
        ))}
        <Part a={[w * 0.34, 2.1, d * 0.34]} p={[w * 0.16, h + 1.05, 0]} color="#4a4e4a" />
      </group>
    );
  }
  if (form === "court") {
    return (
      <group>
        <Part a={frontBox(ns, span, h * 0.82, thick * 0.32)} p={alongFront(ns, w, d, -0.3, h * 0.41)} {...wall} />
        <Part a={[thick * 0.32, h * 0.7, d * 0.78]} p={[-w * 0.3, h * 0.35, 0]} {...wall} />
        <Part a={[thick * 0.32, h * 0.7, d * 0.78]} p={[w * 0.3, h * 0.35, 0]} {...wall} />
      </group>
    );
  }
  return (
    <group>
      <Part a={[w, h, d]} p={[0, h / 2, 0]} {...wall} />
      <Part a={[0.4, 0.9, 0.4]} p={[w * 0.32, h + 0.45, d * 0.2]} color="#3a3632" />
    </group>
  );
}

function Block({
  b,
  skins,
  night,
  disabled,
  onInspect,
}: {
  b: CityBuilding;
  skins: Record<Skin, Array<{ map: THREE.CanvasTexture; glow: THREE.CanvasTexture }>>;
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
  const h = Math.max(2.8, b.height);
  const d = ns ? front : thick;
  const face = b.face ?? "+z";
  let form: BuildingForm = b.form ?? (style === "motel" ? "motel" : style === "shack" ? "shack" : style === "casino" ? "casino" : "box");
  if (style === "ring") form = "arena";
  if (style === "crypt" && form === "box") form = "church";
  const skin = skinFor(form, style, b.id);
  const painted = skins[skin][idHash(b.id) % 2]!;
  const repeatX = Math.max(0.7, front / 3.4);
  const repeatY = Math.max(0.3, h / (2.6 * FACADE_STORIES));
  const map = useMemo(() => {
    const clone = painted.map.clone();
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping;
    clone.repeat.set(repeatX, repeatY);
    clone.colorSpace = THREE.SRGBColorSpace;
    clone.needsUpdate = true;
    return clone;
  }, [painted.map, repeatX, repeatY]);
  const glow = useMemo(() => {
    const clone = painted.glow.clone();
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping;
    clone.repeat.set(repeatX, repeatY);
    clone.colorSpace = THREE.SRGBColorSpace;
    clone.needsUpdate = true;
    return clone;
  }, [painted.glow, repeatX, repeatY]);
  const neon = style === "casino" || style === "bar" || style === "shop" || Boolean(b.neon) || form === "marquee" || form === "pawn" || form === "diner" || form === "hotel" || form === "motel";
  const neonColor = neonColorOf(b);
  const tint = facadeTint(b.id);
  const commercial = form === "pawn" || form === "diner" || form === "casino" || form === "marquee" || style === "shop" || style === "bar";
  const quietFace = form === "shack" || form === "church" || form === "arena" || form === "garage";
  const landings = form === "walkup" || (form === "step" && h > 11) ? Math.min(5, Math.max(2, Math.floor(h / 3.15) - 1)) : 0;
  const roof = idHash(b.id + "roof") % 5;

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
      <StreetTrim w={w} h={h} d={d} form={form} />
      <FormBody form={form} w={w} h={h} d={d} ns={ns} face={face} map={map} glow={glow} night={night} accent={neonColor} />
      {landings > 0
        ? Array.from({ length: landings }, (_, i) => (
            <mesh key={`esc-${i}`} position={facePoint(face, w, d, 2.6 + i * 3.05, 0.7)}>
              <boxGeometry args={ns ? [0.9, 0.08, Math.min(front * 0.34, 2.4)] : [Math.min(front * 0.34, 2.4), 0.08, 0.9]} />
              <meshStandardMaterial color="#3a3e42" metalness={0.55} roughness={0.4} />
            </mesh>
          ))
        : null}
      {!quietFace ? (
        <mesh position={facePoint(face, w, d, DOOR_H / 2, 0.1)}>
          <boxGeometry args={ns ? [0.1, DOOR_H, DOOR_W] : [DOOR_W, DOOR_H, 0.1]} />
          <meshStandardMaterial color="#140e0c" roughness={0.5} />
        </mesh>
      ) : null}
      {!quietFace ? (
        <mesh position={facePoint(face, w, d, 0.14, 0.28)}>
          <boxGeometry args={ns ? [0.8, 0.18, 1.7] : [1.7, 0.18, 0.8]} />
          <meshStandardMaterial color="#6e675e" roughness={0.9} />
        </mesh>
      ) : null}
      {commercial ? (
        <>
          <mesh position={facePoint(face, w, d, 1.55, 0.12)}>
            <boxGeometry args={ns ? [0.08, 1.8, Math.min(front * 0.5, 7)] : [Math.min(front * 0.5, 7), 1.8, 0.08]} />
            <meshStandardMaterial color="#b7dbe8" emissive="#d7f4ff" emissiveIntensity={night ? 1.45 : 0.06} roughness={0.12} metalness={0.3} transparent opacity={0.85} />
          </mesh>
          <mesh position={facePoint(face, w, d, 2.6, 0.7)}>
            <boxGeometry args={ns ? [1.2, 0.1, Math.min(front * 0.66, 9)] : [Math.min(front * 0.66, 9), 0.1, 1.2]} />
            <meshStandardMaterial color={style === "bar" || form === "diner" ? "#7a2420" : "#6a4630"} roughness={0.55} />
          </mesh>
        </>
      ) : null}
      {form === "motel" || form === "hotel" ? (
        <mesh position={facePoint(face, w, d, h + 0.7, 0.25)}>
          <boxGeometry args={ns ? [0.14, 0.5, 1.8] : [1.8, 0.5, 0.14]} />
          <meshStandardMaterial color="#ff5a7a" emissive="#ff5a7a" emissiveIntensity={night ? 3.2 : 0.18} />
        </mesh>
      ) : null}
      {neon && form !== "marquee" && form !== "diner" && form !== "casino" ? (
        <>
          <mesh position={facePoint(face, w, d, Math.min(h * 0.72, h - 0.4), 0.16)}>
            <boxGeometry args={ns ? [0.16, 0.55, front * 0.62] : [front * 0.62, 0.55, 0.16]} />
            <meshStandardMaterial color={neonColor} emissive={neonColor} emissiveIntensity={night ? 3.1 : 0.28} roughness={0.35} />
          </mesh>
          <mesh position={facePoint(face, w, d, Math.min(h * 0.5, h - 1.3), 0.2)}>
            <boxGeometry args={ns ? [0.22, 1.4, 0.22] : [0.22, 1.4, 0.22]} />
            <meshStandardMaterial color="#7af0ff" emissive="#7af0ff" emissiveIntensity={night ? 2.6 : 0.12} roughness={0.3} />
          </mesh>
        </>
      ) : null}
      {form !== "church" && form !== "diner" && form !== "shack" && form !== "tower" && form !== "arena" && h > 5
        ? roof === 0 ? (
            <mesh position={[w * 0.22, h + 0.85, -d * 0.12]}>
              <cylinderGeometry args={[0.45, 0.5, 1.2, 10]} />
              <meshStandardMaterial color="#5a544c" metalness={0.3} roughness={0.6} />
            </mesh>
          ) : roof === 1 ? (
            <mesh position={[-w * 0.16, h + 0.4, d * 0.1]}>
              <boxGeometry args={[1.1, 0.6, 0.8]} />
              <meshStandardMaterial color="#3e4a44" metalness={0.35} roughness={0.55} />
            </mesh>
          ) : roof === 2 ? (
            <mesh position={[0.2, h + 1.6, 0]}>
              <cylinderGeometry args={[0.05, 0.06, 2.8, 5]} />
              <meshStandardMaterial color="#2a2826" metalness={0.55} />
            </mesh>
          ) : roof === 3 ? (
            <mesh position={[w * 0.28, h + 0.7, -d * 0.2]}>
              <boxGeometry args={[0.5, 1.15, 0.5]} />
              <meshStandardMaterial color="#4a342c" roughness={0.9} />
            </mesh>
          ) : null
        : null}
      {b.label ? (
        <Html position={[0, h + 2.2, 0]} center distanceFactor={48} style={{ pointerEvents: "none" }} zIndexRange={[4, 0]}>
          <span className="rounded-sm bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] tracking-wide uppercase whitespace-nowrap" style={{ color: tint }}>
            {b.label}
          </span>
        </Html>
      ) : null}
    </group>
  );
}

function SidewalkPeople({ night, weather }: { night: boolean; weather: Weather }) {
  const ref = useRef<THREE.Group>(null);
  const hide = weather === "storm" ? 0.7 : weather === "rain" ? 0.42 : weather === "dust" ? 0.16 : 0;
  useFrame(() => {
    const g = ref.current;
    if (!g) return;
    const t = performance.now() / 1000;
    const drag = weather === "storm" ? 0.35 : weather === "rain" ? 0.55 : weather === "wind" ? 0.8 : 1;
    CITY.peds.forEach((ped, i) => {
      const child = g.children[i] as THREE.Group | undefined;
      if (!child) return;
      const ducked = ((i * 17) % 100) / 100 < hide;
      child.visible = !(ped.nightOnly && !night) && !ducked;
      if (!child.visible) return;
      const swing = Math.sin(t * 0.42 * drag + ped.phase) * Math.min(1.15, ped.amp * 0.28);
      child.position.set(ped.axis === "x" ? ped.x + swing : ped.x, 0, ped.axis === "z" ? ped.z + swing : ped.z);
    });
  });
  return (
    <group ref={ref}>
      {CITY.peds.map((ped) => {
        const cop = ped.sprite.includes("cop");
        const woman = ped.sprite.includes("woman");
        const gang = ped.sprite.includes("gang");
        const coat = cop ? "#4d5c68" : gang ? "#3a2e32" : woman ? "#8d5a62" : "#6e5a48";
        const skin = woman ? "#c4a090" : "#a88870";
        return (
          <group key={ped.id} position={[ped.x, 0, ped.z]}>
            <mesh position={[0, 0.86, 0]}>
              <capsuleGeometry args={[0.2, 1.02, 5, 8]} />
              <meshStandardMaterial color={coat} roughness={0.82} />
            </mesh>
            <mesh position={[0, 1.58, 0]}>
              <sphereGeometry args={[0.13, 8, 6]} />
              <meshStandardMaterial color={skin} roughness={0.7} />
            </mesh>
          </group>
        );
      })}
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
  weather,
  disabled,
  onInspect,
  onWalk,
}: {
  night: boolean;
  weather: Weather;
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

  const skins = useMemo(() => paintSkins(), []);
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
        <Block key={b.id} b={b} skins={skins} night={night} disabled={disabled} onInspect={onInspect} />
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
      <SidewalkPeople night={night} weather={weather} />

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

      {CITY.lamps.map((lamp, i) => (
        <group key={lamp.id} position={[lamp.x, 0, lamp.z]}>
          <mesh position={[0, 3.05, 0]}>
            <cylinderGeometry args={[0.07, 0.09, 6.1, 6]} />
            <meshStandardMaterial color="#2a2926" metalness={0.55} roughness={0.4} />
          </mesh>
          <mesh position={[0.7, 5.95, 0]} rotation-z={Math.PI / 2}>
            <cylinderGeometry args={[0.045, 0.045, 1.4, 5]} />
            <meshStandardMaterial color="#2a2926" metalness={0.55} roughness={0.4} />
          </mesh>
          <mesh position={[1.3, 5.85, 0]}>
            <sphereGeometry args={[0.18, 8, 8]} />
            <meshStandardMaterial color="#ffe1b0" emissive="#ffd27a" emissiveIntensity={night ? 4.2 : 0.08} />
          </mesh>
          {night && i % 5 === 0 && i < 100 ? (
            <pointLight position={[1.3, 5.9, 0]} color="#ffb46a" intensity={7} distance={16} decay={2} />
          ) : null}
        </group>
      ))}

      {night
        ? (() => {
            const landmarks = CITY.buildings.filter((b) => b.district);
            const clubs = CITY.buildings.filter(
              (b) => !b.district && (b.neon || b.form === "casino" || b.form === "marquee" || b.form === "diner"),
            );
            const taken = new Set([...landmarks, ...clubs].map((b) => b.id));
            const rooms = CITY.buildings.filter(
              (b, i) => !taken.has(b.id) && b.height > 7 && b.form !== "shack" && b.form !== "shed" && i % 2 === 0,
            );
            const picks = [...landmarks, ...clubs.slice(0, 22), ...rooms.slice(0, 18)];
            return picks.map((b) => {
              const club = Boolean(b.district || b.neon || b.form === "casino" || b.form === "marquee" || b.form === "diner");
              return (
                <pointLight
                  key={`neon-${b.id}`}
                  position={[b.x, Math.max(3.2, b.height * 0.42), b.z + 2.2]}
                  color={club ? neonColorOf(b) : "#ffc27a"}
                  intensity={club ? (b.district ? 28 : 16) : 9}
                  distance={club ? (b.district ? 36 : 22) : 16}
                  decay={2}
                />
              );
            });
          })()
        : null}
    </group>
  );
}
