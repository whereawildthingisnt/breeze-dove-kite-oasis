import type { BuildingUse, DistrictId, ZoneKind } from "./types";
import { DISTRICTS, DISTRICT_POS } from "./world";
import { flavorFor, useFromSprite, zoneAt } from "./zones";
import { MILE } from "./scale";

export { zoneAt } from "./zones";

export const CITY_POPULATION = 108_640;

export type BuildingForm = "box" | "step" | "tower" | "wing" | "motel" | "shack" | "casino" | "shed";

export interface CityBuilding {
  id: string;
  x: number;
  z: number;
  sprite: string;
  width: number;
  height: number;
  district?: DistrictId;
  neon?: boolean;
  label?: string;
  /** Along-street frontage. Depth is the into-block thickness. */
  depth?: number;
  /** Direction the front door faces, toward the street. */
  face?: "+x" | "-x" | "+z" | "-z";
  /** Silhouette. Downtown mixes these; the outskirts stays low. */
  form?: BuildingForm;
  name: string;
  use: BuildingUse;
  zone: ZoneKind;
  abandoned: boolean;
  rumor: string;
  people: string;
}

export interface CityBlock {
  id: string;
  x: number;
  z: number;
  w: number;
  d: number;
}

export interface CityRoad {
  x: number;
  z: number;
  w: number;
  d: number;
  name: string;
}

export interface CityPed {
  id: string;
  x: number;
  z: number;
  sprite: string;
  phase: number;
  axis: "x" | "z";
  nightOnly?: boolean;
  amp: number;
}

export interface CityProp {
  id: string;
  x: number;
  z: number;
  sprite: string;
  width: number;
  height: number;
  yaw?: number;
  /** dumpster and trash sit in the alleys, not on the curb. */
  kind?: "dumpster" | "trash";
}


const LANDMARK: Record<DistrictId, { sprite: string; w: number; h: number; neon?: boolean; form: BuildingForm }> = {
  virgin: { sprite: "/reno/sprites/neon-casino.webp", w: 16, h: 9.2, neon: true, form: "casino" },
  shark: { sprite: "/reno/sprites/casino-tower.webp", w: 10, h: 20, neon: true, form: "tower" },
  desperado: { sprite: "/reno/sprites/neon-casino.webp", w: 15, h: 8.6, neon: true, form: "casino" },
  bishop: { sprite: "/reno/sprites/apartment.webp", w: 10, h: 14, neon: true, form: "step" },
  mordino: { sprite: "/reno/bar.webp", w: 10, h: 9, neon: true, form: "wing" },
  salvatore: { sprite: "/reno/bar.webp", w: 9.2, h: 8.4, form: "wing" },
  motel: { sprite: "/reno/sprites/motel.webp", w: 12, h: 8, form: "motel" },
  stables: { sprite: "/reno/sprites/ring.webp", w: 11, h: 8, form: "box" },
  jungle: { sprite: "/reno/sprites/shack.webp", w: 7, h: 6.2, form: "shack" },
  wright: { sprite: "/reno/sprites/motel.webp", w: 10, h: 8, form: "motel" },
  chop: { sprite: "/reno/sprites/warehouse.webp", w: 11, h: 8.5, form: "shed" },
  rail: { sprite: "/reno/rail.webp", w: 13, h: 8, form: "shed" },
  market: { sprite: "/reno/sprites/shop.webp", w: 8, h: 7, form: "wing" },
  golgotha: { sprite: "/reno/crypt.webp", w: 9, h: 8, form: "box" },
};

const CARS = ["/reno/sprites/sedan.webp", "/reno/sprites/coupe.webp"];

function stamp(
  b: Omit<CityBuilding, "name" | "use" | "zone" | "abandoned" | "rumor" | "people">,
  i: number,
  force?: Partial<Pick<CityBuilding, "name" | "use" | "abandoned" | "rumor" | "people">>,
): CityBuilding {
  const zone = zoneAt(b.x, b.z);
  const use = force?.use ?? useFromSprite(b.sprite, b.neon);
  const abandoned =
    force?.abandoned ??
    (use === "abandoned" ||
      (!b.district && zone === "alley" && i % 5 === 0) ||
      (!b.district && zone === "residential" && i % 13 === 0) ||
      (!b.district && zone === "wild" && i % 3 === 0) ||
      (!b.district && zone === "outskirts" && i % 7 === 0));
  const flav = flavorFor(abandoned ? "abandoned" : use, abandoned, i);
  return {
    ...b,
    name: force?.name ?? (b.label ?? flav.name),
    use: abandoned ? "abandoned" : use,
    zone,
    abandoned,
    rumor: force?.rumor ?? flav.rumor,
    people: force?.people ?? flav.people,
  };
}

