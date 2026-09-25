import { createFileRoute, Link } from "@tanstack/react-router";
import { FolderOpen, ScrollText } from "lucide-react";
import { useEffect, useState } from "react";
import { RenoCity3D } from "@/components/reno-city-3d";
import { FieldFight, RenoCombat } from "@/components/reno-combat";
import { RenoDesk } from "@/components/reno-desk";
import { RenoSighting } from "@/components/reno-sighting";
import { AngelaTalk } from "@/components/angela-talk";
import { RenoLoot } from "@/components/reno-loot";
import { RenoBuilding } from "@/components/reno-building";
import { RenoInterior } from "@/components/reno-interior";
import { RenoPack } from "@/components/reno-pack";
import { RenoIntel } from "@/components/reno-intel";
import { RenoAdvance } from "@/components/reno-advance";
import { Button } from "@/components/ui/button";
import { BUILDING_BY_ID } from "@/lib/reno/city";
import { approachPoint } from "@/lib/reno/nav";
import { applyAction } from "@/lib/reno/sim";
import { useReno } from "@/lib/reno/store";
import type { RenoAction } from "@/lib/reno/types";
import { clockLabel, isNight } from "@/lib/reno/world";
import { derive } from "@/lib/special/engine";
import { useRoster } from "@/lib/special/store";
import { characterEngine, type Loadout } from "@/lib/special/types";

export const Route = createFileRoute("/reno/$id")({ component: RenoPage });

