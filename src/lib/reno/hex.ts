import type { DistrictId, EncounterSetting, HexBoard, HexCell, HexKind } from "./types";

const DIRS: Array<[number, number]> = [
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
];

export function axialDistance(aq: number, ar: number, bq: number, br: number): number {
  return (Math.abs(aq - bq) + Math.abs(aq + ar - bq - br) + Math.abs(ar - br)) / 2;
}

export function hexKey(q: number, r: number): string {
  return `${q},${r}`;
}

export function hexNeighbors(q: number, r: number): Array<{ q: number; r: number }> {
  return DIRS.map(([dq, dr]) => ({ q: q + dq, r: r + dr }));
}

export const HEX_METERS = 3.35;

/** Cube-round so a world point lands on one hex, not a seam. */
export function axialRound(q: number, r: number): { q: number; r: number } {
  const x = q;
  const z = r;
  const y = -x - z;
  let rx = Math.round(x);
  let ry = Math.round(y);
  let rz = Math.round(z);
  const xDiff = Math.abs(rx - x);
  const yDiff = Math.abs(ry - y);
  const zDiff = Math.abs(rz - z);
  if (xDiff > yDiff && xDiff > zDiff) rx = -ry - rz;
  else if (yDiff > zDiff) ry = -rx - rz;
  else rz = -rx - ry;
  return { q: rx, r: rz };
}

export function worldToHex(x: number, z: number, ox: number, oz: number, size = HEX_METERS): { q: number; r: number } {
  const dx = x - ox;
  const dz = z - oz;
  const fr = dz / (size * 1.5);
  const fq = (dx / size - (Math.sqrt(3) / 2) * fr) / Math.sqrt(3);
  return axialRound(fq, fr);
}

export function hexToWorld(q: number, r: number, ox: number, oz: number, size = HEX_METERS): { x: number; z: number } {
  const p = hexToPixel(q, r, size);
  return { x: ox + p.x, z: oz + p.y };
}

export function hexToPixel(q: number, r: number, size: number): { x: number; y: number } {
  return {
    x: size * (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r),
    y: size * (1.5 * r),
  };
}

export function hexPolygon(cx: number, cy: number, size: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
  }
  return pts.join(" ");
}

export function cellsInRadius(radius: number): HexCell[] {
  const cells: HexCell[] = [];
  for (let q = -radius; q <= radius; q++) {
    for (let r = -radius; r <= radius; r++) {
      if (axialDistance(0, 0, q, r) <= radius) {
        cells.push({ q, r, kind: "open" });
      }
    }
  }
  return cells;
}

const SCENES: Record<EncounterSetting, string> = {
  street: "/reno/scenes/strip.webp",
  alley: "/reno/scenes/alley.webp",
  casino: "/reno/scenes/casino.webp",
  yard: "/reno/scenes/strip.webp",
  crypt: "/reno/scenes/crypt.webp",
  ring: "/reno/scenes/strip.webp",
  rail: "/reno/rail.webp",
  motel: "/reno/motel.webp",
};

export function settingOf(district: DistrictId, night: boolean): EncounterSetting {
  if (district === "golgotha") return "crypt";
  if (district === "stables") return "ring";
  if (district === "rail" || district === "chop") return "rail";
  if (district === "jungle") return "yard";
  if (district === "motel") return "motel";
  if (district === "shark" || district === "desperado" || district === "virgin" || district === "mordino") {
    return night ? "casino" : "street";
  }
  if (district === "salvatore" || district === "bishop") return "casino";
  return night ? "alley" : "street";
}

function hash(q: number, r: number, salt: number): number {
  let n = (q * 73856093) ^ (r * 19349663) ^ (salt * 83492791);
  n = Math.imul(n ^ (n >>> 16), 2246822507);
  return (n >>> 0) / 4294967296;
}

function decorate(cells: HexCell[], setting: EncounterSetting, radius: number): void {
  const byKey = new Map(cells.map((c) => [hexKey(c.q, c.r), c]));
  const setKind = (q: number, r: number, kind: HexKind) => {
    const cell = byKey.get(hexKey(q, r));
    if (cell && !(q === 0 && r === 0)) cell.kind = kind;
  };

  if (setting === "alley") {
    for (const c of cells) {
      if (Math.abs(c.r) >= 2) setKind(c.q, c.r, "wall");
      else if (Math.abs(c.q) === radius && Math.abs(c.r) < 2) setKind(c.q, c.r, "exit");
    }
  } else if (setting === "casino") {
    for (const c of cells) {
      if (hash(c.q, c.r, 3) > 0.78 && axialDistance(0, 0, c.q, c.r) >= 2) setKind(c.q, c.r, "cover");
      if (axialDistance(0, 0, c.q, c.r) === radius && hash(c.q, c.r, 9) > 0.45) setKind(c.q, c.r, "wall");
    }
  } else if (setting === "rail") {
    for (const c of cells) {
      if (c.r === -2 || c.r === 3) setKind(c.q, c.r, "wall");
      if (hash(c.q, c.r, 5) > 0.82) setKind(c.q, c.r, "cover");
    }
  } else if (setting === "crypt") {
    for (const c of cells) {
      if (hash(c.q, c.r, 7) > 0.72 && axialDistance(0, 0, c.q, c.r) >= 2) setKind(c.q, c.r, "wall");
      if (hash(c.q, c.r, 11) > 0.85) setKind(c.q, c.r, "cover");
    }
  } else if (setting === "yard" || setting === "motel") {
    for (const c of cells) {
      if (hash(c.q, c.r, 13) > 0.8) setKind(c.q, c.r, "cover");
      if (hash(c.q, c.r, 17) > 0.9) setKind(c.q, c.r, "wall");
    }
  } else if (setting === "ring") {
    for (const c of cells) {
      if (axialDistance(0, 0, c.q, c.r) === radius) setKind(c.q, c.r, "wall");
    }
  } else {
    for (const c of cells) {
      if (hash(c.q, c.r, 19) > 0.84) setKind(c.q, c.r, "cover");
    }
  }

  for (const c of cells) {
    if (c.kind === "wall") continue;
    if (setting === "ring") continue;
    if (axialDistance(0, 0, c.q, c.r) === radius) c.kind = "exit";
  }
}

