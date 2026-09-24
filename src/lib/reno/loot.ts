import type { Character } from "@/lib/special/types";
import { getItem } from "@/lib/special/catalog";
import { addToPack } from "@/lib/special/loadout";
import { d100, dN } from "./dice";
import { sideOf } from "./combat";
import type { Combatant, RenoLife, StashId } from "./types";
import { STASH_META } from "./world";

export interface LootDrop {
  stash?: StashId;
  caps?: number;
  pack?: string;
  qty: number;
  name: string;
}

interface LootLine {
  chance: number;
  qty: [number, number];
  stash?: StashId;
  caps?: [number, number];
  pack?: string;
  name: string;
}

const HABIT: LootLine[] = [
  { chance: 55, qty: [1, 8], stash: "cigarettes", name: "cigarettes" },
  { chance: 40, qty: [1, 2], stash: "vodka", name: "vodka" },
  { chance: 28, qty: [1, 2], stash: "marijuana", name: "a bag of marijuana" },
  { chance: 18, qty: [1, 1], stash: "cocaine", name: "cocaine" },
];

const TABLES: Record<string, LootLine[]> = {
  junkie: [
    { chance: 80, qty: [1, 3], stash: "jet", name: "Jet" },
    { chance: 50, qty: [1, 6], stash: "cigarettes", name: "cigarettes" },
    { chance: 40, qty: [1, 2], stash: "vodka", name: "vodka" },
    { chance: 30, qty: [1, 2], stash: "marijuana", name: "marijuana" },
    { chance: 100, qty: [1, 1], caps: [4, 18], name: "caps" },
  ],
  tough: [
    ...HABIT,
    { chance: 35, qty: [1, 2], stash: "jet", name: "Jet" },
    { chance: 20, qty: [1, 1], stash: "psycho", name: "Psycho" },
    { chance: 100, qty: [1, 1], caps: [8, 30], name: "caps" },
  ],
  cop: [
    { chance: 70, qty: [4, 12], stash: "cigarettes", name: "cigarettes" },
    { chance: 25, qty: [1, 1], stash: "vodka", name: "vodka" },
    { chance: 20, qty: [1, 1], pack: "10mm-jhp", name: "10mm JHP" },
    { chance: 100, qty: [1, 1], caps: [12, 40], name: "caps" },
  ],
  mordino: [
    { chance: 85, qty: [1, 4], stash: "jet", name: "Jet" },
    { chance: 40, qty: [1, 1], stash: "psycho", name: "Psycho" },
    { chance: 45, qty: [1, 2], stash: "cocaine", name: "cocaine" },
    { chance: 50, qty: [1, 8], stash: "cigarettes", name: "cigarettes" },
    { chance: 35, qty: [1, 2], stash: "vodka", name: "vodka" },
    { chance: 30, qty: [1, 2], stash: "marijuana", name: "marijuana" },
    { chance: 100, qty: [1, 1], caps: [10, 36], name: "caps" },
  ],
  wright: [
    { chance: 80, qty: [1, 3], stash: "vodka", name: "moonshine (vodka)" },
    { chance: 50, qty: [1, 10], stash: "cigarettes", name: "cigarettes" },
    { chance: 25, qty: [1, 2], stash: "marijuana", name: "marijuana" },
    { chance: 15, qty: [1, 1], stash: "jet", name: "Jet" },
    { chance: 100, qty: [1, 1], caps: [8, 28], name: "caps" },
  ],
  salvatore: [
    { chance: 40, qty: [1, 1], stash: "cocaine", name: "cocaine" },
    { chance: 55, qty: [1, 8], stash: "cigarettes", name: "cigarettes" },
    { chance: 35, qty: [1, 2], stash: "vodka", name: "vodka" },
    { chance: 20, qty: [1, 1], stash: "psycho", name: "Psycho" },
    { chance: 15, qty: [1, 1], pack: "sec", name: "small energy cells" },
    { chance: 100, qty: [1, 1], caps: [16, 50], name: "caps" },
  ],
  bishop: [
    { chance: 50, qty: [1, 1], stash: "cocaine", name: "cocaine" },
    { chance: 45, qty: [1, 2], stash: "vodka", name: "vodka" },
    { chance: 60, qty: [1, 10], stash: "cigarettes", name: "cigarettes" },
    { chance: 25, qty: [1, 1], stash: "jet", name: "Jet" },
    { chance: 20, qty: [1, 1], stash: "mentats", name: "Mentats" },
    { chance: 100, qty: [1, 1], caps: [20, 70], name: "caps" },
  ],
  ghoul: [
    { chance: 40, qty: [1, 1], stash: "psycho", name: "Psycho" },
    { chance: 30, qty: [1, 2], stash: "jet", name: "Jet" },
    { chance: 100, qty: [1, 1], caps: [2, 12], name: "caps" },
  ],
  mutant: [
    { chance: 30, qty: [1, 1], stash: "buffout", name: "Buffout" },
    { chance: 100, qty: [1, 1], caps: [6, 24], name: "caps" },
  ],
  drunk: [
    { chance: 90, qty: [1, 3], stash: "vodka", name: "vodka" },
    { chance: 60, qty: [1, 8], stash: "cigarettes", name: "cigarettes" },
    { chance: 100, qty: [1, 1], caps: [3, 16], name: "caps" },
  ],
  tourist: [
    { chance: 40, qty: [1, 1], stash: "cigarettes", name: "cigarettes" },
    { chance: 100, qty: [1, 1], caps: [20, 80], name: "caps" },
  ],
  pimp: [
    { chance: 70, qty: [1, 2], stash: "cocaine", name: "cocaine" },
    { chance: 50, qty: [1, 2], stash: "jet", name: "Jet" },
    { chance: 40, qty: [1, 8], stash: "cigarettes", name: "cigarettes" },
    { chance: 100, qty: [1, 1], caps: [18, 60], name: "caps" },
  ],
  dealer: [
    { chance: 90, qty: [1, 4], stash: "jet", name: "Jet" },
    { chance: 40, qty: [1, 1], stash: "psycho", name: "Psycho" },
    { chance: 50, qty: [1, 2], stash: "marijuana", name: "marijuana" },
    { chance: 100, qty: [1, 1], caps: [12, 40], name: "caps" },
  ],
  punk: [
    ...HABIT,
    { chance: 30, qty: [1, 1], stash: "jet", name: "Jet" },
    { chance: 100, qty: [1, 1], caps: [4, 18], name: "caps" },
  ],
  raider: [
    { chance: 40, qty: [1, 1], stash: "psycho", name: "Psycho" },
    { chance: 50, qty: [1, 8], stash: "cigarettes", name: "cigarettes" },
    { chance: 25, qty: [1, 1], pack: "10mm-jhp", name: "10mm JHP" },
    { chance: 100, qty: [1, 1], caps: [10, 36], name: "caps" },
  ],
  merc: [
    { chance: 35, qty: [1, 1], stash: "mentats", name: "Mentats" },
    { chance: 30, qty: [1, 1], pack: "10mm-jhp", name: "10mm JHP" },
    { chance: 100, qty: [1, 1], caps: [22, 70], name: "caps" },
  ],
  creep: [
    { chance: 50, qty: [1, 2], stash: "jet", name: "Jet" },
    { chance: 40, qty: [1, 1], stash: "vodka", name: "vodka" },
    { chance: 100, qty: [1, 1], caps: [2, 12], name: "caps" },
  ],
  cheat: [
    { chance: 55, qty: [1, 2], stash: "mentats", name: "Mentats" },
    { chance: 40, qty: [1, 8], stash: "cigarettes", name: "cigarettes" },
    { chance: 100, qty: [1, 1], caps: [16, 55], name: "caps" },
  ],
  john: [
    { chance: 50, qty: [1, 1], stash: "vodka", name: "vodka" },
    { chance: 100, qty: [1, 1], caps: [12, 45], name: "caps" },
  ],
  bouncer: [
    { chance: 40, qty: [1, 2], stash: "vodka", name: "vodka" },
    { chance: 50, qty: [1, 8], stash: "cigarettes", name: "cigarettes" },
    { chance: 100, qty: [1, 1], caps: [10, 32], name: "caps" },
  ],
};

