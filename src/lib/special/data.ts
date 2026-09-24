import type {
  BackgroundId,
  Character,
  CustomBackground,
  D20TraitId,
  EngineId,
  GenderId,
  PnpTraitId,
  SkillId,
  SpecialBlock,
  SpecialKey,
  TraitId,
} from "./types";
import { SPECIAL_KEYS, emptyLoadout } from "./types";
import { applyKit, ensureLoadout } from "./loadout";
import { KITS } from "./catalog";

export const GENDER_META: Record<
  GenderId,
  { name: string; blurb: string; pronoun: string; object: string; poss: string }
> = {
  male: {
    name: "Male",
    blurb: "He/him on the dossier. Sex Appeal treats women as the other side of the room.",
    pronoun: "he",
    object: "him",
    poss: "his",
  },
  female: {
    name: "Female",
    blurb: "She/her on the dossier. Sex Appeal treats men as the other side of the room.",
    pronoun: "she",
    object: "her",
    poss: "her",
  },
  other: {
    name: "Other",
    blurb: "No assumed side. The room still picks one when Sex Appeal is on the sheet.",
    pronoun: "they",
    object: "them",
    poss: "their",
  },
};

export function genderOf(character: { gender?: GenderId | string | null }): GenderId {
  return character.gender === "male" || character.gender === "female" ? character.gender : "other";
}

export const SPECIAL_META: Record<
  SpecialKey,
  { name: string; letter: string; blurb: string }
> = {
  STR: {
    name: "Strength",
    letter: "S",
    blurb: "Force, lifting, melee power, recoil control",
  },
  PE: {
    name: "Perception",
    letter: "P",
    blurb: "Awareness, precision, sensory information",
  },
  EN: {
    name: "Endurance",
    letter: "E",
    blurb: "Stamina, durability, recovery, resistance",
  },
  CH: {
    name: "Charisma",
    letter: "C",
    blurb: "Social force, communication, leadership",
  },
  IN: {
    name: "Intelligence",
    letter: "I",
    blurb: "Reasoning, memory, technical ability, skill growth",
  },
  AG: {
    name: "Agility",
    letter: "A",
    blurb: "Coordination, speed, defense, action economy",
  },
  LK: {
    name: "Luck",
    letter: "L",
    blurb: "Chance, criticals, improbable outcomes",
  },
};

export const SKILL_META: Record<
  SkillId,
  { name: string; blurb: string; attrs: SpecialKey[] }
> = {
  smallGuns: {
    name: "Small Guns",
    blurb: "Pistols, SMGs, rifles, shotguns",
    attrs: ["AG"],
  },
  bigGuns: {
    name: "Big Guns",
    blurb: "Machine guns, launchers, support weapons",
    attrs: ["AG"],
  },
  energyWeapons: {
    name: "Energy Weapons",
    blurb: "Directed-energy and analogous systems",
    attrs: ["AG"],
  },
  unarmed: {
    name: "Unarmed",
    blurb: "Fists, kicks, powered hand weapons",
    attrs: ["AG", "STR"],
  },
  meleeWeapons: {
    name: "Melee Weapons",
    blurb: "Knives, clubs, swords, axes, polearms",
    attrs: ["AG", "STR"],
  },
  throwing: {
    name: "Throwing",
    blurb: "Thrown weapons and explosives",
    attrs: ["AG"],
  },
  firstAid: {
    name: "First Aid",
    blurb: "Basic treatment and stabilization",
    attrs: ["PE", "EN"],
  },
  doctor: {
    name: "Doctor",
    blurb: "Surgery, fractures, complex medicine",
    attrs: ["PE", "IN"],
  },
  sneak: {
    name: "Sneak",
    blurb: "Quiet movement and avoiding notice",
    attrs: ["AG"],
  },
  lockpick: {
    name: "Lockpick",
    blurb: "Mechanical locks and bypass work",
    attrs: ["PE", "AG"],
  },
  steal: {
    name: "Steal",
    blurb: "Pickpocketing, planting, theft",
    attrs: ["AG"],
  },
  traps: {
    name: "Traps",
    blurb: "Detect, set, disarm, and use traps",
    attrs: ["PE", "AG"],
  },
  science: {
    name: "Science",
    blurb: "Analysis, research, advanced systems",
    attrs: ["IN"],
  },
  repair: {
    name: "Repair",
    blurb: "Mechanical and technical maintenance",
    attrs: ["IN"],
  },
  pilot: {
    name: "Pilot",
    blurb: "Vehicles, aircraft, complex transport",
    attrs: ["AG", "PE"],
  },
  speech: {
    name: "Speech",
    blurb: "Persuasion, deception, intimidation",
    attrs: ["CH"],
  },
  barter: {
    name: "Barter",
    blurb: "Trade, appraisal, prices, exchange",
    attrs: ["CH"],
  },
  gambling: {
    name: "Gambling",
    blurb: "Games of chance, tells, risk",
    attrs: ["LK"],
  },
  outdoorsman: {
    name: "Outdoorsman",
    blurb: "Tracking, navigation, food, water, survival",
    attrs: ["EN", "IN"],
  },
};

