import type { Character, SkillId } from "@/lib/special/types";
import { derive } from "@/lib/special/engine";
import { consumeItem, countItem } from "@/lib/special/loadout";
import { getItem } from "@/lib/special/catalog";
import { boxingFoe, combatantFromFoe, FOES, playerCombatant } from "./actor";
import { angelaHook, angelaOpen, angelaPresent, angelaReply, gangRankName } from "./angela";
import { applyLevelUps, tryPickPerk, trySpendSkill } from "./advance";
import { foeOf, playMove, playerOf, sideOf, startCombat } from "./combat";
import { generateEncounter, hexKey } from "./hex";
import { applyLoot, lootSummary, rollLoot } from "./loot";
import { BUILDING_BY_ID, zoneAt } from "./city";
import { advanceCityHour, bookDrink, bookWager, ensurePulse } from "./city-sim";
import { selectEncounter, type EncounterActivity, type EncounterPick } from "./encounters";
import { factionBrief, districtName, npcFor, remember } from "./street";
import { handleStreetInteraction, type StreetActor } from "./interact";
import { ensureIntel, guardCount } from "./intel";
import { settingFromZone, ZONE_LABEL } from "./zones";
import { d100, dN, skillRoll, clamp } from "./dice";
import { attentionMult, hustleHours, sneakCover, BUSINESS_COST, COOK_COST, DEAL_OPEN_STOCK, DEAL_RUN_STOCK, LAB_COST } from "./sneak";
import {
  HEX_METERS,
  SOUL_BY_ID,
  claimSlot,
  clockMinute,
  ensureCity,
  fightRadius,
  worldToHex,
} from "./ecosystem";
import type { ChemId, Combatant, DistrictId, GangId, HousingId, RenoAction, RenoLife, StashId } from "./types";
import {
  BOXING_ORDER,
  CHEMS,
  DISTRICT_BY_ID,
  DISTRICT_POS,
  GANG_BY_ID,
  HOUSING,
  HOUSING_BY_ID,
  STASH_META,
  boxingPurse,
  emptyAngela,
  emptyStash,
  lightingFromSetting,
  isNight,
  lightingOf,
} from "./world";

export interface SimResult {
  life: RenoLife;
  character: Character;
}

function cloneLife(life: RenoLife): RenoLife {
  return ensureCity({
    ...life,
    gangRep: { ...life.gangRep },
    addicted: { ...life.addicted },
    log: [...life.log],
    combat: life.combat
      ? {
          ...life.combat,
          combatants: life.combat.combatants.map((c) => ({ ...c, crippled: { ...c.crippled } })),
          log: [...life.combat.log],
          order: [...life.combat.order],
        }
      : null,
    dialogue: life.dialogue ? { ...life.dialogue } : null,
    sighting: life.sighting
      ? {
          ...life.sighting,
          foeIds: [...life.sighting.foeIds],
          foeNames: [...life.sighting.foeNames],
          allyIds: [...(life.sighting.allyIds ?? [])],
          allyNames: [...(life.sighting.allyNames ?? [])],
          foeKinds: [...(life.sighting.foeKinds ?? [])],
          allyKinds: [...(life.sighting.allyKinds ?? [])],
          placements: life.sighting.placements.map((p) => ({ ...p })),
          map: { ...life.sighting.map, cells: life.sighting.map.cells.map((c) => ({ ...c })) },
        }
      : null,
    angela: { ...(life.angela ?? emptyAngela()) },
    posX: life.posX ?? DISTRICT_POS[life.district]?.x ?? 0,
    posZ: life.posZ ?? DISTRICT_POS[life.district]?.z ?? 0,
    stash: { ...emptyStash(), ...life.stash },
    minute: life.minute ?? 0,
    loot: life.loot
      ? { ...life.loot, log: [...life.loot.log], drops: life.loot.drops.map((d) => ({ ...d })), foeNames: [...life.loot.foeNames] }
      : null,
    inspecting: life.inspecting ?? null,
    insideId: life.insideId ?? null,
    npcMemory: { ...(life.npcMemory ?? {}) },
    job: life.job ? { ...life.job } : null,
    worldDay: life.worldDay ?? 0,
    fear: life.fear ?? 0,
    regard: life.regard ?? 0,
    warrant: life.warrant ?? 0,
    strain: life.strain ?? 0,
    tension: life.tension ?? 50,
    friction: {
      mordinos: life.friction?.mordinos ?? 0,
      wrights: life.friction?.wrights ?? 0,
      salvatores: life.friction?.salvatores ?? 0,
      bishops: life.friction?.bishops ?? 0,
    },
    grudges: { ...(life.grudges ?? {}) },
    absent: { ...(life.absent ?? {}) },
    reprieveMinute: life.reprieveMinute ?? 0,
    lastDose: { ...(life.lastDose ?? {}) },
    hunger: life.hunger ?? 22,
    thirst: life.thirst ?? 18,
    fatigue: life.fatigue ?? 12,
    boredom: life.boredom ?? 28,
    xp: life.xp ?? 0,
    dealers: (life.dealers ?? []).map((d) => ({ ...d, wares: [...d.wares] })),
    marks: (life.marks ?? []).map((m) => ({ ...m })),
    soughtDealer: life.soughtDealer ?? null,
    soughtMark: life.soughtMark ?? null,
    business: life.business ? { ...life.business } : null,
    dealing: Boolean(life.dealing),
    lab: Boolean(life.lab),
    pressureDay: life.pressureDay ?? 0,
    rations: life.rations ?? 0,
    waters: life.waters ?? 0,
  });
}

function push(life: RenoLife, line: string) {
  life.log.unshift(line);
  if (life.log.length > 40) life.log.length = 40;
}

function skill(character: Character, id: SkillId): number {
  return derive(character).skills[id]?.total ?? 0;
}

function housingOf(life: RenoLife) {
  return life.housingId ? HOUSING_BY_ID[life.housingId] : null;
}

function housingDanger(life: RenoLife): number {
  const home = housingOf(life);
  if (!home) return 6;
  if (home.kind === "squat" && life.squatProgress >= 100) return Math.max(1, Math.round(home.danger / 2));
  return home.danger;
}

function hasPerk(character: Character, id: string): boolean {
  return (character.perks ?? []).includes(id as Character["perks"][number]);
}

function award(life: RenoLife, character: Character, amount: number, why: string): Character {
  const extra = hasPerk(character, "fortuneFinder") ? Math.round(amount * 0.15) : 0;
  const total = amount + extra;
  life.xp = (life.xp ?? 0) + total;
  push(life, `${why} +${total} XP.`);
  return applyLevelUps(life, character, push);
}

function needPen(life: RenoLife): number {
  let n = 0;
  const strained = (life.strain ?? 0) >= 180;
  if (strained && (life.hunger ?? 0) >= 86) n -= 8;
  if (strained && (life.thirst ?? 0) >= 86) n -= 8;
  if (strained && (life.fatigue ?? 0) >= 86) n -= 10;
  for (const [id, intensity] of Object.entries(life.addicted ?? {})) {
    if (!intensity) continue;
    const last = life.lastDose?.[id as StashId] ?? 0;
    if (life.day - last >= 2) n -= 6 + intensity * 2;
  }
  return n;
}

function rollSkill(character: Character, life: RenoLife, id: SkillId, extra = 0) {
  return skillRoll(skill(character, id) + needPen(life), extra);
}

function dose(life: RenoLife, character: Character, stash: StashId): string | null {
  if ((life.stash[stash] ?? 0) <= 0) return `No ${STASH_META[stash].name} in the pack.`;
  life.stash[stash] -= 1;
  life.lastDose = { ...(life.lastDose ?? {}), [stash]: life.day };
  const reliant = character.traits.includes("chemReliant");
  const resist = character.traits.includes("chemResistant");
  const chance = clamp(18 + (reliant ? 22 : 0) - (resist ? 30 : 0) + (life.addicted[stash] ?? 0) * 8, 3, 85);
  if (d100() <= chance) {
    life.addicted[stash] = clamp((life.addicted[stash] ?? 0) + 1, 1, 3);
    return `The ${STASH_META[stash].name} takes. Addiction ${life.addicted[stash]}.`;
  }
  return null;
}

function beginGuardFight(
  life: RenoLife,
  character: Character,
  mark: { wealth: number; gang?: GangId; name: string },
  reason: string,
) {
  const n = guardCount(mark.wealth);
  const kind =
    mark.gang === "mordinos"
      ? "mordino"
      : mark.gang === "wrights"
        ? "wright"
        : mark.gang === "salvatores"
          ? "salvatore"
          : mark.gang === "bishops"
            ? "bishop"
            : "bouncer";
  const foes = [];
  for (let i = 0; i < n; i++) {
    const foe = combatantFromFoe(FOES[kind] ?? FOES.bouncer!);
    foe.id = `${kind}-${i}`;
    foes.push(foe);
  }
  const player = playerCombatant(character, { hp: life.hp, trainBonus: life.trainBonus });
  player.hp = life.hp;
  const night = isNight(life);
  const setting = settingFromZone(zoneAt(life.posX, life.posZ), night);
  const layout = generateEncounter({ setting, surprise: false, foeCount: foes.length, night });
  player.hexQ = layout.player.q;
  player.hexR = layout.player.r;
  foes.forEach((foe, i) => {
    const slot = layout.foes[i] ?? layout.foes[0]!;
    foe.hexQ = slot.q;
    foe.hexR = slot.r;
  });
  const light = lightingFromSetting(setting, night);
  const lighting = hasPerk(character, "nightVision") ? Math.round(light.penalty / 2) : light.penalty;
  life.combat = placeOnStreet(
    life,
    startCombat({
    kind: "raid",
    player,
    foes,
    lighting,
    lightingLabel: light.label,
    initiator: "player",
    map: layout.map,
    }),
    "crime",
  );
  life.sighting = null;
  push(life, `${reason} ${n} guard${n === 1 ? "" : "s"} for ${mark.name}.`);
}

function tickNeeds(life: RenoLife, mins: number) {
  life.hunger = clamp((life.hunger ?? 22) + mins / 52, 0, 100);
  life.thirst = clamp((life.thirst ?? 18) + mins / 40, 0, 100);
  life.fatigue = clamp((life.fatigue ?? 12) + mins / 48, 0, 100);
  life.boredom = clamp((life.boredom ?? 28) + mins / 90, 0, 100);
  const ugly =
    (life.hunger >= 86 ? 1 : 0) + (life.thirst >= 86 ? 1 : 0) + (life.fatigue >= 86 ? 1 : 0);
  if (ugly > 0) life.strain = (life.strain ?? 0) + mins;
  else life.strain = Math.max(0, (life.strain ?? 0) - mins);
}

const PACK_FOOD = ["iguana-stick", "fruit"];
const PACK_DRINK = ["water-flask", "nuka-cola"];

interface Pantry {
  character: Character;
  buy: boolean;
  meals: number;
  waters: number;
  boughtMeals: number;
  boughtWaters: number;
  spent: number;
  fromPack: string[];
}

let pantry: Pantry | null = null;

function mealCost(character: Character): number {
  return hasPerk(character, "masterTrader") ? 10 : 12;
}

function waterCost(character: Character): number {
  return hasPerk(character, "masterTrader") ? 3 : 4;
}

function takePacked(ids: string[]): string | null {
  if (!pantry) return null;
  for (const id of ids) {
    if (countItem(pantry.character.loadout, id) <= 0) continue;
    const next = consumeItem(pantry.character.loadout, id, 1);
    if (!next) continue;
    pantry.character = { ...pantry.character, loadout: next, updatedAt: Date.now() };
    return getItem(id)?.name ?? id;
  }
  return null;
}

function settlePantry(life: RenoLife) {
  if (!pantry) return;
  while ((life.hunger ?? 0) >= 72) {
    if ((life.rations ?? 0) > 0) {
      life.rations -= 1;
      life.hunger = clamp(life.hunger - 48, 0, 100);
      pantry.meals += 1;
      continue;
    }
    const packed = takePacked(PACK_FOOD);
    if (packed) {
      life.hunger = clamp(life.hunger - 48, 0, 100);
      pantry.fromPack.push(packed);
      continue;
    }
    if (pantry.buy) {
      const price = mealCost(pantry.character);
      if (life.caps >= price) {
        life.caps -= price;
        life.hunger = clamp(life.hunger - 48, 0, 100);
        pantry.boughtMeals += 1;
        pantry.spent += price;
        continue;
      }
    }
    break;
  }
  while ((life.thirst ?? 0) >= 72) {
    if ((life.waters ?? 0) > 0) {
      life.waters -= 1;
      life.thirst = clamp(life.thirst - 52, 0, 100);
      pantry.waters += 1;
      continue;
    }
    const packed = takePacked(PACK_DRINK);
    if (packed) {
      life.thirst = clamp(life.thirst - 52, 0, 100);
      pantry.fromPack.push(packed);
      continue;
    }
    if (pantry.buy) {
      const price = waterCost(pantry.character);
      if (life.caps >= price) {
        life.caps -= price;
        life.thirst = clamp(life.thirst - 52, 0, 100);
        pantry.boughtWaters += 1;
        pantry.spent += price;
        continue;
      }
    }
    break;
  }
}

function pantryLine(): string | null {
  if (!pantry) return null;
  const bits: string[] = [];
  if (pantry.meals) bits.push(`${pantry.meals} packed meal${pantry.meals === 1 ? "" : "s"}`);
  if (pantry.waters) bits.push(`${pantry.waters} canteen${pantry.waters === 1 ? "" : "s"}`);
  if (pantry.fromPack.length) bits.push(pantry.fromPack.join(", "));
  if (pantry.boughtMeals || pantry.boughtWaters) {
    const bought: string[] = [];
    if (pantry.boughtMeals) bought.push(`${pantry.boughtMeals} plate${pantry.boughtMeals === 1 ? "" : "s"}`);
    if (pantry.boughtWaters) bought.push(`${pantry.boughtWaters} water${pantry.boughtWaters === 1 ? "" : "s"}`);
    bits.push(`bought ${bought.join(" and ")} for ${pantry.spent} caps`);
  }
  if (!bits.length) return null;
  return `You ate and drank as it came due: ${bits.join("; ")}.`;
}

