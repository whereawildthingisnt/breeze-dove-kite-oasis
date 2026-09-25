import type { SoulDef } from "./ecosystem";
import type { RenoLife } from "./types";

export interface WalkerBeat {
  lines: string[];
  spend?: number;
  last: string;
}

const ON = (hour: number) => hour >= 18 || hour < 5;

/** Curb talk is free. The next click, if she is working and you can pay, is the hour. */
export function walkerBeat(soul: SoulDef, life: RenoLife, last?: string): WalkerBeat {
  const price = soul.price ?? 40;
  const working = ON(life.hour);
  const ready = last === "heard the rate" || last === "took the hour";

  if (!working) {
    return {
      last: "caught her off the walk",
      lines: OFF[soul.id] ?? [
        `${soul.name} is not dressed for the street. The room behind her is a room, not a rate.`,
        "Come back when the neon is doing the advertising. She will not do it in daylight for you.",
      ],
    };
  }

  if (ready && life.caps >= price) {
    return {
      last: "took the hour",
      spend: price,
      lines: DATE[soul.id] ?? DATE.pearl!,
    };
  }

  if (ready && life.caps < price) {
    return {
      last: "heard the rate",
      lines: [
        `${soul.name} counts what you showed her and does not take it.`,
        `The hour is ${price} caps. You have ${life.caps}. Talk stays free. She does not extend credit to a face she just met.`,
      ],
    };
  }

  return {
    last: "heard the rate",
    lines: CURB[soul.id] ?? [
      `${soul.name} tells you the rate is ${price}. Talk is free. Click her again if you want the hour.`,
    ],
  };
}

const CURB: Record<string, string[]> = {
  pearl: [
    "Pearl Quinn keeps one shoulder to the motel lamp and the other to the stair. She has been out here long enough that the neon no longer flatters her, and she has stopped asking it to.",
    "\"Talk is free,\" she says. \"People think that means I want a story. I don't. I want to know if you're the kind who pays before or the kind who explains after. The second kind walks.\"",
    "She tells you Calico takes his cut off the top of the night, not off the top of her mood. A john in a hat paid forty and argued about the change. She let him argue. The door still closed.",
    "If you want the hour, it is forty caps, upstairs, no tour of the room and no second rate once the door is shut. Click her again. If you only wanted the curb, you have had it.",
  ],
  dollie: [
    "Dollie Shaw laughs before she finishes a sentence, which makes the sentence cheaper than it is. Virgin Street traffic keeps trying to include her. She steps out of it without looking.",
    "\"You can stand here,\" she says. \"Standing is the advertisement. The conversation is what you do when you are not ready to be embarrassed in a hallway.\"",
    "She knows which doormen are Bishop and which are only dressed like it. She knows the train times better than the tourists do, because the train is how a man leaves without paying the second drink.",
    "The hour is fifty-five. She says it like a joke and then does not smile. Click her again if that number is real. Otherwise keep walking. The street is full of people who confuse talking with rent.",
  ],
  marisol: [
    "Marisol Vega smells like the Desperado's back door, which is cigarettes and the lemon soap the bar uses to lie about the floor. She speaks carefully, as if the price might be overheard by someone who would tax it.",
    "\"I am not lost,\" she says, because men keep offering to show her a city she already works. \"If you want directions, buy them from the man with the hat. If you want me, say so without the tour.\"",
    "She tells you the alley is safer than the front because the front belongs to whoever is winning cards. The alley belongs to people who already decided. Nix does not own this corner. She says that twice.",
    "Forty-five caps. One hour. She will not go to a room you will not name. Click her again when the caps are in your hand, not in a story about caps.",
  ],
  kit: [
    "Kit Abel has engine grease on one cuff and a dress that has survived the cuff. The Chop Shop lights make everyone look like a part. She looks like the person who decides which part is worth keeping.",
    "\"Don't ask me what a nice girl is doing here,\" she says. \"Ask me what the hour costs, or ask me which bay is stealing radiators. I answer one of those for free.\"",
    "She talks about the men who come off the late freight and want a room that is not a berth. Some of them are gentle. Some of them are not. She has a rule about the second kind that ends with her still being here and them not.",
    "Thirty-five. She is cheaper than the Strip because the Strip has a carpet and she has a lock that works. Click her again. Bring the thirty-five. Leave the speech.",
  ],
  faye: [
    "Faye Brin stands where Salvatore's light almost reaches and then decides not to. She is dressed like the bar's idea of a secret. The secret is that she sets the price and the bar does not.",
    "\"If you are here to be seen with me, you cannot afford to be seen with me,\" she says. \"If you are here for the hour, you can afford the hour or you cannot. The street is a bad place to negotiate a dignity you do not have.\"",
    "She will talk about Mason's people only in the negative. They do not take her cut. They do not use her name. She returns the favor by not using theirs. A cop walked past earlier and found a reason to look at a window.",
    "Eighty caps. That is the number that keeps the wrong customers proud of themselves somewhere else. Click her again if you have it. She will not haggle, and she will not pretend the curb was the product.",
  ],
  tess: [
    "Tess Harlow has a coat that used to be a blanket and a voice that does not rise for the Jungle, because the Jungle is loud enough. She watches your shoes first. Shoes tell her if you walked here or got lost here.",
    "\"You can talk,\" she says. \"Talk is how I know you aren't about to do something I'll have to survive. The hour is how I eat. Don't mix them up and then act confused.\"",
    "She tells you who on this block will rob you kindly and who will rob you because they are bored. The fires are other people's dinners. She does not eat at them. She eats after the work, in a room with a door.",
    "Twenty-five caps. She says it without apology, which is its own kind of price. Click her again. If you flinch at the number, she would rather you flinched out here.",
  ],
};

