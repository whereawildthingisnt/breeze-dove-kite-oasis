import type { Dealer, GangId, Mark, RenoLife } from "./types";

export type { Dealer };

export function seedDealers(): Dealer[] {
  return [
    {
      id: "myron-boy",
      name: "Stables runner",
      district: "mordino",
      gang: "mordinos",
      wares: ["jet", "psycho"],
      size: "house",
      note: "Myron's product. Little Jesus takes a cut. Volume.",
    },
    {
      id: "globes-girl",
      name: "Golden Globes door",
      district: "mordino",
      gang: "mordinos",
      wares: ["jet", "cocaine"],
      size: "house",
      note: "Chems in the walls. You do not ask whose lungs.",
    },
    {
      id: "desperado-felt",
      name: "Desperado floor man",
      district: "desperado",
      gang: "mordinos",
      wares: ["jet", "cocaine", "vodka"],
      size: "corner",
      note: "Cards in front. Bags in back. Mordino smile.",
    },
    {
      id: "virgin-alley",
      name: "Virgin Street corner",
      district: "virgin",
      wares: ["jet", "marijuana", "cigarettes"],
      size: "corner",
      note: "Independent. The cops walk past if the envelope is right.",
    },
    {
      id: "jungle-fire",
      name: "Jungle fire-barrel",
      district: "jungle",
      wares: ["jet", "marijuana", "vodka"],
      size: "runner",
      note: "No family. A man with a cough and a scale.",
    },
    {
      id: "chop-crate",
      name: "Chop Shop crate",
      district: "chop",
      gang: "salvatores",
      wares: ["psycho", "buffout", "mentats"],
      size: "corner",
      note: "Mason does not sell. A cousin does, quietly.",
    },
    {
      id: "sal-quiet",
      name: "Old Reno quiet man",
      district: "salvatore",
      gang: "salvatores",
      wares: ["cocaine", "mentats"],
      size: "runner",
      note: "If you have to ask the price, Mason already knows your name.",
    },
    {
      id: "wright-still",
      name: "Wright still man",
      district: "wright",
      gang: "wrights",
      wares: ["vodka", "cigarettes", "marijuana"],
      size: "house",
      note: "Moonshine as vodka. Orville calls it family business.",
    },
    {
      id: "shark-back",
      name: "Shark back room",
      district: "shark",
      gang: "bishops",
      wares: ["cocaine", "mentats", "cigarettes"],
      size: "house",
      note: "Bishop product. Polite. Expensive. A gun in the drawer.",
    },
    {
      id: "east-stall",
      name: "East stall chemist",
      district: "market",
      wares: ["jet", "buffout", "mentats", "marijuana"],
      size: "corner",
      note: "Independent stall. Everyone buys. Everyone watches.",
    },
    {
      id: "rail-box",
      name: "Boxcar chemist",
      district: "rail",
      wares: ["jet", "psycho", "vodka"],
      size: "runner",
      note: "No gang paper. Raiders tax him on even weeks.",
    },
  ];
}

export function seedMarks(): Mark[] {
  return [
    {
      id: "ncr-lobby",
      name: "NCR lobbyist",
      district: "shark",
      wealth: 920,
      title: "A man who still thinks the Republic is a rumor you can buy.",
      gang: "bishops",
      mood: "cold",
    },
    {
      id: "hub-silk",
      name: "Hub silk merchant",
      district: "virgin",
      wealth: 480,
      title: "Caravan money. A bodyguard who used to box.",
      mood: "cold",
    },
    {
      id: "desperado-roller",
      name: "Desperado high roller",
      district: "desperado",
      wealth: 740,
      title: "Mordino guest. The smile is Jet. The wallet is not.",
      gang: "mordinos",
      mood: "cold",
    },
    {
      id: "sal-guest",
      name: "Salvatore dinner guest",
      district: "salvatore",
      wealth: 1100,
      title: "Old money. Made men at the door. An oxygen tank in the next room.",
      gang: "salvatores",
      mood: "cold",
    },
    {
      id: "wright-cousin",
      name: "Wright orchard cousin",
      district: "wright",
      wealth: 340,
      title: "Stills and a shotgun. Family if you are family.",
      gang: "wrights",
      mood: "cold",
    },
    {
      id: "ring-tout",
      name: "Ring promoter",
      district: "stables",
      wealth: 290,
      title: "Purses and cigars. One palooka who thinks he is a guard.",
      mood: "cold",
    },
    {
      id: "vault-tourist",
      name: "Vault City tourist",
      district: "virgin",
      wealth: 520,
      title: "Clean coat. Vault money that does not know the code yet.",
      mood: "cold",
    },
    {
      id: "bishop-books",
      name: "Bishop bookkeeper",
      district: "bishop",
      wealth: 810,
      title: "The polite floor. Two men in good coats.",
      gang: "bishops",
      mood: "cold",
    },
    {
      id: "jet-baron",
      name: "Stables accountant",
      district: "mordino",
      wealth: 610,
      title: "Myron does not look up. This one counts the bags.",
      gang: "mordinos",
      mood: "cold",
    },
    {
      id: "chop-owner",
      name: "Chop Shop owner",
      district: "chop",
      wealth: 410,
      title: "Stolen Chevys and a loft. Mechanics with pipes.",
      mood: "cold",
    },
  ];
}

export function guardCount(wealth: number): number {
  if (wealth >= 1000) return 4;
  if (wealth >= 700) return 3;
  if (wealth >= 400) return 2;
  return 1;
}

export function dealerCountByGang(dealers: Dealer[]): Array<{ gang: GangId | "indie"; n: number; label: string }> {
  const indie = dealers.filter((d) => !d.gang).length;
  const rows: Array<{ gang: GangId | "indie"; n: number; label: string }> = [
    { gang: "mordinos", n: dealers.filter((d) => d.gang === "mordinos").length, label: "Mordino" },
    { gang: "bishops", n: dealers.filter((d) => d.gang === "bishops").length, label: "Bishop" },
    { gang: "salvatores", n: dealers.filter((d) => d.gang === "salvatores").length, label: "Salvatore" },
    { gang: "wrights", n: dealers.filter((d) => d.gang === "wrights").length, label: "Wright" },
    { gang: "indie", n: indie, label: "Independent" },
  ];
  return rows.filter((r) => r.n > 0);
}

export function ensureIntel(life: RenoLife): void {
  if (!life.dealers?.length) life.dealers = seedDealers();
  if (!life.marks?.length) life.marks = seedMarks();
}

export function sizeLabel(size: Dealer["size"]): string {
  if (size === "house") return "house volume";
  if (size === "corner") return "corner bagman";
  return "runner";
}