function tickMinutes(life: RenoLife, mins: number) {
  let left = Math.max(0, Math.round(mins));
  while (left > 0) {
    const intoHour = 60 - (life.minute ?? 0);
    const step = Math.min(left, intoHour <= 0 ? 60 : intoHour);
    tickNeeds(life, step);
    if (pantry) settlePantry(life);
    life.minute = (life.minute ?? 0) + step;
    left -= step;
    if (life.minute < 60) continue;
    life.minute -= 60;
    life.hour += 1;
    driftHour(life);
    if ((life.strain ?? 0) >= 360 && (life.hunger >= 94 || life.thirst >= 96)) life.hp = Math.max(1, life.hp - 1);
    if (life.hour >= 24) {
      life.hour -= 24;
      life.day += 1;
      payWeeklyRent(life);
      if ((life.strain ?? 0) >= 360 && life.hunger >= 86) push(life, "Hunger has been sitting long enough to matter. The city still does not feed you.");
      if ((life.strain ?? 0) >= 360 && life.thirst >= 86) push(life, "Thirst has gone from dry to mean.");
      if (life.fatigue >= 90 && (life.strain ?? 0) >= 240) push(life, "You have not slept. It took this long to swim.");
      if (life.boredom >= 90) push(life, "Boredom, slow as a watch. Reno will invent a problem if you do not.");
      runWorldDay(life, rollingSheet);
    }
  }
}

function tick(life: RenoLife, hours: number) {
  tickMinutes(life, Math.max(1, Math.round(hours * 60)));
}

function driftHour(life: RenoLife) {
  const sneak = rollingSheet ? skill(rollingSheet, "sneak") : 40;
  const leak = sneak >= 100 ? 0.025 : sneak >= 75 ? 0.04 : sneak >= 50 ? 0.06 : 0.09;
  const gap = life.heat - (life.warrant ?? 0);
  life.warrant = clamp((life.warrant ?? 0) + gap * leak, 0, 100);
  life.heat = clamp(life.heat - 0.15, 0, 100);
  life.fear = Math.max(0, (life.fear ?? 0) - 0.12);
  const regardTarget = clamp(life.fame - Math.floor((life.fear ?? 0) / 5), 0, 100);
  if ((life.regard ?? 0) < regardTarget) life.regard = Math.min(regardTarget, (life.regard ?? 0) + 1);
  else if ((life.regard ?? 0) > regardTarget) life.regard = Math.max(regardTarget, (life.regard ?? 0) - 1);
  const before = life.tension ?? 0;
  life.tension = clamp(before + 0.34 - 0.12, 0, 100);
  if (before < 48 && life.tension >= 48) {
    push(life, "Rival crews are walking. Not a random knife. Their temperature finally got them onto the same road.");
  }
  for (const id of ["mordinos", "wrights", "salvatores", "bishops"] as GangId[]) {
    life.friction[id] = Math.max(0, (life.friction[id] ?? 0) - 0.15);
  }
  const news = advanceCityHour(life);
  if (news) push(life, news);
}

function addFame(life: RenoLife, amount: number, loud = false): number {
  if (amount <= 0) {
    life.fame = Math.max(0, life.fame + amount);
    return amount;
  }
  const gain = Math.max(1, Math.min(loud ? 3 : 2, Math.round(amount * 0.45)));
  life.fame = clamp(life.fame + gain, 0, 100);
  return gain;
}

function noteOutrage(life: RenoLife, gang: GangId | undefined, n: number) {
  life.fear = clamp((life.fear ?? 0) + Math.min(6, Math.max(1, Math.round(n * 0.45))), 0, 100);
  life.tension = clamp((life.tension ?? 0) + Math.min(4, Math.max(1, Math.round(n * 0.25))), 0, 100);
  if (gang) life.friction[gang] = clamp((life.friction[gang] ?? 0) + Math.max(1, Math.round(n * 0.55)), 0, 100);
}

function placeOnStreet(life: RenoLife, combat: NonNullable<RenoLife["combat"]>, cause: NonNullable<RenoLife["combat"]>["cause"]) {
  combat.onMap = true;
  combat.originX = life.posX;
  combat.originZ = life.posZ;
  combat.hexScale = HEX_METERS;
  combat.cause = cause;
  return combat;
}

function grantReprieve(life: RenoLife, minutes: number) {
  life.reprieveMinute = clockMinute(life) + minutes;
}

let rollingSheet: Character | null = null;

function runWorldDay(life: RenoLife, character: Character | null) {
  if ((life.worldDay ?? 0) >= life.day) return;
  life.worldDay = life.day;
  for (const line of factionBrief(life.day, life.district)) push(life, line);
  if (life.business) {
    const take = 40 + ((life.day * 17) % 50);
    const help = 12 + (life.day % 9);
    life.caps += Math.max(0, take - help);
    push(life, `${life.business.name} took in ${take} caps and paid the help ${help}. You were not behind the counter.`);
  }
  if (life.dealing) {
    const sneak = character ? skill(character, "sneak") : 40;
    const lk = character ? derive(character).special.LK : 5;
    const sold = 1 + (life.day + lk) % 3;
    const have = life.stash.jet ?? 0;
    const moved = Math.min(have, sold);
    if (moved > 0) {
      life.stash.jet -= moved;
      const pay = moved * (40 + lk * 2);
      life.caps += pay;
      const heat = Math.max(1, Math.round((6 * moved * (100 - Math.min(90, sneak))) / 100));
      life.heat = clamp(life.heat + heat, 0, 100);
      push(
        life,
        `A buyer found the stash without you. −${moved} Jet, +${pay} caps. Heat +${heat}. Sneak ${sneak} ${sneak >= 75 ? "kept it quiet" : sneak >= 50 ? "bought you time" : "left a trail"}.`,
      );
    } else {
      push(life, "Your corner had a buyer and no Jet. They will remember the empty hand.");
    }
  }
  if (life.lab && character) {
    push(life, "The lab sat cold overnight. Product does not cook itself. You still owe the room its rent in attention.");
  }
  if (!life.job && life.day % 5 === 0) {
    push(life, "A courier missed a drop on the east side. The bag is gone. The story is not.");
  }
}

function payWeeklyRent(life: RenoLife) {
  const home = housingOf(life);
  if (!home || home.kind !== "rent" || home.rent <= 0) return;
  const week = Math.floor((life.day - 1) / 7);
  if (week <= (life.rentPaidWeek ?? 0) || week === 0) return;
  if (life.caps >= home.rent) {
    life.caps -= home.rent;
    life.rentPaidWeek = week;
    push(life, `Rent for ${home.name}: −${home.rent} caps.`);
  } else {
    life.housingId = null;
    life.squatProgress = 0;
    life.rentPaidWeek = week;
    push(life, `The lock changed. ${home.name} is no longer yours. You are on the street.`);
  }
}


function spotsFirst(character: Character, life: RenoLife): boolean {
  const outdoor = skill(character, "outdoorsman");
  const d = derive(character);
  const perception = Math.max(outdoor, d.special.PE * 5 + d.special.LK * 2);
  const night = isNight(life);
  const roll = skillRoll(perception, -DISTRICT_BY_ID[life.district].danger * 3 - (night ? 12 : 0));
  return roll.success;
}


function startFromSighting(life: RenoLife, character: Character, initiated: "player" | "foe") {
  const sight = life.sighting;
  if (!sight) return;
  const foes = sight.foeIds.map((raw, i) => {
    const kind = sight.foeKinds?.[i] ?? (FOES[raw] ? raw : "tough");
    const foe = combatantFromFoe(FOES[kind] ?? FOES.tough!);
    foe.kind = kind;
    foe.id = sight.foeKinds?.length ? raw : `${kind}-${i}`;
    foe.name = sight.foeNames[i] ?? foe.name;
    const place =
      sight.placements.find((p) => p.id === foe.id) ?? sight.placements.filter((p) => !p.player && !p.ally)[i];
    if (place) {
      foe.hexQ = place.q;
      foe.hexR = place.r;
    }
    return foe;
  });
  const allies = (sight.allyIds ?? []).map((raw, i) => {
    const kind = sight.allyKinds?.[i] ?? (FOES[raw] ? raw : "tough");
    const ally = combatantFromFoe(FOES[kind] ?? FOES.tough!);
    ally.side = "ally";
    ally.player = false;
    ally.kind = kind;
    ally.id = sight.allyKinds?.length ? raw : `ally-${kind}-${i}`;
    ally.name = sight.allyNames?.[i] ?? ally.name;
    const place = sight.placements.find((p) => p.id === ally.id);
    if (place) {
      ally.hexQ = place.q;
      ally.hexR = place.r;
    }
    return ally;
  });
  const player = playerCombatant(character, { hp: life.hp, trainBonus: life.trainBonus });
  player.hp = life.hp;
  const pPlace = sight.placements.find((p) => p.player);
  if (pPlace) {
    player.hexQ = pPlace.q;
    player.hexR = pPlace.r;
  }
  const light = lightingOf(life);
  life.combat = placeOnStreet(
    life,
    startCombat({
      kind: "street",
      player,
      foes,
      allies,
      lighting: sight.lighting ?? light.penalty,
      lightingLabel: sight.lightingLabel ?? light.label,
      initiator: initiated,
      map: sight.map,
    }),
    sight.cause === "feud" || sight.cause === "crime" ? sight.cause : "hunt",
  );
  life.sighting = null;
}

function settleCombat(life: RenoLife, character: Character): Character {
  const combat = life.combat;
  if (!combat?.result) return character;
  const player = playerOf(combat);
  const foe = foeOf(combat);
  if (player) life.hp = Math.max(0, player.hp);

  if (combat.result === "win") {
    let sheet = character;
    if (combat.kind === "boxing") {
      const purse = combat.purse ?? 10 + dN(20);
      life.caps += purse;
      life.boxingWins += 1;
      addFame(life, 4 + dN(4), true);
      life.trainBonus = Math.max(0, life.trainBonus - 5);
      const idx = BOXING_ORDER.indexOf(life.boxingRank);
      if (life.boxingWins >= 2 && idx >= 0 && idx < BOXING_ORDER.length - 1 && life.boxingRank !== "champion") {
        if (life.boxingWins % 2 === 0) {
          life.boxingRank = BOXING_ORDER[idx + 1]!;
          push(life, `The card man nods. You are ${life.boxingRank} now.`);
        }
      }
      life.nextFightDay = life.day + 4 + dN(4);
      push(life, `The bell saves ${foe?.name ?? "them"}. Purse: ${purse} caps. Fame ${life.fame}.`);
      character = award(life, character, Math.round(110 + (combat.purse ?? 0) / 8), "The Ring pays in more than caps.");
    } else {
      const gained = addHeat(life, character, combat.kind === "raid" ? 8 : 5, true);
      const deadFoes = combat.combatants.filter((c) => sideOf(c) === "foe" && c.hp <= 0 && !c.fled);
      noteOutrage(life, undefined, combat.cause === "feud" ? 3 : 5);
      if (combat.cause === "feud") life.tension = clamp((life.tension ?? 0) - 14, 0, 100);
      for (const dead of deadFoes) {
        if (SOUL_BY_ID[dead.id]) life.absent[dead.id] = life.day + 1;
        const gang =
          dead.kind === "mordino"
            ? "mordinos"
            : dead.kind === "wright"
              ? "wrights"
              : dead.kind === "salvatore"
                ? "salvatores"
                : dead.kind === "bishop"
                  ? "bishops"
                  : undefined;
        if (gang) life.friction[gang] = clamp((life.friction[gang] ?? 0) + 6, 0, 100);
      }
      grantReprieve(life, 50);
      const drops = deadFoes.flatMap((c) => rollLoot(c));
      if (hasPerk(character, "fortuneFinder")) {
        for (const drop of drops) {
          if (drop.caps) drop.caps = Math.round(drop.caps * 1.25);
        }
      }
      life.loot = {
        log: [...combat.log],
        drops,
        foeNames: deadFoes.map((c) => c.name),
        summary: lootSummary(drops),
      };
      const xp = deadFoes.reduce((n, c) => n + 50 + Math.round(c.hpMax * 1.2), 0);
      character = award(life, character, xp, "The street keeps score.");
      const friends = combat.combatants.filter((c) => sideOf(c) === "ally" && c.hp > 0 && !c.fled);
      if (friends.length) {
        push(life, `${friends.map((a) => a.name).join(" and ")} peels off once the last enemy drops.`);
      }
      push(
        life,
        deadFoes.length
          ? `They drop. Heat +${gained}, and the block will feel it later, not this second. Search them.`
          : "The street clears. Nothing left to search.",
      );
    }
    life.combat = null;
    return character;
  } else if (combat.result === "flee") {
    const drop = Math.min(life.caps, 8 + dN(12));
    life.caps -= drop;
    life.heat = clamp(life.heat + 1, 0, 100);
    grantReprieve(life, 40);
    push(life, `You run the green hexes back to the street. ${drop} caps scatter behind you. They do not follow this minute.`);
  } else {
    const loss = Math.min(life.caps, 20 + dN(40));
    life.caps -= loss;
    const skip = 1 + dN(2);
    life.day += skip;
    life.hour = 10;
    life.hp = Math.max(1, Math.round(life.hpMax / 4));
    if (combat.kind === "boxing") {
      life.boxingLosses += 1;
      life.fame = Math.max(0, life.fame - 1);
      life.regard = Math.max(0, (life.regard ?? 0) - 1);
      life.nextFightDay = life.day + 6;
      push(life, `You wake on a cot under the ring. −${loss} caps. ${skip} days gone.`);
    } else {
      life.housingId = life.housingId && housingDanger(life) >= 8 ? null : life.housingId;
      push(life, `A doctor you do not remember bills you ${loss} caps. ${skip} days of black.`);
    }
  }

  life.combat = null;
  return character;
}

