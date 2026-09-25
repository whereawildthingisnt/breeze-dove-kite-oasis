import { d100, dN, rollExpr, clamp } from "./dice";
import {
  axialDistance,
  cellAt,
  hexKey,
  isExit,
  isWalkable,
  nearestExit,
  stepToward,
} from "./hex";
import type {
  BodyPart,
  CombatKind,
  CombatMove,
  CombatState,
  Combatant,
  HexBoard,
  Stance,
} from "./types";

export const AIMED_RANGED: Record<BodyPart, { hit: number; label: string }> = {
  torso: { hit: 0, label: "Torso" },
  legs: { hit: -20, label: "Legs" },
  arms: { hit: -30, label: "Arms" },
  groin: { hit: -30, label: "Groin" },
  head: { hit: -40, label: "Head" },
  eyes: { hit: -60, label: "Eyes" },
};

export const AIMED_MELEE: Record<BodyPart, { hit: number; label: string }> = {
  torso: { hit: 0, label: "Torso" },
  legs: { hit: -10, label: "Legs" },
  arms: { hit: -15, label: "Arms" },
  groin: { hit: -15, label: "Groin" },
  head: { hit: -20, label: "Head" },
  eyes: { hit: -30, label: "Eyes" },
};

export interface ToHitInfo {
  chance: number;
  skill: number;
  peBonus: number;
  rangePen: number;
  acPen: number;
  lightPen: number;
  strPen: number;
  aimedPen: number;
  stanceBonus: number;
  coverPen: number;
  canFire: boolean;
  reason?: string;
  breakdown: string;
}

function cloneCombat(state: CombatState): CombatState {
  return {
    ...state,
    combatants: state.combatants.map((c) => ({
      ...c,
      crippled: { ...c.crippled },
    })),
    log: [...state.log],
    order: [...state.order],
    map: state.map
      ? { ...state.map, cells: state.map.cells.map((cell) => ({ ...cell })) }
      : null,
  };
}

function byId(state: CombatState, id: string): Combatant {
  const found = state.combatants.find((c) => c.id === id);
  if (!found) throw new Error(`missing combatant ${id}`);
  return found;
}

function current(state: CombatState): Combatant {
  return byId(state, state.order[state.turn] ?? state.order[0]!);
}

export function sideOf(c: Combatant): "player" | "ally" | "foe" {
  if (c.side) return c.side;
  return c.player ? "player" : "foe";
}

function isFriendly(c: Combatant): boolean {
  const side = sideOf(c);
  return side === "player" || side === "ally";
}

function nearestLiving(
  state: CombatState,
  actor: Combatant,
  want: (c: Combatant) => boolean,
): Combatant | undefined {
  const live = state.combatants.filter((c) => c.hp > 0 && !c.fled && want(c));
  if (!live.length) return undefined;
  return live.reduce((best, c) =>
    axialDistance(actor.hexQ, actor.hexR, c.hexQ, c.hexR) <
    axialDistance(actor.hexQ, actor.hexR, best.hexQ, best.hexR)
      ? c
      : best,
  );
}

function opponentOf(state: CombatState, id: string): Combatant | undefined {
  const actor = byId(state, id);
  if (isFriendly(actor)) {
    if (actor.player) return targetedFoe(state);
    return nearestLiving(state, actor, (c) => sideOf(c) === "foe");
  }
  return nearestLiving(state, actor, (c) => isFriendly(c));
}

function livingFoes(state: CombatState): Combatant[] {
  return state.combatants.filter((c) => sideOf(c) === "foe" && c.hp > 0 && !c.fled);
}

function targetedFoe(state: CombatState): Combatant | undefined {
  const live = livingFoes(state);
  if (!live.length) return undefined;
  const named = live.find((c) => c.id === state.targetId);
  if (named) return named;
  const player = state.combatants.find((c) => c.player);
  if (!player) return live[0];
  return nearestLiving(state, player, (c) => sideOf(c) === "foe");
}

function gap(state: CombatState, a: Combatant, b: Combatant): number {
  if (!state.map) return Math.max(1, state.hexes);
  return Math.max(1, axialDistance(a.hexQ, a.hexR, b.hexQ, b.hexR));
}

function occupiedKeys(state: CombatState, exceptId?: string): Set<string> {
  const keys = new Set<string>();
  for (const c of state.combatants) {
    if (c.hp <= 0 || c.id === exceptId) continue;
    keys.add(hexKey(c.hexQ, c.hexR));
  }
  return keys;
}

