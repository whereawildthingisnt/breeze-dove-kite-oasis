import type {
  AngelaState,
  BoxingRank,
  ChemId,
  DistrictDef,
  DistrictId,
  EncounterSetting,
  GangDef,
  GangId,
  HousingDef,
  HousingId,
  RenoLife,
  StashId,
} from "./types";
import { seedDealers, seedMarks } from "./intel";
import { weatherAt } from "./weather";

export const DISTRICTS: DistrictDef[] = [
  {
    id: "golgotha",
    name: "Golgotha",
    blurb: "Graves, glow, and people who should have stayed buried.",
    q: 3,
    r: 0,
    art: "crypt",
    danger: 9,
    sell: 1.4,
    buy: 0.7,
    tags: ["wild"],
  },
  {
    id: "rail",
    name: "Rail yard",
    blurb: "Rusted boxcars. Good for hiding product. Bad for hiding from people.",
    q: 2,
    r: 1,
    art: "rail",
    danger: 6,
    sell: 1.15,
    buy: 0.85,
    tags: ["wild"],
  },
  {
    id: "chop",
    name: "Chop Shop",
    blurb: "Engines, stolen cars, and lofts nobody admits exist.",
    q: 3,
    r: 1,
    art: "rail",
    danger: 5,
    sell: 1.1,
    buy: 0.9,
    tags: ["housing"],
  },
  {
    id: "wright",
    name: "Wright compound",
    blurb: "Orchards, stills, family dinners with a shotgun at the door.",
    q: 2,
    r: 2,
    art: "motel",
    danger: 3,
    gang: "wrights",
    sell: 0.85,
    buy: 1,
    tags: ["gang", "housing"],
  },
  {
    id: "jungle",
    name: "The Jungle",
    blurb: "Shacks, fires, and a city that pretends this block is not a city.",
    q: 3,
    r: 2,
    art: "squat",
    danger: 7,
    sell: 1.25,
    buy: 0.75,
    tags: ["housing", "wild"],
  },
  {
    id: "stables",
    name: "The Ring",
    blurb: "Sawdust, purses, and a doctor who only shows up if you win.",
    q: 4,
    r: 2,
    art: "ring",
    danger: 4,
    sell: 1.05,
    buy: 1,
    tags: ["ring"],
  },
  {
    id: "mordino",
    name: "Golden Globes",
    blurb: "Jet in the walls. Mordino names on the tab.",
    q: 2,
    r: 3,
    art: "bar",
    danger: 5,
    gang: "mordinos",
    sell: 0.55,
    buy: 0.55,
    tags: ["gang", "market"],
  },
  {
    id: "virgin",
    name: "Virgin Street",
    blurb: "A weekend sold to people who do not live here. The people who do live here sell it back.",
    q: 3,
    r: 3,
    art: "casino",
    danger: 3,
    sell: 1.2,
    buy: 1.1,
    tags: ["casino", "housing"],
  },
  {
    id: "shark",
    name: "Shark Club",
    blurb: "Bishop money, polished brass, and a dress code that includes a gun.",
    q: 4,
    r: 3,
    art: "casino",
    danger: 2,
    gang: "bishops",
    sell: 1.35,
    buy: 1.2,
    tags: ["casino", "gang"],
  },
  {
    id: "bishop",
    name: "Bishop offices",
    blurb: "The polite floor. Politics with a smile that does not reach the eyes.",
    q: 5,
    r: 3,
    art: "casino",
    danger: 2,
    gang: "bishops",
    sell: 1.1,
    buy: 1.15,
    tags: ["gang", "housing"],
  },
  {
    id: "salvatore",
    name: "Salvatore's Bar",
    blurb: "Old money, older grudges, and a laser in a cane if the stories are true.",
    q: 2,
    r: 4,
    art: "bar",
    danger: 4,
    gang: "salvatores",
    sell: 0.9,
    buy: 1.05,
    tags: ["gang"],
  },
  {
    id: "motel",
    name: "Desert Rose",
    blurb: "Hourly keys, short stays, and a day wage that will not rent the week.",
    q: 3,
    r: 4,
    art: "motel",
    danger: 2,
    sell: 1.05,
    buy: 1,
    tags: ["housing"],
  },
  {
    id: "desperado",
    name: "Desperado",
    blurb: "Cards, liquor, and a floor that has seen more blood than the ring.",
    q: 4,
    r: 4,
    art: "casino",
    danger: 4,
    sell: 1.15,
    buy: 1.05,
    tags: ["casino"],
  },
  {
    id: "market",
    name: "East stalls",
    blurb: "Chems, ammo, rumors. Everyone is buying. Everyone is watching.",
    q: 5,
    r: 4,
    art: "squat",
    danger: 5,
    sell: 1.0,
    buy: 0.8,
    tags: ["market"],
  },
];