function encounterContext(life: RenoLife, activity: EncounterActivity) {
  const building = life.insideId ? BUILDING_BY_ID[life.insideId] : null;
  const pulse = ensurePulse(life);
  return {
    district: life.district,
    zone: zoneAt(life.posX, life.posZ),
    hour: ((life.hour % 24) + 24) % 24,
    night: isNight(life),
    inside: building ? (building.abandoned ? ("abandoned" as const) : building.use) : null,
    heat: life.heat,
    regard: life.regard ?? 0,
    gangId: life.gangId,
    tension: life.tension ?? 0,
    warrant: life.warrant ?? 0,
    activity,
    story: pulse.story,
    absent: life.absent ?? {},
    day: life.day,
  };
}

function openContextEncounter(life: RenoLife, pick: EncounterPick) {
  const night = isNight(life);
  const foes = pick.foeKinds.map((kind, i) => {
    const foe = combatantFromFoe(FOES[kind] ?? FOES.tough!);
    foe.kind = kind;
    foe.id = `${pick.id}-${kind}-${i}`;
    return foe;
  });
  const allies = pick.allyKinds.map((kind, i) => {
    const ally = combatantFromFoe(FOES[kind] ?? FOES.tough!);
    ally.side = "ally" as const;
    ally.player = false;
    ally.kind = kind;
    ally.id = `${pick.id}-ally-${kind}-${i}`;
    return ally;
  });
  const layout = generateEncounter({
    setting: pick.setting,
    surprise: false,
    foeCount: Math.max(1, foes.length),
    night,
  });
  foes.forEach((foe, i) => {
    const slot = layout.foes[i] ?? layout.foes[0]!;
    foe.hexQ = slot.q;
    foe.hexR = slot.r;
  });
  allies.forEach((ally, i) => {
    const slot = layout.foes[foes.length + i];
    ally.hexQ = slot?.q ?? layout.player.q + 1;
    ally.hexR = slot?.r ?? layout.player.r;
  });
  const light = lightingFromSetting(pick.setting, night);
  life.sighting = {
    spotted: true,
    setting: pick.setting,
    foeIds: foes.map((f) => f.id),
    foeNames: foes.map((f) => f.name),
    foeKinds: foes.map((f) => f.kind),
    allyIds: allies.map((a) => a.id),
    allyNames: allies.map((a) => a.name),
    allyKinds: allies.map((a) => a.kind),
    cause: pick.cause,
    map: layout.map,
    placements: [
      { id: "player", q: layout.player.q, r: layout.player.r, player: true },
      ...foes.map((f) => ({ id: f.id, q: f.hexQ, r: f.hexR })),
      ...allies.map((a) => ({ id: a.id, q: a.hexQ, r: a.hexR, ally: true as const })),
    ],
    lighting: light.penalty,
    lightingLabel: light.label,
    reason: pick.reason,
  };
  push(life, pick.reason);
}

function maybeEncounter(life: RenoLife, _character: Character, extra = 0, activity: EncounterActivity = "wander"): boolean {
  if (life.combat || life.sighting || life.dead || life.dialogue) return false;
  const pick = selectEncounter(encounterContext(life, activity));
  if (!pick) return false;
  const rate = Math.min(48, 5 + extra + Math.round(pick.pressure * 0.6) + Math.floor(life.heat / 16));
  if (d100() > rate) return false;
  openContextEncounter(life, pick);
  return true;
}

function atDistrict(life: RenoLife, id: DistrictId) {
  return life.district === id;
}

function canJoin(life: RenoLife, gang: GangId, character: Character): string | null {
  if (life.gangId) return `You already work for the ${GANG_BY_ID[life.gangId].name}.`;
  const def = GANG_BY_ID[gang];
  if (life.district !== def.turf) return `Ask on their turf. ${def.head} keeps court at ${DISTRICT_BY_ID[def.turf].name}.`;
  if (life.gangRep[gang] < -15) return `${def.head} remembers your face. Not kindly.`;
  if (life.gangRep[def.rival] >= 12) {
    return `${def.head} doesn't hire ${GANG_BY_ID[def.rival].name} pets. Lose the other family's smell.`;
  }
  if (skill(character, "speech") < 20 && life.caps < 40) return `They want a silver tongue or a buy-in.`;
  return null;
}

const TRADE_CHEMS: StashId[] = ["jet", "marijuana", "cocaine", "buffout", "mentats", "psycho"];

function tradeStock(life: RenoLife): number {
  return TRADE_CHEMS.reduce((n, id) => n + (life.stash[id] ?? 0), 0);
}

function pullTrade(life: RenoLife, qty: number): { taken: number; value: number; note: string } {
  let left = qty;
  let value = 0;
  const bits: string[] = [];
  for (const id of TRADE_CHEMS) {
    if (left <= 0) break;
    const have = life.stash[id] ?? 0;
    if (have <= 0) continue;
    const n = Math.min(have, left);
    life.stash[id] = have - n;
    left -= n;
    value += STASH_META[id].street * n;
    bits.push(`${n} ${STASH_META[id].name}`);
  }
  return { taken: qty - left, value, note: bits.join(", ") };
}

type LeanBand = "wreck" | "sour" | "even" | "clean" | "lucky";

function lean(character: Character, extra = 0): { roll: number; lk: number; score: number; band: LeanBand } {
  const lk = derive(character).special.LK;
  const roll = d100();
  const score = roll + lk * 2 + extra;
  const band: LeanBand =
    score >= 100 ? "lucky" : score >= 74 ? "clean" : score >= 52 ? "even" : score >= 32 ? "sour" : "wreck";
  return { roll, lk, score, band };
}

function leanNote(l: { roll: number; lk: number }): string {
  return `Roll ${l.roll}, Luck ${l.lk} leans it by ${l.lk * 2}.`;
}

function addHeat(life: RenoLife, character: Character, base: number, criminal: boolean): number {
  const sneak = skill(character, "sneak");
  const mult = criminal ? attentionMult(sneak, life.heat) : Math.min(1, 0.45 + attentionMult(sneak, life.heat) * 0.55);
  const slowed = Math.max(0, Math.round(base * 0.4));
  const gain = Math.max(criminal && base >= 12 ? 1 : 0, Math.round(slowed * mult));
  life.heat = clamp(life.heat + gain, 0, 100);
  if (criminal && gain > 0) armPressure(life, character);
  return gain;
}

function armPressure(life: RenoLife, character: Character) {
  const cover = sneakCover(skill(character, "sneak"));
  if (cover.delayDays <= 0) return;
  if ((cover.band === "proficient" || cover.band === "shadow") && life.heat < 28) return;
  const loud = life.heat >= 65;
  const wait = loud ? Math.max(1, Math.ceil(cover.delayDays / 2)) : cover.delayDays;
  const due = life.day + wait;
  life.pressureDay = life.pressureDay > life.day ? Math.min(life.pressureDay, due) : due;
}

function tracks(life: RenoLife, character: Character, label: string) {
  if (life.combat || life.sighting || life.dead) return;
  const cover = sneakCover(skill(character, "sneak"));
  const add = cover.band === "shadow" ? 0 : cover.band === "proficient" ? 1 : cover.band === "noticeable" ? 2 : 3;
  if (add <= 0) {
    push(life, `${label} The street does not have a file on you yet.`);
    return;
  }
  life.warrant = clamp((life.warrant ?? 0) + add, 0, 100);
  push(life, `${label} Warrant +${add}. Heat is the noise. The walk comes later.`);
}

function settlePressure(life: RenoLife, character: Character) {
  if (life.dead || life.combat || life.sighting) return;
  if (!life.pressureDay || life.pressureDay > life.day) return;
  life.pressureDay = 0;
  const cover = sneakCover(skill(character, "sneak"));
  if (life.heat < 18) {
    push(life, "The questions dried up. For now.");
    return;
  }
  const coverHolds = cover.band === "proficient" || cover.band === "shadow";
  const slipTarget = Math.min(92, 28 + life.heat - Math.floor(skill(character, "sneak") / 5));
  if (coverHolds && d100() > slipTarget) {
    life.heat = clamp(life.heat - 4, 0, 100);
    push(
      life,
      cover.band === "shadow"
        ? "They hunted a stash and walked past it. Heat is still a pile, not a map."
        : "It took them this long. They still opened the wrong door.",
    );
    return;
  }
  if (d100() <= 55) {
    const pulled = pullTrade(life, 1 + dN(3));
    if (pulled.taken > 0) push(life, `A stash spot is bare. Gone: ${pulled.note}.`);
    else {
      life.heat = clamp(life.heat + 4, 0, 100);
      push(life, "They kicked a door and found nothing worth taking. They are angrier.");
    }
    return;
  }
  life.warrant = clamp((life.warrant ?? 0) + 6, 0, 100);
  push(life, "The questions arrived as a file, not a gun. Warrant moved. Someone still has to walk across Reno.");
}

function burnFast(life: RenoLife, character: Character, baseHours: number, buy = false): Character {
  const hours = hustleHours(baseHours);
  const day = life.day;
  pantry = {
    character,
    buy,
    meals: 0,
    waters: 0,
    boughtMeals: 0,
    boughtWaters: 0,
    spent: 0,
    fromPack: [],
  };
  try {
    tick(life, hours);
    const note = pantryLine();
    const next = pantry.character;
    push(life, `${hours} hours gone. Five times a normal stretch. The city did not wait.`);
    if (note) push(life, note);
    if (life.day > day) settlePressure(life, next);
    return next;
  } finally {
    pantry = null;
  }
}

function frontName(district: DistrictId): string {
  const names: Record<DistrictId, string> = {
    virgin: "Secondhand Virgin",
    shark: "A quiet book beside the Shark",
    desperado: "Desperado side room",
    motel: "Lot concession",
    mordino: "Counter two doors off the Stables",
    salvatore: "A room that does not advertise",
    jungle: "Jungle Gym stock",
    stables: "Ring towel stand",
    wright: "A still with your name on the mash",
    chop: "Chop-shop ledger",
    rail: "Yard crate business",
    golgotha: "Grave goods",
    bishop: "A front the Shark can see",
    market: "Market stall with a lock",
  };
  return names[district];
}

function grantChems(life: RenoLife, jet: number, mentats = 0) {
  life.stash.jet += jet;
  life.stash.mentats += mentats;
}

