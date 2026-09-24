import { useEffect, useState } from "react";
import type { MascotLine } from "@/lib/special/comments";
import { cn } from "@/lib/utils";

const MOOD_CLASS: Record<MascotLine["mood"], string> = {
  cheer: "",
  wow: "brightness-110 saturate-125 contrast-110",
  ouch: "brightness-95 saturate-75",
  flirt: "brightness-105 saturate-125 contrast-105",
};

export function RoxyFigure({
  mood = "cheer",
  className,
}: {
  mood?: MascotLine["mood"];
  className?: string;
}) {
  return (
    <img
      src="/mascot/roxy.webp"
      alt="Roxy, the forge girl"
      className={cn(
        "roxy-idle h-full w-auto max-w-full object-contain object-bottom",
        MOOD_CLASS[mood],
        className,
      )}
    />
  );
}

export function RoxyDock({
  lines,
  compact = false,
}: {
  lines: MascotLine[];
  compact?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const safeLines = lines.length
    ? lines
    : [{ mood: "cheer" as const, text: "Roll something. Empty paper makes me mean." }];
  const line = safeLines[index % safeLines.length]!;

  useEffect(() => {
    setIndex(0);
  }, [lines.map((l) => l.text).join("|")]);

  useEffect(() => {
    if (safeLines.length < 2) return;
    const id = window.setInterval(() => setIndex((n) => n + 1), 7000);
    return () => window.clearInterval(id);
  }, [safeLines.length]);

  return (
    <aside className="no-print flex flex-col items-center">
      <button
        type="button"
        onClick={() => setIndex((n) => n + 1)}
        className="relative z-10 mb-3 w-full max-w-xs rounded-2xl bg-raised px-4 py-3 text-left shadow-[0_0_0_1px_rgba(236,234,227,0.12)]"
      >
        <p className="font-display text-[11px] tracking-[0.22em] text-accent uppercase">
          Roxy · Forge Girl
        </p>
        <p className="mt-1 text-sm leading-relaxed text-fg">{line.text}</p>
        {safeLines.length > 1 ? (
          <p className="mt-2 font-mono text-[10px] tracking-widest text-subtle">
            {(index % safeLines.length) + 1}/{safeLines.length} tap
          </p>
        ) : null}
        <span
          aria-hidden
          className="absolute bottom-[-7px] left-1/2 size-3.5 -translate-x-1/2 rotate-45 bg-raised shadow-[1px_1px_0_rgba(236,234,227,0.12)]"
        />
      </button>
      <div
        className={cn(
          "relative flex w-full max-w-xs items-end justify-center overflow-hidden rounded-2xl",
          compact ? "h-64" : "h-[28rem]",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-6 rounded-full bg-accent/10 blur-2xl"
        />
        <RoxyFigure
          mood={line.mood}
          className={compact ? "h-64 drop-shadow-lg" : "h-[28rem] drop-shadow-xl"}
        />
      </div>
    </aside>
  );
}
