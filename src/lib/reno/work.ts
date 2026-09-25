import { derive } from "@/lib/special/engine";
import type { Character, SkillId } from "@/lib/special/types";
import { d100, dN, skillRoll } from "./dice";
import { DISTRICT_BY_ID, GANG_BY_ID } from "./world";
import type { DistrictId, Employment, GangId, RenoLife } from "./types";

const COUNTER_TITLES = ["Counter", "Regular", "Closer", "Key", "The one they call"];
/** Merit required to be considered for the next step. Days do not promote you. */
const MERIT_GATE = [0, 18, 40, 72, 118, 180];

function skillOf(character: Character, id: SkillId): number {
  return derive(character).skills[id]?.total ?? 0;
}

export function ateOnTheClock(life: RenoLife) {
  life.hunger = Math.min(life.hunger ?? 22, 24);
  life.thirst = Math.min(life.thirst ?? 18, 20);
}

function considerPromotion(post: Employment, luck: number): string | null {
  const next = post.rank + 1;
  const need = MERIT_GATE[next];
  if (need == null || post.merit < need) return null;
  const gate = 48 + next * 9 - Math.floor(luck / 2);
  if (d100() > gate) {
    post.merit = Math.max(need - 6, post.merit - 4);
    return "They looked at the book and left your name where it was. Merit is not a calendar.";
  }
  post.rank = next;
  return null;
}

export function clockCounter(life: RenoLife, character: Character): { lines: string[]; xp: number } {
  if (life.gangId) return { lines: ["You already answer to a family. A lunch counter does not hire their people."], xp: 0 };
  if (life.post?.kind === "family") return { lines: ["You are on a family's books. Clock out of that before you fry eggs."], xp: 0 };
  const where = life.district;
  const stall = where === "market" || where === "motel" || where === "jungle" || where === "stables";
  if (!stall) {
    return {
      lines: ["Hourly work is at the East stalls, the Desert Rose desk, the Jungle, or the stables. The strip does not hire dishwashers off the sidewalk."],
      xp: 0,
    };
  }
  const special = derive(character).special;
  const barter = skillOf(character, "barter");
  const useful = barter * 0.45 + special.STR * 3 + special.EN * 3 + special.LK;
  const post: Employment = life.post?.kind === "counter"
    ? { ...life.post }
    : {
        kind: "counter",
        title: COUNTER_TITLES[0]!,
        employer: DISTRICT_BY_ID[where].name,
        rank: 0,
        merit: 0,
        calls: 0,
      };
  const target = 42 + post.rank * 7;
  const roll = skillRoll(Math.round(useful), 0);
  const hours = 6;
  const lines: string[] = [];
  lines.push(`You clock in at ${post.employer}. Six hours. The city uses you, then hands you back.`);
  let pay = 8 + post.rank * 5 + Math.round(useful / 14);
  if (roll.fumble) {
    pay = Math.max(2, Math.round(pay / 4));
    post.merit = Math.max(0, post.merit - 3);
    lines.push(`The shift goes bad (${roll.roll}). A dropped tray, a short drawer. ${pay} caps and a worse reputation with the owner.`);
  } else if (roll.success) {
    pay += dN(8);
    post.merit += 2 + (roll.roll <= 15 ? 2 : 0);
    lines.push(`You are useful enough (${roll.roll} vs ${roll.target}%). Barter, strength, endurance. Luck only leans it. +${pay} caps. Merit ${post.merit}.`);
  } else {
    pay = Math.max(4, Math.round(pay * 0.55));
    post.merit += 1;
    lines.push(`You finish the hours (${roll.roll} vs ${roll.target}%). Nobody cheers. +${pay} caps. Merit ${post.merit}.`);
  }
  const stalled = considerPromotion(post, special.LK);
  if (post.rank < COUNTER_TITLES.length) post.title = COUNTER_TITLES[post.rank] ?? post.title;
  if (stalled) lines.push(stalled);
  else if ((life.post?.rank ?? 0) < post.rank) lines.push(`They move you up to ${post.title}. Not a crown. A longer key.`);
  life.caps += pay;
  life.post = post;
  ateOnTheClock(life);
  lines.push("You eat out of the kitchen. Hunger is not the job, in a city that has kitchens. The shift ends. Your hands are yours.");
  return { lines, xp: 40 + post.rank * 10 };
}

