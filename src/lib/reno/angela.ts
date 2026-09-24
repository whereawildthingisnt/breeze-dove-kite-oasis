import { derive } from "@/lib/special/engine";
import { genderOf } from "@/lib/special/data";
import type { Character } from "@/lib/special/types";
import type { RenoLife } from "./types";
import { GANG_BY_ID } from "./world";

export interface AngelaReply {
  id: string;
  text: string;
  next: string;
}

export interface AngelaView {
  node: string;
  line: string;
  replies: AngelaReply[];
  closed?: boolean;
}

interface Ctx {
  character: Character;
  life: RenoLife;
  name: string;
  gender: ReturnType<typeof genderOf>;
  inStat: number;
  ch: number;
  speech: number;
  famous: FamousHit | null;
  sexAppeal: boolean;
  lowInt: boolean;
}

interface FamousHit {
  key: string;
  line: string;
}

const FAMOUS: Array<{ keys: string[]; line: string }> = [
  { keys: ["chosen one", "the chosen one"], line: "Chosen One? From that primitive village? Daddy said Arroyo was a rumor the Hubologists tell drunks." },
  { keys: ["vault dweller", "vault 13"], line: "Vault Dweller. That's a bedtime story. The kind with a water chip and a mutant at the end." },
  { keys: ["courier", "courier six"], line: "Courier. You look like you walked here from the Mojave just to be bored with me." },
  { keys: ["vic"], line: "Vic? The old Golden Globes mechanic Daddy keeps in a basement when the bills come due? Cute name to steal." },
  { keys: ["myron"], line: "Myron? That Stables brat who smells like Jet and thinks he's a genius? If you're him, take a bath." },
  { keys: ["cassidy", "cass"], line: "Cassidy. Some old drunk from the wastes. If you're him, you're taking the pretty-boy route." },
  { keys: ["sulik"], line: "Sulik? Primitive name. The kind Daddy would put on a leash for a joke." },
  { keys: ["ian"], line: "Ian. Some triggerman who shoots his friends in the back. Don't stand behind me." },
  { keys: ["tycho"], line: "Tycho. Desert ranger type. The boots don't match the Shark Club carpet." },
  { keys: ["dogmeat"], line: "You named yourself after a dog. That's either stupid or the hottest thing anyone's said to me all week." },
  { keys: ["marcus"], line: "Marcus. A mutant walking Reno? Daddy would love that. The other families would start a war just to watch." },
  { keys: ["goris"], line: "Goris. Sounds like something that belongs in a deathclaw nest, not on Virgin Street." },
  { keys: ["lenny"], line: "Lenny. Ghoul name. The Salvatores wouldn't let you in the bar. I might." },
  { keys: ["tandi"], line: "Tandi? That's the NCR president, dummy. Daddy talks about her like she's a meal." },
  { keys: ["harold"], line: "Harold. The tree guy? Don't drip on the carpet." },
  { keys: ["john bishop", "mr bishop", "bishop"], line: "That's my FATHER. You don't get to wear that name in this building." },
  { keys: ["angela", "angela bishop"], line: "That's MY name. Pick another one or I'll have Mason explain manners." },
  { keys: ["leslie", "leslie anne"], line: "That's my mother. Don't." },
  { keys: ["big jesus", "mordino"], line: "You walked into the Shark Club wearing a Mordino name. That's a suicide note with a handshake." },
  { keys: ["little jesus"], line: "Little Jesus. If that's you, the second floor is a long way down." },
  { keys: ["orville", "wright"], line: "A Wright in the Shark Club. Orville's kid, playing tourist? Daddy will want a word." },
  { keys: ["salvatore", "louis salvatore"], line: "Salvatore. The old man with the tank. You don't look like you need oxygen. Yet." },
  { keys: ["mason"], line: "Mason works the door downstairs. If you're using his name, he'll break the rest of you." },
  { keys: ["benny"], line: "Benny. Checkered suit, bad luck. The kind of name that gets you a grave in the desert." },
  { keys: ["house", "mr house"], line: "House. Some Vegas ghost. Reno does not take orders from a computer." },
  { keys: ["yes man"], line: "Yes Man. That's not a name. That's a personality. I already have enough of those." },
  { keys: ["arcade"], line: "Arcade. Sounds like a Followers nerd. Daddy hates those." },
  { keys: ["boone"], line: "Boone. Sniper name. Don't point anything at the rail." },
  { keys: ["veronica"], line: "Veronica. Brotherhood girl? The Salvatores would have a fit." },
  { keys: ["nick valentine", "valentine"], line: "Valentine. That's a detective in a synth body, if the radio's telling the truth. Reno would sell you by the pound." },
  { keys: ["piper"], line: "Piper. Paper girl. The Shark Club doesn't do interviews." },
  { keys: ["cait"], line: "Cait. Arena trash with a pretty mouth. We already have one of those. She's talking to you." },
  { keys: ["hancock"], line: "Hancock. Ghoul mayor. If that's a look you're going for, the Jungle is east." },
  { keys: ["danse"], line: "Danse. Paladin type. Energy weapons and a stick up the armor. Mason would like you. I might not." },
  { keys: ["preston"], line: "Preston. Minuteman. The settlements can wait. I'm bored now." },
  { keys: ["maccready"], line: "MacCready. Kid sniper. Don't miss." },
  { keys: ["deacon"], line: "Deacon. Railroad ghost. Sunglasses indoors. Cute." },
  { keys: ["curie"], line: "Curie. Sounds French and medical. Reno would ruin you in a week. Stay." },
  { keys: ["strong"], line: "Strong. Super mutant. If you're him, the bouncers are already moving." },
  { keys: ["ada"], line: "Ada. Robot name. We have slot machines for that." },
  { keys: ["ed-e", "ed e", "eddy"], line: "A robot's name. You're lucky you're pretty." },
  { keys: ["rex"], line: "Rex is a dog, sweetheart. Sit." },
  { keys: ["dogmeat"], line: "You named yourself after a dog." },
];

