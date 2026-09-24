export function d100(): number {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return (a[0]! % 100) + 1;
}

export function dN(sides: number): number {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return (a[0]! % sides) + 1;
}

export function rollExpr(expr: string, meleeDamage = 0): number {
  const cleaned = expr.replace(/\s/g, "").replace(/MD/gi, String(meleeDamage));
  const parts = cleaned.split(/(?=[+-])/).filter(Boolean);
  let total = 0;
  for (const part of parts) {
    const sign = part.startsWith("-") ? -1 : 1;
    const body = part.replace(/^[+-]/, "");
    const m = /^(\d+)d(\d+)$/i.exec(body);
    if (m) {
      const n = Number(m[1]);
      const s = Number(m[2]);
      for (let i = 0; i < n; i++) total += sign * dN(s);
    } else if (/^\d+$/.test(body)) {
      total += sign * Number(body);
    }
  }
  return total;
}

export function skillRoll(skill: number, mod = 0): {
  roll: number;
  target: number;
  success: boolean;
  crit: boolean;
  fumble: boolean;
} {
  const roll = d100();
  const target = Math.max(5, Math.min(95, Math.round(skill + mod)));
  return {
    roll,
    target,
    success: roll <= target,
    crit: roll <= 5,
    fumble: roll >= 96,
  };
}

export function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n));
}
