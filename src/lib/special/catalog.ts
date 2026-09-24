import type { EngineId, ItemKind, WeaponSkill } from "./types";

export interface ResistPair {
  dt: number;
  dr: number;
}

export interface CatalogItem {
  id: string;
  name: string;
  kind: ItemKind;
  skill?: WeaponSkill;
  hands: 1 | 2;
  minSt: number;
  weight: number;
  value: number;
  dmg?: string;
  bonus?: number;
  rng?: number;
  apS?: number;
  apT?: number | null;
  apB?: number | null;
  mag?: number;
  ammo?: string[];
  pnpAc?: number;
  resists?: {
    n: ResistPair;
    l: ResistPair;
    f: ResistPair;
    p: ResistPair;
    e: ResistPair;
  };
  includesHelmet?: boolean;
  strBonus?: number;
  pePenalty?: number;
  sneakPen?: number;
  radBonus?: number;
  poisonBonus?: number;
  gas?: string;
  notes?: string;
  pocket?: "ammo" | "chem" | "quick" | "aid";
  vol?: number;
  acMod?: number;
  drMod?: number;
  ignoreDt?: boolean;
}

type PartialItem = Partial<Omit<CatalogItem, "id" | "name" | "kind">>;

function item(id: string, name: string, kind: ItemKind, rest: PartialItem): CatalogItem {
  const { hands, minSt, weight, value, ...more } = rest;
  return {
    id,
    name,
    kind,
    hands: hands ?? 1,
    minSt: minSt ?? 1,
    weight: weight ?? 1,
    value: value ?? 0,
    ...more,
  };
}

function w(id: string, name: string, skill: WeaponSkill, rest: PartialItem): CatalogItem {
  return item(id, name, "weapon", { skill, ...rest });
}

function arm(id: string, name: string, rest: PartialItem): CatalogItem {
  return item(id, name, "armor", { ...rest, hands: 1 });
}

function helm(id: string, name: string, rest: PartialItem): CatalogItem {
  return item(id, name, "helmet", rest);
}

function ammo(id: string, name: string, rest: PartialItem): CatalogItem {
  return item(id, name, "ammo", { pocket: "ammo", ...rest });
}

function chem(id: string, name: string, rest: PartialItem): CatalogItem {
  return item(id, name, "chem", { pocket: "chem", ...rest });
}

function gear(id: string, name: string, rest: PartialItem): CatalogItem {
  return item(id, name, "gear", rest);
}

function exp(id: string, name: string, rest: PartialItem): CatalogItem {
  return item(id, name, "explosive", { pocket: "quick", ...rest });
}

function r(dt: number, dr: number): ResistPair {
  return { dt, dr };
}

