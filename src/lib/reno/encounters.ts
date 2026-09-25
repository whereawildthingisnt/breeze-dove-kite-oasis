import { SOULS } from "./ecosystem";
import type { BuildingUse, DistrictId, EncounterSetting, GangId, StoryState, ZoneKind } from "./types";
import { DISTRICT_BY_ID } from "./world";

export type EncounterActivity = "wander" | "travel" | "sleep" | "work";

export interface EncounterContext {
  district: DistrictId;
  zone: ZoneKind;
  hour: number;
  night: boolean;
  /** Null on the sidewalk. A use means you are through a door. */
  inside: BuildingUse | null;
  heat: number;
  regard: number;
  gangId: GangId | null;
  tension: number;
  warrant: number;
  activity: EncounterActivity;
  story: StoryState;
  absent: Record<string, number>;
  day: number;
}

export interface EncounterPick {
  id: string;
  reason: string;
  setting: EncounterSetting;
  foeKinds: string[];
  allyKinds: string[];
  cause: "feud" | "hunt" | "crime";
  /** Added to the chance only after every filter has passed. */
  pressure: number;
}

function hourIn(hour: number, from: number, to: number): boolean {
  if (from === to) return true;
  if (from < to) return hour >= from && hour < to;
  return hour >= from || hour < to;
}

function present(ctx: EncounterContext, id: string): boolean {
  return (ctx.absent[id] ?? 0) <= ctx.day;
}

function anySoul(ctx: EncounterContext, pred: (id: string, role: string, gang?: GangId) => boolean): boolean {
  return SOULS.some((s) => present(ctx, s.id) && pred(s.id, s.role, s.gang));
}

function indoors(...uses: BuildingUse[]): (ctx: EncounterContext) => boolean {
  return (ctx) => ctx.inside != null && uses.includes(ctx.inside);
}

function exterior(ctx: EncounterContext): boolean {
  return ctx.inside == null;
}

function notTheseInteriors(ctx: EncounterContext, banned: BuildingUse[]): boolean {
  return ctx.inside == null || !banned.includes(ctx.inside);
}

const QUIET_ROOMS: BuildingUse[] = ["tenement", "shack", "office", "crypt", "shop", "pawn"];

interface EncounterDef {
  id: string;
  /** Location, then time, activity, faction, story, and whether the actors are actually out. */
  location: (ctx: EncounterContext) => boolean;
  time: (ctx: EncounterContext) => boolean;
  activity: (ctx: EncounterContext) => boolean;
  faction: (ctx: EncounterContext) => boolean;
  story: (ctx: EncounterContext) => boolean;
  actors: (ctx: EncounterContext) => boolean;
  build: (ctx: EncounterContext) => EncounterPick;
}