function refreshRange(state: CombatState) {
  const player = state.combatants.find((c) => c.player);
  const foe = targetedFoe(state);
  if (player && foe) {
    state.hexes = Math.max(1, axialDistance(player.hexQ, player.hexR, foe.hexQ, foe.hexR));
  }
}

function skillOf(c: Combatant): number {
  if (c.weaponSkill === "unarmed") return c.unarmed;
  if (c.weaponSkill === "melee") return c.melee;
  return c.guns;
}

function isMelee(c: Combatant): boolean {
  return c.weaponSkill === "unarmed" || c.weaponSkill === "melee";
}

function moveCost(c: Combatant): number {
  if (c.stance === "prone") return 4;
  if (c.stance === "crouching") return 2;
  return 1;
}

function agilityAc(c: Combatant): number {
  if (c.down || c.stance === "prone") return Math.min(1, c.baseAc);
  if (c.stance === "crouching") return Math.min(3, c.baseAc);
  return c.baseAc;
}

function refreshAc(c: Combatant) {
  c.ac = agilityAc(c) + c.leftoverAc + c.cover;
}

function log(state: CombatState, line: string) {
  state.log.push(line);
  if (state.log.length > 48) state.log.splice(0, state.log.length - 48);
}

function checkEnd(state: CombatState) {
  if (state.result) return;
  const player = state.combatants.find((c) => c.player);
  if (!player) return;
  if (player.hp <= 0) {
    state.result = "loss";
    return;
  }
  if (livingFoes(state).length === 0) {
    state.result = "win";
    const up = state.combatants.filter((c) => sideOf(c) === "ally" && c.hp > 0 && !c.fled);
    if (up.length) {
      const names = up.map((a) => a.name).join(" and ");
      log(
        state,
        `No enemies left. ${names} ${up.length === 1 ? "is" : "are"} still up, but the round ends.`,
      );
    }
  }
}

function startTurn(c: Combatant) {
  c.leftoverAc = 0;
  refreshAc(c);
}

function endTurn(state: CombatState) {
  if (state.result) return;
  const actor = current(state);
  actor.leftoverAc = Math.max(0, actor.ap);
  refreshAc(actor);
  state.turn += 1;
  if (state.turn >= state.order.length) {
    state.round += 1;
    state.turn = 0;
    for (const c of state.combatants) {
      c.ap = c.apMax;
      startTurn(c);
    }
    log(state, `Round ${state.round}. Sequence holds.`);
  }
  startTurn(current(state));
}

export function toHitInfo(
  state: CombatState,
  actor: Combatant,
  target: Combatant,
  part: BodyPart | null,
  burst: boolean,
): ToHitInfo {
  const melee = isMelee(actor);
  const table = melee ? AIMED_MELEE : AIMED_RANGED;
  const aimedPen = part ? table[part].hit : 0;
  const skill = skillOf(actor);
  const hexes = gap(state, actor, target);
  let reason: string | undefined;
  let canFire = true;

  if (actor.down) {
    canFire = false;
    reason = "Knocked down. 4 AP to stand.";
  }
  if (melee && actor.stance === "prone") {
    canFire = false;
    reason = "Prone. No unarmed or melee.";
  }
  if (melee && hexes > actor.weaponRange) {
    canFire = false;
    reason = `${actor.weaponName} needs ${actor.weaponRange} hex. You are at ${hexes}.`;
  }
  if (!melee && hexes > actor.weaponRange) {
    canFire = false;
    reason = `${actor.weaponName} max range ${actor.weaponRange} hex. Target is ${hexes}.`;
  }
  if (burst && actor.apBurst == null) {
    canFire = false;
    reason = `${actor.weaponName} has no burst.`;
  }
  if (part && actor.fastShot) {
    canFire = false;
    reason = "Fast Shot. No aimed attacks.";
  }
  if (part && actor.apAimed == null) {
    canFire = false;
    reason = `${actor.weaponName} cannot aimed-shot.`;
  }
  if (!melee && actor.loaded <= 0 && actor.mag > 0) {
    canFire = false;
    reason = "Empty mag. Reload, 2 AP.";
  }

  const pe = actor.nightPerson && state.lighting < 0 ? actor.pe + 1 : actor.pe;
  const peBonus = melee ? 0 : 8 * (pe - 2);
  const rangePen = melee ? 0 : -4 * hexes;
  const acPen = -target.ac;
  const lightPen = melee ? 0 : state.lighting;
  const strPen = actor.st < actor.minSt ? -20 * (actor.minSt - actor.st) : 0;
  const stanceBonus =
    melee || actor.stance === "standing" ? 0 : actor.stance === "crouching" ? 10 : 25;
  const coverPen = melee ? 0 : -target.cover;
  const burstPen = burst ? -20 : 0;

  let chance = skill + peBonus + rangePen + acPen + lightPen + strPen + aimedPen + stanceBonus + coverPen + burstPen;
  if (part) chance = clamp(chance, 0, 95);
  else chance = clamp(Math.max(chance, chance > 0 ? 5 : 0), 5, 95);
  if (part && chance <= 0) {
    canFire = false;
    reason = reason ?? "Aimed chance is --. Cancel or pick another part.";
  }

  const bits = [
    `skill ${skill}`,
    !melee ? `PE ${(peBonus >= 0 ? "+" : "") + peBonus}` : null,
    !melee ? `range ${rangePen}` : null,
    `AC ${acPen}`,
    lightPen ? `light ${lightPen}` : null,
    strPen ? `STR ${strPen}` : null,
    aimedPen ? `aimed ${aimedPen}` : null,
    stanceBonus ? `stance +${stanceBonus}` : null,
    coverPen ? `cover ${coverPen}` : null,
    burst ? "burst −20" : null,
  ].filter(Boolean);

  return {
    chance,
    skill,
    peBonus,
    rangePen,
    acPen,
    lightPen,
    strPen,
    aimedPen,
    stanceBonus,
    coverPen,
    canFire,
    reason,
    breakdown: `${chance}% (${bits.join(" · ")})`,
  };
}