export interface BackgroundDef {
  id: BackgroundId;
  name: string;
  pitch: string;
  special: Partial<SpecialBlock>;
  skills: Partial<Record<SkillId, number>>;
}

export const BACKGROUNDS: BackgroundDef[] = [
  {
    id: "laborer",
    name: "Laborer",
    pitch: "Hard work, heavier tools, and a body that already knows strain.",
    special: { STR: 3, EN: 1, PE: 1 },
    skills: { meleeWeapons: 2, repair: 2, outdoorsman: 1 },
  },
  {
    id: "academic",
    name: "Academic",
    pitch: "Books, labs, and a mind trained to take systems apart.",
    special: { IN: 4, PE: 1 },
    skills: { science: 2, doctor: 2, firstAid: 1 },
  },
  {
    id: "soldier",
    name: "Soldier",
    pitch: "Drills, formations, and weapons that already feel familiar.",
    special: { STR: 2, EN: 2, PE: 1 },
    skills: { smallGuns: 2, bigGuns: 2, outdoorsman: 1 },
  },
  {
    id: "criminal",
    name: "Criminal",
    pitch: "Quiet hands, locked doors, and a talent for not being seen.",
    special: { AG: 3, LK: 1, PE: 1 },
    skills: { sneak: 2, lockpick: 2, steal: 1 },
  },
  {
    id: "merchant",
    name: "Merchant",
    pitch: "Prices, people, and the luck of a closing handshake.",
    special: { CH: 2, LK: 2, PE: 1 },
    skills: { barter: 2, speech: 2, gambling: 1 },
  },
  {
    id: "rural",
    name: "Rural",
    pitch: "Weather, repair jobs, and a life lived away from the street.",
    special: { EN: 2, PE: 1, AG: 1, IN: 1 },
    skills: { outdoorsman: 2, repair: 2, meleeWeapons: 1 },
  },
  {
    id: "technician",
    name: "Technician",
    pitch: "Wiring, tolerances, and machines that answer when asked correctly.",
    special: { IN: 3, AG: 1, PE: 1 },
    skills: { repair: 2, science: 2, smallGuns: 1 },
  },
  {
    id: "performer",
    name: "Performer",
    pitch: "Attention as a tool — and a room that leans in when you speak.",
    special: { CH: 4, LK: 1 },
    skills: { speech: 2, gambling: 2, steal: 1 },
  },
  {
    id: "scout",
    name: "Scout",
    pitch: "Distance, quiet ground, and seeing the problem before it sees you.",
    special: { PE: 2, AG: 2, EN: 1 },
    skills: { sneak: 2, outdoorsman: 2, smallGuns: 1 },
  },
  {
    id: "veteran",
    name: "Veteran",
    pitch: "Old campaigns, heavier guns, and the habit of coming back.",
    special: { STR: 2, EN: 1, PE: 1, LK: 1 },
    skills: { smallGuns: 2, bigGuns: 2, repair: 1 },
  },
  {
    id: "custom",
    name: "Custom",
    pitch: "Write your own past. Still exactly +5 SPECIAL and +5 skill ranks.",
    special: {},
    skills: {},
  },
];

export interface TraitDef {
  name: string;
  summary: string;
  detail: string;
}

