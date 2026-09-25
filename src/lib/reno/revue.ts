export interface RevueAct {
  id: string;
  name: string;
  /** Two poses on the public floor. The clock swaps them. */
  public: [string, string];
  /** Three steps. Each payment moves one step closer. */
  private: [string, string, string];
  prices: [number, number, number];
  steps: [string, string, string];
}

export const REVUE: RevueAct[] = [
  {
    id: "nia",
    name: "Nia Kane",
    public: ["/reno/dance/nia/a.webp", "/reno/dance/nia/b.webp"],
    private: ["/reno/dance/nia/p1.webp", "/reno/dance/nia/p2.webp", "/reno/dance/nia/p3.webp"],
    prices: [30, 60, 110],
    steps: [
      "Past the curtain. Gold fringe, still the costume. She starts closer than the stage.",
      "The chair. The room is smaller, so the price is not.",
      "Last step. She stays dressed and reaches. That is the private show.",
    ],
  },
  {
    id: "mei",
    name: "Mei Della",
    public: ["/reno/dance/mei/a.webp", "/reno/dance/mei/b.webp"],
    private: ["/reno/dance/mei/p1.webp", "/reno/dance/mei/p2.webp", "/reno/dance/mei/p3.webp"],
    prices: [28, 55, 100],
    steps: [
      "She leaves the silver set on. The lean is the first thing you paid for.",
      "Chair. Silver. Closer. The house is not in this room.",
      "Last step. One knee, one hand out. The costume stays. The distance does not.",
    ],
  },
  {
    id: "luz",
    name: "Luz Navarro",
    public: ["/reno/dance/luz/a.webp", "/reno/dance/luz/b.webp"],
    private: ["/reno/dance/luz/p1.webp", "/reno/dance/luz/p2.webp", "/reno/dance/luz/p3.webp"],
    prices: [32, 65, 120],
    steps: [
      "Red fringe, off the stage. First step is still a dance, not a favor.",
      "She takes the chair. The fringe moves because she does.",
      "Last step. She kneels in the dress and reaches. Pay again and she repeats it.",
    ],
  },
  {
    id: "amira",
    name: "Amira Shah",
    public: ["/reno/dance/amira/a.webp", "/reno/dance/amira/b.webp"],
    private: ["/reno/dance/amira/p1.webp", "/reno/dance/amira/p2.webp", "/reno/dance/amira/p3.webp"],
    prices: [35, 70, 130],
    steps: [
      "Emerald stays on. The braid comes over one shoulder. That is step one.",
      "The chair faces you. The costume does not come off. The price does go up.",
      "Last step. One knee, one hand. She tells you that is the end of the menu.",
    ],
  },
  {
    id: "ines",
    name: "Ines Yazzie",
    public: ["/reno/dance/ines/a.webp", "/reno/dance/ines/b.webp"],
    private: ["/reno/dance/ines/p1.webp", "/reno/dance/ines/p2.webp", "/reno/dance/ines/p3.webp"],
    prices: [26, 52, 95],
    steps: [
      "The cape is already off. Velvet stays. She is closer than the floor allows.",
      "Chair. Burgundy. She does not talk over the song.",
      "Last step. She kneels and reaches. After this, you are buying the same minute again.",
    ],
  },
];

/** Who is on the public floor in this building right now. */
export function revueOn(district: string | undefined, hour: number): RevueAct {
  const h = ((hour % 24) + 24) % 24;
  if (district === "shark") return h % 2 === 0 ? REVUE[0]! : REVUE[3]!;
  if (district === "desperado") return h % 2 === 0 ? REVUE[1]! : REVUE[4]!;
  if (district === "mordino") return REVUE[4]!;
  if (district === "virgin") return REVUE[2]!;
  return REVUE[2]!;
}

export function revueById(id: string): RevueAct | undefined {
  return REVUE.find((act) => act.id === id);
}
