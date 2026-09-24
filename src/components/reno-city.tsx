import { useEffect, useRef } from "react";
import { DISTRICTS, HOUSING_BY_ID, isoPoint } from "@/lib/reno/world";
import type { DistrictId, RenoLife } from "@/lib/reno/types";
import { cn } from "@/lib/utils";

const TW = 128;
const TH = 64;

const ART: Record<string, string> = {
  casino: "/reno/casino.webp",
  squat: "/reno/squat.webp",
  ring: "/reno/ring.webp",
  motel: "/reno/motel.webp",
  bar: "/reno/bar.webp",
  rail: "/reno/rail.webp",
  crypt: "/reno/crypt.webp",
};

export function RenoCity({
  life,
  onTravel,
  disabled,
}: {
  life: RenoLife;
  onTravel: (id: DistrictId) => void;
  disabled?: boolean;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const points = DISTRICTS.map((d) => ({ d, p: isoPoint(d.q, d.r, TW, TH) }));
  const xs = points.map((x) => x.p.x);
  const ys = points.map((x) => x.p.y);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);
  const padX = 56;
  const padY = 88;
  const width = maxX - minX + TW + padX * 2;
  const height = maxY - minY + TH + padY * 2 + 48;
  const homeDistrict = life.housingId ? HOUSING_BY_ID[life.housingId].district : null;

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const here = root.querySelector<HTMLElement>("[data-here='true']");
    here?.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
  }, [life.district]);

  return (
    <div
      ref={scroller}
      className="reno-map overflow-auto rounded-xl bg-inset shadow-[0_0_0_1px_rgba(236,234,227,0.08)]"
    >
      <div
        className={cn("reno-stage relative mx-auto", life.hour >= 20 || life.hour < 6 ? "reno-night" : "")}
        style={{ width, height, minWidth: width }}
      >
        <img
          src="/reno/streets.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="reno-haze pointer-events-none absolute inset-0" />
        {points
          .slice()
          .sort((a, b) => a.p.y - b.p.y)
          .map(({ d, p }) => {
            const left = p.x - minX + padX;
            const top = p.y - minY + padY;
            const here = life.district === d.id;
            const isHome = homeDistrict === d.id;
            return (
              <button
                key={d.id}
                type="button"
                data-here={here ? "true" : undefined}
                disabled={disabled || here}
                onClick={() => onTravel(d.id)}
                className={cn("reno-tile absolute", here && "reno-tile-here", isHome && "reno-tile-home")}
                style={{ left, top, width: TW, height: TH + 64 }}
                aria-label={here ? `${d.name}, you are here` : `Travel to ${d.name}`}
              >
                <span className="reno-diamond" />
                <img src={ART[d.art]} alt="" className="reno-building" />
                {here ? <span className="reno-pawn" aria-hidden /> : null}
                <span className="reno-label">
                  <span className="block font-display text-sm leading-none font-semibold tracking-tight">
                    {d.name}
                  </span>
                  <span className="mt-0.5 block font-mono text-[10px] tracking-wide text-subtle uppercase">
                    {here ? "here" : isHome ? "home" : `danger ${d.danger}`}
                  </span>
                </span>
              </button>
            );
          })}
      </div>
    </div>
  );
}