function applyDamage(
  target: Combatant,
  raw: number,
  crit: boolean,
  part: BodyPart | null,
): number {
  let dmg = Math.max(0, raw);
  const ignoreDt = crit && (part === "eyes" || part === "head" || dN(10) <= 3);
  if (crit) {
    const mult = part === "eyes" || part === "head" ? 2 : 1.5;
    dmg = Math.round(dmg * mult);
  }
  if (!ignoreDt) dmg = Math.max(0, dmg - target.dt);
  dmg = Math.floor((dmg * (100 - clamp(target.dr, 0, 90))) / 100);
  target.hp = Math.max(0, target.hp - dmg);
  return dmg;
}

function critFail(state: CombatState, actor: Combatant) {
  const n = dN(10);
  if (n === 1) {
    actor.loaded = 0;
    log(state, `${actor.name} crit-fails. Bad ammo. Mag dumped.`);
  } else if (n === 2) {
    actor.ap = 0;
    log(state, `${actor.name} crit-fails. Weapon jammed. Rest of the turn is gone.`);
  } else if (n === 3) {
    actor.ap = 0;
    log(state, `${actor.name} crit-fails. All remaining AP gone.`);
  } else if (n === 4) {
    log(state, `${actor.name} crit-fails. Weapon hits the floor.`);
  } else if (n === 5) {
    const self = Math.max(1, Math.round(rollExpr(actor.dmg, actor.md) / 2));
    actor.hp = Math.max(0, actor.hp - self);
    log(state, `${actor.name} crit-fails. Weapon bites back for ${self}.`);
  } else if (n === 6) {
    log(state, `${actor.name} crit-fails. Shot goes wide into the next hex.`);
  } else if (n === 7) {
    const self = Math.max(1, Math.round(rollExpr(actor.dmg, actor.md) / 2));
    actor.hp = Math.max(0, actor.hp - self);
    log(state, `${actor.name} crit-fails. Hits self for ${self}.`);
  } else if (n === 8) {
    actor.down = true;
    actor.ap = 0;
    actor.leftoverAc = 0;
    refreshAc(actor);
    log(state, `${actor.name} crit-fails. Slips. Down. 4 AP to stand.`);
  } else if (n === 9) {
    actor.loaded = 0;
    log(state, `${actor.name} crit-fails. Weapon breaks the mag. Empty.`);
  } else {
    const dmg = dN(10);
    actor.hp = Math.max(0, actor.hp - dmg);
    log(state, `${actor.name} crit-fails. A miniature anvil, somehow. ${dmg} through DT.`);
  }
}