export const CATALOG: CatalogItem[] = [
  // Unarmed
  w("fists", "Fists and Feet", "unarmed", { value: 0, weight: 0, minSt: 1, dmg: "1d4+MD", rng: 1, apS: 3, apT: 4, notes: "Always available." }),
  w("brass-knuckles", "Brass Knuckles", "unarmed", { value: 40, weight: 1, minSt: 1, dmg: "1d10+MD", rng: 1, apS: 3, apT: 4 }),
  w("tiger-claw", "Tiger Claw", "unarmed", { value: 75, weight: 1, minSt: 1, dmg: "1d2+MD", rng: 1, apS: 3, apT: 4 }),
  w("sapper", "Sapper", "unarmed", { value: 80, weight: 4, minSt: 3, dmg: "1d6+MD", rng: 1, apS: 3, apT: 4, notes: "Head shots 75% KO 1d10 rounds." }),
  w("shredders", "Shredders", "unarmed", { value: 90, weight: 2, minSt: 1, dmg: "1d4+MD", rng: 1, apS: 3, apT: 4 }),
  w("lacerators", "Lacerators", "unarmed", { value: 100, weight: 2, minSt: 1, dmg: "1d8+2+MD", rng: 1, apS: 3, apT: 4 }),
  w("mace-glove", "Mace Glove", "unarmed", { value: 150, weight: 5, minSt: 3, dmg: "1d12+MD", rng: 1, apS: 3, apT: 4 }),
  w("spiked-knuckles", "Spiked Knuckles", "unarmed", { value: 250, weight: 1, minSt: 1, dmg: "1d10+4+MD", rng: 1, apS: 3, apT: 4 }),
  w("boxing-gloves", "Boxing Gloves", "unarmed", { value: 250, weight: 5, minSt: 1, dmg: "1d4+MD", rng: 1, apS: 3, apT: 4 }),
  w("plated-boxing", "Plated Boxing Gloves", "unarmed", { value: 300, weight: 10, minSt: 1, dmg: "1d4+5+MD", rng: 1, apS: 3, apT: 4 }),
  w("punch-dagger", "Punch Dagger", "unarmed", { value: 300, weight: 4, minSt: 1, dmg: "1d10+2+MD", rng: 1, apS: 3, apT: 4 }),
  w("punch-gun", "Punch Gun", "unarmed", { value: 600, weight: 7, minSt: 2, dmg: "1d4+ammo+MD", rng: 1, apS: 4, apT: 5, mag: 1, ammo: ["12g-buck"] }),
  w("impact-glove", "Impact Glove", "unarmed", { value: 900, weight: 9, minSt: 1, dmg: "1d10+8+MD", rng: 1, apS: 4, apT: 5 }),
  w("adamantine-claws", "Adamantine Claws", "unarmed", { value: 1000, weight: 3, minSt: 2, dmg: "1d10+5+MD", rng: 1, apS: 3, apT: 4 }),
  w("power-fist", "Power Fist", "unarmed", { value: 1800, weight: 10, minSt: 1, dmg: "2d8+10+MD", rng: 1, apS: 4, apT: 5, mag: 25, ammo: ["sec"] }),
  w("mega-power-fist", "Mega Power Fist", "unarmed", { value: 2200, weight: 10, minSt: 1, dmg: "3d10+20+MD", rng: 1, apS: 4, apT: 5, mag: 25, ammo: ["sec"] }),

  // Melee
  w("rock", "Rock", "meleeWeapons", { value: 0, weight: 1, minSt: 1, dmg: "1d4+MD", rng: 1, apS: 3, apT: 4 }),
  w("sap", "Sap", "meleeWeapons", { value: 1, weight: 1, minSt: 5, dmg: "none", rng: 1, apS: 0, apT: 5, notes: "Head only. KO 1d10 rounds." }),
  w("shiv", "Shiv", "meleeWeapons", { value: 2, weight: 1, minSt: 1, dmg: "1d4", rng: 1, apS: 3, apT: 4, notes: "No melee damage bonus." }),
  w("broken-bottle", "Broken Bottle", "meleeWeapons", { value: 2, weight: 1, minSt: 1, dmg: "1d6+MD", rng: 1, apS: 3, apT: 4 }),
  w("sharpened-pole", "Sharpened Pole", "meleeWeapons", { value: 5, weight: 3, minSt: 3, dmg: "1d4+1+MD", rng: 2, apS: 3, apT: 4, hands: 2 }),
  w("metal-pipe", "Metal Pipe", "meleeWeapons", { value: 10, weight: 10, minSt: 5, dmg: "1d10+MD", rng: 1, apS: 5, apT: 5 }),
  w("wooden-club", "Wooden Club", "meleeWeapons", { value: 10, weight: 5, minSt: 3, dmg: "1d8+MD", rng: 1, apS: 3, apT: 4 }),
  w("club", "Club", "meleeWeapons", { value: 30, weight: 3, minSt: 3, dmg: "1d10+MD", rng: 1, apS: 3, apT: 4 }),
  w("shovel", "Shovel", "meleeWeapons", { value: 30, weight: 15, minSt: 5, dmg: "1d12+MD", rng: 2, apS: 4, apT: 5, hands: 2 }),
  w("knife", "Knife", "meleeWeapons", { value: 40, weight: 1, minSt: 2, dmg: "1d10+MD", rng: 1, apS: 3, apT: 4 }),
  w("claw-hammer", "Claw Hammer", "meleeWeapons", { value: 40, weight: 4, minSt: 2, dmg: "1d10+MD", rng: 1, apS: 3, apT: 4 }),
  w("ax", "Ax", "meleeWeapons", { value: 45, weight: 2, minSt: 3, dmg: "1d8+MD", rng: 1, apS: 3, apT: 4 }),
  w("switchblade", "Switchblade", "meleeWeapons", { value: 50, weight: 1, minSt: 1, dmg: "1d6+MD", rng: 1, apS: 3, apT: 4 }),
  w("wrench", "Wrench", "meleeWeapons", { value: 65, weight: 4, minSt: 3, dmg: "1d6+2+MD", rng: 1, apS: 4, apT: 5 }),
  w("crowbar", "Crowbar", "meleeWeapons", { value: 65, weight: 5, minSt: 5, dmg: "1d12+3+MD", rng: 1, apS: 4, apT: 5 }),
  w("spear", "Spear", "meleeWeapons", { value: 80, weight: 4, minSt: 4, dmg: "1d12+3+MD", rng: 2, apS: 4, apT: 5, hands: 2 }),
  w("machete", "Machete", "meleeWeapons", { value: 100, weight: 1, minSt: 4, dmg: "1d10+7+MD", rng: 1, apS: 4, apT: 5 }),
  w("cleaver", "Butcher's Cleaver", "meleeWeapons", { value: 110, weight: 1, minSt: 4, dmg: "1d8+10+MD", rng: 1, apS: 3, apT: 4 }),
  w("sledgehammer", "Sledgehammer", "meleeWeapons", { value: 120, weight: 12, minSt: 6, dmg: "3d4+MD", rng: 2, apS: 4, apT: 5, hands: 2 }),
  w("scalpel", "Scalpel", "meleeWeapons", { value: 140, weight: 1, minSt: 1, dmg: "1d8+3+MD", rng: 1, apS: 3, apT: 4 }),
  w("combat-knife", "Combat Knife", "meleeWeapons", { value: 165, weight: 2, minSt: 2, dmg: "1d12+3+MD", rng: 1, apS: 3, apT: 4 }),
  w("wakizashi", "Wakizashi Blade", "meleeWeapons", { value: 200, weight: 2, minSt: 2, dmg: "1d12+4+MD", rng: 1, apS: 3, apT: 4 }),
  w("slugger", "Louisville Slugger", "meleeWeapons", { value: 300, weight: 4, minSt: 4, dmg: "2d10+MD", rng: 1, apS: 3, apT: 4 }),
  w("micro-sledge", "Micro Sledgehammer", "meleeWeapons", { value: 500, weight: 8, minSt: 4, dmg: "1d12+8+MD", rng: 1, apS: 3, apT: 4 }),
  w("cattle-prod", "Cattle Prod", "meleeWeapons", { value: 600, weight: 5, minSt: 4, dmg: "2d6+10+MD", rng: 1, apS: 4, apT: 5, mag: 25, ammo: ["sec"], notes: "50% KO." }),
  w("ripper", "Ripper", "meleeWeapons", { value: 1000, weight: 5, minSt: 4, dmg: "1d10+15+MD", rng: 1, apS: 4, apT: 5, mag: 25, ammo: ["sec"] }),
  w("super-prod", "Super Cattle Prod", "meleeWeapons", { value: 1800, weight: 5, minSt: 4, dmg: "2d8+20+MD", rng: 1, apS: 4, apT: 5, hands: 2, mag: 25, ammo: ["sec"], notes: "75% KO." }),
  w("deco-filament", "Deco-Filament", "meleeWeapons", { value: 2000, weight: 1, minSt: 1, dmg: "4d10+MD", rng: 2, apS: 3, apT: 4 }),
  w("chainsaw", "Chainsaw", "meleeWeapons", { value: 3000, weight: 10, minSt: 4, dmg: "3d10+20+MD", rng: 1, apS: 5, apT: null, hands: 2 }),
  w("proton-ax", "Proton Ax", "meleeWeapons", { value: 3500, weight: 15, minSt: 5, dmg: "3d10+10+MD", rng: 1, apS: 4, apT: 5, hands: 2 }),
  w("super-sledge", "Super Sledgehammer", "meleeWeapons", { value: 3750, weight: 12, minSt: 5, dmg: "3d10+15+MD", rng: 2, apS: 4, apT: 5, hands: 2 }),

  // Primitive / pistols / shotguns / SMG / rifles / assault
  w("sling", "Sling", "smallGuns", { value: 20, weight: 2, minSt: 5, dmg: "1d10", rng: 10, apS: 5, apT: 6, mag: 1, ammo: ["rock-ammo"] }),
  w("blowgun", "Blowgun", "smallGuns", { value: 30, weight: 1, minSt: 1, bonus: 0, rng: 20, apS: 3, apT: 4, mag: 1, ammo: ["dart"] }),
  w("wooden-bow", "Wooden Bow", "smallGuns", { value: 50, weight: 2, minSt: 5, bonus: 3, rng: 40, apS: 5, apT: 6, hands: 2, mag: 1, ammo: ["arrow"] }),
  w("wooden-xbow", "Wooden Crossbow", "smallGuns", { value: 300, weight: 10, minSt: 4, bonus: 4, rng: 50, apS: 4, apT: 5, hands: 2, mag: 1, ammo: ["bolt"] }),
  w("comp-bow", "Composite Hunting Bow", "smallGuns", { value: 600, weight: 8, minSt: 5, bonus: 5, rng: 60, apS: 5, apT: 6, hands: 2, mag: 1, ammo: ["arrow"] }),
  w("comp-xbow", "Composite Hunting Crossbow", "smallGuns", { value: 900, weight: 12, minSt: 4, bonus: 6, rng: 70, apS: 4, apT: 5, hands: 2, mag: 1, ammo: ["bolt"] }),
  w("10mm-pistol", "Colt 6520 10mm Pistol", "smallGuns", { value: 250, weight: 4, minSt: 3, bonus: 6, rng: 19, apS: 5, apT: 6, mag: 12, ammo: ["10mm-jhp", "10mm-ap"] }),
  w("zip-gun", "Zip Gun", "smallGuns", { value: 275, weight: 5, minSt: 3, bonus: 4, rng: 15, apS: 5, apT: 6, mag: 1, ammo: ["22", "9mm-jhp", "45"] }),
  w("22-pistol", ".22 Pistol", "smallGuns", { value: 300, weight: 4, minSt: 3, bonus: 4, rng: 12, apS: 5, apT: 6, mag: 10, ammo: ["22"] }),
  w("38-snub", ".38 Special Snubnose", "smallGuns", { value: 375, weight: 4, minSt: 3, bonus: 7, rng: 10, apS: 4, apT: 5, mag: 6, ammo: ["38"] }),
  w("9mm-beretta", "VP91Z 9mm Beretta", "smallGuns", { value: 400, weight: 4, minSt: 3, bonus: 6, rng: 17, apS: 5, apT: 6, mag: 18, ammo: ["9mm-jhp", "9mm-ap"] }),
  w("colt-45", "Colt .45 M1911A1", "smallGuns", { value: 425, weight: 4, minSt: 3, bonus: 7, rng: 17, apS: 5, apT: 6, mag: 7, ammo: ["45"] }),
  w("357-mag", ".357 Magnum Revolver", "smallGuns", { value: 450, weight: 6, minSt: 5, bonus: 8, rng: 19, apS: 4, apT: 5, mag: 6, ammo: ["357"] }),
  w("casull", "Casull Revolver", "smallGuns", { value: 500, weight: 6, minSt: 5, bonus: 7, rng: 6, apS: 4, apT: 5, mag: 6, ammo: ["44-jhp", "44-ap"] }),
  w("44-mag", ".44 Magnum Revolver", "smallGuns", { value: 600, weight: 6, minSt: 5, bonus: 11, rng: 6, apS: 4, apT: 5, mag: 6, ammo: ["44-jhp", "44-ap"] }),
  w("browning-hp", "Browning HP Pistol", "smallGuns", { value: 700, weight: 6, minSt: 4, bonus: 9, rng: 20, apS: 4, apT: 5, mag: 12, ammo: ["45"] }),
  w("desert-eagle", "Desert Eagle .44", "smallGuns", { value: 800, weight: 5, minSt: 4, bonus: 10, rng: 19, apS: 5, apT: 6, mag: 8, ammo: ["44-jhp", "44-ap"] }),
  w("calico-950", "Calico M-950", "smallGuns", { value: 900, weight: 10, minSt: 4, bonus: 6, rng: 15, apS: 5, apT: 6, mag: 40, ammo: ["9mm-jhp", "9mm-ap"] }),
  w("sig-p220", "Sig-Sauer P220 9mm", "smallGuns", { value: 1000, weight: 4, minSt: 3, bonus: 6, rng: 24, apS: 5, apT: 6, mag: 9, ammo: ["9mm-jhp", "9mm-ap"] }),
  w("sig-14mm", "Sig-Sauer 14mm Pistol", "smallGuns", { value: 1100, weight: 5, minSt: 4, bonus: 12, rng: 18, apS: 5, apT: 6, mag: 6, ammo: ["14mm-jhp", "14mm-ap"] }),
  w("mauser-9", "9mm Mauser", "smallGuns", { value: 1500, weight: 5, minSt: 3, bonus: 4, rng: 17, apS: 5, apT: 6, mag: 8, ammo: ["9mm-ball"] }),
  w("needler", "Needler Pistol", "smallGuns", { value: 2200, weight: 5, minSt: 3, bonus: 0, rng: 24, apS: 4, apT: 5, mag: 8, ammo: ["hn-needler", "hn-ap", "hn-poison", "hn-bio"] }),
  w("ppk", "Walther PPK", "smallGuns", { value: 3000, weight: 4, minSt: 2, bonus: 8, rng: 20, apS: 3, apT: 4, mag: 8, ammo: ["765"] }),
  w("flamer-pistol", "Flamer Pistol", "smallGuns", { value: 3000, weight: 10, minSt: 4, dmg: "ammo", rng: 3, apS: 4, apT: null, mag: 3, ammo: ["flamer-fire"] }),
  w("scorpio", "Scorpio VZ61", "smallGuns", { value: 3300, weight: 6, minSt: 4, bonus: 5, rng: 15, apS: 5, apT: 5, apB: 6, mag: 20, ammo: ["9mm-jhp", "9mm-ap"] }),
  w("223-pistol", ".223 Pistol", "smallGuns", { value: 3500, weight: 7, minSt: 5, bonus: 20, rng: 30, apS: 5, apT: 6, mag: 5, ammo: ["223-fmj", "223-ap"] }),
  w("m78-gl", "M-78 Grenade Pistol", "smallGuns", { value: 5000, weight: 8, minSt: 6, dmg: "ammo", rng: 12, apS: 5, apT: null, mag: 1, ammo: ["40mm-frag", "40mm-plasma", "40mm-pulse"] }),
  w("gauss-pistol", "PPK-12 Gauss Pistol", "smallGuns", { value: 5250, weight: 5, minSt: 4, bonus: 22, rng: 30, apS: 4, apT: 5, mag: 12, ammo: ["2mm-ec"] }),

  w("widowmaker", "Winchester Widowmaker", "smallGuns", { value: 800, weight: 5, minSt: 4, bonus: 12, rng: 14, apS: 5, apT: 6, mag: 2, ammo: ["12g-buck", "12g-slug", "12g-emp", "12g-rubber"], notes: "Single or double." }),
  w("sawed-off", "Winchester Sawed-Off", "smallGuns", { value: 800, weight: 5, minSt: 4, bonus: 14, rng: 7, apS: 5, apT: 6, mag: 2, ammo: ["12g-buck", "12g-slug"] }),
  w("pump-shotgun", "Pump-Action Shotgun", "smallGuns", { value: 800, weight: 4, minSt: 4, bonus: 12, rng: 15, apS: 5, apT: null, mag: 4, ammo: ["12g-buck", "12g-slug"] }),
  w("silverhawk", "Beretta 470 Silverhawk", "smallGuns", { value: 1000, weight: 5, minSt: 4, bonus: 12, rng: 14, apS: 5, apT: 6, mag: 2, ammo: ["12g-buck", "12g-slug"] }),
  w("combat-shotgun", "Winchester Combat Shotgun", "smallGuns", { value: 2750, weight: 11, minSt: 5, bonus: 15, rng: 22, apS: 5, apT: 6, apB: 6, mag: 12, ammo: ["12g-buck", "12g-slug"], hands: 2 }),
  w("caws", "H&K CAWS", "smallGuns", { value: 4750, weight: 6, minSt: 6, bonus: 15, rng: 30, apS: 6, apT: 6, apB: 6, mag: 10, ammo: ["12g-buck", "12g-slug"], hands: 2 }),
  w("jackhammer", "Pancor Jackhammer", "smallGuns", { value: 5500, weight: 12, minSt: 5, bonus: 19, rng: 35, apS: 5, apT: 6, apB: 6, mag: 10, ammo: ["12g-buck", "12g-slug"], hands: 2 }),

  w("mp9", "H&K MP-9 10mm SMG", "smallGuns", { value: 1000, weight: 7, minSt: 4, bonus: 6, rng: 25, apS: 5, apT: 6, apB: 6, mag: 30, ammo: ["10mm-jhp", "10mm-ap"] }),
  w("mac17", "MAC 17 SMG", "smallGuns", { value: 1050, weight: 6, minSt: 4, bonus: 7, rng: 25, apS: 5, apT: 6, apB: 6, mag: 30, ammo: ["45"] }),
  w("mp5", "H&K MP-5", "smallGuns", { value: 1100, weight: 5, minSt: 3, bonus: 7, rng: 30, apS: 4, apT: 5, apB: 5, mag: 30, ammo: ["9mm-jhp", "9mm-ap"] }),
  w("uzi", "Uzi Mark 27", "smallGuns", { value: 1200, weight: 7, minSt: 4, bonus: 5, rng: 20, apS: 5, apT: 6, apB: 6, mag: 40, ammo: ["9mm-jhp", "9mm-ap"] }),
  w("thompson", "Thompson M1928", "smallGuns", { value: 1200, weight: 12, minSt: 6, bonus: 2, rng: 32, apS: 5, apT: 6, apB: 6, mag: 50, ammo: ["45"], hands: 2 }),
  w("ruger-ac", "Ruger AC556F", "smallGuns", { value: 1400, weight: 15, minSt: 6, bonus: 7, rng: 20, apS: 5, apT: 6, apB: 6, mag: 32, ammo: ["556"], hands: 2 }),
  w("sten", "Sten Gun", "smallGuns", { value: 1500, weight: 15, minSt: 6, bonus: 9, rng: 24, apS: 5, apT: 6, apB: 6, mag: 30, ammo: ["9mm-jhp", "9mm-ap"], hands: 2 }),
  w("mp38", "MP-38 Schmeisser", "smallGuns", { value: 1600, weight: 25, minSt: 6, bonus: 7, rng: 18, apS: 5, apT: 6, apB: 6, mag: 30, ammo: ["9mm-jhp"], hands: 2 }),
  w("grease-gun", "M3A1 Grease Gun", "smallGuns", { value: 1750, weight: 10, minSt: 4, bonus: 10, rng: 20, apS: 4, apT: 5, apB: 5, mag: 30, ammo: ["45"] }),
  w("walther-mpl", "Walther MPL", "smallGuns", { value: 1800, weight: 8, minSt: 4, bonus: 8, rng: 40, apS: 5, apT: 6, mag: 30, ammo: ["9mm-jhp", "9mm-ap"] }),
  w("calico-100", "Calico Liberty 100", "smallGuns", { value: 2000, weight: 22, minSt: 6, bonus: 8, rng: 20, apS: 5, apT: 6, apB: 6, mag: 100, ammo: ["9mm-jhp"], hands: 2 }),
  w("steyr-aug", "Steyr AUG", "smallGuns", { value: 2300, weight: 7, minSt: 5, bonus: 8, rng: 28, apS: 5, apT: 6, mag: 40, ammo: ["556"], hands: 2 }),
  w("p90c", "H&K P90c", "smallGuns", { value: 2500, weight: 9, minSt: 4, bonus: 12, rng: 30, apS: 4, apT: 5, apB: 5, mag: 24, ammo: ["10mm-jhp", "10mm-ap"] }),

  w("bb-gun", "BB Gun", "smallGuns", { value: 150, weight: 15, minSt: 1, bonus: 0, rng: 25, apS: 5, apT: 6, mag: 100, ammo: ["bbs"], hands: 2 }),
  w("pipe-rifle", "Pipe Rifle", "smallGuns", { value: 200, weight: 11, minSt: 5, bonus: 6, rng: 20, apS: 5, apT: 6, mag: 1, ammo: ["10mm-jhp", "10mm-ap"], hands: 2 }),
  w("22-rifle", ".22 Hunting Rifle", "smallGuns", { value: 300, weight: 8, minSt: 3, bonus: 4, rng: 30, apS: 5, apT: 6, mag: 1, ammo: ["22"], hands: 2 }),
  w("m1-garand", "M1 Garand", "smallGuns", { value: 400, weight: 6, minSt: 4, bonus: 7, rng: 30, apS: 5, apT: 6, mag: 8, ammo: ["762"], hands: 2 }),
  w("m17a", "M17-A Carbine", "smallGuns", { value: 500, weight: 7, minSt: 4, bonus: 9, rng: 20, apS: 5, apT: 6, mag: 10, ammo: ["762"], hands: 2 }),
  w("hunting-rifle", "Colt Rangemaster", "smallGuns", { value: 1000, weight: 11, minSt: 5, bonus: 9, rng: 40, apS: 5, apT: 6, mag: 10, ammo: ["223-fmj", "223-ap", "762"], hands: 2 }),
  w("m19", "M19 Rifle", "smallGuns", { value: 1100, weight: 11, minSt: 5, bonus: 8, rng: 35, apS: 5, apT: 6, mag: 8, ammo: ["762"], hands: 2 }),
  w("spear-gun", "Spear Gun", "smallGuns", { value: 1400, weight: 10, minSt: 4, bonus: 0, rng: 30, apS: 5, apT: 6, mag: 1, ammo: ["spear-bolt"], hands: 2 }),
  w("dks-501", "DKS-501 Sniper Rifle", "smallGuns", { value: 2200, weight: 10, minSt: 5, bonus: 14, rng: 50, apS: 6, apT: 7, mag: 6, ammo: ["223-fmj", "223-ap"], hands: 2, notes: "Built-in scope." }),
  w("svd-4000", "SVD-4000", "smallGuns", { value: 2400, weight: 15, minSt: 5, bonus: 14, rng: 75, apS: 5, apT: 6, mag: 10, ammo: ["762"], hands: 2 }),
  w("psg1", "PSG1 Sniper Rifle", "smallGuns", { value: 2500, weight: 15, minSt: 5, bonus: 14, rng: 120, apS: 4, apT: 5, mag: 20, ammo: ["762"], hands: 2, notes: "Built-in scope." }),
  w("g3", "G3 Battle Rifle", "smallGuns", { value: 2600, weight: 13, minSt: 6, dmg: "2d10+5", rng: 45, apS: 5, apT: 6, apB: 6, mag: 20, ammo: ["762"], hands: 2 }),
  w("red-ryder", "Red Ryder LE BB Gun", "smallGuns", { value: 3500, weight: 15, minSt: 5, bonus: 25, rng: 32, apS: 5, apT: 6, mag: 100, ammo: ["bbs"], hands: 2 }),
  w("m72-gauss", "M72 Gauss Rifle", "smallGuns", { value: 8250, weight: 10, minSt: 6, bonus: 33, rng: 50, apS: 5, apT: 6, mag: 20, ammo: ["2mm-ec"], hands: 2 }),

  w("m14", "M14", "smallGuns", { value: 1000, weight: 16, minSt: 6, bonus: 5, rng: 35, apS: 6, apT: 7, apB: 7, mag: 20, ammo: ["762"], hands: 2 }),
  w("bar", "Browning Automatic Rifle", "smallGuns", { value: 1000, weight: 25, minSt: 6, bonus: 6, rng: 40, apS: 6, apT: 7, mag: 20, ammo: ["308"], hands: 2 }),
  w("ak47", "AK-47", "smallGuns", { value: 1000, weight: 10, minSt: 5, bonus: 7, rng: 40, apS: 5, apT: 6, mag: 30, ammo: ["762"], hands: 2 }),
  w("ak112", "AK-112", "smallGuns", { value: 1300, weight: 8, minSt: 5, bonus: 8, rng: 45, apS: 5, apT: 6, apB: 6, mag: 24, ammo: ["5mm"], hands: 2 }),
  w("fn-fal", "FN FAL", "smallGuns", { value: 1500, weight: 11, minSt: 5, bonus: 8, rng: 35, apS: 5, apT: 6, apB: 6, mag: 20, ammo: ["762"], hands: 2 }),
  w("ak74", "AK-74", "smallGuns", { value: 1600, weight: 14, minSt: 5, bonus: 10, rng: 45, apS: 5, apT: 6, apB: 6, mag: 30, ammo: ["545"], hands: 2 }),
  w("m16a2", "M16A2", "smallGuns", { value: 1700, weight: 15, minSt: 6, bonus: 6, rng: 40, apS: 6, apT: 7, apB: 7, mag: 18, ammo: ["556"], hands: 2 }),
  w("xl70e3", "XL70E3", "smallGuns", { value: 3000, weight: 9, minSt: 5, bonus: 12, rng: 35, apS: 5, apT: 6, apB: 6, mag: 24, ammo: ["5mm"], hands: 2 }),
  w("g11", "H&K G11", "smallGuns", { value: 8000, weight: 9, minSt: 4, bonus: 12, rng: 35, apS: 5, apT: 6, apB: 6, mag: 50, ammo: ["47-caseless"], hands: 2 }),

  // Big guns
  w("m2-minigun", "Browning M2 Minigun", "bigGuns", { value: 3000, weight: 40, minSt: 7, bonus: 8, rng: 20, apB: 7, mag: 50, ammo: ["50"], hands: 2 }),
  w("lewis", "Lewis MK II", "bigGuns", { value: 3400, weight: 30, minSt: 6, bonus: 10, rng: 30, apB: 6, mag: 50, ammo: ["308"], hands: 2 }),
  w("m60", "M60", "bigGuns", { value: 3500, weight: 26, minSt: 7, bonus: 18, rng: 35, apB: 6, mag: 50, ammo: ["762"], hands: 2 }),
  w("bren", "Bren Gun", "bigGuns", { value: 3500, weight: 28, minSt: 6, bonus: 12, rng: 12, apB: 6, mag: 45, ammo: ["308"], hands: 2 }),
  w("mg3", "MG3", "bigGuns", { value: 3600, weight: 30, minSt: 7, bonus: 15, rng: 10, apB: 6, mag: 50, ammo: ["762"], hands: 2 }),
  w("cz53", "CZ-53 Minigun", "bigGuns", { value: 3800, weight: 31, minSt: 7, bonus: 5, rng: 35, apB: 6, mag: 120, ammo: ["5mm"], hands: 2 }),
  w("m249", "M249 SAW", "bigGuns", { value: 4000, weight: 35, minSt: 7, bonus: 15, rng: 5, apB: 7, mag: 50, ammo: ["556"], hands: 2 }),
  w("lsw", "Light Support Weapon", "bigGuns", { value: 4750, weight: 22, minSt: 6, bonus: 20, rng: 40, apB: 6, mag: 30, ammo: ["223-fmj", "223-ap"], hands: 2 }),
  w("bozar", "Bozar", "bigGuns", { value: 5250, weight: 22, minSt: 6, bonus: 25, rng: 75, apB: 6, mag: 30, ammo: ["223-fmj", "223-ap"], hands: 2 }),
  w("avenger", "Avenger Minigun", "bigGuns", { value: 5500, weight: 31, minSt: 7, bonus: 10, rng: 40, apB: 6, mag: 120, ammo: ["5mm"], hands: 2 }),
  w("m2hb", "M2HB", "bigGuns", { value: 7500, weight: 60, minSt: 6, bonus: 20, rng: 140, apB: 7, mag: 100, ammo: ["50-bmg"], hands: 2, notes: "Tripod only." }),
  w("vindicator", "Vindicator Minigun", "bigGuns", { value: 15250, weight: 30, minSt: 7, bonus: 14, rng: 30, apB: 6, mag: 100, ammo: ["47-caseless"], hands: 2 }),
  w("m203", "M203 Grenade Launcher", "bigGuns", { value: 2000, weight: 16, minSt: 5, dmg: "ammo", rng: 20, apS: 5, mag: 1, ammo: ["40mm-frag", "40mm-plasma", "40mm-pulse"], hands: 2 }),
  w("law80", "LAW-80", "bigGuns", { value: 1900, weight: 14, minSt: 6, dmg: "6d8+30", rng: 60, apS: 6, mag: 1, hands: 2, notes: "Disposable." }),
  w("l72", "Rockwell L-72 Rocket Launcher", "bigGuns", { value: 2300, weight: 15, minSt: 6, dmg: "ammo", rng: 50, apS: 6, mag: 1, ammo: ["rocket-he", "rocket-ap", "rocket-emp"], hands: 2 }),
  w("flamethrower", "M9E1-7 Flamethrower", "bigGuns", { value: 2000, weight: 28, minSt: 6, dmg: "ammo", rng: 20, apS: 6, mag: 10, ammo: ["flamer-fire", "flamer-plasma"], hands: 2 }),

  // Energy
  w("wattz-1000", "Wattz 1000 Laser Pistol", "energyWeapons", { value: 1200, weight: 6, minSt: 3, dmg: "1d8+10", rng: 25, apS: 5, apT: 6, mag: 10, ammo: ["sec"] }),
  w("wattz-1600", "Wattz 1600 Laser Pistol", "energyWeapons", { value: 1400, weight: 7, minSt: 3, dmg: "1d12+10", rng: 35, apS: 5, apT: 6, mag: 12, ammo: ["sec"] }),
  w("solar-scorcher", "Solar Scorcher", "energyWeapons", { value: 2000, weight: 10, minSt: 4, dmg: "4d10+20", rng: 20, apS: 4, apT: 5, mag: 6, notes: "Recharges in sunlight." }),
  w("spasm-gun", "Spasm Gun", "energyWeapons", { value: 2200, weight: 5, minSt: 3, dmg: "2d20+12", rng: 15, apS: 4, apT: null, mag: 20, ammo: ["sec"], notes: "KO 1d10 rounds." }),
  w("plasma-pistol", "Glock 86 Plasma Pistol", "energyWeapons", { value: 2750, weight: 8, minSt: 4, dmg: "1d20+10", rng: 20, apS: 5, apT: 6, mag: 16, ammo: ["sec"] }),
  w("alien-blaster", "Alien Blaster", "energyWeapons", { value: 10000, weight: 29, minSt: 3, dmg: "5d10+30", rng: 10, apS: 4, apT: 5, mag: 10, ammo: ["sec"] }),
  w("yk32", "YK32 Pulse Pistol", "energyWeapons", { value: 12500, weight: 5, minSt: 3, dmg: "1d12+32", rng: 15, apS: 4, apT: 5, mag: 10, ammo: ["sec"] }),
  w("laser-carbine", "H&K 31415 Laser Carbine", "energyWeapons", { value: 3500, weight: 13, minSt: 6, dmg: "2d12+18", rng: 20, apS: 5, apT: 6, mag: 20, ammo: ["mfc"], hands: 2 }),
  w("p94", "Winchester P94 Plasma Rifle", "energyWeapons", { value: 4000, weight: 17, minSt: 6, dmg: "2d20+25", rng: 25, apS: 5, apT: 6, mag: 10, ammo: ["mfc"], hands: 2 }),
  w("wattz-2500", "Wattz 2500 Laser Rifle", "energyWeapons", { value: 4500, weight: 9, minSt: 4, dmg: "2d8+15", rng: 25, apS: 5, apT: 6, mag: 15, ammo: ["mfc"], hands: 2 }),
  w("wattz-3120", "Wattz 3120b Laser Rifle", "energyWeapons", { value: 5000, weight: 7, minSt: 4, dmg: "2d12+23", rng: 35, apS: 5, apT: 6, mag: 20, ammo: ["mfc"], hands: 2 }),
  w("turbo-plasma", "Turbo Plasma Rifle", "energyWeapons", { value: 10000, weight: 17, minSt: 6, dmg: "2d20+30", rng: 35, apS: 5, apT: 6, mag: 10, ammo: ["mfc"], hands: 2 }),
  w("yk42b", "YK42b Pulse Rifle", "energyWeapons", { value: 17500, weight: 14, minSt: 3, dmg: "2d12+54", rng: 30, apS: 5, apT: 6, mag: 15, ammo: ["mfc"], hands: 2 }),
  w("gatling-laser", "Gatling Laser", "energyWeapons", { value: 7500, weight: 29, minSt: 6, dmg: "1d20+20", rng: 40, apB: 6, mag: 30, ammo: ["mfc"], hands: 2 }),

  // Throwing
  w("throwing-knife", "Throwing Knife", "throwing", { value: 100, weight: 1, minSt: 2, dmg: "1d6+MD", rng: 10, apS: 4, apT: 5 }),
  w("throwing-stars", "Throwing Stars", "throwing", { value: 30, weight: 1, minSt: 1, dmg: "1d6", rng: 15, apS: 3, apT: 4 }),
  w("chakram", "Chakram", "throwing", { value: 45, weight: 1, minSt: 1, dmg: "1d20", rng: 10, apS: 4, apT: 5 }),
  w("boomerang", "Boomerang", "throwing", { value: 15, weight: 1, minSt: 5, dmg: "2d10+MD", rng: 20, apS: 4, apT: 5 }),
  w("molotov", "Molotov Cocktail", "throwing", { value: 50, weight: 1, minSt: 3, dmg: "1d12+8", rng: 12, apS: 5, apT: null }),
  w("frag-grenade", "Fragmentation Grenade", "throwing", { value: 150, weight: 1, minSt: 3, dmg: "1d12+22", rng: 15, apS: 5, apT: null }),
  w("plasma-grenade", "Plasma Grenade", "throwing", { value: 300, weight: 1, minSt: 4, dmg: "5d10+40", rng: 15, apS: 5, apT: null }),
  w("pulse-grenade", "Pulse Grenade", "throwing", { value: 300, weight: 1, minSt: 4, dmg: "5d10+100", rng: 15, apS: 5, apT: null, notes: "Electronics only." }),
  w("incendiary-grenade", "Incendiary Grenade", "throwing", { value: 300, weight: 1, minSt: 4, dmg: "1d12+22+fire", rng: 15, apS: 5, apT: null }),
  w("smoke-grenade", "Smoke Grenade", "throwing", { value: 140, weight: 1, minSt: 4, dmg: "none", rng: 15, apS: 4, apT: null }),
  w("flash-grenade", "Flash Grenade", "throwing", { value: 300, weight: 1, minSt: 4, dmg: "special", rng: 15, apS: 5, apT: null }),

  // Ammo
  ammo("bbs", "BBs", { value: 100, vol: 100, dmg: "1d4", weight: 1 }),
  ammo("arrow", "Arrow", { value: 5, vol: 5, dmg: "1d4", weight: 1 }),
  ammo("dart", "Dart", { value: 5, vol: 5, dmg: "1d3", weight: 1 }),
  ammo("bolt", "Bolt", { value: 5, vol: 5, dmg: "1d6", weight: 1 }),
  ammo("spear-bolt", "Speargun Bolt", { value: 5, vol: 1, dmg: "3d4", acMod: -10, weight: 1 }),
  ammo("rock-ammo", "Sling Stone", { value: 0, vol: 10, dmg: "1d10", weight: 1 }),
  ammo("22", ".22", { value: 150, vol: 50, dmg: "1d6", weight: 1 }),
  ammo("223-fmj", ".223 FMJ", { value: 400, vol: 20, dmg: "1d10", drMod: -10, weight: 1 }),
  ammo("223-ap", ".223 AP", { value: 400, vol: 20, dmg: "1d6", acMod: -15, ignoreDt: true, weight: 1 }),
  ammo("308", ".308", { value: 400, vol: 50, dmg: "1d10", acMod: -15, drMod: -20, weight: 2 }),
  ammo("357", ".357 Magnum", { value: 150, vol: 50, dmg: "1d6", acMod: -10, drMod: -10, weight: 1 }),
  ammo("38", ".38 Caliber", { value: 100, vol: 10, dmg: "1d6", weight: 1 }),
  ammo("44-jhp", ".44 Magnum JHP", { value: 200, vol: 20, dmg: "1d8", drMod: -10, weight: 1 }),
  ammo("44-ap", ".44 Magnum AP", { value: 250, vol: 20, dmg: "1d6", acMod: -10, ignoreDt: true, weight: 1 }),
  ammo("45", ".45 Caliber", { value: 150, vol: 50, dmg: "1d6", drMod: -5, weight: 1 }),
  ammo("50", ".50", { value: 800, vol: 100, dmg: "1d8", acMod: -10, drMod: -10, weight: 4 }),
  ammo("50-bmg", ".50 BMG", { value: 1000, vol: 100, dmg: "1d6", acMod: -10, drMod: -20, weight: 5 }),
  ammo("12g-buck", "12 Gauge Buckshot", { value: 150, vol: 20, dmg: "1d10", weight: 2 }),
  ammo("12g-slug", "12 Gauge Slug", { value: 150, vol: 20, dmg: "1d8", weight: 2 }),
  ammo("12g-emp", "12 Gauge EMP", { value: 500, vol: 20, dmg: "2d20", weight: 2, notes: "Non-biological." }),
  ammo("12g-rubber", "12 Gauge Rubber", { value: 100, vol: 20, dmg: "1d4", weight: 2 }),
  ammo("2mm-ec", "2mm EC", { value: 2000, vol: 20, dmg: "1d10", acMod: -20, drMod: -20, weight: 1 }),
  ammo("47-caseless", "4.7mm Caseless", { value: 1000, vol: 20, dmg: "1d10", acMod: -10, drMod: -10, weight: 1 }),
  ammo("5mm", "5mm", { value: 500, vol: 50, dmg: "1d8", weight: 1 }),
  ammo("545", "5.45mm", { value: 550, vol: 50, dmg: "1d8", weight: 1 }),
  ammo("556", "5.56mm", { value: 600, vol: 50, dmg: "1d8", drMod: -20, weight: 1 }),
  ammo("762", "7.62mm", { value: 300, vol: 50, dmg: "1d10", weight: 2 }),
  ammo("765", "7.65mm", { value: 300, vol: 50, dmg: "1d8", weight: 1 }),
  ammo("9mm-jhp", "9mm JHP", { value: 200, vol: 20, dmg: "1d6", drMod: -10, weight: 1 }),
  ammo("9mm-ap", "9mm AP", { value: 250, vol: 20, dmg: "1d4", acMod: -10, ignoreDt: true, weight: 1 }),
  ammo("9mm-ball", "9mm Ball", { value: 300, vol: 20, dmg: "1d6", drMod: -10, weight: 1 }),
  ammo("10mm-jhp", "10mm JHP", { value: 300, vol: 20, dmg: "1d6", drMod: -10, weight: 1 }),
  ammo("10mm-ap", "10mm AP", { value: 350, vol: 20, dmg: "1d4", acMod: -10, ignoreDt: true, weight: 1 }),
  ammo("14mm-jhp", "14mm JHP", { value: 1000, vol: 20, dmg: "1d10", drMod: -20, weight: 1 }),
  ammo("14mm-ap", "14mm AP", { value: 1200, vol: 20, dmg: "1d8", acMod: -20, ignoreDt: true, weight: 1 }),
  ammo("hn-needler", "HN Needler", { value: 1500, vol: 10, dmg: "3d10", weight: 1 }),
  ammo("hn-ap", "HN Needler AP", { value: 2000, vol: 10, dmg: "2d8", ignoreDt: true, weight: 1 }),
  ammo("hn-poison", "HN Needler Poison", { value: 2300, vol: 10, dmg: "poison G", weight: 1 }),
  ammo("hn-bio", "HN Needler Biotoxin", { value: 4000, vol: 10, dmg: "1d10/rd ×10", weight: 1 }),
  ammo("40mm-frag", "40mm Frag Grenade", { value: 1000, vol: 5, dmg: "1d12+22", weight: 2 }),
  ammo("40mm-plasma", "40mm Plasma Grenade", { value: 2000, vol: 5, dmg: "5d10+40", weight: 2 }),
  ammo("40mm-pulse", "40mm Pulse Grenade", { value: 2000, vol: 5, dmg: "5d10+100", weight: 2 }),
  ammo("rocket-he", "Rocket (HE)", { value: 2000, vol: 10, dmg: "6d8", weight: 3 }),
  ammo("rocket-ap", "Rocket (AP)", { value: 2500, vol: 10, dmg: "6d6", acMod: -10, ignoreDt: true, weight: 3 }),
  ammo("rocket-emp", "Rocket (EMP)", { value: 3000, vol: 10, dmg: "3d20", weight: 3 }),
  ammo("flamer-fire", "Flamer Fire Pack", { value: 2000, vol: 10, dmg: "3d8+fire", drMod: -10, weight: 8 }),
  ammo("flamer-plasma", "Flamer Plasma Pack", { value: 3000, vol: 10, dmg: "5d10+40", acMod: -10, drMod: -10, weight: 8 }),
  ammo("sec", "Small Energy Cell", { value: 2000, vol: 20, weight: 1, notes: "Recharges energy pistols and power fists." }),
  ammo("mfc", "Micro Fusion Cell", { value: 2000, vol: 20, weight: 2, notes: "Recharges energy rifles." }),

  // Armor
  arm("robe", "Robe", { value: 90, weight: 10, pnpAc: 5, resists: { n: r(0, 20), l: r(0, 25), f: r(0, 10), p: r(0, 10), e: r(0, 10) } }),
  arm("leather-jacket", "Leather Jacket", { value: 250, weight: 5, pnpAc: 8, resists: { n: r(0, 20), l: r(0, 20), f: r(0, 10), p: r(0, 10), e: r(0, 20) } }),
  arm("leather-armor", "Leather Armor", { value: 700, weight: 8, pnpAc: 15, resists: { n: r(2, 25), l: r(0, 20), f: r(0, 20), p: r(0, 10), e: r(0, 20) } }),
  arm("raider-armor", "Raider Armor", { value: 700, weight: 10, pnpAc: 8, resists: { n: r(2, 25), l: r(0, 25), f: r(0, 15), p: r(0, 25), e: r(0, 20) } }),
  arm("vandal-armor", "Vandal Armor", { value: 800, weight: 25, pnpAc: 15, resists: { n: r(3, 25), l: r(1, 30), f: r(1, 17), p: r(1, 30), e: r(1, 25) } }),
  arm("bos-leather", "Brotherhood Leather Armor", { value: 900, weight: 10, pnpAc: 15, resists: { n: r(2, 25), l: r(0, 25), f: r(0, 15), p: r(0, 25), e: r(0, 20) } }),
  arm("combat-jacket", "Combat Leather Jacket", { value: 1000, weight: 7, pnpAc: 20, resists: { n: r(2, 30), l: r(0, 20), f: r(2, 25), p: r(0, 10), e: r(0, 20) } }),
  arm("leather-mk2", "Leather Armor MK II", { value: 1000, weight: 10, pnpAc: 20, resists: { n: r(3, 25), l: r(1, 30), f: r(1, 17), p: r(1, 30), e: r(1, 25) } }),
  arm("bos-leather-mk2", "Brotherhood Leather MK II", { value: 1100, weight: 11, pnpAc: 23, resists: { n: r(3, 30), l: r(1, 25), f: r(1, 30), p: r(1, 15), e: r(1, 30) } }),
  arm("metal-armor", "Metal Armor", { value: 1100, weight: 35, pnpAc: 10, sneakPen: 25, resists: { n: r(4, 30), l: r(6, 75), f: r(4, 10), p: r(4, 20), e: r(4, 25) } }),
  arm("reaver-banding", "Reaver Banding", { value: 1200, weight: 10, pnpAc: 20, resists: { n: r(4, 30), l: r(3, 40), f: r(1, 40), p: r(3, 20), e: r(3, 30) } }),
  arm("bos-metal", "Brotherhood Metal Armor", { value: 1500, weight: 35, pnpAc: 15, sneakPen: 25, resists: { n: r(4, 30), l: r(3, 37), f: r(4, 15), p: r(3, 37), e: r(4, 25) } }),
  arm("metal-mk2", "Metal Armor MK II", { value: 1900, weight: 35, pnpAc: 15, sneakPen: 20, resists: { n: r(4, 35), l: r(7, 80), f: r(4, 15), p: r(4, 25), e: r(4, 30) } }),
  arm("greater-banding", "Greater Banding", { value: 2200, weight: 18, pnpAc: 25, sneakPen: 15, resists: { n: r(5, 50), l: r(2, 40), f: r(4, 30), p: r(3, 30), e: r(5, 60) } }),
  arm("tesla", "Tesla Armor", { value: 4500, weight: 35, pnpAc: 15, sneakPen: 20, resists: { n: r(4, 20), l: r(19, 90), f: r(4, 10), p: r(10, 80), e: r(4, 20) } }),
  arm("bos-tesla", "Brotherhood Tesla Armor", { value: 4800, weight: 35, pnpAc: 15, sneakPen: 20, resists: { n: r(4, 20), l: r(15, 85), f: r(7, 45), p: r(15, 85), e: r(4, 20) } }),
  arm("bos-combat", "Brotherhood Combat Armor", { value: 4800, weight: 25, pnpAc: 20, includesHelmet: true, radBonus: 20, resists: { n: r(8, 40), l: r(8, 70), f: r(7, 50), p: r(7, 60), e: r(8, 40) } }),
  arm("rad-suit", "Radiation Suit", { value: 5000, weight: 20, pnpAc: 15, radBonus: 100, gas: "100/100", sneakPen: 30, notes: "No helmet.", resists: { n: r(4, 30), l: r(0, 30), f: r(10, 60), p: r(0, 20), e: r(4, 40) } }),
  arm("combat-armor", "Combat Armor", { value: 6500, weight: 20, pnpAc: 20, includesHelmet: true, radBonus: 20, resists: { n: r(5, 40), l: r(8, 60), f: r(4, 30), p: r(4, 50), e: r(6, 40) } }),
  arm("combat-mk2", "Combat Armor MK II", { value: 8000, weight: 20, pnpAc: 25, includesHelmet: true, radBonus: 20, resists: { n: r(6, 40), l: r(6, 65), f: r(5, 35), p: r(5, 50), e: r(9, 45) } }),
  arm("bos-env", "Brotherhood Environmental Armor", { value: 9000, weight: 30, pnpAc: 18, includesHelmet: true, radBonus: 60, poisonBonus: 50, gas: "100/100", sneakPen: 50, resists: { n: r(5, 40), l: r(5, 55), f: r(4, 40), p: r(5, 55), e: r(6, 40) } }),
  arm("chitin", "Pseudo-Chitin Armor", { value: 10000, weight: 20, pnpAc: 30, radBonus: 20, notes: "No helmet.", resists: { n: r(10, 50), l: r(4, 20), f: r(10, 60), p: r(4, 20), e: r(5, 50) } }),
  arm("power-armor", "Power Armor", { value: 12500, weight: 35, pnpAc: 25, includesHelmet: true, strBonus: 3, radBonus: 30, poisonBonus: 15, gas: "100/100", sneakPen: 75, resists: { n: r(12, 40), l: r(18, 80), f: r(12, 60), p: r(10, 40), e: r(20, 50) } }),
  arm("hardened-pa", "Hardened Power Armor", { value: 15000, weight: 50, pnpAc: 25, includesHelmet: true, strBonus: 3, radBonus: 30, poisonBonus: 15, gas: "100/100", sneakPen: 75, resists: { n: r(13, 50), l: r(19, 90), f: r(14, 70), p: r(13, 50), e: r(20, 60) } }),
  arm("bos-pa", "Brotherhood Power Armor", { value: 17000, weight: 42, pnpAc: 28, includesHelmet: true, strBonus: 3, pePenalty: 1, radBonus: 30, poisonBonus: 15, gas: "100/100", sneakPen: 75, resists: { n: r(13, 50), l: r(16, 70), f: r(13, 60), p: r(16, 70), e: r(20, 60) } }),
  arm("bos-apa", "Brotherhood Advanced Power Armor", { value: 20000, weight: 50, pnpAc: 35, includesHelmet: true, strBonus: 4, pePenalty: 2, radBonus: 60, poisonBonus: 20, gas: "100/100", sneakPen: 75, resists: { n: r(18, 55), l: r(17, 75), f: r(15, 65), p: r(17, 75), e: r(20, 65) } }),
  arm("apa", "Advanced Power Armor", { value: 20000, weight: 30, pnpAc: 30, includesHelmet: true, strBonus: 4, radBonus: 60, poisonBonus: 20, gas: "100/100", sneakPen: 75, notes: "Night vision.", resists: { n: r(15, 55), l: r(19, 90), f: r(16, 70), p: r(15, 60), e: r(20, 65) } }),
  arm("apa-mk2", "Advanced Power Armor MK II", { value: 35000, weight: 50, pnpAc: 35, includesHelmet: true, strBonus: 4, radBonus: 75, poisonBonus: 40, gas: "100/100", sneakPen: 75, notes: "Night vision.", resists: { n: r(18, 60), l: r(19, 90), f: r(16, 70), p: r(18, 60), e: r(20, 70) } }),

  helm("leather-cap", "Leather Cap", { value: 90, weight: 1, pnpAc: 3 }),
  helm("metal-helmet", "Metal Helmet", { value: 200, weight: 3, pnpAc: 6 }),
  helm("combat-helmet", "Combat Helmet", { value: 500, weight: 3, pnpAc: 9 }),
  helm("env-helmet", "Environmental Helmet", { value: 900, weight: 4, pnpAc: 11, gas: "100/10" }),
  helm("pa-helmet", "Power Armor Helmet", { value: 1500, weight: 5, pnpAc: 13, gas: "100/20" }),

  // Chems / aid
  chem("stimpak", "Stimpak", { value: 175, weight: 1, pocket: "aid", notes: "Heal 1d10+10 HP." }),
  chem("super-stimpak", "Super Stimpak", { value: 225, weight: 1, pocket: "aid", notes: "Heal 4d10+20 now, −1d10 after an hour." }),
  chem("healing-powder", "Healing Powder", { value: 25, weight: 1, pocket: "aid", notes: "Heal 1d10. −1 PE for a day." }),
  chem("first-aid-kit", "First Aid Kit", { value: 200, weight: 2, pocket: "aid", notes: "+20% First Aid while used." }),
  chem("doctors-bag", "Doctor's Bag", { value: 300, weight: 5, pocket: "aid", notes: "+20% Doctor while used." }),
  chem("radaway", "RadAway", { value: 500, weight: 1, notes: "Remove 1d10+15 rads." }),
  chem("rad-x", "Rad-X", { value: 300, weight: 1, notes: "+50% radiation resistance for a day." }),
  chem("antidote", "Antidote", { value: 150, weight: 1, notes: "Clears poison." }),
  chem("buffout", "Buffout", { value: 200, weight: 1, notes: "+2 STR, +2 EN, +3 AG for a few hours. Addiction." }),
  chem("mentats", "Mentats", { value: 200, weight: 1, notes: "+2 IN, +2 PE, +1 CH. Addiction." }),
  chem("psycho", "Psycho", { value: 400, weight: 1, notes: "+3 DT, +25% DR. Addiction." }),
  chem("jet", "Jet", { value: 50, weight: 1, notes: "+2 AP for a short fight. Highly addictive." }),
  chem("afterburner", "After Burner Gum", { value: 100, weight: 1, notes: "Jet + Mentats hybrid. Crash later." }),

  // Gear
  gear("flare", "Flare", { value: 10, weight: 1, pocket: "quick", notes: "One hour of light." }),
  gear("lighter", "Lighter", { value: 10, weight: 1, pocket: "quick" }),
  gear("flashlight", "Flashlight", { value: 15, weight: 1, pocket: "quick", notes: "~30 hours on a cell." }),
  gear("rope", "Rope (10 m)", { value: 25, weight: 10 }),
  gear("lockpick", "Lockpick", { value: 40, weight: 1, pocket: "quick", notes: "+50% vs basic locks." }),
  gear("lockpick-set", "Expanded Lockpick Set", { value: 150, weight: 1, notes: "+70% Lockpick." }),
  gear("electronic-lockpick", "Electronic Lockpick", { value: 400, weight: 1, notes: "Required for electronic locks." }),
  gear("tool-set", "Tool Set", { value: 50, weight: 15, notes: "Basic repairs." }),
  gear("super-tool-kit", "Super Tool Kit", { value: 400, weight: 10, notes: "+20% Repair." }),
  gear("boots", "Boots", { value: 80, weight: 5 }),
  gear("gas-mask", "Gas Mask", { value: 150, weight: 3, notes: "100/0 gas resistance." }),
  gear("geiger", "Geiger Counter", { value: 400, weight: 4, notes: "Detects rads." }),
  gear("motion-sensor", "Motion Sensor", { value: 800, weight: 5, notes: "Detects movement." }),
  gear("stealth-boy", "Stealth Boy", { value: 1800, weight: 3, pocket: "quick", notes: "+20% Sneak while active. Limited charges." }),
  gear("binoculars", "Binoculars", { value: 150, weight: 2 }),
  gear("radio", "Two-way Radio", { value: 200, weight: 3 }),
  gear("water-flask", "Water Flask", { value: 5, weight: 3, pocket: "aid" }),
  gear("backpack", "Backpack", { value: 50, weight: 3, notes: "Does not add carry; organizes pack." }),
  gear("watch", "Wrist Watch", { value: 20, weight: 0 }),
  gear("dynamite", "Dynamite", { value: 250, weight: 2, pocket: "quick", notes: "Timed explosive." }),
  gear("plastic-ex", "Plastic Explosives", { value: 400, weight: 2, pocket: "quick" }),
  gear("timer", "Timer", { value: 100, weight: 1 }),
  gear("detonator", "Remote Detonator", { value: 200, weight: 1 }),
  gear("book-guns", "Guns and Bullets", { value: 400, weight: 1, notes: "Read to raise Small Guns." }),
  gear("book-first-aid", "First Aid Book", { value: 200, weight: 1 }),
  gear("book-science", "Big Book of Science", { value: 400, weight: 2 }),
  gear("book-repair", "Dean's Electronics", { value: 400, weight: 2 }),
  gear("book-outdoors", "Scout Handbook", { value: 200, weight: 1 }),

  chem("nuka-cola", "Nuka-Cola", { value: 8, weight: 1, pocket: "aid", notes: "+1 AP this fight. Sugar crash later." }),
  chem("beer", "Beer", { value: 5, weight: 1, notes: "−1 PE, +1 CH for an hour." }),
  chem("booze", "Booze", { value: 50, weight: 1, notes: "−1 PE, −1 AG, +2 CH. Hangover." }),
  chem("cigarettes", "Cigarettes", { value: 20, weight: 1, notes: "A pack. No mechanical bonus." }),
  chem("fruit", "Fruit", { value: 10, weight: 1, pocket: "aid", notes: "A day's calories if you trust it." }),
  chem("iguana-stick", "Iguana-on-a-stick", { value: 8, weight: 1, pocket: "aid", notes: "Food. Don't ask which end was the head." }),
  chem("mutie", "Mutie", { value: 100, weight: 1, notes: "Random SPECIAL swing. Rarely worth it." }),
  gear("bottle-caps", "Bottle Caps (10)", { value: 10, weight: 0, notes: "Wasteland cash." }),
  gear("holodisk", "Holodisk", { value: 50, weight: 1 }),
  gear("matches", "Matches", { value: 5, weight: 0, pocket: "quick" }),
  gear("compass", "Compass", { value: 40, weight: 1 }),
  gear("local-map", "Local Map", { value: 25, weight: 0 }),
  gear("sleeping-bag", "Sleeping Bag", { value: 40, weight: 5 }),
  arm("clothes", "Clothes", { value: 20, weight: 2, pnpAc: 0, resists: { n: r(0, 0), l: r(0, 0), f: r(0, 0), p: r(0, 0), e: r(0, 0) } }),

  exp("t13-mine", "T13 Antipersonnel Mine", { value: 1000, weight: 3, dmg: "1d20+20" }),
  exp("t45-mine", "T45-SE Antivehicle Mine", { value: 1500, weight: 5, dmg: "3d20+20" }),
];

