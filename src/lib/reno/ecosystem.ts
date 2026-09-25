import { HEX_METERS, axialDistance, axialRound, hexKey, isWalkable, worldToHex } from "./hex";
import { schedulePoint } from "./schedules";
import type { ScheduleRole } from "./schedules";
import { ensurePulse } from "./city-sim";
import type { GangId, HexBoard, RenoLife } from "./types";
import { GANG_BY_ID, DISTRICT_POS } from "./world";
import { zoneAt } from "./zones";

export type Allegiance = "citizen" | "independent" | "family" | "law" | "wild";

export interface SoulDef {
  id: string;
  name: string;
  allegiance: Allegiance;
  gang?: GangId;
  /** Who this blade is walking toward when the families heat up. */
  watch?: GangId;
  kind: string;
  role: ScheduleRole;
  sprite: string;
  home: { x: number; z: number };
  post: { x: number; z: number };
  night?: boolean;
  blade?: boolean;
  /** What she says when she walks up. Caps leave your pocket if you talk and pass speech. */
  pitch?: string;
  price?: number;
  /** CityRun id. This person is in that car. */
  ride?: string;
}

export interface CityBody {
  id: string;
  name: string;
  kind: string;
  x: number;
  z: number;
}

const P = DISTRICT_POS;

function at(id: keyof typeof P, dx: number, dz: number) {
  return { x: P[id].x + dx, z: P[id].z + dz };
}