function maybeKnockdown(state: CombatState, actor: Combatant, target: Combatant, hits: number, burst: boolean) {
  if (target.hp <= 0 || target.down) return;
  let chance = 0;
  if (isMelee(actor)) chance = 3 * actor.weaponWeight;
  else if (burst && hits > actor.burstShots / 2) chance = 50;
  if (chance <= 0) return;
  if (d100() <= chance) {
    const enRoll = dN(10);
    if (enRoll > target.en) {
      target.down = true;
      target.leftoverAc = 0;
      refreshAc(target);
      log(state, `${target.name} is knocked down (EN check ${enRoll} vs ${target.en}).`);
    }
  }
}

function fireShot(
  state: CombatState,
  actor: Combatant,
  part: BodyPart | null,
  burst: boolean,
) {
  const target = opponentOf(state, actor.id);
  if (!target || target.hp <= 0) {
    log(state, `${actor.name} has nobody left to fight.`);
    checkEnd(state);
    return false;
  }
  const info = toHitInfo(state, actor, target, part, burst);
  const cost = burst
    ? (actor.apBurst ?? 6)
    : part
      ? (actor.apAimed ?? actor.apCost + 1)
      : actor.apCost;
  if (actor.ap < cost) {
    log(state, `${actor.name} is out of AP for that attack (${cost} needed).`);
    return false;
  }
  if (!info.canFire) {
    log(state, info.reason ?? `${actor.name} cannot fire.`);
    return false;
  }
  actor.ap -= cost;
  const shots = burst ? Math.max(1, Math.min(actor.burstShots, actor.loaded || actor.burstShots)) : 1;
  if (!isMelee(actor) && actor.mag > 0) {
    actor.loaded = Math.max(0, actor.loaded - shots);
  }

  let hits = 0;
  let totalDmg = 0;
  let anyCrit = false;
  for (let i = 0; i < shots; i++) {
    if (!isMelee(actor)) state.bangs = (state.bangs ?? 0) + 1;
    const roll = d100();
    const chance = info.chance;
    if (roll >= 96 || (roll > chance && roll - chance >= 30 && d100() <= Math.trunc((roll - chance) / 10))) {
      if (i === 0) critFail(state, actor);
      continue;
    }
    if (roll > chance) {
      if (!burst) log(state, `${actor.name} misses (${roll} vs ${info.breakdown}).`);
      continue;
    }
    const critBase = actor.lk + (actor.finesse ? 10 : 0) + Math.abs(info.aimedPen);
    const upgrade = critBase + Math.trunc((chance - roll) / 10);
    const crit = d100() <= upgrade;
    const raw = Math.max(1, rollExpr(actor.dmg, actor.md));
    const dealt = applyDamage(target, raw, crit, part);
    hits += 1;
    totalDmg += dealt;
    anyCrit = anyCrit || crit;
    if (!isMelee(actor)) target.wounds = (target.wounds ?? 0) + 1;
    if (crit && part && part !== "torso") {
      target.crippled[part] = true;
    }
  }

  if (burst) {
    log(
      state,
      `${actor.name} bursts ${shots} from ${actor.weaponName}. ${hits} hit for ${totalDmg} (${info.breakdown}).${anyCrit ? " Crit in the spray." : ""}`,
    );
  } else if (hits > 0) {
    const where = part ? ` in the ${part}` : "";
    log(
      state,
      `${actor.name} ${anyCrit ? "crits" : "hits"} ${target.name}${where} with ${actor.weaponName} for ${totalDmg} (${info.breakdown}).`,
    );
  }
  if (hits > 0) maybeKnockdown(state, actor, target, hits, burst);
  checkEnd(state);
  return true;
}

function npcThink(state: CombatState): { move: CombatMove; part?: BodyPart } {
  const actor = current(state);
  const target = opponentOf(state, actor.id);
  if (!target) return { move: "defend" };
  if (actor.down) return { move: "stand" };
  const hexes = gap(state, actor, target);
  const fleeAt = sideOf(actor) === "ally" ? 0.22 : 0.4;
  if (actor.hp <= actor.hpMax * 0.2 && actor.ap >= 2 && Math.random() < fleeAt) return { move: "flee" };
  const melee = isMelee(actor);
  if (melee && hexes > actor.weaponRange) {
    return { move: actor.ap >= moveCost(actor) * 2 ? "sprint-in" : "advance" };
  }
  if (!melee && hexes === 1 && actor.weaponRange > 4 && actor.ap >= 1) return { move: "withdraw" };
  if (!melee && actor.mag > 0 && actor.loaded <= 0) return { move: "reload" };
  if (!melee && actor.apBurst != null && actor.ap >= actor.apBurst && (target.hp <= 12 || Math.random() < 0.35)) {
    return { move: "burst" };
  }
  if (!actor.fastShot && actor.apAimed != null && actor.ap >= actor.apAimed && target.hp <= 10) {
    return { move: "aimed", part: "head" };
  }
  if (actor.apCost && actor.ap >= actor.apCost) return { move: "attack" };
  if (hexes > 1 && actor.ap >= moveCost(actor)) return { move: "advance" };
  return { move: "defend" };
}

