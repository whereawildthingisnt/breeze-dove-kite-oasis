import { Button } from "@/components/ui/button";
import { angelaCurrent } from "@/lib/reno/angela";
import type { RenoLife } from "@/lib/reno/types";
import type { Character } from "@/lib/special/types";

function sceneFor(node: string): { portrait: string; scene: string; full: string; place: string } {
  const portrait = "/reno/angela/portrait.webp";
  const full = "/reno/angela/fullbody.webp";
  if (node === "upstairs") {
    return { portrait, full, scene: "/reno/angela/stairs.webp", place: "Shark Club · service stair" };
  }
  if (node === "room-safe") {
    return { portrait, full, scene: "/reno/angela/room-safe.webp", place: "Shark Club · her room · the safe" };
  }
  if (node === "room-fly" || node === "room-fly-again") {
    return { portrait, full, scene: "/reno/angela/fly-hit.webp", place: "Shark Club · her room · the glass" };
  }
  if (node === "room-fly-ceiling" || node === "room-fly-street" || node === "room-night-jet") {
    return { portrait, full, scene: "/reno/angela/fly-high.webp", place: "Shark Club · her room · the party" };
  }
  if (node === "room-jet-down" || node === "morning-jet") {
    return { portrait, full, scene: "/reno/angela/fly-dawn.webp", place: "Shark Club · third floor · after" };
  }
  if (node === "morning") {
    return { portrait, full, scene: "/reno/angela/room-morning.webp", place: "Shark Club · third floor · morning" };
  }
  if (node.startsWith("room")) {
    return { portrait, full, scene: "/reno/angela/room-night.webp", place: "Shark Club · her room" };
  }
  if (node.includes("jet") || node.includes("safe")) {
    return { portrait, full, scene: "/reno/angela/jet.webp", place: "Shark Club · second-floor rail" };
  }
  return { portrait, full, scene: "/reno/angela/rail.webp", place: "Shark Club · second-floor rail" };
}

export function AngelaTalk({
  life,
  character,
  onReply,
}: {
  life: RenoLife;
  character: Character;
  onReply: (reply: string) => void;
}) {
  if (!life.dialogue || life.dialogue.who !== "angela") return null;
  const view = angelaCurrent(character, life);
  const art = sceneFor(view.node);
  const inRoom = view.node === "upstairs" || view.node.startsWith("room") || view.node.startsWith("morning");

  return (
    <section className="overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]">
      <div className={`relative w-full ${inRoom ? "h-56 sm:h-72" : "h-40 sm:h-52"}`}>
        <img src={art.scene} alt="" className="size-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <p className="absolute bottom-3 left-4 font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
          {art.place}
        </p>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
        <div className="space-y-3">
          <img
            src={art.portrait}
            alt="Angela Bishop"
            className="aspect-[2/3] w-full rounded-lg object-cover object-top shadow-[0_0_0_1px_rgba(236,234,227,0.12)]"
          />
          <img
            src={art.full}
            alt=""
            className="hidden aspect-[2/3] w-full rounded-lg object-cover object-top sm:block"
          />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">Angela Bishop</h3>
          <p className="mt-1 text-xs text-muted">
            {inRoom
              ? "Third floor. A door with a B on it. The band is a dull drum through the carpet."
              : "John Bishop's daughter. Bored. Jet in a wall safe. The family name is the gun."}
          </p>
          <blockquote className="mt-4 max-h-[32rem] overflow-auto rounded-lg bg-raised px-4 py-3 text-sm leading-relaxed text-fg">
            {view.line}
          </blockquote>
          <div className="mt-3 grid gap-2">
            {view.replies.map((r) => (
              <Button
                key={r.id}
                variant="secondary"
                className="h-auto min-h-11 justify-start whitespace-normal py-2 text-left"
                onClick={() => onReply(r.id)}
              >
                {r.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
