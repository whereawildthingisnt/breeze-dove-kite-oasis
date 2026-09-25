import type { SoulDef } from "./ecosystem";
import type { DistrictId, RenoLife } from "./types";
import { DISTRICT_POS, GANG_BY_ID } from "./world";

/** Abstract daily loop. Not a per-frame brain. */
export type ScheduleRole =
  | "worker"
  | "staff"
  | "guest"
  | "dealer"
  | "courier"
  | "collector"
  | "police"
  | "assassin"
  | "resident"
  | "tourist"
  | "expat"
  | "guide"
  | "host"
  | "porter"
  | "dancer"
  | "walker"
  | "wild";

export type StopId = "home" | "work" | "lunch" | "social" | "stash" | "hq" | "drop" | "patrol" | "target";

export interface SchedulePhase {
  from: number;
  to: number;
  stop: StopId;
  doing: string;
  where: string;
}

export const SCHEDULES: Record<ScheduleRole, SchedulePhase[]> = {
  worker: [
    { from: 0, to: 7, stop: "home", doing: "Sleeping it off at home.", where: "home" },
    { from: 7, to: 8, stop: "work", doing: "Heading to work.", where: "the job" },
    { from: 8, to: 12, stop: "work", doing: "On the clock.", where: "the job" },
    { from: 12, to: 13, stop: "lunch", doing: "Out for lunch.", where: "a lunch counter" },
    { from: 13, to: 17, stop: "work", doing: "Back on the clock.", where: "the job" },
    { from: 17, to: 18, stop: "social", doing: "Heading to a bar.", where: "a bar" },
    { from: 18, to: 22, stop: "social", doing: "Drinking off the shift.", where: "a bar" },
    { from: 22, to: 24, stop: "home", doing: "Returning home.", where: "home" },
  ],
  staff: [
    { from: 0, to: 11, stop: "home", doing: "Home until the shift.", where: "home" },
    { from: 11, to: 12, stop: "work", doing: "Heading to work.", where: "the casino" },
    { from: 12, to: 17, stop: "work", doing: "On the casino floor.", where: "the casino" },
    { from: 17, to: 18, stop: "social", doing: "Off the floor. Heading for a drink that is not on the house.", where: "a bar" },
    { from: 18, to: 21, stop: "social", doing: "Spending the paycheck.", where: "a bar" },
    { from: 21, to: 24, stop: "home", doing: "Heading home.", where: "home" },
  ],
  guest: [
    { from: 0, to: 11, stop: "home", doing: "In the room.", where: "the hotel" },
    { from: 11, to: 13, stop: "social", doing: "Heading to the casino.", where: "the casino" },
    { from: 13, to: 17, stop: "work", doing: "On the casino floor.", where: "the tables" },
    { from: 17, to: 19, stop: "lunch", doing: "At the bar between sessions.", where: "the bar" },
    { from: 19, to: 23, stop: "work", doing: "Back at the tables.", where: "the tables" },
    { from: 23, to: 24, stop: "home", doing: "Heading back from the casino.", where: "the hotel" },
  ],
  dealer: [
    { from: 0, to: 10, stop: "stash", doing: "At the stash.", where: "the stash" },
    { from: 10, to: 14, stop: "drop", doing: "Walking to a meeting.", where: "a meeting point" },
    { from: 14, to: 18, stop: "social", doing: "Working a back room.", where: "a back room" },
    { from: 18, to: 22, stop: "target", doing: "Waiting for a buyer.", where: "the buyer" },
    { from: 22, to: 24, stop: "home", doing: "Heading somewhere safe.", where: "a safe room" },
  ],
  courier: [
    { from: 0, to: 6, stop: "home", doing: "Sleeping between drops.", where: "home" },
    { from: 6, to: 9, stop: "hq", doing: "At the family headquarters.", where: "family headquarters" },
    { from: 9, to: 12, stop: "drop", doing: "Carrying a package toward the family warehouse.", where: "the family warehouse" },
    { from: 12, to: 16, stop: "target", doing: "On a delivery.", where: "the drop" },
    { from: 16, to: 19, stop: "hq", doing: "Heading back.", where: "family headquarters" },
    { from: 19, to: 24, stop: "home", doing: "Off the route.", where: "home" },
  ],
  collector: [
    { from: 0, to: 8, stop: "home", doing: "At the family property.", where: "the family property" },
    { from: 8, to: 11, stop: "hq", doing: "At the family property.", where: "the family property" },
    { from: 11, to: 15, stop: "work", doing: "Collecting from a business.", where: "a business that owes" },
    { from: 15, to: 19, stop: "target", doing: "Looking for someone who owes the family money.", where: "a debtor" },
    { from: 19, to: 22, stop: "hq", doing: "Returning with the take.", where: "the family property" },
    { from: 22, to: 24, stop: "home", doing: "Done counting.", where: "the family property" },
  ],
  police: [
    { from: 0, to: 6, stop: "home", doing: "Off the clock. Mostly.", where: "a cot" },
    { from: 6, to: 10, stop: "patrol", doing: "Working the morning patrol.", where: "the morning patrol" },
    { from: 10, to: 14, stop: "work", doing: "Checking a call.", where: "a call" },
    { from: 14, to: 18, stop: "patrol", doing: "Back on the beat.", where: "the beat" },
    { from: 18, to: 23, stop: "patrol", doing: "Working the evening patrol.", where: "the evening patrol" },
    { from: 23, to: 24, stop: "home", doing: "Signing off.", where: "home" },
  ],
  assassin: [
    { from: 0, to: 15, stop: "home", doing: "Lying low.", where: "a safe location" },
    { from: 15, to: 18, stop: "target", doing: "Moving toward a name.", where: "the target's block" },
    { from: 18, to: 21, stop: "target", doing: "Watching the mark.", where: "the target" },
    { from: 21, to: 24, stop: "home", doing: "Leaving the block.", where: "a safe location" },
  ],
  resident: [
    { from: 0, to: 8, stop: "home", doing: "Home.", where: "home" },
    { from: 8, to: 12, stop: "work", doing: "Out at a shop.", where: "a shop" },
    { from: 12, to: 14, stop: "lunch", doing: "Running an errand.", where: "an errand" },
    { from: 14, to: 18, stop: "social", doing: "Out where people talk.", where: "a social spot" },
    { from: 18, to: 22, stop: "social", doing: "At a bar that knows their name.", where: "a bar" },
    { from: 22, to: 24, stop: "home", doing: "Returning home.", where: "home" },
  ],
  tourist: [
    { from: 0, to: 11, stop: "home", doing: "Sleeping off a town they do not live in.", where: "a rented room" },
    { from: 11, to: 13, stop: "social", doing: "Looking for the loudest door.", where: "the strip" },
    { from: 13, to: 17, stop: "work", doing: "Spending like the caps are not real.", where: "a casino" },
    { from: 17, to: 19, stop: "lunch", doing: "Buying a stool, and the company that sits with it.", where: "a bar" },
    { from: 19, to: 23, stop: "social", doing: "Back on the felt. The train can wait.", where: "a casino" },
    { from: 23, to: 24, stop: "home", doing: "Heading back to a room they will not keep.", where: "the hotel" },
  ],
  expat: [
    { from: 0, to: 12, stop: "social", doing: "On the same stool as yesterday.", where: "a bar that knows the name" },
    { from: 12, to: 17, stop: "social", doing: "Holding the bar down. The ticket home is a story.", where: "the bar" },
    { from: 17, to: 22, stop: "work", doing: "Where the new money is.", where: "a casino" },
    { from: 22, to: 24, stop: "home", doing: "The room he still calls temporary.", where: "a rented room" },
  ],
  guide: [
    { from: 0, to: 9, stop: "home", doing: "Off the curb.", where: "home" },
    { from: 9, to: 12, stop: "work", doing: "Meeting people who just got off the road.", where: "a hotel curb" },
    { from: 12, to: 18, stop: "social", doing: "Walking an outsider to a door that pays commission.", where: "the strip" },
    { from: 18, to: 23, stop: "lunch", doing: "Collecting the cut.", where: "a bar" },
    { from: 23, to: 24, stop: "home", doing: "Done selling the city for the night.", where: "home" },
  ],
  host: [
    { from: 0, to: 14, stop: "home", doing: "Off the floor. The walk-up is the real address.", where: "home" },
    { from: 14, to: 17, stop: "work", doing: "Getting the room ready for outside money.", where: "the floor" },
    { from: 17, to: 23, stop: "social", doing: "On the floor. The stool has a price.", where: "the floor" },
    { from: 23, to: 24, stop: "home", doing: "Counting what the house left.", where: "home" },
  ],
  porter: [
    { from: 0, to: 5, stop: "home", doing: "Asleep between fares.", where: "home" },
    { from: 5, to: 9, stop: "work", doing: "Keys and the morning train.", where: "the motel desk" },
    { from: 9, to: 15, stop: "social", doing: "Running people who do not know the streets.", where: "between the hotel and the strip" },
    { from: 15, to: 18, stop: "home", doing: "The day wage, already spent.", where: "home" },
    { from: 18, to: 23, stop: "work", doing: "Night desk. Hourly keys for people passing through.", where: "the motel" },
    { from: 23, to: 24, stop: "home", doing: "Bike parked. Done.", where: "home" },
  ],
  dancer: [
    { from: 4, to: 8, stop: "home", doing: "Asleep above the club.", where: "a room upstairs" },
    { from: 8, to: 16, stop: "work", doing: "On the floor. She walks over if you stay.", where: "the club floor" },
    { from: 16, to: 24, stop: "work", doing: "Off the stage. Walking over if you have caps.", where: "the club floor" },
    { from: 0, to: 4, stop: "work", doing: "Last set. She comes off the stage if you stay.", where: "the club floor" },
  ],
  walker: [
    { from: 5, to: 16, stop: "home", doing: "Asleep. The rate is not a morning price.", where: "a rented room" },
    { from: 16, to: 18, stop: "work", doing: "Getting ready. The street is not open yet.", where: "a room" },
    { from: 18, to: 24, stop: "work", doing: "On the walk. Talk is free. The hour is not.", where: "the stroll" },
    { from: 0, to: 5, stop: "work", doing: "Still out. The last hour is quieter and the price is the same.", where: "the stroll" },
  ],
  wild: [
    { from: 6, to: 18, stop: "work", doing: "Out where the graves thin.", where: "the hill" },
    { from: 18, to: 6, stop: "home", doing: "Back in the ground that knows them.", where: "the crypt" },
  ],
};

