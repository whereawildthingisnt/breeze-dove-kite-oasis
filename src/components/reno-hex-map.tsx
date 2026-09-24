import { axialDistance, boardBounds, hexPolygon, hexToPixel, isWalkable } from "@/lib/reno/hex";
import type { HexBoard } from "@/lib/reno/types";
import { cn } from "@/lib/utils";

export interface HexUnitView {
  id: string;
  q: number;
  r: number;
  label: string;
  player?: boolean;
  side?: "player" | "ally" | "foe";
  token?: string;
  hp?: number;
  hpMax?: number;
  down?: boolean;
}

const SIZE = 16;

export function RenoHexMap({
  board,
  units,
  selectedId,
  reachable,
  onHex,
  disabled,
}: {
  board: HexBoard;
  units: HexUnitView[];
  selectedId?: string;
  reachable?: Set<string>;
  onHex?: (q: number, r: number) => void;
  disabled?: boolean;
}) {
  const bounds = boardBounds(board, SIZE);
  const byHex = new Map(units.map((u) => [`${u.q},${u.r}`, u]));

  return (
    <div className="reno-hex-wrap relative overflow-hidden rounded-xl bg-inset">
      <img
        src={board.scene}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-bg/45" />
      <svg
        viewBox={`${bounds.minX} ${bounds.minY} ${bounds.width} ${bounds.height}`}
        className="relative z-10 mx-auto block h-auto w-full max-h-[18rem]"
        role="img"
        aria-label="Encounter hex map"
      >
        {board.cells.map((cell) => {
          const p = hexToPixel(cell.q, cell.r, SIZE);
          const key = `${cell.q},${cell.r}`;
          const unit = byHex.get(key);
          const can = reachable?.has(key) && cell.kind !== "wall";
          const fill =
            cell.kind === "wall"
              ? "color-mix(in oklab, var(--color-bg) 70%, #3a3228)"
              : cell.kind === "exit"
                ? "color-mix(in oklab, var(--color-ok) 42%, transparent)"
                : cell.kind === "cover"
                  ? "color-mix(in oklab, var(--color-raised) 70%, #4a3a28)"
                  : "color-mix(in oklab, var(--color-surface) 55%, transparent)";
          const stroke =
            cell.kind === "exit"
              ? "var(--color-ok)"
              : can
                ? "var(--color-accent)"
                : "color-mix(in oklab, var(--color-fg) 22%, transparent)";
          const strokeWidth = cell.kind === "exit" ? 2.8 : can ? 1.8 : 1;
          return (
            <g key={key}>
              <polygon
                points={hexPolygon(p.x, p.y, SIZE - 1.2)}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                className={cn(onHex && cell.kind !== "wall" && !disabled ? "cursor-pointer" : "")}
                onClick={() => {
                  if (disabled || cell.kind === "wall") return;
                  onHex?.(cell.q, cell.r);
                }}
              />
              {cell.kind === "exit" ? (
                <circle cx={p.x} cy={p.y} r={2.6} fill="none" stroke="var(--color-ok)" strokeWidth={1.5} />
              ) : null}
              {unit ? (
                <>
                  {unit.token ? (
                    <image
                      href={unit.token}
                      x={p.x - 10}
                      y={p.y - 18}
                      width={20}
                      height={28}
                      preserveAspectRatio="xMidYMax meet"
                    />
                  ) : (
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={7}
                      fill={unit.player ? "var(--color-accent)" : "var(--color-danger)"}
                    />
                  )}
                  <text
                    x={p.x}
                    y={p.y + 14}
                    textAnchor="middle"
                    fill="var(--color-fg)"
                    fontSize={6.5}
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    {unit.label}
                  </text>
                </>
              ) : null}
            </g>
          );
        })}
      </svg>
      {selectedId ? (
        <p className="relative z-10 px-3 py-2 font-mono text-[10px] tracking-wide text-subtle uppercase">
          Target {selectedId}
          {reachable ? ` · ${[...reachable].length} walkable` : ""}
          {units[0] ? ` · range ${axialDistance(units[0].q, units[0].r, units.find((u) => u.id === selectedId)?.q ?? 0, units.find((u) => u.id === selectedId)?.r ?? 0)}` : ""}
        </p>
      ) : null}
      {onHex && !disabled ? (
        <p className="relative z-10 px-3 pb-2 text-xs text-muted">
          Green outline is the way out. Click a hex to step. Click a body to target.
        </p>
      ) : null}
    </div>
  );
}

export function reachableFrom(
  board: HexBoard,
  q: number,
  r: number,
  steps: number,
  blocked: Set<string>,
): Set<string> {
  const out = new Set<string>();
  const queue: Array<{ q: number; r: number; d: number }> = [{ q, r, d: 0 }];
  const seen = new Set([`${q},${r}`]);
  const dirs = [
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
  ];
  while (queue.length) {
    const cur = queue.shift()!;
    if (cur.d > 0) out.add(`${cur.q},${cur.r}`);
    if (cur.d >= steps) continue;
    for (const [dq, dr] of dirs) {
      const nq = cur.q + dq;
      const nr = cur.r + dr;
      const key = `${nq},${nr}`;
      if (seen.has(key) || blocked.has(key) || !isWalkable(board, nq, nr)) continue;
      seen.add(key);
      queue.push({ q: nq, r: nr, d: cur.d + 1 });
    }
  }
  return out;
}
