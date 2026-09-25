import { clamp } from "./dice";
import type { DistrictId, GangId, RenoLife, StoryState } from "./types";
import { weatherAt, weatherCrowd, weatherLine } from "./weather";
import { GANGS } from "./world";

export interface VenueDef {
  id: string;
  name: string;
  kind: "casino" | "hotel" | "bar";
  district: DistrictId;
  owner: string;
  gang?: GangId;
  prestige: number;
  security: number;
  employees: number;
  /** Hotel rooms. Casinos ignore this. */
  rooms?: number;
  rate?: number;
  open: number;
  close: number;
  games?: string[];
}

/** What New Reno actually moves. Not a national economy. */
export const VENUES: VenueDef[] = [
  {
    id: "shark",
    name: "Shark Club",
    kind: "casino",
    district: "shark",
    owner: "John Bishop",
    gang: "bishops",
    prestige: 90,
    security: 78,
    employees: 36,
    open: 12,
    close: 4,
    games: ["blackjack", "poker", "high-limit", "sports book", "private game"],
  },
  {
    id: "desperado",
    name: "Desperado",
    kind: "casino",
    district: "desperado",
    owner: "Big Jesus Mordino",
    gang: "mordinos",
    prestige: 48,
    security: 36,
    employees: 18,
    open: 14,
    close: 5,
    games: ["slots", "poker", "roulette", "illegal game"],
  },
  {
    id: "catclaw",
    name: "Catclaw",
    kind: "casino",
    district: "market",
    owner: "nobody who signs paper",
    prestige: 12,
    security: 8,
    employees: 3,
    open: 18,
    close: 6,
    games: ["slots", "two-bit poker", "information for stakes"],
  },
  {
    id: "globes",
    name: "Golden Globes",
    kind: "bar",
    district: "mordino",
    owner: "Little Jesus Mordino",
    gang: "mordinos",
    prestige: 34,
    security: 28,
    employees: 7,
    open: 16,
    close: 4,
  },
  {
    id: "salvatore",
    name: "Salvatore's Bar",
    kind: "bar",
    district: "salvatore",
    owner: "Louis Salvatore",
    gang: "salvatores",
    prestige: 72,
    security: 80,
    employees: 5,
    open: 11,
    close: 2,
  },
  {
    id: "longpour",
    name: "The Long Pour",
    kind: "bar",
    district: "virgin",
    owner: "a man who pays the Bishops",
    gang: "bishops",
    prestige: 30,
    security: 22,
    employees: 4,
    open: 11,
    close: 3,
  },
  {
    id: "rose",
    name: "Desert Rose",
    kind: "hotel",
    district: "motel",
    owner: "Rita Voss",
    prestige: 18,
    security: 12,
    employees: 4,
    rooms: 28,
    rate: 18,
    open: 0,
    close: 24,
  },
  {
    id: "suites",
    name: "Shark Club suites",
    kind: "hotel",
    district: "shark",
    owner: "John Bishop",
    gang: "bishops",
    prestige: 80,
    security: 70,
    employees: 8,
    rooms: 14,
    rate: 70,
    open: 0,
    close: 24,
  },
];

export const VENUE_BY_ID: Record<string, VenueDef> = Object.fromEntries(VENUES.map((v) => [v.id, v]));

export const FAMILY_PROFILE: Record<
  GangId,
  { goals: string; allies: string; businesses: string; assets: string; personnel: string }
