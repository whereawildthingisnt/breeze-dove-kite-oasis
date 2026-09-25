import { schedulePoint } from "./schedules";
import { STREET_NPCS } from "./street";
import type { RenoLife } from "./types";
import { DISTRICT_BY_ID, DISTRICT_POS, GANGS } from "./world";
import { SOUL_BY_ID } from "./ecosystem";

export type KnownKind = "soul" | "angela" | "door" | "mark" | "dealer";

export interface KnownPerson {
  id: string;
  name: string;
  kind: KnownKind;
  score: number;
  word: string;
  last: string;
  x: number;
  z: number;
  where: string;
  away: boolean;
}

export function regardWord(score: number): string {
  if (score >= 60) return "likes you";
  if (score >= 25) return "warm";
  if (score > -15) return "knows you";
  if (score > -45) return "dislikes you";
  return "hates you";
}

function clampScore(n: number): number {
  return Math.max(-100, Math.min(100, Math.round(n)));
}

function memoryScore(life: RenoLife, id: string): number {
  const mood = life.npcMemory?.[id]?.mood ?? 0;
  const grudge = life.grudges?.[id] ?? 0;
  return clampScore(mood * 22 - grudge);
}

export function angelaScore(life: RenoLife): number {
  const a = life.angela;
  if (!a?.met) return 0;
  let score = 8;
  if (a.mood === "flirt") score = 36;
  if (a.mood === "hot") score = 58;
  if (a.mood === "rejected") score = -12;
  if (a.mood === "mad") score = -48;
  if (a.slept) score += 18;
  if (a.insulted) score -= 28;
  return clampScore(score);
}

export function angelaStand(life: RenoLife): { x: number; z: number; where: string } {
  const shark = DISTRICT_POS.shark;
  const bishop = DISTRICT_POS.bishop;
  const ds = Math.hypot(life.posX - shark.x, life.posZ - shark.z);
  const db = Math.hypot(life.posX - bishop.x, life.posZ - bishop.z);
  if (db + 8 < ds) return { x: bishop.x, z: bishop.z, where: "Bishop offices" };
  return { x: shark.x, z: shark.z, where: "Shark Club rail" };
}

/** People with a memory, a grudge, or a name you already went looking for. Strangers stay off the page. */
export function knownPeople(life: RenoLife): KnownPerson[] {
  const out: KnownPerson[] = [];
  const seen = new Set<string>();
  const push = (person: KnownPerson) => {
    if (seen.has(person.id)) return;
    seen.add(person.id);
    out.push(person);
  };

  if (life.angela?.met) {
    const spot = angelaStand(life);
    const score = angelaScore(life);
    push({
      id: "angela",
      name: "Angela Bishop",
      kind: "angela",
      score,
      word: regardWord(score),
      last: life.angela.insulted ? "you insulted her" : life.angela.slept ? "the night she kept" : life.angela.mood,
      x: spot.x,
      z: spot.z,
      where: spot.where,
      away: false,
    });
  }

  const ids = new Set<string>([
    ...Object.keys(life.npcMemory ?? {}),
    ...Object.keys(life.grudges ?? {}),
  ]);
  for (const id of ids) {
    if (id === "angela") continue;
    const soul = SOUL_BY_ID[id];
    if (soul) {
      const spot = schedulePoint(soul, life);
      const score = memoryScore(life, id);
      push({
        id,
        name: soul.name,
        kind: "soul",
        score,
        word: regardWord(score),
        last: life.npcMemory?.[id]?.last || (score < -15 ? "a slight" : "a face"),
        x: spot.x,
        z: spot.z,
        where: spot.where,
        away: (life.absent?.[id] ?? 0) > life.day,
      });
      continue;
    }
    const door = STREET_NPCS.find((n) => n.id === id);
    if (door) {
      const spot = DISTRICT_POS[door.district];
      const score = memoryScore(life, id);
      push({
        id,
        name: door.name,
        kind: "door",
        score,
        word: regardWord(score),
        last: life.npcMemory?.[id]?.last || door.beat,
        x: spot.x,
        z: spot.z,
        where: door.beat,
        away: false,
      });
      continue;
    }
    const mark = life.marks?.find((m) => m.id === id);
    if (mark) {
      const spot = DISTRICT_POS[mark.district];
      const base = mark.mood === "friend" ? 70 : mark.mood === "warm" ? 34 : mark.mood === "hostile" ? -66 : 0;
      const score = clampScore(base - (life.grudges?.[id] ?? 0) * 0.25);
      push({
        id,
        name: mark.name,
        kind: "mark",
        score,
        word: regardWord(score),
        last: life.npcMemory?.[id]?.last || mark.mood,
        x: spot.x,
        z: spot.z,
        where: DISTRICT_BY_ID[mark.district].name,
        away: false,
      });
      continue;
    }
    const dealer = life.dealers?.find((d) => d.id === id);
    if (dealer) {
      const spot = DISTRICT_POS[dealer.district];
      const score = memoryScore(life, id);
      push({
        id,
        name: dealer.name,
        kind: "dealer",
        score,
        word: regardWord(score),
        last: life.npcMemory?.[id]?.last || "the corner",
        x: spot.x,
        z: spot.z,
        where: DISTRICT_BY_ID[dealer.district].name,
        away: false,
      });
    }
  }

  for (const mark of life.marks ?? []) {
    if (mark.mood === "cold" && life.soughtMark !== mark.id) continue;
    if (seen.has(mark.id)) continue;
    const spot = DISTRICT_POS[mark.district];
    const base = mark.mood === "friend" ? 70 : mark.mood === "warm" ? 34 : mark.mood === "hostile" ? -66 : 0;
    const score = clampScore(base);
    push({
      id: mark.id,
      name: mark.name,
      kind: "mark",
      score,
      word: regardWord(score),
      last: mark.mood,
      x: spot.x,
      z: spot.z,
      where: DISTRICT_BY_ID[mark.district].name,
      away: false,
    });
  }

  out.sort((a, b) => Math.abs(b.score) - Math.abs(a.score) || a.name.localeCompare(b.name));
  return out;
}

export function familyTemper(life: RenoLife): Array<{ id: string; name: string; rep: number }> {
  return GANGS.map((g) => ({
    id: g.id,
    name: g.name,
    rep: Math.round(life.gangRep?.[g.id] ?? 0),
  }));
}
