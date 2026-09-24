import type { Character, DerivedSheet, PerkId, SkillId, SpecialBlock, SpecialKey } from "./types";

export interface PerkDef {
  id: PerkId;
  name: string;
  rank: number;
  blurb: string;
  requires: string;
  eligible: (character: Character, derived: DerivedSheet) => boolean;
}

function zeros(): SpecialBlock {
  return { STR: 0, PE: 0, EN: 0, CH: 0, IN: 0, AG: 0, LK: 0 };
}

function has(character: Character, id: PerkId): boolean {
  return (character.perks ?? []).includes(id);
}

export const PERKS: PerkDef[] = [
  {
    id: "awareness",
    name: "Awareness",
    rank: 3,
    blurb: "You read a body the way other people read a sign. DT, DR, and leftover AP are never a surprise.",
    requires: "Lv 3 · PE 5",
    eligible: (c, d) => d.special.PE >= 5 && c.level >= 3,
  },
  {
    id: "bonusHthDamage",
    name: "Bonus HtH Damage",
    rank: 3,
    blurb: "+2 melee damage. Fists and pipes notice.",
    requires: "Lv 3 · ST 6 · AG 6",
    eligible: (c, d) => d.special.STR >= 6 && d.special.AG >= 6 && c.level >= 3,
  },
  {
    id: "bonusMove",
    name: "Bonus Move",
    rank: 3,
    blurb: "+1 AP. The street is shorter when you want it to be.",
    requires: "Lv 3 · AG 5",
    eligible: (c, d) => d.special.AG >= 5 && c.level >= 3,
  },
  {
    id: "bonusRangedDamage",
    name: "Bonus Ranged Damage",
    rank: 3,
    blurb: "Guns hit a little meaner. +2 to firearm damage rolls.",
    requires: "Lv 3 · AG 6 · LK 6",
    eligible: (c, d) => d.special.AG >= 6 && d.special.LK >= 6 && c.level >= 3,
  },
  {
    id: "earlierSequence",
    name: "Earlier Sequence",
    rank: 3,
    blurb: "+2 Sequence. You see the draw before they finish it.",
    requires: "Lv 3 · PE 6",
    eligible: (c, d) => d.special.PE >= 6 && c.level >= 3,
  },
  {
    id: "fasterHealing",
    name: "Faster Healing",
    rank: 3,
    blurb: "+2 Healing Rate. Sleep and stimpaks go further.",
    requires: "Lv 3 · EN 6",
    eligible: (c, d) => d.special.EN >= 6 && c.level >= 3,
  },
  {
    id: "moreCriticals",
    name: "More Criticals",
    rank: 3,
    blurb: "+5% critical chance. Luck with a work ethic.",
    requires: "Lv 3 · LK 6",
    eligible: (c, d) => d.special.LK >= 6 && c.level >= 3,
  },
  {
    id: "nightVision",
    name: "Night Vision",
    rank: 3,
    blurb: "Dark streets cost you less. Lighting penalties halved.",
    requires: "Lv 3 · PE 6",
    eligible: (c, d) => d.special.PE >= 6 && c.level >= 3,
  },
  {
    id: "presence",
    name: "Presence",
    rank: 3,
    blurb: "+10% Speech. Rooms go quiet when you want them to.",
    requires: "Lv 3 · CH 6",
    eligible: (c, d) => d.special.CH >= 6 && c.level >= 3,
  },
  {
    id: "smoothTalker",
    name: "Smooth Talker",
    rank: 3,
    blurb: "+10% Speech. You lie like you mean the weather.",
    requires: "Lv 3 · IN 4",
    eligible: (c, d) => d.special.IN >= 4 && c.level >= 3,
  },
  {
    id: "strongBack",
    name: "Strong Back",
    rank: 3,
    blurb: "+50 carry weight. The pack stops arguing.",
    requires: "Lv 3 · ST 6 · EN 6",
    eligible: (c, d) => d.special.STR >= 6 && d.special.EN >= 6 && c.level >= 3,
  },
  {
    id: "survivalist",
    name: "Survivalist",
    rank: 3,
    blurb: "+15% Outdoorsman. The wastes still try. They fail more often.",
    requires: "Lv 3 · EN 6 · IN 6 · Outdoorsman 40%",
    eligible: (c, d) => d.special.EN >= 6 && d.special.IN >= 6 && d.skills.outdoorsman.total >= 40 && c.level >= 3,
  },
  {
    id: "thief",
    name: "Thief",
    rank: 3,
    blurb: "+10% Sneak, Lockpick, and Steal.",
    requires: "Lv 3 · AG 8",
    eligible: (c, d) => d.special.AG >= 8 && c.level >= 3,
  },
  {
    id: "toughness",
    name: "Toughness",
    rank: 3,
    blurb: "+10% Damage Resistance. You bruise. You do not fold.",
    requires: "Lv 3 · EN 6",
    eligible: (c, d) => d.special.EN >= 6 && c.level >= 3,
  },
  {
    id: "educated",
    name: "Educated",
    rank: 3,
    blurb: "+2 skill points now and every level after.",
    requires: "Lv 3 · IN 6",
    eligible: (c, d) => d.special.IN >= 6 && c.level >= 3,
  },
  {
    id: "healer",
    name: "Healer",
    rank: 3,
    blurb: "Stimpaks and sleep knit more. First Aid goes further.",
    requires: "Lv 3 · PE 7 · AG 6 · IN 5 · First Aid 40%",
    eligible: (c, d) =>
      d.special.PE >= 7 && d.special.AG >= 6 && d.special.IN >= 5 && d.skills.firstAid.total >= 40 && c.level >= 3,
  },
  {
    id: "fortuneFinder",
    name: "Fortune Finder",
    rank: 3,
    blurb: "Caps find you. Jobs, loot, and marks pay extra.",
    requires: "Lv 3 · LK 8",
    eligible: (c, d) => d.special.LK >= 8 && c.level >= 3,
  },
  {
    id: "ghost",
    name: "Ghost",
    rank: 6,
    blurb: "+20% Sneak at night. Alleys forget you.",
    requires: "Lv 6 · Sneak 60%",
    eligible: (c, d) => d.skills.sneak.total >= 60 && c.level >= 6,
  },
  {
    id: "negotiator",
    name: "Negotiator",
    rank: 6,
    blurb: "+10% Speech and Barter.",
    requires: "Lv 6 · Speech 50% · Barter 50%",
    eligible: (c, d) => d.skills.speech.total >= 50 && d.skills.barter.total >= 50 && c.level >= 6,
  },
  {
    id: "scout",
    name: "Scout",
    rank: 3,
    blurb: "You clock trouble first. Sighting rolls go your way.",
    requires: "Lv 3 · PE 7",
    eligible: (c, d) => d.special.PE >= 7 && c.level >= 3,
  },
  {
    id: "actionBoy",
    name: "Action Boy",
    rank: 6,
    blurb: "+1 Action Point.",
    requires: "Lv 6 · AG 5",
    eligible: (c, d) => d.special.AG >= 5 && c.level >= 6,
  },
  {
    id: "betterCriticals",
    name: "Better Criticals",
    rank: 9,
    blurb: "+10% critical chance. When it hits, it hits.",
    requires: "Lv 9 · PE 6 · AG 4 · LK 6",
    eligible: (c, d) => d.special.PE >= 6 && d.special.AG >= 4 && d.special.LK >= 6 && c.level >= 9,
  },
  {
    id: "dodger",
    name: "Dodger",
    rank: 9,
    blurb: "+5 Armor Class. The round goes where you were.",
    requires: "Lv 9 · AG 6",
    eligible: (c, d) => d.special.AG >= 6 && c.level >= 9,
  },
  {
    id: "gainStrength",
    name: "Gain Strength",
    rank: 6,
    blurb: "+1 Strength.",
    requires: "Lv 6 · ST 1–9",
    eligible: (c, d) => d.special.STR >= 1 && d.special.STR <= 9 && c.level >= 6,
  },
  {
    id: "gainPerception",
    name: "Gain Perception",
    rank: 6,
    blurb: "+1 Perception.",
    requires: "Lv 6 · PE 1–9",
    eligible: (c, d) => d.special.PE >= 1 && d.special.PE <= 9 && c.level >= 6,
  },
  {
    id: "gainEndurance",
    name: "Gain Endurance",
    rank: 6,
    blurb: "+1 Endurance.",
    requires: "Lv 6 · EN 1–9",
    eligible: (c, d) => d.special.EN >= 1 && d.special.EN <= 9 && c.level >= 6,
  },
  {
    id: "gainCharisma",
    name: "Gain Charisma",
    rank: 6,
    blurb: "+1 Charisma.",
    requires: "Lv 6 · CH 1–9",
    eligible: (c, d) => d.special.CH >= 1 && d.special.CH <= 9 && c.level >= 6,
  },
  {
    id: "gainIntelligence",
    name: "Gain Intelligence",
    rank: 6,
    blurb: "+1 Intelligence. Skill points notice.",
    requires: "Lv 6 · IN 1–9",
    eligible: (c, d) => d.special.IN >= 1 && d.special.IN <= 9 && c.level >= 6,
  },
  {
    id: "gainAgility",
    name: "Gain Agility",
    rank: 6,
    blurb: "+1 Agility.",
    requires: "Lv 6 · AG 1–9",
    eligible: (c, d) => d.special.AG >= 1 && d.special.AG <= 9 && c.level >= 6,
  },
  {
    id: "gainLuck",
    name: "Gain Luck",
    rank: 6,
    blurb: "+1 Luck.",
    requires: "Lv 6 · LK 1–9",
    eligible: (c, d) => d.special.LK >= 1 && d.special.LK <= 9 && c.level >= 6,
  },
  {
    id: "lifegiver",
    name: "Lifegiver",
    rank: 12,
    blurb: "+4 Hit Points per level, including this one.",
    requires: "Lv 12 · EN 4",
    eligible: (c, d) => d.special.EN >= 4 && c.level >= 12,
  },
  {
    id: "masterTrader",
    name: "Master Trader",
    rank: 12,
    blurb: "Buy cheaper, sell higher. Reno notices a professional.",
    requires: "Lv 12 · CH 7 · Barter 60%",
    eligible: (c, d) => d.special.CH >= 7 && d.skills.barter.total >= 60 && c.level >= 12,
  },
  {
    id: "tag",
    name: "Tag!",
    rank: 12,
    blurb: "Tag one more skill. It levels like the first three.",
    requires: "Lv 12",
    eligible: (c) => c.level >= 12,
  },
  {
    id: "bonusRateOfFire",
    name: "Bonus Rate of Fire",
    rank: 15,
    blurb: "Single shots cost 1 less AP (minimum 1).",
    requires: "Lv 15 · PE 6 · IN 6 · AG 7",
    eligible: (c, d) => d.special.PE >= 6 && d.special.IN >= 6 && d.special.AG >= 7 && c.level >= 15,
  },
];