> = {
  mordinos: {
    goals: "Move Jet. Keep the Desperado loud. Do not let the Wrights answer for Richard.",
    allies: "The Stables lab. No one they would call a friend.",
    businesses: "Desperado, Golden Globes",
    assets: "Jet kitchen, Myron, the night trade",
    personnel: "Vinnie Mora, Rae Mordino",
  },
  wrights: {
    goals: "Keep the stills. Make the Mordinos pay for Richard Wright.",
    allies: "The Jungle, when it suits them.",
    businesses: "Compound stills, shine sold into the Jungle",
    assets: "Orchards, shotguns, a dead son's name",
    personnel: "Clete Wright, Junebug Wright",
  },
  salvatores: {
    goals: "Stay quiet. Keep the laser and the crate nobody else can buy.",
    allies: "Men who arrive in machines the other families do not own.",
    businesses: "Salvatore's Bar",
    assets: "Energy weapons, Mason, the oxygen tank",
    personnel: "Donnie Glass, Pia Salvatore",
  },
  bishops: {
    goals: "Own the mayor, the Shark Club, and any letter that leaves town.",
    allies: "The mayor's office. NCR, when it pays.",
    businesses: "Shark Club, Bishop offices",
    assets: "The polite floor, political paper, Angela on the rail",
    personnel: "Harlan Crowe, Mickey Shaw",
  },
};

function emptyStory(): StoryState {
  return {
    richard: "open",
    jetRun: "cooking",
    bishopLetter: "desk",
    enclaveCrate: "rumor",
    mayorSqueeze: 0,
    involvement: 0,
    courierMissing: false,
    bloodDay: 0,
    bloodDistrict: "",
    heard: [],
  };
}

function emptyFamily(operation: string) {
  return { cash: 0, influence: 0, security: 0, operation };
}

export function emptyPulse(): NonNullable<RenoLife["pulse"]> {
  return {
    stamp: -1,
    demand: 48,
    streetCash: 0,
    visitorSpend: 0,
    lastColor: "",
    families: {
      mordinos: { ...emptyFamily("Myron is cooking. Nothing is on the street."), cash: 8200, influence: 55, security: 38 },
      wrights: { ...emptyFamily("Stills running. Collections before supper."), cash: 4100, influence: 42, security: 48 },
      salvatores: { ...emptyFamily("Quiet rooms. The laser stays a story."), cash: 9600, influence: 58, security: 84 },
      bishops: { ...emptyFamily("The envelope is still on the Shark Club desk."), cash: 14000, influence: 74, security: 66 },
    },
    venues: Object.fromEntries(
      VENUES.map((v) => [
        v.id,
        { cash: v.prestige * 40, customers: 0, revenueToday: 0, occupancy: v.kind === "hotel" ? 40 : 0, activity: "not open yet" },
      ]),
    ),
    story: emptyStory(),
  };
}

export function copyPulse(pulse?: RenoLife["pulse"]): NonNullable<RenoLife["pulse"]> {
  const base = emptyPulse();
  if (!pulse) return base;
  const families = { ...base.families };
  for (const g of GANGS) {
    families[g.id] = { ...base.families[g.id], ...pulse.families?.[g.id] };
  }
  const venues = { ...base.venues };
  for (const v of VENUES) {
    venues[v.id] = { ...base.venues[v.id], ...pulse.venues?.[v.id] };
  }
  return {
    stamp: pulse.stamp ?? -1,
    demand: pulse.demand ?? base.demand,
    streetCash: pulse.streetCash ?? 0,
    visitorSpend: pulse.visitorSpend ?? 0,
    lastColor: pulse.lastColor ?? "",
    families,
    venues,
    story: {
      ...base.story,
      ...pulse.story,
      heard: [...(pulse.story?.heard ?? [])],
    },
  };
}

export function ensurePulse(life: RenoLife): NonNullable<RenoLife["pulse"]> {
  life.pulse = copyPulse(life.pulse);
  return life.pulse;
}

function hourOf(hour: number): number {
  return ((hour % 24) + 24) % 24;
}

export function venueOpen(v: VenueDef, hour: number): boolean {
  const h = hourOf(hour);
  if (v.open === v.close || (v.open === 0 && v.close === 24)) return true;
  if (v.open < v.close) return h >= v.open && h < v.close;
  return h >= v.open || h < v.close;
}

function nightHour(hour: number): boolean {
  const h = hourOf(hour);
  return h >= 20 || h < 6;
}

