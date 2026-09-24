import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Copy, MapPinned, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { AppShell } from "@/components/app-shell";
import { RoxyDock } from "@/components/roxy-mascot";
import { Button } from "@/components/ui/button";
import { derive } from "@/lib/special/engine";
import { BACKGROUNDS, GENDER_META, genderOf } from "@/lib/special/data";
import { useRoster } from "@/lib/special/store";
import { SPECIAL_KEYS, characterEngine } from "@/lib/special/types";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const navigate = useNavigate();
  const hydrated = useRoster((s) => s.hydrated);
  const characters = useRoster((s) => s.characters);
  const startNew = useRoster((s) => s.startNew);
  const loadExample = useRoster((s) => s.loadExample);
  const loadPnpExample = useRoster((s) => s.loadPnpExample);
  const remove = useRoster((s) => s.remove);
  const duplicate = useRoster((s) => s.duplicate);
  const setHydrated = useRoster((s) => s.setHydrated);

  useEffect(() => {
    if (useRoster.persist.hasHydrated()) setHydrated(true);
  }, [setHydrated]);

  function createNew(engine: "d20" | "pnp") {
    startNew(engine);
    navigate({ to: "/new", search: { engine } });
  }

  return (
    <AppShell>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-subtle uppercase">
            SPECIAL Forge · two desks
          </p>
          <h2 className="font-display mt-1 max-w-xl text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl">
            Make a person. Keep the ugly rolls.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Two character desks, one roster. Roll 1d10 seven times either way.
            Ones stay ones. Nothing is padded to 35 or shaved to 55. Stats do
            not cap at 10. Finish a d100 sheet and New Reno opens — rent, squats,
            families, chems, the Ring.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button onClick={() => createNew("d20")}>
              <Plus />
              New d20 character
            </Button>
            <Button variant="secondary" onClick={() => createNew("pnp")}>
              <Plus />
              New PnP d100 character
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const example = loadExample();
                navigate({ to: "/sheet/$id", params: { id: example.id } });
              }}
            >
              Load d20 example
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const example = loadPnpExample();
                navigate({ to: "/reno/$id", params: { id: example.id } });
              }}
            >
              Load PnP example into New Reno
            </Button>
          </div>

          <div className="mt-6 lg:hidden">
            <RoxyDock
              compact
              lines={[
                {
                  mood: "flirt",
                  text: "I'm Roxy. Pick a desk. d20 is the new engine. d100 is the old Fallout PnP sheet — still rolled, still uncapped, no backgrounds.",
                },
              ]}
            />
          </div>

          <section className="mt-10">
            <div className="mb-3 flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold">Roster</h3>
              <span className="font-mono text-xs text-subtle tabular-nums">
                {hydrated ? characters.length : "—"}
              </span>
            </div>
            {!hydrated ? (
              <div className="h-32 rounded-xl bg-surface" />
            ) : characters.length === 0 ? (
              <div className="rounded-xl bg-surface px-5 py-8 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
                <p className="text-muted">
                  Empty folder. Roxy is bored. Roll a d20 array, or open the old
                  percentile desk.
                </p>
              </div>
            ) : (
              <ul className="grid gap-3">
                {characters.map((c) => {
                  const d = derive(c);
                  const engine = characterEngine(c);
                  const bg =
                    engine === "pnp"
                      ? "PnP d100"
                      : c.backgroundId === "custom"
                        ? c.customBackground.name
                        : c.backgroundId === "none"
                          ? "—"
                          : BACKGROUNDS.find((b) => b.id === c.backgroundId)?.name;
                  return (
                    <li
                      key={c.id}
                      className="flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)] sm:flex-row sm:items-center"
                    >
                      <Link
                        to="/sheet/$id"
                        params={{ id: c.id }}
                        className="min-w-0 flex-1"
                      >
                        <div className="font-display text-xl leading-none">
                          {c.name.trim() || "Unnamed"}
                        </div>
                        <p className="mt-1 text-sm text-muted">
                          {bg} · {GENDER_META[genderOf(c)].name} · Lv {c.level} · HP {d.hp} · AP {d.ap}
                        </p>
                        <p className="mt-2 font-mono text-[11px] tracking-wide text-subtle">
                          {SPECIAL_KEYS.map((k) => `${k}${d.special[k]}`).join("  ")}
                        </p>
                      </Link>
                      <div className="flex gap-2">
                        {engine === "pnp" ? (
                          <Button variant="secondary" size="sm" asChild>
                            <Link to="/reno/$id" params={{ id: c.id }}>
                              <MapPinned />
                              Reno
                            </Link>
                          </Button>
                        ) : null}
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          aria-label="Duplicate"
                          onClick={() => duplicate(c.id)}
                        >
                          <Copy />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          aria-label="Delete"
                          onClick={() => remove(c.id)}
                        >
                          <Trash2 />
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </div>
        <div className="hidden lg:block">
          <RoxyDock
            lines={[
              {
                mood: "flirt",
                text: "I'm Roxy. Pick a desk. d20 is the new engine. d100 is the old Fallout PnP sheet — still rolled, still uncapped, no backgrounds.",
              },
            ]}
          />
        </div>
      </div>
    </AppShell>
  );
}