function applyMove(state: CombatState, move: CombatMove, part?: BodyPart, step?: { q: number; r: number }) {
  if (state.result) return;
  checkEnd(state);
  if (state.result) return;
  const actor = current(state);
  if (actor.hp <= 0 || actor.fled) {
    endTurn(state);
    return;
  }

  if (move === "stand") {
    const cost = actor.down ? 4 : actor.stance === "prone" ? 4 : 2;
    if (actor.ap < cost) {
      log(state, `${actor.name} needs ${cost} AP to stand.`);
      return;
    }
    actor.ap -= cost;
    actor.down = false;
    actor.stance = "standing";
    actor.cover = 0;
    refreshAc(actor);
    log(state, `${actor.name} stands (${cost} AP).`);
    if (actor.ap <= 0) endTurn(state);
    return;
  }

  if (actor.down) {
    log(state, `${actor.name} is down. Stand first (4 AP).`);
    return;
  }

  if (move === "hex-step" && step) {
    const occupant = state.combatants.find(
      (c) => c.hp > 0 && c.id !== actor.id && c.hexQ === step.q && c.hexR === step.r,
    );
    if (occupant) {
      if (actor.player) {
        if (sideOf(occupant) === "ally") {
          log(state, `${occupant.name} is with you.`);
          return;
        }
        if (sideOf(occupant) === "foe") {
          state.targetId = occupant.id;
          refreshRange(state);
          log(state, `${actor.name} marks ${occupant.name}. ${state.hexes} hex.`);
        }
      }
      return;
    }
  }

  if (move === "advance" || move === "sprint-in" || move === "withdraw" || move === "sprint-out" || move === "hex-step") {
    const costEach = moveCost(actor);
    if (actor.ap < costEach) {
      log(state, `${actor.name} cannot move.`);
      return;
    }
    const blocked = occupiedKeys(state, actor.id);
    const board = state.map;
    const inward = move === "advance" || move === "sprint-in";
    const sprint = move.startsWith("sprint");
    let steps = sprint ? Math.max(1, Math.floor(actor.ap / costEach)) : 1;
    const foe = opponentOf(state, actor.id);
    let dest = foe ?? actor;
    if ((move === "advance" || move === "sprint-in") && !foe) {
      log(state, `${actor.name} has nobody to close on.`);
      checkEnd(state);
      return;
    }
    if (move === "withdraw" || move === "sprint-out") {
      const exit = board ? nearestExit(board, actor.hexQ, actor.hexR) : { q: actor.hexQ, r: actor.hexR };
      dest = { ...actor, hexQ: exit.q, hexR: exit.r };
    }
    if (move === "hex-step") {
      if (!step) return;
      steps = Math.max(1, axialDistance(actor.hexQ, actor.hexR, step.q, step.r));
      dest = { ...actor, hexQ: step.q, hexR: step.r };
    }

    let walked = 0;
    for (let i = 0; i < steps; i++) {
      if (actor.ap < costEach) break;
      if (board) {
        const nextHex =
          move === "hex-step"
            ? stepToward(board, actor.hexQ, actor.hexR, dest.hexQ, dest.hexR, blocked)
            : inward
              ? stepToward(board, actor.hexQ, actor.hexR, dest.hexQ, dest.hexR, blocked)
              : stepToward(board, actor.hexQ, actor.hexR, dest.hexQ, dest.hexR, blocked);
        if (!nextHex) break;
        actor.ap -= costEach;
        actor.cover = 0;
        actor.hexQ = nextHex.q;
        actor.hexR = nextHex.r;
        blocked.delete(hexKey(actor.hexQ, actor.hexR));
        blocked.add(hexKey(nextHex.q, nextHex.r));
        walked += 1;
        if (actor.player && isExit(board, actor.hexQ, actor.hexR)) {
          state.result = "flee";
          log(state, `${actor.name} hits the green hex and leaves the map.`);
          refreshRange(state);
          return;
        }
        if (move === "hex-step" && actor.hexQ === dest.hexQ && actor.hexR === dest.hexR) break;
      } else {
        actor.ap -= costEach;
        actor.cover = 0;
        if (inward) state.hexes = Math.max(1, state.hexes - 1);
        else state.hexes = Math.min(40, state.hexes + 1);
        walked += 1;
      }
    }
    refreshRange(state);
    refreshAc(actor);
    const marked = opponentOf(state, actor.id);
    const dist = marked ? gap(state, actor, marked) : state.hexes;
    log(
      state,
      walked
        ? `${actor.name} moves to hex ${actor.hexQ},${actor.hexR} · ${dist} hex from ${marked?.name ?? "target"} (${walked * costEach} AP).`
        : `${actor.name} has nowhere to step.`,
    );
    if (actor.ap <= 0) endTurn(state);
    return;
  }

  if (move === "crouch" || move === "prone") {
    if (actor.ap < 2) {
      log(state, `${actor.name} needs 2 AP to change stance.`);
      return;
    }
    actor.ap -= 2;
    actor.stance = move === "crouch" ? "crouching" : "prone";
    actor.cover = 0;
    refreshAc(actor);
    log(
      state,
      move === "crouch"
        ? `${actor.name} crouches. +10% guns. 2 AP/hex. AG AC capped at 3.`
        : `${actor.name} goes prone. +25% guns. 4 AP/hex. No melee.`,
    );
    if (actor.ap <= 0) endTurn(state);
    return;
  }

  if (move === "cover") {
    if (actor.ap < 1) {
      log(state, `${actor.name} needs 1 AP to take cover.`);
      return;
    }
    actor.ap -= 1;
    actor.cover = 30;
    refreshAc(actor);
    log(state, `${actor.name} takes cover (−30% incoming ranged).`);
    if (actor.ap <= 0) endTurn(state);
    return;
  }

  if (move === "defend") {
    actor.leftoverAc = Math.max(0, actor.ap);
    actor.ap = 0;
    refreshAc(actor);
    log(state, `${actor.name} guards. Unused AP → +${actor.leftoverAc} AC.`);
    endTurn(state);
    return;
  }

  if (move === "reload") {
    if (actor.ap < 2) {
      log(state, `${actor.name} needs 2 AP to reload.`);
      return;
    }
    if (actor.mag <= 0) {
      log(state, `${actor.weaponName} does not load.`);
      return;
    }
    actor.ap -= 2;
    actor.loaded = actor.mag;
    log(state, `${actor.name} reloads ${actor.weaponName} (${actor.mag}).`);
    if (actor.ap < 2) endTurn(state);
    return;
  }

  if (move === "stimpak") {
    if (actor.ap < 2) {
      log(state, `${actor.name} needs 2 AP to use a stimpak.`);
      return;
    }
    actor.ap -= 2;
    const heal = 10 + dN(10);
    actor.hp = Math.min(actor.hpMax, actor.hp + heal);
    log(state, `${actor.name} injects a stimpak and recovers ${heal} HP.`);
    if (actor.ap < 2) endTurn(state);
    return;
  }

  if (move === "flee") {
    const other = opponentOf(state, actor.id);
    const hexes = other ? gap(state, actor, other) : state.hexes;
    const sneak = actor.player ? actor.unarmed : Math.max(actor.unarmed, 35);
    const roll = d100();
    const target = Math.max(5, Math.min(95, Math.round(sneak * 0.6 + 20 - hexes)));
    actor.ap = 0;
    if (roll <= target) {
      if (actor.player) {
        state.result = "flee";
        log(state, `${actor.name} breaks off (${roll} vs ${target}%).`);
      } else {
        actor.fled = true;
        actor.hp = 0;
        log(state, `${actor.name} breaks off and leaves the hexes (${roll} vs ${target}%).`);
        checkEnd(state);
        if (!state.result) endTurn(state);
      }
    } else {
      log(state, `${actor.name} fails to flee (${roll} vs ${target}%).`);
      endTurn(state);
    }
    return;
  }

  const aimed = move === "aimed";
  const burst = move === "burst";
  fireShot(state, actor, aimed ? (part ?? "torso") : null, burst);
  checkEnd(state);
  if (!state.result && actor.ap < Math.min(actor.apCost || 99, actor.apBurst ?? 99, 2)) endTurn(state);
}

