import { SKILL_META, SPECIAL_META, GENDER_META, genderOf, traitName } from "@/lib/special/data";
import { derive } from "@/lib/special/engine";
import { educationOf, lifeOf, scarsOf } from "@/lib/special/paths";
import {
  armorAcFor,
  formatDamage,
  getItem,
  resistLine,
} from "@/lib/special/catalog";
import { ensureLoadout, stackItem } from "@/lib/special/loadout";
import {
  SKILL_IDS,
  SPECIAL_KEYS,
  characterEngine,
  type Character,
} from "@/lib/special/types";
import { cn } from "@/lib/utils";
import { LoadoutBoard, PackTable } from "./loadout-board";
import { Badge } from "./ui/badge";

export function CharacterSheet({
  character,
  compact = false,
}: {
  character: Character;
  compact?: boolean;
}) {
  if (compact) {
    return <DossierPage character={character} compact />;
  }
  return (
    <div className="space-y-6">
      <DossierPage character={character} />
      <LoadoutPage character={character} />
      <InventoryPage character={character} />
    </div>
  );
}

function DossierPage({
  character,
  compact = false,
}: {
  character: Character;
  compact?: boolean;
}) {
  const d = derive(character);
  const engine = characterEngine(character);
  const pnp = engine === "pnp";
  const education = educationOf(character.educationId);
  const life = lifeOf(character.lifeId);
  const scars = scarsOf(character.scars);
  const bgName = pnp
    ? "No background"
    : character.backgroundId === "custom"
      ? character.customBackground.name || "Custom"
      : character.backgroundId === "none"
        ? "—"
        : character.backgroundId;
  const loadout = ensureLoadout(character.loadout);
  const armor = stackItem(loadout, loadout.body);
  const helmet = stackItem(loadout, loadout.head);
  const left = stackItem(loadout, loadout.left);
  const right = stackItem(loadout, loadout.right);

  return (
    <article className="print-sheet print-page overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] tracking-[0.24em] text-subtle uppercase">
            {pnp ? "Fallout PnP · d100" : "SPECIAL d20"} · personnel dossier · sheet 1
          </p>
          <h2 className="font-display truncate text-3xl leading-none font-semibold tracking-tight">
            {character.name.trim() || "Unnamed"}
          </h2>
          <p className="mt-1 text-sm text-muted capitalize">
            {GENDER_META[genderOf(character)].name}
            {" · "}
            {bgName}
            {education.id !== "none" ? ` · ${education.name}` : ""}
            {life.id !== "none" ? ` · ${life.name}` : ""}
            {" · Level "}
            {character.level}
            {pnp ? ` · Karma ${character.karma ?? 0}` : ""}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] tracking-widest text-subtle uppercase">
            Array
          </p>
          <p className="font-mono text-lg tabular-nums">{d.finalTotal}</p>
          <p className="text-[11px] text-subtle">rolled {d.rolledTotal}</p>
        </div>
      </div>

      <div className="grid grid-cols-7 divide-x divide-border border-b border-border">
        {SPECIAL_KEYS.map((key) => (
          <div key={key} className="px-1.5 py-3 text-center sm:px-2">
            <div className="font-mono text-[10px] tracking-widest text-subtle">
              {key}
            </div>
            <div
              className={cn(
                "font-display text-2xl leading-none tabular-nums sm:text-3xl",
                d.special[key] <= 2 && "text-danger",
                d.special[key] >= 11 && "text-accent",
              )}
            >
              {d.special[key]}
            </div>
            <div className="mt-1 font-mono text-[10px] text-subtle tabular-nums">
              {d.modifiers[key] >= 0 ? "+" : ""}
              {d.modifiers[key]}
            </div>
            {!compact ? (
              <div
                className="mx-auto mt-2 h-1 max-w-12 overflow-visible rounded-full bg-inset"
                title={`${SPECIAL_META[key].name}`}
              >
                <div
                  className={cn(
                    "h-1 rounded-full",
                    d.special[key] < 0 ? "bg-danger" : "bg-accent",
                  )}
                  style={{
                    width: `${Math.min(100, Math.abs(d.special[key]) * 10)}%`,
                  }}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
        <StatChip label="HP" value={d.hp} />
        <StatChip label="AP" value={d.ap} />
        <StatChip label="AC" value={pnp ? `${d.ac}%` : d.ac} />
        <StatChip label="Sequence" value={d.sequence} />
        <StatChip
          label="Carry"
          value={`${d.carriedWeight}/${d.carryWeight} lb`}
          warn={d.overweight}
        />
        <StatChip
          label="Melee"
          value={`${d.meleeDamage >= 0 ? "+" : ""}${d.meleeDamage}`}
        />
        <StatChip
          label="Poison"
          value={pnp ? `${d.poisonResistance}%` : d.poisonResistance}
        />
        <StatChip
          label="Radiation"
          value={pnp ? `${d.radiationResistance}%` : d.radiationResistance}
        />
      </div>

      <div className="grid gap-4 px-5 py-4 sm:grid-cols-3">
        <Meta label="Healing / day" value={`${d.healingRate} HP`} />
        <Meta label="Skill points / level" value={d.skillPointsPerLevel} />
        <Meta
          label="Perks"
          value={`${d.perksEarned} (every ${d.perkInterval})`}
        />
        <Meta
          label={pnp ? "Critical chance" : "Critical range"}
          value={d.criticalRange}
        />
        <Meta
          label="Armor AC"
          value={
            d.gearArmorAc
              ? pnp
                ? `${d.gearArmorAc}%`
                : d.gearArmorAc
              : character.armorAc
          }
        />
        {pnp ? (
          <Meta label="Electricity" value={`${d.electricityResistance}%`} />
        ) : (
          <Meta
            label="Crit fail"
            value={character.traits.includes("jinxed") ? "18–20" : "20"}
          />
        )}
        {d.gearDt || d.gearDr ? (
          <Meta label="DT / DR" value={`${d.gearDt} / ${d.gearDr}%`} />
        ) : null}
      </div>

      {(armor || helmet || left || right) && (
        <div className="grid gap-2 border-t border-border px-5 py-3 sm:grid-cols-2">
          {armor ? (
            <GearLine
              label="Body"
              name={armor.name}
              detail={
                pnp
                  ? `AC ${armorAcFor(armor, engine)}%${resistLine(armor) ? ` · ${resistLine(armor)}` : ""}`
                  : `AC ${armorAcFor(armor, engine)}${resistLine(armor) ? ` · ${resistLine(armor)}` : ""}`
              }
            />
          ) : null}
          {helmet && !armor?.includesHelmet ? (
            <GearLine
              label="Head"
              name={helmet.name}
              detail={pnp ? `AC ${armorAcFor(helmet, engine)}%` : `AC ${armorAcFor(helmet, engine)}`}
            />
          ) : null}
          {left ? (
            <GearLine
              label={loadout.left === loadout.right ? "Both hands" : "Left"}
              name={left.name}
              detail={formatDamage(left, engine)}
            />
          ) : null}
          {right && loadout.right !== loadout.left ? (
            <GearLine
              label="Right"
              name={right.name}
              detail={formatDamage(right, engine)}
            />
          ) : null}
        </div>
      )}

      {character.traits.length > 0 ||
      education.id !== "none" ||
      life.id !== "none" ||
      scars.length > 0 ? (
        <div className="flex flex-wrap gap-1.5 border-t border-border px-5 py-3">
          {education.id !== "none" ? (
            <Badge variant="accent">{education.name}</Badge>
          ) : null}
          {life.id !== "none" ? (
            <Badge variant="accent">{life.name}</Badge>
          ) : null}
          {character.traits.map((id) => (
            <Badge key={id} variant="outline">
              {traitName(id, engine)}
            </Badge>
          ))}
          {scars.map((scar) => (
            <Badge key={scar.id} variant="danger">
              {scar.name}
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="border-t border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] tracking-wide text-subtle uppercase">
              <th className="px-5 py-2 font-medium">Skill</th>
              {!compact ? (
                <th className="hidden px-2 py-2 font-medium sm:table-cell">
                  Formula
                </th>
              ) : null}
              <th className="px-2 py-2 text-right font-medium">
                {pnp ? "Total %" : "Total"}
              </th>
            </tr>
          </thead>
          <tbody>
            {SKILL_IDS.map((id) => {
              const row = d.skills[id];
              const tagged = character.tagged.includes(id);
              return (
                <tr key={id} className="border-t border-border/80">
                  <td className="px-5 py-1.5">
                    <span className={cn(tagged && "text-accent")}>
                      {SKILL_META[id].name}
                    </span>
                    {tagged ? (
                      <Badge variant="accent" className="ml-2">
                        Tag
                      </Badge>
                    ) : null}
                  </td>
                  {!compact ? (
                    <td className="hidden px-2 py-1.5 font-mono text-[11px] text-subtle sm:table-cell">
                      <span className={cn(row.rewritten && "text-accent")}>
                        {row.formula}
                      </span>
                      {row.rewritten ? (
                        <Badge variant="accent" className="ml-2">
                          rewritten
                        </Badge>
                      ) : null}
                      {row.background
                        ? ` ${row.background > 0 ? "+" : ""}${row.background}`
                        : ""}
                      {row.trait
                        ? ` ${row.trait > 0 ? "+" : ""}${row.trait}${pnp ? "%" : ""}`
                        : ""}
                      {row.tag ? ` +${row.tag}${pnp ? "%" : ""}` : ""}
                      {row.path
                        ? ` ${row.path > 0 ? "+" : ""}${row.path}${pnp ? "%" : ""} path`
                        : ""}
                    </td>
                  ) : null}
                  <td className="px-5 py-1.5 text-right font-mono tabular-nums">
                    {row.total}
                    {pnp ? "%" : ""}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {!compact &&
      (character.appearance ||
        character.history ||
        character.goals ||
        character.equipment ||
        education.id !== "none" ||
        life.id !== "none" ||
        scars.length > 0) ? (
        <div className="grid gap-4 border-t border-border px-5 py-4 sm:grid-cols-2">
          {education.id !== "none" ? (
            <Note
              label={`Education · ${education.name}`}
              text={`${education.story} ${education.summary}.`}
            />
          ) : null}
          {life.id !== "none" ? (
            <Note
              label={`Life · ${life.name}`}
              text={`${life.story} ${life.summary}.`}
            />
          ) : null}
          {scars.map((scar) => (
            <Note
              key={scar.id}
              label={`Scar · ${scar.name}`}
              text={`${scar.story} ${scar.summary}.`}
            />
          ))}
          {character.appearance ? (
            <Note label="Appearance" text={character.appearance} />
          ) : null}
          {character.history ? <Note label="History" text={character.history} /> : null}
          {character.goals ? <Note label="Goals" text={character.goals} /> : null}
          {character.equipment ? (
            <Note label="Equipment notes" text={character.equipment} />
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

function LoadoutPage({ character }: { character: Character }) {
  const engine = characterEngine(character);
  const pnp = engine === "pnp";
  const d = derive(character);
  return (
    <article className="print-sheet print-page overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <div className="border-b border-border px-5 py-4">
        <p className="font-mono text-[10px] tracking-[0.24em] text-subtle uppercase">
          {pnp ? "Fallout PnP · d100" : "SPECIAL d20"} · sheet 2 · body & pockets
        </p>
        <h2 className="font-display text-3xl leading-none font-semibold tracking-tight">
          {character.name.trim() || "Unnamed"} · loadout
        </h2>
        <p className="mt-2 text-sm text-muted">
          Hands, helmet, armor. Pockets hold ammo, stimpaks, chems, and quick-access items.
          Carry {d.carriedWeight}/{d.carryWeight} lb
          {d.overweight ? " · overweight" : ""}.
        </p>
      </div>
      <div className="px-5 py-4">
        <LoadoutBoard character={character} />
      </div>
    </article>
  );
}

function InventoryPage({ character }: { character: Character }) {
  const engine = characterEngine(character);
  const pnp = engine === "pnp";
  const loadout = ensureLoadout(character.loadout);
  return (
    <article className="print-sheet print-page overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <div className="border-b border-border px-5 py-4">
        <p className="font-mono text-[10px] tracking-[0.24em] text-subtle uppercase">
          {pnp ? "Fallout PnP · d100" : "SPECIAL d20"} · sheet 3 · items & equipment
        </p>
        <h2 className="font-display text-3xl leading-none font-semibold tracking-tight">
          Pack
        </h2>
        <p className="mt-2 text-sm text-muted">
          Everything carried, drawn from the PnP item list
          {pnp ? "." : " with armor AC converted for d20 (PnP AC ÷ 5)."}
        </p>
      </div>
      <div className="px-2 py-2 sm:px-3">
        <PackTable character={character} />
      </div>
      {loadout.pack.length > 0 ? (
        <div className="border-t border-border px-5 py-3">
          <p className="text-[11px] text-subtle">
            {loadout.pack.length} stack{loadout.pack.length === 1 ? "" : "s"} ·{" "}
            {loadout.pack.reduce((n, s) => n + s.qty, 0)} pieces ·{" "}
            {loadout.pack
              .reduce((n, s) => n + (getItem(s.itemId)?.weight ?? 0) * s.qty, 0)
              .toFixed(0)}{" "}
            lb
          </p>
        </div>
      ) : null}
      {character.equipment ? (
        <div className="border-t border-border px-5 py-4">
          <Note label="Other notes" text={character.equipment} />
        </div>
      ) : null}
    </article>
  );
}

function GearLine({
  label,
  name,
  detail,
}: {
  label: string;
  name: string;
  detail: string;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-widest text-subtle uppercase">
        {label}
      </div>
      <div className="text-sm">{name}</div>
      <div className="font-mono text-[11px] text-muted">{detail}</div>
    </div>
  );
}

function StatChip({
  label,
  value,
  warn,
}: {
  label: string;
  value: string | number;
  warn?: boolean;
}) {
  return (
    <div className="bg-surface px-4 py-3">
      <div className="font-mono text-[10px] tracking-widest text-subtle uppercase">
        {label}
      </div>
      <div
        className={cn(
          "font-display text-2xl leading-none tabular-nums",
          warn && "text-danger",
        )}
      >
        {value}
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-[11px] tracking-wide text-subtle uppercase">{label}</div>
      <div className="font-mono text-sm tabular-nums">{value}</div>
    </div>
  );
}

function Note({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="text-[11px] tracking-wide text-subtle uppercase">{label}</div>
      <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