const BY_ID = new Map(CATALOG.map((i) => [i.id, i]));

export function getItem(id: string): CatalogItem | undefined {
  return BY_ID.get(id);
}

export function d20ArmorAc(pnpAc: number): number {
  return Math.round(pnpAc / 5);
}

export function armorAcFor(item: CatalogItem, engine: EngineId): number {
  const pnp = item.pnpAc ?? 0;
  return engine === "pnp" ? pnp : d20ArmorAc(pnp);
}

export function formatDamage(item: CatalogItem, engine: EngineId): string {
  if (item.dmg) return item.dmg;
  if (typeof item.bonus === "number") {
    const ammo = item.ammo?.[0];
    const a = ammo ? getItem(ammo) : undefined;
    const base = a?.dmg ?? "ammo";
    return engine === "pnp" || engine === "d20"
      ? `${base}${item.bonus >= 0 ? "+" : ""}${item.bonus}`
      : base;
  }
  return "—";
}

export function defaultAddQty(item: CatalogItem): number {
  if (item.kind === "ammo") return item.vol && item.vol > 0 ? item.vol : 20;
  if (item.kind === "explosive") return 1;
  return 1;
}

export function kindLabel(kind: ItemKind): string {
  switch (kind) {
    case "weapon":
      return "Weapon";
    case "armor":
      return "Armor";
    case "helmet":
      return "Helmet";
    case "ammo":
      return "Ammo";
    case "chem":
      return "Chem";
    case "gear":
      return "Gear";
    case "explosive":
      return "Explosive";
  }
}

