import {
  EDUCATION_IDS,
  LIFE_IDS,
  SCAR_IDS,
  SKILL_IDS,
  SPECIAL_KEYS,
  type Character,
  type EducationId,
  type EngineId,
  type LifeId,
  type ScarId,
  type SkillId,
  type SpecialBlock,
  type SpecialKey,
} from "./types";

export interface FormulaSpec {
  intercept: number;
  coeff: number;
  attrs: SpecialKey[];
}

export interface FormulaRewrite {
  skill: SkillId;
  d20: FormulaSpec;
  pnp: FormulaSpec;
  note: string;
}

export interface DerivedPatch {
  ap?: number;
  sequence?: number;
  hp?: number;
  hpPerLevel?: number;
  carry?: number;
  healingRate?: number;
  poison?: number;
  radiation?: number;
  melee?: number;
  ac?: number;
  skillPoints?: number;
  critShift?: number;
}

export interface PathDef<Id extends string> {
  id: Id;
  name: string;
  story: string;
  summary: string;
  hook: string;
  special: Partial<SpecialBlock>;
  formulas: FormulaRewrite[];
  derived?: DerivedPatch;
  /** d20 ranks. PnP applies ×5. */
  skillBonus?: Partial<Record<SkillId, number>>;
}

export const SCAR_MAX = 2;

export function describeSpecial(block: Partial<SpecialBlock>): string {
  const parts = SPECIAL_KEYS.filter((k) => (block[k] ?? 0) !== 0).map((k) => {
    const n = block[k] ?? 0;
    return `${n > 0 ? "+" : ""}${n} ${k}`;
  });
  return parts.join(", ") || "no SPECIAL shift";
}

export function describeDerived(d?: DerivedPatch): string[] {
  if (!d) return [];
  const out: string[] = [];
  const add = (label: string, n: number | undefined) => {
    if (!n) return;
    out.push(`${n > 0 ? "+" : ""}${n} ${label}`);
  };
  add("HP", d.hp);
  add("HP/level", d.hpPerLevel);
  add("AP", d.ap);
  add("AC", d.ac);
  add("Sequence", d.sequence);
  add("Carry", d.carry);
  add("Heal/day", d.healingRate);
  add("Poison", d.poison);
  add("Rad resist", d.radiation);
  add("Melee", d.melee);
  add("SP/level", d.skillPoints);
  if (d.critShift) {
    out.push(
      d.critShift > 0
        ? `Crit range +${d.critShift}`
        : `Crit range ${d.critShift}`,
    );
  }
  return out;
}

export function describeSkillBonus(bonus?: Partial<Record<SkillId, number>>): string[] {
  if (!bonus) return [];
  return SKILL_IDS.filter((id) => (bonus[id] ?? 0) !== 0).map((id) => {
    const n = bonus[id] ?? 0;
    return `${n > 0 ? "+" : ""}${n} ${id}`;
  });
}

export function pathNotes(p: PathDef<string>): string[] {
  return [
    ...p.formulas.map((entry) => entry.note),
    ...describeDerived(p.derived),
    ...describeSkillBonus(p.skillBonus),
  ];
}

function f(
  skill: SkillId,
  note: string,
  d20: FormulaSpec,
  pnp: FormulaSpec,
): FormulaRewrite {
  return { skill, note, d20, pnp };
}

function path<Id extends string>(
  id: Id,
  name: string,
  summary: string,
  story: string,
  hook: string,
  special: Partial<SpecialBlock>,
  formulas: FormulaRewrite[] = [],
  extra: { derived?: DerivedPatch; skillBonus?: Partial<Record<SkillId, number>> } = {},
): PathDef<Id> {
  return { id, name, summary, story, hook, special, formulas, ...extra };
}