export const DISTRICT_BY_ID: Record<DistrictId, DistrictDef> = Object.fromEntries(
  DISTRICTS.map((d) => [d.id, d]),
) as Record<DistrictId, DistrictDef>;

export const DISTRICT_POS: Record<DistrictId, { x: number; z: number }> = {
  virgin: { x: 0, z: 0 },
  shark: { x: 48, z: -8 },
  desperado: { x: 96, z: 4 },
  bishop: { x: 52, z: -42 },
  mordino: { x: -52, z: 10 },
  salvatore: { x: -92, z: 22 },
  motel: { x: 18, z: 58 },
  stables: { x: 110, z: 50 },
  jungle: { x: -28, z: 84 },
  wright: { x: -78, z: 102 },
  chop: { x: 68, z: 92 },
  rail: { x: 118, z: 112 },
  market: { x: 132, z: 26 },
  golgotha: { x: 36, z: 156 },
};

export const HOUSING: HousingDef[] = [
  {
    id: "motel-room",
    name: "Desert Rose room",
    district: "motel",
    kind: "rent",
    rent: 40,
    danger: 1,
    note: "A bed, a lock, and a clerk who does not ask. 40 caps a week.",
  },
  {
    id: "shark-suite",
    name: "Shark Club suite",
    district: "shark",
    kind: "rent",
    rent: 160,
    danger: 0,
    note: "Prestige, a bath, and Bishop eyes in the hallway. 160 caps a week.",
  },
  {
    id: "wright-bunk",
    name: "Wright bunkhouse",
    district: "wright",
    kind: "rent",
    rent: 15,
    danger: 2,
    note: "A cot and orchard chores. Family will notice if you skip dinner. 15 caps a week.",
  },
  {
    id: "jungle-shack",
    name: "Jungle shack",
    district: "jungle",
    kind: "squat",
    rent: 0,
    danger: 8,
    convertSkill: "repair",
    convertTarget: 45,
    note: "Free. The roof is an opinion. Convert it with Repair and days of work.",
  },
  {
    id: "chop-loft",
    name: "Chop Shop loft",
    district: "chop",
    kind: "squat",
    rent: 0,
    danger: 6,
    convertSkill: "repair",
    convertTarget: 40,
    note: "Free if you can climb. Mechanics below, raids above. Convert with Repair.",
  },
  {
    id: "golgotha-crypt",
    name: "Golgotha crypt",
    district: "golgotha",
    kind: "squat",
    rent: 0,
    danger: 10,
    convertSkill: "outdoorsman",
    convertTarget: 50,
    note: "Free. Glow, graves, and things that hunt at night. Convert with Outdoorsman.",
  },
  {
    id: "bishop-room",
    name: "Bishop guest room",
    district: "bishop",
    kind: "rent",
    rent: 80,
    danger: 1,
    requiresGang: "bishops",
    requiresRank: 2,
    note: "Only if the Bishops already own a piece of you. 80 caps a week.",
  },
];

export const HOUSING_BY_ID: Record<HousingId, HousingDef> = Object.fromEntries(
  HOUSING.map((h) => [h.id, h]),
) as Record<HousingId, HousingDef>;