export function resistLine(item: CatalogItem): string | null {
  if (!item.resists) return null;
  const { n, l, f, p, e } = item.resists;
  return `N ${n.dt}/${n.dr}  L ${l.dt}/${l.dr}  F ${f.dt}/${f.dr}  P ${p.dt}/${p.dr}  E ${e.dt}/${e.dr}`;
}

export function describeItem(item: CatalogItem, engine: EngineId): string {
  const bits: string[] = [];
  if (item.kind === "weapon") {
    bits.push(formatDamage(item, engine));
    if (item.rng) bits.push(`rng ${item.rng}`);
    const ap = [item.apS, item.apT, item.apB]
      .map((n) => (n == null ? "—" : String(n)))
      .join("/");
    if (item.apS || item.apT || item.apB) bits.push(`AP ${ap}`);
    if (item.mag) bits.push(`mag ${item.mag}`);
    bits.push(`${item.hands}H`);
    bits.push(`ST ${item.minSt}`);
  }
  if (item.kind === "armor" || item.kind === "helmet") {
    const ac = armorAcFor(item, engine);
    bits.push(engine === "pnp" ? `AC ${ac}%` : `AC ${ac}`);
    if (item.resists) bits.push(`DT ${item.resists.n.dt} / DR ${item.resists.n.dr}%`);
    if (item.strBonus) bits.push(`STR +${item.strBonus}`);
  }
  if (item.kind === "ammo" && item.dmg) bits.push(item.dmg);
  bits.push(`${item.weight} lb`);
  bits.push(`${item.value} cap`);
  return bits.join(" · ");
}

