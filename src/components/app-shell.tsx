import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { FolderOpen, Plus } from "lucide-react";
import { SPECIAL_META } from "@/lib/special/data";
import { SPECIAL_KEYS, type SpecialBlock } from "@/lib/special/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function AppShell({
  children,
  special,
}: {
  children: ReactNode;
  special?: SpecialBlock;
}) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <header className="no-print sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="min-w-0">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] text-muted uppercase">
              SPECIAL d20
            </p>
            <h1 className="font-display text-2xl leading-none font-semibold tracking-tight">
              SPECIAL Forge
            </h1>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <FolderOpen />
                Roster
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/new" search={{ engine: "d20" }}>
                <Plus />
                New
              </Link>
            </Button>
          </div>
        </div>
        {special ? (
          <div className="border-t border-border/80">
            <div className="mx-auto grid max-w-6xl grid-cols-7 px-1 sm:px-6">
              {SPECIAL_KEYS.map((key) => (
                <div
                  key={key}
                  className="flex flex-col items-center gap-0.5 py-2"
                >
                  <span className="font-mono text-[10px] tracking-widest text-subtle">
                    {SPECIAL_META[key].letter}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-sm tabular-nums sm:text-base",
                      special[key] <= 2 && "text-danger",
                      special[key] >= 11 && "text-accent",
                    )}
                  >
                    {special[key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </header>
      <main className="relative mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {children}
      </main>
    </div>
  );
}