export interface EncounterLayout {
  map: HexBoard;
  player: { q: number; r: number };
  foes: Array<{ q: number; r: number }>;
}

function ringHexes(radius: number): Array<{ q: number; r: number }> {
  const out: Array<{ q: number; r: number }> = [];
  let q = radius;
  let r = 0;
  for (const [dq, dr] of DIRS) {
    for (let i = 0; i < radius; i++) {
      out.push({ q, r });
      q += dq;
      r += dr;
    }
  }
  return out;
}

export function generateEncounter(opts: {
  setting: EncounterSetting;
  surprise: boolean;
  foeCount: number;
  radius?: number;
  night?: boolean;
}): EncounterLayout {
  const radius = opts.radius ?? (opts.setting === "ring" ? 2 : opts.setting === "alley" ? 5 : 6);
  const cells = cellsInRadius(radius);
  decorate(cells, opts.setting, radius);
  const walkable = cells.filter((c) => c.kind !== "wall");
  const walkSet = new Set(walkable.map((c) => hexKey(c.q, c.r)));

  const player = { q: 0, r: 0 };
  const dist = opts.surprise ? 2 + Math.floor(Math.random() * 2) : 4 + Math.floor(Math.random() * 3);
  const ring = ringHexes(Math.min(radius - 1, dist)).filter((h) => walkSet.has(hexKey(h.q, h.r)));
  const foes: Array<{ q: number; r: number }> = [];
  const used = new Set([hexKey(0, 0)]);
  const pool = ring.length ? ring : walkable.filter((c) => !(c.q === 0 && c.r === 0)).map((c) => ({ q: c.q, r: c.r }));
  for (let i = 0; i < opts.foeCount; i++) {
    const pick = pool[(i * 5 + 3) % pool.length]!;
    let q = pick.q;
    let r = pick.r;
    if (used.has(hexKey(q, r))) {
      const alt = pool.find((h) => !used.has(hexKey(h.q, h.r)));
      if (alt) {
        q = alt.q;
        r = alt.r;
      }
    }
    used.add(hexKey(q, r));
    foes.push({ q, r });
  }

  const nightScene =
    opts.night && (opts.setting === "street" || opts.setting === "alley")
      ? "/reno/scenes/night.webp"
      : SCENES[opts.setting];

  return {
    map: {
      setting: opts.setting,
      radius,
      cells,
      scene: nightScene,
    },
    player,
    foes,
  };
}

export function cellAt(board: HexBoard, q: number, r: number): HexCell | undefined {
  return board.cells.find((c) => c.q === q && c.r === r);
}

export function isWalkable(board: HexBoard, q: number, r: number): boolean {
  const cell = cellAt(board, q, r);
  return Boolean(cell && cell.kind !== "wall");
}

export function isExit(board: HexBoard, q: number, r: number): boolean {
  return cellAt(board, q, r)?.kind === "exit";
}

export function stepToward(
  board: HexBoard,
  fromQ: number,
  fromR: number,
  toQ: number,
  toR: number,
  blocked: Set<string>,
): { q: number; r: number } | null {
  const options = hexNeighbors(fromQ, fromR)
    .filter((n) => isWalkable(board, n.q, n.r) && !blocked.has(hexKey(n.q, n.r)))
    .sort(
      (a, b) =>
        axialDistance(a.q, a.r, toQ, toR) - axialDistance(b.q, b.r, toQ, toR) ||
        a.q - b.q,
    );
  return options[0] ?? null;
}

export function nearestExit(board: HexBoard, q: number, r: number): { q: number; r: number } {
  const exits = board.cells.filter((c) => c.kind === "exit");
  if (!exits.length) return { q, r };
  return exits.reduce((best, c) =>
    axialDistance(q, r, c.q, c.r) < axialDistance(q, r, best.q, best.r) ? c : best,
  );
}

/** Walkable hexes near an origin, skipping anything already occupied. */
export function openNear(
  board: HexBoard,
  origin: { q: number; r: number },
  used: Set<string>,
  count: number,
): Array<{ q: number; r: number }> {
  const spots: Array<{ q: number; r: number }> = [];
  const seen = new Set<string>([hexKey(origin.q, origin.r), ...used]);
  const queue = hexNeighbors(origin.q, origin.r);
  while (queue.length && spots.length < count) {
    const cur = queue.shift()!;
    const key = hexKey(cur.q, cur.r);
    if (seen.has(key)) continue;
    seen.add(key);
    if (!isWalkable(board, cur.q, cur.r)) continue;
    spots.push(cur);
    queue.push(...hexNeighbors(cur.q, cur.r));
  }
  return spots;
}

export function boardBounds(board: HexBoard, size: number) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const c of board.cells) {
    const p = hexToPixel(c.q, c.r, size);
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  const pad = size * 2.2;
  return {
    minX: minX - pad,
    minY: minY - pad,
    width: maxX - minX + pad * 2,
    height: maxY - minY + pad * 2,
  };
}