function syncOps(pulse: NonNullable<RenoLife["pulse"]>) {
  const s = pulse.story;
  pulse.families.mordinos.operation =
    s.jetRun === "cooking"
      ? "Myron is cooking. Nothing is on the street."
      : s.jetRun === "loaded"
        ? "Jet is racked at the Stables."
        : s.jetRun === "moving"
          ? "A courier is walking the case to the Chop Shop."
          : s.jetRun === "short"
            ? "The shipment came up short. Someone is dead."
            : "Last night's Jet sold through the Desperado.";
  pulse.families.bishops.operation = s.courierMissing
    ? "A courier is missing. The envelope is not on the desk."
    : s.bishopLetter === "carried"
      ? "Mickey Shaw is carrying the mayor's letter."
      : s.bishopLetter === "delivered"
        ? "The letter landed. The mayor owes a smile."
        : "The envelope is still on the Shark Club desk.";
  pulse.families.salvatores.operation =
    s.enclaveCrate === "rail"
      ? "A humming crate is in the rail yard."
      : s.enclaveCrate === "bar"
        ? "The crate is inside the bar. Mason has the door."
        : s.enclaveCrate === "gone"
          ? "The crate is inventory. Do not ask."
          : "Quiet rooms. The laser stays a story.";
  pulse.families.wrights.operation =
    s.richard === "answered"
      ? "Richard's name has been answered."
      : s.richard === "named"
        ? "Richard's name is in the street's mouth."
        : s.bloodDistrict
          ? "A Wright cousin is asking who shorted the Jet."
          : "Stills running. Collections before supper.";
}

function hear(pulse: NonNullable<RenoLife["pulse"]>, line: string) {
  if (!line || pulse.story.heard[0] === line) return;
  pulse.story.heard = [line, ...pulse.story.heard].slice(0, 6);
}

function stepStory(life: RenoLife, hour: number): string | null {
  const pulse = life.pulse!;
  const s = pulse.story;
  const h = hourOf(hour);
  let line: string | null = null;

  if (h === 6) {
    if (s.jetRun === "sold" || s.jetRun === "short") s.jetRun = "cooking";
    if (s.bishopLetter === "delivered") s.bishopLetter = "desk";
    if (s.enclaveCrate === "gone") s.enclaveCrate = "rumor";
    if (s.courierMissing && (life.absent?.mickey ?? 0) <= life.day) {
      s.courierMissing = false;
      s.bishopLetter = "desk";
      line = "Mickey Shaw is back on the Shark Club door. He is not explaining the missing day.";
    }
  }
  if (h === 9 && s.jetRun === "cooking") {
    s.jetRun = "loaded";
    line = "Jet is racked at the Stables. It is not on the street yet.";
  }
  if (h === 16 && s.jetRun === "loaded") {
    s.jetRun = "moving";
    line = "Rae Mordino is walking a case toward the Chop Shop. The route is the story.";
  }
  if (h === 21 && s.jetRun === "moving") {
    const covered = life.gangId === "mordinos" && s.involvement >= 2;
    if (!covered && (life.tension ?? 0) >= 62) {
      s.jetRun = "short";
      s.bloodDay = life.day;
      s.bloodDistrict = "chop";
      life.tension = clamp((life.tension ?? 0) + 6, 0, 100);
      line = "The Jet case did not all arrive. Somebody is dead at the Chop Shop. Tomorrow belongs to that.";
    } else {
      s.jetRun = "sold";
      pulse.families.mordinos.cash += 400 + pulse.demand * 4;
      line = covered
        ? "The Jet sold through. Your name on the Mordino side is why the case arrived whole."
        : "The Jet sold through the Desperado. Mordino cash moved. You did not have to be the buyer.";
    }
  }
  if (h === 11 && s.bishopLetter === "desk" && !s.courierMissing) {
    s.bishopLetter = "carried";
    line = "Mickey Shaw has the Bishop envelope. He is leaving the Shark Club with it.";
  }
  if (h === 19 && s.bishopLetter === "carried") {
    const exposed = (life.heat ?? 0) >= 55 && s.involvement < 2 && life.gangId !== "bishops";
    if (exposed) {
      s.bishopLetter = "missing";
      s.courierMissing = true;
      life.absent = { ...(life.absent ?? {}), mickey: life.day + 2 };
      line = "Mickey Shaw did not make the Bishop offices. The envelope is in someone else's coat.";
    } else {
      s.bishopLetter = "delivered";
      s.mayorSqueeze += 1;
      pulse.families.bishops.influence = clamp(pulse.families.bishops.influence + 1, 0, 100);
      pulse.families.bishops.cash += 180;
      line = "The Bishop envelope landed. The mayor's office will feel it by morning.";
    }
  }
  if (h === 14 && life.day % 3 === 0 && s.enclaveCrate === "rumor") {
    s.enclaveCrate = "rail";
    line = "A crate that hums came off a boxcar. Salvatore's name is not on it. Everyone knows it anyway.";
  }
  if (h === 20 && s.enclaveCrate === "rail") {
    s.enclaveCrate = "bar";
    line = "The humming crate is inside Salvatore's. Mason is the door.";
  }
  if (h === 10 && s.enclaveCrate === "bar") {
    s.enclaveCrate = "gone";
    pulse.families.salvatores.cash += 260;
    line = "Salvatore's crate is not a rumor this morning. It is inventory.";
  }

  if (line) hear(pulse, line);
  return line;
}