export const EDUCATIONS: PathDef<EducationId>[] = [
  path("none", "No schooling", "Nobody sat you down",
    "Whatever you know, you stole from doing it. No classroom, no mentor, no one to blame for the gaps.",
    "Blank slate. Cute. Dangerous.",
    {}),

  path("street", "Street school", "+1 AG, +1 CH, +1 LK · steal/speech rewritten",
    "The lesson was prices, pockets, and who to smile at. You learned faster than kids with desks because the test was staying fed.",
    "Street school. Pockets first, books never.",
    { AG: 1, CH: 1, LK: 1 },
    [
      f("steal", "Steal scales harder off Agility.", { intercept: 0, coeff: 0.8, attrs: ["AG"] }, { intercept: 0, coeff: 4, attrs: ["AG"] }),
      f("speech", "Speech is Charisma plus Luck — a tell and a grin.", { intercept: 0, coeff: 0.6, attrs: ["CH", "LK"] }, { intercept: 0, coeff: 3, attrs: ["CH", "LK"] }),
      f("science", "Science was never on the syllabus.", { intercept: 0, coeff: 0.5, attrs: ["IN"] }, { intercept: 0, coeff: 2, attrs: ["IN"] }),
    ]),

  path("vault", "Vault classroom", "+2 IN, +1 CH · +1 SP/level · outdoorsman down",
    "Fluorescents, recitations, a test every Friday. The world outside was a filmstrip. You can quote a manual. You cannot smell rain coming.",
    "Vault classroom. Homework kid with a jumpsuit tan.",
    { IN: 2, CH: 1 },
    [
      f("science", "Science is a full Intelligence scale.", { intercept: 0, coeff: 1, attrs: ["IN"] }, { intercept: 0, coeff: 5, attrs: ["IN"] }),
      f("speech", "Speech picks up a classroom intercept.", { intercept: 2, coeff: 1, attrs: ["CH"] }, { intercept: 10, coeff: 5, attrs: ["CH"] }),
      f("outdoorsman", "Outdoorsman barely notices Endurance.", { intercept: 0, coeff: 0.2, attrs: ["EN", "IN"] }, { intercept: 0, coeff: 1, attrs: ["EN", "IN"] }),
    ],
    { derived: { skillPoints: 1 } }),

  path("scribe", "Scribe's desk", "+2 IN, +1 PE, −1 CH · science/repair/energy rewritten",
    "You copied old-world pages until the ink smelled like food. People became interruptions. Machines became the only honest conversation.",
    "Scribe's desk. Kiss the chalkboard, skip the party.",
    { IN: 2, PE: 1, CH: -1 },
    [
      f("science", "Science is 1.2× Intelligence.", { intercept: 0, coeff: 1.2, attrs: ["IN"] }, { intercept: 0, coeff: 6, attrs: ["IN"] }),
      f("repair", "Repair tracks Intelligence like a trade.", { intercept: 0, coeff: 0.8, attrs: ["IN"] }, { intercept: 0, coeff: 4, attrs: ["IN"] }),
      f("energyWeapons", "Energy Weapons mix Agility with Intelligence.", { intercept: 0, coeff: 0.35, attrs: ["AG", "IN"] }, { intercept: 0, coeff: 1, attrs: ["AG", "IN"] }),
    ]),

  path("tribal", "Tribal memory", "+2 EN, +1 PE, −1 IN · +1 heal/day · outdoorsman rewritten",
    "The elders did not write it down. They made you walk it, name the plants, and stitch a wound with a story attached so you would not forget.",
    "Tribal memory. The land is the textbook.",
    { EN: 2, PE: 1, IN: -1 },
    [
      f("outdoorsman", "Outdoorsman is Endurance plus Perception.", { intercept: 0, coeff: 0.6, attrs: ["EN", "PE"] }, { intercept: 0, coeff: 3, attrs: ["EN", "PE"] }),
      f("firstAid", "First Aid leans on the body you have, not a textbook.", { intercept: 0, coeff: 0.5, attrs: ["PE", "EN"] }, { intercept: 0, coeff: 3, attrs: ["PE", "EN"] }),
      f("science", "Science is rumor and salvage.", { intercept: 0, coeff: 0.4, attrs: ["IN"] }, { intercept: 0, coeff: 2, attrs: ["IN"] }),
    ],
    { derived: { healingRate: 1 } }),

  path("drill", "Firing line", "+1 PE, +1 AG, +1 EN · +1 HP/level · guns rewritten",
    "Someone counted cadence until the rifle was a limb. You learned range estimation before you learned a second language.",
    "Firing line. The rifle got a childhood. You got a flinch.",
    { PE: 1, AG: 1, EN: 1 },
    [
      f("smallGuns", "Small Guns is a full Agility scale.", { intercept: 1, coeff: 1, attrs: ["AG"] }, { intercept: 5, coeff: 5, attrs: ["AG"] }),
      f("bigGuns", "Big Guns finally notices Agility.", { intercept: 0, coeff: 0.6, attrs: ["AG"] }, { intercept: 0, coeff: 3, attrs: ["AG"] }),
      f("doctor", "Doctor was a pamphlet between drills.", { intercept: 0, coeff: 0.15, attrs: ["PE", "IN"] }, { intercept: 0, coeff: 1, attrs: ["PE", "IN"] }),
    ],
    { derived: { hpPerLevel: 1 } }),

  path("clinic", "Clinic floor", "+2 IN, +1 PE · +1 heal/day · medicine onto IN",
    "Blood, boiled cloth, and a teacher who slapped your wrist when the suture wandered. You learned people from the inside.",
    "Clinic floor. You stitch. I faint. Fair trade.",
    { IN: 2, PE: 1 },
    [
      f("firstAid", "First Aid is Perception plus Intelligence, not Endurance.", { intercept: 0, coeff: 0.5, attrs: ["PE", "IN"] }, { intercept: 0, coeff: 3, attrs: ["PE", "IN"] }),
      f("doctor", "Doctor is a real medical scale.", { intercept: 2, coeff: 0.4, attrs: ["PE", "IN"] }, { intercept: 10, coeff: 2, attrs: ["PE", "IN"] }),
      f("smallGuns", "Small Guns was never the point.", { intercept: 0, coeff: 0.6, attrs: ["AG"] }, { intercept: 0, coeff: 3, attrs: ["AG"] }),
    ],
    { derived: { healingRate: 1 } }),

  path("wrench", "Wrench and wire", "+2 IN, +1 AG · repair/traps/pilot rewritten",
    "If it had a panel, you opened it. Mentors were leftover manuals and one mean drunk who could hear a bad bearing from the next room.",
    "Wrench and wire. Grease under the nails, math in the head.",
    { IN: 2, AG: 1 },
    [
      f("repair", "Repair is a full Intelligence scale.", { intercept: 0, coeff: 1, attrs: ["IN"] }, { intercept: 0, coeff: 5, attrs: ["IN"] }),
      f("traps", "Traps are Perception plus Intelligence.", { intercept: 2, coeff: 0.3, attrs: ["PE", "IN"] }, { intercept: 10, coeff: 1, attrs: ["PE", "IN"] }),
      f("pilot", "Pilot mixes Agility with Intelligence.", { intercept: 0, coeff: 0.5, attrs: ["AG", "IN"] }, { intercept: 0, coeff: 2, attrs: ["AG", "IN"] }),
    ]),

  path("preacher", "Pulpit hours", "+2 CH, +1 IN · speech uses IN · sneak down",
    "You learned to hold a room with a voice and a book you only half believed. The trick was making them believe it first.",
    "Pulpit hours. Talk them into heaven, then pick a direction.",
    { CH: 2, IN: 1 },
    [
      f("speech", "Speech is Charisma plus Intelligence.", { intercept: 0, coeff: 0.6, attrs: ["CH", "IN"] }, { intercept: 0, coeff: 3, attrs: ["CH", "IN"] }),
      f("barter", "Barter is a congregation with prices.", { intercept: 0, coeff: 0.9, attrs: ["CH"] }, { intercept: 0, coeff: 5, attrs: ["CH"] }),
      f("sneak", "Sneak was never holy.", { intercept: 0, coeff: 0.4, attrs: ["AG"] }, { intercept: 0, coeff: 2, attrs: ["AG"] }),
    ],
    { skillBonus: { speech: 2 } }),

  path("chemCook", "Chem kitchen", "+2 IN, +1 LK, −1 EN · science rewritten · poison −2",
    "Recipes nobody should memorize. You learned yield, purity, and which fumes mean the night is over. Your liver filed a complaint.",
    "Chem kitchen. Smart, lucky, slightly dissolved.",
    { IN: 2, LK: 1, EN: -1 },
    [
      f("science", "Science is a full cook's Intelligence scale.", { intercept: 1, coeff: 1, attrs: ["IN"] }, { intercept: 5, coeff: 5, attrs: ["IN"] }),
      f("firstAid", "First Aid is what you did when a batch went wrong.", { intercept: 0, coeff: 0.5, attrs: ["PE", "IN"] }, { intercept: 0, coeff: 3, attrs: ["PE", "IN"] }),
    ],
    { derived: { poison: -2 }, skillBonus: { science: 2 } }),

  path("pitSchool", "Pit school", "+2 STR, +1 AG, −1 IN · +4 HP · unarmed rewritten",
    "The lesson was falling down correctly. Someone older hit you until you hit back with structure. Books were for people with teeth.",
    "Pit school. Homework was a black eye.",
    { STR: 2, AG: 1, IN: -1 },
    [
      f("unarmed", "Unarmed is a meaner Strength-Agility scale.", { intercept: 8, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 40, coeff: 2, attrs: ["AG", "STR"] }),
      f("meleeWeapons", "Melee is the other half of gym class.", { intercept: 6, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 30, coeff: 2, attrs: ["AG", "STR"] }),
      f("speech", "Speech is a grunt with syllables.", { intercept: 0, coeff: 0.6, attrs: ["CH"] }, { intercept: 0, coeff: 3, attrs: ["CH"] }),
    ],
    { derived: { hp: 4, melee: 1 } }),

  path("radioKid", "Radio shack", "+2 CH, +1 PE · +2 Sequence · speech/pilot rewritten",
    "Call signs, static, and a voice that had to sound bigger than the room. You learned to make strangers trust a stranger.",
    "Radio shack. That voice could sell water in the rain.",
    { CH: 2, PE: 1 },
    [
      f("speech", "Speech is a broadcast Charisma scale.", { intercept: 2, coeff: 1.1, attrs: ["CH"] }, { intercept: 10, coeff: 6, attrs: ["CH"] }),
      f("pilot", "Pilot is listening to the road.", { intercept: 0, coeff: 0.5, attrs: ["AG", "PE"] }, { intercept: 0, coeff: 3, attrs: ["AG", "PE"] }),
    ],
    { derived: { sequence: 2 } }),

  path("ranchHand", "Ranch hours", "+2 EN, +1 STR · +25 carry · outdoorsman/repair",
    "Before dawn, after dark, animals that did not care about your feelings. You learned fence wire, weather, and how much a body can lift before it files paperwork.",
    "Ranch hours. Carry the fence, then the day.",
    { EN: 2, STR: 1 },
    [
      f("outdoorsman", "Outdoorsman is Endurance plus Strength.", { intercept: 0, coeff: 0.5, attrs: ["EN", "STR"] }, { intercept: 0, coeff: 3, attrs: ["EN", "STR"] }),
      f("repair", "Repair is whatever broke before lunch.", { intercept: 0, coeff: 0.7, attrs: ["IN"] }, { intercept: 0, coeff: 4, attrs: ["IN"] }),
      f("science", "Science was a catalog that never came.", { intercept: 0, coeff: 0.5, attrs: ["IN"] }, { intercept: 0, coeff: 2, attrs: ["IN"] }),
    ],
    { derived: { carry: 25 } }),

  path("locksmith", "Lock and key", "+2 AG, +1 PE · lockpick/steal/traps rewritten",
    "Pins, rakes, the sound of a tumbler deciding to like you. You were taught that every locked thing is a conversation, not a wall.",
    "Lock and key. Doors are a hobby.",
    { AG: 2, PE: 1 },
    [
      f("lockpick", "Lockpick is Perception plus Agility, properly.", { intercept: 4, coeff: 0.4, attrs: ["PE", "AG"] }, { intercept: 20, coeff: 2, attrs: ["PE", "AG"] }),
      f("steal", "Steal is a harder Agility scale.", { intercept: 0, coeff: 0.8, attrs: ["AG"] }, { intercept: 0, coeff: 4, attrs: ["AG"] }),
      f("traps", "Traps are what locks become when they get ideas.", { intercept: 4, coeff: 0.3, attrs: ["PE", "AG"] }, { intercept: 20, coeff: 2, attrs: ["PE", "AG"] }),
    ]),

  path("powderBoy", "Powder monkey", "+2 AG, +1 EN, −1 CH · big guns/throwing · sneak down",
    "You carried the loud stuff before you were allowed to fire it. Respect for blast radius is a personality. Indoor voices never stuck.",
    "Powder monkey. Subtlety died in training.",
    { AG: 2, EN: 1, CH: -1 },
    [
      f("bigGuns", "Big Guns is a real Agility scale.", { intercept: 1, coeff: 0.8, attrs: ["AG"] }, { intercept: 5, coeff: 4, attrs: ["AG"] }),
      f("throwing", "Throwing is how you delivered the punchline.", { intercept: 1, coeff: 1, attrs: ["AG"] }, { intercept: 5, coeff: 5, attrs: ["AG"] }),
      f("sneak", "Sneak and explosives did not share a classroom.", { intercept: 0, coeff: 0.4, attrs: ["AG"] }, { intercept: 0, coeff: 2, attrs: ["AG"] }),
    ]),

  path("navigator", "Star and map", "+2 PE, +1 IN · +2 Sequence · outdoorsman/pilot",
    "Someone made you name stars, roads, and the difference between a shortcut and a grave. You still look at the horizon like it owes you an answer.",
    "Star and map. You see the exit before the room.",
    { PE: 2, IN: 1 },
    [
      f("outdoorsman", "Outdoorsman is Perception plus Intelligence.", { intercept: 0, coeff: 0.5, attrs: ["PE", "IN"] }, { intercept: 0, coeff: 3, attrs: ["PE", "IN"] }),
      f("pilot", "Pilot is a navigator's Agility-Perception scale.", { intercept: 0, coeff: 0.5, attrs: ["AG", "PE"] }, { intercept: 0, coeff: 3, attrs: ["AG", "PE"] }),
    ],
    { derived: { sequence: 2 } }),

  path("junkyard", "Junkyard lecture", "+2 IN, +1 STR · +15 carry · repair/science",
    "The teacher was a pile. You learned what still had a serial number and what was a coffin with extra steps. Lifting and thinking were the same class.",
    "Junkyard lecture. Theory with tetanus.",
    { IN: 2, STR: 1 },
    [
      f("repair", "Repair is Intelligence plus a little Strength.", { intercept: 0, coeff: 0.7, attrs: ["IN"] }, { intercept: 0, coeff: 4, attrs: ["IN"] }),
      f("science", "Science is identifying the pile.", { intercept: 0, coeff: 0.9, attrs: ["IN"] }, { intercept: 0, coeff: 5, attrs: ["IN"] }),
    ],
    { derived: { carry: 15 } }),

  path("officerYard", "Officer yard", "+2 CH, +1 PE · +1 SP/level · speech/guns · sneak down",
    "Formation, voice, the habit of pointing and being obeyed. You were taught that a plan is a kind of weapon. Quiet was for other people.",
    "Officer yard. Volume is a tactic.",
    { CH: 2, PE: 1 },
    [
      f("speech", "Speech is command Charisma.", { intercept: 2, coeff: 1.1, attrs: ["CH"] }, { intercept: 10, coeff: 6, attrs: ["CH"] }),
      f("smallGuns", "Small Guns is an officer's sidearm scale.", { intercept: 1, coeff: 0.9, attrs: ["AG"] }, { intercept: 5, coeff: 4, attrs: ["AG"] }),
      f("sneak", "Sneak was never on the parade ground.", { intercept: 0, coeff: 0.4, attrs: ["AG"] }, { intercept: 0, coeff: 2, attrs: ["AG"] }),
    ],
    { derived: { skillPoints: 1 } }),

  path("circus", "Circus tuition", "+2 AG, +1 LK · +1 AC · throwing/sneak/steal",
    "Tents, nets that sometimes worked, a crowd that wanted blood or wonder. You learned to make a body do a joke and a theft in the same motion.",
    "Circus tuition. Gravity was the teacher.",
    { AG: 2, LK: 1 },
    [
      f("throwing", "Throwing is a full Agility scale.", { intercept: 1, coeff: 1, attrs: ["AG"] }, { intercept: 5, coeff: 5, attrs: ["AG"] }),
      f("sneak", "Sneak is how you left the tent.", { intercept: 1, coeff: 0.8, attrs: ["AG"] }, { intercept: 5, coeff: 4, attrs: ["AG"] }),
      f("steal", "Steal is part of the act.", { intercept: 0, coeff: 0.8, attrs: ["AG"] }, { intercept: 0, coeff: 4, attrs: ["AG"] }),
    ],
    { derived: { ac: 1 } }),

  path("graveShift", "Grave shift", "+2 EN, +1 PE, −1 CH · +3 HP · +1 heal · outdoorsman/doctor",
    "Night work, quiet work, the kind of labor that makes you stop flinching at dead things. You learned dirt, lime, and how a body comes apart.",
    "Grave shift. Excellent bedside manner for the already gone.",
    { EN: 2, PE: 1, CH: -1 },
    [
      f("outdoorsman", "Outdoorsman is night-and-dirt Endurance.", { intercept: 0, coeff: 0.5, attrs: ["EN", "PE"] }, { intercept: 0, coeff: 3, attrs: ["EN", "PE"] }),
      f("doctor", "Doctor is anatomy without the bedside smile.", { intercept: 2, coeff: 0.35, attrs: ["PE", "IN"] }, { intercept: 10, coeff: 2, attrs: ["PE", "IN"] }),
    ],
    { derived: { hp: 3, healingRate: 1 } }),

  path("bookkeeper", "Ledgers", "+2 IN, +1 LK · barter/science/gambling · melee down",
    "Columns, shortages, whose name was on which lie. You were taught that a number can kill slower than a knife and more reliably.",
    "Ledgers. Violence is a rounding error.",
    { IN: 2, LK: 1 },
    [
      f("barter", "Barter is Intelligence plus Charisma.", { intercept: 0, coeff: 0.5, attrs: ["IN", "CH"] }, { intercept: 0, coeff: 3, attrs: ["IN", "CH"] }),
      f("science", "Science is the honest column.", { intercept: 0, coeff: 0.9, attrs: ["IN"] }, { intercept: 0, coeff: 5, attrs: ["IN"] }),
      f("gambling", "Gambling is Luck with a spreadsheet.", { intercept: 0, coeff: 0.8, attrs: ["LK"] }, { intercept: 0, coeff: 4, attrs: ["LK"] }),
      f("meleeWeapons", "Melee was for people who could not add.", { intercept: 2, coeff: 0.3, attrs: ["AG", "STR"] }, { intercept: 10, coeff: 1, attrs: ["AG", "STR"] }),
    ]),

  path("foundry", "Foundry floor", "+2 STR, +1 EN · +5 HP · +25 carry · −1 AP · sneak down",
    "Heat, iron, a shift bell that owned your years. You learned to move heavy things and ignore the part of you that wanted to sit down.",
    "Foundry floor. Built like a load-bearing wall.",
    { STR: 2, EN: 1 },
    [
      f("meleeWeapons", "Melee is a foundry Strength-Agility scale.", { intercept: 6, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 30, coeff: 2, attrs: ["AG", "STR"] }),
      f("repair", "Repair is what you did when the line jammed.", { intercept: 0, coeff: 0.7, attrs: ["IN"] }, { intercept: 0, coeff: 4, attrs: ["IN"] }),
      f("sneak", "Sneak and a foundry boot did not date.", { intercept: 0, coeff: 0.4, attrs: ["AG"] }, { intercept: 0, coeff: 2, attrs: ["AG"] }),
    ],
    { derived: { hp: 5, carry: 25, ap: -1 } }),

  path("convent", "Ward and hymn", "+2 CH, +1 EN · +1 heal/day · first aid/speech · melee down",
    "Quiet rooms, boiled linen, a rulebook that tried to make you kind on a schedule. You learned to keep people alive and to sound like you meant the blessing.",
    "Ward and hymn. Soft hands, iron hours.",
    { CH: 2, EN: 1 },
    [
      f("firstAid", "First Aid is Perception plus Charisma.", { intercept: 0, coeff: 0.5, attrs: ["PE", "CH"] }, { intercept: 0, coeff: 3, attrs: ["PE", "CH"] }),
      f("speech", "Speech is a practiced kindness.", { intercept: 2, coeff: 1, attrs: ["CH"] }, { intercept: 10, coeff: 5, attrs: ["CH"] }),
      f("meleeWeapons", "Melee was discouraged. Officially.", { intercept: 2, coeff: 0.3, attrs: ["AG", "STR"] }, { intercept: 10, coeff: 1, attrs: ["AG", "STR"] }),
    ],
    { derived: { healingRate: 1 }, skillBonus: { doctor: 1 } }),

  path("gamblerHall", "Gambler's hall", "+2 LK, +1 CH · gambling/steal/speech · science down",
    "Tells, odds, the exact temperature of a room that wants your money. You were taught that luck is a skill until it isn't.",
    "Gambler's hall. The dice have a crush on you.",
    { LK: 2, CH: 1 },
    [
      f("gambling", "Gambling is a full Luck scale with extra.", { intercept: 2, coeff: 1.2, attrs: ["LK"] }, { intercept: 10, coeff: 6, attrs: ["LK"] }),
      f("steal", "Steal is the other way the pot moves.", { intercept: 0, coeff: 0.8, attrs: ["AG"] }, { intercept: 0, coeff: 4, attrs: ["AG"] }),
      f("speech", "Speech is the table's weather.", { intercept: 0, coeff: 1.1, attrs: ["CH"] }, { intercept: 0, coeff: 6, attrs: ["CH"] }),
      f("science", "Science was for people who wanted certainty.", { intercept: 0, coeff: 0.5, attrs: ["IN"] }, { intercept: 0, coeff: 2, attrs: ["IN"] }),
    ]),
];

