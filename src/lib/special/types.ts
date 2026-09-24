export const SPECIAL_KEYS = ["STR", "PE", "EN", "CH", "IN", "AG", "LK"] as const;
export type SpecialKey = (typeof SPECIAL_KEYS)[number];
export type SpecialBlock = Record<SpecialKey, number>;

export type EngineId = "d20" | "pnp";

export const GENDER_IDS = ["male", "female", "other"] as const;
export type GenderId = (typeof GENDER_IDS)[number];

export const SKILL_IDS = [
  "smallGuns",
  "bigGuns",
  "energyWeapons",
  "unarmed",
  "meleeWeapons",
  "throwing",
  "firstAid",
  "doctor",
  "sneak",
  "lockpick",
  "steal",
  "traps",
  "science",
  "repair",
  "pilot",
  "speech",
  "barter",
  "gambling",
  "outdoorsman",
] as const;
export type SkillId = (typeof SKILL_IDS)[number];

/** Classic Fallout trait list, converted to d20 numbers. Lifegiver is a perk, not a trait. */
export const D20_TRAIT_IDS = [
  "fastMetabolism",
  "bruiser",
  "smallFrame",
  "oneHander",
  "finesse",
  "kamikaze",
  "heavyHanded",
  "fastShot",
  "bloodyMess",
  "jinxed",
  "goodNatured",
  "chemReliant",
  "chemResistant",
  "nightPerson",
  "skilled",
  "gifted",
  "sexAppeal",
  "techWizard",
] as const;
export type D20TraitId = (typeof D20_TRAIT_IDS)[number];

export const PNP_TRAIT_IDS = [
  "fastMetabolism",
  "bruiser",
  "smallFrame",
  "oneHander",
  "finesse",
  "kamikaze",
  "heavyHanded",
  "fastShot",
  "bloodyMess",
  "jinxed",
  "goodNatured",
  "chemReliant",
  "chemResistant",
  "nightPerson",
  "skilled",
  "gifted",
  "sexAppeal",
  "techWizard",
] as const;
export type PnpTraitId = (typeof PNP_TRAIT_IDS)[number];

export const TRAIT_IDS = D20_TRAIT_IDS;
export type TraitId = D20TraitId | PnpTraitId;

export type BackgroundId =
  | "none"
  | "laborer"
  | "academic"
  | "soldier"
  | "criminal"
  | "merchant"
  | "rural"
  | "technician"
  | "performer"
  | "scout"
  | "veteran"
  | "custom";

export const EDUCATION_IDS = [
  "none",
  "street",
  "vault",
  "scribe",
  "tribal",
  "drill",
  "clinic",
  "wrench",
  "preacher",
  "chemCook",
  "pitSchool",
  "radioKid",
  "ranchHand",
  "locksmith",
  "powderBoy",
  "navigator",
  "junkyard",
  "officerYard",
  "circus",
  "graveShift",
  "bookkeeper",
  "foundry",
  "convent",
  "gamblerHall",
] as const;
export type EducationId = (typeof EDUCATION_IDS)[number];

export const LIFE_IDS = [
  "none",
  "vaultborn",
  "dust",
  "caravan",
  "raider",
  "collar",
  "hired",
  "bunker",
  "ghoulAlley",
  "waterBearer",
  "courier",
  "pitChamp",
  "chemRunner",
  "scrapCourt",
  "farmHold",
  "cityRat",
  "riverboat",
  "loneCabin",
  "preacherCircuit",
  "overseerShift",
  "glowWalker",
  "knightErrant",
  "wastelandDoc",
  "cageFighter",
] as const;
export type LifeId = (typeof LIFE_IDS)[number];

export const SCAR_IDS = [
  "glassEye",
  "limp",
  "burnedHands",
  "chemGhost",
  "shrapnelSmile",
  "radKiss",
  "crushedChest",
  "buriedWrong",
  "missingFingers",
  "brandedCheek",
  "deadEar",
  "knifeSmile",
  "glassJaw",
  "tinnitus",
  "fusedKnee",
  "oneLung",
  "nightTerrors",
  "biteMark",
  "pinSpine",
  "missingTongue",
  "collarbone",
  "radSterile",
  "hookedVein",
  "loyaltyDebt",
] as const;
export type ScarId = (typeof SCAR_IDS)[number];

export interface CustomBackground {
  name: string;
  special: SpecialBlock;
  skills: Partial<Record<SkillId, number>>;
}

export type ItemKind =
  | "weapon"
  | "armor"
  | "helmet"
  | "ammo"
  | "chem"
  | "gear"
  | "explosive";

export type WeaponSkill =
  | "unarmed"
  | "meleeWeapons"
  | "smallGuns"
  | "bigGuns"
  | "energyWeapons"
  | "throwing";

export type PocketId = "quick1" | "quick2" | "quick3" | "ammo" | "chems" | "aid";