export const GANGS: GangDef[] = [
  {
    id: "mordinos",
    name: "Mordinos",
    turf: "mordino",
    pitch: "Big Jesus Mordino. Little Jesus. Myron cooking Jet in the Stables. The Desperado and the Golden Globes.",
    color: "#8a4a3a",
    head: "Big Jesus Mordino",
    underboss: "Little Jesus Mordino",
    front: "Desperado / Golden Globes",
    credo: "Chems, girls, and a family that smiles when the product moves. Richard Wright died on their Jet. The Wrights have not forgotten.",
    rival: "wrights",
    ranks: ["Runner", "Soldato", "Capo", "Underboss", "Family"],
  },
  {
    id: "wrights",
    name: "Wrights",
    turf: "wright",
    pitch: "Orville Wright. Mrs. Wright. A dead son named Richard. Stills east of town and a last name that still means something.",
    color: "#6b7a52",
    head: "Orville Wright",
    underboss: "Mrs. Wright",
    front: "Wright compound / stills",
    credo: "Moonshine and blood. They want the Mordinos answered for Richard. Honor is a family word until it is a shotgun.",
    rival: "mordinos",
    ranks: ["Cousin", "Family", "Lieutenant", "Blood", "Wright"],
  },
  {
    id: "salvatores",
    name: "Salvatores",
    turf: "salvatore",
    pitch: "Louis Salvatore. Mason at the door. An oxygen tank and a laser pistol the other families cannot buy.",
    color: "#4a5560",
    head: "Louis Salvatore",
    underboss: "Mason",
    front: "Salvatore's Bar",
    credo: "Old Reno. Quiet rooms. Energy weapons from men in vertibirds. Prove you can shut up and Mason might let you hold one.",
    rival: "mordinos",
    ranks: ["Soldier", "Made", "Lieutenant", "Right hand", "Salvatore"],
  },
  {
    id: "bishops",
    name: "Bishops",
    turf: "bishop",
    pitch: "John Bishop. Leslie Anne. Angela on the second-floor rail. The Shark Club owns the mayor.",
    color: "#7a6a48",
    head: "John Bishop",
    underboss: "Leslie Anne Bishop",
    front: "Shark Club",
    credo: "The polite family. Politics with a smile that does not reach the eyes. Work is clean until Mr. Bishop needs a man in NCR dead.",
    rival: "mordinos",
    ranks: ["Associate", "Made", "Lieutenant", "Consigliere", "Right hand"],
  },
];

export const GANG_BY_ID: Record<GangId, GangDef> = Object.fromEntries(
  GANGS.map((g) => [g.id, g]),
) as Record<GangId, GangDef>;

export const CHEMS: Record<ChemId, { name: string; street: number; weight: number }> = {
  jet: { name: "Jet", street: 50, weight: 1 },
  psycho: { name: "Psycho", street: 400, weight: 1 },
  buffout: { name: "Buffout", street: 200, weight: 1 },
  mentats: { name: "Mentats", street: 200, weight: 1 },
};

export const STASH_META: Record<StashId, { name: string; street: number; kind: "chem" | "habit" }> = {
  jet: { name: "Jet", street: 50, kind: "chem" },
  psycho: { name: "Psycho", street: 400, kind: "chem" },
  buffout: { name: "Buffout", street: 200, kind: "chem" },
  mentats: { name: "Mentats", street: 200, kind: "chem" },
  vodka: { name: "Vodka", street: 20, kind: "habit" },
  cigarettes: { name: "Cigarettes", street: 5, kind: "habit" },
  marijuana: { name: "Marijuana", street: 30, kind: "habit" },
  cocaine: { name: "Cocaine", street: 80, kind: "habit" },
};

export const STASH_IDS: StashId[] = [
  "jet",
  "psycho",
  "buffout",
  "mentats",
  "vodka",
  "cigarettes",
  "marijuana",
  "cocaine",
];

export const BOXING_ORDER: BoxingRank[] = [
  "unsigned",
  "prelim",
  "contender",
  "title",
  "champion",
];

export function boxingPurse(rank: BoxingRank, fame: number): number {
  const base =
    rank === "champion" ? 800 : rank === "title" ? 400 : rank === "contender" ? 180 : 70;
  return base + Math.round(fame * 3);
}

export function isoPoint(q: number, r: number, tw = 128, th = 64) {
  return {
    x: (q - r) * (tw / 2),
    y: (q + r) * (th / 2),
  };
}

export function clockLabel(life: RenoLife): string {
  const h = ((life.hour % 24) + 24) % 24;
  const month = Math.floor((life.day - 1) / 30) + 1;
  const dom = ((life.day - 1) % 30) + 1;
  const pad = String(h).padStart(2, "0");
  const min = String(life.minute ?? 0).padStart(2, "0");
  const sec = String(life.second ?? 0).padStart(2, "0");
  const night = h >= 20 || h < 6;
  const wx = weatherAt(life.day, h);
  const sky = wx === "clear" ? "" : ` · ${wx}`;
  return `Month ${month} · Day ${dom} · ${pad}:${min}:${sec}${night ? " · night" : ""}${sky}`;
}

export function isNight(life: RenoLife): boolean {
  const h = ((life.hour % 24) + 24) % 24;
  return h >= 20 || h < 6;
}

