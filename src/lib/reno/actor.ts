import { formatDamage, getItem, type CatalogItem } from "@/lib/special/catalog";
import { derive } from "@/lib/special/engine";
import { ensureLoadout, stackItem } from "@/lib/special/loadout";
import type { Character, SkillId } from "@/lib/special/types";
import type { BoxingRank, Combatant, CombatKind, GangId, ZoneKind } from "./types";
import { foePool } from "./zones";

function skillKey(item?: CatalogItem): Combatant["weaponSkill"] {
  const s = item?.skill;
  if (s === "unarmed") return "unarmed";
  if (s === "meleeWeapons") return "melee";
  return "guns";
}

function damageExpr(item?: CatalogItem): string {
  if (!item) return "1d4+MD";
  const formatted = formatDamage(item, "pnp");
  if (!formatted || formatted === "—" || formatted === "none") return "1d4+MD";
  if (formatted.includes("ammo") && !/^\d/.test(formatted)) return "2d8+4";
  return formatted.replace(/[^0-9dMD+\-]/gi, "") || "1d6+MD";
}

function skillTotal(character: Character, id: SkillId): number {
  return derive(character).skills[id]?.total ?? 0;
}

function burstShots(item?: CatalogItem): number {
  if (!item?.apB) return 0;
  if (!item.mag) return 3;
  if (item.mag >= 100) return 10;
  if (item.mag >= 50) return 8;
  if (item.mag >= 20) return 5;
  return 3;
}

function fastShotAp(base: number | null | undefined, fast: boolean): number | null {
  if (base == null) return null;
  return fast ? Math.max(1, base - 1) : base;
}

export function playerCombatant(
  character: Character,
  opts?: { boxing?: boolean; trainBonus?: number; hp?: number },
): Combatant {
  const d = derive(character);
  const loadout = ensureLoadout(character.loadout);
  const right = stackItem(loadout, loadout.right);
  const left = stackItem(loadout, loadout.left);
  const fists = getItem("fists");
  const boxing = opts?.boxing ?? false;
  const gloveItem =
    loadout.pack.find((s) => s.itemId === "plated-boxing") ??
    loadout.pack.find((s) => s.itemId === "boxing-gloves");
  const gloves = gloveItem ? getItem(gloveItem.itemId) : getItem("fists");
  const gunHand =
    (right && skillKey(right) === "guns" ? right : null) ??
    (left && skillKey(left) === "guns" ? left : null);
  const weapon = boxing ? (gloves ?? fists) : (gunHand ?? right ?? left ?? fists);
  const ws = boxing ? "unarmed" : skillKey(weapon);
  const unarmed = skillTotal(character, "unarmed") + (opts?.trainBonus ?? 0);
  const melee = skillTotal(character, "meleeWeapons");
  const gunSkill =
    weapon?.skill === "bigGuns"
      ? skillTotal(character, "bigGuns")
      : weapon?.skill === "energyWeapons"
        ? skillTotal(character, "energyWeapons")
        : weapon?.skill === "throwing"
          ? skillTotal(character, "throwing")
          : skillTotal(character, "smallGuns");
  const traits = character.traits ?? [];
  const perks = character.perks ?? [];
  const fast = traits.includes("fastShot") && ws === "guns";
  const bof = perks.includes("bonusRateOfFire") && ws === "guns";
  const apS = boxing ? 3 : (weapon?.apS ?? 3);
  const apT = boxing ? 4 : weapon?.apT ?? (weapon?.apS != null ? weapon.apS + 1 : 4);
  const apB = boxing ? null : (weapon?.apB ?? null);
  const mag = boxing ? 0 : (weapon?.mag ?? 0);
  const shotAp = Math.max(1, (fastShotAp(apS, fast) ?? 3) - (bof ? 1 : 0));
  const hth = perks.includes("bonusHthDamage") && (ws === "unarmed" || ws === "melee");
  const ranged = perks.includes("bonusRangedDamage") && ws === "guns";

  const baseAc = boxing ? d.special.AG : d.ac;
  return {
    id: "player",
    name: character.name.trim() || "You",
    player: true,
    hp: opts?.hp ?? d.hp,
    hpMax: d.hp,
    ap: d.ap,
    apMax: d.ap,
    ac: baseAc,
    baseAc,
    leftoverAc: 0,
    dt: boxing ? 0 : d.gearDt,
    dr: boxing ? 0 : d.gearDr,
    sequence: d.sequence,
    pe: d.special.PE,
    st: d.special.STR,
    en: d.special.EN,
    lk: d.special.LK,
    unarmed,
    melee,
    guns: gunSkill,
    md: d.meleeDamage + (hth ? 2 : 0) + (ranged ? 2 : 0),
    crit: d.criticalChance,
    finesse: traits.includes("finesse"),
    fastShot: fast,
    nightPerson: traits.includes("nightPerson"),
    weaponName: weapon?.name ?? "Fists and Feet",
    weaponId: weapon?.id ?? "fists",
    armorId: "",
    weaponSkill: ws,
    dmg: boxing ? damageExpr(gloves ?? fists) : damageExpr(weapon),
    apCost: shotAp,
    apAimed: fast ? null : apT,
    apBurst: fastShotAp(apB, fast),
    burstShots: burstShots(weapon),
    weaponRange: boxing ? 1 : Math.max(1, weapon?.rng ?? 1),
    minSt: weapon?.minSt ?? 1,
    weaponWeight: weapon?.weight ?? 0,
    mag,
    loaded: mag,
    stance: "standing",
    down: false,
    cover: 0,
    crippled: {},
    hexQ: 0,
    hexR: 0,
    kind: "player",
    side: "player",
    fled: false,
  };
}

