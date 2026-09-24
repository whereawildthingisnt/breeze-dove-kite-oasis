import { emptyPulse, FAMILY_PROFILE, venueIn } from "./city-sim";
import { SOUL_BY_ID, type SoulDef } from "./ecosystem";
import { doingForRole, schedulePoint, streetRole } from "./schedules";
import { STREET_NPCS, type StreetNpc } from "./street";
import type { RenoLife, StreetJob } from "./types";
import { DISTRICT_BY_ID, GANG_BY_ID } from "./world";

/** The only street-talk payload. Callers pass this into handleStreetInteraction. */
export interface StreetActor {
  id: string;
  name: string;
}

export interface StreetInteraction {
  lines: string[];
  moodDelta: number;
  last: string;
  offerJob: boolean;
  job?: Omit<StreetJob, "stage" | "giver" | "from">;
  giver?: string;
  flag?: "richard-named";
}

function storyOf(life: RenoLife) {
  return life.pulse?.story ?? emptyPulse().story;
}

function jobOf(npc: StreetNpc | undefined, life: RenoLife): StreetInteraction["job"] | undefined {
  if (life.job || !npc?.job) return undefined;
  return npc.job;
}

function familyJob(soul: SoulDef, life: RenoLife): StreetInteraction["job"] | undefined {
  if (life.job) return undefined;
  const story = storyOf(life);
  if (soul.id === "rae" && story.jetRun === "moving") {
    return {
      id: "jet-case",
      title: "Walk the case",
      to: "chop",
      pay: 160,
      item: "a Jet case",
      blurb: "Chop Shop bay. Spike does not ask names. Do not open it.",
    };
  }
  if (soul.id === "mickey" && story.bishopLetter === "carried") {
    return {
      id: "bishop-letter",
      title: "The mayor's envelope",
      to: "bishop",
      pay: 140,
      item: "a Bishop envelope",
      blurb: "Bishop offices. A secretary, not the street. Do not read it.",
    };
  }
  if (soul.gang === "wrights" && soul.role === "collector" && story.richard !== "answered") {
    return {
      id: "wright-name",
      title: "A name for Orville",
      to: "wright",
      pay: 90,
      item: "who shorted the Jet",
      blurb: "Come back to the compound with a name, not a corpse, unless the name is already a corpse.",
    };
  }
  return undefined;
}

/**
 * Canonical street interaction.
 * Every talk — click a person, the block button, a room — comes through here.
 * Do not add onStreetInteract / onStreetObserve / handleStreetInteraction aliases.
 */
export function handleStreetInteraction(actor: StreetActor, life: RenoLife): StreetInteraction {
  const soul = SOUL_BY_ID[actor.id];
  const door = STREET_NPCS.find((n) => n.id === actor.id);
  const lines: string[] = [];
  let flag: StreetInteraction["flag"];
  const story = storyOf(life);
  const night = life.hour >= 20 || life.hour < 6;

  let doing = "Standing here.";
  let where = "this block";
  if (soul) {
    const spot = schedulePoint(soul, life);
    doing = spot.doing;
    where = spot.where;
  } else if (door) {
    const phase = doingForRole(streetRole(door.role), life.hour);
    doing = phase.doing;
    where = door.beat;
  }

  lines.push(`${actor.name}: "${doing}"`);
  lines.push(`Toward ${where}.`);

  if (door) lines.push(night ? door.night : door.day);

  const grudge = life.grudges?.[actor.id] ?? 0;
  const mem = life.npcMemory?.[actor.id];
  if (grudge >= 18) lines.push(`${actor.name} remembers the slight. This is not a fresh introduction.`);
  else if (mem?.last) lines.push(`Last time, you ${mem.last}.`);
  else if ((mem?.mood ?? 0) > 0) lines.push("They know the face and do not mind it.");

  if (soul?.gang) {
    const book = life.pulse?.families?.[soul.gang];
    const profile = FAMILY_PROFILE[soul.gang];
    lines.push(
      `${GANG_BY_ID[soul.gang].name}. ${book?.operation ?? profile.goals}`,
    );
    if (soul.gang === "wrights" && story.richard === "open") {
      lines.push("Richard Wright died on Mordino Jet. The collections are how this family stays angry.");
      flag = "richard-named";
    }
  } else if (soul?.allegiance === "law") {
    if ((life.warrant ?? 0) >= 12 || life.heat >= 40) {
      lines.push("Your name is on the sheet. The patrol did not invent you.");
    } else {
      lines.push("They are working a route, not hunting you.");
    }
  } else if (soul?.role === "dealer") {
    const demand = life.pulse?.demand ?? 48;
    lines.push(demand >= 55 ? "Buyers are hungry tonight. Jet is the coin." : "The corner is thin. Buyers are late.");
  } else if (soul?.role === "tourist") {
    lines.push("They do not live here. The caps are from the NCR or the Hub. The train is the plan, until it isn't.");
  } else if (soul?.role === "expat") {
    lines.push("Long enough that the stool has their name. Still talks like the ticket home is this month.");
  } else if (soul?.role === "guide") {
    lines.push("Walks outsiders to a door that pays commission. The first price is not the price.");
  } else if (soul?.role === "host") {
    lines.push("On the floor because a day wage will not rent the week. The stool costs more if they sit.");
  } else if (soul?.role === "porter") {
    lines.push("Bike, keys, or the night desk. Moves people who do not know the streets, and charges them for not knowing.");
  } else if (soul?.role === "guest") {
    lines.push("Hotel guest. The casino is the other half of the room key.");
  }

  const heard = story.heard.find((h) => !h.startsWith(`${actor.name}:`));
  if (heard) lines.push(`They've heard: ${heard}`);

  const venue = venueIn(life.district);
  if (venue && life.pulse?.venues?.[venue.id]) {
    const live = life.pulse.venues[venue.id]!;
    if (live.customers > 0) lines.push(`${venue.name} right now: ${live.activity}.`);
  }

  if (life.district && story.bloodDistrict === life.district && story.bloodDay === life.day) {
    lines.push("Someone died on this block today. The families have not finished spending it.");
  }

  const offered = (soul ? familyJob(soul, life) : undefined) ?? jobOf(door, life);
  if (offered) lines.push("They have something that has to reach another district.");

  const gangHere = DISTRICT_BY_ID[life.district]?.gang;
  if (!soul?.gang && gangHere && (life.friction?.[gangHere] ?? 0) >= 28) {
    lines.push(`${GANG_BY_ID[gangHere].name} already have your temperature on this turf.`);
  }

  return {
    lines: lines.slice(0, 5),
    moodDelta: 1,
    last: "talked",
    offerJob: Boolean(offered),
    job: offered,
    giver: actor.name,
    flag,
  };
}