const LANDMARK_LORE: Partial<Record<DistrictId, { rumor: string; people: string }>> = {
  virgin: {
    rumor: "The Strip. Cops walk this curb. Alleys one block off do not.",
    people: "Tourists, dealers at the door, a cop who wants a donut and a bribe.",
  },
  shark: {
    rumor: "John Bishop's house. Angela on the second-floor rail. Dress code includes a gun.",
    people: "Bishop bodyguards. Leslie Anne if you are unlucky. Angela if you are pretty or famous.",
  },
  desperado: {
    rumor: "Mordino cards. Blood on the felt more often than the Ring.",
    people: "Little Jesus' runners. A bouncer with a shotgun.",
  },
  motel: {
    rumor: "Desert Rose. Hourly and weekly. Working girls hold the lot after dark. Calico taxes the stairs.",
    people: "The clerk. The girls. Johns in hats. A pimp who smiles with a 10mm.",
  },
  mordino: {
    rumor: "Golden Globes. Jet in the walls. Myron's product.",
    people: "Mordino soldatos and girls who do not work the Rose.",
  },
  salvatore: {
    rumor: "Louis Salvatore. Mason at the door. A laser the other families cannot buy.",
    people: "Made men. An oxygen tank. Mason.",
  },
  stables: {
    rumor: "The Ring. Purses grow with the months. The doctor bills the loser.",
    people: "Palookas, touts, a card man.",
  },
  jungle: {
    rumor: "The city pretends this block is not a city.",
    people: "Squatters. Knives. Nobody who will give a name.",
  },
  golgotha: {
    rumor: "Wright stones. Glow. Things that hunt.",
    people: "Mourners by day. Ghouls by night.",
  },
  wright: {
    rumor: "Orville's table. Richard is in the ground. The Mordinos put him there.",
    people: "Cousins with shotguns. Mrs. Wright if it is dinner.",
  },
};

function mulberry(seed: number) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function nearLandmark(x: number, z: number, min = 14): boolean {
  return DISTRICTS.some((d) => {
    const p = DISTRICT_POS[d.id];
    const dx = x - p.x;
    const dz = z - p.z;
    return dx * dx + dz * dz < min * min;
  });
}

function onRoad(x: number, z: number, roads: CityRoad[], pad = 3.2): boolean {
  return roads.some((r) => Math.abs(x - r.x) <= r.w / 2 + pad && Math.abs(z - r.z) <= r.d / 2 + pad);
}

function parkBeside(x: number, z: number, roads: CityRoad[]): { x: number; z: number } {
  const push = (px: number, pz: number) => {
    for (let pass = 0; pass < 4; pass++) {
      let moved = false;
      for (const road of roads) {
        const horizontal = road.w >= road.d;
        if (horizontal) {
          if (Math.abs(px - road.x) > road.w / 2 + 2) continue;
          if (Math.abs(pz - road.z) > road.d / 2 + 5.5) continue;
          const s = pz >= road.z ? 1 : -1;
          pz = road.z + s * (road.d / 2 + 7.2);
          moved = true;
        } else {
          if (Math.abs(pz - road.z) > road.d / 2 + 2) continue;
          if (Math.abs(px - road.x) > road.w / 2 + 5.5) continue;
          const s = px >= road.x ? 1 : -1;
          px = road.x + s * (road.w / 2 + 7.2);
          moved = true;
        }
      }
      if (!moved) break;
    }
    return { x: px, z: pz };
  };
  const first = push(x, z);
  let dx = first.x - x;
  let dz = first.z - z;
  let dist = Math.hypot(dx, dz);
  if (dist < 0.8) {
    dx = 0;
    dz = 1;
    dist = 1;
  }
  const clear = 11;
  const pulled = dist < clear ? push(x + (dx / dist) * clear, z + (dz / dist) * clear) : first;
  return pulled;
}