export interface FoeTemplate {
  id: string;
  name: string;
  hp: number;
  ap: number;
  ac: number;
  dt: number;
  dr: number;
  sequence: number;
  pe?: number;
  st?: number;
  en?: number;
  lk?: number;
  unarmed: number;
  melee: number;
  guns: number;
  md: number;
  crit: number;
  weaponId: string;
}

export const FOES: Record<string, FoeTemplate> = {
  junkie: {
    id: "junkie",
    name: "Jet junkie",
    hp: 18,
    ap: 7,
    ac: 6,
    dt: 0,
    dr: 0,
    sequence: 8,
    unarmed: 45,
    melee: 35,
    guns: 20,
    md: 1,
    crit: 4,
    weaponId: "switchblade",
  },
  tough: {
    id: "tough",
    name: "Street tough",
    hp: 28,
    ap: 8,
    ac: 8,
    dt: 0,
    dr: 20,
    sequence: 10,
    unarmed: 50,
    melee: 45,
    guns: 40,
    md: 2,
    crit: 5,
    weaponId: "10mm-pistol",
  },
  cop: {
    id: "cop",
    name: "Reno cop",
    hp: 32,
    ap: 8,
    ac: 10,
    dt: 2,
    dr: 25,
    sequence: 12,
    unarmed: 40,
    melee: 35,
    guns: 55,
    md: 1,
    crit: 5,
    weaponId: "pump-shotgun",
  },
  mordino: {
    id: "mordino",
    name: "Little Jesus' runner",
    hp: 26,
    ap: 8,
    ac: 8,
    dt: 0,
    dr: 20,
    sequence: 10,
    unarmed: 40,
    melee: 40,
    guns: 45,
    md: 1,
    crit: 5,
    weaponId: "9mm-beretta",
  },
  wright: {
    id: "wright",
    name: "Wright cousin",
    hp: 30,
    ap: 8,
    ac: 7,
    dt: 0,
    dr: 15,
    sequence: 8,
    unarmed: 55,
    melee: 50,
    guns: 30,
    md: 3,
    crit: 5,
    weaponId: "slugger",
  },
  salvatore: {
    id: "salvatore",
    name: "Mason's soldier",
    hp: 34,
    ap: 8,
    ac: 10,
    dt: 2,
    dr: 25,
    sequence: 12,
    unarmed: 35,
    melee: 40,
    guns: 60,
    md: 1,
    crit: 6,
    weaponId: "wattz-1000",
  },
  bishop: {
    id: "bishop",
    name: "Bishop bodyguard",
    hp: 36,
    ap: 9,
    ac: 12,
    dt: 2,
    dr: 30,
    sequence: 14,
    unarmed: 45,
    melee: 40,
    guns: 55,
    md: 2,
    crit: 6,
    weaponId: "colt-45",
  },
  ghoul: {
    id: "ghoul",
    name: "Golgotha ghoul",
    hp: 40,
    ap: 7,
    ac: 6,
    dt: 2,
    dr: 10,
    sequence: 6,
    unarmed: 50,
    melee: 45,
    guns: 10,
    md: 3,
    crit: 4,
    weaponId: "shovel",
  },
  mutant: {
    id: "mutant",
    name: "Yard mutant",
    hp: 70,
    ap: 8,
    ac: 8,
    dt: 4,
    dr: 30,
    sequence: 8,
    unarmed: 60,
    melee: 65,
    guns: 40,
    md: 6,
    crit: 4,
    weaponId: "sledgehammer",
  },
  palooka: {
    id: "palooka",
    name: "Palooka Pete",
    hp: 24,
    ap: 8,
    ac: 6,
    dt: 0,
    dr: 0,
    sequence: 10,
    unarmed: 45,
    melee: 20,
    guns: 5,
    md: 2,
    crit: 4,
    weaponId: "boxing-gloves",
  },
  slag: {
    id: "slag",
    name: "Kid Slag",
    hp: 32,
    ap: 9,
    ac: 8,
    dt: 0,
    dr: 0,
    sequence: 12,
    unarmed: 55,
    melee: 20,
    guns: 5,
    md: 3,
    crit: 5,
    weaponId: "boxing-gloves",
  },
  moe: {
    id: "moe",
    name: "Iron Moe",
    hp: 44,
    ap: 9,
    ac: 9,
    dt: 0,
    dr: 0,
    sequence: 12,
    unarmed: 65,
    melee: 25,
    guns: 5,
    md: 4,
    crit: 6,
    weaponId: "plated-boxing",
  },
  juicer: {
    id: "juicer",
    name: "The Juicer",
    hp: 56,
    ap: 10,
    ac: 10,
    dt: 0,
    dr: 0,
    sequence: 14,
    unarmed: 75,
    melee: 30,
    guns: 5,
    md: 5,
    crit: 8,
    weaponId: "plated-boxing",
  },
  drunk: {
    id: "drunk",
    name: "Strip drunk",
    hp: 20,
    ap: 7,
    ac: 5,
    dt: 0,
    dr: 0,
    sequence: 6,
    unarmed: 35,
    melee: 30,
    guns: 15,
    md: 1,
    crit: 3,
    weaponId: "switchblade",
  },
  tourist: {
    id: "tourist",
    name: "NCR tourist",
    hp: 16,
    ap: 7,
    ac: 5,
    dt: 0,
    dr: 0,
    sequence: 8,
    unarmed: 20,
    melee: 15,
    guns: 25,
    md: 1,
    crit: 4,
    weaponId: "10mm-pistol",
  },
  pimp: {
    id: "pimp",
    name: "Calico's man",
    hp: 30,
    ap: 8,
    ac: 8,
    dt: 0,
    dr: 15,
    sequence: 10,
    unarmed: 40,
    melee: 40,
    guns: 50,
    md: 2,
    crit: 5,
    weaponId: "10mm-pistol",
  },
  dealer: {
    id: "dealer",
    name: "Alley dealer",
    hp: 22,
    ap: 8,
    ac: 7,
    dt: 0,
    dr: 10,
    sequence: 10,
    unarmed: 35,
    melee: 40,
    guns: 30,
    md: 1,
    crit: 5,
    weaponId: "switchblade",
  },
  punk: {
    id: "punk",
    name: "Virgin punk",
    hp: 24,
    ap: 8,
    ac: 6,
    dt: 0,
    dr: 10,
    sequence: 10,
    unarmed: 45,
    melee: 40,
    guns: 20,
    md: 2,
    crit: 4,
    weaponId: "switchblade",
  },
  raider: {
    id: "raider",
    name: "Yard raider",
    hp: 34,
    ap: 8,
    ac: 8,
    dt: 2,
    dr: 20,
    sequence: 10,
    unarmed: 40,
    melee: 45,
    guns: 50,
    md: 2,
    crit: 5,
    weaponId: "pump-shotgun",
  },
  merc: {
    id: "merc",
    name: "Hired gun",
    hp: 32,
    ap: 9,
    ac: 10,
    dt: 2,
    dr: 25,
    sequence: 12,
    unarmed: 35,
    melee: 35,
    guns: 60,
    md: 2,
    crit: 6,
    weaponId: "colt-45",
  },
  creep: {
    id: "creep",
    name: "Alley creep",
    hp: 22,
    ap: 8,
    ac: 6,
    dt: 0,
    dr: 0,
    sequence: 8,
    unarmed: 40,
    melee: 45,
    guns: 10,
    md: 2,
    crit: 4,
    weaponId: "switchblade",
  },
  cheat: {
    id: "cheat",
    name: "Card cheat",
    hp: 18,
    ap: 8,
    ac: 6,
    dt: 0,
    dr: 0,
    sequence: 10,
    unarmed: 30,
    melee: 35,
    guns: 35,
    md: 1,
    crit: 6,
    weaponId: "9mm-beretta",
  },
  john: {
    id: "john",
    name: "Nervous john",
    hp: 20,
    ap: 7,
    ac: 6,
    dt: 0,
    dr: 0,
    sequence: 8,
    unarmed: 25,
    melee: 20,
    guns: 30,
    md: 1,
    crit: 4,
    weaponId: "10mm-pistol",
  },
  bouncer: {
    id: "bouncer",
    name: "Casino bouncer",
    hp: 38,
    ap: 8,
    ac: 10,
    dt: 2,
    dr: 20,
    sequence: 10,
    unarmed: 60,
    melee: 50,
    guns: 30,
    md: 3,
    crit: 5,
    weaponId: "slugger",
  },
};

