import { armorAcFor, defaultAddQty, getItem, type CatalogItem, type Kit } from "./catalog";
import type { EngineId, EquipSlot, InventoryStack, Loadout, PocketId } from "./types";
import { POCKET_IDS, emptyLoadout } from "./types";

export function ensureLoadout(loadout?: Loadout | null): Loadout {
  if (!loadout) return emptyLoadout();
  return {
    head: loadout.head ?? null,
    body: loadout.body ?? null,
    left: loadout.left ?? null,
    right: loadout.right ?? null,
    pockets: {
      quick1: loadout.pockets?.quick1 ?? null,
      quick2: loadout.pockets?.quick2 ?? null,
      quick3: loadout.pockets?.quick3 ?? null,
      ammo: loadout.pockets?.ammo ?? null,
      chems: loadout.pockets?.chems ?? null,
      aid: loadout.pockets?.aid ?? null,
    },
    pack: Array.isArray(loadout.pack) ? loadout.pack : [],
  };
}

export function findStack(loadout: Loadout, uid: string | null): InventoryStack | undefined {
  if (!uid) return undefined;
  return loadout.pack.find((s) => s.uid === uid);
}

export function stackItem(loadout: Loadout, uid: string | null): CatalogItem | undefined {
  const stack = findStack(loadout, uid);
  return stack ? getItem(stack.itemId) : undefined;
}

function uid(): string {
  return crypto.randomUUID();
}

function clone(loadout: Loadout): Loadout {
  return {
    ...loadout,
    pockets: { ...loadout.pockets },
    pack: loadout.pack.map((s) => ({ ...s })),
  };
}

function defaultAmmo(item: CatalogItem): { ammoId?: string; loaded?: number } {
  if (item.kind !== "weapon" || !item.ammo?.length) return {};
  return { ammoId: item.ammo[0], loaded: item.mag ?? 0 };
}

export function addToPack(loadout: Loadout, itemId: string, qty = 1): Loadout {
  const item = getItem(itemId);
  if (!item) return loadout;
  const next = clone(ensureLoadout(loadout));
  const stackable =
    item.kind === "ammo" || item.kind === "chem" || item.kind === "explosive" || item.kind === "gear";
  if (stackable) {
    const existing = next.pack.find((s) => s.itemId === itemId && !isEquipped(next, s.uid) && !isPocketed(next, s.uid));
    if (existing) {
      existing.qty += qty;
      return next;
    }
  }
  next.pack.push({
    uid: uid(),
    itemId,
    qty,
    ...defaultAmmo(item),
  });
  return next;
}

export function placeBest(loadout: Loadout, stackUid: string): Loadout {
  const ready = ensureLoadout(loadout);
  const item = stackItem(ready, stackUid);
  if (!item) return loadout;
  if (item.kind === "helmet" && !ready.head) return equip(ready, stackUid, "head");
  if (item.kind === "armor" && !ready.body) return equip(ready, stackUid, "body");
  if (item.kind === "weapon") {
    if (item.hands === 2 && !ready.left && !ready.right) return equip(ready, stackUid, "right");
    if (!ready.right) return equip(ready, stackUid, "right");
    if (!ready.left) return equip(ready, stackUid, "left");
  }
  if (item.kind === "ammo" && !ready.pockets.ammo) return putInPocket(ready, stackUid, "ammo");
  if (item.kind === "chem") {
    const pocket: PocketId = item.pocket === "aid" ? "aid" : "chems";
    if (!ready.pockets[pocket]) return putInPocket(ready, stackUid, pocket);
  }
  if ((item.kind === "gear" || item.kind === "explosive") && item.pocket === "quick") {
    for (const p of ["quick1", "quick2", "quick3"] as PocketId[]) {
      if (!ready.pockets[p]) return putInPocket(ready, stackUid, p);
    }
  }
  if (item.kind === "gear" && item.pocket === "aid" && !ready.pockets.aid) {
    return putInPocket(ready, stackUid, "aid");
  }
  return ready;
}