function drainNpcTurns(state: CombatState) {
  let guard = 0;
  while (!state.result && !current(state).player && guard < 48) {
    checkEnd(state);
    if (state.result) break;
    const actor = current(state);
    if (actor.hp <= 0 || actor.fled) {
      endTurn(state);
      guard += 1;
      continue;
    }
    const turn = state.turn;
    const round = state.round;
    const ap = actor.ap;
    const think = npcThink(state);
    applyMove(state, think.move, think.part);
    guard += 1;
    if (!state.result && state.turn === turn && state.round === round && current(state).id === actor.id && actor.ap === ap) {
      endTurn(state);
    }
  }
  if (!state.result && !current(state).player) {
    const playerIndex = state.order.indexOf("player");
    if (playerIndex >= 0) {
      state.turn = playerIndex;
      log(state, "The rest of the sequence collapses. Your turn.");
      startTurn(current(state));
    }
  }
}

export function startCombat(opts: {
  kind: CombatKind;
  player: Combatant;
  foe?: Combatant;
  foes?: Combatant[];
  allies?: Combatant[];
  hexes?: number;
  lighting?: number;
  lightingLabel?: string;
  purse?: number;
  initiator?: "player" | "foe";
  map?: HexBoard | null;
  field?: boolean;
}): CombatState {
  const player = {
    ...opts.player,
    side: "player" as const,
    ap: opts.player.apMax,
    leftoverAc: 0,
    cover: 0,
    down: false,
    fled: false,
    stance: "standing" as Stance,
  };
  const stamp = (f: Combatant, i: number, side: "ally" | "foe") => ({
    ...f,
    side,
    player: false,
    id: f.id || `${side}-${i}`,
    ap: f.apMax,
    leftoverAc: 0,
    cover: 0,
    down: false,
    fled: false,
    stance: "standing" as Stance,
  });
  const allies = (opts.allies ?? []).map((f, i) => stamp(f, i, "ally"));
  const foes = (opts.foes ?? (opts.foe ? [opts.foe] : [])).map((f, i) => stamp(f, i, "foe"));
  refreshAc(player);
  for (const f of [...allies, ...foes]) refreshAc(f);
  const combatants = [player, ...allies, ...foes];
  const tie = dN(10) >= 6 ? 1 : -1;
  const order = [...combatants]
    .sort((a, b) => (b.sequence - a.sequence) || (a.player === b.player ? 0 : a.player ? tie : -tie))
    .map((c) => c.id);
  const lighting = opts.lighting ?? 0;
  const allyLine = allies.length
    ? ` With you: ${allies
        .map((a) => `${a.name} (HP ${a.hp}, AC ${a.ac}, seq ${a.sequence}, ${a.weaponName})`)
        .join("; ")}.`
    : "";
  const state: CombatState = {
    kind: opts.kind,
    round: 1,
    order,
    turn: 0,
    hexes: opts.hexes ?? 8,
    lighting,
    lightingLabel: opts.lightingLabel ?? (lighting === 0 ? "daylight" : lighting <= -40 ? "dark" : "dim"),
    combatants,
    log: [
      opts.field
        ? `${foes.map((f) => f.name).join(", ") || "Nobody"} on this block. 40 by 40 hexes of where you are standing. Buildings stay buildings. The street stays the street. Cars and trash are cover. No turns. Walk, or strike. A body on the ground is dead.`
        : opts.kind === "boxing"
          ? `Bell. ${player.name} vs ${foes[0]?.name ?? "them"}. Unarmed. 1 hex. Sequence ${player.sequence} vs ${foes[0]?.sequence ?? 0}.`
          : `${foes.map((f) => f.name).join(", ") || "Nobody"} on the map.${allyLine} ${opts.lightingLabel ?? "light 0"}. Sequence ${player.sequence}. Highest sequence first. What they carry stays on the body. Green hexes are the way out.`,
    ],
    purse: opts.purse,
    map: opts.map ?? null,
    field: opts.field ?? false,
    targetId: foes.find((f) => f.hp > 0)?.id ?? "",
  };
  refreshRange(state);
  if (opts.field) return state;
  if (opts.initiator === "player" && order[0] !== "player") {
    state.order = ["player", ...order.filter((id) => id !== "player")];
    log(state, `${player.name} initiated. First turn before sequence settles.`);
  }
  if (opts.initiator === "foe" && order[0] === "player") {
    const firstFoe = foes[0]?.id;
    if (firstFoe) {
      state.order = [firstFoe, ...order.filter((id) => id !== firstFoe)];
      log(state, `${foes[0]?.name} initiated. They act before sequence.`);
    }
  }
  drainNpcTurns(state);
  return state;
}