function tickVenues(life: RenoLife, hour: number) {
  const pulse = life.pulse!;
  const h = hourOf(hour);
  const night = nightHour(h);
  const s = pulse.story;

  for (const v of VENUES) {
    const live = pulse.venues[v.id]!;
    if (h === 0) live.revenueToday = 0;
    if (!venueOpen(v, h)) {
      if (v.kind !== "hotel") {
        live.customers = 0;
        live.activity = "Closed. The lock is the security.";
      }
      continue;
    }
    if (v.kind === "casino") {
      const games = v.games ?? ["poker"];
      const game = games[h % games.length] ?? "poker";
      const outside =
        night || h >= 16
          ? v.district === "virgin" || v.district === "shark" || v.district === "desperado" || v.id === "catclaw" || v.id === "globes"
          : false;
      const crowd = Math.max(
        1,
        Math.round(v.employees * (night ? 1.7 : 0.55) * (outside ? 1.28 : 1) * (0.55 + v.prestige / 160)),
      );
      const wet = weatherCrowd(weatherAt(life.day, h));
      live.customers = Math.max(1, Math.round(crowd * wet));
      const stake = 5 + Math.round(v.prestige / 14) + (game.includes("high") ? 12 : 0);
      const take = crowd * stake;
      live.cash += take;
      live.revenueToday += take;
      if (v.gang) pulse.families[v.gang].cash += Math.round(take * 0.34);
      if (outside) pulse.visitorSpend += Math.round(take * 0.5);
      const loud = crowd > v.employees * 2 && v.security < 50;
      if (outside) {
        live.activity = loud
          ? `${game}. Outside money, loud about it. Security is watching the new faces.`
          : `${game}. Most of the chips came in on the road, not from this block.`;
      } else {
        live.activity = loud ? `${game}. A loud table. Security is watching.` : `${game} on the floor`;
      }
      if (v.id === "shark" && night) live.activity += " Suites upstairs are full of people who leave on the train.";
      if (v.id === "catclaw") live.activity = `${game}. The cheap weekend. Same hunger, smaller neon.`;
      const sky = weatherAt(life.day, h);
      if (sky === "storm" || sky === "rain") live.activity += sky === "storm" ? " Storm on the door." : " Rain on the awning.";
      else if (sky === "dust") live.activity += " Dust in the entry.";
    } else if (v.kind === "bar") {
      const touristBar = v.id === "longpour";
      let mix = "workers on the first stools";
      if (touristBar && h >= 17 && h < 21) mix = "new caps on the good stools, locals working the rest";
      else if (touristBar && night) mix = "NCR and Hub money, floor staff, and people who live on the cut";
      else if (touristBar && h >= 12) mix = "a thin crowd. One long-stay, two arrivals, an informant";
      else if (h >= 17 && h < 21) mix = "gamblers, family men, and a dealer who is not here to drink";
      else if (night) mix = "the regulars, and nobody photographing the neon";
      else if (h >= 12) mix = "a thin crowd. One informant if you know the stool";
      const crowd = Math.max(1, Math.round(v.employees * (night ? 2.3 : 0.7) * (touristBar && night ? 1.2 : 1)));
      const sky = weatherAt(life.day, h);
      const wet = weatherCrowd(sky);
      const heads = Math.max(1, Math.round(crowd * (sky === "storm" || sky === "rain" ? 1.12 : wet)));
      live.customers = heads;
      const take = heads * (3 + Math.round(v.prestige / 30));
      live.cash += take;
      live.revenueToday += take;
      if (v.gang) pulse.families[v.gang].cash += Math.round(take * 0.4);
      if (night && touristBar) pulse.visitorSpend += Math.round(take * 0.35);
      live.activity = mix;
      if (sky === "storm") live.activity += " Storm keeps the door swinging.";
      else if (sky === "rain") live.activity += " Rain. People stay on the stools.";
      else if (sky === "dust") live.activity += " Dust on the coats.";
      else if (sky === "wind") live.activity += " Wind in the entry.";
    } else {
      const occ = clamp(Math.round((night ? 86 : 48) + v.prestige / 8 - (h >= 8 && h < 11 ? 22 : 0)), 12, 97);
      const sky = weatherAt(life.day, h);
      const shelter = sky === "storm" ? 1.16 : sky === "rain" ? 1.08 : sky === "dust" ? 0.92 : 1;
      live.occupancy = clamp(Math.round(occ * shelter), 8, 99);
      live.customers = Math.round(((v.rooms ?? 10) * live.occupancy) / 100);
      const take = live.customers * (v.rate ?? 20);
      live.cash += Math.round(take / 8);
      live.revenueToday += Math.round(take / 8);
      if (v.gang) pulse.families[v.gang].cash += Math.round(take / 20);
      if (night) pulse.visitorSpend += Math.round(take / 12);
      if (h >= 8 && h < 11) live.activity = "Departures. The train takes the boots. The bill stays.";
      else if (h >= 15 && h < 19) live.activity = "Arrivals. Clean boots, short stays, asking for the loud street.";
      else if (night) live.activity = "Hourly keys. They are not from here. The night desk is.";
      else live.activity = "Housekeeping. The day wage does not cover what the night desk sees.";
      if (sky === "storm" || sky === "rain") live.activity += " Weather is filling the cheap rooms.";
      else if (sky === "dust") live.activity += " Dust on the lot. People wipe the windshield and stay.";
      if (v.id === "rose" && (s.jetRun === "moving" || s.courierMissing)) {
        live.activity += " One key belongs to someone who is not a tourist.";
      }
    }
  }

  if (h === 18) {
    for (const v of VENUES) {
      if (v.kind !== "casino") continue;
      const live = pulse.venues[v.id]!;
      const wages = v.employees * 3;
      live.cash = Math.max(0, live.cash - wages);
      const bar = VENUES.find((b) => b.kind === "bar" && (b.district === v.district || b.gang === v.gang));
      if (bar) pulse.venues[bar.id]!.cash += Math.round(wages * 0.5);
    }
  }

  if (h === 15) {
    for (const g of GANGS) {
      const book = pulse.families[g.id];
      const take = 70 + book.influence;
      book.cash += take;
    }
  }

  if (night) {
    const deals = Math.max(1, Math.round(pulse.demand / 12));
    pulse.families.mordinos.cash += deals * 9;
    pulse.streetCash += deals * 6;
    pulse.demand = clamp(pulse.demand + (h >= 21 ? 2 : 0), 18, 92);
  } else {
    pulse.demand = clamp(pulse.demand - 1, 18, 92);
  }

  if (h === 8) {
    const cut = Math.round(pulse.visitorSpend * 0.08);
    pulse.streetCash += cut;
  }
  if (h === 9) {
    pulse.visitorSpend = Math.round(pulse.visitorSpend * 0.25);
  }
}

