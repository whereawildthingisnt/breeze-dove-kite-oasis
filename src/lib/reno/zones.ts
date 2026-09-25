import type { BuildingUse, EncounterSetting, GangId, ZoneKind } from "./types";

export const ZONE_LABEL: Record<ZoneKind, string> = {
  strip: "The Strip",
  alley: "Side street",
  motel: "Motel row",
  residential: "Walk-ups",
  industrial: "Yards",
  compound: "Family turf",
  wild: "The edge",
  outskirts: "The outskirts",
};

export const ZONE_HINT: Record<ZoneKind, string> = {
  strip: "Casino mile. Beatings, not funerals. Tourist money.",
  alley: "Alleys. This is where families actually move.",
  motel: "Hourly beds. The lot after dark.",
  residential: "Walk-ups, coughs, locked opinions.",
  industrial: "Yards. Raiders after dusk.",
  compound: "Family turf. Knock first.",
  wild: "Deep desert. Hunger is real out here.",
  outskirts: "Unpowered edge. Kitchens stop. Thirst starts.",
};

export function zoneAt(x: number, z: number): ZoneKind {
  // Virgin Street is a mile of casinos. Check it before the desert radius eats the ends.
  if (Math.abs(z) < 18 && x > -820 && x < 860) return "strip";
  if (x * x + (z - 40) * (z - 40) > 340 * 340) return "wild";
  if (x > 148 && z > -28 && z < 120) return "outskirts";
  if (x < -108 && z > -28 && z < 78) return "outskirts";
  if (z > 138 || (x < -15 && z > 72 && x > -48)) return "wild";
  if (x < -58 && z > 82) return "compound";
  if (x > 88 && z > 68) return "industrial";
  if (Math.hypot(x - 18, z - 58) < 30) return "motel";
  if (z < -16 && z > -58 && x > 28 && x < 72) return "compound";
  if (x < -40 && z > 18 && z < 42) return "compound";
  if (Math.abs(z) < 44 && x > -88 && x < 148) return "alley";
  return "residential";
}

export function dangerOf(zone: ZoneKind, night: boolean): number {
  const table: Record<ZoneKind, [number, number]> = {
    strip: [1, 2],
    alley: [6, 8],
    motel: [3, 5],
    residential: [2, 4],
    industrial: [5, 7],
    compound: [3, 5],
    wild: [8, 10],
    outskirts: [4, 6],
  };
  return night ? table[zone][1] : table[zone][0];
}

export function encounterRate(zone: ZoneKind, night: boolean, heat: number, heatScale = 1): number {
  const base: Record<ZoneKind, number> = {
    strip: 3,
    alley: 30,
    motel: 14,
    residential: 8,
    industrial: 20,
    compound: 12,
    wild: 40,
    outskirts: 16,
  };
  const punch = heat >= 80 ? Math.floor((heat - 75) / 6) : 0;
  const n = base[zone] + Math.round((heat / 5) * heatScale) + punch + (night ? 8 : 0);
  if (zone === "strip") return Math.max(1, Math.min(8, n));
  return Math.max(4, Math.min(78, n));
}

export function settingFromZone(zone: ZoneKind, night: boolean): EncounterSetting {
  if (zone === "wild") return "crypt";
  if (zone === "outskirts") return night ? "motel" : "street";
  if (zone === "industrial") return "rail";
  if (zone === "motel") return "motel";
  if (zone === "compound") return night ? "casino" : "street";
  if (zone === "strip") return night ? "casino" : "street";
  if (zone === "alley") return "alley";
  return night ? "alley" : "street";
}

export function foePool(zone: ZoneKind, gang?: GangId, night?: boolean): string[] {
  if (zone === "wild") return ["ghoul", "mutant", "raider", "creep"];
  if (zone === "outskirts") return night ? ["pimp", "john", "dealer", "junkie", "drunk"] : ["tourist", "drunk", "dealer", "punk", "john"];
  if (zone === "industrial") return ["raider", "merc", "tough", "punk"];
  if (zone === "motel") return night ? ["pimp", "john", "dealer", "drunk"] : ["drunk", "john", "dealer"];
  if (zone === "strip") return night ? ["drunk", "cheat", "bouncer", "tough"] : ["tourist", "drunk", "cheat", "bouncer"];
  if (zone === "compound") {
    if (gang === "mordinos") return ["mordino", "dealer", "pimp"];
    if (gang === "wrights") return ["wright", "drunk", "tough"];
    if (gang === "salvatores") return ["salvatore", "bouncer", "merc"];
    if (gang === "bishops") return ["bishop", "bouncer", "tough"];
    return ["tough", "bouncer"];
  }
  if (zone === "alley") return ["junkie", "tough", "dealer", "punk", "creep", "pimp"];
  return ["drunk", "punk", "tough"];
}