const FAMILY_WORK: Record<GangId, Array<{ skill: SkillId; where: string; blurb: string; pay: number }>> = {
  mordinos: [
    { skill: "science", where: "a cook room off Second, not the Virgin Street door", blurb: "Myron's bench needs a pair of hands that understand the cook. You do not ask whose lungs.", pay: 36 },
    { skill: "sneak", where: "an alley behind a Mordino drop", blurb: "Jet moves. You move it without the tourists seeing a crate.", pay: 32 },
    { skill: "unarmed", where: "a back lot where a debtor thought the strip's rules applied", blurb: "A beating, not an execution. The casinos stay open.", pay: 30 },
    { skill: "doctor", where: "a room above a bar that does not keep a sign", blurb: "Someone important is leaking. You keep them that way only a little.", pay: 40 },
  ],
  wrights: [
    { skill: "meleeWeapons", where: "the orchard road, after dark", blurb: "A still, a cousin, and a man selling where the Wrights said not to.", pay: 24 },
    { skill: "repair", where: "the stills", blurb: "The copper runs. Orville nods like that is affection.", pay: 22 },
    { skill: "sneak", where: "a Mordino corner that is not on Virgin Street", blurb: "You spoil a handoff. No bodies on the strip. The travelers keep spending.", pay: 28 },
    { skill: "outdoorsman", where: "the north cut", blurb: "You find where their runner beds down. The family uses that later.", pay: 26 },
  ],
  salvatores: [
    { skill: "sneak", where: "a side door in Old Reno", blurb: "A room that does not happen. You are the reason it doesn't.", pay: 42 },
    { skill: "science", where: "a workshop that is not on the brochure", blurb: "Louis's toy stays a rumor. You check the crate anyway.", pay: 44 },
    { skill: "smallGuns", where: "an alley three blocks off the casinos", blurb: "Mason said don't miss, and don't do it where a tourist can write home about it.", pay: 46 },
    { skill: "doctor", where: "a cot that is not a clinic", blurb: "You keep a made man alive long enough to be ungrateful.", pay: 40 },
  ],
  bishops: [
    { skill: "speech", where: "a back office at the Shark, not the floor", blurb: "A message. The smile is part of the job. The floor never sees the rest.", pay: 38 },
    { skill: "sneak", where: "the service hall under the casino", blurb: "You find which capo is skimming and you do not say it on the strip.", pay: 36 },
    { skill: "unarmed", where: "the alley behind the Bishop house", blurb: "A reminder. He walks away. The casinos do not close.", pay: 34 },
    { skill: "barter", where: "a count room", blurb: "The books. You are useful because you can see a lie in a column.", pay: 40 },
  ],
};

export function clockFamily(life: RenoLife, character: Character): { lines: string[]; xp: number } {
  if (life.vassal) return { lines: ["You already pay a cut for protection. They do not also put you on the books as muscle."], xp: 0 };
  const turf = (Object.keys(GANG_BY_ID) as GangId[]).find((id) => GANG_BY_ID[id].turf === life.district);
  if (!turf) return { lines: ["No family keeps court on this block. Go to their turf if you want their work."], xp: 0 };
  if (life.gangId && life.gangId !== turf) return { lines: [`You answer to the ${GANG_BY_ID[life.gangId].name}. They do not share employees.`], xp: 0 };
  const gang = GANG_BY_ID[turf];
  if (life.gangRep[turf] < -15) return { lines: [`${gang.head} remembers your face. Not kindly.`], xp: 0 };
  if (life.gangId === turf) {
    return {
      lines: [`You are already on the ${gang.name} books. They send word. Asking twice does not make you a don.`],
      xp: 0,
    };
  }
  life.gangId = turf;
  life.gangRank = 0;
  life.post = {
    kind: "family",
    gang: turf,
    employer: gang.name,
    title: "On the books",
    rank: 0,
    merit: life.post?.gang === turf ? life.post.merit : 0,
    calls: life.post?.gang === turf ? life.post.calls : 0,
    pending: null,
  };
  const best = bestFamilySkill(character, turf);
  return {
    lines: [
      `You clock onto the ${gang.name}. ${gang.head} does not make you a don. You are an asset.`,
      `They will send word when they want ${best.label}. Chemistry, medicine, a quiet pair of hands, a beating in an alley. Not a show on Virgin Street.`,
      "Until they call, the day is yours. A family is not a time clock. It is a phone.",
    ],
    xp: 20,
  };
}