function famousOf(name: string): FamousHit | null {
  const n = name.trim().toLowerCase();
  if (!n) return null;
  for (const entry of FAMOUS) {
    if (entry.keys.some((k) => n === k || n.includes(k))) return { key: entry.keys[0]!, line: entry.line };
  }
  return null;
}

function ctxOf(character: Character, life: RenoLife): Ctx {
  const d = derive(character);
  return {
    character,
    life,
    name: character.name.trim() || "stranger",
    gender: genderOf(character),
    inStat: d.special.IN,
    ch: d.special.CH,
    speech: d.skills.speech?.total ?? 0,
    famous: famousOf(character.name),
    sexAppeal: (character.traits ?? []).includes("sexAppeal"),
    lowInt: d.special.IN <= 3,
  };
}

function introLine(c: Ctx): string {
  const a = c.life.angela;
  if (a.mood === "mad" || a.insulted) {
    return "My father is going to KILL you when he hears how you treated me.";
  }
  if (a.mood === "rejected") {
    return "You again. You had your chance. I'm Angela BISHOP. Don't waste my time.";
  }
  if (a.slept) {
    return "Look who crawled back. You going to be boring about it, or do you want to fly again?";
  }
  if (a.met) {
    return "You again. You as bored as I am, or did you just miss the view from the rail?";
  }
  if (c.lowInt) {
    return "Haven't seen YOU around before. What's your name, stranger? Actually— wait. Are you all right? You have that vault-village look.";
  }
  if (c.gender === "female") {
    return "Haven't seen YOU around before. You one of Daddy's new whores?";
  }
  if (c.gender === "other") {
    return "Haven't seen YOU around before. What's your name, stranger? (Smirks.) Actually, never mind. You as bored as I am?";
  }
  return "Haven't seen YOU around before. What's your name, stranger? (Smirks.) Actually, never mind, I don't want to know. You as bored as I am?";
}

