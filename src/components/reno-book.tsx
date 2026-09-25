import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { familyTemper, knownPeople, type KnownKind } from "@/lib/reno/book";
import { approachPoint } from "@/lib/reno/nav";
import type { DistrictId, RenoAction, RenoLife } from "@/lib/reno/types";
import { DISTRICT_POS } from "@/lib/reno/world";
import { KEY_LOCATIONS } from "@/lib/reno/zones";
import { BUILDING_BY_ID } from "@/lib/reno/city";

function meters(life: RenoLife, x: number, z: number): number {
  return Math.max(0, Math.round(Math.hypot(life.posX - x, life.posZ - z)));
}

function clockMinutes(distance: number): number {
  return Math.max(1, Math.round(distance / 40));
}

const TALK: Record<KnownKind, string> = {
  soul: "Talk",
  angela: "Talk",
  door: "Talk",
  mark: "Look in",
  dealer: "Meet",
};

export function RenoBook({
  life,
  onAction,
  busy,
}: {
  life: RenoLife;
  onAction: (action: RenoAction) => void;
  busy?: boolean;
}) {
  const [tab, setTab] = useState<"places" | "people">("places");
  const [name, setName] = useState("");
  const people = knownPeople(life);
  const families = familyTemper(life);
  const door = life.inspecting ? BUILDING_BY_ID[life.inspecting] : null;
  const pins = life.book ?? [];

  const walk = (x: number, z: number, label: string) => {
    onAction({ type: "navigate", x, z, label });
  };

  return (
    <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Address book</p>
      <h3 className="font-display mt-1 text-xl font-semibold tracking-tight">On foot</h3>
      <p className="mt-1 text-sm text-muted">
        Nothing in this book jumps you. Pick a corner or a person and you walk the street. WASD drops the route.
      </p>
      {life.nav ? (
        <p className="mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase">
          Walking to {life.nav.label} · {meters(life, life.nav.x, life.nav.z)} m left
          <Button size="sm" variant="ghost" className="ml-2 min-h-11" disabled={busy} onClick={() => onAction({ type: "cancelNav" })}>
            Stop
          </Button>
        </p>
      ) : null}
      <div className="mt-3 grid grid-cols-2 gap-1 rounded-lg bg-inset p-1">
        <Button size="sm" variant={tab === "places" ? "secondary" : "ghost"} className="min-h-11" onClick={() => setTab("places")}>
          Places
        </Button>
        <Button size="sm" variant={tab === "people" ? "secondary" : "ghost"} className="min-h-11" onClick={() => setTab("people")}>
          People ({people.length})
        </Button>
      </div>

      {tab === "places" ? (
        <div className="mt-3 space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              value={name}
              placeholder="Name this corner"
              maxLength={42}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              size="sm"
              className="min-h-11 shrink-0"
              disabled={busy}
              onClick={() => {
                onAction({ type: "pin", name: name || "Corner", x: life.posX, z: life.posZ });
                setName("");
              }}
            >
              Save where I stand
            </Button>
          </div>
          {door ? (
            <Button
              size="sm"
              variant="secondary"
              className="min-h-11"
              disabled={busy}
              onClick={() => {
                const spot = approachPoint(door);
                onAction({ type: "pin", name: door.name, x: spot.x, z: spot.z });
              }}
            >
              Save {door.name}
            </Button>
          ) : (
            <p className="text-sm text-muted">Click a building if you want its door in the book. Or save the ground under your feet.</p>
          )}
          <ul className="space-y-1">
            {KEY_LOCATIONS.map((loc) => {
              const spot = DISTRICT_POS[loc.id as DistrictId];
              const here = meters(life, spot.x, spot.z) < 8;
              const dist = meters(life, spot.x, spot.z);
              return (
                <li key={loc.id}>
                  <Button
                    size="sm"
                    variant={here ? "secondary" : "ghost"}
                    className="h-auto min-h-11 w-full justify-start whitespace-normal py-2 text-left"
                    disabled={busy || here}
                    onClick={() => walk(spot.x, spot.z, loc.name)}
                  >
                    <span>
                      <span className="block font-medium">{loc.name}</span>
                      <span className="block font-mono text-[10px] tracking-wide text-subtle uppercase">
                        {here ? loc.blurb : `${dist} m · ~${clockMinutes(dist)} min on the clock · ${loc.blurb}`}
                      </span>
                    </span>
                  </Button>
                </li>
              );
            })}
          </ul>
          {pins.length ? (
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-subtle uppercase">Your corners</p>
              <ul className="mt-1 space-y-1">
                {pins.map((pin) => {
                  const dist = meters(life, pin.x, pin.z);
                  return (
                    <li key={pin.id} className="flex items-stretch gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-auto min-h-11 flex-1 justify-start whitespace-normal py-2 text-left"
                        disabled={busy || dist < 6}
                        onClick={() => walk(pin.x, pin.z, pin.name)}
                      >
                        <span>
                          <span className="block font-medium">{pin.name}</span>
                          <span className="block font-mono text-[10px] tracking-wide text-subtle uppercase">
                            {dist < 6 ? "You are here" : `${dist} m · ~${clockMinutes(dist)} min`}
                          </span>
                        </span>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="min-h-11"
                        disabled={busy}
                        onClick={() => onAction({ type: "forgetPin", id: pin.id })}
                      >
                        Drop
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="mt-3 space-y-3">
          <ul className="flex flex-wrap gap-2">
            {families.map((g) => (
              <li key={g.id} className="rounded-md bg-raised px-2 py-1">
                <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">{g.name}</p>
                <p className="font-mono text-sm tabular-nums">
                  {g.rep === 0 ? "even" : g.rep > 0 ? `respect ${g.rep}` : `bad blood ${Math.abs(g.rep)}`}
                </p>
              </li>
            ))}
          </ul>
          {people.length ? (
            <ul className="space-y-2">
              {people.map((person) => {
                const dist = meters(life, person.x, person.z);
                const warm = person.score >= 25 ? "Drop by" : person.score <= -25 ? "Confront" : TALK[person.kind];
                return (
                  <li key={`${person.kind}-${person.id}`} className="rounded-lg bg-raised px-3 py-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">
                          {person.word} · {person.score > 0 ? "+" : ""}
                          {person.score} · {person.where}
                          {person.away ? " · not around" : ""}
                        </p>
                        <p className="mt-1 text-xs text-muted">Last: {person.last}</p>
                        <div className="relative mt-2 h-1.5 rounded-full bg-inset">
                          <span
                            className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full"
                            style={{
                              left: `clamp(0.35rem, ${(person.score + 100) / 2}%, calc(100% - 0.35rem))`,
                              background: person.score >= 15 ? "#9dba8a" : person.score <= -15 ? "#c47a62" : "#e8c36a",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="min-h-11"
                        disabled={busy || dist < 8}
                        onClick={() => walk(person.x, person.z, person.name)}
                      >
                        Walk · {dist < 8 ? "here" : `${dist} m`}
                      </Button>
                      <Button
                        size="sm"
                        className="min-h-11"
                        disabled={busy || person.away}
                        onClick={() => {
                          if (person.kind === "angela") onAction({ type: "talk", who: "angela" });
                          else if (person.kind === "mark") onAction({ type: "seekMark", mark: person.id });
                          else if (person.kind === "dealer") onAction({ type: "seekDealer", dealer: person.id });
                          else onAction({ type: "streetTalk", actorId: person.id });
                        }}
                      >
                        {warm}
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-sm text-muted">
              Nobody is written down yet. Talk to someone on the street. The page keeps how they feel about you, and a way back to them.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
