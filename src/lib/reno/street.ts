import type { BuildingUse, DistrictId, GangId, NpcMemory, StreetJob } from "./types";
import { DISTRICT_BY_ID, GANGS } from "./world";

export interface StreetNpc {
  id: string;
  name: string;
  role: "clerk" | "tout" | "soldato" | "lot" | "cop" | "courier" | "dealer" | "bartender" | "mechanic";
  district: DistrictId;
  shift: "day" | "night" | "any";
  beat: string;
  day: string;
  night: string;
  /** Building uses where this person is the one behind the door. */
  uses: BuildingUse[];
  job?: Omit<StreetJob, "stage" | "giver" | "from">;
}

export const STREET_NPCS: StreetNpc[] = [
  {
    id: "rita",
    name: "Rita Voss",
    role: "clerk",
    district: "motel",
    shift: "day",
    beat: "the Desert Rose desk",
    day: "Rita stamps a key and does not look up. The comic is the same one as yesterday.",
    night: "Rita's stool is empty. The night man counts the till twice.",
    uses: ["motel"],
    job: {
      id: "rita-key",
      title: "A key that is not a key",
      to: "salvatore",
      pay: 80,
      item: "a sealed room envelope",
      blurb: "Rita wants the envelope on Mason's bar. Do not open it.",
    },
  },
  {
    id: "calico",
    name: "Calico",
    role: "lot",
    district: "motel",
    shift: "night",
    beat: "the Rose stairs",
    day: "Calico sleeps somewhere that is not this lot.",
    night: "Calico holds the stairs. He taxes smiles and counts who came back.",
    uses: ["motel"],
  },
  {
    id: "lang",
    name: "Officer Lang",
    role: "cop",
    district: "virgin",
    shift: "any",
    beat: "the Virgin Street lamp",
    day: "Lang leans on a lamp and watches the neon like it owes him a donut.",
    night: "Lang is still there. The lamp is doing more work than he is.",
    uses: ["casino", "shop"],
    job: {
      id: "lang-witness",
      title: "A name for a blind eye",
      to: "bishop",
      pay: 60,
      item: "a folded witness slip",
      blurb: "Lang wants the slip on a Bishop desk. He did not see who you are.",
    },
  },
  {
    id: "jules",
    name: "Jules the Tout",
    role: "tout",
    district: "stables",
    shift: "any",
    beat: "the Ring rail",
    day: "Jules sells a purse that has not been printed yet.",
    night: "Jules is louder. The blood on the canvas is still wet.",
    uses: ["ring"],
    job: {
      id: "jules-purse",
      title: "Purse for a stranger",
      to: "virgin",
      pay: 70,
      item: "a fight card",
      blurb: "Drop the card with a Virgin Street floor man. Jules gets his cut either way.",
    },
  },
  {
    id: "mason",
    name: "Mason",
    role: "soldato",
    district: "salvatore",
    shift: "any",
    beat: "Salvatore's door",
    day: "Mason does not blink. The oxygen tank inside hisses like a second opinion.",
    night: "Mason is the door. The laser stays in the coat.",
    uses: ["bar", "office"],
  },
  {
    id: "eddie",
    name: "Eddie Cole",
    role: "soldato",
    district: "mordino",
    shift: "night",
    beat: "the Golden Globes alley",
    day: "Eddie is a rumor until the Jet moves.",
    night: "Eddie counts vials and does not count you.",
    uses: ["casino", "bar"],
    job: {
      id: "eddie-sample",
      title: "A sample that walks",
      to: "chop",
      pay: 140,
      item: "a Jet sample in a cigarette pack",
      blurb: "Eddie wants it at the Chop Shop loft. Not the Wrights. Not the street.",
    },
  },
  {
    id: "nia",
    name: "Nia Pell",
    role: "courier",
    district: "market",
    shift: "day",
    beat: "the east stalls",
    day: "Nia has three drops and one lie about which is which.",
    night: "Nia's bike is gone. The stall still smells like her cigarettes.",
    uses: ["shop", "pawn"],
    job: {
      id: "nia-drop",
      title: "Drop on Bishop's floor",
      to: "bishop",
      pay: 110,
      item: "a thin case",
      blurb: "Bishop offices. Hand it to a secretary. Do not explain the case.",
    },
  },
  {
    id: "wren",
    name: "Doc Wren",
    role: "dealer",
    district: "market",
    shift: "night",
    beat: "Catclaw, when the Strip is too bright",
    day: "Wren is a vacant sign until dark.",
    night: "Wren sells to people the families have not named yet.",
    uses: ["casino", "shack", "shop"],
    job: {
      id: "wren-buyer",
      title: "A buyer at the Spur",
      to: "desperado",
      pay: 95,
      item: "two Jet and a name",
      blurb: "The buyer is inside the Desperado, not on the curb.",
    },
  },
  {
    id: "han",
    name: "Mrs. Han",
    role: "clerk",
    district: "virgin",
    shift: "day",
    beat: "the walk-up stair",
    day: "Mrs. Han knows who paid rent and who is lying about it.",
    night: "Her window is dark. The stair still coughs.",
    uses: ["tenement", "office"],
  },
  {
    id: "bill",
    name: "Bill Wright",
    role: "soldato",
    district: "wright",
    shift: "any",
    beat: "the compound gate",
    day: "Bill has a shotgun and a story about Richard he will not finish.",
    night: "Bill is the gate. The stills smell sweet and wrong.",
    uses: ["warehouse", "motel"],
    job: {
      id: "bill-still",
      title: "A jug for the Jungle",
      to: "jungle",
      pay: 75,
      item: "a jug of Wright shine",
      blurb: "Leave it with whoever is awake in the Jungle. Do not drink the rent.",
    },
  },
  {
    id: "spike",
    name: "Spike",
    role: "mechanic",
    district: "chop",
    shift: "any",
    beat: "the bay door",
    day: "Spike's hands are black. The Chevy is not his. He will not say whose.",
    night: "The bay light is the only honest thing on the block.",
    uses: ["warehouse", "rail"],
  },
  {
    id: "pearl",
    name: "Pearl Quinn",
    role: "bartender",
    district: "desperado",
    shift: "night",
    beat: "the Desperado stick",
    day: "Pearl is off. The day man waters the whiskey.",
    night: "Pearl pours and listens. She sells what she hears to the second bidder.",
    uses: ["bar", "casino"],
  },
];