export const SOULS: SoulDef[] = [
  { id: "inez", name: "Inez Marlow", allegiance: "citizen", role: "tourist", kind: "tourist", sprite: "/reno/tokens/tourist-traveler.webp", home: at("motel", -6, 8), post: at("virgin", 2, -2) },
  { id: "han", name: "Mrs. Han", allegiance: "citizen", role: "resident", kind: "tourist", sprite: "/reno/tokens/ped-woman.webp", home: at("virgin", -4, 10), post: at("virgin", 3, 2) },
  { id: "paulie", name: "Paulie Dunn", allegiance: "citizen", role: "staff", kind: "tourist", sprite: "/reno/tokens/ped-man.webp", home: at("shark", 6, 4), post: at("shark", -2, 1) },
  { id: "june", name: "June Cobb", allegiance: "citizen", role: "worker", kind: "tourist", sprite: "/reno/tokens/ped-woman.webp", home: at("market", 4, 8), post: at("market", -2, 1) },
  { id: "hector", name: "Hector Ruiz", allegiance: "citizen", role: "worker", kind: "john", sprite: "/reno/tokens/ped-man.webp", home: at("chop", -8, 6), post: at("chop", 3, -2) },
  { id: "lila", name: "Lila Boone", allegiance: "citizen", role: "tourist", kind: "tourist", sprite: "/reno/tokens/backpacker.webp", home: at("desperado", 5, 7), post: at("desperado", -1, 1) },
  { id: "sam", name: "Sam Iver", allegiance: "citizen", role: "worker", kind: "john", sprite: "/reno/tokens/ped-man.webp", home: at("rail", -6, 4), post: at("rail", 2, -3) },
  { id: "ada", name: "Ada Quinn", allegiance: "citizen", role: "worker", kind: "tourist", sprite: "/reno/tokens/ped-woman.webp", home: at("bishop", 4, 8), post: at("bishop", -2, 1) },
  { id: "rosa", name: "Rosa Minh", allegiance: "citizen", role: "resident", kind: "tourist", sprite: "/reno/tokens/ped-woman.webp", home: at("virgin", 10, 12), post: at("market", -6, 3) },
  { id: "fran", name: "Fran Holt", allegiance: "citizen", role: "host", kind: "tourist", sprite: "/reno/tokens/host.webp", home: at("virgin", -8, -4), post: at("shark", -3, 2), night: true },
  { id: "ed", name: "Ed Pike", allegiance: "citizen", role: "tourist", kind: "tourist", sprite: "/reno/tokens/tourist-ncr.webp", home: at("motel", 7, -5), post: at("desperado", -1, 3), night: true },
  { id: "nell", name: "Nell Voss", allegiance: "citizen", role: "resident", kind: "tourist", sprite: "/reno/tokens/ped-woman.webp", home: at("jungle", 5, -4), post: at("stables", -4, 2) },
  { id: "mick", name: "Mick Hale", allegiance: "citizen", role: "expat", kind: "tourist", sprite: "/reno/tokens/expat.webp", home: at("desperado", 8, 6), post: at("desperado", -1, 2), night: true },
  { id: "sook", name: "Sook Voss", allegiance: "independent", role: "guide", kind: "john", sprite: "/reno/tokens/guide.webp", home: at("virgin", 12, 14), post: at("motel", -2, 4) },
  { id: "ruth", name: "Ruth Cobb", allegiance: "citizen", role: "host", kind: "tourist", sprite: "/reno/tokens/floor.webp", home: at("desperado", -6, 8), post: at("desperado", 2, 1), night: true },
  { id: "kip", name: "Kip Alvarez", allegiance: "citizen", role: "porter", kind: "john", sprite: "/reno/tokens/driver.webp", home: at("motel", 10, -8), post: at("motel", 1, -2) },

  { id: "cass", name: "Cass Fel", allegiance: "independent", role: "dealer", kind: "dealer", sprite: "/reno/tokens/junkie.webp", home: at("market", -3, -6), post: at("market", 2, 4), night: true },
  { id: "ned", name: "Ned Curry", allegiance: "independent", role: "worker", kind: "punk", sprite: "/reno/tokens/ped-man.webp", home: at("stables", 6, 3), post: at("stables", -2, -1) },
  { id: "ivo", name: "Ivo Lane", allegiance: "independent", role: "courier", kind: "john", sprite: "/reno/tokens/ped-man.webp", home: at("market", 2, -4), post: at("bishop", 6, 3) },
  { id: "cal", name: "Cal Dreg", allegiance: "independent", role: "dealer", kind: "junkie", sprite: "/reno/tokens/junkie.webp", home: at("mordino", 5, 6), post: at("mordino", -2, -3), night: true },
  { id: "nix", name: "Nix Harlow", allegiance: "independent", role: "dealer", kind: "pimp", sprite: "/reno/tokens/gangster.webp", home: at("motel", -4, 5), post: at("motel", 3, 2), night: true },
  { id: "sable", name: "Sable Ott", allegiance: "independent", role: "assassin", kind: "merc", sprite: "/reno/tokens/gangster.webp", home: at("chop", 4, -5), post: at("rail", -5, 2) },
  { id: "red", name: "Red Miller", allegiance: "independent", role: "guest", kind: "cheat", sprite: "/reno/tokens/gangster.webp", home: at("virgin", 4, -6), post: at("desperado", 2, 2), night: true },
  { id: "otto", name: "Otto Vann", allegiance: "independent", role: "dealer", kind: "dealer", sprite: "/reno/tokens/ped-man.webp", home: at("market", -5, 2), post: at("market", 1, -2) },

  { id: "vin", name: "Vinnie Mora", allegiance: "family", gang: "mordinos", watch: "wrights", role: "collector", kind: "mordino", sprite: "/reno/tokens/gangster.webp", home: at("mordino", -2, 2), post: at("mordino", 4, -2), blade: true },
  { id: "rae", name: "Rae Mordino", allegiance: "family", gang: "mordinos", watch: "bishops", role: "courier", kind: "mordino", sprite: "/reno/tokens/gangster.webp", home: at("mordino", 3, 4), post: at("desperado", -4, 1), blade: true },
  { id: "clete", name: "Clete Wright", allegiance: "family", gang: "wrights", watch: "mordinos", role: "collector", kind: "wright", sprite: "/reno/tokens/gangster.webp", home: at("wright", 2, -2), post: at("wright", -3, 3), blade: true },
  { id: "bug", name: "Junebug Wright", allegiance: "family", gang: "wrights", watch: "mordinos", role: "courier", kind: "wright", sprite: "/reno/tokens/gangster.webp", home: at("jungle", -3, 2), post: at("wright", 4, 1), blade: true },
  { id: "donnie", name: "Donnie Glass", allegiance: "family", gang: "salvatores", watch: "mordinos", role: "collector", kind: "salvatore", sprite: "/reno/tokens/gangster.webp", home: at("salvatore", 2, 2), post: at("salvatore", -3, -1), blade: true },
  { id: "pia", name: "Pia Salvatore", allegiance: "family", gang: "salvatores", watch: "bishops", role: "assassin", kind: "salvatore", sprite: "/reno/tokens/gangster.webp", home: at("salvatore", -2, 4), post: at("salvatore", 3, 1), blade: true },
  { id: "harlan", name: "Harlan Crowe", allegiance: "family", gang: "bishops", watch: "mordinos", role: "collector", kind: "bishop", sprite: "/reno/tokens/gangster.webp", home: at("bishop", -2, 2), post: at("shark", 2, -2), blade: true },
  { id: "mickey", name: "Mickey Shaw", allegiance: "family", gang: "bishops", watch: "salvatores", role: "courier", kind: "bishop", sprite: "/reno/tokens/gangster.webp", home: at("shark", -3, 3), post: at("bishop", 3, -1), blade: true },

  { id: "lang", name: "Lang Voss", allegiance: "family", gang: "bishops", watch: "mordinos", role: "collector", kind: "bishop", sprite: "/reno/tokens/gangster.webp", home: at("virgin", -2, 6), post: at("shark", 6, -2), blade: true },
  { id: "keene", name: "Keene Mora", allegiance: "family", gang: "mordinos", watch: "bishops", role: "collector", kind: "mordino", sprite: "/reno/tokens/gangster.webp", home: at("mordino", 3, 5), post: at("desperado", -2, 2), blade: true },
  { id: "dodd", name: "Dodd Glass", allegiance: "family", gang: "salvatores", watch: "mordinos", role: "collector", kind: "salvatore", sprite: "/reno/tokens/gangster.webp", home: at("salvatore", 4, -4), post: at("salvatore", -6, 1), night: true, blade: true },
  { id: "moss", name: "Moss Wright", allegiance: "family", gang: "wrights", watch: "mordinos", role: "collector", kind: "wright", sprite: "/reno/tokens/gangster.webp", home: at("wright", 6, 5), post: at("wright", -3, -2), blade: true },

  { id: "cough", name: "The Cough", allegiance: "wild", role: "wild", kind: "ghoul", sprite: "/reno/tokens/junkie.webp", home: at("golgotha", -4, 2), post: at("golgotha", 3, -2) },
  { id: "shallow", name: "Shallow", allegiance: "wild", role: "wild", kind: "ghoul", sprite: "/reno/tokens/junkie.webp", home: at("golgotha", 2, 5), post: at("golgotha", -3, 1) },
  { id: "glow", name: "Old Light", allegiance: "wild", role: "wild", kind: "mutant", sprite: "/reno/tokens/junkie.webp", home: at("golgotha", 5, -3), post: at("golgotha", -1, 4) },

  { id: "bea", name: "Bea Toll", allegiance: "citizen", role: "tourist", kind: "tourist", sprite: "/reno/tokens/tourist-ncr.webp", home: { x: 34, z: -1480 }, post: at("virgin", 4, 2), ride: "north" },
  { id: "hap", name: "Hap Ruiz", allegiance: "citizen", role: "porter", kind: "john", sprite: "/reno/tokens/driver.webp", home: { x: 28, z: 1486 }, post: at("motel", 2, -2), ride: "south" },
  { id: "nena", name: "Nena Pell", allegiance: "citizen", role: "tourist", kind: "tourist", sprite: "/reno/tokens/tourist-traveler.webp", home: { x: 1520, z: 54 }, post: at("shark", -2, 2), ride: "east" },
  { id: "ortiz", name: "Ortiz Dane", allegiance: "citizen", role: "guide", kind: "john", sprite: "/reno/tokens/expat.webp", home: { x: -1480, z: 26 }, post: at("desperado", 2, 1), ride: "west" },
  { id: "cleo", name: "Cleo Marsh", allegiance: "citizen", role: "guest", kind: "tourist", sprite: "/reno/tokens/backpacker.webp", home: { x: 52, z: -1464 }, post: at("virgin", -4, 1) },

  { id: "len", name: "Len Crowe", allegiance: "citizen", role: "worker", kind: "john", sprite: "/reno/tokens/ped-man.webp", home: at("virgin", -8, 6), post: at("market", 2, 2) },
  { id: "bao", name: "Bao Tran", allegiance: "citizen", role: "staff", kind: "john", sprite: "/reno/tokens/ped-man.webp", home: at("desperado", -8, -6), post: at("desperado", 1, 3) },
  { id: "willa", name: "Willa Trent", allegiance: "citizen", role: "worker", kind: "john", sprite: "/reno/tokens/ped-woman.webp", home: at("chop", 6, -4), post: at("chop", -2, 2) },
  { id: "etta", name: "Etta Wright", allegiance: "family", gang: "wrights", role: "resident", kind: "wright", sprite: "/reno/tokens/ped-woman.webp", home: at("wright", -4, 4), post: at("wright", 2, 1) },
  { id: "slim", name: "Slim Bello", allegiance: "family", gang: "mordinos", watch: "bishops", role: "collector", kind: "mordino", sprite: "/reno/tokens/gangster.webp", home: at("mordino", 6, -2), post: at("mordino", -3, 2), blade: true },
  { id: "mira", name: "Doc Mira", allegiance: "citizen", role: "worker", kind: "tourist", sprite: "/reno/tokens/ped-woman.webp", home: at("stables", -5, 6), post: at("stables", 2, -2) },
  { id: "poke", name: "Poke Ives", allegiance: "independent", role: "resident", kind: "punk", sprite: "/reno/tokens/junkie.webp", home: at("jungle", -6, 5), post: at("jungle", 3, -2) },
  { id: "lottie", name: "Lottie Glass", allegiance: "citizen", role: "staff", kind: "tourist", sprite: "/reno/tokens/host.webp", home: at("salvatore", 5, -4), post: at("salvatore", -1, 2) },
  { id: "hale", name: "Brother Hale", allegiance: "citizen", role: "resident", kind: "john", sprite: "/reno/tokens/expat.webp", home: at("stables", 8, 2), post: at("market", -4, -2) },
  { id: "tom", name: "Tom Peck", allegiance: "citizen", role: "worker", kind: "john", sprite: "/reno/tokens/ped-man.webp", home: at("market", 8, -6), post: at("market", -1, 3) },
  { id: "nina", name: "Nina Sol", allegiance: "citizen", role: "tourist", kind: "tourist", sprite: "/reno/tokens/tourist-ncr.webp", home: at("shark", -8, 8), post: at("shark", 2, -3), night: true },
  { id: "wes", name: "Wes Calder", allegiance: "citizen", role: "guest", kind: "tourist", sprite: "/reno/tokens/backpacker.webp", home: at("virgin", 8, -8), post: at("virgin", -2, 3) },

  { id: "pearl", name: "Pearl Quinn", allegiance: "citizen", role: "walker", kind: "tourist", sprite: "/reno/tokens/ped-woman.webp", home: at("motel", -2, 6), post: at("motel", 2, -1), night: true, pitch: "Talk is free. The hour is forty. Click again if you mean it.", price: 40 },
  { id: "dollie", name: "Dollie Shaw", allegiance: "citizen", role: "walker", kind: "tourist", sprite: "/reno/tokens/host.webp", home: at("virgin", 4, -8), post: at("virgin", -2, 2), night: true, pitch: "Standing is the ad. The hour is fifty-five. Click again to hire it.", price: 55 },
  { id: "marisol", name: "Marisol Vega", allegiance: "citizen", role: "walker", kind: "tourist", sprite: "/reno/tokens/floor.webp", home: at("desperado", 6, -8), post: at("desperado", -3, -1), night: true, pitch: "No tour. Forty-five for the hour. Click again with the caps.", price: 45 },
  { id: "kit", name: "Kit Abel", allegiance: "citizen", role: "walker", kind: "tourist", sprite: "/reno/tokens/tourist-traveler.webp", home: at("chop", -4, 8), post: at("chop", 2, 1), night: true, pitch: "The other job is tonight. Thirty-five. Click again.", price: 35 },
  { id: "faye", name: "Faye Brin", allegiance: "citizen", role: "walker", kind: "tourist", sprite: "/reno/dance/amira/a.webp", home: at("salvatore", -6, 6), post: at("salvatore", 2, -2), night: true, pitch: "Eighty. Night number. Click again if you have it.", price: 80 },
  { id: "tess", name: "Tess Harlow", allegiance: "citizen", role: "walker", kind: "tourist", sprite: "/reno/dance/luz/a.webp", home: at("jungle", 2, -6), post: at("jungle", -2, 2), night: true, pitch: "Talk so I know you're safe. Twenty-five for the hour. Click again.", price: 25 },

  { id: "velvet", name: "Nia Kane", allegiance: "citizen", role: "dancer", kind: "dancer", sprite: "/reno/dance/nia/a.webp", home: at("shark", 2, 6), post: at("shark", -1, 1), night: true, pitch: "Public floor is the gold fringe. The booth is extra, and it gets more expensive.", price: 30 },
  { id: "chrome", name: "Mei Della", allegiance: "citizen", role: "dancer", kind: "dancer", sprite: "/reno/dance/mei/a.webp", home: at("desperado", -4, 6), post: at("desperado", 1, -1), night: true, pitch: "Silver on the stage. If you want me closer, you pay the steps.", price: 28 },
  { id: "goldie", name: "Luz Navarro", allegiance: "citizen", role: "dancer", kind: "dancer", sprite: "/reno/dance/luz/a.webp", home: at("virgin", 6, -6), post: at("virgin", 1, 2), night: true, pitch: "The fringe is the public set. The chair is not.", price: 32 },
  { id: "emmy", name: "Amira Shah", allegiance: "citizen", role: "dancer", kind: "dancer", sprite: "/reno/dance/amira/a.webp", home: at("shark", -6, 4), post: at("shark", 3, -2), night: true, pitch: "Emerald on the hour. Private is three prices, not one.", price: 35 },
  { id: "lace", name: "Ines Yazzie", allegiance: "citizen", role: "dancer", kind: "dancer", sprite: "/reno/dance/ines/a.webp", home: at("desperado", 8, -4), post: at("desperado", -2, 2), night: true, pitch: "I dance the floor, then the booth. The last step costs the most.", price: 26 },
  { id: "ruby", name: "Ruby Pell", allegiance: "citizen", role: "dancer", kind: "dancer", sprite: "/reno/dance/ines/b.webp", home: at("mordino", 4, -5), post: at("mordino", -1, 2), night: true, pitch: "The Globes get the late set. The booth still climbs.", price: 26 },
];