function runHustle(life: RenoLife, character: Character, action: RenoAction): SimResult {
  let sheet = character;
  if (action.type === "courtFamily") {
    const err = canCourt(life, action.gang);
    if (err) {
      push(life, err);
      return { life, character: sheet };
    }
    const gang = GANG_BY_ID[action.gang];
    sheet = burnFast(life, sheet, 8);
    const l = lean(sheet, Math.floor(skill(sheet, "speech") / 5) + Math.floor((life.gangRep[action.gang] ?? 0) / 2));
    if (l.band === "wreck") {
      life.gangRep[action.gang] -= 6;
      life.gangRep[gang.rival] += 2;
      const gained = addHeat(life, sheet, 16, true);
      push(life, `${gang.head} decides you are a plant. ${leanNote(l)} Heat +${gained}. Their blades will walk the block later. Not this room.`);
      life.friction[action.gang] = clamp((life.friction[action.gang] ?? 0) + 16, 0, 100);
    } else if (l.band === "sour") {
      life.gangRep[action.gang] -= 2;
      const gained = addHeat(life, sheet, 8, true);
      push(life, `You haunt ${gang.front} and leave with nothing. ${leanNote(l)} Heat +${gained}.`);
      tracks(life, sheet, "Someone watched you hang around the family.");
    } else if (l.band === "even") {
      life.gangRep[action.gang] += 4;
      const gained = addHeat(life, sheet, 8, true);
      const bite = Math.min(life.caps, 40 + dN(40));
      life.caps -= bite;
      push(life, `Drinks that were not drinks. They know your name. Not a job. −${bite} caps. ${leanNote(l)} Heat +${gained}.`);
      tracks(life, sheet, "A rival counted how long you sat with them.");
    } else {
      life.gangId = action.gang;
      life.gangRank = 1;
      life.gangRep[action.gang] += l.band === "lucky" ? 10 : 6;
      life.gangRep[gang.rival] -= 8;
      if (l.band === "lucky") addFame(life, 2);
      const gained = addHeat(life, sheet, l.band === "lucky" ? 8 : 12, true);
      push(
        life,
        l.band === "lucky"
          ? `${gang.head} likes the quiet way you asked. You are ${gang.ranks[0]}. ${leanNote(l)} Heat +${gained}. ${gang.credo}`
          : `You are in with the ${gang.name}. Rank: ${gang.ranks[0]}. ${leanNote(l)} Heat +${gained}. ${gang.credo}`,
      );
      sheet = award(life, sheet, l.band === "lucky" ? 110 : 80, "A family took you.");
      tracks(life, sheet, "Making a family is not a private act.");
    }
    return { life, character: sheet };
  }

  if (action.type === "carouse") {
    const d = derive(sheet);
    sheet = burnFast(life, sheet, 4, true);
    const l = lean(sheet, Math.floor(Math.max(skill(sheet, "speech"), skill(sheet, "gambling"), d.special.CH * 4) / 6));
    life.boredom = clamp((life.boredom ?? 28) - (l.band === "wreck" ? 8 : l.band === "sour" ? 18 : 36), 0, 100);
    if (l.band === "wreck") {
      const lose = Math.min(life.caps, 25 + dN(45));
      life.caps -= lose;
      const gained = addHeat(life, sheet, 12, true);
      push(life, `A loud night, a wrong table. −${lose} caps. ${leanNote(l)} Heat +${gained}. Nobody draws. The story has to catch up.`);
      life.grudges.red = Math.min(100, (life.grudges.red ?? 0) + 8);
      life.fear = clamp((life.fear ?? 0) + 2, 0, 100);
      tracks(life, sheet, "You were the loudest thing on the block.");
    } else if (l.band === "sour") {
      const lose = Math.min(life.caps, 8 + dN(16));
      life.caps -= lose;
      const gained = addHeat(life, sheet, 6, true);
      push(life, `Cheap liquor, cheaper stories. −${lose} caps. ${leanNote(l)} Heat +${gained}.`);
      tracks(life, sheet, "People remember the tab more than the joke.");
    } else if (l.band === "even") {
      const spend = Math.min(life.caps, 12 + dN(10));
      life.caps -= spend;
      addFame(life, 1);
      const gained = addHeat(life, sheet, 5, true);
      push(life, `Cards, smoke, a story someone will repeat wrong. −${spend} caps. ${leanNote(l)} Heat +${gained}.`);
      sheet = award(life, sheet, 20, "You were seen, not studied.");
    } else if (l.band === "clean") {
      const win = 30 + dN(40) + d.special.LK;
      life.caps += win;
      addFame(life, 2);
      const gained = addHeat(life, sheet, 6, true);
      push(life, `The table leaned your way. +${win} caps. ${leanNote(l)} Heat +${gained}.`);
      sheet = award(life, sheet, 35, "A night that paid.");
      tracks(life, sheet, "Winners get looked at.");
    } else {
      const win = 70 + dN(90) + d.special.LK * 3;
      life.caps += win;
      addFame(life, 3);
      const local = DISTRICT_BY_ID[life.district].gang;
      if (local) life.gangRep[local] += 3;
      const gained = addHeat(life, sheet, 4, true);
      push(life, `Reno buys you a round and a rumor. +${win} caps. ${leanNote(l)} Heat +${gained}.`);
      sheet = award(life, sheet, 50, "Luck had a seat at the table.");
      tracks(life, sheet, "Even a charmed night leaves a trail if you stack them.");
    }
    return { life, character: sheet };
  }

  if (action.type === "business") {
    if (!life.business) {
      if (life.caps < BUSINESS_COST) {
        push(life, `A front takes ${BUSINESS_COST} caps. You have ${life.caps}. Reno does not do layaway.`);
        return { life, character: sheet };
      }
      life.caps -= BUSINESS_COST;
      sheet = burnFast(life, sheet, 10);
      const l = lean(sheet, Math.floor(skill(sheet, "barter") / 5));
      const name = frontName(life.district);
      if (l.band === "wreck" || l.band === "sour") {
        const back = l.band === "wreck" ? Math.round(BUSINESS_COST * 0.15) : Math.round(BUSINESS_COST * 0.35);
        life.caps += back;
        const gained = addHeat(life, sheet, l.band === "wreck" ? 18 : 12, true);
        push(
          life,
          l.band === "wreck"
            ? `The locksmith, the family, and a cousin with a clipboard eat the stake. ${name} never opens. +${back} caps back. ${leanNote(l)} Heat +${gained}.`
            : `The paper was wrong. ${name} dies in a week of permits. +${back} caps back. ${leanNote(l)} Heat +${gained}.`,
        );
        tracks(life, sheet, "Money that loud has a forwarding address.");
        if (DISTRICT_BY_ID[life.district].gang) {
          const g = DISTRICT_BY_ID[life.district].gang!;
          life.friction[g] = clamp((life.friction[g] ?? 0) + 10, 0, 100);
        }
        return { life, character: sheet };
      }
      life.business = { name, invested: BUSINESS_COST, district: life.district, openedDay: life.day };
      const bonus = l.band === "lucky" ? 180 + dN(80) : l.band === "clean" ? 60 + dN(40) : 0;
      life.caps += bonus;
      if (l.band === "lucky") addFame(life, 2);
      const gained = addHeat(life, sheet, l.band === "lucky" ? 8 : 12, true);
      push(
        life,
        `${name} opens on ${DISTRICT_BY_ID[life.district].name}.${bonus ? ` Opening night +${bonus} caps.` : " The first week is dry."} ${leanNote(l)} Heat +${gained}.`,
      );
      sheet = award(life, sheet, l.band === "lucky" ? 90 : 60, "You bought a piece of the block.");
      tracks(life, sheet, "A new wallet on the block gets counted.");
      return { life, character: sheet };
    }
    sheet = burnFast(life, sheet, 4);
    const shop = life.business;
    const l = lean(sheet, Math.floor(skill(sheet, "barter") / 4));
    const base = Math.round(shop.invested * 0.045) + 10;
    if (l.band === "wreck") {
      const shaked = Math.min(life.caps, Math.round(shop.invested * 0.08) + dN(40));
      life.caps -= shaked;
      const gained = addHeat(life, sheet, 14, true);
      push(life, `${shop.name} pays a shakedown, not a profit. −${shaked} caps. ${leanNote(l)} Heat +${gained}. The collectors leave with a name, not a body.`);
      tracks(life, sheet, "A business that pays protection is a map.");
      if (DISTRICT_BY_ID[life.district].gang) {
        const g = DISTRICT_BY_ID[life.district].gang!;
        life.friction[g] = clamp((life.friction[g] ?? 0) + 8, 0, 100);
      }
    } else if (l.band === "sour") {
      const pay = Math.round(base * 0.35);
      life.caps += pay;
      const gained = addHeat(life, sheet, 8, true);
      push(life, `${shop.name} limps. +${pay} caps. ${leanNote(l)} Heat +${gained}.`);
      tracks(life, sheet, "Even a bad week has regulars who talk.");
    } else {
      const mult = l.band === "lucky" ? 1.8 : l.band === "clean" ? 1.25 : 0.9;
      const pay = Math.round(base * mult) + (l.band === "lucky" ? derive(sheet).special.LK * 4 : 0);
      life.caps += pay;
      if (l.band === "lucky") addFame(life, 1);
      const gained = addHeat(life, sheet, l.band === "lucky" ? 5 : 8, true);
      push(life, `${shop.name} clears +${pay} caps. ${leanNote(l)} Heat +${gained}.`);
      sheet = award(life, sheet, l.band === "lucky" ? 55 : 35, "The front paid.");
      tracks(life, sheet, "Receipts are a kind of trail.");
    }
    return { life, character: sheet };
  }

  if (action.type === "dealing") {
    const open = !life.dealing;
    const need = open ? DEAL_OPEN_STOCK : DEAL_RUN_STOCK;
    const stock = tradeStock(life);
    if (stock < need) {
      push(
        life,
        open
          ? `Dealing needs a pile, not a taste. ${stock} doses on you. Bring ${need}. Jet, Psycho, Buffout, Mentats, marijuana, cocaine.`
          : `The corner is dry. ${stock} doses left. You need ${need} to move product.`,
      );
      return { life, character: sheet };
    }
    sheet = burnFast(life, sheet, open ? 8 : 4);
    const l = lean(sheet, Math.floor(skill(sheet, "barter") / 5));
    const qty = open ? DEAL_OPEN_STOCK : l.band === "lucky" ? Math.min(stock, 4 + dN(2)) : DEAL_RUN_STOCK;
    const pulled = pullTrade(life, qty);
    life.dealing = true;
    const priceMult = l.band === "wreck" ? 0.25 : l.band === "sour" ? 0.55 : l.band === "even" ? 0.9 : l.band === "clean" ? 1.25 : 1.6;
    const pay = Math.round(pulled.value * priceMult * (hasPerk(sheet, "masterTrader") ? 1.15 : 1));
    life.caps += pay;
    const heatBase = open ? (l.band === "wreck" ? 22 : 16) : l.band === "wreck" ? 18 : 12;
    const gained = addHeat(life, sheet, heatBase, true);
    if (l.band === "wreck") {
      push(life, `The handoff goes wrong. ${pulled.note} gone for ${pay} caps and a name. ${leanNote(l)} Heat +${gained}. The buyer walks. The warrant is what follows.`);
      life.warrant = clamp((life.warrant ?? 0) + 4, 0, 100);
      const turf = DISTRICT_BY_ID[life.district].gang;
      if (turf) life.friction[turf] = clamp((life.friction[turf] ?? 0) + 8, 0, 100);
    } else if (l.band === "lucky") {
      grantChems(life, 1);
      push(life, `You move ${pulled.note} for ${pay} caps and pocket a dose they did not count. ${leanNote(l)} Heat +${gained}.`);
      sheet = award(life, sheet, open ? 70 : 50, open ? "You are in the trade." : "The corner paid.");
      tracks(life, sheet, "Product that moves gets followed.");
    } else {
      push(life, `You move ${pulled.note} for ${pay} caps. ${leanNote(l)} Heat +${gained}.`);
      sheet = award(life, sheet, open ? 55 : 40, open ? "You are in the trade." : "Another corner, another pile.");
      tracks(life, sheet, "Someone writes down where you stand.");
    }
    return { life, character: sheet };
  }

  if (action.type === "lab") {
    const science = skill(sheet, "science");
    if (!life.lab && science < 100) {
      push(life, `The formulas do not sit still yet. Science ${science}%. You need 100 before a lab is anything but a fire.`);
      return { life, character: sheet };
    }
    if (!life.lab) {
      if (life.caps < LAB_COST) {
        push(life, `Glass, precursors, a door that locks. ${LAB_COST} caps. You have ${life.caps}.`);
        return { life, character: sheet };
      }
      life.caps -= LAB_COST;
      sheet = burnFast(life, sheet, 8);
      const l = lean(sheet, Math.floor((science - 100) / 4));
      if (l.band === "wreck") {
        const hurt = 6 + dN(8);
        life.hp = Math.max(1, life.hp - hurt);
        const back = Math.round(LAB_COST * 0.2);
        life.caps += back;
        const gained = addHeat(life, sheet, 20, true);
        push(life, `The batch climbs the wall. −${hurt} HP. The room is a story now. +${back} caps of glass back. ${leanNote(l)} Heat +${gained}.`);
        tracks(life, sheet, "A chemical fire is not subtle.");
        return { life, character: sheet };
      }
      if (l.band === "sour") {
        const gained = addHeat(life, sheet, 12, true);
        push(life, `The batch dies in the glass. Money gone. The room smells like a hospital that lost. ${leanNote(l)} Heat +${gained}.`);
        tracks(life, sheet, "Myron's people can smell a failed cook.");
        return { life, character: sheet };
      }
      life.lab = true;
      const jet = l.band === "lucky" ? 6 : l.band === "clean" ? 4 : 2;
      const mentats = l.band === "lucky" ? 2 : l.band === "clean" ? 1 : 0;
      grantChems(life, jet, mentats);
      const gained = addHeat(life, sheet, l.band === "lucky" ? 10 : 14, true);
      push(
        life,
        `The lab holds. +${jet} Jet${mentats ? `, +${mentats} Mentats` : ""}. Smaller stake than a storefront. Louder to anyone who knows the smell. ${leanNote(l)} Heat +${gained}.`,
      );
      sheet = award(life, sheet, l.band === "lucky" ? 80 : 55, "You cooked.");
      tracks(life, sheet, "A working lab is a stash with a chimney.");
      return { life, character: sheet };
    }
    if (life.caps < COOK_COST) {
      push(life, `Precursors are ${COOK_COST} caps. You have ${life.caps}.`);
      return { life, character: sheet };
    }
    life.caps -= COOK_COST;
    sheet = burnFast(life, sheet, 6);
    const l = lean(sheet, Math.floor(skill(sheet, "science") / 8));
    if (l.band === "wreck") {
      const hurt = 4 + dN(6);
      life.hp = Math.max(1, life.hp - hurt);
      const gained = addHeat(life, sheet, 16, true);
      push(life, `A bad cook. −${hurt} HP. Nothing worth selling. ${leanNote(l)} Heat +${gained}.`);
      tracks(life, sheet, "The smell got out.");
      return { life, character: sheet };
    }
    const jet = l.band === "lucky" ? 5 + dN(3) : l.band === "clean" ? 3 + dN(2) : l.band === "even" ? 2 : 1;
    const extra = l.band === "lucky" && d100() <= 50 ? "psycho" : l.band === "clean" ? "mentats" : null;
    life.stash.jet += jet;
    if (extra) life.stash[extra] += 1;
    const gained = addHeat(life, sheet, l.band === "lucky" ? 8 : 12, true);
    push(
      life,
      `You cook +${jet} Jet${extra ? ` and a ${STASH_META[extra].name}` : ""}. ${leanNote(l)} Heat +${gained}.`,
    );
    sheet = award(life, sheet, 45, "Another batch.");
    tracks(life, sheet, "Repeat customers are a trail. So is repeat cooking.");
    return { life, character: sheet };
  }

  return { life, character: sheet };
}

function canCourt(life: RenoLife, gang: GangId): string | null {
  if (life.gangId) return `You already wear ${GANG_BY_ID[life.gangId].name} colors.`;
  const def = GANG_BY_ID[gang];
  if (life.district !== def.turf) return `Court them where they live. ${def.head} keeps ${def.front}.`;
  if (life.gangRep[gang] < -15) return `${def.head} remembers your face. Not kindly.`;
  if (life.gangRep[def.rival] >= 12) {
    return `${def.head} does not hire ${GANG_BY_ID[def.rival].name} pets.`;
  }
  return null;
}

function advanceBoxing(life: RenoLife) {
  if (life.boxingRank === "unsigned") life.boxingRank = "prelim";
  if (life.nextFightDay < life.day) life.nextFightDay = life.day;
}