export function buildCity(): {
  buildings: CityBuilding[];
  blocks: CityBlock[];
  roads: CityRoad[];
  cars: CityProp[];
  lamps: CityProp[];
  peds: CityPed[];
  junk: CityProp[];
} {
  const rand = mulberry(2244);
  const roads: CityRoad[] = [
    { x: 20, z: 0, w: 280, d: 10, name: "Virgin Street" },
    { x: 20, z: 58, w: 240, d: 7, name: "Second Street" },
    { x: 20, z: 102, w: 240, d: 7, name: "Wright Road" },
    { x: 20, z: -40, w: 200, d: 7, name: "Bishop Street" },
    { x: 20, z: 156, w: 100, d: 7, name: "Golgotha Road" },
    { x: 36, z: -72, w: 160, d: 6, name: "North Cut" },
    { x: 0, z: 50, w: 9, d: 250, name: "Main" },
    { x: 48, z: 40, w: 9, d: 230, name: "Shark Street" },
    { x: 96, z: 50, w: 8, d: 220, name: "Desperado" },
    { x: -52, z: 50, w: 8, d: 200, name: "Mordino Way" },
    { x: 132, z: 60, w: 8, d: 160, name: "Market Street" },
    { x: -92, z: 50, w: 8, d: 140, name: "Salvatore" },
    { x: 68, z: 92, w: 110, d: 7, name: "Yard Row" },
    { x: -20, z: 28, w: 8, d: 90, name: "Jungle Cut" },
    { x: 72, z: -20, w: 8, d: 80, name: "East Cut" },
    { x: 178, z: 58, w: 78, d: 6, name: "East Second" },
    { x: 196, z: 42, w: 6.5, d: 112, name: "Catclaw" },
    { x: 176, z: 8, w: 68, d: 5.5, name: "Neon Spur" },
    { x: 188, z: 90, w: 58, d: 5.5, name: "Lucky Lane" },
    { x: -130, z: 16, w: 6, d: 92, name: "Dust Road" },
    { x: -118, z: 46, w: 58, d: 5.5, name: "West Lot" },
    { x: -124, z: -8, w: 48, d: 5.5, name: "Tin Row" },
  ];

  const buildings: CityBuilding[] = DISTRICTS.map((d, i) => {
    const p = DISTRICT_POS[d.id];
    const spot = parkBeside(p.x, p.z, roads);
    const mark = LANDMARK[d.id];
    const lore = LANDMARK_LORE[d.id];
    return stamp(
      {
        id: `land-${d.id}`,
        x: spot.x,
        z: spot.z,
        sprite: mark.sprite,
        width: mark.w,
        height: mark.h,
        depth: Math.min(11, mark.w * 0.62),
        district: d.id,
        neon: mark.neon,
        label: d.name,
        form: mark.form,
      },
      i,
      {
        name: d.name,
        rumor: lore?.rumor,
        people: lore?.people,
        abandoned: false,
      },
    );
  });

  const stripSprite = (i: number) =>
    i % 3 === 0
      ? { sprite: "/reno/sprites/casino-tower.webp", w: 8.2, h: 16.4, neon: true }
      : { sprite: "/reno/sprites/neon-casino.webp", w: 13.6, h: 7.8, neon: true };

  const kindFor = (zone: ZoneKind, n: number) => {
    if (zone === "outskirts") {
      const k = Math.abs(n) % 5;
      if (k <= 1) return { sprite: "/reno/sprites/neon-casino.webp", w: 6.2, h: 5.4, neon: true };
      if (k <= 3) return { sprite: "/reno/sprites/motel.webp", w: 7.4, h: 4.6 };
      return { sprite: "/reno/sprites/shack.webp", w: 5.1, h: 3.5 };
    }
    if (zone === "strip") return stripSprite(n);
    if (zone === "wild") return { sprite: "/reno/sprites/shack.webp", w: 6.2, h: 5.2 };
    if (zone === "industrial") return { sprite: "/reno/sprites/warehouse.webp", w: 10, h: 8 };
    if (zone === "motel") return { sprite: "/reno/sprites/motel.webp", w: 9, h: 6.6 };
    if (zone === "compound") {
      return n % 2 === 0
        ? { sprite: "/reno/sprites/apartment.webp", w: 8.4, h: 12 }
        : { sprite: "/reno/sprites/warehouse.webp", w: 9.4, h: 7.6 };
    }
    if (zone === "alley") {
      return n % 2 === 0
        ? { sprite: "/reno/sprites/pawnshop.webp", w: 7, h: 7.2 }
        : { sprite: "/reno/sprites/shop.webp", w: 6.6, h: 6.8 };
    }
    return n % 2 === 0
      ? { sprite: "/reno/sprites/tenement.webp", w: 7.6, h: 10 }
      : { sprite: "/reno/sprites/apartment.webp", w: 8.2, h: 12.4 };
  };

  const formOf = (zone: ZoneKind, sprite: string, i: number): BuildingForm => {
    if (zone === "outskirts") {
      if (sprite.includes("casino") || sprite.includes("neon")) return "casino";
      if (sprite.includes("motel")) return "motel";
      return "shack";
    }
    if (sprite.includes("casino") || sprite.includes("neon")) {
      return i % 3 === 0 ? "tower" : i % 3 === 1 ? "casino" : "step";
    }
    if (sprite.includes("motel")) return i % 2 === 0 ? "motel" : "wing";
    if (sprite.includes("warehouse") || sprite.includes("rail")) return i % 2 === 0 ? "shed" : "box";
    if (sprite.includes("shack")) return "shack";
    if (sprite.includes("bar")) return i % 2 === 0 ? "wing" : "box";
    if (sprite.includes("shop") || sprite.includes("pawn")) return i % 3 === 0 ? "wing" : i % 3 === 1 ? "step" : "box";
    const k = Math.abs(i) % 4;
    if (k === 0) return "step";
    if (k === 1) return "tower";
    if (k === 2) return "wing";
    return "box";
  };

  let taggedCasino = false;
  let taggedMotel = false;

  const halfOf = (b: CityBuilding) => {
    const ns = b.face === "+x" || b.face === "-x";
    const front = b.width;
    const thick = b.depth ?? front * 0.58;
    return ns ? { hw: thick / 2, hd: front / 2 } : { hw: front / 2, hd: thick / 2 };
  };

  const hitsPin = (x: number, z: number, hw: number, hd: number) =>
    DISTRICTS.some((d) => {
      const p = DISTRICT_POS[d.id];
      return Math.abs(x - p.x) < hw + 5.5 && Math.abs(z - p.z) < hd + 5.5;
    });

  const overlaps = (x: number, z: number, hw: number, hd: number) => {
    const samples: Array<[number, number]> = [
      [x, z],
      [x + hw * 0.8, z],
      [x - hw * 0.8, z],
      [x, z + hd * 0.8],
      [x, z - hd * 0.8],
    ];
    if (samples.some(([px, pz]) => onRoad(px, pz, roads, 2.55))) return true;
    if (hitsPin(x, z, hw, hd)) return true;
    return buildings.some((b) => {
      const box = halfOf(b);
      return Math.abs(x - b.x) < box.hw + hw - 0.35 && Math.abs(z - b.z) < box.hd + hd - 0.35;
    });
  };

  const blocks: CityBlock[] = [];
  const WALK = 2.7;
  const horiz = roads
    .filter((r) => r.w >= r.d && r.w >= 150)
    .map((r) => ({ at: r.z, half: r.d / 2, a: r.x - r.w / 2, b: r.x + r.w / 2 }))
    .sort((p, q) => p.at - q.at);
  const vert = roads
    .filter((r) => r.d > r.w && r.d >= 140)
    .map((r) => ({ at: r.x, half: r.w / 2, a: r.z - r.d / 2, b: r.z + r.d / 2 }))
    .sort((p, q) => p.at - q.at);
  const spans = (s: { a: number; b: number }, from: number, to: number) => s.a <= from + 6 && s.b >= to - 6;

  let n = 0;
  let blockN = 0;
  const place = (x: number, z: number, frontage: number, face: NonNullable<CityBuilding["face"]>, thick: number) => {
    const ns = face === "+x" || face === "-x";
    const hw = (ns ? thick : frontage) / 2;
    const hd = (ns ? frontage : thick) / 2;
    if (overlaps(x, z, hw, hd)) return;
    const zone = zoneAt(x, z);
    const kind = kindFor(zone, n + Math.round(x + z));
    const fringe = zone === "outskirts";
    let label: string | undefined;
    if (fringe && !taggedCasino && kind.sprite.includes("casino")) {
      label = "Two-Bit";
      taggedCasino = true;
    } else if (fringe && !taggedMotel && kind.sprite.includes("motel")) {
      label = "Catclaw Motor";
      taggedMotel = true;
    }
    buildings.push(
      stamp(
        {
          id: `b-${n++}`,
          x,
          z,
          sprite: kind.sprite,
          width: frontage * (fringe ? 0.86 : 1),
          height: kind.h * (fringe ? 0.92 + rand() * 0.16 : 0.78 + rand() * 0.42),
          depth: thick * (0.9 + rand() * 0.16),
          face,
          form: formOf(zone, kind.sprite, n + Math.round(z)),
          neon: "neon" in kind && Boolean(kind.neon),
          label,
        },
        n,
      ),
    );
  };
  for (let hi = 0; hi < horiz.length - 1; hi++) {
    for (let vi = 0; vi < vert.length - 1; vi++) {
      const south = horiz[hi]!;
      const north = horiz[hi + 1]!;
      const west = vert[vi]!;
      const east = vert[vi + 1]!;
      if (north.at - south.at < 18 || east.at - west.at < 18) continue;
      if (!spans(south, west.at, east.at) || !spans(north, west.at, east.at)) continue;
      if (!spans(west, south.at, north.at) || !spans(east, south.at, north.at)) continue;
      const innerL = west.at + west.half + WALK;
      const innerR = east.at - east.half - WALK;
      const innerS = south.at + south.half + WALK;
      const innerN = north.at - north.half - WALK;
      const lotW = innerR - innerL;
      const lotD = innerN - innerS;
      if (lotW < 12 || lotD < 12) continue;
      blocks.push({
        id: `block-${blockN++}`,
        x: (innerL + innerR) / 2,
        z: (innerS + innerN) / 2,
        w: lotW,
        d: lotD,
      });
      const thick = Math.min(7.6, Math.max(5.6, Math.min(lotW, lotD) * 0.28));
      const rowX = (z: number, face: NonNullable<CityBuilding["face"]>) => {
        const count = Math.max(1, Math.floor(lotW / 8.4));
        const step = lotW / count;
        for (let i = 0; i < count; i++) {
          place(innerL + (i + 0.5) * step, z, Math.max(5, step - 0.85), face, thick);
        }
      };
      if (lotD >= thick * 2 + 1.2) {
        rowX(innerS + thick / 2, "-z");
        rowX(innerN - thick / 2, "+z");
      }
      if (lotW >= thick * 2 + 1.2 && lotD > thick * 2 + 7) {
        const z0 = innerS + thick + 0.6;
        const z1 = innerN - thick - 0.6;
        const span = z1 - z0;
        const count = Math.max(1, Math.floor(span / 8.4));
        const step = span / count;
        for (let i = 0; i < count; i++) {
          const z = z0 + (i + 0.5) * step;
          const frontage = Math.max(5, step - 0.85);
          place(innerL + thick / 2, z, frontage, "-x", thick);
          place(innerR - thick / 2, z, frontage, "+x", thick);
        }
      }
      const cx0 = innerL + thick + 3;
      const cx1 = innerR - thick - 3;
      const cz0 = innerS + thick + 3;
      const cz1 = innerN - thick - 3;
      if (cx1 - cx0 > 8 && cz1 - cz0 > 8) {
        const nx = Math.min(2, Math.max(1, Math.floor((cx1 - cx0) / 12)));
        const nz = Math.min(2, Math.max(1, Math.floor((cz1 - cz0) / 12)));
        for (let i = 0; i < nx; i++) {
          for (let j = 0; j < nz; j++) {
            const x = cx0 + ((i + 0.5) * (cx1 - cx0)) / nx;
            const z = cz0 + ((j + 0.5) * (cz1 - cz0)) / nz;
            place(x, z, Math.min(9.5, (cx1 - cx0) / nx - 1.2), "+z", thick);
          }
        }
      }
    }
  }

  const majors = roads.filter((r) => Math.max(r.w, r.d) >= 140);
  for (const road of majors) {
    const horizontal = road.w >= road.d;
    const half = horizontal ? road.d / 2 : road.w / 2;
    const thick = 6.4;
    const along0 = (horizontal ? road.x - road.w / 2 : road.z - road.d / 2) + 4;
    const along1 = (horizontal ? road.x + road.w / 2 : road.z + road.d / 2) - 4;
    const span = along1 - along0;
    if (span < 16) continue;
    const count = Math.max(1, Math.floor(span / 9));
    const step = span / count;
    for (const sign of [1, -1] as const) {
      const face = horizontal ? (sign > 0 ? "-z" : "+z") : sign > 0 ? "-x" : "+x";
      for (let i = 0; i < count; i++) {
        const t = along0 + (i + 0.5) * step;
        const x = horizontal ? t : road.x + sign * (half + WALK + thick / 2);
        const z = horizontal ? road.z + sign * (half + WALK + thick / 2) : t;
        place(x, z, Math.max(5.2, step - 0.9), face, thick);
      }
    }
  }

  const fringeNames = new Set(["East Second", "Catclaw", "Neon Spur", "Lucky Lane", "Dust Road", "West Lot", "Tin Row"]);
  for (const road of roads) {
    if (!fringeNames.has(road.name)) continue;
    const horizontal = road.w >= road.d;
    const half = horizontal ? road.d / 2 : road.w / 2;
    const thick = 4.15;
    const along0 = (horizontal ? road.x - road.w / 2 : road.z - road.d / 2) + 3;
    const along1 = (horizontal ? road.x + road.w / 2 : road.z + road.d / 2) - 3;
    const span = along1 - along0;
    if (span < 12) continue;
    const count = Math.max(2, Math.floor(span / 7.4));
    const step = span / count;
    for (const sign of [1, -1] as const) {
      const face = horizontal ? (sign > 0 ? "-z" : "+z") : sign > 0 ? "-x" : "+x";
      for (let i = 0; i < count; i++) {
        const t = along0 + (i + 0.5) * step;
        const x = horizontal ? t : road.x + sign * (half + WALK + thick / 2);
        const z = horizontal ? road.z + sign * (half + WALK + thick / 2) : t;
        place(x, z, Math.min(6.1, Math.max(3.8, step - 0.8)), face, thick);
      }
    }
  }

  const cars: CityProp[] = [];
  const lamps: CityProp[] = [];
  let c = 0;
  for (const road of roads) {
    const alongX = road.w >= road.d;
    const length = alongX ? road.w : road.d;
    const count = Math.max(3, Math.round(length / 22));
    for (let i = 0; i < count; i++) {
      const t = (i + 0.32) / count - 0.5;
      const alongHalf = alongX ? road.d / 2 : road.w / 2;
      const curb = Math.max(1.4, alongHalf - 1.15);
      const walk = alongHalf + 1.15;
      const side = rand() > 0.5 ? 1 : -1;
      const x = alongX ? road.x + t * road.w * 0.9 : road.x + side * curb;
      const z = alongX ? road.z + side * curb : road.z + t * road.d * 0.9;
      if (nearLandmark(x, z, 9)) continue;
      cars.push({
        id: `car-${c}`,
        x,
        z,
        sprite: CARS[Math.floor(rand() * CARS.length)]!,
        width: 3.6 + rand() * 0.7,
        height: 1.8 + rand() * 0.35,
        yaw: alongX ? (side > 0 ? 0 : Math.PI) : Math.PI / 2,
      });
      lamps.push({
        id: `lamp-${c}`,
        x: alongX ? road.x + t * road.w : road.x + side * walk,
        z: alongX ? road.z + side * walk : road.z + t * road.d,
        sprite: "/reno/sprites/lamp.webp",
        width: 1.4,
        height: 5.8,
      });
      c += 1;
    }
  }

  const peds: CityPed[] = [];
  let p = 0;
  for (const road of roads) {
    const alongX = road.w >= road.d;
    const length = alongX ? road.w : road.d;
    const count = Math.max(2, Math.round(length / 16));
    for (let i = 0; i < count; i++) {
      const t = (i + 0.42) / count - 0.5;
      const alongHalf = alongX ? road.d / 2 : road.w / 2;
      const walk = alongHalf + 1.45;
      const side = i % 2 === 0 ? walk : -walk;
      const x = alongX ? road.x + t * road.w * 0.92 : road.x + side;
      const z = alongX ? road.z + side : road.z + t * road.d * 0.92;
      const zone = zoneAt(x, z);
      let sprite = "/reno/tokens/ped-man.webp";
      let nightOnly = false;
      if (zone === "strip") {
        sprite =
          i % 5 === 0
            ? "/reno/tokens/cop.webp"
            : i % 2 === 0
              ? "/reno/tokens/ped-woman.webp"
              : "/reno/tokens/ped-man.webp";
      } else if (zone === "alley") {
        sprite = i % 3 === 0 ? "/reno/tokens/junkie.webp" : i % 2 === 0 ? "/reno/tokens/gangster.webp" : "/reno/tokens/ped-man.webp";
        nightOnly = i % 4 === 1;
      } else if (zone === "motel") {
        sprite = i % 3 === 0 ? "/reno/tokens/ped-man.webp" : "/reno/tokens/ped-woman.webp";
      } else if (zone === "compound") {
        sprite = i % 2 === 0 ? "/reno/tokens/gangster.webp" : "/reno/tokens/ped-man.webp";
      } else if (zone === "outskirts") {
        sprite =
          i % 5 === 0
            ? "/reno/tokens/junkie.webp"
            : i % 2 === 0
              ? "/reno/tokens/ped-woman.webp"
              : "/reno/tokens/ped-man.webp";
        nightOnly = i % 6 === 1;
      } else if (zone === "industrial" || zone === "wild") {
        sprite = i % 3 === 0 ? "/reno/tokens/junkie.webp" : "/reno/tokens/ped-man.webp";
        nightOnly = zone === "wild";
      } else {
        sprite = i % 2 === 0 ? "/reno/tokens/ped-woman.webp" : "/reno/tokens/ped-man.webp";
      }
      peds.push({
        id: `ped-${p++}`,
        x,
        z,
        sprite,
        phase: rand() * 14,
        axis: alongX ? "z" : "x",
        nightOnly,
        amp: 2.2 + rand() * 2.4,
      });
    }
  }
  for (let i = 0; i < 12; i++) {
    peds.push({
      id: `lot-${i}`,
      x: 18 + (i % 6) * 2.6 - 6.5,
      z: 58 + Math.floor(i / 6) * 3.4 - 1.6,
      sprite: i === 0 || i === 7 ? "/reno/tokens/gangster.webp" : i % 5 === 0 ? "/reno/tokens/ped-man.webp" : "/reno/tokens/ped-woman.webp",
      phase: i * 1.7,
      axis: i % 2 === 0 ? "x" : "z",
      nightOnly: true,
      amp: 1.4 + (i % 3) * 0.4,
    });
  }

  const shows: Array<{ id: string; name: string; x: number; z: number; use: BuildingUse; rumor: string; people: string }> = [
    { id: "club-slipper", name: "Silver Slipper", x: -24, z: 22, use: "club", rumor: "A floor show with a horn section. Minimum at the door.", people: "Band, floor staff, highway money." },
    { id: "club-gogo", name: "The Go-Go", x: 42, z: -22, use: "club", rumor: "Revue lights. Reno trying to be the other strip.", people: "A stage, a bartender, people who drove in." },
    { id: "club-mapes", name: "Mapes Floor", x: 78, z: 22, use: "club", rumor: "The old floor. Tickets, not a back room.", people: "Ushers and a band that knows the same twelve songs." },
    { id: "club-harolds", name: "Harold's Revue", x: 112, z: -22, use: "club", rumor: "Cabaret. The sign is louder than the act.", people: "A comic, a trio, tourists from the grade." },
    { id: "bar-cal", name: "Cal-Neva", x: -58, z: -22, use: "bar", rumor: "A bar that kept the state-line joke.", people: "Regulars and plates from out of town." },
  ];
  for (const s of shows) {
    buildings.push(
      stamp(
        {
          id: s.id,
          x: s.x,
          z: s.z,
          sprite: s.use === "bar" ? "/reno/bar.webp" : "/reno/sprites/neon-casino.webp",
          width: 16,
          height: 8.4,
          depth: 11,
          neon: true,
          label: s.name,
          form: "casino",
          face: s.z > 0 ? "-z" : "+z",
        },
        buildings.length,
        { name: s.name, use: s.use, abandoned: false, rumor: s.rumor, people: s.people },
      ),
    );
  }

  const spokes: CityRoad[] = [
    { x: 20, z: -200 - MILE / 2, w: 12, d: MILE, name: "North Highway" },
    { x: 20, z: 220 + MILE / 2, w: 12, d: MILE, name: "South Highway" },
    { x: 220 + MILE / 2, z: 40, w: MILE, d: 12, name: "East Highway" },
    { x: -200 - MILE / 2, z: 40, w: MILE, d: 12, name: "West Highway" },
  ];
  roads.push(...spokes);

  const stops: Array<{ id: string; name: string; x: number; z: number; use: BuildingUse }> = [
    { id: "gas-n", name: "Last Pump North", x: 34, z: -1480, use: "gas" },
    { id: "motel-n", name: "Grade Courts", x: 52, z: -1464, use: "motel" },
    { id: "gas-s", name: "South Cut Fuel", x: 6, z: 1500, use: "gas" },
    { id: "motel-s", name: "Mile Marker Beds", x: 28, z: 1486, use: "motel" },
    { id: "gas-e", name: "East Grade", x: 1520, z: 54, use: "gas" },
    { id: "motel-e", name: "East Wash Motor", x: 1504, z: 72, use: "motel" },
    { id: "gas-w", name: "West Dust Stop", x: -1480, z: 26, use: "gas" },
    { id: "motel-w", name: "West Apron Inn", x: -1462, z: 48, use: "motel" },
  ];
  for (const s of stops) {
    buildings.push(
      stamp(
        {
          id: s.id,
          x: s.x,
          z: s.z,
          sprite: s.use === "gas" ? "/reno/sprites/shop.webp" : "/reno/sprites/motel.webp",
          width: s.use === "gas" ? 14 : 18,
          height: s.use === "gas" ? 4.8 : 6.2,
          depth: s.use === "gas" ? 9 : 8,
          label: s.name,
          form: s.use === "gas" ? "shed" : "motel",
        },
        buildings.length,
        {
          name: s.name,
          use: s.use,
          abandoned: false,
          rumor: s.use === "gas" ? "Pumps a mile out. The city is a glow, not a street." : "A small motel for people who are not in Reno yet.",
          people: "Travelers. A clerk. Plates from somewhere else.",
        },
      ),
    );
  }

  const junk: CityProp[] = [];
  let j = 0;
  for (const road of roads) {
    if (road.w > 400 || road.d > 400) continue;
    const alongX = road.w >= road.d;
    const length = alongX ? road.w : road.d;
    const half = alongX ? road.d / 2 : road.w / 2;
    const alley = half + 8.4;
    const n = Math.max(1, Math.round(length / 36));
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n - 0.5;
      const side = i % 2 === 0 ? 1 : -1;
      const x = alongX ? road.x + t * road.w * 0.86 : road.x + side * alley;
      const z = alongX ? road.z + side * alley : road.z + t * road.d * 0.86;
      if (nearLandmark(x, z, 8)) continue;
      junk.push({
        id: `dump-${j}`,
        x,
        z,
        sprite: "",
        width: 1.5,
        height: 1.25,
        yaw: alongX ? 0 : Math.PI / 2,
        kind: "dumpster",
      });
      junk.push({
        id: `trash-${j}`,
        x: x + (alongX ? 1.3 : 0),
        z: z + (alongX ? 0 : 1.3),
        sprite: "",
        width: 0.45,
        height: 0.28,
        kind: "trash",
      });
      j += 1;
    }
  }

  return { buildings, blocks, roads, cars, lamps, peds, junk };
}