function hourOf(hour: number): number {
  return ((hour % 24) + 24) % 24;
}

function covers(phase: SchedulePhase, hour: number): boolean {
  if (phase.from === phase.to) return true;
  if (phase.from < phase.to) return hour >= phase.from && hour < phase.to;
  return hour >= phase.from || hour < phase.to;
}

export function phaseAt(role: ScheduleRole, hour: number): SchedulePhase {
  const h = hourOf(hour);
  const list = SCHEDULES[role];
  return list.find((p) => covers(p, h)) ?? list[0]!;
}

export function doingForRole(role: ScheduleRole, hour: number): { doing: string; where: string } {
  const phase = phaseAt(role, hour);
  return { doing: phase.doing, where: phase.where };
}

function at(id: DistrictId, dx = 0, dz = 0) {
  const p = DISTRICT_POS[id];
  return { x: p.x + dx, z: p.z + dz };
}

function hqDistrict(soul: SoulDef): DistrictId | null {
  if (!soul.gang) return null;
  return GANG_BY_ID[soul.gang].turf;
}

function dropDistrict(soul: SoulDef, life: RenoLife): DistrictId {
  const jet = life.pulse?.story.jetRun;
  if (soul.gang === "mordinos" && (jet === "moving" || jet === "loaded")) return "chop";
  if (soul.gang === "mordinos") return "chop";
  if (soul.gang === "bishops") return life.pulse?.story.bishopLetter === "carried" ? "bishop" : "rail";
  if (soul.gang === "wrights") return "jungle";
  if (soul.gang === "salvatores") return life.pulse?.story.enclaveCrate === "rail" ? "rail" : "salvatore";
  return "market";
}