function repliesFor(node: string, c: Ctx): AngelaReply[] {
  const a = c.life.angela;
  const bishop = c.life.gangId === "bishops";
  const mordino = c.life.gangId === "mordinos";
  const wright = c.life.gangId === "wrights";
  const salv = c.life.gangId === "salvatores";

  if (node === "intro") {
    const list: AngelaReply[] = [];
    if (a.slept && !c.lowInt) {
      list.push({ id: "again", text: "Let's fly again.", next: "upstairs" });
      list.push({ id: "family", text: "About your father…", next: "family" });
      list.push({ id: "leave", text: "Just passing through.", next: "close-polite" });
      return list;
    }
    if (c.lowInt) {
      list.push({ id: "yum", text: "Yum yum. Me like nom.", next: "low-yum" });
      list.push({ id: "iam", text: "We walked with a guy named Iam. He kept burst-shooting me in the back.", next: "low-iam" });
      list.push({ id: "rabbits", text: "Shhh. If you don't be quiet, George won't let me play with th'rabbtiz.", next: "low-rabbits" });
    } else {
      list.push({ id: "name", text: `I'm ${c.name}.`, next: "name" });
      list.push({ id: "look", text: "Uh… why are you looking at me like that?", next: "look" });
      list.push({ id: "bored", text: "You looking for some excitement, princess?", next: "watch-mouth" });
      if (bishop) list.push({ id: "work", text: "I work for your father.", next: "enforcer" });
      if (c.gender === "female") list.push({ id: "not-whore", text: "I work here. I'm not one of Daddy's girls.", next: "enforcer" });
    }
    list.push({ id: "leave", text: "I should go.", next: "close-polite" });
    return list;
  }

  if (node === "name") {
    return [
      { id: "look", text: "So. You bored, or is this just the rail talking?", next: "look" },
      { id: "family", text: "You're John Bishop's daughter.", next: "family" },
      { id: "leave", text: "Nice to meet you.", next: "close-polite" },
    ];
  }

  if (node === "look") {
    return [
      { id: "jet", text: "What do you want?", next: "jet" },
      { id: "no", text: "It's not that I'm not flattered, but…", next: "reject-soft" },
      { id: "rank", text: "Your dad IS head of Family Bishop. That's why we're not going anywhere.", next: "reject-rank" },
      { id: "yes", text: "Well, if you're gonna pull rank… let's go.", next: "upstairs" },
    ];
  }

  if (node === "watch-mouth") {
    return [
      { id: "sorry", text: "Understood. Angela Bishop.", next: "look" },
      { id: "push", text: "Cute speech. Still bored?", next: "jet" },
      { id: "leave", text: "I'm leaving.", next: "close-mad" },
    ];
  }

  if (node === "family") {
    const list: AngelaReply[] = [
      { id: "john", text: "What's Mr. Bishop after?", next: "john" },
      { id: "leslie", text: "And Leslie Anne?", next: "leslie" },
      { id: "jet", text: "You don't look like you spend much time on family business.", next: "jet" },
    ];
    if (mordino) list.push({ id: "mordino-gloat", text: "I work for Big Jesus.", next: "rival-mordino" });
    if (wright) list.push({ id: "wright-gloat", text: "I run with the Wrights.", next: "rival-wright" });
    if (salv) list.push({ id: "salv-gloat", text: "I work for Salvatore.", next: "rival-salv" });
    return list;
  }

  if (node === "john") {
    return [
      { id: "ncr", text: "NCR.", next: "ncr" },
      { id: "jet", text: "Forget politics. You wanted excitement.", next: "jet" },
      { id: "leave", text: "I'll keep that to myself.", next: "close-polite" },
    ];
  }

  if (node === "leslie" || node === "ncr") {
    return [
      { id: "jet", text: "You mentioned being bored.", next: "jet" },
      { id: "leave", text: "I should go.", next: "close-polite" },
    ];
  }

  if (node === "enforcer") {
    return [
      { id: "diff", text: "There's a difference. Want me to teach it to you?", next: "watch-mouth" },
      { id: "jet", text: "You wanted excitement. Talk.", next: "jet" },
      { id: "leave", text: "I'll be downstairs.", next: "close-polite" },
    ];
  }

  if (node === "jet") {
    const list: AngelaReply[] = [
      { id: "fly", text: "Yeah. Let's fly.", next: "upstairs" },
      { id: "dad-jet", text: "Your father know you do that?", next: "dad-jet" },
      { id: "no", text: "No.", next: "reject-soft" },
    ];
    if (c.life.boxingRank !== "unsigned" && (c.life.regard ?? 0) >= 6) {
      list.unshift({ id: "ring", text: "I'm on the card at the Ring.", next: "fame" });
    }
    return list;
  }

  if (node === "dad-jet") {
    return [
      { id: "fly", text: "Fine. Let's go.", next: "upstairs" },
      { id: "no", text: "I'm not going upstairs.", next: "reject-soft" },
    ];
  }

  if (node === "fame") {
    return [
      { id: "fly", text: "The rail's nicer than the locker room.", next: "upstairs" },
      { id: "no", text: "I have a card to keep.", next: "reject-soft" },
    ];
  }

  if (node === "upstairs") {
    return [
      { id: "in", text: "Open the door.", next: "room" },
      { id: "ask", text: "What's in there?", next: "room" },
      { id: "back", text: "I'm not going in.", next: "close-polite" },
    ];
  }

  if (node === "room") {
    return [
      { id: "window", text: "You keep looking at the street.", next: "room-window" },
      { id: "safe", text: "The painting's crooked.", next: "room-safe" },
      { id: "chair", text: "I'll take the chair.", next: "room-chair" },
      { id: "leave", text: "This was a mistake.", next: "close-polite" },
    ];
  }

  if (node === "room-window" || node === "room-chair") {
    return [
      { id: "safe", text: "Show me the safe.", next: "room-safe" },
      { id: "stay", text: "I'll stay until the light changes.", next: "room-night" },
      { id: "leave", text: "I should go.", next: "close-polite" },
    ];
  }

  if (node === "room-safe") {
    return [
      { id: "fly", text: "Yeah. Let's fly.", next: "room-fly" },
      { id: "sober", text: "Not the Jet. I'll stay anyway.", next: "room-night" },
      { id: "leave", text: "I'm not doing this.", next: "close-polite" },
    ];
  }

  if (node === "room-fly") {
    return [
      { id: "ceiling", text: "Stay in it.", next: "room-fly-ceiling" },
      { id: "window", text: "The street.", next: "room-fly-street" },
      { id: "enough", text: "That's enough.", next: "room-jet-down" },
    ];
  }

  if (node === "room-fly-ceiling") {
    return [
      { id: "street", text: "What do you see out there?", next: "room-fly-street" },
      { id: "again", text: "Another pull.", next: "room-fly-again" },
      { id: "down", text: "Let it thin.", next: "room-night-jet" },
    ];
  }

  if (node === "room-fly-street") {
    return [
      { id: "again", text: "Keep the party going.", next: "room-fly-again" },
      { id: "ride", text: "Ride this one out.", next: "room-night-jet" },
      { id: "enough", text: "Cap it.", next: "room-jet-down" },
    ];
  }

  if (node === "room-fly-again") {
    return [
      { id: "hours", text: "Let the hours go.", next: "room-night-jet" },
      { id: "last", text: "That was the last one.", next: "room-jet-down" },
    ];
  }

  if (node === "room-night-jet") {
    return [{ id: "grey", text: "The grey gets in.", next: "room-jet-down" }];
  }

  if (node === "room-jet-down") {
    return [{ id: "dawn", text: "The light changes.", next: "morning-jet" }];
  }

  if (node === "room-night") {
    return [{ id: "dawn", text: "The light changes.", next: "morning" }];
  }

  if (node === "morning") {
    return [{ id: "done", text: "Take the service stair down.", next: "close-hot" }];
  }

  if (node === "morning-jet") {
    return [{ id: "done", text: "Take the service stair down.", next: "close-hot-jet" }];
  }

  if (node === "reject-soft" || node === "reject-rank") {
    return [{ id: "done", text: "I'm going.", next: "close-rejected" }];
  }

  if (node.startsWith("low-")) {
    return [
      { id: "leave", text: "Uh. Bye.", next: "close-polite" },
      { id: "name", text: "Me… name.", next: "name" },
    ];
  }

  if (node.startsWith("rival-")) {
    return [
      { id: "leave", text: "I'll see myself out.", next: "close-mad" },
      { id: "sorry", text: "It's a job.", next: "watch-mouth" },
    ];
  }

  if (a.slept && node === "intro") {
    return [
      { id: "again", text: "Let's fly again.", next: "upstairs" },
      { id: "family", text: "About your father…", next: "family" },
      { id: "leave", text: "Just passing through.", next: "close-polite" },
    ];
  }

  return [{ id: "leave", text: "I should go.", next: "close-polite" }];
}