export const SOUL_BY_ID: Record<string, SoulDef> = Object.fromEntries(SOULS.map((s) => [s.id, s]));

const EMPTY_FRICTION = (): Record<GangId, number> => ({
  mordinos: 0,
  wrights: 0,
  salvatores: 0,
  bishops: 0,
});

export function clockMinute(life: Pick<RenoLife, "day" | "hour" | "minute">): number {
  return life.day * 1440 + life.hour * 60 + (life.minute ?? 0);
}

export function ensureCity(life: RenoLife): RenoLife {
  life.fear = life.fear ?? 0;
  life.regard = life.regard ?? 0;
  life.warrant = life.warrant ?? 0;
  life.strain = life.strain ?? 0;
  life.tension = life.tension ?? 50;
  life.friction = { ...EMPTY_FRICTION(), ...(life.friction ?? {}) };
  life.grudges = { ...(life.grudges ?? {}) };
  life.absent = { ...(life.absent ?? {}) };
  life.corpses = life.corpses ?? [];
  life.privateShows = { ...(life.privateShows ?? {}) };
  life.reprieveMinute = life.reprieveMinute ?? 0;
  ensurePulse(life);
  return life;
}

export function ringColor(soul: SoulDef): string {
  if (soul.allegiance === "citizen") return "#d9d0c1";
  if (soul.allegiance === "independent") return "#e0b15a";
  if (soul.allegiance === "law") return "#7eb6e0";
  if (soul.allegiance === "wild") return "#c47a62";
  if (soul.gang) return GANG_BY_ID[soul.gang].color;
  return "#b9a48a";
}