const DATE: Record<string, string[]> = {
  pearl: [
    "Pearl takes the forty before she takes the stairs. The bill is older than the joke she does not make. Upstairs the room is narrow, the curtain is a towel, and the lamp is honest about both of you.",
    "She locks the door with a habit, not a performance. Coat on the chair. Shoes left where she can find them if the hall gets loud. She asks, once, if there is anything you will not do. She listens to the answer. Then she stops interviewing you.",
    "The hour is bodies and breath and the motel doing what motels do through the wall: a radio, a laugh, somebody failing to be quiet. Pearl is not theatrical. She is close, specific, and done when she is done. You learn the difference between a woman working and a woman performing work.",
    "After, she sits on the edge of the bed and counts nothing, because she counted at the door. She tells you Calico will see you leave and will not care, provided you leave. \"Don't linger in the lot like you live here,\" she says. \"You don't.\"",
    "You go down cleaner than you came up and poorer by forty. The lamp at the bottom of the stair is still doing its job. Pearl is already looking past you at the sidewalk, which is the job.",
  ],
  dollie: [
    "Dollie folds the fifty-five into a pocket you do not see twice. She walks you off Virgin Street by a service door, still talking, as if the talking were part of the rent and the quiet would cost extra.",
    "The room is a casino's idea of modest: a bed, a mirror that has seen better guests, a window that refuses to close all the way. She kicks her heels off and becomes, briefly, a person who is not on a sidewalk. \"Clock starts when the door shuts,\" she says, and shuts it.",
    "She is funnier in the room than on the curb, and also less interested in whether you are charmed. The hour is skin and laughter and then not much laughter. She pays attention. That is the surprising part. The city keeps selling the idea that attention is free. It is not. You paid for this.",
    "When the time is gone she is dressed faster than you are. She checks the hall before she checks her hair. \"If you tell it like a story, make yourself braver,\" she says. \"They always do. I don't correct them. Corrections don't pay.\"",
    "Back on the street the neon has not missed you. Dollie is already a step farther from the door than you are. The fifty-five is somewhere in the building, and you are not invited to know which room.",
  ],
  marisol: [
    "Marisol does not count the forty-five in the alley. She counts it under the bulb inside, where the bills can be seen and the door can be locked in the same minute. \"Good,\" she says, which is the whole receipt.",
    "The room is behind the Desperado and does not belong to the Desperado. A sink, a bed, a chair with a man's coat that is not yours and not hers. She moves the coat without comment. The lemon soap smell is stronger in here. So is the quiet.",
    "She sets the terms with her hands, not a speech. What follows is unhurried and exact. She is not performing the alley. She is spending an hour she sold, and she intends to spend it well enough that you do not become a problem on the way out. You understand, somewhere in it, that competence is the kindness on offer.",
    "After, she washes her wrists and leaves you the towel. She tells you which door puts you on the street and which door puts you back in the card room, where you would have to pretend this was a win. \"Use the street,\" she says. \"You already paid for a private thing. Don't go make it public.\"",
    "The alley is colder than the room. Marisol stays in the doorway until you are far enough away to be nobody. Then the light behind her goes out, and the price is only a number you no longer have.",
  ],
  kit: [
    "Kit takes thirty-five and a look at your hands, in that order. \"You don't work here,\" she says, which is not an insult. She leads you up a stair that smells like oil and old rain, into a room that was an office until somebody needed a bed more than a desk.",
    "She bolts the door. The Chop Shop keeps working under your feet, a radio of metal. Kit hangs the dress where the grease will not get it and becomes, for the hour, less a part of the bay and more a person who decided to be paid for closeness instead of for a radiator.",
    "It is plain and good. She talks a little, not dirty for the sport of it, just enough to tell you what she wants and what she will not do. The bed complains. Neither of you apologizes to it. When she laughs it is short, surprised, and not for sale as a separate item.",
    "She is dressed again while you are still finding a sleeve. \"Don't tell the bay,\" she says. \"They'll make it a joke, and then they'll make it a debt. I don't owe them this.\" She opens the door onto the smell of work.",
    "Downstairs nobody looks up. That is the luxury thirty-five bought: an hour that the building agreed to ignore. Kit is already wiping her cuff, back on the clock that pays worse and tells fewer lies.",
  ],
  faye: [
    "Faye does not touch the eighty until you are off the street. A side room at the edge of Salvatore's light, not in the bar and not in the family. She counts twice. \"You can still leave,\" she says. \"After I lock it, the eighty stays even if you get shy.\"",
    "You do not leave. The room is better than the curb promised: clean sheets, a bottle she does not offer, a lamp with a shade. Faye undresses like a woman who has timed it. Nothing is tossed. The city is rude. She is not, and she charges for the difference.",
    "The hour is slow on purpose. She is skilled, a little distant, and completely present in the way that matters. You are not a story she will repeat. You are a transaction she is honoring at a level the street does not usually bother to reach. It is more intimate for being so clearly bought.",
    "When it ends she is not unkind and not lingering. She puts herself back together in the mirror without asking you how it was. \"If you brag, brag about the price,\" she says. \"The rest is not a souvenir.\"",
    "She lets you out a different door from the one you entered. Salvatore's sign is a rumor from here. Your pockets are lighter by eighty, and Faye is already a silhouette that does not owe you a wave.",
  ],
  tess: [
    "Tess takes the twenty-five in the open, because hiding the count is how people get robbed twice. She walks you past a fire that is not hers, up a stair that moves a little, into a room that has a lock and not much else. The lock works. She checks it.",
    "\"Shoes off,\" she says, and means it, because the floor is the cleanest thing she can offer and she keeps it that way. The coat goes on a nail. Under it she is just a woman who has decided this hour will be warm. The Jungle is outside, doing its usual work of being cold.",
    "She is direct, a bit rough at the edges, and careful where it counts. There is no music. There is breathing, the wall, a dog somewhere that does not belong to either of you. Tess does not pretend the room is a casino. She pretends nothing. That is why the twenty-five feels like more than it is.",
    "After, she shares the end of a cigarette and not a future. \"You can sleep an hour if you paid,\" she says, \"but you didn't pay for morning, and morning here asks questions.\" You understand the generosity and the limit are the same sentence.",
    "Outside, the fires have settled down to eating themselves. Tess stays in the doorway, coat on, already back at work if work walks up. You are twenty-five caps closer to broke and, for a little while, less alone than the block usually allows.",
  ],
};

