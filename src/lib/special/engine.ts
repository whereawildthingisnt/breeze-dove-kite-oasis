import {
  BACKGROUNDS,
  FREE_POINT_BUDGET,
  SKILL_META,
  TAG_BONUS_D20,
  TAG_BONUS_PNP,
  TRAITS,
} from "./data";
import { gearSummary } from "./loadout";
import {
  educationOf,
  lifeOf,
  mergeDerived,
  pathLayers,
  pathSkillBonus,
  scarsOf,
  type DerivedPatch,
  type FormulaSpec,
} from "./paths";
import { perkDerived, perkSkillMods, perkSpecialMods } from "./perks";
import type {
  Character,
  DerivedSheet,
  EngineId,
  SkillBreakdown,
  SkillId,
  SpecialBlock,
  SpecialKey,
} from "./types";
import { SKILL_IDS, SPECIAL_KEYS, characterEngine } from "./types";

/** Engine floor() is toward zero, not toward −∞. */
export function truncDiv(n: number, d: number): number {
  return Math.trunc(n / d);
}

export function roundNearest(n: number): number {
  return Math.round(n);
}

function zeros(): SpecialBlock {
  return { STR: 0, PE: 0, EN: 0, CH: 0, IN: 0, AG: 0, LK: 0 };
}

export function pathSpecial(character: Character): SpecialBlock {
  const block = zeros();
  const layers = [
    educationOf(character.educationId).special,
    lifeOf(character.lifeId).special,
    ...scarsOf(character.scars).map((s) => s.special),
  ];
  for (const layer of layers) {
    for (const key of SPECIAL_KEYS) {
      block[key] += layer[key] ?? 0;
    }
  }
  return block;
}

export function pathDerived(character: Character): DerivedPatch {
  return mergeDerived(pathLayers(character).map((layer) => layer.derived));
}

export function backgroundSpecial(character: Character): SpecialBlock {
  const block = zeros();
  if (characterEngine(character) === "pnp") return block;
  if (character.backgroundId === "none") return block;
  if (character.backgroundId === "custom") {
    return { ...character.customBackground.special };
  }
  const def = BACKGROUNDS.find((b) => b.id === character.backgroundId);
  if (!def) return block;
  for (const key of SPECIAL_KEYS) {
    block[key] = def.special[key] ?? 0;
  }
  return block;
}

export function backgroundSkills(character: Character): Partial<Record<SkillId, number>> {
  if (characterEngine(character) === "pnp") return {};
  if (character.backgroundId === "none") return {};
  if (character.backgroundId === "custom") {
    return { ...character.customBackground.skills };
  }
  const def = BACKGROUNDS.find((b) => b.id === character.backgroundId);
  return def?.skills ?? {};
}

function traitSpecialMods(character: Character): SpecialBlock {
  const mods: SpecialBlock = {
    STR: 0,
    PE: 0,
    EN: 0,
    CH: 0,
    IN: 0,
    AG: 0,
    LK: 0,
  };
  const t = character.traits;
  if (t.includes("gifted")) {
    for (const key of SPECIAL_KEYS) mods[key] += 1;
  }
  if (t.includes("bruiser")) mods.STR += 2;
  if (t.includes("smallFrame")) mods.AG += 1;
  if (t.includes("techWizard")) mods.PE -= 1;
  return mods;
}

export function finalSpecial(character: Character): SpecialBlock {
  const bg = backgroundSpecial(character);
  const trait = traitSpecialMods(character);
  const path = pathSpecial(character);
  const gear = gearSummary(character.loadout, characterEngine(character));
  const perk = perkSpecialMods(character);
  const result = {} as SpecialBlock;
  for (const key of SPECIAL_KEYS) {
    result[key] =
      (character.rolled[key] ?? 0) +
      (bg[key] ?? 0) +
      (character.free[key] ?? 0) +
      (character.adjust[key] ?? 0) +
      (trait[key] ?? 0) +
      (path[key] ?? 0) +
      (perk[key] ?? 0);
  }
  result.STR += gear.strBonus;
  result.PE -= gear.pePenalty;
  return result;
}