const DEFS: EncounterDef[] = [
  {
    id: "jet-handoff",
    location: (ctx) =>
      (ctx.district === "chop" || ctx.district === "rail" || ctx.district === "mordino" || ctx.district === "stables") &&
      (exterior(ctx) || indoors("warehouse", "rail", "bar")(ctx)),
    time: (ctx) => hourIn(ctx.hour, 15, 22),
    activity: (ctx) => ctx.activity !== "sleep",
    faction: () => true,
    story: (ctx) => ctx.story.jetRun === "moving" || ctx.story.jetRun === "loaded",
    actors: (ctx) => anySoul(ctx, (_id, role, gang) => role === "courier" && gang === "mordinos"),
    build: (ctx) => ({
      id: "jet-handoff",
      reason:
        ctx.story.jetRun === "loaded"
          ? "The Jet is racked at the Stables. You walked into the room where it waits, not a dice roll."
          : "The Jet case is on this route. The courier was already walking it.",
      setting: ctx.district === "rail" || ctx.zone === "industrial" ? "rail" : "yard",
      foeKinds: ["mordino", "dealer"],
      allyKinds: ctx.gangId === "mordinos" ? ["mordino"] : [],
      cause: "crime",
      pressure: 22,
    }),
  },
  {
    id: "missing-courier",
    location: (ctx) =>
      (ctx.district === "bishop" || ctx.district === "shark" || ctx.district === "virgin" || ctx.district === "rail") &&
      exterior(ctx),
    time: () => true,
    activity: (ctx) => ctx.activity === "wander" || ctx.activity === "travel",
    faction: () => true,
    story: (ctx) => ctx.story.courierMissing,
    actors: (ctx) => !present(ctx, "mickey"),
    build: () => ({
      id: "missing-courier",
      reason: "Mickey Shaw is not on his route. Someone else is holding the Bishop envelope.",
      setting: "street",
      foeKinds: ["tough", "mordino"],
      allyKinds: [],
      cause: "crime",
      pressure: 18,
    }),
  },
  {
    id: "salvatore-crate",
    location: (ctx) => {
      if (ctx.story.enclaveCrate === "rail") {
        return (ctx.district === "rail" || ctx.zone === "industrial") && (exterior(ctx) || indoors("warehouse", "rail")(ctx));
      }
      if (ctx.story.enclaveCrate === "bar") return ctx.district === "salvatore" && (exterior(ctx) || indoors("bar")(ctx));
      return false;
    },
    time: () => true,
    activity: (ctx) => ctx.activity !== "sleep",
    faction: () => true,
    story: (ctx) => ctx.story.enclaveCrate === "rail" || ctx.story.enclaveCrate === "bar",
    actors: (ctx) => anySoul(ctx, (_id, role, gang) => gang === "salvatores" && (role === "collector" || role === "assassin")),
    build: (ctx) => ({
      id: "salvatore-crate",
      reason:
        ctx.story.enclaveCrate === "rail"
          ? "Salvatore's crate is in the yard. The hum is the story. You are standing next to it."
          : "The crate is inside Salvatore's. Mason's people do not like a second set of eyes.",
      setting: ctx.story.enclaveCrate === "rail" ? "rail" : "casino",
      foeKinds: ["salvatore", "merc"],
      allyKinds: ctx.gangId === "salvatores" ? ["salvatore"] : [],
      cause: "crime",
      pressure: 16,
    }),
  },
  {
    id: "collection",
    location: (ctx) =>
      exterior(ctx) &&
      (ctx.district === "virgin" ||
        ctx.district === "market" ||
        ctx.district === "desperado" ||
        ctx.district === "jungle" ||
        ctx.district === "shark" ||
        ctx.zone === "outskirts") &&
      ctx.zone !== "wild",
    time: (ctx) => hourIn(ctx.hour, 11, 19),
    activity: (ctx) => ctx.activity === "wander" || ctx.activity === "travel" || ctx.activity === "work",
    faction: (ctx) => ctx.tension >= 12 || ctx.district === "jungle" || ctx.zone === "outskirts",
    story: () => true,
    actors: (ctx) => anySoul(ctx, (_id, role) => role === "collector"),
    build: (ctx) => {
      const gang = DISTRICT_BY_ID[ctx.district].gang ?? (ctx.zone === "strip" || ctx.district === "shark" ? "bishops" : "mordinos");
      const kind = gang === "wrights" ? "wright" : gang === "salvatores" ? "salvatore" : gang === "bishops" ? "bishop" : "mordino";
      return {
        id: "collection",
        reason: "A collector is at a business that owes. You walked into the collection, not a random alley.",
        setting: "street",
        foeKinds: [kind, "tough"],
        allyKinds: ctx.gangId && ctx.gangId !== gang ? [] : [],
        cause: "crime",
        pressure: 8,
      };
    },
  },
  {
    id: "casino-argument",
    location: (ctx) => {
      if (!notTheseInteriors(ctx, QUIET_ROOMS)) return false;
      if (indoors("tenement", "shack", "warehouse", "crypt", "office")(ctx)) return false;
      if (ctx.inside === "casino" || ctx.inside === "bar") return true;
      if (ctx.inside != null) return false;
      return (
        ctx.zone === "strip" ||
        ctx.district === "shark" ||
        ctx.district === "desperado" ||
        ctx.district === "mordino" ||
        ctx.district === "virgin" ||
        (ctx.zone === "outskirts" && ctx.night)
      );
    },
    time: (ctx) => ctx.night || ctx.inside === "casino" || ctx.inside === "bar",
    activity: (ctx) => ctx.activity !== "sleep" || ctx.inside === "casino",
    faction: () => true,
    story: () => true,
    actors: () => true,
    build: (ctx) => ({
      id: "casino-argument",
      reason: "A mark on the felt says the shoe is short. Floor men are already standing. This is a casino floor, not a walk-up.",
      setting: ctx.inside === "bar" ? "casino" : "casino",
      foeKinds: ["cheat", "bouncer"],
      allyKinds: [],
      cause: "hunt",
      pressure: 6,
    }),
  },
  {
    id: "alley-dealer",
    location: (ctx) =>
      exterior(ctx) &&
      (ctx.zone === "alley" || ctx.zone === "outskirts" || ctx.zone === "industrial" || ctx.district === "market"),
    time: (ctx) => ctx.night || ctx.district === "market",
    activity: (ctx) => ctx.activity === "wander" || ctx.activity === "travel",
    faction: () => true,
    story: (ctx) => ctx.story.jetRun !== "cooking" || ctx.night,
    actors: (ctx) => anySoul(ctx, (_id, role) => role === "dealer"),
    build: () => ({
      id: "alley-dealer",
      reason: "A runner is waiting on a buyer. You walked into the handoff.",
      setting: "alley",
      foeKinds: ["dealer", "junkie"],
      allyKinds: [],
      cause: "crime",
      pressure: 10,
    }),
  },
  {
    id: "hotel-lot",
    location: (ctx) =>
      (ctx.zone === "motel" || ctx.district === "motel" || ctx.inside === "motel") &&
      ctx.inside !== "casino" &&
      ctx.inside !== "tenement",
    time: (ctx) => ctx.night || ctx.inside === "motel",
    activity: (ctx) => ctx.activity !== "sleep" || ctx.inside === "motel",
    faction: () => true,
    story: () => true,
    actors: (ctx) => anySoul(ctx, (id, role) => role === "guest" || role === "tourist" || role === "porter" || id === "nix" || role === "dealer"),
    build: (ctx) => ({
      id: "hotel-lot",
      reason: ctx.inside === "motel"
        ? "The hall argument is about a key that does not match the room. It started before you opened the door."
        : "A guest from the Desert Rose is loud at the stairs about the rate. The lot was already doing this.",
      setting: "motel",
      foeKinds: ctx.night ? ["john", "pimp"] : ["john"],
      allyKinds: [],
      cause: "hunt",
      pressure: ctx.inside === "motel" ? 8 : 4,
    }),
  },
  {
    id: "code-call",
    location: (ctx) => exterior(ctx) && ctx.zone !== "strip" && ctx.zone !== "wild",
    time: (ctx) => ctx.night || ctx.zone === "alley",
    activity: (ctx) => ctx.activity === "wander" || ctx.activity === "travel",
    faction: (ctx) => ctx.warrant >= 18 || ctx.heat >= 55,
    story: () => true,
    actors: (ctx) => anySoul(ctx, (_id, role) => role === "collector"),
    build: () => ({
      id: "code-call",
      reason: "There is no police in New Reno. A family still keeps a code. They found you off the strip, where a tourist will not write home.",
      setting: "alley",
      foeKinds: ["tough"],
      allyKinds: [],
      cause: "hunt",
      pressure: 10,
    }),
  },
  {
    id: "bar-drunk",
    location: (ctx) => {
      if (ctx.inside === "bar") return true;
      if (ctx.inside != null) return false;
      return ctx.night && (ctx.zone === "strip" || ctx.district === "salvatore" || ctx.district === "mordino" || ctx.district === "stables");
    },
    time: (ctx) => ctx.night || ctx.inside === "bar",
    activity: (ctx) => ctx.activity !== "sleep",
    faction: () => true,
    story: () => true,
    actors: () => true,
    build: () => ({
      id: "bar-drunk",
      reason: "The bar is doing what a New Reno bar does after dark. He was already drunk when you sat down.",
      setting: "casino",
      foeKinds: ["drunk"],
      allyKinds: [],
      cause: "hunt",
      pressure: 4,
    }),
  },
  {
    id: "doorway-night",
    location: (ctx) =>
      exterior(ctx) && (ctx.zone === "alley" || ctx.zone === "outskirts" || ctx.zone === "wild" || ctx.zone === "industrial"),
    time: (ctx) => ctx.night,
    activity: (ctx) => ctx.activity === "sleep",
    faction: () => true,
    story: () => true,
    actors: () => true,
    build: (ctx) => ({
      id: "doorway-night",
      reason:
        ctx.zone === "wild"
          ? "You slept where the ground is wrong. What walks Golgotha was already walking."
          : "A boot finds you because this block does not let strangers sleep on it.",
      setting: ctx.zone === "wild" ? "crypt" : ctx.zone === "industrial" ? "rail" : "alley",
      foeKinds: ctx.zone === "wild" ? ["ghoul"] : ["tough"],
      allyKinds: [],
      cause: "hunt",
      pressure: 12,
    }),
  },
];

/**
 * EVENT → location → time → activity → faction → story → actors.
 * No match means nothing happens. A clock is not a reason.
 */
export function selectEncounter(ctx: EncounterContext): EncounterPick | null {
  for (const def of DEFS) {
    if (!def.location(ctx)) continue;
    if (!def.time(ctx)) continue;
    if (!def.activity(ctx)) continue;
    if (!def.faction(ctx)) continue;
    if (!def.story(ctx)) continue;
    if (!def.actors(ctx)) continue;
    return def.build(ctx);
  }
  return null;
}
