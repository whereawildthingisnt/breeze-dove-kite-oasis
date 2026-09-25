/** 1 world unit = 1 meter. People are 5'9". Cars are a real sedan. */
export const HUMAN_M = 1.7526;
export const HUMAN_W = 0.48;
export const DOOR_H = 2.13;
export const DOOR_W = 0.9;
export const CAR_L = 4.72;
export const CAR_W = 1.82;
export const CAR_H = 1.46;
export const MILE = 1609;
/** Floor to floor, including the slab. */
export const STORY = 3.15;
/** Curb to building face. */
export const SIDEWALK = 2.4;
/** Typical stall: car plus a step so doors can open. */
export const PARK_GAP = CAR_L + 2.2;

export function floors(n: number): number {
  return Math.round(n * STORY * 10) / 10;
}

export interface CityRun {
  id: string;
  ax: number;
  az: number;
  bx: number;
  bz: number;
  speed: number;
  phase: number;
  color: string;
}

export const RUNS: CityRun[] = [
  { id: "virgin", ax: -780, az: 1.6, bx: 820, bz: 1.6, speed: 0.006, phase: 0.1, color: "#3a3e44" },
  { id: "main", ax: 1.6, az: -40, bx: 1.6, bz: 150, speed: 0.035, phase: 0.4, color: "#6a3030" },
  { id: "second", ax: -70, az: 56.4, bx: 120, bz: 56.4, speed: 0.03, phase: 0.7, color: "#2c3a34" },
  { id: "north", ax: 22, az: -200, bx: 22, bz: -200 - MILE, speed: 0.02, phase: 0.2, color: "#4a4038" },
  { id: "south", ax: 18, az: 220, bx: 18, bz: 220 + MILE, speed: 0.018, phase: 0.55, color: "#1e242c" },
  { id: "east", ax: 220, az: 42, bx: 220 + MILE, bz: 42, speed: 0.02, phase: 0.33, color: "#3a3e44" },
  { id: "west", ax: -200, az: 38, bx: -200 - MILE, bz: 38, speed: 0.017, phase: 0.8, color: "#6a3030" },
];

export function runPose(run: CityRun, time: number): { x: number; z: number; yaw: number } {
  const u = (((time * run.speed + run.phase) % 1) + 1) % 1;
  const forward = u < 0.5;
  const ping = forward ? u * 2 : (1 - u) * 2;
  const x = run.ax + (run.bx - run.ax) * ping;
  const z = run.az + (run.bz - run.az) * ping;
  const dx = run.bx - run.ax;
  const dz = run.bz - run.az;
  const yaw = Math.atan2(forward ? dx : -dx, forward ? dz : -dz);
  return { x, z, yaw };
}