export const LIVES: PathDef<LifeId>[] = [
  path("none", "Unwritten years", "No life that stuck",
    "You got here. The years between then and now did not pick a shape. That is its own kind of luck.",
    "Unwritten years. Mysterious. Suspicious. Hot.",
    {}),

  path("vaultborn", "Vault born", "+1 IN, +1 CH, +1 LK · speech up, outdoorsman down",
    "Recycled air, numbered jumpsuits, a door that was supposed to stay shut. Hunger was a story adults used on you. Then the story ended.",
    "Vault born. Soft childhood, hard sequel.",
    { IN: 1, CH: 1, LK: 1 },
    [
      f("speech", "Speech is a Vault-trained Charisma scale.", { intercept: 1, coeff: 1.1, attrs: ["CH"] }, { intercept: 5, coeff: 6, attrs: ["CH"] }),
      f("outdoorsman", "Outdoorsman still thinks the sky is a ceiling.", { intercept: 0, coeff: 0.2, attrs: ["EN", "IN"] }, { intercept: 0, coeff: 1, attrs: ["EN", "IN"] }),
    ]),

  path("dust", "Wasteland child", "+2 EN, +1 AG · +1 HP/level · outdoorsman/sneak",
    "Dirt under the nails before language. You learned water holes the way other kids learn birthdays, and quiet the way they learn prayers.",
    "Wasteland child. The dirt raised you right.",
    { EN: 2, AG: 1 },
    [
      f("outdoorsman", "Outdoorsman is Endurance plus Agility.", { intercept: 0, coeff: 0.6, attrs: ["EN", "AG"] }, { intercept: 0, coeff: 3, attrs: ["EN", "AG"] }),
      f("sneak", "Sneak is a harder Agility scale.", { intercept: 1, coeff: 0.8, attrs: ["AG"] }, { intercept: 5, coeff: 4, attrs: ["AG"] }),
    ],
    { derived: { hpPerLevel: 1 } }),

  path("caravan", "Caravan miles", "+1 EN, +1 CH, +1 LK · barter/pilot rewritten",
    "Dust, brahmin, and a ledger that mattered more than the gun. You slept with one eye on the pack animals and one on the people counting your caps.",
    "Caravan miles. The road is the resume.",
    { EN: 1, CH: 1, LK: 1 },
    [
      f("barter", "Barter is Charisma plus Luck.", { intercept: 0, coeff: 0.5, attrs: ["CH", "LK"] }, { intercept: 0, coeff: 3, attrs: ["CH", "LK"] }),
      f("pilot", "Pilot is a caravaner's Agility-Perception scale.", { intercept: 0, coeff: 0.5, attrs: ["AG", "PE"] }, { intercept: 0, coeff: 3, attrs: ["AG", "PE"] }),
      f("outdoorsman", "Outdoorsman keeps the road in Endurance and Charisma.", { intercept: 0, coeff: 0.5, attrs: ["EN", "CH"] }, { intercept: 0, coeff: 2, attrs: ["EN", "CH"] }),
    ]),

  path("raider", "Raider years", "+2 STR, +1 AG, −1 CH · +2 melee · unarmed/guns up",
    "You took because taking worked. The camp had a hierarchy written in scars. Leaving it did not unwrite your hands.",
    "Raider years. Charm optional. Hands not.",
    { STR: 2, AG: 1, CH: -1 },
    [
      f("unarmed", "Unarmed is a meaner Strength-Agility scale.", { intercept: 8, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 40, coeff: 2, attrs: ["AG", "STR"] }),
      f("smallGuns", "Small Guns is a raider Agility scale.", { intercept: 1, coeff: 0.9, attrs: ["AG"] }, { intercept: 5, coeff: 5, attrs: ["AG"] }),
      f("speech", "Speech is a threat, not a conversation.", { intercept: 0, coeff: 0.6, attrs: ["CH"] }, { intercept: 0, coeff: 3, attrs: ["CH"] }),
    ],
    { derived: { melee: 2 } }),

  path("collar", "Collar and brand", "+1 EN, +1 AG, +1 PE, −1 CH · sneak/steal/unarmed",
    "Someone owned your hours. You learned locks from the wrong side, quiet from the beating, and the exact weight of a collar. The brand stayed after the leather came off.",
    "Collar and brand. Freedom is a second language.",
    { EN: 1, AG: 1, PE: 1, CH: -1 },
    [
      f("sneak", "Sneak is how you lived.", { intercept: 1, coeff: 0.8, attrs: ["AG"] }, { intercept: 5, coeff: 4, attrs: ["AG"] }),
      f("steal", "Steal is a harder Agility scale.", { intercept: 0, coeff: 0.8, attrs: ["AG"] }, { intercept: 0, coeff: 4, attrs: ["AG"] }),
      f("unarmed", "Unarmed is what you had when they took the rest.", { intercept: 8, coeff: 0.45, attrs: ["AG", "STR"] }, { intercept: 35, coeff: 2, attrs: ["AG", "STR"] }),
      f("speech", "Speech still tastes like asking permission.", { intercept: 0, coeff: 0.6, attrs: ["CH"] }, { intercept: 0, coeff: 3, attrs: ["CH"] }),
    ]),

  path("hired", "Hired gun", "+1 AG, +1 PE, +1 LK · guns rewritten",
    "You were paid to stand in front of other people's problems and make them stop moving. Contracts ended. The way you look at a doorway did not.",
    "Hired gun. Professional. Expensive. Available.",
    { AG: 1, PE: 1, LK: 1 },
    [
      f("smallGuns", "Small Guns is a professional Agility scale.", { intercept: 1, coeff: 1, attrs: ["AG"] }, { intercept: 5, coeff: 5, attrs: ["AG"] }),
      f("energyWeapons", "Energy Weapons finally scales.", { intercept: 0, coeff: 0.6, attrs: ["AG"] }, { intercept: 0, coeff: 3, attrs: ["AG"] }),
      f("barter", "Barter is haggling a rate, not a friendship.", { intercept: 0, coeff: 0.6, attrs: ["CH"] }, { intercept: 0, coeff: 3, attrs: ["CH"] }),
    ]),

  path("bunker", "Bunker kin", "+1 IN, +1 EN, +1 PE · energy/repair rewritten",
    "Steel doors, shift bells, a chain of command that called itself family. You ate from tins and argued doctrine. The wasteland is loud in comparison.",
    "Bunker kin. Doctrine and canned peaches.",
    { IN: 1, EN: 1, PE: 1 },
    [
      f("energyWeapons", "Energy Weapons mix Agility with Intelligence.", { intercept: 0, coeff: 0.35, attrs: ["AG", "IN"] }, { intercept: 0, coeff: 1, attrs: ["AG", "IN"] }),
      f("repair", "Repair is bunker maintenance.", { intercept: 0, coeff: 0.8, attrs: ["IN"] }, { intercept: 0, coeff: 4, attrs: ["IN"] }),
      f("speech", "Speech is orders, not charm.", { intercept: 0, coeff: 0.7, attrs: ["CH"] }, { intercept: 0, coeff: 4, attrs: ["CH"] }),
    ]),

  path("ghoulAlley", "Ghoul alley", "+2 EN, −1 CH · +4 HP · +4 rad · speech down",
    "You lived among the ones who glowed and did not leave. Courtesy was different. Hunger was honest. Mirrors were optional.",
    "Ghoul alley. Friendly with the half-dead.",
    { EN: 2, CH: -1 },
    [
      f("outdoorsman", "Outdoorsman is Endurance in the glow.", { intercept: 0, coeff: 0.6, attrs: ["EN", "IN"] }, { intercept: 0, coeff: 3, attrs: ["EN", "IN"] }),
      f("speech", "Speech is an acquired taste. So are you.", { intercept: 0, coeff: 0.6, attrs: ["CH"] }, { intercept: 0, coeff: 3, attrs: ["CH"] }),
    ],
    { derived: { hp: 4, radiation: 4 } }),

  path("waterBearer", "Water bearer", "+2 EN, +1 CH · +40 carry · +1 heal · outdoorsman",
    "You hauled the thing everybody kills for. Miles with a yoke, a reputation, and a line of people who would smile until the cans ran dry.",
    "Water bearer. The most expensive backpack in the wastes.",
    { EN: 2, CH: 1 },
    [
      f("outdoorsman", "Outdoorsman is Endurance plus Charisma — routes and rationing.", { intercept: 0, coeff: 0.5, attrs: ["EN", "CH"] }, { intercept: 0, coeff: 3, attrs: ["EN", "CH"] }),
      f("barter", "Barter is selling thirst.", { intercept: 0, coeff: 0.9, attrs: ["CH"] }, { intercept: 0, coeff: 5, attrs: ["CH"] }),
    ],
    { derived: { carry: 40, healingRate: 1 } }),

  path("courier", "Courier miles", "+2 AG, +1 LK · +1 AP · +2 Sequence · sneak/pilot",
    "Packages, deadlines, and the understanding that the map is a rumor. You learned every shortcut that still had a floor.",
    "Courier miles. Doors open. You don't stay.",
    { AG: 2, LK: 1 },
    [
      f("sneak", "Sneak is how the package arrives.", { intercept: 1, coeff: 0.8, attrs: ["AG"] }, { intercept: 5, coeff: 4, attrs: ["AG"] }),
      f("pilot", "Pilot is a courier's living.", { intercept: 0, coeff: 0.5, attrs: ["AG", "PE"] }, { intercept: 0, coeff: 3, attrs: ["AG", "PE"] }),
    ],
    { derived: { ap: 1, sequence: 2 } }),

  path("pitChamp", "Pit champion", "+2 STR, +1 EN, −1 IN · +6 HP · +2 melee · unarmed",
    "They put a name on a board and people bet on whether you would stand up. You did. Enough times that the board kept the name.",
    "Pit champion. The crowd still lives in your shoulders.",
    { STR: 2, EN: 1, IN: -1 },
    [
      f("unarmed", "Unarmed is championship Strength-Agility.", { intercept: 10, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 50, coeff: 2, attrs: ["AG", "STR"] }),
      f("meleeWeapons", "Melee is whatever they handed you.", { intercept: 6, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 30, coeff: 2, attrs: ["AG", "STR"] }),
      f("speech", "Speech is a corner-man's grunt.", { intercept: 0, coeff: 0.6, attrs: ["CH"] }, { intercept: 0, coeff: 3, attrs: ["CH"] }),
    ],
    { derived: { hp: 6, melee: 2 } }),

  path("chemRunner", "Chem runner", "+2 AG, +1 LK, −1 EN · +1 AP · −1 heal · sneak/steal",
    "You moved product through towns that pretended not to see. Fast hands, faster exits, a body that still remembers the samples.",
    "Chem runner. Fast, lucky, slightly on fire.",
    { AG: 2, LK: 1, EN: -1 },
    [
      f("sneak", "Sneak is the job.", { intercept: 1, coeff: 0.85, attrs: ["AG"] }, { intercept: 5, coeff: 4, attrs: ["AG"] }),
      f("steal", "Steal is inventory shrinkage, professionally.", { intercept: 0, coeff: 0.85, attrs: ["AG"] }, { intercept: 0, coeff: 4, attrs: ["AG"] }),
    ],
    { derived: { ap: 1, healingRate: -1 } }),

  path("scrapCourt", "Scrap court", "+2 IN, +1 CH · +20 carry · barter/repair",
    "You sat on a pile and named prices until the pile became a town. People brought broken things and worse stories. You kept the better half.",
    "Scrap court. King of the heap, politely.",
    { IN: 2, CH: 1 },
    [
      f("barter", "Barter is Intelligence plus Charisma.", { intercept: 0, coeff: 0.5, attrs: ["IN", "CH"] }, { intercept: 0, coeff: 3, attrs: ["IN", "CH"] }),
      f("repair", "Repair is why they keep coming back.", { intercept: 0, coeff: 0.8, attrs: ["IN"] }, { intercept: 0, coeff: 4, attrs: ["IN"] }),
    ],
    { derived: { carry: 20 } }),

  path("farmHold", "Farm hold", "+2 EN, +1 STR · +5 HP · +50 carry · science down",
    "A fence, a crop, a shotgun that was mostly for coyotes and then wasn't. You learned seasons, soil, and how much a person can carry when the harvest will not wait.",
    "Farm hold. Strong back, suspicious of cities.",
    { EN: 2, STR: 1 },
    [
      f("outdoorsman", "Outdoorsman is Endurance plus Strength.", { intercept: 0, coeff: 0.55, attrs: ["EN", "STR"] }, { intercept: 0, coeff: 3, attrs: ["EN", "STR"] }),
      f("repair", "Repair is fence and pump.", { intercept: 0, coeff: 0.7, attrs: ["IN"] }, { intercept: 0, coeff: 3, attrs: ["IN"] }),
      f("science", "Science was a pamphlet about fertilizer.", { intercept: 0, coeff: 0.5, attrs: ["IN"] }, { intercept: 0, coeff: 2, attrs: ["IN"] }),
    ],
    { derived: { hp: 5, carry: 50 } }),

  path("cityRat", "City rat", "+2 AG, +1 CH · steal/sneak/speech · outdoorsman down",
    "Alleys, neon that still worked, a skyline of rust. You learned which doors had people behind them and which had only a smell.",
    "City rat. Concrete mother, alley father.",
    { AG: 2, CH: 1 },
    [
      f("steal", "Steal is city Agility.", { intercept: 0, coeff: 0.85, attrs: ["AG"] }, { intercept: 0, coeff: 4, attrs: ["AG"] }),
      f("sneak", "Sneak is traffic and shadows.", { intercept: 1, coeff: 0.8, attrs: ["AG"] }, { intercept: 5, coeff: 4, attrs: ["AG"] }),
      f("speech", "Speech is hustle Charisma.", { intercept: 1, coeff: 1.1, attrs: ["CH"] }, { intercept: 5, coeff: 6, attrs: ["CH"] }),
      f("outdoorsman", "Outdoorsman thinks dirt is a rumor.", { intercept: 0, coeff: 0.25, attrs: ["EN", "IN"] }, { intercept: 0, coeff: 1, attrs: ["EN", "IN"] }),
    ],
    { skillBonus: { lockpick: 1 } }),

  path("riverboat", "Riverboat years", "+2 LK, +1 AG · gambling/pilot/speech",
    "A deck, a deal, a town that changed every week. You learned cards, currents, and how to leave before the argument finished.",
    "Riverboat years. Lucky and hard to pin down.",
    { LK: 2, AG: 1 },
    [
      f("gambling", "Gambling is a riverboat Luck scale.", { intercept: 2, coeff: 1.1, attrs: ["LK"] }, { intercept: 10, coeff: 6, attrs: ["LK"] }),
      f("pilot", "Pilot is the current plus the tiller.", { intercept: 0, coeff: 0.5, attrs: ["AG", "PE"] }, { intercept: 0, coeff: 3, attrs: ["AG", "PE"] }),
      f("speech", "Speech is the table and the dock.", { intercept: 1, coeff: 1, attrs: ["CH"] }, { intercept: 5, coeff: 5, attrs: ["CH"] }),
    ]),

  path("loneCabin", "Lone cabin", "+2 PE, +1 EN · +2 Sequence · outdoorsman/traps · speech down",
    "Years with a stove, a snare line, and nobody to argue with. You learned to hear a branch as a sentence. Conversation atrophied.",
    "Lone cabin. Great listener. Terrible small talk.",
    { PE: 2, EN: 1 },
    [
      f("outdoorsman", "Outdoorsman is Perception plus Endurance.", { intercept: 0, coeff: 0.55, attrs: ["PE", "EN"] }, { intercept: 0, coeff: 3, attrs: ["PE", "EN"] }),
      f("traps", "Traps are how you ate.", { intercept: 4, coeff: 0.35, attrs: ["PE", "AG"] }, { intercept: 20, coeff: 2, attrs: ["PE", "AG"] }),
      f("speech", "Speech rusted shut.", { intercept: 0, coeff: 0.6, attrs: ["CH"] }, { intercept: 0, coeff: 3, attrs: ["CH"] }),
    ],
    { derived: { sequence: 2 } }),

  path("preacherCircuit", "Circuit rider", "+2 CH, +1 EN · speech/first aid/barter",
    "A route of towns, a sermon that changed with the audience, a bag of medicine you called a blessing when that helped. You slept in lofts and left before the questions got specific.",
    "Circuit rider. Faith as a travel plan.",
    { CH: 2, EN: 1 },
    [
      f("speech", "Speech is the whole job.", { intercept: 2, coeff: 1.15, attrs: ["CH"] }, { intercept: 10, coeff: 6, attrs: ["CH"] }),
      f("firstAid", "First Aid is the other sacrament.", { intercept: 0, coeff: 0.5, attrs: ["PE", "CH"] }, { intercept: 0, coeff: 3, attrs: ["PE", "CH"] }),
      f("barter", "Barter is passing the plate.", { intercept: 0, coeff: 0.9, attrs: ["CH"] }, { intercept: 0, coeff: 5, attrs: ["CH"] }),
    ]),

  path("overseerShift", "Overseer shift", "+2 IN, +1 CH, −1 AG · −1 AP · +1 SP/level · speech/science",
    "You ran a room, a shift, a vault-shaped argument. People waited for your nod. Your body got used to sitting while your mouth worked.",
    "Overseer shift. Brain first, knees later.",
    { IN: 2, CH: 1, AG: -1 },
    [
      f("speech", "Speech is policy with a pulse.", { intercept: 2, coeff: 1, attrs: ["CH"] }, { intercept: 10, coeff: 5, attrs: ["CH"] }),
      f("science", "Science is the report you actually read.", { intercept: 0, coeff: 1, attrs: ["IN"] }, { intercept: 0, coeff: 5, attrs: ["IN"] }),
    ],
    { derived: { ap: -1, skillPoints: 1 } }),

  path("glowWalker", "Glow walker", "+2 EN, +1 PE, −1 CH · +6 rad · +2 poison · −2 HP",
    "You walked the green on purpose — salvage, pilgrimage, or a dare that became a habit. The Geiger still likes you. Doors still hesitate.",
    "Glow walker. Hot in the wrong way. I still would.",
    { EN: 2, PE: 1, CH: -1 },
    [
      f("outdoorsman", "Outdoorsman is Endurance in the green.", { intercept: 0, coeff: 0.6, attrs: ["EN", "PE"] }, { intercept: 0, coeff: 3, attrs: ["EN", "PE"] }),
    ],
    { derived: { radiation: 6, poison: 2, hp: -2 } }),

  path("knightErrant", "Knight errant", "+2 STR, +1 CH · +1 AC · melee/speech · sneak down",
    "A code you mostly kept, a weapon you always kept, towns that wanted a story more than a person. You learned to arrive like an answer.",
    "Knight errant. Armor optional. Entrance required.",
    { STR: 2, CH: 1 },
    [
      f("meleeWeapons", "Melee is the vocation.", { intercept: 6, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 30, coeff: 2, attrs: ["AG", "STR"] }),
      f("speech", "Speech is the oath, out loud.", { intercept: 1, coeff: 1.1, attrs: ["CH"] }, { intercept: 5, coeff: 6, attrs: ["CH"] }),
      f("sneak", "Sneak would ruin the entrance.", { intercept: 0, coeff: 0.4, attrs: ["AG"] }, { intercept: 0, coeff: 2, attrs: ["AG"] }),
    ],
    { derived: { ac: 1 } }),

  path("wastelandDoc", "Wasteland doctor", "+2 IN, +1 PE · +1 heal/day · doctor/first aid · guns down",
    "You were the person a town kept alive because you kept the town alive. Tools in a rolled cloth. A reputation that walked ahead of you.",
    "Wasteland doctor. Don't tag Small Guns. Tag the suture.",
    { IN: 2, PE: 1 },
    [
      f("doctor", "Doctor is a practiced medical scale.", { intercept: 3, coeff: 0.45, attrs: ["PE", "IN"] }, { intercept: 15, coeff: 2, attrs: ["PE", "IN"] }),
      f("firstAid", "First Aid is Perception plus Intelligence.", { intercept: 1, coeff: 0.5, attrs: ["PE", "IN"] }, { intercept: 5, coeff: 3, attrs: ["PE", "IN"] }),
      f("smallGuns", "Small Guns was for the people you patched.", { intercept: 0, coeff: 0.6, attrs: ["AG"] }, { intercept: 0, coeff: 3, attrs: ["AG"] }),
    ],
    { derived: { healingRate: 1 } }),

  path("cageFighter", "Cage years", "+2 AG, +1 STR · +1 AC · +4 HP · unarmed · doctor down",
    "Wire, a referee who lied, a body that learned angles. You got paid if you stood up and famous if you didn't stay down.",
    "Cage years. Pretty bruises. Ugly math.",
    { AG: 2, STR: 1 },
    [
      f("unarmed", "Unarmed is cage Agility-Strength.", { intercept: 8, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 40, coeff: 2, attrs: ["AG", "STR"] }),
      f("doctor", "Doctor was a bucket in the corner.", { intercept: 0, coeff: 0.15, attrs: ["PE", "IN"] }, { intercept: 0, coeff: 1, attrs: ["PE", "IN"] }),
    ],
    { derived: { ac: 1, hp: 4 } }),
];