function socialDistrict(soul: SoulDef): DistrictId {
  if (soul.role === "guest" || soul.role === "tourist" || soul.role === "expat" || soul.role === "guide" || soul.role === "host" || soul.role === "porter") {
    if (soul.home.x > 70) return "desperado";
    if (soul.home.z > 40 && soul.role !== "guide" && soul.role !== "porter") return "virgin";
    if (soul.home.x < -20) return "salvatore";
    return "virgin";
  }
  if (soul.gang === "mordinos") return "desperado";
  if (soul.gang === "bishops") return "shark";
  if (soul.gang === "salvatores") return "salvatore";
  if (soul.gang === "wrights") return "jungle";
  if (soul.home.x < -20) return "salvatore";
  if (soul.home.x > 80) return "desperado";
  return "virgin";
}

function patrolPoint(soul: SoulDef, hour: number): { x: number; z: number } {
  const h = hourOf(hour);
  const swing = ((h % 6) + (h >= 18 ? 1 : 0)) / 6;
  const end = h >= 18 || h < 6 ? soul.post : { x: (soul.home.x + soul.post.x) / 2 + 8, z: (soul.home.z + soul.post.z) / 2 - 4 };
  return {
    x: soul.home.x + (end.x - soul.home.x) * swing,
    z: soul.home.z + (end.z - soul.home.z) * swing,
  };
}

