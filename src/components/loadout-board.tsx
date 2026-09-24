import type { ReactNode } from "react";
import { Ban } from "lucide-react";
import {
  armorAcFor,
  describeItem,
  formatDamage,
  getItem,
  resistLine,
} from "@/lib/special/catalog";
import { derive } from "@/lib/special/engine";
import {
  clearPocket,
  ensureLoadout,
  equip,
  findStack,
  putInPocket,
  stackItem,
  unequip,
} from "@/lib/special/loadout";
import {
  POCKET_IDS,
  POCKET_LABELS,
  characterEngine,
  type Character,
  type EquipSlot,
  type Loadout,
  type PocketId,
} from "@/lib/special/types";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const BODY_SLOTS: { id: EquipSlot; label: string; hint: string }[] = [
  { id: "head", label: "Head", hint: "Helmet" },
  { id: "body", label: "Body", hint: "Armor" },
  { id: "left", label: "Left hand", hint: "Weapon" },
  { id: "right", label: "Right hand", hint: "Weapon" },
];

export function LoadoutBoard({
  character,
  onChange,
  compact = false,
}: {
  character: Character;
  onChange?: (loadout: Loadout) => void;
  compact?: boolean;
}) {
  const engine = characterEngine(character);
  const loadout = ensureLoadout(character.loadout);
  const derived = derive(character);
  const interactive = Boolean(onChange);
  const bodyItem = stackItem(loadout, loadout.body);
  const helmetIncluded = Boolean(bodyItem?.includesHelmet);

  function patch(next: Loadout) {
    onChange?.(next);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {BODY_SLOTS.filter((slot) => {
          const twoHand =
            (slot.id === "left" || slot.id === "right") &&
            Boolean(loadout.left) &&
            loadout.left === loadout.right;
          return !(twoHand && slot.id === "left");
        }).map((slot) => {
          const twoHand =
            (slot.id === "left" || slot.id === "right") &&
            Boolean(loadout.left) &&
            loadout.left === loadout.right;
          return (
            <SlotCard
              key={slot.id}
              title={twoHand ? "Both hands" : slot.label}
              hint={
                slot.id === "head" && helmetIncluded
                  ? "Built into the suit"
                  : slot.hint
              }
              className={cn(
                slot.id === "head" && "sm:col-start-2 sm:row-start-1",
                slot.id === "left" && "sm:col-start-1 sm:row-start-2",
                slot.id === "right" && "sm:col-start-3 sm:row-start-2",
                slot.id === "body" && "sm:col-start-2 sm:row-start-3",
              )}
            >
              <EquippedBlock
                loadout={loadout}
                uid={
                  slot.id === "head" && helmetIncluded ? loadout.body : loadout[slot.id]
                }
                engine={engine}
                included={slot.id === "head" && helmetIncluded}
                strength={derived.special.STR}
              />
              {interactive && !(slot.id === "head" && helmetIncluded) ? (
                <SlotPicker
                  loadout={loadout}
                  slot={slot.id}
                  onPick={(uid) => patch(equip(loadout, uid, slot.id))}
                  onClear={() => patch(unequip(loadout, slot.id))}
                />
              ) : null}
            </SlotCard>
          );
        })}
        {!compact ? (
          <div className="hidden items-center justify-center sm:col-start-2 sm:row-start-2 sm:flex">
            <BodyFigure
              helmet={Boolean(loadout.head) || helmetIncluded}
              armor={Boolean(loadout.body)}
              left={Boolean(loadout.left)}
              right={Boolean(loadout.right)}
            />
          </div>
        ) : null}
      </div>

      <div>
        <p className="mb-2 font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">
          Pockets
        </p>
        <div className={cn("grid gap-2", compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3")}>
          {POCKET_IDS.map((pocket) => (
            <SlotCard key={pocket} title={POCKET_LABELS[pocket]} hint="Quick access">
              <EquippedBlock
                loadout={loadout}
                uid={loadout.pockets[pocket]}
                engine={engine}
                strength={derived.special.STR}
              />
              {interactive ? (
                <SlotPicker
                  loadout={loadout}
                  slot={pocket}
                  onPick={(uid) => patch(putInPocket(loadout, uid, pocket))}
                  onClear={() => patch(clearPocket(loadout, pocket))}
                />
              ) : null}
            </SlotCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlotCard({
  title,
  hint,
  children,
  className,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg bg-raised px-3 py-3 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
        className,
      )}
    >
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <p className="font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">
          {title}
        </p>
        {hint ? <p className="text-[11px] text-subtle">{hint}</p> : null}
      </div>
      {children}
    </div>
  );
}

function EquippedBlock({
  loadout,
  uid,
  engine,
  included,
  strength,
}: {
  loadout: Loadout;
  uid: string | null;
  engine: Character["engine"];
  included?: boolean;
  strength: number;
}) {
  const stack = findStack(loadout, uid);
  const item = stackItem(loadout, uid);
  if (!stack || !item) {
    return <p className="text-sm text-subtle">Empty</p>;
  }
  const heavy = item.kind === "weapon" && strength < item.minSt;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-medium leading-snug">{item.name}</p>
        {stack.qty > 1 ? (
          <span className="font-mono text-xs tabular-nums text-muted">×{stack.qty}</span>
        ) : null}
      </div>
      <p className="mt-0.5 font-mono text-[11px] text-muted">
        {describeItem(item, engine)}
      </p>
      {item.kind === "weapon" ? (
        <p className="mt-1 font-mono text-[11px] text-subtle">
          {formatDamage(item, engine)}
          {item.ammo?.length
            ? ` · ${item.ammo.map((id) => getItem(id)?.name ?? id).join(" / ")}`
            : ""}
        </p>
      ) : null}
      {item.kind === "armor" ? (
        <p className="mt-1 font-mono text-[11px] text-subtle">
          {engine === "pnp" ? `AC ${armorAcFor(item, engine)}%` : `AC ${armorAcFor(item, engine)}`}
          {resistLine(item) ? ` · ${resistLine(item)}` : ""}
        </p>
      ) : null}
      {included ? (
        <Badge variant="outline" className="mt-1">
          Helmet included
        </Badge>
      ) : null}
      {heavy ? (
        <p className="mt-1 text-[11px] text-danger">
          Min ST {item.minSt}. You have {strength}.
        </p>
      ) : null}
      {item.notes ? <p className="mt-1 text-[11px] text-subtle">{item.notes}</p> : null}
    </div>
  );
}

function SlotPicker({
  loadout,
  slot,
  onPick,
  onClear,
}: {
  loadout: Loadout;
  slot: EquipSlot | PocketId;
  onPick: (uid: string) => void;
  onClear: () => void;
}) {
  const filled =
    slot === "head" || slot === "body" || slot === "left" || slot === "right"
      ? loadout[slot]
      : loadout.pockets[slot];
  const options = loadout.pack.filter((stack) => {
    const item = getItem(stack.itemId);
    if (!item) return false;
    if (slot === "head") return item.kind === "helmet";
    if (slot === "body") return item.kind === "armor";
    if (slot === "left" || slot === "right") return item.kind === "weapon";
    if (slot === "ammo") return item.kind === "ammo" || item.pocket === "ammo";
    if (slot === "chems") return item.kind === "chem";
    if (slot === "aid") return item.pocket === "aid" || item.id.includes("stim");
    return item.kind !== "armor" && item.kind !== "helmet";
  });

  if (options.length === 0 && !filled) {
    return <p className="mt-2 text-[11px] text-subtle">Nothing in the pack fits.</p>;
  }

  return (
    <div className="mt-2 flex flex-wrap gap-1">
      {filled ? (
        <Button type="button" size="sm" variant="ghost" onClick={onClear}>
          <Ban />
          Unequip
        </Button>
      ) : null}
      {options.map((stack) => {
        const item = getItem(stack.itemId);
        if (!item) return null;
        const active = stack.uid === filled;
        return (
          <button
            key={stack.uid}
            type="button"
            onClick={() => onPick(stack.uid)}
            className={cn(
              "rounded-md px-2 py-1 text-left text-[11px] transition-colors",
              active
                ? "bg-accent text-accent-fg"
                : "bg-inset text-muted hover:text-fg",
            )}
          >
            {item.name}
            {stack.qty > 1 ? ` ×${stack.qty}` : ""}
          </button>
        );
      })}
    </div>
  );
}

function BodyFigure({
  helmet,
  armor,
  left,
  right,
}: {
  helmet: boolean;
  armor: boolean;
  left: boolean;
  right: boolean;
}) {
  const on = "var(--color-accent)";
  const off = "color-mix(in oklab, var(--color-fg) 22%, transparent)";
  return (
    <svg
      viewBox="0 0 120 220"
      className="h-56 w-32"
      aria-hidden
      fill="none"
    >
      <circle cx="60" cy="22" r="16" stroke={helmet ? on : off} strokeWidth="2" />
      <rect
        x="38"
        y="42"
        width="44"
        height="64"
        rx="8"
        stroke={armor ? on : off}
        strokeWidth="2"
      />
      <path
        d="M38 50 L18 108"
        stroke={left ? on : off}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M82 50 L102 108"
        stroke={right ? on : off}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M48 106 L42 200" stroke={off} strokeWidth="2" strokeLinecap="round" />
      <path d="M72 106 L78 200" stroke={off} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PackTable({
  character,
  compact = false,
}: {
  character: Character;
  compact?: boolean;
}) {
  const engine = characterEngine(character);
  const loadout = ensureLoadout(character.loadout);
  const derived = derive(character);
  if (loadout.pack.length === 0) {
    return <p className="text-sm text-muted">Pack is empty.</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[11px] tracking-wide text-subtle uppercase">
            <th className="px-3 py-2 font-medium">Item</th>
            {!compact ? <th className="px-2 py-2 font-medium">Stats</th> : null}
            <th className="px-2 py-2 text-right font-medium">Qty</th>
            <th className="px-2 py-2 text-right font-medium">Lb</th>
          </tr>
        </thead>
        <tbody>
          {loadout.pack.map((stack) => {
            const item = getItem(stack.itemId);
            if (!item) return null;
            const where =
              loadout.head === stack.uid
                ? "Head"
                : loadout.body === stack.uid
                  ? "Body"
                  : loadout.left === stack.uid || loadout.right === stack.uid
                    ? loadout.left === loadout.right
                      ? "Both hands"
                      : loadout.left === stack.uid
                        ? "Left"
                        : "Right"
                    : POCKET_IDS.find((p) => loadout.pockets[p] === stack.uid);
            const loc = where
              ? typeof where === "string" && where in POCKET_LABELS
                ? POCKET_LABELS[where as PocketId]
                : where
              : "Pack";
            const heavy = item.kind === "weapon" && derived.special.STR < item.minSt;
            return (
              <tr key={stack.uid} className="border-t border-border/80">
                <td className="px-3 py-2">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-[11px] text-subtle">
                    {loc}
                    {heavy ? " · too heavy" : ""}
                  </div>
                </td>
                {!compact ? (
                  <td className="px-2 py-2 font-mono text-[11px] text-muted">
                    {describeItem(item, engine)}
                  </td>
                ) : null}
                <td className="px-2 py-2 text-right font-mono tabular-nums">{stack.qty}</td>
                <td className="px-2 py-2 text-right font-mono tabular-nums">
                  {(item.weight * stack.qty).toFixed(item.weight % 1 ? 1 : 0)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
