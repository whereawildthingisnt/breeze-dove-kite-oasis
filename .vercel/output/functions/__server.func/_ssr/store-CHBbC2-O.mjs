import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-CHBbC2-O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SPECIAL_KEYS = [
	"STR",
	"PE",
	"EN",
	"CH",
	"IN",
	"AG",
	"LK"
];
var GENDER_IDS = [
	"male",
	"female",
	"other"
];
var SKILL_IDS = [
	"smallGuns",
	"bigGuns",
	"energyWeapons",
	"unarmed",
	"meleeWeapons",
	"throwing",
	"firstAid",
	"doctor",
	"sneak",
	"lockpick",
	"steal",
	"traps",
	"science",
	"repair",
	"pilot",
	"speech",
	"barter",
	"gambling",
	"outdoorsman"
];
/** Classic Fallout trait list, converted to d20 numbers. Lifegiver is a perk, not a trait. */
var D20_TRAIT_IDS = [
	"fastMetabolism",
	"bruiser",
	"smallFrame",
	"oneHander",
	"finesse",
	"kamikaze",
	"heavyHanded",
	"fastShot",
	"bloodyMess",
	"jinxed",
	"goodNatured",
	"chemReliant",
	"chemResistant",
	"nightPerson",
	"skilled",
	"gifted",
	"sexAppeal",
	"techWizard"
];
var PNP_TRAIT_IDS = [
	"fastMetabolism",
	"bruiser",
	"smallFrame",
	"oneHander",
	"finesse",
	"kamikaze",
	"heavyHanded",
	"fastShot",
	"bloodyMess",
	"jinxed",
	"goodNatured",
	"chemReliant",
	"chemResistant",
	"nightPerson",
	"skilled",
	"gifted",
	"sexAppeal",
	"techWizard"
];
var EDUCATION_IDS = [
	"none",
	"street",
	"vault",
	"scribe",
	"tribal",
	"drill",
	"clinic",
	"wrench",
	"preacher",
	"chemCook",
	"pitSchool",
	"radioKid",
	"ranchHand",
	"locksmith",
	"powderBoy",
	"navigator",
	"junkyard",
	"officerYard",
	"circus",
	"graveShift",
	"bookkeeper",
	"foundry",
	"convent",
	"gamblerHall"
];
var LIFE_IDS = [
	"none",
	"vaultborn",
	"dust",
	"caravan",
	"raider",
	"collar",
	"hired",
	"bunker",
	"ghoulAlley",
	"waterBearer",
	"courier",
	"pitChamp",
	"chemRunner",
	"scrapCourt",
	"farmHold",
	"cityRat",
	"riverboat",
	"loneCabin",
	"preacherCircuit",
	"overseerShift",
	"glowWalker",
	"knightErrant",
	"wastelandDoc",
	"cageFighter"
];
var SCAR_IDS = [
	"glassEye",
	"limp",
	"burnedHands",
	"chemGhost",
	"shrapnelSmile",
	"radKiss",
	"crushedChest",
	"buriedWrong",
	"missingFingers",
	"brandedCheek",
	"deadEar",
	"knifeSmile",
	"glassJaw",
	"tinnitus",
	"fusedKnee",
	"oneLung",
	"nightTerrors",
	"biteMark",
	"pinSpine",
	"missingTongue",
	"collarbone",
	"radSterile",
	"hookedVein",
	"loyaltyDebt"
];
var POCKET_IDS = [
	"quick1",
	"quick2",
	"quick3",
	"ammo",
	"chems",
	"aid"
];
var POCKET_LABELS = {
	quick1: "Quick 1",
	quick2: "Quick 2",
	quick3: "Quick 3",
	ammo: "Ammo",
	chems: "Chems",
	aid: "Stimpaks"
};
function characterEngine(character) {
	return character.engine === "pnp" ? "pnp" : "d20";
}
function emptyLoadout() {
	return {
		head: null,
		body: null,
		left: null,
		right: null,
		pockets: {
			quick1: null,
			quick2: null,
			quick3: null,
			ammo: null,
			chems: null,
			aid: null
		},
		pack: []
	};
}
function item(id, name, kind, rest) {
	const { hands, minSt, weight, value, ...more } = rest;
	return {
		id,
		name,
		kind,
		hands: hands ?? 1,
		minSt: minSt ?? 1,
		weight: weight ?? 1,
		value: value ?? 0,
		...more
	};
}
function w(id, name, skill, rest) {
	return item(id, name, "weapon", {
		skill,
		...rest
	});
}
function arm(id, name, rest) {
	return item(id, name, "armor", {
		...rest,
		hands: 1
	});
}
function helm(id, name, rest) {
	return item(id, name, "helmet", rest);
}
function ammo(id, name, rest) {
	return item(id, name, "ammo", {
		pocket: "ammo",
		...rest
	});
}
function chem(id, name, rest) {
	return item(id, name, "chem", {
		pocket: "chem",
		...rest
	});
}
function gear(id, name, rest) {
	return item(id, name, "gear", rest);
}
function exp(id, name, rest) {
	return item(id, name, "explosive", {
		pocket: "quick",
		...rest
	});
}
function r(dt, dr) {
	return {
		dt,
		dr
	};
}
var CATALOG = [
	w("fists", "Fists and Feet", "unarmed", {
		value: 0,
		weight: 0,
		minSt: 1,
		dmg: "1d4+MD",
		rng: 1,
		apS: 3,
		apT: 4,
		notes: "Always available."
	}),
	w("brass-knuckles", "Brass Knuckles", "unarmed", {
		value: 40,
		weight: 1,
		minSt: 1,
		dmg: "1d10+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("tiger-claw", "Tiger Claw", "unarmed", {
		value: 75,
		weight: 1,
		minSt: 1,
		dmg: "1d2+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("sapper", "Sapper", "unarmed", {
		value: 80,
		weight: 4,
		minSt: 3,
		dmg: "1d6+MD",
		rng: 1,
		apS: 3,
		apT: 4,
		notes: "Head shots 75% KO 1d10 rounds."
	}),
	w("shredders", "Shredders", "unarmed", {
		value: 90,
		weight: 2,
		minSt: 1,
		dmg: "1d4+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("lacerators", "Lacerators", "unarmed", {
		value: 100,
		weight: 2,
		minSt: 1,
		dmg: "1d8+2+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("mace-glove", "Mace Glove", "unarmed", {
		value: 150,
		weight: 5,
		minSt: 3,
		dmg: "1d12+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("spiked-knuckles", "Spiked Knuckles", "unarmed", {
		value: 250,
		weight: 1,
		minSt: 1,
		dmg: "1d10+4+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("boxing-gloves", "Boxing Gloves", "unarmed", {
		value: 250,
		weight: 5,
		minSt: 1,
		dmg: "1d4+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("plated-boxing", "Plated Boxing Gloves", "unarmed", {
		value: 300,
		weight: 10,
		minSt: 1,
		dmg: "1d4+5+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("punch-dagger", "Punch Dagger", "unarmed", {
		value: 300,
		weight: 4,
		minSt: 1,
		dmg: "1d10+2+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("punch-gun", "Punch Gun", "unarmed", {
		value: 600,
		weight: 7,
		minSt: 2,
		dmg: "1d4+ammo+MD",
		rng: 1,
		apS: 4,
		apT: 5,
		mag: 1,
		ammo: ["12g-buck"]
	}),
	w("impact-glove", "Impact Glove", "unarmed", {
		value: 900,
		weight: 9,
		minSt: 1,
		dmg: "1d10+8+MD",
		rng: 1,
		apS: 4,
		apT: 5
	}),
	w("adamantine-claws", "Adamantine Claws", "unarmed", {
		value: 1e3,
		weight: 3,
		minSt: 2,
		dmg: "1d10+5+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("power-fist", "Power Fist", "unarmed", {
		value: 1800,
		weight: 10,
		minSt: 1,
		dmg: "2d8+10+MD",
		rng: 1,
		apS: 4,
		apT: 5,
		mag: 25,
		ammo: ["sec"]
	}),
	w("mega-power-fist", "Mega Power Fist", "unarmed", {
		value: 2200,
		weight: 10,
		minSt: 1,
		dmg: "3d10+20+MD",
		rng: 1,
		apS: 4,
		apT: 5,
		mag: 25,
		ammo: ["sec"]
	}),
	w("rock", "Rock", "meleeWeapons", {
		value: 0,
		weight: 1,
		minSt: 1,
		dmg: "1d4+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("sap", "Sap", "meleeWeapons", {
		value: 1,
		weight: 1,
		minSt: 5,
		dmg: "none",
		rng: 1,
		apS: 0,
		apT: 5,
		notes: "Head only. KO 1d10 rounds."
	}),
	w("shiv", "Shiv", "meleeWeapons", {
		value: 2,
		weight: 1,
		minSt: 1,
		dmg: "1d4",
		rng: 1,
		apS: 3,
		apT: 4,
		notes: "No melee damage bonus."
	}),
	w("broken-bottle", "Broken Bottle", "meleeWeapons", {
		value: 2,
		weight: 1,
		minSt: 1,
		dmg: "1d6+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("sharpened-pole", "Sharpened Pole", "meleeWeapons", {
		value: 5,
		weight: 3,
		minSt: 3,
		dmg: "1d4+1+MD",
		rng: 2,
		apS: 3,
		apT: 4,
		hands: 2
	}),
	w("metal-pipe", "Metal Pipe", "meleeWeapons", {
		value: 10,
		weight: 10,
		minSt: 5,
		dmg: "1d10+MD",
		rng: 1,
		apS: 5,
		apT: 5
	}),
	w("wooden-club", "Wooden Club", "meleeWeapons", {
		value: 10,
		weight: 5,
		minSt: 3,
		dmg: "1d8+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("club", "Club", "meleeWeapons", {
		value: 30,
		weight: 3,
		minSt: 3,
		dmg: "1d10+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("shovel", "Shovel", "meleeWeapons", {
		value: 30,
		weight: 15,
		minSt: 5,
		dmg: "1d12+MD",
		rng: 2,
		apS: 4,
		apT: 5,
		hands: 2
	}),
	w("knife", "Knife", "meleeWeapons", {
		value: 40,
		weight: 1,
		minSt: 2,
		dmg: "1d10+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("claw-hammer", "Claw Hammer", "meleeWeapons", {
		value: 40,
		weight: 4,
		minSt: 2,
		dmg: "1d10+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("ax", "Ax", "meleeWeapons", {
		value: 45,
		weight: 2,
		minSt: 3,
		dmg: "1d8+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("switchblade", "Switchblade", "meleeWeapons", {
		value: 50,
		weight: 1,
		minSt: 1,
		dmg: "1d6+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("wrench", "Wrench", "meleeWeapons", {
		value: 65,
		weight: 4,
		minSt: 3,
		dmg: "1d6+2+MD",
		rng: 1,
		apS: 4,
		apT: 5
	}),
	w("crowbar", "Crowbar", "meleeWeapons", {
		value: 65,
		weight: 5,
		minSt: 5,
		dmg: "1d12+3+MD",
		rng: 1,
		apS: 4,
		apT: 5
	}),
	w("spear", "Spear", "meleeWeapons", {
		value: 80,
		weight: 4,
		minSt: 4,
		dmg: "1d12+3+MD",
		rng: 2,
		apS: 4,
		apT: 5,
		hands: 2
	}),
	w("machete", "Machete", "meleeWeapons", {
		value: 100,
		weight: 1,
		minSt: 4,
		dmg: "1d10+7+MD",
		rng: 1,
		apS: 4,
		apT: 5
	}),
	w("cleaver", "Butcher's Cleaver", "meleeWeapons", {
		value: 110,
		weight: 1,
		minSt: 4,
		dmg: "1d8+10+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("sledgehammer", "Sledgehammer", "meleeWeapons", {
		value: 120,
		weight: 12,
		minSt: 6,
		dmg: "3d4+MD",
		rng: 2,
		apS: 4,
		apT: 5,
		hands: 2
	}),
	w("scalpel", "Scalpel", "meleeWeapons", {
		value: 140,
		weight: 1,
		minSt: 1,
		dmg: "1d8+3+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("combat-knife", "Combat Knife", "meleeWeapons", {
		value: 165,
		weight: 2,
		minSt: 2,
		dmg: "1d12+3+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("wakizashi", "Wakizashi Blade", "meleeWeapons", {
		value: 200,
		weight: 2,
		minSt: 2,
		dmg: "1d12+4+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("slugger", "Louisville Slugger", "meleeWeapons", {
		value: 300,
		weight: 4,
		minSt: 4,
		dmg: "2d10+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("micro-sledge", "Micro Sledgehammer", "meleeWeapons", {
		value: 500,
		weight: 8,
		minSt: 4,
		dmg: "1d12+8+MD",
		rng: 1,
		apS: 3,
		apT: 4
	}),
	w("cattle-prod", "Cattle Prod", "meleeWeapons", {
		value: 600,
		weight: 5,
		minSt: 4,
		dmg: "2d6+10+MD",
		rng: 1,
		apS: 4,
		apT: 5,
		mag: 25,
		ammo: ["sec"],
		notes: "50% KO."
	}),
	w("ripper", "Ripper", "meleeWeapons", {
		value: 1e3,
		weight: 5,
		minSt: 4,
		dmg: "1d10+15+MD",
		rng: 1,
		apS: 4,
		apT: 5,
		mag: 25,
		ammo: ["sec"]
	}),
	w("super-prod", "Super Cattle Prod", "meleeWeapons", {
		value: 1800,
		weight: 5,
		minSt: 4,
		dmg: "2d8+20+MD",
		rng: 1,
		apS: 4,
		apT: 5,
		hands: 2,
		mag: 25,
		ammo: ["sec"],
		notes: "75% KO."
	}),
	w("deco-filament", "Deco-Filament", "meleeWeapons", {
		value: 2e3,
		weight: 1,
		minSt: 1,
		dmg: "4d10+MD",
		rng: 2,
		apS: 3,
		apT: 4
	}),
	w("chainsaw", "Chainsaw", "meleeWeapons", {
		value: 3e3,
		weight: 10,
		minSt: 4,
		dmg: "3d10+20+MD",
		rng: 1,
		apS: 5,
		apT: null,
		hands: 2
	}),
	w("proton-ax", "Proton Ax", "meleeWeapons", {
		value: 3500,
		weight: 15,
		minSt: 5,
		dmg: "3d10+10+MD",
		rng: 1,
		apS: 4,
		apT: 5,
		hands: 2
	}),
	w("super-sledge", "Super Sledgehammer", "meleeWeapons", {
		value: 3750,
		weight: 12,
		minSt: 5,
		dmg: "3d10+15+MD",
		rng: 2,
		apS: 4,
		apT: 5,
		hands: 2
	}),
	w("sling", "Sling", "smallGuns", {
		value: 20,
		weight: 2,
		minSt: 5,
		dmg: "1d10",
		rng: 10,
		apS: 5,
		apT: 6,
		mag: 1,
		ammo: ["rock-ammo"]
	}),
	w("blowgun", "Blowgun", "smallGuns", {
		value: 30,
		weight: 1,
		minSt: 1,
		bonus: 0,
		rng: 20,
		apS: 3,
		apT: 4,
		mag: 1,
		ammo: ["dart"]
	}),
	w("wooden-bow", "Wooden Bow", "smallGuns", {
		value: 50,
		weight: 2,
		minSt: 5,
		bonus: 3,
		rng: 40,
		apS: 5,
		apT: 6,
		hands: 2,
		mag: 1,
		ammo: ["arrow"]
	}),
	w("wooden-xbow", "Wooden Crossbow", "smallGuns", {
		value: 300,
		weight: 10,
		minSt: 4,
		bonus: 4,
		rng: 50,
		apS: 4,
		apT: 5,
		hands: 2,
		mag: 1,
		ammo: ["bolt"]
	}),
	w("comp-bow", "Composite Hunting Bow", "smallGuns", {
		value: 600,
		weight: 8,
		minSt: 5,
		bonus: 5,
		rng: 60,
		apS: 5,
		apT: 6,
		hands: 2,
		mag: 1,
		ammo: ["arrow"]
	}),
	w("comp-xbow", "Composite Hunting Crossbow", "smallGuns", {
		value: 900,
		weight: 12,
		minSt: 4,
		bonus: 6,
		rng: 70,
		apS: 4,
		apT: 5,
		hands: 2,
		mag: 1,
		ammo: ["bolt"]
	}),
	w("10mm-pistol", "Colt 6520 10mm Pistol", "smallGuns", {
		value: 250,
		weight: 4,
		minSt: 3,
		bonus: 6,
		rng: 19,
		apS: 5,
		apT: 6,
		mag: 12,
		ammo: ["10mm-jhp", "10mm-ap"]
	}),
	w("zip-gun", "Zip Gun", "smallGuns", {
		value: 275,
		weight: 5,
		minSt: 3,
		bonus: 4,
		rng: 15,
		apS: 5,
		apT: 6,
		mag: 1,
		ammo: [
			"22",
			"9mm-jhp",
			"45"
		]
	}),
	w("22-pistol", ".22 Pistol", "smallGuns", {
		value: 300,
		weight: 4,
		minSt: 3,
		bonus: 4,
		rng: 12,
		apS: 5,
		apT: 6,
		mag: 10,
		ammo: ["22"]
	}),
	w("38-snub", ".38 Special Snubnose", "smallGuns", {
		value: 375,
		weight: 4,
		minSt: 3,
		bonus: 7,
		rng: 10,
		apS: 4,
		apT: 5,
		mag: 6,
		ammo: ["38"]
	}),
	w("9mm-beretta", "VP91Z 9mm Beretta", "smallGuns", {
		value: 400,
		weight: 4,
		minSt: 3,
		bonus: 6,
		rng: 17,
		apS: 5,
		apT: 6,
		mag: 18,
		ammo: ["9mm-jhp", "9mm-ap"]
	}),
	w("colt-45", "Colt .45 M1911A1", "smallGuns", {
		value: 425,
		weight: 4,
		minSt: 3,
		bonus: 7,
		rng: 17,
		apS: 5,
		apT: 6,
		mag: 7,
		ammo: ["45"]
	}),
	w("357-mag", ".357 Magnum Revolver", "smallGuns", {
		value: 450,
		weight: 6,
		minSt: 5,
		bonus: 8,
		rng: 19,
		apS: 4,
		apT: 5,
		mag: 6,
		ammo: ["357"]
	}),
	w("casull", "Casull Revolver", "smallGuns", {
		value: 500,
		weight: 6,
		minSt: 5,
		bonus: 7,
		rng: 6,
		apS: 4,
		apT: 5,
		mag: 6,
		ammo: ["44-jhp", "44-ap"]
	}),
	w("44-mag", ".44 Magnum Revolver", "smallGuns", {
		value: 600,
		weight: 6,
		minSt: 5,
		bonus: 11,
		rng: 6,
		apS: 4,
		apT: 5,
		mag: 6,
		ammo: ["44-jhp", "44-ap"]
	}),
	w("browning-hp", "Browning HP Pistol", "smallGuns", {
		value: 700,
		weight: 6,
		minSt: 4,
		bonus: 9,
		rng: 20,
		apS: 4,
		apT: 5,
		mag: 12,
		ammo: ["45"]
	}),
	w("desert-eagle", "Desert Eagle .44", "smallGuns", {
		value: 800,
		weight: 5,
		minSt: 4,
		bonus: 10,
		rng: 19,
		apS: 5,
		apT: 6,
		mag: 8,
		ammo: ["44-jhp", "44-ap"]
	}),
	w("calico-950", "Calico M-950", "smallGuns", {
		value: 900,
		weight: 10,
		minSt: 4,
		bonus: 6,
		rng: 15,
		apS: 5,
		apT: 6,
		mag: 40,
		ammo: ["9mm-jhp", "9mm-ap"]
	}),
	w("sig-p220", "Sig-Sauer P220 9mm", "smallGuns", {
		value: 1e3,
		weight: 4,
		minSt: 3,
		bonus: 6,
		rng: 24,
		apS: 5,
		apT: 6,
		mag: 9,
		ammo: ["9mm-jhp", "9mm-ap"]
	}),
	w("sig-14mm", "Sig-Sauer 14mm Pistol", "smallGuns", {
		value: 1100,
		weight: 5,
		minSt: 4,
		bonus: 12,
		rng: 18,
		apS: 5,
		apT: 6,
		mag: 6,
		ammo: ["14mm-jhp", "14mm-ap"]
	}),
	w("mauser-9", "9mm Mauser", "smallGuns", {
		value: 1500,
		weight: 5,
		minSt: 3,
		bonus: 4,
		rng: 17,
		apS: 5,
		apT: 6,
		mag: 8,
		ammo: ["9mm-ball"]
	}),
	w("needler", "Needler Pistol", "smallGuns", {
		value: 2200,
		weight: 5,
		minSt: 3,
		bonus: 0,
		rng: 24,
		apS: 4,
		apT: 5,
		mag: 8,
		ammo: [
			"hn-needler",
			"hn-ap",
			"hn-poison",
			"hn-bio"
		]
	}),
	w("ppk", "Walther PPK", "smallGuns", {
		value: 3e3,
		weight: 4,
		minSt: 2,
		bonus: 8,
		rng: 20,
		apS: 3,
		apT: 4,
		mag: 8,
		ammo: ["765"]
	}),
	w("flamer-pistol", "Flamer Pistol", "smallGuns", {
		value: 3e3,
		weight: 10,
		minSt: 4,
		dmg: "ammo",
		rng: 3,
		apS: 4,
		apT: null,
		mag: 3,
		ammo: ["flamer-fire"]
	}),
	w("scorpio", "Scorpio VZ61", "smallGuns", {
		value: 3300,
		weight: 6,
		minSt: 4,
		bonus: 5,
		rng: 15,
		apS: 5,
		apT: 5,
		apB: 6,
		mag: 20,
		ammo: ["9mm-jhp", "9mm-ap"]
	}),
	w("223-pistol", ".223 Pistol", "smallGuns", {
		value: 3500,
		weight: 7,
		minSt: 5,
		bonus: 20,
		rng: 30,
		apS: 5,
		apT: 6,
		mag: 5,
		ammo: ["223-fmj", "223-ap"]
	}),
	w("m78-gl", "M-78 Grenade Pistol", "smallGuns", {
		value: 5e3,
		weight: 8,
		minSt: 6,
		dmg: "ammo",
		rng: 12,
		apS: 5,
		apT: null,
		mag: 1,
		ammo: [
			"40mm-frag",
			"40mm-plasma",
			"40mm-pulse"
		]
	}),
	w("gauss-pistol", "PPK-12 Gauss Pistol", "smallGuns", {
		value: 5250,
		weight: 5,
		minSt: 4,
		bonus: 22,
		rng: 30,
		apS: 4,
		apT: 5,
		mag: 12,
		ammo: ["2mm-ec"]
	}),
	w("widowmaker", "Winchester Widowmaker", "smallGuns", {
		value: 800,
		weight: 5,
		minSt: 4,
		bonus: 12,
		rng: 14,
		apS: 5,
		apT: 6,
		mag: 2,
		ammo: [
			"12g-buck",
			"12g-slug",
			"12g-emp",
			"12g-rubber"
		],
		notes: "Single or double."
	}),
	w("sawed-off", "Winchester Sawed-Off", "smallGuns", {
		value: 800,
		weight: 5,
		minSt: 4,
		bonus: 14,
		rng: 7,
		apS: 5,
		apT: 6,
		mag: 2,
		ammo: ["12g-buck", "12g-slug"]
	}),
	w("pump-shotgun", "Pump-Action Shotgun", "smallGuns", {
		value: 800,
		weight: 4,
		minSt: 4,
		bonus: 12,
		rng: 15,
		apS: 5,
		apT: null,
		mag: 4,
		ammo: ["12g-buck", "12g-slug"]
	}),
	w("silverhawk", "Beretta 470 Silverhawk", "smallGuns", {
		value: 1e3,
		weight: 5,
		minSt: 4,
		bonus: 12,
		rng: 14,
		apS: 5,
		apT: 6,
		mag: 2,
		ammo: ["12g-buck", "12g-slug"]
	}),
	w("combat-shotgun", "Winchester Combat Shotgun", "smallGuns", {
		value: 2750,
		weight: 11,
		minSt: 5,
		bonus: 15,
		rng: 22,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 12,
		ammo: ["12g-buck", "12g-slug"],
		hands: 2
	}),
	w("caws", "H&K CAWS", "smallGuns", {
		value: 4750,
		weight: 6,
		minSt: 6,
		bonus: 15,
		rng: 30,
		apS: 6,
		apT: 6,
		apB: 6,
		mag: 10,
		ammo: ["12g-buck", "12g-slug"],
		hands: 2
	}),
	w("jackhammer", "Pancor Jackhammer", "smallGuns", {
		value: 5500,
		weight: 12,
		minSt: 5,
		bonus: 19,
		rng: 35,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 10,
		ammo: ["12g-buck", "12g-slug"],
		hands: 2
	}),
	w("mp9", "H&K MP-9 10mm SMG", "smallGuns", {
		value: 1e3,
		weight: 7,
		minSt: 4,
		bonus: 6,
		rng: 25,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 30,
		ammo: ["10mm-jhp", "10mm-ap"]
	}),
	w("mac17", "MAC 17 SMG", "smallGuns", {
		value: 1050,
		weight: 6,
		minSt: 4,
		bonus: 7,
		rng: 25,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 30,
		ammo: ["45"]
	}),
	w("mp5", "H&K MP-5", "smallGuns", {
		value: 1100,
		weight: 5,
		minSt: 3,
		bonus: 7,
		rng: 30,
		apS: 4,
		apT: 5,
		apB: 5,
		mag: 30,
		ammo: ["9mm-jhp", "9mm-ap"]
	}),
	w("uzi", "Uzi Mark 27", "smallGuns", {
		value: 1200,
		weight: 7,
		minSt: 4,
		bonus: 5,
		rng: 20,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 40,
		ammo: ["9mm-jhp", "9mm-ap"]
	}),
	w("thompson", "Thompson M1928", "smallGuns", {
		value: 1200,
		weight: 12,
		minSt: 6,
		bonus: 2,
		rng: 32,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 50,
		ammo: ["45"],
		hands: 2
	}),
	w("ruger-ac", "Ruger AC556F", "smallGuns", {
		value: 1400,
		weight: 15,
		minSt: 6,
		bonus: 7,
		rng: 20,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 32,
		ammo: ["556"],
		hands: 2
	}),
	w("sten", "Sten Gun", "smallGuns", {
		value: 1500,
		weight: 15,
		minSt: 6,
		bonus: 9,
		rng: 24,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 30,
		ammo: ["9mm-jhp", "9mm-ap"],
		hands: 2
	}),
	w("mp38", "MP-38 Schmeisser", "smallGuns", {
		value: 1600,
		weight: 25,
		minSt: 6,
		bonus: 7,
		rng: 18,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 30,
		ammo: ["9mm-jhp"],
		hands: 2
	}),
	w("grease-gun", "M3A1 Grease Gun", "smallGuns", {
		value: 1750,
		weight: 10,
		minSt: 4,
		bonus: 10,
		rng: 20,
		apS: 4,
		apT: 5,
		apB: 5,
		mag: 30,
		ammo: ["45"]
	}),
	w("walther-mpl", "Walther MPL", "smallGuns", {
		value: 1800,
		weight: 8,
		minSt: 4,
		bonus: 8,
		rng: 40,
		apS: 5,
		apT: 6,
		mag: 30,
		ammo: ["9mm-jhp", "9mm-ap"]
	}),
	w("calico-100", "Calico Liberty 100", "smallGuns", {
		value: 2e3,
		weight: 22,
		minSt: 6,
		bonus: 8,
		rng: 20,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 100,
		ammo: ["9mm-jhp"],
		hands: 2
	}),
	w("steyr-aug", "Steyr AUG", "smallGuns", {
		value: 2300,
		weight: 7,
		minSt: 5,
		bonus: 8,
		rng: 28,
		apS: 5,
		apT: 6,
		mag: 40,
		ammo: ["556"],
		hands: 2
	}),
	w("p90c", "H&K P90c", "smallGuns", {
		value: 2500,
		weight: 9,
		minSt: 4,
		bonus: 12,
		rng: 30,
		apS: 4,
		apT: 5,
		apB: 5,
		mag: 24,
		ammo: ["10mm-jhp", "10mm-ap"]
	}),
	w("bb-gun", "BB Gun", "smallGuns", {
		value: 150,
		weight: 15,
		minSt: 1,
		bonus: 0,
		rng: 25,
		apS: 5,
		apT: 6,
		mag: 100,
		ammo: ["bbs"],
		hands: 2
	}),
	w("pipe-rifle", "Pipe Rifle", "smallGuns", {
		value: 200,
		weight: 11,
		minSt: 5,
		bonus: 6,
		rng: 20,
		apS: 5,
		apT: 6,
		mag: 1,
		ammo: ["10mm-jhp", "10mm-ap"],
		hands: 2
	}),
	w("22-rifle", ".22 Hunting Rifle", "smallGuns", {
		value: 300,
		weight: 8,
		minSt: 3,
		bonus: 4,
		rng: 30,
		apS: 5,
		apT: 6,
		mag: 1,
		ammo: ["22"],
		hands: 2
	}),
	w("m1-garand", "M1 Garand", "smallGuns", {
		value: 400,
		weight: 6,
		minSt: 4,
		bonus: 7,
		rng: 30,
		apS: 5,
		apT: 6,
		mag: 8,
		ammo: ["762"],
		hands: 2
	}),
	w("m17a", "M17-A Carbine", "smallGuns", {
		value: 500,
		weight: 7,
		minSt: 4,
		bonus: 9,
		rng: 20,
		apS: 5,
		apT: 6,
		mag: 10,
		ammo: ["762"],
		hands: 2
	}),
	w("hunting-rifle", "Colt Rangemaster", "smallGuns", {
		value: 1e3,
		weight: 11,
		minSt: 5,
		bonus: 9,
		rng: 40,
		apS: 5,
		apT: 6,
		mag: 10,
		ammo: [
			"223-fmj",
			"223-ap",
			"762"
		],
		hands: 2
	}),
	w("m19", "M19 Rifle", "smallGuns", {
		value: 1100,
		weight: 11,
		minSt: 5,
		bonus: 8,
		rng: 35,
		apS: 5,
		apT: 6,
		mag: 8,
		ammo: ["762"],
		hands: 2
	}),
	w("spear-gun", "Spear Gun", "smallGuns", {
		value: 1400,
		weight: 10,
		minSt: 4,
		bonus: 0,
		rng: 30,
		apS: 5,
		apT: 6,
		mag: 1,
		ammo: ["spear-bolt"],
		hands: 2
	}),
	w("dks-501", "DKS-501 Sniper Rifle", "smallGuns", {
		value: 2200,
		weight: 10,
		minSt: 5,
		bonus: 14,
		rng: 50,
		apS: 6,
		apT: 7,
		mag: 6,
		ammo: ["223-fmj", "223-ap"],
		hands: 2,
		notes: "Built-in scope."
	}),
	w("svd-4000", "SVD-4000", "smallGuns", {
		value: 2400,
		weight: 15,
		minSt: 5,
		bonus: 14,
		rng: 75,
		apS: 5,
		apT: 6,
		mag: 10,
		ammo: ["762"],
		hands: 2
	}),
	w("psg1", "PSG1 Sniper Rifle", "smallGuns", {
		value: 2500,
		weight: 15,
		minSt: 5,
		bonus: 14,
		rng: 120,
		apS: 4,
		apT: 5,
		mag: 20,
		ammo: ["762"],
		hands: 2,
		notes: "Built-in scope."
	}),
	w("g3", "G3 Battle Rifle", "smallGuns", {
		value: 2600,
		weight: 13,
		minSt: 6,
		dmg: "2d10+5",
		rng: 45,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 20,
		ammo: ["762"],
		hands: 2
	}),
	w("red-ryder", "Red Ryder LE BB Gun", "smallGuns", {
		value: 3500,
		weight: 15,
		minSt: 5,
		bonus: 25,
		rng: 32,
		apS: 5,
		apT: 6,
		mag: 100,
		ammo: ["bbs"],
		hands: 2
	}),
	w("m72-gauss", "M72 Gauss Rifle", "smallGuns", {
		value: 8250,
		weight: 10,
		minSt: 6,
		bonus: 33,
		rng: 50,
		apS: 5,
		apT: 6,
		mag: 20,
		ammo: ["2mm-ec"],
		hands: 2
	}),
	w("m14", "M14", "smallGuns", {
		value: 1e3,
		weight: 16,
		minSt: 6,
		bonus: 5,
		rng: 35,
		apS: 6,
		apT: 7,
		apB: 7,
		mag: 20,
		ammo: ["762"],
		hands: 2
	}),
	w("bar", "Browning Automatic Rifle", "smallGuns", {
		value: 1e3,
		weight: 25,
		minSt: 6,
		bonus: 6,
		rng: 40,
		apS: 6,
		apT: 7,
		mag: 20,
		ammo: ["308"],
		hands: 2
	}),
	w("ak47", "AK-47", "smallGuns", {
		value: 1e3,
		weight: 10,
		minSt: 5,
		bonus: 7,
		rng: 40,
		apS: 5,
		apT: 6,
		mag: 30,
		ammo: ["762"],
		hands: 2
	}),
	w("ak112", "AK-112", "smallGuns", {
		value: 1300,
		weight: 8,
		minSt: 5,
		bonus: 8,
		rng: 45,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 24,
		ammo: ["5mm"],
		hands: 2
	}),
	w("fn-fal", "FN FAL", "smallGuns", {
		value: 1500,
		weight: 11,
		minSt: 5,
		bonus: 8,
		rng: 35,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 20,
		ammo: ["762"],
		hands: 2
	}),
	w("ak74", "AK-74", "smallGuns", {
		value: 1600,
		weight: 14,
		minSt: 5,
		bonus: 10,
		rng: 45,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 30,
		ammo: ["545"],
		hands: 2
	}),
	w("m16a2", "M16A2", "smallGuns", {
		value: 1700,
		weight: 15,
		minSt: 6,
		bonus: 6,
		rng: 40,
		apS: 6,
		apT: 7,
		apB: 7,
		mag: 18,
		ammo: ["556"],
		hands: 2
	}),
	w("xl70e3", "XL70E3", "smallGuns", {
		value: 3e3,
		weight: 9,
		minSt: 5,
		bonus: 12,
		rng: 35,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 24,
		ammo: ["5mm"],
		hands: 2
	}),
	w("g11", "H&K G11", "smallGuns", {
		value: 8e3,
		weight: 9,
		minSt: 4,
		bonus: 12,
		rng: 35,
		apS: 5,
		apT: 6,
		apB: 6,
		mag: 50,
		ammo: ["47-caseless"],
		hands: 2
	}),
	w("m2-minigun", "Browning M2 Minigun", "bigGuns", {
		value: 3e3,
		weight: 40,
		minSt: 7,
		bonus: 8,
		rng: 20,
		apB: 7,
		mag: 50,
		ammo: ["50"],
		hands: 2
	}),
	w("lewis", "Lewis MK II", "bigGuns", {
		value: 3400,
		weight: 30,
		minSt: 6,
		bonus: 10,
		rng: 30,
		apB: 6,
		mag: 50,
		ammo: ["308"],
		hands: 2
	}),
	w("m60", "M60", "bigGuns", {
		value: 3500,
		weight: 26,
		minSt: 7,
		bonus: 18,
		rng: 35,
		apB: 6,
		mag: 50,
		ammo: ["762"],
		hands: 2
	}),
	w("bren", "Bren Gun", "bigGuns", {
		value: 3500,
		weight: 28,
		minSt: 6,
		bonus: 12,
		rng: 12,
		apB: 6,
		mag: 45,
		ammo: ["308"],
		hands: 2
	}),
	w("mg3", "MG3", "bigGuns", {
		value: 3600,
		weight: 30,
		minSt: 7,
		bonus: 15,
		rng: 10,
		apB: 6,
		mag: 50,
		ammo: ["762"],
		hands: 2
	}),
	w("cz53", "CZ-53 Minigun", "bigGuns", {
		value: 3800,
		weight: 31,
		minSt: 7,
		bonus: 5,
		rng: 35,
		apB: 6,
		mag: 120,
		ammo: ["5mm"],
		hands: 2
	}),
	w("m249", "M249 SAW", "bigGuns", {
		value: 4e3,
		weight: 35,
		minSt: 7,
		bonus: 15,
		rng: 5,
		apB: 7,
		mag: 50,
		ammo: ["556"],
		hands: 2
	}),
	w("lsw", "Light Support Weapon", "bigGuns", {
		value: 4750,
		weight: 22,
		minSt: 6,
		bonus: 20,
		rng: 40,
		apB: 6,
		mag: 30,
		ammo: ["223-fmj", "223-ap"],
		hands: 2
	}),
	w("bozar", "Bozar", "bigGuns", {
		value: 5250,
		weight: 22,
		minSt: 6,
		bonus: 25,
		rng: 75,
		apB: 6,
		mag: 30,
		ammo: ["223-fmj", "223-ap"],
		hands: 2
	}),
	w("avenger", "Avenger Minigun", "bigGuns", {
		value: 5500,
		weight: 31,
		minSt: 7,
		bonus: 10,
		rng: 40,
		apB: 6,
		mag: 120,
		ammo: ["5mm"],
		hands: 2
	}),
	w("m2hb", "M2HB", "bigGuns", {
		value: 7500,
		weight: 60,
		minSt: 6,
		bonus: 20,
		rng: 140,
		apB: 7,
		mag: 100,
		ammo: ["50-bmg"],
		hands: 2,
		notes: "Tripod only."
	}),
	w("vindicator", "Vindicator Minigun", "bigGuns", {
		value: 15250,
		weight: 30,
		minSt: 7,
		bonus: 14,
		rng: 30,
		apB: 6,
		mag: 100,
		ammo: ["47-caseless"],
		hands: 2
	}),
	w("m203", "M203 Grenade Launcher", "bigGuns", {
		value: 2e3,
		weight: 16,
		minSt: 5,
		dmg: "ammo",
		rng: 20,
		apS: 5,
		mag: 1,
		ammo: [
			"40mm-frag",
			"40mm-plasma",
			"40mm-pulse"
		],
		hands: 2
	}),
	w("law80", "LAW-80", "bigGuns", {
		value: 1900,
		weight: 14,
		minSt: 6,
		dmg: "6d8+30",
		rng: 60,
		apS: 6,
		mag: 1,
		hands: 2,
		notes: "Disposable."
	}),
	w("l72", "Rockwell L-72 Rocket Launcher", "bigGuns", {
		value: 2300,
		weight: 15,
		minSt: 6,
		dmg: "ammo",
		rng: 50,
		apS: 6,
		mag: 1,
		ammo: [
			"rocket-he",
			"rocket-ap",
			"rocket-emp"
		],
		hands: 2
	}),
	w("flamethrower", "M9E1-7 Flamethrower", "bigGuns", {
		value: 2e3,
		weight: 28,
		minSt: 6,
		dmg: "ammo",
		rng: 20,
		apS: 6,
		mag: 10,
		ammo: ["flamer-fire", "flamer-plasma"],
		hands: 2
	}),
	w("wattz-1000", "Wattz 1000 Laser Pistol", "energyWeapons", {
		value: 1200,
		weight: 6,
		minSt: 3,
		dmg: "1d8+10",
		rng: 25,
		apS: 5,
		apT: 6,
		mag: 10,
		ammo: ["sec"]
	}),
	w("wattz-1600", "Wattz 1600 Laser Pistol", "energyWeapons", {
		value: 1400,
		weight: 7,
		minSt: 3,
		dmg: "1d12+10",
		rng: 35,
		apS: 5,
		apT: 6,
		mag: 12,
		ammo: ["sec"]
	}),
	w("solar-scorcher", "Solar Scorcher", "energyWeapons", {
		value: 2e3,
		weight: 10,
		minSt: 4,
		dmg: "4d10+20",
		rng: 20,
		apS: 4,
		apT: 5,
		mag: 6,
		notes: "Recharges in sunlight."
	}),
	w("spasm-gun", "Spasm Gun", "energyWeapons", {
		value: 2200,
		weight: 5,
		minSt: 3,
		dmg: "2d20+12",
		rng: 15,
		apS: 4,
		apT: null,
		mag: 20,
		ammo: ["sec"],
		notes: "KO 1d10 rounds."
	}),
	w("plasma-pistol", "Glock 86 Plasma Pistol", "energyWeapons", {
		value: 2750,
		weight: 8,
		minSt: 4,
		dmg: "1d20+10",
		rng: 20,
		apS: 5,
		apT: 6,
		mag: 16,
		ammo: ["sec"]
	}),
	w("alien-blaster", "Alien Blaster", "energyWeapons", {
		value: 1e4,
		weight: 29,
		minSt: 3,
		dmg: "5d10+30",
		rng: 10,
		apS: 4,
		apT: 5,
		mag: 10,
		ammo: ["sec"]
	}),
	w("yk32", "YK32 Pulse Pistol", "energyWeapons", {
		value: 12500,
		weight: 5,
		minSt: 3,
		dmg: "1d12+32",
		rng: 15,
		apS: 4,
		apT: 5,
		mag: 10,
		ammo: ["sec"]
	}),
	w("laser-carbine", "H&K 31415 Laser Carbine", "energyWeapons", {
		value: 3500,
		weight: 13,
		minSt: 6,
		dmg: "2d12+18",
		rng: 20,
		apS: 5,
		apT: 6,
		mag: 20,
		ammo: ["mfc"],
		hands: 2
	}),
	w("p94", "Winchester P94 Plasma Rifle", "energyWeapons", {
		value: 4e3,
		weight: 17,
		minSt: 6,
		dmg: "2d20+25",
		rng: 25,
		apS: 5,
		apT: 6,
		mag: 10,
		ammo: ["mfc"],
		hands: 2
	}),
	w("wattz-2500", "Wattz 2500 Laser Rifle", "energyWeapons", {
		value: 4500,
		weight: 9,
		minSt: 4,
		dmg: "2d8+15",
		rng: 25,
		apS: 5,
		apT: 6,
		mag: 15,
		ammo: ["mfc"],
		hands: 2
	}),
	w("wattz-3120", "Wattz 3120b Laser Rifle", "energyWeapons", {
		value: 5e3,
		weight: 7,
		minSt: 4,
		dmg: "2d12+23",
		rng: 35,
		apS: 5,
		apT: 6,
		mag: 20,
		ammo: ["mfc"],
		hands: 2
	}),
	w("turbo-plasma", "Turbo Plasma Rifle", "energyWeapons", {
		value: 1e4,
		weight: 17,
		minSt: 6,
		dmg: "2d20+30",
		rng: 35,
		apS: 5,
		apT: 6,
		mag: 10,
		ammo: ["mfc"],
		hands: 2
	}),
	w("yk42b", "YK42b Pulse Rifle", "energyWeapons", {
		value: 17500,
		weight: 14,
		minSt: 3,
		dmg: "2d12+54",
		rng: 30,
		apS: 5,
		apT: 6,
		mag: 15,
		ammo: ["mfc"],
		hands: 2
	}),
	w("gatling-laser", "Gatling Laser", "energyWeapons", {
		value: 7500,
		weight: 29,
		minSt: 6,
		dmg: "1d20+20",
		rng: 40,
		apB: 6,
		mag: 30,
		ammo: ["mfc"],
		hands: 2
	}),
	w("throwing-knife", "Throwing Knife", "throwing", {
		value: 100,
		weight: 1,
		minSt: 2,
		dmg: "1d6+MD",
		rng: 10,
		apS: 4,
		apT: 5
	}),
	w("throwing-stars", "Throwing Stars", "throwing", {
		value: 30,
		weight: 1,
		minSt: 1,
		dmg: "1d6",
		rng: 15,
		apS: 3,
		apT: 4
	}),
	w("chakram", "Chakram", "throwing", {
		value: 45,
		weight: 1,
		minSt: 1,
		dmg: "1d20",
		rng: 10,
		apS: 4,
		apT: 5
	}),
	w("boomerang", "Boomerang", "throwing", {
		value: 15,
		weight: 1,
		minSt: 5,
		dmg: "2d10+MD",
		rng: 20,
		apS: 4,
		apT: 5
	}),
	w("molotov", "Molotov Cocktail", "throwing", {
		value: 50,
		weight: 1,
		minSt: 3,
		dmg: "1d12+8",
		rng: 12,
		apS: 5,
		apT: null
	}),
	w("frag-grenade", "Fragmentation Grenade", "throwing", {
		value: 150,
		weight: 1,
		minSt: 3,
		dmg: "1d12+22",
		rng: 15,
		apS: 5,
		apT: null
	}),
	w("plasma-grenade", "Plasma Grenade", "throwing", {
		value: 300,
		weight: 1,
		minSt: 4,
		dmg: "5d10+40",
		rng: 15,
		apS: 5,
		apT: null
	}),
	w("pulse-grenade", "Pulse Grenade", "throwing", {
		value: 300,
		weight: 1,
		minSt: 4,
		dmg: "5d10+100",
		rng: 15,
		apS: 5,
		apT: null,
		notes: "Electronics only."
	}),
	w("incendiary-grenade", "Incendiary Grenade", "throwing", {
		value: 300,
		weight: 1,
		minSt: 4,
		dmg: "1d12+22+fire",
		rng: 15,
		apS: 5,
		apT: null
	}),
	w("smoke-grenade", "Smoke Grenade", "throwing", {
		value: 140,
		weight: 1,
		minSt: 4,
		dmg: "none",
		rng: 15,
		apS: 4,
		apT: null
	}),
	w("flash-grenade", "Flash Grenade", "throwing", {
		value: 300,
		weight: 1,
		minSt: 4,
		dmg: "special",
		rng: 15,
		apS: 5,
		apT: null
	}),
	ammo("bbs", "BBs", {
		value: 100,
		vol: 100,
		dmg: "1d4",
		weight: 1
	}),
	ammo("arrow", "Arrow", {
		value: 5,
		vol: 5,
		dmg: "1d4",
		weight: 1
	}),
	ammo("dart", "Dart", {
		value: 5,
		vol: 5,
		dmg: "1d3",
		weight: 1
	}),
	ammo("bolt", "Bolt", {
		value: 5,
		vol: 5,
		dmg: "1d6",
		weight: 1
	}),
	ammo("spear-bolt", "Speargun Bolt", {
		value: 5,
		vol: 1,
		dmg: "3d4",
		acMod: -10,
		weight: 1
	}),
	ammo("rock-ammo", "Sling Stone", {
		value: 0,
		vol: 10,
		dmg: "1d10",
		weight: 1
	}),
	ammo("22", ".22", {
		value: 150,
		vol: 50,
		dmg: "1d6",
		weight: 1
	}),
	ammo("223-fmj", ".223 FMJ", {
		value: 400,
		vol: 20,
		dmg: "1d10",
		drMod: -10,
		weight: 1
	}),
	ammo("223-ap", ".223 AP", {
		value: 400,
		vol: 20,
		dmg: "1d6",
		acMod: -15,
		ignoreDt: true,
		weight: 1
	}),
	ammo("308", ".308", {
		value: 400,
		vol: 50,
		dmg: "1d10",
		acMod: -15,
		drMod: -20,
		weight: 2
	}),
	ammo("357", ".357 Magnum", {
		value: 150,
		vol: 50,
		dmg: "1d6",
		acMod: -10,
		drMod: -10,
		weight: 1
	}),
	ammo("38", ".38 Caliber", {
		value: 100,
		vol: 10,
		dmg: "1d6",
		weight: 1
	}),
	ammo("44-jhp", ".44 Magnum JHP", {
		value: 200,
		vol: 20,
		dmg: "1d8",
		drMod: -10,
		weight: 1
	}),
	ammo("44-ap", ".44 Magnum AP", {
		value: 250,
		vol: 20,
		dmg: "1d6",
		acMod: -10,
		ignoreDt: true,
		weight: 1
	}),
	ammo("45", ".45 Caliber", {
		value: 150,
		vol: 50,
		dmg: "1d6",
		drMod: -5,
		weight: 1
	}),
	ammo("50", ".50", {
		value: 800,
		vol: 100,
		dmg: "1d8",
		acMod: -10,
		drMod: -10,
		weight: 4
	}),
	ammo("50-bmg", ".50 BMG", {
		value: 1e3,
		vol: 100,
		dmg: "1d6",
		acMod: -10,
		drMod: -20,
		weight: 5
	}),
	ammo("12g-buck", "12 Gauge Buckshot", {
		value: 150,
		vol: 20,
		dmg: "1d10",
		weight: 2
	}),
	ammo("12g-slug", "12 Gauge Slug", {
		value: 150,
		vol: 20,
		dmg: "1d8",
		weight: 2
	}),
	ammo("12g-emp", "12 Gauge EMP", {
		value: 500,
		vol: 20,
		dmg: "2d20",
		weight: 2,
		notes: "Non-biological."
	}),
	ammo("12g-rubber", "12 Gauge Rubber", {
		value: 100,
		vol: 20,
		dmg: "1d4",
		weight: 2
	}),
	ammo("2mm-ec", "2mm EC", {
		value: 2e3,
		vol: 20,
		dmg: "1d10",
		acMod: -20,
		drMod: -20,
		weight: 1
	}),
	ammo("47-caseless", "4.7mm Caseless", {
		value: 1e3,
		vol: 20,
		dmg: "1d10",
		acMod: -10,
		drMod: -10,
		weight: 1
	}),
	ammo("5mm", "5mm", {
		value: 500,
		vol: 50,
		dmg: "1d8",
		weight: 1
	}),
	ammo("545", "5.45mm", {
		value: 550,
		vol: 50,
		dmg: "1d8",
		weight: 1
	}),
	ammo("556", "5.56mm", {
		value: 600,
		vol: 50,
		dmg: "1d8",
		drMod: -20,
		weight: 1
	}),
	ammo("762", "7.62mm", {
		value: 300,
		vol: 50,
		dmg: "1d10",
		weight: 2
	}),
	ammo("765", "7.65mm", {
		value: 300,
		vol: 50,
		dmg: "1d8",
		weight: 1
	}),
	ammo("9mm-jhp", "9mm JHP", {
		value: 200,
		vol: 20,
		dmg: "1d6",
		drMod: -10,
		weight: 1
	}),
	ammo("9mm-ap", "9mm AP", {
		value: 250,
		vol: 20,
		dmg: "1d4",
		acMod: -10,
		ignoreDt: true,
		weight: 1
	}),
	ammo("9mm-ball", "9mm Ball", {
		value: 300,
		vol: 20,
		dmg: "1d6",
		drMod: -10,
		weight: 1
	}),
	ammo("10mm-jhp", "10mm JHP", {
		value: 300,
		vol: 20,
		dmg: "1d6",
		drMod: -10,
		weight: 1
	}),
	ammo("10mm-ap", "10mm AP", {
		value: 350,
		vol: 20,
		dmg: "1d4",
		acMod: -10,
		ignoreDt: true,
		weight: 1
	}),
	ammo("14mm-jhp", "14mm JHP", {
		value: 1e3,
		vol: 20,
		dmg: "1d10",
		drMod: -20,
		weight: 1
	}),
	ammo("14mm-ap", "14mm AP", {
		value: 1200,
		vol: 20,
		dmg: "1d8",
		acMod: -20,
		ignoreDt: true,
		weight: 1
	}),
	ammo("hn-needler", "HN Needler", {
		value: 1500,
		vol: 10,
		dmg: "3d10",
		weight: 1
	}),
	ammo("hn-ap", "HN Needler AP", {
		value: 2e3,
		vol: 10,
		dmg: "2d8",
		ignoreDt: true,
		weight: 1
	}),
	ammo("hn-poison", "HN Needler Poison", {
		value: 2300,
		vol: 10,
		dmg: "poison G",
		weight: 1
	}),
	ammo("hn-bio", "HN Needler Biotoxin", {
		value: 4e3,
		vol: 10,
		dmg: "1d10/rd ×10",
		weight: 1
	}),
	ammo("40mm-frag", "40mm Frag Grenade", {
		value: 1e3,
		vol: 5,
		dmg: "1d12+22",
		weight: 2
	}),
	ammo("40mm-plasma", "40mm Plasma Grenade", {
		value: 2e3,
		vol: 5,
		dmg: "5d10+40",
		weight: 2
	}),
	ammo("40mm-pulse", "40mm Pulse Grenade", {
		value: 2e3,
		vol: 5,
		dmg: "5d10+100",
		weight: 2
	}),
	ammo("rocket-he", "Rocket (HE)", {
		value: 2e3,
		vol: 10,
		dmg: "6d8",
		weight: 3
	}),
	ammo("rocket-ap", "Rocket (AP)", {
		value: 2500,
		vol: 10,
		dmg: "6d6",
		acMod: -10,
		ignoreDt: true,
		weight: 3
	}),
	ammo("rocket-emp", "Rocket (EMP)", {
		value: 3e3,
		vol: 10,
		dmg: "3d20",
		weight: 3
	}),
	ammo("flamer-fire", "Flamer Fire Pack", {
		value: 2e3,
		vol: 10,
		dmg: "3d8+fire",
		drMod: -10,
		weight: 8
	}),
	ammo("flamer-plasma", "Flamer Plasma Pack", {
		value: 3e3,
		vol: 10,
		dmg: "5d10+40",
		acMod: -10,
		drMod: -10,
		weight: 8
	}),
	ammo("sec", "Small Energy Cell", {
		value: 2e3,
		vol: 20,
		weight: 1,
		notes: "Recharges energy pistols and power fists."
	}),
	ammo("mfc", "Micro Fusion Cell", {
		value: 2e3,
		vol: 20,
		weight: 2,
		notes: "Recharges energy rifles."
	}),
	arm("robe", "Robe", {
		value: 90,
		weight: 10,
		pnpAc: 5,
		resists: {
			n: r(0, 20),
			l: r(0, 25),
			f: r(0, 10),
			p: r(0, 10),
			e: r(0, 10)
		}
	}),
	arm("leather-jacket", "Leather Jacket", {
		value: 250,
		weight: 5,
		pnpAc: 8,
		resists: {
			n: r(0, 20),
			l: r(0, 20),
			f: r(0, 10),
			p: r(0, 10),
			e: r(0, 20)
		}
	}),
	arm("leather-armor", "Leather Armor", {
		value: 700,
		weight: 8,
		pnpAc: 15,
		resists: {
			n: r(2, 25),
			l: r(0, 20),
			f: r(0, 20),
			p: r(0, 10),
			e: r(0, 20)
		}
	}),
	arm("raider-armor", "Raider Armor", {
		value: 700,
		weight: 10,
		pnpAc: 8,
		resists: {
			n: r(2, 25),
			l: r(0, 25),
			f: r(0, 15),
			p: r(0, 25),
			e: r(0, 20)
		}
	}),
	arm("vandal-armor", "Vandal Armor", {
		value: 800,
		weight: 25,
		pnpAc: 15,
		resists: {
			n: r(3, 25),
			l: r(1, 30),
			f: r(1, 17),
			p: r(1, 30),
			e: r(1, 25)
		}
	}),
	arm("bos-leather", "Brotherhood Leather Armor", {
		value: 900,
		weight: 10,
		pnpAc: 15,
		resists: {
			n: r(2, 25),
			l: r(0, 25),
			f: r(0, 15),
			p: r(0, 25),
			e: r(0, 20)
		}
	}),
	arm("combat-jacket", "Combat Leather Jacket", {
		value: 1e3,
		weight: 7,
		pnpAc: 20,
		resists: {
			n: r(2, 30),
			l: r(0, 20),
			f: r(2, 25),
			p: r(0, 10),
			e: r(0, 20)
		}
	}),
	arm("leather-mk2", "Leather Armor MK II", {
		value: 1e3,
		weight: 10,
		pnpAc: 20,
		resists: {
			n: r(3, 25),
			l: r(1, 30),
			f: r(1, 17),
			p: r(1, 30),
			e: r(1, 25)
		}
	}),
	arm("bos-leather-mk2", "Brotherhood Leather MK II", {
		value: 1100,
		weight: 11,
		pnpAc: 23,
		resists: {
			n: r(3, 30),
			l: r(1, 25),
			f: r(1, 30),
			p: r(1, 15),
			e: r(1, 30)
		}
	}),
	arm("metal-armor", "Metal Armor", {
		value: 1100,
		weight: 35,
		pnpAc: 10,
		sneakPen: 25,
		resists: {
			n: r(4, 30),
			l: r(6, 75),
			f: r(4, 10),
			p: r(4, 20),
			e: r(4, 25)
		}
	}),
	arm("reaver-banding", "Reaver Banding", {
		value: 1200,
		weight: 10,
		pnpAc: 20,
		resists: {
			n: r(4, 30),
			l: r(3, 40),
			f: r(1, 40),
			p: r(3, 20),
			e: r(3, 30)
		}
	}),
	arm("bos-metal", "Brotherhood Metal Armor", {
		value: 1500,
		weight: 35,
		pnpAc: 15,
		sneakPen: 25,
		resists: {
			n: r(4, 30),
			l: r(3, 37),
			f: r(4, 15),
			p: r(3, 37),
			e: r(4, 25)
		}
	}),
	arm("metal-mk2", "Metal Armor MK II", {
		value: 1900,
		weight: 35,
		pnpAc: 15,
		sneakPen: 20,
		resists: {
			n: r(4, 35),
			l: r(7, 80),
			f: r(4, 15),
			p: r(4, 25),
			e: r(4, 30)
		}
	}),
	arm("greater-banding", "Greater Banding", {
		value: 2200,
		weight: 18,
		pnpAc: 25,
		sneakPen: 15,
		resists: {
			n: r(5, 50),
			l: r(2, 40),
			f: r(4, 30),
			p: r(3, 30),
			e: r(5, 60)
		}
	}),
	arm("tesla", "Tesla Armor", {
		value: 4500,
		weight: 35,
		pnpAc: 15,
		sneakPen: 20,
		resists: {
			n: r(4, 20),
			l: r(19, 90),
			f: r(4, 10),
			p: r(10, 80),
			e: r(4, 20)
		}
	}),
	arm("bos-tesla", "Brotherhood Tesla Armor", {
		value: 4800,
		weight: 35,
		pnpAc: 15,
		sneakPen: 20,
		resists: {
			n: r(4, 20),
			l: r(15, 85),
			f: r(7, 45),
			p: r(15, 85),
			e: r(4, 20)
		}
	}),
	arm("bos-combat", "Brotherhood Combat Armor", {
		value: 4800,
		weight: 25,
		pnpAc: 20,
		includesHelmet: true,
		radBonus: 20,
		resists: {
			n: r(8, 40),
			l: r(8, 70),
			f: r(7, 50),
			p: r(7, 60),
			e: r(8, 40)
		}
	}),
	arm("rad-suit", "Radiation Suit", {
		value: 5e3,
		weight: 20,
		pnpAc: 15,
		radBonus: 100,
		gas: "100/100",
		sneakPen: 30,
		notes: "No helmet.",
		resists: {
			n: r(4, 30),
			l: r(0, 30),
			f: r(10, 60),
			p: r(0, 20),
			e: r(4, 40)
		}
	}),
	arm("combat-armor", "Combat Armor", {
		value: 6500,
		weight: 20,
		pnpAc: 20,
		includesHelmet: true,
		radBonus: 20,
		resists: {
			n: r(5, 40),
			l: r(8, 60),
			f: r(4, 30),
			p: r(4, 50),
			e: r(6, 40)
		}
	}),
	arm("combat-mk2", "Combat Armor MK II", {
		value: 8e3,
		weight: 20,
		pnpAc: 25,
		includesHelmet: true,
		radBonus: 20,
		resists: {
			n: r(6, 40),
			l: r(6, 65),
			f: r(5, 35),
			p: r(5, 50),
			e: r(9, 45)
		}
	}),
	arm("bos-env", "Brotherhood Environmental Armor", {
		value: 9e3,
		weight: 30,
		pnpAc: 18,
		includesHelmet: true,
		radBonus: 60,
		poisonBonus: 50,
		gas: "100/100",
		sneakPen: 50,
		resists: {
			n: r(5, 40),
			l: r(5, 55),
			f: r(4, 40),
			p: r(5, 55),
			e: r(6, 40)
		}
	}),
	arm("chitin", "Pseudo-Chitin Armor", {
		value: 1e4,
		weight: 20,
		pnpAc: 30,
		radBonus: 20,
		notes: "No helmet.",
		resists: {
			n: r(10, 50),
			l: r(4, 20),
			f: r(10, 60),
			p: r(4, 20),
			e: r(5, 50)
		}
	}),
	arm("power-armor", "Power Armor", {
		value: 12500,
		weight: 35,
		pnpAc: 25,
		includesHelmet: true,
		strBonus: 3,
		radBonus: 30,
		poisonBonus: 15,
		gas: "100/100",
		sneakPen: 75,
		resists: {
			n: r(12, 40),
			l: r(18, 80),
			f: r(12, 60),
			p: r(10, 40),
			e: r(20, 50)
		}
	}),
	arm("hardened-pa", "Hardened Power Armor", {
		value: 15e3,
		weight: 50,
		pnpAc: 25,
		includesHelmet: true,
		strBonus: 3,
		radBonus: 30,
		poisonBonus: 15,
		gas: "100/100",
		sneakPen: 75,
		resists: {
			n: r(13, 50),
			l: r(19, 90),
			f: r(14, 70),
			p: r(13, 50),
			e: r(20, 60)
		}
	}),
	arm("bos-pa", "Brotherhood Power Armor", {
		value: 17e3,
		weight: 42,
		pnpAc: 28,
		includesHelmet: true,
		strBonus: 3,
		pePenalty: 1,
		radBonus: 30,
		poisonBonus: 15,
		gas: "100/100",
		sneakPen: 75,
		resists: {
			n: r(13, 50),
			l: r(16, 70),
			f: r(13, 60),
			p: r(16, 70),
			e: r(20, 60)
		}
	}),
	arm("bos-apa", "Brotherhood Advanced Power Armor", {
		value: 2e4,
		weight: 50,
		pnpAc: 35,
		includesHelmet: true,
		strBonus: 4,
		pePenalty: 2,
		radBonus: 60,
		poisonBonus: 20,
		gas: "100/100",
		sneakPen: 75,
		resists: {
			n: r(18, 55),
			l: r(17, 75),
			f: r(15, 65),
			p: r(17, 75),
			e: r(20, 65)
		}
	}),
	arm("apa", "Advanced Power Armor", {
		value: 2e4,
		weight: 30,
		pnpAc: 30,
		includesHelmet: true,
		strBonus: 4,
		radBonus: 60,
		poisonBonus: 20,
		gas: "100/100",
		sneakPen: 75,
		notes: "Night vision.",
		resists: {
			n: r(15, 55),
			l: r(19, 90),
			f: r(16, 70),
			p: r(15, 60),
			e: r(20, 65)
		}
	}),
	arm("apa-mk2", "Advanced Power Armor MK II", {
		value: 35e3,
		weight: 50,
		pnpAc: 35,
		includesHelmet: true,
		strBonus: 4,
		radBonus: 75,
		poisonBonus: 40,
		gas: "100/100",
		sneakPen: 75,
		notes: "Night vision.",
		resists: {
			n: r(18, 60),
			l: r(19, 90),
			f: r(16, 70),
			p: r(18, 60),
			e: r(20, 70)
		}
	}),
	helm("leather-cap", "Leather Cap", {
		value: 90,
		weight: 1,
		pnpAc: 3
	}),
	helm("metal-helmet", "Metal Helmet", {
		value: 200,
		weight: 3,
		pnpAc: 6
	}),
	helm("combat-helmet", "Combat Helmet", {
		value: 500,
		weight: 3,
		pnpAc: 9
	}),
	helm("env-helmet", "Environmental Helmet", {
		value: 900,
		weight: 4,
		pnpAc: 11,
		gas: "100/10"
	}),
	helm("pa-helmet", "Power Armor Helmet", {
		value: 1500,
		weight: 5,
		pnpAc: 13,
		gas: "100/20"
	}),
	chem("stimpak", "Stimpak", {
		value: 175,
		weight: 1,
		pocket: "aid",
		notes: "Heal 1d10+10 HP."
	}),
	chem("super-stimpak", "Super Stimpak", {
		value: 225,
		weight: 1,
		pocket: "aid",
		notes: "Heal 4d10+20 now, −1d10 after an hour."
	}),
	chem("healing-powder", "Healing Powder", {
		value: 25,
		weight: 1,
		pocket: "aid",
		notes: "Heal 1d10. −1 PE for a day."
	}),
	chem("first-aid-kit", "First Aid Kit", {
		value: 200,
		weight: 2,
		pocket: "aid",
		notes: "+20% First Aid while used."
	}),
	chem("doctors-bag", "Doctor's Bag", {
		value: 300,
		weight: 5,
		pocket: "aid",
		notes: "+20% Doctor while used."
	}),
	chem("radaway", "RadAway", {
		value: 500,
		weight: 1,
		notes: "Remove 1d10+15 rads."
	}),
	chem("rad-x", "Rad-X", {
		value: 300,
		weight: 1,
		notes: "+50% radiation resistance for a day."
	}),
	chem("antidote", "Antidote", {
		value: 150,
		weight: 1,
		notes: "Clears poison."
	}),
	chem("buffout", "Buffout", {
		value: 200,
		weight: 1,
		notes: "+2 STR, +2 EN, +3 AG for a few hours. Addiction."
	}),
	chem("mentats", "Mentats", {
		value: 200,
		weight: 1,
		notes: "+2 IN, +2 PE, +1 CH. Addiction."
	}),
	chem("psycho", "Psycho", {
		value: 400,
		weight: 1,
		notes: "+3 DT, +25% DR. Addiction."
	}),
	chem("jet", "Jet", {
		value: 50,
		weight: 1,
		notes: "+2 AP for a short fight. Highly addictive."
	}),
	chem("afterburner", "After Burner Gum", {
		value: 100,
		weight: 1,
		notes: "Jet + Mentats hybrid. Crash later."
	}),
	gear("flare", "Flare", {
		value: 10,
		weight: 1,
		pocket: "quick",
		notes: "One hour of light."
	}),
	gear("lighter", "Lighter", {
		value: 10,
		weight: 1,
		pocket: "quick"
	}),
	gear("flashlight", "Flashlight", {
		value: 15,
		weight: 1,
		pocket: "quick",
		notes: "~30 hours on a cell."
	}),
	gear("rope", "Rope (10 m)", {
		value: 25,
		weight: 10
	}),
	gear("lockpick", "Lockpick", {
		value: 40,
		weight: 1,
		pocket: "quick",
		notes: "+50% vs basic locks."
	}),
	gear("lockpick-set", "Expanded Lockpick Set", {
		value: 150,
		weight: 1,
		notes: "+70% Lockpick."
	}),
	gear("electronic-lockpick", "Electronic Lockpick", {
		value: 400,
		weight: 1,
		notes: "Required for electronic locks."
	}),
	gear("tool-set", "Tool Set", {
		value: 50,
		weight: 15,
		notes: "Basic repairs."
	}),
	gear("super-tool-kit", "Super Tool Kit", {
		value: 400,
		weight: 10,
		notes: "+20% Repair."
	}),
	gear("boots", "Boots", {
		value: 80,
		weight: 5
	}),
	gear("gas-mask", "Gas Mask", {
		value: 150,
		weight: 3,
		notes: "100/0 gas resistance."
	}),
	gear("geiger", "Geiger Counter", {
		value: 400,
		weight: 4,
		notes: "Detects rads."
	}),
	gear("motion-sensor", "Motion Sensor", {
		value: 800,
		weight: 5,
		notes: "Detects movement."
	}),
	gear("stealth-boy", "Stealth Boy", {
		value: 1800,
		weight: 3,
		pocket: "quick",
		notes: "+20% Sneak while active. Limited charges."
	}),
	gear("binoculars", "Binoculars", {
		value: 150,
		weight: 2
	}),
	gear("radio", "Two-way Radio", {
		value: 200,
		weight: 3
	}),
	gear("water-flask", "Water Flask", {
		value: 5,
		weight: 3,
		pocket: "aid"
	}),
	gear("backpack", "Backpack", {
		value: 50,
		weight: 3,
		notes: "Does not add carry; organizes pack."
	}),
	gear("watch", "Wrist Watch", {
		value: 20,
		weight: 0
	}),
	gear("dynamite", "Dynamite", {
		value: 250,
		weight: 2,
		pocket: "quick",
		notes: "Timed explosive."
	}),
	gear("plastic-ex", "Plastic Explosives", {
		value: 400,
		weight: 2,
		pocket: "quick"
	}),
	gear("timer", "Timer", {
		value: 100,
		weight: 1
	}),
	gear("detonator", "Remote Detonator", {
		value: 200,
		weight: 1
	}),
	gear("book-guns", "Guns and Bullets", {
		value: 400,
		weight: 1,
		notes: "Read to raise Small Guns."
	}),
	gear("book-first-aid", "First Aid Book", {
		value: 200,
		weight: 1
	}),
	gear("book-science", "Big Book of Science", {
		value: 400,
		weight: 2
	}),
	gear("book-repair", "Dean's Electronics", {
		value: 400,
		weight: 2
	}),
	gear("book-outdoors", "Scout Handbook", {
		value: 200,
		weight: 1
	}),
	chem("nuka-cola", "Nuka-Cola", {
		value: 8,
		weight: 1,
		pocket: "aid",
		notes: "+1 AP this fight. Sugar crash later."
	}),
	chem("beer", "Beer", {
		value: 5,
		weight: 1,
		notes: "−1 PE, +1 CH for an hour."
	}),
	chem("booze", "Booze", {
		value: 50,
		weight: 1,
		notes: "−1 PE, −1 AG, +2 CH. Hangover."
	}),
	chem("cigarettes", "Cigarettes", {
		value: 20,
		weight: 1,
		notes: "A pack. No mechanical bonus."
	}),
	chem("fruit", "Fruit", {
		value: 10,
		weight: 1,
		pocket: "aid",
		notes: "A day's calories if you trust it."
	}),
	chem("iguana-stick", "Iguana-on-a-stick", {
		value: 8,
		weight: 1,
		pocket: "aid",
		notes: "Food. Don't ask which end was the head."
	}),
	chem("mutie", "Mutie", {
		value: 100,
		weight: 1,
		notes: "Random SPECIAL swing. Rarely worth it."
	}),
	gear("bottle-caps", "Bottle Caps (10)", {
		value: 10,
		weight: 0,
		notes: "Wasteland cash."
	}),
	gear("holodisk", "Holodisk", {
		value: 50,
		weight: 1
	}),
	gear("matches", "Matches", {
		value: 5,
		weight: 0,
		pocket: "quick"
	}),
	gear("compass", "Compass", {
		value: 40,
		weight: 1
	}),
	gear("local-map", "Local Map", {
		value: 25,
		weight: 0
	}),
	gear("sleeping-bag", "Sleeping Bag", {
		value: 40,
		weight: 5
	}),
	arm("clothes", "Clothes", {
		value: 20,
		weight: 2,
		pnpAc: 0,
		resists: {
			n: r(0, 0),
			l: r(0, 0),
			f: r(0, 0),
			p: r(0, 0),
			e: r(0, 0)
		}
	}),
	exp("t13-mine", "T13 Antipersonnel Mine", {
		value: 1e3,
		weight: 3,
		dmg: "1d20+20"
	}),
	exp("t45-mine", "T45-SE Antivehicle Mine", {
		value: 1500,
		weight: 5,
		dmg: "3d20+20"
	})
];
var BY_ID = new Map(CATALOG.map((i) => [i.id, i]));
function getItem(id) {
	return BY_ID.get(id);
}
function d20ArmorAc(pnpAc) {
	return Math.round(pnpAc / 5);
}
function armorAcFor(item, engine) {
	const pnp = item.pnpAc ?? 0;
	return engine === "pnp" ? pnp : d20ArmorAc(pnp);
}
function formatDamage(item, engine) {
	if (item.dmg) return item.dmg;
	if (typeof item.bonus === "number") {
		const ammo = item.ammo?.[0];
		const base = (ammo ? getItem(ammo) : void 0)?.dmg ?? "ammo";
		return engine === "pnp" || engine === "d20" ? `${base}${item.bonus >= 0 ? "+" : ""}${item.bonus}` : base;
	}
	return "—";
}
function defaultAddQty(item) {
	if (item.kind === "ammo") return item.vol && item.vol > 0 ? item.vol : 20;
	if (item.kind === "explosive") return 1;
	return 1;
}
function resistLine(item) {
	if (!item.resists) return null;
	const { n, l, f, p, e } = item.resists;
	return `N ${n.dt}/${n.dr}  L ${l.dt}/${l.dr}  F ${f.dt}/${f.dr}  P ${p.dt}/${p.dr}  E ${e.dt}/${e.dr}`;
}
function describeItem(item, engine) {
	const bits = [];
	if (item.kind === "weapon") {
		bits.push(formatDamage(item, engine));
		if (item.rng) bits.push(`rng ${item.rng}`);
		const ap = [
			item.apS,
			item.apT,
			item.apB
		].map((n) => n == null ? "—" : String(n)).join("/");
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
var CATEGORIES = [
	{
		id: "all",
		label: "All",
		test: () => true
	},
	{
		id: "weapons",
		label: "Weapons",
		test: (i) => i.kind === "weapon"
	},
	{
		id: "unarmed",
		label: "Unarmed",
		test: (i) => i.skill === "unarmed"
	},
	{
		id: "melee",
		label: "Melee",
		test: (i) => i.skill === "meleeWeapons"
	},
	{
		id: "small",
		label: "Small guns",
		test: (i) => i.skill === "smallGuns"
	},
	{
		id: "big",
		label: "Big guns",
		test: (i) => i.skill === "bigGuns"
	},
	{
		id: "energy",
		label: "Energy",
		test: (i) => i.skill === "energyWeapons"
	},
	{
		id: "throw",
		label: "Thrown",
		test: (i) => i.skill === "throwing"
	},
	{
		id: "armor",
		label: "Armor",
		test: (i) => i.kind === "armor" || i.kind === "helmet"
	},
	{
		id: "ammo",
		label: "Ammo",
		test: (i) => i.kind === "ammo"
	},
	{
		id: "chems",
		label: "Chems",
		test: (i) => i.kind === "chem"
	},
	{
		id: "gear",
		label: "Gear",
		test: (i) => i.kind === "gear" || i.kind === "explosive"
	}
];
var KITS = [
	{
		id: "wastelander",
		name: "Wastelander kit",
		pitch: "A knife, a jacket, a 10mm, and two stimpaks.",
		items: [
			{
				itemId: "knife",
				qty: 1
			},
			{
				itemId: "leather-jacket",
				qty: 1
			},
			{
				itemId: "10mm-pistol",
				qty: 1
			},
			{
				itemId: "10mm-jhp",
				qty: 24
			},
			{
				itemId: "stimpak",
				qty: 2
			},
			{
				itemId: "lighter",
				qty: 1
			},
			{
				itemId: "water-flask",
				qty: 1
			}
		]
	},
	{
		id: "rifleman",
		name: "Rifle kit",
		pitch: "Leather armor, Rangemaster, a combat knife.",
		items: [
			{
				itemId: "combat-knife",
				qty: 1
			},
			{
				itemId: "leather-armor",
				qty: 1
			},
			{
				itemId: "hunting-rifle",
				qty: 1
			},
			{
				itemId: "223-fmj",
				qty: 20
			},
			{
				itemId: "stimpak",
				qty: 3
			},
			{
				itemId: "binoculars",
				qty: 1
			}
		]
	},
	{
		id: "talker",
		name: "Talker kit",
		pitch: "A clean jacket, a light pistol, a lockpick.",
		items: [
			{
				itemId: "switchblade",
				qty: 1
			},
			{
				itemId: "leather-jacket",
				qty: 1
			},
			{
				itemId: "9mm-beretta",
				qty: 1
			},
			{
				itemId: "9mm-jhp",
				qty: 18
			},
			{
				itemId: "lockpick",
				qty: 1
			},
			{
				itemId: "stimpak",
				qty: 1
			}
		]
	},
	{
		id: "medic",
		name: "Field medic kit",
		pitch: "Bags, stimpaks, RadAway. A pistol for the hallway.",
		items: [
			{
				itemId: "leather-jacket",
				qty: 1
			},
			{
				itemId: "10mm-pistol",
				qty: 1
			},
			{
				itemId: "10mm-jhp",
				qty: 12
			},
			{
				itemId: "stimpak",
				qty: 6
			},
			{
				itemId: "super-stimpak",
				qty: 1
			},
			{
				itemId: "radaway",
				qty: 2
			},
			{
				itemId: "doctors-bag",
				qty: 1
			},
			{
				itemId: "first-aid-kit",
				qty: 1
			}
		]
	},
	{
		id: "brawler",
		name: "Brawler kit",
		pitch: "Spiked knuckles, a jacket, and enough stimpaks to keep swinging.",
		items: [
			{
				itemId: "spiked-knuckles",
				qty: 1
			},
			{
				itemId: "leather-jacket",
				qty: 1
			},
			{
				itemId: "leather-cap",
				qty: 1
			},
			{
				itemId: "stimpak",
				qty: 4
			},
			{
				itemId: "beer",
				qty: 2
			},
			{
				itemId: "lighter",
				qty: 1
			}
		]
	}
];
function ensureLoadout(loadout) {
	if (!loadout) return emptyLoadout();
	return {
		head: loadout.head ?? null,
		body: loadout.body ?? null,
		left: loadout.left ?? null,
		right: loadout.right ?? null,
		pockets: {
			quick1: loadout.pockets?.quick1 ?? null,
			quick2: loadout.pockets?.quick2 ?? null,
			quick3: loadout.pockets?.quick3 ?? null,
			ammo: loadout.pockets?.ammo ?? null,
			chems: loadout.pockets?.chems ?? null,
			aid: loadout.pockets?.aid ?? null
		},
		pack: Array.isArray(loadout.pack) ? loadout.pack : []
	};
}
function findStack(loadout, uid) {
	if (!uid) return void 0;
	return loadout.pack.find((s) => s.uid === uid);
}
function stackItem(loadout, uid) {
	const stack = findStack(loadout, uid);
	return stack ? getItem(stack.itemId) : void 0;
}
function uid() {
	return crypto.randomUUID();
}
function clone(loadout) {
	return {
		...loadout,
		pockets: { ...loadout.pockets },
		pack: loadout.pack.map((s) => ({ ...s }))
	};
}
function defaultAmmo(item) {
	if (item.kind !== "weapon" || !item.ammo?.length) return {};
	return {
		ammoId: item.ammo[0],
		loaded: item.mag ?? 0
	};
}
function addToPack(loadout, itemId, qty = 1) {
	const item = getItem(itemId);
	if (!item) return loadout;
	const next = clone(ensureLoadout(loadout));
	if (item.kind === "ammo" || item.kind === "chem" || item.kind === "explosive" || item.kind === "gear") {
		const existing = next.pack.find((s) => s.itemId === itemId && !isEquipped(next, s.uid) && !isPocketed(next, s.uid));
		if (existing) {
			existing.qty += qty;
			return next;
		}
	}
	next.pack.push({
		uid: uid(),
		itemId,
		qty,
		...defaultAmmo(item)
	});
	return next;
}
function placeBest(loadout, stackUid) {
	const ready = ensureLoadout(loadout);
	const item = stackItem(ready, stackUid);
	if (!item) return loadout;
	if (item.kind === "helmet" && !ready.head) return equip(ready, stackUid, "head");
	if (item.kind === "armor" && !ready.body) return equip(ready, stackUid, "body");
	if (item.kind === "weapon") {
		if (item.hands === 2 && !ready.left && !ready.right) return equip(ready, stackUid, "right");
		if (!ready.right) return equip(ready, stackUid, "right");
		if (!ready.left) return equip(ready, stackUid, "left");
	}
	if (item.kind === "ammo" && !ready.pockets.ammo) return putInPocket(ready, stackUid, "ammo");
	if (item.kind === "chem") {
		const pocket = item.pocket === "aid" ? "aid" : "chems";
		if (!ready.pockets[pocket]) return putInPocket(ready, stackUid, pocket);
	}
	if ((item.kind === "gear" || item.kind === "explosive") && item.pocket === "quick") {
		for (const p of [
			"quick1",
			"quick2",
			"quick3"
		]) if (!ready.pockets[p]) return putInPocket(ready, stackUid, p);
	}
	if (item.kind === "gear" && item.pocket === "aid" && !ready.pockets.aid) return putInPocket(ready, stackUid, "aid");
	return ready;
}
function addAndSlot(loadout, itemId, qty) {
	const item = getItem(itemId);
	if (!item) return loadout;
	const addQty = qty ?? defaultAddQty(item);
	const before = new Set(ensureLoadout(loadout).pack.map((s) => s.uid));
	const next = addToPack(loadout, itemId, addQty);
	const fresh = next.pack.find((s) => !before.has(s.uid));
	if (!fresh) return next;
	return placeBest(next, fresh.uid);
}
function applyKit(loadout, kit, replace = false) {
	let next = replace ? emptyLoadout() : ensureLoadout(loadout);
	for (const entry of kit.items) next = addAndSlot(next, entry.itemId, entry.qty);
	return next;
}
function removeStack(loadout, stackUid) {
	const next = clone(ensureLoadout(loadout));
	next.pack = next.pack.filter((s) => s.uid !== stackUid);
	for (const slot of [
		"head",
		"body",
		"left",
		"right"
	]) if (next[slot] === stackUid) next[slot] = null;
	for (const p of POCKET_IDS) if (next.pockets[p] === stackUid) next.pockets[p] = null;
	return next;
}
function setQty(loadout, stackUid, qty) {
	if (qty <= 0) return removeStack(loadout, stackUid);
	const next = clone(ensureLoadout(loadout));
	const stack = next.pack.find((s) => s.uid === stackUid);
	if (stack) stack.qty = qty;
	return next;
}
function isEquipped(loadout, stackUid) {
	return loadout.head === stackUid || loadout.body === stackUid || loadout.left === stackUid || loadout.right === stackUid;
}
function isPocketed(loadout, stackUid) {
	return POCKET_IDS.some((p) => loadout.pockets[p] === stackUid);
}
function unequip(loadout, slot) {
	const next = clone(ensureLoadout(loadout));
	const held = next[slot];
	next[slot] = null;
	if (slot === "left" || slot === "right") {
		const other = slot === "left" ? next.right : next.left;
		if (held && other === held) {
			next.left = null;
			next.right = null;
		}
	}
	return next;
}
function equip(loadout, stackUid, slot) {
	const next = clone(ensureLoadout(loadout));
	const stack = next.pack.find((s) => s.uid === stackUid);
	if (!stack) return loadout;
	const item = getItem(stack.itemId);
	if (!item) return loadout;
	if (slot === "head" && item.kind !== "helmet") return loadout;
	if (slot === "body" && item.kind !== "armor") return loadout;
	if ((slot === "left" || slot === "right") && item.kind !== "weapon") return loadout;
	for (const p of POCKET_IDS) if (next.pockets[p] === stackUid) next.pockets[p] = null;
	if (slot === "left" || slot === "right") {
		if (item.hands === 2) {
			next.left = stackUid;
			next.right = stackUid;
			return next;
		}
		if (next.left && next.left === next.right) {
			next.left = null;
			next.right = null;
		}
		next[slot] = stackUid;
		return next;
	}
	next[slot] = stackUid;
	return next;
}
function putInPocket(loadout, stackUid, pocket) {
	const next = clone(ensureLoadout(loadout));
	if (!next.pack.some((s) => s.uid === stackUid)) return loadout;
	for (const p of POCKET_IDS) if (next.pockets[p] === stackUid) next.pockets[p] = null;
	for (const slot of [
		"head",
		"body",
		"left",
		"right"
	]) if (next[slot] === stackUid) next[slot] = null;
	next.pockets[pocket] = stackUid;
	return next;
}
function clearPocket(loadout, pocket) {
	const next = clone(ensureLoadout(loadout));
	next.pockets[pocket] = null;
	return next;
}
function carriedWeight(loadout) {
	return ensureLoadout(loadout).pack.reduce((n, s) => {
		return n + (getItem(s.itemId)?.weight ?? 0) * s.qty;
	}, 0);
}
function equippedArmor(loadout) {
	return stackItem(ensureLoadout(loadout), ensureLoadout(loadout).body);
}
function equippedHelmet(loadout) {
	const ready = ensureLoadout(loadout);
	if (stackItem(ready, ready.body)?.includesHelmet) return void 0;
	return stackItem(ready, ready.head);
}
function gearSummary(loadout, engine) {
	const ready = ensureLoadout(loadout);
	const armor = equippedArmor(ready);
	const helmet = equippedHelmet(ready);
	const armorAc = (armor ? armorAcFor(armor, engine) : 0) + (helmet ? armorAcFor(helmet, engine) : 0);
	const n = armor?.resists?.n;
	return {
		armorAc,
		dt: n?.dt ?? 0,
		dr: n?.dr ?? 0,
		strBonus: armor?.strBonus ?? 0,
		pePenalty: armor?.pePenalty ?? 0,
		radBonus: (armor?.radBonus ?? 0) + (helmet?.radBonus ?? 0),
		poisonBonus: (armor?.poisonBonus ?? 0) + (helmet?.poisonBonus ?? 0),
		sneakPen: armor?.sneakPen ?? 0,
		carried: carriedWeight(ready)
	};
}
function countItem(loadout, itemId) {
	return ensureLoadout(loadout).pack.filter((s) => s.itemId === itemId).reduce((n, s) => n + s.qty, 0);
}
function consumeItem(loadout, itemId, qty = 1) {
	const next = clone(ensureLoadout(loadout));
	let need = qty;
	for (const stack of next.pack) {
		if (stack.itemId !== itemId || need <= 0) continue;
		const take = Math.min(stack.qty, need);
		stack.qty -= take;
		need -= take;
	}
	if (need > 0) return null;
	const empty = new Set(next.pack.filter((s) => s.qty <= 0).map((s) => s.uid));
	next.pack = next.pack.filter((s) => s.qty > 0);
	for (const slot of [
		"head",
		"body",
		"left",
		"right"
	]) if (next[slot] && empty.has(next[slot])) next[slot] = null;
	for (const p of POCKET_IDS) if (next.pockets[p] && empty.has(next.pockets[p])) next.pockets[p] = null;
	return next;
}
var GENDER_META = {
	male: {
		name: "Male",
		blurb: "He/him on the dossier. Sex Appeal treats women as the other side of the room.",
		pronoun: "he",
		object: "him",
		poss: "his"
	},
	female: {
		name: "Female",
		blurb: "She/her on the dossier. Sex Appeal treats men as the other side of the room.",
		pronoun: "she",
		object: "her",
		poss: "her"
	},
	other: {
		name: "Other",
		blurb: "No assumed side. The room still picks one when Sex Appeal is on the sheet.",
		pronoun: "they",
		object: "them",
		poss: "their"
	}
};
function genderOf(character) {
	return character.gender === "male" || character.gender === "female" ? character.gender : "other";
}
var SPECIAL_META = {
	STR: {
		name: "Strength",
		letter: "S",
		blurb: "Force, lifting, melee power, recoil control"
	},
	PE: {
		name: "Perception",
		letter: "P",
		blurb: "Awareness, precision, sensory information"
	},
	EN: {
		name: "Endurance",
		letter: "E",
		blurb: "Stamina, durability, recovery, resistance"
	},
	CH: {
		name: "Charisma",
		letter: "C",
		blurb: "Social force, communication, leadership"
	},
	IN: {
		name: "Intelligence",
		letter: "I",
		blurb: "Reasoning, memory, technical ability, skill growth"
	},
	AG: {
		name: "Agility",
		letter: "A",
		blurb: "Coordination, speed, defense, action economy"
	},
	LK: {
		name: "Luck",
		letter: "L",
		blurb: "Chance, criticals, improbable outcomes"
	}
};
var SKILL_META = {
	smallGuns: {
		name: "Small Guns",
		blurb: "Pistols, SMGs, rifles, shotguns",
		attrs: ["AG"]
	},
	bigGuns: {
		name: "Big Guns",
		blurb: "Machine guns, launchers, support weapons",
		attrs: ["AG"]
	},
	energyWeapons: {
		name: "Energy Weapons",
		blurb: "Directed-energy and analogous systems",
		attrs: ["AG"]
	},
	unarmed: {
		name: "Unarmed",
		blurb: "Fists, kicks, powered hand weapons",
		attrs: ["AG", "STR"]
	},
	meleeWeapons: {
		name: "Melee Weapons",
		blurb: "Knives, clubs, swords, axes, polearms",
		attrs: ["AG", "STR"]
	},
	throwing: {
		name: "Throwing",
		blurb: "Thrown weapons and explosives",
		attrs: ["AG"]
	},
	firstAid: {
		name: "First Aid",
		blurb: "Basic treatment and stabilization",
		attrs: ["PE", "EN"]
	},
	doctor: {
		name: "Doctor",
		blurb: "Surgery, fractures, complex medicine",
		attrs: ["PE", "IN"]
	},
	sneak: {
		name: "Sneak",
		blurb: "Quiet movement and avoiding notice",
		attrs: ["AG"]
	},
	lockpick: {
		name: "Lockpick",
		blurb: "Mechanical locks and bypass work",
		attrs: ["PE", "AG"]
	},
	steal: {
		name: "Steal",
		blurb: "Pickpocketing, planting, theft",
		attrs: ["AG"]
	},
	traps: {
		name: "Traps",
		blurb: "Detect, set, disarm, and use traps",
		attrs: ["PE", "AG"]
	},
	science: {
		name: "Science",
		blurb: "Analysis, research, advanced systems",
		attrs: ["IN"]
	},
	repair: {
		name: "Repair",
		blurb: "Mechanical and technical maintenance",
		attrs: ["IN"]
	},
	pilot: {
		name: "Pilot",
		blurb: "Vehicles, aircraft, complex transport",
		attrs: ["AG", "PE"]
	},
	speech: {
		name: "Speech",
		blurb: "Persuasion, deception, intimidation",
		attrs: ["CH"]
	},
	barter: {
		name: "Barter",
		blurb: "Trade, appraisal, prices, exchange",
		attrs: ["CH"]
	},
	gambling: {
		name: "Gambling",
		blurb: "Games of chance, tells, risk",
		attrs: ["LK"]
	},
	outdoorsman: {
		name: "Outdoorsman",
		blurb: "Tracking, navigation, food, water, survival",
		attrs: ["EN", "IN"]
	}
};
var BACKGROUNDS = [
	{
		id: "laborer",
		name: "Laborer",
		pitch: "Hard work, heavier tools, and a body that already knows strain.",
		special: {
			STR: 3,
			EN: 1,
			PE: 1
		},
		skills: {
			meleeWeapons: 2,
			repair: 2,
			outdoorsman: 1
		}
	},
	{
		id: "academic",
		name: "Academic",
		pitch: "Books, labs, and a mind trained to take systems apart.",
		special: {
			IN: 4,
			PE: 1
		},
		skills: {
			science: 2,
			doctor: 2,
			firstAid: 1
		}
	},
	{
		id: "soldier",
		name: "Soldier",
		pitch: "Drills, formations, and weapons that already feel familiar.",
		special: {
			STR: 2,
			EN: 2,
			PE: 1
		},
		skills: {
			smallGuns: 2,
			bigGuns: 2,
			outdoorsman: 1
		}
	},
	{
		id: "criminal",
		name: "Criminal",
		pitch: "Quiet hands, locked doors, and a talent for not being seen.",
		special: {
			AG: 3,
			LK: 1,
			PE: 1
		},
		skills: {
			sneak: 2,
			lockpick: 2,
			steal: 1
		}
	},
	{
		id: "merchant",
		name: "Merchant",
		pitch: "Prices, people, and the luck of a closing handshake.",
		special: {
			CH: 2,
			LK: 2,
			PE: 1
		},
		skills: {
			barter: 2,
			speech: 2,
			gambling: 1
		}
	},
	{
		id: "rural",
		name: "Rural",
		pitch: "Weather, repair jobs, and a life lived away from the street.",
		special: {
			EN: 2,
			PE: 1,
			AG: 1,
			IN: 1
		},
		skills: {
			outdoorsman: 2,
			repair: 2,
			meleeWeapons: 1
		}
	},
	{
		id: "technician",
		name: "Technician",
		pitch: "Wiring, tolerances, and machines that answer when asked correctly.",
		special: {
			IN: 3,
			AG: 1,
			PE: 1
		},
		skills: {
			repair: 2,
			science: 2,
			smallGuns: 1
		}
	},
	{
		id: "performer",
		name: "Performer",
		pitch: "Attention as a tool — and a room that leans in when you speak.",
		special: {
			CH: 4,
			LK: 1
		},
		skills: {
			speech: 2,
			gambling: 2,
			steal: 1
		}
	},
	{
		id: "scout",
		name: "Scout",
		pitch: "Distance, quiet ground, and seeing the problem before it sees you.",
		special: {
			PE: 2,
			AG: 2,
			EN: 1
		},
		skills: {
			sneak: 2,
			outdoorsman: 2,
			smallGuns: 1
		}
	},
	{
		id: "veteran",
		name: "Veteran",
		pitch: "Old campaigns, heavier guns, and the habit of coming back.",
		special: {
			STR: 2,
			EN: 1,
			PE: 1,
			LK: 1
		},
		skills: {
			smallGuns: 2,
			bigGuns: 2,
			repair: 1
		}
	},
	{
		id: "custom",
		name: "Custom",
		pitch: "Write your own past. Still exactly +5 SPECIAL and +5 skill ranks.",
		special: {},
		skills: {}
	}
];
var TRAITS = {
	fastMetabolism: {
		name: "Fast Metabolism",
		summary: "+2 heal/day · poison & rad start at 0",
		detail: "Healing Rate +2. Poison Resistance and Radiation Resistance start at 0 before armor and other modifiers. Your body burns through everything — including the things that would have saved you."
	},
	bruiser: {
		name: "Bruiser",
		summary: "+2 STR, −2 AP",
		detail: "A little slower, a little bigger. +2 Strength, −2 Action Points. Recoil, carry, melee, and HP all drink the extra Strength."
	},
	smallFrame: {
		name: "Small Frame",
		summary: "+1 AG · carry becomes 15 × STR",
		detail: "+1 Agility. Carry Weight becomes 15 lbs × Strength instead of 25 + 25 × STR. Fast. Fragile backpack."
	},
	oneHander: {
		name: "One Hander",
		summary: "+4 one-hand to-hit, −8 two-hand",
		detail: "+4 to hit with one-handed weapons, −8 with two-handed weapons. Pistols, SMGs, one-hand melee love you. Rifles and big iron do not."
	},
	finesse: {
		name: "Finesse",
		summary: "Wider crits, −4 melee",
		detail: "Increase Critical Range by 1 number. Reduce melee and unarmed damage by 4. Final melee or unarmed damage cannot be reduced below 1 by Finesse alone."
	},
	kamikaze: {
		name: "Kamikaze",
		summary: "No Agility AC · +5 Sequence",
		detail: "Armor Class is only what you wear — Agility does not add. Sequence gets +5. You go first. You also get hit."
	},
	heavyHanded: {
		name: "Heavy Handed",
		summary: "+4 melee · crit range −1",
		detail: "+4 Melee Damage. Critical Range shrinks by 1 number (you hit like a truck, you do not hit like a scalpel). On the d100 sheet this also makes crits 30% less nasty."
	},
	fastShot: {
		name: "Fast Shot",
		summary: "Ranged attacks −1 AP · no targeted shots",
		detail: "All ranged weapons cost 1 less AP to fire. You cannot make targeted shots. No effect on unarmed or melee."
	},
	bloodyMess: {
		name: "Bloody Mess",
		summary: "People die the worst way possible",
		detail: "When things die around you, they die dramatically. No numeric bonus. The table will remember you anyway."
	},
	jinxed: {
		name: "Jinxed",
		summary: "Everyone crit-fails 18–20",
		detail: "The character’s Critical Failure Range is 18–20. While the Jinxed character is in a fight, every combatant uses 18–20."
	},
	goodNatured: {
		name: "Good Natured",
		summary: "+4 talk/heal skills, −2 combat skills",
		detail: "+4 First Aid, Doctor, Speech, and Barter. −2 Small Guns, Big Guns, Energy Weapons, Unarmed, and Melee Weapons. One-time, at creation. (d100: +20% / −10%.)"
	},
	chemReliant: {
		name: "Chem Reliant",
		summary: "Double addiction, half recovery time",
		detail: "Addiction chance is twice normal. You recover from chem effects in half the time. The high is a tool. So is the crash."
	},
	chemResistant: {
		name: "Chem Resistant",
		summary: "Half duration, half addiction",
		detail: "Chems last half as long. Addiction chance is 50% of normal. Stimpaks still work. Jet is a rumor."
	},
	nightPerson: {
		name: "Night Person",
		summary: "+1 IN/PE at night, −1 by day",
		detail: "+1 Intelligence and Perception from 18:01–06:00, −1 from 06:01–18:00. Mark it on the sheet. Flip it when the sun does."
	},
	skilled: {
		name: "Skilled",
		summary: "+2 every skill · +1 SP/level · perks every 4",
		detail: "Increase every Skill by 2 at character creation. Gain +1 additional Skill Point each level. Gain a Perk every 4 levels instead of every 3."
	},
	gifted: {
		name: "Gifted",
		summary: "+1 every SPECIAL, −2 every skill",
		detail: "Increase every SPECIAL attribute by 1. Reduce every Skill by 2 at character creation. Gifted does not reduce Skill Points gained at later levels."
	},
	sexAppeal: {
		name: "Sex Appeal",
		summary: "Opposite sex loves you, same sex doesn't",
		detail: "Opposite sex: treat Charisma as +1 for reactions, and +8 Speech and Barter (d100: +40%). Same sex: −1 CH reactions, −8 / −40%. The room picks a side."
	},
	techWizard: {
		name: "Tech Wizard",
		summary: "+3 Science/Repair/Lockpick, −1 PE",
		detail: "+3 Science, Repair, and Lockpick (d100: +15%). −1 Perception. You see systems. You miss the guy in the doorway."
	}
};
var PNP_TRAITS = {
	fastMetabolism: {
		name: "Fast Metabolism",
		summary: "+2 heal, poison/rad start at 0%",
		detail: "Healing Rate +2. Poison Resistance and Radiation Resistance start at 0% before racial modifiers."
	},
	bruiser: {
		name: "Bruiser",
		summary: "+2 STR, −2 AP",
		detail: "A little slower, a little bigger. +2 Strength, −2 Action Points."
	},
	smallFrame: {
		name: "Small Frame",
		summary: "+1 AG, carry 15 × STR",
		detail: "+1 Agility. Carry Weight becomes 15 lbs × Strength instead of 25 + 25 × STR."
	},
	oneHander: {
		name: "One Hander",
		summary: "+20% one-hand, −40% two-hand",
		detail: "+20% to-hit with one-handed weapons, −40% with two-handed weapons."
	},
	finesse: {
		name: "Finesse",
		summary: "+10% crit chance, −30% damage",
		detail: "All attacks lose 30% of their damage after DR, but Critical Chance gains +10%."
	},
	kamikaze: {
		name: "Kamikaze",
		summary: "No natural AC, +5 Sequence",
		detail: "Armor Class is only what you wear — Agility does not add. Sequence gets +5."
	},
	heavyHanded: {
		name: "Heavy Handed",
		summary: "+4 melee damage, weaker crits",
		detail: "+4 Melee Damage. Critical hits deal 30% less damage and are 30% less likely to cripple or KO."
	},
	fastShot: {
		name: "Fast Shot",
		summary: "Weapons −1 AP, no targeted shots",
		detail: "All ranged weapons cost 1 less AP. You cannot make targeted shots. No effect on unarmed or melee."
	},
	bloodyMess: {
		name: "Bloody Mess",
		summary: "People die dramatically",
		detail: "When things die around you, they die the worst way possible. No numeric bonus."
	},
	jinxed: {
		name: "Jinxed",
		summary: "Everyone crit-fails more",
		detail: "Failures in combat are 50% more likely to become critical failures — for you and everyone else in the fight."
	},
	goodNatured: {
		name: "Good Natured",
		summary: "+20% talk/heal, −10% combat",
		detail: "+20% First Aid, Doctor, Speech, Barter. −10% Small Guns, Big Guns, Energy Weapons, Unarmed, Melee Weapons. One-time."
	},
	chemReliant: {
		name: "Chem Reliant",
		summary: "Double addiction, half recovery",
		detail: "Addiction chance is twice normal. You recover from chem effects in half the time."
	},
	chemResistant: {
		name: "Chem Resistant",
		summary: "Half duration, half addiction",
		detail: "Chems last half as long. Addiction chance is 50% of normal."
	},
	nightPerson: {
		name: "Night Person",
		summary: "IN/PE +1 at night, −1 by day",
		detail: "+1 Intelligence and Perception from 18:01–06:00, −1 from 06:01–18:00."
	},
	skilled: {
		name: "Skilled",
		summary: "+10% skills, +5 SP/level, slower perks",
		detail: "+10% to all skills at creation. +5 skill points per level. Perks arrive one level later than normal."
	},
	gifted: {
		name: "Gifted",
		summary: "+1 all SPECIAL, −10% skills, −5 SP/level",
		detail: "+1 to every Primary Statistic. −10% to all skills. −5 skill points per level."
	},
	sexAppeal: {
		name: "Sex Appeal",
		summary: "Opposite sex loves you, same sex doesn't",
		detail: "Opposite sex: +1 CH for reactions, +40% Speech and Barter. Same sex: −1 CH, −40% Speech and Barter."
	},
	techWizard: {
		name: "Tech Wizard",
		summary: "+15% tech skills, −1 PE",
		detail: "+15% Science, Repair, and Lockpick. −1 Perception."
	}
};
function emptySpecial(fill = 0) {
	return {
		STR: fill,
		PE: fill,
		EN: fill,
		CH: fill,
		IN: fill,
		AG: fill,
		LK: fill
	};
}
function sumSpecial(block) {
	return SPECIAL_KEYS.reduce((n, key) => n + (block[key] ?? 0), 0);
}
function emptyCustomBackground() {
	return {
		name: "Custom",
		special: emptySpecial(0),
		skills: {}
	};
}
function newCharacter(partial) {
	const now = Date.now();
	const engine = partial?.engine ?? "d20";
	const built = {
		id: crypto.randomUUID(),
		name: "",
		gender: "other",
		appearance: "",
		history: "",
		goals: "",
		notes: "",
		equipment: "",
		level: 1,
		armorAc: 0,
		karma: 0,
		rolled: emptySpecial(0),
		backgroundId: engine === "pnp" ? "none" : "laborer",
		customBackground: emptyCustomBackground(),
		free: emptySpecial(0),
		adjust: emptySpecial(0),
		traits: [],
		educationId: "none",
		lifeId: "none",
		scars: [],
		tagged: [],
		skillSpent: {},
		perks: [],
		skillBank: 0,
		perkBank: 0,
		loadout: emptyLoadout(),
		createdAt: now,
		updatedAt: now,
		...partial,
		engine
	};
	built.loadout = ensureLoadout(built.loadout);
	built.gender = genderOf(built);
	return built;
}
function exampleGeneralist() {
	return newCharacter({
		engine: "d20",
		name: "Rook Hale",
		gender: "male",
		appearance: "Broad shoulders, split knuckle, a coat that has been mended twice.",
		history: "Worked freight, then enlisted, then walked away with the same tools.",
		goals: "Stay useful. Keep the people nearby alive.",
		notes: "Appendix C.1 — Balanced Generalist, loaded as a worked example.",
		rolled: {
			STR: 6,
			PE: 7,
			EN: 5,
			CH: 6,
			IN: 8,
			AG: 7,
			LK: 6
		},
		backgroundId: "laborer",
		free: {
			STR: 0,
			PE: 0,
			EN: 0,
			CH: 1,
			IN: 1,
			AG: 2,
			LK: 1
		},
		tagged: [
			"smallGuns",
			"repair",
			"outdoorsman"
		],
		educationId: "wrench",
		lifeId: "dust",
		scars: ["burnedHands"],
		equipment: "Wastelander kit from the PnP list, converted for d20 armor AC.",
		loadout: applyKit(emptyLoadout(), KITS.find((k) => k.id === "wastelander"), true)
	});
}
function examplePnpDiplomat() {
	return newCharacter({
		engine: "pnp",
		name: "Maverick",
		gender: "female",
		appearance: "A lawyer's smile in a world that ran out of courts.",
		history: "Talked past vault security, then talked past the wastes.",
		goals: "Walk into a room and walk out owning it.",
		notes: "PnP worked example — Jane's diplomat, rebuilt as a rolled array (no racial cap, no background).",
		backgroundId: "none",
		rolled: {
			STR: 4,
			PE: 6,
			EN: 4,
			CH: 7,
			IN: 7,
			AG: 5,
			LK: 7
		},
		free: emptySpecial(0),
		traits: ["sexAppeal"],
		tagged: [
			"speech",
			"barter",
			"gambling"
		],
		educationId: "street",
		lifeId: "vaultborn",
		scars: ["shrapnelSmile"],
		equipment: "Talker kit. A clean jacket and a worse reputation.",
		loadout: applyKit(emptyLoadout(), KITS.find((k) => k.id === "talker"), true)
	});
}
function rollD10() {
	const bytes = /* @__PURE__ */ new Uint32Array(1);
	crypto.getRandomValues(bytes);
	return bytes[0] % 10 + 1;
}
function rollArray() {
	return {
		STR: rollD10(),
		PE: rollD10(),
		EN: rollD10(),
		CH: rollD10(),
		IN: rollD10(),
		AG: rollD10(),
		LK: rollD10()
	};
}
function traitName(id, engine) {
	if (engine === "pnp" && id in PNP_TRAITS) return PNP_TRAITS[id].name;
	if (id in TRAITS) return TRAITS[id].name;
	if (id === "lifegiver") return "Lifegiver";
	return id;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-fg",
			secondary: "bg-raised text-fg shadow-[0_0_0_1px_rgba(236,234,227,0.08)] hover:bg-border",
			outline: "bg-transparent text-fg shadow-[0_0_0_1px_rgba(236,234,227,0.14)] hover:bg-raised",
			ghost: "bg-transparent text-muted hover:bg-raised hover:text-fg",
			danger: "bg-danger text-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4 text-sm",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-5 text-base",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function describeSpecial(block) {
	return SPECIAL_KEYS.filter((k) => (block[k] ?? 0) !== 0).map((k) => {
		const n = block[k] ?? 0;
		return `${n > 0 ? "+" : ""}${n} ${k}`;
	}).join(", ") || "no SPECIAL shift";
}
function describeDerived(d) {
	if (!d) return [];
	const out = [];
	const add = (label, n) => {
		if (!n) return;
		out.push(`${n > 0 ? "+" : ""}${n} ${label}`);
	};
	add("HP", d.hp);
	add("HP/level", d.hpPerLevel);
	add("AP", d.ap);
	add("AC", d.ac);
	add("Sequence", d.sequence);
	add("Carry", d.carry);
	add("Heal/day", d.healingRate);
	add("Poison", d.poison);
	add("Rad resist", d.radiation);
	add("Melee", d.melee);
	add("SP/level", d.skillPoints);
	if (d.critShift) out.push(d.critShift > 0 ? `Crit range +${d.critShift}` : `Crit range ${d.critShift}`);
	return out;
}
function describeSkillBonus(bonus) {
	if (!bonus) return [];
	return SKILL_IDS.filter((id) => (bonus[id] ?? 0) !== 0).map((id) => {
		const n = bonus[id] ?? 0;
		return `${n > 0 ? "+" : ""}${n} ${id}`;
	});
}
function pathNotes(p) {
	return [
		...p.formulas.map((entry) => entry.note),
		...describeDerived(p.derived),
		...describeSkillBonus(p.skillBonus)
	];
}
function f(skill, note, d20, pnp) {
	return {
		skill,
		note,
		d20,
		pnp
	};
}
function path(id, name, summary, story, hook, special, formulas = [], extra = {}) {
	return {
		id,
		name,
		summary,
		story,
		hook,
		special,
		formulas,
		...extra
	};
}
var EDUCATIONS = [
	path("none", "No schooling", "Nobody sat you down", "Whatever you know, you stole from doing it. No classroom, no mentor, no one to blame for the gaps.", "Blank slate. Cute. Dangerous.", {}),
	path("street", "Street school", "+1 AG, +1 CH, +1 LK · steal/speech rewritten", "The lesson was prices, pockets, and who to smile at. You learned faster than kids with desks because the test was staying fed.", "Street school. Pockets first, books never.", {
		AG: 1,
		CH: 1,
		LK: 1
	}, [
		f("steal", "Steal scales harder off Agility.", {
			intercept: 0,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("speech", "Speech is Charisma plus Luck — a tell and a grin.", {
			intercept: 0,
			coeff: .6,
			attrs: ["CH", "LK"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH", "LK"]
		}),
		f("science", "Science was never on the syllabus.", {
			intercept: 0,
			coeff: .5,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["IN"]
		})
	]),
	path("vault", "Vault classroom", "+2 IN, +1 CH · +1 SP/level · outdoorsman down", "Fluorescents, recitations, a test every Friday. The world outside was a filmstrip. You can quote a manual. You cannot smell rain coming.", "Vault classroom. Homework kid with a jumpsuit tan.", {
		IN: 2,
		CH: 1
	}, [
		f("science", "Science is a full Intelligence scale.", {
			intercept: 0,
			coeff: 1,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 5,
			attrs: ["IN"]
		}),
		f("speech", "Speech picks up a classroom intercept.", {
			intercept: 2,
			coeff: 1,
			attrs: ["CH"]
		}, {
			intercept: 10,
			coeff: 5,
			attrs: ["CH"]
		}),
		f("outdoorsman", "Outdoorsman barely notices Endurance.", {
			intercept: 0,
			coeff: .2,
			attrs: ["EN", "IN"]
		}, {
			intercept: 0,
			coeff: 1,
			attrs: ["EN", "IN"]
		})
	], { derived: { skillPoints: 1 } }),
	path("scribe", "Scribe's desk", "+2 IN, +1 PE, −1 CH · science/repair/energy rewritten", "You copied old-world pages until the ink smelled like food. People became interruptions. Machines became the only honest conversation.", "Scribe's desk. Kiss the chalkboard, skip the party.", {
		IN: 2,
		PE: 1,
		CH: -1
	}, [
		f("science", "Science is 1.2× Intelligence.", {
			intercept: 0,
			coeff: 1.2,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 6,
			attrs: ["IN"]
		}),
		f("repair", "Repair tracks Intelligence like a trade.", {
			intercept: 0,
			coeff: .8,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["IN"]
		}),
		f("energyWeapons", "Energy Weapons mix Agility with Intelligence.", {
			intercept: 0,
			coeff: .35,
			attrs: ["AG", "IN"]
		}, {
			intercept: 0,
			coeff: 1,
			attrs: ["AG", "IN"]
		})
	]),
	path("tribal", "Tribal memory", "+2 EN, +1 PE, −1 IN · +1 heal/day · outdoorsman rewritten", "The elders did not write it down. They made you walk it, name the plants, and stitch a wound with a story attached so you would not forget.", "Tribal memory. The land is the textbook.", {
		EN: 2,
		PE: 1,
		IN: -1
	}, [
		f("outdoorsman", "Outdoorsman is Endurance plus Perception.", {
			intercept: 0,
			coeff: .6,
			attrs: ["EN", "PE"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["EN", "PE"]
		}),
		f("firstAid", "First Aid leans on the body you have, not a textbook.", {
			intercept: 0,
			coeff: .5,
			attrs: ["PE", "EN"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["PE", "EN"]
		}),
		f("science", "Science is rumor and salvage.", {
			intercept: 0,
			coeff: .4,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["IN"]
		})
	], { derived: { healingRate: 1 } }),
	path("drill", "Firing line", "+1 PE, +1 AG, +1 EN · +1 HP/level · guns rewritten", "Someone counted cadence until the rifle was a limb. You learned range estimation before you learned a second language.", "Firing line. The rifle got a childhood. You got a flinch.", {
		PE: 1,
		AG: 1,
		EN: 1
	}, [
		f("smallGuns", "Small Guns is a full Agility scale.", {
			intercept: 1,
			coeff: 1,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 5,
			attrs: ["AG"]
		}),
		f("bigGuns", "Big Guns finally notices Agility.", {
			intercept: 0,
			coeff: .6,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["AG"]
		}),
		f("doctor", "Doctor was a pamphlet between drills.", {
			intercept: 0,
			coeff: .15,
			attrs: ["PE", "IN"]
		}, {
			intercept: 0,
			coeff: 1,
			attrs: ["PE", "IN"]
		})
	], { derived: { hpPerLevel: 1 } }),
	path("clinic", "Clinic floor", "+2 IN, +1 PE · +1 heal/day · medicine onto IN", "Blood, boiled cloth, and a teacher who slapped your wrist when the suture wandered. You learned people from the inside.", "Clinic floor. You stitch. I faint. Fair trade.", {
		IN: 2,
		PE: 1
	}, [
		f("firstAid", "First Aid is Perception plus Intelligence, not Endurance.", {
			intercept: 0,
			coeff: .5,
			attrs: ["PE", "IN"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["PE", "IN"]
		}),
		f("doctor", "Doctor is a real medical scale.", {
			intercept: 2,
			coeff: .4,
			attrs: ["PE", "IN"]
		}, {
			intercept: 10,
			coeff: 2,
			attrs: ["PE", "IN"]
		}),
		f("smallGuns", "Small Guns was never the point.", {
			intercept: 0,
			coeff: .6,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["AG"]
		})
	], { derived: { healingRate: 1 } }),
	path("wrench", "Wrench and wire", "+2 IN, +1 AG · repair/traps/pilot rewritten", "If it had a panel, you opened it. Mentors were leftover manuals and one mean drunk who could hear a bad bearing from the next room.", "Wrench and wire. Grease under the nails, math in the head.", {
		IN: 2,
		AG: 1
	}, [
		f("repair", "Repair is a full Intelligence scale.", {
			intercept: 0,
			coeff: 1,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 5,
			attrs: ["IN"]
		}),
		f("traps", "Traps are Perception plus Intelligence.", {
			intercept: 2,
			coeff: .3,
			attrs: ["PE", "IN"]
		}, {
			intercept: 10,
			coeff: 1,
			attrs: ["PE", "IN"]
		}),
		f("pilot", "Pilot mixes Agility with Intelligence.", {
			intercept: 0,
			coeff: .5,
			attrs: ["AG", "IN"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["AG", "IN"]
		})
	]),
	path("preacher", "Pulpit hours", "+2 CH, +1 IN · speech uses IN · sneak down", "You learned to hold a room with a voice and a book you only half believed. The trick was making them believe it first.", "Pulpit hours. Talk them into heaven, then pick a direction.", {
		CH: 2,
		IN: 1
	}, [
		f("speech", "Speech is Charisma plus Intelligence.", {
			intercept: 0,
			coeff: .6,
			attrs: ["CH", "IN"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH", "IN"]
		}),
		f("barter", "Barter is a congregation with prices.", {
			intercept: 0,
			coeff: .9,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 5,
			attrs: ["CH"]
		}),
		f("sneak", "Sneak was never holy.", {
			intercept: 0,
			coeff: .4,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["AG"]
		})
	], { skillBonus: { speech: 2 } }),
	path("chemCook", "Chem kitchen", "+2 IN, +1 LK, −1 EN · science rewritten · poison −2", "Recipes nobody should memorize. You learned yield, purity, and which fumes mean the night is over. Your liver filed a complaint.", "Chem kitchen. Smart, lucky, slightly dissolved.", {
		IN: 2,
		LK: 1,
		EN: -1
	}, [f("science", "Science is a full cook's Intelligence scale.", {
		intercept: 1,
		coeff: 1,
		attrs: ["IN"]
	}, {
		intercept: 5,
		coeff: 5,
		attrs: ["IN"]
	}), f("firstAid", "First Aid is what you did when a batch went wrong.", {
		intercept: 0,
		coeff: .5,
		attrs: ["PE", "IN"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["PE", "IN"]
	})], {
		derived: { poison: -2 },
		skillBonus: { science: 2 }
	}),
	path("pitSchool", "Pit school", "+2 STR, +1 AG, −1 IN · +4 HP · unarmed rewritten", "The lesson was falling down correctly. Someone older hit you until you hit back with structure. Books were for people with teeth.", "Pit school. Homework was a black eye.", {
		STR: 2,
		AG: 1,
		IN: -1
	}, [
		f("unarmed", "Unarmed is a meaner Strength-Agility scale.", {
			intercept: 8,
			coeff: .5,
			attrs: ["AG", "STR"]
		}, {
			intercept: 40,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("meleeWeapons", "Melee is the other half of gym class.", {
			intercept: 6,
			coeff: .5,
			attrs: ["AG", "STR"]
		}, {
			intercept: 30,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("speech", "Speech is a grunt with syllables.", {
			intercept: 0,
			coeff: .6,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH"]
		})
	], { derived: {
		hp: 4,
		melee: 1
	} }),
	path("radioKid", "Radio shack", "+2 CH, +1 PE · +2 Sequence · speech/pilot rewritten", "Call signs, static, and a voice that had to sound bigger than the room. You learned to make strangers trust a stranger.", "Radio shack. That voice could sell water in the rain.", {
		CH: 2,
		PE: 1
	}, [f("speech", "Speech is a broadcast Charisma scale.", {
		intercept: 2,
		coeff: 1.1,
		attrs: ["CH"]
	}, {
		intercept: 10,
		coeff: 6,
		attrs: ["CH"]
	}), f("pilot", "Pilot is listening to the road.", {
		intercept: 0,
		coeff: .5,
		attrs: ["AG", "PE"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["AG", "PE"]
	})], { derived: { sequence: 2 } }),
	path("ranchHand", "Ranch hours", "+2 EN, +1 STR · +25 carry · outdoorsman/repair", "Before dawn, after dark, animals that did not care about your feelings. You learned fence wire, weather, and how much a body can lift before it files paperwork.", "Ranch hours. Carry the fence, then the day.", {
		EN: 2,
		STR: 1
	}, [
		f("outdoorsman", "Outdoorsman is Endurance plus Strength.", {
			intercept: 0,
			coeff: .5,
			attrs: ["EN", "STR"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["EN", "STR"]
		}),
		f("repair", "Repair is whatever broke before lunch.", {
			intercept: 0,
			coeff: .7,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["IN"]
		}),
		f("science", "Science was a catalog that never came.", {
			intercept: 0,
			coeff: .5,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["IN"]
		})
	], { derived: { carry: 25 } }),
	path("locksmith", "Lock and key", "+2 AG, +1 PE · lockpick/steal/traps rewritten", "Pins, rakes, the sound of a tumbler deciding to like you. You were taught that every locked thing is a conversation, not a wall.", "Lock and key. Doors are a hobby.", {
		AG: 2,
		PE: 1
	}, [
		f("lockpick", "Lockpick is Perception plus Agility, properly.", {
			intercept: 4,
			coeff: .4,
			attrs: ["PE", "AG"]
		}, {
			intercept: 20,
			coeff: 2,
			attrs: ["PE", "AG"]
		}),
		f("steal", "Steal is a harder Agility scale.", {
			intercept: 0,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("traps", "Traps are what locks become when they get ideas.", {
			intercept: 4,
			coeff: .3,
			attrs: ["PE", "AG"]
		}, {
			intercept: 20,
			coeff: 2,
			attrs: ["PE", "AG"]
		})
	]),
	path("powderBoy", "Powder monkey", "+2 AG, +1 EN, −1 CH · big guns/throwing · sneak down", "You carried the loud stuff before you were allowed to fire it. Respect for blast radius is a personality. Indoor voices never stuck.", "Powder monkey. Subtlety died in training.", {
		AG: 2,
		EN: 1,
		CH: -1
	}, [
		f("bigGuns", "Big Guns is a real Agility scale.", {
			intercept: 1,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("throwing", "Throwing is how you delivered the punchline.", {
			intercept: 1,
			coeff: 1,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 5,
			attrs: ["AG"]
		}),
		f("sneak", "Sneak and explosives did not share a classroom.", {
			intercept: 0,
			coeff: .4,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["AG"]
		})
	]),
	path("navigator", "Star and map", "+2 PE, +1 IN · +2 Sequence · outdoorsman/pilot", "Someone made you name stars, roads, and the difference between a shortcut and a grave. You still look at the horizon like it owes you an answer.", "Star and map. You see the exit before the room.", {
		PE: 2,
		IN: 1
	}, [f("outdoorsman", "Outdoorsman is Perception plus Intelligence.", {
		intercept: 0,
		coeff: .5,
		attrs: ["PE", "IN"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["PE", "IN"]
	}), f("pilot", "Pilot is a navigator's Agility-Perception scale.", {
		intercept: 0,
		coeff: .5,
		attrs: ["AG", "PE"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["AG", "PE"]
	})], { derived: { sequence: 2 } }),
	path("junkyard", "Junkyard lecture", "+2 IN, +1 STR · +15 carry · repair/science", "The teacher was a pile. You learned what still had a serial number and what was a coffin with extra steps. Lifting and thinking were the same class.", "Junkyard lecture. Theory with tetanus.", {
		IN: 2,
		STR: 1
	}, [f("repair", "Repair is Intelligence plus a little Strength.", {
		intercept: 0,
		coeff: .7,
		attrs: ["IN"]
	}, {
		intercept: 0,
		coeff: 4,
		attrs: ["IN"]
	}), f("science", "Science is identifying the pile.", {
		intercept: 0,
		coeff: .9,
		attrs: ["IN"]
	}, {
		intercept: 0,
		coeff: 5,
		attrs: ["IN"]
	})], { derived: { carry: 15 } }),
	path("officerYard", "Officer yard", "+2 CH, +1 PE · +1 SP/level · speech/guns · sneak down", "Formation, voice, the habit of pointing and being obeyed. You were taught that a plan is a kind of weapon. Quiet was for other people.", "Officer yard. Volume is a tactic.", {
		CH: 2,
		PE: 1
	}, [
		f("speech", "Speech is command Charisma.", {
			intercept: 2,
			coeff: 1.1,
			attrs: ["CH"]
		}, {
			intercept: 10,
			coeff: 6,
			attrs: ["CH"]
		}),
		f("smallGuns", "Small Guns is an officer's sidearm scale.", {
			intercept: 1,
			coeff: .9,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("sneak", "Sneak was never on the parade ground.", {
			intercept: 0,
			coeff: .4,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["AG"]
		})
	], { derived: { skillPoints: 1 } }),
	path("circus", "Circus tuition", "+2 AG, +1 LK · +1 AC · throwing/sneak/steal", "Tents, nets that sometimes worked, a crowd that wanted blood or wonder. You learned to make a body do a joke and a theft in the same motion.", "Circus tuition. Gravity was the teacher.", {
		AG: 2,
		LK: 1
	}, [
		f("throwing", "Throwing is a full Agility scale.", {
			intercept: 1,
			coeff: 1,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 5,
			attrs: ["AG"]
		}),
		f("sneak", "Sneak is how you left the tent.", {
			intercept: 1,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("steal", "Steal is part of the act.", {
			intercept: 0,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["AG"]
		})
	], { derived: { ac: 1 } }),
	path("graveShift", "Grave shift", "+2 EN, +1 PE, −1 CH · +3 HP · +1 heal · outdoorsman/doctor", "Night work, quiet work, the kind of labor that makes you stop flinching at dead things. You learned dirt, lime, and how a body comes apart.", "Grave shift. Excellent bedside manner for the already gone.", {
		EN: 2,
		PE: 1,
		CH: -1
	}, [f("outdoorsman", "Outdoorsman is night-and-dirt Endurance.", {
		intercept: 0,
		coeff: .5,
		attrs: ["EN", "PE"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["EN", "PE"]
	}), f("doctor", "Doctor is anatomy without the bedside smile.", {
		intercept: 2,
		coeff: .35,
		attrs: ["PE", "IN"]
	}, {
		intercept: 10,
		coeff: 2,
		attrs: ["PE", "IN"]
	})], { derived: {
		hp: 3,
		healingRate: 1
	} }),
	path("bookkeeper", "Ledgers", "+2 IN, +1 LK · barter/science/gambling · melee down", "Columns, shortages, whose name was on which lie. You were taught that a number can kill slower than a knife and more reliably.", "Ledgers. Violence is a rounding error.", {
		IN: 2,
		LK: 1
	}, [
		f("barter", "Barter is Intelligence plus Charisma.", {
			intercept: 0,
			coeff: .5,
			attrs: ["IN", "CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["IN", "CH"]
		}),
		f("science", "Science is the honest column.", {
			intercept: 0,
			coeff: .9,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 5,
			attrs: ["IN"]
		}),
		f("gambling", "Gambling is Luck with a spreadsheet.", {
			intercept: 0,
			coeff: .8,
			attrs: ["LK"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["LK"]
		}),
		f("meleeWeapons", "Melee was for people who could not add.", {
			intercept: 2,
			coeff: .3,
			attrs: ["AG", "STR"]
		}, {
			intercept: 10,
			coeff: 1,
			attrs: ["AG", "STR"]
		})
	]),
	path("foundry", "Foundry floor", "+2 STR, +1 EN · +5 HP · +25 carry · −1 AP · sneak down", "Heat, iron, a shift bell that owned your years. You learned to move heavy things and ignore the part of you that wanted to sit down.", "Foundry floor. Built like a load-bearing wall.", {
		STR: 2,
		EN: 1
	}, [
		f("meleeWeapons", "Melee is a foundry Strength-Agility scale.", {
			intercept: 6,
			coeff: .5,
			attrs: ["AG", "STR"]
		}, {
			intercept: 30,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("repair", "Repair is what you did when the line jammed.", {
			intercept: 0,
			coeff: .7,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["IN"]
		}),
		f("sneak", "Sneak and a foundry boot did not date.", {
			intercept: 0,
			coeff: .4,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["AG"]
		})
	], { derived: {
		hp: 5,
		carry: 25,
		ap: -1
	} }),
	path("convent", "Ward and hymn", "+2 CH, +1 EN · +1 heal/day · first aid/speech · melee down", "Quiet rooms, boiled linen, a rulebook that tried to make you kind on a schedule. You learned to keep people alive and to sound like you meant the blessing.", "Ward and hymn. Soft hands, iron hours.", {
		CH: 2,
		EN: 1
	}, [
		f("firstAid", "First Aid is Perception plus Charisma.", {
			intercept: 0,
			coeff: .5,
			attrs: ["PE", "CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["PE", "CH"]
		}),
		f("speech", "Speech is a practiced kindness.", {
			intercept: 2,
			coeff: 1,
			attrs: ["CH"]
		}, {
			intercept: 10,
			coeff: 5,
			attrs: ["CH"]
		}),
		f("meleeWeapons", "Melee was discouraged. Officially.", {
			intercept: 2,
			coeff: .3,
			attrs: ["AG", "STR"]
		}, {
			intercept: 10,
			coeff: 1,
			attrs: ["AG", "STR"]
		})
	], {
		derived: { healingRate: 1 },
		skillBonus: { doctor: 1 }
	}),
	path("gamblerHall", "Gambler's hall", "+2 LK, +1 CH · gambling/steal/speech · science down", "Tells, odds, the exact temperature of a room that wants your money. You were taught that luck is a skill until it isn't.", "Gambler's hall. The dice have a crush on you.", {
		LK: 2,
		CH: 1
	}, [
		f("gambling", "Gambling is a full Luck scale with extra.", {
			intercept: 2,
			coeff: 1.2,
			attrs: ["LK"]
		}, {
			intercept: 10,
			coeff: 6,
			attrs: ["LK"]
		}),
		f("steal", "Steal is the other way the pot moves.", {
			intercept: 0,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("speech", "Speech is the table's weather.", {
			intercept: 0,
			coeff: 1.1,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 6,
			attrs: ["CH"]
		}),
		f("science", "Science was for people who wanted certainty.", {
			intercept: 0,
			coeff: .5,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["IN"]
		})
	])
];
var LIVES = [
	path("none", "Unwritten years", "No life that stuck", "You got here. The years between then and now did not pick a shape. That is its own kind of luck.", "Unwritten years. Mysterious. Suspicious. Hot.", {}),
	path("vaultborn", "Vault born", "+1 IN, +1 CH, +1 LK · speech up, outdoorsman down", "Recycled air, numbered jumpsuits, a door that was supposed to stay shut. Hunger was a story adults used on you. Then the story ended.", "Vault born. Soft childhood, hard sequel.", {
		IN: 1,
		CH: 1,
		LK: 1
	}, [f("speech", "Speech is a Vault-trained Charisma scale.", {
		intercept: 1,
		coeff: 1.1,
		attrs: ["CH"]
	}, {
		intercept: 5,
		coeff: 6,
		attrs: ["CH"]
	}), f("outdoorsman", "Outdoorsman still thinks the sky is a ceiling.", {
		intercept: 0,
		coeff: .2,
		attrs: ["EN", "IN"]
	}, {
		intercept: 0,
		coeff: 1,
		attrs: ["EN", "IN"]
	})]),
	path("dust", "Wasteland child", "+2 EN, +1 AG · +1 HP/level · outdoorsman/sneak", "Dirt under the nails before language. You learned water holes the way other kids learn birthdays, and quiet the way they learn prayers.", "Wasteland child. The dirt raised you right.", {
		EN: 2,
		AG: 1
	}, [f("outdoorsman", "Outdoorsman is Endurance plus Agility.", {
		intercept: 0,
		coeff: .6,
		attrs: ["EN", "AG"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["EN", "AG"]
	}), f("sneak", "Sneak is a harder Agility scale.", {
		intercept: 1,
		coeff: .8,
		attrs: ["AG"]
	}, {
		intercept: 5,
		coeff: 4,
		attrs: ["AG"]
	})], { derived: { hpPerLevel: 1 } }),
	path("caravan", "Caravan miles", "+1 EN, +1 CH, +1 LK · barter/pilot rewritten", "Dust, brahmin, and a ledger that mattered more than the gun. You slept with one eye on the pack animals and one on the people counting your caps.", "Caravan miles. The road is the resume.", {
		EN: 1,
		CH: 1,
		LK: 1
	}, [
		f("barter", "Barter is Charisma plus Luck.", {
			intercept: 0,
			coeff: .5,
			attrs: ["CH", "LK"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH", "LK"]
		}),
		f("pilot", "Pilot is a caravaner's Agility-Perception scale.", {
			intercept: 0,
			coeff: .5,
			attrs: ["AG", "PE"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["AG", "PE"]
		}),
		f("outdoorsman", "Outdoorsman keeps the road in Endurance and Charisma.", {
			intercept: 0,
			coeff: .5,
			attrs: ["EN", "CH"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["EN", "CH"]
		})
	]),
	path("raider", "Raider years", "+2 STR, +1 AG, −1 CH · +2 melee · unarmed/guns up", "You took because taking worked. The camp had a hierarchy written in scars. Leaving it did not unwrite your hands.", "Raider years. Charm optional. Hands not.", {
		STR: 2,
		AG: 1,
		CH: -1
	}, [
		f("unarmed", "Unarmed is a meaner Strength-Agility scale.", {
			intercept: 8,
			coeff: .5,
			attrs: ["AG", "STR"]
		}, {
			intercept: 40,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("smallGuns", "Small Guns is a raider Agility scale.", {
			intercept: 1,
			coeff: .9,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 5,
			attrs: ["AG"]
		}),
		f("speech", "Speech is a threat, not a conversation.", {
			intercept: 0,
			coeff: .6,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH"]
		})
	], { derived: { melee: 2 } }),
	path("collar", "Collar and brand", "+1 EN, +1 AG, +1 PE, −1 CH · sneak/steal/unarmed", "Someone owned your hours. You learned locks from the wrong side, quiet from the beating, and the exact weight of a collar. The brand stayed after the leather came off.", "Collar and brand. Freedom is a second language.", {
		EN: 1,
		AG: 1,
		PE: 1,
		CH: -1
	}, [
		f("sneak", "Sneak is how you lived.", {
			intercept: 1,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("steal", "Steal is a harder Agility scale.", {
			intercept: 0,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("unarmed", "Unarmed is what you had when they took the rest.", {
			intercept: 8,
			coeff: .45,
			attrs: ["AG", "STR"]
		}, {
			intercept: 35,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("speech", "Speech still tastes like asking permission.", {
			intercept: 0,
			coeff: .6,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH"]
		})
	]),
	path("hired", "Hired gun", "+1 AG, +1 PE, +1 LK · guns rewritten", "You were paid to stand in front of other people's problems and make them stop moving. Contracts ended. The way you look at a doorway did not.", "Hired gun. Professional. Expensive. Available.", {
		AG: 1,
		PE: 1,
		LK: 1
	}, [
		f("smallGuns", "Small Guns is a professional Agility scale.", {
			intercept: 1,
			coeff: 1,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 5,
			attrs: ["AG"]
		}),
		f("energyWeapons", "Energy Weapons finally scales.", {
			intercept: 0,
			coeff: .6,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["AG"]
		}),
		f("barter", "Barter is haggling a rate, not a friendship.", {
			intercept: 0,
			coeff: .6,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH"]
		})
	]),
	path("bunker", "Bunker kin", "+1 IN, +1 EN, +1 PE · energy/repair rewritten", "Steel doors, shift bells, a chain of command that called itself family. You ate from tins and argued doctrine. The wasteland is loud in comparison.", "Bunker kin. Doctrine and canned peaches.", {
		IN: 1,
		EN: 1,
		PE: 1
	}, [
		f("energyWeapons", "Energy Weapons mix Agility with Intelligence.", {
			intercept: 0,
			coeff: .35,
			attrs: ["AG", "IN"]
		}, {
			intercept: 0,
			coeff: 1,
			attrs: ["AG", "IN"]
		}),
		f("repair", "Repair is bunker maintenance.", {
			intercept: 0,
			coeff: .8,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["IN"]
		}),
		f("speech", "Speech is orders, not charm.", {
			intercept: 0,
			coeff: .7,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["CH"]
		})
	]),
	path("ghoulAlley", "Ghoul alley", "+2 EN, −1 CH · +4 HP · +4 rad · speech down", "You lived among the ones who glowed and did not leave. Courtesy was different. Hunger was honest. Mirrors were optional.", "Ghoul alley. Friendly with the half-dead.", {
		EN: 2,
		CH: -1
	}, [f("outdoorsman", "Outdoorsman is Endurance in the glow.", {
		intercept: 0,
		coeff: .6,
		attrs: ["EN", "IN"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["EN", "IN"]
	}), f("speech", "Speech is an acquired taste. So are you.", {
		intercept: 0,
		coeff: .6,
		attrs: ["CH"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["CH"]
	})], { derived: {
		hp: 4,
		radiation: 4
	} }),
	path("waterBearer", "Water bearer", "+2 EN, +1 CH · +40 carry · +1 heal · outdoorsman", "You hauled the thing everybody kills for. Miles with a yoke, a reputation, and a line of people who would smile until the cans ran dry.", "Water bearer. The most expensive backpack in the wastes.", {
		EN: 2,
		CH: 1
	}, [f("outdoorsman", "Outdoorsman is Endurance plus Charisma — routes and rationing.", {
		intercept: 0,
		coeff: .5,
		attrs: ["EN", "CH"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["EN", "CH"]
	}), f("barter", "Barter is selling thirst.", {
		intercept: 0,
		coeff: .9,
		attrs: ["CH"]
	}, {
		intercept: 0,
		coeff: 5,
		attrs: ["CH"]
	})], { derived: {
		carry: 40,
		healingRate: 1
	} }),
	path("courier", "Courier miles", "+2 AG, +1 LK · +1 AP · +2 Sequence · sneak/pilot", "Packages, deadlines, and the understanding that the map is a rumor. You learned every shortcut that still had a floor.", "Courier miles. Doors open. You don't stay.", {
		AG: 2,
		LK: 1
	}, [f("sneak", "Sneak is how the package arrives.", {
		intercept: 1,
		coeff: .8,
		attrs: ["AG"]
	}, {
		intercept: 5,
		coeff: 4,
		attrs: ["AG"]
	}), f("pilot", "Pilot is a courier's living.", {
		intercept: 0,
		coeff: .5,
		attrs: ["AG", "PE"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["AG", "PE"]
	})], { derived: {
		ap: 1,
		sequence: 2
	} }),
	path("pitChamp", "Pit champion", "+2 STR, +1 EN, −1 IN · +6 HP · +2 melee · unarmed", "They put a name on a board and people bet on whether you would stand up. You did. Enough times that the board kept the name.", "Pit champion. The crowd still lives in your shoulders.", {
		STR: 2,
		EN: 1,
		IN: -1
	}, [
		f("unarmed", "Unarmed is championship Strength-Agility.", {
			intercept: 10,
			coeff: .5,
			attrs: ["AG", "STR"]
		}, {
			intercept: 50,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("meleeWeapons", "Melee is whatever they handed you.", {
			intercept: 6,
			coeff: .5,
			attrs: ["AG", "STR"]
		}, {
			intercept: 30,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("speech", "Speech is a corner-man's grunt.", {
			intercept: 0,
			coeff: .6,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH"]
		})
	], { derived: {
		hp: 6,
		melee: 2
	} }),
	path("chemRunner", "Chem runner", "+2 AG, +1 LK, −1 EN · +1 AP · −1 heal · sneak/steal", "You moved product through towns that pretended not to see. Fast hands, faster exits, a body that still remembers the samples.", "Chem runner. Fast, lucky, slightly on fire.", {
		AG: 2,
		LK: 1,
		EN: -1
	}, [f("sneak", "Sneak is the job.", {
		intercept: 1,
		coeff: .85,
		attrs: ["AG"]
	}, {
		intercept: 5,
		coeff: 4,
		attrs: ["AG"]
	}), f("steal", "Steal is inventory shrinkage, professionally.", {
		intercept: 0,
		coeff: .85,
		attrs: ["AG"]
	}, {
		intercept: 0,
		coeff: 4,
		attrs: ["AG"]
	})], { derived: {
		ap: 1,
		healingRate: -1
	} }),
	path("scrapCourt", "Scrap court", "+2 IN, +1 CH · +20 carry · barter/repair", "You sat on a pile and named prices until the pile became a town. People brought broken things and worse stories. You kept the better half.", "Scrap court. King of the heap, politely.", {
		IN: 2,
		CH: 1
	}, [f("barter", "Barter is Intelligence plus Charisma.", {
		intercept: 0,
		coeff: .5,
		attrs: ["IN", "CH"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["IN", "CH"]
	}), f("repair", "Repair is why they keep coming back.", {
		intercept: 0,
		coeff: .8,
		attrs: ["IN"]
	}, {
		intercept: 0,
		coeff: 4,
		attrs: ["IN"]
	})], { derived: { carry: 20 } }),
	path("farmHold", "Farm hold", "+2 EN, +1 STR · +5 HP · +50 carry · science down", "A fence, a crop, a shotgun that was mostly for coyotes and then wasn't. You learned seasons, soil, and how much a person can carry when the harvest will not wait.", "Farm hold. Strong back, suspicious of cities.", {
		EN: 2,
		STR: 1
	}, [
		f("outdoorsman", "Outdoorsman is Endurance plus Strength.", {
			intercept: 0,
			coeff: .55,
			attrs: ["EN", "STR"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["EN", "STR"]
		}),
		f("repair", "Repair is fence and pump.", {
			intercept: 0,
			coeff: .7,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["IN"]
		}),
		f("science", "Science was a pamphlet about fertilizer.", {
			intercept: 0,
			coeff: .5,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["IN"]
		})
	], { derived: {
		hp: 5,
		carry: 50
	} }),
	path("cityRat", "City rat", "+2 AG, +1 CH · steal/sneak/speech · outdoorsman down", "Alleys, neon that still worked, a skyline of rust. You learned which doors had people behind them and which had only a smell.", "City rat. Concrete mother, alley father.", {
		AG: 2,
		CH: 1
	}, [
		f("steal", "Steal is city Agility.", {
			intercept: 0,
			coeff: .85,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("sneak", "Sneak is traffic and shadows.", {
			intercept: 1,
			coeff: .8,
			attrs: ["AG"]
		}, {
			intercept: 5,
			coeff: 4,
			attrs: ["AG"]
		}),
		f("speech", "Speech is hustle Charisma.", {
			intercept: 1,
			coeff: 1.1,
			attrs: ["CH"]
		}, {
			intercept: 5,
			coeff: 6,
			attrs: ["CH"]
		}),
		f("outdoorsman", "Outdoorsman thinks dirt is a rumor.", {
			intercept: 0,
			coeff: .25,
			attrs: ["EN", "IN"]
		}, {
			intercept: 0,
			coeff: 1,
			attrs: ["EN", "IN"]
		})
	], { skillBonus: { lockpick: 1 } }),
	path("riverboat", "Riverboat years", "+2 LK, +1 AG · gambling/pilot/speech", "A deck, a deal, a town that changed every week. You learned cards, currents, and how to leave before the argument finished.", "Riverboat years. Lucky and hard to pin down.", {
		LK: 2,
		AG: 1
	}, [
		f("gambling", "Gambling is a riverboat Luck scale.", {
			intercept: 2,
			coeff: 1.1,
			attrs: ["LK"]
		}, {
			intercept: 10,
			coeff: 6,
			attrs: ["LK"]
		}),
		f("pilot", "Pilot is the current plus the tiller.", {
			intercept: 0,
			coeff: .5,
			attrs: ["AG", "PE"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["AG", "PE"]
		}),
		f("speech", "Speech is the table and the dock.", {
			intercept: 1,
			coeff: 1,
			attrs: ["CH"]
		}, {
			intercept: 5,
			coeff: 5,
			attrs: ["CH"]
		})
	]),
	path("loneCabin", "Lone cabin", "+2 PE, +1 EN · +2 Sequence · outdoorsman/traps · speech down", "Years with a stove, a snare line, and nobody to argue with. You learned to hear a branch as a sentence. Conversation atrophied.", "Lone cabin. Great listener. Terrible small talk.", {
		PE: 2,
		EN: 1
	}, [
		f("outdoorsman", "Outdoorsman is Perception plus Endurance.", {
			intercept: 0,
			coeff: .55,
			attrs: ["PE", "EN"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["PE", "EN"]
		}),
		f("traps", "Traps are how you ate.", {
			intercept: 4,
			coeff: .35,
			attrs: ["PE", "AG"]
		}, {
			intercept: 20,
			coeff: 2,
			attrs: ["PE", "AG"]
		}),
		f("speech", "Speech rusted shut.", {
			intercept: 0,
			coeff: .6,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["CH"]
		})
	], { derived: { sequence: 2 } }),
	path("preacherCircuit", "Circuit rider", "+2 CH, +1 EN · speech/first aid/barter", "A route of towns, a sermon that changed with the audience, a bag of medicine you called a blessing when that helped. You slept in lofts and left before the questions got specific.", "Circuit rider. Faith as a travel plan.", {
		CH: 2,
		EN: 1
	}, [
		f("speech", "Speech is the whole job.", {
			intercept: 2,
			coeff: 1.15,
			attrs: ["CH"]
		}, {
			intercept: 10,
			coeff: 6,
			attrs: ["CH"]
		}),
		f("firstAid", "First Aid is the other sacrament.", {
			intercept: 0,
			coeff: .5,
			attrs: ["PE", "CH"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["PE", "CH"]
		}),
		f("barter", "Barter is passing the plate.", {
			intercept: 0,
			coeff: .9,
			attrs: ["CH"]
		}, {
			intercept: 0,
			coeff: 5,
			attrs: ["CH"]
		})
	]),
	path("overseerShift", "Overseer shift", "+2 IN, +1 CH, −1 AG · −1 AP · +1 SP/level · speech/science", "You ran a room, a shift, a vault-shaped argument. People waited for your nod. Your body got used to sitting while your mouth worked.", "Overseer shift. Brain first, knees later.", {
		IN: 2,
		CH: 1,
		AG: -1
	}, [f("speech", "Speech is policy with a pulse.", {
		intercept: 2,
		coeff: 1,
		attrs: ["CH"]
	}, {
		intercept: 10,
		coeff: 5,
		attrs: ["CH"]
	}), f("science", "Science is the report you actually read.", {
		intercept: 0,
		coeff: 1,
		attrs: ["IN"]
	}, {
		intercept: 0,
		coeff: 5,
		attrs: ["IN"]
	})], { derived: {
		ap: -1,
		skillPoints: 1
	} }),
	path("glowWalker", "Glow walker", "+2 EN, +1 PE, −1 CH · +6 rad · +2 poison · −2 HP", "You walked the green on purpose — salvage, pilgrimage, or a dare that became a habit. The Geiger still likes you. Doors still hesitate.", "Glow walker. Hot in the wrong way. I still would.", {
		EN: 2,
		PE: 1,
		CH: -1
	}, [f("outdoorsman", "Outdoorsman is Endurance in the green.", {
		intercept: 0,
		coeff: .6,
		attrs: ["EN", "PE"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["EN", "PE"]
	})], { derived: {
		radiation: 6,
		poison: 2,
		hp: -2
	} }),
	path("knightErrant", "Knight errant", "+2 STR, +1 CH · +1 AC · melee/speech · sneak down", "A code you mostly kept, a weapon you always kept, towns that wanted a story more than a person. You learned to arrive like an answer.", "Knight errant. Armor optional. Entrance required.", {
		STR: 2,
		CH: 1
	}, [
		f("meleeWeapons", "Melee is the vocation.", {
			intercept: 6,
			coeff: .5,
			attrs: ["AG", "STR"]
		}, {
			intercept: 30,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("speech", "Speech is the oath, out loud.", {
			intercept: 1,
			coeff: 1.1,
			attrs: ["CH"]
		}, {
			intercept: 5,
			coeff: 6,
			attrs: ["CH"]
		}),
		f("sneak", "Sneak would ruin the entrance.", {
			intercept: 0,
			coeff: .4,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["AG"]
		})
	], { derived: { ac: 1 } }),
	path("wastelandDoc", "Wasteland doctor", "+2 IN, +1 PE · +1 heal/day · doctor/first aid · guns down", "You were the person a town kept alive because you kept the town alive. Tools in a rolled cloth. A reputation that walked ahead of you.", "Wasteland doctor. Don't tag Small Guns. Tag the suture.", {
		IN: 2,
		PE: 1
	}, [
		f("doctor", "Doctor is a practiced medical scale.", {
			intercept: 3,
			coeff: .45,
			attrs: ["PE", "IN"]
		}, {
			intercept: 15,
			coeff: 2,
			attrs: ["PE", "IN"]
		}),
		f("firstAid", "First Aid is Perception plus Intelligence.", {
			intercept: 1,
			coeff: .5,
			attrs: ["PE", "IN"]
		}, {
			intercept: 5,
			coeff: 3,
			attrs: ["PE", "IN"]
		}),
		f("smallGuns", "Small Guns was for the people you patched.", {
			intercept: 0,
			coeff: .6,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["AG"]
		})
	], { derived: { healingRate: 1 } }),
	path("cageFighter", "Cage years", "+2 AG, +1 STR · +1 AC · +4 HP · unarmed · doctor down", "Wire, a referee who lied, a body that learned angles. You got paid if you stood up and famous if you didn't stay down.", "Cage years. Pretty bruises. Ugly math.", {
		AG: 2,
		STR: 1
	}, [f("unarmed", "Unarmed is cage Agility-Strength.", {
		intercept: 8,
		coeff: .5,
		attrs: ["AG", "STR"]
	}, {
		intercept: 40,
		coeff: 2,
		attrs: ["AG", "STR"]
	}), f("doctor", "Doctor was a bucket in the corner.", {
		intercept: 0,
		coeff: .15,
		attrs: ["PE", "IN"]
	}, {
		intercept: 0,
		coeff: 1,
		attrs: ["PE", "IN"]
	})], { derived: {
		ac: 1,
		hp: 4
	} })
];
var SCARS = [
	path("glassEye", "Glass eye", "−2 PE, −2 Sequence, guns wobble · +2 Sneak, traps use IN", "The left one is glass, or a scar, or a rumor. Depth is a guess. You hear rooms better than you see them. You still raise the rifle. You just do it like a person who already paid.", "Glass eye. Aim's a rumor. Hearing is not.", { PE: -2 }, [
		f("smallGuns", "Small Guns loses the clean Agility scale.", {
			intercept: 0,
			coeff: .6,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["AG"]
		}),
		f("energyWeapons", "Energy Weapons is a weaker Agility scale.", {
			intercept: 0,
			coeff: .3,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 1,
			attrs: ["AG"]
		}),
		f("throwing", "Throwing misses the range picture.", {
			intercept: 0,
			coeff: .6,
			attrs: ["AG"]
		}, {
			intercept: 0,
			coeff: 3,
			attrs: ["AG"]
		}),
		f("traps", "Traps become a thinking job — Perception plus Intelligence.", {
			intercept: 2,
			coeff: .35,
			attrs: ["PE", "IN"]
		}, {
			intercept: 10,
			coeff: 2,
			attrs: ["PE", "IN"]
		})
	], {
		derived: { sequence: -2 },
		skillBonus: { sneak: 2 }
	}),
	path("limp", "Dead man's limp", "−2 AG, −1 AP, sneak hitch · +1 EN, +15 carry, outdoorsman +2", "A hip that never sat true. Rain writes it down. You walk like someone who already survived the sprint. People hear you coming. They also cannot knock you down as cheaply.", "Dead man's limp. Slow. Heavy. Still here.", {
		AG: -2,
		EN: 1
	}, [f("sneak", "Sneak is a broken Agility scale.", {
		intercept: 0,
		coeff: .4,
		attrs: ["AG"]
	}, {
		intercept: 0,
		coeff: 2,
		attrs: ["AG"]
	}), f("pilot", "Pilot fights the hitch in the hip.", {
		intercept: 0,
		coeff: .3,
		attrs: ["AG", "PE"]
	}, {
		intercept: 0,
		coeff: 1,
		attrs: ["AG", "PE"]
	})], {
		derived: {
			ap: -1,
			carry: 15
		},
		skillBonus: { outdoorsman: 2 }
	}),
	path("burnedHands", "Burned hands", "−1 AG, −1 CH · repair/unarmed/doctor down · +1 EN, +2 poison, +2 science", "Fire, chem, or a live conduit. The palms are a map. Fine work is an argument. People look at the handshake and already know a story. You learned heat the way a scholar learns a language.", "Burned hands. Ugly handshake. Excellent cautionary tale.", {
		AG: -1,
		CH: -1,
		EN: 1
	}, [
		f("repair", "Repair is clumsy Intelligence.", {
			intercept: 0,
			coeff: .4,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["IN"]
		}),
		f("unarmed", "Unarmed hits without the old hands.", {
			intercept: 4,
			coeff: .3,
			attrs: ["AG", "STR"]
		}, {
			intercept: 20,
			coeff: 2,
			attrs: ["AG", "STR"]
		}),
		f("doctor", "Doctor cannot trust the fingers.", {
			intercept: 0,
			coeff: .15,
			attrs: ["PE", "IN"]
		}, {
			intercept: 0,
			coeff: 1,
			attrs: ["PE", "IN"]
		})
	], {
		derived: {
			poison: 2,
			radiation: 2
		},
		skillBonus: { science: 2 }
	}),
	path("chemGhost", "Chem ghost", "−1 EN, −1 IN, −1 heal · medicine down · +1 LK, +1 AP, steal/gambling +2", "The need never left. Quiet rooms make the hands tell on you. You can still work. You just work around a hole that used to be a person — and you know every shortcut a desperate body takes.", "Chem ghost. Shaky. Lucky. Knows the back door.", {
		EN: -1,
		IN: -1,
		LK: 1
	}, [f("doctor", "Doctor is a shaky Intelligence scale.", {
		intercept: 0,
		coeff: .15,
		attrs: ["PE", "IN"]
	}, {
		intercept: 0,
		coeff: 1,
		attrs: ["PE", "IN"]
	}), f("firstAid", "First Aid loses the clean body-knowledge.", {
		intercept: 0,
		coeff: .3,
		attrs: ["PE", "EN"]
	}, {
		intercept: 0,
		coeff: 1,
		attrs: ["PE", "EN"]
	})], {
		derived: {
			healingRate: -1,
			ap: 1
		},
		skillBonus: {
			steal: 2,
			gambling: 2
		}
	}),
	path("shrapnelSmile", "Shrapnel smile", "−2 CH, barter down · speech uses STR · +1 melee, unarmed +2", "The jaw wired wrong. Teeth that are not a set. People stare, then decide what you are. Talking is cheaper than it used to be — unless you make it a threat.", "Shrapnel smile. Ugly grin. Honest left hook.", { CH: -2 }, [f("speech", "Speech is Strength plus Charisma — the threat version.", {
		intercept: 0,
		coeff: .5,
		attrs: ["STR", "CH"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["STR", "CH"]
	}), f("barter", "Barter loses the friendly face.", {
		intercept: 0,
		coeff: .5,
		attrs: ["CH"]
	}, {
		intercept: 0,
		coeff: 2,
		attrs: ["CH"]
	})], {
		derived: { melee: 1 },
		skillBonus: { unarmed: 2 }
	}),
	path("radKiss", "Rad kiss", "−1 CH, −4 HP · +6 rad, +2 poison, outdoorsman +2", "You slept in the green and woke up different. The Geiger still likes you. Mirrors are optional. Some doors close. The ones that stay open are the ones that matter, and the glow does not kill you as fast as it should.", "Rad kiss. Hot. Literally. Doors hesitate. I don't.", { CH: -1 }, [f("speech", "Speech is the glow talking.", {
		intercept: 0,
		coeff: .7,
		attrs: ["CH"]
	}, {
		intercept: 0,
		coeff: 4,
		attrs: ["CH"]
	})], {
		derived: {
			hp: -4,
			radiation: 6,
			poison: 2
		},
		skillBonus: { outdoorsman: 2 }
	}),
	path("crushedChest", "Crushed chest", "−2 EN, −6 HP, −25 carry · +1 IN, +1 Sequence, +1 AC", "A cave-in, a hug from something too big, a steering column. Breath is a ration. You count stairs like ammunition. You also stopped charging into rooms first.", "Crushed chest. Soft ribs. Hard lessons.", {
		EN: -2,
		IN: 1
	}, [f("outdoorsman", "Outdoorsman pays for every mile in the ribs.", {
		intercept: 0,
		coeff: .3,
		attrs: ["EN", "IN"]
	}, {
		intercept: 0,
		coeff: 1,
		attrs: ["EN", "IN"]
	})], { derived: {
		hp: -6,
		carry: -25,
		sequence: 1,
		ac: 1
	} }),
	path("buriedWrong", "Buried the wrong one", "−1 LK, gambling down · +1 PE, +2 Sequence, sneak +2", "You lived. They didn't. Sleep is a negotiation. You still make plans. You just leave a chair empty in every one of them — and you notice the door before anyone else does.", "Buried the wrong one. Unlucky. Awake. Watching.", {
		LK: -1,
		PE: 1
	}, [f("gambling", "Gambling does not trust Luck anymore.", {
		intercept: 0,
		coeff: .6,
		attrs: ["LK"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["LK"]
	})], {
		derived: { sequence: 2 },
		skillBonus: { sneak: 2 }
	}),
	path("missingFingers", "Missing fingers", "−1 AG · lockpick/repair down · +1 STR, +1 melee, unarmed rewritten", "A blade, a press, a door that closed. The grip changed. Fine pins are a joke. A fist, a stock, a pipe — those still listen.", "Missing fingers. Bad at buttons. Good at ending arguments.", {
		AG: -1,
		STR: 1
	}, [
		f("lockpick", "Lockpick hates the gaps.", {
			intercept: 0,
			coeff: .15,
			attrs: ["PE", "AG"]
		}, {
			intercept: 0,
			coeff: 1,
			attrs: ["PE", "AG"]
		}),
		f("repair", "Repair is thicker than it used to be.", {
			intercept: 0,
			coeff: .4,
			attrs: ["IN"]
		}, {
			intercept: 0,
			coeff: 2,
			attrs: ["IN"]
		}),
		f("unarmed", "Unarmed is a hooked Strength-Agility scale.", {
			intercept: 8,
			coeff: .5,
			attrs: ["AG", "STR"]
		}, {
			intercept: 40,
			coeff: 2,
			attrs: ["AG", "STR"]
		})
	], { derived: { melee: 1 } }),
	path("brandedCheek", "Branded cheek", "−1 CH, speech down · +1 EN, +3 HP, speech uses EN", "Someone marked you so the next town would know the story. Charm got expensive. Surviving the iron did not. When you talk now, people hear the heat.", "Branded cheek. Hard to smile. Harder to break.", {
		CH: -1,
		EN: 1
	}, [f("speech", "Speech is Endurance plus Charisma — you outlast the room.", {
		intercept: 0,
		coeff: .5,
		attrs: ["EN", "CH"]
	}, {
		intercept: 0,
		coeff: 3,
		attrs: ["EN", "CH"]
	})], { derived: { hp: 3 } }),
	path("deadEar", "Dead ear", "−1 PE, −1 Sequence · +3 Sneak, traps use IN", "One side of the world went quiet. You miss shouts. You also do not flinch at the shot that was supposed to scare you, and you watch mouths instead of waiting for noise.", "Dead ear. Misses the joke. Doesn't miss the knife.", { PE: -1 }, [f("traps", "Traps become a visual Intelligence job.", {
		intercept: 2,
		coeff: .35,
		attrs: ["PE", "IN"]
	}, {
		intercept: 10,
		coeff: 2,
		attrs: ["PE", "IN"]
	})], {
		derived: { sequence: -1 },
		skillBonus: { sneak: 3 }
	}),
	path("knifeSmile", "Knife smile", "−1 CH · +1 AG, +2 melee, melee rewritten", "Someone tried to write a warning on your face and accidentally gave you a style. People look away. You step in closer. The blade feels like a continuation of the scar.", "Knife smile. Bad first impression. Excellent second.", {
		CH: -1,
		AG: 1
	}, [f("meleeWeapons", "Melee is a meaner Agility-Strength scale.", {
		intercept: 6,
		coeff: .5,
		attrs: ["AG", "STR"]
	}, {
		intercept: 30,
		coeff: 2,
		attrs: ["AG", "STR"]
	})], { derived: { melee: 2 } }),
	path("glassJaw", "Glass jaw", "−1 EN, −5 HP · +1 AG, +2 AC", "One clean shot put you down in front of a crowd. You got up with a new religion: do not be where the fist is. The chin is still a rumor. The feet are not.", "Glass jaw. Don't get hit. That's the whole build.", {
		EN: -1,
		AG: 1
	}, [], { derived: {
		hp: -5,
		ac: 2
	} }),
	path("tinnitus", "Tinnitus", "−1 PE · +1 LK, +1 crit range, big guns +2", "The ringing never clocked out. Conversation is a fight. Gunfire is just more of the same weather. You shoot through the noise like it is a hymn.", "Tinnitus. Can't hear me. Can hear the boom.", {
		PE: -1,
		LK: 1
	}, [], {
		derived: { critShift: 1 },
		skillBonus: { bigGuns: 2 }
	}),
	path("fusedKnee", "Fused knee", "−2 AG, −1 AP · +1 STR, +30 carry, +1 melee", "The joint is a suggestion. Running is a story you tell about somebody else. Standing your ground, though — you are a post with opinions.", "Fused knee. Not fast. Not moving.", {
		AG: -2,
		STR: 1
	}, [f("sneak", "Sneak and a fused knee are a bit.", {
		intercept: 0,
		coeff: .35,
		attrs: ["AG"]
	}, {
		intercept: 0,
		coeff: 2,
		attrs: ["AG"]
	})], { derived: {
		ap: -1,
		carry: 30,
		melee: 1
	} }),
	path("oneLung", "One lung", "−2 EN, −8 HP, −1 heal · +1 PE, +2 Sequence, sneak +2", "Breath is a budget. Stairs are an encounter. You hear everything because you stopped filling the room with your own noise. Quiet became a survival skill.", "One lung. Short of breath. Long on attention.", {
		EN: -2,
		PE: 1
	}, [], {
		derived: {
			hp: -8,
			healingRate: -1,
			sequence: 2
		},
		skillBonus: { sneak: 2 }
	}),
	path("nightTerrors", "Night terrors", "−1 IN, −1 SP/level · +1 PE, +3 Sequence, sneak +1", "Sleep is a coin flip. The dark has a guest list. You show up to morning already having fought something, which means you notice the real something faster.", "Night terrors. Tired brain. Wired eyes.", {
		IN: -1,
		PE: 1
	}, [], {
		derived: {
			skillPoints: -1,
			sequence: 3
		},
		skillBonus: { sneak: 1 }
	}),
	path("biteMark", "Bite mark", "−1 CH · +1 EN, +3 poison, unarmed +2", "Something with too many teeth left a signature. People see it and take a step back. Your blood learned a lesson. So did your hands.", "Bite mark. Conversation starter. Then ender.", {
		CH: -1,
		EN: 1
	}, [], {
		derived: { poison: 3 },
		skillBonus: { unarmed: 2 }
	}),
	path("pinSpine", "Pin in the spine", "−1 AG, −1 AP, −15 carry · +1 EN, +6 HP", "Metal where a disc used to be. Bending is a meeting. You already survived the worst day of your back's life, so ordinary damage feels like commentary.", "Pin in the spine. Stiff. Extremely alive.", {
		AG: -1,
		EN: 1
	}, [], { derived: {
		ap: -1,
		carry: -15,
		hp: 6
	} }),
	path("missingTongue", "Missing tongue", "Speech collapses · +2 Sneak, +2 Steal, science +1", "Someone took the words. You kept the rest. People underestimate a quiet mouth. You let them. Writing, signing, staring — those still work.", "Missing tongue. Terrible speeches. Excellent secrets.", {}, [f("speech", "Speech is a wreck of Charisma.", {
		intercept: 0,
		coeff: .3,
		attrs: ["CH"]
	}, {
		intercept: 0,
		coeff: 1,
		attrs: ["CH"]
	})], { skillBonus: {
		sneak: 2,
		steal: 2,
		science: 1
	} }),
	path("collarbone", "Collarbone", "−1 STR, −25 carry, −1 melee · +1 AG, +1 AC, small guns +1", "It never sat right after the break. Heavy loads argue. You stopped leading with the shoulder and started leading with the feet. The rifle sits better than the crate.", "Collarbone. Don't ask them to carry the fridge. Ask them to shoot it.", {
		STR: -1,
		AG: 1
	}, [], {
		derived: {
			carry: -25,
			melee: -1,
			ac: 1
		},
		skillBonus: { smallGuns: 1 }
	}),
	path("radSterile", "Rad sterile", "−1 LK, −1 CH · +8 rad, +2 poison, science +2", "The glow took the future you were supposed to have. Superstition stuck to you. So did a working knowledge of why, and a body that treats rads like weather.", "Rad sterile. Unlucky line. Thick Geiger skin.", {
		LK: -1,
		CH: -1
	}, [], {
		derived: {
			radiation: 8,
			poison: 2
		},
		skillBonus: { science: 2 }
	}),
	path("hookedVein", "Hooked vein", "−1 EN, −1 heal · +1 AG, +1 AP, steal +2", "Track marks, or the ghost of them. Recovery is a part-time job. The upside of knowing every chem alley is that you also know every exit, and your hands still move like they need to.", "Hooked vein. Body's a mess. Hands are not.", {
		EN: -1,
		AG: 1
	}, [], {
		derived: {
			healingRate: -1,
			ap: 1
		},
		skillBonus: { steal: 2 }
	}),
	path("loyaltyDebt", "Loyalty debt", "−1 CH · +1 LK, +1 Sequence, first aid +2", "You lived because someone else didn't get to. Charm feels like theft. You watch the people who are still here like they might vanish, and you keep a kit ready like an apology.", "Loyalty debt. Bad at parties. Good at not losing the next one.", {
		CH: -1,
		LK: 1
	}, [], {
		derived: { sequence: 1 },
		skillBonus: { firstAid: 2 }
	})
];
function indexById(list, ids, label) {
	const rec = Object.fromEntries(list.map((p) => [p.id, p]));
	for (const id of ids) if (!rec[id]) throw new Error(`Missing ${label} path: ${id}`);
	return rec;
}
var EDUCATION_BY_ID = indexById(EDUCATIONS, EDUCATION_IDS, "education");
var LIFE_BY_ID = indexById(LIVES, LIFE_IDS, "life");
var SCAR_BY_ID = indexById(SCARS, SCAR_IDS, "scar");
function educationOf(id) {
	return EDUCATION_BY_ID[id ?? "none"] ?? EDUCATION_BY_ID.none;
}
function lifeOf(id) {
	return LIFE_BY_ID[id ?? "none"] ?? LIFE_BY_ID.none;
}
function scarsOf(ids) {
	return (ids ?? []).map((id) => SCAR_BY_ID[id]).filter(Boolean);
}
function pathLayers(character) {
	return [
		educationOf(character.educationId),
		lifeOf(character.lifeId),
		...scarsOf(character.scars)
	];
}
function mergeDerived(patches) {
	const acc = {};
	for (const d of patches) {
		if (!d) continue;
		acc.ap = (acc.ap ?? 0) + (d.ap ?? 0);
		acc.sequence = (acc.sequence ?? 0) + (d.sequence ?? 0);
		acc.hp = (acc.hp ?? 0) + (d.hp ?? 0);
		acc.hpPerLevel = (acc.hpPerLevel ?? 0) + (d.hpPerLevel ?? 0);
		acc.carry = (acc.carry ?? 0) + (d.carry ?? 0);
		acc.healingRate = (acc.healingRate ?? 0) + (d.healingRate ?? 0);
		acc.poison = (acc.poison ?? 0) + (d.poison ?? 0);
		acc.radiation = (acc.radiation ?? 0) + (d.radiation ?? 0);
		acc.melee = (acc.melee ?? 0) + (d.melee ?? 0);
		acc.ac = (acc.ac ?? 0) + (d.ac ?? 0);
		acc.skillPoints = (acc.skillPoints ?? 0) + (d.skillPoints ?? 0);
		acc.critShift = (acc.critShift ?? 0) + (d.critShift ?? 0);
	}
	return acc;
}
function pathSkillBonus(character, engine) {
	const scale = engine === "pnp" ? 5 : 1;
	const acc = {};
	for (const layer of pathLayers(character)) for (const id of SKILL_IDS) {
		const n = layer.skillBonus?.[id] ?? 0;
		if (!n) continue;
		acc[id] = (acc[id] ?? 0) + n * scale;
	}
	return acc;
}
function zeros$1() {
	return {
		STR: 0,
		PE: 0,
		EN: 0,
		CH: 0,
		IN: 0,
		AG: 0,
		LK: 0
	};
}
function has(character, id) {
	return (character.perks ?? []).includes(id);
}
var PERKS = [
	{
		id: "awareness",
		name: "Awareness",
		rank: 3,
		blurb: "You read a body the way other people read a sign. DT, DR, and leftover AP are never a surprise.",
		requires: "Lv 3 · PE 5",
		eligible: (c, d) => d.special.PE >= 5 && c.level >= 3
	},
	{
		id: "bonusHthDamage",
		name: "Bonus HtH Damage",
		rank: 3,
		blurb: "+2 melee damage. Fists and pipes notice.",
		requires: "Lv 3 · ST 6 · AG 6",
		eligible: (c, d) => d.special.STR >= 6 && d.special.AG >= 6 && c.level >= 3
	},
	{
		id: "bonusMove",
		name: "Bonus Move",
		rank: 3,
		blurb: "+1 AP. The street is shorter when you want it to be.",
		requires: "Lv 3 · AG 5",
		eligible: (c, d) => d.special.AG >= 5 && c.level >= 3
	},
	{
		id: "bonusRangedDamage",
		name: "Bonus Ranged Damage",
		rank: 3,
		blurb: "Guns hit a little meaner. +2 to firearm damage rolls.",
		requires: "Lv 3 · AG 6 · LK 6",
		eligible: (c, d) => d.special.AG >= 6 && d.special.LK >= 6 && c.level >= 3
	},
	{
		id: "earlierSequence",
		name: "Earlier Sequence",
		rank: 3,
		blurb: "+2 Sequence. You see the draw before they finish it.",
		requires: "Lv 3 · PE 6",
		eligible: (c, d) => d.special.PE >= 6 && c.level >= 3
	},
	{
		id: "fasterHealing",
		name: "Faster Healing",
		rank: 3,
		blurb: "+2 Healing Rate. Sleep and stimpaks go further.",
		requires: "Lv 3 · EN 6",
		eligible: (c, d) => d.special.EN >= 6 && c.level >= 3
	},
	{
		id: "moreCriticals",
		name: "More Criticals",
		rank: 3,
		blurb: "+5% critical chance. Luck with a work ethic.",
		requires: "Lv 3 · LK 6",
		eligible: (c, d) => d.special.LK >= 6 && c.level >= 3
	},
	{
		id: "nightVision",
		name: "Night Vision",
		rank: 3,
		blurb: "Dark streets cost you less. Lighting penalties halved.",
		requires: "Lv 3 · PE 6",
		eligible: (c, d) => d.special.PE >= 6 && c.level >= 3
	},
	{
		id: "presence",
		name: "Presence",
		rank: 3,
		blurb: "+10% Speech. Rooms go quiet when you want them to.",
		requires: "Lv 3 · CH 6",
		eligible: (c, d) => d.special.CH >= 6 && c.level >= 3
	},
	{
		id: "smoothTalker",
		name: "Smooth Talker",
		rank: 3,
		blurb: "+10% Speech. You lie like you mean the weather.",
		requires: "Lv 3 · IN 4",
		eligible: (c, d) => d.special.IN >= 4 && c.level >= 3
	},
	{
		id: "strongBack",
		name: "Strong Back",
		rank: 3,
		blurb: "+50 carry weight. The pack stops arguing.",
		requires: "Lv 3 · ST 6 · EN 6",
		eligible: (c, d) => d.special.STR >= 6 && d.special.EN >= 6 && c.level >= 3
	},
	{
		id: "survivalist",
		name: "Survivalist",
		rank: 3,
		blurb: "+15% Outdoorsman. The wastes still try. They fail more often.",
		requires: "Lv 3 · EN 6 · IN 6 · Outdoorsman 40%",
		eligible: (c, d) => d.special.EN >= 6 && d.special.IN >= 6 && d.skills.outdoorsman.total >= 40 && c.level >= 3
	},
	{
		id: "thief",
		name: "Thief",
		rank: 3,
		blurb: "+10% Sneak, Lockpick, and Steal.",
		requires: "Lv 3 · AG 8",
		eligible: (c, d) => d.special.AG >= 8 && c.level >= 3
	},
	{
		id: "toughness",
		name: "Toughness",
		rank: 3,
		blurb: "+10% Damage Resistance. You bruise. You do not fold.",
		requires: "Lv 3 · EN 6",
		eligible: (c, d) => d.special.EN >= 6 && c.level >= 3
	},
	{
		id: "educated",
		name: "Educated",
		rank: 3,
		blurb: "+2 skill points now and every level after.",
		requires: "Lv 3 · IN 6",
		eligible: (c, d) => d.special.IN >= 6 && c.level >= 3
	},
	{
		id: "healer",
		name: "Healer",
		rank: 3,
		blurb: "Stimpaks and sleep knit more. First Aid goes further.",
		requires: "Lv 3 · PE 7 · AG 6 · IN 5 · First Aid 40%",
		eligible: (c, d) => d.special.PE >= 7 && d.special.AG >= 6 && d.special.IN >= 5 && d.skills.firstAid.total >= 40 && c.level >= 3
	},
	{
		id: "fortuneFinder",
		name: "Fortune Finder",
		rank: 3,
		blurb: "Caps find you. Jobs, loot, and marks pay extra.",
		requires: "Lv 3 · LK 8",
		eligible: (c, d) => d.special.LK >= 8 && c.level >= 3
	},
	{
		id: "ghost",
		name: "Ghost",
		rank: 6,
		blurb: "+20% Sneak at night. Alleys forget you.",
		requires: "Lv 6 · Sneak 60%",
		eligible: (c, d) => d.skills.sneak.total >= 60 && c.level >= 6
	},
	{
		id: "negotiator",
		name: "Negotiator",
		rank: 6,
		blurb: "+10% Speech and Barter.",
		requires: "Lv 6 · Speech 50% · Barter 50%",
		eligible: (c, d) => d.skills.speech.total >= 50 && d.skills.barter.total >= 50 && c.level >= 6
	},
	{
		id: "scout",
		name: "Scout",
		rank: 3,
		blurb: "You clock trouble first. Sighting rolls go your way.",
		requires: "Lv 3 · PE 7",
		eligible: (c, d) => d.special.PE >= 7 && c.level >= 3
	},
	{
		id: "actionBoy",
		name: "Action Boy",
		rank: 6,
		blurb: "+1 Action Point.",
		requires: "Lv 6 · AG 5",
		eligible: (c, d) => d.special.AG >= 5 && c.level >= 6
	},
	{
		id: "betterCriticals",
		name: "Better Criticals",
		rank: 9,
		blurb: "+10% critical chance. When it hits, it hits.",
		requires: "Lv 9 · PE 6 · AG 4 · LK 6",
		eligible: (c, d) => d.special.PE >= 6 && d.special.AG >= 4 && d.special.LK >= 6 && c.level >= 9
	},
	{
		id: "dodger",
		name: "Dodger",
		rank: 9,
		blurb: "+5 Armor Class. The round goes where you were.",
		requires: "Lv 9 · AG 6",
		eligible: (c, d) => d.special.AG >= 6 && c.level >= 9
	},
	{
		id: "gainStrength",
		name: "Gain Strength",
		rank: 6,
		blurb: "+1 Strength.",
		requires: "Lv 6 · ST 1–9",
		eligible: (c, d) => d.special.STR >= 1 && d.special.STR <= 9 && c.level >= 6
	},
	{
		id: "gainPerception",
		name: "Gain Perception",
		rank: 6,
		blurb: "+1 Perception.",
		requires: "Lv 6 · PE 1–9",
		eligible: (c, d) => d.special.PE >= 1 && d.special.PE <= 9 && c.level >= 6
	},
	{
		id: "gainEndurance",
		name: "Gain Endurance",
		rank: 6,
		blurb: "+1 Endurance.",
		requires: "Lv 6 · EN 1–9",
		eligible: (c, d) => d.special.EN >= 1 && d.special.EN <= 9 && c.level >= 6
	},
	{
		id: "gainCharisma",
		name: "Gain Charisma",
		rank: 6,
		blurb: "+1 Charisma.",
		requires: "Lv 6 · CH 1–9",
		eligible: (c, d) => d.special.CH >= 1 && d.special.CH <= 9 && c.level >= 6
	},
	{
		id: "gainIntelligence",
		name: "Gain Intelligence",
		rank: 6,
		blurb: "+1 Intelligence. Skill points notice.",
		requires: "Lv 6 · IN 1–9",
		eligible: (c, d) => d.special.IN >= 1 && d.special.IN <= 9 && c.level >= 6
	},
	{
		id: "gainAgility",
		name: "Gain Agility",
		rank: 6,
		blurb: "+1 Agility.",
		requires: "Lv 6 · AG 1–9",
		eligible: (c, d) => d.special.AG >= 1 && d.special.AG <= 9 && c.level >= 6
	},
	{
		id: "gainLuck",
		name: "Gain Luck",
		rank: 6,
		blurb: "+1 Luck.",
		requires: "Lv 6 · LK 1–9",
		eligible: (c, d) => d.special.LK >= 1 && d.special.LK <= 9 && c.level >= 6
	},
	{
		id: "lifegiver",
		name: "Lifegiver",
		rank: 12,
		blurb: "+4 Hit Points per level, including this one.",
		requires: "Lv 12 · EN 4",
		eligible: (c, d) => d.special.EN >= 4 && c.level >= 12
	},
	{
		id: "masterTrader",
		name: "Master Trader",
		rank: 12,
		blurb: "Buy cheaper, sell higher. Reno notices a professional.",
		requires: "Lv 12 · CH 7 · Barter 60%",
		eligible: (c, d) => d.special.CH >= 7 && d.skills.barter.total >= 60 && c.level >= 12
	},
	{
		id: "tag",
		name: "Tag!",
		rank: 12,
		blurb: "Tag one more skill. It levels like the first three.",
		requires: "Lv 12",
		eligible: (c) => c.level >= 12
	},
	{
		id: "bonusRateOfFire",
		name: "Bonus Rate of Fire",
		rank: 15,
		blurb: "Single shots cost 1 less AP (minimum 1).",
		requires: "Lv 15 · PE 6 · IN 6 · AG 7",
		eligible: (c, d) => d.special.PE >= 6 && d.special.IN >= 6 && d.special.AG >= 7 && c.level >= 15
	}
];
var PERK_BY_ID = Object.fromEntries(PERKS.map((p) => [p.id, p]));
function perkSpecialMods(character) {
	const z = zeros$1();
	const p = character.perks ?? [];
	for (const [id, key] of Object.entries({
		gainStrength: "STR",
		gainPerception: "PE",
		gainEndurance: "EN",
		gainCharisma: "CH",
		gainIntelligence: "IN",
		gainAgility: "AG",
		gainLuck: "LK"
	})) if (p.includes(id)) z[key] += 1;
	return z;
}
function perkSkillMods(character) {
	const p = character.perks ?? [];
	const m = {};
	const add = (id, n) => {
		m[id] = (m[id] ?? 0) + n;
	};
	if (p.includes("presence")) add("speech", 10);
	if (p.includes("smoothTalker")) add("speech", 10);
	if (p.includes("survivalist")) add("outdoorsman", 15);
	if (p.includes("thief")) {
		add("sneak", 10);
		add("lockpick", 10);
		add("steal", 10);
	}
	if (p.includes("negotiator")) {
		add("speech", 10);
		add("barter", 10);
	}
	if (p.includes("healer")) add("firstAid", 10);
	return m;
}
function perkDerived(character) {
	const p = character.perks ?? [];
	const level = character.level || 1;
	return {
		ap: (p.includes("actionBoy") ? 1 : 0) + (p.includes("bonusMove") ? 1 : 0),
		carry: p.includes("strongBack") ? 50 : 0,
		sequence: p.includes("earlierSequence") ? 2 : 0,
		heal: p.includes("fasterHealing") ? 2 : 0,
		ac: p.includes("dodger") ? 5 : 0,
		dr: p.includes("toughness") ? 10 : 0,
		hp: p.includes("lifegiver") ? 4 * level : 0,
		skillPoints: p.includes("educated") ? 2 : 0,
		crit: (p.includes("moreCriticals") ? 5 : 0) + (p.includes("betterCriticals") ? 10 : 0)
	};
}
function availablePerks(character, derived) {
	return PERKS.filter((perk) => !has(character, perk.id) && perk.eligible(character, derived));
}
/** Engine floor() is toward zero, not toward −∞. */
function truncDiv(n, d) {
	return Math.trunc(n / d);
}
function roundNearest(n) {
	return Math.round(n);
}
function zeros() {
	return {
		STR: 0,
		PE: 0,
		EN: 0,
		CH: 0,
		IN: 0,
		AG: 0,
		LK: 0
	};
}
function pathSpecial(character) {
	const block = zeros();
	const layers = [
		educationOf(character.educationId).special,
		lifeOf(character.lifeId).special,
		...scarsOf(character.scars).map((s) => s.special)
	];
	for (const layer of layers) for (const key of SPECIAL_KEYS) block[key] += layer[key] ?? 0;
	return block;
}
function pathDerived(character) {
	return mergeDerived(pathLayers(character).map((layer) => layer.derived));
}
function backgroundSpecial(character) {
	const block = zeros();
	if (characterEngine(character) === "pnp") return block;
	if (character.backgroundId === "none") return block;
	if (character.backgroundId === "custom") return { ...character.customBackground.special };
	const def = BACKGROUNDS.find((b) => b.id === character.backgroundId);
	if (!def) return block;
	for (const key of SPECIAL_KEYS) block[key] = def.special[key] ?? 0;
	return block;
}
function backgroundSkills(character) {
	if (characterEngine(character) === "pnp") return {};
	if (character.backgroundId === "none") return {};
	if (character.backgroundId === "custom") return { ...character.customBackground.skills };
	return BACKGROUNDS.find((b) => b.id === character.backgroundId)?.skills ?? {};
}
function traitSpecialMods(character) {
	const mods = {
		STR: 0,
		PE: 0,
		EN: 0,
		CH: 0,
		IN: 0,
		AG: 0,
		LK: 0
	};
	const t = character.traits;
	if (t.includes("gifted")) for (const key of SPECIAL_KEYS) mods[key] += 1;
	if (t.includes("bruiser")) mods.STR += 2;
	if (t.includes("smallFrame")) mods.AG += 1;
	if (t.includes("techWizard")) mods.PE -= 1;
	return mods;
}
function finalSpecial(character) {
	const bg = backgroundSpecial(character);
	const trait = traitSpecialMods(character);
	const path = pathSpecial(character);
	const gear = gearSummary(character.loadout, characterEngine(character));
	const perk = perkSpecialMods(character);
	const result = {};
	for (const key of SPECIAL_KEYS) result[key] = (character.rolled[key] ?? 0) + (bg[key] ?? 0) + (character.free[key] ?? 0) + (character.adjust[key] ?? 0) + (trait[key] ?? 0) + (path[key] ?? 0) + (perk[key] ?? 0);
	result.STR += gear.strBonus;
	result.PE -= gear.pePenalty;
	return result;
}
var D20_FORMULAS = {
	smallGuns: {
		intercept: 1,
		coeff: .8,
		attrs: ["AG"]
	},
	bigGuns: {
		intercept: 0,
		coeff: .4,
		attrs: ["AG"]
	},
	energyWeapons: {
		intercept: 0,
		coeff: .4,
		attrs: ["AG"]
	},
	unarmed: {
		intercept: 6,
		coeff: .4,
		attrs: ["AG", "STR"]
	},
	meleeWeapons: {
		intercept: 4,
		coeff: .4,
		attrs: ["AG", "STR"]
	},
	throwing: {
		intercept: 0,
		coeff: .8,
		attrs: ["AG"]
	},
	firstAid: {
		intercept: 0,
		coeff: .4,
		attrs: ["PE", "EN"]
	},
	doctor: {
		intercept: 1,
		coeff: .2,
		attrs: ["PE", "IN"]
	},
	sneak: {
		intercept: 1,
		coeff: .6,
		attrs: ["AG"]
	},
	lockpick: {
		intercept: 2,
		coeff: .2,
		attrs: ["PE", "AG"]
	},
	steal: {
		intercept: 0,
		coeff: .6,
		attrs: ["AG"]
	},
	traps: {
		intercept: 2,
		coeff: .2,
		attrs: ["PE", "AG"]
	},
	science: {
		intercept: 0,
		coeff: .8,
		attrs: ["IN"]
	},
	repair: {
		intercept: 0,
		coeff: .6,
		attrs: ["IN"]
	},
	pilot: {
		intercept: 0,
		coeff: .4,
		attrs: ["AG", "PE"]
	},
	speech: {
		intercept: 0,
		coeff: 1,
		attrs: ["CH"]
	},
	barter: {
		intercept: 0,
		coeff: .8,
		attrs: ["CH"]
	},
	gambling: {
		intercept: 0,
		coeff: 1,
		attrs: ["LK"]
	},
	outdoorsman: {
		intercept: 0,
		coeff: .4,
		attrs: ["EN", "IN"]
	}
};
var PNP_FORMULAS = {
	smallGuns: {
		intercept: 5,
		coeff: 4,
		attrs: ["AG"]
	},
	bigGuns: {
		intercept: 0,
		coeff: 2,
		attrs: ["AG"]
	},
	energyWeapons: {
		intercept: 0,
		coeff: 2,
		attrs: ["AG"]
	},
	unarmed: {
		intercept: 30,
		coeff: 2,
		attrs: ["AG", "STR"]
	},
	meleeWeapons: {
		intercept: 20,
		coeff: 2,
		attrs: ["AG", "STR"]
	},
	throwing: {
		intercept: 0,
		coeff: 4,
		attrs: ["AG"]
	},
	firstAid: {
		intercept: 0,
		coeff: 2,
		attrs: ["PE", "EN"]
	},
	doctor: {
		intercept: 5,
		coeff: 1,
		attrs: ["PE", "IN"]
	},
	sneak: {
		intercept: 5,
		coeff: 3,
		attrs: ["AG"]
	},
	lockpick: {
		intercept: 10,
		coeff: 1,
		attrs: ["PE", "AG"]
	},
	steal: {
		intercept: 0,
		coeff: 3,
		attrs: ["AG"]
	},
	traps: {
		intercept: 10,
		coeff: 1,
		attrs: ["PE", "AG"]
	},
	science: {
		intercept: 0,
		coeff: 4,
		attrs: ["IN"]
	},
	repair: {
		intercept: 0,
		coeff: 3,
		attrs: ["IN"]
	},
	pilot: {
		intercept: 0,
		coeff: 2,
		attrs: ["AG", "PE"]
	},
	speech: {
		intercept: 0,
		coeff: 5,
		attrs: ["CH"]
	},
	barter: {
		intercept: 0,
		coeff: 4,
		attrs: ["CH"]
	},
	gambling: {
		intercept: 0,
		coeff: 5,
		attrs: ["LK"]
	},
	outdoorsman: {
		intercept: 0,
		coeff: 2,
		attrs: ["EN", "IN"]
	}
};
function evalSpec(spec, s) {
	const sum = spec.attrs.reduce((n, key) => n + (s[key] ?? 0), 0);
	return roundNearest(spec.intercept + spec.coeff * sum);
}
function coeffLabel(n) {
	const t = Number(n.toFixed(2));
	return String(t);
}
function formatSpec(spec, engine) {
	const inner = spec.attrs.length === 1 ? spec.attrs[0] : `(${spec.attrs.join(" + ")})`;
	const term = spec.coeff === 1 ? inner : `${coeffLabel(spec.coeff)} × ${inner}`;
	if (engine === "d20") {
		if (spec.intercept === 0 && spec.coeff === 1 && spec.attrs.length === 1) return spec.attrs[0];
		return `round(${spec.intercept === 0 ? term : `${spec.intercept} + ${term}`})`;
	}
	if (spec.intercept === 0) return term;
	return `${[
		5,
		10,
		20,
		30
	].includes(spec.intercept) ? `${spec.intercept}%` : String(spec.intercept)} + ${term}`;
}
function formulaFor(id, character, engine = characterEngine(character)) {
	let spec = engine === "pnp" ? PNP_FORMULAS[id] : D20_FORMULAS[id];
	let rewritten = false;
	let note;
	const layers = [
		educationOf(character.educationId),
		lifeOf(character.lifeId),
		...scarsOf(character.scars)
	];
	for (const layer of layers) {
		const hit = layer.formulas.find((entry) => entry.skill === id);
		if (hit) {
			spec = engine === "pnp" ? hit.pnp : hit.d20;
			rewritten = true;
			note = hit.note;
		}
	}
	return {
		spec,
		rewritten,
		note
	};
}
function d20TraitSkillMod(id, character) {
	const t = character.traits;
	let n = 0;
	if (t.includes("gifted")) n -= 2;
	if (t.includes("skilled")) n += 2;
	if (t.includes("goodNatured")) {
		if (id === "firstAid" || id === "doctor" || id === "speech" || id === "barter") n += 4;
		if (id === "smallGuns" || id === "bigGuns" || id === "energyWeapons" || id === "unarmed" || id === "meleeWeapons") n -= 2;
	}
	if (t.includes("techWizard") && (id === "science" || id === "repair" || id === "lockpick")) n += 3;
	return n;
}
function pnpTraitSkillMod(id, character) {
	const t = character.traits;
	let n = 0;
	if (t.includes("gifted")) n -= 10;
	if (t.includes("skilled")) n += 10;
	if (t.includes("goodNatured")) {
		if (id === "firstAid" || id === "doctor" || id === "speech" || id === "barter") n += 20;
		if (id === "smallGuns" || id === "bigGuns" || id === "energyWeapons" || id === "unarmed" || id === "meleeWeapons") n -= 10;
	}
	if (t.includes("techWizard") && (id === "science" || id === "repair" || id === "lockpick")) n += 15;
	return n;
}
function healingRateD20(en) {
	if (en >= 15) return 6;
	if (en >= 13) return 5;
	if (en >= 11) return 4;
	if (en >= 9) return 3;
	if (en >= 6) return 2;
	return 1;
}
function healingRatePnp(en) {
	if (en >= 11) return 4;
	if (en >= 9) return 3;
	if (en >= 6) return 2;
	return 1;
}
function criticalLow(luck, finesse) {
	return 20 - Math.floor((luck - 1) / 5) - (finesse ? 1 : 0);
}
function formatCritRange(low) {
	if (low >= 20) return "20";
	if (low > 20) return `none on a d20 (${low}–20)`;
	if (low <= 1) return "1–20";
	return `${low}–20`;
}
function meleeDamagePnp(str) {
	if (str <= 6) return 1;
	return str - 5;
}
function derive(character) {
	const engine = characterEngine(character);
	const special = finalSpecial(character);
	const gear = gearSummary(character.loadout, engine);
	const modifiers = {};
	for (const key of SPECIAL_KEYS) modifiers[key] = special[key] - 5;
	const t = character.traits;
	const tagBonus = engine === "pnp" ? 20 : 4;
	const bgSkills = backgroundSkills(character);
	const spentScale = engine === "pnp" ? 1 : 1;
	const paths = pathDerived(character);
	const pathMods = pathSpecial(character);
	const pathSkills = pathSkillBonus(character, engine);
	const perkSkills = perkSkillMods(character);
	const skills = {};
	for (const id of SKILL_IDS) {
		const resolved = formulaFor(id, character, engine);
		const base = evalSpec(resolved.spec, special);
		const background = bgSkills[id] ?? 0;
		const trait = engine === "pnp" ? pnpTraitSkillMod(id, character) : d20TraitSkillMod(id, character);
		const tag = (character.tagged ?? []).includes(id) ? tagBonus : 0;
		const spent = (character.skillSpent[id] ?? 0) * spentScale;
		const path = pathSkills[id] ?? 0;
		const perk = perkSkills[id] ?? 0;
		let total = base + background + trait + tag + spent + path + perk;
		if (id === "sneak" && gear.sneakPen) total -= engine === "pnp" ? gear.sneakPen : Math.round(gear.sneakPen / 5);
		skills[id] = {
			id,
			base,
			background,
			trait,
			tag,
			spent,
			path,
			total,
			formula: formatSpec(resolved.spec, engine),
			rewritten: resolved.rewritten
		};
	}
	const level = character.level;
	const hpBase = 15 + special.STR + 2 * special.EN;
	const hpLater = (level - 1) * (3 + truncDiv(special.EN, 2));
	const hpLife = t.includes("lifegiver") ? 4 * level : 0;
	const freeSpent = SPECIAL_KEYS.reduce((n, k) => n + (character.free[k] ?? 0), 0);
	const bgSpent = SPECIAL_KEYS.reduce((n, k) => n + (backgroundSpecial(character)[k] ?? 0), 0);
	const customSkillSpent = Object.values(character.customBackground.skills).reduce((n, v) => n + (v ?? 0), 0);
	const rolledTotal = SPECIAL_KEYS.reduce((n, k) => n + (character.rolled[k] ?? 0), 0);
	const finalTotal = SPECIAL_KEYS.reduce((n, k) => n + special[k], 0);
	let ap = 5 + truncDiv(special.AG, 2);
	if (t.includes("bruiser")) ap -= 2;
	const armorAc = gear.armorAc || character.armorAc;
	let ac;
	if (t.includes("kamikaze")) ac = armorAc;
	else ac = special.AG + armorAc;
	let carryWeight = 25 + 25 * special.STR;
	if (t.includes("smallFrame")) carryWeight = 15 * special.STR;
	let meleeDamage;
	if (engine === "pnp") {
		meleeDamage = meleeDamagePnp(special.STR);
		if (t.includes("heavyHanded")) meleeDamage += 4;
	} else {
		meleeDamage = special.STR - 5;
		if (t.includes("finesse")) meleeDamage -= 4;
		if (t.includes("heavyHanded")) meleeDamage += 4;
	}
	let poisonResistance;
	let radiationResistance;
	if (engine === "pnp") {
		poisonResistance = t.includes("fastMetabolism") ? 0 : 5 * special.EN;
		radiationResistance = t.includes("fastMetabolism") ? 0 : 2 * special.EN;
	} else if (t.includes("fastMetabolism")) {
		poisonResistance = 0;
		radiationResistance = 0;
	} else {
		poisonResistance = truncDiv(special.EN, 2);
		radiationResistance = truncDiv(special.EN, 5);
	}
	if (engine === "pnp") {
		poisonResistance += gear.poisonBonus;
		radiationResistance += gear.radBonus;
	} else {
		poisonResistance += Math.round(gear.poisonBonus / 5);
		radiationResistance += Math.round(gear.radBonus / 5);
	}
	let sequence = 2 * special.PE;
	if (t.includes("kamikaze")) sequence += 5;
	sequence += paths.sequence ?? 0;
	let healingRate = engine === "pnp" ? healingRatePnp(special.EN) : healingRateD20(special.EN);
	if (t.includes("fastMetabolism")) healingRate += 2;
	healingRate += paths.healingRate ?? 0;
	ap += paths.ap ?? 0;
	ac += paths.ac ?? 0;
	carryWeight += paths.carry ?? 0;
	meleeDamage += paths.melee ?? 0;
	poisonResistance += paths.poison ?? 0;
	radiationResistance += paths.radiation ?? 0;
	let skillPointsPerLevel;
	let perkInterval;
	if (engine === "pnp") {
		skillPointsPerLevel = 5 + 2 * special.IN;
		if (t.includes("gifted")) skillPointsPerLevel -= 5;
		if (t.includes("skilled")) skillPointsPerLevel += 5;
		perkInterval = 3 + (t.includes("skilled") ? 1 : 0);
	} else {
		skillPointsPerLevel = 5 + truncDiv(special.IN, 2) + (t.includes("skilled") ? 1 : 0);
		perkInterval = t.includes("skilled") ? 4 : 3;
	}
	skillPointsPerLevel += paths.skillPoints ?? 0;
	const perks = perkDerived(character);
	ap += perks.ap;
	carryWeight += perks.carry;
	sequence += perks.sequence;
	healingRate += perks.heal;
	ac += perks.ac;
	skillPointsPerLevel += perks.skillPoints;
	const finesseCrit = engine === "d20" && t.includes("finesse");
	const heavyCrit = engine === "d20" && t.includes("heavyHanded");
	const critLow = criticalLow(special.LK, finesseCrit) + (heavyCrit ? 1 : 0) - (paths.critShift ?? 0);
	let criticalChance = special.LK;
	if (engine === "pnp" && t.includes("finesse")) criticalChance += 10;
	criticalChance += perks.crit;
	return {
		engine,
		special,
		modifiers,
		skills,
		hp: hpBase + hpLater + hpLife + (paths.hp ?? 0) + (paths.hpPerLevel ?? 0) * level + perks.hp,
		ap,
		ac,
		carryWeight,
		carriedWeight: gear.carried,
		overweight: gear.carried > carryWeight,
		meleeDamage,
		poisonResistance,
		radiationResistance,
		electricityResistance: engine === "pnp" ? 30 : 0,
		sequence,
		healingRate,
		skillPointsPerLevel,
		perkInterval,
		perksEarned: Math.trunc(level / perkInterval),
		criticalRange: engine === "pnp" ? `${criticalChance}%` : formatCritRange(critLow),
		criticalLow: critLow,
		criticalChance,
		taggedCount: (character.tagged ?? []).length,
		tagBonus,
		freeSpent,
		freeRemaining: 5 - freeSpent,
		backgroundSpecialSpent: bgSpent,
		customSkillSpent,
		rolledTotal,
		finalTotal,
		skillUnit: engine === "pnp" ? "%" : "",
		gearArmorAc: gear.armorAc,
		gearDt: gear.dt,
		gearDr: gear.dr + (engine === "pnp" ? perks.dr : Math.round(perks.dr / 5)),
		pathSpecial: pathMods
	};
}
var noopStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
var useRoster = create()(persist((set, get) => ({
	characters: [],
	draft: null,
	hydrated: false,
	setHydrated: (value) => set({ hydrated: value }),
	setDraft: (character) => set({ draft: character }),
	patchDraft: (patch) => {
		const current = get().draft;
		if (!current) return;
		set({ draft: typeof patch === "function" ? {
			...patch(current),
			updatedAt: Date.now()
		} : {
			...current,
			...patch,
			updatedAt: Date.now()
		} });
	},
	startDraft: (seed) => {
		const draft = seed ? {
			...seed,
			updatedAt: Date.now()
		} : newCharacter();
		set({ draft });
		return draft;
	},
	startNew: (engine) => {
		const draft = newCharacter({ engine });
		set({ draft });
		return draft;
	},
	saveDraft: () => {
		const draft = get().draft;
		if (!draft) return null;
		const saved = {
			...draft,
			updatedAt: Date.now()
		};
		get().upsert(saved);
		return saved;
	},
	upsert: (character) => {
		const list = get().characters;
		const idx = list.findIndex((c) => c.id === character.id);
		const next = [...list];
		if (idx >= 0) next[idx] = character;
		else next.unshift(character);
		set({
			characters: next,
			draft: character
		});
	},
	remove: (id) => {
		set({
			characters: get().characters.filter((c) => c.id !== id),
			draft: get().draft?.id === id ? null : get().draft
		});
	},
	duplicate: (id) => {
		const source = get().get(id);
		if (!source) return null;
		const copy = newCharacter({
			...source,
			id: crypto.randomUUID(),
			name: source.name ? `${source.name} (copy)` : "Unnamed copy"
		});
		get().upsert(copy);
		return copy;
	},
	get: (id) => get().characters.find((c) => c.id === id),
	loadExample: () => {
		const example = exampleGeneralist();
		get().upsert(example);
		return example;
	},
	loadPnpExample: () => {
		const example = examplePnpDiplomat();
		get().upsert(example);
		return example;
	}
}), {
	name: "special-forge-roster",
	storage: createJSONStorage(() => typeof window === "undefined" ? noopStorage : localStorage),
	partialize: (state) => ({
		characters: state.characters,
		draft: state.draft
	}),
	onRehydrateStorage: () => (state) => {
		state?.setHydrated(true);
	}
}));
//#endregion
export { stackItem as $, consumeItem as A, findStack as B, addToPack as C, characterEngine as D, availablePerks as E, describeSpecial as F, pathNotes as G, genderOf as H, educationOf as I, resistLine as J, putInPocket as K, emptySpecial as L, defaultAddQty as M, derive as N, clearPocket as O, describeItem as P, setQty as Q, ensureLoadout as R, addAndSlot as S, armorAcFor as T, getItem as U, formatDamage as V, lifeOf as W, rollD10 as X, rollArray as Y, scarsOf as Z, SKILL_IDS as _, D20_TRAIT_IDS as a, SPECIAL_META as b, GENDER_META as c, PERK_BY_ID as d, sumSpecial as et, PNP_TRAITS as f, SCARS as g, POCKET_LABELS as h, CATEGORIES as i, countItem as j, cn as k, KITS as l, POCKET_IDS as m, Button as n, unequip as nt, EDUCATIONS as o, PNP_TRAIT_IDS as p, removeStack as q, CATALOG as r, useRoster as rt, GENDER_IDS as s, BACKGROUNDS as t, traitName as tt, LIVES as u, SKILL_META as v, applyKit as w, TRAITS as x, SPECIAL_KEYS as y, equip as z };