/**
 * Far-from-player simulation. Once per game hour, not per frame.
 * Named people only change destination. Money, rooms, and story move here.
 */
export function advanceCityHour(life: RenoLife): string | null {
  const pulse = ensurePulse(life);
  const stamp = life.day * 24 + hourOf(life.hour);
  if (pulse.stamp === stamp) return null;
  pulse.stamp = stamp;
  tickVenues(life, life.hour);
  const storyLine = stepStory(life, life.hour);
  syncOps(pulse);
  const wx = weatherAt(life.day, life.hour);
  const prevHour = life.hour <= 0 ? 23 : life.hour - 1;
  const prevDay = life.hour <= 0 ? life.day - 1 : life.day;
  const weatherNote = wx !== weatherAt(prevDay, prevHour) ? weatherLine(wx) : null;
  if (weatherNote) hear(pulse, weatherNote);

  const here = VENUES.find((v) => v.district === life.district && venueOpen(v, life.hour));
  const local = here ? pulse.venues[here.id] : undefined;
  if (local && here && local.activity && local.activity !== "Closed. The lock is the security.") {
    const color = `${here.name}: ${local.activity}.`;
    if (color !== pulse.lastColor) {
      pulse.lastColor = color;
      hear(pulse, color);
      if (!storyLine && (local.customers ?? 0) >= 4) return color;
    }
  }
  return storyLine ?? weatherNote;
}