const OFF: Record<string, string[]> = {
  pearl: [
    "Pearl answers the motel door in a robe and does not bring the rate outside with her. Daylight makes the lot look like a parking problem instead of a business.",
    "\"I sleep when the clerk can see the street,\" she says. \"Come back when Rita goes home. If you knock again before that, I'll assume you want a complaint, and I don't take those.\"",
  ],
  dollie: [
    "Dollie is on a casino stool with her shoes off and her work face nowhere. She looks younger and more tired. The hour is not for sale next to a coffee.",
    "\"Daytime Dollie doesn't do Virgin Street math,\" she says. \"If you sit, sit. If you came to hire me, you came to the wrong sun.\"",
  ],
  marisol: [
    "Marisol is carrying a paper bag and not a price. She nods like a neighbor, which is a kind of armor.",
    "\"Not now,\" she says. \"The alley in the day is just an alley. I like it that way for a few hours. Find me when the cards get loud.\"",
  ],
  kit: [
    "Kit is under a hood, actually working. The dress is a rumor. Grease is the whole sentence.",
    "\"You want the other job, it's tonight,\" she says, not unfriendly. \"You want a belt looked at, get in line. Don't mix the lines.\"",
  ],
  faye: [
    "Faye is not on the corner. A bartender who is not her says she keeps daytime like a closed account.",
    "If you find her at all, she is reading in a booth and does not look up. \"Eighty is a night number,\" she says. \"So is my patience.\"",
  ],
  tess: [
    "Tess is asleep or gone. The room door is shut and the stair does not answer. A neighbor tells you she works when the fires are the only light.",
    "\"Don't pound,\" the neighbor says. \"She paid for the morning by working the night. You can do the same math.\"",
  ],
};
