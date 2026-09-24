import { GENDER_META, SKILL_META, SPECIAL_META, genderOf } from "./data";
import { derive } from "./engine";
import { educationOf, lifeOf, scarsOf } from "./paths";
import { SKILL_IDS, SPECIAL_KEYS, characterEngine, type Character } from "./types";

export interface MascotLine {
  mood: "cheer" | "wow" | "ouch" | "flirt";
  text: string;
}

function lowestSpecial(character: Character) {
  const d = derive(character);
  return SPECIAL_KEYS.reduce((best, key) =>
    d.special[key] < d.special[best] ? key : best,
  );
}

function highestSpecial(character: Character) {
  const d = derive(character);
  return SPECIAL_KEYS.reduce((best, key) =>
    d.special[key] > d.special[best] ? key : best,
  );
}

export function mascotLines(character: Character): MascotLine[] {
  const d = derive(character);
  const pnp = characterEngine(character) === "pnp";
  const lines: MascotLine[] = [];
  const name = character.name.trim() || "this blank-name mystery";
  const rolled = character.rolled;
  const ones = SPECIAL_KEYS.filter((k) => rolled[k] === 1);
  const tens = SPECIAL_KEYS.filter((k) => rolled[k] === 10);
  const lows = SPECIAL_KEYS.filter((k) => d.special[k] <= 2);
  const highs = SPECIAL_KEYS.filter((k) => d.special[k] >= 11);
  const hi = highestSpecial(character);
  const lo = lowestSpecial(character);
  const unit = d.skillUnit;

  if (d.rolledTotal === 0) {
    lines.push({
      mood: "flirt",
      text: pnp
        ? "Hi, I'm Roxy. This is the old percentile desk. Roll seven d10s. We still keep ones. No vault padded you to 5s, and there is no background candy."
        : "Hi, I'm Roxy. Roll the array. We keep ones. We keep tens. No little safety net coming to kiss it better.",
    });
    return lines;
  }

  if (pnp) {
    lines.push({
      mood: "cheer",
      text: `d100 sheet. Skills are percents. Tag is +${d.tagBonus}${unit}. Roll under the number or eat dirt.`,
    });
  }

  if (ones.length) {
    lines.push({
      mood: "ouch",
      text:
        ones.length === 1
          ? `A raw 1 in ${SPECIAL_META[ones[0]!].name}. We leave it. That's the whole personality of this engine, baby.`
          : `Ones in ${ones.map((k) => SPECIAL_META[k].name).join(" and ")}. Tragic. Hot. We're not padding them to 3.`,
    });
  }

  if (tens.length >= 2) {
    lines.push({
      mood: "wow",
      text: `${tens.length} tens on the dice. Somebody's dice are flirting back.`,
    });
  } else if (tens.length === 1) {
    lines.push({
      mood: "cheer",
      text: pnp
        ? `Natural 10 ${SPECIAL_META[tens[0]!].name}. Direct stat checks still use a d10. Skills don't care — they live on percentile.`
        : `Natural 10 ${SPECIAL_META[tens[0]!].name}. Direct d10 checks still fail on a 10, so don't get cocky.`,
    });
  }

  if (d.rolledTotal <= 21) {
    lines.push({
      mood: "ouch",
      text: `Rolled total ${d.rolledTotal}. A safety net would have dragged this up. We don't. Lean into the disaster.`,
    });
  } else if (d.rolledTotal >= 56) {
    lines.push({
      mood: "wow",
      text: `Rolled total ${d.rolledTotal}. Old nets would have shaved you. Keep the extra. Be greedy.`,
    });
  }

  if (highs.length) {
    lines.push({
      mood: "wow",
      text: pnp
        ? `${SPECIAL_META[hi].name} at ${d.special[hi]}. Classic PnP racial max was 10. We ignored it. Your ${SKILL_META.smallGuns.name} formula is drinking that.`
        : `${SPECIAL_META[hi].name} at ${d.special[hi]}. Past 10 is legal here. Direct checks still cap at 1–9, but the formulas are drooling.`,
    });
  }

  if (lows.length && d.rolledTotal > 0) {
    lines.push({
      mood: "ouch",
      text: `${SPECIAL_META[lo].name} ${d.special[lo]}. Recoil, skills, carry — something is going to feel that.`,
    });
  }

  if (character.traits.includes("gifted")) {
    lines.push({
      mood: "flirt",
      text: pnp
        ? "Gifted on the d100 sheet: +1 every SPECIAL, −10% every skill, −5 skill points a level. Pretty. Expensive. I respect it."
        : "Gifted? Plus one on every SPECIAL, minus two on every skill. Pretty and slightly useless until the levels kick in. I respect it.",
    });
  }
  if (character.traits.includes("finesse")) {
    lines.push({
      mood: "cheer",
      text: pnp
        ? `Finesse is +10% crit chance and −30% damage after DR. Crit chance sits at ${d.criticalChance}%. Stab fancy, hit like a pamphlet.`
        : `Finesse widens crits to ${d.criticalRange} and slaps melee for −4. Don't tag Unarmed unless you like punching with a pamphlet.`,
    });
  }
  if (character.traits.includes("skilled")) {
    lines.push({
      mood: "cheer",
      text: pnp
        ? `Skilled: +10% all skills, +5 SP/level, perks every ${d.perkInterval}. Homework kid energy. Strong.`
        : "Skilled is the homework kid. Plus two skills, extra point a level, perks every four instead of three. Boring. Strong.",
    });
  }
  if (character.traits.includes("jinxed")) {
    lines.push({
      mood: "flirt",
      text: pnp
        ? "Jinxed: failures around you become critical failures 50% more often. Take her to parties. Do not take her to firing ranges."
        : "Jinxed makes the whole fight crit-fail on 18–20. Take her to parties. Do not take her to firing ranges.",
    });
  }
  if ((character.traits as string[]).includes("lifegiver")) {
    lines.push({
      mood: "wow",
      text: `Lifegiver is a perk in this engine, but it's still stuffing ${4 * Math.max(character.level, 0)} extra HP into ${name}. Tankini energy.`,
    });
  }
  if (character.traits.includes("bruiser")) {
    lines.push({
      mood: "wow",
      text: `Bruiser stacked +2 Strength onto ${d.special.STR} and stole 2 AP. You're a truck with a late turn.`,
    });
  }
  if (character.traits.includes("smallFrame")) {
    lines.push({
      mood: "flirt",
      text: `Small Frame. Agility ${d.special.AG}, carry ${d.carryWeight} lb. Fast girl energy. The minigun stays in the fantasy.`,
    });
  }
  if (character.traits.includes("kamikaze")) {
    lines.push({
      mood: "wow",
      text: `Kamikaze. Sequence ${d.sequence}, AC is just the suit. You go first. You also get hit. I like the honesty.`,
    });
  }
  if (character.traits.includes("heavyHanded")) {
    lines.push({
      mood: "cheer",
      text: `Heavy Handed. Melee ${d.meleeDamage >= 0 ? "+" : ""}${d.meleeDamage}. Crits got shyer. Fists did not.`,
    });
  }
  if (character.traits.includes("fastMetabolism")) {
    lines.push({
      mood: "cheer",
      text: `Fast Metabolism. Heal ${d.healingRate}/day, poison and rad start at zero. You burn through stims AND snake bites. Commit.`,
    });
  }
  if (character.traits.includes("techWizard")) {
    lines.push({
      mood: "wow",
      text: `Tech Wizard. Perception took a haircut so Science could eat. I respect a nerd who admits they don't see the door.`,
    });
  }
  if (character.traits.includes("goodNatured")) {
    lines.push({
      mood: "cheer",
      text: pnp
        ? "Good Natured. Combat skills took a 10% haircut so you could talk and stitch. Cute. Don't tag Small Guns after that unless you enjoy irony."
        : "Good Natured. +4 talk and stitch, −2 every gun and fist skill. Cute. Don't tag Small Guns after that unless you enjoy irony.",
    });
  }
  if (character.traits.includes("sexAppeal")) {
    const g = genderOf(character);
    lines.push({
      mood: "flirt",
      text:
        g === "male"
          ? "Sex Appeal is on the sheet. Women treat Charisma like it grew. Men want you off the floor. I know which half I am."
          : g === "female"
            ? "Sex Appeal is on the sheet. Men treat Charisma like it grew. Women want you off the floor. I know which half I am."
            : "Sex Appeal is on the sheet. Half the room is +40% Speech. The other half wants you to leave. I know which half I am.",
    });
  }

  if (genderOf(character) !== "other") {
    const g = genderOf(character);
    lines.push({
      mood: "cheer",
      text: `Dossier says ${GENDER_META[g].name.toLowerCase()}. Angela Bishop at the Shark Club will notice. So will Sex Appeal, if you took it.`,
    });
  }

  const education = educationOf(character.educationId);
  const life = lifeOf(character.lifeId);
  const scars = scarsOf(character.scars);
  if (education.id !== "none") {
    lines.push({
      mood: education.id === "street" || education.id === "scribe" || education.id === "gamblerHall" ? "flirt" : "cheer",
      text: education.hook,
    });
  }
  if (life.id !== "none") {
    lines.push({
      mood: life.id === "raider" || life.id === "collar" || life.id === "glowWalker" ? "wow" : "cheer",
      text: life.hook,
    });
  }
  if (scars.length) {
    lines.push({
      mood: "ouch",
      text:
        scars.length === 1
          ? scars[0]!.hook
          : `${scars.map((s) => s.name).join(" and ")}. Each one is a bill with a refund. The paper is keeping receipts.`,
    });
  }

  if (!pnp && character.backgroundId === "academic" && d.special.STR <= 5) {
    lines.push({
      mood: "flirt",
      text: "Academic with noodle arms. I'll hold the rifle. You hold the thoughts. We can make this look intentional.",
    });
  }
  if (!pnp && character.backgroundId === "criminal") {
    lines.push({
      mood: "cheer",
      text: "Criminal package. Agility candy. If you don't tag Sneak I will personally unzip my patience.",
    });
  }
  if (
    !pnp &&
    (character.backgroundId === "soldier" || character.backgroundId === "veteran")
  ) {
    lines.push({
      mood: "cheer",
      text: "Gun-line background. Small Guns and Big Guns already kissed you. Tag one of them and stop overthinking.",
    });
  }
  if (!pnp && character.backgroundId === "performer" && d.special.CH >= 10) {
    lines.push({
      mood: "flirt",
      text: `Charisma ${d.special.CH}. Speech is just Charisma in this engine, so that's a ${d.skills.speech.total} before tags. Talk people to death. It's cheaper than ammo.`,
    });
  }

  if (d.freeRemaining > 0 && d.rolledTotal > 0) {
    lines.push({
      mood: "cheer",
      text: `${d.freeRemaining} free SPECIAL still sitting in your lap. Spend them. They can go past 10. That's the point.`,
    });
  } else if (d.freeSpent >= 5) {
    const dump = SPECIAL_KEYS.filter((k) => (character.free[k] ?? 0) >= 3);
    if (dump.length) {
      lines.push({
        mood: "wow",
        text: `You poured free points into ${SPECIAL_META[dump[0]!].name}. Commitment. I like a builder who picks a lane.`,
      });
    }
  }

  if (character.tagged.length === 0 && d.rolledTotal > 0) {
    lines.push({
      mood: "ouch",
      text: pnp
        ? "Zero tag skills. That's +20% sitting on the table, twice as fast to raise. Tag the thing you actually roll."
        : "Zero tag skills. That's plus four sitting on the table. Tag the thing you actually want to roll, not the thing that looks cool in the mirror.",
    });
  } else if (character.tagged.length) {
    const bestTag = character.tagged
      .slice()
      .sort((a, b) => d.skills[b].total - d.skills[a].total)[0];
    if (bestTag) {
      lines.push({
        mood: "cheer",
        text: `${SKILL_META[bestTag].name} tagged at ${d.skills[bestTag].total}${unit}. That's the toy. Build the rest of the sheet around it.`,
      });
    }
  }

  if (d.hp >= 50) {
    lines.push({
      mood: "wow",
      text: `${d.hp} HP at level ${character.level}. You're a building. People will still shoot the head.`,
    });
  }
  if (d.ap >= 12) {
    lines.push({
      mood: "wow",
      text: `${d.ap} AP. That's a whole extra life in a round. Agility ${d.special.AG} is doing cardio.`,
    });
  }
  if (d.carryWeight < 50) {
    lines.push({
      mood: "ouch",
      text: `${d.carryWeight} pounds of carry. Pack a knife and a snack. The minigun stays in the fantasy.`,
    });
  }
  if (d.overweight) {
    lines.push({
      mood: "ouch",
      text: `${d.carriedWeight} lb on a ${d.carryWeight} lb back. Drop something or grow a spine.`,
    });
  }
  if (d.gearArmorAc > 0) {
    lines.push({
      mood: "cheer",
      text: pnp
        ? `Armor AC ${d.gearArmorAc}% from the suit, DT ${d.gearDt} / DR ${d.gearDr}%. That's the sheet talking, not a handwritten guess.`
        : `Worn armor is feeding AC ${d.gearArmorAc} (PnP AC ÷ 5). DT ${d.gearDt}, DR ${d.gearDr}%. Don't also type a fake number unless you mean to.`,
    });
  }

  const topSkill = SKILL_IDS.slice().sort(
    (a, b) => d.skills[b].total - d.skills[a].total,
  )[0];
  if (topSkill && d.skills[topSkill].total >= (pnp ? 60 : 16)) {
    lines.push({
      mood: "wow",
      text: pnp
        ? `${SKILL_META[topSkill].name} ${d.skills[topSkill].total}% at chargen. That's a professional. Don't miss on a 02 and then blame me.`
        : `${SKILL_META[topSkill].name} ${d.skills[topSkill].total} at chargen. Difficulty +4 still leaves a real Success Number. Mean.`,
    });
  }

  if (lines.length === 0) {
    lines.push({
      mood: "cheer",
      text: `${name} is sitting in the middle of the bell curve. That's a survivor, not a poster. We can work with it.`,
    });
  }

  const seen = new Set<string>();
  const unique = lines.filter((line) => {
    if (seen.has(line.text)) return false;
    seen.add(line.text);
    return true;
  });

  const moodRank: Record<MascotLine["mood"], number> = {
    wow: 0,
    ouch: 1,
    flirt: 2,
    cheer: 3,
  };
  unique.sort((a, b) => moodRank[a.mood] - moodRank[b.mood]);
  return unique.slice(0, 3);
}