export function allegianceLabel(soul: SoulDef): string {
  if (soul.allegiance === "citizen") return "citizen";
  if (soul.allegiance === "independent") return "independent";
  if (soul.allegiance === "law") return "the code";
  if (soul.allegiance === "wild") return "the edge";
  if (soul.gang) return GANG_BY_ID[soul.gang].name;
  return "family";
}

function nightHour(hour: number): boolean {
  const h = ((hour % 24) + 24) % 24;
  return h >= 20 || h < 6;
}

function dist(ax: number, az: number, bx: number, bz: number): number {
  return Math.hypot(ax - bx, az - bz);
}

function lerp(a: { x: number; z: number }, b: { x: number; z: number }, t: number) {
  return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t };
}

export function isRival(a?: GangId, b?: GangId): boolean {
  if (!a || !b || a === b) return false;
  return GANG_BY_ID[a].rival === b || GANG_BY_ID[b].rival === a;
}

function borderPoint(soul: SoulDef): { x: number; z: number } {
  const watch = soul.watch ?? (soul.gang ? GANG_BY_ID[soul.gang].rival : undefined);
  if (!soul.gang || !watch) return soul.post;
  const home = P[GANG_BY_ID[soul.gang].turf];
  const there = P[GANG_BY_ID[watch].turf];
  return { x: (home.x + there.x) / 2, z: (home.z + there.z) / 2 };
}