const NAMES: Record<BuildingUse, string[]> = {
  casino: ["The Stag", "Pink Lady", "Atomic Eight", "Last Call", "Neon Saint", "House of Jacks", "Silver Tongue", "Two-Bit Palace", "The Lost Chip", "Spur Club", "Catclaw Casino"],
  motel: ["Hourly Palms", "Rose Annex", "The Flamingo cot", "Dust Beds", "Vacancy 4", "Catclaw Motor", "Lucky 8 Courts", "East Second beds", "Tin Roof Inn"],
  tenement: ["Cruz Walk-up", "12 Virgin stairs", "Mrs. Han rooms", "Back stair 9", "Water-stain flats"],
  shop: ["Ammo & Teeth", "Reno Dry Goods", "Second Chance hats", "Hubologist pamphlets", "NCR postcards"],
  bar: ["The Long Pour", "Mason's stool", "Blood & Seltzer", "After Hours"],
  warehouse: ["Stolen Chevys", "Boxcar 17", "Chop bay", "Unmarked crates"],
  shack: ["Tin roof 3", "Fire-barrel lean", "Someone's mattress"],
  abandoned: ["Boarded liquor", "Gutted pawn", "No-roof walk-up", "Condemned 8", "The black windows"],
  pawn: ["Easy Credit", "Guns for Teeth", "Uncle Lou's"],
  ring: ["The Ring"],
  crypt: ["Open grave", "Wright marker", "Glow pit"],
  rail: ["Boxcar row", "Switch house"],
  office: ["Bishop books", "Quiet floor"],
  club: ["Silver Slipper", "The Go-Go", "Mapes Floor", "Harold's Revue", "Neon Corral"],
  gas: ["Last Pump North", "South Cut Fuel", "East Grade", "West Dust Stop"],
};

const RUMOR: Record<BuildingUse, string[]> = {
  casino: ["They came in with clean boots. The felt will have the boots by midnight.", "A cheat got dragged out last night. The floor was mopped."],
  motel: ["Short stays. The train leaves. The bill stays with whoever works the desk.", "A pimp named Calico runs the back stairs. He taxes smiles."],
  tenement: ["Families, jet coughs, and a lock that is an opinion.", "Kids on the stair. Someone selling Jet out a window."],
  shop: ["Open if the clerk is sober. Closed if a family wants a quiet word."],
  bar: ["Regulars. Mason's type. Do not talk NCR unless you mean it."],
  warehouse: ["Engines, crates, and men who do not give names."],
  shack: ["Someone lives here. They will not share."],
  abandoned: ["Boarded. Squatters or raiders. The smell says both.", "Empty since the fire. The alley behind it is worse."],
  pawn: ["They buy anything that was someone else's."],
  ring: ["Sawdust and purses. The doctor only comes if you win."],
  crypt: ["Wright stones. Things that should stay buried do not."],
  rail: ["Boxcars. Good for hiding product. Bad for hiding from people."],
  office: ["Polite floor. Politics with a gun in the drawer."],
  club: ["A floor show, a band, and a minimum that is not a suggestion.", "Vegas lights on a Reno tab. The revue starts when the street gets dark."],
  gas: ["The last pumps before the sand. Travelers who are not staying."],
};

const PEOPLE: Record<BuildingUse, string[]> = {
  casino: ["Dealers, tourists, Bishop eyes.", "Floor men and a bouncer who used to box."],
  motel: ["Working girls on the lot after dusk. Johns in hats. A pimp on the stairs.", "Day clerk, night girls, and a floor man who does not look."],
  tenement: ["Families and a junkie on the first landing."],
  shop: ["A clerk and whoever is buying ammo today."],
  bar: ["Made men. Tourists who do not know it yet."],
  warehouse: ["Mechanics. Maybe Salvatore guns in a crate."],
  shack: ["Whoever did not make the Jungle's better shacks."],
  abandoned: ["Nobody who will talk. Something that will."],
  pawn: ["The owner and a shotgun under the counter."],
  ring: ["Palookas, touts, a doctor who bills the loser."],
  crypt: ["Ghouls. Wright mourners if you are unlucky."],
  rail: ["Hobos, runners, a family man who walks the other way."],
  office: ["Bishop secretaries and men in good coats."],
  club: ["A band, floor staff, and people in from the highway for the show."],
  gas: ["A clerk, a dog, and plates that are not from here."],
};

export function flavorFor(use: BuildingUse, abandoned: boolean, i: number): { name: string; rumor: string; people: string } {
  const names = NAMES[use];
  const rumors = RUMOR[use];
  const people = PEOPLE[use];
  return {
    name: abandoned ? (NAMES.abandoned[i % NAMES.abandoned.length] ?? "Boarded") : (names[i % names.length] ?? use),
    rumor: abandoned
      ? (RUMOR.abandoned[i % RUMOR.abandoned.length] ?? "Empty.")
      : (rumors[i % rumors.length] ?? ""),
    people: abandoned ? "Rats. Maybe worse." : (people[i % people.length] ?? ""),
  };
}

export function useFromSprite(sprite: string, neon?: boolean): BuildingUse {
  if (sprite.includes("neon-casino") || sprite.includes("casino")) return "casino";
  if (sprite.includes("motel")) return "motel";
  if (sprite.includes("pawn")) return "pawn";
  if (sprite.includes("shop")) return "shop";
  if (sprite.includes("warehouse") || sprite.includes("chop")) return "warehouse";
  if (sprite.includes("shack")) return "shack";
  if (sprite.includes("bar")) return "bar";
  if (sprite.includes("ring")) return "ring";
  if (sprite.includes("crypt")) return "crypt";
  if (sprite.includes("rail")) return "rail";
  if (sprite.includes("apartment") || sprite.includes("tenement")) return "tenement";
  if (neon) return "casino";
  return "tenement";
}

