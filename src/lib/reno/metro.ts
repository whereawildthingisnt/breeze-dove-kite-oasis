import type { DistrictId } from "./types";

/** Reno, Nevada is about 109 square miles of land, roughly 10.4 miles across. New Reno uses that extent. */
export const LAND_SQMI = 109;
export const CITY_MILES = 10.4;

/**
 * Miles from the Virgin Street arch. The casinos sit on about a mile of strip.
 * Orchards, the rail, and the ruins are the rest of the city. That is why you ride.
 */
export const DISTRICT_MILES: Record<DistrictId, { east: number; north: number }> = {
  virgin: { east: 0, north: 0 },
  shark: { east: 0.35, north: -0.08 },
  desperado: { east: 0.9, north: 0.05 },
  bishop: { east: 0.4, north: -0.5 },
  mordino: { east: -0.6, north: 0.2 },
  salvatore: { east: -1.8, north: 0.45 },
  motel: { east: 0.25, north: 0.75 },
  stables: { east: 1.7, north: 1.2 },
  jungle: { east: -0.45, north: 1.5 },
  wright: { east: -1.3, north: 3.4 },
  chop: { east: 1.2, north: 2.6 },
  rail: { east: 4.1, north: 2.2 },
  market: { east: 2.3, north: 0.7 },
  golgotha: { east: 0.9, north: 6.4 },
};

export function milesBetween(a: DistrictId, b: DistrictId): number {
  const from = DISTRICT_MILES[a];
  const to = DISTRICT_MILES[b];
  const miles = Math.hypot(from.east - to.east, from.north - to.north);
  return Math.max(0.15, Math.round(miles * 10) / 10);
}

/** A person on foot, about three miles an hour, plus the time a city actually costs. */
export function travelMinutes(miles: number): number {
  return Math.max(15, Math.round(miles * 22));
}