function lineFor(node: string, c: Ctx): string {
  if (node === "intro") return introLine(c);
  if (node === "name") {
    if (c.famous) return `${c.famous.line} Still. I'm Angela. You as bored as I am?`;
    if (c.sexAppeal) return `${c.name}. That's a name the second floor can work with. You as bored as I am?`;
    if (c.ch >= 8) return `${c.name}. Cute. Don't get used to me remembering it. You as bored as I am?`;
    return `${c.name}. Fine. I'm Angela Bishop. You as bored as I am?`;
  }
  if (node === "look") {
    return "Why? Am I getting a reaction out of you? (She takes a step in. Voice drops.) Am I giving you a hard time?";
  }
  if (node === "watch-mouth") {
    return "You watch your mouth when you talk to me. I'm Angela BISHOP. My Dad is the HEAD of Family Bishop. You'll show me the same respect you show him, or they'll be scraping pieces of you off the wall. UNDERSTAND?";
  }
  if (node === "family") {
    return "Daddy runs the Shark Club the way other men run a temper. He runs the mayor because the mayor likes a carpet and a check. He talks about NCR like it's a casino he hasn't bought yet, and he smiles when he says the word seat, like a seat is a thing you take off a man. Mother drinks on the third floor and tells anyone who will hold a glass that Angela is the problem. She isn't wrong, and she isn't interesting. The band plays the same three numbers. The tourists lose the same money. And me? I stand on the rail and wait for the ceiling to be worth looking at.";
  }
  if (node === "john") {
    return "Mr. Bishop wants a man in NCR dead and a vault city that learns the word please. He doesn't shout it. He says it the way he orders a drink, and the man across the table laughs because laughing is cheaper than understanding. You work for him, you don't ask twice, and you don't bring the answer up the guest stair. The guest stair is for people he intends to be seen with. I'm not one of those unless he's showing the room he has a daughter.";
  }
  if (node === "leslie") {
    return "Leslie Anne Bishop. Mother. She'll take your arm at the rail and your whole evening if you let her, and somewhere between the second song and the third she'll tell you Angela is the problem in this family. The dress is wrong. The hour is wrong. The company is wrong. She drinks until the band gives up and then she goes to her room and leaves the door a finger open so the hall knows she's suffering. Two doors down from mine. I use the service stair so I don't have to pass the performance.";
  }
  if (node === "ncr") {
    return "NCR. Cattle, paper, a president named Tandi that Daddy talks about like a meal he hasn't ordered yet. They send men in clean boots to lose money on our felt and call it diplomacy. The other families want Daddy in a hole instead of in a senate. The Mordinos would do it with Jet. The Wrights would do it with a still and a grudge. Salvatore would do it quietly and then deny the noise. Guess which one is more honest. None of them. Honesty doesn't pay the band.";
  }
  if (node === "enforcer") {
    return "Enforcer, whore… what's the difference, from up here? You work for him, which means the building already decided you can stand on this carpet. That means you work for ME when I'm the one talking. Don't look at Mason like he'll save you. Mason works the door. I work the boredom. You better do what I say, and I say if you're going to be in my night you're going to be in it properly. You coming, or are you another suit that only knows the guest stair?";
  }
  if (node === "jet") {
    return "Look. I got some Jet in my room. Not the paper wraps they push at the Desperado. Not the cough they sell to junkies off Virgin Street who think a bad night is a personality. Mine's in glass. Myron pretends he invented the sky and the Bishops pretend we don't buy the part of the sky that doesn't make you stupid. You fly on this, you remember the ceiling. The band turns into weather. The Shark Club gets small enough to live in. Y'wanna fly, or you gonna stand there and be careful?";
  }
  if (node === "dad-jet") {
    return "He doesn't care. (She shrugs, and the shrug is the whole policy.) Daddy cares who walks in the front, who leaves with an envelope, who says Tandi's name too loud. What his daughter does with a clean inhaler behind a crooked painting is not a family meeting. Mother would care, which is why Mother doesn't get a key to that safe. (Frowns.) Look. You wanna come fly with me or what? I'm not doing the speech twice.";
  }
  if (node === "fame") {
    return "The Ring. I heard. They like a body that can still stand when the purse is counted. Don't confuse that with this room. The locker room smells like other people's blood and the third floor smells like a decision I already made. You can tell me about the card later, if you're still boring enough to remember it. Don't bleed on the sheets. Don't bleed on the chair. The chair is the only honest seat in the Shark Club.";
  }
  if (node === "upstairs") {
    if (c.life.angela.slept) {
      return "She doesn't do the speech this time. The rail, the service stair, the red runner worn bright by hands that had somewhere else to be. She doesn't look back to see if you remember the way. Third floor. The door with the small letter B, and under it the quiet the Shark Club only spends on family. She fits the key and waits, one heel already bored of the carpet. The band is a different number than last time and the same number anyway. You coming, or did you climb all this just to be careful in a hallway?";
    }
    return "The rail drops behind you. The band is still on the second number, brass too loud for the size of the truth, when she takes the service stair instead of the guest one. Red runner. A rail polished by people who were not invited to be seen. She doesn't look back. A maid's cart thinks about the landing and decides against it. Third floor. A door with a small letter B, and under it the kind of quiet money buys when it doesn't want a witness. She turns the key like she has done it a thousand times and is bored of every one of them. Don't touch the guest stair on the way out, she says. Mason counts faces. I don't.";
  }
  if (node === "room") {
    return "The room is bigger than the rail made you think, and meaner. A bed that could sleep a delegation and hasn't been asked to. The spread is straight. Nobody has sat on it tonight and she doesn't look at it like a plan. Curtains the color of the carpet downstairs, heavy enough to fake a private life if you believe in curtains. Neon from Virgin Street leaks the edge of the glass and paints the ceiling pink, then blue, then pink again, a slow tide that doesn't care who owns the building. A vanity. A cracked gold mirror that tells the truth a thumb's width wrong. One heel is already off, abandoned like a decision. On the far wall a painting of the Shark Club hangs crooked on purpose. The floor noise arrives as a dull drum through the carpet: chips, a laugh that loses, brass. She sets the key down and finally looks at you. Don't touch anything that looks like my mother's. She counts. The rest of the room is mine, and the rest of the night is the safe behind that painting, if you're not going to waste it.";
  }
  if (node === "room-window") {
    return "She leaves the painting where it is and stands at the glass, one hand on the frame like the city might lean in. Virgin Street is a river of taillights and a horn that loses an argument with a bigger horn. Somewhere under it her father is smiling at a man who will not like the smile in the morning. NCR boots. Hub money. A white car that doesn't belong to anybody honest. Leslie Anne is two doors down, she says, and she doesn't lower her voice for it. She drinks until the band stops and then she tells people I'm the problem. The mayor comes up the guest stair with his please already written. I use the other one. That's the whole empire. A carpet, a smile, and a door I'm not supposed to open unless I'm showing off. Her breath fogs a coin of the pane and she wipes it like it offended her. You can hear the party from here if you call the band a party. I don't. The party is in the wall, and it doesn't start until that painting moves.";
  }
  if (node === "room-chair") {
    return "You take the chair by the vanity. The mirror puts a crack through your face and leaves hers expensive. She paces the carpet barefoot, the second heel abandoned near the bed she does not sit on and does not offer. She talks the way people talk when the door is shut and the family name is still in the hall, listening. A dealer who cried in the lobby because the table was honest for once. A dress her mother hated on sight, which is why she's wearing the idea of it. A Wright funeral she is not allowed to mention, and the way the second floor goes quiet when John Bishop walks the rail, like quiet is a tax. None of it is a secret. All of it is the kind of talk that gets repeated wrong by morning. She stops at the bedpost, looks at the painting, looks at you. You can stay until the light changes and be a person in a chair. Or you can be smart and leave before Mason counts the stairs. Or you can ask about the thing the painting is hiding. I'm bored of the chair already. The chair is what careful people do.";
  }
  if (node === "room-safe") {
    return "She tips the painting. The safe is small, brass, set in the wall like the room was built around a secret and then got embarrassed about it. The combination is short enough that she doesn't hide her hand. Inside: glass, not the paper wraps they sell at the Desperado to people who want to look dangerous. A clean inhaler, the kind Myron pretends he invented in a lab and the Bishops pretend they don't buy better than the street. A second one behind it, capped, patient. The neon catches the glass and puts a green coin on her knuckle. She holds the first between two fingers like a cigarette she hasn't decided to light, and for a second the bored daughter is gone and what's left is someone who knows exactly how her night is supposed to go. This isn't the dimestore cut. You fly on this, you remember the ceiling. The band downstairs turns into weather. The Shark Club gets the size of this room and then smaller than that. Virgin Street keeps moving and you don't have to be in it. She looks at the bed, dismisses it, looks at the chair, dismisses that too. The party isn't furniture. You want it, or not?";
  }
  if (node === "room-fly") {
    return "The inhaler is cold against your mouth and then it isn't. The hit is not the street hit. Street Jet grabs you by the ribs and spends you. This one opens a door in the air and leaves it open. The ceiling lifts half an inch and decides to stay there. Pink neon slows down and becomes a tide across the cracked mirror, blue following it like a second thought. The brass lamp ticks, once, and the tick lasts longer than a tick should. She takes her own pull without ceremony, the way you take a key you own, and the careful performance drops off her shoulders. She doesn't sit on the bed. She laughs once, short, at nothing you said. There, she says, quiet for the first time all night. Now the Shark Club can be boring without it hurting. The safe door stays open. The carpet remembers your weight a second too long. The band is weather. Your hands are a rumor. She watches the ceiling like it finally did something right. This is the party. Not the rail. Not Mother's glass. This. You can stay up here with it, or you can look at the street while it still has colors.";
  }
  if (node === "room-fly-ceiling") {
    return "The ceiling is a country. The crack in the plaster is a road and the road goes nowhere you have to walk. Time stops being a clock and becomes the space between the lamp's ticks. She talks, and the words arrive a moment after her mouth, which she finds funny and then forgets. Daddy's smile. The mayor's please. A man at the high-limit table who will go home poorer and tell the story wrong. She names them like cards and doesn't care who wins. Myron thinks this is chemistry, she says. It isn't. Chemistry is what they sell to people who have to work in the morning. This is the only hour in the building that isn't for sale. Her eyes are bright and far. The gown is still the gown. The bed is still made. She is on the floor now because the chair was a theory and the floor is honest. If you want the street, the window is still a window. If you want another pull, the safe didn't lock itself. If you want to be sensible, be sensible later. Sensible is how Mother lives.";
  }
  if (node === "room-fly-street") {
    return "The glass is cold when you find it. Virgin Street has been edited. The taillights are long as banners. A horn starts and never quite finishes. She comes to the window because you did, not because the city asked, and she names the cars the way a bored heiress names people she doesn't intend to remember. Bishop black, that's ours, don't wave. Mordino red, if it's coughing it's theirs. A white one that doesn't belong to anybody honest, which means NCR or a man who wishes he was. Hub money walks like the sidewalk is a favor. She puts two fingers on the pane and the neon climbs them, pink then blue. Downstairs they are losing chips and calling it a night out. Up here the night is the size of the dose. She is not performing the daughter. She is not performing anything. For a while she doesn't talk, and the not-talking is the kindest thing she's done since the rail. The party can take another pull, she says, almost idle. Or it can be this, the street doing the work, until the colors start telling the truth again. Your call. I'm already where I meant to be.";
  }
  if (node === "room-fly-again") {
    return "The second one is ruder. She warned you with her eyebrows and then didn't wait to see if you were noble about it. The ceiling, which had settled into a country, lifts again and this time it takes the mirror with it. Your mouth is dry in a way that feels like a fact from another year. She caps the first inhaler, opens the second, and shares it without a toast. Toasts are for the guest stair. The band drops out of the building entirely. What replaces it is the radiator, the curtain breathing, a cart in the hall that thinks better of the door and keeps thinking. She sits with her back to the bed that still has not been disturbed, knees up, the gown pooled, and she tells you one true thing and then gets bored of truth. I don't want the morning, she says. The morning is when Daddy counts faces and Mother counts mistakes and I go back to being furniture with a mouth. So don't be boring about the next few hours. Be here. The Jet will do the rest until it doesn't.";
  }
  if (node === "room-night") {
    return "You stay, and you stay sober, which she allows the way she allows a closed window. The band downstairs changes songs twice and then plays the first one again like nobody would dare correct it. A car on Virgin Street argues with a horn and loses. She kills the lamp and leaves the neon to do the work, pink then blue then pink, a slow pulse on the gold mirror. For a while neither of you performs. She tells you the mayor's please, and the funeral she isn't supposed to mention, and a dealer who cried, and then she stops telling you things, which costs her something she won't name. The chair is worse than it looks. The city keeps a hand on the window. She does not offer the safe again. She does not sit on the bed. Somewhere near the grey she says, almost kind, and kindness on her sounds like a dialect, Don't be here when the maids come. Daddy counts faces. The painting stays crooked. The night was a conversation. That's all she was willing to spend without the glass.";
  }
  if (node === "room-night-jet") {
    return "Hours lose their edges and then lose the idea of edges. The carpet breathes once and decides against it. She stays on the floor with her back to the unused bed and names whatever the window gives her, then names it wrong on purpose, then laughs at the wrongness and lets it go. Bishop black. Mordino red. A white honesty that isn't. You come down in pieces. Mouth dry. The lamp is too bright when a car's headlights find the crack in the curtain, and she leaves every light off except the city. The safe is still open like a mouth that forgot to close. She talks less. What she does say is smaller. A dress. A funeral. The service stair. Don't repeat any of it, she says, not as a threat, as a fact. Threats are Mason's job. Downstairs the band has either stopped or become part of the building. You couldn't swear which. The party is the long middle of the dose, and the middle is ending whether you vote or not.";
  }
  if (node === "room-jet-down") {
    return "The comedown is polite and then it isn't. Color drains out of the mirror first, then out of her voice. The ceiling is a ceiling. The ticks are ticks. Your tongue feels borrowed. She caps whatever is still open and sets the glass in the safe with more care than she gave the conversation, then she tips the painting toward straight and doesn't quite finish the job. Dawn is a grey line under the curtain, thin as a lie. She is already bored of the person she was at midnight, and she looks at you like you might become a story if you stay too long in the chair. One spare sits by your coat. She puts it there without commentary, a tip she will deny in the daylight if anyone is stupid enough to ask. Don't be here when the maids come, she says again, or maybe she only says it once and the Jet kept it. Daddy counts faces. I don't feel like being counted. The bed is still made. That part she seems, faintly, to respect.";
  }
  if (node === "morning") {
    return "You wake in the chair, neck wrong, Virgin Street gone the color of tin. Angela is not in the room. The bed is turned down at one corner and unused, a maid's idea of a night that didn't happen. The painting hangs straight. The safe is a rumor behind it. The key is gone from the vanity. A cart ticks in the hall and then thinks better of this door, the way carts do when the family name is on the other side. On a Shark Club card, in a hand that learned penmanship to annoy someone: Don't be boring about it. The neon is dead. The mirror is just a mirror, crack and all. The room smells like her perfume and like nothing else. No glass. No second story. You were a person in a chair until the light changed, and the building has already filed you under not a problem.";
  }
  if (node === "morning-jet") {
    return "You wake on the far side of the night, mouth dry, the lamp too honest, the chair remembering you better than the room does. Angela is gone. The safe is shut. The painting is straight, or straight enough that a maid won't report it. The bed is still made on the side nobody used. One capped inhaler sits in your coat like she meant the pocket and not the person. The card on the vanity says what she says when she doesn't want a scene. Don't be boring about it. Your head disagrees, politely, for about an hour, and then less politely. Grey light. A cart in the hall. The third floor pretending it slept. Downstairs someone is already counting last night's chips, and none of those chips are this. The party was the glass and the ceiling and the hours that wouldn't keep their shape. The morning is the Shark Club again. You take the service stair. The guest stair is for people who want to be seen leaving.";
  }
  if (node === "reject-soft") {
    return "Whatever. Go be boring somewhere else. I'm Angela Bishop. I don't wait.";
  }
  if (node === "reject-rank") {
    return "You're right: Daddy IS head of Family Bishop. That's why you're still standing. Get out of my sight.";
  }
  if (node === "low-yum") {
    return "…Okay. That's a new one. You want a drink, a nap, or should I call the doctor Daddy keeps for the Golden Globes girls?";
  }
  if (node === "low-iam") {
    return "Iam. Cute. Some triggerman who shoots his friends in the back. Don't stand behind me, vault-baby.";
  }
  if (node === "low-rabbits") {
    return "George and the rabbits. That's a story. Keep your voice down anyway — Mason hates a scene.";
  }
  if (node === "rival-mordino") {
    return "You work for Big Jesus and you walked up here. That's either stupid or a message. Mason is already looking.";
  }
  if (node === "rival-wright") {
    return "A Wright. Orville's people don't drink on this carpet. Richard's funeral was enough politics for one family.";
  }
  if (node === "rival-salv") {
    return "Salvatore's toy. The old man with the tank. You here to count lasers or to bore me?";
  }
  return introLine(c);
}

