import { CITY, type CityBuilding } from "./city";
import { DISTRICT_POS } from "./world";

/** Street grid. Coarse enough to cross downtown, fine enough to stay out of a facade. */
const CELL = 4;

export interface Point {
  x: number;
  z: number;
}

interface Grid {
  minX: number;
  minZ: number;
  cols: number;
  rows: number;
  blocked: Uint8Array;
}

let cached: Grid | null = null;

function halves(b: CityBuilding): { hw: number; hd: number } {
  const ns = b.face === "+x" || b.face === "-x";
  const front = b.width;
  const thick = b.depth ?? front * 0.58;
  return ns ? { hw: thick / 2, hd: front / 2 } : { hw: front / 2, hd: thick / 2 };
}

function grid(): Grid {
  if (cached) return cached;
  let minX = -40;
  let maxX = 40;
  let minZ = -40;
  let maxZ = 40;
  const grow = (x: number, z: number, pad: number) => {
    minX = Math.min(minX, x - pad);
    maxX = Math.max(maxX, x + pad);
    minZ = Math.min(minZ, z - pad);
    maxZ = Math.max(maxZ, z + pad);
  };
  for (const b of CITY.buildings) {
    const box = halves(b);
    grow(b.x, b.z, Math.max(box.hw, box.hd) + 8);
  }
  for (const r of CITY.roads) grow(r.x, r.z, Math.max(r.w, r.d) / 2 + 8);
  for (const p of Object.values(DISTRICT_POS)) grow(p.x, p.z, 16);
  minX = Math.floor(minX / CELL) * CELL;
  minZ = Math.floor(minZ / CELL) * CELL;
  const cols = Math.max(2, Math.ceil((maxX - minX) / CELL));
  const rows = Math.max(2, Math.ceil((maxZ - minZ) / CELL));
  const blocked = new Uint8Array(cols * rows);
  const mark = (x: number, z: number, hw: number, hd: number, value: number) => {
    const c0 = Math.max(0, Math.floor((x - hw - minX) / CELL));
    const c1 = Math.min(cols - 1, Math.floor((x + hw - minX) / CELL));
    const r0 = Math.max(0, Math.floor((z - hd - minZ) / CELL));
    const r1 = Math.min(rows - 1, Math.floor((z + hd - minZ) / CELL));
    for (let r = r0; r <= r1; r++) {
      for (let c = c0; c <= c1; c++) {
        const px = minX + (c + 0.5) * CELL;
        const pz = minZ + (r + 0.5) * CELL;
        if (Math.abs(px - x) <= hw && Math.abs(pz - z) <= hd) blocked[r * cols + c] = value;
      }
    }
  };
  for (const b of CITY.buildings) {
    const box = halves(b);
    mark(b.x, b.z, box.hw + 0.75, box.hd + 0.75, 1);
  }
  for (const road of CITY.roads) {
    mark(road.x, road.z, road.w / 2 - 0.3, road.d / 2 - 0.3, 0);
  }
  for (const p of Object.values(DISTRICT_POS)) mark(p.x, p.z, 5.5, 5.5, 0);
  cached = { minX, minZ, cols, rows, blocked };
  return cached;
}

function indexAt(x: number, z: number): number {
  const g = grid();
  const c = Math.floor((x - g.minX) / CELL);
  const r = Math.floor((z - g.minZ) / CELL);
  if (c < 0 || r < 0 || c >= g.cols || r >= g.rows) return -1;
  return r * g.cols + c;
}

/** True when a person would be inside a facade. Off the mapped streets counts as open desert. */
export function blockedAt(x: number, z: number): boolean {
  const i = indexAt(x, z);
  if (i < 0) return false;
  return grid().blocked[i] === 1;
}

function cellCenter(i: number): Point {
  const g = grid();
  const c = i % g.cols;
  const r = Math.floor(i / g.cols);
  return { x: g.minX + (c + 0.5) * CELL, z: g.minZ + (r + 0.5) * CELL };
}

export function nearestOpen(x: number, z: number): Point {
  const g = grid();
  const start = indexAt(x, z);
  if (start >= 0 && g.blocked[start] === 0) return { x, z };
  const sc = Math.max(0, Math.min(g.cols - 1, Math.floor((x - g.minX) / CELL)));
  const sr = Math.max(0, Math.min(g.rows - 1, Math.floor((z - g.minZ) / CELL)));
  for (let rad = 1; rad <= 18; rad++) {
    for (let dz = -rad; dz <= rad; dz++) {
      for (let dx = -rad; dx <= rad; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== rad) continue;
        const c = sc + dx;
        const r = sr + dz;
        if (c < 0 || r < 0 || c >= g.cols || r >= g.rows) continue;
        const i = r * g.cols + c;
        if (g.blocked[i] === 0) return cellCenter(i);
      }
    }
  }
  return { x, z };
}

function clearLine(a: Point, b: Point): boolean {
  const dist = Math.hypot(b.x - a.x, b.z - a.z);
  const steps = Math.max(1, Math.ceil(dist / 2));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    if (blockedAt(a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t)) return false;
  }
  return true;
}

function pull(points: Point[]): Point[] {
  if (points.length <= 2) return points;
  const out: Point[] = [points[0]!];
  let anchor = 0;
  while (anchor < points.length - 1) {
    let next = anchor + 1;
    for (let i = points.length - 1; i > anchor + 1; i--) {
      if (clearLine(points[anchor]!, points[i]!)) {
        next = i;
        break;
      }
    }
    out.push(points[next]!);
    anchor = next;
  }
  return out;
}

