import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatStepperProps {
  value: number;
  onChange: (next: number) => void;
  disabledPlus?: boolean;
  disabledMinus?: boolean;
  ariaLabel: string;
  size?: "md" | "lg";
}

function parseLoose(raw: string): number | null {
  const trimmed = raw.trim();
  if (trimmed === "" || trimmed === "-" || trimmed === "+") return null;
  const n = Number(trimmed);
  if (!Number.isFinite(n)) return null;
  return Math.trunc(n);
}

export function StatStepper({
  value,
  onChange,
  disabledPlus,
  disabledMinus,
  ariaLabel,
  size = "md",
}: StatStepperProps) {
  const large = size === "lg";
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md bg-inset shadow-[0_0_0_1px_rgba(236,234,227,0.1)]",
        large ? "h-12" : "h-11",
      )}
    >
      <button
        type="button"
        aria-label={`Decrease ${ariaLabel}`}
        disabled={disabledMinus}
        onClick={() => onChange(value - 1)}
        className={cn(
          "grid place-items-center text-muted transition-colors hover:text-fg disabled:opacity-30",
          large ? "size-12" : "size-11",
        )}
      >
        <Minus className="size-4" />
      </button>
      <input
        aria-label={ariaLabel}
        inputMode="numeric"
        value={Number.isFinite(value) ? String(value) : "0"}
        onChange={(e) => {
          const parsed = parseLoose(e.target.value);
          if (parsed !== null) onChange(parsed);
        }}
        className={cn(
          "w-14 bg-transparent text-center font-mono tabular-nums text-fg focus-visible:outline-none",
          large ? "text-xl" : "text-lg",
        )}
      />
      <button
        type="button"
        aria-label={`Increase ${ariaLabel}`}
        disabled={disabledPlus}
        onClick={() => onChange(value + 1)}
        className={cn(
          "grid place-items-center text-muted transition-colors hover:text-fg disabled:opacity-30",
          large ? "size-12" : "size-11",
        )}
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