export const TRAITS: Record<D20TraitId, TraitDef> = {
  fastMetabolism: {
    name: "Fast Metabolism",
    summary: "+2 heal/day · poison & rad start at 0",
    detail:
      "Healing Rate +2. Poison Resistance and Radiation Resistance start at 0 before armor and other modifiers. Your body burns through everything — including the things that would have saved you.",
  },
  bruiser: {
    name: "Bruiser",
    summary: "+2 STR, −2 AP",
    detail:
      "A little slower, a little bigger. +2 Strength, −2 Action Points. Recoil, carry, melee, and HP all drink the extra Strength.",
  },
  smallFrame: {
    name: "Small Frame",
    summary: "+1 AG · carry becomes 15 × STR",
    detail:
      "+1 Agility. Carry Weight becomes 15 lbs × Strength instead of 25 + 25 × STR. Fast. Fragile backpack.",
  },
  oneHander: {
    name: "One Hander",
    summary: "+4 one-hand to-hit, −8 two-hand",
    detail:
      "+4 to hit with one-handed weapons, −8 with two-handed weapons. Pistols, SMGs, one-hand melee love you. Rifles and big iron do not.",
  },
  finesse: {
    name: "Finesse",
    summary: "Wider crits, −4 melee",
    detail:
      "Increase Critical Range by 1 number. Reduce melee and unarmed damage by 4. Final melee or unarmed damage cannot be reduced below 1 by Finesse alone.",
  },
  kamikaze: {
    name: "Kamikaze",
    summary: "No Agility AC · +5 Sequence",
    detail:
      "Armor Class is only what you wear — Agility does not add. Sequence gets +5. You go first. You also get hit.",
  },
  heavyHanded: {
    name: "Heavy Handed",
    summary: "+4 melee · crit range −1",
    detail:
      "+4 Melee Damage. Critical Range shrinks by 1 number (you hit like a truck, you do not hit like a scalpel). On the d100 sheet this also makes crits 30% less nasty.",
  },
  fastShot: {
    name: "Fast Shot",
    summary: "Ranged attacks −1 AP · no targeted shots",
    detail:
      "All ranged weapons cost 1 less AP to fire. You cannot make targeted shots. No effect on unarmed or melee.",
  },
  bloodyMess: {
    name: "Bloody Mess",
    summary: "People die the worst way possible",
    detail:
      "When things die around you, they die dramatically. No numeric bonus. The table will remember you anyway.",
  },
  jinxed: {
    name: "Jinxed",
    summary: "Everyone crit-fails 18–20",
    detail:
      "The character’s Critical Failure Range is 18–20. While the Jinxed character is in a fight, every combatant uses 18–20.",
  },
  goodNatured: {
    name: "Good Natured",
    summary: "+4 talk/heal skills, −2 combat skills",
    detail:
      "+4 First Aid, Doctor, Speech, and Barter. −2 Small Guns, Big Guns, Energy Weapons, Unarmed, and Melee Weapons. One-time, at creation. (d100: +20% / −10%.)",
  },
  chemReliant: {
    name: "Chem Reliant",
    summary: "Double addiction, half recovery time",
    detail:
      "Addiction chance is twice normal. You recover from chem effects in half the time. The high is a tool. So is the crash.",
  },
  chemResistant: {
    name: "Chem Resistant",
    summary: "Half duration, half addiction",
    detail:
      "Chems last half as long. Addiction chance is 50% of normal. Stimpaks still work. Jet is a rumor.",
  },
  nightPerson: {
    name: "Night Person",
    summary: "+1 IN/PE at night, −1 by day",
    detail:
      "+1 Intelligence and Perception from 18:01–06:00, −1 from 06:01–18:00. Mark it on the sheet. Flip it when the sun does.",
  },
  skilled: {
    name: "Skilled",
    summary: "+2 every skill · +1 SP/level · perks every 4",
    detail:
      "Increase every Skill by 2 at character creation. Gain +1 additional Skill Point each level. Gain a Perk every 4 levels instead of every 3.",
  },
  gifted: {
    name: "Gifted",
    summary: "+1 every SPECIAL, −2 every skill",
    detail:
      "Increase every SPECIAL attribute by 1. Reduce every Skill by 2 at character creation. Gifted does not reduce Skill Points gained at later levels.",
  },
  sexAppeal: {
    name: "Sex Appeal",
    summary: "Opposite sex loves you, same sex doesn't",
    detail:
      "Opposite sex: treat Charisma as +1 for reactions, and +8 Speech and Barter (d100: +40%). Same sex: −1 CH reactions, −8 / −40%. The room picks a side.",
  },
  techWizard: {
    name: "Tech Wizard",
    summary: "+3 Science/Repair/Lockpick, −1 PE",
    detail:
      "+3 Science, Repair, and Lockpick (d100: +15%). −1 Perception. You see systems. You miss the guy in the doorway.",
  },
};

