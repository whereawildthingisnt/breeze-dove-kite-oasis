import { FlaskConical, Handshake, Landmark, Martini, Search, Store, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ensureIntel, guardCount, sizeLabel } from "@/lib/reno/intel";
import { FAMILY_PROFILE, VENUES, districtBlurb, venueOpen } from "@/lib/reno/city-sim";
import {
  BUSINESS_COST,
  COOK_COST,
  DEAL_OPEN_STOCK,
  DEAL_RUN_STOCK,
  hustleClock,
  LAB_COST,
  sneakCover,
} from "@/lib/reno/sneak";
import type { RenoAction, RenoLife } from "@/lib/reno/types";
import { DISTRICT_BY_ID, GANG_BY_ID, GANGS, STASH_META } from "@/lib/reno/world";
import { derive } from "@/lib/special/engine";
import type { Character } from "@/lib/special/types";

export function RenoIntel({
  life,
  character,
  onAction,
}: {
  life: RenoLife;
  character: Character;
  onAction: (action: RenoAction) => void;
}) {
  ensureIntel(life);
  const dealers = life.dealers ?? [];
  const marks = life.marks ?? [];
  const soughtD = dealers.find((d) => d.id === life.soughtDealer);
  const soughtM = marks.find((m) => m.id === life.soughtMark);
  const derived = derive(character);
  const sneak = derived.skills.sneak?.total ?? 0;
  const science = derived.skills.science?.total ?? 0;
  const cover = sneakCover(sneak);
  const stock = ["jet", "marijuana", "cocaine", "buffout", "mentats", "psycho"].reduce(
    (n, id) => n + (life.stash[id as keyof typeof life.stash] ?? 0),
    0,
  );
  const dealNeed = life.dealing ? DEAL_RUN_STOCK : DEAL_OPEN_STOCK;

  return (
    <div className="space-y-4">
      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">City overview</p>
        <h3 className="font-display mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight">
          <Landmark className="size-5" /> New Reno, on paper
        </h3>
        <p className="mt-2 text-sm text-muted">
          The sidewalk is not a spawn table. Citizens keep hours. Independents work a corner and remember a slight.
          Family blades walk their turf, and when the city is hot they meet off Virgin Street. There is no police. A code trails heat. Fear makes civilians take the long way. Regard is fame after it has had time to be believed.
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11px] text-muted">
          <div className="rounded-lg bg-raised px-2 py-2">
            <dt className="text-subtle uppercase">Heat {Math.round(life.heat)}</dt>
            <dd>Fresh noise. Fades slowly. Does not send a fight.</dd>
          </div>
          <div className="rounded-lg bg-raised px-2 py-2">
            <dt className="text-subtle uppercase">Code {Math.round(life.warrant ?? 0)}</dt>
            <dd>Families start looking around 18, off the strip. They square up in an alley, not on the felt.</dd>
          </div>
          <div className="rounded-lg bg-raised px-2 py-2">
            <dt className="text-subtle uppercase">Fame {life.fame} / Regard {Math.round(life.regard ?? 0)}</dt>
            <dd>Regard creeps toward fame. Fear drags it down.</dd>
          </div>
          <div className="rounded-lg bg-raised px-2 py-2">
            <dt className="text-subtle uppercase">Fear {Math.round(life.fear ?? 0)} · Tension {Math.round(life.tension ?? 0)}</dt>
            <dd>Tension over 48 puts rival crews on the same road.</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Who owns the block</p>
        <h3 className="font-display mt-1 text-xl font-semibold tracking-tight">Families, tills, rooms</h3>
        <p className="mt-2 text-sm text-muted">{districtBlurb(life, life.district)}</p>
        <div className="mt-3 space-y-3">
          {GANGS.map((g) => {
            const book = life.pulse?.families?.[g.id];
            const profile = FAMILY_PROFILE[g.id];
            return (
              <div key={g.id} className="rounded-lg bg-raised px-3 py-2">
                <p className="font-display text-base font-semibold" style={{ color: g.color }}>
                  {g.name}
                  <span className="ml-2 font-mono text-[10px] tracking-wide text-subtle uppercase">
                    {book ? `${book.cash.toLocaleString()} caps · influence ${book.influence} · security ${book.security}` : "books closed"}
                  </span>
                </p>
                <p className="mt-1 text-sm text-fg">{book?.operation ?? profile.goals}</p>
                <p className="mt-1 text-sm text-muted">
                  {profile.businesses}. {profile.personnel}. Rivals the {GANG_BY_ID[g.rival].name}.
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-3 space-y-2">
          {VENUES.filter((v) => venueOpen(v, life.hour)).map((v) => {
            const live = life.pulse?.venues?.[v.id];
            return (
              <p key={v.id} className="text-sm text-muted">
                <span className="text-fg">{v.name}</span> · {v.owner}
                {v.gang ? ` · ${GANG_BY_ID[v.gang].name}` : ""} · {live?.activity ?? "quiet"} · {live?.customers ?? 0} inside
                {live ? ` · till ${live.cash.toLocaleString()}` : ""}
              </p>
            );
          })}
        </div>
        {life.pulse?.story?.heard?.[0] ? (
          <p className="mt-3 text-sm text-muted">On the street: {life.pulse.story.heard[0]}</p>
        ) : null}
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Long game</p>
        <h3 className="font-display mt-1 text-xl font-semibold tracking-tight">Five times the clock</h3>
        <p className="mt-2 text-sm text-muted">
          These are not errands. A shift burns five times over while the city keeps score. Luck leans the
          roll. It does not own it. All of it draws attention. Packed meals, canteens, and food already in
          the pack get eaten when hunger or thirst climbs. A carouse buys more if the caps are there.
        </p>
        <p className="mt-3 font-mono text-[10px] tracking-wide text-subtle uppercase">
          Sneak {sneak}% · {cover.label} · Luck {derived.special.LK} · Science {science}%
        </p>
        <p className="mt-1 text-sm text-muted">{cover.blurb}</p>
        {life.pressureDay > life.day ? (
          <p className="mt-2 text-sm text-muted">
            Someone is looking. Not tonight. About {life.pressureDay - life.day} day
            {life.pressureDay - life.day === 1 ? "" : "s"} out, unless the pile gets louder.
          </p>
        ) : null}
        <div className="mt-3 grid gap-2">
          {life.gangId ? (
            <p className="rounded-lg bg-raised px-3 py-2 text-sm text-muted">
              You already wear {GANG_BY_ID[life.gangId].name} colors. Courting another family is how people
              get introduced to a ditch.
            </p>
          ) : (
            GANGS.map((g) => (
              <Button
                key={g.id}
                size="sm"
                variant={life.district === g.turf ? "secondary" : "ghost"}
                className="h-auto min-h-11 justify-start whitespace-normal py-2 text-left"
                disabled={life.district !== g.turf}
                onClick={() => onAction({ type: "courtFamily", gang: g.id })}
              >
                <Users />
                <span>
                  <span className="block font-medium">Court the {g.name}</span>
                  <span className="block font-mono text-[10px] tracking-wide text-subtle uppercase">
                    {DISTRICT_BY_ID[g.turf].name} · {hustleClock(8)} · {g.head}
                  </span>
                </span>
              </Button>
            ))
          )}
          <Button
            size="sm"
            variant="secondary"
            className="h-auto min-h-11 justify-start whitespace-normal py-2 text-left"
            onClick={() => onAction({ type: "carouse" })}
          >
            <Martini />
            <span>
              <span className="block font-medium">Carouse</span>
              <span className="block font-mono text-[10px] tracking-wide text-subtle uppercase">
                {hustleClock(4)} · cards, smoke, a tab
              </span>
            </span>
          </Button>
          <Button
            size="sm"
            className="h-auto min-h-11 justify-start whitespace-normal py-2 text-left"
            disabled={!life.business && life.caps < BUSINESS_COST}
            onClick={() => onAction({ type: "business" })}
          >
            <Store />
            <span>
              <span className="block font-medium">
                {life.business ? `Run ${life.business.name}` : "Stake a front"}
              </span>
              <span className="block font-mono text-[10px] tracking-wide text-subtle uppercase">
                {life.business
                  ? `${hustleClock(4)} · books, shakedowns, a cut`
                  : `${BUSINESS_COST} caps · ${hustleClock(10)}`}
              </span>
            </span>
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="h-auto min-h-11 justify-start whitespace-normal py-2 text-left"
            disabled={stock < dealNeed}
            onClick={() => onAction({ type: "dealing" })}
          >
            <span>
              <span className="block font-medium">{life.dealing ? "Move product" : "Start dealing"}</span>
              <span className="block font-mono text-[10px] tracking-wide text-subtle uppercase">
                {stock}/{dealNeed} doses · {hustleClock(life.dealing ? 4 : 8)}
              </span>
            </span>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-auto min-h-11 justify-start whitespace-normal py-2 text-left"
            disabled={science < 100 || (!life.lab && life.caps < LAB_COST) || (life.lab && life.caps < COOK_COST)}
            onClick={() => onAction({ type: "lab" })}
          >
            <FlaskConical />
            <span>
              <span className="block font-medium">{life.lab ? "Cook a batch" : "Set up a lab"}</span>
              <span className="block font-mono text-[10px] tracking-wide text-subtle uppercase">
                {science < 100
                  ? `Science ${science}% · needs 100`
                  : life.lab
                    ? `${COOK_COST} caps · ${hustleClock(6)}`
                    : `${LAB_COST} caps · ${hustleClock(8)} · smaller than a front`}
              </span>
            </span>
          </Button>
        </div>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Dealers</p>
        <h3 className="font-display mt-1 text-xl font-semibold">Seek the bagmen</h3>
        <p className="mt-1 text-sm text-muted">
          Mordinos move Jet. Bishops sell polite. Independents die first. Find them, then buy.
        </p>
        <ul className="mt-3 space-y-2">
          {dealers.map((d) => (
            <li key={d.id} className="rounded-lg bg-raised px-3 py-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-medium">{d.name}</p>
                  <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">
                    {DISTRICT_BY_ID[d.district].name} · {d.gang ? GANG_BY_ID[d.gang].name : "indie"} ·{" "}
                    {sizeLabel(d.size)}
                  </p>
                  <p className="mt-1 text-xs text-muted">{d.note}</p>
                  <p className="mt-1 font-mono text-[10px] text-subtle uppercase">
                    {d.wares.map((w) => STASH_META[w].name).join(" · ")}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant={life.soughtDealer === d.id ? "secondary" : "ghost"}
                  className="min-h-11 shrink-0"
                  onClick={() => onAction({ type: "seekDealer", dealer: d.id })}
                >
                  Walk
                </Button>
              </div>
              {soughtD?.id === d.id && life.district === d.district ? (
                <div className="mt-2 flex flex-wrap gap-1">
                  {d.wares.map((w) => (
                    <Button
                      key={w}
                      size="sm"
                      variant="secondary"
                      onClick={() => onAction({ type: "dealBuy", dealer: d.id, chem: w, qty: 1 })}
                    >
                      Buy {STASH_META[w].name}
                    </Button>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Wealthy marks</p>
        <h3 className="font-display mt-1 text-xl font-semibold">Money with a pulse</h3>
        <p className="mt-1 text-sm text-muted">
          Befriend, rob, or take them off the street. Guards scale with the purse. Kidnap is a note and a
          bag. The families remember.
        </p>
        <ul className="mt-3 space-y-2">
          {marks.map((m) => {
            const guards = guardCount(m.wealth);
            const open = life.soughtMark === m.id && life.district === m.district;
            return (
              <li key={m.id} className="rounded-lg bg-raised px-3 py-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium">{m.name}</p>
                    <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">
                      {DISTRICT_BY_ID[m.district].name} · {m.wealth} caps · {guards} guard
                      {guards === 1 ? "" : "s"} · {m.mood}
                    </p>
                    <p className="mt-1 text-xs text-muted">{m.title}</p>
                  </div>
                  <Button
                    size="sm"
                    variant={life.soughtMark === m.id ? "secondary" : "ghost"}
                    className="min-h-11 shrink-0"
                    onClick={() => onAction({ type: "seekMark", mark: m.id })}
                  >
                    <Search />
                    Walk
                  </Button>
                </div>
                {open ? (
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Button size="sm" onClick={() => onAction({ type: "markAct", mark: m.id, act: "befriend" })}>
                      <Handshake />
                      Befriend
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => onAction({ type: "markAct", mark: m.id, act: "rob" })}
                    >
                      Rob
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onAction({ type: "markAct", mark: m.id, act: "kidnap" })}
                    >
                      Kidnap
                    </Button>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