const FACTION_BEATS: Record<GangId, string[]> = {
  bishops: [
    "Bishop collectors walked the Strip. A tourist paid the smile tax and called it a tip.",
    "Sit-down at the Shark. The rail stayed empty. The boys did not.",
    "A Bishop errand went south of Second. By morning the curb was mopped.",
    "Bishop delivery off the rail. The paper did not have names. The crates did.",
  ],
  mordinos: [
    "Mordino runners moved Jet through the Globes. The walls smelled sweet.",
    "Little Jesus held a sit-down. Someone left without their cut.",
    "A Mordino hit was supposed to be quiet. The alley was not.",
    "Chem crates changed hands on Mordino Way. The courier did not look at faces.",
  ],
  salvatores: [
    "Mason turned three people away before noon. Salvatore did not come downstairs.",
    "A Salvatore sit-down with no raised voices. That is worse.",
    "Someone asked about the laser. They are not asking anymore.",
    "A quiet delivery to the bar. The box hummed. Nobody joked.",
  ],
  wrights: [
    "Wright cousins collected on stills. One cousin did not come back for supper.",
    "Orville's table. They said Richard's name once and then ate.",
    "A Wright warning got painted on a Mordino door. It will not stay painted.",
    "Shine left the compound in jugs. The Jungle will drink what the families will not.",
  ],
};

export function factionLine(gang: GangId, day: number): string {
  const lines = FACTION_BEATS[gang];
  return lines[Math.abs(day) % lines.length] ?? lines[0]!;
}

export function factionBrief(day: number, here: DistrictId): string[] {
  const lines: string[] = [];
  for (const g of GANGS) {
    const onTurf = g.turf === here;
    const featured = Math.abs(day + g.name.length) % 3 === 0;
    if (!onTurf && !featured) continue;
    const beat = factionLine(g.id, day + g.name.length);
    lines.push(onTurf ? `${beat} You are standing in it.` : beat);
  }
  return lines.slice(0, 3);
}