function bestFamilySkill(character: Character, gang: GangId): { skill: SkillId; label: string; value: number } {
  const options = FAMILY_WORK[gang];
  let best = options[0]!;
  let value = skillOf(character, best.skill);
  for (const job of options) {
    const n = skillOf(character, job.skill);
    if (n > value) {
      best = job;
      value = n;
    }
  }
  const labels: Partial<Record<SkillId, string>> = {
    science: "the cook",
    sneak: "a quiet job",
    unarmed: "your hands",
    doctor: "medicine",
    meleeWeapons: "a close reminder",
    repair: "the stills",
    outdoorsman: "finding a man",
    smallGuns: "a gun, off the strip",
    speech: "your mouth",
    barter: "the books",
  };
  return { skill: best.skill, label: labels[best.skill] ?? best.skill, value };
}

export function maybeFamilyCall(life: RenoLife, character: Character | null): string | null {
  const post = life.post;
  if (!post || post.kind !== "family" || !post.gang || post.pending) return null;
  if (!character) return null;
  const chance = 22 + Math.min(20, Math.floor((life.tension ?? 0) / 8)) + post.rank * 3;
  if (d100() > chance) return null;
  const pool = FAMILY_WORK[post.gang];
  const ranked = [...pool].sort((a, b) => skillOf(character, b.skill) - skillOf(character, a.skill));
  const job = d100() <= 70 ? ranked[0]! : pool[dN(pool.length) - 1]!;
  post.pending = { skill: job.skill, where: job.where, blurb: job.blurb, pay: job.pay };
  life.post = { ...post };
  return `${GANG_BY_ID[post.gang].name} send word. ${job.where}. ${job.blurb} They want you. The strip is not the place.`;
}

export function answerCall(life: RenoLife, character: Character): { lines: string[]; xp: number } {
  const post = life.post;
  const job = post?.pending;
  if (!post || post.kind !== "family" || !post.gang || !job) return { lines: ["Nobody has called."], xp: 0 };
  const special = derive(character).special;
  const value = skillOf(character, job.skill as SkillId);
  const luckLean = Math.round((special.LK - 5) * 1.5);
  const roll = skillRoll(value, luckLean);
  post.calls += 1;
  post.pending = null;
  const lines: string[] = [];
  lines.push(`You go. ${job.where}.`);
  let xp = 30;
  if (roll.fumble) {
    const hurt = 8 + dN(14);
    life.hp = Math.max(1, life.hp - hurt);
    post.merit = Math.max(0, post.merit - 8);
    const rival = GANG_BY_ID[post.gang].rival;
    life.friction[rival] = Math.min(100, (life.friction[rival] ?? 0) + 10);
    lines.push(`It goes wrong (${roll.roll}). −${hurt} HP. Merit ${post.merit}. ${GANG_BY_ID[rival].name} hear a name. You are not promoted for a mess.`);
  } else if (roll.success) {
    const pay = job.pay + post.rank * 8 + dN(12) + Math.max(0, luckLean);
    life.caps += pay;
    post.merit += 3 + (value >= 80 ? 2 : 0);
    lines.push(`${job.blurb} ${job.skill} ${roll.roll} vs ${roll.target}%. Luck leaned ${luckLean >= 0 ? "+" : ""}${luckLean}. +${pay} caps. Merit ${post.merit}.`);
    const stalled = considerPromotion(post, special.LK);
    if (stalled) lines.push(stalled);
    else if (post.rank > 0 && post.rank <= GANG_BY_ID[post.gang].ranks.length) {
      const was = life.gangRank ?? 0;
      if (post.rank > was) {
        life.gangRank = post.rank;
        const name = GANG_BY_ID[post.gang].ranks[post.rank - 1] ?? "made";
        post.title = name;
        lines.push(`${GANG_BY_ID[post.gang].head} moves you to ${name}. It took the work, not the calendar. You are still not the chair.`);
        xp += 80;
      }
    }
    xp += 70;
  } else {
    const hurt = 3 + dN(6);
    life.hp = Math.max(1, life.hp - hurt);
    const crumbs = Math.round(job.pay / 4);
    life.caps += crumbs;
    post.merit += 1;
    lines.push(`Sloppy (${roll.roll} vs ${roll.target}%). −${hurt} HP. +${crumbs} caps. They do not fire you. They also do not applaud. Merit ${post.merit}.`);
  }
  ateOnTheClock(life);
  lines.push("You eat what the crew eats. Then the call is over. The rest of the day is yours until they want you again.");
  life.post = { ...post };
  return { lines, xp };
}

export function ignoreCall(life: RenoLife): string {
  const post = life.post;
  if (!post?.pending || !post.gang) return "No call is waiting.";
  post.pending = null;
  post.merit = Math.max(0, post.merit - 5);
  life.gangRep[post.gang] = (life.gangRep[post.gang] ?? 0) - 4;
  life.post = { ...post };
  return `${GANG_BY_ID[post.gang].name} notice you didn't come. Merit ${post.merit}. They will call less kindly next time.`;
}