export function millLabel(use: BuildingUse, abandoned: boolean): string {
  if (abandoned) return "Search the ruin";
  if (use === "motel") return "Work the lot";
  if (use === "casino") return "Sit a table";
  if (use === "bar") return "Buy a drink";
  if (use === "shop" || use === "pawn") return "Browse";
  if (use === "tenement" || use === "shack") return "Knock";
  if (use === "warehouse" || use === "rail") return "Peek inside";
  if (use === "crypt") return "Walk the stones";
  if (use === "ring") return "Ask the tout";
  if (use === "office") return "Ask at the desk";
  if (use === "club") return "Buy a ticket";
  if (use === "gas") return "Fill up";
  return "Talk to locals";
}

const AMBIENT: Record<ZoneKind, { day: string[]; night: string[] }> = {
  strip: {
    day: [
      "A tourist photographs the neon like it is a monument.",
      "A guide with a laminated card quotes a price that is not the price.",
      "Hub money asks for the loud door. A local walks them there for a cut.",
    ],
    night: [
      "The train people are loud. The people who live here are working.",
      "An expat on last year's stool tells a new arrival the city is cheap.",
      "Neon paints the asphalt pink. Outside money argues with a lamp.",
    ],
  },
  alley: {
    day: [
      "Jet cough from a stairwell. Somebody sold something they did not own.",
      "A kid watches you from a fire escape and does not wave.",
    ],
    night: [
      "A knife taps a brick. Not for you. Not yet.",
      "The alley smells like Jet and a fight that already happened.",
      "A pimp counts stairs. A girl waits. You keep walking.",
    ],
  },
  motel: {
    day: [
      "A backpacker asks for the weekly rate and gets the tourist rate.",
      "Keys going out. Most of them will be back on the morning train.",
    ],
    night: [
      "Hourly keys. The clerk writes a name they will not remember.",
      "Calico's lot. Laughter, then a door, then quiet.",
      "A made man walks past the motel and looks at the sky instead.",
    ],
  },
  residential: {
    day: ["Laundry on a line that has seen better decades.", "A radio through a window. Someone cooking something that is not food."],
    night: ["Lights in three windows. The rest are opinions.", "A dog that is not a dog somewhere in the block."],
  },
  industrial: {
    day: ["Wrenches. Stolen Chevys. Names that are not on papers."],
    night: ["A yard light dies. Something uses the dark like a road."],
  },
  compound: {
    day: ["Family boys on a stoop. They know who you are not."],
    night: ["A cigarette on a rooftop. The family is still awake."],
  },
  wild: {
    day: ["The graves keep their own hours."],
    night: ["Something moves that should have stayed buried."],
  },
  outskirts: {
    day: [
      "A vacancy sign buzzes even in daylight. The pool is a rumor.",
      "Catclaw is the cheap version of the same weekend.",
      "Two-bit slots chatter through a screen door. Nobody who lives here is winning.",
      "Motel clerks watch the road like it owes them money.",
    ],
    night: [
      "Neon the size of a suitcase. A john argues with a room key.",
      "Catclaw after dark. Music from a tiny casino, then a door slam.",
      "The outskirts keep their lights low and their guns closer.",
    ],
  },
};

export function ambientLine(zone: ZoneKind, night: boolean, salt: number): string {
  const pool = night ? AMBIENT[zone].night : AMBIENT[zone].day;
  return pool[Math.abs(salt) % pool.length] ?? ZONE_HINT[zone];
}

export const KEY_LOCATIONS: Array<{ id: string; name: string; blurb: string }> = [
  { id: "virgin", name: "Virgin Street", blurb: "Outside money. Local cut." },
  { id: "shark", name: "Shark Club", blurb: "Bishop money. Angela upstairs." },
  { id: "desperado", name: "Desperado", blurb: "Mordino cards and blood." },
  { id: "motel", name: "Desert Rose", blurb: "Short stays. The train leaves." },
  { id: "mordino", name: "Golden Globes", blurb: "Jet in the walls." },
  { id: "salvatore", name: "Salvatore's Bar", blurb: "Old Reno. Quiet guns." },
  { id: "bishop", name: "Bishop offices", blurb: "The polite floor." },
  { id: "stables", name: "The Ring", blurb: "Boxing purses." },
  { id: "wright", name: "Wright compound", blurb: "Stills and a dead son." },
  { id: "jungle", name: "The Jungle", blurb: "Shacks the city pretends are not a city." },
  { id: "market", name: "East stalls", blurb: "Chems, ammo, rumors." },
  { id: "rail", name: "Rail yard", blurb: "Boxcars." },
  { id: "chop", name: "Chop Shop", blurb: "Stolen cars, lofts." },
  { id: "golgotha", name: "Golgotha", blurb: "Graves." },
];