function kitArmor(dt: number, dr: number): string {
  if (dt >= 5) return "combat-armor";
  if (dt >= 4) return "metal-armor";
  if (dt >= 2) return "leather-armor";
  if (dr >= 15) return "leather-jacket";
  return "";
}

export function combatantFromFoe(template: FoeTemplate): Combatant {
  const weapon = getItem(template.weaponId);
  const mag = weapon?.mag ?? 0;
  const pe = template.pe ?? Math.round(template.sequence / 2);
  return {
    id: template.id,
    name: template.name,
    player: false,
    side: "foe",
    hp: template.hp,
    hpMax: template.hp,
    ap: template.ap,
    apMax: template.ap,
    ac: template.ac,
    baseAc: template.ac,
    leftoverAc: 0,
    dt: template.dt,
    dr: template.dr,
    sequence: template.sequence,
    pe,
    st: template.st ?? Math.max(4, weapon?.minSt ?? 4),
    en: template.en ?? 5,
    lk: template.lk ?? Math.max(2, Math.round(template.crit / 2)),
    unarmed: template.unarmed,
    melee: template.melee,
    guns: template.guns,
    md: template.md,
    crit: template.crit,
    finesse: false,
    fastShot: false,
    nightPerson: false,
    weaponName: weapon?.name ?? template.weaponId,
    weaponId: template.weaponId,
    armorId: kitArmor(template.dt, template.dr),
    weaponSkill: skillKey(weapon),
    dmg: damageExpr(weapon),
    apCost: weapon?.apS ?? 3,
    apAimed: weapon?.apT ?? (weapon?.apS != null ? weapon.apS + 1 : 4),
    apBurst: weapon?.apB ?? null,
    burstShots: burstShots(weapon),
    weaponRange: Math.max(1, weapon?.rng ?? 1),
    minSt: weapon?.minSt ?? 1,
    weaponWeight: weapon?.weight ?? 1,
    mag,
    loaded: mag,
    stance: "standing",
    down: false,
    fled: false,
    cover: 0,
    crippled: {},
    hexQ: 0,
    hexR: 0,
    kind: template.id,
  };
}

