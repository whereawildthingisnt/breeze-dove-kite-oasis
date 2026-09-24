import type { Character, PerkId, SkillId } from "@/lib/special/types";
import { derive } from "@/lib/special/engine";
import { PERK_BY_ID } from "@/lib/special/perks";
import type { RenoLife } from "./types";

/** Compressed Fallout 2 table: L2 = 400, L3 = 1,200, L4 = 2,400… */
export function xpToReach(level: number): number {
  if (level <= 1) return 0;
  return Math.round((400 * level * (level - 1)) / 2);
}

export function xpIntoLevel(xp: number, level: number): { have: number; need: number; pct: number } {
  const here = xpToReach(level);
  const next = xpToReach(level + 1);
  const span = Math.max(1, next - here);
  const have = Math.max(0, xp - here);
  return { have, need: span, pct: Math.min(100, Math.round((have / span) * 100)) };
}

export function spendCost(total: number, tagged: boolean): { cost: number; gain: number } {
  let band = 1;
  if (total >= 201) band = 6;
  else if (total >= 176) band = 5;
  else if (total >= 151) band = 4;
  else if (total >= 126) band = 3;
  else if (total >= 101) band = 2;
  if (tagged && band === 1) return { cost: 1, gain: 2 };
  if (tagged) return { cost: Math.max(1, Math.ceil(band / 2)), gain: 1 };
  return { cost: band, gain: 1 };
}

export function trySpendSkill(character: Character, skill: SkillId): { character: Character; ok: boolean; note: string } {
  const d = derive(character);
  const tagged = (character.tagged ?? []).includes(skill);
  const total = d.skills[skill]?.total ?? 0;
  const { cost, gain } = spendCost(total, tagged);
  const bank = character.skillBank ?? 0;
  if (bank < cost) return { character, ok: false, note: `Need ${cost} skill point${cost === 1 ? "" : "s"}.` };
  const spent = { ...(character.skillSpent ?? {}) };
  spent[skill] = (spent[skill] ?? 0) + gain;
  return {
    character: {
      ...character,
      skillSpent: spent,
      skillBank: bank - cost,
      updatedAt: Date.now(),
    },
    ok: true,
    note: `+${gain}% (−${cost} SP)`,
  };
}

export function tryPickPerk(
  character: Character,
  perk: PerkId,
  tagSkill?: SkillId,
): { character: Character; ok: boolean; note: string } {
  const def = PERK_BY_ID[perk];
  if (!def) return { character, ok: false, note: "Unknown perk." };
  if ((character.perks ?? []).includes(perk)) return { character, ok: false, note: "You already have that." };
  if ((character.perkBank ?? 0) <= 0) return { character, ok: false, note: "No perk waiting." };
  const d = derive(character);
  if (!def.eligible(character, d)) return { character, ok: false, note: `Need ${def.requires}.` };
  let tagged = [...(character.tagged ?? [])];
  let skillBank = character.skillBank ?? 0;
  if (perk === "tag") {
    if (!tagSkill || tagged.includes(tagSkill)) return { character, ok: false, note: "Tag a skill you have not tagged." };
    tagged = [...tagged, tagSkill];
  }
  if (perk === "educated") skillBank += 2;
  return {
    character: {
      ...character,
      perks: [...(character.perks ?? []), perk],
      perkBank: (character.perkBank ?? 0) - 1,
      tagged,
      skillBank,
      updatedAt: Date.now(),
    },
    ok: true,
    note: def.name,
  };
}

export function applyLevelUps(life: RenoLife, character: Character, push: (life: RenoLife, line: string) => void): Character {
  let sheet = {
    ...character,
    perks: character.perks ?? [],
    skillBank: character.skillBank ?? 0,
    perkBank: character.perkBank ?? 0,
  };
  let leveled = false;
  while ((life.xp ?? 0) >= xpToReach(sheet.level + 1) && sheet.level < 99) {
    const before = derive(sheet);
    sheet = { ...sheet, level: sheet.level + 1, updatedAt: Date.now() };
    const after = derive(sheet);
    const gained = after.skillPointsPerLevel;
    sheet = { ...sheet, skillBank: (sheet.skillBank ?? 0) + gained };
    if (sheet.level % after.perkInterval === 0) {
      sheet = { ...sheet, perkBank: (sheet.perkBank ?? 0) + 1 };
    }
    life.hpMax = after.hp;
    life.hp = Math.min(after.hp, life.hp + Math.max(0, after.hp - before.hp));
    push(
      life,
      `Level ${sheet.level}. +${gained} skill points.${sheet.level % after.perkInterval === 0 ? " A perk is due." : ""}`,
    );
    leveled = true;
  }
  return leveled ? sheet : character;
}
