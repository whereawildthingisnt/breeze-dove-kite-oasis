import { Button } from "@/components/ui/button";
import { KEY_LOCATIONS, ZONE_HINT, ZONE_LABEL } from "@/lib/reno/zones";
import { zoneAt } from "@/lib/reno/city";
import type { DistrictId, RenoAction, RenoLife, StashId } from "@/lib/reno/types";
import { angelaPresent, gangRankName } from "@/lib/reno/angela";
import { chemQty, housingHere } from "@/lib/reno/sim";
import {
  DISTRICT_BY_ID,
  GANGS,
  GANG_BY_ID,
  HOUSING_BY_ID,
  STASH_IDS,
  STASH_META,
  boxingPurse,
  isNight,
} from "@/lib/reno/world";
import { countItem } from "@/lib/special/loadout";
import type { Character } from "@/lib/special/types";

const STASH_LIST: StashId[] = STASH_IDS;

export function RenoDesk({
  life,
  character,
  onAction,
  busy,
}: {
  life: RenoLife;
  character: Character;
  onAction: (action: RenoAction) => void;
  busy?: boolean;
}) {
  const district = DISTRICT_BY_ID[life.district];
  const homes = housingHere(life.district);
  const home = life.housingId ? HOUSING_BY_ID[life.housingId] : null;
  const stimpaks = countItem(character.loadout, "stimpak");
  const stashN = chemQty(life);
  const turfGang = GANGS.find((g) => g.turf === life.district);
  const zone = zoneAt(life.posX, life.posZ);
  const night = isNight(life);

  return (
    <div className="space-y-4">
      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Key locations</p>
        <h3 className="font-display mt-1 text-xl font-semibold tracking-tight">Fast travel</h3>
        <p className="mt-1 text-sm text-muted">
          Shark Club, Desert Rose, the Ring. East Second runs out to Catclaw: smaller motels and two-bit casinos. West of Salvatore the lots get thin.
        </p>
        <p className="mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase">
          You: {ZONE_LABEL[zone]} · {ZONE_HINT[zone]} · {night ? "night" : "day"}
        </p>
        <p className="mt-2 text-sm text-muted">
          NCR, the Hub, and the caravans treat the Strip like a cheap weekend. Guides, floor staff, bike taxis, and the night desk live on that spend, because a day wage will not rent the week.
          {life.pulse ? ` Outside caps still walking around: ${life.pulse.visitorSpend}.` : ""}
        </p>
        <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
          {KEY_LOCATIONS.map((loc) => (
            <Button
              key={loc.id}
              size="sm"
              variant={life.district === loc.id ? "secondary" : "ghost"}
              className="h-auto min-h-11 justify-start whitespace-normal py-2 text-left"
              disabled={busy || life.district === loc.id}
              onClick={() => onAction({ type: "travel", district: loc.id as DistrictId })}
            >
              <span>
                <span className="block font-medium">{loc.name}</span>
                <span className="block font-mono text-[10px] tracking-wide text-subtle uppercase">{loc.blurb}</span>
              </span>
            </Button>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">This block</p>
        <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight">{district.name}</h3>
        <p className="mt-1 text-sm text-muted">{district.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button size="sm" onClick={() => onAction({ type: "wander" })} disabled={busy}>
            Wander
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onAction({ type: "oddJob" })} disabled={busy}>
            Odd job
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onAction({ type: "sleep" })} disabled={busy}>
            Sleep
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onAction({ type: "stimpak" })}
            disabled={busy || stimpaks <= 0 || life.hp >= life.hpMax}
          >
            Stimpak ({stimpaks})
          </Button>
        </div>
        <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-subtle uppercase">On this block</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Button size="sm" variant="secondary" className="min-h-11" disabled={busy} onClick={() => onAction({ type: "street", act: "talk" })}>
            Talk
          </Button>
          <Button size="sm" variant="secondary" className="min-h-11" disabled={busy} onClick={() => onAction({ type: "street", act: "lean" })}>
            Lean
          </Button>
          <Button size="sm" variant="outline" className="min-h-11" disabled={busy} onClick={() => onAction({ type: "street", act: "bribe" })}>
            Bribe
          </Button>
          <Button size="sm" variant="outline" className="min-h-11" disabled={busy} onClick={() => onAction({ type: "street", act: "shake" })}>
            Shake down
          </Button>
          <Button size="sm" variant="outline" className="min-h-11" disabled={busy} onClick={() => onAction({ type: "street", act: "tip" })}>
            Tip a cop
          </Button>
          <Button size="sm" variant="secondary" className="min-h-11" disabled={busy} onClick={() => onAction({ type: "street", act: "door" })}>
            Work a door
          </Button>
          <Button
            size="sm"
            className="min-h-11"
            disabled={busy || !life.job}
            onClick={() => onAction({ type: "street", act: "deliver" })}
          >
            Deliver
          </Button>
        </div>
        {life.job ? (
          <p className="mt-2 text-sm text-muted">
            {life.job.title}: carry {life.job.item} to {DISTRICT_BY_ID[life.job.to]?.name ?? life.job.to}. {life.job.blurb}
          </p>
        ) : (
          <p className="mt-2 text-sm text-muted">Click a person on the street. Talk here if you are at a door. They will tell you where they are going.</p>
        )}
      </section>

          {angelaPresent(life) ? (
        <section className="overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
          <div className="grid sm:grid-cols-[6.5rem_minmax(0,1fr)]">
            <img
              src="/reno/angela/portrait.webp"
              alt="Angela Bishop"
              className="hidden h-full min-h-32 object-cover object-top sm:block"
            />
            <div className="p-4">
          <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Second-floor rail</p>
          <h3 className="font-display mt-1 text-xl font-semibold">Angela Bishop</h3>
          <p className="mt-1 text-sm text-muted">
            John Bishop's daughter. Leslie Anne's problem. Bored of the Shark Club and loud about it. She
            hits on famous names, low-INT vault babies, and anyone who works for her father.
          </p>
          <Button
            className="mt-3"
            size="sm"
            onClick={() => onAction({ type: "talk", who: "angela" })}
            disabled={busy}
          >
            Talk to Angela
          </Button>
            </div>
          </div>
        </section>
      ) : null}

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">A place to live</p>
        <h3 className="font-display mt-1 text-xl font-semibold">
          {home ? home.name : "Street"}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {home
            ? home.kind === "squat"
              ? `Squat · converted ${life.squatProgress}% · danger ${home.danger}`
              : `Rent ${home.rent} caps a week · ${home.note}`
            : "Doorways and bad luck. Rent a room or claim a squat."}
        </p>
        {home ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {home.kind === "squat" && life.squatProgress < 100 && home.district === life.district ? (
              <Button size="sm" onClick={() => onAction({ type: "convert" })} disabled={busy}>
                Convert squat
              </Button>
            ) : null}
            {home.kind === "rent" ? (
              <Button size="sm" variant="secondary" onClick={() => onAction({ type: "payRent" })} disabled={busy}>
                Pay week ({home.rent})
              </Button>
            ) : null}
            <Button size="sm" variant="ghost" onClick={() => onAction({ type: "leaveHome" })} disabled={busy}>
              Leave
            </Button>
          </div>
        ) : null}
        {homes.length ? (
          <ul className="mt-3 space-y-2">
            {homes.map((h) => (
              <li key={h.id} className="rounded-lg bg-raised px-3 py-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium">{h.name}</p>
                    <p className="text-xs text-muted">{h.note}</p>
                  </div>
                  {life.housingId === h.id ? (
                    <span className="font-mono text-[10px] tracking-wide text-ok uppercase">yours</span>
                  ) : (
                    <Button
                      size="sm"
                      variant="secondary"
                      disabled={busy}
                      onClick={() =>
                        onAction(h.kind === "rent" ? { type: "rent", housing: h.id } : { type: "squat", housing: h.id })
                      }
                    >
                      {h.kind === "rent" ? `Rent ${h.rent}` : "Squat"}
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-xs text-subtle">No rooms on this block. Try Desert Rose, the Jungle, Chop Shop, Wrights, Golgotha.</p>
        )}
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Families</p>
        <h3 className="font-display mt-1 text-xl font-semibold">
          {life.gangId ? gangRankName(life) : "Independent"}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {life.gangId
            ? `${GANG_BY_ID[life.gangId].head}. ${GANG_BY_ID[life.gangId].credo}`
            : turfGang
              ? `${turfGang.head} holds this block. ${turfGang.credo}`
              : "Four families. Bishops at the Shark. Mordinos at the Desperado. Salvatores at the bar. Wrights east, stills and a dead son."}
        </p>
        {life.gangId ? (
          <p className="mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase">
            Rep B {life.gangRep.bishops} · M {life.gangRep.mordinos} · S {life.gangRep.salvatores} · W{" "}
            {life.gangRep.wrights} · rival {GANG_BY_ID[GANG_BY_ID[life.gangId].rival].name}
          </p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {life.gangId ? (
            <>
              <Button size="sm" onClick={() => onAction({ type: "gangJob" })} disabled={busy}>
                Family work
              </Button>
              <Button size="sm" variant="ghost" onClick={() => onAction({ type: "quitGang" })} disabled={busy}>
                Walk away
              </Button>
            </>
          ) : turfGang ? (
            <Button
              size="sm"
              onClick={() => onAction({ type: "joinGang", gang: turfGang.id })}
              disabled={busy}
            >
              Ask the {turfGang.name}
            </Button>
          ) : (
            <p className="text-xs text-subtle">Gang turf: Golden Globes, Wright compound, Salvatore's, Bishop offices.</p>
          )}
        </div>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Independent dealing</p>
        <h3 className="font-display mt-1 text-xl font-semibold">Stash · {stashN} bags</h3>
        <p className="mt-1 text-sm text-muted">
          Buy low on Mordino turf. Sell high on Virgin Street and the Shark. Heat draws guns.
        </p>
        <ul className="mt-3 space-y-2">
          {STASH_LIST.map((id) => {
            const buy = Math.round(STASH_META[id].street * district.buy);
            const sell = Math.round(STASH_META[id].street * district.sell);
            return (
              <li key={id} className="flex items-center justify-between gap-2 rounded-lg bg-raised px-3 py-2">
                <div>
                  <p className="font-medium">{STASH_META[id].name}</p>
                  <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">
                    have {life.stash[id] ?? 0} · buy {buy} · sell {sell} · {STASH_META[id].kind}
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={busy || life.caps < buy}
                    onClick={() => onAction({ type: "buyChems", chem: id, qty: 1 })}
                  >
                    Buy
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={busy || (life.stash[id] ?? 0) <= 0}
                    onClick={() => onAction({ type: "sellChems", chem: id, qty: 1 })}
                  >
                    Sell
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">The Ring</p>
        <h3 className="font-display mt-1 text-xl font-semibold">
          {life.boxingRank === "unsigned" ? "Unsigned" : life.boxingRank} · {life.boxingWins}-{life.boxingLosses}
        </h3>
        <p className="mt-1 text-sm text-muted">
          Fame {life.fame}. Regard {Math.round(life.regard ?? 0)} — the poster moves faster than what people believe.{" "}
          {life.boxingRank === "unsigned"
            ? "Sign at the Ring, train, take cards. Purses grow with the months."
            : life.day >= life.nextFightDay
              ? `Card is ready. Purse about ${boxingPurse(life.boxingRank, life.fame)} caps.`
              : `Next card day ${life.nextFightDay}. Train until then.`}
        </p>
        {life.district === "stables" ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {life.boxingRank === "unsigned" ? (
              <Button size="sm" onClick={() => onAction({ type: "joinBoxing" })} disabled={busy}>
                Sign with the Ring
              </Button>
            ) : (
              <>
                <Button size="sm" onClick={() => onAction({ type: "train" })} disabled={busy}>
                  Train
                </Button>
                <Button
                  size="sm"
                  disabled={busy || life.day < life.nextFightDay}
                  onClick={() => onAction({ type: "fightCard" })}
                >
                  Take the card
                </Button>
              </>
            )}
          </div>
        ) : (
          <p className="mt-2 text-xs text-subtle">Walk to the Ring to sign, train, or fight.</p>
        )}
      </section>
    </div>
  );
}