export function boxingFoe(rank: BoxingRank): Combatant {
  const id = rank === "champion" ? "juicer" : rank === "title" ? "moe" : rank === "contender" ? "slag" : "palooka";
  const foe = combatantFromFoe(FOES[id]!);
  foe.weaponSkill = "unarmed";
  foe.weaponRange = 1;
  foe.apBurst = null;
  return foe;
}

export function streetFoe(kind: CombatKind, districtDanger: number, gang?: string): Combatant {
  if (kind === "raid" && districtDanger >= 9) return combatantFromFoe(FOES.ghoul!);
  if (districtDanger >= 8 && Math.random() < 0.25) return combatantFromFoe(FOES.mutant!);
  if (gang === "mordinos") return combatantFromFoe(FOES.mordino!);
  if (gang === "wrights") return combatantFromFoe(FOES.wright!);
  if (gang === "salvatores") return combatantFromFoe(FOES.salvatore!);
  if (gang === "bishops") return combatantFromFoe(FOES.bishop!);
  if (districtDanger >= 6) return combatantFromFoe(FOES.tough!);
  if (districtDanger >= 4) return combatantFromFoe(Math.random() < 0.4 ? FOES.cop! : FOES.tough!);
  return combatantFromFoe(FOES.junkie!);
}

export function streetFoeAt(zone: ZoneKind, gang?: GangId, night?: boolean): Combatant {
  const pool = foePool(zone, gang, night);
  const id = pool[Math.floor(Math.random() * pool.length)] ?? "tough";
  return combatantFromFoe(FOES[id] ?? FOES.tough!);
}