export function soulGoal(
  soul: SoulDef,
  life: RenoLife,
  playerX: number,
  playerZ: number,
): { x: number; z: number } {
  const g = life.grudges?.[soul.id] ?? 0;
  const fear = life.fear ?? 0;
  const warrant = life.warrant ?? 0;
  const tension = life.tension ?? 0;
  const friction = soul.gang ? (life.friction?.[soul.gang] ?? 0) : 0;
  const scheduled = () => {
    const spot = schedulePoint(soul, life);
    return { x: spot.x, z: spot.z };
  };

  if (soul.role === "dancer") {
    const onFloor = life.hour >= 8 || life.hour < 4;
    const spot = scheduled();
    if (onFloor && dist(spot.x, spot.z, playerX, playerZ) < 36) return { x: playerX, z: playerZ };
    return spot;
  }

  if (soul.role === "walker") {
    const out = life.hour >= 18 || life.hour < 5;
    const spot = scheduled();
    if (out && dist(spot.x, spot.z, playerX, playerZ) < 32) return { x: playerX, z: playerZ };
    return spot;
  }

  if (soul.allegiance === "citizen") {
    const beat = soul.post;
    if (fear >= 18 && dist(beat.x, beat.z, playerX, playerZ) < 18) {
      const dx = beat.x - playerX;
      const dz = beat.z - playerZ;
      const len = Math.hypot(dx, dz) || 1;
      return { x: playerX + (dx / len) * 16, z: playerZ + (dz / len) * 16 };
    }
    return scheduled();
  }

  if (soul.allegiance === "wild") return scheduled();

  if (soul.allegiance === "law") {
    if (warrant >= 16) return { x: playerX, z: playerZ };
    return scheduled();
  }

  if (soul.allegiance === "independent") {
    if (fear >= 55) return soul.home;
    if (g >= 18) return { x: playerX, z: playerZ };
    return scheduled();
  }

  if (soul.blade && (friction >= 18 || g >= 18)) return { x: playerX, z: playerZ };
  const spot = schedulePoint(soul, life);
  // Hot city: off the clock they go looking. On the clock they still have a job.
  if (soul.blade && tension >= 64 && (spot.stop === "home" || spot.stop === "social")) return borderPoint(soul);
  return { x: spot.x, z: spot.z };
}