export function angelaOpen(character: Character, life: RenoLife): AngelaView {
  const c = ctxOf(character, life);
  const node = "intro";
  return { node, line: lineFor(node, c), replies: repliesFor(node, c) };
}

export function angelaCurrent(character: Character, life: RenoLife): AngelaView {
  const c = ctxOf(character, life);
  const node = life.dialogue?.node ?? "intro";
  return { node, line: lineFor(node, c), replies: repliesFor(node, c) };
}

export function angelaReply(
  character: Character,
  life: RenoLife,
  replyId: string,
): { life: RenoLife; view: AngelaView | null } {
  const c = ctxOf(character, life);
  const current = life.dialogue?.node ?? "intro";
  const choice = repliesFor(current, c).find((r) => r.id === replyId);
  const next = choice?.next ?? "close-polite";
  const angela = { ...life.angela, met: true, lastTalkDay: life.day };

  if (next === "close-polite") {
    return {
      life: { ...life, angela, dialogue: null },
      view: { node: next, line: "She looks past you at the floor. You're dismissed.", replies: [], closed: true },
    };
  }
  if (next === "close-rejected") {
    angela.mood = "rejected";
    angela.insulted = true;
    return {
      life: { ...life, angela, dialogue: null, gangRep: { ...life.gangRep, bishops: life.gangRep.bishops - 4 } },
      view: { node: next, line: "My father is going to KILL you when he hears how you treated me.", replies: [], closed: true },
    };
  }
  if (next === "close-mad") {
    angela.mood = "mad";
    angela.insulted = true;
    return {
      life: {
        ...life,
        angela,
        dialogue: null,
        heat: Math.min(100, life.heat + 6),
        gangRep: { ...life.gangRep, bishops: life.gangRep.bishops - 8 },
      },
      view: { node: next, line: "Mason. The rail. Now.", replies: [], closed: true },
    };
  }
  if (next === "close-hot" || next === "close-hot-jet") {
    angela.mood = "hot";
    angela.slept = true;
    angela.jetOffer = true;
    const flew = next === "close-hot-jet";
    const stash = flew ? { ...life.stash, jet: life.stash.jet + 1 } : life.stash;
    const add = flew ? 8 : 6;
    const hour = life.hour + add;
    const rolled = hour >= 24;
    return {
      life: {
        ...life,
        angela,
        dialogue: null,
        stash,
        fame: life.fame + 1,
        hour: rolled ? hour - 24 : hour,
        day: life.day + (rolled ? 1 : 0),
        fatigue: Math.min(100, (life.fatigue ?? 12) + 22),
        boredom: Math.max(0, (life.boredom ?? 28) - 34),
        gangRep: { ...life.gangRep, bishops: life.gangRep.bishops + (life.gangId === "bishops" ? 2 : 0) },
      },
      view: {
        node: next,
        line: flew
          ? "The service stair. A different song downstairs. One inhaler in the coat, and the third floor already forgetting your face."
          : "The service stair. The band has changed songs. Her room is behind you, painting straight, bed unused. The Shark Club does not say good morning.",
        replies: [],
        closed: true,
      },
    };
  }

  if (next === "jet") angela.jetOffer = true;
  if (next === "upstairs") angela.mood = "flirt";

  const view: AngelaView = {
    node: next,
    line: lineFor(next, { ...c, life: { ...life, angela } }),
    replies: repliesFor(next, { ...c, life: { ...life, angela } }),
  };
  return {
    life: { ...life, angela, dialogue: { who: "angela", node: next } },
    view,
  };
}

export function angelaPresent(life: RenoLife): boolean {
  return life.district === "shark" || life.district === "bishop";
}

export function angelaHook(life: RenoLife): string {
  if (!angelaPresent(life)) return "";
  if (life.angela.mood === "mad") return "Angela Bishop is on the second-floor rail. She is not smiling.";
  if (life.angela.slept) return "Angela Bishop is on the rail again, bored, like last night didn't happen.";
  if (life.angela.met) return "Angela Bishop is on the second-floor rail. She already knows your face.";
  return "A bored young woman on the second-floor rail watches the floor like she owns it. That's Angela Bishop.";
}

export function gangRankName(life: RenoLife): string {
  if (!life.gangId) return "Independent";
  const gang = GANG_BY_ID[life.gangId];
  const idx = Math.max(0, Math.min(gang.ranks.length - 1, life.gangRank - 1));
  return `${gang.name} · ${gang.ranks[idx] ?? "Associate"}`;
}