function millAround(life: RenoLife, character: Character): SimResult {
  tickMinutes(life, 20);
  const b = life.inspecting ? BUILDING_BY_ID[life.inspecting] : null;
  const night = isNight(life);
  const use = b?.abandoned ? "abandoned" : (b?.use ?? (zoneAt(life.posX, life.posZ) === "motel" ? "motel" : "tenement"));

  if (use === "motel") {
    const roll = skillRoll(skill(character, "speech"), night ? 5 : -5);
    if (roll.success) {
      addFame(life, 1);
      push(
        life,
        night
          ? `The girls on the lot talk. Calico taxes the stairs. A john in a hat paid 40 and left poorer. Speech ${roll.roll}.`
          : `Day clerk: the lot fills after eight. Working girls, then the pimp. Speech ${roll.roll}.`,
      );
    } else {
      push(life, `They look through you. The lot still moves. Speech ${roll.roll}.`);
      if (night) {
        life.grudges.nix = Math.min(100, (life.grudges.nix ?? 0) + 4);
        push(life, "Nix Harlow clocks the staring. He does not come down the stairs tonight.");
      }
    }
    return { life, character };
  }

  if (use === "casino") {
    const bet = Math.min(25, life.caps);
    if (bet < 5) {
      push(life, "The floor man looks at your empty pockets and does not look away fast.");
      return { life, character };
    }
    life.caps -= bet;
    const district = b?.district ?? life.district;
    const roll = skillRoll(skill(character, "gambling"), night ? -5 : 0);
    if (roll.crit) {
      const win = bet * 3;
      life.caps += win;
      bookWager(life, district, win - bet, true);
      push(life, `The house blinked. Gambling ${roll.roll}. +${win} caps. The till felt it.`);
    } else if (roll.success) {
      const win = bet + Math.round(bet * 0.6);
      life.caps += win;
      bookWager(life, district, Math.max(0, win - bet), true);
      push(life, `You beat a tourist's luck, not the house. Gambling ${roll.roll}. +${win} caps.`);
    } else {
      bookWager(life, district, bet, false);
      push(life, `The felt eats ${bet} caps. Gambling ${roll.roll}. The house keeps it.`);
      life.grudges.red = Math.min(100, (life.grudges.red ?? 0) + 3);
      push(life, "Red Miller thinks you saw the holdout. He files it. He does not flip the table.");
    }
    return { life, character };
  }

  if (use === "bar") {
    if (life.caps < 4) {
      push(life, "The barkeep waits. You do not have four caps.");
      return { life, character };
    }
    life.caps -= 4;
    bookDrink(life, b?.district ?? life.district, 4);
    const roll = skillRoll(skill(character, "speech"), 0);
    push(
      life,
      roll.success
        ? `Four caps, a glass, a rumor: Bishop money is moving east. Speech ${roll.roll}.`
        : `Four caps. The regulars look through you. Speech ${roll.roll}.`,
    );
    return { life, character };
  }

  if (use === "abandoned") {
    const roll = skillRoll(Math.max(skill(character, "steal"), skill(character, "outdoorsman")), -8);
    if (roll.success) {
      const find = 6 + dN(22);
      life.caps += find;
      const jet = d100() <= 35;
      if (jet) life.stash.jet += 1;
      push(life, `The ruin still had pockets. +${find} caps${jet ? " and a bag of Jet" : ""}.`);
    } else {
      push(life, `Dust, nails, a smell that is not dust. ${roll.roll}.`);
      push(life, "If something lives in the ruin, it is already on the block. It does not spawn because you looked.");
    }
    return { life, character };
  }

  if (use === "shop" || use === "pawn") {
    const roll = skillRoll(skill(character, "barter"), 0);
    push(
      life,
      roll.success
        ? `The clerk talks prices. Ammo is dear. Jet is cheaper a block off the Strip. Barter ${roll.roll}.`
        : `They will not name a number until you put caps on the wood. Barter ${roll.roll}.`,
    );
    return { life, character };
  }

  if (use === "warehouse" || use === "rail") {
    const roll = skillRoll(skill(character, "sneak"), night ? -10 : 0);
    if (roll.success) {
      push(life, `Crates, engines, a name you should not have read. Sneak ${roll.roll}.`);
    } else {
      push(life, `A man with a wrench wants to know why you are looking. Sneak ${roll.roll}.`);
      life.grudges.sable = Math.min(100, (life.grudges.sable ?? 0) + 6);
      push(life, "Sable Ott will remember the face. She is not drawing in the bay.");
    }
    return { life, character };
  }

  if (use === "crypt") {
    push(life, "Wright stones. The ground is wrong. Whatever is buried here walks the hill. It does not roll a chance on you.");
    return { life, character };
  }

  if (use === "ring") {
    push(life, "A tout watches your hands. Purses grow with the months. Sign if you can take a punch.");
    return { life, character };
  }

  if (use === "office") {
    const roll = skillRoll(skill(character, "speech"), -10);
    push(
      life,
      roll.success
        ? `A secretary smiles with none of it. Mr. Bishop is busy. You are not. Speech ${roll.roll}.`
        : `They ask if you have an appointment. You do not. Speech ${roll.roll}.`,
    );
    return { life, character };
  }

  const roll = skillRoll(skill(character, "speech"), 0);
  push(
    life,
    roll.success
      ? `Locals talk. ${ZONE_LABEL[zoneAt(life.posX, life.posZ)]} after dark is a different city. Speech ${roll.roll}.`
      : `Nobody wants a conversation. Speech ${roll.roll}.`,
  );
  return { life, character };
}

function applyInteraction(life: RenoLife, character: Character, actor: StreetActor): SimResult {
  tickMinutes(life, 12);
  const beat = handleStreetInteraction(actor, life);
  const mem = { ...remember(life.npcMemory, actor.id) };
  const roll = skillRoll(skill(character, "speech"), mem.mood * 8);
  push(life, beat.lines[0] ?? `${actor.name} has nothing to say.`);
  if (!roll.success) {
    mem.mood = Math.max(-2, mem.mood - 1);
    mem.last = "brushed you off";
    life.npcMemory = { ...life.npcMemory, [actor.id]: mem };
    life.grudges[actor.id] = Math.min(100, (life.grudges[actor.id] ?? 0) + 2);
    push(life, `${actor.name} looks through you. Speech ${roll.roll}.`);
    return { life, character };
  }
  mem.mood = Math.min(2, mem.mood + beat.moodDelta);
  mem.last = beat.last;
  life.npcMemory = { ...life.npcMemory, [actor.id]: mem };
  for (const line of beat.lines.slice(1)) push(life, line);
  const pulse = ensurePulse(life);
  if (beat.flag === "richard-named" && pulse.story.richard === "open") {
    pulse.story.richard = "named";
  }
  if (SOUL_BY_ID[actor.id]?.allegiance === "family" || beat.flag === "richard-named") {
    pulse.story.involvement = Math.min(8, pulse.story.involvement + 1);
  }
  if (beat.offerJob && beat.job && !life.job) {
    life.job = {
      ...beat.job,
      stage: "carry",
      giver: beat.giver ?? actor.name,
      from: life.district,
    };
    push(
      life,
      `Job — ${beat.job.title}. Carry ${beat.job.item} to ${districtName(beat.job.to)}. ${beat.job.blurb} Pay ${beat.job.pay}.`,
    );
  } else if (life.job) {
    push(life, `You are already carrying ${life.job.item} for ${life.job.giver}.`);
  }
  push(life, `Speech ${roll.roll}.`);
  return { life, character };
}

function streetAct(life: RenoLife, character: Character, act: "talk" | "lean" | "bribe" | "shake" | "tip" | "door" | "deliver"): SimResult {
  const building = life.insideId
    ? BUILDING_BY_ID[life.insideId]
    : life.inspecting
      ? BUILDING_BY_ID[life.inspecting]
      : null;
  const night = isNight(life);
  const npc = npcFor(life.district, night, building?.abandoned ? "abandoned" : building?.use);
  const mem = { ...remember(life.npcMemory, npc.id) };
  const saveMem = () => {
    life.npcMemory = { ...life.npcMemory, [npc.id]: mem };
  };

  if (act === "deliver") {
    if (!life.job || life.job.stage !== "carry") {
      push(life, "You are not carrying anyone's package.");
      return { life, character };
    }
    if (life.district !== life.job.to) {
      push(life, `${life.job.item} still has to reach ${districtName(life.job.to)}. You are in ${districtName(life.district)}.`);
      return { life, character };
    }
    tickMinutes(life, 20);
    const done = life.job;
    life.caps += done.pay;
    const title = done.title;
    const pay = done.pay;
    life.job = null;
    const pulse = ensurePulse(life);
    if (done.id === "jet-case") {
      pulse.story.jetRun = "sold";
      pulse.story.involvement = Math.min(8, pulse.story.involvement + 1);
      pulse.families.mordinos.cash += 220;
      push(life, "The case is in the bay. Tonight's Jet will not come up short.");
    } else if (done.id === "bishop-letter") {
      pulse.story.bishopLetter = "delivered";
      pulse.story.courierMissing = false;
      pulse.story.mayorSqueeze += 1;
      pulse.story.involvement = Math.min(8, pulse.story.involvement + 1);
      pulse.families.bishops.cash += 160;
      push(life, "The envelope is on a Bishop desk. The mayor's morning just got more expensive.");
    } else if (done.id === "wright-name") {
      if (pulse.story.richard === "open") pulse.story.richard = "named";
      pulse.story.involvement = Math.min(8, pulse.story.involvement + 1);
      push(life, "Orville has a name. Richard is still dead. The Wrights are less blind.");
    }
    addFame(life, 1);
    mem.mood = Math.min(2, mem.mood + 1);
    mem.last = "delivered";
    saveMem();
    push(life, `Delivered. ${title}. +${pay} caps. They will use you again if you do not get loud.`);
    character = award(life, character, 30, "A package that arrived.");
    return { life, character };
  }

  if (act === "lean") {
    tickMinutes(life, 35);
    const brief = factionBrief(life.day, life.district);
    push(life, brief[0] ?? `${npc.name} is still on ${npc.beat}. The block keeps its own hours.`);
    push(life, night ? npc.night : npc.day);
    life.boredom = clamp((life.boredom ?? 28) - 8, 0, 100);
    return { life, character };
  }

  if (act === "bribe") {
    const cost = 40;
    if (life.caps < cost) {
      push(life, `A bribe starts at ${cost} caps. You have ${life.caps}.`);
      return { life, character };
    }
    life.caps -= cost;
    tickMinutes(life, 15);
    const cover = sneakCover(skill(character, "sneak"));
    const drop = cover.band === "shadow" || cover.band === "proficient" ? 14 : cover.band === "noticeable" ? 8 : 4;
    life.heat = clamp(life.heat - drop, 0, 100);
    mem.last = "bribed";
    mem.mood = Math.min(2, mem.mood + 1);
    saveMem();
    push(life, `Bills change hands. Heat −${drop}. ${npc.name} looks at a different wall. Sneak makes the trail ${cover.band}.`);
    return { life, character };
  }

  if (act === "tip") {
    const cost = 15;
    if (life.caps < cost) {
      push(life, "A tip is 15 caps. Officer Lang does not take IOUs.");
      return { life, character };
    }
    life.caps -= cost;
    tickMinutes(life, 10);
    life.heat = clamp(life.heat - 2, 0, 100);
    life.warrant = clamp((life.warrant ?? 0) - 2, 0, 100);
    life.grudges.lang = Math.max(0, (life.grudges.lang ?? 0) - 4);
    const cop = npcFor("virgin", night, "casino");
    const copMem = { ...remember(life.npcMemory, cop.id), last: "tipped", mood: 1 };
    life.npcMemory = { ...life.npcMemory, [cop.id]: copMem };
    push(life, "You tip the lamp on Virgin Street. Lang pockets it. Heat and the warrant ease a little. He will not forget the courtesy, or the face.");
    return { life, character };
  }

  if (act === "shake") {
    tickMinutes(life, 20);
    const roll = skillRoll(Math.max(skill(character, "unarmed"), skill(character, "speech")), mem.mood * 5);
    mem.last = "shook them down";
    mem.mood = Math.max(-2, mem.mood - 2);
    saveMem();
    if (roll.success) {
      const take = 12 + dN(28);
      life.caps += take;
      const gained = addHeat(life, character, 10, true);
      life.grudges[npc.role === "cop" ? "lang" : npc.role === "soldato" ? "vin" : "cass"] = Math.min(
        100,
        (life.grudges[npc.role === "cop" ? "lang" : npc.role === "soldato" ? "vin" : "cass"] ?? 0) + 8,
      );
      life.fear = clamp((life.fear ?? 0) + 1, 0, 100);
      push(life, `${npc.name} pays ${take} to make you leave. Heat +${gained}. The slight is on a person, not a dice table.`);
      tracks(life, character, `${npc.name} is telling the block about the shakedown.`);
    } else {
      push(life, `${npc.name} does not pay. ${roll.roll}. They will remember this. They are not swinging yet.`);
      const remembered = npc.district === "motel" ? "nix" : npc.role === "cop" ? "lang" : npc.role === "soldato" ? "vin" : "cass";
      life.grudges[remembered] = Math.min(100, (life.grudges[remembered] ?? 0) + 14);
      if (npc.role === "soldato") noteOutrage(life, DISTRICT_BY_ID[life.district].gang, 6);
      else life.fear = clamp((life.fear ?? 0) + 2, 0, 100);
    }
    return { life, character };
  }

  if (act === "door") {
    tickMinutes(life, 15);
    if (!life.insideId && building) {
      life.insideId = building.id;
      life.posX = building.x;
      life.posZ = building.z;
      push(life, `You work the door and they let you through. ${night ? npc.night : npc.day}`);
      return { life, character };
    }
    const roll = skillRoll(skill(character, "speech"), mem.mood * 6);
    if (roll.success) {
      const cut = 8 + dN(18);
      life.caps += cut;
      addFame(life, 1);
      mem.last = "worked the door";
      mem.mood = Math.min(2, mem.mood + 1);
      saveMem();
      push(life, `You hold ${npc.beat} for an hour. +${cut} caps. ${npc.name} nods like a coworker. Speech ${roll.roll}.`);
    } else {
      mem.last = "turned away at the door";
      saveMem();
      push(life, `${npc.name} does not need another body on the door. Speech ${roll.roll}.`);
    }
    return { life, character };
  }

  return applyInteraction(life, character, { id: npc.id, name: npc.name });
}