export function clockRaid(life: RenoLife, character: Character): { lines: string[]; xp: number } {
  if (life.gangId || life.post?.kind === "family") {
    return { lines: ["You don't freelance cooks while a family owns your name. They already have opinions about whose jet is whose."], xp: 0 };
  }
  const special = derive(character).special;
  const sneak = skillOf(character, "sneak");
  const score = sneak * 0.5 + special.PE * 5 + special.IN * 5 + special.LK * 2;
  const target = 64 + (life.day % 5) * 2;
  const roll = skillRoll(Math.round(score), 0);
  const lines: string[] = [];
  lines.push("You spend the day off the strip, looking for a cook that is not yours. Sneak, perception, intelligence. Luck only leans the door.");
  let xp = 50;
  if (roll.fumble) {
    const hurt = 10 + dN(16);
    life.hp = Math.max(1, life.hp - hurt);
    const families: GangId[] = ["mordinos", "wrights", "salvatores", "bishops"];
    const gang = families[life.day % families.length]!;
    life.friction[gang] = Math.min(100, (life.friction[gang] ?? 0) + 12);
    life.heat = Math.min(100, life.heat + 8);
    lines.push(`The cook belongs to the ${GANG_BY_ID[gang].name} (${roll.roll}). −${hurt} HP. They have your face. This is not a promotion.`);
  } else if (roll.success) {
    const pay = 48 + dN(70) + special.LK * 2;
    life.caps += pay;
    if (d100() <= 45) life.stash.jet = (life.stash.jet ?? 0) + 1;
    life.heat = Math.min(100, life.heat + 4);
    life.fame = Math.min(100, life.fame + 1);
    lines.push(`You find a room that is not on Virgin Street (${roll.roll} vs ${target}%). +${pay} caps. Maybe a jet. Heat follows a thief more than a tourist.`);
    xp += 90;
  } else {
    const hurt = 4 + dN(8);
    life.hp = Math.max(1, life.hp - hurt);
    lines.push(`You find the door and the door finds friends (${roll.roll} vs ${target}%). −${hurt} HP. You leave poorer and uglier.`);
  }
  ateOnTheClock(life);
  lines.push("You eat what you took, or what you had in a pocket. The day ends. You are a person again, not a job.");
  life.post = {
    kind: "raid",
    employer: "yourself",
    title: "Independent",
    rank: life.post?.kind === "raid" ? life.post.rank : 0,
    merit: (life.post?.kind === "raid" ? life.post.merit : 0) + (roll.success ? 2 : 0),
    calls: (life.post?.calls ?? 0) + 1,
  };
  return { lines, xp };
}

export function maybeVassalOffer(life: RenoLife): string | null {
  if (life.gangId || life.vassal || life.vassalOffer) return null;
  const successful = life.fame >= 22 || Boolean(life.business) || life.dealing || (life.post?.kind === "raid" && (life.post.merit ?? 0) >= 8);
  if (!successful) return null;
  if ((life.regard ?? 0) < 8 && life.fame < 30) return null;
  if (d100() > 12) return null;
  const families: GangId[] = ["mordinos", "wrights", "salvatores", "bishops"];
  const gang = [...families].sort((a, b) => (life.gangRep[b] ?? 0) - (life.gangRep[a] ?? 0))[0]!;
  if ((life.gangRep[gang] ?? 0) < -10) return null;
  life.vassalOffer = gang;
  return `${GANG_BY_ID[gang].name} have watched you make money without a flag. They offer a chair that is not a membership. They take a cut. They put muscle on your problems. Your till becomes a till they recognize.`;
}

export function takeVassal(life: RenoLife, yes: boolean): string {
  const gang = life.vassalOffer;
  if (!gang) return "No family has put paper in front of you.";
  life.vassalOffer = null;
  if (!yes) {
    life.friction[gang] = Math.min(100, (life.friction[gang] ?? 0) + 4);
    return `You leave the paper on the table. The ${GANG_BY_ID[gang].name} will remember the no.`;
  }
  const cut = 25;
  life.vassal = { gang, cut, since: life.day };
  return `You take it. ${cut}% of what you make under your own name goes to the ${GANG_BY_ID[gang].name}. They treat the business like theirs. You are not a don. You are protected, and owned a little.`;
}

export function counterWhere(district: DistrictId): boolean {
  return district === "market" || district === "motel" || district === "jungle" || district === "stables";
}