/** Pace between two points. Real time, so the block is alive while you stand still. */
export function pace(a: { x: number; z: number }, b: { x: number; z: number }, seconds: number, rate = 2.4): { x: number; z: number } {
  const len = Math.max(4, dist(a.x, a.z, b.x, b.z));
  const phase = (seconds * rate) % (len * 2);
  const u = phase <= len ? phase / len : (2 * len - phase) / len;
  return lerp(a, b, u);
}

export function troubleOf(soul: SoulDef, life: RenoLife, distance: number): string | null {
  const night = nightHour(life.hour);
  const limit = soul.allegiance === "wild" ? (night ? 8 : 5.2) : 6.6;
  if (distance > limit) return null;
  if (clockMinute(life) < (life.reprieveMinute ?? 0)) return null;
  const g = life.grudges?.[soul.id] ?? 0;
  if (soul.allegiance === "citizen") return null;
  if (soul.allegiance === "wild") {
    return `${soul.name} was already in the ground here. You walked into it.`;
  }
  if (soul.allegiance === "law") {
    if ((life.warrant ?? 0) < 32) return null;
    return `${soul.name} has had your warrant long enough to cross town. The file finally has a face.`;
  }
  if (soul.allegiance === "independent") {
    if (g < 36) return null;
    return `${soul.name} kept the slight. It took this long for them to come stand in front of you.`;
  }
  if (!soul.blade) return null;
  if (g >= 36) return `${soul.name} came for the name you made on ${soul.gang ? GANG_BY_ID[soul.gang].name : "their"} block.`;
  const friction = soul.gang ? (life.friction?.[soul.gang] ?? 0) : 0;
  if (friction >= 34 && life.gangId !== soul.gang) {
    return `${soul.name} is not here for a rumor. ${soul.gang ? GANG_BY_ID[soul.gang].name : "The family"} let the heat sit, then walked.`;
  }
  return null;
}