const D20_FORMULAS: Record<SkillId, FormulaSpec> = {
  smallGuns: { intercept: 1, coeff: 0.8, attrs: ["AG"] },
  bigGuns: { intercept: 0, coeff: 0.4, attrs: ["AG"] },
  energyWeapons: { intercept: 0, coeff: 0.4, attrs: ["AG"] },
  unarmed: { intercept: 6, coeff: 0.4, attrs: ["AG", "STR"] },
  meleeWeapons: { intercept: 4, coeff: 0.4, attrs: ["AG", "STR"] },
  throwing: { intercept: 0, coeff: 0.8, attrs: ["AG"] },
  firstAid: { intercept: 0, coeff: 0.4, attrs: ["PE", "EN"] },
  doctor: { intercept: 1, coeff: 0.2, attrs: ["PE", "IN"] },
  sneak: { intercept: 1, coeff: 0.6, attrs: ["AG"] },
  lockpick: { intercept: 2, coeff: 0.2, attrs: ["PE", "AG"] },
  steal: { intercept: 0, coeff: 0.6, attrs: ["AG"] },
  traps: { intercept: 2, coeff: 0.2, attrs: ["PE", "AG"] },
  science: { intercept: 0, coeff: 0.8, attrs: ["IN"] },
  repair: { intercept: 0, coeff: 0.6, attrs: ["IN"] },
  pilot: { intercept: 0, coeff: 0.4, attrs: ["AG", "PE"] },
  speech: { intercept: 0, coeff: 1, attrs: ["CH"] },
  barter: { intercept: 0, coeff: 0.8, attrs: ["CH"] },
  gambling: { intercept: 0, coeff: 1, attrs: ["LK"] },
  outdoorsman: { intercept: 0, coeff: 0.4, attrs: ["EN", "IN"] },
};

const PNP_FORMULAS: Record<SkillId, FormulaSpec> = {
  smallGuns: { intercept: 5, coeff: 4, attrs: ["AG"] },
  bigGuns: { intercept: 0, coeff: 2, attrs: ["AG"] },
  energyWeapons: { intercept: 0, coeff: 2, attrs: ["AG"] },
  unarmed: { intercept: 30, coeff: 2, attrs: ["AG", "STR"] },
  meleeWeapons: { intercept: 20, coeff: 2, attrs: ["AG", "STR"] },
  throwing: { intercept: 0, coeff: 4, attrs: ["AG"] },
  firstAid: { intercept: 0, coeff: 2, attrs: ["PE", "EN"] },
  doctor: { intercept: 5, coeff: 1, attrs: ["PE", "IN"] },
  sneak: { intercept: 5, coeff: 3, attrs: ["AG"] },
  lockpick: { intercept: 10, coeff: 1, attrs: ["PE", "AG"] },
  steal: { intercept: 0, coeff: 3, attrs: ["AG"] },
  traps: { intercept: 10, coeff: 1, attrs: ["PE", "AG"] },
  science: { intercept: 0, coeff: 4, attrs: ["IN"] },
  repair: { intercept: 0, coeff: 3, attrs: ["IN"] },
  pilot: { intercept: 0, coeff: 2, attrs: ["AG", "PE"] },
  speech: { intercept: 0, coeff: 5, attrs: ["CH"] },
  barter: { intercept: 0, coeff: 4, attrs: ["CH"] },
  gambling: { intercept: 0, coeff: 5, attrs: ["LK"] },
  outdoorsman: { intercept: 0, coeff: 2, attrs: ["EN", "IN"] },
};

function evalSpec(spec: FormulaSpec, s: SpecialBlock): number {
  const sum = spec.attrs.reduce((n, key) => n + (s[key] ?? 0), 0);
  return roundNearest(spec.intercept + spec.coeff * sum);
}

function coeffLabel(n: number): string {
  const t = Number(n.toFixed(2));
  return String(t);
}