function openCityContact(life: RenoLife, character: Character, action: Extract<RenoAction, { type: "streetContact" }>) {
  if (life.combat || life.sighting || life.dead) return;
  if (!action.foes.length) return;
  life.posX = action.x;
  life.posZ = action.z;
  const night = isNight(life);
  const setting = settingFromZone(zoneAt(life.posX, life.posZ), night);
  const bodies = [...action.foes, ...action.allies];
  const radius = fightRadius(life.posX, life.posZ, bodies, bodies.length + 1);
  const layout = generateEncounter({
    setting,
    surprise: action.surprise,
    foeCount: action.foes.length,
    night,
    radius,
  });
  const used = new Set<string>([hexKey(0, 0)]);
  const player = playerCombatant(character, { hp: life.hp, trainBonus: life.trainBonus });
  player.hp = life.hp;
  player.hexQ = 0;
  player.hexR = 0;
  const placeBody = (b: (typeof action.foes)[number], side: "foe" | "ally") => {
    const c = combatantFromFoe(FOES[b.kind] ?? FOES.tough!);
    c.id = b.id;
    c.name = b.name;
    c.kind = b.kind;
    if (side === "ally") {
      c.side = "ally";
      c.player = false;
    }
    const hex = worldToHex(b.x, b.z, life.posX, life.posZ, HEX_METERS);
    const slot = claimSlot(layout.map, hex.q, hex.r, used);
    used.add(hexKey(slot.q, slot.r));
    c.hexQ = slot.q;
    c.hexR = slot.r;
    return c;
  };
  const foes = action.foes.map((b) => placeBody(b, "foe"));
  const allies = action.allies.map((b) => placeBody(b, "ally"));
  const light = lightingFromSetting(setting, night);
  const placements = [
    { id: "player", q: 0, r: 0, player: true },
    ...foes.map((f) => ({ id: f.id, q: f.hexQ, r: f.hexR })),
    ...allies.map((a) => ({ id: a.id, q: a.hexQ, r: a.hexR, ally: true as const })),
  ];
  const spotted = action.cause === "feud" || !action.surprise || spotsFirst(character, life);
  if (!spotted) {
    life.combat = placeOnStreet(
      life,
      startCombat({
        kind: action.cause === "crime" ? "raid" : "street",
        player,
        foes,
        allies,
        lighting: light.penalty,
        lightingLabel: light.label,
        initiator: "foe",
        map: layout.map,
      }),
      action.cause,
    );
    life.sighting = null;
    push(life, `${action.reason} They already had the sequence.`);
    return;
  }
  life.sighting = {
    spotted: true,
    setting,
    foeIds: foes.map((f) => f.id),
    foeNames: foes.map((f) => f.name),
    foeKinds: foes.map((f) => f.kind),
    allyIds: allies.map((a) => a.id),
    allyNames: allies.map((a) => a.name),
    allyKinds: allies.map((a) => a.kind),
    cause: action.cause,
    map: layout.map,
    placements,
    lighting: light.penalty,
    lightingLabel: light.label,
    reason: action.reason,
  };
  push(life, `${action.reason} The city holds still. Hexes scale to the bodies already on this street.`);
}