export const POCKET_IDS: PocketId[] = [
  "quick1",
  "quick2",
  "quick3",
  "ammo",
  "chems",
  "aid",
];

export const POCKET_LABELS: Record<PocketId, string> = {
  quick1: "Quick 1",
  quick2: "Quick 2",
  quick3: "Quick 3",
  ammo: "Ammo",
  chems: "Chems",
  aid: "Stimpaks",
};

export type EquipSlot = "head" | "body" | "left" | "right";

export interface InventoryStack {
  uid: string;
  itemId: string;
  qty: number;
  ammoId?: string;
  loaded?: number;
}

export interface Loadout {
  head: string | null;
  body: string | null;
  left: string | null;
  right: string | null;
  pockets: Record<PocketId, string | null>;
  pack: InventoryStack[];
}

export type PerkId =
  | "awareness"
  | "bonusHthDamage"
  | "bonusMove"
  | "bonusRangedDamage"
  | "earlierSequence"
  | "fasterHealing"
  | "moreCriticals"
  | "nightVision"
  | "presence"
  | "smoothTalker"
  | "strongBack"
  | "survivalist"
  | "thief"
  | "toughness"
  | "educated"
  | "healer"
  | "fortuneFinder"
  | "ghost"
  | "negotiator"
  | "scout"
  | "actionBoy"
  | "betterCriticals"
  | "dodger"
  | "gainStrength"
  | "gainPerception"
  | "gainEndurance"
  | "gainCharisma"
  | "gainIntelligence"
  | "gainAgility"
  | "gainLuck"
  | "lifegiver"
  | "masterTrader"
  | "tag"
  | "bonusRateOfFire";

export const PERK_IDS: PerkId[] = [
  "awareness",
  "bonusHthDamage",
  "bonusMove",
  "bonusRangedDamage",
  "earlierSequence",
  "fasterHealing",
  "moreCriticals",
  "nightVision",
  "presence",
  "smoothTalker",
  "strongBack",
  "survivalist",
  "thief",
  "toughness",
  "educated",
  "healer",
  "fortuneFinder",
  "ghost",
  "negotiator",
  "scout",
  "actionBoy",
  "betterCriticals",
  "dodger",
  "gainStrength",
  "gainPerception",
  "gainEndurance",
  "gainCharisma",
  "gainIntelligence",
  "gainAgility",
  "gainLuck",
  "lifegiver",
  "masterTrader",
  "tag",
  "bonusRateOfFire",
];

export interface Character {
  id: string;
  engine: EngineId;
  name: string;
  gender: GenderId;
  appearance: string;
  history: string;
  goals: string;
  notes: string;
  equipment: string;
  level: number;
  armorAc: number;
  karma: number;
  rolled: SpecialBlock;
  backgroundId: BackgroundId;
  customBackground: CustomBackground;
  free: SpecialBlock;
  adjust: SpecialBlock;
  traits: TraitId[];
  educationId: EducationId;
  lifeId: LifeId;
  scars: ScarId[];
  tagged: SkillId[];
  skillSpent: Partial<Record<SkillId, number>>;
  perks: PerkId[];
  skillBank: number;
  perkBank: number;
  loadout: Loadout;
  createdAt: number;
  updatedAt: number;
}

export interface DerivedSheet {
  engine: EngineId;
  special: SpecialBlock;
  modifiers: SpecialBlock;
  skills: Record<SkillId, SkillBreakdown>;
  hp: number;
  ap: number;
  ac: number;
  carryWeight: number;
  carriedWeight: number;
  overweight: boolean;
  meleeDamage: number;
  poisonResistance: number;
  radiationResistance: number;
  electricityResistance: number;
  sequence: number;
  healingRate: number;
  skillPointsPerLevel: number;
  perkInterval: number;
  perksEarned: number;
  criticalRange: string;
  criticalLow: number;
  criticalChance: number;
  taggedCount: number;
  tagBonus: number;
  freeSpent: number;
  freeRemaining: number;
  backgroundSpecialSpent: number;
  customSkillSpent: number;
  rolledTotal: number;
  finalTotal: number;
  skillUnit: "%" | "";
  gearArmorAc: number;
  gearDt: number;
  gearDr: number;
  pathSpecial: SpecialBlock;
}

export interface SkillBreakdown {
  id: SkillId;
  base: number;
  background: number;
  trait: number;
  tag: number;
  spent: number;
  path: number;
  total: number;
  formula: string;
  rewritten: boolean;
}

export function characterEngine(character: { engine?: EngineId }): EngineId {
  return character.engine === "pnp" ? "pnp" : "d20";
}

export function emptyLoadout(): Loadout {
  return {
    head: null,
    body: null,
    left: null,
    right: null,
    pockets: {
      quick1: null,
      quick2: null,
      quick3: null,
      ammo: null,
      chems: null,
      aid: null,
    },
    pack: [],
  };
}
