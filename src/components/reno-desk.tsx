import { Button } from "@/components/ui/button";
import { RenoBook } from "@/components/reno-book";
import type { RenoAction, RenoLife, StashId } from "@/lib/reno/types";
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
} from "@/lib/reno/world";
import { counterWhere } from "@/lib/reno/work";
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

  return (
    <div className="space-y-4">
      <RenoBook life={life} onAction={onAction} busy={busy} />

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
            Tip the code
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
        <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Clock</p>
        <h3 className="font-display mt-1 text-xl font-semibold">
          {life.post ? `${life.post.title} · ${life.post.employer}` : "Not on a clock"}
        </h3>
        <p className="mt-1 text-sm text-muted">
          Clock in and the city uses you. Skills decide if you are useful. Rank waits on merit, not on a calendar. When the shift or the call ends, your hands come back.
          {life.post ? ` Merit ${life.post.merit}. Calls answered ${life.post.calls}.` : ""}
          {life.vassal
            ? ` ${GANG_BY_ID[life.vassal.gang].name} take ${life.vassal.cut}% and treat the till like theirs.`
            : ""}
        </p>
        {life.post?.pending ? (
          <p className="mt-2 text-sm text-fg">
            Word came. {life.post.pending.where}. {life.post.pending.blurb}
          </p>
        ) : null}
        {life.vassalOffer ? (
          <p className="mt-2 text-sm text-fg">
            {GANG_BY_ID[life.vassalOffer].name} offer a chair that is not a membership. They take a cut. They lend muscle. Your business becomes a business they recognize.
          </p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {counterWhere(life.district) && !life.gangId ? (
            <Button size="sm" disabled={busy} onClick={() => onAction({ type: "clockIn", post: "counter" })}>
              Clock the counter
            </Button>
          ) : null}
          {!life.gangId && turfGang ? (
            <Button size="sm" disabled={busy} onClick={() => onAction({ type: "clockIn", post: "family" })}>
              Clock onto the {turfGang.name}
            </Button>
          ) : null}
          {!life.gangId && life.post?.kind !== "family" ? (
            <Button size="sm" variant="outline" disabled={busy} onClick={() => onAction({ type: "clockIn", post: "raid" })}>
              Hunt a cook
            </Button>
          ) : null}
          {life.post?.pending ? (
            <>
              <Button size="sm" disabled={busy} onClick={() => onAction({ type: "answerCall" })}>
                Answer the call
              </Button>
              <Button size="sm" variant="ghost" disabled={busy} onClick={() => onAction({ type: "ignoreCall" })}>
                Ignore it
              </Button>
            </>
          ) : null}
          {life.vassalOffer ? (
            <>
              <Button size="sm" disabled={busy} onClick={() => onAction({ type: "vassal", take: true })}>
                Take the paper
              </Button>
              <Button size="sm" variant="ghost" disabled={busy} onClick={() => onAction({ type: "vassal", take: false })}>
                Leave it
              </Button>
            </>
          ) : null}
        </div>
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
                {life.post?.pending ? "Go where they sent you" : "Wait for word"}
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
              Ask, if you want the speech check
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