export function applyAction(life: RenoLife, character: Character, action: RenoAction): SimResult {
  rollingSheet = character;
  let next = cloneLife(life);
  let sheet = {
    ...character,
    perks: character.perks ?? [],
    skillBank: character.skillBank ?? 0,
    perkBank: character.perkBank ?? 0,
  };
  ensureIntel(next);
  if (next.dead) return { life: next, character: sheet };

  if (next.loot && action.type !== "loot") {
    push(next, "Search the pockets first.");
    return { life: next, character: sheet };
  }

  if (next.combat && action.type !== "combat") {
    push(next, "Finish the fight first.");
    return { life: next, character: sheet };
  }

  if (next.sighting && action.type !== "encounter") {
    push(next, "That street is still live. Fight, talk, or run.");
    return { life: next, character: sheet };
  }

  if (next.dialogue && action.type !== "dialogue") {
    push(next, "Angela is still talking. Finish the conversation.");
    return { life: next, character: sheet };
  }

  if (action.type === "tickMinute") {
    const day = next.day;
    tickMinutes(next, 1);
    if (next.day !== day) settlePressure(next, sheet);
    if ((next.worldDay ?? 0) < next.day) runWorldDay(next, sheet);
    return { life: next, character: sheet };
  }

  if (action.type === "inspect") {
    next.inspecting = action.building;
    if (action.building) {
      const b = BUILDING_BY_ID[action.building];
      if (b) {
        const npc = npcFor(b.district ?? next.district, isNight(next), b.abandoned ? "abandoned" : b.use);
        const mem = remember(next.npcMemory, npc.id);
        const known = mem.last ? ` Last time: you ${mem.last}.` : "";
        push(next, `${b.name}. ${b.abandoned ? "Abandoned." : b.rumor}${known} ${npc.name} works ${npc.beat}.`);
      }
    }
    return { life: next, character: sheet };
  }

  if (action.type === "enter") {
    const id = next.inspecting ?? next.insideId;
    const b = id ? BUILDING_BY_ID[id] : null;
    if (!b) {
      push(next, "Pick a door before you walk through it.");
      return { life: next, character: sheet };
    }
    next.insideId = b.id;
    next.inspecting = b.id;
    next.posX = b.x;
    next.posZ = b.z;
    const night = isNight(next);
    const npc = npcFor(b.district ?? next.district, night, b.abandoned ? "abandoned" : b.use);
    push(
      next,
      night
        ? `You go in. ${b.name} changes temperature. ${npc.night}`
        : `The door shuts the street out. ${npc.day}`,
    );
    return { life: next, character: sheet };
  }

  if (action.type === "exit") {
    if (!next.insideId) return { life: next, character: sheet };
    const b = BUILDING_BY_ID[next.insideId];
    next.insideId = null;
    push(next, b ? `You step out of ${b.name}. The sidewalk takes you back.` : "You are on the sidewalk.");
    return { life: next, character: sheet };
  }

  if (action.type === "street") {
    return streetAct(next, sheet, action.act);
  }

  if (action.type === "streetTalk") {
    const soul = SOUL_BY_ID[action.actorId];
    if (!soul) {
      push(next, "They have already left this block.");
      return { life: next, character: sheet };
    }
    if ((next.absent?.[soul.id] ?? 0) > next.day) {
      push(next, `${soul.name} is not on the route. The absence is the news.`);
      return { life: next, character: sheet };
    }
    return applyInteraction(next, sheet, { id: soul.id, name: soul.name });
  }

  if (action.type === "loot") {
    if (!next.loot) return { life: next, character: sheet };
    if (action.take) {
      sheet = applyLoot(next, sheet, next.loot.drops);
      push(next, `You take it. ${next.loot.summary}`);
    } else {
      push(next, "You leave the pockets. Someone else will not.");
    }
    next.loot = null;
    return { life: next, character: sheet };
  }

  if (action.type === "mill") {
    const milled = millAround(next, sheet);
    milled.life.boredom = clamp((milled.life.boredom ?? 28) - 18, 0, 100);
    milled.character = award(milled.life, milled.character, 8, "You worked a room.");
    return milled;
  }

  if (action.type === "eat") {
    if ((next.rations ?? 0) > 0) {
      next.rations -= 1;
      next.hunger = clamp((next.hunger ?? 22) - 48, 0, 100);
      next.boredom = clamp((next.boredom ?? 28) - 6, 0, 100);
      tickMinutes(next, 25);
      push(next, `A meal from the reserve. ${next.rations} left.`);
      return { life: next, character: sheet };
    }
    const price = mealCost(sheet);
    if (next.caps < price) {
      push(next, `A plate is ${price} caps. You have ${next.caps}.`);
      return { life: next, character: sheet };
    }
    next.caps -= price;
    next.hunger = clamp((next.hunger ?? 22) - 48, 0, 100);
    next.boredom = clamp((next.boredom ?? 28) - 6, 0, 100);
    tickMinutes(next, 25);
    push(next, `A plate that used to be meat. −${price} caps. Hunger eases.`);
    return { life: next, character: sheet };
  }

  if (action.type === "stock") {
    if (action.kind === "meal") {
      const price = mealCost(sheet);
      if (next.caps < price) {
        push(next, `A meal to pack is ${price} caps. You have ${next.caps}.`);
        return { life: next, character: sheet };
      }
      next.caps -= price;
      next.rations = (next.rations ?? 0) + 1;
      tickMinutes(next, 10);
      push(next, `You pack a meal. ${next.rations} in reserve. −${price} caps.`);
      return { life: next, character: sheet };
    }
    const price = waterCost(sheet);
    if (next.caps < price) {
      push(next, `Water to pack is ${price} caps. You have ${next.caps}.`);
      return { life: next, character: sheet };
    }
    next.caps -= price;
    next.waters = (next.waters ?? 0) + 1;
    tickMinutes(next, 10);
    push(next, `You pack a canteen. ${next.waters} in reserve. −${price} caps.`);
    return { life: next, character: sheet };
  }

  if (action.type === "drink") {
    if (action.kind === "vodka") {
      const hooked = dose(next, sheet, "vodka");
      if (hooked && hooked.startsWith("No ")) {
        push(next, hooked);
        return { life: next, character: sheet };
      }
      next.thirst = clamp((next.thirst ?? 18) - 22, 0, 100);
      next.boredom = clamp((next.boredom ?? 28) - 16, 0, 100);
      next.fatigue = clamp((next.fatigue ?? 12) + 8, 0, 100);
      tickMinutes(next, 20);
      push(next, hooked ?? "Vodka. The room tilts toward a better lie.");
      return { life: next, character: sheet };
    }
    if ((next.waters ?? 0) > 0) {
      next.waters -= 1;
      next.thirst = clamp((next.thirst ?? 18) - 52, 0, 100);
      tickMinutes(next, 10);
      push(next, `Canteen from the reserve. ${next.waters} left.`);
      return { life: next, character: sheet };
    }
    const price = waterCost(sheet);
    if (next.caps < price) {
      push(next, `Water is ${price} caps here. Reno taxes thirst.`);
      return { life: next, character: sheet };
    }
    next.caps -= price;
    next.thirst = clamp((next.thirst ?? 18) - 52, 0, 100);
    tickMinutes(next, 10);
    push(next, `Water that has seen better pipes. −${price} caps.`);
    return { life: next, character: sheet };
  }

  if (action.type === "useStash") {
    const hooked = dose(next, sheet, action.stash);
    if (hooked && hooked.startsWith("No ")) {
      push(next, hooked);
      return { life: next, character: sheet };
    }
    if (action.stash === "jet") {
      next.fatigue = clamp((next.fatigue ?? 12) - 40, 0, 100);
      next.boredom = clamp((next.boredom ?? 28) - 12, 0, 100);
    } else if (action.stash === "psycho") {
      next.fatigue = clamp((next.fatigue ?? 12) - 10, 0, 100);
    } else if (action.stash === "buffout") {
      next.hunger = clamp((next.hunger ?? 22) - 8, 0, 100);
    } else if (action.stash === "mentats") {
      next.boredom = clamp((next.boredom ?? 28) - 20, 0, 100);
    } else if (action.stash === "cigarettes") {
      next.boredom = clamp((next.boredom ?? 28) - 14, 0, 100);
    } else if (action.stash === "marijuana") {
      next.boredom = clamp((next.boredom ?? 28) - 22, 0, 100);
      next.fatigue = clamp((next.fatigue ?? 12) + 6, 0, 100);
    } else if (action.stash === "cocaine") {
      next.fatigue = clamp((next.fatigue ?? 12) - 18, 0, 100);
      next.boredom = clamp((next.boredom ?? 28) - 10, 0, 100);
    } else if (action.stash === "vodka") {
      next.thirst = clamp((next.thirst ?? 18) - 18, 0, 100);
      next.boredom = clamp((next.boredom ?? 28) - 16, 0, 100);
    }
    tickMinutes(next, 15);
    push(next, hooked ?? `You take the ${STASH_META[action.stash].name}.`);
    return { life: next, character: sheet };
  }

  if (action.type === "spendSkill") {
    const spent = trySpendSkill(sheet, action.skill);
    if (!spent.ok) {
      push(next, spent.note);
      return { life: next, character: sheet };
    }
    push(next, `You put the hours in. ${spent.note}.`);
    return { life: next, character: spent.character };
  }

  if (action.type === "pickPerk") {
    const picked = tryPickPerk(sheet, action.perk, action.tagSkill);
    if (!picked.ok) {
      push(next, picked.note);
      return { life: next, character: sheet };
    }
    const d = derive(picked.character);
    next.hpMax = d.hp;
    push(next, `Perk: ${picked.note}.`);
    return { life: next, character: picked.character };
  }

  if (action.type === "seekDealer") {
    ensureIntel(next);
    const dealer = next.dealers.find((d) => d.id === action.dealer);
    if (!dealer) {
      push(next, "That corner went quiet.");
      return { life: next, character: sheet };
    }
    if (dealer.district !== next.district) {
      tick(next, 1);
      next.district = dealer.district;
      const dest = DISTRICT_POS[dealer.district];
      next.posX = dest.x;
      next.posZ = dest.z;
      push(next, `You cut across town looking for ${dealer.name}.`);
    }
    tickMinutes(next, 40);
    next.soughtDealer = dealer.id;
    next.boredom = clamp((next.boredom ?? 28) - 8, 0, 100);
    const gang = dealer.gang ? GANG_BY_ID[dealer.gang].name : "no family";
    push(next, `${dealer.name}. ${dealer.note} ${gang}.`);
    sheet = award(next, sheet, 12, "You found the bagman.");
    if (dealer.gang && next.heat >= 24) {
      next.friction[dealer.gang] = clamp((next.friction[dealer.gang] ?? 0) + 2, 0, 100);
      push(next, "The corner noticed. It goes on a family tab, not into a fight on the sidewalk.");
    }
    return { life: next, character: sheet };
  }

  if (action.type === "dealBuy") {
    ensureIntel(next);
    const dealer = next.dealers.find((d) => d.id === action.dealer);
    if (!dealer) {
      push(next, "Gone.");
      return { life: next, character: sheet };
    }
    if (!dealer.wares.includes(action.chem)) {
      push(next, `${dealer.name} does not carry ${STASH_META[action.chem].name}.`);
      return { life: next, character: sheet };
    }
    if (dealer.district !== next.district) {
      push(next, `Find ${dealer.name} on ${DISTRICT_BY_ID[dealer.district].name} first.`);
      return { life: next, character: sheet };
    }
    const qty = Math.max(1, action.qty);
    const district = DISTRICT_BY_ID[dealer.district];
    const trader = hasPerk(sheet, "masterTrader") ? 0.85 : 1;
    const house = dealer.size === "house" ? 0.9 : dealer.size === "runner" ? 1.05 : 1;
    const price = Math.round(STASH_META[action.chem].street * district.buy * trader * house * qty);
    if (next.caps < price) {
      push(next, `${price} caps. You have ${next.caps}.`);
      return { life: next, character: sheet };
    }
    next.caps -= price;
    next.stash[action.chem] += qty;
    const gained = addHeat(next, sheet, dealer.gang === "mordinos" ? 2 : 5, true);
    tickMinutes(next, 25);
    push(next, `Bought ${qty} ${STASH_META[action.chem].name} off ${dealer.name} for ${price} caps. Heat +${gained}.`);
    if (gained > 0) tracks(next, sheet, "A buy that size has a witness.");
    return { life: next, character: sheet };
  }

  if (action.type === "seekMark") {
    ensureIntel(next);
    const mark = next.marks.find((m) => m.id === action.mark);
    if (!mark) {
      push(next, "That money left town.");
      return { life: next, character: sheet };
    }
    if (mark.district !== next.district) {
      tick(next, 1);
      next.district = mark.district;
      const dest = DISTRICT_POS[mark.district];
      next.posX = dest.x;
      next.posZ = dest.z;
      push(next, `You hunt ${mark.name} to ${DISTRICT_BY_ID[mark.district].name}.`);
    }
    tickMinutes(next, 35);
    next.soughtMark = mark.id;
    const guards = guardCount(mark.wealth);
    push(
      next,
      `${mark.name}. ${mark.title} ${mark.wealth} caps on a good week. ${guards} armed guard${guards === 1 ? "" : "s"}.`,
    );
    sheet = award(next, sheet, 10, "You put a name to the money.");
    return { life: next, character: sheet };
  }

  if (action.type === "markAct") {
    ensureIntel(next);
    const mark = next.marks.find((m) => m.id === action.mark);
    if (!mark) {
      push(next, "Gone.");
      return { life: next, character: sheet };
    }
    if (mark.district !== next.district) {
      push(next, `They keep court at ${DISTRICT_BY_ID[mark.district].name}.`);
      return { life: next, character: sheet };
    }
    const guards = guardCount(mark.wealth);
    tickMinutes(next, 50);
    if (action.act === "befriend") {
      const roll = rollSkill(sheet, next, "speech", mark.mood === "warm" ? 10 : mark.mood === "hostile" ? -20 : 0);
      if (roll.success) {
        mark.mood = mark.mood === "warm" || roll.crit ? "friend" : "warm";
        const gift = roll.crit ? Math.round(mark.wealth * 0.08) : 8 + dN(16);
        next.caps += gift;
        addFame(next, 1);
        next.boredom = clamp((next.boredom ?? 28) - 14, 0, 100);
        push(next, `Speech ${roll.roll}. ${mark.name} warms. +${gift} caps and a name that opens a door.`);
        sheet = award(next, sheet, 35, "You made a rich friend.");
      } else {
        mark.mood = d100() <= 25 ? "hostile" : mark.mood;
        push(next, `Speech ${roll.roll}. ${mark.name} looks through you.`);
        if (mark.mood === "hostile" && d100() <= 40) beginGuardFight(next, sheet, mark, "The guards take the insult personally.");
      }
      return { life: next, character: sheet };
    }
    if (action.act === "rob") {
      const roll = rollSkill(sheet, next, "steal", -guards * 8);
      if (roll.success) {
        const take = Math.round(mark.wealth * (roll.crit ? 0.35 : 0.18));
        next.caps += take;
        const gained = addHeat(next, sheet, 10 + guards, true);
        mark.mood = "hostile";
        next.boredom = clamp((next.boredom ?? 28) - 20, 0, 100);
        push(next, `Steal ${roll.roll}. You lift ${take} caps off ${mark.name}. Heat +${gained}.`);
        sheet = award(next, sheet, 55, "A quiet robbery.");
        tracks(next, sheet, "The lift was not as quiet as it felt.");
      } else {
        mark.mood = "hostile";
        push(next, `Steal ${roll.roll}. A hand on your collar.`);
        beginGuardFight(next, sheet, mark, `You botch the lift on ${mark.name}.`);
      }
      return { life: next, character: sheet };
    }
    const roll = rollSkill(sheet, next, "sneak", -guards * 6);
    if (!roll.success) {
      mark.mood = "hostile";
      push(next, `Sneak ${roll.roll}. They see the bag before you close it.`);
      beginGuardFight(next, sheet, mark, `The grab on ${mark.name} goes loud.`);
      return { life: next, character: sheet };
    }
    mark.mood = "hostile";
    const ransom = Math.round(mark.wealth * 0.4);
    next.caps += ransom;
    const gained = addHeat(next, sheet, 18 + guards * 3, true);
    addFame(next, 2);
    next.boredom = clamp((next.boredom ?? 28) - 25, 0, 100);
    push(
      next,
      `Sneak ${roll.roll}. ${mark.name} leaves the street in a bag and a note. ${ransom} caps by morning. Heat +${gained}.`,
    );
    sheet = award(next, sheet, 90, "A kidnapping the families will remember.");
    tracks(next, sheet, "A missing wallet with guards is not a rumor. It is a hunt.");
    return { life: next, character: sheet };
  }

  if (action.type === "talk") {
    if (action.who !== "angela" || !angelaPresent(next)) {
      push(next, "She isn't here.");
      return { life: next, character: sheet };
    }
    const view = angelaOpen(sheet, next);
    next.dialogue = { who: "angela", node: view.node };
    push(next, `Angela Bishop: ${view.line}`);
    return { life: next, character: sheet };
  }

  if (action.type === "dialogue") {
    const result = angelaReply(sheet, next, action.reply);
    next = result.life;
    if (result.view?.closed) {
      push(next, result.view.line);
    } else if (result.view) {
      push(next, `Angela Bishop: ${result.view.line}`);
    }
    return { life: next, character: sheet };
  }

  if (action.type === "combat") {
    if (!next.combat) return { life: next, character: sheet };
    if (action.move === "stimpak") {
      const used = consumeItem(sheet.loadout, "stimpak", 1);
      if (!used) {
        push(next, "No stimpaks in the pack.");
        return { life: next, character: sheet };
      }
      sheet = { ...sheet, loadout: used, updatedAt: Date.now() };
    }
    next.combat = playMove(next.combat, action.move, action.part, {
      q: action.q,
      r: action.r,
      targetId: action.targetId,
    });
    const p = playerOf(next.combat);
    if (p) next.hp = p.hp;
    if (next.combat.result) sheet = settleCombat(next, sheet);
    return { life: next, character: sheet };
  }

  if (action.type === "streetContact") {
    openCityContact(next, sheet, action);
    return { life: next, character: sheet };
  }

  if (action.type === "encounter") {
    if (!next.sighting) return { life: next, character: sheet };
    if (action.choice === "flee") {
      push(next, "You saw them first. You cut down a side street before they close. They do not get a second swing this hour.");
      next.sighting = null;
      grantReprieve(next, 35);
      tick(next, 1);
      return { life: next, character: sheet };
    }
    if (action.choice === "talk") {
      const roll = skillRoll(skill(sheet, "speech"), next.sighting.spotted ? 10 : -10);
      if (roll.success) {
        const pay = roll.crit ? 0 : 4 + dN(10);
        next.caps = Math.max(0, next.caps - pay);
        push(
          next,
          roll.crit
            ? `Speech ${roll.roll}. They laugh, clap your shoulder, and walk. No blood.`
            : `Speech ${roll.roll}. You talk them down. ${pay ? `${pay} caps for their trouble.` : "They leave empty."}`,
        );
        next.sighting = null;
        grantReprieve(next, 40);
        if (next.tension >= 48) next.tension = clamp(next.tension - 4, 0, 100);
        tick(next, 1);
        return { life: next, character: sheet };
      }
      push(next, `Speech ${roll.roll} vs ${roll.target}%. They are not buying it.`);
      startFromSighting(next, sheet, "foe");
      return { life: next, character: sheet };
    }
    startFromSighting(next, sheet, "player");
    return { life: next, character: sheet };
  }

  if (action.type === "arrive") {
    next.district = action.district;
    next.posX = action.x;
    next.posZ = action.z;
    const d = DISTRICT_BY_ID[action.district];
    push(next, `${d.name}. ${d.blurb}`);
    if (angelaPresent(next)) push(next, angelaHook(next));
    return { life: next, character: sheet };
  }

  if (action.type === "walkTick") {
    next.posX = action.x;
    next.posZ = action.z;
    tickMinutes(next, 2);
    const zone = zoneAt(next.posX, next.posZ);
    const extra = zone === "strip" ? -12 : zone === "alley" ? 4 : zone === "wild" ? 8 : 0;
    maybeEncounter(next, sheet, extra + (isNight(next) ? 3 : 0), "travel");
    return { life: next, character: sheet };
  }

  if (action.type === "travel") {
    if (action.district === next.district) {
      push(next, "You are already here.");
      return { life: next, character: sheet };
    }
    tick(next, 1);
    next.district = action.district;
    const dest = DISTRICT_POS[action.district];
    next.posX = dest.x;
    next.posZ = dest.z;
    next.inspecting = null;
    const d = DISTRICT_BY_ID[action.district];
    push(next, `You cut across town to ${d.name}. ${d.blurb}`);
    if (angelaPresent(next)) push(next, angelaHook(next));
    maybeEncounter(next, sheet, isNight(next) ? 8 : 0, "travel");
    return { life: next, character: sheet };
  }

  if (action.type === "sleep") {
    const home = housingOf(next);
    if (home && home.district !== next.district) {
      next.district = home.district;
      push(next, `You walk home to ${home.name}.`);
    }
    const hours = next.hour >= 8 ? 24 - next.hour + 8 : 8 - next.hour;
    tick(next, Math.max(6, hours));
    payWeeklyRent(next);
    const derived = derive(sheet);
    const rate = home ? derived.healingRate * 4 : derived.healingRate;
    const healed = Math.min(next.hpMax - next.hp, Math.max(1, rate + (hasPerk(sheet, "healer") ? 6 : 0)));
    next.hp = Math.min(next.hpMax, next.hp + healed);
    next.fatigue = 8;
    next.hunger = clamp((next.hunger ?? 22) + 6, 0, 100);
    next.thirst = clamp((next.thirst ?? 18) + 5, 0, 100);
    next.boredom = clamp((next.boredom ?? 28) + 2, 0, 100);
    next.strain = Math.max(0, (next.strain ?? 0) - 400);
    if (!home) {
      push(next, `You sleep in a doorway. +${healed} HP. The city does not keep secrets.`);
      maybeEncounter(next, sheet, 18, "sleep");
    } else {
      push(next, `Morning in ${home.name}. +${healed} HP.`);
      if (home.kind === "squat" && housingDanger(next) >= 6) {
        maybeEncounter(next, sheet, housingDanger(next), "sleep");
      }
    }
    return { life: next, character: sheet };
  }

  if (action.type === "wander") {
    tick(next, 2);
    const roll = d100();
    const district = DISTRICT_BY_ID[next.district];
    if (roll <= 40) {
      const find = 4 + dN(12) + (hasPerk(sheet, "fortuneFinder") ? 6 : 0);
      next.caps += find;
      next.boredom = clamp((next.boredom ?? 28) - 10, 0, 100);
      push(next, `A dropped roll, a drunk, a lie. +${find} caps.`);
      sheet = award(next, sheet, 18, "The street paid a little.");
    } else if (roll <= 52) {
      const chem: ChemId = d100() <= 60 ? "jet" : "buffout";
      next.stash[chem] += 1;
      push(next, `You lift a bag of ${CHEMS[chem].name} off a table nobody was watching.`);
    } else if (roll <= 62) {
      addFame(next, 1);
      push(next, "A tout from the Ring watches you walk. He does not introduce himself.");
    } else if (roll <= 74 && district.gang) {
      push(next, `${GANG_BY_ID[district.gang].name} boys clock you. ${GANG_BY_ID[district.gang].pitch}`);
    } else if (roll <= 86) {
      const rumor = skillRoll(skill(sheet, "speech"), 0);
      push(
        next,
        rumor.success
          ? "A bartender talks. Bishop money is moving east. Wright stills are dry this week."
          : "People look through you. Reno is a closed room today.",
      );
    } else {
      push(next, `${district.blurb} You walk it anyway.`);
    }
    return { life: next, character: sheet };
  }

  if (action.type === "oddJob") {
    tick(next, 4);
    const work = skillRoll(Math.max(skill(sheet, "barter"), skill(sheet, "repair"), skill(sheet, "speech")), -10);
    if (work.success) {
      const pay = 12 + dN(18) + (hasPerk(sheet, "fortuneFinder") ? 8 : 0);
      next.caps += pay;
      next.boredom = clamp((next.boredom ?? 28) + 8, 0, 100);
      next.fatigue = clamp((next.fatigue ?? 12) + 10, 0, 100);
      push(next, `Odd work. ${pay} caps and a backache.`);
      sheet = award(next, sheet, 70, "Honest work, more or less.");
    } else {
      const pay = 4 + dN(6);
      next.caps += pay;
      next.boredom = clamp((next.boredom ?? 28) + 10, 0, 100);
      push(next, `They underpay. ${pay} caps. You still take it.`);
      sheet = award(next, sheet, 25, "Even a bad job teaches the street.");
    }
    maybeEncounter(next, sheet, 4, "work");
    return { life: next, character: sheet };
  }

  if (action.type === "rent") {
    const home = HOUSING_BY_ID[action.housing];
    if (!home || home.kind !== "rent") {
      push(next, "That is not a rented room.");
      return { life: next, character: sheet };
    }
    if (home.district !== next.district) {
      push(next, `Go to ${DISTRICT_BY_ID[home.district].name} first.`);
      return { life: next, character: sheet };
    }
    if (home.requiresGang && (next.gangId !== home.requiresGang || next.gangRank < (home.requiresRank ?? 0))) {
      push(next, home.note);
      return { life: next, character: sheet };
    }
    if (next.caps < home.rent) {
      push(next, `You need ${home.rent} caps for the first week.`);
      return { life: next, character: sheet };
    }
    next.caps -= home.rent;
    next.housingId = home.id;
    next.squatProgress = 0;
    next.rentPaidWeek = Math.floor((next.day - 1) / 7);
    tick(next, 1);
    push(next, `You take ${home.name}. ${home.note}`);
    return { life: next, character: sheet };
  }

  if (action.type === "squat") {
    const home = HOUSING_BY_ID[action.housing];
    if (!home || home.kind !== "squat") {
      push(next, "That is not a squat.");
      return { life: next, character: sheet };
    }
    if (home.district !== next.district) {
      push(next, `Go to ${DISTRICT_BY_ID[home.district].name} first.`);
      return { life: next, character: sheet };
    }
    next.housingId = home.id;
    next.squatProgress = 0;
    tick(next, 1);
    push(next, `You claim ${home.name}. ${home.note}`);
    maybeEncounter(next, sheet, home.danger, "wander");
    return { life: next, character: sheet };
  }

  if (action.type === "leaveHome") {
    if (!next.housingId) {
      push(next, "You already sleep where the city puts you.");
      return { life: next, character: sheet };
    }
    const name = HOUSING_BY_ID[next.housingId].name;
    next.housingId = null;
    next.squatProgress = 0;
    push(next, `You walk out of ${name}. The street is the landlord now.`);
    return { life: next, character: sheet };
  }

  if (action.type === "convert") {
    const home = housingOf(next);
    if (!home || home.kind !== "squat") {
      push(next, "Nothing here to convert.");
      return { life: next, character: sheet };
    }
    if (home.district !== next.district) {
      push(next, `Work the squat on site. ${home.name} is in ${DISTRICT_BY_ID[home.district].name}.`);
      return { life: next, character: sheet };
    }
    if (next.squatProgress >= 100) {
      push(next, `${home.name} already holds. You could almost call it a house.`);
      return { life: next, character: sheet };
    }
    tick(next, 8);
    const target = home.convertTarget ?? 45;
    const id = home.convertSkill ?? "repair";
    const roll = skillRoll(skill(sheet, id), 0);
    const gain = roll.crit ? 40 : roll.success ? 20 + dN(12) : 4 + dN(6);
    next.squatProgress = clamp(next.squatProgress + gain, 0, 100);
    push(
      next,
      roll.success
        ? `You work ${home.name} (${roll.roll} vs ${roll.target}% ${id}). Converted ${next.squatProgress}%.`
        : `The work fights back (${roll.roll} vs ${roll.target}%). Converted ${next.squatProgress}%.`,
    );
    if (next.squatProgress >= 100) push(next, `${home.name} will hold weather now. Still not safe. Safer.`);
    maybeEncounter(next, sheet, home.danger - 2, "work");
    return { life: next, character: sheet };
  }

  if (action.type === "payRent") {
    const home = housingOf(next);
    if (!home || home.kind !== "rent") {
      push(next, "Nobody is collecting.");
      return { life: next, character: sheet };
    }
    if (next.caps < home.rent) {
      push(next, `Short ${home.rent - next.caps} caps.`);
      return { life: next, character: sheet };
    }
    next.caps -= home.rent;
    push(next, `You pay ${home.rent} caps on ${home.name}. A week bought.`);
    return { life: next, character: sheet };
  }

  if (action.type === "joinGang") {
    const err = canJoin(next, action.gang, sheet);
    if (err) {
      push(next, err);
      return { life: next, character: sheet };
    }
    tick(next, 1);
    const speech = skillRoll(skill(sheet, "speech"), 0);
    if (!speech.success && next.caps < 50) {
      push(next, `They laugh you out (${speech.roll} vs ${speech.target}% Speech). Come back with money or a better story.`);
      return { life: next, character: sheet };
    }
    if (!speech.success) {
      next.caps -= 50;
      push(next, `Fifty caps buys a seat at the table. They still do not like you.`);
    }
    next.gangId = action.gang;
    next.gangRank = 1;
    next.gangRep[action.gang] += 5;
    next.gangRep[GANG_BY_ID[action.gang].rival] -= 8;
    const g = GANG_BY_ID[action.gang];
    push(next, `You are in with the ${g.name}. ${g.head}. Rank: ${g.ranks[0]}. ${g.credo}`);
    return { life: next, character: sheet };
  }

  if (action.type === "quitGang") {
    if (!next.gangId) {
      push(next, "You do not owe a family.");
      return { life: next, character: sheet };
    }
    const name = GANG_BY_ID[next.gangId].name;
    next.gangRep[next.gangId] -= 10;
    next.heat = clamp(next.heat + 8, 0, 100);
    next.gangId = null;
    next.gangRank = 0;
    tick(next, 1);
    push(next, `You walk from the ${name}. They will remember.`);
    maybeEncounter(next, sheet, 16, "wander");
    return { life: next, character: sheet };
  }

  if (action.type === "gangJob") {
    if (!next.gangId) {
      push(next, "No family, no work.");
      return { life: next, character: sheet };
    }
    const gang = GANG_BY_ID[next.gangId];
    if (next.district !== gang.turf && d100() <= 40) {
      push(next, `The ${gang.name} want you on turf. Go to ${DISTRICT_BY_ID[gang.turf].name}.`);
      return { life: next, character: sheet };
    }
    tick(next, 4);
    const jobs: Record<GangId, { skill: SkillId; ok: string; pay: number }[]> = {
      mordinos: [
        { skill: "sneak", ok: "Jet from the Stables. Myron doesn't look up. You don't ask whose lungs.", pay: 28 },
        { skill: "unarmed", ok: "Golden Globes muscle. Little Jesus wanted a reminder delivered in teeth.", pay: 26 },
        { skill: "steal", ok: "A bag off a Virgin Street tourist. Big Jesus likes volume.", pay: 24 },
      ],
      wrights: [
        { skill: "meleeWeapons", ok: "A still, a cousin, a Mordino dealer who won't sell on Wright blocks.", pay: 22 },
        { skill: "speech", ok: "You ask around about Richard. Jet. A party. Nobody wants to say Mordino.", pay: 20 },
        { skill: "repair", ok: "The stills run. Orville nods like that's love.", pay: 18 },
      ],
      salvatores: [
        { skill: "smallGuns", ok: "A quiet door. Mason said don't miss. You didn't.", pay: 36 },
        { skill: "energyWeapons", ok: "Louis Salvatore's toy stays holstered. You watched the drop anyway.", pay: 40 },
        { skill: "sneak", ok: "Old Reno. A room that didn't happen. The oxygen tank hissed once.", pay: 34 },
      ],
      bishops: [
        { skill: "gambling", ok: "Shark Club floor. The books like your numbers. Mr. Bishop does not look up.", pay: 32 },
        { skill: "speech", ok: "A message for a man who still thinks NCR is a rumor. He thinks otherwise now.", pay: 34 },
        { skill: "smallGuns", ok: "Collection. Polite. The smile did not reach anything.", pay: 30 },
      ],
    };
    const pool = jobs[next.gangId];
    const job = pool[dN(pool.length) - 1]!;
    const roll = skillRoll(skill(sheet, job.skill), next.gangRank * 2);
    const pay = job.pay + next.gangRank * 6 + dN(10);
    if (roll.fumble) {
      const gained = addHeat(next, sheet, 8, true);
      push(next, `The job goes loud (${roll.roll}). ${gang.head} is not pleased. Heat +${gained}. ${GANG_BY_ID[gang.rival].name} will walk it off later.`);
      next.friction[gang.rival] = clamp((next.friction[gang.rival] ?? 0) + 12, 0, 100);
      noteOutrage(next, gang.rival, 6);
      return { life: next, character: sheet };
    }
    if (roll.success) {
      next.caps += pay;
      next.gangRep[next.gangId] += 3;
      next.gangRep[gang.rival] -= 2;
      if (next.gangId === "mordinos") next.stash.jet += 1;
      if (next.gangRep[next.gangId] >= 8 + next.gangRank * 10 && next.gangRank < 5) {
        next.gangRank += 1;
        push(next, `${gangRankName(next)}. ${gang.head} noticed.`);
      }
      push(next, `${job.ok} +${pay} caps.`);
      sheet = award(next, sheet, 85, "Family work.");
    } else {
      const crumbs = Math.round(pay / 3);
      next.caps += crumbs;
      push(next, `Sloppy work (${roll.roll} vs ${roll.target}%). +${crumbs} caps and a look.`);
    }
    maybeEncounter(next, sheet, 6, "work");
    return { life: next, character: sheet };
  }

  if (action.type === "buyChems") {
    const district = DISTRICT_BY_ID[next.district];
    const qty = Math.max(1, action.qty);
    const price = Math.round(STASH_META[action.chem].street * district.buy * (hasPerk(sheet, "masterTrader") ? 0.85 : 1) * qty);
    if (next.caps < price) {
      push(next, `${STASH_META[action.chem].name} is ${price} caps here. You have ${next.caps}.`);
      return { life: next, character: sheet };
    }
    next.caps -= price;
    next.stash[action.chem] += qty;
    tick(next, 1);
    const gained = addHeat(next, sheet, district.gang === "mordinos" ? 2 : 5, true);
    push(next, `Bought ${qty} ${STASH_META[action.chem].name} for ${price} caps on ${district.name}. Heat +${gained}.`);
    maybeEncounter(next, sheet, 4, "work");
    return { life: next, character: sheet };
  }

  if (action.type === "sellChems") {
    const district = DISTRICT_BY_ID[next.district];
    const qty = Math.max(1, Math.min(action.qty, next.stash[action.chem]));
    if (qty <= 0) {
      push(next, `Your stash has no ${STASH_META[action.chem].name}.`);
      return { life: next, character: sheet };
    }
    const barter = skillRoll(skill(sheet, "barter") + needPen(next), 0);
    const trader = hasPerk(sheet, "masterTrader") ? 1.25 : 1;
    const mult = district.sell * (barter.success ? 1.15 : 0.9) * trader;
    const price = Math.round(STASH_META[action.chem].street * mult * qty);
    next.stash[action.chem] -= qty;
    next.caps += price;
    tick(next, 1);
    const gained = addHeat(next, sheet, 4 + qty, true);
    push(
      next,
      `Sold ${qty} ${STASH_META[action.chem].name} for ${price} caps (${barter.roll} vs ${barter.target}% Barter). Heat +${gained}.`,
    );
    maybeEncounter(next, sheet, 8 + qty * 2, "work");
    return { life: next, character: sheet };
  }

  if (action.type === "joinBoxing") {
    if (!atDistrict(next, "stables")) {
      push(next, "The Ring is east. Walk there.");
      return { life: next, character: sheet };
    }
    if (next.boxingRank !== "unsigned") {
      push(next, `You already fight as ${next.boxingRank}.`);
      return { life: next, character: sheet };
    }
    tick(next, 1);
    next.boxingRank = "prelim";
    next.nextFightDay = next.day + 1;
    push(next, "A man with a cigar writes your name on a card. Prelim. Tomorrow if you show.");
    return { life: next, character: sheet };
  }

  if (action.type === "train") {
    if (!atDistrict(next, "stables")) {
      push(next, "Train at the Ring.");
      return { life: next, character: sheet };
    }
    tick(next, 3);
    const roll = skillRoll(skill(sheet, "unarmed"), 0);
    if (roll.success) {
      next.trainBonus = clamp(next.trainBonus + 5, 0, 20);
      push(next, `Sawdust and blood in the nose. Unarmed edge +${next.trainBonus} for the next card.`);
    } else {
      next.hp = Math.max(1, next.hp - 2);
      push(next, `The bag wins today. −2 HP.`);
    }
    return { life: next, character: sheet };
  }

  if (action.type === "fightCard") {
    if (!atDistrict(next, "stables")) {
      push(next, "Fights are at the Ring.");
      return { life: next, character: sheet };
    }
    if (next.boxingRank === "unsigned") {
      push(next, "Sign first.");
      return { life: next, character: sheet };
    }
    if (next.day < next.nextFightDay) {
      push(next, `Your card is day ${next.nextFightDay}. Train or wait.`);
      return { life: next, character: sheet };
    }
    advanceBoxing(next);
    const foe = boxingFoe(next.boxingRank);
    const player = playerCombatant(sheet, {
      boxing: true,
      trainBonus: next.trainBonus,
      hp: next.hp,
    });
    const purse = boxingPurse(next.boxingRank, next.fame);
    const light = lightingOf(next);
    const layout = generateEncounter({ setting: "ring", surprise: false, foeCount: 1, radius: 2 });
    player.hexQ = layout.player.q;
    player.hexR = layout.player.r;
    foe.hexQ = layout.foes[0]?.q ?? 1;
    foe.hexR = layout.foes[0]?.r ?? 0;
    next.combat = placeOnStreet(
      next,
      startCombat({
        kind: "boxing",
        player,
        foes: [foe],
        hexes: 1,
        lighting: 0,
        lightingLabel: "Ring lights · 0%",
        purse,
        initiator: "player",
        map: layout.map,
      }),
      "ring",
    );
    push(next, `The Ring. ${foe.name}. Purse ${purse} if you stand.`);
    return { life: next, character: sheet };
  }

  if (action.type === "stimpak") {
    if (countItem(sheet.loadout, "stimpak") <= 0) {
      push(next, "No stimpaks in the pack.");
      return { life: next, character: sheet };
    }
    const used = consumeItem(sheet.loadout, "stimpak", 1);
    if (!used) return { life: next, character: sheet };
    sheet = { ...sheet, loadout: used, updatedAt: Date.now() };
    const heal = 10 + dN(10);
    next.hp = Math.min(next.hpMax, next.hp + heal);
    push(next, `Stimpak. +${heal} HP.`);
    return { life: next, character: sheet };
  }

  if (
    action.type === "courtFamily" ||
    action.type === "carouse" ||
    action.type === "business" ||
    action.type === "dealing" ||
    action.type === "lab"
  ) {
    return runHustle(next, sheet, action);
  }

  return { life: next, character: sheet };
}

export function housingHere(district: DistrictId) {
  return HOUSING.filter((h) => h.district === district);
}

export function chemQty(life: RenoLife): number {
  return Object.values(life.stash ?? {}).reduce((n, v) => n + (v ?? 0), 0);
}