class Heap {
  private data: Array<{ i: number; f: number }> = [];

  get size() {
    return this.data.length;
  }

  push(i: number, f: number) {
    const a = this.data;
    a.push({ i, f });
    let n = a.length - 1;
    while (n > 0) {
      const p = (n - 1) >> 1;
      if (a[p]!.f <= a[n]!.f) break;
      const swap = a[p]!;
      a[p] = a[n]!;
      a[n] = swap;
      n = p;
    }
  }

  pop(): { i: number; f: number } | undefined {
    const a = this.data;
    if (!a.length) return undefined;
    const top = a[0]!;
    const last = a.pop()!;
    if (a.length) {
      a[0] = last;
      let n = 0;
      for (;;) {
        const l = n * 2 + 1;
        const r = l + 1;
        let s = n;
        if (l < a.length && a[l]!.f < a[s]!.f) s = l;
        if (r < a.length && a[r]!.f < a[s]!.f) s = r;
        if (s === n) break;
        const swap = a[n]!;
        a[n] = a[s]!;
        a[s] = swap;
        n = s;
      }
    }
    return top;
  }
}

export interface RoutePath {
  points: Point[];
  /** False when the streets did not connect and the line cuts the block. */
  clear: boolean;
}

/** A* along open street cells from where you stand to where you mean to stand. */
export function routeTo(fromX: number, fromZ: number, toX: number, toZ: number): RoutePath {
  const g = grid();
  const start = nearestOpen(fromX, fromZ);
  const goal = nearestOpen(toX, toZ);
  const si = indexAt(start.x, start.z);
  const gi = indexAt(goal.x, goal.z);
  if (si < 0 || gi < 0 || si === gi) {
    return { points: [{ x: toX, z: toZ }], clear: clearLine(start, { x: toX, z: toZ }) };
  }
  const cols = g.cols;
  const goalC = gi % cols;
  const goalR = Math.floor(gi / cols);
  const open = new Heap();
  const gScore = new Float64Array(g.blocked.length);
  gScore.fill(Infinity);
  gScore[si] = 0;
  const came = new Int32Array(g.blocked.length);
  came.fill(-1);
  const closed = new Uint8Array(g.blocked.length);
  const h = (i: number) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const dx = Math.abs(c - goalC);
    const dz = Math.abs(r - goalR);
    return Math.max(dx, dz) + 0.414 * Math.min(dx, dz);
  };
  open.push(si, h(si));
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  let visits = 0;
  let found = false;
  while (open.size && visits < 50000) {
    const cur = open.pop();
    if (!cur) break;
    if (closed[cur.i]) continue;
    if (cur.f > gScore[cur.i]! + h(cur.i) + 0.01) continue;
    if (cur.i === gi) {
      found = true;
      break;
    }
    closed[cur.i] = 1;
    visits += 1;
    const c = cur.i % cols;
    const r = Math.floor(cur.i / cols);
    for (const [dc, dr] of dirs) {
      const nc = c + dc;
      const nr = r + dr;
      if (nc < 0 || nr < 0 || nc >= cols || nr >= g.rows) continue;
      if (dc !== 0 && dr !== 0) {
        const sideA = r * cols + nc;
        const sideB = nr * cols + c;
        if (g.blocked[sideA] === 1 || g.blocked[sideB] === 1) continue;
      }
      const ni = nr * cols + nc;
      if (g.blocked[ni] === 1 || closed[ni]) continue;
      const step = dc !== 0 && dr !== 0 ? 1.414 : 1;
      const next = gScore[cur.i]! + step;
      if (next >= gScore[ni]!) continue;
      gScore[ni] = next;
      came[ni] = cur.i;
      open.push(ni, next + h(ni));
    }
  }
  if (!found) {
    const points: Point[] = [];
    const dist = Math.hypot(goal.x - start.x, goal.z - start.z);
    const n = Math.max(1, Math.ceil(dist / 12));
    for (let i = 1; i <= n; i++) {
      const t = i / n;
      points.push({ x: start.x + (toX - start.x) * t, z: start.z + (toZ - start.z) * t });
    }
    return { points, clear: false };
  }
  const chain: Point[] = [];
  let cursor = gi;
  while (cursor >= 0) {
    chain.push(cellCenter(cursor));
    if (cursor === si) break;
    cursor = came[cursor] ?? -1;
  }
  chain.reverse();
  if (!clearLine(chain[chain.length - 1]!, { x: toX, z: toZ })) chain.push(goal);
  else chain.push({ x: toX, z: toZ });
  return { points: pull(chain), clear: true };
}

/** Sidewalk in front of a door, not the middle of the building. */
export function approachPoint(b: Pick<CityBuilding, "x" | "z" | "width" | "depth" | "face">): Point {
  const ns = b.face === "+x" || b.face === "-x";
  const front = b.width;
  const thick = b.depth ?? front * 0.58;
  const hw = (ns ? thick : front) / 2;
  const hd = (ns ? front : thick) / 2;
  const gap = 1.8;
  if (b.face === "+x") return { x: b.x + hw + gap, z: b.z };
  if (b.face === "-x") return { x: b.x - hw - gap, z: b.z };
  if (b.face === "-z") return { x: b.x, z: b.z - hd - gap };
  return { x: b.x, z: b.z + hd + gap };
}
