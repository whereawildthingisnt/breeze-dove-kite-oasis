/** How obvious a life in New Reno is. Sneak hides tracks. Volume of heat burns through it. */

export type SneakBand = "novice" | "noticeable" | "proficient" | "shadow";

export interface SneakCover {
  band: SneakBand;
  label: string;
  /** Fraction of attention a fresh crime actually sticks. */
  heatMult: number;
  /** Fraction of existing heat that still draws trouble. */
  heatDamp: number;
  /** Days before someone hunts a stash or comes knocking. 0 = they follow you home. */
  delayDays: number;
  blurb: string;
}

export const HUSTLE_PACE = 5;
export const BUSINESS_COST = 1100;
export const LAB_COST = 320;
export const COOK_COST = 70;
export const DEAL_OPEN_STOCK = 5;
export const DEAL_RUN_STOCK = 3;

export function hustleHours(baseHours: number): number {
  return baseHours * HUSTLE_PACE;
}

export function hustleClock(baseHours: number): string {
  const h = hustleHours(baseHours);
  const d = Math.floor(h / 24);
  const rem = h % 24;
  if (d <= 0) return `${h}h`;
  if (rem === 0) return `${d}d`;
  return `${d}d ${rem}h`;
}

export function sneakCover(sneak: number): SneakCover {
  if (sneak < 50) {
    return {
      band: "novice",
      label: "Novice",
      heatMult: 1,
      heatDamp: 1,
      delayDays: 0,
      blurb: "Tracks are easy to follow. Heat sits on you at full weight.",
    };
  }
  if (sneak < 75) {
    return {
      band: "noticeable",
      label: "Noticeable",
      heatMult: 0.55,
      heatDamp: 0.62,
      delayDays: 2,
      blurb: "Still visible. It takes time before anyone hunts a stash or comes knocking.",
    };
  }
  if (sneak < 100) {
    return {
      band: "proficient",
      label: "Proficient",
      heatMult: 0.32,
      heatDamp: 0.4,
      delayDays: 4,
      blurb: "Hard to follow. A loud enough pile of heat still finds you.",
    };
  }
  return {
    band: "shadow",
    label: "Shadow",
    heatMult: 0.2,
    heatDamp: 0.26,
    delayDays: 6,
    blurb: "The street loses the trail. Volume still burns through a quiet act.",
  };
}

/** High heat punches through a good sneak. The pile matters more than the footsteps. */
export function heatScale(sneak: number, heat: number): number {
  const base = sneakCover(sneak).heatDamp;
  if (heat >= 90) return Math.min(1, base + 0.6);
  if (heat >= 75) return Math.min(1, base + 0.38);
  if (heat >= 55) return Math.min(1, base + 0.16);
  return base;
}

export function attentionMult(sneak: number, heat: number): number {
  const cover = sneakCover(sneak);
  let mult = cover.heatMult;
  if (heat >= 90) mult += 0.6;
  else if (heat >= 75) mult += 0.38;
  else if (heat >= 55) mult += 0.18;
  return Math.min(1, mult);
}