function plantCover(state: CombatState, actor: Combatant) {
  const cell = state.map ? cellAt(state.map, actor.hexQ, actor.hexR) : undefined;
  actor.cover = cell?.kind === "cover" ? 30 : 0;
  refreshAc(actor);
}

/** Real block, no sequence. Everybody moves and strikes on the same clock. */
function applyField(state: CombatState, move: CombatMove, step?: { q: number; r: number }) {
  if (state.result) return;
  const player = state.combatants.find((c) => c.player);
  if (!player || !state.map) return;
  checkEnd(state);
  if (state.result) return;

  if (move === "field-walk" && step) {
    if (!isWalkable(state.map, step.q, step.r)) return;
    const occ = state.combatants.find(
      (c) => c.hp > 0 && !c.fled && c.id !== player.id && c.hexQ === step.q && c.hexR === step.r,
    );
    if (occ) {
      if (sideOf(occ) === "foe") {
        state.targetId = occ.id;
        refreshRange(state);
      }
      return;
    }
    player.hexQ = step.q;
    player.hexR = step.r;
    plantCover(state, player);
    if (isExit(state.map, step.q, step.r)) {
      state.result = "flee";
      log(state, `${player.name} crosses the edge of the block and leaves the fight.`);
      return;
    }
    refreshRange(state);
    return;
  }

  if (move === "flee") {
    state.result = "flee";
    log(state, `${player.name} breaks off. The block keeps the bodies.`);
    return;
  }

  if (move === "attack" || move === "aimed" || move === "burst") {
    if ((player.cool ?? 0) > 0) {
      log(state, `${player.name} is still recovering.`);
      return;
    }
    player.down = false;
    player.ap = player.apMax;
    plantCover(state, player);
    const foe = opponentOf(state, player.id);
    if (foe) plantCover(state, foe);
    fireShot(state, player, move === "aimed" ? "torso" : null, move === "burst");
    player.cool = 2;
    return;
  }

  if (move !== "field-tick") return;

  for (const c of state.combatants) {
    if ((c.cool ?? 0) > 0) c.cool = (c.cool ?? 0) - 1;
  }
  for (const actor of state.combatants) {
    if (actor.player || actor.hp <= 0 || actor.fled) continue;
    if (state.result) return;
    if (actor.down) {
      actor.down = false;
      continue;
    }
    const target = opponentOf(state, actor.id);
    if (!target || target.hp <= 0) continue;
    plantCover(state, actor);
    plantCover(state, target);
    const dist = gap(state, actor, target);
    const range = Math.max(1, actor.weaponRange);
    if (dist > range) {
      const blocked = occupiedKeys(state, actor.id);
      const next = stepToward(state.map, actor.hexQ, actor.hexR, target.hexQ, target.hexR, blocked);
      if (next && !isExit(state.map, next.q, next.r)) {
        actor.hexQ = next.q;
        actor.hexR = next.r;
      }
      continue;
    }
    if ((actor.cool ?? 0) > 0) continue;
    actor.ap = actor.apMax;
    if (!isMelee(actor) && actor.mag > 0 && actor.loaded <= 0) actor.loaded = actor.mag;
    fireShot(state, actor, null, false);
    actor.cool = 2;
  }
  refreshRange(state);
}

