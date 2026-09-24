import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ForgeWizard } from "@/components/forge-wizard";
import { useRoster } from "@/lib/special/store";
import { characterEngine, type EngineId } from "@/lib/special/types";

export const Route = createFileRoute("/new")({
  validateSearch: (search: Record<string, unknown>): { engine: EngineId } => ({
    engine: search.engine === "pnp" ? "pnp" : "d20",
  }),
  component: NewCharacter,
});

function NewCharacter() {
  const { engine } = Route.useSearch();
  const draft = useRoster((s) => s.draft);
  const startNew = useRoster((s) => s.startNew);

  useEffect(() => {
    if (!draft || characterEngine(draft) !== engine) {
      startNew(engine);
    }
  }, [draft, engine, startNew]);

  if (!draft) return null;
  return <ForgeWizard mode="create" />;
}