export const SCARS: PathDef<ScarId>[] = [
  path("glassEye", "Glass eye", "−2 PE, −2 Sequence, guns wobble · +2 Sneak, traps use IN",
    "The left one is glass, or a scar, or a rumor. Depth is a guess. You hear rooms better than you see them. You still raise the rifle. You just do it like a person who already paid.",
    "Glass eye. Aim's a rumor. Hearing is not.",
    { PE: -2 },
    [
      f("smallGuns", "Small Guns loses the clean Agility scale.", { intercept: 0, coeff: 0.6, attrs: ["AG"] }, { intercept: 0, coeff: 3, attrs: ["AG"] }),
      f("energyWeapons", "Energy Weapons is a weaker Agility scale.", { intercept: 0, coeff: 0.3, attrs: ["AG"] }, { intercept: 0, coeff: 1, attrs: ["AG"] }),
      f("throwing", "Throwing misses the range picture.", { intercept: 0, coeff: 0.6, attrs: ["AG"] }, { intercept: 0, coeff: 3, attrs: ["AG"] }),
      f("traps", "Traps become a thinking job — Perception plus Intelligence.", { intercept: 2, coeff: 0.35, attrs: ["PE", "IN"] }, { intercept: 10, coeff: 2, attrs: ["PE", "IN"] }),
    ],
    { derived: { sequence: -2 }, skillBonus: { sneak: 2 } }),

  path("limp", "Dead man's limp", "−2 AG, −1 AP, sneak hitch · +1 EN, +15 carry, outdoorsman +2",
    "A hip that never sat true. Rain writes it down. You walk like someone who already survived the sprint. People hear you coming. They also cannot knock you down as cheaply.",
    "Dead man's limp. Slow. Heavy. Still here.",
    { AG: -2, EN: 1 },
    [
      f("sneak", "Sneak is a broken Agility scale.", { intercept: 0, coeff: 0.4, attrs: ["AG"] }, { intercept: 0, coeff: 2, attrs: ["AG"] }),
      f("pilot", "Pilot fights the hitch in the hip.", { intercept: 0, coeff: 0.3, attrs: ["AG", "PE"] }, { intercept: 0, coeff: 1, attrs: ["AG", "PE"] }),
    ],
    { derived: { ap: -1, carry: 15 }, skillBonus: { outdoorsman: 2 } }),

  path("burnedHands", "Burned hands", "−1 AG, −1 CH · repair/unarmed/doctor down · +1 EN, +2 poison, +2 science",
    "Fire, chem, or a live conduit. The palms are a map. Fine work is an argument. People look at the handshake and already know a story. You learned heat the way a scholar learns a language.",
    "Burned hands. Ugly handshake. Excellent cautionary tale.",
    { AG: -1, CH: -1, EN: 1 },
    [
      f("repair", "Repair is clumsy Intelligence.", { intercept: 0, coeff: 0.4, attrs: ["IN"] }, { intercept: 0, coeff: 2, attrs: ["IN"] }),
      f("unarmed", "Unarmed hits without the old hands.", { intercept: 4, coeff: 0.3, attrs: ["AG", "STR"] }, { intercept: 20, coeff: 2, attrs: ["AG", "STR"] }),
      f("doctor", "Doctor cannot trust the fingers.", { intercept: 0, coeff: 0.15, attrs: ["PE", "IN"] }, { intercept: 0, coeff: 1, attrs: ["PE", "IN"] }),
    ],
    { derived: { poison: 2, radiation: 2 }, skillBonus: { science: 2 } }),

  path("chemGhost", "Chem ghost", "−1 EN, −1 IN, −1 heal · medicine down · +1 LK, +1 AP, steal/gambling +2",
    "The need never left. Quiet rooms make the hands tell on you. You can still work. You just work around a hole that used to be a person — and you know every shortcut a desperate body takes.",
    "Chem ghost. Shaky. Lucky. Knows the back door.",
    { EN: -1, IN: -1, LK: 1 },
    [
      f("doctor", "Doctor is a shaky Intelligence scale.", { intercept: 0, coeff: 0.15, attrs: ["PE", "IN"] }, { intercept: 0, coeff: 1, attrs: ["PE", "IN"] }),
      f("firstAid", "First Aid loses the clean body-knowledge.", { intercept: 0, coeff: 0.3, attrs: ["PE", "EN"] }, { intercept: 0, coeff: 1, attrs: ["PE", "EN"] }),
    ],
    { derived: { healingRate: -1, ap: 1 }, skillBonus: { steal: 2, gambling: 2 } }),

  path("shrapnelSmile", "Shrapnel smile", "−2 CH, barter down · speech uses STR · +1 melee, unarmed +2",
    "The jaw wired wrong. Teeth that are not a set. People stare, then decide what you are. Talking is cheaper than it used to be — unless you make it a threat.",
    "Shrapnel smile. Ugly grin. Honest left hook.",
    { CH: -2 },
    [
      f("speech", "Speech is Strength plus Charisma — the threat version.", { intercept: 0, coeff: 0.5, attrs: ["STR", "CH"] }, { intercept: 0, coeff: 3, attrs: ["STR", "CH"] }),
      f("barter", "Barter loses the friendly face.", { intercept: 0, coeff: 0.5, attrs: ["CH"] }, { intercept: 0, coeff: 2, attrs: ["CH"] }),
    ],
    { derived: { melee: 1 }, skillBonus: { unarmed: 2 } }),

  path("radKiss", "Rad kiss", "−1 CH, −4 HP · +6 rad, +2 poison, outdoorsman +2",
    "You slept in the green and woke up different. The Geiger still likes you. Mirrors are optional. Some doors close. The ones that stay open are the ones that matter, and the glow does not kill you as fast as it should.",
    "Rad kiss. Hot. Literally. Doors hesitate. I don't.",
    { CH: -1 },
    [
      f("speech", "Speech is the glow talking.", { intercept: 0, coeff: 0.7, attrs: ["CH"] }, { intercept: 0, coeff: 4, attrs: ["CH"] }),
    ],
    { derived: { hp: -4, radiation: 6, poison: 2 }, skillBonus: { outdoorsman: 2 } }),

  path("crushedChest", "Crushed chest", "−2 EN, −6 HP, −25 carry · +1 IN, +1 Sequence, +1 AC",
    "A cave-in, a hug from something too big, a steering column. Breath is a ration. You count stairs like ammunition. You also stopped charging into rooms first.",
    "Crushed chest. Soft ribs. Hard lessons.",
    { EN: -2, IN: 1 },
    [
      f("outdoorsman", "Outdoorsman pays for every mile in the ribs.", { intercept: 0, coeff: 0.3, attrs: ["EN", "IN"] }, { intercept: 0, coeff: 1, attrs: ["EN", "IN"] }),
    ],
    { derived: { hp: -6, carry: -25, sequence: 1, ac: 1 } }),

  path("buriedWrong", "Buried the wrong one", "−1 LK, gambling down · +1 PE, +2 Sequence, sneak +2",
    "You lived. They didn't. Sleep is a negotiation. You still make plans. You just leave a chair empty in every one of them — and you notice the door before anyone else does.",
    "Buried the wrong one. Unlucky. Awake. Watching.",
    { LK: -1, PE: 1 },
    [
      f("gambling", "Gambling does not trust Luck anymore.", { intercept: 0, coeff: 0.6, attrs: ["LK"] }, { intercept: 0, coeff: 3, attrs: ["LK"] }),
    ],
    { derived: { sequence: 2 }, skillBonus: { sneak: 2 } }),

  path("missingFingers", "Missing fingers", "−1 AG · lockpick/repair down · +1 STR, +1 melee, unarmed rewritten",
    "A blade, a press, a door that closed. The grip changed. Fine pins are a joke. A fist, a stock, a pipe — those still listen.",
    "Missing fingers. Bad at buttons. Good at ending arguments.",
    { AG: -1, STR: 1 },
    [
      f("lockpick", "Lockpick hates the gaps.", { intercept: 0, coeff: 0.15, attrs: ["PE", "AG"] }, { intercept: 0, coeff: 1, attrs: ["PE", "AG"] }),
      f("repair", "Repair is thicker than it used to be.", { intercept: 0, coeff: 0.4, attrs: ["IN"] }, { intercept: 0, coeff: 2, attrs: ["IN"] }),
      f("unarmed", "Unarmed is a hooked Strength-Agility scale.", { intercept: 8, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 40, coeff: 2, attrs: ["AG", "STR"] }),
    ],
    { derived: { melee: 1 } }),

  path("brandedCheek", "Branded cheek", "−1 CH, speech down · +1 EN, +3 HP, speech uses EN",
    "Someone marked you so the next town would know the story. Charm got expensive. Surviving the iron did not. When you talk now, people hear the heat.",
    "Branded cheek. Hard to smile. Harder to break.",
    { CH: -1, EN: 1 },
    [
      f("speech", "Speech is Endurance plus Charisma — you outlast the room.", { intercept: 0, coeff: 0.5, attrs: ["EN", "CH"] }, { intercept: 0, coeff: 3, attrs: ["EN", "CH"] }),
    ],
    { derived: { hp: 3 } }),

  path("deadEar", "Dead ear", "−1 PE, −1 Sequence · +3 Sneak, traps use IN",
    "One side of the world went quiet. You miss shouts. You also do not flinch at the shot that was supposed to scare you, and you watch mouths instead of waiting for noise.",
    "Dead ear. Misses the joke. Doesn't miss the knife.",
    { PE: -1 },
    [
      f("traps", "Traps become a visual Intelligence job.", { intercept: 2, coeff: 0.35, attrs: ["PE", "IN"] }, { intercept: 10, coeff: 2, attrs: ["PE", "IN"] }),
    ],
    { derived: { sequence: -1 }, skillBonus: { sneak: 3 } }),

  path("knifeSmile", "Knife smile", "−1 CH · +1 AG, +2 melee, melee rewritten",
    "Someone tried to write a warning on your face and accidentally gave you a style. People look away. You step in closer. The blade feels like a continuation of the scar.",
    "Knife smile. Bad first impression. Excellent second.",
    { CH: -1, AG: 1 },
    [
      f("meleeWeapons", "Melee is a meaner Agility-Strength scale.", { intercept: 6, coeff: 0.5, attrs: ["AG", "STR"] }, { intercept: 30, coeff: 2, attrs: ["AG", "STR"] }),
    ],
    { derived: { melee: 2 } }),

  path("glassJaw", "Glass jaw", "−1 EN, −5 HP · +1 AG, +2 AC",
    "One clean shot put you down in front of a crowd. You got up with a new religion: do not be where the fist is. The chin is still a rumor. The feet are not.",
    "Glass jaw. Don't get hit. That's the whole build.",
    { EN: -1, AG: 1 },
    [],
    { derived: { hp: -5, ac: 2 } }),

  path("tinnitus", "Tinnitus", "−1 PE · +1 LK, +1 crit range, big guns +2",
    "The ringing never clocked out. Conversation is a fight. Gunfire is just more of the same weather. You shoot through the noise like it is a hymn.",
    "Tinnitus. Can't hear me. Can hear the boom.",
    { PE: -1, LK: 1 },
    [],
    { derived: { critShift: 1 }, skillBonus: { bigGuns: 2 } }),

  path("fusedKnee", "Fused knee", "−2 AG, −1 AP · +1 STR, +30 carry, +1 melee",
    "The joint is a suggestion. Running is a story you tell about somebody else. Standing your ground, though — you are a post with opinions.",
    "Fused knee. Not fast. Not moving.",
    { AG: -2, STR: 1 },
    [
      f("sneak", "Sneak and a fused knee are a bit.", { intercept: 0, coeff: 0.35, attrs: ["AG"] }, { intercept: 0, coeff: 2, attrs: ["AG"] }),
    ],
    { derived: { ap: -1, carry: 30, melee: 1 } }),

  path("oneLung", "One lung", "−2 EN, −8 HP, −1 heal · +1 PE, +2 Sequence, sneak +2",
    "Breath is a budget. Stairs are an encounter. You hear everything because you stopped filling the room with your own noise. Quiet became a survival skill.",
    "One lung. Short of breath. Long on attention.",
    { EN: -2, PE: 1 },
    [],
    { derived: { hp: -8, healingRate: -1, sequence: 2 }, skillBonus: { sneak: 2 } }),

  path("nightTerrors", "Night terrors", "−1 IN, −1 SP/level · +1 PE, +3 Sequence, sneak +1",
    "Sleep is a coin flip. The dark has a guest list. You show up to morning already having fought something, which means you notice the real something faster.",
    "Night terrors. Tired brain. Wired eyes.",
    { IN: -1, PE: 1 },
    [],
    { derived: { skillPoints: -1, sequence: 3 }, skillBonus: { sneak: 1 } }),

  path("biteMark", "Bite mark", "−1 CH · +1 EN, +3 poison, unarmed +2",
    "Something with too many teeth left a signature. People see it and take a step back. Your blood learned a lesson. So did your hands.",
    "Bite mark. Conversation starter. Then ender.",
    { CH: -1, EN: 1 },
    [],
    { derived: { poison: 3 }, skillBonus: { unarmed: 2 } }),

  path("pinSpine", "Pin in the spine", "−1 AG, −1 AP, −15 carry · +1 EN, +6 HP",
    "Metal where a disc used to be. Bending is a meeting. You already survived the worst day of your back's life, so ordinary damage feels like commentary.",
    "Pin in the spine. Stiff. Extremely alive.",
    { AG: -1, EN: 1 },
    [],
    { derived: { ap: -1, carry: -15, hp: 6 } }),

  path("missingTongue", "Missing tongue", "Speech collapses · +2 Sneak, +2 Steal, science +1",
    "Someone took the words. You kept the rest. People underestimate a quiet mouth. You let them. Writing, signing, staring — those still work.",
    "Missing tongue. Terrible speeches. Excellent secrets.",
    {},
    [
      f("speech", "Speech is a wreck of Charisma.", { intercept: 0, coeff: 0.3, attrs: ["CH"] }, { intercept: 0, coeff: 1, attrs: ["CH"] }),
    ],
    { skillBonus: { sneak: 2, steal: 2, science: 1 } }),

  path("collarbone", "Collarbone", "−1 STR, −25 carry, −1 melee · +1 AG, +1 AC, small guns +1",
    "It never sat right after the break. Heavy loads argue. You stopped leading with the shoulder and started leading with the feet. The rifle sits better than the crate.",
    "Collarbone. Don't ask them to carry the fridge. Ask them to shoot it.",
    { STR: -1, AG: 1 },
    [],
    { derived: { carry: -25, melee: -1, ac: 1 }, skillBonus: { smallGuns: 1 } }),

  path("radSterile", "Rad sterile", "−1 LK, −1 CH · +8 rad, +2 poison, science +2",
    "The glow took the future you were supposed to have. Superstition stuck to you. So did a working knowledge of why, and a body that treats rads like weather.",
    "Rad sterile. Unlucky line. Thick Geiger skin.",
    { LK: -1, CH: -1 },
    [],
    { derived: { radiation: 8, poison: 2 }, skillBonus: { science: 2 } }),

  path("hookedVein", "Hooked vein", "−1 EN, −1 heal · +1 AG, +1 AP, steal +2",
    "Track marks, or the ghost of them. Recovery is a part-time job. The upside of knowing every chem alley is that you also know every exit, and your hands still move like they need to.",
    "Hooked vein. Body's a mess. Hands are not.",
    { EN: -1, AG: 1 },
    [],
    { derived: { healingRate: -1, ap: 1 }, skillBonus: { steal: 2 } }),

  path("loyaltyDebt", "Loyalty debt", "−1 CH · +1 LK, +1 Sequence, first aid +2",
    "You lived because someone else didn't get to. Charm feels like theft. You watch the people who are still here like they might vanish, and you keep a kit ready like an apology.",
    "Loyalty debt. Bad at parties. Good at not losing the next one.",
    { CH: -1, LK: 1 },
    [],
    { derived: { sequence: 1 }, skillBonus: { firstAid: 2 } }),
];