export function addAndSlot(loadout: Loadout, itemId: string, qty?: number): Loadout {
  const item = getItem(itemId);
  if (!item) return loadout;
  const addQty = qty ?? defaultAddQty(item);
  const before = new Set(ensureLoadout(loadout).pack.map((s) => s.uid));
  const next = addToPack(loadout, itemId, addQty);
  const fresh = next.pack.find((s) => !before.has(s.uid));
  if (!fresh) return next;
  return placeBest(next, fresh.uid);
}

export function applyKit(loadout: Loadout, kit: Kit, replace = false): Loadout {
  let next = replace ? emptyLoadout() : ensureLoadout(loadout);
  for (const entry of kit.items) {
    next = addAndSlot(next, entry.itemId, entry.qty);
  }
  return next;
}

export function removeStack(loadout: Loadout, stackUid: string): Loadout {
  const next = clone(ensureLoadout(loadout));
  next.pack = next.pack.filter((s) => s.uid !== stackUid);
  for (const slot of ["head", "body", "left", "right"] as EquipSlot[]) {
    if (next[slot] === stackUid) next[slot] = null;
  }
  for (const p of POCKET_IDS) {
    if (next.pockets[p] === stackUid) next.pockets[p] = null;
  }
  return next;
}

export function setQty(loadout: Loadout, stackUid: string, qty: number): Loadout {
  if (qty <= 0) return removeStack(loadout, stackUid);
  const next = clone(ensureLoadout(loadout));
  const stack = next.pack.find((s) => s.uid === stackUid);
  if (stack) stack.qty = qty;
  return next;
}

export function isEquipped(loadout: Loadout, stackUid: string): boolean {
  return loadout.head === stackUid || loadout.body === stackUid || loadout.left === stackUid || loadout.right === stackUid;
}

export function isPocketed(loadout: Loadout, stackUid: string): boolean {
  return POCKET_IDS.some((p) => loadout.pockets[p] === stackUid);
}

export function unequip(loadout: Loadout, slot: EquipSlot): Loadout {
  const next = clone(ensureLoadout(loadout));
  const held = next[slot];
  next[slot] = null;
  if (slot === "left" || slot === "right") {
    const other = slot === "left" ? next.right : next.left;
    if (held && other === held) {
      next.left = null;
      next.right = null;
    }
  }
  return next;
}

export function equip(loadout: Loadout, stackUid: string, slot: EquipSlot): Loadout {
  const next = clone(ensureLoadout(loadout));
  const stack = next.pack.find((s) => s.uid === stackUid);
  if (!stack) return loadout;
  const item = getItem(stack.itemId);
  if (!item) return loadout;

  if (slot === "head" && item.kind !== "helmet") return loadout;
  if (slot === "body" && item.kind !== "armor") return loadout;
  if ((slot === "left" || slot === "right") && item.kind !== "weapon") return loadout;

  for (const p of POCKET_IDS) {
    if (next.pockets[p] === stackUid) next.pockets[p] = null;
  }

  if (slot === "left" || slot === "right") {
    if (item.hands === 2) {
      next.left = stackUid;
      next.right = stackUid;
      return next;
    }
    if (next.left && next.left === next.right) {
      next.left = null;
      next.right = null;
    }
    next[slot] = stackUid;
    return next;
  }

  next[slot] = stackUid;
  return next;
}

export function putInPocket(loadout: Loadout, stackUid: string, pocket: PocketId): Loadout {
  const next = clone(ensureLoadout(loadout));
  if (!next.pack.some((s) => s.uid === stackUid)) return loadout;
  for (const p of POCKET_IDS) {
    if (next.pockets[p] === stackUid) next.pockets[p] = null;
  }
  for (const slot of ["head", "body", "left", "right"] as EquipSlot[]) {
    if (next[slot] === stackUid) next[slot] = null;
  }
  next.pockets[pocket] = stackUid;
  return next;
}