export function lightingOf(life: RenoLife): { penalty: number; label: string } {
  const night = isNight(life);
  const d = life.district;
  if (d === "golgotha") {
    return night
      ? { penalty: -80, label: "Golgotha dark · flare if you packed one (−80%)" }
      : { penalty: -50, label: "Crypt mouth · bad light (−50%)" };
  }
  if (d === "shark" || d === "desperado" || d === "virgin" || d === "mordino" || d === "salvatore") {
    return { penalty: -20, label: "Smoky floor · medium indoor (−20%)" };
  }
  if (d === "jungle" || d === "rail" || d === "chop") {
    return night
      ? { penalty: -40, label: "Yard night · new moon (−40%)" }
      : { penalty: -10, label: "Open yard · light cloud (−10%)" };
  }
  if (night) {
    return { penalty: -25, label: "Street night · crescent (−25%)" };
  }
  return { penalty: 0, label: "Daylight · 0%" };
}

export function lightingFromSetting(
  setting: EncounterSetting,
  night: boolean,
): { penalty: number; label: string } {
  if (setting === "crypt") {
    return night
      ? { penalty: -80, label: "Golgotha dark · flare if you packed one (−80%)" }
      : { penalty: -50, label: "Crypt mouth · bad light (−50%)" };
  }
  if (setting === "casino" || setting === "motel" || setting === "ring") {
    return { penalty: -20, label: "Smoky floor · medium indoor (−20%)" };
  }
  if (setting === "rail" || setting === "yard") {
    return night
      ? { penalty: -40, label: "Yard night · new moon (−40%)" }
      : { penalty: -10, label: "Open yard · light cloud (−10%)" };
  }
  if (setting === "alley") {
    return night
      ? { penalty: -35, label: "Alley night (−35%)" }
      : { penalty: -10, label: "Alley shade (−10%)" };
  }
  if (night) return { penalty: -25, label: "Street night · crescent (−25%)" };
  return { penalty: 0, label: "Daylight · 0%" };
}

export function emptyStash(): Record<StashId, number> {
  return {
    jet: 0,
    psycho: 0,
    buffout: 0,
    mentats: 0,
    vodka: 0,
    cigarettes: 0,
    marijuana: 0,
    cocaine: 0,
  };
}

export function emptyAngela(): AngelaState {
  return {
    met: false,
    mood: "fresh",
    jetOffer: false,
    slept: false,
    insulted: false,
    lastTalkDay: 0,
  };
}

export function emptyRep(): Record<GangId, number> {
  return { mordinos: 0, wrights: 0, salvatores: 0, bishops: 0 };
}

export function newLife(characterId: string, hpMax: number): RenoLife {
  const start = DISTRICT_POS.virgin;
  return {
    characterId,
    day: 1,
    hour: 8,
    minute: 0,
    second: 0,
    clock: 1,
    caps: 220,
    hp: hpMax,
    hpMax,
    heat: 0,
    fame: 0,
    district: "virgin",
    posX: start.x,
    posZ: start.z,
    housingId: null,
    squatProgress: 0,
    gangId: null,
    gangRank: 0,
    gangRep: emptyRep(),
    stash: emptyStash(),
    boxingRank: "unsigned",
    boxingWins: 0,
    boxingLosses: 0,
    nextFightDay: 0,
    trainBonus: 0,
    rentPaidWeek: 0,
    addicted: {},
    lastDose: {},
    hunger: 22,
    thirst: 18,
    fatigue: 12,
    boredom: 28,
    xp: 0,
    dealers: seedDealers(),
    marks: seedMarks(),
    soughtDealer: null,
    soughtMark: null,
    business: null,
    dealing: false,
    lab: false,
    pressureDay: 0,
    rations: 0,
    waters: 0,
    log: ["Virgin Street. New Reno. Two hundred sixty thousand souls, a hundred and nine square miles, and the Strip still wants yours."],
    combat: null,
    sighting: null,
    dialogue: null,
    angela: emptyAngela(),
    dead: false,
    loot: null,
    inspecting: null,
    insideId: null,
    npcMemory: {},
    job: null,
    worldDay: 0,
    fear: 0,
    regard: 0,
    warrant: 0,
    strain: 0,
    tension: 50,
    friction: emptyRep(),
    grudges: {},
    absent: {},
    corpses: [],
    reprieveMinute: 0,
    book: [],
    nav: null,
  };
}
