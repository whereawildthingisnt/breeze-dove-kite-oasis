import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { MapPinned, Pencil, Printer } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { CharacterSheet } from "@/components/character-sheet";
import { RoxyDock } from "@/components/roxy-mascot";
import { Button } from "@/components/ui/button";
import { mascotLines } from "@/lib/special/comments";
import { derive } from "@/lib/special/engine";
import { useRoster } from "@/lib/special/store";
import { characterEngine } from "@/lib/special/types";

export const Route = createFileRoute("/sheet/$id")({ component: SheetPage });

function SheetPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const character = useRoster((s) => s.characters.find((c) => c.id === id));
  const startDraft = useRoster((s) => s.startDraft);

  if (!character) {
    return (
      <AppShell>
        <p className="text-muted">That dossier is not in this browser.</p>
        <Button className="mt-4" asChild>
          <Link to="/">Back to roster</Link>
        </Button>
      </AppShell>
    );
  }

  const derived = derive(character);
  const engine = characterEngine(character);

  return (
    <AppShell special={derived.special}>
      <div className="no-print mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
            Saved dossier · {engine === "pnp" ? "Fallout PnP d100" : "SPECIAL d20"}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {character.name.trim() || "Unnamed"}
          </h2>
        </div>
        <div className="flex gap-2">
          {engine === "pnp" ? (
            <Button asChild>
              <Link to="/reno/$id" params={{ id: character.id }}>
                <MapPinned />
                Enter New Reno
              </Link>
            </Button>
          ) : null}
          <Button variant="secondary" onClick={() => window.print()}>
            <Printer />
            Print
          </Button>
          <Button
            onClick={() => {
              startDraft(character);
              navigate({ to: "/new", search: { engine } });
            }}
          >
            <Pencil />
            Edit
          </Button>
        </div>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <CharacterSheet character={character} />
        <div className="lg:sticky lg:top-28">
          <RoxyDock lines={mascotLines(character)} />
        </div>
      </div>
    </AppShell>
  );
}