function targetPoint(soul: SoulDef, life: RenoLife): { x: number; z: number } {
  if (soul.id === "mickey" && life.pulse?.story.bishopLetter === "carried") return at("bishop", 2, 1);
  if (soul.role === "assassin") {
    const watch = soul.watch ?? (soul.gang ? GANG_BY_ID[soul.gang].rival : undefined);
    if (soul.gang && watch) {
      const a = DISTRICT_POS[GANG_BY_ID[soul.gang].turf];
      const b = DISTRICT_POS[GANG_BY_ID[watch].turf];
      return { x: (a.x + b.x) / 2, z: (a.z + b.z) / 2 };
    }
    return at("chop", 2, -2);
  }
  if (soul.role === "dealer") {
    const night = hourOf(life.hour) >= 18 || hourOf(life.hour) < 6;
    return night ? at("desperado", -2, 2) : at("market", 1, -2);
  }
  if (soul.role === "courier") return at(dropDistrict(soul, life), 2, 1);
  if (soul.role === "collector") {
    return hourOf(life.hour) % 2 === 0 ? at("virgin", 4, 2) : at("market", -3, 1);
  }
  return soul.post;
}

function pointFor(soul: SoulDef, stop: StopId, life: RenoLife): { x: number; z: number } {
  if (stop === "home" || stop === "stash") {
    return stop === "stash" ? { x: soul.home.x - 3, z: soul.home.z + 2 } : soul.home;
  }
  if (stop === "work") return soul.post;
  if (stop === "lunch") return { x: soul.post.x + 6, z: soul.post.z - 4 };
  if (stop === "social") return at(socialDistrict(soul), 1, -1);
  if (stop === "hq") {
    const turf = hqDistrict(soul);
    return turf ? at(turf, -1, 1) : soul.home;
  }
  if (stop === "drop") return at(dropDistrict(soul, life), -2, 2);
  if (stop === "patrol") return patrolPoint(soul, life.hour);
  return targetPoint(soul, life);
}

export interface ScheduleSpot {
  x: number;
  z: number;
  doing: string;
  where: string;
  stop: StopId;
}

/** Where this named person is supposed to be. Cheap. Called for nearby detail and for the hourly abstract snap. */
export function schedulePoint(soul: SoulDef, life: RenoLife): ScheduleSpot {
  const phase = phaseAt(soul.role ?? "resident", life.hour);
  const point = pointFor(soul, phase.stop, life);
  return { x: point.x, z: point.z, doing: phase.doing, where: phase.where, stop: phase.stop };
}

export function activityLine(soul: SoulDef, life: RenoLife): string {
  const onFloor = life.hour >= 8 || life.hour < 4;
  if (soul.role === "dancer" && onFloor && soul.pitch) return soul.pitch;
  const stroll = life.hour >= 18 || life.hour < 5;
  if (soul.role === "walker" && stroll && soul.pitch) return soul.pitch;
  return schedulePoint(soul, life).doing;
}

export function streetRole(role: string): ScheduleRole {
  if (role === "cop") return "police";
  if (role === "courier") return "courier";
  if (role === "dealer" || role === "lot") return "dealer";
  if (role === "soldato") return "collector";
  if (role === "bartender" || role === "tout") return "staff";
  if (role === "mechanic" || role === "clerk") return "worker";
  return "resident";
}