export interface FeudHit {
  reason: string;
  foes: SoulDef[];
  allies: SoulDef[];
  x: number;
  z: number;
}

export function feudNear(life: RenoLife, playerX: number, playerZ: number, spots: Map<string, { x: number; z: number }>): FeudHit | null {
  if ((life.tension ?? 0) < 48) return null;
  if (clockMinute(life) < (life.reprieveMinute ?? 0)) return null;
  const blades = SOULS.filter((s) => s.blade && s.gang && !(life.absent && life.day < (life.absent[s.id] ?? 0)));
  let best: { a: SoulDef; b: SoulDef; d: number } | null = null;
  for (let i = 0; i < blades.length; i++) {
    for (let j = i + 1; j < blades.length; j++) {
      const a = blades[i]!;
      const b = blades[j]!;
      if (!isRival(a.gang, b.gang)) continue;
      const pa = spots.get(a.id);
      const pb = spots.get(b.id);
      if (!pa || !pb) continue;
      const d = dist(pa.x, pa.z, pb.x, pb.z);
      if (d > 9) continue;
      if (!best || d < best.d) best = { a, b, d };
    }
  }
  if (!best) return null;
  const pa = spots.get(best.a.id)!;
  const pb = spots.get(best.b.id)!;
  const x = (pa.x + pb.x) / 2;
  const z = (pa.z + pb.z) / 2;
  if (zoneAt(x, z) === "strip") return null;
  if (dist(playerX, playerZ, x, z) > 13) return null;
  const gangA = best.a.gang!;
  const gangB = best.b.gang!;
  const side = (g: GangId) => blades.filter((s) => s.gang === g).slice(0, 3);
  let foes: SoulDef[];
  let allies: SoulDef[];
  if (life.gangId === gangA) {
    allies = side(gangA);
    foes = side(gangB);
  } else if (life.gangId === gangB) {
    allies = side(gangB);
    foes = side(gangA);
  } else {
    const fa = life.friction?.[gangA] ?? 0;
    const fb = life.friction?.[gangB] ?? 0;
    foes = fa >= fb ? side(gangA) : side(gangB);
    allies = fa >= fb ? side(gangB) : side(gangA);
    if (Math.abs(fa - fb) < 8) {
      foes = [...side(gangA).slice(0, 2), ...side(gangB).slice(0, 2)];
      allies = [];
    }
  }
  const reason = `${GANG_BY_ID[gangA].name} and ${GANG_BY_ID[gangB].name} were already closing. You walked into their war, not a dice roll.`;
  return { reason, foes, allies, x, z };
}

export function claimSlot(board: HexBoard, q: number, r: number, used: Set<string>): { q: number; r: number } {
  const radius = board.radius;
  const pulled = axialDistance(0, 0, q, r) > radius - 1 ? pullToward(q, r, radius - 1) : { q, r };
  const start = isWalkable(board, pulled.q, pulled.r) && !used.has(hexKey(pulled.q, pulled.r)) ? pulled : { q: 0, r: 0 };
  if (isWalkable(board, start.q, start.r) && !used.has(hexKey(start.q, start.r)) && !(start.q === 0 && start.r === 0 && used.has("0,0"))) {
    return start;
  }
  for (let rad = 0; rad <= radius; rad++) {
    for (let dq = -rad; dq <= rad; dq++) {
      for (let dr = -rad; dr <= rad; dr++) {
        if (axialDistance(0, 0, dq, dr) !== rad) continue;
        const key = hexKey(dq, dr);
        if (used.has(key) || !isWalkable(board, dq, dr)) continue;
        return { q: dq, r: dr };
      }
    }
  }
  return { q: 0, r: 0 };
}

function pullToward(q: number, r: number, max: number): { q: number; r: number } {
  const d = axialDistance(0, 0, q, r) || 1;
  if (d <= max) return { q, r };
  const scale = max / d;
  return axialRound(q * scale, r * scale);
}

export function fightRadius(originX: number, originZ: number, bodies: Array<{ x: number; z: number }>, count: number): number {
  let span = 0;
  for (const b of bodies) {
    const h = worldToHex(b.x, b.z, originX, originZ, HEX_METERS);
    span = Math.max(span, axialDistance(0, 0, h.q, h.r));
  }
  const byBodies = 3 + Math.ceil(count / 2);
  return Math.max(4, Math.min(7, Math.max(span + 1, byBodies)));
}

export { HEX_METERS, worldToHex };