export const PNP_TRAITS: Record<PnpTraitId, TraitDef> = {
  fastMetabolism: {
    name: "Fast Metabolism",
    summary: "+2 heal, poison/rad start at 0%",
    detail:
      "Healing Rate +2. Poison Resistance and Radiation Resistance start at 0% before racial modifiers.",
  },
  bruiser: {
    name: "Bruiser",
    summary: "+2 STR, −2 AP",
    detail: "A little slower, a little bigger. +2 Strength, −2 Action Points.",
  },
  smallFrame: {
    name: "Small Frame",
    summary: "+1 AG, carry 15 × STR",
    detail: "+1 Agility. Carry Weight becomes 15 lbs × Strength instead of 25 + 25 × STR.",
  },
  oneHander: {
    name: "One Hander",
    summary: "+20% one-hand, −40% two-hand",
    detail:
      "+20% to-hit with one-handed weapons, −40% with two-handed weapons.",
  },
  finesse: {
    name: "Finesse",
    summary: "+10% crit chance, −30% damage",
    detail:
      "All attacks lose 30% of their damage after DR, but Critical Chance gains +10%.",
  },
  kamikaze: {
    name: "Kamikaze",
    summary: "No natural AC, +5 Sequence",
    detail:
      "Armor Class is only what you wear — Agility does not add. Sequence gets +5.",
  },
  heavyHanded: {
    name: "Heavy Handed",
    summary: "+4 melee damage, weaker crits",
    detail:
      "+4 Melee Damage. Critical hits deal 30% less damage and are 30% less likely to cripple or KO.",
  },
  fastShot: {
    name: "Fast Shot",
    summary: "Weapons −1 AP, no targeted shots",
    detail:
      "All ranged weapons cost 1 less AP. You cannot make targeted shots. No effect on unarmed or melee.",
  },
  bloodyMess: {
    name: "Bloody Mess",
    summary: "People die dramatically",
    detail: "When things die around you, they die the worst way possible. No numeric bonus.",
  },
  jinxed: {
    name: "Jinxed",
    summary: "Everyone crit-fails more",
    detail:
      "Failures in combat are 50% more likely to become critical failures — for you and everyone else in the fight.",
  },
  goodNatured: {
    name: "Good Natured",
    summary: "+20% talk/heal, −10% combat",
    detail:
      "+20% First Aid, Doctor, Speech, Barter. −10% Small Guns, Big Guns, Energy Weapons, Unarmed, Melee Weapons. One-time.",
  },
  chemReliant: {
    name: "Chem Reliant",
    summary: "Double addiction, half recovery",
    detail: "Addiction chance is twice normal. You recover from chem effects in half the time.",
  },
  chemResistant: {
    name: "Chem Resistant",
    summary: "Half duration, half addiction",
    detail: "Chems last half as long. Addiction chance is 50% of normal.",
  },
  nightPerson: {
    name: "Night Person",
    summary: "IN/PE +1 at night, −1 by day",
    detail:
      "+1 Intelligence and Perception from 18:01–06:00, −1 from 06:01–18:00.",
  },
  skilled: {
    name: "Skilled",
    summary: "+10% skills, +5 SP/level, slower perks",
    detail:
      "+10% to all skills at creation. +5 skill points per level. Perks arrive one level later than normal.",
  },
  gifted: {
    name: "Gifted",
    summary: "+1 all SPECIAL, −10% skills, −5 SP/level",
    detail:
      "+1 to every Primary Statistic. −10% to all skills. −5 skill points per level.",
  },
  sexAppeal: {
    name: "Sex Appeal",
    summary: "Opposite sex loves you, same sex doesn't",
    detail:
      "Opposite sex: +1 CH for reactions, +40% Speech and Barter. Same sex: −1 CH, −40% Speech and Barter.",
  },
  techWizard: {
    name: "Tech Wizard",
    summary: "+15% tech skills, −1 PE",
    detail: "+15% Science, Repair, and Lockpick. −1 Perception.",
  },
};

export const FREE_POINT_BUDGET = 5;
export const BACKGROUND_SPECIAL_BUDGET = 5;
export const BACKGROUND_SKILL_BUDGET = 5;
export const TAG_SKILL_COUNT = 3;
export const TAG_BONUS_D20 = 4;
export const TAG_BONUS_PNP = 20;
export const TAG_BONUS = TAG_BONUS_D20;
export const PNP_TRAIT_MAX = 2;

export function emptySpecial(fill = 0): SpecialBlock {
  return {
    STR: fill,
    PE: fill,
    EN: fill,
    CH: fill,
    IN: fill,
    AG: fill,
    LK: fill,
  };
}