export function formatSpec(spec: FormulaSpec, engine: EngineId): string {
  const inner =
    spec.attrs.length === 1 ? spec.attrs[0] : `(${spec.attrs.join(" + ")})`;
  const term = spec.coeff === 1 ? inner : `${coeffLabel(spec.coeff)} × ${inner}`;
  if (engine === "d20") {
    if (spec.intercept === 0 && spec.coeff === 1 && spec.attrs.length === 1) {
      return spec.attrs[0]!;
    }
    const body = spec.intercept === 0 ? term : `${spec.intercept} + ${term}`;
    return `round(${body})`;
  }
  if (spec.intercept === 0) return term;
  const intLabel = [5, 10, 20, 30].includes(spec.intercept)
    ? `${spec.intercept}%`
    : String(spec.intercept);
  return `${intLabel} + ${term}`;
}

export function formulaFor(
  id: SkillId,
  character: Character,
  engine: EngineId = characterEngine(character),
): { spec: FormulaSpec; rewritten: boolean; note?: string } {
  let spec = engine === "pnp" ? PNP_FORMULAS[id] : D20_FORMULAS[id];
  let rewritten = false;
  let note: string | undefined;
  const layers = [
    educationOf(character.educationId),
    lifeOf(character.lifeId),
    ...scarsOf(character.scars),
  ];
  for (const layer of layers) {
    const hit = layer.formulas.find((entry) => entry.skill === id);
    if (hit) {
      spec = engine === "pnp" ? hit.pnp : hit.d20;
      rewritten = true;
      note = hit.note;
    }
  }
  return { spec, rewritten, note };
}

function d20TraitSkillMod(id: SkillId, character: Character): number {
  const t = character.traits;
  let n = 0;
  if (t.includes("gifted")) n -= 2;
  if (t.includes("skilled")) n += 2;
  if (t.includes("goodNatured")) {
    if (id === "firstAid" || id === "doctor" || id === "speech" || id === "barter") n += 4;
    if (
      id === "smallGuns" ||
      id === "bigGuns" ||
      id === "energyWeapons" ||
      id === "unarmed" ||
      id === "meleeWeapons"
    ) {
      n -= 2;
    }
  }
  if (t.includes("techWizard") && (id === "science" || id === "repair" || id === "lockpick")) {
    n += 3;
  }
  return n;
}

function pnpTraitSkillMod(id: SkillId, character: Character): number {
  const t = character.traits;
  let n = 0;
  if (t.includes("gifted")) n -= 10;
  if (t.includes("skilled")) n += 10;
  if (t.includes("goodNatured")) {
    if (
      id === "firstAid" ||
      id === "doctor" ||
      id === "speech" ||
      id === "barter"
    ) {
      n += 20;
    }
    if (
      id === "smallGuns" ||
      id === "bigGuns" ||
      id === "energyWeapons" ||
      id === "unarmed" ||
      id === "meleeWeapons"
    ) {
      n -= 10;
    }
  }
  if (
    t.includes("techWizard") &&
    (id === "science" || id === "repair" || id === "lockpick")
  ) {
    n += 15;
  }
  return n;
}

export function skillCostForNext(current: number, tagged: boolean, engine: EngineId = "d20"): number {
  if (engine === "pnp") {
    return tagged ? 0.5 : 1;
  }
  let cost: number;
  if (current >= 26) cost = 4;
  else if (current >= 21) cost = 3;
  else if (current >= 11) cost = 2;
  else cost = 1;
  if (!tagged) return cost;
  return Math.ceil(cost / 2);
}

export function healingRateD20(en: number): number {
  if (en >= 15) return 6;
  if (en >= 13) return 5;
  if (en >= 11) return 4;
  if (en >= 9) return 3;
  if (en >= 6) return 2;
  return 1;
}

export function healingRatePnp(en: number): number {
  if (en >= 11) return 4;
  if (en >= 9) return 3;
  if (en >= 6) return 2;
  return 1;
}

export function criticalLow(luck: number, finesse: boolean): number {
  const band = Math.floor((luck - 1) / 5);
  return 20 - band - (finesse ? 1 : 0);
}

export function formatCritRange(low: number): string {
  if (low >= 20) return "20";
  if (low > 20) return `none on a d20 (${low}–20)`;
  if (low <= 1) return "1–20";
  return `${low}–20`;
}

function meleeDamagePnp(str: number): number {
  if (str <= 6) return 1;
  return str - 5;
}

