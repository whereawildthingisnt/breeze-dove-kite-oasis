/** Desert weather. Rain is rare. Dust is the usual insult. */
export type Weather = "clear" | "dust" | "wind" | "rain" | "storm";

const LINES: Record<Weather, string> = {
  clear: "The sky opens. You can see the next block, which is not always a kindness.",
  dust: "Dust comes in off the flats. Neon turns brown. People squint and keep walking.",
  wind: "Wind down the streets. Signs complain. Paper and grit move faster than the cars.",
  rain: "Rain. Reno does not know what to do with it. The lots shine and the crowds step inside.",
  storm: "A storm sits on the city. Short sight, hard rain, and every door looks smarter than the sidewalk.",
};

/** Changes every six hours. Same clock, same sky, for everyone. */
export function weatherAt(day: number, hour: number): Weather {
  const h = ((hour % 24) + 24) % 24;
  const d = Math.max(0, day);
  const slot = d * 4 + Math.floor(h / 6);
  const n = (slot * 17 + slot * slot + 3) % 11;
  if (n <= 5) return "clear";
  if (n <= 7) return "dust";
  if (n === 8) return "wind";
  if (n === 9) return "rain";
  return "storm";
}

export function weatherLine(weather: Weather): string {
  return LINES[weather];
}

export function weatherCrowd(weather: Weather): number {
  if (weather === "storm") return 0.62;
  if (weather === "rain") return 0.78;
  if (weather === "dust") return 0.9;
  if (weather === "wind") return 0.94;
  return 1;
}