function indexById<Id extends string>(
  list: PathDef<Id>[],
  ids: readonly Id[],
  label: string,
): Record<Id, PathDef<Id>> {
  const rec = Object.fromEntries(list.map((p) => [p.id, p])) as Record<Id, PathDef<Id>>;
  for (const id of ids) {
    if (!rec[id]) throw new Error(`Missing ${label} path: ${id}`);
  }
  return rec;
}

export const EDUCATION_BY_ID = indexById(EDUCATIONS, EDUCATION_IDS, "education");
export const LIFE_BY_ID = indexById(LIVES, LIFE_IDS, "life");
export const SCAR_BY_ID = indexById(SCARS, SCAR_IDS, "scar");

export function educationOf(id: EducationId | undefined) {
  return EDUCATION_BY_ID[id ?? "none"] ?? EDUCATION_BY_ID.none;
}

export function lifeOf(id: LifeId | undefined) {
  return LIFE_BY_ID[id ?? "none"] ?? LIFE_BY_ID.none;
}

export function scarsOf(ids: ScarId[] | undefined) {
  return (ids ?? []).map((id) => SCAR_BY_ID[id]).filter(Boolean);
}

export function pathLayers(character: Pick<Character, "educationId" | "lifeId" | "scars">) {
  return [
    educationOf(character.educationId),
    lifeOf(character.lifeId),
    ...scarsOf(character.scars),
  ];
}