export function venueIn(district: DistrictId, kind?: VenueDef["kind"]): VenueDef | undefined {
  return VENUES.find((v) => v.district === district && (!kind || v.kind === kind));
}

/** House take or payout. Player bets are part of the same till as the tourists. */
export function bookWager(life: RenoLife, district: DistrictId, amount: number, playerWon: boolean) {
  const pulse = ensurePulse(life);
  const venue = venueIn(district, "casino") ?? venueIn(district);
  if (!venue) return;
  const live = pulse.venues[venue.id]!;
  if (playerWon) {
    live.cash = Math.max(0, live.cash - amount);
    live.activity = "a table just paid a stranger";
  } else {
    live.cash += amount;
    live.revenueToday += amount;
    if (venue.gang) pulse.families[venue.gang].cash += Math.round(amount * 0.4);
    live.activity = "the felt is eating";
  }
}

export function bookDrink(life: RenoLife, district: DistrictId, caps: number) {
  const pulse = ensurePulse(life);
  const venue = venueIn(district, "bar") ?? venueIn(district);
  if (!venue) return;
  const live = pulse.venues[venue.id]!;
  live.cash += caps;
  live.revenueToday += caps;
  if (venue.gang) pulse.families[venue.gang].cash += Math.round(caps * 0.5);
}

export function districtBlurb(life: RenoLife, district: DistrictId): string {
  const pulse = life.pulse ?? emptyPulse();
  const h = hourOf(life.hour);
  const venue = VENUES.find((v) => v.district === district);
  const live = venue ? pulse.venues[venue.id] : undefined;
  if (live && venue && venueOpen(venue, h)) {
    return `${venue.name} — ${live.activity}. ${live.customers} inside.`;
  }
  if (h >= 22 || h < 6) return "Most of the block is indoors. What is still out is working.";
  if (h < 12) return "Shifts starting. The casinos are not the city yet.";
  return "Errands, counters, and people who have somewhere to be by dark.";
}
