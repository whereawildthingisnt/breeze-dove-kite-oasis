import { Minus, Plus, Search, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import {
  CATALOG,
  CATEGORIES,
  KITS,
  defaultAddQty,
  describeItem,
  getItem,
} from "@/lib/special/catalog";
import { derive } from "@/lib/special/engine";
import {
  addAndSlot,
  applyKit,
  ensureLoadout,
  removeStack,
  setQty,
} from "@/lib/special/loadout";
import {
  characterEngine,
  type Character,
  type Loadout,
} from "@/lib/special/types";
import { cn } from "@/lib/utils";
import { LoadoutBoard } from "./loadout-board";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function EquipmentDesk({
  character,
  onChange,
}: {
  character: Character;
  onChange: (loadout: Loadout) => void;
}) {
  const engine = characterEngine(character);
  const loadout = ensureLoadout(character.loadout);
  const derived = derive(character);
  const pnp = engine === "pnp";
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");

  const items = useMemo(() => {
    const category = CATEGORIES.find((c) => c.id === cat) ?? CATEGORIES[0]!;
    const q = query.trim().toLowerCase();
    return CATALOG.filter((item) => {
      if (item.id === "fists") return false;
      if (!category.test(item)) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.id.includes(q) ||
        (item.notes?.toLowerCase().includes(q) ?? false) ||
        (item.skill?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [cat, query]);

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-display text-2xl font-semibold tracking-tight">Equipment</h3>
        <p className="mt-1 text-sm text-muted">
          {pnp
            ? "Classic PnP list. Pick weapons, armor, ammo, chems, and gear. Slots are left/right hands, body, helmet, and pockets."
            : "Same PnP list, converted for d20: armor AC is the PnP AC divided by 5. Damage dice, AP, range, and DT/DR stay as written."}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={derived.overweight ? "danger" : "outline"}>
          {derived.carriedWeight}/{derived.carryWeight} lb
        </Badge>
        {derived.gearArmorAc > 0 ? (
          <Badge variant="ok">
            {pnp ? `Armor AC ${derived.gearArmorAc}%` : `Armor AC ${derived.gearArmorAc}`}
            {derived.gearDt || derived.gearDr
              ? ` · DT ${derived.gearDt}/DR ${derived.gearDr}%`
              : ""}
          </Badge>
        ) : (
          <Badge variant="outline">No armor worn</Badge>
        )}
        <Badge variant="outline">{loadout.pack.length} stacks</Badge>
      </div>

      <div>
        <p className="mb-2 font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">
          Starting kits
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {KITS.map((kit) => (
            <button
              key={kit.id}
              type="button"
              onClick={() => onChange(applyKit(loadout, kit, true))}
              className="rounded-lg bg-raised px-3 py-3 text-left transition-colors hover:bg-border"
            >
              <div className="font-medium">{kit.name}</div>
              <p className="mt-1 text-xs text-muted">{kit.pitch}</p>
            </button>
          ))}
        </div>
        {loadout.pack.length > 0 ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="mt-2"
            onClick={() => onChange(ensureLoadout(null))}
          >
            <Trash2 />
            Empty pack
          </Button>
        ) : null}
      </div>

      <LoadoutBoard character={character} onChange={onChange} />

      <div>
        <p className="mb-2 font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">
          Pack
        </p>
        {loadout.pack.length === 0 ? (
          <p className="text-sm text-muted">
            Nothing yet. Add from the catalog below. Items auto-slot if the matching body slot or pocket is empty.
          </p>
        ) : (
          <ul className="space-y-1">
            {loadout.pack.map((stack) => {
              const item = getItem(stack.itemId);
              if (!item) return null;
              return (
                <li
                  key={stack.uid}
                  className="flex items-center gap-2 rounded-md bg-raised px-2 py-1.5"
                >
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm">{item.name}</div>
                    <div className="truncate font-mono text-[11px] text-subtle">
                      {describeItem(item, engine)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      type="button"
                      size="icon-sm"
                      variant="ghost"
                      aria-label={`Fewer ${item.name}`}
                      onClick={() => onChange(setQty(loadout, stack.uid, stack.qty - 1))}
                    >
                      <Minus />
                    </Button>
                    <span className="w-6 text-center font-mono text-sm tabular-nums">
                      {stack.qty}
                    </span>
                    <Button
                      type="button"
                      size="icon-sm"
                      variant="ghost"
                      aria-label={`More ${item.name}`}
                      onClick={() => onChange(setQty(loadout, stack.uid, stack.qty + 1))}
                    >
                      <Plus />
                    </Button>
                    <Button
                      type="button"
                      size="icon-sm"
                      variant="ghost"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => onChange(removeStack(loadout, stack.uid))}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div>
        <p className="mb-2 font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">
          Catalog · PnP converted
        </p>
        <div className="relative mb-3">
          <Search className="pointer-events-none absolute top-3 left-3 size-4 text-subtle" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search every weapon, armor, chem, and tool"
            className="pl-9"
          />
        </div>
        <div className="mb-3 flex gap-1 overflow-x-auto pb-1">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={cn(
                "rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors",
                cat === c.id
                  ? "bg-accent text-accent-fg"
                  : "text-muted hover:bg-raised hover:text-fg",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <ul className="max-h-[28rem] space-y-1 overflow-y-auto pr-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(addAndSlot(loadout, item.id, defaultAddQty(item)))}
                className="flex w-full items-start gap-3 rounded-md px-2 py-2 text-left hover:bg-raised"
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-inset font-mono text-[10px] text-subtle uppercase">
                  {item.kind === "weapon"
                    ? item.skill?.slice(0, 2)
                    : item.kind.slice(0, 2)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">{item.name}</span>
                  <span className="block font-mono text-[11px] text-muted">
                    {describeItem(item, engine)}
                  </span>
                  {item.notes ? (
                    <span className="mt-0.5 block text-[11px] text-subtle">{item.notes}</span>
                  ) : null}
                </span>
                <Plus className="mt-1 size-4 shrink-0 text-subtle" />
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[11px] text-subtle">{items.length} listed</p>
      </div>
    </div>
  );
}