export const CATEGORIES: { id: string; label: string; test: (i: CatalogItem) => boolean }[] = [
  { id: "all", label: "All", test: () => true },
  { id: "weapons", label: "Weapons", test: (i) => i.kind === "weapon" },
  { id: "unarmed", label: "Unarmed", test: (i) => i.skill === "unarmed" },
  { id: "melee", label: "Melee", test: (i) => i.skill === "meleeWeapons" },
  { id: "small", label: "Small guns", test: (i) => i.skill === "smallGuns" },
  { id: "big", label: "Big guns", test: (i) => i.skill === "bigGuns" },
  { id: "energy", label: "Energy", test: (i) => i.skill === "energyWeapons" },
  { id: "throw", label: "Thrown", test: (i) => i.skill === "throwing" },
  { id: "armor", label: "Armor", test: (i) => i.kind === "armor" || i.kind === "helmet" },
  { id: "ammo", label: "Ammo", test: (i) => i.kind === "ammo" },
  { id: "chems", label: "Chems", test: (i) => i.kind === "chem" },
  { id: "gear", label: "Gear", test: (i) => i.kind === "gear" || i.kind === "explosive" },
];

export interface Kit {
  id: string;
  name: string;
  pitch: string;
  items: Array<{ itemId: string; qty: number }>;
}