const GANG_ALLY: Record<GangId, { kind: string; name: string }> = {
  mordinos: { kind: "mordino", name: "Mordino cousin" },
  wrights: { kind: "wright", name: "Wright cousin" },
  salvatores: { kind: "salvatore", name: "Salvatore gun" },
  bishops: { kind: "bishop", name: "Bishop gun" },
};

function allyFrom(kind: string, index: number, name: string): Combatant {
  const ally = combatantFromFoe(FOES[kind] ?? FOES.tough!);
  ally.side = "ally";
  ally.player = false;
  ally.id = `ally-${kind}-${index}`;
  ally.name = name;
  return ally;
}

/** Someone already on your side of a random street fight. Full sheet, not a tag. */
export function rollStreetAllies(gangId: GangId | null): Combatant[] {
  const chance = gangId ? 46 : 30;
  if (Math.random() * 100 > chance) return [];
  const allies: Combatant[] = [];
  if (gangId) {
    const family = GANG_ALLY[gangId];
    allies.push(allyFrom(family.kind, 0, family.name));
    if (Math.random() < 0.35) allies.push(allyFrom("tough", 1, "Local muscle"));
  } else {
    const merc = Math.random() < 0.55;
    allies.push(allyFrom(merc ? "merc" : "tough", 0, merc ? "A merc with a grudge" : "Street hand"));
  }
  return allies;
}

export const FOE_TOKEN: Record<string, string> = {
  player: "/reno/tokens/player.webp",
  junkie: "/reno/tokens/junkie.webp",
  cop: "/reno/tokens/cop.webp",
  tough: "/reno/tokens/gangster.webp",
  mordino: "/reno/tokens/gangster.webp",
  wright: "/reno/tokens/gangster.webp",
  salvatore: "/reno/tokens/gangster.webp",
  bishop: "/reno/tokens/gangster.webp",
  pimp: "/reno/tokens/gangster.webp",
  dealer: "/reno/tokens/junkie.webp",
  punk: "/reno/tokens/gangster.webp",
  raider: "/reno/tokens/gangster.webp",
  merc: "/reno/tokens/cop.webp",
  creep: "/reno/tokens/junkie.webp",
  cheat: "/reno/tokens/gangster.webp",
  john: "/reno/tokens/ped-man.webp",
  bouncer: "/reno/tokens/gangster.webp",
  drunk: "/reno/tokens/ped-man.webp",
  tourist: "/reno/tokens/ped-man.webp",
  ghoul: "/reno/tokens/junkie.webp",
  mutant: "/reno/tokens/gangster.webp",
  palooka: "/reno/tokens/ped-man.webp",
  slag: "/reno/tokens/ped-man.webp",
  moe: "/reno/tokens/ped-man.webp",
  juicer: "/reno/tokens/ped-man.webp",
};