export const PERK_BY_ID: Record<PerkId, PerkDef> = Object.fromEntries(PERKS.map((p) => [p.id, p])) as Record<
  PerkId,
  PerkDef
>;

export function perkSpecialMods(character: Character): SpecialBlock {
  const z = zeros();
  const p = character.perks ?? [];
  const map: Partial<Record<PerkId, SpecialKey>> = {
    gainStrength: "STR",
    gainPerception: "PE",
    gainEndurance: "EN",
    gainCharisma: "CH",
    gainIntelligence: "IN",
    gainAgility: "AG",
    gainLuck: "LK",
  };
  for (const [id, key] of Object.entries(map) as Array<[PerkId, SpecialKey]>) {
    if (p.includes(id)) z[key] += 1;
  }
  return z;
}

export function perkSkillMods(character: Character): Partial<Record<SkillId, number>> {
  const p = character.perks ?? [];
  const m: Partial<Record<SkillId, number>> = {};
  const add = (id: SkillId, n: number) => {
    m[id] = (m[id] ?? 0) + n;
  };
  if (p.includes("presence")) add("speech", 10);
  if (p.includes("smoothTalker")) add("speech", 10);
  if (p.includes("survivalist")) add("outdoorsman", 15);
  if (p.includes("thief")) {
    add("sneak", 10);
    add("lockpick", 10);
    add("steal", 10);
  }
  if (p.includes("negotiator")) {
    add("speech", 10);
    add("barter", 10);
  }
  if (p.includes("healer")) add("firstAid", 10);
  return m;
}

export function perkDerived(character: Character): {
  ap: number;
  carry: number;
  sequence: number;
  heal: number;
  ac: number;
  dr: number;
  hp: number;
  skillPoints: number;
  crit: number;
} {
  const p = character.perks ?? [];
  const level = character.level || 1;
  return {
    ap: (p.includes("actionBoy") ? 1 : 0) + (p.includes("bonusMove") ? 1 : 0),
    carry: p.includes("strongBack") ? 50 : 0,
    sequence: p.includes("earlierSequence") ? 2 : 0,
    heal: p.includes("fasterHealing") ? 2 : 0,
    ac: p.includes("dodger") ? 5 : 0,
    dr: p.includes("toughness") ? 10 : 0,
    hp: p.includes("lifegiver") ? 4 * level : 0,
    skillPoints: p.includes("educated") ? 2 : 0,
    crit: (p.includes("moreCriticals") ? 5 : 0) + (p.includes("betterCriticals") ? 10 : 0),
  };
}

export function availablePerks(character: Character, derived: DerivedSheet): PerkDef[] {
  return PERKS.filter((perk) => !has(character, perk.id) && perk.eligible(character, derived));
}
