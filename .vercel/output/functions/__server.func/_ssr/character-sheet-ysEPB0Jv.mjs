import { y as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { $ as stackItem, D as characterEngine, H as genderOf, I as educationOf, J as resistLine, N as derive, R as ensureLoadout, T as armorAcFor, U as getItem, V as formatDamage, W as lifeOf, Z as scarsOf, _ as SKILL_IDS, b as SPECIAL_META, c as GENDER_META, k as cn, tt as traitName, v as SKILL_META, y as SPECIAL_KEYS } from "./store-CHBbC2-O.mjs";
import { n as LoadoutBoard, r as PackTable, t as Badge } from "./loadout-board-DvCxvGCw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/character-sheet-ysEPB0Jv.js
var import_jsx_runtime = require_jsx_runtime();
function lowestSpecial(character) {
	const d = derive(character);
	return SPECIAL_KEYS.reduce((best, key) => d.special[key] < d.special[best] ? key : best);
}
function highestSpecial(character) {
	const d = derive(character);
	return SPECIAL_KEYS.reduce((best, key) => d.special[key] > d.special[best] ? key : best);
}
function mascotLines(character) {
	const d = derive(character);
	const pnp = characterEngine(character) === "pnp";
	const lines = [];
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
			text: pnp ? "Hi, I'm Roxy. This is the old percentile desk. Roll seven d10s. We still keep ones. No vault padded you to 5s, and there is no background candy." : "Hi, I'm Roxy. Roll the array. We keep ones. We keep tens. No little safety net coming to kiss it better."
		});
		return lines;
	}
	if (pnp) lines.push({
		mood: "cheer",
		text: `d100 sheet. Skills are percents. Tag is +${d.tagBonus}${unit}. Roll under the number or eat dirt.`
	});
	if (ones.length) lines.push({
		mood: "ouch",
		text: ones.length === 1 ? `A raw 1 in ${SPECIAL_META[ones[0]].name}. We leave it. That's the whole personality of this engine, baby.` : `Ones in ${ones.map((k) => SPECIAL_META[k].name).join(" and ")}. Tragic. Hot. We're not padding them to 3.`
	});
	if (tens.length >= 2) lines.push({
		mood: "wow",
		text: `${tens.length} tens on the dice. Somebody's dice are flirting back.`
	});
	else if (tens.length === 1) lines.push({
		mood: "cheer",
		text: pnp ? `Natural 10 ${SPECIAL_META[tens[0]].name}. Direct stat checks still use a d10. Skills don't care — they live on percentile.` : `Natural 10 ${SPECIAL_META[tens[0]].name}. Direct d10 checks still fail on a 10, so don't get cocky.`
	});
	if (d.rolledTotal <= 21) lines.push({
		mood: "ouch",
		text: `Rolled total ${d.rolledTotal}. A safety net would have dragged this up. We don't. Lean into the disaster.`
	});
	else if (d.rolledTotal >= 56) lines.push({
		mood: "wow",
		text: `Rolled total ${d.rolledTotal}. Old nets would have shaved you. Keep the extra. Be greedy.`
	});
	if (highs.length) lines.push({
		mood: "wow",
		text: pnp ? `${SPECIAL_META[hi].name} at ${d.special[hi]}. Classic PnP racial max was 10. We ignored it. Your ${SKILL_META.smallGuns.name} formula is drinking that.` : `${SPECIAL_META[hi].name} at ${d.special[hi]}. Past 10 is legal here. Direct checks still cap at 1–9, but the formulas are drooling.`
	});
	if (lows.length && d.rolledTotal > 0) lines.push({
		mood: "ouch",
		text: `${SPECIAL_META[lo].name} ${d.special[lo]}. Recoil, skills, carry — something is going to feel that.`
	});
	if (character.traits.includes("gifted")) lines.push({
		mood: "flirt",
		text: pnp ? "Gifted on the d100 sheet: +1 every SPECIAL, −10% every skill, −5 skill points a level. Pretty. Expensive. I respect it." : "Gifted? Plus one on every SPECIAL, minus two on every skill. Pretty and slightly useless until the levels kick in. I respect it."
	});
	if (character.traits.includes("finesse")) lines.push({
		mood: "cheer",
		text: pnp ? `Finesse is +10% crit chance and −30% damage after DR. Crit chance sits at ${d.criticalChance}%. Stab fancy, hit like a pamphlet.` : `Finesse widens crits to ${d.criticalRange} and slaps melee for −4. Don't tag Unarmed unless you like punching with a pamphlet.`
	});
	if (character.traits.includes("skilled")) lines.push({
		mood: "cheer",
		text: pnp ? `Skilled: +10% all skills, +5 SP/level, perks every ${d.perkInterval}. Homework kid energy. Strong.` : "Skilled is the homework kid. Plus two skills, extra point a level, perks every four instead of three. Boring. Strong."
	});
	if (character.traits.includes("jinxed")) lines.push({
		mood: "flirt",
		text: pnp ? "Jinxed: failures around you become critical failures 50% more often. Take her to parties. Do not take her to firing ranges." : "Jinxed makes the whole fight crit-fail on 18–20. Take her to parties. Do not take her to firing ranges."
	});
	if (character.traits.includes("lifegiver")) lines.push({
		mood: "wow",
		text: `Lifegiver is a perk in this engine, but it's still stuffing ${4 * Math.max(character.level, 0)} extra HP into ${name}. Tankini energy.`
	});
	if (character.traits.includes("bruiser")) lines.push({
		mood: "wow",
		text: `Bruiser stacked +2 Strength onto ${d.special.STR} and stole 2 AP. You're a truck with a late turn.`
	});
	if (character.traits.includes("smallFrame")) lines.push({
		mood: "flirt",
		text: `Small Frame. Agility ${d.special.AG}, carry ${d.carryWeight} lb. Fast girl energy. The minigun stays in the fantasy.`
	});
	if (character.traits.includes("kamikaze")) lines.push({
		mood: "wow",
		text: `Kamikaze. Sequence ${d.sequence}, AC is just the suit. You go first. You also get hit. I like the honesty.`
	});
	if (character.traits.includes("heavyHanded")) lines.push({
		mood: "cheer",
		text: `Heavy Handed. Melee ${d.meleeDamage >= 0 ? "+" : ""}${d.meleeDamage}. Crits got shyer. Fists did not.`
	});
	if (character.traits.includes("fastMetabolism")) lines.push({
		mood: "cheer",
		text: `Fast Metabolism. Heal ${d.healingRate}/day, poison and rad start at zero. You burn through stims AND snake bites. Commit.`
	});
	if (character.traits.includes("techWizard")) lines.push({
		mood: "wow",
		text: `Tech Wizard. Perception took a haircut so Science could eat. I respect a nerd who admits they don't see the door.`
	});
	if (character.traits.includes("goodNatured")) lines.push({
		mood: "cheer",
		text: pnp ? "Good Natured. Combat skills took a 10% haircut so you could talk and stitch. Cute. Don't tag Small Guns after that unless you enjoy irony." : "Good Natured. +4 talk and stitch, −2 every gun and fist skill. Cute. Don't tag Small Guns after that unless you enjoy irony."
	});
	if (character.traits.includes("sexAppeal")) {
		const g = genderOf(character);
		lines.push({
			mood: "flirt",
			text: g === "male" ? "Sex Appeal is on the sheet. Women treat Charisma like it grew. Men want you off the floor. I know which half I am." : g === "female" ? "Sex Appeal is on the sheet. Men treat Charisma like it grew. Women want you off the floor. I know which half I am." : "Sex Appeal is on the sheet. Half the room is +40% Speech. The other half wants you to leave. I know which half I am."
		});
	}
	if (genderOf(character) !== "other") {
		const g = genderOf(character);
		lines.push({
			mood: "cheer",
			text: `Dossier says ${GENDER_META[g].name.toLowerCase()}. Angela Bishop at the Shark Club will notice. So will Sex Appeal, if you took it.`
		});
	}
	const education = educationOf(character.educationId);
	const life = lifeOf(character.lifeId);
	const scars = scarsOf(character.scars);
	if (education.id !== "none") lines.push({
		mood: education.id === "street" || education.id === "scribe" || education.id === "gamblerHall" ? "flirt" : "cheer",
		text: education.hook
	});
	if (life.id !== "none") lines.push({
		mood: life.id === "raider" || life.id === "collar" || life.id === "glowWalker" ? "wow" : "cheer",
		text: life.hook
	});
	if (scars.length) lines.push({
		mood: "ouch",
		text: scars.length === 1 ? scars[0].hook : `${scars.map((s) => s.name).join(" and ")}. Each one is a bill with a refund. The paper is keeping receipts.`
	});
	if (!pnp && character.backgroundId === "academic" && d.special.STR <= 5) lines.push({
		mood: "flirt",
		text: "Academic with noodle arms. I'll hold the rifle. You hold the thoughts. We can make this look intentional."
	});
	if (!pnp && character.backgroundId === "criminal") lines.push({
		mood: "cheer",
		text: "Criminal package. Agility candy. If you don't tag Sneak I will personally unzip my patience."
	});
	if (!pnp && (character.backgroundId === "soldier" || character.backgroundId === "veteran")) lines.push({
		mood: "cheer",
		text: "Gun-line background. Small Guns and Big Guns already kissed you. Tag one of them and stop overthinking."
	});
	if (!pnp && character.backgroundId === "performer" && d.special.CH >= 10) lines.push({
		mood: "flirt",
		text: `Charisma ${d.special.CH}. Speech is just Charisma in this engine, so that's a ${d.skills.speech.total} before tags. Talk people to death. It's cheaper than ammo.`
	});
	if (d.freeRemaining > 0 && d.rolledTotal > 0) lines.push({
		mood: "cheer",
		text: `${d.freeRemaining} free SPECIAL still sitting in your lap. Spend them. They can go past 10. That's the point.`
	});
	else if (d.freeSpent >= 5) {
		const dump = SPECIAL_KEYS.filter((k) => (character.free[k] ?? 0) >= 3);
		if (dump.length) lines.push({
			mood: "wow",
			text: `You poured free points into ${SPECIAL_META[dump[0]].name}. Commitment. I like a builder who picks a lane.`
		});
	}
	if (character.tagged.length === 0 && d.rolledTotal > 0) lines.push({
		mood: "ouch",
		text: pnp ? "Zero tag skills. That's +20% sitting on the table, twice as fast to raise. Tag the thing you actually roll." : "Zero tag skills. That's plus four sitting on the table. Tag the thing you actually want to roll, not the thing that looks cool in the mirror."
	});
	else if (character.tagged.length) {
		const bestTag = character.tagged.slice().sort((a, b) => d.skills[b].total - d.skills[a].total)[0];
		if (bestTag) lines.push({
			mood: "cheer",
			text: `${SKILL_META[bestTag].name} tagged at ${d.skills[bestTag].total}${unit}. That's the toy. Build the rest of the sheet around it.`
		});
	}
	if (d.hp >= 50) lines.push({
		mood: "wow",
		text: `${d.hp} HP at level ${character.level}. You're a building. People will still shoot the head.`
	});
	if (d.ap >= 12) lines.push({
		mood: "wow",
		text: `${d.ap} AP. That's a whole extra life in a round. Agility ${d.special.AG} is doing cardio.`
	});
	if (d.carryWeight < 50) lines.push({
		mood: "ouch",
		text: `${d.carryWeight} pounds of carry. Pack a knife and a snack. The minigun stays in the fantasy.`
	});
	if (d.overweight) lines.push({
		mood: "ouch",
		text: `${d.carriedWeight} lb on a ${d.carryWeight} lb back. Drop something or grow a spine.`
	});
	if (d.gearArmorAc > 0) lines.push({
		mood: "cheer",
		text: pnp ? `Armor AC ${d.gearArmorAc}% from the suit, DT ${d.gearDt} / DR ${d.gearDr}%. That's the sheet talking, not a handwritten guess.` : `Worn armor is feeding AC ${d.gearArmorAc} (PnP AC ÷ 5). DT ${d.gearDt}, DR ${d.gearDr}%. Don't also type a fake number unless you mean to.`
	});
	const topSkill = SKILL_IDS.slice().sort((a, b) => d.skills[b].total - d.skills[a].total)[0];
	if (topSkill && d.skills[topSkill].total >= (pnp ? 60 : 16)) lines.push({
		mood: "wow",
		text: pnp ? `${SKILL_META[topSkill].name} ${d.skills[topSkill].total}% at chargen. That's a professional. Don't miss on a 02 and then blame me.` : `${SKILL_META[topSkill].name} ${d.skills[topSkill].total} at chargen. Difficulty +4 still leaves a real Success Number. Mean.`
	});
	if (lines.length === 0) lines.push({
		mood: "cheer",
		text: `${name} is sitting in the middle of the bell curve. That's a survivor, not a poster. We can work with it.`
	});
	const seen = /* @__PURE__ */ new Set();
	const unique = lines.filter((line) => {
		if (seen.has(line.text)) return false;
		seen.add(line.text);
		return true;
	});
	const moodRank = {
		wow: 0,
		ouch: 1,
		flirt: 2,
		cheer: 3
	};
	unique.sort((a, b) => moodRank[a.mood] - moodRank[b.mood]);
	return unique.slice(0, 3);
}
function CharacterSheet({ character, compact = false }) {
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierPage, {
		character,
		compact: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierPage, { character }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadoutPage, { character }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryPage, { character })
		]
	});
}
function DossierPage({ character, compact = false }) {
	const d = derive(character);
	const engine = characterEngine(character);
	const pnp = engine === "pnp";
	const education = educationOf(character.educationId);
	const life = lifeOf(character.lifeId);
	const scars = scarsOf(character.scars);
	const bgName = pnp ? "No background" : character.backgroundId === "custom" ? character.customBackground.name || "Custom" : character.backgroundId === "none" ? "—" : character.backgroundId;
	const loadout = ensureLoadout(character.loadout);
	const armor = stackItem(loadout, loadout.body);
	const helmet = stackItem(loadout, loadout.head);
	const left = stackItem(loadout, loadout.left);
	const right = stackItem(loadout, loadout.right);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "print-sheet print-page overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 border-b border-border px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[10px] tracking-[0.24em] text-subtle uppercase",
							children: [pnp ? "Fallout PnP · d100" : "SPECIAL d20", " · personnel dossier · sheet 1"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display truncate text-3xl leading-none font-semibold tracking-tight",
							children: character.name.trim() || "Unnamed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted capitalize",
							children: [
								GENDER_META[genderOf(character)].name,
								" · ",
								bgName,
								education.id !== "none" ? ` · ${education.name}` : "",
								life.id !== "none" ? ` · ${life.name}` : "",
								" · Level ",
								character.level,
								pnp ? ` · Karma ${character.karma ?? 0}` : ""
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] tracking-widest text-subtle uppercase",
							children: "Array"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-lg tabular-nums",
							children: d.finalTotal
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-subtle",
							children: ["rolled ", d.rolledTotal]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-7 divide-x divide-border border-b border-border",
				children: SPECIAL_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-1.5 py-3 text-center sm:px-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] tracking-widest text-subtle",
							children: key
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("font-display text-2xl leading-none tabular-nums sm:text-3xl", d.special[key] <= 2 && "text-danger", d.special[key] >= 11 && "text-accent"),
							children: d.special[key]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 font-mono text-[10px] text-subtle tabular-nums",
							children: [d.modifiers[key] >= 0 ? "+" : "", d.modifiers[key]]
						}),
						!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-2 h-1 max-w-12 overflow-visible rounded-full bg-inset",
							title: `${SPECIAL_META[key].name}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("h-1 rounded-full", d.special[key] < 0 ? "bg-danger" : "bg-accent"),
								style: { width: `${Math.min(100, Math.abs(d.special[key]) * 10)}%` }
							})
						}) : null
					]
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-px bg-border sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "HP",
						value: d.hp
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "AP",
						value: d.ap
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "AC",
						value: pnp ? `${d.ac}%` : d.ac
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Sequence",
						value: d.sequence
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Carry",
						value: `${d.carriedWeight}/${d.carryWeight} lb`,
						warn: d.overweight
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Melee",
						value: `${d.meleeDamage >= 0 ? "+" : ""}${d.meleeDamage}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Poison",
						value: pnp ? `${d.poisonResistance}%` : d.poisonResistance
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Radiation",
						value: pnp ? `${d.radiationResistance}%` : d.radiationResistance
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 px-5 py-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Healing / day",
						value: `${d.healingRate} HP`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Skill points / level",
						value: d.skillPointsPerLevel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Perks",
						value: `${d.perksEarned} (every ${d.perkInterval})`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: pnp ? "Critical chance" : "Critical range",
						value: d.criticalRange
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Armor AC",
						value: d.gearArmorAc ? pnp ? `${d.gearArmorAc}%` : d.gearArmorAc : character.armorAc
					}),
					pnp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Electricity",
						value: `${d.electricityResistance}%`
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Crit fail",
						value: character.traits.includes("jinxed") ? "18–20" : "20"
					}),
					d.gearDt || d.gearDr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "DT / DR",
						value: `${d.gearDt} / ${d.gearDr}%`
					}) : null
				]
			}),
			(armor || helmet || left || right) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 border-t border-border px-5 py-3 sm:grid-cols-2",
				children: [
					armor ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearLine, {
						label: "Body",
						name: armor.name,
						detail: pnp ? `AC ${armorAcFor(armor, engine)}%${resistLine(armor) ? ` · ${resistLine(armor)}` : ""}` : `AC ${armorAcFor(armor, engine)}${resistLine(armor) ? ` · ${resistLine(armor)}` : ""}`
					}) : null,
					helmet && !armor?.includesHelmet ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearLine, {
						label: "Head",
						name: helmet.name,
						detail: pnp ? `AC ${armorAcFor(helmet, engine)}%` : `AC ${armorAcFor(helmet, engine)}`
					}) : null,
					left ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearLine, {
						label: loadout.left === loadout.right ? "Both hands" : "Left",
						name: left.name,
						detail: formatDamage(left, engine)
					}) : null,
					right && loadout.right !== loadout.left ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearLine, {
						label: "Right",
						name: right.name,
						detail: formatDamage(right, engine)
					}) : null
				]
			}),
			character.traits.length > 0 || education.id !== "none" || life.id !== "none" || scars.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1.5 border-t border-border px-5 py-3",
				children: [
					education.id !== "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "accent",
						children: education.name
					}) : null,
					life.id !== "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "accent",
						children: life.name
					}) : null,
					character.traits.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: traitName(id, engine)
					}, id)),
					scars.map((scar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "danger",
						children: scar.name
					}, scar.id))
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-left text-[11px] tracking-wide text-subtle uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-2 font-medium",
								children: "Skill"
							}),
							!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "hidden px-2 py-2 font-medium sm:table-cell",
								children: "Formula"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2 text-right font-medium",
								children: pnp ? "Total %" : "Total"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SKILL_IDS.map((id) => {
						const row = d.skills[id];
						const tagged = character.tagged.includes(id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn(tagged && "text-accent"),
										children: SKILL_META[id].name
									}), tagged ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "accent",
										className: "ml-2",
										children: "Tag"
									}) : null]
								}),
								!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "hidden px-2 py-1.5 font-mono text-[11px] text-subtle sm:table-cell",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn(row.rewritten && "text-accent"),
											children: row.formula
										}),
										row.rewritten ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "accent",
											className: "ml-2",
											children: "rewritten"
										}) : null,
										row.background ? ` ${row.background > 0 ? "+" : ""}${row.background}` : "",
										row.trait ? ` ${row.trait > 0 ? "+" : ""}${row.trait}${pnp ? "%" : ""}` : "",
										row.tag ? ` +${row.tag}${pnp ? "%" : ""}` : "",
										row.path ? ` ${row.path > 0 ? "+" : ""}${row.path}${pnp ? "%" : ""} path` : ""
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-1.5 text-right font-mono tabular-nums",
									children: [row.total, pnp ? "%" : ""]
								})
							]
						}, id);
					}) })]
				})
			}),
			!compact && (character.appearance || character.history || character.goals || character.equipment || education.id !== "none" || life.id !== "none" || scars.length > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 border-t border-border px-5 py-4 sm:grid-cols-2",
				children: [
					education.id !== "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						label: `Education · ${education.name}`,
						text: `${education.story} ${education.summary}.`
					}) : null,
					life.id !== "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						label: `Life · ${life.name}`,
						text: `${life.story} ${life.summary}.`
					}) : null,
					scars.map((scar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						label: `Scar · ${scar.name}`,
						text: `${scar.story} ${scar.summary}.`
					}, scar.id)),
					character.appearance ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						label: "Appearance",
						text: character.appearance
					}) : null,
					character.history ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						label: "History",
						text: character.history
					}) : null,
					character.goals ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						label: "Goals",
						text: character.goals
					}) : null,
					character.equipment ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						label: "Equipment notes",
						text: character.equipment
					}) : null
				]
			}) : null
		]
	});
}
function LoadoutPage({ character }) {
	const pnp = characterEngine(character) === "pnp";
	const d = derive(character);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "print-sheet print-page overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-border px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[10px] tracking-[0.24em] text-subtle uppercase",
					children: [pnp ? "Fallout PnP · d100" : "SPECIAL d20", " · sheet 2 · body & pockets"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl leading-none font-semibold tracking-tight",
					children: [character.name.trim() || "Unnamed", " · loadout"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"Hands, helmet, armor. Pockets hold ammo, stimpaks, chems, and quick-access items. Carry ",
						d.carriedWeight,
						"/",
						d.carryWeight,
						" lb",
						d.overweight ? " · overweight" : "",
						"."
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadoutBoard, { character })
		})]
	});
}
function InventoryPage({ character }) {
	const pnp = characterEngine(character) === "pnp";
	const loadout = ensureLoadout(character.loadout);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "print-sheet print-page overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[10px] tracking-[0.24em] text-subtle uppercase",
						children: [pnp ? "Fallout PnP · d100" : "SPECIAL d20", " · sheet 3 · items & equipment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl leading-none font-semibold tracking-tight",
						children: "Pack"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: ["Everything carried, drawn from the PnP item list", pnp ? "." : " with armor AC converted for d20 (PnP AC ÷ 5)."]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-2 py-2 sm:px-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackTable, { character })
			}),
			loadout.pack.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border px-5 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] text-subtle",
					children: [
						loadout.pack.length,
						" stack",
						loadout.pack.length === 1 ? "" : "s",
						" ·",
						" ",
						loadout.pack.reduce((n, s) => n + s.qty, 0),
						" pieces ·",
						" ",
						loadout.pack.reduce((n, s) => n + (getItem(s.itemId)?.weight ?? 0) * s.qty, 0).toFixed(0),
						" ",
						"lb"
					]
				})
			}) : null,
			character.equipment ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border px-5 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
					label: "Other notes",
					text: character.equipment
				})
			}) : null
		]
	});
}
function GearLine({ label, name, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[10px] tracking-widest text-subtle uppercase",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm",
			children: name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[11px] text-muted",
			children: detail
		})
	] });
}
function StatChip({ label, value, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[10px] tracking-widest text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("font-display text-2xl leading-none tabular-nums", warn && "text-danger"),
			children: value
		})]
	});
}
function Meta({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] tracking-wide text-subtle uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-mono text-sm tabular-nums",
		children: value
	})] });
}
function Note({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] tracking-wide text-subtle uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm leading-relaxed text-muted",
		children: text
	})] });
}
//#endregion
export { mascotLines as n, CharacterSheet as t };