function qtyOf(range: [number, number]): number {
  if (range[0] === range[1]) return range[0];
  return range[0] + dN(range[1] - range[0] + 1) - 1;
}

const NOT_GEAR = new Set(["fists"]);

function gearDrops(foe: Combatant): LootDrop[] {
  const drops: LootDrop[] = [];
  const wid = foe.weaponId;
  if (wid && !NOT_GEAR.has(wid)) {
    const item = getItem(wid);
    if (item && (item.kind === "weapon" || item.kind === "armor")) {
      drops.push({ pack: wid, qty: 1, name: item.name });
      const ammoId = item.ammo?.[0];
      const ammoItem = ammoId ? getItem(ammoId) : undefined;
      const rounds = Math.max(0, Math.min(foe.loaded || 0, 18));
      if (ammoItem && rounds > 0) {
        drops.push({ pack: ammoId, qty: rounds, name: `${rounds} ${ammoItem.name}` });
      }
    }
  }
  if (foe.armorId) {
    const armor = getItem(foe.armorId);
    if (armor) drops.push({ pack: foe.armorId, qty: 1, name: armor.name });
  }
  return drops;
}

export function rollLoot(foe: Combatant): LootDrop[] {
  if (foe.player || sideOf(foe) === "ally" || foe.fled) return [];
  const table = TABLES[foe.kind] ?? TABLES.tough!;
  const drops: LootDrop[] = gearDrops(foe);
  for (const line of table) {
    if (d100() > line.chance) continue;
    if (line.caps) {
      const caps = line.caps[0] + dN(line.caps[1] - line.caps[0] + 1) - 1;
      drops.push({ caps, qty: caps, name: `${caps} caps` });
    } else if (line.stash) {
      const qty = qtyOf(line.qty);
      drops.push({ stash: line.stash, qty, name: `${qty} ${line.name}` });
    } else if (line.pack) {
      const qty = qtyOf(line.qty);
      drops.push({ pack: line.pack, qty, name: `${qty} ${line.name}` });
    }
  }
  return drops;
}

export function applyLoot(life: RenoLife, character: Character, drops: LootDrop[]): Character {
  let sheet = character;
  for (const drop of drops) {
    if (drop.caps) life.caps += drop.caps;
    if (drop.stash) life.stash[drop.stash] = (life.stash[drop.stash] ?? 0) + drop.qty;
    if (drop.pack) {
      const loadout = addToPack(sheet.loadout, drop.pack, drop.qty);
      sheet = { ...sheet, loadout, updatedAt: Date.now() };
    }
  }
  return sheet;
}

export function lootSummary(drops: LootDrop[]): string {
  if (!drops.length) return "Pockets empty.";
  return drops.map((d) => d.name).join(", ");
}

export function stashName(id: StashId): string {
  return STASH_META[id].name;
}