export function sumSpecial(block: SpecialBlock): number {
  return SPECIAL_KEYS.reduce((n, key) => n + (block[key] ?? 0), 0);
}

export function emptyCustomBackground(): CustomBackground {
  return {
    name: "Custom",
    special: emptySpecial(0),
    skills: {},
  };
}

export function newCharacter(partial?: Partial<Character>): Character {
  const now = Date.now();
  const engine: EngineId = partial?.engine ?? "d20";
  const built: Character = {
    id: crypto.randomUUID(),
    name: "",
    gender: "other",
    appearance: "",
    history: "",
    goals: "",
    notes: "",
    equipment: "",
    level: 1,
    armorAc: 0,
    karma: 0,
    rolled: emptySpecial(0),
    backgroundId: engine === "pnp" ? "none" : "laborer",
    customBackground: emptyCustomBackground(),
    free: emptySpecial(0),
    adjust: emptySpecial(0),
    traits: [],
    educationId: "none",
    lifeId: "none",
    scars: [],
    tagged: [],
    skillSpent: {},
    perks: [],
    skillBank: 0,
    perkBank: 0,
    loadout: emptyLoadout(),
    createdAt: now,
    updatedAt: now,
    ...partial,
    engine,
  };
  built.loadout = ensureLoadout(built.loadout);
  built.gender = genderOf(built);
  return built;
}

export function exampleGeneralist(): Character {
  return newCharacter({
    engine: "d20",
    name: "Rook Hale",
    gender: "male",
    appearance: "Broad shoulders, split knuckle, a coat that has been mended twice.",
    history: "Worked freight, then enlisted, then walked away with the same tools.",
    goals: "Stay useful. Keep the people nearby alive.",
    notes: "Appendix C.1 — Balanced Generalist, loaded as a worked example.",
    rolled: { STR: 6, PE: 7, EN: 5, CH: 6, IN: 8, AG: 7, LK: 6 },
    backgroundId: "laborer",
    free: { STR: 0, PE: 0, EN: 0, CH: 1, IN: 1, AG: 2, LK: 1 },
    tagged: ["smallGuns", "repair", "outdoorsman"],
    educationId: "wrench",
    lifeId: "dust",
    scars: ["burnedHands"],
    equipment: "Wastelander kit from the PnP list, converted for d20 armor AC.",
    loadout: applyKit(emptyLoadout(), KITS.find((k) => k.id === "wastelander")!, true),
  });
}

export function examplePnpDiplomat(): Character {
  return newCharacter({
    engine: "pnp",
    name: "Maverick",
    gender: "female",
    appearance: "A lawyer's smile in a world that ran out of courts.",
    history: "Talked past vault security, then talked past the wastes.",
    goals: "Walk into a room and walk out owning it.",
    notes: "PnP worked example — Jane's diplomat, rebuilt as a rolled array (no racial cap, no background).",
    backgroundId: "none",
    rolled: { STR: 4, PE: 6, EN: 4, CH: 7, IN: 7, AG: 5, LK: 7 },
    free: emptySpecial(0),
    traits: ["sexAppeal"],
    tagged: ["speech", "barter", "gambling"],
    educationId: "street",
    lifeId: "vaultborn",
    scars: ["shrapnelSmile"],
    equipment: "Talker kit. A clean jacket and a worse reputation.",
    loadout: applyKit(emptyLoadout(), KITS.find((k) => k.id === "talker")!, true),
  });
}

export function rollD10(): number {
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return (bytes[0]! % 10) + 1;
}

export function rollArray(): SpecialBlock {
  return {
    STR: rollD10(),
    PE: rollD10(),
    EN: rollD10(),
    CH: rollD10(),
    IN: rollD10(),
    AG: rollD10(),
    LK: rollD10(),
  };
}

export function traitName(id: string, engine: EngineId): string {
  if (engine === "pnp" && id in PNP_TRAITS) {
    return PNP_TRAITS[id as PnpTraitId].name;
  }
  if (id in TRAITS) return TRAITS[id as D20TraitId].name;
  if (id === "lifegiver") return "Lifegiver";
  return id;
}

export function traitDetail(id: string, engine: EngineId): TraitDef | undefined {
  if (engine === "pnp" && id in PNP_TRAITS) return PNP_TRAITS[id as PnpTraitId];
  if (id in TRAITS) return TRAITS[id as D20TraitId];
  return undefined;
}