export const CITY = buildCity();

export const BUILDING_BY_ID: Record<string, CityBuilding> = Object.fromEntries(
  CITY.buildings.map((b) => [b.id, b]),
);

export function nearestDistrict(x: number, z: number): { id: DistrictId; dist: number } {
  let best: DistrictId = "virgin";
  let bestD = Infinity;
  for (const d of DISTRICTS) {
    const p = DISTRICT_POS[d.id];
    const dx = x - p.x;
    const dz = z - p.z;
    const dist = Math.hypot(dx, dz);
    if (dist < bestD) {
      bestD = dist;
      best = d.id;
    }
  }
  return { id: best, dist: bestD };
}

export function hourSky(hour: number): { sky: string; fog: string; sun: number; neon: number } {
  const h = ((hour % 24) + 24) % 24;
  if (h >= 21 || h < 5) return { sky: "#010006", fog: "#020108", sun: 0.02, neon: 1 };
  if (h < 7) return { sky: "#120c14", fog: "#100c12", sun: 0.12, neon: 0.9 };
  if (h < 9) return { sky: "#7d8ea0", fog: "#8a97a4", sun: 0.7, neon: 0.15 };
  if (h >= 18 && h < 20) return { sky: "#c47a4a", fog: "#a86a48", sun: 0.45, neon: 0.55 };
  if (h >= 20) return { sky: "#08060e", fog: "#06040c", sun: 0.05, neon: 1 };
  return { sky: "#8aa3b0", fog: "#93a4ab", sun: 1, neon: 0 };
}