export function npcFor(district: DistrictId, night: boolean, use?: BuildingUse): StreetNpc {
  const shift = night ? "night" : "day";
  const pool = STREET_NPCS.filter((n) => n.district === district || (use && n.uses.includes(use)));
  const exact = pool.find((n) => (use ? n.uses.includes(use) : n.district === district) && (n.shift === "any" || n.shift === shift));
  if (exact) return exact;
  const any = pool.find((n) => n.shift === "any" || n.shift === shift);
  return any ?? pool[0] ?? STREET_NPCS[0]!;
}

export function remember(memory: Record<string, NpcMemory> | undefined, id: string): NpcMemory {
  return memory?.[id] ?? { mood: 0, last: "" };
}

export function roomCopy(use: BuildingUse, night: boolean, abandoned: boolean, name: string): { kicker: string; body: string } {
  if (abandoned) {
    return {
      kicker: "Inside the ruin",
      body: night
        ? `${name} is a dark room with a second dark room behind it. Something already knows you opened the door.`
        : `${name} in daylight is nails, a mattress, and a smell that did not leave with the tenants.`,
    };
  }
  const table: Record<BuildingUse, [string, string]> = {
    casino: [
      `${name} before the lamps earn their keep. A dealer practices with nobody watching.`,
      `${name} at night. Felt, smoke, a floor man who smiles with his teeth only.`,
    ],
    motel: [
      `The day hall at ${name}. Ice machine, a comic, a clerk who has heard every lie about a late checkout.`,
      `The lot is the business. ${name} after dark is keys, stairs, and a man who taxes both.`,
    ],
    tenement: [
      `Cooking that is not quite food. A radio. ${name} keeps its opinions in the stairwell.`,
      `Three windows lit. The rest of ${name} is a locked opinion.`,
    ],
    shop: [
      `${name} is open if the clerk is sober. Ammo under the glass. Rumors on top.`,
      `The shutter is half down. ${name} will still sell if you knock like you mean it.`,
    ],
    bar: [
      `Day drinkers and a rag on the stick. ${name} is honest until the families arrive.`,
      `${name} after dark. The regulars were here before you and plan to be here after.`,
    ],
    warehouse: [
      `Engines, tarps, a name sanded off a door. ${name} is working.`,
      `One bay light. ${name} does not like a second pair of eyes.`,
    ],
    shack: [
      `${name} is one room and a lean-to. Someone lives in both.`,
      `A fire-barrel and no questions. ${name} is smaller at night.`,
    ],
    abandoned: ["", ""],
    pawn: [
      `${name} buys what used to be someone else's. The shotgun is part of the counter.`,
      `Pawn light, green and mean. ${name} is still buying.`,
    ],
    ring: [
      `Sawdust. A heavy bag. ${name} smells like liniment and old tickets.`,
      `The canvas is up. ${name} pays the winner and bills the loser for the doctor.`,
    ],
    crypt: [
      `Daytime graves. ${name} pretends to be only stone.`,
      `${name} at night is not a place you tour.`,
    ],
    rail: [
      `Boxcars and a switch house. ${name} is a good place to hide product.`,
      `The yard is a dark grid. ${name} hides people worse than it hides crates.`,
    ],
    office: [
      `${name} has carpet and a secretary. The gun is in the drawer, not on the desk.`,
      `The polite floor stays lit. ${name} does not do night business with strangers.`,
    ],
    club: [
      `${name} in the afternoon is chairs on tables and a band that is not awake. The stage is a stage.`,
      `${name} after dark. A floor show, a horn, a minimum at the door. The highway people came for this and not for a room.`,
    ],
    gas: [
      `${name}. Two pumps, a dog, a clerk who can point at Reno and also point away from it.`,
      `${name} under a bulb. Travelers who will not give a name. The desert starts at the edge of the apron.`,
    ],
  };
  const pair = table[use] ?? table.tenement;
  return { kicker: night ? "Night inside" : "Day inside", body: night ? pair[1] : pair[0] };
}

export function districtName(id: DistrictId): string {
  return DISTRICT_BY_ID[id]?.name ?? id;
}