export function playMove(
  state: CombatState,
  move: CombatMove,
  part?: BodyPart,
  extra?: { q?: number; r?: number; targetId?: string },
): CombatState {
  const next = cloneCombat(state);
  if (next.result) return next;
  const step =
    extra?.q != null && extra?.r != null ? { q: extra.q, r: extra.r } : undefined;
  if (next.field) {
    if (extra?.targetId) {
      const marked = next.combatants.find((c) => c.id === extra.targetId);
      if (marked && sideOf(marked) === "foe" && marked.hp > 0) next.targetId = marked.id;
    }
    applyField(next, move, step);
    return next;
  }
  if (extra?.targetId) {
    const marked = next.combatants.find((c) => c.id === extra.targetId);
    if (marked && sideOf(marked) === "foe" && marked.hp > 0) next.targetId = marked.id;
  }
  const actor = current(next);
  if (!actor.player) {
    drainNpcTurns(next);
    return next;
  }
  applyMove(next, move, part, step);
  if (!next.result) drainNpcTurns(next);
  return next;
}

export function playerOf(state: CombatState): Combatant | undefined {
  return state.combatants.find((c) => c.player);
}

export function foeOf(state: CombatState): Combatant | undefined {
  return targetedFoe(state) ?? state.combatants.find((c) => sideOf(c) === "foe");
}

export function moveCostOf(c: Combatant): number {
  return moveCost(c);
}