export function clearPocket(loadout: Loadout, pocket: PocketId): Loadout {
  const next = clone(ensureLoadout(loadout));
  next.pockets[pocket] = null;
  return next;
}

export function carriedWeight(loadout: Loadout): number {
  const ready = ensureLoadout(loadout);
  return ready.pack.reduce((n, s) => {
    const item = getItem(s.itemId);
    return n + (item?.weight ?? 0) * s.qty;
  }, 0);
}

export function equippedArmor(loadout: Loadout): CatalogItem | undefined {
  return stackItem(ensureLoadout(loadout), ensureLoadout(loadout).body);
}

export function equippedHelmet(loadout: Loadout): CatalogItem | undefined {
  const ready = ensureLoadout(loadout);
  const body = stackItem(ready, ready.body);
  if (body?.includesHelmet) return undefined;
  return stackItem(ready, ready.head);
}

export function allEquippedUids(loadout: Loadout): Set<string> {
  const ready = ensureLoadout(loadout);
  const ids = [ready.head, ready.body, ready.left, ready.right, ...POCKET_IDS.map((p) => ready.pockets[p])];
  return new Set(ids.filter((x): x is string => !!x));
}

export interface GearSummary {
  armorAc: number;
  dt: number;
  dr: number;
  strBonus: number;
  pePenalty: number;
  radBonus: number;
  poisonBonus: number;
  sneakPen: number;
  carried: number;
}

export function gearSummary(loadout: Loadout | null | undefined, engine: EngineId): GearSummary {
  const ready = ensureLoadout(loadout);
  const armor = equippedArmor(ready);
  const helmet = equippedHelmet(ready);
  const armorAc =
    (armor ? armorAcFor(armor, engine) : 0) + (helmet ? armorAcFor(helmet, engine) : 0);
  const n = armor?.resists?.n;
  return {
    armorAc,
    dt: n?.dt ?? 0,
    dr: n?.dr ?? 0,
    strBonus: armor?.strBonus ?? 0,
    pePenalty: armor?.pePenalty ?? 0,
    radBonus: (armor?.radBonus ?? 0) + (helmet?.radBonus ?? 0),
    poisonBonus: (armor?.poisonBonus ?? 0) + (helmet?.poisonBonus ?? 0),
    sneakPen: armor?.sneakPen ?? 0,
    carried: carriedWeight(ready),
  };
}

export function slotCandidates(loadout: Loadout, slot: EquipSlot | PocketId): InventoryStack[] {
  const ready = ensureLoadout(loadout);
  return ready.pack.filter((stack) => {
    const item = getItem(stack.itemId);
    if (!item) return false;
    if (slot === "head") return item.kind === "helmet";
    if (slot === "body") return item.kind === "armor";
    if (slot === "left" || slot === "right") return item.kind === "weapon";
    return true;
  });
}

export function countItem(loadout: Loadout, itemId: string): number {
  return ensureLoadout(loadout).pack
    .filter((s) => s.itemId === itemId)
    .reduce((n, s) => n + s.qty, 0);
}

export function consumeItem(loadout: Loadout, itemId: string, qty = 1): Loadout | null {
  const next = clone(ensureLoadout(loadout));
  let need = qty;
  for (const stack of next.pack) {
    if (stack.itemId !== itemId || need <= 0) continue;
    const take = Math.min(stack.qty, need);
    stack.qty -= take;
    need -= take;
  }
  if (need > 0) return null;
  const empty = new Set(next.pack.filter((s) => s.qty <= 0).map((s) => s.uid));
  next.pack = next.pack.filter((s) => s.qty > 0);
  for (const slot of ["head", "body", "left", "right"] as EquipSlot[]) {
    if (next[slot] && empty.has(next[slot]!)) next[slot] = null;
  }
  for (const p of POCKET_IDS) {
    if (next.pockets[p] && empty.has(next.pockets[p]!)) next.pockets[p] = null;
  }
  return next;
}