function RenoPage() {
  const { id } = Route.useParams();
  const character = useRoster((s) => s.characters.find((c) => c.id === id));
  const upsert = useRoster((s) => s.upsert);
  const rosterHydrated = useRoster((s) => s.hydrated);
  const setRosterHydrated = useRoster((s) => s.setHydrated);
  const life = useReno((s) => s.lives[id]);
  const ensure = useReno((s) => s.ensure);
  const setLife = useReno((s) => s.setLife);
  const renoHydrated = useReno((s) => s.hydrated);
  const setRenoHydrated = useReno((s) => s.setHydrated);
  const [pane, setPane] = useState<"street" | "pack" | "city" | "level">("street");

  useEffect(() => {
    if (useRoster.persist.hasHydrated()) setRosterHydrated(true);
    if (useReno.persist.hasHydrated()) setRenoHydrated(true);
  }, [setRosterHydrated, setRenoHydrated]);

  useEffect(() => {
    if (!character || !renoHydrated) return;
    ensure(character.id, derive(character).hp);
  }, [character, ensure, renoHydrated]);

  useEffect(() => {
    let acc = 0;
    let since = 0;
    let last = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const dt = Math.min(250, now - last);
      last = now;
      frame = window.requestAnimationFrame(step);
      const current = useReno.getState().lives[id];
      if (!current || current.dead) return;
      const waiting = Boolean(current.combat || current.sighting || current.dialogue || current.loot);
      const pace = current.clock ?? 1;
      if (waiting || pace <= 0) return;
      acc += dt * pace;
      since += dt;
      if (since < 200 || acc < 1000) return;
      const seconds = Math.min(3600, Math.floor(acc / 1000));
      acc -= seconds * 1000;
      since = 0;
      const sheet = useRoster.getState().get(id);
      if (!sheet) return;
      const result = applyAction(current, sheet, { type: "tickClock", seconds });
      useReno.getState().setLife(result.life);
      if (result.character !== sheet) useRoster.getState().upsert(result.character);
    };
    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [id]);

  if (!rosterHydrated || !renoHydrated) {
    return (
      <div className="min-h-dvh bg-bg px-4 py-8 text-fg">
        <p className="text-muted">Loading New Reno…</p>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="min-h-dvh bg-bg px-4 py-8 text-fg">
        <p className="text-muted">That dossier is not in this browser.</p>
        <Button className="mt-4" asChild>
          <Link to="/">Back to roster</Link>
        </Button>
      </div>
    );
  }

  if (characterEngine(character) !== "pnp") {
    return (
      <div className="min-h-dvh bg-bg px-4 py-8 text-fg">
        <p className="text-muted">New Reno is the d100 desk. This one was rolled on d20.</p>
        <Button className="mt-4" asChild>
          <Link to="/sheet/$id" params={{ id: character.id }}>
            Open dossier
          </Link>
        </Button>
      </div>
    );
  }

  if (!life) {
    return (
      <div className="min-h-dvh bg-bg px-4 py-8 text-fg">
        <p className="text-muted">Opening the city…</p>
      </div>
    );
  }

  const sheet = character;
  const now = life;

  function act(action: RenoAction) {
    const currentLife = useReno.getState().lives[sheet.id] ?? now;
    const currentSheet = useRoster.getState().get(sheet.id) ?? sheet;
    const result = applyAction(currentLife, currentSheet, action);
    setLife(result.life);
    if (result.character !== currentSheet) upsert(result.character);
  }

  const derived = derive(sheet);
  const inspecting = life.inspecting ? BUILDING_BY_ID[life.inspecting] : null;
  const locked = Boolean(life.combat || life.loot || life.sighting || life.dialogue);
  const pace = life.clock ?? 1;
  const speeds = [
    { pace: 0, label: "Hold" },
    { pace: 1, label: "1×" },
    { pace: 5, label: "5×" },
    { pace: 15, label: "15×" },
    { pace: 60, label: "60×" },
  ];
  const panes = [
    { id: "street" as const, label: "Street" },
    { id: "pack" as const, label: "Pack" },
    { id: "city" as const, label: "City" },
    { id: "level" as const, label: "Level" },
  ];

  function saveLoadout(loadout: Loadout) {
    const current = useRoster.getState().get(sheet.id) ?? sheet;
    upsert({ ...current, loadout, updatedAt: Date.now() });
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="min-w-0">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] text-muted uppercase">
              New Reno · d100
            </p>
            <h1 className="font-display text-2xl leading-none font-semibold tracking-tight">
              {sheet.name.trim() || "Unnamed"}
            </h1>
          </Link>
          <div className="min-w-0 sm:ml-2">
            <p className="font-mono text-[11px] tracking-wide text-subtle uppercase">
              {clockLabel(life)}
              {locked ? " · time held" : pace === 0 ? " · held" : pace === 1 ? " · real time" : ` · ${pace}×`}
            </p>
            <div className="mt-1 flex flex-wrap gap-1">
              {speeds.map((speed) => (
                <Button
                  key={speed.pace}
                  size="sm"
                  variant={pace === speed.pace ? "secondary" : "ghost"}
                  className="min-h-11 px-2 font-mono"
                  title={speed.pace === 1 ? "One Reno second is one real second" : speed.pace === 0 ? "Stop the clock" : `${speed.pace} Reno seconds per real second`}
                  onClick={() => act({ type: "setClock", pace: speed.pace })}
                >
                  {speed.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            <Stat chip="HP" value={`${life.hp}/${life.hpMax}`} warn={life.hp <= life.hpMax / 4} />
            <Stat chip="Caps" value={String(life.caps)} />
            <Stat chip="Heat" value={String(Math.round(life.heat))} warn={life.heat >= 40} />
            <Stat chip="Code" value={String(Math.round(life.warrant ?? 0))} warn={(life.warrant ?? 0) >= 32} />
            <Stat chip="Fame" value={String(Math.round(life.fame))} />
            <Stat chip="Regard" value={String(Math.round(life.regard ?? 0))} />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/sheet/$id" params={{ id: sheet.id }}>
                <ScrollText />
                Dossier
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <FolderOpen />
                Roster
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,0.9fr)]">
        <div className="space-y-4">
          <div className="reno-stage">
            <RenoCity3D
              life={life}
              disabled={Boolean((life.combat && !life.combat.field) || life.dialogue || life.sighting || life.loot || life.insideId)}
              inspecting={life.inspecting}
              onGround={(x, z) => act({ type: "navigate", x, z, label: "that corner" })}
              onNavArrive={() => act({ type: "navArrive" })}
              onNavCancel={() => act({ type: "cancelNav" })}
              onInspect={(building) => act({ type: "inspect", building })}
              onArrive={(district, x, z) => {
                if (district === useReno.getState().lives[sheet.id]?.district) return;
                act({ type: "arrive", district, x, z });
              }}
              onWalkTick={(x, z) => act({ type: "walkTick", x, z })}
              onStreetContact={(hit) => act({ type: "streetContact", ...hit })}
              onTalk={(actor) => act({ type: "streetTalk", actorId: actor.id })}
              onCombatHex={(q, r) => act({ type: "combat", move: life.combat?.field ? "field-walk" : "hex-step", q, r })}
              onFieldTick={() => {
                const cur = useReno.getState().lives[sheet.id];
                if (cur?.combat?.field && !cur.combat.result) act({ type: "combat", move: "field-tick" });
              }}
              onRise={() => act({ type: "rise" })}
            />
            {life.combat?.field ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-2">
                <div className="pointer-events-auto mx-auto max-w-lg">
                  <FieldFight combat={life.combat} onMove={(move) => act({ type: "combat", move })} />
                </div>
              </div>
            ) : life.combat?.onMap ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 max-h-[48%] overflow-auto p-2 lg:hidden">
                <div className="pointer-events-auto">
                  <RenoCombat
                    combat={life.combat}
                    character={sheet}
                    onMove={(move, part, extra) =>
                      act({ type: "combat", move, part, q: extra?.q, r: extra?.r, targetId: extra?.targetId })
                    }
                  />
                </div>
              </div>
            ) : life.combat ? (
              <div className="reno-overlay">
                <RenoCombat
                  combat={life.combat}
                  character={sheet}
                  onMove={(move, part, extra) =>
                    act({ type: "combat", move, part, q: extra?.q, r: extra?.r, targetId: extra?.targetId })
                  }
                />
              </div>
            ) : null}
            {life.loot && !life.combat ? (
              <div className="reno-overlay">
                <RenoLoot life={life} onTake={(take) => act({ type: "loot", take })} />
              </div>
            ) : null}
            {life.sighting && !life.combat && !life.loot ? (
              <div className="reno-overlay reno-overlay-sheet">
                <RenoSighting
                  life={life}
                  character={sheet}
                  onChoice={(choice) => act({ type: "encounter", choice })}
                />
              </div>
            ) : null}
            {!life.combat && life.dialogue ? (
              <div className="reno-overlay">
                <AngelaTalk
                  life={life}
                  character={sheet}
                  onReply={(reply) => act({ type: "dialogue", reply })}
                />
              </div>
            ) : null}
            {inspecting && !life.insideId && !life.combat && !life.loot && !life.sighting && !life.dialogue ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 lg:hidden">
                <div className="pointer-events-auto max-h-[46%] overflow-auto">
                  <RenoBuilding
                    building={inspecting}
                    night={isNight(life)}
                    district={life.district}
                    onClose={() => act({ type: "inspect", building: null })}
                    onWalk={() => {
                      const spot = approachPoint(inspecting);
                      act({ type: "navigate", x: spot.x, z: spot.z, label: inspecting.name });
                    }}
                    onEnter={() => act({ type: "enter" })}
                    onMill={() => act({ type: "mill" })}
                  />
                </div>
              </div>
            ) : null}
            {life.insideId && BUILDING_BY_ID[life.insideId] && !life.combat && !life.loot && !life.sighting && !life.dialogue ? (
              <div className="reno-overlay">
                <RenoInterior
                  building={BUILDING_BY_ID[life.insideId]!}
                  life={life}
                  night={isNight(life)}
                  onAct={(streetAct) => act({ type: "street", act: streetAct })}
                  onLinger={() => act({ type: "linger" })}
                  onPrivate={(dancer) => act({ type: "privateDance", dancer })}
                  onExit={() => act({ type: "exit" })}
                />
              </div>
            ) : null}
          </div>
          <section className="rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
            <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">Log</p>
            <ol className="mt-2 max-h-48 space-y-1 overflow-auto text-sm leading-relaxed text-muted">
              {life.log.slice(0, 12).map((line, i) => (
                <li key={`${i}-${line}`}>{line}</li>
              ))}
            </ol>
          </section>
        </div>
        <div className="lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-auto">
          {!locked ? (
            <div className="mb-3 grid grid-cols-4 gap-1 rounded-xl bg-surface p-1 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
              {panes.map((item) => {
                const on = pane === item.id;
                return (
                  <Button
                    key={item.id}
                    size="sm"
                    variant={on ? "secondary" : "ghost"}
                    className="min-h-11 px-1"
                    onClick={() => setPane(item.id)}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>
          ) : null}
          {inspecting && !life.insideId && !life.combat && !life.loot && !life.sighting && !life.dialogue ? (
            <div className="mb-4 hidden lg:block">
              <RenoBuilding
                building={inspecting}
                night={isNight(life)}
                district={life.district}
                onClose={() => act({ type: "inspect", building: null })}
                onWalk={() => {
                  const spot = approachPoint(inspecting);
                  act({ type: "navigate", x: spot.x, z: spot.z, label: inspecting.name });
                }}
                onEnter={() => act({ type: "enter" })}
                onMill={() => act({ type: "mill" })}
              />
            </div>
          ) : null}
          {life.combat?.field ? (
            <p className="rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
              This fight is the block you are standing on. Forty hexes by forty. The street is the street. Buildings are walls. Walk with WASD. Strike when they are close. Green hexes at the edge let you leave. Whoever falls stays on the ground.
            </p>
          ) : life.combat?.onMap ? (
            <div className="hidden lg:block">
              <RenoCombat
                combat={life.combat}
                character={sheet}
                onMove={(move, part, extra) =>
                  act({ type: "combat", move, part, q: extra?.q, r: extra?.r, targetId: extra?.targetId })
                }
              />
            </div>
          ) : life.combat ? (
            <p className="rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
              The ring is a small board. Sequence {derived.sequence}. The street outside keeps moving without you.
            </p>
          ) : life.loot ? (
            <p className="rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
              Search the body. The weapon and armor come off with the pockets, or you leave them.
            </p>
          ) : life.sighting ? (
            <p className="rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
              You saw them on this block before anyone swung. Talk, slip past, or fight where you stand.
              Forty hexes by forty. The street and the buildings stay.
            </p>
          ) : life.dialogue ? (
            <p className="rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
              Angela Bishop. Finish the conversation before you walk.
            </p>
          ) : pane === "pack" ? (
            <RenoPack life={now} character={sheet} onAction={act} onLoadout={saveLoadout} />
          ) : pane === "city" ? (
            <RenoIntel life={now} character={sheet} onAction={act} />
          ) : pane === "level" ? (
            <RenoAdvance life={now} character={sheet} onAction={act} />
          ) : (
            <RenoDesk life={now} character={sheet} onAction={act} />
          )}
        </div>
      </main>
    </div>
  );
}

function Stat({ chip, value, warn }: { chip: string; value: string; warn?: boolean }) {
  return (
    <div className="rounded-md bg-raised px-2 py-1">
      <p className="font-mono text-[10px] tracking-widest text-subtle uppercase">{chip}</p>
      <p className={`font-mono text-sm tabular-nums ${warn ? "text-danger" : ""}`}>{value}</p>
    </div>
  );
}