export const KITS: Kit[] = [
  {
    id: "wastelander",
    name: "Wastelander kit",
    pitch: "A knife, a jacket, a 10mm, and two stimpaks.",
    items: [
      { itemId: "knife", qty: 1 },
      { itemId: "leather-jacket", qty: 1 },
      { itemId: "10mm-pistol", qty: 1 },
      { itemId: "10mm-jhp", qty: 24 },
      { itemId: "stimpak", qty: 2 },
      { itemId: "lighter", qty: 1 },
      { itemId: "water-flask", qty: 1 },
    ],
  },
  {
    id: "rifleman",
    name: "Rifle kit",
    pitch: "Leather armor, Rangemaster, a combat knife.",
    items: [
      { itemId: "combat-knife", qty: 1 },
      { itemId: "leather-armor", qty: 1 },
      { itemId: "hunting-rifle", qty: 1 },
      { itemId: "223-fmj", qty: 20 },
      { itemId: "stimpak", qty: 3 },
      { itemId: "binoculars", qty: 1 },
    ],
  },
  {
    id: "talker",
    name: "Talker kit",
    pitch: "A clean jacket, a light pistol, a lockpick.",
    items: [
      { itemId: "switchblade", qty: 1 },
      { itemId: "leather-jacket", qty: 1 },
      { itemId: "9mm-beretta", qty: 1 },
      { itemId: "9mm-jhp", qty: 18 },
      { itemId: "lockpick", qty: 1 },
      { itemId: "stimpak", qty: 1 },
    ],
  },
  {
    id: "medic",
    name: "Field medic kit",
    pitch: "Bags, stimpaks, RadAway. A pistol for the hallway.",
    items: [
      { itemId: "leather-jacket", qty: 1 },
      { itemId: "10mm-pistol", qty: 1 },
      { itemId: "10mm-jhp", qty: 12 },
      { itemId: "stimpak", qty: 6 },
      { itemId: "super-stimpak", qty: 1 },
      { itemId: "radaway", qty: 2 },
      { itemId: "doctors-bag", qty: 1 },
      { itemId: "first-aid-kit", qty: 1 },
    ],
  },
  {
    id: "brawler",
    name: "Brawler kit",
    pitch: "Spiked knuckles, a jacket, and enough stimpaks to keep swinging.",
    items: [
      { itemId: "spiked-knuckles", qty: 1 },
      { itemId: "leather-jacket", qty: 1 },
      { itemId: "leather-cap", qty: 1 },
      { itemId: "stimpak", qty: 4 },
      { itemId: "beer", qty: 2 },
      { itemId: "lighter", qty: 1 },
    ],
  },
];