export function derive(character: Character): DerivedSheet {
  const engine = characterEngine(character);
  const special = finalSpecial(character);
  const gear = gearSummary(character.loadout, engine);
  const modifiers = {} as SpecialBlock;
  for (const key of SPECIAL_KEYS) {
    modifiers[key] = special[key] - 5;
  }

  const t = character.traits;
  const tagBonus = engine === "pnp" ? TAG_BONUS_PNP : TAG_BONUS_D20;
  const bgSkills = backgroundSkills(character);
  const spentScale = engine === "pnp" ? 1 : 1;
  const paths = pathDerived(character);
  const pathMods = pathSpecial(character);
  const pathSkills = pathSkillBonus(character, engine);
  const perkSkills = perkSkillMods(character);

  const skills = {} as Record<SkillId, SkillBreakdown>;
  for (const id of SKILL_IDS) {
    const resolved = formulaFor(id, character, engine);
    const base = evalSpec(resolved.spec, special);
    const background = bgSkills[id] ?? 0;
    const trait =
      engine === "pnp" ? pnpTraitSkillMod(id, character) : d20TraitSkillMod(id, character);
    const tag = (character.tagged ?? []).includes(id) ? tagBonus : 0;
    const spent = (character.skillSpent[id] ?? 0) * spentScale;
    const path = pathSkills[id] ?? 0;
    const perk = perkSkills[id] ?? 0;
    let total = base + background + trait + tag + spent + path + perk;
    if (id === "sneak" && gear.sneakPen) {
      total -= engine === "pnp" ? gear.sneakPen : Math.round(gear.sneakPen / 5);
    }
    skills[id] = {
      id,
      base,
      background,
      trait,
      tag,
      spent,
      path,
      total,
      formula: formatSpec(resolved.spec, engine),
      rewritten: resolved.rewritten,
    };
  }

  const level = character.level;
  const hpBase = 15 + special.STR + 2 * special.EN;
  const hpLater = (level - 1) * (3 + truncDiv(special.EN, 2));
  const hpLife = (t as string[]).includes("lifegiver") ? 4 * level : 0;

  const freeSpent = SPECIAL_KEYS.reduce((n, k) => n + (character.free[k] ?? 0), 0);
  const bgSpent = SPECIAL_KEYS.reduce((n, k) => n + (backgroundSpecial(character)[k] ?? 0), 0);
  const customSkillSpent = Object.values(character.customBackground.skills).reduce(
    (n, v) => n + (v ?? 0),
    0,
  );

  const rolledTotal = SPECIAL_KEYS.reduce((n, k) => n + (character.rolled[k] ?? 0), 0);
  const finalTotal = SPECIAL_KEYS.reduce((n, k) => n + special[k], 0);

  let ap = 5 + truncDiv(special.AG, 2);
  if (t.includes("bruiser")) ap -= 2;

  const armorAc = gear.armorAc || character.armorAc;
  let ac: number;
  if (t.includes("kamikaze")) {
    ac = armorAc;
  } else {
    ac = special.AG + armorAc;
  }

  let carryWeight = 25 + 25 * special.STR;
  if (t.includes("smallFrame")) {
    carryWeight = 15 * special.STR;
  }

  let meleeDamage: number;
  if (engine === "pnp") {
    meleeDamage = meleeDamagePnp(special.STR);
    if (t.includes("heavyHanded")) meleeDamage += 4;
  } else {
    meleeDamage = special.STR - 5;
    if (t.includes("finesse")) meleeDamage -= 4;
    if (t.includes("heavyHanded")) meleeDamage += 4;
  }

  let poisonResistance: number;
  let radiationResistance: number;
  if (engine === "pnp") {
    poisonResistance = t.includes("fastMetabolism") ? 0 : 5 * special.EN;
    radiationResistance = t.includes("fastMetabolism") ? 0 : 2 * special.EN;
  } else if (t.includes("fastMetabolism")) {
    poisonResistance = 0;
    radiationResistance = 0;
  } else {
    poisonResistance = truncDiv(special.EN, 2);
    radiationResistance = truncDiv(special.EN, 5);
  }
  if (engine === "pnp") {
    poisonResistance += gear.poisonBonus;
    radiationResistance += gear.radBonus;
  } else {
    poisonResistance += Math.round(gear.poisonBonus / 5);
    radiationResistance += Math.round(gear.radBonus / 5);
  }

  let sequence = 2 * special.PE;
  if (t.includes("kamikaze")) sequence += 5;
  sequence += paths.sequence ?? 0;

  let healingRate =
    engine === "pnp" ? healingRatePnp(special.EN) : healingRateD20(special.EN);
  if (t.includes("fastMetabolism")) healingRate += 2;
  healingRate += paths.healingRate ?? 0;

  ap += paths.ap ?? 0;
  ac += paths.ac ?? 0;
  carryWeight += paths.carry ?? 0;
  meleeDamage += paths.melee ?? 0;
  poisonResistance += paths.poison ?? 0;
  radiationResistance += paths.radiation ?? 0;

  let skillPointsPerLevel: number;
  let perkInterval: number;
  if (engine === "pnp") {
    skillPointsPerLevel = 5 + 2 * special.IN;
    if (t.includes("gifted")) skillPointsPerLevel -= 5;
    if (t.includes("skilled")) skillPointsPerLevel += 5;
    perkInterval = 3 + (t.includes("skilled") ? 1 : 0);
  } else {
    skillPointsPerLevel = 5 + truncDiv(special.IN, 2) + (t.includes("skilled") ? 1 : 0);
    perkInterval = t.includes("skilled") ? 4 : 3;
  }
  skillPointsPerLevel += paths.skillPoints ?? 0;

  const perks = perkDerived(character);
  ap += perks.ap;
  carryWeight += perks.carry;
  sequence += perks.sequence;
  healingRate += perks.heal;
  ac += perks.ac;
  skillPointsPerLevel += perks.skillPoints;

  const finesseCrit = engine === "d20" && t.includes("finesse");
  const heavyCrit = engine === "d20" && t.includes("heavyHanded");
  const critLow =
    criticalLow(special.LK, finesseCrit) + (heavyCrit ? 1 : 0) - (paths.critShift ?? 0);
  let criticalChance = special.LK;
  if (engine === "pnp" && t.includes("finesse")) criticalChance += 10;
  criticalChance += perks.crit;

  return {
    engine,
    special,
    modifiers,
    skills,
    hp: hpBase + hpLater + hpLife + (paths.hp ?? 0) + (paths.hpPerLevel ?? 0) * level + perks.hp,
    ap,
    ac,
    carryWeight,
    carriedWeight: gear.carried,
    overweight: gear.carried > carryWeight,
    meleeDamage,
    poisonResistance,
    radiationResistance,
    electricityResistance: engine === "pnp" ? 30 : 0,
    sequence,
    healingRate,
    skillPointsPerLevel,
    perkInterval,
    perksEarned: Math.trunc(level / perkInterval),
    criticalRange:
      engine === "pnp" ? `${criticalChance}%` : formatCritRange(critLow),
    criticalLow: critLow,
    criticalChance,
    taggedCount: (character.tagged ?? []).length,
    tagBonus,
    freeSpent,
    freeRemaining: FREE_POINT_BUDGET - freeSpent,
    backgroundSpecialSpent: bgSpent,
    customSkillSpent,
    rolledTotal,
    finalTotal,
    skillUnit: engine === "pnp" ? "%" : "",
    gearArmorAc: gear.armorAc,
    gearDt: gear.dt,
    gearDr: gear.dr + (engine === "pnp" ? perks.dr : Math.round(perks.dr / 5)),
    pathSpecial: pathMods,
  };
}

export function specialFormula(
  id: SkillId,
  engine: EngineId = "d20",
  character?: Character,
): string {
  if (character) {
    return formatSpec(formulaFor(id, character, engine).spec, engine);
  }
  const spec = engine === "pnp" ? PNP_FORMULAS[id] : D20_FORMULAS[id];
  return formatSpec(spec, engine);
}

export function skillLabel(id: SkillId): string {
  return SKILL_META[id].name;
}

export function traitLabel(id: Character["traits"][number]): string {
  return TRAITS[id as keyof typeof TRAITS]?.name ?? id;
}