export function mergeDerived(patches: (DerivedPatch | undefined)[]): DerivedPatch {
  const acc: DerivedPatch = {};
  for (const d of patches) {
    if (!d) continue;
    acc.ap = (acc.ap ?? 0) + (d.ap ?? 0);
    acc.sequence = (acc.sequence ?? 0) + (d.sequence ?? 0);
    acc.hp = (acc.hp ?? 0) + (d.hp ?? 0);
    acc.hpPerLevel = (acc.hpPerLevel ?? 0) + (d.hpPerLevel ?? 0);
    acc.carry = (acc.carry ?? 0) + (d.carry ?? 0);
    acc.healingRate = (acc.healingRate ?? 0) + (d.healingRate ?? 0);
    acc.poison = (acc.poison ?? 0) + (d.poison ?? 0);
    acc.radiation = (acc.radiation ?? 0) + (d.radiation ?? 0);
    acc.melee = (acc.melee ?? 0) + (d.melee ?? 0);
    acc.ac = (acc.ac ?? 0) + (d.ac ?? 0);
    acc.skillPoints = (acc.skillPoints ?? 0) + (d.skillPoints ?? 0);
    acc.critShift = (acc.critShift ?? 0) + (d.critShift ?? 0);
  }
  return acc;
}

export function pathSkillBonus(
  character: Pick<Character, "educationId" | "lifeId" | "scars">,
  engine: EngineId,
): Partial<Record<SkillId, number>> {
  const scale = engine === "pnp" ? 5 : 1;
  const acc: Partial<Record<SkillId, number>> = {};
  for (const layer of pathLayers(character)) {
    for (const id of SKILL_IDS) {
      const n = layer.skillBonus?.[id] ?? 0;
      if (!n) continue;
      acc[id] = (acc[id] ?? 0) + n * scale;
    }
  }
  return acc;
}
