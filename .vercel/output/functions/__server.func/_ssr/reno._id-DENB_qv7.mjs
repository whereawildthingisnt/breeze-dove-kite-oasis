import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useThree, d as LinearFilter, f as RepeatWrapping, g as Vector3, h as ShapeGeometry, i as Html, l as CanvasTexture, m as Shape, n as useTexture, o as Canvas, p as SRGBColorSpace, r as Billboard, s as useFrame, t as OrbitControls, u as ClampToEdgeWrapping, y as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { S as Backpack, _ as FlaskConical, a as Search, b as CircleArrowUp, f as Martini, g as FolderOpen, h as Handshake, i as Store, m as Landmark, o as ScrollText, t as Users } from "../_libs/lucide-react.mjs";
import { r as Route$1 } from "./router-B4NkMof1.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { $ as stackItem, A as consumeItem, C as addToPack, D as characterEngine, E as availablePerks, H as genderOf, N as derive, R as ensureLoadout, U as getItem, V as formatDamage, _ as SKILL_IDS, d as PERK_BY_ID, j as countItem, k as cn, n as Button, rt as useRoster, v as SKILL_META } from "./store-CHBbC2-O.mjs";
import { n as LoadoutBoard } from "./loadout-board-DvCxvGCw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reno._id-DENB_qv7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function seedDealers() {
	return [
		{
			id: "myron-boy",
			name: "Stables runner",
			district: "mordino",
			gang: "mordinos",
			wares: ["jet", "psycho"],
			size: "house",
			note: "Myron's product. Little Jesus takes a cut. Volume."
		},
		{
			id: "globes-girl",
			name: "Golden Globes door",
			district: "mordino",
			gang: "mordinos",
			wares: ["jet", "cocaine"],
			size: "house",
			note: "Chems in the walls. You do not ask whose lungs."
		},
		{
			id: "desperado-felt",
			name: "Desperado floor man",
			district: "desperado",
			gang: "mordinos",
			wares: [
				"jet",
				"cocaine",
				"vodka"
			],
			size: "corner",
			note: "Cards in front. Bags in back. Mordino smile."
		},
		{
			id: "virgin-alley",
			name: "Virgin Street corner",
			district: "virgin",
			wares: [
				"jet",
				"marijuana",
				"cigarettes"
			],
			size: "corner",
			note: "Independent. The cops walk past if the envelope is right."
		},
		{
			id: "jungle-fire",
			name: "Jungle fire-barrel",
			district: "jungle",
			wares: [
				"jet",
				"marijuana",
				"vodka"
			],
			size: "runner",
			note: "No family. A man with a cough and a scale."
		},
		{
			id: "chop-crate",
			name: "Chop Shop crate",
			district: "chop",
			gang: "salvatores",
			wares: [
				"psycho",
				"buffout",
				"mentats"
			],
			size: "corner",
			note: "Mason does not sell. A cousin does, quietly."
		},
		{
			id: "sal-quiet",
			name: "Old Reno quiet man",
			district: "salvatore",
			gang: "salvatores",
			wares: ["cocaine", "mentats"],
			size: "runner",
			note: "If you have to ask the price, Mason already knows your name."
		},
		{
			id: "wright-still",
			name: "Wright still man",
			district: "wright",
			gang: "wrights",
			wares: [
				"vodka",
				"cigarettes",
				"marijuana"
			],
			size: "house",
			note: "Moonshine as vodka. Orville calls it family business."
		},
		{
			id: "shark-back",
			name: "Shark back room",
			district: "shark",
			gang: "bishops",
			wares: [
				"cocaine",
				"mentats",
				"cigarettes"
			],
			size: "house",
			note: "Bishop product. Polite. Expensive. A gun in the drawer."
		},
		{
			id: "east-stall",
			name: "East stall chemist",
			district: "market",
			wares: [
				"jet",
				"buffout",
				"mentats",
				"marijuana"
			],
			size: "corner",
			note: "Independent stall. Everyone buys. Everyone watches."
		},
		{
			id: "rail-box",
			name: "Boxcar chemist",
			district: "rail",
			wares: [
				"jet",
				"psycho",
				"vodka"
			],
			size: "runner",
			note: "No gang paper. Raiders tax him on even weeks."
		}
	];
}
function seedMarks() {
	return [
		{
			id: "ncr-lobby",
			name: "NCR lobbyist",
			district: "shark",
			wealth: 920,
			title: "A man who still thinks the Republic is a rumor you can buy.",
			gang: "bishops",
			mood: "cold"
		},
		{
			id: "hub-silk",
			name: "Hub silk merchant",
			district: "virgin",
			wealth: 480,
			title: "Caravan money. A bodyguard who used to box.",
			mood: "cold"
		},
		{
			id: "desperado-roller",
			name: "Desperado high roller",
			district: "desperado",
			wealth: 740,
			title: "Mordino guest. The smile is Jet. The wallet is not.",
			gang: "mordinos",
			mood: "cold"
		},
		{
			id: "sal-guest",
			name: "Salvatore dinner guest",
			district: "salvatore",
			wealth: 1100,
			title: "Old money. Made men at the door. An oxygen tank in the next room.",
			gang: "salvatores",
			mood: "cold"
		},
		{
			id: "wright-cousin",
			name: "Wright orchard cousin",
			district: "wright",
			wealth: 340,
			title: "Stills and a shotgun. Family if you are family.",
			gang: "wrights",
			mood: "cold"
		},
		{
			id: "ring-tout",
			name: "Ring promoter",
			district: "stables",
			wealth: 290,
			title: "Purses and cigars. One palooka who thinks he is a guard.",
			mood: "cold"
		},
		{
			id: "vault-tourist",
			name: "Vault City tourist",
			district: "virgin",
			wealth: 520,
			title: "Clean coat. A cop who wants a donut more than a report.",
			mood: "cold"
		},
		{
			id: "bishop-books",
			name: "Bishop bookkeeper",
			district: "bishop",
			wealth: 810,
			title: "The polite floor. Two men in good coats.",
			gang: "bishops",
			mood: "cold"
		},
		{
			id: "jet-baron",
			name: "Stables accountant",
			district: "mordino",
			wealth: 610,
			title: "Myron does not look up. This one counts the bags.",
			gang: "mordinos",
			mood: "cold"
		},
		{
			id: "chop-owner",
			name: "Chop Shop owner",
			district: "chop",
			wealth: 410,
			title: "Stolen Chevys and a loft. Mechanics with pipes.",
			mood: "cold"
		}
	];
}
function guardCount(wealth) {
	if (wealth >= 1e3) return 4;
	if (wealth >= 700) return 3;
	if (wealth >= 400) return 2;
	return 1;
}
function ensureIntel(life) {
	if (!life.dealers?.length) life.dealers = seedDealers();
	if (!life.marks?.length) life.marks = seedMarks();
}
function sizeLabel(size) {
	if (size === "house") return "house volume";
	if (size === "corner") return "corner bagman";
	return "runner";
}
var DISTRICTS = [
	{
		id: "golgotha",
		name: "Golgotha",
		blurb: "Graves, glow, and people who should have stayed buried.",
		q: 3,
		r: 0,
		art: "crypt",
		danger: 9,
		sell: 1.4,
		buy: .7,
		tags: ["wild"]
	},
	{
		id: "rail",
		name: "Rail yard",
		blurb: "Rusted boxcars. Good for hiding product. Bad for hiding from people.",
		q: 2,
		r: 1,
		art: "rail",
		danger: 6,
		sell: 1.15,
		buy: .85,
		tags: ["wild"]
	},
	{
		id: "chop",
		name: "Chop Shop",
		blurb: "Engines, stolen cars, and lofts nobody admits exist.",
		q: 3,
		r: 1,
		art: "rail",
		danger: 5,
		sell: 1.1,
		buy: .9,
		tags: ["housing"]
	},
	{
		id: "wright",
		name: "Wright compound",
		blurb: "Orchards, stills, family dinners with a shotgun at the door.",
		q: 2,
		r: 2,
		art: "motel",
		danger: 3,
		gang: "wrights",
		sell: .85,
		buy: 1,
		tags: ["gang", "housing"]
	},
	{
		id: "jungle",
		name: "The Jungle",
		blurb: "Shacks, fires, and a city that pretends this block is not a city.",
		q: 3,
		r: 2,
		art: "squat",
		danger: 7,
		sell: 1.25,
		buy: .75,
		tags: ["housing", "wild"]
	},
	{
		id: "stables",
		name: "The Ring",
		blurb: "Sawdust, purses, and a doctor who only shows up if you win.",
		q: 4,
		r: 2,
		art: "ring",
		danger: 4,
		sell: 1.05,
		buy: 1,
		tags: ["ring"]
	},
	{
		id: "mordino",
		name: "Golden Globes",
		blurb: "Jet in the walls. Mordino names on the tab.",
		q: 2,
		r: 3,
		art: "bar",
		danger: 5,
		gang: "mordinos",
		sell: .55,
		buy: .55,
		tags: ["gang", "market"]
	},
	{
		id: "virgin",
		name: "Virgin Street",
		blurb: "Neon, tourists, and every kind of hunger with a price.",
		q: 3,
		r: 3,
		art: "casino",
		danger: 3,
		sell: 1.2,
		buy: 1.1,
		tags: ["casino", "housing"]
	},
	{
		id: "shark",
		name: "Shark Club",
		blurb: "Bishop money, polished brass, and a dress code that includes a gun.",
		q: 4,
		r: 3,
		art: "casino",
		danger: 2,
		gang: "bishops",
		sell: 1.35,
		buy: 1.2,
		tags: ["casino", "gang"]
	},
	{
		id: "bishop",
		name: "Bishop offices",
		blurb: "The polite floor. Politics with a smile that does not reach the eyes.",
		q: 5,
		r: 3,
		art: "casino",
		danger: 2,
		gang: "bishops",
		sell: 1.1,
		buy: 1.15,
		tags: ["gang", "housing"]
	},
	{
		id: "salvatore",
		name: "Salvatore's Bar",
		blurb: "Old money, older grudges, and a laser in a cane if the stories are true.",
		q: 2,
		r: 4,
		art: "bar",
		danger: 4,
		gang: "salvatores",
		sell: .9,
		buy: 1.05,
		tags: ["gang"]
	},
	{
		id: "motel",
		name: "Desert Rose",
		blurb: "Hourly rates. Weekly rates. A lock that works if you kick it right.",
		q: 3,
		r: 4,
		art: "motel",
		danger: 2,
		sell: 1.05,
		buy: 1,
		tags: ["housing"]
	},
	{
		id: "desperado",
		name: "Desperado",
		blurb: "Cards, liquor, and a floor that has seen more blood than the ring.",
		q: 4,
		r: 4,
		art: "casino",
		danger: 4,
		sell: 1.15,
		buy: 1.05,
		tags: ["casino"]
	},
	{
		id: "market",
		name: "East stalls",
		blurb: "Chems, ammo, rumors. Everyone is buying. Everyone is watching.",
		q: 5,
		r: 4,
		art: "squat",
		danger: 5,
		sell: 1,
		buy: .8,
		tags: ["market"]
	}
];
var DISTRICT_BY_ID = Object.fromEntries(DISTRICTS.map((d) => [d.id, d]));
var DISTRICT_POS = {
	virgin: {
		x: 0,
		z: 0
	},
	shark: {
		x: 48,
		z: -8
	},
	desperado: {
		x: 96,
		z: 4
	},
	bishop: {
		x: 52,
		z: -42
	},
	mordino: {
		x: -52,
		z: 10
	},
	salvatore: {
		x: -92,
		z: 22
	},
	motel: {
		x: 18,
		z: 58
	},
	stables: {
		x: 110,
		z: 50
	},
	jungle: {
		x: -28,
		z: 84
	},
	wright: {
		x: -78,
		z: 102
	},
	chop: {
		x: 68,
		z: 92
	},
	rail: {
		x: 118,
		z: 112
	},
	market: {
		x: 132,
		z: 26
	},
	golgotha: {
		x: 36,
		z: 156
	}
};
var HOUSING = [
	{
		id: "motel-room",
		name: "Desert Rose room",
		district: "motel",
		kind: "rent",
		rent: 40,
		danger: 1,
		note: "A bed, a lock, and a clerk who does not ask. 40 caps a week."
	},
	{
		id: "shark-suite",
		name: "Shark Club suite",
		district: "shark",
		kind: "rent",
		rent: 160,
		danger: 0,
		note: "Prestige, a bath, and Bishop eyes in the hallway. 160 caps a week."
	},
	{
		id: "wright-bunk",
		name: "Wright bunkhouse",
		district: "wright",
		kind: "rent",
		rent: 15,
		danger: 2,
		note: "A cot and orchard chores. Family will notice if you skip dinner. 15 caps a week."
	},
	{
		id: "jungle-shack",
		name: "Jungle shack",
		district: "jungle",
		kind: "squat",
		rent: 0,
		danger: 8,
		convertSkill: "repair",
		convertTarget: 45,
		note: "Free. The roof is an opinion. Convert it with Repair and days of work."
	},
	{
		id: "chop-loft",
		name: "Chop Shop loft",
		district: "chop",
		kind: "squat",
		rent: 0,
		danger: 6,
		convertSkill: "repair",
		convertTarget: 40,
		note: "Free if you can climb. Mechanics below, raids above. Convert with Repair."
	},
	{
		id: "golgotha-crypt",
		name: "Golgotha crypt",
		district: "golgotha",
		kind: "squat",
		rent: 0,
		danger: 10,
		convertSkill: "outdoorsman",
		convertTarget: 50,
		note: "Free. Glow, graves, and things that hunt at night. Convert with Outdoorsman."
	},
	{
		id: "bishop-room",
		name: "Bishop guest room",
		district: "bishop",
		kind: "rent",
		rent: 80,
		danger: 1,
		requiresGang: "bishops",
		requiresRank: 2,
		note: "Only if the Bishops already own a piece of you. 80 caps a week."
	}
];
var HOUSING_BY_ID = Object.fromEntries(HOUSING.map((h) => [h.id, h]));
var GANGS = [
	{
		id: "mordinos",
		name: "Mordinos",
		turf: "mordino",
		pitch: "Big Jesus Mordino. Little Jesus. Myron cooking Jet in the Stables. The Desperado and the Golden Globes.",
		color: "#8a4a3a",
		head: "Big Jesus Mordino",
		underboss: "Little Jesus Mordino",
		front: "Desperado / Golden Globes",
		credo: "Chems, girls, and a family that smiles when the product moves. Richard Wright died on their Jet. The Wrights have not forgotten.",
		rival: "wrights",
		ranks: [
			"Runner",
			"Soldato",
			"Capo",
			"Underboss",
			"Family"
		]
	},
	{
		id: "wrights",
		name: "Wrights",
		turf: "wright",
		pitch: "Orville Wright. Mrs. Wright. A dead son named Richard. Stills east of town and a last name that still means something.",
		color: "#6b7a52",
		head: "Orville Wright",
		underboss: "Mrs. Wright",
		front: "Wright compound / stills",
		credo: "Moonshine and blood. They want the Mordinos answered for Richard. Honor is a family word until it is a shotgun.",
		rival: "mordinos",
		ranks: [
			"Cousin",
			"Family",
			"Lieutenant",
			"Blood",
			"Wright"
		]
	},
	{
		id: "salvatores",
		name: "Salvatores",
		turf: "salvatore",
		pitch: "Louis Salvatore. Mason at the door. An oxygen tank and a laser pistol the other families cannot buy.",
		color: "#4a5560",
		head: "Louis Salvatore",
		underboss: "Mason",
		front: "Salvatore's Bar",
		credo: "Old Reno. Quiet rooms. Energy weapons from men in vertibirds. Prove you can shut up and Mason might let you hold one.",
		rival: "mordinos",
		ranks: [
			"Soldier",
			"Made",
			"Lieutenant",
			"Right hand",
			"Salvatore"
		]
	},
	{
		id: "bishops",
		name: "Bishops",
		turf: "bishop",
		pitch: "John Bishop. Leslie Anne. Angela on the second-floor rail. The Shark Club owns the mayor.",
		color: "#7a6a48",
		head: "John Bishop",
		underboss: "Leslie Anne Bishop",
		front: "Shark Club",
		credo: "The polite family. Politics with a smile that does not reach the eyes. Work is clean until Mr. Bishop needs a man in NCR dead.",
		rival: "mordinos",
		ranks: [
			"Associate",
			"Made",
			"Lieutenant",
			"Consigliere",
			"Right hand"
		]
	}
];
var GANG_BY_ID = Object.fromEntries(GANGS.map((g) => [g.id, g]));
var CHEMS = {
	jet: {
		name: "Jet",
		street: 50,
		weight: 1
	},
	psycho: {
		name: "Psycho",
		street: 400,
		weight: 1
	},
	buffout: {
		name: "Buffout",
		street: 200,
		weight: 1
	},
	mentats: {
		name: "Mentats",
		street: 200,
		weight: 1
	}
};
var STASH_META = {
	jet: {
		name: "Jet",
		street: 50,
		kind: "chem"
	},
	psycho: {
		name: "Psycho",
		street: 400,
		kind: "chem"
	},
	buffout: {
		name: "Buffout",
		street: 200,
		kind: "chem"
	},
	mentats: {
		name: "Mentats",
		street: 200,
		kind: "chem"
	},
	vodka: {
		name: "Vodka",
		street: 20,
		kind: "habit"
	},
	cigarettes: {
		name: "Cigarettes",
		street: 5,
		kind: "habit"
	},
	marijuana: {
		name: "Marijuana",
		street: 30,
		kind: "habit"
	},
	cocaine: {
		name: "Cocaine",
		street: 80,
		kind: "habit"
	}
};
var STASH_IDS = [
	"jet",
	"psycho",
	"buffout",
	"mentats",
	"vodka",
	"cigarettes",
	"marijuana",
	"cocaine"
];
var BOXING_ORDER = [
	"unsigned",
	"prelim",
	"contender",
	"title",
	"champion"
];
function boxingPurse(rank, fame) {
	return (rank === "champion" ? 800 : rank === "title" ? 400 : rank === "contender" ? 180 : 70) + Math.round(fame * 3);
}
function clockLabel(life) {
	const h = (life.hour % 24 + 24) % 24;
	return `Month ${Math.floor((life.day - 1) / 30) + 1} · Day ${(life.day - 1) % 30 + 1} · ${String(h).padStart(2, "0")}:${String(life.minute ?? 0).padStart(2, "0")}${h >= 20 || h < 6 ? " · night" : ""}`;
}
function isNight(life) {
	const h = (life.hour % 24 + 24) % 24;
	return h >= 20 || h < 6;
}
function lightingOf(life) {
	const night = isNight(life);
	const d = life.district;
	if (d === "golgotha") return night ? {
		penalty: -80,
		label: "Golgotha dark · flare if you packed one (−80%)"
	} : {
		penalty: -50,
		label: "Crypt mouth · bad light (−50%)"
	};
	if (d === "shark" || d === "desperado" || d === "virgin" || d === "mordino" || d === "salvatore") return {
		penalty: -20,
		label: "Smoky floor · medium indoor (−20%)"
	};
	if (d === "jungle" || d === "rail" || d === "chop") return night ? {
		penalty: -40,
		label: "Yard night · new moon (−40%)"
	} : {
		penalty: -10,
		label: "Open yard · light cloud (−10%)"
	};
	if (night) return {
		penalty: -25,
		label: "Street night · crescent (−25%)"
	};
	return {
		penalty: 0,
		label: "Daylight · 0%"
	};
}
function lightingFromSetting(setting, night) {
	if (setting === "crypt") return night ? {
		penalty: -80,
		label: "Golgotha dark · flare if you packed one (−80%)"
	} : {
		penalty: -50,
		label: "Crypt mouth · bad light (−50%)"
	};
	if (setting === "casino" || setting === "motel" || setting === "ring") return {
		penalty: -20,
		label: "Smoky floor · medium indoor (−20%)"
	};
	if (setting === "rail" || setting === "yard") return night ? {
		penalty: -40,
		label: "Yard night · new moon (−40%)"
	} : {
		penalty: -10,
		label: "Open yard · light cloud (−10%)"
	};
	if (setting === "alley") return night ? {
		penalty: -35,
		label: "Alley night (−35%)"
	} : {
		penalty: -10,
		label: "Alley shade (−10%)"
	};
	if (night) return {
		penalty: -25,
		label: "Street night · crescent (−25%)"
	};
	return {
		penalty: 0,
		label: "Daylight · 0%"
	};
}
function emptyStash() {
	return {
		jet: 0,
		psycho: 0,
		buffout: 0,
		mentats: 0,
		vodka: 0,
		cigarettes: 0,
		marijuana: 0,
		cocaine: 0
	};
}
function emptyAngela() {
	return {
		met: false,
		mood: "fresh",
		jetOffer: false,
		slept: false,
		insulted: false,
		lastTalkDay: 0
	};
}
function emptyRep() {
	return {
		mordinos: 0,
		wrights: 0,
		salvatores: 0,
		bishops: 0
	};
}
function newLife(characterId, hpMax) {
	const start = DISTRICT_POS.virgin;
	return {
		characterId,
		day: 1,
		hour: 8,
		minute: 0,
		caps: 220,
		hp: hpMax,
		hpMax,
		heat: 0,
		fame: 0,
		district: "virgin",
		posX: start.x,
		posZ: start.z,
		housingId: null,
		squatProgress: 0,
		gangId: null,
		gangRank: 0,
		gangRep: emptyRep(),
		stash: emptyStash(),
		boxingRank: "unsigned",
		boxingWins: 0,
		boxingLosses: 0,
		nextFightDay: 0,
		trainBonus: 0,
		rentPaidWeek: 0,
		addicted: {},
		lastDose: {},
		hunger: 22,
		thirst: 18,
		fatigue: 12,
		boredom: 28,
		xp: 0,
		dealers: seedDealers(),
		marks: seedMarks(),
		soughtDealer: null,
		soughtMark: null,
		business: null,
		dealing: false,
		lab: false,
		pressureDay: 0,
		rations: 0,
		waters: 0,
		log: ["Virgin Street. New Reno. A hundred thousand souls, and the Strip still wants yours."],
		combat: null,
		sighting: null,
		dialogue: null,
		angela: emptyAngela(),
		dead: false,
		loot: null,
		inspecting: null,
		insideId: null,
		npcMemory: {},
		job: null,
		worldDay: 0,
		fear: 0,
		regard: 0,
		warrant: 0,
		strain: 0,
		tension: 50,
		friction: emptyRep(),
		grudges: {},
		absent: {},
		reprieveMinute: 0
	};
}
var ZONE_LABEL = {
	strip: "The Strip",
	alley: "Side street",
	motel: "Motel row",
	residential: "Walk-ups",
	industrial: "Yards",
	compound: "Family turf",
	wild: "The edge",
	outskirts: "The outskirts"
};
var ZONE_HINT = {
	strip: "Watched. Cops. Safer.",
	alley: "Alleys and side streets. Knives.",
	motel: "Hourly beds. The lot after dark.",
	residential: "Walk-ups, coughs, locked opinions.",
	industrial: "Yards. Raiders after dusk.",
	compound: "Family turf. Knock first.",
	wild: "The city ends. Things start.",
	outskirts: "Motels, shacks, two-bit casinos."
};
function zoneAt(x, z) {
	if (x > 148 && z > -28 && z < 120) return "outskirts";
	if (x < -108 && z > -28 && z < 78) return "outskirts";
	if (z > 138 || x < -15 && z > 72 && x > -48) return "wild";
	if (x < -58 && z > 82) return "compound";
	if (x > 88 && z > 68) return "industrial";
	if (Math.hypot(x - 18, z - 58) < 30) return "motel";
	if (Math.abs(z) < 16 && x > -42 && x < 122) return "strip";
	if (z < -16 && z > -58 && x > 28 && x < 72) return "compound";
	if (x < -40 && z > -12 && z < 42) return "compound";
	if (Math.abs(z) < 44 && x > -88 && x < 148) return "alley";
	return "residential";
}
function dangerOf(zone, night) {
	const table = {
		strip: [1, 2],
		alley: [6, 8],
		motel: [3, 5],
		residential: [2, 4],
		industrial: [5, 7],
		compound: [3, 5],
		wild: [8, 10],
		outskirts: [4, 6]
	};
	return night ? table[zone][1] : table[zone][0];
}
function settingFromZone(zone, night) {
	if (zone === "wild") return "crypt";
	if (zone === "outskirts") return night ? "motel" : "street";
	if (zone === "industrial") return "rail";
	if (zone === "motel") return "motel";
	if (zone === "compound") return night ? "casino" : "street";
	if (zone === "strip") return night ? "casino" : "street";
	if (zone === "alley") return "alley";
	return night ? "alley" : "street";
}
var NAMES = {
	casino: [
		"The Stag",
		"Pink Lady",
		"Atomic Eight",
		"Last Call",
		"Neon Saint",
		"House of Jacks",
		"Silver Tongue",
		"Two-Bit Palace",
		"The Lost Chip",
		"Spur Club",
		"Catclaw Casino"
	],
	motel: [
		"Hourly Palms",
		"Rose Annex",
		"The Flamingo cot",
		"Dust Beds",
		"Vacancy 4",
		"Catclaw Motor",
		"Lucky 8 Courts",
		"East Second beds",
		"Tin Roof Inn"
	],
	tenement: [
		"Cruz Walk-up",
		"12 Virgin stairs",
		"Mrs. Han rooms",
		"Back stair 9",
		"Water-stain flats"
	],
	shop: [
		"Ammo & Teeth",
		"Reno Dry Goods",
		"Second Chance hats",
		"Hubologist pamphlets",
		"NCR postcards"
	],
	bar: [
		"The Long Pour",
		"Mason's stool",
		"Blood & Seltzer",
		"After Hours"
	],
	warehouse: [
		"Stolen Chevys",
		"Boxcar 17",
		"Chop bay",
		"Unmarked crates"
	],
	shack: [
		"Tin roof 3",
		"Fire-barrel lean",
		"Someone's mattress"
	],
	abandoned: [
		"Boarded liquor",
		"Gutted pawn",
		"No-roof walk-up",
		"Condemned 8",
		"The black windows"
	],
	pawn: [
		"Easy Credit",
		"Guns for Teeth",
		"Uncle Lou's"
	],
	ring: ["The Ring"],
	crypt: [
		"Open grave",
		"Wright marker",
		"Glow pit"
	],
	rail: ["Boxcar row", "Switch house"],
	office: ["Bishop books", "Quiet floor"]
};
var RUMOR = {
	casino: ["Tourists at the door. House guns behind the smile.", "A cheat got dragged out last night. The floor was mopped."],
	motel: ["Hourly rates. The lot fills after dark. Working girls hold the porch.", "A pimp named Calico runs the back stairs. He taxes smiles."],
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
	office: ["Polite floor. Politics with a gun in the drawer."]
};
var PEOPLE = {
	casino: ["Dealers, tourists, Bishop eyes.", "Floor men and a bouncer who used to box."],
	motel: ["Working girls on the lot after dusk. Johns in hats. A pimp on the stairs.", "Day clerk, night girls, and a cop who does not look."],
	tenement: ["Families and a junkie on the first landing."],
	shop: ["A clerk and whoever is buying ammo today."],
	bar: ["Made men. Tourists who do not know it yet."],
	warehouse: ["Mechanics. Maybe Salvatore guns in a crate."],
	shack: ["Whoever did not make the Jungle's better shacks."],
	abandoned: ["Nobody who will talk. Something that will."],
	pawn: ["The owner and a shotgun under the counter."],
	ring: ["Palookas, touts, a doctor who bills the loser."],
	crypt: ["Ghouls. Wright mourners if you are unlucky."],
	rail: ["Hobos, runners, a cop who walks the other way."],
	office: ["Bishop secretaries and men in good coats."]
};
function flavorFor(use, abandoned, i) {
	const names = NAMES[use];
	const rumors = RUMOR[use];
	const people = PEOPLE[use];
	return {
		name: abandoned ? NAMES.abandoned[i % NAMES.abandoned.length] ?? "Boarded" : names[i % names.length] ?? use,
		rumor: abandoned ? RUMOR.abandoned[i % RUMOR.abandoned.length] ?? "Empty." : rumors[i % rumors.length] ?? "",
		people: abandoned ? "Rats. Maybe worse." : people[i % people.length] ?? ""
	};
}
function useFromSprite(sprite, neon) {
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
function millLabel(use, abandoned) {
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
	return "Talk to locals";
}
var AMBIENT = {
	strip: {
		day: [
			"A tourist photographs the neon like it is a monument.",
			"A cop leans on a lamp and pretends not to see a dealer.",
			"NCR hats. House smiles. The Strip pretends it is civilized."
		],
		night: [
			"Neon paints the asphalt pink. A drunk argues with a lamp.",
			"A bouncer smokes under the Shark Club awning.",
			"The Strip stays lit. The alleys one block off do not."
		]
	},
	alley: {
		day: ["Jet cough from a stairwell. Somebody sold something they did not own.", "A kid watches you from a fire escape and does not wave."],
		night: [
			"A knife taps a brick. Not for you. Not yet.",
			"The alley smells like Jet and a fight that already happened.",
			"A pimp counts stairs. A girl waits. You keep walking."
		]
	},
	motel: {
		day: ["Desert Rose clerk reads a comic. Vacancy is a lifestyle.", "A john in a hat leaves poorer. The lot is empty until dusk."],
		night: [
			"Girls on the Rose porch. A man on the stairs who wants a cut.",
			"Calico's lot. Laughter, then a door, then quiet.",
			"A cop walks past the motel and looks at the sky instead."
		]
	},
	residential: {
		day: ["Laundry on a line that has seen better decades.", "A radio through a window. Someone cooking something that is not food."],
		night: ["Lights in three windows. The rest are opinions.", "A dog that is not a dog somewhere in the block."]
	},
	industrial: {
		day: ["Wrenches. Stolen Chevys. Names that are not on papers."],
		night: ["A yard light dies. Something uses the dark like a road."]
	},
	compound: {
		day: ["Family boys on a stoop. They know who you are not."],
		night: ["A cigarette on a rooftop. The family is still awake."]
	},
	wild: {
		day: ["The graves keep their own hours."],
		night: ["Something moves that should have stayed buried."]
	},
	outskirts: {
		day: [
			"A vacancy sign buzzes even in daylight. The pool is a rumor.",
			"Two-bit slots chatter through a screen door. Nobody is winning.",
			"Motel clerks watch the road like it owes them money."
		],
		night: [
			"Neon the size of a suitcase. A john argues with a room key.",
			"Catclaw after dark. Music from a tiny casino, then a door slam.",
			"The outskirts keep their lights low and their guns closer."
		]
	}
};
function ambientLine(zone, night, salt) {
	const pool = night ? AMBIENT[zone].night : AMBIENT[zone].day;
	return pool[Math.abs(salt) % pool.length] ?? ZONE_HINT[zone];
}
var KEY_LOCATIONS = [
	{
		id: "virgin",
		name: "Virgin Street",
		blurb: "The Strip. Neon. Safe-ish."
	},
	{
		id: "shark",
		name: "Shark Club",
		blurb: "Bishop money. Angela upstairs."
	},
	{
		id: "desperado",
		name: "Desperado",
		blurb: "Mordino cards and blood."
	},
	{
		id: "motel",
		name: "Desert Rose",
		blurb: "Hourly beds. The lot after dark."
	},
	{
		id: "mordino",
		name: "Golden Globes",
		blurb: "Jet in the walls."
	},
	{
		id: "salvatore",
		name: "Salvatore's Bar",
		blurb: "Old Reno. Quiet guns."
	},
	{
		id: "bishop",
		name: "Bishop offices",
		blurb: "The polite floor."
	},
	{
		id: "stables",
		name: "The Ring",
		blurb: "Boxing purses."
	},
	{
		id: "wright",
		name: "Wright compound",
		blurb: "Stills and a dead son."
	},
	{
		id: "jungle",
		name: "The Jungle",
		blurb: "Shacks the city pretends are not a city."
	},
	{
		id: "market",
		name: "East stalls",
		blurb: "Chems, ammo, rumors."
	},
	{
		id: "rail",
		name: "Rail yard",
		blurb: "Boxcars."
	},
	{
		id: "chop",
		name: "Chop Shop",
		blurb: "Stolen cars, lofts."
	},
	{
		id: "golgotha",
		name: "Golgotha",
		blurb: "Graves."
	}
];
var CITY_POPULATION = 108640;
var LANDMARK = {
	virgin: {
		sprite: "/reno/sprites/neon-casino.webp",
		w: 16,
		h: 9.2,
		neon: true,
		form: "casino"
	},
	shark: {
		sprite: "/reno/sprites/casino-tower.webp",
		w: 10,
		h: 20,
		neon: true,
		form: "tower"
	},
	desperado: {
		sprite: "/reno/sprites/neon-casino.webp",
		w: 15,
		h: 8.6,
		neon: true,
		form: "casino"
	},
	bishop: {
		sprite: "/reno/sprites/apartment.webp",
		w: 10,
		h: 14,
		neon: true,
		form: "step"
	},
	mordino: {
		sprite: "/reno/bar.webp",
		w: 10,
		h: 9,
		neon: true,
		form: "wing"
	},
	salvatore: {
		sprite: "/reno/bar.webp",
		w: 9.2,
		h: 8.4,
		form: "wing"
	},
	motel: {
		sprite: "/reno/sprites/motel.webp",
		w: 12,
		h: 8,
		form: "motel"
	},
	stables: {
		sprite: "/reno/sprites/ring.webp",
		w: 11,
		h: 8,
		form: "box"
	},
	jungle: {
		sprite: "/reno/sprites/shack.webp",
		w: 7,
		h: 6.2,
		form: "shack"
	},
	wright: {
		sprite: "/reno/sprites/motel.webp",
		w: 10,
		h: 8,
		form: "motel"
	},
	chop: {
		sprite: "/reno/sprites/warehouse.webp",
		w: 11,
		h: 8.5,
		form: "shed"
	},
	rail: {
		sprite: "/reno/rail.webp",
		w: 13,
		h: 8,
		form: "shed"
	},
	market: {
		sprite: "/reno/sprites/shop.webp",
		w: 8,
		h: 7,
		form: "wing"
	},
	golgotha: {
		sprite: "/reno/crypt.webp",
		w: 9,
		h: 8,
		form: "box"
	}
};
var CARS = ["/reno/sprites/sedan.webp", "/reno/sprites/coupe.webp"];
function stamp(b, i, force) {
	const zone = zoneAt(b.x, b.z);
	const use = force?.use ?? useFromSprite(b.sprite, b.neon);
	const abandoned = force?.abandoned ?? (use === "abandoned" || !b.district && zone === "alley" && i % 5 === 0 || !b.district && zone === "residential" && i % 13 === 0 || !b.district && zone === "wild" && i % 3 === 0 || !b.district && zone === "outskirts" && i % 7 === 0);
	const flav = flavorFor(abandoned ? "abandoned" : use, abandoned, i);
	return {
		...b,
		name: force?.name ?? b.label ?? flav.name,
		use: abandoned ? "abandoned" : use,
		zone,
		abandoned,
		rumor: force?.rumor ?? flav.rumor,
		people: force?.people ?? flav.people
	};
}
var LANDMARK_LORE = {
	virgin: {
		rumor: "The Strip. Cops walk this curb. Alleys one block off do not.",
		people: "Tourists, dealers at the door, a cop who wants a donut and a bribe."
	},
	shark: {
		rumor: "John Bishop's house. Angela on the second-floor rail. Dress code includes a gun.",
		people: "Bishop bodyguards. Leslie Anne if you are unlucky. Angela if you are pretty or famous."
	},
	desperado: {
		rumor: "Mordino cards. Blood on the felt more often than the Ring.",
		people: "Little Jesus' runners. A bouncer with a shotgun."
	},
	motel: {
		rumor: "Desert Rose. Hourly and weekly. Working girls hold the lot after dark. Calico taxes the stairs.",
		people: "The clerk. The girls. Johns in hats. A pimp who smiles with a 10mm."
	},
	mordino: {
		rumor: "Golden Globes. Jet in the walls. Myron's product.",
		people: "Mordino soldatos and girls who do not work the Rose."
	},
	salvatore: {
		rumor: "Louis Salvatore. Mason at the door. A laser the other families cannot buy.",
		people: "Made men. An oxygen tank. Mason."
	},
	stables: {
		rumor: "The Ring. Purses grow with the months. The doctor bills the loser.",
		people: "Palookas, touts, a card man."
	},
	jungle: {
		rumor: "The city pretends this block is not a city.",
		people: "Squatters. Knives. Nobody who will give a name."
	},
	golgotha: {
		rumor: "Wright stones. Glow. Things that hunt.",
		people: "Mourners by day. Ghouls by night."
	},
	wright: {
		rumor: "Orville's table. Richard is in the ground. The Mordinos put him there.",
		people: "Cousins with shotguns. Mrs. Wright if it is dinner."
	}
};
function mulberry(seed) {
	let a = seed >>> 0;
	return () => {
		a += 1831565813;
		let t = a;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function nearLandmark(x, z, min = 14) {
	return DISTRICTS.some((d) => {
		const p = DISTRICT_POS[d.id];
		const dx = x - p.x;
		const dz = z - p.z;
		return dx * dx + dz * dz < min * min;
	});
}
function onRoad(x, z, roads, pad = 3.2) {
	return roads.some((r) => Math.abs(x - r.x) <= r.w / 2 + pad && Math.abs(z - r.z) <= r.d / 2 + pad);
}
function parkBeside(x, z, roads) {
	const push = (px, pz) => {
		for (let pass = 0; pass < 4; pass++) {
			let moved = false;
			for (const road of roads) if (road.w >= road.d) {
				if (Math.abs(px - road.x) > road.w / 2 + 2) continue;
				if (Math.abs(pz - road.z) > road.d / 2 + 5.5) continue;
				const s = pz >= road.z ? 1 : -1;
				pz = road.z + s * (road.d / 2 + 7.2);
				moved = true;
			} else {
				if (Math.abs(pz - road.z) > road.d / 2 + 2) continue;
				if (Math.abs(px - road.x) > road.w / 2 + 5.5) continue;
				const s = px >= road.x ? 1 : -1;
				px = road.x + s * (road.w / 2 + 7.2);
				moved = true;
			}
			if (!moved) break;
		}
		return {
			x: px,
			z: pz
		};
	};
	const first = push(x, z);
	let dx = first.x - x;
	let dz = first.z - z;
	let dist = Math.hypot(dx, dz);
	if (dist < .8) {
		dx = 0;
		dz = 1;
		dist = 1;
	}
	const clear = 11;
	return dist < clear ? push(x + dx / dist * clear, z + dz / dist * clear) : first;
}
function buildCity() {
	const rand = mulberry(2244);
	const roads = [
		{
			x: 20,
			z: 0,
			w: 280,
			d: 10,
			name: "Virgin Street"
		},
		{
			x: 20,
			z: 58,
			w: 240,
			d: 7,
			name: "Second Street"
		},
		{
			x: 20,
			z: 102,
			w: 240,
			d: 7,
			name: "Wright Road"
		},
		{
			x: 20,
			z: -40,
			w: 200,
			d: 7,
			name: "Bishop Street"
		},
		{
			x: 20,
			z: 156,
			w: 100,
			d: 7,
			name: "Golgotha Road"
		},
		{
			x: 36,
			z: -72,
			w: 160,
			d: 6,
			name: "North Cut"
		},
		{
			x: 0,
			z: 50,
			w: 9,
			d: 250,
			name: "Main"
		},
		{
			x: 48,
			z: 40,
			w: 9,
			d: 230,
			name: "Shark Street"
		},
		{
			x: 96,
			z: 50,
			w: 8,
			d: 220,
			name: "Desperado"
		},
		{
			x: -52,
			z: 50,
			w: 8,
			d: 200,
			name: "Mordino Way"
		},
		{
			x: 132,
			z: 60,
			w: 8,
			d: 160,
			name: "Market Street"
		},
		{
			x: -92,
			z: 50,
			w: 8,
			d: 140,
			name: "Salvatore"
		},
		{
			x: 68,
			z: 92,
			w: 110,
			d: 7,
			name: "Yard Row"
		},
		{
			x: -20,
			z: 28,
			w: 8,
			d: 90,
			name: "Jungle Cut"
		},
		{
			x: 72,
			z: -20,
			w: 8,
			d: 80,
			name: "East Cut"
		},
		{
			x: 178,
			z: 58,
			w: 78,
			d: 6,
			name: "East Second"
		},
		{
			x: 196,
			z: 42,
			w: 6.5,
			d: 112,
			name: "Catclaw"
		},
		{
			x: 176,
			z: 8,
			w: 68,
			d: 5.5,
			name: "Neon Spur"
		},
		{
			x: 188,
			z: 90,
			w: 58,
			d: 5.5,
			name: "Lucky Lane"
		},
		{
			x: -130,
			z: 16,
			w: 6,
			d: 92,
			name: "Dust Road"
		},
		{
			x: -118,
			z: 46,
			w: 58,
			d: 5.5,
			name: "West Lot"
		},
		{
			x: -124,
			z: -8,
			w: 48,
			d: 5.5,
			name: "Tin Row"
		}
	];
	const buildings = DISTRICTS.map((d, i) => {
		const p = DISTRICT_POS[d.id];
		const spot = parkBeside(p.x, p.z, roads);
		const mark = LANDMARK[d.id];
		const lore = LANDMARK_LORE[d.id];
		return stamp({
			id: `land-${d.id}`,
			x: spot.x,
			z: spot.z,
			sprite: mark.sprite,
			width: mark.w,
			height: mark.h,
			depth: Math.min(11, mark.w * .62),
			district: d.id,
			neon: mark.neon,
			label: d.name,
			form: mark.form
		}, i, {
			name: d.name,
			rumor: lore?.rumor,
			people: lore?.people,
			abandoned: false
		});
	});
	const stripSprite = (i) => i % 3 === 0 ? {
		sprite: "/reno/sprites/casino-tower.webp",
		w: 8.2,
		h: 16.4,
		neon: true
	} : {
		sprite: "/reno/sprites/neon-casino.webp",
		w: 13.6,
		h: 7.8,
		neon: true
	};
	const kindFor = (zone, n) => {
		if (zone === "outskirts") {
			const k = Math.abs(n) % 5;
			if (k <= 1) return {
				sprite: "/reno/sprites/neon-casino.webp",
				w: 6.2,
				h: 5.4,
				neon: true
			};
			if (k <= 3) return {
				sprite: "/reno/sprites/motel.webp",
				w: 7.4,
				h: 4.6
			};
			return {
				sprite: "/reno/sprites/shack.webp",
				w: 5.1,
				h: 3.5
			};
		}
		if (zone === "strip") return stripSprite(n);
		if (zone === "wild") return {
			sprite: "/reno/sprites/shack.webp",
			w: 6.2,
			h: 5.2
		};
		if (zone === "industrial") return {
			sprite: "/reno/sprites/warehouse.webp",
			w: 10,
			h: 8
		};
		if (zone === "motel") return {
			sprite: "/reno/sprites/motel.webp",
			w: 9,
			h: 6.6
		};
		if (zone === "compound") return n % 2 === 0 ? {
			sprite: "/reno/sprites/apartment.webp",
			w: 8.4,
			h: 12
		} : {
			sprite: "/reno/sprites/warehouse.webp",
			w: 9.4,
			h: 7.6
		};
		if (zone === "alley") return n % 2 === 0 ? {
			sprite: "/reno/sprites/pawnshop.webp",
			w: 7,
			h: 7.2
		} : {
			sprite: "/reno/sprites/shop.webp",
			w: 6.6,
			h: 6.8
		};
		return n % 2 === 0 ? {
			sprite: "/reno/sprites/tenement.webp",
			w: 7.6,
			h: 10
		} : {
			sprite: "/reno/sprites/apartment.webp",
			w: 8.2,
			h: 12.4
		};
	};
	const formOf = (zone, sprite, i) => {
		if (zone === "outskirts") {
			if (sprite.includes("casino") || sprite.includes("neon")) return "casino";
			if (sprite.includes("motel")) return "motel";
			return "shack";
		}
		if (sprite.includes("casino") || sprite.includes("neon")) return i % 3 === 0 ? "tower" : i % 3 === 1 ? "casino" : "step";
		if (sprite.includes("motel")) return i % 2 === 0 ? "motel" : "wing";
		if (sprite.includes("warehouse") || sprite.includes("rail")) return i % 2 === 0 ? "shed" : "box";
		if (sprite.includes("shack")) return "shack";
		if (sprite.includes("bar")) return i % 2 === 0 ? "wing" : "box";
		if (sprite.includes("shop") || sprite.includes("pawn")) return i % 3 === 0 ? "wing" : i % 3 === 1 ? "step" : "box";
		const k = Math.abs(i) % 4;
		if (k === 0) return "step";
		if (k === 1) return "tower";
		if (k === 2) return "wing";
		return "box";
	};
	let taggedCasino = false;
	let taggedMotel = false;
	const halfOf = (b) => {
		const ns = b.face === "+x" || b.face === "-x";
		const front = b.width;
		const thick = b.depth ?? front * .58;
		return ns ? {
			hw: thick / 2,
			hd: front / 2
		} : {
			hw: front / 2,
			hd: thick / 2
		};
	};
	const hitsPin = (x, z, hw, hd) => DISTRICTS.some((d) => {
		const p = DISTRICT_POS[d.id];
		return Math.abs(x - p.x) < hw + 5.5 && Math.abs(z - p.z) < hd + 5.5;
	});
	const overlaps = (x, z, hw, hd) => {
		if ([
			[x, z],
			[x + hw * .8, z],
			[x - hw * .8, z],
			[x, z + hd * .8],
			[x, z - hd * .8]
		].some(([px, pz]) => onRoad(px, pz, roads, 2.55))) return true;
		if (hitsPin(x, z, hw, hd)) return true;
		return buildings.some((b) => {
			const box = halfOf(b);
			return Math.abs(x - b.x) < box.hw + hw - .35 && Math.abs(z - b.z) < box.hd + hd - .35;
		});
	};
	const blocks = [];
	const WALK = 2.7;
	const horiz = roads.filter((r) => r.w >= r.d && r.w >= 150).map((r) => ({
		at: r.z,
		half: r.d / 2,
		a: r.x - r.w / 2,
		b: r.x + r.w / 2
	})).sort((p, q) => p.at - q.at);
	const vert = roads.filter((r) => r.d > r.w && r.d >= 140).map((r) => ({
		at: r.x,
		half: r.w / 2,
		a: r.z - r.d / 2,
		b: r.z + r.d / 2
	})).sort((p, q) => p.at - q.at);
	const spans = (s, from, to) => s.a <= from + 6 && s.b >= to - 6;
	let n = 0;
	let blockN = 0;
	const place = (x, z, frontage, face, thick) => {
		const ns = face === "+x" || face === "-x";
		const hw = (ns ? thick : frontage) / 2;
		const hd = (ns ? frontage : thick) / 2;
		if (overlaps(x, z, hw, hd)) return;
		const zone = zoneAt(x, z);
		const kind = kindFor(zone, n + Math.round(x + z));
		const fringe = zone === "outskirts";
		let label;
		if (fringe && !taggedCasino && kind.sprite.includes("casino")) {
			label = "Two-Bit";
			taggedCasino = true;
		} else if (fringe && !taggedMotel && kind.sprite.includes("motel")) {
			label = "Catclaw Motor";
			taggedMotel = true;
		}
		buildings.push(stamp({
			id: `b-${n++}`,
			x,
			z,
			sprite: kind.sprite,
			width: frontage * (fringe ? .86 : 1),
			height: kind.h * (fringe ? .92 + rand() * .16 : .78 + rand() * .42),
			depth: thick * (.9 + rand() * .16),
			face,
			form: formOf(zone, kind.sprite, n + Math.round(z)),
			neon: "neon" in kind && Boolean(kind.neon),
			label
		}, n));
	};
	for (let hi = 0; hi < horiz.length - 1; hi++) for (let vi = 0; vi < vert.length - 1; vi++) {
		const south = horiz[hi];
		const north = horiz[hi + 1];
		const west = vert[vi];
		const east = vert[vi + 1];
		if (north.at - south.at < 18 || east.at - west.at < 18) continue;
		if (!spans(south, west.at, east.at) || !spans(north, west.at, east.at)) continue;
		if (!spans(west, south.at, north.at) || !spans(east, south.at, north.at)) continue;
		const innerL = west.at + west.half + WALK;
		const innerR = east.at - east.half - WALK;
		const innerS = south.at + south.half + WALK;
		const innerN = north.at - north.half - WALK;
		const lotW = innerR - innerL;
		const lotD = innerN - innerS;
		if (lotW < 12 || lotD < 12) continue;
		blocks.push({
			id: `block-${blockN++}`,
			x: (innerL + innerR) / 2,
			z: (innerS + innerN) / 2,
			w: lotW,
			d: lotD
		});
		const thick = Math.min(7.6, Math.max(5.6, Math.min(lotW, lotD) * .28));
		const rowX = (z, face) => {
			const count = Math.max(1, Math.floor(lotW / 8.4));
			const step = lotW / count;
			for (let i = 0; i < count; i++) place(innerL + (i + .5) * step, z, Math.max(5, step - .85), face, thick);
		};
		if (lotD >= thick * 2 + 1.2) {
			rowX(innerS + thick / 2, "-z");
			rowX(innerN - thick / 2, "+z");
		}
		if (lotW >= thick * 2 + 1.2 && lotD > thick * 2 + 7) {
			const z0 = innerS + thick + .6;
			const span = innerN - thick - .6 - z0;
			const count = Math.max(1, Math.floor(span / 8.4));
			const step = span / count;
			for (let i = 0; i < count; i++) {
				const z = z0 + (i + .5) * step;
				const frontage = Math.max(5, step - .85);
				place(innerL + thick / 2, z, frontage, "-x", thick);
				place(innerR - thick / 2, z, frontage, "+x", thick);
			}
		}
		const cx0 = innerL + thick + 3;
		const cx1 = innerR - thick - 3;
		const cz0 = innerS + thick + 3;
		const cz1 = innerN - thick - 3;
		if (cx1 - cx0 > 8 && cz1 - cz0 > 8) {
			const nx = Math.min(2, Math.max(1, Math.floor((cx1 - cx0) / 12)));
			const nz = Math.min(2, Math.max(1, Math.floor((cz1 - cz0) / 12)));
			for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) place(cx0 + (i + .5) * (cx1 - cx0) / nx, cz0 + (j + .5) * (cz1 - cz0) / nz, Math.min(9.5, (cx1 - cx0) / nx - 1.2), "+z", thick);
		}
	}
	const majors = roads.filter((r) => Math.max(r.w, r.d) >= 140);
	for (const road of majors) {
		const horizontal = road.w >= road.d;
		const half = horizontal ? road.d / 2 : road.w / 2;
		const thick = 6.4;
		const along0 = (horizontal ? road.x - road.w / 2 : road.z - road.d / 2) + 4;
		const span = (horizontal ? road.x + road.w / 2 : road.z + road.d / 2) - 4 - along0;
		if (span < 16) continue;
		const count = Math.max(1, Math.floor(span / 9));
		const step = span / count;
		for (const sign of [1, -1]) {
			const face = horizontal ? sign > 0 ? "-z" : "+z" : sign > 0 ? "-x" : "+x";
			for (let i = 0; i < count; i++) {
				const t = along0 + (i + .5) * step;
				place(horizontal ? t : road.x + sign * (half + WALK + thick / 2), horizontal ? road.z + sign * (half + WALK + thick / 2) : t, Math.max(5.2, step - .9), face, thick);
			}
		}
	}
	const fringeNames = /* @__PURE__ */ new Set([
		"East Second",
		"Catclaw",
		"Neon Spur",
		"Lucky Lane",
		"Dust Road",
		"West Lot",
		"Tin Row"
	]);
	for (const road of roads) {
		if (!fringeNames.has(road.name)) continue;
		const horizontal = road.w >= road.d;
		const half = horizontal ? road.d / 2 : road.w / 2;
		const thick = 4.15;
		const along0 = (horizontal ? road.x - road.w / 2 : road.z - road.d / 2) + 3;
		const span = (horizontal ? road.x + road.w / 2 : road.z + road.d / 2) - 3 - along0;
		if (span < 12) continue;
		const count = Math.max(2, Math.floor(span / 7.4));
		const step = span / count;
		for (const sign of [1, -1]) {
			const face = horizontal ? sign > 0 ? "-z" : "+z" : sign > 0 ? "-x" : "+x";
			for (let i = 0; i < count; i++) {
				const t = along0 + (i + .5) * step;
				place(horizontal ? t : road.x + sign * (half + WALK + thick / 2), horizontal ? road.z + sign * (half + WALK + thick / 2) : t, Math.min(6.1, Math.max(3.8, step - .8)), face, thick);
			}
		}
	}
	const cars = [];
	const lamps = [];
	let c = 0;
	for (const road of roads) {
		const alongX = road.w >= road.d;
		const length = alongX ? road.w : road.d;
		const count = Math.max(3, Math.round(length / 22));
		for (let i = 0; i < count; i++) {
			const t = (i + .32) / count - .5;
			const alongHalf = alongX ? road.d / 2 : road.w / 2;
			const curb = Math.max(1.4, alongHalf - 1.15);
			const walk = alongHalf + 1.15;
			const side = rand() > .5 ? 1 : -1;
			const x = alongX ? road.x + t * road.w * .9 : road.x + side * curb;
			const z = alongX ? road.z + side * curb : road.z + t * road.d * .9;
			if (nearLandmark(x, z, 9)) continue;
			cars.push({
				id: `car-${c}`,
				x,
				z,
				sprite: CARS[Math.floor(rand() * CARS.length)],
				width: 3.6 + rand() * .7,
				height: 1.8 + rand() * .35,
				yaw: alongX ? side > 0 ? 0 : Math.PI : Math.PI / 2
			});
			lamps.push({
				id: `lamp-${c}`,
				x: alongX ? road.x + t * road.w : road.x + side * walk,
				z: alongX ? road.z + side * walk : road.z + t * road.d,
				sprite: "/reno/sprites/lamp.webp",
				width: 1.4,
				height: 5.8
			});
			c += 1;
		}
	}
	const peds = [];
	let p = 0;
	for (const road of roads) {
		const alongX = road.w >= road.d;
		const length = alongX ? road.w : road.d;
		const count = Math.max(2, Math.round(length / 16));
		for (let i = 0; i < count; i++) {
			const t = (i + .42) / count - .5;
			const walk = (alongX ? road.d / 2 : road.w / 2) + 1.45;
			const side = i % 2 === 0 ? walk : -walk;
			const x = alongX ? road.x + t * road.w * .92 : road.x + side;
			const z = alongX ? road.z + side : road.z + t * road.d * .92;
			const zone = zoneAt(x, z);
			let sprite = "/reno/tokens/ped-man.webp";
			let nightOnly = false;
			if (zone === "strip") sprite = i % 5 === 0 ? "/reno/tokens/cop.webp" : i % 2 === 0 ? "/reno/tokens/ped-woman.webp" : "/reno/tokens/ped-man.webp";
			else if (zone === "alley") {
				sprite = i % 3 === 0 ? "/reno/tokens/junkie.webp" : i % 2 === 0 ? "/reno/tokens/gangster.webp" : "/reno/tokens/ped-man.webp";
				nightOnly = i % 4 === 1;
			} else if (zone === "motel") sprite = i % 3 === 0 ? "/reno/tokens/ped-man.webp" : "/reno/tokens/ped-woman.webp";
			else if (zone === "compound") sprite = i % 2 === 0 ? "/reno/tokens/gangster.webp" : "/reno/tokens/ped-man.webp";
			else if (zone === "outskirts") {
				sprite = i % 5 === 0 ? "/reno/tokens/junkie.webp" : i % 2 === 0 ? "/reno/tokens/ped-woman.webp" : "/reno/tokens/ped-man.webp";
				nightOnly = i % 6 === 1;
			} else if (zone === "industrial" || zone === "wild") {
				sprite = i % 3 === 0 ? "/reno/tokens/junkie.webp" : "/reno/tokens/ped-man.webp";
				nightOnly = zone === "wild";
			} else sprite = i % 2 === 0 ? "/reno/tokens/ped-woman.webp" : "/reno/tokens/ped-man.webp";
			peds.push({
				id: `ped-${p++}`,
				x,
				z,
				sprite,
				phase: rand() * 14,
				axis: alongX ? "z" : "x",
				nightOnly,
				amp: 2.2 + rand() * 2.4
			});
		}
	}
	for (let i = 0; i < 12; i++) peds.push({
		id: `lot-${i}`,
		x: 18 + i % 6 * 2.6 - 6.5,
		z: 58 + Math.floor(i / 6) * 3.4 - 1.6,
		sprite: i === 0 || i === 7 ? "/reno/tokens/gangster.webp" : i % 5 === 0 ? "/reno/tokens/ped-man.webp" : "/reno/tokens/ped-woman.webp",
		phase: i * 1.7,
		axis: i % 2 === 0 ? "x" : "z",
		nightOnly: true,
		amp: 1.4 + i % 3 * .4
	});
	return {
		buildings,
		blocks,
		roads,
		cars,
		lamps,
		peds
	};
}
var CITY = buildCity();
var BUILDING_BY_ID = Object.fromEntries(CITY.buildings.map((b) => [b.id, b]));
function nearestDistrict(x, z) {
	let best = "virgin";
	let bestD = Infinity;
	for (const d of DISTRICTS) {
		const p = DISTRICT_POS[d.id];
		const dx = x - p.x;
		const dz = z - p.z;
		const dist = Math.hypot(dx, dz);
		if (dist < bestD) {
			bestD = dist;
			best = d.id;
		}
	}
	return {
		id: best,
		dist: bestD
	};
}
function hourSky(hour) {
	const h = (hour % 24 + 24) % 24;
	if (h >= 21 || h < 5) return {
		sky: "#010006",
		fog: "#020108",
		sun: .02,
		neon: 1
	};
	if (h < 7) return {
		sky: "#120c14",
		fog: "#100c12",
		sun: .12,
		neon: .9
	};
	if (h < 9) return {
		sky: "#7d8ea0",
		fog: "#8a97a4",
		sun: .7,
		neon: .15
	};
	if (h >= 18 && h < 20) return {
		sky: "#c47a4a",
		fog: "#a86a48",
		sun: .45,
		neon: .55
	};
	if (h >= 20) return {
		sky: "#08060e",
		fog: "#06040c",
		sun: .05,
		neon: 1
	};
	return {
		sky: "#8aa3b0",
		fog: "#93a4ab",
		sun: 1,
		neon: 0
	};
}
var WALK = 2.7;
var TINT = {
	tenement: "#cbb89a",
	shop: "#b7a48c",
	warehouse: "#6e6860",
	casino: "#e2d0aa",
	shack: "#7d5c42",
	motel: "#c8b296",
	bar: "#8d6844",
	crypt: "#6d726c",
	ring: "#8d734c"
};
var NEONS = [
	"#ff4d8d",
	"#5ce1ff",
	"#ffb14a",
	"#e85d4c",
	"#b388ff"
];
function styleOf(sprite) {
	if (sprite.includes("casino") || sprite.includes("neon")) return "casino";
	if (sprite.includes("warehouse") || sprite.includes("rail")) return "warehouse";
	if (sprite.includes("shack")) return "shack";
	if (sprite.includes("motel")) return "motel";
	if (sprite.includes("shop") || sprite.includes("pawn")) return "shop";
	if (sprite.includes("bar")) return "bar";
	if (sprite.includes("crypt")) return "crypt";
	if (sprite.includes("ring")) return "ring";
	return "tenement";
}
function gritColor(style, id) {
	const list = {
		tenement: [
			"#cbb89a",
			"#b89a78",
			"#dcc8a8",
			"#a68468",
			"#8f7358"
		],
		shop: [
			"#b7a48c",
			"#c6b39a",
			"#9c846c"
		],
		warehouse: [
			"#6e6860",
			"#5a564e",
			"#7c7468",
			"#4c5248"
		],
		casino: [
			"#e2d0aa",
			"#f0d8b0",
			"#d4bc96",
			"#c8b48a"
		],
		shack: [
			"#7d5c42",
			"#6a4832",
			"#8e6848",
			"#5a3e2c"
		],
		motel: [
			"#c8b296",
			"#d8c2a6",
			"#b49678",
			"#e4d0b4"
		],
		bar: [
			"#8d6844",
			"#754e32",
			"#a07850"
		],
		crypt: ["#6d726c", "#5e6460"],
		ring: ["#8d734c"]
	}[style] ?? [TINT.tenement];
	let h = 0;
	for (let i = 0; i < id.length; i++) h = h * 33 + id.charCodeAt(i) >>> 0;
	return list[h % list.length];
}
function neonColorOf(b) {
	if (b.district === "shark") return "#ff4d8d";
	if (b.district === "mordino") return "#ffb14a";
	if (b.district === "desperado") return "#ff6a3a";
	if (b.district) return "#5ce1ff";
	let h = 0;
	for (let i = 0; i < b.id.length; i++) h = h + b.id.charCodeAt(i) >>> 0;
	return NEONS[h % NEONS.length];
}
function alongX(road) {
	return road.w >= road.d;
}
function frontBox(ns, span, height, thick) {
	return ns ? [
		thick,
		height,
		span
	] : [
		span,
		height,
		thick
	];
}
function alongFront(ns, w, d, t, y) {
	if (ns) return [
		0,
		y,
		t * d
	];
	return [
		t * w,
		y,
		0
	];
}
function makeFacade() {
	const canvas = document.createElement("canvas");
	canvas.width = 128;
	canvas.height = 128;
	const g = canvas.getContext("2d");
	if (!g) return new CanvasTexture(canvas);
	g.fillStyle = "#f4f1ea";
	g.fillRect(0, 0, 128, 128);
	g.strokeStyle = "#ddd6c8";
	g.lineWidth = 3;
	g.strokeRect(2, 2, 124, 124);
	for (let col = 0; col < 2; col++) for (let row = 0; row < 3; row++) {
		const x = 16 + col * 54;
		const y = 12 + row * 38;
		g.fillStyle = "#14181e";
		g.fillRect(x, y, 30, 22);
		g.fillStyle = "#9fd4ea";
		g.globalAlpha = .45;
		g.fillRect(x + 3, y + 3, 9, 7);
		g.globalAlpha = 1;
	}
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.wrapS = tex.wrapT = RepeatWrapping;
	return tex;
}
function nameTexture(name) {
	const canvas = document.createElement("canvas");
	canvas.width = 1024;
	canvas.height = 160;
	const g = canvas.getContext("2d");
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.wrapS = RepeatWrapping;
	tex.wrapT = ClampToEdgeWrapping;
	if (!g) return tex;
	g.clearRect(0, 0, 1024, 160);
	g.font = "700 78px Impact, Arial Black, Arial, sans-serif";
	g.textAlign = "center";
	g.textBaseline = "middle";
	g.fillStyle = "rgba(12,10,8,0.55)";
	g.fillText(name.toUpperCase(), 516, 86);
	g.fillStyle = "#f4efe2";
	g.fillText(name.toUpperCase(), 512, 78);
	tex.needsUpdate = true;
	return tex;
}
function RoadName({ road, tex }) {
	const horizontal = alongX(road);
	const length = (horizontal ? road.w : road.d) * .9;
	const half = horizontal ? road.d / 2 : road.w / 2;
	const band = Math.min(1.35, Math.max(.9, half * .38));
	const repeatLen = band * (1024 / 160);
	const off = Math.min(half * .38, 1.9);
	const map = (0, import_react.useMemo)(() => {
		const clone = tex.clone();
		clone.wrapS = RepeatWrapping;
		clone.repeat.set(Math.max(1, length / repeatLen), 1);
		clone.needsUpdate = true;
		return clone;
	}, [
		tex,
		length,
		repeatLen
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: [1, -1].map((sign) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		position: [
			road.x + (horizontal ? 0 : sign * off),
			.145,
			road.z + (horizontal ? sign * off : 0)
		],
		"rotation-y": horizontal ? 0 : Math.PI / 2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			"rotation-x": -Math.PI / 2,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [length, band] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				map,
				transparent: true,
				depthWrite: false,
				toneMapped: false
			})]
		})
	}, sign)) });
}
function sidewalkSpans(road) {
	const horizontal = alongX(road);
	const start = horizontal ? road.x - road.w / 2 : road.z - road.d / 2;
	const end = horizontal ? road.x + road.w / 2 : road.z + road.d / 2;
	const gaps = [];
	for (const other of CITY.roads) {
		if (other === road || alongX(other) === horizontal) continue;
		if (horizontal) {
			if (Math.abs(other.z - road.z) > other.d / 2 + road.d / 2 + .4) continue;
			const a = other.x - other.w / 2 - .2;
			const b = other.x + other.w / 2 + .2;
			if (b < start || a > end) continue;
			gaps.push([Math.max(start, a), Math.min(end, b)]);
		} else {
			if (Math.abs(other.x - road.x) > other.w / 2 + road.w / 2 + .4) continue;
			const a = other.z - other.d / 2 - .2;
			const b = other.z + other.d / 2 + .2;
			if (b < start || a > end) continue;
			gaps.push([Math.max(start, a), Math.min(end, b)]);
		}
	}
	gaps.sort((p, q) => p[0] - q[0]);
	const spans = [];
	let cursor = start;
	for (const [a, b] of gaps) {
		if (a - cursor > 2.2) spans.push([cursor, a]);
		cursor = Math.max(cursor, b);
	}
	if (end - cursor > 2.2) spans.push([cursor, end]);
	return {
		spans,
		gaps
	};
}
function facePoint(face, w, d, y, lift) {
	if (face === "-z") return [
		0,
		y,
		-d / 2 - lift
	];
	if (face === "+x") return [
		w / 2 + lift,
		y,
		0
	];
	if (face === "-x") return [
		-w / 2 - lift,
		y,
		0
	];
	return [
		0,
		y,
		d / 2 + lift
	];
}
function Wall({ args, position, rotation, map, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position,
		rotation,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			map,
			color,
			roughness: .9,
			metalness: .03
		})]
	});
}
function FormBody({ form, w, h, d, ns, map, color }) {
	const cap = "#2a2724";
	const span = ns ? d : w;
	const thick = ns ? w : d;
	if (form === "step") {
		const baseH = h * .56;
		const topH = h - baseH;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: [
					w,
					baseH,
					d
				],
				position: [
					0,
					baseH / 2,
					0
				],
				map,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: [
					w * .66,
					topH,
					d * .64
				],
				position: [
					ns ? 0 : w * .05,
					baseH + topH / 2,
					ns ? d * .05 : 0
				],
				map,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: [
					w * .72,
					.16,
					d * .7
				],
				position: [
					ns ? 0 : w * .05,
					h + .06,
					ns ? d * .05 : 0
				],
				color: cap
			})
		] });
	}
	if (form === "tower") {
		const pod = h * .4;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: [
					w,
					pod,
					d
				],
				position: [
					0,
					pod / 2,
					0
				],
				map,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: [
					w * .56,
					h - pod,
					d * .56
				],
				position: [
					0,
					pod + (h - pod) / 2,
					0
				],
				map,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: [
					w * .64,
					.16,
					d * .64
				],
				position: [
					0,
					h + .06,
					0
				],
				color: cap
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					w * .12,
					h + .7,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.05,
					.07,
					1.25,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2c2a28",
					metalness: .55,
					roughness: .4
				})]
			})
		] });
	}
	if (form === "wing") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .62, h, thick),
			position: alongFront(ns, w, d, -.16, h / 2),
			map,
			color
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .4, h * .48, thick * .82),
			position: alongFront(ns, w, d, .28, h * .24),
			map,
			color
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .68, .16, thick + .2),
			position: alongFront(ns, w, d, -.16, h + .06),
			color: cap
		})
	] });
	if (form === "motel") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .76, h * .6, thick * .78),
			position: alongFront(ns, w, d, .1, h * .3),
			map,
			color
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .3, h * .9, thick * .86),
			position: alongFront(ns, w, d, -.34, h * .45),
			map,
			color
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .7, .22, .1),
			position: alongFront(ns, w, d, .08, h * .55),
			color: "#6a5644"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .34, .12, thick * .9),
			position: alongFront(ns, w, d, -.34, h * .92),
			color: cap
		})
	] });
	if (form === "shack") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: [
				w * .9,
				h * .68,
				d * .86
			],
			position: [
				0,
				h * .34,
				0
			],
			map,
			color
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: [
				w * 1.12,
				.14,
				d * 1.08
			],
			position: [
				0,
				h * .7,
				0
			],
			rotation: ns ? [
				.22,
				0,
				0
			] : [
				0,
				0,
				-.2
			],
			color: "#5a4030"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .34, h * .36, thick * .55),
			position: alongFront(ns, w, d, .4, h * .18),
			color: "#6a4c38"
		})
	] });
	if (form === "casino") {
		const podium = h * .58;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: [
					w,
					podium,
					d
				],
				position: [
					0,
					podium / 2,
					0
				],
				map,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: frontBox(ns, span * .2, h * .95, thick * .48),
				position: alongFront(ns, w, d, .38, h * .48),
				map,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
				args: [
					w + .25,
					.14,
					d + .25
				],
				position: [
					0,
					podium + .06,
					0
				],
				color: cap
			})
		] });
	}
	if (form === "shed") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: [
				w,
				h * .74,
				d * 1.05
			],
			position: [
				0,
				h * .37,
				0
			],
			map,
			color
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: [
				w * .42,
				h * .2,
				d * .36
			],
			position: [
				0,
				h * .82,
				0
			],
			map,
			color
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: frontBox(ns, span * .36, h * .22, .7),
			position: alongFront(ns, w, d, 0, h * .12),
			color: "#4a463e"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
			args: [
				w + .2,
				.14,
				d * 1.08
			],
			position: [
				0,
				h * .76,
				0
			],
			color: cap
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
		args: [
			w,
			h,
			d
		],
		position: [
			0,
			h / 2,
			0
		],
		map,
		color
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wall, {
		args: [
			w + .3,
			.18,
			d + .3
		],
		position: [
			0,
			h + .08,
			0
		],
		color: cap
	})] });
}
function Block({ b, facade, night, disabled, onInspect }) {
	const style = styleOf(b.sprite);
	const front = Math.max(3.5, b.width * .96);
	const thick = b.depth ?? (style === "warehouse" || style === "motel" ? Math.max(5.2, front * .62) : Math.max(4.2, front * .52));
	const ns = b.face === "+x" || b.face === "-x";
	const w = ns ? thick : front;
	const h = Math.max(2.8, b.height * .78);
	const d = ns ? front : thick;
	const face = b.face ?? "+z";
	const form = b.form ?? (style === "motel" ? "motel" : style === "shack" ? "shack" : style === "casino" ? "casino" : "box");
	const map = (0, import_react.useMemo)(() => {
		const clone = facade.clone();
		clone.wrapS = clone.wrapT = RepeatWrapping;
		clone.repeat.set(Math.max(1, w / 3.4), Math.max(1, h / 2.6));
		clone.needsUpdate = true;
		return clone;
	}, [
		facade,
		w,
		h
	]);
	const neon = style === "casino" || style === "bar" || Boolean(b.neon);
	const neonColor = neonColorOf(b);
	const color = gritColor(style, b.id);
	const inspect = (e) => {
		if (disabled) return;
		e.stopPropagation();
		onInspect(b.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			b.x,
			0,
			b.z
		],
		onClick: inspect,
		onPointerOver: () => {
			if (!disabled) document.body.style.cursor = "pointer";
		},
		onPointerOut: () => {
			document.body.style.cursor = "";
		},
		children: [
			style === "ring" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					h * .28,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					w * .42,
					w * .48,
					h * .55,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color,
					roughness: .82
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					h * .55 + .12,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					w + .35,
					.22,
					d + .35
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2e2b28",
					roughness: .95
				})]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormBody, {
				form,
				w,
				h,
				d,
				ns,
				map,
				color
			}),
			(form === "step" || form === "tower") && h > 8 ? [
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: ns ? [
					0,
					1.6 + i * (h / 4.4),
					d / 2 + .16
				] : [
					w / 2 + .16,
					1.6 + i * (h / 4.4),
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					Math.min(w * .7, 1.6),
					.08,
					.55
				] : [
					.55,
					.08,
					Math.min(d * .7, 1.6)
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3a3632",
					roughness: .8
				})]
			}, i)) : null,
			h > 12 && form === "tower" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					w * .22,
					h + .55,
					-d * .08
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.32,
					.38,
					.9,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#5a544c",
					roughness: .7,
					metalness: .25
				})]
			}) : null,
			style !== "shack" && style !== "crypt" && style !== "ring" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, Math.min(1.15, h * .22), .05),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.12,
					Math.min(2.2, h * .38),
					front * .7
				] : [
					front * .7,
					Math.min(2.2, h * .38),
					.12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#14181c",
					roughness: .35,
					metalness: .15
				})]
			}) : null,
			style === "shop" || style === "bar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, Math.min(h * .36, 2.3), .42),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.85,
					.12,
					front * .8
				] : [
					front * .8,
					.12,
					.85
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: style === "bar" ? "#6e2420" : "#5c3a28",
					roughness: .6
				})]
			}) : null,
			form === "motel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: alongFront(ns, w, d, -.34, h + .35),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.12,
					.28,
					.9
				] : [
					.9,
					.28,
					.12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ff5a7a",
					emissive: "#ff5a7a",
					emissiveIntensity: night ? 1.7 : .15
				})]
			}) : null,
			neon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, Math.min(h * .7, h - .4), .08),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.12,
					form === "casino" && h < 7 ? .28 : .4,
					front * (h < 7 ? .55 : .68)
				] : [
					front * (h < 7 ? .55 : .68),
					form === "casino" && h < 7 ? .28 : .4,
					.12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: neonColor,
					emissive: neonColor,
					emissiveIntensity: night ? 1.8 : .25,
					roughness: .35
				})]
			}) : null,
			b.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
				position: [
					0,
					h + 1.6,
					0
				],
				center: true,
				distanceFactor: 48,
				style: { pointerEvents: "none" },
				zIndexRange: [4, 0],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-sm bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-fg uppercase whitespace-nowrap",
					children: b.label
				})
			}) : null
		]
	});
}
function CityBlocks({ night, disabled, onInspect, onWalk }) {
	const asphalt = useTexture("/reno/tex/asphalt.webp");
	const dirt = useTexture("/reno/tex/dirt.webp");
	asphalt.wrapS = asphalt.wrapT = RepeatWrapping;
	dirt.wrapS = dirt.wrapT = RepeatWrapping;
	asphalt.colorSpace = SRGBColorSpace;
	dirt.colorSpace = SRGBColorSpace;
	asphalt.repeat.set(48, 40);
	dirt.repeat.set(18, 14);
	const facade = (0, import_react.useMemo)(() => makeFacade(), []);
	const names = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const road of CITY.roads) if (!map.has(road.name)) map.set(road.name, nameTexture(road.name));
		return map;
	}, []);
	const walk = (e) => {
		if (disabled) return;
		e.stopPropagation();
		onWalk(e.point.x, e.point.z);
	};
	const carColors = [
		"#3a3e44",
		"#6a3030",
		"#2c3a34",
		"#4a4038",
		"#1e242c"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			"rotation-x": -Math.PI / 2,
			position: [
				20,
				-.06,
				40
			],
			onPointerDown: walk,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [580, 520] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: dirt,
				roughness: 1
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			"rotation-x": -Math.PI / 2,
			position: [
				22,
				0,
				32
			],
			onPointerDown: walk,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [250, 250] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#3c3934",
				roughness: .96
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			"rotation-x": -Math.PI / 2,
			position: [
				36,
				.015,
				156
			],
			onPointerDown: walk,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [26, 20] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#3c342c",
				roughness: 1
			})]
		}),
		CITY.blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				block.x,
				.02,
				block.z
			],
			onPointerDown: walk,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				block.w,
				.05,
				block.d
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#534e47",
				roughness: .96
			})]
		}, block.id)),
		CITY.roads.map((road) => {
			const horizontal = alongX(road);
			const half = horizontal ? road.d / 2 : road.w / 2;
			const side = half + WALK / 2 - .12;
			const { spans, gaps } = sidewalkSpans(road);
			const yWalk = horizontal ? .07 : .082;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						road.x,
						.05,
						road.z
					],
					onPointerDown: walk,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						road.w,
						.1,
						road.d
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: asphalt,
						color: "#5a5a58",
						roughness: .94,
						metalness: .04
					})]
				}),
				spans.map(([a, b], i) => {
					const len = b - a;
					const mid = (a + b) / 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: horizontal ? [
								mid,
								yWalk,
								road.z + side
							] : [
								road.x + side,
								yWalk,
								mid
							],
							onPointerDown: walk,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: horizontal ? [
								len,
								.12,
								WALK
							] : [
								WALK,
								.12,
								len
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#d4cfc4",
								roughness: .88
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: horizontal ? [
								mid,
								yWalk,
								road.z - side
							] : [
								road.x - side,
								yWalk,
								mid
							],
							onPointerDown: walk,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: horizontal ? [
								len,
								.12,
								WALK
							] : [
								WALK,
								.12,
								len
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#d4cfc4",
								roughness: .88
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: horizontal ? [
								mid,
								.09,
								road.z + half - .04
							] : [
								road.x + half - .04,
								.09,
								mid
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: horizontal ? [
								len,
								.16,
								.22
							] : [
								.22,
								.16,
								len
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#ece7dc",
								roughness: .78
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: horizontal ? [
								mid,
								.09,
								road.z - half + .04
							] : [
								road.x - half + .04,
								.09,
								mid
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: horizontal ? [
								len,
								.16,
								.22
							] : [
								.22,
								.16,
								len
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#ece7dc",
								roughness: .78
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: horizontal ? [
								mid,
								.115,
								road.z
							] : [
								road.x,
								.115,
								mid
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: horizontal ? [
								len * .92,
								.02,
								.12
							] : [
								.12,
								.02,
								len * .92
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#c6a24a" })]
						})
					] }, `span-${i}`);
				}),
				gaps.flatMap(([a, b]) => {
					const stripes = [];
					if (Math.min(2.15, (b - a) / 2 - .55) < .7) return stripes;
					const across = Math.min(half * .95, 3.4);
					for (const inward of [1, -1]) {
						const edge = inward > 0 ? a : b;
						for (let s = 0; s < 3; s++) {
							const along = edge + inward * (.42 + s * .62);
							if (along <= a + .2 || along >= b - .2) continue;
							stripes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
								position: horizontal ? [
									along,
									.125,
									road.z
								] : [
									road.x,
									.125,
									along
								],
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: horizontal ? [
									.34,
									.02,
									across
								] : [
									across,
									.02,
									.34
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#d9d3c6" })]
							}, `${road.name}-${a}-${inward}-${s}`));
						}
					}
					return stripes;
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoadName, {
					road,
					tex: names.get(road.name)
				})
			] }, `${road.name}-${road.x}-${road.z}`);
		}),
		CITY.buildings.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			b,
			facade,
			night,
			disabled,
			onInspect
		}, b.id)),
		CITY.cars.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				c.x,
				.12,
				c.z
			],
			"rotation-y": c.yaw ?? 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.32,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.55,
					.42,
					3.35
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: carColors[i % carColors.length],
					metalness: .45,
					roughness: .42
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.68,
					-.15
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.35,
					.36,
					1.55
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#141820",
					metalness: .2,
					roughness: .28
				})]
			})]
		}, c.id)),
		CITY.lamps.map((lamp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				lamp.x,
				0,
				lamp.z
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						2.35,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.07,
						.1,
						4.7,
						6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2a2926",
						metalness: .55,
						roughness: .4
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.55,
						4.55,
						0
					],
					"rotation-z": Math.PI / 2,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.05,
						.05,
						1.1,
						5
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2a2926",
						metalness: .55,
						roughness: .4
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						1.05,
						4.35,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.18,
						8,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#ffe1b0",
						emissive: "#ffb46a",
						emissiveIntensity: night ? 2.4 : .08
					})]
				})
			]
		}, lamp.id)),
		night ? CITY.buildings.filter((b) => b.neon).slice(0, 14).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				b.x,
				Math.max(3, b.height * .45),
				b.z + 2
			],
			color: neonColorOf(b),
			intensity: b.district ? 18 : 9,
			distance: b.district ? 28 : 16,
			decay: 2
		}, `neon-${b.id}`)) : null
	] });
}
var cache = /* @__PURE__ */ new Map();
/** Punch the magenta plate off a painted sprite so it stands as a cutout. */
function cutoutTexture$1(source, key) {
	const hit = cache.get(key);
	if (hit) return hit;
	const image = source.image;
	const w = image.width || 0;
	const h = image.height || 0;
	if (w < 8 || h < 8) return source;
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (!ctx) return source;
	ctx.drawImage(image, 0, 0, w, h);
	const img = ctx.getImageData(0, 0, w, h);
	const d = img.data;
	for (let i = 0; i < d.length; i += 4) {
		const r = d[i] ?? 0;
		const g = d[i + 1] ?? 0;
		const b = d[i + 2] ?? 0;
		if (!(g < 105 && r > 145 && b > 85 && r - g > 70 && b - g > 35 && r > b * .65)) continue;
		const strength = Math.min(r - g, b - g);
		const alpha = strength > 90 ? 0 : Math.max(0, 255 - strength * 4);
		d[i + 3] = Math.min(d[i + 3] ?? 255, alpha);
	}
	ctx.putImageData(img, 0, 0);
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.needsUpdate = true;
	cache.set(key, tex);
	return tex;
}
var DIRS = [
	[1, 0],
	[1, -1],
	[0, -1],
	[-1, 0],
	[-1, 1],
	[0, 1]
];
function axialDistance(aq, ar, bq, br) {
	return (Math.abs(aq - bq) + Math.abs(aq + ar - bq - br) + Math.abs(ar - br)) / 2;
}
function hexKey(q, r) {
	return `${q},${r}`;
}
function hexNeighbors(q, r) {
	return DIRS.map(([dq, dr]) => ({
		q: q + dq,
		r: r + dr
	}));
}
var HEX_METERS = 3.35;
/** Cube-round so a world point lands on one hex, not a seam. */
function axialRound(q, r) {
	const x = q;
	const z = r;
	const y = -x - z;
	let rx = Math.round(x);
	let ry = Math.round(y);
	let rz = Math.round(z);
	const xDiff = Math.abs(rx - x);
	const yDiff = Math.abs(ry - y);
	const zDiff = Math.abs(rz - z);
	if (xDiff > yDiff && xDiff > zDiff) rx = -ry - rz;
	else if (yDiff > zDiff) ry = -rx - rz;
	else rz = -rx - ry;
	return {
		q: rx,
		r: rz
	};
}
function worldToHex(x, z, ox, oz, size = HEX_METERS) {
	const dx = x - ox;
	const fr = (z - oz) / (size * 1.5);
	return axialRound((dx / size - Math.sqrt(3) / 2 * fr) / Math.sqrt(3), fr);
}
function hexToWorld(q, r, ox, oz, size = HEX_METERS) {
	const p = hexToPixel(q, r, size);
	return {
		x: ox + p.x,
		z: oz + p.y
	};
}
function hexToPixel(q, r, size) {
	return {
		x: size * (Math.sqrt(3) * q + Math.sqrt(3) / 2 * r),
		y: size * (1.5 * r)
	};
}
function cellsInRadius(radius) {
	const cells = [];
	for (let q = -radius; q <= radius; q++) for (let r = -radius; r <= radius; r++) if (axialDistance(0, 0, q, r) <= radius) cells.push({
		q,
		r,
		kind: "open"
	});
	return cells;
}
var SCENES = {
	street: "/reno/scenes/strip.webp",
	alley: "/reno/scenes/alley.webp",
	casino: "/reno/scenes/casino.webp",
	yard: "/reno/scenes/strip.webp",
	crypt: "/reno/scenes/crypt.webp",
	ring: "/reno/scenes/strip.webp",
	rail: "/reno/rail.webp",
	motel: "/reno/motel.webp"
};
function hash(q, r, salt) {
	let n = q * 73856093 ^ r * 19349663 ^ salt * 83492791;
	n = Math.imul(n ^ n >>> 16, 2246822507);
	return (n >>> 0) / 4294967296;
}
function decorate(cells, setting, radius) {
	const byKey = new Map(cells.map((c) => [hexKey(c.q, c.r), c]));
	const setKind = (q, r, kind) => {
		const cell = byKey.get(hexKey(q, r));
		if (cell && !(q === 0 && r === 0)) cell.kind = kind;
	};
	if (setting === "alley") {
		for (const c of cells) if (Math.abs(c.r) >= 2) setKind(c.q, c.r, "wall");
		else if (Math.abs(c.q) === radius && Math.abs(c.r) < 2) setKind(c.q, c.r, "exit");
	} else if (setting === "casino") for (const c of cells) {
		if (hash(c.q, c.r, 3) > .78 && axialDistance(0, 0, c.q, c.r) >= 2) setKind(c.q, c.r, "cover");
		if (axialDistance(0, 0, c.q, c.r) === radius && hash(c.q, c.r, 9) > .45) setKind(c.q, c.r, "wall");
	}
	else if (setting === "rail") for (const c of cells) {
		if (c.r === -2 || c.r === 3) setKind(c.q, c.r, "wall");
		if (hash(c.q, c.r, 5) > .82) setKind(c.q, c.r, "cover");
	}
	else if (setting === "crypt") for (const c of cells) {
		if (hash(c.q, c.r, 7) > .72 && axialDistance(0, 0, c.q, c.r) >= 2) setKind(c.q, c.r, "wall");
		if (hash(c.q, c.r, 11) > .85) setKind(c.q, c.r, "cover");
	}
	else if (setting === "yard" || setting === "motel") for (const c of cells) {
		if (hash(c.q, c.r, 13) > .8) setKind(c.q, c.r, "cover");
		if (hash(c.q, c.r, 17) > .9) setKind(c.q, c.r, "wall");
	}
	else if (setting === "ring") {
		for (const c of cells) if (axialDistance(0, 0, c.q, c.r) === radius) setKind(c.q, c.r, "wall");
	} else for (const c of cells) if (hash(c.q, c.r, 19) > .84) setKind(c.q, c.r, "cover");
	for (const c of cells) {
		if (c.kind === "wall") continue;
		if (setting === "ring") continue;
		if (axialDistance(0, 0, c.q, c.r) === radius) c.kind = "exit";
	}
}
function ringHexes(radius) {
	const out = [];
	let q = radius;
	let r = 0;
	for (const [dq, dr] of DIRS) for (let i = 0; i < radius; i++) {
		out.push({
			q,
			r
		});
		q += dq;
		r += dr;
	}
	return out;
}
function generateEncounter(opts) {
	const radius = opts.radius ?? (opts.setting === "ring" ? 2 : opts.setting === "alley" ? 5 : 6);
	const cells = cellsInRadius(radius);
	decorate(cells, opts.setting, radius);
	const walkable = cells.filter((c) => c.kind !== "wall");
	const walkSet = new Set(walkable.map((c) => hexKey(c.q, c.r)));
	const player = {
		q: 0,
		r: 0
	};
	const dist = opts.surprise ? 2 + Math.floor(Math.random() * 2) : 4 + Math.floor(Math.random() * 3);
	const ring = ringHexes(Math.min(radius - 1, dist)).filter((h) => walkSet.has(hexKey(h.q, h.r)));
	const foes = [];
	const used = /* @__PURE__ */ new Set([hexKey(0, 0)]);
	const pool = ring.length ? ring : walkable.filter((c) => !(c.q === 0 && c.r === 0)).map((c) => ({
		q: c.q,
		r: c.r
	}));
	for (let i = 0; i < opts.foeCount; i++) {
		const pick = pool[(i * 5 + 3) % pool.length];
		let q = pick.q;
		let r = pick.r;
		if (used.has(hexKey(q, r))) {
			const alt = pool.find((h) => !used.has(hexKey(h.q, h.r)));
			if (alt) {
				q = alt.q;
				r = alt.r;
			}
		}
		used.add(hexKey(q, r));
		foes.push({
			q,
			r
		});
	}
	const nightScene = opts.night && (opts.setting === "street" || opts.setting === "alley") ? "/reno/scenes/night.webp" : SCENES[opts.setting];
	return {
		map: {
			setting: opts.setting,
			radius,
			cells,
			scene: nightScene
		},
		player,
		foes
	};
}
function cellAt(board, q, r) {
	return board.cells.find((c) => c.q === q && c.r === r);
}
function isWalkable(board, q, r) {
	const cell = cellAt(board, q, r);
	return Boolean(cell && cell.kind !== "wall");
}
function isExit(board, q, r) {
	return cellAt(board, q, r)?.kind === "exit";
}
function stepToward(board, fromQ, fromR, toQ, toR, blocked) {
	return hexNeighbors(fromQ, fromR).filter((n) => isWalkable(board, n.q, n.r) && !blocked.has(hexKey(n.q, n.r))).sort((a, b) => axialDistance(a.q, a.r, toQ, toR) - axialDistance(b.q, b.r, toQ, toR) || a.q - b.q)[0] ?? null;
}
function nearestExit(board, q, r) {
	const exits = board.cells.filter((c) => c.kind === "exit");
	if (!exits.length) return {
		q,
		r
	};
	return exits.reduce((best, c) => axialDistance(q, r, c.q, c.r) < axialDistance(q, r, best.q, best.r) ? c : best);
}
var P = DISTRICT_POS;
function at(id, dx, dz) {
	return {
		x: P[id].x + dx,
		z: P[id].z + dz
	};
}
var SOULS = [
	{
		id: "inez",
		name: "Inez Marlow",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("motel", -6, 8),
		post: at("motel", 2, -2)
	},
	{
		id: "han",
		name: "Mrs. Han",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("virgin", -4, 10),
		post: at("virgin", 3, 2)
	},
	{
		id: "paulie",
		name: "Paulie Dunn",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("shark", 6, 4),
		post: at("virgin", 8, -1)
	},
	{
		id: "june",
		name: "June Cobb",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("market", 4, 8),
		post: at("market", -2, 1)
	},
	{
		id: "hector",
		name: "Hector Ruiz",
		allegiance: "citizen",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("chop", -8, 6),
		post: at("chop", 3, -2)
	},
	{
		id: "lila",
		name: "Lila Boone",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("desperado", 5, 7),
		post: at("desperado", -1, 1)
	},
	{
		id: "sam",
		name: "Sam Iver",
		allegiance: "citizen",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("rail", -6, 4),
		post: at("rail", 2, -3)
	},
	{
		id: "ada",
		name: "Ada Quinn",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("bishop", 4, 8),
		post: at("bishop", -2, 1)
	},
	{
		id: "rosa",
		name: "Rosa Minh",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("virgin", 10, 12),
		post: at("market", -6, 3)
	},
	{
		id: "fran",
		name: "Fran Holt",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("virgin", -8, -4),
		post: at("shark", -3, 2)
	},
	{
		id: "ed",
		name: "Ed Pike",
		allegiance: "citizen",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("motel", 7, -5),
		post: at("motel", -1, 3),
		night: true
	},
	{
		id: "nell",
		name: "Nell Voss",
		allegiance: "citizen",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("jungle", 5, -4),
		post: at("stables", -4, 2)
	},
	{
		id: "cass",
		name: "Cass Fel",
		allegiance: "independent",
		kind: "dealer",
		sprite: "/reno/tokens/junkie.webp",
		home: at("market", -3, -6),
		post: at("market", 2, 4),
		night: true
	},
	{
		id: "ned",
		name: "Ned Curry",
		allegiance: "independent",
		kind: "punk",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("stables", 6, 3),
		post: at("stables", -2, -1)
	},
	{
		id: "ivo",
		name: "Ivo Lane",
		allegiance: "independent",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("market", 2, -4),
		post: at("bishop", 6, 3)
	},
	{
		id: "cal",
		name: "Cal Dreg",
		allegiance: "independent",
		kind: "junkie",
		sprite: "/reno/tokens/junkie.webp",
		home: at("mordino", 5, 6),
		post: at("mordino", -2, -3),
		night: true
	},
	{
		id: "nix",
		name: "Nix Harlow",
		allegiance: "independent",
		kind: "pimp",
		sprite: "/reno/tokens/gangster.webp",
		home: at("motel", -4, 5),
		post: at("motel", 3, 2),
		night: true
	},
	{
		id: "sable",
		name: "Sable Ott",
		allegiance: "independent",
		kind: "merc",
		sprite: "/reno/tokens/gangster.webp",
		home: at("chop", 4, -5),
		post: at("rail", -5, 2)
	},
	{
		id: "red",
		name: "Red Miller",
		allegiance: "independent",
		kind: "cheat",
		sprite: "/reno/tokens/gangster.webp",
		home: at("virgin", 4, -6),
		post: at("desperado", 2, 2),
		night: true
	},
	{
		id: "otto",
		name: "Otto Vann",
		allegiance: "independent",
		kind: "dealer",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("market", -5, 2),
		post: at("market", 1, -2)
	},
	{
		id: "vin",
		name: "Vinnie Mora",
		allegiance: "family",
		gang: "mordinos",
		watch: "wrights",
		kind: "mordino",
		sprite: "/reno/tokens/gangster.webp",
		home: at("mordino", -2, 2),
		post: at("mordino", 4, -2),
		blade: true
	},
	{
		id: "rae",
		name: "Rae Mordino",
		allegiance: "family",
		gang: "mordinos",
		watch: "bishops",
		kind: "mordino",
		sprite: "/reno/tokens/gangster.webp",
		home: at("mordino", 3, 4),
		post: at("desperado", -4, 1),
		blade: true
	},
	{
		id: "clete",
		name: "Clete Wright",
		allegiance: "family",
		gang: "wrights",
		watch: "mordinos",
		kind: "wright",
		sprite: "/reno/tokens/gangster.webp",
		home: at("wright", 2, -2),
		post: at("wright", -3, 3),
		blade: true
	},
	{
		id: "bug",
		name: "Junebug Wright",
		allegiance: "family",
		gang: "wrights",
		watch: "mordinos",
		kind: "wright",
		sprite: "/reno/tokens/gangster.webp",
		home: at("jungle", -3, 2),
		post: at("wright", 4, 1),
		blade: true
	},
	{
		id: "donnie",
		name: "Donnie Glass",
		allegiance: "family",
		gang: "salvatores",
		watch: "mordinos",
		kind: "salvatore",
		sprite: "/reno/tokens/gangster.webp",
		home: at("salvatore", 2, 2),
		post: at("salvatore", -3, -1),
		blade: true
	},
	{
		id: "pia",
		name: "Pia Salvatore",
		allegiance: "family",
		gang: "salvatores",
		watch: "bishops",
		kind: "salvatore",
		sprite: "/reno/tokens/gangster.webp",
		home: at("salvatore", -2, 4),
		post: at("salvatore", 3, 1),
		blade: true
	},
	{
		id: "harlan",
		name: "Harlan Crowe",
		allegiance: "family",
		gang: "bishops",
		watch: "mordinos",
		kind: "bishop",
		sprite: "/reno/tokens/gangster.webp",
		home: at("bishop", -2, 2),
		post: at("shark", 2, -2),
		blade: true
	},
	{
		id: "mickey",
		name: "Mickey Shaw",
		allegiance: "family",
		gang: "bishops",
		watch: "salvatores",
		kind: "bishop",
		sprite: "/reno/tokens/gangster.webp",
		home: at("shark", -3, 3),
		post: at("bishop", 3, -1),
		blade: true
	},
	{
		id: "lang",
		name: "Officer Lang",
		allegiance: "law",
		kind: "cop",
		sprite: "/reno/tokens/cop.webp",
		home: at("virgin", -2, 6),
		post: at("virgin", 6, -2)
	},
	{
		id: "keene",
		name: "Officer Keene",
		allegiance: "law",
		kind: "cop",
		sprite: "/reno/tokens/cop.webp",
		home: at("shark", 3, 5),
		post: at("desperado", -2, 2)
	},
	{
		id: "dodd",
		name: "Sgt. Dodd",
		allegiance: "law",
		kind: "cop",
		sprite: "/reno/tokens/cop.webp",
		home: at("desperado", 4, -4),
		post: at("virgin", -6, 1),
		night: true
	},
	{
		id: "moss",
		name: "Deputy Moss",
		allegiance: "law",
		kind: "cop",
		sprite: "/reno/tokens/cop.webp",
		home: at("market", 6, 5),
		post: at("market", -3, -2)
	},
	{
		id: "cough",
		name: "The Cough",
		allegiance: "wild",
		kind: "ghoul",
		sprite: "/reno/tokens/junkie.webp",
		home: at("golgotha", -4, 2),
		post: at("golgotha", 3, -2)
	},
	{
		id: "shallow",
		name: "Shallow",
		allegiance: "wild",
		kind: "ghoul",
		sprite: "/reno/tokens/junkie.webp",
		home: at("golgotha", 2, 5),
		post: at("golgotha", -3, 1)
	},
	{
		id: "glow",
		name: "Old Light",
		allegiance: "wild",
		kind: "mutant",
		sprite: "/reno/tokens/junkie.webp",
		home: at("golgotha", 5, -3),
		post: at("golgotha", -1, 4)
	}
];
var SOUL_BY_ID = Object.fromEntries(SOULS.map((s) => [s.id, s]));
var EMPTY_FRICTION = () => ({
	mordinos: 0,
	wrights: 0,
	salvatores: 0,
	bishops: 0
});
function clockMinute(life) {
	return life.day * 1440 + life.hour * 60 + (life.minute ?? 0);
}
function ensureCity(life) {
	life.fear = life.fear ?? 0;
	life.regard = life.regard ?? 0;
	life.warrant = life.warrant ?? 0;
	life.strain = life.strain ?? 0;
	life.tension = life.tension ?? 50;
	life.friction = {
		...EMPTY_FRICTION(),
		...life.friction ?? {}
	};
	life.grudges = { ...life.grudges ?? {} };
	life.absent = { ...life.absent ?? {} };
	life.reprieveMinute = life.reprieveMinute ?? 0;
	return life;
}
function ringColor(soul) {
	if (soul.allegiance === "citizen") return "#d9d0c1";
	if (soul.allegiance === "independent") return "#e0b15a";
	if (soul.allegiance === "law") return "#7eb6e0";
	if (soul.allegiance === "wild") return "#c47a62";
	if (soul.gang) return GANG_BY_ID[soul.gang].color;
	return "#b9a48a";
}
function allegianceLabel(soul) {
	if (soul.allegiance === "citizen") return "citizen";
	if (soul.allegiance === "independent") return "independent";
	if (soul.allegiance === "law") return "police";
	if (soul.allegiance === "wild") return "the edge";
	if (soul.gang) return GANG_BY_ID[soul.gang].name;
	return "family";
}
function nightHour(hour) {
	const h = (hour % 24 + 24) % 24;
	return h >= 20 || h < 6;
}
function dist$1(ax, az, bx, bz) {
	return Math.hypot(ax - bx, az - bz);
}
function isRival(a, b) {
	if (!a || !b || a === b) return false;
	return GANG_BY_ID[a].rival === b || GANG_BY_ID[b].rival === a;
}
function borderPoint(soul) {
	const watch = soul.watch ?? (soul.gang ? GANG_BY_ID[soul.gang].rival : void 0);
	if (!soul.gang || !watch) return soul.post;
	const home = P[GANG_BY_ID[soul.gang].turf];
	const there = P[GANG_BY_ID[watch].turf];
	return {
		x: (home.x + there.x) / 2,
		z: (home.z + there.z) / 2
	};
}
function soulGoal(soul, life, playerX, playerZ) {
	const night = nightHour(life.hour);
	const beat = (soul.night ? night : !night) ? soul.post : soul.home;
	const g = life.grudges?.[soul.id] ?? 0;
	const fear = life.fear ?? 0;
	const warrant = life.warrant ?? 0;
	const tension = life.tension ?? 0;
	const friction = soul.gang ? life.friction?.[soul.gang] ?? 0 : 0;
	if (soul.allegiance === "citizen") {
		if (fear >= 18 && dist$1(beat.x, beat.z, playerX, playerZ) < 18) {
			const dx = beat.x - playerX;
			const dz = beat.z - playerZ;
			const len = Math.hypot(dx, dz) || 1;
			return {
				x: playerX + dx / len * 16,
				z: playerZ + dz / len * 16
			};
		}
		return beat;
	}
	if (soul.allegiance === "wild") return beat;
	if (soul.allegiance === "law") {
		if (warrant >= 16) return {
			x: playerX,
			z: playerZ
		};
		return beat;
	}
	if (soul.allegiance === "independent") {
		if (fear >= 55) return soul.home;
		if (g >= 18) return {
			x: playerX,
			z: playerZ
		};
		return beat;
	}
	if (soul.blade && (friction >= 18 || g >= 18)) return {
		x: playerX,
		z: playerZ
	};
	if (soul.blade && tension >= 48) return borderPoint(soul);
	return beat;
}
function troubleOf(soul, life, distance) {
	const night = nightHour(life.hour);
	if (distance > (soul.allegiance === "wild" ? night ? 8 : 5.2 : 6.6)) return null;
	if (clockMinute(life) < (life.reprieveMinute ?? 0)) return null;
	const g = life.grudges?.[soul.id] ?? 0;
	if (soul.allegiance === "citizen") return null;
	if (soul.allegiance === "wild") return `${soul.name} was already in the ground here. You walked into it.`;
	if (soul.allegiance === "law") {
		if ((life.warrant ?? 0) < 32) return null;
		return `${soul.name} has had your warrant long enough to cross town. The file finally has a face.`;
	}
	if (soul.allegiance === "independent") {
		if (g < 36) return null;
		return `${soul.name} kept the slight. It took this long for them to come stand in front of you.`;
	}
	if (!soul.blade) return null;
	if (g >= 36) return `${soul.name} came for the name you made on ${soul.gang ? GANG_BY_ID[soul.gang].name : "their"} block.`;
	if ((soul.gang ? life.friction?.[soul.gang] ?? 0 : 0) >= 34 && life.gangId !== soul.gang) return `${soul.name} is not here for a rumor. ${soul.gang ? GANG_BY_ID[soul.gang].name : "The family"} let the heat sit, then walked.`;
	return null;
}
function feudNear(life, playerX, playerZ, spots) {
	if ((life.tension ?? 0) < 48) return null;
	if (clockMinute(life) < (life.reprieveMinute ?? 0)) return null;
	const blades = SOULS.filter((s) => s.blade && s.gang && !(life.absent && life.day < (life.absent[s.id] ?? 0)));
	let best = null;
	for (let i = 0; i < blades.length; i++) for (let j = i + 1; j < blades.length; j++) {
		const a = blades[i];
		const b = blades[j];
		if (!isRival(a.gang, b.gang)) continue;
		const pa = spots.get(a.id);
		const pb = spots.get(b.id);
		if (!pa || !pb) continue;
		const d = dist$1(pa.x, pa.z, pb.x, pb.z);
		if (d > 9) continue;
		if (!best || d < best.d) best = {
			a,
			b,
			d
		};
	}
	if (!best) return null;
	const pa = spots.get(best.a.id);
	const pb = spots.get(best.b.id);
	const x = (pa.x + pb.x) / 2;
	const z = (pa.z + pb.z) / 2;
	if (dist$1(playerX, playerZ, x, z) > 13) return null;
	const gangA = best.a.gang;
	const gangB = best.b.gang;
	const side = (g) => blades.filter((s) => s.gang === g).slice(0, 3);
	let foes;
	let allies;
	if (life.gangId === gangA) {
		allies = side(gangA);
		foes = side(gangB);
	} else if (life.gangId === gangB) {
		allies = side(gangB);
		foes = side(gangA);
	} else {
		const fa = life.friction?.[gangA] ?? 0;
		const fb = life.friction?.[gangB] ?? 0;
		foes = fa >= fb ? side(gangA) : side(gangB);
		allies = fa >= fb ? side(gangB) : side(gangA);
		if (Math.abs(fa - fb) < 8) {
			foes = [...side(gangA).slice(0, 2), ...side(gangB).slice(0, 2)];
			allies = [];
		}
	}
	return {
		reason: `${GANG_BY_ID[gangA].name} and ${GANG_BY_ID[gangB].name} were already closing. You walked into their war, not a dice roll.`,
		foes,
		allies,
		x,
		z
	};
}
function claimSlot(board, q, r, used) {
	const radius = board.radius;
	const pulled = axialDistance(0, 0, q, r) > radius - 1 ? pullToward(q, r, radius - 1) : {
		q,
		r
	};
	const start = isWalkable(board, pulled.q, pulled.r) && !used.has(hexKey(pulled.q, pulled.r)) ? pulled : {
		q: 0,
		r: 0
	};
	if (isWalkable(board, start.q, start.r) && !used.has(hexKey(start.q, start.r)) && !(start.q === 0 && start.r === 0 && used.has("0,0"))) return start;
	for (let rad = 0; rad <= radius; rad++) for (let dq = -rad; dq <= rad; dq++) for (let dr = -rad; dr <= rad; dr++) {
		if (axialDistance(0, 0, dq, dr) !== rad) continue;
		const key = hexKey(dq, dr);
		if (used.has(key) || !isWalkable(board, dq, dr)) continue;
		return {
			q: dq,
			r: dr
		};
	}
	return {
		q: 0,
		r: 0
	};
}
function pullToward(q, r, max) {
	const d = axialDistance(0, 0, q, r) || 1;
	if (d <= max) return {
		q,
		r
	};
	const scale = max / d;
	return axialRound(q * scale, r * scale);
}
function fightRadius(originX, originZ, bodies, count) {
	let span = 0;
	for (const b of bodies) {
		const h = worldToHex(b.x, b.z, originX, originZ, HEX_METERS);
		span = Math.max(span, axialDistance(0, 0, h.q, h.r));
	}
	const byBodies = 3 + Math.ceil(count / 2);
	return Math.max(4, Math.min(7, Math.max(span + 1, byBodies)));
}
function dist(ax, az, bx, bz) {
	return Math.hypot(ax - bx, az - bz);
}
function StreetCrowd({ lifeRef, player, pausedRef, hiddenRef, onContact, onNear }) {
	const group = (0, import_react.useRef)(null);
	const pos = (0, import_react.useRef)({});
	const lock = (0, import_react.useRef)(0);
	const acc = (0, import_react.useRef)(0);
	const nearAcc = (0, import_react.useRef)(0);
	const manSrc = useTexture("/reno/tokens/ped-man.webp");
	const womanSrc = useTexture("/reno/tokens/ped-woman.webp");
	const copSrc = useTexture("/reno/tokens/cop.webp");
	const junkieSrc = useTexture("/reno/tokens/junkie.webp");
	const gangsterSrc = useTexture("/reno/tokens/gangster.webp");
	const man = (0, import_react.useMemo)(() => cutoutTexture$1(manSrc, "ped-man"), [manSrc]);
	const woman = (0, import_react.useMemo)(() => cutoutTexture$1(womanSrc, "ped-woman"), [womanSrc]);
	const cop = (0, import_react.useMemo)(() => cutoutTexture$1(copSrc, "ped-cop"), [copSrc]);
	const junkie = (0, import_react.useMemo)(() => cutoutTexture$1(junkieSrc, "ped-junkie"), [junkieSrc]);
	const gangster = (0, import_react.useMemo)(() => cutoutTexture$1(gangsterSrc, "ped-gangster"), [gangsterSrc]);
	const mapFor = (url) => {
		if (url.includes("woman")) return woman;
		if (url.includes("cop")) return cop;
		if (url.includes("junkie")) return junkie;
		if (url.includes("gangster")) return gangster;
		return man;
	};
	useFrame((_, raw) => {
		const dt = Math.min(raw, .1);
		const life = lifeRef.current;
		const paused = pausedRef.current;
		const px = player.current.x;
		const pz = player.current.z;
		const spots = /* @__PURE__ */ new Map();
		const g = group.current;
		SOULS.forEach((soul, i) => {
			const gone = (life.absent?.[soul.id] ?? 0) > life.day;
			const child = g?.children[i];
			if (gone) {
				if (child) child.visible = false;
				return;
			}
			if (hiddenRef.current.has(soul.id)) {
				if (child) child.visible = false;
				return;
			}
			let cur = pos.current[soul.id];
			const goal = soulGoal(soul, life, px, pz);
			if (!cur) cur = {
				x: soul.home.x,
				z: soul.home.z
			};
			const chasing = dist(goal.x, goal.z, px, pz) < 2.2 && soul.allegiance !== "citizen";
			const dx = goal.x - cur.x;
			const dz = goal.z - cur.z;
			const d = Math.hypot(dx, dz);
			if (!paused && d > (chasing ? 4.6 : .35)) {
				const step = Math.min(d - (chasing ? 4.4 : 0), (soul.allegiance === "law" || soul.blade ? 3.1 : 2.4) * dt);
				if (step > 0) {
					cur.x += dx / d * step;
					cur.z += dz / d * step;
				}
			}
			pos.current[soul.id] = cur;
			spots.set(soul.id, cur);
			if (child) {
				child.visible = true;
				child.position.set(cur.x, 0, cur.z);
				const bob = paused ? 0 : Math.sin(performance.now() / 280 + i) * .04;
				const sprite = child.children[1];
				if (sprite) sprite.position.y = 1.15 + bob;
			}
		});
		acc.current += dt;
		if (!paused && acc.current > .45 && performance.now() > lock.current && !life.insideId) {
			acc.current = 0;
			const hit = pickContact(life, px, pz, spots);
			if (hit) {
				lock.current = performance.now() + 8e3;
				onContact(hit);
			}
		}
		nearAcc.current += dt;
		if (nearAcc.current > .35) {
			nearAcc.current = 0;
			let best = null;
			for (const soul of SOULS) {
				const s = spots.get(soul.id);
				if (!s) continue;
				const d = dist(px, pz, s.x, s.z);
				if (d < 12 && (!best || d < best.d)) best = {
					soul,
					d
				};
			}
			onNear(best ? `${best.soul.name} · ${allegianceLabel(best.soul)}` : "Citizens, independents, families, police. Nobody here is a random token.");
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: group,
		children: SOULS.map((soul) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				soul.home.x,
				0,
				soul.home.z
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				"rotation-x": -Math.PI / 2,
				position: [
					0,
					.08,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.55, 16] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: ringColor(soul),
					transparent: true,
					opacity: .9,
					depthWrite: false
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
				position: [
					0,
					1.15,
					0
				],
				scale: [
					.95,
					1.9,
					1
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
					map: mapFor(soul.sprite),
					transparent: true,
					alphaTest: .35,
					depthWrite: false
				})
			})]
		}, soul.id))
	});
}
function pickContact(life, px, pz, spots) {
	const toBody = (soul) => {
		const s = spots.get(soul.id);
		return {
			id: soul.id,
			name: soul.name,
			kind: soul.kind,
			x: s.x,
			z: s.z
		};
	};
	for (const soul of SOULS) {
		const s = spots.get(soul.id);
		if (!s) continue;
		const why = troubleOf(soul, life, dist(px, pz, s.x, s.z));
		if (!why) continue;
		const allies = SOULS.filter((a) => {
			if (!life.gangId || a.gang !== life.gangId || !a.blade) return false;
			const p = spots.get(a.id);
			return p ? dist(px, pz, p.x, p.z) < 14 : false;
		}).map(toBody);
		return {
			x: px,
			z: pz,
			reason: why,
			surprise: soul.allegiance === "wild",
			cause: "hunt",
			foes: [toBody(soul)],
			allies
		};
	}
	const feud = feudNear(life, px, pz, spots);
	if (!feud) return null;
	return {
		x: px,
		z: pz,
		reason: feud.reason,
		surprise: false,
		cause: "feud",
		foes: feud.foes.map(toBody),
		allies: feud.allies.map(toBody)
	};
}
function reachableFrom(board, q, r, steps, blocked) {
	const out = /* @__PURE__ */ new Set();
	const queue = [{
		q,
		r,
		d: 0
	}];
	const seen = /* @__PURE__ */ new Set([`${q},${r}`]);
	const dirs = [
		[1, 0],
		[1, -1],
		[0, -1],
		[-1, 0],
		[-1, 1],
		[0, 1]
	];
	while (queue.length) {
		const cur = queue.shift();
		if (cur.d > 0) out.add(`${cur.q},${cur.r}`);
		if (cur.d >= steps) continue;
		for (const [dq, dr] of dirs) {
			const nq = cur.q + dq;
			const nr = cur.r + dr;
			const key = `${nq},${nr}`;
			if (seen.has(key) || blocked.has(key) || !isWalkable(board, nq, nr)) continue;
			seen.add(key);
			queue.push({
				q: nq,
				r: nr,
				d: cur.d + 1
			});
		}
	}
	return out;
}
function skillKey(item) {
	const s = item?.skill;
	if (s === "unarmed") return "unarmed";
	if (s === "meleeWeapons") return "melee";
	return "guns";
}
function damageExpr(item) {
	if (!item) return "1d4+MD";
	const formatted = formatDamage(item, "pnp");
	if (!formatted || formatted === "—" || formatted === "none") return "1d4+MD";
	if (formatted.includes("ammo") && !/^\d/.test(formatted)) return "2d8+4";
	return formatted.replace(/[^0-9dMD+\-]/gi, "") || "1d6+MD";
}
function skillTotal(character, id) {
	return derive(character).skills[id]?.total ?? 0;
}
function burstShots(item) {
	if (!item?.apB) return 0;
	if (!item.mag) return 3;
	if (item.mag >= 100) return 10;
	if (item.mag >= 50) return 8;
	if (item.mag >= 20) return 5;
	return 3;
}
function fastShotAp(base, fast) {
	if (base == null) return null;
	return fast ? Math.max(1, base - 1) : base;
}
function playerCombatant(character, opts) {
	const d = derive(character);
	const loadout = ensureLoadout(character.loadout);
	const right = stackItem(loadout, loadout.right);
	const left = stackItem(loadout, loadout.left);
	const fists = getItem("fists");
	const boxing = opts?.boxing ?? false;
	const gloveItem = loadout.pack.find((s) => s.itemId === "plated-boxing") ?? loadout.pack.find((s) => s.itemId === "boxing-gloves");
	const gloves = gloveItem ? getItem(gloveItem.itemId) : getItem("fists");
	const gunHand = (right && skillKey(right) === "guns" ? right : null) ?? (left && skillKey(left) === "guns" ? left : null);
	const weapon = boxing ? gloves ?? fists : gunHand ?? right ?? left ?? fists;
	const ws = boxing ? "unarmed" : skillKey(weapon);
	const unarmed = skillTotal(character, "unarmed") + (opts?.trainBonus ?? 0);
	const melee = skillTotal(character, "meleeWeapons");
	const gunSkill = weapon?.skill === "bigGuns" ? skillTotal(character, "bigGuns") : weapon?.skill === "energyWeapons" ? skillTotal(character, "energyWeapons") : weapon?.skill === "throwing" ? skillTotal(character, "throwing") : skillTotal(character, "smallGuns");
	const traits = character.traits ?? [];
	const perks = character.perks ?? [];
	const fast = traits.includes("fastShot") && ws === "guns";
	const bof = perks.includes("bonusRateOfFire") && ws === "guns";
	const apS = boxing ? 3 : weapon?.apS ?? 3;
	const apT = boxing ? 4 : weapon?.apT ?? (weapon?.apS != null ? weapon.apS + 1 : 4);
	const apB = boxing ? null : weapon?.apB ?? null;
	const mag = boxing ? 0 : weapon?.mag ?? 0;
	const shotAp = Math.max(1, (fastShotAp(apS, fast) ?? 3) - (bof ? 1 : 0));
	const hth = perks.includes("bonusHthDamage") && (ws === "unarmed" || ws === "melee");
	const ranged = perks.includes("bonusRangedDamage") && ws === "guns";
	const baseAc = boxing ? d.special.AG : d.ac;
	return {
		id: "player",
		name: character.name.trim() || "You",
		player: true,
		hp: opts?.hp ?? d.hp,
		hpMax: d.hp,
		ap: d.ap,
		apMax: d.ap,
		ac: baseAc,
		baseAc,
		leftoverAc: 0,
		dt: boxing ? 0 : d.gearDt,
		dr: boxing ? 0 : d.gearDr,
		sequence: d.sequence,
		pe: d.special.PE,
		st: d.special.STR,
		en: d.special.EN,
		lk: d.special.LK,
		unarmed,
		melee,
		guns: gunSkill,
		md: d.meleeDamage + (hth ? 2 : 0) + (ranged ? 2 : 0),
		crit: d.criticalChance,
		finesse: traits.includes("finesse"),
		fastShot: fast,
		nightPerson: traits.includes("nightPerson"),
		weaponName: weapon?.name ?? "Fists and Feet",
		weaponId: weapon?.id ?? "fists",
		armorId: "",
		weaponSkill: ws,
		dmg: boxing ? damageExpr(gloves ?? fists) : damageExpr(weapon),
		apCost: shotAp,
		apAimed: fast ? null : apT,
		apBurst: fastShotAp(apB, fast),
		burstShots: burstShots(weapon),
		weaponRange: boxing ? 1 : Math.max(1, weapon?.rng ?? 1),
		minSt: weapon?.minSt ?? 1,
		weaponWeight: weapon?.weight ?? 0,
		mag,
		loaded: mag,
		stance: "standing",
		down: false,
		cover: 0,
		crippled: {},
		hexQ: 0,
		hexR: 0,
		kind: "player",
		side: "player",
		fled: false
	};
}
var FOES = {
	junkie: {
		id: "junkie",
		name: "Jet junkie",
		hp: 18,
		ap: 7,
		ac: 6,
		dt: 0,
		dr: 0,
		sequence: 8,
		unarmed: 45,
		melee: 35,
		guns: 20,
		md: 1,
		crit: 4,
		weaponId: "switchblade"
	},
	tough: {
		id: "tough",
		name: "Street tough",
		hp: 28,
		ap: 8,
		ac: 8,
		dt: 0,
		dr: 20,
		sequence: 10,
		unarmed: 50,
		melee: 45,
		guns: 40,
		md: 2,
		crit: 5,
		weaponId: "10mm-pistol"
	},
	cop: {
		id: "cop",
		name: "Reno cop",
		hp: 32,
		ap: 8,
		ac: 10,
		dt: 2,
		dr: 25,
		sequence: 12,
		unarmed: 40,
		melee: 35,
		guns: 55,
		md: 1,
		crit: 5,
		weaponId: "pump-shotgun"
	},
	mordino: {
		id: "mordino",
		name: "Little Jesus' runner",
		hp: 26,
		ap: 8,
		ac: 8,
		dt: 0,
		dr: 20,
		sequence: 10,
		unarmed: 40,
		melee: 40,
		guns: 45,
		md: 1,
		crit: 5,
		weaponId: "9mm-beretta"
	},
	wright: {
		id: "wright",
		name: "Wright cousin",
		hp: 30,
		ap: 8,
		ac: 7,
		dt: 0,
		dr: 15,
		sequence: 8,
		unarmed: 55,
		melee: 50,
		guns: 30,
		md: 3,
		crit: 5,
		weaponId: "slugger"
	},
	salvatore: {
		id: "salvatore",
		name: "Mason's soldier",
		hp: 34,
		ap: 8,
		ac: 10,
		dt: 2,
		dr: 25,
		sequence: 12,
		unarmed: 35,
		melee: 40,
		guns: 60,
		md: 1,
		crit: 6,
		weaponId: "wattz-1000"
	},
	bishop: {
		id: "bishop",
		name: "Bishop bodyguard",
		hp: 36,
		ap: 9,
		ac: 12,
		dt: 2,
		dr: 30,
		sequence: 14,
		unarmed: 45,
		melee: 40,
		guns: 55,
		md: 2,
		crit: 6,
		weaponId: "colt-45"
	},
	ghoul: {
		id: "ghoul",
		name: "Golgotha ghoul",
		hp: 40,
		ap: 7,
		ac: 6,
		dt: 2,
		dr: 10,
		sequence: 6,
		unarmed: 50,
		melee: 45,
		guns: 10,
		md: 3,
		crit: 4,
		weaponId: "shovel"
	},
	mutant: {
		id: "mutant",
		name: "Yard mutant",
		hp: 70,
		ap: 8,
		ac: 8,
		dt: 4,
		dr: 30,
		sequence: 8,
		unarmed: 60,
		melee: 65,
		guns: 40,
		md: 6,
		crit: 4,
		weaponId: "sledgehammer"
	},
	palooka: {
		id: "palooka",
		name: "Palooka Pete",
		hp: 24,
		ap: 8,
		ac: 6,
		dt: 0,
		dr: 0,
		sequence: 10,
		unarmed: 45,
		melee: 20,
		guns: 5,
		md: 2,
		crit: 4,
		weaponId: "boxing-gloves"
	},
	slag: {
		id: "slag",
		name: "Kid Slag",
		hp: 32,
		ap: 9,
		ac: 8,
		dt: 0,
		dr: 0,
		sequence: 12,
		unarmed: 55,
		melee: 20,
		guns: 5,
		md: 3,
		crit: 5,
		weaponId: "boxing-gloves"
	},
	moe: {
		id: "moe",
		name: "Iron Moe",
		hp: 44,
		ap: 9,
		ac: 9,
		dt: 0,
		dr: 0,
		sequence: 12,
		unarmed: 65,
		melee: 25,
		guns: 5,
		md: 4,
		crit: 6,
		weaponId: "plated-boxing"
	},
	juicer: {
		id: "juicer",
		name: "The Juicer",
		hp: 56,
		ap: 10,
		ac: 10,
		dt: 0,
		dr: 0,
		sequence: 14,
		unarmed: 75,
		melee: 30,
		guns: 5,
		md: 5,
		crit: 8,
		weaponId: "plated-boxing"
	},
	drunk: {
		id: "drunk",
		name: "Strip drunk",
		hp: 20,
		ap: 7,
		ac: 5,
		dt: 0,
		dr: 0,
		sequence: 6,
		unarmed: 35,
		melee: 30,
		guns: 15,
		md: 1,
		crit: 3,
		weaponId: "switchblade"
	},
	tourist: {
		id: "tourist",
		name: "NCR tourist",
		hp: 16,
		ap: 7,
		ac: 5,
		dt: 0,
		dr: 0,
		sequence: 8,
		unarmed: 20,
		melee: 15,
		guns: 25,
		md: 1,
		crit: 4,
		weaponId: "10mm-pistol"
	},
	pimp: {
		id: "pimp",
		name: "Calico's man",
		hp: 30,
		ap: 8,
		ac: 8,
		dt: 0,
		dr: 15,
		sequence: 10,
		unarmed: 40,
		melee: 40,
		guns: 50,
		md: 2,
		crit: 5,
		weaponId: "10mm-pistol"
	},
	dealer: {
		id: "dealer",
		name: "Alley dealer",
		hp: 22,
		ap: 8,
		ac: 7,
		dt: 0,
		dr: 10,
		sequence: 10,
		unarmed: 35,
		melee: 40,
		guns: 30,
		md: 1,
		crit: 5,
		weaponId: "switchblade"
	},
	punk: {
		id: "punk",
		name: "Virgin punk",
		hp: 24,
		ap: 8,
		ac: 6,
		dt: 0,
		dr: 10,
		sequence: 10,
		unarmed: 45,
		melee: 40,
		guns: 20,
		md: 2,
		crit: 4,
		weaponId: "switchblade"
	},
	raider: {
		id: "raider",
		name: "Yard raider",
		hp: 34,
		ap: 8,
		ac: 8,
		dt: 2,
		dr: 20,
		sequence: 10,
		unarmed: 40,
		melee: 45,
		guns: 50,
		md: 2,
		crit: 5,
		weaponId: "pump-shotgun"
	},
	merc: {
		id: "merc",
		name: "Hired gun",
		hp: 32,
		ap: 9,
		ac: 10,
		dt: 2,
		dr: 25,
		sequence: 12,
		unarmed: 35,
		melee: 35,
		guns: 60,
		md: 2,
		crit: 6,
		weaponId: "colt-45"
	},
	creep: {
		id: "creep",
		name: "Alley creep",
		hp: 22,
		ap: 8,
		ac: 6,
		dt: 0,
		dr: 0,
		sequence: 8,
		unarmed: 40,
		melee: 45,
		guns: 10,
		md: 2,
		crit: 4,
		weaponId: "switchblade"
	},
	cheat: {
		id: "cheat",
		name: "Card cheat",
		hp: 18,
		ap: 8,
		ac: 6,
		dt: 0,
		dr: 0,
		sequence: 10,
		unarmed: 30,
		melee: 35,
		guns: 35,
		md: 1,
		crit: 6,
		weaponId: "9mm-beretta"
	},
	john: {
		id: "john",
		name: "Nervous john",
		hp: 20,
		ap: 7,
		ac: 6,
		dt: 0,
		dr: 0,
		sequence: 8,
		unarmed: 25,
		melee: 20,
		guns: 30,
		md: 1,
		crit: 4,
		weaponId: "10mm-pistol"
	},
	bouncer: {
		id: "bouncer",
		name: "Casino bouncer",
		hp: 38,
		ap: 8,
		ac: 10,
		dt: 2,
		dr: 20,
		sequence: 10,
		unarmed: 60,
		melee: 50,
		guns: 30,
		md: 3,
		crit: 5,
		weaponId: "slugger"
	}
};
function kitArmor(dt, dr) {
	if (dt >= 5) return "combat-armor";
	if (dt >= 4) return "metal-armor";
	if (dt >= 2) return "leather-armor";
	if (dr >= 15) return "leather-jacket";
	return "";
}
function combatantFromFoe(template) {
	const weapon = getItem(template.weaponId);
	const mag = weapon?.mag ?? 0;
	const pe = template.pe ?? Math.round(template.sequence / 2);
	return {
		id: template.id,
		name: template.name,
		player: false,
		side: "foe",
		hp: template.hp,
		hpMax: template.hp,
		ap: template.ap,
		apMax: template.ap,
		ac: template.ac,
		baseAc: template.ac,
		leftoverAc: 0,
		dt: template.dt,
		dr: template.dr,
		sequence: template.sequence,
		pe,
		st: template.st ?? Math.max(4, weapon?.minSt ?? 4),
		en: template.en ?? 5,
		lk: template.lk ?? Math.max(2, Math.round(template.crit / 2)),
		unarmed: template.unarmed,
		melee: template.melee,
		guns: template.guns,
		md: template.md,
		crit: template.crit,
		finesse: false,
		fastShot: false,
		nightPerson: false,
		weaponName: weapon?.name ?? template.weaponId,
		weaponId: template.weaponId,
		armorId: kitArmor(template.dt, template.dr),
		weaponSkill: skillKey(weapon),
		dmg: damageExpr(weapon),
		apCost: weapon?.apS ?? 3,
		apAimed: weapon?.apT ?? (weapon?.apS != null ? weapon.apS + 1 : 4),
		apBurst: weapon?.apB ?? null,
		burstShots: burstShots(weapon),
		weaponRange: Math.max(1, weapon?.rng ?? 1),
		minSt: weapon?.minSt ?? 1,
		weaponWeight: weapon?.weight ?? 1,
		mag,
		loaded: mag,
		stance: "standing",
		down: false,
		fled: false,
		cover: 0,
		crippled: {},
		hexQ: 0,
		hexR: 0,
		kind: template.id
	};
}
function boxingFoe(rank) {
	const foe = combatantFromFoe(FOES[rank === "champion" ? "juicer" : rank === "title" ? "moe" : rank === "contender" ? "slag" : "palooka"]);
	foe.weaponSkill = "unarmed";
	foe.weaponRange = 1;
	foe.apBurst = null;
	return foe;
}
var FOE_TOKEN = {
	player: "/reno/tokens/player.webp",
	junkie: "/reno/tokens/junkie.webp",
	cop: "/reno/tokens/cop.webp",
	tough: "/reno/tokens/gangster.webp",
	mordino: "/reno/tokens/gangster.webp",
	wright: "/reno/tokens/gangster.webp",
	salvatore: "/reno/tokens/gangster.webp",
	bishop: "/reno/tokens/gangster.webp",
	pimp: "/reno/tokens/gangster.webp",
	dealer: "/reno/tokens/junkie.webp",
	punk: "/reno/tokens/gangster.webp",
	raider: "/reno/tokens/gangster.webp",
	merc: "/reno/tokens/cop.webp",
	creep: "/reno/tokens/junkie.webp",
	cheat: "/reno/tokens/gangster.webp",
	john: "/reno/tokens/ped-man.webp",
	bouncer: "/reno/tokens/gangster.webp",
	drunk: "/reno/tokens/ped-man.webp",
	tourist: "/reno/tokens/ped-man.webp",
	ghoul: "/reno/tokens/junkie.webp",
	mutant: "/reno/tokens/gangster.webp",
	palooka: "/reno/tokens/ped-man.webp",
	slag: "/reno/tokens/ped-man.webp",
	moe: "/reno/tokens/ped-man.webp",
	juicer: "/reno/tokens/ped-man.webp"
};
function d100() {
	const a = /* @__PURE__ */ new Uint32Array(1);
	crypto.getRandomValues(a);
	return a[0] % 100 + 1;
}
function dN(sides) {
	const a = /* @__PURE__ */ new Uint32Array(1);
	crypto.getRandomValues(a);
	return a[0] % sides + 1;
}
function rollExpr(expr, meleeDamage = 0) {
	const parts = expr.replace(/\s/g, "").replace(/MD/gi, String(meleeDamage)).split(/(?=[+-])/).filter(Boolean);
	let total = 0;
	for (const part of parts) {
		const sign = part.startsWith("-") ? -1 : 1;
		const body = part.replace(/^[+-]/, "");
		const m = /^(\d+)d(\d+)$/i.exec(body);
		if (m) {
			const n = Number(m[1]);
			const s = Number(m[2]);
			for (let i = 0; i < n; i++) total += sign * dN(s);
		} else if (/^\d+$/.test(body)) total += sign * Number(body);
	}
	return total;
}
function skillRoll(skill, mod = 0) {
	const roll = d100();
	const target = Math.max(5, Math.min(95, Math.round(skill + mod)));
	return {
		roll,
		target,
		success: roll <= target,
		crit: roll <= 5,
		fumble: roll >= 96
	};
}
function clamp(n, lo, hi) {
	return Math.max(lo, Math.min(hi, n));
}
var AIMED_RANGED = {
	torso: {
		hit: 0,
		label: "Torso"
	},
	legs: {
		hit: -20,
		label: "Legs"
	},
	arms: {
		hit: -30,
		label: "Arms"
	},
	groin: {
		hit: -30,
		label: "Groin"
	},
	head: {
		hit: -40,
		label: "Head"
	},
	eyes: {
		hit: -60,
		label: "Eyes"
	}
};
var AIMED_MELEE = {
	torso: {
		hit: 0,
		label: "Torso"
	},
	legs: {
		hit: -10,
		label: "Legs"
	},
	arms: {
		hit: -15,
		label: "Arms"
	},
	groin: {
		hit: -15,
		label: "Groin"
	},
	head: {
		hit: -20,
		label: "Head"
	},
	eyes: {
		hit: -30,
		label: "Eyes"
	}
};
function cloneCombat(state) {
	return {
		...state,
		combatants: state.combatants.map((c) => ({
			...c,
			crippled: { ...c.crippled }
		})),
		log: [...state.log],
		order: [...state.order],
		map: state.map ? {
			...state.map,
			cells: state.map.cells.map((cell) => ({ ...cell }))
		} : null
	};
}
function byId(state, id) {
	const found = state.combatants.find((c) => c.id === id);
	if (!found) throw new Error(`missing combatant ${id}`);
	return found;
}
function current(state) {
	return byId(state, state.order[state.turn] ?? state.order[0]);
}
function sideOf(c) {
	if (c.side) return c.side;
	return c.player ? "player" : "foe";
}
function isFriendly(c) {
	const side = sideOf(c);
	return side === "player" || side === "ally";
}
function nearestLiving(state, actor, want) {
	const live = state.combatants.filter((c) => c.hp > 0 && !c.fled && want(c));
	if (!live.length) return void 0;
	return live.reduce((best, c) => axialDistance(actor.hexQ, actor.hexR, c.hexQ, c.hexR) < axialDistance(actor.hexQ, actor.hexR, best.hexQ, best.hexR) ? c : best);
}
function opponentOf(state, id) {
	const actor = byId(state, id);
	if (isFriendly(actor)) {
		if (actor.player) return targetedFoe(state);
		return nearestLiving(state, actor, (c) => sideOf(c) === "foe");
	}
	return nearestLiving(state, actor, (c) => isFriendly(c));
}
function livingFoes(state) {
	return state.combatants.filter((c) => sideOf(c) === "foe" && c.hp > 0 && !c.fled);
}
function targetedFoe(state) {
	const live = livingFoes(state);
	if (!live.length) return void 0;
	const named = live.find((c) => c.id === state.targetId);
	if (named) return named;
	const player = state.combatants.find((c) => c.player);
	if (!player) return live[0];
	return nearestLiving(state, player, (c) => sideOf(c) === "foe");
}
function gap(state, a, b) {
	if (!state.map) return Math.max(1, state.hexes);
	return Math.max(1, axialDistance(a.hexQ, a.hexR, b.hexQ, b.hexR));
}
function occupiedKeys(state, exceptId) {
	const keys = /* @__PURE__ */ new Set();
	for (const c of state.combatants) {
		if (c.hp <= 0 || c.id === exceptId) continue;
		keys.add(hexKey(c.hexQ, c.hexR));
	}
	return keys;
}
function refreshRange(state) {
	const player = state.combatants.find((c) => c.player);
	const foe = targetedFoe(state);
	if (player && foe) state.hexes = Math.max(1, axialDistance(player.hexQ, player.hexR, foe.hexQ, foe.hexR));
}
function skillOf(c) {
	if (c.weaponSkill === "unarmed") return c.unarmed;
	if (c.weaponSkill === "melee") return c.melee;
	return c.guns;
}
function isMelee(c) {
	return c.weaponSkill === "unarmed" || c.weaponSkill === "melee";
}
function moveCost(c) {
	if (c.stance === "prone") return 4;
	if (c.stance === "crouching") return 2;
	return 1;
}
function agilityAc(c) {
	if (c.down || c.stance === "prone") return Math.min(1, c.baseAc);
	if (c.stance === "crouching") return Math.min(3, c.baseAc);
	return c.baseAc;
}
function refreshAc(c) {
	c.ac = agilityAc(c) + c.leftoverAc + c.cover;
}
function log(state, line) {
	state.log.push(line);
	if (state.log.length > 48) state.log.splice(0, state.log.length - 48);
}
function checkEnd(state) {
	if (state.result) return;
	const player = state.combatants.find((c) => c.player);
	if (!player) return;
	if (player.hp <= 0) {
		state.result = "loss";
		return;
	}
	if (livingFoes(state).length === 0) {
		state.result = "win";
		const up = state.combatants.filter((c) => sideOf(c) === "ally" && c.hp > 0 && !c.fled);
		if (up.length) log(state, `No enemies left. ${up.map((a) => a.name).join(" and ")} ${up.length === 1 ? "is" : "are"} still up, but the round ends.`);
	}
}
function startTurn(c) {
	c.leftoverAc = 0;
	refreshAc(c);
}
function endTurn(state) {
	if (state.result) return;
	const actor = current(state);
	actor.leftoverAc = Math.max(0, actor.ap);
	refreshAc(actor);
	state.turn += 1;
	if (state.turn >= state.order.length) {
		state.round += 1;
		state.turn = 0;
		for (const c of state.combatants) {
			c.ap = c.apMax;
			startTurn(c);
		}
		log(state, `Round ${state.round}. Sequence holds.`);
	}
	startTurn(current(state));
}
function toHitInfo(state, actor, target, part, burst) {
	const melee = isMelee(actor);
	const aimedPen = part ? (melee ? AIMED_MELEE : AIMED_RANGED)[part].hit : 0;
	const skill = skillOf(actor);
	const hexes = gap(state, actor, target);
	let reason;
	let canFire = true;
	if (actor.down) {
		canFire = false;
		reason = "Knocked down. 4 AP to stand.";
	}
	if (melee && actor.stance === "prone") {
		canFire = false;
		reason = "Prone. No unarmed or melee.";
	}
	if (melee && hexes > actor.weaponRange) {
		canFire = false;
		reason = `${actor.weaponName} needs ${actor.weaponRange} hex. You are at ${hexes}.`;
	}
	if (!melee && hexes > actor.weaponRange) {
		canFire = false;
		reason = `${actor.weaponName} max range ${actor.weaponRange} hex. Target is ${hexes}.`;
	}
	if (burst && actor.apBurst == null) {
		canFire = false;
		reason = `${actor.weaponName} has no burst.`;
	}
	if (part && actor.fastShot) {
		canFire = false;
		reason = "Fast Shot. No aimed attacks.";
	}
	if (part && actor.apAimed == null) {
		canFire = false;
		reason = `${actor.weaponName} cannot aimed-shot.`;
	}
	if (!melee && actor.loaded <= 0 && actor.mag > 0) {
		canFire = false;
		reason = "Empty mag. Reload, 2 AP.";
	}
	const pe = actor.nightPerson && state.lighting < 0 ? actor.pe + 1 : actor.pe;
	const peBonus = melee ? 0 : 8 * (pe - 2);
	const rangePen = melee ? 0 : -4 * hexes;
	const acPen = -target.ac;
	const lightPen = melee ? 0 : state.lighting;
	const strPen = actor.st < actor.minSt ? -20 * (actor.minSt - actor.st) : 0;
	const stanceBonus = melee || actor.stance === "standing" ? 0 : actor.stance === "crouching" ? 10 : 25;
	const coverPen = melee ? 0 : -target.cover;
	const burstPen = burst ? -20 : 0;
	let chance = skill + peBonus + rangePen + acPen + lightPen + strPen + aimedPen + stanceBonus + coverPen + burstPen;
	if (part) chance = clamp(chance, 0, 95);
	else chance = clamp(Math.max(chance, chance > 0 ? 5 : 0), 5, 95);
	if (part && chance <= 0) {
		canFire = false;
		reason = reason ?? "Aimed chance is --. Cancel or pick another part.";
	}
	const bits = [
		`skill ${skill}`,
		!melee ? `PE ${(peBonus >= 0 ? "+" : "") + peBonus}` : null,
		!melee ? `range ${rangePen}` : null,
		`AC ${acPen}`,
		lightPen ? `light ${lightPen}` : null,
		strPen ? `STR ${strPen}` : null,
		aimedPen ? `aimed ${aimedPen}` : null,
		stanceBonus ? `stance +${stanceBonus}` : null,
		coverPen ? `cover ${coverPen}` : null,
		burst ? "burst −20" : null
	].filter(Boolean);
	return {
		chance,
		skill,
		peBonus,
		rangePen,
		acPen,
		lightPen,
		strPen,
		aimedPen,
		stanceBonus,
		coverPen,
		canFire,
		reason,
		breakdown: `${chance}% (${bits.join(" · ")})`
	};
}
function applyDamage(target, raw, crit, part) {
	let dmg = Math.max(0, raw);
	const ignoreDt = crit && (part === "eyes" || part === "head" || dN(10) <= 3);
	if (crit) dmg = Math.round(dmg * (part === "eyes" || part === "head" ? 2 : 1.5));
	if (!ignoreDt) dmg = Math.max(0, dmg - target.dt);
	dmg = Math.floor(dmg * (100 - clamp(target.dr, 0, 90)) / 100);
	target.hp = Math.max(0, target.hp - dmg);
	return dmg;
}
function critFail(state, actor) {
	const n = dN(10);
	if (n === 1) {
		actor.loaded = 0;
		log(state, `${actor.name} crit-fails. Bad ammo. Mag dumped.`);
	} else if (n === 2) {
		actor.ap = 0;
		log(state, `${actor.name} crit-fails. Weapon jammed. Rest of the turn is gone.`);
	} else if (n === 3) {
		actor.ap = 0;
		log(state, `${actor.name} crit-fails. All remaining AP gone.`);
	} else if (n === 4) log(state, `${actor.name} crit-fails. Weapon hits the floor.`);
	else if (n === 5) {
		const self = Math.max(1, Math.round(rollExpr(actor.dmg, actor.md) / 2));
		actor.hp = Math.max(0, actor.hp - self);
		log(state, `${actor.name} crit-fails. Weapon bites back for ${self}.`);
	} else if (n === 6) log(state, `${actor.name} crit-fails. Shot goes wide into the next hex.`);
	else if (n === 7) {
		const self = Math.max(1, Math.round(rollExpr(actor.dmg, actor.md) / 2));
		actor.hp = Math.max(0, actor.hp - self);
		log(state, `${actor.name} crit-fails. Hits self for ${self}.`);
	} else if (n === 8) {
		actor.down = true;
		actor.ap = 0;
		actor.leftoverAc = 0;
		refreshAc(actor);
		log(state, `${actor.name} crit-fails. Slips. Down. 4 AP to stand.`);
	} else if (n === 9) {
		actor.loaded = 0;
		log(state, `${actor.name} crit-fails. Weapon breaks the mag. Empty.`);
	} else {
		const dmg = dN(10);
		actor.hp = Math.max(0, actor.hp - dmg);
		log(state, `${actor.name} crit-fails. A miniature anvil, somehow. ${dmg} through DT.`);
	}
}
function maybeKnockdown(state, actor, target, hits, burst) {
	if (target.hp <= 0 || target.down) return;
	let chance = 0;
	if (isMelee(actor)) chance = 3 * actor.weaponWeight;
	else if (burst && hits > actor.burstShots / 2) chance = 50;
	if (chance <= 0) return;
	if (d100() <= chance) {
		const enRoll = dN(10);
		if (enRoll > target.en) {
			target.down = true;
			target.leftoverAc = 0;
			refreshAc(target);
			log(state, `${target.name} is knocked down (EN check ${enRoll} vs ${target.en}).`);
		}
	}
}
function fireShot(state, actor, part, burst) {
	const target = opponentOf(state, actor.id);
	if (!target || target.hp <= 0) {
		log(state, `${actor.name} has nobody left to fight.`);
		checkEnd(state);
		return false;
	}
	const info = toHitInfo(state, actor, target, part, burst);
	const cost = burst ? actor.apBurst ?? 6 : part ? actor.apAimed ?? actor.apCost + 1 : actor.apCost;
	if (actor.ap < cost) {
		log(state, `${actor.name} is out of AP for that attack (${cost} needed).`);
		return false;
	}
	if (!info.canFire) {
		log(state, info.reason ?? `${actor.name} cannot fire.`);
		return false;
	}
	actor.ap -= cost;
	const shots = burst ? Math.max(1, Math.min(actor.burstShots, actor.loaded || actor.burstShots)) : 1;
	if (!isMelee(actor) && actor.mag > 0) actor.loaded = Math.max(0, actor.loaded - shots);
	let hits = 0;
	let totalDmg = 0;
	let anyCrit = false;
	for (let i = 0; i < shots; i++) {
		const roll = d100();
		const chance = info.chance;
		if (roll >= 96 || roll > chance && roll - chance >= 30 && d100() <= Math.trunc((roll - chance) / 10)) {
			if (i === 0) critFail(state, actor);
			continue;
		}
		if (roll > chance) {
			if (!burst) log(state, `${actor.name} misses (${roll} vs ${info.breakdown}).`);
			continue;
		}
		const upgrade = actor.lk + (actor.finesse ? 10 : 0) + Math.abs(info.aimedPen) + Math.trunc((chance - roll) / 10);
		const crit = d100() <= upgrade;
		const dealt = applyDamage(target, Math.max(1, rollExpr(actor.dmg, actor.md)), crit, part);
		hits += 1;
		totalDmg += dealt;
		anyCrit = anyCrit || crit;
		if (crit && part && part !== "torso") target.crippled[part] = true;
	}
	if (burst) log(state, `${actor.name} bursts ${shots} from ${actor.weaponName}. ${hits} hit for ${totalDmg} (${info.breakdown}).${anyCrit ? " Crit in the spray." : ""}`);
	else if (hits > 0) {
		const where = part ? ` in the ${part}` : "";
		log(state, `${actor.name} ${anyCrit ? "crits" : "hits"} ${target.name}${where} with ${actor.weaponName} for ${totalDmg} (${info.breakdown}).`);
	}
	if (hits > 0) maybeKnockdown(state, actor, target, hits, burst);
	checkEnd(state);
	return true;
}
function npcThink(state) {
	const actor = current(state);
	const target = opponentOf(state, actor.id);
	if (!target) return { move: "defend" };
	if (actor.down) return { move: "stand" };
	const hexes = gap(state, actor, target);
	const fleeAt = sideOf(actor) === "ally" ? .22 : .4;
	if (actor.hp <= actor.hpMax * .2 && actor.ap >= 2 && Math.random() < fleeAt) return { move: "flee" };
	const melee = isMelee(actor);
	if (melee && hexes > actor.weaponRange) return { move: actor.ap >= moveCost(actor) * 2 ? "sprint-in" : "advance" };
	if (!melee && hexes === 1 && actor.weaponRange > 4 && actor.ap >= 1) return { move: "withdraw" };
	if (!melee && actor.mag > 0 && actor.loaded <= 0) return { move: "reload" };
	if (!melee && actor.apBurst != null && actor.ap >= actor.apBurst && (target.hp <= 12 || Math.random() < .35)) return { move: "burst" };
	if (!actor.fastShot && actor.apAimed != null && actor.ap >= actor.apAimed && target.hp <= 10) return {
		move: "aimed",
		part: "head"
	};
	if (actor.apCost && actor.ap >= actor.apCost) return { move: "attack" };
	if (hexes > 1 && actor.ap >= moveCost(actor)) return { move: "advance" };
	return { move: "defend" };
}
function applyMove(state, move, part, step) {
	if (state.result) return;
	checkEnd(state);
	if (state.result) return;
	const actor = current(state);
	if (actor.hp <= 0 || actor.fled) {
		endTurn(state);
		return;
	}
	if (move === "stand") {
		const cost = actor.down ? 4 : actor.stance === "prone" ? 4 : 2;
		if (actor.ap < cost) {
			log(state, `${actor.name} needs ${cost} AP to stand.`);
			return;
		}
		actor.ap -= cost;
		actor.down = false;
		actor.stance = "standing";
		actor.cover = 0;
		refreshAc(actor);
		log(state, `${actor.name} stands (${cost} AP).`);
		if (actor.ap <= 0) endTurn(state);
		return;
	}
	if (actor.down) {
		log(state, `${actor.name} is down. Stand first (4 AP).`);
		return;
	}
	if (move === "hex-step" && step) {
		const occupant = state.combatants.find((c) => c.hp > 0 && c.id !== actor.id && c.hexQ === step.q && c.hexR === step.r);
		if (occupant) {
			if (actor.player) {
				if (sideOf(occupant) === "ally") {
					log(state, `${occupant.name} is with you.`);
					return;
				}
				if (sideOf(occupant) === "foe") {
					state.targetId = occupant.id;
					refreshRange(state);
					log(state, `${actor.name} marks ${occupant.name}. ${state.hexes} hex.`);
				}
			}
			return;
		}
	}
	if (move === "advance" || move === "sprint-in" || move === "withdraw" || move === "sprint-out" || move === "hex-step") {
		const costEach = moveCost(actor);
		if (actor.ap < costEach) {
			log(state, `${actor.name} cannot move.`);
			return;
		}
		const blocked = occupiedKeys(state, actor.id);
		const board = state.map;
		const inward = move === "advance" || move === "sprint-in";
		let steps = move.startsWith("sprint") ? Math.max(1, Math.floor(actor.ap / costEach)) : 1;
		const foe = opponentOf(state, actor.id);
		let dest = foe ?? actor;
		if ((move === "advance" || move === "sprint-in") && !foe) {
			log(state, `${actor.name} has nobody to close on.`);
			checkEnd(state);
			return;
		}
		if (move === "withdraw" || move === "sprint-out") {
			const exit = board ? nearestExit(board, actor.hexQ, actor.hexR) : {
				q: actor.hexQ,
				r: actor.hexR
			};
			dest = {
				...actor,
				hexQ: exit.q,
				hexR: exit.r
			};
		}
		if (move === "hex-step") {
			if (!step) return;
			steps = Math.max(1, axialDistance(actor.hexQ, actor.hexR, step.q, step.r));
			dest = {
				...actor,
				hexQ: step.q,
				hexR: step.r
			};
		}
		let walked = 0;
		for (let i = 0; i < steps; i++) {
			if (actor.ap < costEach) break;
			if (board) {
				const nextHex = move === "hex-step" ? stepToward(board, actor.hexQ, actor.hexR, dest.hexQ, dest.hexR, blocked) : inward ? stepToward(board, actor.hexQ, actor.hexR, dest.hexQ, dest.hexR, blocked) : stepToward(board, actor.hexQ, actor.hexR, dest.hexQ, dest.hexR, blocked);
				if (!nextHex) break;
				actor.ap -= costEach;
				actor.cover = 0;
				actor.hexQ = nextHex.q;
				actor.hexR = nextHex.r;
				blocked.delete(hexKey(actor.hexQ, actor.hexR));
				blocked.add(hexKey(nextHex.q, nextHex.r));
				walked += 1;
				if (actor.player && isExit(board, actor.hexQ, actor.hexR)) {
					state.result = "flee";
					log(state, `${actor.name} hits the green hex and leaves the map.`);
					refreshRange(state);
					return;
				}
				if (move === "hex-step" && actor.hexQ === dest.hexQ && actor.hexR === dest.hexR) break;
			} else {
				actor.ap -= costEach;
				actor.cover = 0;
				if (inward) state.hexes = Math.max(1, state.hexes - 1);
				else state.hexes = Math.min(40, state.hexes + 1);
				walked += 1;
			}
		}
		refreshRange(state);
		refreshAc(actor);
		const marked = opponentOf(state, actor.id);
		const dist = marked ? gap(state, actor, marked) : state.hexes;
		log(state, walked ? `${actor.name} moves to hex ${actor.hexQ},${actor.hexR} · ${dist} hex from ${marked?.name ?? "target"} (${walked * costEach} AP).` : `${actor.name} has nowhere to step.`);
		if (actor.ap <= 0) endTurn(state);
		return;
	}
	if (move === "crouch" || move === "prone") {
		if (actor.ap < 2) {
			log(state, `${actor.name} needs 2 AP to change stance.`);
			return;
		}
		actor.ap -= 2;
		actor.stance = move === "crouch" ? "crouching" : "prone";
		actor.cover = 0;
		refreshAc(actor);
		log(state, move === "crouch" ? `${actor.name} crouches. +10% guns. 2 AP/hex. AG AC capped at 3.` : `${actor.name} goes prone. +25% guns. 4 AP/hex. No melee.`);
		if (actor.ap <= 0) endTurn(state);
		return;
	}
	if (move === "cover") {
		if (actor.ap < 1) {
			log(state, `${actor.name} needs 1 AP to take cover.`);
			return;
		}
		actor.ap -= 1;
		actor.cover = 30;
		refreshAc(actor);
		log(state, `${actor.name} takes cover (−30% incoming ranged).`);
		if (actor.ap <= 0) endTurn(state);
		return;
	}
	if (move === "defend") {
		actor.leftoverAc = Math.max(0, actor.ap);
		actor.ap = 0;
		refreshAc(actor);
		log(state, `${actor.name} guards. Unused AP → +${actor.leftoverAc} AC.`);
		endTurn(state);
		return;
	}
	if (move === "reload") {
		if (actor.ap < 2) {
			log(state, `${actor.name} needs 2 AP to reload.`);
			return;
		}
		if (actor.mag <= 0) {
			log(state, `${actor.weaponName} does not load.`);
			return;
		}
		actor.ap -= 2;
		actor.loaded = actor.mag;
		log(state, `${actor.name} reloads ${actor.weaponName} (${actor.mag}).`);
		if (actor.ap < 2) endTurn(state);
		return;
	}
	if (move === "stimpak") {
		if (actor.ap < 2) {
			log(state, `${actor.name} needs 2 AP to use a stimpak.`);
			return;
		}
		actor.ap -= 2;
		const heal = 10 + dN(10);
		actor.hp = Math.min(actor.hpMax, actor.hp + heal);
		log(state, `${actor.name} injects a stimpak and recovers ${heal} HP.`);
		if (actor.ap < 2) endTurn(state);
		return;
	}
	if (move === "flee") {
		const other = opponentOf(state, actor.id);
		const hexes = other ? gap(state, actor, other) : state.hexes;
		const sneak = actor.player ? actor.unarmed : Math.max(actor.unarmed, 35);
		const roll = d100();
		const target = Math.max(5, Math.min(95, Math.round(sneak * .6 + 20 - hexes)));
		actor.ap = 0;
		if (roll <= target) {
			if (actor.player) {
				state.result = "flee";
				log(state, `${actor.name} breaks off (${roll} vs ${target}%).`);
			} else {
				actor.fled = true;
				actor.hp = 0;
				log(state, `${actor.name} breaks off and leaves the hexes (${roll} vs ${target}%).`);
				checkEnd(state);
				if (!state.result) endTurn(state);
			}
		} else {
			log(state, `${actor.name} fails to flee (${roll} vs ${target}%).`);
			endTurn(state);
		}
		return;
	}
	fireShot(state, actor, move === "aimed" ? part ?? "torso" : null, move === "burst");
	checkEnd(state);
	if (!state.result && actor.ap < Math.min(actor.apCost || 99, actor.apBurst ?? 99, 2)) endTurn(state);
}
function drainNpcTurns(state) {
	let guard = 0;
	while (!state.result && !current(state).player && guard < 48) {
		checkEnd(state);
		if (state.result) break;
		const actor = current(state);
		if (actor.hp <= 0 || actor.fled) {
			endTurn(state);
			guard += 1;
			continue;
		}
		const turn = state.turn;
		const round = state.round;
		const ap = actor.ap;
		const think = npcThink(state);
		applyMove(state, think.move, think.part);
		guard += 1;
		if (!state.result && state.turn === turn && state.round === round && current(state).id === actor.id && actor.ap === ap) endTurn(state);
	}
	if (!state.result && !current(state).player) {
		const playerIndex = state.order.indexOf("player");
		if (playerIndex >= 0) {
			state.turn = playerIndex;
			log(state, "The rest of the sequence collapses. Your turn.");
			startTurn(current(state));
		}
	}
}
function startCombat(opts) {
	const player = {
		...opts.player,
		side: "player",
		ap: opts.player.apMax,
		leftoverAc: 0,
		cover: 0,
		down: false,
		fled: false,
		stance: "standing"
	};
	const stamp = (f, i, side) => ({
		...f,
		side,
		player: false,
		id: f.id || `${side}-${i}`,
		ap: f.apMax,
		leftoverAc: 0,
		cover: 0,
		down: false,
		fled: false,
		stance: "standing"
	});
	const allies = (opts.allies ?? []).map((f, i) => stamp(f, i, "ally"));
	const foes = (opts.foes ?? (opts.foe ? [opts.foe] : [])).map((f, i) => stamp(f, i, "foe"));
	refreshAc(player);
	for (const f of [...allies, ...foes]) refreshAc(f);
	const combatants = [
		player,
		...allies,
		...foes
	];
	const tie = dN(10) >= 6 ? 1 : -1;
	const order = [...combatants].sort((a, b) => b.sequence - a.sequence || (a.player === b.player ? 0 : a.player ? tie : -tie)).map((c) => c.id);
	const lighting = opts.lighting ?? 0;
	const allyLine = allies.length ? ` With you: ${allies.map((a) => `${a.name} (HP ${a.hp}, AC ${a.ac}, seq ${a.sequence}, ${a.weaponName})`).join("; ")}.` : "";
	const state = {
		kind: opts.kind,
		round: 1,
		order,
		turn: 0,
		hexes: opts.hexes ?? 8,
		lighting,
		lightingLabel: opts.lightingLabel ?? (lighting === 0 ? "daylight" : lighting <= -40 ? "dark" : "dim"),
		combatants,
		log: [opts.kind === "boxing" ? `Bell. ${player.name} vs ${foes[0]?.name ?? "them"}. Unarmed. 1 hex. Sequence ${player.sequence} vs ${foes[0]?.sequence ?? 0}.` : `${foes.map((f) => f.name).join(", ") || "Nobody"} on the map.${allyLine} ${opts.lightingLabel ?? "light 0"}. Sequence ${player.sequence}. Highest sequence first. What they carry stays on the body. Green hexes are the way out.`],
		purse: opts.purse,
		map: opts.map ?? null,
		targetId: foes.find((f) => f.hp > 0)?.id ?? ""
	};
	refreshRange(state);
	if (opts.initiator === "player" && order[0] !== "player") {
		state.order = ["player", ...order.filter((id) => id !== "player")];
		log(state, `${player.name} initiated. First turn before sequence settles.`);
	}
	if (opts.initiator === "foe" && order[0] === "player") {
		const firstFoe = foes[0]?.id;
		if (firstFoe) {
			state.order = [firstFoe, ...order.filter((id) => id !== firstFoe)];
			log(state, `${foes[0]?.name} initiated. They act before sequence.`);
		}
	}
	drainNpcTurns(state);
	return state;
}
function playMove(state, move, part, extra) {
	const next = cloneCombat(state);
	if (next.result) return next;
	if (extra?.targetId) {
		const marked = next.combatants.find((c) => c.id === extra.targetId);
		if (marked && sideOf(marked) === "foe" && marked.hp > 0) next.targetId = marked.id;
	}
	if (!current(next).player) {
		drainNpcTurns(next);
		return next;
	}
	applyMove(next, move, part, extra?.q != null && extra?.r != null ? {
		q: extra.q,
		r: extra.r
	} : void 0);
	if (!next.result) drainNpcTurns(next);
	return next;
}
function playerOf(state) {
	return state.combatants.find((c) => c.player);
}
function foeOf(state) {
	return targetedFoe(state) ?? state.combatants.find((c) => sideOf(c) === "foe");
}
var geo = new ShapeGeometry((() => {
	const shape = new Shape();
	const size = HEX_METERS * .9;
	for (let i = 0; i < 6; i++) {
		const a = Math.PI / 180 * (60 * i - 30);
		const x = Math.cos(a) * size;
		const y = -Math.sin(a) * size;
		if (i === 0) shape.moveTo(x, y);
		else shape.lineTo(x, y);
	}
	shape.closePath();
	return shape;
})());
function StreetHexes({ combat, onHex }) {
	const board = combat.map;
	const player = playerOf(combat);
	const activeId = combat.order[combat.turn];
	const playerTurn = !combat.result && activeId === "player";
	const manSrc = useTexture("/reno/tokens/ped-man.webp");
	const womanSrc = useTexture("/reno/tokens/ped-woman.webp");
	const copSrc = useTexture("/reno/tokens/cop.webp");
	const junkieSrc = useTexture("/reno/tokens/junkie.webp");
	const gangsterSrc = useTexture("/reno/tokens/gangster.webp");
	const playerSrc = useTexture("/reno/tokens/player.webp");
	const tex = (0, import_react.useMemo)(() => ({
		man: cutoutTexture$1(manSrc, "hex-man"),
		woman: cutoutTexture$1(womanSrc, "hex-woman"),
		cop: cutoutTexture$1(copSrc, "hex-cop"),
		junkie: cutoutTexture$1(junkieSrc, "hex-junkie"),
		gangster: cutoutTexture$1(gangsterSrc, "hex-gang"),
		player: cutoutTexture$1(playerSrc, "hex-player")
	}), [
		manSrc,
		womanSrc,
		copSrc,
		junkieSrc,
		gangsterSrc,
		playerSrc
	]);
	if (!board || combat.originX == null || combat.originZ == null) return null;
	const originX = combat.originX;
	const originZ = combat.originZ;
	const scale = combat.hexScale || 3.35;
	const blocked = new Set(combat.combatants.filter((c) => c.hp > 0 && !c.fled).map((c) => hexKey(c.hexQ, c.hexR)));
	const steps = player ? Math.max(1, Math.floor(player.ap / (player.stance === "prone" ? 4 : player.stance === "crouching" ? 2 : 1))) : 0;
	const reachable = player && playerTurn ? reachableFrom(board, player.hexQ, player.hexR, Math.min(steps, 6), blocked) : void 0;
	const byHex = new Map(combat.combatants.filter((c) => c.hp > 0 && !c.fled).map((c) => [hexKey(c.hexQ, c.hexR), c]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: board.cells.map((cell) => {
		const key = hexKey(cell.q, cell.r);
		const at = hexToWorld(cell.q, cell.r, originX, originZ, scale);
		const unit = byHex.get(key);
		const can = Boolean(reachable?.has(key) && cell.kind !== "wall");
		const color = cell.kind === "wall" ? "#2a241c" : cell.kind === "exit" ? "#3d6b4f" : cell.kind === "cover" ? "#6a5434" : can ? "#c4a15a" : "#1c1916";
		const token = unit ? unit.player ? tex.player : tokenOf(tex, FOE_TOKEN[unit.kind] ?? "/reno/tokens/gangster.webp") : null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				at.x,
				0,
				at.z
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				"rotation-x": -Math.PI / 2,
				position: [
					0,
					.12,
					0
				],
				geometry: geo,
				onClick: (e) => {
					e.stopPropagation();
					if (cell.kind === "wall" || combat.result || !playerTurn) return;
					if (!isWalkable(board, cell.q, cell.r)) return;
					onHex(cell.q, cell.r);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color,
					transparent: true,
					opacity: cell.kind === "wall" ? .55 : .72,
					depthWrite: false
				})
			}), unit && token ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
				position: [
					0,
					1.25,
					0
				],
				scale: [
					1.05,
					2.1,
					1
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
					map: token,
					transparent: true,
					alphaTest: .3,
					depthWrite: false,
					color: sideOf(unit) === "ally" ? "#c8e2c2" : "#ffffff"
				})
			}) : null]
		}, key);
	}) });
}
function tokenOf(tex, url) {
	if (url.includes("player")) return tex.player;
	if (url.includes("woman")) return tex.woman;
	if (url.includes("cop")) return tex.cop;
	if (url.includes("junkie")) return tex.junkie;
	return tex.gangster;
}
function noiseBuffer(ctx, seconds = 2) {
	const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
	const data = buf.getChannelData(0);
	let last = 0;
	for (let i = 0; i < data.length; i++) {
		const white = Math.random() * 2 - 1;
		last = last * .96 + white * .04;
		data[i] = last;
	}
	return buf;
}
function loopNoise(ctx, buf, dest, type, freq, gain) {
	const src = ctx.createBufferSource();
	src.buffer = buf;
	src.loop = true;
	const filter = ctx.createBiquadFilter();
	filter.type = type;
	filter.frequency.value = freq;
	filter.Q.value = .7;
	const g = ctx.createGain();
	g.gain.value = gain;
	src.connect(filter);
	filter.connect(g);
	g.connect(dest);
	src.start();
	return {
		src,
		filter,
		gain: g
	};
}
function createCityAmbience() {
	const ctx = new AudioContext();
	const master = ctx.createGain();
	master.gain.value = 0;
	master.connect(ctx.destination);
	const dayBus = ctx.createGain();
	const nightBus = ctx.createGain();
	dayBus.gain.value = 1;
	nightBus.gain.value = 0;
	dayBus.connect(master);
	nightBus.connect(master);
	const bed = noiseBuffer(ctx, 3);
	const dayBed = loopNoise(ctx, bed, dayBus, "lowpass", 240, .55);
	const nightBed = loopNoise(ctx, bed, nightBus, "lowpass", 140, .28);
	const murmur = loopNoise(ctx, bed, dayBus, "bandpass", 900, .08);
	murmur.filter.Q.value = .4;
	const buzz = ctx.createOscillator();
	buzz.type = "sawtooth";
	buzz.frequency.value = 58;
	const buzzFilter = ctx.createBiquadFilter();
	buzzFilter.type = "lowpass";
	buzzFilter.frequency.value = 160;
	const buzzGain = ctx.createGain();
	buzzGain.gain.value = .045;
	buzz.connect(buzzFilter);
	buzzFilter.connect(buzzGain);
	buzzGain.connect(nightBus);
	buzz.start();
	const barA = ctx.createOscillator();
	const barB = ctx.createOscillator();
	barA.type = "triangle";
	barB.type = "triangle";
	barA.frequency.value = 196;
	barB.frequency.value = 247;
	const barGain = ctx.createGain();
	barGain.gain.value = .03;
	barA.connect(barGain);
	barB.connect(barGain);
	barGain.connect(nightBus);
	barA.start();
	barB.start();
	let dead = false;
	let nightOn = false;
	let timer = 0;
	const blip = (freq, dur, vol, dest, type = "square") => {
		if (dead || ctx.state !== "running") return;
		const osc = ctx.createOscillator();
		const g = ctx.createGain();
		osc.type = type;
		osc.frequency.value = freq;
		g.gain.setValueAtTime(1e-4, ctx.currentTime);
		g.gain.exponentialRampToValueAtTime(vol, ctx.currentTime + .02);
		g.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + dur);
		osc.connect(g);
		g.connect(dest);
		osc.start();
		osc.stop(ctx.currentTime + dur + .02);
		osc.onended = () => {
			osc.disconnect();
			g.disconnect();
		};
	};
	const whoosh = (dest) => {
		if (dead || ctx.state !== "running") return;
		const src = ctx.createBufferSource();
		src.buffer = bed;
		const filter = ctx.createBiquadFilter();
		filter.type = "bandpass";
		filter.Q.value = 1.2;
		filter.frequency.setValueAtTime(180, ctx.currentTime);
		filter.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + .7);
		filter.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 1.5);
		const g = ctx.createGain();
		g.gain.setValueAtTime(1e-4, ctx.currentTime);
		g.gain.exponentialRampToValueAtTime(.2, ctx.currentTime + .4);
		g.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + 1.5);
		const pan = ctx.createStereoPanner();
		pan.pan.setValueAtTime(Math.random() > .5 ? -.7 : .7, ctx.currentTime);
		src.connect(filter);
		filter.connect(g);
		g.connect(pan);
		pan.connect(dest);
		src.start();
		src.stop(ctx.currentTime + 1.6);
		src.onended = () => {
			src.disconnect();
			filter.disconnect();
			g.disconnect();
			pan.disconnect();
		};
	};
	const tick = () => {
		if (dead) return;
		if (nightOn) {
			blip(3800 + Math.random() * 800, .05, .012, nightBus, "sine");
			if (Math.random() < .25) blip(4200 + Math.random() * 400, .04, .01, nightBus, "sine");
			if (Math.random() < .18) whoosh(nightBus);
			timer = window.setTimeout(tick, 380 + Math.random() * 900);
		} else {
			if (Math.random() < .45) whoosh(dayBus);
			if (Math.random() < .28) {
				blip(392, .18, .04, dayBus);
				blip(494, .16, .03, dayBus);
			}
			dayBed.filter.frequency.setTargetAtTime(180 + Math.random() * 220, ctx.currentTime, .4);
			timer = window.setTimeout(tick, 2400 + Math.random() * 4200);
		}
	};
	return {
		unlock() {
			if (ctx.state === "suspended") ctx.resume();
			master.gain.setTargetAtTime(.42, ctx.currentTime, .08);
			if (!timer) tick();
		},
		setNight(night) {
			nightOn = night;
			const t = ctx.currentTime;
			dayBus.gain.setTargetAtTime(night ? .08 : 1, t, .6);
			nightBus.gain.setTargetAtTime(night ? 1 : .04, t, .6);
		},
		setLevel(level) {
			master.gain.setTargetAtTime(Math.max(0, Math.min(1, level)) * .42, ctx.currentTime, .15);
		},
		dispose() {
			dead = true;
			window.clearTimeout(timer);
			buzz.stop();
			barA.stop();
			barB.stop();
			dayBed.src.stop();
			nightBed.src.stop();
			murmur.src.stop();
			ctx.close();
		}
	};
}
var SPEED = 16;
var TURN = 2.4;
function useHeldKeys(injected) {
	const held = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		const down = (e) => {
			held.current.add(e.code);
		};
		const up = (e) => {
			held.current.delete(e.code);
		};
		const clear = () => held.current.clear();
		window.addEventListener("keydown", down);
		window.addEventListener("keyup", up);
		window.addEventListener("blur", clear);
		document.addEventListener("visibilitychange", clear);
		return () => {
			window.removeEventListener("keydown", down);
			window.removeEventListener("keyup", up);
			window.removeEventListener("blur", clear);
			document.removeEventListener("visibilitychange", clear);
		};
	}, []);
	return () => {
		if (injected.current) return injected.current;
		return held.current;
	};
}
function useCityAmbience(night, ducked) {
	const api = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(true);
	const nightRef = (0, import_react.useRef)(night);
	const onRef = (0, import_react.useRef)(on);
	const duckedRef = (0, import_react.useRef)(ducked);
	nightRef.current = night;
	onRef.current = on;
	duckedRef.current = ducked;
	(0, import_react.useEffect)(() => {
		const unlock = () => {
			if (!api.current) api.current = createCityAmbience();
			api.current.unlock();
			api.current.setNight(nightRef.current);
			api.current.setLevel(!onRef.current ? 0 : duckedRef.current ? .22 : 1);
		};
		window.addEventListener("pointerdown", unlock);
		window.addEventListener("keydown", unlock);
		const onVis = () => {
			if (document.visibilityState === "visible") unlock();
		};
		document.addEventListener("visibilitychange", onVis);
		return () => {
			window.removeEventListener("pointerdown", unlock);
			window.removeEventListener("keydown", unlock);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		api.current?.setNight(night);
		api.current?.setLevel(!on ? 0 : ducked ? .22 : 1);
	}, [
		night,
		on,
		ducked
	]);
	(0, import_react.useEffect)(() => () => api.current?.dispose(), []);
	return {
		on,
		toggle: () => setOn((v) => !v)
	};
}
function PlayerPawn({ spriteRef }) {
	const src = useTexture("/reno/tokens/player.webp");
	const tex = (0, import_react.useMemo)(() => cutoutTexture$1(src, "player"), [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
		ref: spriteRef,
		position: [
			0,
			1.25,
			0
		],
		scale: [
			1.2,
			2.35,
			1
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
			map: tex,
			transparent: true,
			alphaTest: .3,
			depthWrite: false
		})
	});
}
var camDesired = new Vector3();
var lookAt = new Vector3();
function Rig({ life, disabled, onArrive, onWalkTick, onInspect, onStreetContact, onNear, onCombatHex, walkTo, inspecting, injected }) {
	const player = (0, import_react.useRef)(new Vector3(life.posX, 0, life.posZ));
	const pawn = (0, import_react.useRef)(null);
	const lifeRef = (0, import_react.useRef)(life);
	const pausedRef = (0, import_react.useRef)(false);
	const hiddenRef = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	lifeRef.current = life;
	pausedRef.current = Boolean(disabled);
	hiddenRef.current = new Set(life.combat?.onMap ? life.combat.combatants.filter((c) => !c.player).map((c) => c.id) : []);
	const yaw = (0, import_react.useRef)(0);
	const speed = (0, import_react.useRef)(0);
	const target = (0, import_react.useRef)(null);
	const walked = (0, import_react.useRef)(0);
	const lastDistrict = (0, import_react.useRef)(life.district);
	const keysOf = useHeldKeys(injected);
	const { camera } = useThree();
	const sky = hourSky(life.hour);
	const night = isNight(life);
	(0, import_react.useEffect)(() => {
		player.current.set(life.posX, 0, life.posZ);
	}, [
		life.posX,
		life.posZ,
		life.district
	]);
	(0, import_react.useEffect)(() => {
		if (!walkTo) return;
		target.current = new Vector3(walkTo.x, 0, walkTo.z);
	}, [walkTo]);
	(0, import_react.useEffect)(() => {
		const probe = {
			getYaw: () => yaw.current,
			getSpeed: () => speed.current,
			setKeys: (codes) => {
				injected.current = new Set(codes);
			}
		};
		window.__controlsTest = probe;
		return () => {
			if (window.__controlsTest === probe) delete window.__controlsTest;
		};
	}, [injected]);
	useFrame((_, raw) => {
		const dt = Math.min(raw, .1);
		const fight = life.combat?.onMap && life.combat.originX != null && life.combat.originZ != null ? life.combat : null;
		if (fight) {
			speed.current = 0;
			const span = ((fight.map?.radius ?? 4) + 1.6) * (fight.hexScale || 3.35);
			camDesired.set(fight.originX, Math.max(18, span * .9), fight.originZ + span * .62);
			camera.position.lerp(camDesired, 1 - Math.exp(-2.6 * dt));
			lookAt.set(fight.originX, .2, fight.originZ);
			camera.lookAt(lookAt);
			if (pawn.current) pawn.current.visible = false;
			return;
		}
		if (pawn.current) pawn.current.visible = true;
		if (disabled) {
			speed.current = 0;
			return;
		}
		const keys = keysOf();
		let steer = 0;
		if (keys.has("KeyA") || keys.has("ArrowLeft")) steer += 1;
		if (keys.has("KeyD") || keys.has("ArrowRight")) steer -= 1;
		const forwardHeld = keys.has("KeyW") || keys.has("ArrowUp");
		const backHeld = keys.has("KeyS") || keys.has("ArrowDown");
		if (steer || forwardHeld || backHeld) target.current = null;
		yaw.current += steer * TURN * dt;
		let move = 0;
		if (forwardHeld) move += 1;
		if (backHeld) move -= 1;
		if (target.current) {
			const dx = target.current.x - player.current.x;
			const dz = target.current.z - player.current.z;
			if (Math.hypot(dx, dz) < .6) {
				target.current = null;
				speed.current = 0;
			} else {
				yaw.current = Math.atan2(-dx, -dz);
				move = 1;
			}
		}
		const fx = -Math.sin(yaw.current);
		const fz = -Math.cos(yaw.current);
		speed.current = move * SPEED;
		if (move) {
			player.current.x += fx * SPEED * dt * (move > 0 ? 1 : .65);
			player.current.z += fz * SPEED * dt * (move > 0 ? 1 : .65);
			walked.current += SPEED * dt;
		}
		if (pawn.current) pawn.current.position.set(player.current.x, 1.25, player.current.z);
		camDesired.set(player.current.x - fx * 16, 12, player.current.z - fz * 16);
		camera.position.lerp(camDesired, 1 - Math.exp(-3.2 * dt));
		lookAt.set(player.current.x + fx * 6, 1.5, player.current.z + fz * 6);
		camera.lookAt(lookAt);
		const near = nearestDistrict(player.current.x, player.current.z);
		if (near.id !== lastDistrict.current && near.dist < 14) {
			lastDistrict.current = near.id;
			onArrive(near.id, player.current.x, player.current.z);
		}
		if (walked.current > 80) {
			walked.current = 0;
			onWalkTick(player.current.x, player.current.z);
		}
	});
	const setWalk = (x, z) => {
		target.current = new Vector3(x, 0, z);
	};
	const mark = inspecting ? BUILDING_BY_ID[inspecting] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: [sky.sky]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				sky.fog,
				night ? 28 : 48,
				night ? 120 : 180
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			sky.sky,
			"#1a1614",
			night ? .28 : .42 + sky.sun * .5
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				40,
				60,
				18
			],
			intensity: night ? .22 : .45 + sky.sun * .9,
			color: sky.sun > .6 ? "#fff4dc" : "#ff8a4a"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: night ? .16 : .16 + sky.sun * .22 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityBlocks, {
			night,
			disabled,
			onInspect,
			onWalk: setWalk
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreetCrowd, {
			lifeRef,
			player,
			pausedRef,
			hiddenRef,
			onContact: onStreetContact,
			onNear
		}),
		life.combat?.onMap && life.combat.map ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreetHexes, {
			combat: life.combat,
			onHex: onCombatHex
		}) : null,
		mark ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			"rotation-x": -Math.PI / 2,
			position: [
				mark.x,
				.16,
				mark.z
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				Math.max(2.4, mark.width * .46),
				Math.max(2.9, mark.width * .56),
				28
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#e8c36a",
				transparent: true,
				opacity: .85,
				depthWrite: false
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerPawn, { spriteRef: pawn })
	] });
}
function Pad({ onHold, disabled }) {
	const hold = (codes) => {
		if (disabled) return;
		onHold(codes);
	};
	const clear = () => onHold([]);
	const btn = (label, codes, extra) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: `min-h-11 min-w-11 rounded-md bg-bg/80 font-mono text-xs text-fg ${extra ?? ""}`,
		onPointerDown: (e) => {
			e.preventDefault();
			hold(codes);
		},
		onPointerUp: clear,
		onPointerCancel: clear,
		onPointerLeave: clear,
		disabled,
		"aria-label": label,
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-auto absolute bottom-3 left-3 grid grid-cols-3 gap-1 sm:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
			btn("↑", ["KeyW"]),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
			btn("←", ["KeyA"]),
			btn("↓", ["KeyS"]),
			btn("→", ["KeyD"])
		]
	});
}
function RenoCity3D({ life, disabled, onArrive, onWalkTick, onInspect, onStreetContact, onCombatHex, walkTo, inspecting }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [near, setNear] = (0, import_react.useState)("Citizens, independents, families, police.");
	const injected = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => setReady(true), []);
	const district = DISTRICT_BY_ID[life.district];
	const night = isNight(life);
	const zone = zoneAt(life.posX, life.posZ);
	const danger = dangerOf(zone, night);
	const sound = useCityAmbience(night, Boolean(disabled));
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "reno-city3d flex items-center justify-center rounded-xl bg-inset text-sm text-muted",
		children: "Loading New Reno…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reno-city3d relative overflow-hidden rounded-xl bg-inset shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
				dpr: [1, 1.5],
				camera: {
					position: [
						18,
						16,
						18
					],
					fov: 42,
					near: .4,
					far: 320
				},
				gl: {
					antialias: true,
					alpha: false,
					powerPreference: "high-performance"
				},
				onCreated: ({ gl }) => {
					gl.setClearColor(night ? "#010006" : "#8aa3b0");
				},
				style: { touchAction: "none" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rig, {
						life,
						disabled,
						onArrive,
						onWalkTick,
						onInspect,
						onStreetContact,
						onNear: setNear,
						onCombatHex,
						walkTo,
						inspecting: inspecting ?? null,
						injected
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-bg/75 px-2 py-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
							children: "New Reno"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg leading-none font-semibold",
							children: zone === "outskirts" ? "The Outskirts" : district.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 font-mono text-[10px] text-muted",
							children: [
								"~",
								CITY_POPULATION.toLocaleString(),
								" souls · ",
								night ? "neon night" : "day"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-[10px] tracking-wide text-muted",
							children: near
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `mt-1 font-mono text-[10px] tracking-wide uppercase ${danger >= 6 ? "text-danger" : danger <= 2 ? "text-ok" : "text-muted"}`,
							children: [
								ZONE_LABEL[zone],
								" · ",
								ZONE_HINT[zone]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-[10px] text-subtle",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#d9d0c1]",
									children: "citizen"
								}),
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#e0b15a]",
									children: "independent"
								}),
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#c4a574]",
									children: "family"
								}),
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#7eb6e0]",
									children: "police"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex flex-col items-end gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rounded-md bg-bg/75 px-2 py-1 font-mono text-[10px] tracking-wide text-subtle uppercase",
						children: ["Click a block · WASD · rings mark who they belong to", life.combat?.onMap ? " · hexes are this street, turn-based" : ""]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-md bg-bg/80 px-3 font-mono text-[10px] tracking-wide text-fg uppercase",
						onClick: sound.toggle,
						children: sound.on ? "City sound on" : "City sound off"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pad, {
				disabled,
				onHold: (codes) => {
					injected.current = codes.length ? new Set(codes) : null;
				}
			})
		]
	});
}
var HEX = .86;
var CUTOUTS = /* @__PURE__ */ new Map();
var THEME = {
	street: {
		floor: "#5c5850",
		wall: "#3a342c",
		cover: "#7a6854",
		fog: "#12110f",
		accent: "#e2c9a4",
		ambient: .72
	},
	alley: {
		floor: "#4e4844",
		wall: "#5a4038",
		cover: "#6e5c48",
		fog: "#100e12",
		accent: "#e23a78",
		ambient: .62
	},
	casino: {
		floor: "#6a403c",
		wall: "#3a2c28",
		cover: "#8a6848",
		fog: "#140e10",
		accent: "#e2b15a",
		ambient: .7
	},
	yard: {
		floor: "#6a5c44",
		wall: "#3c3428",
		cover: "#7a6244",
		fog: "#14120e",
		accent: "#d7b48a",
		ambient: .7
	},
	crypt: {
		floor: "#3e4840",
		wall: "#2a332c",
		cover: "#5a6458",
		fog: "#0c120e",
		accent: "#8fb48a",
		ambient: .55
	},
	ring: {
		floor: "#8a7058",
		wall: "#4a3c30",
		cover: "#6a5644",
		fog: "#16120e",
		accent: "#f0ddc0",
		ambient: .78
	},
	rail: {
		floor: "#5a564e",
		wall: "#4a443c",
		cover: "#7a6a56",
		fog: "#121210",
		accent: "#d4c4aa",
		ambient: .66
	},
	motel: {
		floor: "#5e5248",
		wall: "#4a3a30",
		cover: "#7a5e48",
		fog: "#14110e",
		accent: "#e2b06a",
		ambient: .64
	}
};
function cutoutTexture(source, key) {
	const cached = CUTOUTS.get(key);
	if (cached) return cached;
	const image = source.image;
	const w = image.width || 512;
	const h = image.height || 512;
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (!ctx) return source;
	ctx.drawImage(image, 0, 0, w, h);
	const img = ctx.getImageData(0, 0, w, h);
	const data = img.data;
	for (let i = 0; i < data.length; i += 4) {
		const r = data[i] ?? 0;
		const g = data[i + 1] ?? 0;
		const b = data[i + 2] ?? 0;
		const mag = (r + b) * .5 - g;
		if (r > 150 && b > 150 && g < 170 && mag > 55) {
			const alpha = mag > 130 ? 0 : Math.max(0, 255 - mag * 3);
			data[i + 3] = Math.min(data[i + 3] ?? 255, alpha);
		}
	}
	ctx.putImageData(img, 0, 0);
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.needsUpdate = true;
	tex.magFilter = LinearFilter;
	tex.minFilter = LinearFilter;
	CUTOUTS.set(key, tex);
	return tex;
}
function worldPos(q, r, y) {
	const p = hexToPixel(q, r, HEX);
	return [
		p.x,
		y,
		p.y
	];
}
function Mini({ unit, active, selected, onPick }) {
	const url = unit.token || "/reno/tokens/gangster.webp";
	const src = useTexture(url);
	const tex = (0, import_react.useMemo)(() => cutoutTexture(src, url), [src, url]);
	const group = (0, import_react.useRef)(null);
	const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	useFrame((state) => {
		if (!group.current || reduce) return;
		const t = state.clock.elapsedTime;
		const bob = Math.sin(t * 1.6 + unit.q * .7 + unit.r) * .035;
		group.current.position.y = (unit.down ? .12 : .2) + bob;
	});
	const base = unit.side === "ally" ? "#7d9a78" : unit.side === "player" || unit.player ? "#c5cdc8" : "#c45c4a";
	const height = unit.down ? 1.05 : 1.85;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position: worldPos(unit.q, unit.r, unit.down ? .12 : .2),
		onClick: (e) => {
			e.stopPropagation();
			onPick?.();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.06,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.42,
					.5,
					.12,
					20
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: base,
					emissive: base,
					emissiveIntensity: selected ? .4 : active ? .22 : .08,
					roughness: .4,
					metalness: .2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				"rotation-x": -Math.PI / 2,
				position: [
					0,
					.01,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
					.46,
					.58,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: base })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Billboard, {
				position: [
					0,
					.95,
					0
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.95, height] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					map: tex,
					transparent: true,
					alphaTest: .12,
					toneMapped: false,
					side: 2
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
				position: [
					0,
					2.15,
					0
				],
				center: true,
				distanceFactor: 9,
				zIndexRange: [2, 0],
				style: { pointerEvents: "none" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] tracking-wide whitespace-nowrap text-fg uppercase",
					children: [unit.label, unit.hp != null ? ` ${unit.hp}` : ""]
				})
			})
		]
	});
}
function TableScene({ board, units, selectedId, activeId, reachable, onHex, disabled, night }) {
	const theme = THEME[board.setting] ?? THEME.street;
	const backdrop = useTexture(board.scene);
	backdrop.colorSpace = SRGBColorSpace;
	const byHex = new Map(units.map((u) => [`${u.q},${u.r}`, u]));
	const step = (q, r, kind) => {
		if (disabled || kind === "wall") return;
		onHex?.(q, r);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: [theme.fog]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				theme.fog,
				22,
				64
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: night ? Math.max(.55, theme.ambient * .9) : theme.ambient }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				6,
				16,
				8
			],
			intensity: night ? 1.25 : 1.6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				6,
				-board.radius * 2.2
			],
			color: theme.accent,
			intensity: 5,
			distance: 14
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", {
			color: "#eceae3",
			groundColor: "#2a2824",
			intensity: .4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			"rotation-x": -Math.PI / 2,
			position: [
				0,
				-.14,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [board.radius * HEX * 2.15 + 3.2, 48] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#141311",
				roughness: .9,
				metalness: .2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				3.6,
				-(board.radius * HEX * 1.7 + 5.5)
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [board.radius * 6 + 16, 12] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				map: backdrop,
				toneMapped: false
			})]
		}),
		board.setting === "ring" ? [
			0,
			1,
			2,
			3
		].map((i) => {
			const a = i / 4 * Math.PI * 2;
			const rad = board.radius * HEX * 1.55;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					Math.cos(a) * rad,
					.7,
					Math.sin(a) * rad
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.08,
					.08,
					1.4,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c5cdc8",
					metalness: .6,
					roughness: .35
				})]
			}, i);
		}) : null,
		board.cells.map((cell) => {
			const key = `${cell.q},${cell.r}`;
			const can = Boolean(reachable?.has(key));
			const selected = byHex.get(key)?.id === selectedId;
			const wall = cell.kind === "wall";
			const cover = cell.kind === "cover";
			const exit = cell.kind === "exit";
			const h = wall ? 1.05 : cover ? .16 : .16;
			const color = wall ? theme.wall : exit ? "#3d5340" : can ? "#6d756f" : selected ? "#5c635e" : theme.floor;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: worldPos(cell.q, cell.r, h / 2),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					"rotation-y": Math.PI / 2,
					onClick: (e) => {
						e.stopPropagation();
						step(cell.q, cell.r, cell.kind);
					},
					onPointerOver: (e) => {
						e.stopPropagation();
						if (!disabled && cell.kind !== "wall") document.body.style.cursor = "pointer";
					},
					onPointerOut: () => {
						document.body.style.cursor = "";
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						HEX * .93,
						HEX * .93,
						h,
						6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color,
						emissive: exit ? "#7d9a78" : can ? "#c5cdc8" : "#000000",
						emissiveIntensity: exit ? .55 : can ? .22 : 0,
						roughness: board.setting === "alley" ? .42 : .82,
						metalness: board.setting === "alley" ? .18 : .04
					})]
				}), cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.28,
						0
					],
					onClick: (e) => {
						e.stopPropagation();
						step(cell.q, cell.r, cell.kind);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.7,
						.42,
						.55
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: theme.cover,
						roughness: .78
					})]
				}) : null]
			}, key);
		}),
		units.map((unit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
			unit,
			active: unit.id === activeId,
			selected: unit.id === selectedId,
			onPick: () => step(unit.q, unit.r, "open")
		}, unit.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enablePan: false,
			minPolarAngle: .4,
			maxPolarAngle: 1.12,
			minDistance: 3.2,
			maxDistance: 8 + board.radius * 4,
			target: [
				0,
				.2,
				0
			]
		})
	] });
}
function RenoTable({ board, units, selectedId, activeId, reachable, onHex, disabled, night }) {
	const vSpan = board.radius * HEX * 3.15 + 3.4;
	const fov = 40;
	const fit = vSpan / 2 / Math.tan(fov * Math.PI / 360);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "reno-fight relative h-72 overflow-hidden rounded-xl bg-inset sm:h-96",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			dpr: [1, 1.6],
			camera: {
				position: [
					.4,
					fit * .92,
					fit * .4
				],
				fov,
				near: .1,
				far: 140
			},
			gl: {
				antialias: true,
				alpha: false
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableScene, {
					board,
					units,
					selectedId,
					activeId,
					reachable,
					onHex,
					disabled,
					night
				})
			})
		})
	});
}
var BODY_PARTS = [
	"torso",
	"legs",
	"arms",
	"groin",
	"head",
	"eyes"
];
var MOVES = [
	{
		id: "advance",
		label: "Close 1 hex",
		hint: "1 AP · walk"
	},
	{
		id: "sprint-in",
		label: "Sprint in",
		hint: "All AP toward"
	},
	{
		id: "withdraw",
		label: "Open 1 hex",
		hint: "1 AP · back"
	},
	{
		id: "sprint-out",
		label: "Sprint out",
		hint: "All AP away"
	},
	{
		id: "attack",
		label: "Single",
		hint: "Weapon AP"
	},
	{
		id: "aimed",
		label: "Aimed",
		hint: "Extra AP · body part"
	},
	{
		id: "burst",
		label: "Burst",
		hint: "−20% · extra AP"
	},
	{
		id: "crouch",
		label: "Crouch",
		hint: "2 AP · +10% guns"
	},
	{
		id: "prone",
		label: "Prone",
		hint: "2 AP · +25% guns"
	},
	{
		id: "stand",
		label: "Stand",
		hint: "2–4 AP"
	},
	{
		id: "cover",
		label: "Cover",
		hint: "1 AP · −30% incoming"
	},
	{
		id: "reload",
		label: "Reload",
		hint: "2 AP"
	},
	{
		id: "defend",
		label: "Guard",
		hint: "Leftover AP → AC"
	},
	{
		id: "stimpak",
		label: "Stimpak",
		hint: "2 AP · 1d10+10"
	},
	{
		id: "flee",
		label: "Flee",
		hint: "Break off"
	}
];
function sideLabel(c) {
	const side = sideOf(c);
	if (side === "player") return "You";
	if (side === "ally") return "With you";
	return "Hostile";
}
function Bar({ value, max, tone }) {
	const pct = max <= 0 ? 0 : Math.max(0, Math.min(100, value / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1.5 overflow-hidden rounded-full bg-inset",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full", tone === "hp" ? "bg-danger" : "bg-accent"),
			style: { width: `${pct}%` }
		})
	});
}
function RenoCombat({ combat, character, onMove }) {
	const player = playerOf(combat);
	const foe = foeOf(combat);
	const stimpaks = countItem(character.loadout, "stimpak");
	const playerTurn = !combat.result && combat.order[combat.turn] === "player";
	const [aiming, setAiming] = (0, import_react.useState)(false);
	const table = player?.weaponSkill === "unarmed" || player?.weaponSkill === "melee" ? AIMED_MELEE : AIMED_RANGED;
	const tokens = FOE_TOKEN;
	const activeId = combat.order[combat.turn];
	const active = combat.combatants.find((c) => c.id === activeId);
	const units = combat.combatants.filter((c) => c.hp > 0 && !c.fled).map((c) => ({
		id: c.id,
		q: c.hexQ,
		r: c.hexR,
		label: c.player ? "You" : c.name.split(" ")[0] ?? c.name,
		player: c.player,
		side: sideOf(c),
		hp: c.hp,
		hpMax: c.hpMax,
		down: c.down,
		token: tokens[c.kind] ?? (c.player ? tokens.player : tokens.tough)
	}));
	const blocked = new Set(combat.combatants.filter((c) => c.hp > 0 && !c.fled).map((c) => hexKey(c.hexQ, c.hexR)));
	const steps = player ? Math.max(1, Math.floor(player.ap / (player.stance === "prone" ? 4 : player.stance === "crouching" ? 2 : 1))) : 0;
	const reachable = player && combat.map && playerTurn ? reachableFrom(combat.map, player.hexQ, player.hexR, Math.min(steps, 6), blocked) : void 0;
	const roster = [...combat.combatants].sort((a, b) => {
		const rank = (c) => sideOf(c) === "player" ? 0 : sideOf(c) === "ally" ? 1 : 2;
		return rank(a) - rank(b);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-3 shadow-[0_0_0_1px_rgba(236,234,227,0.08)] sm:p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
				children: [
					combat.kind === "boxing" ? "The Ring" : combat.kind === "raid" ? "Raid" : "Street fight",
					" · round",
					" ",
					combat.round,
					" · ",
					combat.hexes,
					" hex · ",
					combat.lightingLabel
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted",
				children: [combat.onMap ? "The city is paused. Hexes are scaled to the people already standing on this street. Click a hex out there to step. Green hexes leave the fight." : "Drag the table to look around. Tap a hex to step, tap a figure to mark them. Green hexes leave the street.", active && !combat.result ? sideOf(active) === "player" ? " Your sequence." : ` ${active.name} (${sideLabel(active)}) is spending this turn.` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-3 grid gap-3 ${combat.onMap ? "" : "lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.85fr)]"}`,
				children: [combat.map && !combat.onMap ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoTable, {
					board: combat.map,
					units,
					selectedId: combat.targetId,
					activeId,
					reachable,
					night: combat.lighting < 0,
					disabled: !playerTurn || Boolean(combat.result),
					onHex: (q, r) => {
						onMove("hex-step", void 0, {
							q,
							r
						});
					}
				}) }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						roster.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-raised px-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl leading-none font-semibold",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] text-subtle uppercase",
										children: sideLabel(c)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[11px] text-muted",
									children: [c.weaponName, c.armorId ? ` · ${c.armorId.replace(/-/g, " ")}` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between font-mono text-[11px] text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "HP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "tabular-nums",
												children: [
													c.hp,
													"/",
													c.hpMax
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											value: c.hp,
											max: c.hpMax,
											tone: "hp"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between font-mono text-[11px] text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "tabular-nums",
												children: [
													c.ap,
													"/",
													c.apMax
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											value: c.ap,
											max: c.apMax,
											tone: "ap"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: [
										"AC ",
										c.ac,
										" · DT ",
										c.dt,
										" · DR ",
										c.dr,
										"% · Seq ",
										c.sequence,
										" · ST ",
										c.st,
										" · PE ",
										c.pe,
										" · LK ",
										c.lk,
										c.down ? " · DOWN" : "",
										c.fled ? " · GONE" : "",
										c.cover ? ` · cover ${c.cover}` : "",
										c.mag > 0 ? ` · mag ${c.loaded}/${c.mag}` : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: [
										"Unarmed ",
										c.unarmed,
										" · Melee ",
										c.melee,
										" · Guns ",
										c.guns,
										" · MD ",
										c.md,
										sideOf(c) === "foe" && c.hp <= 0 && !c.fled ? " · gear on the body" : ""
									]
								}),
								sideOf(c) === "foe" && c.hp > 0 && playerTurn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: combat.targetId === c.id ? "default" : "secondary",
									size: "sm",
									className: "mt-2 min-h-11",
									onClick: () => onMove("hex-step", void 0, {
										q: c.hexQ,
										r: c.hexR,
										targetId: c.id
									}),
									children: combat.targetId === c.id ? "Marked" : "Mark"
								}) : null
							]
						}, c.id)),
						player && foe && playerTurn && !combat.result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-[11px] leading-relaxed text-muted",
							children: (() => {
								const info = toHitInfo(combat, player, foe, null, false);
								return info.canFire ? `Single ${info.breakdown}${player.fastShot ? " · Fast Shot, no aimed" : ""}` : info.reason;
							})()
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 max-h-28 space-y-1 overflow-auto font-mono text-xs leading-relaxed text-muted",
							children: combat.log.slice(-8).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, `${i}-${line}`))
						}),
						combat.result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-semibold",
								children: combat.result === "win" ? "They drop." : combat.result === "flee" ? "You break off." : "You go down."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "min-h-11",
								onClick: () => onMove("defend"),
								children: combat.result === "win" ? "Search the bodies" : combat.result === "flee" ? "Keep moving" : "It's over"
							})]
						}) : aiming && player && foe ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
									children: "Aimed shot · Fallout 2 parts"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 grid grid-cols-2 gap-2",
									children: BODY_PARTS.map((part) => {
										const info = toHitInfo(combat, player, foe, part, false);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "secondary",
											size: "sm",
											disabled: !playerTurn || !info.canFire,
											onClick: () => {
												setAiming(false);
												onMove("aimed", part);
											},
											className: "h-auto min-h-11 flex-col items-stretch gap-0 py-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: table[part].label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] font-normal tracking-wide text-subtle uppercase",
												children: info.canFire ? `${info.chance}% · ${table[part].hit}` : info.reason ?? "--"
											})]
										}, part);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "sm",
									className: "mt-2",
									onClick: () => setAiming(false),
									children: "Cancel aim"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: MOVES.map((m) => {
								const blocked = !playerTurn || m.id === "stimpak" && stimpaks <= 0 || m.id === "burst" && (player?.apBurst == null || (player?.loaded ?? 1) <= 0) || m.id === "aimed" && (player?.fastShot || player?.apAimed == null) || m.id === "reload" && (player?.mag ?? 0) <= 0;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: m.id === "attack" ? "default" : "secondary",
									size: "sm",
									disabled: blocked,
									onClick: () => {
										if (m.id === "aimed") {
											setAiming(true);
											return;
										}
										onMove(m.id);
									},
									className: "h-auto min-h-11 flex-col items-stretch gap-0 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-normal tracking-wide text-subtle uppercase",
										children: m.hint
									})]
								}, m.id);
							})
						})
					]
				})]
			})
		]
	});
}
var FAMOUS = [
	{
		keys: ["chosen one", "the chosen one"],
		line: "Chosen One? From that primitive village? Daddy said Arroyo was a rumor the Hubologists tell drunks."
	},
	{
		keys: ["vault dweller", "vault 13"],
		line: "Vault Dweller. That's a bedtime story. The kind with a water chip and a mutant at the end."
	},
	{
		keys: ["courier", "courier six"],
		line: "Courier. You look like you walked here from the Mojave just to be bored with me."
	},
	{
		keys: ["vic"],
		line: "Vic? The old Golden Globes mechanic Daddy keeps in a basement when the bills come due? Cute name to steal."
	},
	{
		keys: ["myron"],
		line: "Myron? That Stables brat who smells like Jet and thinks he's a genius? If you're him, take a bath."
	},
	{
		keys: ["cassidy", "cass"],
		line: "Cassidy. Some old drunk from the wastes. If you're him, you're taking the pretty-boy route."
	},
	{
		keys: ["sulik"],
		line: "Sulik? Primitive name. The kind Daddy would put on a leash for a joke."
	},
	{
		keys: ["ian"],
		line: "Ian. Some triggerman who shoots his friends in the back. Don't stand behind me."
	},
	{
		keys: ["tycho"],
		line: "Tycho. Desert ranger type. The boots don't match the Shark Club carpet."
	},
	{
		keys: ["dogmeat"],
		line: "You named yourself after a dog. That's either stupid or the hottest thing anyone's said to me all week."
	},
	{
		keys: ["marcus"],
		line: "Marcus. A mutant walking Reno? Daddy would love that. The other families would start a war just to watch."
	},
	{
		keys: ["goris"],
		line: "Goris. Sounds like something that belongs in a deathclaw nest, not on Virgin Street."
	},
	{
		keys: ["lenny"],
		line: "Lenny. Ghoul name. The Salvatores wouldn't let you in the bar. I might."
	},
	{
		keys: ["tandi"],
		line: "Tandi? That's the NCR president, dummy. Daddy talks about her like she's a meal."
	},
	{
		keys: ["harold"],
		line: "Harold. The tree guy? Don't drip on the carpet."
	},
	{
		keys: [
			"john bishop",
			"mr bishop",
			"bishop"
		],
		line: "That's my FATHER. You don't get to wear that name in this building."
	},
	{
		keys: ["angela", "angela bishop"],
		line: "That's MY name. Pick another one or I'll have Mason explain manners."
	},
	{
		keys: ["leslie", "leslie anne"],
		line: "That's my mother. Don't."
	},
	{
		keys: ["big jesus", "mordino"],
		line: "You walked into the Shark Club wearing a Mordino name. That's a suicide note with a handshake."
	},
	{
		keys: ["little jesus"],
		line: "Little Jesus. If that's you, the second floor is a long way down."
	},
	{
		keys: ["orville", "wright"],
		line: "A Wright in the Shark Club. Orville's kid, playing tourist? Daddy will want a word."
	},
	{
		keys: ["salvatore", "louis salvatore"],
		line: "Salvatore. The old man with the tank. You don't look like you need oxygen. Yet."
	},
	{
		keys: ["mason"],
		line: "Mason works the door downstairs. If you're using his name, he'll break the rest of you."
	},
	{
		keys: ["benny"],
		line: "Benny. Checkered suit, bad luck. The kind of name that gets you a grave in the desert."
	},
	{
		keys: ["house", "mr house"],
		line: "House. Some Vegas ghost. Reno does not take orders from a computer."
	},
	{
		keys: ["yes man"],
		line: "Yes Man. That's not a name. That's a personality. I already have enough of those."
	},
	{
		keys: ["arcade"],
		line: "Arcade. Sounds like a Followers nerd. Daddy hates those."
	},
	{
		keys: ["boone"],
		line: "Boone. Sniper name. Don't point anything at the rail."
	},
	{
		keys: ["veronica"],
		line: "Veronica. Brotherhood girl? The Salvatores would have a fit."
	},
	{
		keys: ["nick valentine", "valentine"],
		line: "Valentine. That's a detective in a synth body, if the radio's telling the truth. Reno would sell you by the pound."
	},
	{
		keys: ["piper"],
		line: "Piper. Paper girl. The Shark Club doesn't do interviews."
	},
	{
		keys: ["cait"],
		line: "Cait. Arena trash with a pretty mouth. We already have one of those. She's talking to you."
	},
	{
		keys: ["hancock"],
		line: "Hancock. Ghoul mayor. If that's a look you're going for, the Jungle is east."
	},
	{
		keys: ["danse"],
		line: "Danse. Paladin type. Energy weapons and a stick up the armor. Mason would like you. I might not."
	},
	{
		keys: ["preston"],
		line: "Preston. Minuteman. The settlements can wait. I'm bored now."
	},
	{
		keys: ["maccready"],
		line: "MacCready. Kid sniper. Don't miss."
	},
	{
		keys: ["deacon"],
		line: "Deacon. Railroad ghost. Sunglasses indoors. Cute."
	},
	{
		keys: ["curie"],
		line: "Curie. Sounds French and medical. Reno would ruin you in a week. Stay."
	},
	{
		keys: ["strong"],
		line: "Strong. Super mutant. If you're him, the bouncers are already moving."
	},
	{
		keys: ["ada"],
		line: "Ada. Robot name. We have slot machines for that."
	},
	{
		keys: [
			"ed-e",
			"ed e",
			"eddy"
		],
		line: "A robot's name. You're lucky you're pretty."
	},
	{
		keys: ["rex"],
		line: "Rex is a dog, sweetheart. Sit."
	},
	{
		keys: ["dogmeat"],
		line: "You named yourself after a dog."
	}
];
function famousOf(name) {
	const n = name.trim().toLowerCase();
	if (!n) return null;
	for (const entry of FAMOUS) if (entry.keys.some((k) => n === k || n.includes(k))) return {
		key: entry.keys[0],
		line: entry.line
	};
	return null;
}
function ctxOf(character, life) {
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
		lowInt: d.special.IN <= 3
	};
}
function introLine(c) {
	const a = c.life.angela;
	if (a.mood === "mad" || a.insulted) return "My father is going to KILL you when he hears how you treated me.";
	if (a.mood === "rejected") return "You again. You had your chance. I'm Angela BISHOP. Don't waste my time.";
	if (a.slept) return "Look who crawled back. You going to be boring about it, or do you want to fly again?";
	if (a.met) return "You again. You as bored as I am, or did you just miss the view from the rail?";
	if (c.lowInt) return "Haven't seen YOU around before. What's your name, stranger? Actually— wait. Are you all right? You have that vault-village look.";
	if (c.gender === "female") return "Haven't seen YOU around before. You one of Daddy's new whores?";
	if (c.gender === "other") return "Haven't seen YOU around before. What's your name, stranger? (Smirks.) Actually, never mind. You as bored as I am?";
	return "Haven't seen YOU around before. What's your name, stranger? (Smirks.) Actually, never mind, I don't want to know. You as bored as I am?";
}
function repliesFor(node, c) {
	const a = c.life.angela;
	const bishop = c.life.gangId === "bishops";
	const mordino = c.life.gangId === "mordinos";
	const wright = c.life.gangId === "wrights";
	const salv = c.life.gangId === "salvatores";
	if (node === "intro") {
		const list = [];
		if (a.slept && !c.lowInt) {
			list.push({
				id: "again",
				text: "Let's fly again.",
				next: "upstairs"
			});
			list.push({
				id: "family",
				text: "About your father…",
				next: "family"
			});
			list.push({
				id: "leave",
				text: "Just passing through.",
				next: "close-polite"
			});
			return list;
		}
		if (c.lowInt) {
			list.push({
				id: "yum",
				text: "Yum yum. Me like nom.",
				next: "low-yum"
			});
			list.push({
				id: "iam",
				text: "We walked with a guy named Iam. He kept burst-shooting me in the back.",
				next: "low-iam"
			});
			list.push({
				id: "rabbits",
				text: "Shhh. If you don't be quiet, George won't let me play with th'rabbtiz.",
				next: "low-rabbits"
			});
		} else {
			list.push({
				id: "name",
				text: `I'm ${c.name}.`,
				next: "name"
			});
			list.push({
				id: "look",
				text: "Uh… why are you looking at me like that?",
				next: "look"
			});
			list.push({
				id: "bored",
				text: "You looking for some excitement, princess?",
				next: "watch-mouth"
			});
			if (bishop) list.push({
				id: "work",
				text: "I work for your father.",
				next: "enforcer"
			});
			if (c.gender === "female") list.push({
				id: "not-whore",
				text: "I work here. I'm not one of Daddy's girls.",
				next: "enforcer"
			});
		}
		list.push({
			id: "leave",
			text: "I should go.",
			next: "close-polite"
		});
		return list;
	}
	if (node === "name") return [
		{
			id: "look",
			text: "So. You bored, or is this just the rail talking?",
			next: "look"
		},
		{
			id: "family",
			text: "You're John Bishop's daughter.",
			next: "family"
		},
		{
			id: "leave",
			text: "Nice to meet you.",
			next: "close-polite"
		}
	];
	if (node === "look") return [
		{
			id: "jet",
			text: "What do you want?",
			next: "jet"
		},
		{
			id: "no",
			text: "It's not that I'm not flattered, but…",
			next: "reject-soft"
		},
		{
			id: "rank",
			text: "Your dad IS head of Family Bishop. That's why we're not going anywhere.",
			next: "reject-rank"
		},
		{
			id: "yes",
			text: "Well, if you're gonna pull rank… let's go.",
			next: "upstairs"
		}
	];
	if (node === "watch-mouth") return [
		{
			id: "sorry",
			text: "Understood. Angela Bishop.",
			next: "look"
		},
		{
			id: "push",
			text: "Cute speech. Still bored?",
			next: "jet"
		},
		{
			id: "leave",
			text: "I'm leaving.",
			next: "close-mad"
		}
	];
	if (node === "family") {
		const list = [
			{
				id: "john",
				text: "What's Mr. Bishop after?",
				next: "john"
			},
			{
				id: "leslie",
				text: "And Leslie Anne?",
				next: "leslie"
			},
			{
				id: "jet",
				text: "You don't look like you spend much time on family business.",
				next: "jet"
			}
		];
		if (mordino) list.push({
			id: "mordino-gloat",
			text: "I work for Big Jesus.",
			next: "rival-mordino"
		});
		if (wright) list.push({
			id: "wright-gloat",
			text: "I run with the Wrights.",
			next: "rival-wright"
		});
		if (salv) list.push({
			id: "salv-gloat",
			text: "I work for Salvatore.",
			next: "rival-salv"
		});
		return list;
	}
	if (node === "john") return [
		{
			id: "ncr",
			text: "NCR.",
			next: "ncr"
		},
		{
			id: "jet",
			text: "Forget politics. You wanted excitement.",
			next: "jet"
		},
		{
			id: "leave",
			text: "I'll keep that to myself.",
			next: "close-polite"
		}
	];
	if (node === "leslie" || node === "ncr") return [{
		id: "jet",
		text: "You mentioned being bored.",
		next: "jet"
	}, {
		id: "leave",
		text: "I should go.",
		next: "close-polite"
	}];
	if (node === "enforcer") return [
		{
			id: "diff",
			text: "There's a difference. Want me to teach it to you?",
			next: "watch-mouth"
		},
		{
			id: "jet",
			text: "You wanted excitement. Talk.",
			next: "jet"
		},
		{
			id: "leave",
			text: "I'll be downstairs.",
			next: "close-polite"
		}
	];
	if (node === "jet") {
		const list = [
			{
				id: "fly",
				text: "Yeah. Let's fly.",
				next: "upstairs"
			},
			{
				id: "dad-jet",
				text: "Your father know you do that?",
				next: "dad-jet"
			},
			{
				id: "no",
				text: "No.",
				next: "reject-soft"
			}
		];
		if (c.life.boxingRank !== "unsigned" && (c.life.regard ?? 0) >= 6) list.unshift({
			id: "ring",
			text: "I'm on the card at the Ring.",
			next: "fame"
		});
		return list;
	}
	if (node === "dad-jet") return [{
		id: "fly",
		text: "Fine. Let's go.",
		next: "upstairs"
	}, {
		id: "no",
		text: "I'm not going upstairs.",
		next: "reject-soft"
	}];
	if (node === "fame") return [{
		id: "fly",
		text: "The rail's nicer than the locker room.",
		next: "upstairs"
	}, {
		id: "no",
		text: "I have a card to keep.",
		next: "reject-soft"
	}];
	if (node === "upstairs") return [
		{
			id: "in",
			text: "Open the door.",
			next: "room"
		},
		{
			id: "ask",
			text: "What's in there?",
			next: "room"
		},
		{
			id: "back",
			text: "I'm not going in.",
			next: "close-polite"
		}
	];
	if (node === "room") return [
		{
			id: "window",
			text: "You keep looking at the street.",
			next: "room-window"
		},
		{
			id: "safe",
			text: "The painting's crooked.",
			next: "room-safe"
		},
		{
			id: "chair",
			text: "I'll take the chair.",
			next: "room-chair"
		},
		{
			id: "leave",
			text: "This was a mistake.",
			next: "close-polite"
		}
	];
	if (node === "room-window" || node === "room-chair") return [
		{
			id: "safe",
			text: "Show me the safe.",
			next: "room-safe"
		},
		{
			id: "stay",
			text: "I'll stay until the light changes.",
			next: "room-night"
		},
		{
			id: "leave",
			text: "I should go.",
			next: "close-polite"
		}
	];
	if (node === "room-safe") return [
		{
			id: "fly",
			text: "Yeah. Let's fly.",
			next: "room-fly"
		},
		{
			id: "sober",
			text: "Not the Jet. I'll stay anyway.",
			next: "room-night"
		},
		{
			id: "leave",
			text: "I'm not doing this.",
			next: "close-polite"
		}
	];
	if (node === "room-fly") return [{
		id: "ride",
		text: "Ride it out.",
		next: "room-night-jet"
	}, {
		id: "enough",
		text: "That's enough for one night.",
		next: "morning-jet"
	}];
	if (node === "room-night") return [{
		id: "dawn",
		text: "The light changes.",
		next: "morning"
	}];
	if (node === "room-night-jet") return [{
		id: "dawn",
		text: "The light changes.",
		next: "morning-jet"
	}];
	if (node === "morning") return [{
		id: "done",
		text: "Take the service stair down.",
		next: "close-hot"
	}];
	if (node === "morning-jet") return [{
		id: "done",
		text: "Take the service stair down.",
		next: "close-hot-jet"
	}];
	if (node === "reject-soft" || node === "reject-rank") return [{
		id: "done",
		text: "I'm going.",
		next: "close-rejected"
	}];
	if (node.startsWith("low-")) return [{
		id: "leave",
		text: "Uh. Bye.",
		next: "close-polite"
	}, {
		id: "name",
		text: "Me… name.",
		next: "name"
	}];
	if (node.startsWith("rival-")) return [{
		id: "leave",
		text: "I'll see myself out.",
		next: "close-mad"
	}, {
		id: "sorry",
		text: "It's a job.",
		next: "watch-mouth"
	}];
	if (a.slept && node === "intro") return [
		{
			id: "again",
			text: "Let's fly again.",
			next: "upstairs"
		},
		{
			id: "family",
			text: "About your father…",
			next: "family"
		},
		{
			id: "leave",
			text: "Just passing through.",
			next: "close-polite"
		}
	];
	return [{
		id: "leave",
		text: "I should go.",
		next: "close-polite"
	}];
}
function lineFor(node, c) {
	if (node === "intro") return introLine(c);
	if (node === "name") {
		if (c.famous) return `${c.famous.line} Still. I'm Angela. You as bored as I am?`;
		if (c.sexAppeal) return `${c.name}. That's a name the second floor can work with. You as bored as I am?`;
		if (c.ch >= 8) return `${c.name}. Cute. Don't get used to me remembering it. You as bored as I am?`;
		return `${c.name}. Fine. I'm Angela Bishop. You as bored as I am?`;
	}
	if (node === "look") return "Why? Am I getting a reaction out of you? (She takes a step in. Voice drops.) Am I giving you a hard time?";
	if (node === "watch-mouth") return "You watch your mouth when you talk to me. I'm Angela BISHOP. My Dad is the HEAD of Family Bishop. You'll show me the same respect you show him, or they'll be scraping pieces of you off the wall. UNDERSTAND?";
	if (node === "family") return "Daddy runs the Shark Club. He runs the mayor. He talks about NCR like it's a casino he hasn't bought yet. Mother drinks on the third floor and pretends she isn't lonely. And me? I get bored.";
	if (node === "john") return "Mr. Bishop wants a man in NCR dead and a vault city that says please. He smiles when he says it. The smile does not reach anything. You work for him, you don't ask twice.";
	if (node === "leslie") return "Leslie Anne Bishop. Mother. She'll take your arm and your evening and then tell you Angela is the problem. She isn't wrong.";
	if (node === "ncr") return "NCR. Cattle, paper, a president named Tandi. Daddy wants a seat. The other families want him in a hole. Guess which one is more honest.";
	if (node === "enforcer") return "Enforcer, whore… what's the difference? You work for him, which means you work for ME. You better do what I say, and I say you're coming with me. Now.";
	if (node === "jet") return "Look: I got some Jet in my room, and NOT that crappy shit they give the dimestore hookers and junkies. Y'wanna fly?";
	if (node === "dad-jet") return "(Shrugs.) He doesn't care. (Frowns.) Look, you wanna come fly with me or what?";
	if (node === "fame") return "The Ring. I heard. They like a body that can still stand. Don't bleed on the sheets.";
	if (node === "upstairs") {
		if (c.life.angela.slept) return "She doesn't do the speech this time. Service stair, red runner, brass worn bright by other people's hands. Third floor. The door with the small letter B. She fits the key and waits, like the night is a room she already rented and you are late.";
		return "The rail drops behind you. The band is still on the second number, brass too loud, when she takes the service stair instead of the guest one. Red runner. A rail polished by hands that had somewhere else to be. She doesn't look back. Third floor. A door with a small letter B, and under it the kind of quiet the Shark Club only spends on family. She turns the key like she has done it a thousand times and is bored of every one.";
	}
	if (node === "room") return "The room is bigger than the rail made you think. A bed that could sleep a delegation and hasn't been asked to. Curtains the color of the carpet downstairs, heavy enough to fake a private life. Neon from Virgin Street leaks the edge of the glass and paints the ceiling pink, then blue, then pink again. A vanity. A cracked gold mirror. One heel is already off. On the far wall a painting of the Shark Club hangs a thumb's width wrong. The floor noise arrives as a dull drum. She sets the key down and finally looks at you. Don't touch anything that looks like my mother's. She counts.";
	if (node === "room-window") return "She leaves the painting where it is and stands at the glass. Virgin Street is a river of taillights and a horn that loses an argument. Somewhere under it her father is smiling at a man who will not like the smile. Leslie Anne is two doors down, she says. She drinks until the band stops and then she tells people I'm the problem. The mayor comes up the guest stair. I use the other one. That's the whole empire. A carpet, a smile, and a door I'm not supposed to open unless I'm showing off. Her breath fogs a coin of the pane and she wipes it like it offended her.";
	if (node === "room-chair") return "You take the chair by the vanity. She paces the carpet barefoot, the second heel abandoned near the bed she does not sit on. She talks the way people talk when the door is shut and the family name is still in the hall. A dealer who cried in the lobby. A dress her mother hated on sight. A Wright funeral she is not allowed to mention, and the way the second floor goes quiet when John Bishop walks the rail. None of it is a secret. All of it is the kind of talk that gets repeated wrong. She stops at the bedpost. You can stay until the light changes. Or you can be smart and leave before Mason counts the stairs.";
	if (node === "room-safe") return "She tips the painting. The safe is small, brass, and the combination is short enough that she doesn't hide her hand. Inside: glass, not the paper wraps they sell at the Desperado. A clean inhaler, the kind Myron pretends he invented and the Bishops pretend they don't buy better. The neon catches it and puts a green coin on her knuckle. She holds it between two fingers like a cigarette she hasn't decided to light. This isn't the dimestore cut. You fly on this, you remember the ceiling. The band downstairs turns into weather. You want it, or not?";
	if (node === "room-fly") return "The inhaler is cold. The hit is not the street hit. The ceiling lifts half an inch and decides to stay there. Pink neon slows down and becomes a tide across the cracked mirror. The brass lamp ticks. She takes her own pull and leans on the window frame, eyes on the cars, not on you. There, she says, quiet for the first time all night. Now the Shark Club can be boring without it hurting. The safe door stays open. The carpet remembers your weight a second too long. The night gets wide, and neither of you fills it with anything the maids will have to explain.";
	if (node === "room-night") return "You stay. The band downstairs changes songs twice. A car on Virgin Street argues with a horn and loses. She kills the lamp and leaves the neon to do the work, pink then blue then pink, a slow pulse on the gold mirror. For a while neither of you performs. She tells you the mayor's please, and the funeral, and then she stops telling you things. The chair is worse than it looks. The city keeps a hand on the window. Somewhere near the grey she says, almost kind, Don't be here when the maids come. Daddy counts faces.";
	if (node === "room-night-jet") return "Hours lose their edges. The carpet breathes once and decides against it. She sits on the floor with her back to the bed and names the cars by their lights: bishop black, mordino red, a white one that doesn't belong to anybody honest. You come down slow. Mouth dry. The lamp is too bright and she leaves it off. Dawn is a grey line under the curtain. She is already bored of the person she was at midnight. The inhaler is capped. The painting is still crooked. One spare sits by your coat like a tip she will deny in the daylight.";
	if (node === "morning") return "You wake in the chair, neck wrong, Virgin Street gone the color of tin. Angela is not in the room. The bed is turned down and unused. The painting hangs straight, the safe a rumor behind it. The key is gone from the vanity. A maid's cart ticks in the hall and then thinks better of this door. On a Shark Club card, in a hand that learned penmanship to annoy someone: Don't be boring about it. The neon is dead. The mirror is just a mirror. The room smells like her perfume and like nothing else.";
	if (node === "morning-jet") return "You wake on the far side of the night, mouth dry, the lamp too honest. Angela is gone. The safe is shut, the painting straight, the bed still made on the side nobody used. One capped inhaler sits in your coat like she meant the pocket and not the person. The card on the vanity says what the city always says. Don't be boring about it. Your head disagrees, politely, for about an hour. Grey light. A cart in the hall. The third floor pretending it slept.";
	if (node === "reject-soft") return "Whatever. Go be boring somewhere else. I'm Angela Bishop. I don't wait.";
	if (node === "reject-rank") return "You're right: Daddy IS head of Family Bishop. That's why you're still standing. Get out of my sight.";
	if (node === "low-yum") return "…Okay. That's a new one. You want a drink, a nap, or should I call the doctor Daddy keeps for the Golden Globes girls?";
	if (node === "low-iam") return "Iam. Cute. Some triggerman who shoots his friends in the back. Don't stand behind me, vault-baby.";
	if (node === "low-rabbits") return "George and the rabbits. That's a story. Keep your voice down anyway — Mason hates a scene.";
	if (node === "rival-mordino") return "You work for Big Jesus and you walked up here. That's either stupid or a message. Mason is already looking.";
	if (node === "rival-wright") return "A Wright. Orville's people don't drink on this carpet. Richard's funeral was enough politics for one family.";
	if (node === "rival-salv") return "Salvatore's toy. The old man with the tank. You here to count lasers or to bore me?";
	return introLine(c);
}
function angelaOpen(character, life) {
	const c = ctxOf(character, life);
	const node = "intro";
	return {
		node,
		line: lineFor(node, c),
		replies: repliesFor(node, c)
	};
}
function angelaCurrent(character, life) {
	const c = ctxOf(character, life);
	const node = life.dialogue?.node ?? "intro";
	return {
		node,
		line: lineFor(node, c),
		replies: repliesFor(node, c)
	};
}
function angelaReply(character, life, replyId) {
	const c = ctxOf(character, life);
	const next = repliesFor(life.dialogue?.node ?? "intro", c).find((r) => r.id === replyId)?.next ?? "close-polite";
	const angela = {
		...life.angela,
		met: true,
		lastTalkDay: life.day
	};
	if (next === "close-polite") return {
		life: {
			...life,
			angela,
			dialogue: null
		},
		view: {
			node: next,
			line: "She looks past you at the floor. You're dismissed.",
			replies: [],
			closed: true
		}
	};
	if (next === "close-rejected") {
		angela.mood = "rejected";
		angela.insulted = true;
		return {
			life: {
				...life,
				angela,
				dialogue: null,
				gangRep: {
					...life.gangRep,
					bishops: life.gangRep.bishops - 4
				}
			},
			view: {
				node: next,
				line: "My father is going to KILL you when he hears how you treated me.",
				replies: [],
				closed: true
			}
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
				gangRep: {
					...life.gangRep,
					bishops: life.gangRep.bishops - 8
				}
			},
			view: {
				node: next,
				line: "Mason. The rail. Now.",
				replies: [],
				closed: true
			}
		};
	}
	if (next === "close-hot" || next === "close-hot-jet") {
		angela.mood = "hot";
		angela.slept = true;
		angela.jetOffer = true;
		const flew = next === "close-hot-jet";
		const stash = flew ? {
			...life.stash,
			jet: life.stash.jet + 1
		} : life.stash;
		const hour = life.hour + 6;
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
				gangRep: {
					...life.gangRep,
					bishops: life.gangRep.bishops + (life.gangId === "bishops" ? 2 : 0)
				}
			},
			view: {
				node: next,
				line: flew ? "The service stair. A different song downstairs. One inhaler in the coat, and the third floor already forgetting your face." : "The service stair. The band has changed songs. Her room is behind you, painting straight, bed unused. The Shark Club does not say good morning.",
				replies: [],
				closed: true
			}
		};
	}
	if (next === "jet") angela.jetOffer = true;
	if (next === "upstairs") angela.mood = "flirt";
	const view = {
		node: next,
		line: lineFor(next, {
			...c,
			life: {
				...life,
				angela
			}
		}),
		replies: repliesFor(next, {
			...c,
			life: {
				...life,
				angela
			}
		})
	};
	return {
		life: {
			...life,
			angela,
			dialogue: {
				who: "angela",
				node: next
			}
		},
		view
	};
}
function angelaPresent(life) {
	return life.district === "shark" || life.district === "bishop";
}
function angelaHook(life) {
	if (!angelaPresent(life)) return "";
	if (life.angela.mood === "mad") return "Angela Bishop is on the second-floor rail. She is not smiling.";
	if (life.angela.slept) return "Angela Bishop is on the rail again, bored, like last night didn't happen.";
	if (life.angela.met) return "Angela Bishop is on the second-floor rail. She already knows your face.";
	return "A bored young woman on the second-floor rail watches the floor like she owns it. That's Angela Bishop.";
}
function gangRankName(life) {
	if (!life.gangId) return "Independent";
	const gang = GANG_BY_ID[life.gangId];
	const idx = Math.max(0, Math.min(gang.ranks.length - 1, life.gangRank - 1));
	return `${gang.name} · ${gang.ranks[idx] ?? "Associate"}`;
}
/** Compressed Fallout 2 table: L2 = 400, L3 = 1,200, L4 = 2,400… */
function xpToReach(level) {
	if (level <= 1) return 0;
	return Math.round(400 * level * (level - 1) / 2);
}
function xpIntoLevel(xp, level) {
	const here = xpToReach(level);
	const next = xpToReach(level + 1);
	const span = Math.max(1, next - here);
	const have = Math.max(0, xp - here);
	return {
		have,
		need: span,
		pct: Math.min(100, Math.round(have / span * 100))
	};
}
function spendCost(total, tagged) {
	let band = 1;
	if (total >= 201) band = 6;
	else if (total >= 176) band = 5;
	else if (total >= 151) band = 4;
	else if (total >= 126) band = 3;
	else if (total >= 101) band = 2;
	if (tagged && band === 1) return {
		cost: 1,
		gain: 2
	};
	if (tagged) return {
		cost: Math.max(1, Math.ceil(band / 2)),
		gain: 1
	};
	return {
		cost: band,
		gain: 1
	};
}
function trySpendSkill(character, skill) {
	const d = derive(character);
	const tagged = (character.tagged ?? []).includes(skill);
	const { cost, gain } = spendCost(d.skills[skill]?.total ?? 0, tagged);
	const bank = character.skillBank ?? 0;
	if (bank < cost) return {
		character,
		ok: false,
		note: `Need ${cost} skill point${cost === 1 ? "" : "s"}.`
	};
	const spent = { ...character.skillSpent ?? {} };
	spent[skill] = (spent[skill] ?? 0) + gain;
	return {
		character: {
			...character,
			skillSpent: spent,
			skillBank: bank - cost,
			updatedAt: Date.now()
		},
		ok: true,
		note: `+${gain}% (−${cost} SP)`
	};
}
function tryPickPerk(character, perk, tagSkill) {
	const def = PERK_BY_ID[perk];
	if (!def) return {
		character,
		ok: false,
		note: "Unknown perk."
	};
	if ((character.perks ?? []).includes(perk)) return {
		character,
		ok: false,
		note: "You already have that."
	};
	if ((character.perkBank ?? 0) <= 0) return {
		character,
		ok: false,
		note: "No perk waiting."
	};
	const d = derive(character);
	if (!def.eligible(character, d)) return {
		character,
		ok: false,
		note: `Need ${def.requires}.`
	};
	let tagged = [...character.tagged ?? []];
	let skillBank = character.skillBank ?? 0;
	if (perk === "tag") {
		if (!tagSkill || tagged.includes(tagSkill)) return {
			character,
			ok: false,
			note: "Tag a skill you have not tagged."
		};
		tagged = [...tagged, tagSkill];
	}
	if (perk === "educated") skillBank += 2;
	return {
		character: {
			...character,
			perks: [...character.perks ?? [], perk],
			perkBank: (character.perkBank ?? 0) - 1,
			tagged,
			skillBank,
			updatedAt: Date.now()
		},
		ok: true,
		note: def.name
	};
}
function applyLevelUps(life, character, push) {
	let sheet = {
		...character,
		perks: character.perks ?? [],
		skillBank: character.skillBank ?? 0,
		perkBank: character.perkBank ?? 0
	};
	let leveled = false;
	while ((life.xp ?? 0) >= xpToReach(sheet.level + 1) && sheet.level < 99) {
		const before = derive(sheet);
		sheet = {
			...sheet,
			level: sheet.level + 1,
			updatedAt: Date.now()
		};
		const after = derive(sheet);
		const gained = after.skillPointsPerLevel;
		sheet = {
			...sheet,
			skillBank: (sheet.skillBank ?? 0) + gained
		};
		if (sheet.level % after.perkInterval === 0) sheet = {
			...sheet,
			perkBank: (sheet.perkBank ?? 0) + 1
		};
		life.hpMax = after.hp;
		life.hp = Math.min(after.hp, life.hp + Math.max(0, after.hp - before.hp));
		push(life, `Level ${sheet.level}. +${gained} skill points.${sheet.level % after.perkInterval === 0 ? " A perk is due." : ""}`);
		leveled = true;
	}
	return leveled ? sheet : character;
}
var HABIT = [
	{
		chance: 55,
		qty: [1, 8],
		stash: "cigarettes",
		name: "cigarettes"
	},
	{
		chance: 40,
		qty: [1, 2],
		stash: "vodka",
		name: "vodka"
	},
	{
		chance: 28,
		qty: [1, 2],
		stash: "marijuana",
		name: "a bag of marijuana"
	},
	{
		chance: 18,
		qty: [1, 1],
		stash: "cocaine",
		name: "cocaine"
	}
];
var TABLES = {
	junkie: [
		{
			chance: 80,
			qty: [1, 3],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 50,
			qty: [1, 6],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 40,
			qty: [1, 2],
			stash: "vodka",
			name: "vodka"
		},
		{
			chance: 30,
			qty: [1, 2],
			stash: "marijuana",
			name: "marijuana"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [4, 18],
			name: "caps"
		}
	],
	tough: [
		...HABIT,
		{
			chance: 35,
			qty: [1, 2],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 20,
			qty: [1, 1],
			stash: "psycho",
			name: "Psycho"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [8, 30],
			name: "caps"
		}
	],
	cop: [
		{
			chance: 70,
			qty: [4, 12],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 25,
			qty: [1, 1],
			stash: "vodka",
			name: "vodka"
		},
		{
			chance: 20,
			qty: [1, 1],
			pack: "10mm-jhp",
			name: "10mm JHP"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [12, 40],
			name: "caps"
		}
	],
	mordino: [
		{
			chance: 85,
			qty: [1, 4],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 40,
			qty: [1, 1],
			stash: "psycho",
			name: "Psycho"
		},
		{
			chance: 45,
			qty: [1, 2],
			stash: "cocaine",
			name: "cocaine"
		},
		{
			chance: 50,
			qty: [1, 8],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 35,
			qty: [1, 2],
			stash: "vodka",
			name: "vodka"
		},
		{
			chance: 30,
			qty: [1, 2],
			stash: "marijuana",
			name: "marijuana"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [10, 36],
			name: "caps"
		}
	],
	wright: [
		{
			chance: 80,
			qty: [1, 3],
			stash: "vodka",
			name: "moonshine (vodka)"
		},
		{
			chance: 50,
			qty: [1, 10],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 25,
			qty: [1, 2],
			stash: "marijuana",
			name: "marijuana"
		},
		{
			chance: 15,
			qty: [1, 1],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [8, 28],
			name: "caps"
		}
	],
	salvatore: [
		{
			chance: 40,
			qty: [1, 1],
			stash: "cocaine",
			name: "cocaine"
		},
		{
			chance: 55,
			qty: [1, 8],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 35,
			qty: [1, 2],
			stash: "vodka",
			name: "vodka"
		},
		{
			chance: 20,
			qty: [1, 1],
			stash: "psycho",
			name: "Psycho"
		},
		{
			chance: 15,
			qty: [1, 1],
			pack: "sec",
			name: "small energy cells"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [16, 50],
			name: "caps"
		}
	],
	bishop: [
		{
			chance: 50,
			qty: [1, 1],
			stash: "cocaine",
			name: "cocaine"
		},
		{
			chance: 45,
			qty: [1, 2],
			stash: "vodka",
			name: "vodka"
		},
		{
			chance: 60,
			qty: [1, 10],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 25,
			qty: [1, 1],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 20,
			qty: [1, 1],
			stash: "mentats",
			name: "Mentats"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [20, 70],
			name: "caps"
		}
	],
	ghoul: [
		{
			chance: 40,
			qty: [1, 1],
			stash: "psycho",
			name: "Psycho"
		},
		{
			chance: 30,
			qty: [1, 2],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [2, 12],
			name: "caps"
		}
	],
	mutant: [{
		chance: 30,
		qty: [1, 1],
		stash: "buffout",
		name: "Buffout"
	}, {
		chance: 100,
		qty: [1, 1],
		caps: [6, 24],
		name: "caps"
	}],
	drunk: [
		{
			chance: 90,
			qty: [1, 3],
			stash: "vodka",
			name: "vodka"
		},
		{
			chance: 60,
			qty: [1, 8],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [3, 16],
			name: "caps"
		}
	],
	tourist: [{
		chance: 40,
		qty: [1, 1],
		stash: "cigarettes",
		name: "cigarettes"
	}, {
		chance: 100,
		qty: [1, 1],
		caps: [20, 80],
		name: "caps"
	}],
	pimp: [
		{
			chance: 70,
			qty: [1, 2],
			stash: "cocaine",
			name: "cocaine"
		},
		{
			chance: 50,
			qty: [1, 2],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 40,
			qty: [1, 8],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [18, 60],
			name: "caps"
		}
	],
	dealer: [
		{
			chance: 90,
			qty: [1, 4],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 40,
			qty: [1, 1],
			stash: "psycho",
			name: "Psycho"
		},
		{
			chance: 50,
			qty: [1, 2],
			stash: "marijuana",
			name: "marijuana"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [12, 40],
			name: "caps"
		}
	],
	punk: [
		...HABIT,
		{
			chance: 30,
			qty: [1, 1],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [4, 18],
			name: "caps"
		}
	],
	raider: [
		{
			chance: 40,
			qty: [1, 1],
			stash: "psycho",
			name: "Psycho"
		},
		{
			chance: 50,
			qty: [1, 8],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 25,
			qty: [1, 1],
			pack: "10mm-jhp",
			name: "10mm JHP"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [10, 36],
			name: "caps"
		}
	],
	merc: [
		{
			chance: 35,
			qty: [1, 1],
			stash: "mentats",
			name: "Mentats"
		},
		{
			chance: 30,
			qty: [1, 1],
			pack: "10mm-jhp",
			name: "10mm JHP"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [22, 70],
			name: "caps"
		}
	],
	creep: [
		{
			chance: 50,
			qty: [1, 2],
			stash: "jet",
			name: "Jet"
		},
		{
			chance: 40,
			qty: [1, 1],
			stash: "vodka",
			name: "vodka"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [2, 12],
			name: "caps"
		}
	],
	cheat: [
		{
			chance: 55,
			qty: [1, 2],
			stash: "mentats",
			name: "Mentats"
		},
		{
			chance: 40,
			qty: [1, 8],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [16, 55],
			name: "caps"
		}
	],
	john: [{
		chance: 50,
		qty: [1, 1],
		stash: "vodka",
		name: "vodka"
	}, {
		chance: 100,
		qty: [1, 1],
		caps: [12, 45],
		name: "caps"
	}],
	bouncer: [
		{
			chance: 40,
			qty: [1, 2],
			stash: "vodka",
			name: "vodka"
		},
		{
			chance: 50,
			qty: [1, 8],
			stash: "cigarettes",
			name: "cigarettes"
		},
		{
			chance: 100,
			qty: [1, 1],
			caps: [10, 32],
			name: "caps"
		}
	]
};
function qtyOf(range) {
	if (range[0] === range[1]) return range[0];
	return range[0] + dN(range[1] - range[0] + 1) - 1;
}
var NOT_GEAR = /* @__PURE__ */ new Set(["fists"]);
function gearDrops(foe) {
	const drops = [];
	const wid = foe.weaponId;
	if (wid && !NOT_GEAR.has(wid)) {
		const item = getItem(wid);
		if (item && (item.kind === "weapon" || item.kind === "armor")) {
			drops.push({
				pack: wid,
				qty: 1,
				name: item.name
			});
			const ammoId = item.ammo?.[0];
			const ammoItem = ammoId ? getItem(ammoId) : void 0;
			const rounds = Math.max(0, Math.min(foe.loaded || 0, 18));
			if (ammoItem && rounds > 0) drops.push({
				pack: ammoId,
				qty: rounds,
				name: `${rounds} ${ammoItem.name}`
			});
		}
	}
	if (foe.armorId) {
		const armor = getItem(foe.armorId);
		if (armor) drops.push({
			pack: foe.armorId,
			qty: 1,
			name: armor.name
		});
	}
	return drops;
}
function rollLoot(foe) {
	if (foe.player || sideOf(foe) === "ally" || foe.fled) return [];
	const table = TABLES[foe.kind] ?? TABLES.tough;
	const drops = gearDrops(foe);
	for (const line of table) {
		if (d100() > line.chance) continue;
		if (line.caps) {
			const caps = line.caps[0] + dN(line.caps[1] - line.caps[0] + 1) - 1;
			drops.push({
				caps,
				qty: caps,
				name: `${caps} caps`
			});
		} else if (line.stash) {
			const qty = qtyOf(line.qty);
			drops.push({
				stash: line.stash,
				qty,
				name: `${qty} ${line.name}`
			});
		} else if (line.pack) {
			const qty = qtyOf(line.qty);
			drops.push({
				pack: line.pack,
				qty,
				name: `${qty} ${line.name}`
			});
		}
	}
	return drops;
}
function applyLoot(life, character, drops) {
	let sheet = character;
	for (const drop of drops) {
		if (drop.caps) life.caps += drop.caps;
		if (drop.stash) life.stash[drop.stash] = (life.stash[drop.stash] ?? 0) + drop.qty;
		if (drop.pack) {
			const loadout = addToPack(sheet.loadout, drop.pack, drop.qty);
			sheet = {
				...sheet,
				loadout,
				updatedAt: Date.now()
			};
		}
	}
	return sheet;
}
function lootSummary(drops) {
	if (!drops.length) return "Pockets empty.";
	return drops.map((d) => d.name).join(", ");
}
var STREET_NPCS = [
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
			blurb: "Rita wants the envelope on Mason's bar. Do not open it."
		}
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
		uses: ["motel"]
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
			blurb: "Lang wants the slip on a Bishop desk. He did not see who you are."
		}
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
			blurb: "Drop the card with a Virgin Street floor man. Jules gets his cut either way."
		}
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
		uses: ["bar", "office"]
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
			blurb: "Eddie wants it at the Chop Shop loft. Not the Wrights. Not the street."
		}
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
			blurb: "Bishop offices. Hand it to a secretary. Do not explain the case."
		}
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
		uses: [
			"casino",
			"shack",
			"shop"
		],
		job: {
			id: "wren-buyer",
			title: "A buyer at the Spur",
			to: "desperado",
			pay: 95,
			item: "two Jet and a name",
			blurb: "The buyer is inside the Desperado, not on the curb."
		}
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
		uses: ["tenement", "office"]
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
			blurb: "Leave it with whoever is awake in the Jungle. Do not drink the rent."
		}
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
		uses: ["warehouse", "rail"]
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
		uses: ["bar", "casino"]
	}
];
var FACTION_BEATS = {
	bishops: [
		"Bishop collectors walked the Strip. A tourist paid the smile tax and called it a tip.",
		"Sit-down at the Shark. The rail stayed empty. The boys did not.",
		"A Bishop errand went south of Second. By morning the curb was mopped.",
		"Bishop delivery off the rail. The paper did not have names. The crates did."
	],
	mordinos: [
		"Mordino runners moved Jet through the Globes. The walls smelled sweet.",
		"Little Jesus held a sit-down. Someone left without their cut.",
		"A Mordino hit was supposed to be quiet. The alley was not.",
		"Chem crates changed hands on Mordino Way. The courier did not look at faces."
	],
	salvatores: [
		"Mason turned three people away before noon. Salvatore did not come downstairs.",
		"A Salvatore sit-down with no raised voices. That is worse.",
		"Someone asked about the laser. They are not asking anymore.",
		"A quiet delivery to the bar. The box hummed. Nobody joked."
	],
	wrights: [
		"Wright cousins collected on stills. One cousin did not come back for supper.",
		"Orville's table. They said Richard's name once and then ate.",
		"A Wright warning got painted on a Mordino door. It will not stay painted.",
		"Shine left the compound in jugs. The Jungle will drink what the families will not."
	]
};
function factionLine(gang, day) {
	const lines = FACTION_BEATS[gang];
	return lines[Math.abs(day) % lines.length] ?? lines[0];
}
function factionBrief(day, here) {
	const lines = [];
	for (const g of GANGS) {
		const onTurf = g.turf === here;
		const featured = Math.abs(day + g.name.length) % 3 === 0;
		if (!onTurf && !featured) continue;
		const beat = factionLine(g.id, day + g.name.length);
		lines.push(onTurf ? `${beat} You are standing in it.` : beat);
	}
	return lines.slice(0, 3);
}
function npcFor(district, night, use) {
	const shift = night ? "night" : "day";
	const pool = STREET_NPCS.filter((n) => n.district === district || use && n.uses.includes(use));
	const exact = pool.find((n) => (use ? n.uses.includes(use) : n.district === district) && (n.shift === "any" || n.shift === shift));
	if (exact) return exact;
	return pool.find((n) => n.shift === "any" || n.shift === shift) ?? pool[0] ?? STREET_NPCS[0];
}
function remember(memory, id) {
	return memory?.[id] ?? {
		mood: 0,
		last: ""
	};
}
function roomCopy(use, night, abandoned, name) {
	if (abandoned) return {
		kicker: "Inside the ruin",
		body: night ? `${name} is a dark room with a second dark room behind it. Something already knows you opened the door.` : `${name} in daylight is nails, a mattress, and a smell that did not leave with the tenants.`
	};
	const table = {
		casino: [`${name} before the lamps earn their keep. A dealer practices with nobody watching.`, `${name} at night. Felt, smoke, a floor man who smiles with his teeth only.`],
		motel: [`The day hall at ${name}. Ice machine, a comic, a clerk who has heard every lie about a late checkout.`, `The lot is the business. ${name} after dark is keys, stairs, and a man who taxes both.`],
		tenement: [`Cooking that is not quite food. A radio. ${name} keeps its opinions in the stairwell.`, `Three windows lit. The rest of ${name} is a locked opinion.`],
		shop: [`${name} is open if the clerk is sober. Ammo under the glass. Rumors on top.`, `The shutter is half down. ${name} will still sell if you knock like you mean it.`],
		bar: [`Day drinkers and a rag on the stick. ${name} is honest until the families arrive.`, `${name} after dark. The regulars were here before you and plan to be here after.`],
		warehouse: [`Engines, tarps, a name sanded off a door. ${name} is working.`, `One bay light. ${name} does not like a second pair of eyes.`],
		shack: [`${name} is one room and a lean-to. Someone lives in both.`, `A fire-barrel and no questions. ${name} is smaller at night.`],
		abandoned: ["", ""],
		pawn: [`${name} buys what used to be someone else's. The shotgun is part of the counter.`, `Pawn light, green and mean. ${name} is still buying.`],
		ring: [`Sawdust. A heavy bag. ${name} smells like liniment and old tickets.`, `The canvas is up. ${name} pays the winner and bills the loser for the doctor.`],
		crypt: [`Daytime graves. ${name} pretends to be only stone.`, `${name} at night is not a place you tour.`],
		rail: [`Boxcars and a switch house. ${name} is a good place to hide product.`, `The yard is a dark grid. ${name} hides people worse than it hides crates.`],
		office: [`${name} has carpet and a secretary. The gun is in the drawer, not on the desk.`, `The polite floor stays lit. ${name} does not do night business with strangers.`]
	};
	const pair = table[use] ?? table.tenement;
	return {
		kicker: night ? "Night inside" : "Day inside",
		body: night ? pair[1] : pair[0]
	};
}
function districtName(id) {
	return DISTRICT_BY_ID[id]?.name ?? id;
}
var BUSINESS_COST = 1100;
function hustleHours(baseHours) {
	return baseHours * 5;
}
function hustleClock(baseHours) {
	const h = hustleHours(baseHours);
	const d = Math.floor(h / 24);
	const rem = h % 24;
	if (d <= 0) return `${h}h`;
	if (rem === 0) return `${d}d`;
	return `${d}d ${rem}h`;
}
function sneakCover(sneak) {
	if (sneak < 50) return {
		band: "novice",
		label: "Novice",
		heatMult: 1,
		heatDamp: 1,
		delayDays: 0,
		blurb: "Tracks are easy to follow. Heat sits on you at full weight."
	};
	if (sneak < 75) return {
		band: "noticeable",
		label: "Noticeable",
		heatMult: .55,
		heatDamp: .62,
		delayDays: 2,
		blurb: "Still visible. It takes time before anyone hunts a stash or comes knocking."
	};
	if (sneak < 100) return {
		band: "proficient",
		label: "Proficient",
		heatMult: .32,
		heatDamp: .4,
		delayDays: 4,
		blurb: "Hard to follow. A loud enough pile of heat still finds you."
	};
	return {
		band: "shadow",
		label: "Shadow",
		heatMult: .2,
		heatDamp: .26,
		delayDays: 6,
		blurb: "The street loses the trail. Volume still burns through a quiet act."
	};
}
function attentionMult(sneak, heat) {
	let mult = sneakCover(sneak).heatMult;
	if (heat >= 90) mult += .6;
	else if (heat >= 75) mult += .38;
	else if (heat >= 55) mult += .18;
	return Math.min(1, mult);
}
function cloneLife(life) {
	return ensureCity({
		...life,
		gangRep: { ...life.gangRep },
		addicted: { ...life.addicted },
		log: [...life.log],
		combat: life.combat ? {
			...life.combat,
			combatants: life.combat.combatants.map((c) => ({
				...c,
				crippled: { ...c.crippled }
			})),
			log: [...life.combat.log],
			order: [...life.combat.order]
		} : null,
		dialogue: life.dialogue ? { ...life.dialogue } : null,
		sighting: life.sighting ? {
			...life.sighting,
			foeIds: [...life.sighting.foeIds],
			foeNames: [...life.sighting.foeNames],
			allyIds: [...life.sighting.allyIds ?? []],
			allyNames: [...life.sighting.allyNames ?? []],
			foeKinds: [...life.sighting.foeKinds ?? []],
			allyKinds: [...life.sighting.allyKinds ?? []],
			placements: life.sighting.placements.map((p) => ({ ...p })),
			map: {
				...life.sighting.map,
				cells: life.sighting.map.cells.map((c) => ({ ...c }))
			}
		} : null,
		angela: { ...life.angela ?? emptyAngela() },
		posX: life.posX ?? DISTRICT_POS[life.district]?.x ?? 0,
		posZ: life.posZ ?? DISTRICT_POS[life.district]?.z ?? 0,
		stash: {
			...emptyStash(),
			...life.stash
		},
		minute: life.minute ?? 0,
		loot: life.loot ? {
			...life.loot,
			log: [...life.loot.log],
			drops: life.loot.drops.map((d) => ({ ...d })),
			foeNames: [...life.loot.foeNames]
		} : null,
		inspecting: life.inspecting ?? null,
		insideId: life.insideId ?? null,
		npcMemory: { ...life.npcMemory ?? {} },
		job: life.job ? { ...life.job } : null,
		worldDay: life.worldDay ?? 0,
		fear: life.fear ?? 0,
		regard: life.regard ?? 0,
		warrant: life.warrant ?? 0,
		strain: life.strain ?? 0,
		tension: life.tension ?? 50,
		friction: {
			mordinos: life.friction?.mordinos ?? 0,
			wrights: life.friction?.wrights ?? 0,
			salvatores: life.friction?.salvatores ?? 0,
			bishops: life.friction?.bishops ?? 0
		},
		grudges: { ...life.grudges ?? {} },
		absent: { ...life.absent ?? {} },
		reprieveMinute: life.reprieveMinute ?? 0,
		lastDose: { ...life.lastDose ?? {} },
		hunger: life.hunger ?? 22,
		thirst: life.thirst ?? 18,
		fatigue: life.fatigue ?? 12,
		boredom: life.boredom ?? 28,
		xp: life.xp ?? 0,
		dealers: (life.dealers ?? []).map((d) => ({
			...d,
			wares: [...d.wares]
		})),
		marks: (life.marks ?? []).map((m) => ({ ...m })),
		soughtDealer: life.soughtDealer ?? null,
		soughtMark: life.soughtMark ?? null,
		business: life.business ? { ...life.business } : null,
		dealing: Boolean(life.dealing),
		lab: Boolean(life.lab),
		pressureDay: life.pressureDay ?? 0,
		rations: life.rations ?? 0,
		waters: life.waters ?? 0
	});
}
function push(life, line) {
	life.log.unshift(line);
	if (life.log.length > 40) life.log.length = 40;
}
function skill(character, id) {
	return derive(character).skills[id]?.total ?? 0;
}
function housingOf(life) {
	return life.housingId ? HOUSING_BY_ID[life.housingId] : null;
}
function housingDanger(life) {
	const home = housingOf(life);
	if (!home) return 6;
	if (home.kind === "squat" && life.squatProgress >= 100) return Math.max(1, Math.round(home.danger / 2));
	return home.danger;
}
function hasPerk(character, id) {
	return (character.perks ?? []).includes(id);
}
function award(life, character, amount, why) {
	const total = amount + (hasPerk(character, "fortuneFinder") ? Math.round(amount * .15) : 0);
	life.xp = (life.xp ?? 0) + total;
	push(life, `${why} +${total} XP.`);
	return applyLevelUps(life, character, push);
}
function needPen(life) {
	let n = 0;
	const strained = (life.strain ?? 0) >= 180;
	if (strained && (life.hunger ?? 0) >= 86) n -= 8;
	if (strained && (life.thirst ?? 0) >= 86) n -= 8;
	if (strained && (life.fatigue ?? 0) >= 86) n -= 10;
	for (const [id, intensity] of Object.entries(life.addicted ?? {})) {
		if (!intensity) continue;
		const last = life.lastDose?.[id] ?? 0;
		if (life.day - last >= 2) n -= 6 + intensity * 2;
	}
	return n;
}
function rollSkill(character, life, id, extra = 0) {
	return skillRoll(skill(character, id) + needPen(life), extra);
}
function dose(life, character, stash) {
	if ((life.stash[stash] ?? 0) <= 0) return `No ${STASH_META[stash].name} in the pack.`;
	life.stash[stash] -= 1;
	life.lastDose = {
		...life.lastDose ?? {},
		[stash]: life.day
	};
	const reliant = character.traits.includes("chemReliant");
	const resist = character.traits.includes("chemResistant");
	const chance = clamp(18 + (reliant ? 22 : 0) - (resist ? 30 : 0) + (life.addicted[stash] ?? 0) * 8, 3, 85);
	if (d100() <= chance) {
		life.addicted[stash] = clamp((life.addicted[stash] ?? 0) + 1, 1, 3);
		return `The ${STASH_META[stash].name} takes. Addiction ${life.addicted[stash]}.`;
	}
	return null;
}
function beginGuardFight(life, character, mark, reason) {
	const n = guardCount(mark.wealth);
	const kind = mark.gang === "mordinos" ? "mordino" : mark.gang === "wrights" ? "wright" : mark.gang === "salvatores" ? "salvatore" : mark.gang === "bishops" ? "bishop" : "bouncer";
	const foes = [];
	for (let i = 0; i < n; i++) {
		const foe = combatantFromFoe(FOES[kind] ?? FOES.bouncer);
		foe.id = `${kind}-${i}`;
		foes.push(foe);
	}
	const player = playerCombatant(character, {
		hp: life.hp,
		trainBonus: life.trainBonus
	});
	player.hp = life.hp;
	const night = isNight(life);
	const setting = settingFromZone(zoneAt(life.posX, life.posZ), night);
	const layout = generateEncounter({
		setting,
		surprise: false,
		foeCount: foes.length,
		night
	});
	player.hexQ = layout.player.q;
	player.hexR = layout.player.r;
	foes.forEach((foe, i) => {
		const slot = layout.foes[i] ?? layout.foes[0];
		foe.hexQ = slot.q;
		foe.hexR = slot.r;
	});
	const light = lightingFromSetting(setting, night);
	life.combat = placeOnStreet(life, startCombat({
		kind: "raid",
		player,
		foes,
		lighting: hasPerk(character, "nightVision") ? Math.round(light.penalty / 2) : light.penalty,
		lightingLabel: light.label,
		initiator: "player",
		map: layout.map
	}), "crime");
	life.sighting = null;
	push(life, `${reason} ${n} guard${n === 1 ? "" : "s"} for ${mark.name}.`);
}
function tickNeeds(life, mins) {
	life.hunger = clamp((life.hunger ?? 22) + mins / 52, 0, 100);
	life.thirst = clamp((life.thirst ?? 18) + mins / 40, 0, 100);
	life.fatigue = clamp((life.fatigue ?? 12) + mins / 48, 0, 100);
	life.boredom = clamp((life.boredom ?? 28) + mins / 90, 0, 100);
	if ((life.hunger >= 86 ? 1 : 0) + (life.thirst >= 86 ? 1 : 0) + (life.fatigue >= 86 ? 1 : 0) > 0) life.strain = (life.strain ?? 0) + mins;
	else life.strain = Math.max(0, (life.strain ?? 0) - mins);
}
var PACK_FOOD = ["iguana-stick", "fruit"];
var PACK_DRINK = ["water-flask", "nuka-cola"];
var pantry = null;
function mealCost(character) {
	return hasPerk(character, "masterTrader") ? 10 : 12;
}
function waterCost(character) {
	return hasPerk(character, "masterTrader") ? 3 : 4;
}
function takePacked(ids) {
	if (!pantry) return null;
	for (const id of ids) {
		if (countItem(pantry.character.loadout, id) <= 0) continue;
		const next = consumeItem(pantry.character.loadout, id, 1);
		if (!next) continue;
		pantry.character = {
			...pantry.character,
			loadout: next,
			updatedAt: Date.now()
		};
		return getItem(id)?.name ?? id;
	}
	return null;
}
function settlePantry(life) {
	if (!pantry) return;
	while ((life.hunger ?? 0) >= 72) {
		if ((life.rations ?? 0) > 0) {
			life.rations -= 1;
			life.hunger = clamp(life.hunger - 48, 0, 100);
			pantry.meals += 1;
			continue;
		}
		const packed = takePacked(PACK_FOOD);
		if (packed) {
			life.hunger = clamp(life.hunger - 48, 0, 100);
			pantry.fromPack.push(packed);
			continue;
		}
		if (pantry.buy) {
			const price = mealCost(pantry.character);
			if (life.caps >= price) {
				life.caps -= price;
				life.hunger = clamp(life.hunger - 48, 0, 100);
				pantry.boughtMeals += 1;
				pantry.spent += price;
				continue;
			}
		}
		break;
	}
	while ((life.thirst ?? 0) >= 72) {
		if ((life.waters ?? 0) > 0) {
			life.waters -= 1;
			life.thirst = clamp(life.thirst - 52, 0, 100);
			pantry.waters += 1;
			continue;
		}
		const packed = takePacked(PACK_DRINK);
		if (packed) {
			life.thirst = clamp(life.thirst - 52, 0, 100);
			pantry.fromPack.push(packed);
			continue;
		}
		if (pantry.buy) {
			const price = waterCost(pantry.character);
			if (life.caps >= price) {
				life.caps -= price;
				life.thirst = clamp(life.thirst - 52, 0, 100);
				pantry.boughtWaters += 1;
				pantry.spent += price;
				continue;
			}
		}
		break;
	}
}
function pantryLine() {
	if (!pantry) return null;
	const bits = [];
	if (pantry.meals) bits.push(`${pantry.meals} packed meal${pantry.meals === 1 ? "" : "s"}`);
	if (pantry.waters) bits.push(`${pantry.waters} canteen${pantry.waters === 1 ? "" : "s"}`);
	if (pantry.fromPack.length) bits.push(pantry.fromPack.join(", "));
	if (pantry.boughtMeals || pantry.boughtWaters) {
		const bought = [];
		if (pantry.boughtMeals) bought.push(`${pantry.boughtMeals} plate${pantry.boughtMeals === 1 ? "" : "s"}`);
		if (pantry.boughtWaters) bought.push(`${pantry.boughtWaters} water${pantry.boughtWaters === 1 ? "" : "s"}`);
		bits.push(`bought ${bought.join(" and ")} for ${pantry.spent} caps`);
	}
	if (!bits.length) return null;
	return `You ate and drank as it came due: ${bits.join("; ")}.`;
}
function tickMinutes(life, mins) {
	let left = Math.max(0, Math.round(mins));
	while (left > 0) {
		const intoHour = 60 - (life.minute ?? 0);
		const step = Math.min(left, intoHour <= 0 ? 60 : intoHour);
		tickNeeds(life, step);
		if (pantry) settlePantry(life);
		life.minute = (life.minute ?? 0) + step;
		left -= step;
		if (life.minute < 60) continue;
		life.minute -= 60;
		life.hour += 1;
		driftHour(life);
		if ((life.strain ?? 0) >= 360 && (life.hunger >= 94 || life.thirst >= 96)) life.hp = Math.max(1, life.hp - 1);
		if (life.hour >= 24) {
			life.hour -= 24;
			life.day += 1;
			payWeeklyRent(life);
			if ((life.strain ?? 0) >= 360 && life.hunger >= 86) push(life, "Hunger has been sitting long enough to matter. The city still does not feed you.");
			if ((life.strain ?? 0) >= 360 && life.thirst >= 86) push(life, "Thirst has gone from dry to mean.");
			if (life.fatigue >= 90 && (life.strain ?? 0) >= 240) push(life, "You have not slept. It took this long to swim.");
			if (life.boredom >= 90) push(life, "Boredom, slow as a watch. Reno will invent a problem if you do not.");
			runWorldDay(life, rollingSheet);
		}
	}
}
function tick(life, hours) {
	tickMinutes(life, Math.max(1, Math.round(hours * 60)));
}
function driftHour(life) {
	const sneak = rollingSheet ? skill(rollingSheet, "sneak") : 40;
	const leak = sneak >= 100 ? .025 : sneak >= 75 ? .04 : sneak >= 50 ? .06 : .09;
	const gap = life.heat - (life.warrant ?? 0);
	life.warrant = clamp((life.warrant ?? 0) + gap * leak, 0, 100);
	life.heat = clamp(life.heat - .15, 0, 100);
	life.fear = Math.max(0, (life.fear ?? 0) - .12);
	const regardTarget = clamp(life.fame - Math.floor((life.fear ?? 0) / 5), 0, 100);
	if ((life.regard ?? 0) < regardTarget) life.regard = Math.min(regardTarget, (life.regard ?? 0) + 1);
	else if ((life.regard ?? 0) > regardTarget) life.regard = Math.max(regardTarget, (life.regard ?? 0) - 1);
	const before = life.tension ?? 0;
	life.tension = clamp(before + .34 - .12, 0, 100);
	if (before < 48 && life.tension >= 48) push(life, "Rival crews are walking. Not a random knife. Their temperature finally got them onto the same road.");
	for (const id of [
		"mordinos",
		"wrights",
		"salvatores",
		"bishops"
	]) life.friction[id] = Math.max(0, (life.friction[id] ?? 0) - .15);
}
function addFame(life, amount, loud = false) {
	if (amount <= 0) {
		life.fame = Math.max(0, life.fame + amount);
		return amount;
	}
	const gain = Math.max(1, Math.min(loud ? 3 : 2, Math.round(amount * .45)));
	life.fame = clamp(life.fame + gain, 0, 100);
	return gain;
}
function noteOutrage(life, gang, n) {
	life.fear = clamp((life.fear ?? 0) + Math.min(6, Math.max(1, Math.round(n * .45))), 0, 100);
	life.tension = clamp((life.tension ?? 0) + Math.min(4, Math.max(1, Math.round(n * .25))), 0, 100);
	if (gang) life.friction[gang] = clamp((life.friction[gang] ?? 0) + Math.max(1, Math.round(n * .55)), 0, 100);
}
function placeOnStreet(life, combat, cause) {
	combat.onMap = true;
	combat.originX = life.posX;
	combat.originZ = life.posZ;
	combat.hexScale = HEX_METERS;
	combat.cause = cause;
	return combat;
}
function grantReprieve(life, minutes) {
	life.reprieveMinute = clockMinute(life) + minutes;
}
var rollingSheet = null;
function runWorldDay(life, character) {
	if ((life.worldDay ?? 0) >= life.day) return;
	life.worldDay = life.day;
	for (const line of factionBrief(life.day, life.district)) push(life, line);
	if (life.business) {
		const take = 40 + life.day * 17 % 50;
		const help = 12 + life.day % 9;
		life.caps += Math.max(0, take - help);
		push(life, `${life.business.name} took in ${take} caps and paid the help ${help}. You were not behind the counter.`);
	}
	if (life.dealing) {
		const sneak = character ? skill(character, "sneak") : 40;
		const lk = character ? derive(character).special.LK : 5;
		const sold = 1 + (life.day + lk) % 3;
		const have = life.stash.jet ?? 0;
		const moved = Math.min(have, sold);
		if (moved > 0) {
			life.stash.jet -= moved;
			const pay = moved * (40 + lk * 2);
			life.caps += pay;
			const heat = Math.max(1, Math.round(6 * moved * (100 - Math.min(90, sneak)) / 100));
			life.heat = clamp(life.heat + heat, 0, 100);
			push(life, `A buyer found the stash without you. −${moved} Jet, +${pay} caps. Heat +${heat}. Sneak ${sneak} ${sneak >= 75 ? "kept it quiet" : sneak >= 50 ? "bought you time" : "left a trail"}.`);
		} else push(life, "Your corner had a buyer and no Jet. They will remember the empty hand.");
	}
	if (life.lab && character) push(life, "The lab sat cold overnight. Product does not cook itself. You still owe the room its rent in attention.");
	if (!life.job && life.day % 5 === 0) push(life, "A courier missed a drop on the east side. The bag is gone. The story is not.");
}
function payWeeklyRent(life) {
	const home = housingOf(life);
	if (!home || home.kind !== "rent" || home.rent <= 0) return;
	const week = Math.floor((life.day - 1) / 7);
	if (week <= (life.rentPaidWeek ?? 0) || week === 0) return;
	if (life.caps >= home.rent) {
		life.caps -= home.rent;
		life.rentPaidWeek = week;
		push(life, `Rent for ${home.name}: −${home.rent} caps.`);
	} else {
		life.housingId = null;
		life.squatProgress = 0;
		life.rentPaidWeek = week;
		push(life, `The lock changed. ${home.name} is no longer yours. You are on the street.`);
	}
}
function spotsFirst(character, life) {
	const outdoor = skill(character, "outdoorsman");
	const d = derive(character);
	const perception = Math.max(outdoor, d.special.PE * 5 + d.special.LK * 2);
	const night = isNight(life);
	return skillRoll(perception, -DISTRICT_BY_ID[life.district].danger * 3 - (night ? 12 : 0)).success;
}
function startFromSighting(life, character, initiated) {
	const sight = life.sighting;
	if (!sight) return;
	const foes = sight.foeIds.map((raw, i) => {
		const kind = sight.foeKinds?.[i] ?? (FOES[raw] ? raw : "tough");
		const foe = combatantFromFoe(FOES[kind] ?? FOES.tough);
		foe.kind = kind;
		foe.id = sight.foeKinds?.length ? raw : `${kind}-${i}`;
		foe.name = sight.foeNames[i] ?? foe.name;
		const place = sight.placements.find((p) => p.id === foe.id) ?? sight.placements.filter((p) => !p.player && !p.ally)[i];
		if (place) {
			foe.hexQ = place.q;
			foe.hexR = place.r;
		}
		return foe;
	});
	const allies = (sight.allyIds ?? []).map((raw, i) => {
		const kind = sight.allyKinds?.[i] ?? (FOES[raw] ? raw : "tough");
		const ally = combatantFromFoe(FOES[kind] ?? FOES.tough);
		ally.side = "ally";
		ally.player = false;
		ally.kind = kind;
		ally.id = sight.allyKinds?.length ? raw : `ally-${kind}-${i}`;
		ally.name = sight.allyNames?.[i] ?? ally.name;
		const place = sight.placements.find((p) => p.id === ally.id);
		if (place) {
			ally.hexQ = place.q;
			ally.hexR = place.r;
		}
		return ally;
	});
	const player = playerCombatant(character, {
		hp: life.hp,
		trainBonus: life.trainBonus
	});
	player.hp = life.hp;
	const pPlace = sight.placements.find((p) => p.player);
	if (pPlace) {
		player.hexQ = pPlace.q;
		player.hexR = pPlace.r;
	}
	const light = lightingOf(life);
	life.combat = placeOnStreet(life, startCombat({
		kind: "street",
		player,
		foes,
		allies,
		lighting: sight.lighting ?? light.penalty,
		lightingLabel: sight.lightingLabel ?? light.label,
		initiator: initiated,
		map: sight.map
	}), sight.cause === "feud" || sight.cause === "crime" ? sight.cause : "hunt");
	life.sighting = null;
}
function settleCombat(life, character) {
	const combat = life.combat;
	if (!combat?.result) return character;
	const player = playerOf(combat);
	const foe = foeOf(combat);
	if (player) life.hp = Math.max(0, player.hp);
	if (combat.result === "win") {
		if (combat.kind === "boxing") {
			const purse = combat.purse ?? 10 + dN(20);
			life.caps += purse;
			life.boxingWins += 1;
			addFame(life, 4 + dN(4), true);
			life.trainBonus = Math.max(0, life.trainBonus - 5);
			const idx = BOXING_ORDER.indexOf(life.boxingRank);
			if (life.boxingWins >= 2 && idx >= 0 && idx < BOXING_ORDER.length - 1 && life.boxingRank !== "champion") {
				if (life.boxingWins % 2 === 0) {
					life.boxingRank = BOXING_ORDER[idx + 1];
					push(life, `The card man nods. You are ${life.boxingRank} now.`);
				}
			}
			life.nextFightDay = life.day + 4 + dN(4);
			push(life, `The bell saves ${foe?.name ?? "them"}. Purse: ${purse} caps. Fame ${life.fame}.`);
			character = award(life, character, Math.round(110 + (combat.purse ?? 0) / 8), "The Ring pays in more than caps.");
		} else {
			const gained = addHeat(life, character, combat.kind === "raid" ? 8 : 5, true);
			const deadFoes = combat.combatants.filter((c) => sideOf(c) === "foe" && c.hp <= 0 && !c.fled);
			noteOutrage(life, void 0, combat.cause === "feud" ? 3 : 5);
			if (combat.cause === "feud") life.tension = clamp((life.tension ?? 0) - 14, 0, 100);
			for (const dead of deadFoes) {
				if (SOUL_BY_ID[dead.id]) life.absent[dead.id] = life.day + 1;
				const gang = dead.kind === "mordino" ? "mordinos" : dead.kind === "wright" ? "wrights" : dead.kind === "salvatore" ? "salvatores" : dead.kind === "bishop" ? "bishops" : void 0;
				if (gang) life.friction[gang] = clamp((life.friction[gang] ?? 0) + 6, 0, 100);
			}
			grantReprieve(life, 50);
			const drops = deadFoes.flatMap((c) => rollLoot(c));
			if (hasPerk(character, "fortuneFinder")) {
				for (const drop of drops) if (drop.caps) drop.caps = Math.round(drop.caps * 1.25);
			}
			life.loot = {
				log: [...combat.log],
				drops,
				foeNames: deadFoes.map((c) => c.name),
				summary: lootSummary(drops)
			};
			const xp = deadFoes.reduce((n, c) => n + 50 + Math.round(c.hpMax * 1.2), 0);
			character = award(life, character, xp, "The street keeps score.");
			const friends = combat.combatants.filter((c) => sideOf(c) === "ally" && c.hp > 0 && !c.fled);
			if (friends.length) push(life, `${friends.map((a) => a.name).join(" and ")} peels off once the last enemy drops.`);
			push(life, deadFoes.length ? `They drop. Heat +${gained}, and the block will feel it later, not this second. Search them.` : "The street clears. Nothing left to search.");
		}
		life.combat = null;
		return character;
	} else if (combat.result === "flee") {
		const drop = Math.min(life.caps, 8 + dN(12));
		life.caps -= drop;
		life.heat = clamp(life.heat + 1, 0, 100);
		grantReprieve(life, 40);
		push(life, `You run the green hexes back to the street. ${drop} caps scatter behind you. They do not follow this minute.`);
	} else {
		const loss = Math.min(life.caps, 20 + dN(40));
		life.caps -= loss;
		const skip = 1 + dN(2);
		life.day += skip;
		life.hour = 10;
		life.hp = Math.max(1, Math.round(life.hpMax / 4));
		if (combat.kind === "boxing") {
			life.boxingLosses += 1;
			life.fame = Math.max(0, life.fame - 1);
			life.regard = Math.max(0, (life.regard ?? 0) - 1);
			life.nextFightDay = life.day + 6;
			push(life, `You wake on a cot under the ring. −${loss} caps. ${skip} days gone.`);
		} else {
			life.housingId = life.housingId && housingDanger(life) >= 8 ? null : life.housingId;
			push(life, `A doctor you do not remember bills you ${loss} caps. ${skip} days of black.`);
		}
	}
	life.combat = null;
	return character;
}
function atDistrict(life, id) {
	return life.district === id;
}
function canJoin(life, gang, character) {
	if (life.gangId) return `You already work for the ${GANG_BY_ID[life.gangId].name}.`;
	const def = GANG_BY_ID[gang];
	if (life.district !== def.turf) return `Ask on their turf. ${def.head} keeps court at ${DISTRICT_BY_ID[def.turf].name}.`;
	if (life.gangRep[gang] < -15) return `${def.head} remembers your face. Not kindly.`;
	if (life.gangRep[def.rival] >= 12) return `${def.head} doesn't hire ${GANG_BY_ID[def.rival].name} pets. Lose the other family's smell.`;
	if (skill(character, "speech") < 20 && life.caps < 40) return `They want a silver tongue or a buy-in.`;
	return null;
}
var TRADE_CHEMS = [
	"jet",
	"marijuana",
	"cocaine",
	"buffout",
	"mentats",
	"psycho"
];
function tradeStock(life) {
	return TRADE_CHEMS.reduce((n, id) => n + (life.stash[id] ?? 0), 0);
}
function pullTrade(life, qty) {
	let left = qty;
	let value = 0;
	const bits = [];
	for (const id of TRADE_CHEMS) {
		if (left <= 0) break;
		const have = life.stash[id] ?? 0;
		if (have <= 0) continue;
		const n = Math.min(have, left);
		life.stash[id] = have - n;
		left -= n;
		value += STASH_META[id].street * n;
		bits.push(`${n} ${STASH_META[id].name}`);
	}
	return {
		taken: qty - left,
		value,
		note: bits.join(", ")
	};
}
function lean(character, extra = 0) {
	const lk = derive(character).special.LK;
	const roll = d100();
	const score = roll + lk * 2 + extra;
	return {
		roll,
		lk,
		score,
		band: score >= 100 ? "lucky" : score >= 74 ? "clean" : score >= 52 ? "even" : score >= 32 ? "sour" : "wreck"
	};
}
function leanNote(l) {
	return `Roll ${l.roll}, Luck ${l.lk} leans it by ${l.lk * 2}.`;
}
function addHeat(life, character, base, criminal) {
	const sneak = skill(character, "sneak");
	const mult = criminal ? attentionMult(sneak, life.heat) : Math.min(1, .45 + attentionMult(sneak, life.heat) * .55);
	const slowed = Math.max(0, Math.round(base * .4));
	const gain = Math.max(criminal && base >= 12 ? 1 : 0, Math.round(slowed * mult));
	life.heat = clamp(life.heat + gain, 0, 100);
	if (criminal && gain > 0) armPressure(life, character);
	return gain;
}
function armPressure(life, character) {
	const cover = sneakCover(skill(character, "sneak"));
	if (cover.delayDays <= 0) return;
	if ((cover.band === "proficient" || cover.band === "shadow") && life.heat < 28) return;
	const wait = life.heat >= 65 ? Math.max(1, Math.ceil(cover.delayDays / 2)) : cover.delayDays;
	const due = life.day + wait;
	life.pressureDay = life.pressureDay > life.day ? Math.min(life.pressureDay, due) : due;
}
function tracks(life, character, label) {
	if (life.combat || life.sighting || life.dead) return;
	const cover = sneakCover(skill(character, "sneak"));
	const add = cover.band === "shadow" ? 0 : cover.band === "proficient" ? 1 : cover.band === "noticeable" ? 2 : 3;
	if (add <= 0) {
		push(life, `${label} The street does not have a file on you yet.`);
		return;
	}
	life.warrant = clamp((life.warrant ?? 0) + add, 0, 100);
	push(life, `${label} Warrant +${add}. Heat is the noise. The walk comes later.`);
}
function settlePressure(life, character) {
	if (life.dead || life.combat || life.sighting) return;
	if (!life.pressureDay || life.pressureDay > life.day) return;
	life.pressureDay = 0;
	const cover = sneakCover(skill(character, "sneak"));
	if (life.heat < 18) {
		push(life, "The questions dried up. For now.");
		return;
	}
	const coverHolds = cover.band === "proficient" || cover.band === "shadow";
	const slipTarget = Math.min(92, 28 + life.heat - Math.floor(skill(character, "sneak") / 5));
	if (coverHolds && d100() > slipTarget) {
		life.heat = clamp(life.heat - 4, 0, 100);
		push(life, cover.band === "shadow" ? "They hunted a stash and walked past it. Heat is still a pile, not a map." : "It took them this long. They still opened the wrong door.");
		return;
	}
	if (d100() <= 55) {
		const pulled = pullTrade(life, 1 + dN(3));
		if (pulled.taken > 0) push(life, `A stash spot is bare. Gone: ${pulled.note}.`);
		else {
			life.heat = clamp(life.heat + 4, 0, 100);
			push(life, "They kicked a door and found nothing worth taking. They are angrier.");
		}
		return;
	}
	life.warrant = clamp((life.warrant ?? 0) + 6, 0, 100);
	push(life, "The questions arrived as a file, not a gun. Warrant moved. Someone still has to walk across Reno.");
}
function burnFast(life, character, baseHours, buy = false) {
	const hours = hustleHours(baseHours);
	const day = life.day;
	pantry = {
		character,
		buy,
		meals: 0,
		waters: 0,
		boughtMeals: 0,
		boughtWaters: 0,
		spent: 0,
		fromPack: []
	};
	try {
		tick(life, hours);
		const note = pantryLine();
		const next = pantry.character;
		push(life, `${hours} hours gone. Five times a normal stretch. The city did not wait.`);
		if (note) push(life, note);
		if (life.day > day) settlePressure(life, next);
		return next;
	} finally {
		pantry = null;
	}
}
function frontName(district) {
	return {
		virgin: "Secondhand Virgin",
		shark: "A quiet book beside the Shark",
		desperado: "Desperado side room",
		motel: "Lot concession",
		mordino: "Counter two doors off the Stables",
		salvatore: "A room that does not advertise",
		jungle: "Jungle Gym stock",
		stables: "Ring towel stand",
		wright: "A still with your name on the mash",
		chop: "Chop-shop ledger",
		rail: "Yard crate business",
		golgotha: "Grave goods",
		bishop: "A front the Shark can see",
		market: "Market stall with a lock"
	}[district];
}
function grantChems(life, jet, mentats = 0) {
	life.stash.jet += jet;
	life.stash.mentats += mentats;
}
function runHustle(life, character, action) {
	let sheet = character;
	if (action.type === "courtFamily") {
		const err = canCourt(life, action.gang);
		if (err) {
			push(life, err);
			return {
				life,
				character: sheet
			};
		}
		const gang = GANG_BY_ID[action.gang];
		sheet = burnFast(life, sheet, 8);
		const l = lean(sheet, Math.floor(skill(sheet, "speech") / 5) + Math.floor((life.gangRep[action.gang] ?? 0) / 2));
		if (l.band === "wreck") {
			life.gangRep[action.gang] -= 6;
			life.gangRep[gang.rival] += 2;
			const gained = addHeat(life, sheet, 16, true);
			push(life, `${gang.head} decides you are a plant. ${leanNote(l)} Heat +${gained}. Their blades will walk the block later. Not this room.`);
			life.friction[action.gang] = clamp((life.friction[action.gang] ?? 0) + 16, 0, 100);
		} else if (l.band === "sour") {
			life.gangRep[action.gang] -= 2;
			const gained = addHeat(life, sheet, 8, true);
			push(life, `You haunt ${gang.front} and leave with nothing. ${leanNote(l)} Heat +${gained}.`);
			tracks(life, sheet, "Someone watched you hang around the family.");
		} else if (l.band === "even") {
			life.gangRep[action.gang] += 4;
			const gained = addHeat(life, sheet, 8, true);
			const bite = Math.min(life.caps, 40 + dN(40));
			life.caps -= bite;
			push(life, `Drinks that were not drinks. They know your name. Not a job. −${bite} caps. ${leanNote(l)} Heat +${gained}.`);
			tracks(life, sheet, "A rival counted how long you sat with them.");
		} else {
			life.gangId = action.gang;
			life.gangRank = 1;
			life.gangRep[action.gang] += l.band === "lucky" ? 10 : 6;
			life.gangRep[gang.rival] -= 8;
			if (l.band === "lucky") addFame(life, 2);
			const gained = addHeat(life, sheet, l.band === "lucky" ? 8 : 12, true);
			push(life, l.band === "lucky" ? `${gang.head} likes the quiet way you asked. You are ${gang.ranks[0]}. ${leanNote(l)} Heat +${gained}. ${gang.credo}` : `You are in with the ${gang.name}. Rank: ${gang.ranks[0]}. ${leanNote(l)} Heat +${gained}. ${gang.credo}`);
			sheet = award(life, sheet, l.band === "lucky" ? 110 : 80, "A family took you.");
			tracks(life, sheet, "Making a family is not a private act.");
		}
		return {
			life,
			character: sheet
		};
	}
	if (action.type === "carouse") {
		const d = derive(sheet);
		sheet = burnFast(life, sheet, 4, true);
		const l = lean(sheet, Math.floor(Math.max(skill(sheet, "speech"), skill(sheet, "gambling"), d.special.CH * 4) / 6));
		life.boredom = clamp((life.boredom ?? 28) - (l.band === "wreck" ? 8 : l.band === "sour" ? 18 : 36), 0, 100);
		if (l.band === "wreck") {
			const lose = Math.min(life.caps, 25 + dN(45));
			life.caps -= lose;
			const gained = addHeat(life, sheet, 12, true);
			push(life, `A loud night, a wrong table. −${lose} caps. ${leanNote(l)} Heat +${gained}. Nobody draws. The story has to catch up.`);
			life.grudges.red = Math.min(100, (life.grudges.red ?? 0) + 8);
			life.fear = clamp((life.fear ?? 0) + 2, 0, 100);
			tracks(life, sheet, "You were the loudest thing on the block.");
		} else if (l.band === "sour") {
			const lose = Math.min(life.caps, 8 + dN(16));
			life.caps -= lose;
			const gained = addHeat(life, sheet, 6, true);
			push(life, `Cheap liquor, cheaper stories. −${lose} caps. ${leanNote(l)} Heat +${gained}.`);
			tracks(life, sheet, "People remember the tab more than the joke.");
		} else if (l.band === "even") {
			const spend = Math.min(life.caps, 12 + dN(10));
			life.caps -= spend;
			addFame(life, 1);
			const gained = addHeat(life, sheet, 5, true);
			push(life, `Cards, smoke, a story someone will repeat wrong. −${spend} caps. ${leanNote(l)} Heat +${gained}.`);
			sheet = award(life, sheet, 20, "You were seen, not studied.");
		} else if (l.band === "clean") {
			const win = 30 + dN(40) + d.special.LK;
			life.caps += win;
			addFame(life, 2);
			const gained = addHeat(life, sheet, 6, true);
			push(life, `The table leaned your way. +${win} caps. ${leanNote(l)} Heat +${gained}.`);
			sheet = award(life, sheet, 35, "A night that paid.");
			tracks(life, sheet, "Winners get looked at.");
		} else {
			const win = 70 + dN(90) + d.special.LK * 3;
			life.caps += win;
			addFame(life, 3);
			const local = DISTRICT_BY_ID[life.district].gang;
			if (local) life.gangRep[local] += 3;
			const gained = addHeat(life, sheet, 4, true);
			push(life, `Reno buys you a round and a rumor. +${win} caps. ${leanNote(l)} Heat +${gained}.`);
			sheet = award(life, sheet, 50, "Luck had a seat at the table.");
			tracks(life, sheet, "Even a charmed night leaves a trail if you stack them.");
		}
		return {
			life,
			character: sheet
		};
	}
	if (action.type === "business") {
		if (!life.business) {
			if (life.caps < 1100) {
				push(life, `A front takes ${BUSINESS_COST} caps. You have ${life.caps}. Reno does not do layaway.`);
				return {
					life,
					character: sheet
				};
			}
			life.caps -= BUSINESS_COST;
			sheet = burnFast(life, sheet, 10);
			const l = lean(sheet, Math.floor(skill(sheet, "barter") / 5));
			const name = frontName(life.district);
			if (l.band === "wreck" || l.band === "sour") {
				const back = l.band === "wreck" ? Math.round(BUSINESS_COST * .15) : Math.round(BUSINESS_COST * .35);
				life.caps += back;
				const gained = addHeat(life, sheet, l.band === "wreck" ? 18 : 12, true);
				push(life, l.band === "wreck" ? `The locksmith, the family, and a cousin with a clipboard eat the stake. ${name} never opens. +${back} caps back. ${leanNote(l)} Heat +${gained}.` : `The paper was wrong. ${name} dies in a week of permits. +${back} caps back. ${leanNote(l)} Heat +${gained}.`);
				tracks(life, sheet, "Money that loud has a forwarding address.");
				if (DISTRICT_BY_ID[life.district].gang) {
					const g = DISTRICT_BY_ID[life.district].gang;
					life.friction[g] = clamp((life.friction[g] ?? 0) + 10, 0, 100);
				}
				return {
					life,
					character: sheet
				};
			}
			life.business = {
				name,
				invested: BUSINESS_COST,
				district: life.district,
				openedDay: life.day
			};
			const bonus = l.band === "lucky" ? 180 + dN(80) : l.band === "clean" ? 60 + dN(40) : 0;
			life.caps += bonus;
			if (l.band === "lucky") addFame(life, 2);
			const gained = addHeat(life, sheet, l.band === "lucky" ? 8 : 12, true);
			push(life, `${name} opens on ${DISTRICT_BY_ID[life.district].name}.${bonus ? ` Opening night +${bonus} caps.` : " The first week is dry."} ${leanNote(l)} Heat +${gained}.`);
			sheet = award(life, sheet, l.band === "lucky" ? 90 : 60, "You bought a piece of the block.");
			tracks(life, sheet, "A new wallet on the block gets counted.");
			return {
				life,
				character: sheet
			};
		}
		sheet = burnFast(life, sheet, 4);
		const shop = life.business;
		const l = lean(sheet, Math.floor(skill(sheet, "barter") / 4));
		const base = Math.round(shop.invested * .045) + 10;
		if (l.band === "wreck") {
			const shaked = Math.min(life.caps, Math.round(shop.invested * .08) + dN(40));
			life.caps -= shaked;
			const gained = addHeat(life, sheet, 14, true);
			push(life, `${shop.name} pays a shakedown, not a profit. −${shaked} caps. ${leanNote(l)} Heat +${gained}. The collectors leave with a name, not a body.`);
			tracks(life, sheet, "A business that pays protection is a map.");
			if (DISTRICT_BY_ID[life.district].gang) {
				const g = DISTRICT_BY_ID[life.district].gang;
				life.friction[g] = clamp((life.friction[g] ?? 0) + 8, 0, 100);
			}
		} else if (l.band === "sour") {
			const pay = Math.round(base * .35);
			life.caps += pay;
			const gained = addHeat(life, sheet, 8, true);
			push(life, `${shop.name} limps. +${pay} caps. ${leanNote(l)} Heat +${gained}.`);
			tracks(life, sheet, "Even a bad week has regulars who talk.");
		} else {
			const mult = l.band === "lucky" ? 1.8 : l.band === "clean" ? 1.25 : .9;
			const pay = Math.round(base * mult) + (l.band === "lucky" ? derive(sheet).special.LK * 4 : 0);
			life.caps += pay;
			if (l.band === "lucky") addFame(life, 1);
			const gained = addHeat(life, sheet, l.band === "lucky" ? 5 : 8, true);
			push(life, `${shop.name} clears +${pay} caps. ${leanNote(l)} Heat +${gained}.`);
			sheet = award(life, sheet, l.band === "lucky" ? 55 : 35, "The front paid.");
			tracks(life, sheet, "Receipts are a kind of trail.");
		}
		return {
			life,
			character: sheet
		};
	}
	if (action.type === "dealing") {
		const open = !life.dealing;
		const need = open ? 5 : 3;
		const stock = tradeStock(life);
		if (stock < need) {
			push(life, open ? `Dealing needs a pile, not a taste. ${stock} doses on you. Bring ${need}. Jet, Psycho, Buffout, Mentats, marijuana, cocaine.` : `The corner is dry. ${stock} doses left. You need ${need} to move product.`);
			return {
				life,
				character: sheet
			};
		}
		sheet = burnFast(life, sheet, open ? 8 : 4);
		const l = lean(sheet, Math.floor(skill(sheet, "barter") / 5));
		const pulled = pullTrade(life, open ? 5 : l.band === "lucky" ? Math.min(stock, 4 + dN(2)) : 3);
		life.dealing = true;
		const priceMult = l.band === "wreck" ? .25 : l.band === "sour" ? .55 : l.band === "even" ? .9 : l.band === "clean" ? 1.25 : 1.6;
		const pay = Math.round(pulled.value * priceMult * (hasPerk(sheet, "masterTrader") ? 1.15 : 1));
		life.caps += pay;
		const heatBase = open ? l.band === "wreck" ? 22 : 16 : l.band === "wreck" ? 18 : 12;
		const gained = addHeat(life, sheet, heatBase, true);
		if (l.band === "wreck") {
			push(life, `The handoff goes wrong. ${pulled.note} gone for ${pay} caps and a name. ${leanNote(l)} Heat +${gained}. The buyer walks. The warrant is what follows.`);
			life.warrant = clamp((life.warrant ?? 0) + 4, 0, 100);
			const turf = DISTRICT_BY_ID[life.district].gang;
			if (turf) life.friction[turf] = clamp((life.friction[turf] ?? 0) + 8, 0, 100);
		} else if (l.band === "lucky") {
			grantChems(life, 1);
			push(life, `You move ${pulled.note} for ${pay} caps and pocket a dose they did not count. ${leanNote(l)} Heat +${gained}.`);
			sheet = award(life, sheet, open ? 70 : 50, open ? "You are in the trade." : "The corner paid.");
			tracks(life, sheet, "Product that moves gets followed.");
		} else {
			push(life, `You move ${pulled.note} for ${pay} caps. ${leanNote(l)} Heat +${gained}.`);
			sheet = award(life, sheet, open ? 55 : 40, open ? "You are in the trade." : "Another corner, another pile.");
			tracks(life, sheet, "Someone writes down where you stand.");
		}
		return {
			life,
			character: sheet
		};
	}
	if (action.type === "lab") {
		const science = skill(sheet, "science");
		if (!life.lab && science < 100) {
			push(life, `The formulas do not sit still yet. Science ${science}%. You need 100 before a lab is anything but a fire.`);
			return {
				life,
				character: sheet
			};
		}
		if (!life.lab) {
			if (life.caps < 320) {
				push(life, `Glass, precursors, a door that locks. 320 caps. You have ${life.caps}.`);
				return {
					life,
					character: sheet
				};
			}
			life.caps -= 320;
			sheet = burnFast(life, sheet, 8);
			const l = lean(sheet, Math.floor((science - 100) / 4));
			if (l.band === "wreck") {
				const hurt = 6 + dN(8);
				life.hp = Math.max(1, life.hp - hurt);
				const back = Math.round(64);
				life.caps += back;
				const gained = addHeat(life, sheet, 20, true);
				push(life, `The batch climbs the wall. −${hurt} HP. The room is a story now. +${back} caps of glass back. ${leanNote(l)} Heat +${gained}.`);
				tracks(life, sheet, "A chemical fire is not subtle.");
				return {
					life,
					character: sheet
				};
			}
			if (l.band === "sour") {
				const gained = addHeat(life, sheet, 12, true);
				push(life, `The batch dies in the glass. Money gone. The room smells like a hospital that lost. ${leanNote(l)} Heat +${gained}.`);
				tracks(life, sheet, "Myron's people can smell a failed cook.");
				return {
					life,
					character: sheet
				};
			}
			life.lab = true;
			const jet = l.band === "lucky" ? 6 : l.band === "clean" ? 4 : 2;
			const mentats = l.band === "lucky" ? 2 : l.band === "clean" ? 1 : 0;
			grantChems(life, jet, mentats);
			const gained = addHeat(life, sheet, l.band === "lucky" ? 10 : 14, true);
			push(life, `The lab holds. +${jet} Jet${mentats ? `, +${mentats} Mentats` : ""}. Smaller stake than a storefront. Louder to anyone who knows the smell. ${leanNote(l)} Heat +${gained}.`);
			sheet = award(life, sheet, l.band === "lucky" ? 80 : 55, "You cooked.");
			tracks(life, sheet, "A working lab is a stash with a chimney.");
			return {
				life,
				character: sheet
			};
		}
		if (life.caps < 70) {
			push(life, `Precursors are 70 caps. You have ${life.caps}.`);
			return {
				life,
				character: sheet
			};
		}
		life.caps -= 70;
		sheet = burnFast(life, sheet, 6);
		const l = lean(sheet, Math.floor(skill(sheet, "science") / 8));
		if (l.band === "wreck") {
			const hurt = 4 + dN(6);
			life.hp = Math.max(1, life.hp - hurt);
			const gained = addHeat(life, sheet, 16, true);
			push(life, `A bad cook. −${hurt} HP. Nothing worth selling. ${leanNote(l)} Heat +${gained}.`);
			tracks(life, sheet, "The smell got out.");
			return {
				life,
				character: sheet
			};
		}
		const jet = l.band === "lucky" ? 5 + dN(3) : l.band === "clean" ? 3 + dN(2) : l.band === "even" ? 2 : 1;
		const extra = l.band === "lucky" && d100() <= 50 ? "psycho" : l.band === "clean" ? "mentats" : null;
		life.stash.jet += jet;
		if (extra) life.stash[extra] += 1;
		const gained = addHeat(life, sheet, l.band === "lucky" ? 8 : 12, true);
		push(life, `You cook +${jet} Jet${extra ? ` and a ${STASH_META[extra].name}` : ""}. ${leanNote(l)} Heat +${gained}.`);
		sheet = award(life, sheet, 45, "Another batch.");
		tracks(life, sheet, "Repeat customers are a trail. So is repeat cooking.");
		return {
			life,
			character: sheet
		};
	}
	return {
		life,
		character: sheet
	};
}
function canCourt(life, gang) {
	if (life.gangId) return `You already wear ${GANG_BY_ID[life.gangId].name} colors.`;
	const def = GANG_BY_ID[gang];
	if (life.district !== def.turf) return `Court them where they live. ${def.head} keeps ${def.front}.`;
	if (life.gangRep[gang] < -15) return `${def.head} remembers your face. Not kindly.`;
	if (life.gangRep[def.rival] >= 12) return `${def.head} does not hire ${GANG_BY_ID[def.rival].name} pets.`;
	return null;
}
function advanceBoxing(life) {
	if (life.boxingRank === "unsigned") life.boxingRank = "prelim";
	if (life.nextFightDay < life.day) life.nextFightDay = life.day;
}
function millAround(life, character) {
	tickMinutes(life, 20);
	const b = life.inspecting ? BUILDING_BY_ID[life.inspecting] : null;
	const night = isNight(life);
	const use = b?.abandoned ? "abandoned" : b?.use ?? (zoneAt(life.posX, life.posZ) === "motel" ? "motel" : "tenement");
	if (use === "motel") {
		const roll = skillRoll(skill(character, "speech"), night ? 5 : -5);
		if (roll.success) {
			addFame(life, 1);
			push(life, night ? `The girls on the lot talk. Calico taxes the stairs. A john in a hat paid 40 and left poorer. Speech ${roll.roll}.` : `Day clerk: the lot fills after eight. Working girls, then the pimp. Speech ${roll.roll}.`);
		} else {
			push(life, `They look through you. The lot still moves. Speech ${roll.roll}.`);
			if (night) {
				life.grudges.nix = Math.min(100, (life.grudges.nix ?? 0) + 4);
				push(life, "Nix Harlow clocks the staring. He does not come down the stairs tonight.");
			}
		}
		return {
			life,
			character
		};
	}
	if (use === "casino") {
		const bet = Math.min(25, life.caps);
		if (bet < 5) {
			push(life, "The floor man looks at your empty pockets and does not look away fast.");
			return {
				life,
				character
			};
		}
		life.caps -= bet;
		const roll = skillRoll(skill(character, "gambling"), night ? -5 : 0);
		if (roll.crit) {
			const win = bet * 3;
			life.caps += win;
			push(life, `The house blinked. Gambling ${roll.roll}. +${win} caps.`);
		} else if (roll.success) {
			const win = bet + Math.round(bet * .6);
			life.caps += win;
			push(life, `You beat a tourist's luck, not the house. Gambling ${roll.roll}. +${win} caps.`);
		} else {
			push(life, `The felt eats ${bet} caps. Gambling ${roll.roll}.`);
			life.grudges.red = Math.min(100, (life.grudges.red ?? 0) + 3);
			push(life, "Red Miller thinks you saw the holdout. He files it. He does not flip the table.");
		}
		return {
			life,
			character
		};
	}
	if (use === "bar") {
		if (life.caps < 4) {
			push(life, "The barkeep waits. You do not have four caps.");
			return {
				life,
				character
			};
		}
		life.caps -= 4;
		const roll = skillRoll(skill(character, "speech"), 0);
		push(life, roll.success ? `Four caps, a glass, a rumor: Bishop money is moving east. Speech ${roll.roll}.` : `Four caps. The regulars look through you. Speech ${roll.roll}.`);
		return {
			life,
			character
		};
	}
	if (use === "abandoned") {
		const roll = skillRoll(Math.max(skill(character, "steal"), skill(character, "outdoorsman")), -8);
		if (roll.success) {
			const find = 6 + dN(22);
			life.caps += find;
			const jet = d100() <= 35;
			if (jet) life.stash.jet += 1;
			push(life, `The ruin still had pockets. +${find} caps${jet ? " and a bag of Jet" : ""}.`);
		} else {
			push(life, `Dust, nails, a smell that is not dust. ${roll.roll}.`);
			push(life, "If something lives in the ruin, it is already on the block. It does not spawn because you looked.");
		}
		return {
			life,
			character
		};
	}
	if (use === "shop" || use === "pawn") {
		const roll = skillRoll(skill(character, "barter"), 0);
		push(life, roll.success ? `The clerk talks prices. Ammo is dear. Jet is cheaper a block off the Strip. Barter ${roll.roll}.` : `They will not name a number until you put caps on the wood. Barter ${roll.roll}.`);
		return {
			life,
			character
		};
	}
	if (use === "warehouse" || use === "rail") {
		const roll = skillRoll(skill(character, "sneak"), night ? -10 : 0);
		if (roll.success) push(life, `Crates, engines, a name you should not have read. Sneak ${roll.roll}.`);
		else {
			push(life, `A man with a wrench wants to know why you are looking. Sneak ${roll.roll}.`);
			life.grudges.sable = Math.min(100, (life.grudges.sable ?? 0) + 6);
			push(life, "Sable Ott will remember the face. She is not drawing in the bay.");
		}
		return {
			life,
			character
		};
	}
	if (use === "crypt") {
		push(life, "Wright stones. The ground is wrong. Whatever is buried here walks the hill. It does not roll a chance on you.");
		return {
			life,
			character
		};
	}
	if (use === "ring") {
		push(life, "A tout watches your hands. Purses grow with the months. Sign if you can take a punch.");
		return {
			life,
			character
		};
	}
	if (use === "office") {
		const roll = skillRoll(skill(character, "speech"), -10);
		push(life, roll.success ? `A secretary smiles with none of it. Mr. Bishop is busy. You are not. Speech ${roll.roll}.` : `They ask if you have an appointment. You do not. Speech ${roll.roll}.`);
		return {
			life,
			character
		};
	}
	const roll = skillRoll(skill(character, "speech"), 0);
	push(life, roll.success ? `Locals talk. ${ZONE_LABEL[zoneAt(life.posX, life.posZ)]} after dark is a different city. Speech ${roll.roll}.` : `Nobody wants a conversation. Speech ${roll.roll}.`);
	return {
		life,
		character
	};
}
function streetAct(life, character, act) {
	const building = life.insideId ? BUILDING_BY_ID[life.insideId] : life.inspecting ? BUILDING_BY_ID[life.inspecting] : null;
	const night = isNight(life);
	const npc = npcFor(life.district, night, building?.abandoned ? "abandoned" : building?.use);
	const mem = { ...remember(life.npcMemory, npc.id) };
	const saveMem = () => {
		life.npcMemory = {
			...life.npcMemory,
			[npc.id]: mem
		};
	};
	if (act === "deliver") {
		if (!life.job || life.job.stage !== "carry") {
			push(life, "You are not carrying anyone's package.");
			return {
				life,
				character
			};
		}
		if (life.district !== life.job.to) {
			push(life, `${life.job.item} still has to reach ${districtName(life.job.to)}. You are in ${districtName(life.district)}.`);
			return {
				life,
				character
			};
		}
		tickMinutes(life, 20);
		life.caps += life.job.pay;
		const title = life.job.title;
		const pay = life.job.pay;
		life.job = null;
		addFame(life, 1);
		mem.mood = Math.min(2, mem.mood + 1);
		mem.last = "delivered";
		saveMem();
		push(life, `Delivered. ${title}. +${pay} caps. They will use you again if you do not get loud.`);
		character = award(life, character, 30, "A package that arrived.");
		return {
			life,
			character
		};
	}
	if (act === "lean") {
		tickMinutes(life, 35);
		push(life, factionBrief(life.day, life.district)[0] ?? `${npc.name} is still on ${npc.beat}. The block keeps its own hours.`);
		push(life, night ? npc.night : npc.day);
		life.boredom = clamp((life.boredom ?? 28) - 8, 0, 100);
		return {
			life,
			character
		};
	}
	if (act === "bribe") {
		const cost = 40;
		if (life.caps < cost) {
			push(life, `A bribe starts at ${cost} caps. You have ${life.caps}.`);
			return {
				life,
				character
			};
		}
		life.caps -= cost;
		tickMinutes(life, 15);
		const cover = sneakCover(skill(character, "sneak"));
		const drop = cover.band === "shadow" || cover.band === "proficient" ? 14 : cover.band === "noticeable" ? 8 : 4;
		life.heat = clamp(life.heat - drop, 0, 100);
		mem.last = "bribed";
		mem.mood = Math.min(2, mem.mood + 1);
		saveMem();
		push(life, `Bills change hands. Heat −${drop}. ${npc.name} looks at a different wall. Sneak makes the trail ${cover.band}.`);
		return {
			life,
			character
		};
	}
	if (act === "tip") {
		const cost = 15;
		if (life.caps < cost) {
			push(life, "A tip is 15 caps. Officer Lang does not take IOUs.");
			return {
				life,
				character
			};
		}
		life.caps -= cost;
		tickMinutes(life, 10);
		life.heat = clamp(life.heat - 2, 0, 100);
		life.warrant = clamp((life.warrant ?? 0) - 2, 0, 100);
		life.grudges.lang = Math.max(0, (life.grudges.lang ?? 0) - 4);
		const cop = npcFor("virgin", night, "casino");
		const copMem = {
			...remember(life.npcMemory, cop.id),
			last: "tipped",
			mood: 1
		};
		life.npcMemory = {
			...life.npcMemory,
			[cop.id]: copMem
		};
		push(life, "You tip the lamp on Virgin Street. Lang pockets it. Heat and the warrant ease a little. He will not forget the courtesy, or the face.");
		return {
			life,
			character
		};
	}
	if (act === "shake") {
		tickMinutes(life, 20);
		const roll = skillRoll(Math.max(skill(character, "unarmed"), skill(character, "speech")), mem.mood * 5);
		mem.last = "shook them down";
		mem.mood = Math.max(-2, mem.mood - 2);
		saveMem();
		if (roll.success) {
			const take = 12 + dN(28);
			life.caps += take;
			const gained = addHeat(life, character, 10, true);
			life.grudges[npc.role === "cop" ? "lang" : npc.role === "soldato" ? "vin" : "cass"] = Math.min(100, (life.grudges[npc.role === "cop" ? "lang" : npc.role === "soldato" ? "vin" : "cass"] ?? 0) + 8);
			life.fear = clamp((life.fear ?? 0) + 1, 0, 100);
			push(life, `${npc.name} pays ${take} to make you leave. Heat +${gained}. The slight is on a person, not a dice table.`);
			tracks(life, character, `${npc.name} is telling the block about the shakedown.`);
		} else {
			push(life, `${npc.name} does not pay. ${roll.roll}. They will remember this. They are not swinging yet.`);
			const remembered = npc.district === "motel" ? "nix" : npc.role === "cop" ? "lang" : npc.role === "soldato" ? "vin" : "cass";
			life.grudges[remembered] = Math.min(100, (life.grudges[remembered] ?? 0) + 14);
			if (npc.role === "soldato") noteOutrage(life, DISTRICT_BY_ID[life.district].gang, 6);
			else life.fear = clamp((life.fear ?? 0) + 2, 0, 100);
		}
		return {
			life,
			character
		};
	}
	if (act === "door") {
		tickMinutes(life, 15);
		if (!life.insideId && building) {
			life.insideId = building.id;
			life.posX = building.x;
			life.posZ = building.z;
			push(life, `You work the door and they let you through. ${night ? npc.night : npc.day}`);
			return {
				life,
				character
			};
		}
		const roll = skillRoll(skill(character, "speech"), mem.mood * 6);
		if (roll.success) {
			const cut = 8 + dN(18);
			life.caps += cut;
			addFame(life, 1);
			mem.last = "worked the door";
			mem.mood = Math.min(2, mem.mood + 1);
			saveMem();
			push(life, `You hold ${npc.beat} for an hour. +${cut} caps. ${npc.name} nods like a coworker. Speech ${roll.roll}.`);
		} else {
			mem.last = "turned away at the door";
			saveMem();
			push(life, `${npc.name} does not need another body on the door. Speech ${roll.roll}.`);
		}
		return {
			life,
			character
		};
	}
	tickMinutes(life, 15);
	const l = lean(character, mem.mood * 6 + Math.floor(skill(character, "speech") / 8));
	const roll = skillRoll(skill(character, "speech"), mem.mood * 8);
	if (roll.success) {
		mem.mood = Math.min(2, mem.mood + 1);
		mem.last = "talked";
		saveMem();
		push(life, `${npc.name}, ${npc.beat}. ${night ? npc.night : npc.day} Speech ${roll.roll}. ${leanNote(l)}`);
		if (!life.job && npc.job && (l.band === "lucky" || l.band === "clean" || roll.success)) {
			life.job = {
				...npc.job,
				stage: "carry",
				giver: npc.name,
				from: life.district
			};
			push(life, `Job — ${npc.job.title}. Carry ${npc.job.item} to ${districtName(npc.job.to)}. ${npc.job.blurb} Pay ${npc.job.pay}.`);
		} else if (life.job) push(life, `You are already carrying ${life.job.item} for ${life.job.giver}. Finish that before you grow another errand.`);
	} else {
		mem.mood = Math.max(-2, mem.mood - 1);
		mem.last = "got brushed off";
		saveMem();
		push(life, `${npc.name} looks through you. ${leanNote(l)} Speech ${roll.roll}.`);
	}
	return {
		life,
		character
	};
}
function openCityContact(life, character, action) {
	if (life.combat || life.sighting || life.dead) return;
	if (!action.foes.length) return;
	life.posX = action.x;
	life.posZ = action.z;
	const night = isNight(life);
	const setting = settingFromZone(zoneAt(life.posX, life.posZ), night);
	const bodies = [...action.foes, ...action.allies];
	const radius = fightRadius(life.posX, life.posZ, bodies, bodies.length + 1);
	const layout = generateEncounter({
		setting,
		surprise: action.surprise,
		foeCount: action.foes.length,
		night,
		radius
	});
	const used = /* @__PURE__ */ new Set([hexKey(0, 0)]);
	const player = playerCombatant(character, {
		hp: life.hp,
		trainBonus: life.trainBonus
	});
	player.hp = life.hp;
	player.hexQ = 0;
	player.hexR = 0;
	const placeBody = (b, side) => {
		const c = combatantFromFoe(FOES[b.kind] ?? FOES.tough);
		c.id = b.id;
		c.name = b.name;
		c.kind = b.kind;
		if (side === "ally") {
			c.side = "ally";
			c.player = false;
		}
		const hex = worldToHex(b.x, b.z, life.posX, life.posZ, HEX_METERS);
		const slot = claimSlot(layout.map, hex.q, hex.r, used);
		used.add(hexKey(slot.q, slot.r));
		c.hexQ = slot.q;
		c.hexR = slot.r;
		return c;
	};
	const foes = action.foes.map((b) => placeBody(b, "foe"));
	const allies = action.allies.map((b) => placeBody(b, "ally"));
	const light = lightingFromSetting(setting, night);
	const placements = [
		{
			id: "player",
			q: 0,
			r: 0,
			player: true
		},
		...foes.map((f) => ({
			id: f.id,
			q: f.hexQ,
			r: f.hexR
		})),
		...allies.map((a) => ({
			id: a.id,
			q: a.hexQ,
			r: a.hexR,
			ally: true
		}))
	];
	if (!(action.cause === "feud" || !action.surprise || spotsFirst(character, life))) {
		life.combat = placeOnStreet(life, startCombat({
			kind: action.cause === "crime" ? "raid" : "street",
			player,
			foes,
			allies,
			lighting: light.penalty,
			lightingLabel: light.label,
			initiator: "foe",
			map: layout.map
		}), action.cause);
		life.sighting = null;
		push(life, `${action.reason} They already had the sequence.`);
		return;
	}
	life.sighting = {
		spotted: true,
		setting,
		foeIds: foes.map((f) => f.id),
		foeNames: foes.map((f) => f.name),
		foeKinds: foes.map((f) => f.kind),
		allyIds: allies.map((a) => a.id),
		allyNames: allies.map((a) => a.name),
		allyKinds: allies.map((a) => a.kind),
		cause: action.cause,
		map: layout.map,
		placements,
		lighting: light.penalty,
		lightingLabel: light.label,
		reason: action.reason
	};
	push(life, `${action.reason} The city holds still. Hexes scale to the bodies already on this street.`);
}
function applyAction(life, character, action) {
	rollingSheet = character;
	let next = cloneLife(life);
	let sheet = {
		...character,
		perks: character.perks ?? [],
		skillBank: character.skillBank ?? 0,
		perkBank: character.perkBank ?? 0
	};
	ensureIntel(next);
	if (next.dead) return {
		life: next,
		character: sheet
	};
	if (next.loot && action.type !== "loot") {
		push(next, "Search the pockets first.");
		return {
			life: next,
			character: sheet
		};
	}
	if (next.combat && action.type !== "combat") {
		push(next, "Finish the fight first.");
		return {
			life: next,
			character: sheet
		};
	}
	if (next.sighting && action.type !== "encounter") {
		push(next, "That street is still live. Fight, talk, or run.");
		return {
			life: next,
			character: sheet
		};
	}
	if (next.dialogue && action.type !== "dialogue") {
		push(next, "Angela is still talking. Finish the conversation.");
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "tickMinute") {
		const day = next.day;
		tickMinutes(next, 1);
		if (next.day !== day) settlePressure(next, sheet);
		if ((next.worldDay ?? 0) < next.day) runWorldDay(next, sheet);
		if ((next.minute ?? 0) % 8 === 0) {
			const zone = zoneAt(next.posX, next.posZ);
			if (d100() <= 38) push(next, ambientLine(zone, isNight(next), next.day * 24 + next.hour + next.minute));
		}
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "inspect") {
		next.inspecting = action.building;
		if (action.building) {
			const b = BUILDING_BY_ID[action.building];
			if (b) {
				const npc = npcFor(b.district ?? next.district, isNight(next), b.abandoned ? "abandoned" : b.use);
				const mem = remember(next.npcMemory, npc.id);
				const known = mem.last ? ` Last time: you ${mem.last}.` : "";
				push(next, `${b.name}. ${b.abandoned ? "Abandoned." : b.rumor}${known} ${npc.name} works ${npc.beat}.`);
			}
		}
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "enter") {
		const id = next.inspecting ?? next.insideId;
		const b = id ? BUILDING_BY_ID[id] : null;
		if (!b) {
			push(next, "Pick a door before you walk through it.");
			return {
				life: next,
				character: sheet
			};
		}
		next.insideId = b.id;
		next.inspecting = b.id;
		next.posX = b.x;
		next.posZ = b.z;
		const night = isNight(next);
		const npc = npcFor(b.district ?? next.district, night, b.abandoned ? "abandoned" : b.use);
		push(next, night ? `You go in. ${b.name} changes temperature. ${npc.night}` : `The door shuts the street out. ${npc.day}`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "exit") {
		if (!next.insideId) return {
			life: next,
			character: sheet
		};
		const b = BUILDING_BY_ID[next.insideId];
		next.insideId = null;
		push(next, b ? `You step out of ${b.name}. The sidewalk takes you back.` : "You are on the sidewalk.");
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "street") return streetAct(next, sheet, action.act);
	if (action.type === "loot") {
		if (!next.loot) return {
			life: next,
			character: sheet
		};
		if (action.take) {
			sheet = applyLoot(next, sheet, next.loot.drops);
			push(next, `You take it. ${next.loot.summary}`);
		} else push(next, "You leave the pockets. Someone else will not.");
		next.loot = null;
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "mill") {
		const milled = millAround(next, sheet);
		milled.life.boredom = clamp((milled.life.boredom ?? 28) - 18, 0, 100);
		milled.character = award(milled.life, milled.character, 8, "You worked a room.");
		return milled;
	}
	if (action.type === "eat") {
		if ((next.rations ?? 0) > 0) {
			next.rations -= 1;
			next.hunger = clamp((next.hunger ?? 22) - 48, 0, 100);
			next.boredom = clamp((next.boredom ?? 28) - 6, 0, 100);
			tickMinutes(next, 25);
			push(next, `A meal from the reserve. ${next.rations} left.`);
			return {
				life: next,
				character: sheet
			};
		}
		const price = mealCost(sheet);
		if (next.caps < price) {
			push(next, `A plate is ${price} caps. You have ${next.caps}.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.caps -= price;
		next.hunger = clamp((next.hunger ?? 22) - 48, 0, 100);
		next.boredom = clamp((next.boredom ?? 28) - 6, 0, 100);
		tickMinutes(next, 25);
		push(next, `A plate that used to be meat. −${price} caps. Hunger eases.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "stock") {
		if (action.kind === "meal") {
			const price = mealCost(sheet);
			if (next.caps < price) {
				push(next, `A meal to pack is ${price} caps. You have ${next.caps}.`);
				return {
					life: next,
					character: sheet
				};
			}
			next.caps -= price;
			next.rations = (next.rations ?? 0) + 1;
			tickMinutes(next, 10);
			push(next, `You pack a meal. ${next.rations} in reserve. −${price} caps.`);
			return {
				life: next,
				character: sheet
			};
		}
		const price = waterCost(sheet);
		if (next.caps < price) {
			push(next, `Water to pack is ${price} caps. You have ${next.caps}.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.caps -= price;
		next.waters = (next.waters ?? 0) + 1;
		tickMinutes(next, 10);
		push(next, `You pack a canteen. ${next.waters} in reserve. −${price} caps.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "drink") {
		if (action.kind === "vodka") {
			const hooked = dose(next, sheet, "vodka");
			if (hooked && hooked.startsWith("No ")) {
				push(next, hooked);
				return {
					life: next,
					character: sheet
				};
			}
			next.thirst = clamp((next.thirst ?? 18) - 22, 0, 100);
			next.boredom = clamp((next.boredom ?? 28) - 16, 0, 100);
			next.fatigue = clamp((next.fatigue ?? 12) + 8, 0, 100);
			tickMinutes(next, 20);
			push(next, hooked ?? "Vodka. The room tilts toward a better lie.");
			return {
				life: next,
				character: sheet
			};
		}
		if ((next.waters ?? 0) > 0) {
			next.waters -= 1;
			next.thirst = clamp((next.thirst ?? 18) - 52, 0, 100);
			tickMinutes(next, 10);
			push(next, `Canteen from the reserve. ${next.waters} left.`);
			return {
				life: next,
				character: sheet
			};
		}
		const price = waterCost(sheet);
		if (next.caps < price) {
			push(next, `Water is ${price} caps here. Reno taxes thirst.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.caps -= price;
		next.thirst = clamp((next.thirst ?? 18) - 52, 0, 100);
		tickMinutes(next, 10);
		push(next, `Water that has seen better pipes. −${price} caps.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "useStash") {
		const hooked = dose(next, sheet, action.stash);
		if (hooked && hooked.startsWith("No ")) {
			push(next, hooked);
			return {
				life: next,
				character: sheet
			};
		}
		if (action.stash === "jet") {
			next.fatigue = clamp((next.fatigue ?? 12) - 40, 0, 100);
			next.boredom = clamp((next.boredom ?? 28) - 12, 0, 100);
		} else if (action.stash === "psycho") next.fatigue = clamp((next.fatigue ?? 12) - 10, 0, 100);
		else if (action.stash === "buffout") next.hunger = clamp((next.hunger ?? 22) - 8, 0, 100);
		else if (action.stash === "mentats") next.boredom = clamp((next.boredom ?? 28) - 20, 0, 100);
		else if (action.stash === "cigarettes") next.boredom = clamp((next.boredom ?? 28) - 14, 0, 100);
		else if (action.stash === "marijuana") {
			next.boredom = clamp((next.boredom ?? 28) - 22, 0, 100);
			next.fatigue = clamp((next.fatigue ?? 12) + 6, 0, 100);
		} else if (action.stash === "cocaine") {
			next.fatigue = clamp((next.fatigue ?? 12) - 18, 0, 100);
			next.boredom = clamp((next.boredom ?? 28) - 10, 0, 100);
		} else if (action.stash === "vodka") {
			next.thirst = clamp((next.thirst ?? 18) - 18, 0, 100);
			next.boredom = clamp((next.boredom ?? 28) - 16, 0, 100);
		}
		tickMinutes(next, 15);
		push(next, hooked ?? `You take the ${STASH_META[action.stash].name}.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "spendSkill") {
		const spent = trySpendSkill(sheet, action.skill);
		if (!spent.ok) {
			push(next, spent.note);
			return {
				life: next,
				character: sheet
			};
		}
		push(next, `You put the hours in. ${spent.note}.`);
		return {
			life: next,
			character: spent.character
		};
	}
	if (action.type === "pickPerk") {
		const picked = tryPickPerk(sheet, action.perk, action.tagSkill);
		if (!picked.ok) {
			push(next, picked.note);
			return {
				life: next,
				character: sheet
			};
		}
		const d = derive(picked.character);
		next.hpMax = d.hp;
		push(next, `Perk: ${picked.note}.`);
		return {
			life: next,
			character: picked.character
		};
	}
	if (action.type === "seekDealer") {
		ensureIntel(next);
		const dealer = next.dealers.find((d) => d.id === action.dealer);
		if (!dealer) {
			push(next, "That corner went quiet.");
			return {
				life: next,
				character: sheet
			};
		}
		if (dealer.district !== next.district) {
			tick(next, 1);
			next.district = dealer.district;
			const dest = DISTRICT_POS[dealer.district];
			next.posX = dest.x;
			next.posZ = dest.z;
			push(next, `You cut across town looking for ${dealer.name}.`);
		}
		tickMinutes(next, 40);
		next.soughtDealer = dealer.id;
		next.boredom = clamp((next.boredom ?? 28) - 8, 0, 100);
		const gang = dealer.gang ? GANG_BY_ID[dealer.gang].name : "no family";
		push(next, `${dealer.name}. ${dealer.note} ${gang}.`);
		sheet = award(next, sheet, 12, "You found the bagman.");
		if (dealer.gang && next.heat >= 24) {
			next.friction[dealer.gang] = clamp((next.friction[dealer.gang] ?? 0) + 2, 0, 100);
			push(next, "The corner noticed. It goes on a family tab, not into a fight on the sidewalk.");
		}
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "dealBuy") {
		ensureIntel(next);
		const dealer = next.dealers.find((d) => d.id === action.dealer);
		if (!dealer) {
			push(next, "Gone.");
			return {
				life: next,
				character: sheet
			};
		}
		if (!dealer.wares.includes(action.chem)) {
			push(next, `${dealer.name} does not carry ${STASH_META[action.chem].name}.`);
			return {
				life: next,
				character: sheet
			};
		}
		if (dealer.district !== next.district) {
			push(next, `Find ${dealer.name} on ${DISTRICT_BY_ID[dealer.district].name} first.`);
			return {
				life: next,
				character: sheet
			};
		}
		const qty = Math.max(1, action.qty);
		const district = DISTRICT_BY_ID[dealer.district];
		const trader = hasPerk(sheet, "masterTrader") ? .85 : 1;
		const house = dealer.size === "house" ? .9 : dealer.size === "runner" ? 1.05 : 1;
		const price = Math.round(STASH_META[action.chem].street * district.buy * trader * house * qty);
		if (next.caps < price) {
			push(next, `${price} caps. You have ${next.caps}.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.caps -= price;
		next.stash[action.chem] += qty;
		const gained = addHeat(next, sheet, dealer.gang === "mordinos" ? 2 : 5, true);
		tickMinutes(next, 25);
		push(next, `Bought ${qty} ${STASH_META[action.chem].name} off ${dealer.name} for ${price} caps. Heat +${gained}.`);
		if (gained > 0) tracks(next, sheet, "A buy that size has a witness.");
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "seekMark") {
		ensureIntel(next);
		const mark = next.marks.find((m) => m.id === action.mark);
		if (!mark) {
			push(next, "That money left town.");
			return {
				life: next,
				character: sheet
			};
		}
		if (mark.district !== next.district) {
			tick(next, 1);
			next.district = mark.district;
			const dest = DISTRICT_POS[mark.district];
			next.posX = dest.x;
			next.posZ = dest.z;
			push(next, `You hunt ${mark.name} to ${DISTRICT_BY_ID[mark.district].name}.`);
		}
		tickMinutes(next, 35);
		next.soughtMark = mark.id;
		const guards = guardCount(mark.wealth);
		push(next, `${mark.name}. ${mark.title} ${mark.wealth} caps on a good week. ${guards} armed guard${guards === 1 ? "" : "s"}.`);
		sheet = award(next, sheet, 10, "You put a name to the money.");
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "markAct") {
		ensureIntel(next);
		const mark = next.marks.find((m) => m.id === action.mark);
		if (!mark) {
			push(next, "Gone.");
			return {
				life: next,
				character: sheet
			};
		}
		if (mark.district !== next.district) {
			push(next, `They keep court at ${DISTRICT_BY_ID[mark.district].name}.`);
			return {
				life: next,
				character: sheet
			};
		}
		const guards = guardCount(mark.wealth);
		tickMinutes(next, 50);
		if (action.act === "befriend") {
			const roll = rollSkill(sheet, next, "speech", mark.mood === "warm" ? 10 : mark.mood === "hostile" ? -20 : 0);
			if (roll.success) {
				mark.mood = mark.mood === "warm" || roll.crit ? "friend" : "warm";
				const gift = roll.crit ? Math.round(mark.wealth * .08) : 8 + dN(16);
				next.caps += gift;
				addFame(next, 1);
				next.boredom = clamp((next.boredom ?? 28) - 14, 0, 100);
				push(next, `Speech ${roll.roll}. ${mark.name} warms. +${gift} caps and a name that opens a door.`);
				sheet = award(next, sheet, 35, "You made a rich friend.");
			} else {
				mark.mood = d100() <= 25 ? "hostile" : mark.mood;
				push(next, `Speech ${roll.roll}. ${mark.name} looks through you.`);
				if (mark.mood === "hostile" && d100() <= 40) beginGuardFight(next, sheet, mark, "The guards take the insult personally.");
			}
			return {
				life: next,
				character: sheet
			};
		}
		if (action.act === "rob") {
			const roll = rollSkill(sheet, next, "steal", -guards * 8);
			if (roll.success) {
				const take = Math.round(mark.wealth * (roll.crit ? .35 : .18));
				next.caps += take;
				const gained = addHeat(next, sheet, 10 + guards, true);
				mark.mood = "hostile";
				next.boredom = clamp((next.boredom ?? 28) - 20, 0, 100);
				push(next, `Steal ${roll.roll}. You lift ${take} caps off ${mark.name}. Heat +${gained}.`);
				sheet = award(next, sheet, 55, "A quiet robbery.");
				tracks(next, sheet, "The lift was not as quiet as it felt.");
			} else {
				mark.mood = "hostile";
				push(next, `Steal ${roll.roll}. A hand on your collar.`);
				beginGuardFight(next, sheet, mark, `You botch the lift on ${mark.name}.`);
			}
			return {
				life: next,
				character: sheet
			};
		}
		const roll = rollSkill(sheet, next, "sneak", -guards * 6);
		if (!roll.success) {
			mark.mood = "hostile";
			push(next, `Sneak ${roll.roll}. They see the bag before you close it.`);
			beginGuardFight(next, sheet, mark, `The grab on ${mark.name} goes loud.`);
			return {
				life: next,
				character: sheet
			};
		}
		mark.mood = "hostile";
		const ransom = Math.round(mark.wealth * .4);
		next.caps += ransom;
		const gained = addHeat(next, sheet, 18 + guards * 3, true);
		addFame(next, 2);
		next.boredom = clamp((next.boredom ?? 28) - 25, 0, 100);
		push(next, `Sneak ${roll.roll}. ${mark.name} leaves the street in a bag and a note. ${ransom} caps by morning. Heat +${gained}.`);
		sheet = award(next, sheet, 90, "A kidnapping the families will remember.");
		tracks(next, sheet, "A missing wallet with guards is not a rumor. It is a hunt.");
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "talk") {
		if (action.who !== "angela" || !angelaPresent(next)) {
			push(next, "She isn't here.");
			return {
				life: next,
				character: sheet
			};
		}
		const view = angelaOpen(sheet, next);
		next.dialogue = {
			who: "angela",
			node: view.node
		};
		push(next, `Angela Bishop: ${view.line}`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "dialogue") {
		const result = angelaReply(sheet, next, action.reply);
		next = result.life;
		if (result.view?.closed) push(next, result.view.line);
		else if (result.view) push(next, `Angela Bishop: ${result.view.line}`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "combat") {
		if (!next.combat) return {
			life: next,
			character: sheet
		};
		if (action.move === "stimpak") {
			const used = consumeItem(sheet.loadout, "stimpak", 1);
			if (!used) {
				push(next, "No stimpaks in the pack.");
				return {
					life: next,
					character: sheet
				};
			}
			sheet = {
				...sheet,
				loadout: used,
				updatedAt: Date.now()
			};
		}
		next.combat = playMove(next.combat, action.move, action.part, {
			q: action.q,
			r: action.r,
			targetId: action.targetId
		});
		const p = playerOf(next.combat);
		if (p) next.hp = p.hp;
		if (next.combat.result) sheet = settleCombat(next, sheet);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "streetContact") {
		openCityContact(next, sheet, action);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "encounter") {
		if (!next.sighting) return {
			life: next,
			character: sheet
		};
		if (action.choice === "flee") {
			push(next, "You saw them first. You cut down a side street before they close. They do not get a second swing this hour.");
			next.sighting = null;
			grantReprieve(next, 35);
			tick(next, 1);
			return {
				life: next,
				character: sheet
			};
		}
		if (action.choice === "talk") {
			const roll = skillRoll(skill(sheet, "speech"), next.sighting.spotted ? 10 : -10);
			if (roll.success) {
				const pay = roll.crit ? 0 : 4 + dN(10);
				next.caps = Math.max(0, next.caps - pay);
				push(next, roll.crit ? `Speech ${roll.roll}. They laugh, clap your shoulder, and walk. No blood.` : `Speech ${roll.roll}. You talk them down. ${pay ? `${pay} caps for their trouble.` : "They leave empty."}`);
				next.sighting = null;
				grantReprieve(next, 40);
				if (next.tension >= 48) next.tension = clamp(next.tension - 4, 0, 100);
				tick(next, 1);
				return {
					life: next,
					character: sheet
				};
			}
			push(next, `Speech ${roll.roll} vs ${roll.target}%. They are not buying it.`);
			startFromSighting(next, sheet, "foe");
			return {
				life: next,
				character: sheet
			};
		}
		startFromSighting(next, sheet, "player");
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "arrive") {
		next.district = action.district;
		next.posX = action.x;
		next.posZ = action.z;
		const d = DISTRICT_BY_ID[action.district];
		push(next, `${d.name}. ${d.blurb}`);
		if (angelaPresent(next)) push(next, angelaHook(next));
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "walkTick") {
		next.posX = action.x;
		next.posZ = action.z;
		tickMinutes(next, 2);
		const zone = zoneAt(next.posX, next.posZ);
		(zone === "strip" ? -12 : zone === "alley" ? 4 : zone === "wild" ? 8 : 0) + (isNight(next) ? 3 : 0);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "travel") {
		if (action.district === next.district) {
			push(next, "You are already here.");
			return {
				life: next,
				character: sheet
			};
		}
		tick(next, 1);
		next.district = action.district;
		const dest = DISTRICT_POS[action.district];
		next.posX = dest.x;
		next.posZ = dest.z;
		next.inspecting = null;
		const d = DISTRICT_BY_ID[action.district];
		push(next, `You cut across town to ${d.name}. ${d.blurb}`);
		if (angelaPresent(next)) push(next, angelaHook(next));
		isNight(next), `${d.name}`;
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "sleep") {
		const home = housingOf(next);
		if (home && home.district !== next.district) {
			next.district = home.district;
			push(next, `You walk home to ${home.name}.`);
		}
		const hours = next.hour >= 8 ? 24 - next.hour + 8 : 8 - next.hour;
		tick(next, Math.max(6, hours));
		payWeeklyRent(next);
		const derived = derive(sheet);
		const rate = home ? derived.healingRate * 4 : derived.healingRate;
		const healed = Math.min(next.hpMax - next.hp, Math.max(1, rate + (hasPerk(sheet, "healer") ? 6 : 0)));
		next.hp = Math.min(next.hpMax, next.hp + healed);
		next.fatigue = 8;
		next.hunger = clamp((next.hunger ?? 22) + 6, 0, 100);
		next.thirst = clamp((next.thirst ?? 18) + 5, 0, 100);
		next.boredom = clamp((next.boredom ?? 28) + 2, 0, 100);
		next.strain = Math.max(0, (next.strain ?? 0) - 400);
		if (!home) push(next, `You sleep in a doorway. +${healed} HP. The city does not keep secrets.`);
		else {
			push(next, `Morning in ${home.name}. +${healed} HP.`);
			if (home.kind === "squat" && housingDanger(next) >= 6) housingDanger(next);
		}
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "wander") {
		tick(next, 2);
		const roll = d100();
		const district = DISTRICT_BY_ID[next.district];
		if (roll <= 40) {
			const find = 4 + dN(12) + (hasPerk(sheet, "fortuneFinder") ? 6 : 0);
			next.caps += find;
			next.boredom = clamp((next.boredom ?? 28) - 10, 0, 100);
			push(next, `A dropped roll, a drunk, a lie. +${find} caps.`);
			sheet = award(next, sheet, 18, "The street paid a little.");
		} else if (roll <= 52) {
			const chem = d100() <= 60 ? "jet" : "buffout";
			next.stash[chem] += 1;
			push(next, `You lift a bag of ${CHEMS[chem].name} off a table nobody was watching.`);
		} else if (roll <= 62) {
			addFame(next, 1);
			push(next, "A tout from the Ring watches you walk. He does not introduce himself.");
		} else if (roll <= 74 && district.gang) push(next, `${GANG_BY_ID[district.gang].name} boys clock you. ${GANG_BY_ID[district.gang].pitch}`);
		else if (roll <= 86) {
			const rumor = skillRoll(skill(sheet, "speech"), 0);
			push(next, rumor.success ? "A bartender talks. Bishop money is moving east. Wright stills are dry this week." : "People look through you. Reno is a closed room today.");
		} else push(next, `${district.blurb} You walk it anyway.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "oddJob") {
		tick(next, 4);
		if (skillRoll(Math.max(skill(sheet, "barter"), skill(sheet, "repair"), skill(sheet, "speech")), -10).success) {
			const pay = 12 + dN(18) + (hasPerk(sheet, "fortuneFinder") ? 8 : 0);
			next.caps += pay;
			next.boredom = clamp((next.boredom ?? 28) + 8, 0, 100);
			next.fatigue = clamp((next.fatigue ?? 12) + 10, 0, 100);
			push(next, `Odd work. ${pay} caps and a backache.`);
			sheet = award(next, sheet, 70, "Honest work, more or less.");
		} else {
			const pay = 4 + dN(6);
			next.caps += pay;
			next.boredom = clamp((next.boredom ?? 28) + 10, 0, 100);
			push(next, `They underpay. ${pay} caps. You still take it.`);
			sheet = award(next, sheet, 25, "Even a bad job teaches the street.");
		}
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "rent") {
		const home = HOUSING_BY_ID[action.housing];
		if (!home || home.kind !== "rent") {
			push(next, "That is not a rented room.");
			return {
				life: next,
				character: sheet
			};
		}
		if (home.district !== next.district) {
			push(next, `Go to ${DISTRICT_BY_ID[home.district].name} first.`);
			return {
				life: next,
				character: sheet
			};
		}
		if (home.requiresGang && (next.gangId !== home.requiresGang || next.gangRank < (home.requiresRank ?? 0))) {
			push(next, home.note);
			return {
				life: next,
				character: sheet
			};
		}
		if (next.caps < home.rent) {
			push(next, `You need ${home.rent} caps for the first week.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.caps -= home.rent;
		next.housingId = home.id;
		next.squatProgress = 0;
		next.rentPaidWeek = Math.floor((next.day - 1) / 7);
		tick(next, 1);
		push(next, `You take ${home.name}. ${home.note}`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "squat") {
		const home = HOUSING_BY_ID[action.housing];
		if (!home || home.kind !== "squat") {
			push(next, "That is not a squat.");
			return {
				life: next,
				character: sheet
			};
		}
		if (home.district !== next.district) {
			push(next, `Go to ${DISTRICT_BY_ID[home.district].name} first.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.housingId = home.id;
		next.squatProgress = 0;
		tick(next, 1);
		push(next, `You claim ${home.name}. ${home.note}`);
		home.danger;
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "leaveHome") {
		if (!next.housingId) {
			push(next, "You already sleep where the city puts you.");
			return {
				life: next,
				character: sheet
			};
		}
		const name = HOUSING_BY_ID[next.housingId].name;
		next.housingId = null;
		next.squatProgress = 0;
		push(next, `You walk out of ${name}. The street is the landlord now.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "convert") {
		const home = housingOf(next);
		if (!home || home.kind !== "squat") {
			push(next, "Nothing here to convert.");
			return {
				life: next,
				character: sheet
			};
		}
		if (home.district !== next.district) {
			push(next, `Work the squat on site. ${home.name} is in ${DISTRICT_BY_ID[home.district].name}.`);
			return {
				life: next,
				character: sheet
			};
		}
		if (next.squatProgress >= 100) {
			push(next, `${home.name} already holds. You could almost call it a house.`);
			return {
				life: next,
				character: sheet
			};
		}
		tick(next, 8);
		home.convertTarget;
		const id = home.convertSkill ?? "repair";
		const roll = skillRoll(skill(sheet, id), 0);
		const gain = roll.crit ? 40 : roll.success ? 20 + dN(12) : 4 + dN(6);
		next.squatProgress = clamp(next.squatProgress + gain, 0, 100);
		push(next, roll.success ? `You work ${home.name} (${roll.roll} vs ${roll.target}% ${id}). Converted ${next.squatProgress}%.` : `The work fights back (${roll.roll} vs ${roll.target}%). Converted ${next.squatProgress}%.`);
		if (next.squatProgress >= 100) push(next, `${home.name} will hold weather now. Still not safe. Safer.`);
		home.danger - 2;
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "payRent") {
		const home = housingOf(next);
		if (!home || home.kind !== "rent") {
			push(next, "Nobody is collecting.");
			return {
				life: next,
				character: sheet
			};
		}
		if (next.caps < home.rent) {
			push(next, `Short ${home.rent - next.caps} caps.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.caps -= home.rent;
		push(next, `You pay ${home.rent} caps on ${home.name}. A week bought.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "joinGang") {
		const err = canJoin(next, action.gang, sheet);
		if (err) {
			push(next, err);
			return {
				life: next,
				character: sheet
			};
		}
		tick(next, 1);
		const speech = skillRoll(skill(sheet, "speech"), 0);
		if (!speech.success && next.caps < 50) {
			push(next, `They laugh you out (${speech.roll} vs ${speech.target}% Speech). Come back with money or a better story.`);
			return {
				life: next,
				character: sheet
			};
		}
		if (!speech.success) {
			next.caps -= 50;
			push(next, `Fifty caps buys a seat at the table. They still do not like you.`);
		}
		next.gangId = action.gang;
		next.gangRank = 1;
		next.gangRep[action.gang] += 5;
		next.gangRep[GANG_BY_ID[action.gang].rival] -= 8;
		const g = GANG_BY_ID[action.gang];
		push(next, `You are in with the ${g.name}. ${g.head}. Rank: ${g.ranks[0]}. ${g.credo}`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "quitGang") {
		if (!next.gangId) {
			push(next, "You do not owe a family.");
			return {
				life: next,
				character: sheet
			};
		}
		const name = GANG_BY_ID[next.gangId].name;
		next.gangRep[next.gangId] -= 10;
		next.heat = clamp(next.heat + 8, 0, 100);
		next.gangId = null;
		next.gangRank = 0;
		tick(next, 1);
		push(next, `You walk from the ${name}. They will remember.`);
		`${name}`;
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "gangJob") {
		if (!next.gangId) {
			push(next, "No family, no work.");
			return {
				life: next,
				character: sheet
			};
		}
		const gang = GANG_BY_ID[next.gangId];
		if (next.district !== gang.turf && d100() <= 40) {
			push(next, `The ${gang.name} want you on turf. Go to ${DISTRICT_BY_ID[gang.turf].name}.`);
			return {
				life: next,
				character: sheet
			};
		}
		tick(next, 4);
		const pool = {
			mordinos: [
				{
					skill: "sneak",
					ok: "Jet from the Stables. Myron doesn't look up. You don't ask whose lungs.",
					pay: 28
				},
				{
					skill: "unarmed",
					ok: "Golden Globes muscle. Little Jesus wanted a reminder delivered in teeth.",
					pay: 26
				},
				{
					skill: "steal",
					ok: "A bag off a Virgin Street tourist. Big Jesus likes volume.",
					pay: 24
				}
			],
			wrights: [
				{
					skill: "meleeWeapons",
					ok: "A still, a cousin, a Mordino dealer who won't sell on Wright blocks.",
					pay: 22
				},
				{
					skill: "speech",
					ok: "You ask around about Richard. Jet. A party. Nobody wants to say Mordino.",
					pay: 20
				},
				{
					skill: "repair",
					ok: "The stills run. Orville nods like that's love.",
					pay: 18
				}
			],
			salvatores: [
				{
					skill: "smallGuns",
					ok: "A quiet door. Mason said don't miss. You didn't.",
					pay: 36
				},
				{
					skill: "energyWeapons",
					ok: "Louis Salvatore's toy stays holstered. You watched the drop anyway.",
					pay: 40
				},
				{
					skill: "sneak",
					ok: "Old Reno. A room that didn't happen. The oxygen tank hissed once.",
					pay: 34
				}
			],
			bishops: [
				{
					skill: "gambling",
					ok: "Shark Club floor. The books like your numbers. Mr. Bishop does not look up.",
					pay: 32
				},
				{
					skill: "speech",
					ok: "A message for a man who still thinks NCR is a rumor. He thinks otherwise now.",
					pay: 34
				},
				{
					skill: "smallGuns",
					ok: "Collection. Polite. The smile did not reach anything.",
					pay: 30
				}
			]
		}[next.gangId];
		const job = pool[dN(pool.length) - 1];
		const roll = skillRoll(skill(sheet, job.skill), next.gangRank * 2);
		const pay = job.pay + next.gangRank * 6 + dN(10);
		if (roll.fumble) {
			const gained = addHeat(next, sheet, 8, true);
			push(next, `The job goes loud (${roll.roll}). ${gang.head} is not pleased. Heat +${gained}. ${GANG_BY_ID[gang.rival].name} will walk it off later.`);
			next.friction[gang.rival] = clamp((next.friction[gang.rival] ?? 0) + 12, 0, 100);
			noteOutrage(next, gang.rival, 6);
			return {
				life: next,
				character: sheet
			};
		}
		if (roll.success) {
			next.caps += pay;
			next.gangRep[next.gangId] += 3;
			next.gangRep[gang.rival] -= 2;
			if (next.gangId === "mordinos") next.stash.jet += 1;
			if (next.gangRep[next.gangId] >= 8 + next.gangRank * 10 && next.gangRank < 5) {
				next.gangRank += 1;
				push(next, `${gangRankName(next)}. ${gang.head} noticed.`);
			}
			push(next, `${job.ok} +${pay} caps.`);
			sheet = award(next, sheet, 85, "Family work.");
		} else {
			const crumbs = Math.round(pay / 3);
			next.caps += crumbs;
			push(next, `Sloppy work (${roll.roll} vs ${roll.target}%). +${crumbs} caps and a look.`);
		}
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "buyChems") {
		const district = DISTRICT_BY_ID[next.district];
		const qty = Math.max(1, action.qty);
		const price = Math.round(STASH_META[action.chem].street * district.buy * (hasPerk(sheet, "masterTrader") ? .85 : 1) * qty);
		if (next.caps < price) {
			push(next, `${STASH_META[action.chem].name} is ${price} caps here. You have ${next.caps}.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.caps -= price;
		next.stash[action.chem] += qty;
		tick(next, 1);
		const gained = addHeat(next, sheet, district.gang === "mordinos" ? 2 : 5, true);
		push(next, `Bought ${qty} ${STASH_META[action.chem].name} for ${price} caps on ${district.name}. Heat +${gained}.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "sellChems") {
		const district = DISTRICT_BY_ID[next.district];
		const qty = Math.max(1, Math.min(action.qty, next.stash[action.chem]));
		if (qty <= 0) {
			push(next, `Your stash has no ${STASH_META[action.chem].name}.`);
			return {
				life: next,
				character: sheet
			};
		}
		const barter = skillRoll(skill(sheet, "barter") + needPen(next), 0);
		const trader = hasPerk(sheet, "masterTrader") ? 1.25 : 1;
		const mult = district.sell * (barter.success ? 1.15 : .9) * trader;
		const price = Math.round(STASH_META[action.chem].street * mult * qty);
		next.stash[action.chem] -= qty;
		next.caps += price;
		tick(next, 1);
		const gained = addHeat(next, sheet, 4 + qty, true);
		push(next, `Sold ${qty} ${STASH_META[action.chem].name} for ${price} caps (${barter.roll} vs ${barter.target}% Barter). Heat +${gained}.`);
		8 + qty * 2;
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "joinBoxing") {
		if (!atDistrict(next, "stables")) {
			push(next, "The Ring is east. Walk there.");
			return {
				life: next,
				character: sheet
			};
		}
		if (next.boxingRank !== "unsigned") {
			push(next, `You already fight as ${next.boxingRank}.`);
			return {
				life: next,
				character: sheet
			};
		}
		tick(next, 1);
		next.boxingRank = "prelim";
		next.nextFightDay = next.day + 1;
		push(next, "A man with a cigar writes your name on a card. Prelim. Tomorrow if you show.");
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "train") {
		if (!atDistrict(next, "stables")) {
			push(next, "Train at the Ring.");
			return {
				life: next,
				character: sheet
			};
		}
		tick(next, 3);
		if (skillRoll(skill(sheet, "unarmed"), 0).success) {
			next.trainBonus = clamp(next.trainBonus + 5, 0, 20);
			push(next, `Sawdust and blood in the nose. Unarmed edge +${next.trainBonus} for the next card.`);
		} else {
			next.hp = Math.max(1, next.hp - 2);
			push(next, `The bag wins today. −2 HP.`);
		}
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "fightCard") {
		if (!atDistrict(next, "stables")) {
			push(next, "Fights are at the Ring.");
			return {
				life: next,
				character: sheet
			};
		}
		if (next.boxingRank === "unsigned") {
			push(next, "Sign first.");
			return {
				life: next,
				character: sheet
			};
		}
		if (next.day < next.nextFightDay) {
			push(next, `Your card is day ${next.nextFightDay}. Train or wait.`);
			return {
				life: next,
				character: sheet
			};
		}
		advanceBoxing(next);
		const foe = boxingFoe(next.boxingRank);
		const player = playerCombatant(sheet, {
			boxing: true,
			trainBonus: next.trainBonus,
			hp: next.hp
		});
		const purse = boxingPurse(next.boxingRank, next.fame);
		lightingOf(next);
		const layout = generateEncounter({
			setting: "ring",
			surprise: false,
			foeCount: 1,
			radius: 2
		});
		player.hexQ = layout.player.q;
		player.hexR = layout.player.r;
		foe.hexQ = layout.foes[0]?.q ?? 1;
		foe.hexR = layout.foes[0]?.r ?? 0;
		next.combat = placeOnStreet(next, startCombat({
			kind: "boxing",
			player,
			foes: [foe],
			hexes: 1,
			lighting: 0,
			lightingLabel: "Ring lights · 0%",
			purse,
			initiator: "player",
			map: layout.map
		}), "ring");
		push(next, `The Ring. ${foe.name}. Purse ${purse} if you stand.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "stimpak") {
		if (countItem(sheet.loadout, "stimpak") <= 0) {
			push(next, "No stimpaks in the pack.");
			return {
				life: next,
				character: sheet
			};
		}
		const used = consumeItem(sheet.loadout, "stimpak", 1);
		if (!used) return {
			life: next,
			character: sheet
		};
		sheet = {
			...sheet,
			loadout: used,
			updatedAt: Date.now()
		};
		const heal = 10 + dN(10);
		next.hp = Math.min(next.hpMax, next.hp + heal);
		push(next, `Stimpak. +${heal} HP.`);
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "courtFamily" || action.type === "carouse" || action.type === "business" || action.type === "dealing" || action.type === "lab") return runHustle(next, sheet, action);
	return {
		life: next,
		character: sheet
	};
}
function housingHere(district) {
	return HOUSING.filter((h) => h.district === district);
}
function chemQty(life) {
	return Object.values(life.stash ?? {}).reduce((n, v) => n + (v ?? 0), 0);
}
var STASH_LIST = STASH_IDS;
function RenoDesk({ life, character, onAction, busy }) {
	const district = DISTRICT_BY_ID[life.district];
	const homes = housingHere(life.district);
	const home = life.housingId ? HOUSING_BY_ID[life.housingId] : null;
	const stimpaks = countItem(character.loadout, "stimpak");
	const stashN = chemQty(life);
	const turfGang = GANGS.find((g) => g.turf === life.district);
	const zone = zoneAt(life.posX, life.posZ);
	const night = isNight(life);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Key locations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold tracking-tight",
						children: "Fast travel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Shark Club, Desert Rose, the Ring. East Second runs out to Catclaw: smaller motels and two-bit casinos. West of Salvatore the lots get thin."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase",
						children: [
							"You: ",
							ZONE_LABEL[zone],
							" · ",
							ZONE_HINT[zone],
							" · ",
							night ? "night" : "day"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2",
						children: KEY_LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: life.district === loc.id ? "secondary" : "ghost",
							className: "h-auto min-h-11 justify-start whitespace-normal py-2 text-left",
							disabled: busy || life.district === loc.id,
							onClick: () => onAction({
								type: "travel",
								district: loc.id
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: loc.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-mono text-[10px] tracking-wide text-subtle uppercase",
								children: loc.blurb
							})] })
						}, loc.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "This block"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-2xl font-semibold tracking-tight",
						children: district.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: district.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => onAction({ type: "wander" }),
								disabled: busy,
								children: "Wander"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								onClick: () => onAction({ type: "oddJob" }),
								disabled: busy,
								children: "Odd job"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								onClick: () => onAction({ type: "sleep" }),
								disabled: busy,
								children: "Sleep"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => onAction({ type: "stimpak" }),
								disabled: busy || stimpaks <= 0 || life.hp >= life.hpMax,
								children: [
									"Stimpak (",
									stimpaks,
									")"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-[10px] tracking-[0.18em] text-subtle uppercase",
						children: "On this block"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "min-h-11",
								disabled: busy,
								onClick: () => onAction({
									type: "street",
									act: "talk"
								}),
								children: "Talk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "min-h-11",
								disabled: busy,
								onClick: () => onAction({
									type: "street",
									act: "lean"
								}),
								children: "Lean"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "min-h-11",
								disabled: busy,
								onClick: () => onAction({
									type: "street",
									act: "bribe"
								}),
								children: "Bribe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "min-h-11",
								disabled: busy,
								onClick: () => onAction({
									type: "street",
									act: "shake"
								}),
								children: "Shake down"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "min-h-11",
								disabled: busy,
								onClick: () => onAction({
									type: "street",
									act: "tip"
								}),
								children: "Tip a cop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "min-h-11",
								disabled: busy,
								onClick: () => onAction({
									type: "street",
									act: "door"
								}),
								children: "Work a door"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "min-h-11",
								disabled: busy || !life.job,
								onClick: () => onAction({
									type: "street",
									act: "deliver"
								}),
								children: "Deliver"
							})
						]
					}),
					life.job ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							life.job.title,
							": carry ",
							life.job.item,
							" to ",
							DISTRICT_BY_ID[life.job.to]?.name ?? life.job.to,
							". ",
							life.job.blurb
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Talk to whoever holds this block. Some of them have a package and a second address."
					})
				]
			}),
			angelaPresent(life) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-[6.5rem_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/reno/angela/portrait.webp",
						alt: "Angela Bishop",
						className: "hidden h-full min-h-32 object-cover object-top sm:block"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
								children: "Second-floor rail"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-1 text-xl font-semibold",
								children: "Angela Bishop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "John Bishop's daughter. Leslie Anne's problem. Bored of the Shark Club and loud about it. She hits on famous names, low-INT vault babies, and anyone who works for her father."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-3",
								size: "sm",
								onClick: () => onAction({
									type: "talk",
									who: "angela"
								}),
								disabled: busy,
								children: "Talk to Angela"
							})
						]
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "A place to live"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: home ? home.name : "Street"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: home ? home.kind === "squat" ? `Squat · converted ${life.squatProgress}% · danger ${home.danger}` : `Rent ${home.rent} caps a week · ${home.note}` : "Doorways and bad luck. Rent a room or claim a squat."
					}),
					home ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							home.kind === "squat" && life.squatProgress < 100 && home.district === life.district ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => onAction({ type: "convert" }),
								disabled: busy,
								children: "Convert squat"
							}) : null,
							home.kind === "rent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "secondary",
								onClick: () => onAction({ type: "payRent" }),
								disabled: busy,
								children: [
									"Pay week (",
									home.rent,
									")"
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => onAction({ type: "leaveHome" }),
								disabled: busy,
								children: "Leave"
							})
						]
					}) : null,
					homes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: homes.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg bg-raised px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: h.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: h.note
								})] }), life.housingId === h.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] tracking-wide text-ok uppercase",
									children: "yours"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									disabled: busy,
									onClick: () => onAction(h.kind === "rent" ? {
										type: "rent",
										housing: h.id
									} : {
										type: "squat",
										housing: h.id
									}),
									children: h.kind === "rent" ? `Rent ${h.rent}` : "Squat"
								})]
							})
						}, h.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-subtle",
						children: "No rooms on this block. Try Desert Rose, the Jungle, Chop Shop, Wrights, Golgotha."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Families"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: life.gangId ? gangRankName(life) : "Independent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: life.gangId ? `${GANG_BY_ID[life.gangId].head}. ${GANG_BY_ID[life.gangId].credo}` : turfGang ? `${turfGang.head} holds this block. ${turfGang.credo}` : "Four families. Bishops at the Shark. Mordinos at the Desperado. Salvatores at the bar. Wrights east, stills and a dead son."
					}),
					life.gangId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase",
						children: [
							"Rep B ",
							life.gangRep.bishops,
							" · M ",
							life.gangRep.mordinos,
							" · S ",
							life.gangRep.salvatores,
							" · W",
							" ",
							life.gangRep.wrights,
							" · rival ",
							GANG_BY_ID[GANG_BY_ID[life.gangId].rival].name
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: life.gangId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => onAction({ type: "gangJob" }),
							disabled: busy,
							children: "Family work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => onAction({ type: "quitGang" }),
							disabled: busy,
							children: "Walk away"
						})] }) : turfGang ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => onAction({
								type: "joinGang",
								gang: turfGang.id
							}),
							disabled: busy,
							children: ["Ask the ", turfGang.name]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "Gang turf: Golden Globes, Wright compound, Salvatore's, Bishop offices."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Independent dealing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: [
							"Stash · ",
							stashN,
							" bags"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Buy low on Mordino turf. Sell high on Virgin Street and the Shark. Heat draws guns."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: STASH_LIST.map((id) => {
							const buy = Math.round(STASH_META[id].street * district.buy);
							const sell = Math.round(STASH_META[id].street * district.sell);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-2 rounded-lg bg-raised px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: STASH_META[id].name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: [
										"have ",
										life.stash[id] ?? 0,
										" · buy ",
										buy,
										" · sell ",
										sell,
										" · ",
										STASH_META[id].kind
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "secondary",
										disabled: busy || life.caps < buy,
										onClick: () => onAction({
											type: "buyChems",
											chem: id,
											qty: 1
										}),
										children: "Buy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "secondary",
										disabled: busy || (life.stash[id] ?? 0) <= 0,
										onClick: () => onAction({
											type: "sellChems",
											chem: id,
											qty: 1
										}),
										children: "Sell"
									})]
								})]
							}, id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "The Ring"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: [
							life.boxingRank === "unsigned" ? "Unsigned" : life.boxingRank,
							" · ",
							life.boxingWins,
							"-",
							life.boxingLosses
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							"Fame ",
							life.fame,
							". Regard ",
							Math.round(life.regard ?? 0),
							" — the poster moves faster than what people believe.",
							" ",
							life.boxingRank === "unsigned" ? "Sign at the Ring, train, take cards. Purses grow with the months." : life.day >= life.nextFightDay ? `Card is ready. Purse about ${boxingPurse(life.boxingRank, life.fame)} caps.` : `Next card day ${life.nextFightDay}. Train until then.`
						]
					}),
					life.district === "stables" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: life.boxingRank === "unsigned" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => onAction({ type: "joinBoxing" }),
							disabled: busy,
							children: "Sign with the Ring"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => onAction({ type: "train" }),
							disabled: busy,
							children: "Train"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: busy || life.day < life.nextFightDay,
							onClick: () => onAction({ type: "fightCard" }),
							children: "Take the card"
						})] })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-subtle",
						children: "Walk to the Ring to sign, train, or fight."
					})
				]
			})
		]
	});
}
function RenoSighting({ life, character, onChoice }) {
	const sight = life.sighting;
	if (!sight) return null;
	const speech = derive(character).skills.speech?.total ?? 0;
	const units = sight.placements.map((p) => {
		const foes = sight.placements.filter((x) => !x.player && !x.ally);
		const allies = sight.placements.filter((x) => x.ally);
		const foeIndex = foes.findIndex((x) => x.id === p.id);
		const allyIndex = allies.findIndex((x) => x.id === p.id);
		const name = p.player ? "You" : p.ally ? sight.allyNames?.[allyIndex] ?? "Ally" : sight.foeNames[foeIndex] ?? "Them";
		const kind = p.player ? "player" : p.ally ? sight.allyIds?.[allyIndex] ?? "tough" : sight.foeIds[foeIndex] ?? "tough";
		return {
			id: p.id,
			q: p.q,
			r: p.r,
			label: name.split(" ")[0] ?? name,
			player: p.player,
			side: p.player ? "player" : p.ally ? "ally" : "foe",
			token: FOE_TOKEN[kind] ?? FOE_TOKEN.tough
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
				children: [
					"Encounter · ",
					sight.setting,
					" · ",
					sight.lightingLabel
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-1 text-2xl font-semibold tracking-tight",
				children: sight.spotted ? "You saw them first" : "Ambush"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: sight.reason
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-fg",
				children: [
					sight.foeNames.join(", "),
					" on the table.",
					sight.allyNames?.length ? ` With you: ${sight.allyNames.join(", ")}. They have their own sheet and they act on sequence.` : "",
					" ",
					"Green hexes are the way back to the street."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoTable, {
					board: sight.map,
					units,
					night: sight.lighting < 0,
					disabled: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => onChoice("fight"),
						className: "min-h-11",
						children: "Sequence. Fight."
					}),
					sight.spotted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => onChoice("talk"),
						className: "min-h-11",
						children: [
							"Talk (",
							speech,
							"% Speech)"
						]
					}) : null,
					sight.spotted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => onChoice("flee"),
						className: "min-h-11",
						children: "Slip the street"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => onChoice("fight"),
						className: "min-h-11",
						children: "They already closed. Fight."
					})
				]
			})
		]
	});
}
function sceneFor(node) {
	const portrait = "/reno/angela/portrait.webp";
	const full = "/reno/angela/fullbody.webp";
	if (node === "upstairs") return {
		portrait,
		full,
		scene: "/reno/angela/stairs.webp",
		place: "Shark Club · service stair"
	};
	if (node === "room-safe" || node === "room-fly") return {
		portrait,
		full,
		scene: "/reno/angela/room-safe.webp",
		place: "Shark Club · her room · the safe"
	};
	if (node === "morning" || node === "morning-jet") return {
		portrait,
		full,
		scene: "/reno/angela/room-morning.webp",
		place: "Shark Club · third floor · morning"
	};
	if (node.startsWith("room")) return {
		portrait,
		full,
		scene: "/reno/angela/room-night.webp",
		place: "Shark Club · her room"
	};
	if (node.includes("jet") || node.includes("safe")) return {
		portrait,
		full,
		scene: "/reno/angela/jet.webp",
		place: "Shark Club · second-floor rail"
	};
	return {
		portrait,
		full,
		scene: "/reno/angela/rail.webp",
		place: "Shark Club · second-floor rail"
	};
}
function AngelaTalk({ life, character, onReply }) {
	if (!life.dialogue || life.dialogue.who !== "angela") return null;
	const view = angelaCurrent(character, life);
	const art = sceneFor(view.node);
	const inRoom = view.node === "upstairs" || view.node.startsWith("room") || view.node.startsWith("morning");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative w-full ${inRoom ? "h-56 sm:h-72" : "h-40 sm:h-52"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: art.scene,
					alt: "",
					className: "size-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute bottom-3 left-4 font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
					children: art.place
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 p-4 sm:grid-cols-[7.5rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: art.portrait,
					alt: "Angela Bishop",
					className: "aspect-[2/3] w-full rounded-lg object-cover object-top shadow-[0_0_0_1px_rgba(236,234,227,0.12)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: art.full,
					alt: "",
					className: "hidden aspect-[2/3] w-full rounded-lg object-cover object-top sm:block"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold tracking-tight",
					children: "Angela Bishop"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: inRoom ? "Third floor. A door with a B on it. The band is a dull drum through the carpet." : "John Bishop's daughter. Bored. Jet in a wall safe. The family name is the gun."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-4 max-h-64 overflow-auto rounded-lg bg-raised px-4 py-3 text-sm leading-relaxed text-fg",
					children: view.line
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: view.replies.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						className: "h-auto min-h-11 justify-start whitespace-normal py-2 text-left",
						onClick: () => onReply(r.id),
						children: r.text
					}, r.id))
				})
			] })]
		})]
	});
}
function RenoLoot({ life, onTake }) {
	const loot = life.loot;
	if (!loot) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
				children: "After the fight"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-1 text-2xl font-semibold tracking-tight",
				children: "Pockets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					loot.foeNames.join(", ") || "Them",
					". Weapons, armor, and pockets. ",
					loot.summary
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-1 rounded-lg bg-raised px-3 py-2 text-sm",
				children: loot.drops.length ? loot.drops.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] text-subtle tabular-nums",
						children: d.qty
					})]
				}, `${d.name}-${i}`)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-muted",
					children: "Empty pockets."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 max-h-40 space-y-1 overflow-auto font-mono text-xs leading-relaxed text-muted",
				children: loot.log.slice(-16).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, `${i}-${line}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "min-h-11",
					onClick: () => onTake(true),
					children: "Take it"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "min-h-11",
					onClick: () => onTake(false),
					children: "Leave it"
				})]
			})
		]
	});
}
function RenoBuilding({ building, night, district, onClose, onWalk, onEnter, onMill }) {
	const use = building.abandoned ? "abandoned" : building.use;
	const room = roomCopy(use, Boolean(night), building.abandoned, building.name);
	const npc = npcFor(building.district ?? district ?? "virgin", Boolean(night), use);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
				children: [
					ZONE_LABEL[building.zone],
					" · ",
					building.abandoned ? "abandoned" : building.use
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-1 text-2xl font-semibold tracking-tight",
				children: building.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[10px] tracking-wide text-subtle uppercase",
				children: ZONE_HINT[building.zone]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: building.rumor
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg",
				children: building.people
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: room.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-fg",
				children: [
					npc.name,
					" is the one on ",
					npc.beat,
					". ",
					night ? npc.night : npc.day
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: onEnter,
						className: "min-h-11",
						children: "Go in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: onWalk,
						className: "min-h-11",
						children: "Walk there"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: onMill,
						className: "min-h-11",
						children: millLabel(building.abandoned ? "abandoned" : building.use, building.abandoned)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: onClose,
						className: "min-h-11",
						children: "Close"
					})
				]
			})
		]
	});
}
function NeedBar({ label, value, invert }) {
	const n = Math.max(0, Math.min(100, value));
	const warn = invert ? n <= 25 : n >= 70;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between font-mono text-[10px] tracking-wide text-subtle uppercase",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: warn ? "text-danger" : "",
			children: Math.round(n)
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 h-1.5 overflow-hidden rounded-full bg-inset",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full", warn ? "bg-danger" : "bg-accent"),
			style: { width: `${n}%` }
		})
	})] });
}
function RenoPack({ life, character, onAction, onLoadout }) {
	const home = life.housingId ? HOUSING_BY_ID[life.housingId] : null;
	const loadout = ensureLoadout(character.loadout);
	const addictions = STASH_IDS.filter((id) => (life.addicted[id] ?? 0) > 0);
	const stash = STASH_IDS.filter((id) => (life.stash[id] ?? 0) > 0);
	const trader = (character.perks ?? []).includes("masterTrader");
	const meal = trader ? 10 : 12;
	const water = trader ? 3 : 4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Needs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold tracking-tight",
						children: "The body keeps score"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeedBar, {
								label: "Hunger",
								value: life.hunger ?? 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeedBar, {
								label: "Thirst",
								value: life.thirst ?? 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeedBar, {
								label: "Sleep",
								value: life.fatigue ?? 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeedBar, {
								label: "Boredom",
								value: life.boredom ?? 0
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-[10px] tracking-wide text-subtle uppercase",
						children: [
							"Reserve ",
							life.rations ?? 0,
							" meal",
							(life.rations ?? 0) === 1 ? "" : "s",
							" · ",
							life.waters ?? 0,
							" water"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: ["Hunger, thirst, and sleep climb over days. A bar turning red is not a collapse. Strain has to sit", (life.strain ?? 0) >= 180 ? " — and it has. Your hands know it." : " before it shows up in a roll."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "min-h-11",
								onClick: () => onAction({ type: "eat" }),
								children: (life.rations ?? 0) > 0 ? `Eat reserve (${life.rations})` : `Eat (${meal})`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "min-h-11",
								onClick: () => onAction({
									type: "drink",
									kind: "water"
								}),
								children: (life.waters ?? 0) > 0 ? `Drink reserve (${life.waters})` : `Drink (${water})`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								className: "min-h-11",
								onClick: () => onAction({
									type: "stock",
									kind: "meal"
								}),
								children: [
									"Pack meal (",
									meal,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								className: "min-h-11",
								onClick: () => onAction({
									type: "stock",
									kind: "water"
								}),
								children: [
									"Pack water (",
									water,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "min-h-11",
								onClick: () => onAction({ type: "sleep" }),
								children: "Sleep"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Assets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold tracking-tight",
						children: home ? home.name : "No roof"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: home ? home.kind === "squat" ? `Squat claimed. Converted ${life.squatProgress}%. ${home.note}` : `Rented. ${home.rent} caps a week. ${home.note}` : "Street and doorways. Rent the Desert Rose or claim a squat."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase",
						children: [
							"Caps ",
							life.caps,
							" · Heat ",
							Math.round(life.heat),
							" · Warrant ",
							Math.round(life.warrant ?? 0),
							" · Fame ",
							life.fame,
							" · Regard ",
							Math.round(life.regard ?? 0),
							" · Fear ",
							Math.round(life.fear ?? 0)
						]
					})
				]
			}),
			addictions.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.22em] text-danger uppercase",
					children: "Addictions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: addictions.map((id) => {
						const last = life.lastDose?.[id] ?? 0;
						const dry = life.day - last >= 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-2 rounded-lg bg-raised px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: STASH_META[id].name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] tracking-wide text-subtle uppercase",
								children: [
									"intensity ",
									life.addicted[id],
									" · ",
									dry ? "withdrawal" : "dosed today"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "secondary",
								disabled: (life.stash[id] ?? 0) <= 0,
								onClick: () => onAction({
									type: "useStash",
									stash: id
								}),
								children: [
									"Use (",
									life.stash[id] ?? 0,
									")"
								]
							})]
						}, id);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Stash"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: "Chems and habits"
					}),
					stash.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: stash.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-2 rounded-lg bg-raised px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									STASH_META[id].name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[10px] text-subtle uppercase",
										children: ["×", life.stash[id]]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								onClick: () => onAction({
									type: "useStash",
									stash: id
								}),
								children: "Use"
							})]
						}, id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Empty. Buy on a corner or lift a bag off a table."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono flex items-center gap-2 text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "size-3.5" }), " Equipment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: "Worn and packed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							"Right ",
							stackItem(loadout, loadout.right)?.name ?? "empty",
							" · Body",
							" ",
							stackItem(loadout, loadout.body)?.name ?? "empty"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadoutBoard, {
							character,
							compact: true,
							onChange: onLoadout
						})
					})
				]
			})
		]
	});
}
function RenoIntel({ life, character, onAction }) {
	ensureIntel(life);
	const dealers = life.dealers ?? [];
	const marks = life.marks ?? [];
	const soughtD = dealers.find((d) => d.id === life.soughtDealer);
	marks.find((m) => m.id === life.soughtMark);
	const derived = derive(character);
	const sneak = derived.skills.sneak?.total ?? 0;
	const science = derived.skills.science?.total ?? 0;
	const cover = sneakCover(sneak);
	const stock = [
		"jet",
		"marijuana",
		"cocaine",
		"buffout",
		"mentats",
		"psycho"
	].reduce((n, id) => n + (life.stash[id] ?? 0), 0);
	const dealNeed = life.dealing ? 3 : 5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "City overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-5" }), " New Reno, on paper"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "The sidewalk is not a spawn table. Citizens keep hours. Independents work a corner and remember a slight. Family blades walk their turf, and when tension is high they walk toward a rival. Police follow a warrant, which trails heat by hours, not a gunshot. Fear makes civilians take the long way and families refuse to look weak. Regard is fame after it has had time to be believed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 grid grid-cols-2 gap-2 font-mono text-[11px] text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-raised px-2 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "text-subtle uppercase",
									children: ["Heat ", Math.round(life.heat)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Fresh noise. Fades slowly. Does not send a fight." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-raised px-2 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "text-subtle uppercase",
									children: ["Warrant ", Math.round(life.warrant ?? 0)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Cops start walking around 16. They square up around 32." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-raised px-2 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "text-subtle uppercase",
									children: [
										"Fame ",
										life.fame,
										" / Regard ",
										Math.round(life.regard ?? 0)
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Regard creeps toward fame. Fear drags it down." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-raised px-2 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "text-subtle uppercase",
									children: [
										"Fear ",
										Math.round(life.fear ?? 0),
										" · Tension ",
										Math.round(life.tension ?? 0)
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Tension over 48 puts rival crews on the same road." })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Long game"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold tracking-tight",
						children: "Five times the clock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "These are not errands. A shift burns five times over while the city keeps score. Luck leans the roll. It does not own it. All of it draws attention. Packed meals, canteens, and food already in the pack get eaten when hunger or thirst climbs. A carouse buys more if the caps are there."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-[10px] tracking-wide text-subtle uppercase",
						children: [
							"Sneak ",
							sneak,
							"% · ",
							cover.label,
							" · Luck ",
							derived.special.LK,
							" · Science ",
							science,
							"%"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: cover.blurb
					}),
					life.pressureDay > life.day ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Someone is looking. Not tonight. About ",
							life.pressureDay - life.day,
							" day",
							life.pressureDay - life.day === 1 ? "" : "s",
							" out, unless the pile gets louder."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-2",
						children: [
							life.gangId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rounded-lg bg-raised px-3 py-2 text-sm text-muted",
								children: [
									"You already wear ",
									GANG_BY_ID[life.gangId].name,
									" colors. Courting another family is how people get introduced to a ditch."
								]
							}) : GANGS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: life.district === g.turf ? "secondary" : "ghost",
								className: "h-auto min-h-11 justify-start whitespace-normal py-2 text-left",
								disabled: life.district !== g.turf,
								onClick: () => onAction({
									type: "courtFamily",
									gang: g.id
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block font-medium",
									children: ["Court the ", g.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: [
										DISTRICT_BY_ID[g.turf].name,
										" · ",
										hustleClock(8),
										" · ",
										g.head
									]
								})] })]
							}, g.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "secondary",
								className: "h-auto min-h-11 justify-start whitespace-normal py-2 text-left",
								onClick: () => onAction({ type: "carouse" }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Martini, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: "Carouse"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: [hustleClock(4), " · cards, smoke, a tab"]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "h-auto min-h-11 justify-start whitespace-normal py-2 text-left",
								disabled: !life.business && life.caps < 1100,
								onClick: () => onAction({ type: "business" }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: life.business ? `Run ${life.business.name}` : "Stake a front"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: life.business ? `${hustleClock(4)} · books, shakedowns, a cut` : `${BUSINESS_COST} caps · ${hustleClock(10)}`
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "h-auto min-h-11 justify-start whitespace-normal py-2 text-left",
								disabled: stock < dealNeed,
								onClick: () => onAction({ type: "dealing" }),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: life.dealing ? "Move product" : "Start dealing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: [
										stock,
										"/",
										dealNeed,
										" doses · ",
										hustleClock(life.dealing ? 4 : 8)
									]
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								className: "h-auto min-h-11 justify-start whitespace-normal py-2 text-left",
								disabled: science < 100 || !life.lab && life.caps < 320 || life.lab && life.caps < 70,
								onClick: () => onAction({ type: "lab" }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: life.lab ? "Cook a batch" : "Set up a lab"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: science < 100 ? `Science ${science}% · needs 100` : life.lab ? `70 caps · ${hustleClock(6)}` : `320 caps · ${hustleClock(8)} · smaller than a front`
								})] })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Dealers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: "Seek the bagmen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Mordinos move Jet. Bishops sell polite. Independents die first. Find them, then buy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: dealers.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-raised px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: d.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[10px] tracking-wide text-subtle uppercase",
										children: [
											DISTRICT_BY_ID[d.district].name,
											" · ",
											d.gang ? GANG_BY_ID[d.gang].name : "indie",
											" ·",
											" ",
											sizeLabel(d.size)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: d.note
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-[10px] text-subtle uppercase",
										children: d.wares.map((w) => STASH_META[w].name).join(" · ")
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: life.soughtDealer === d.id ? "secondary" : "ghost",
									className: "min-h-11 shrink-0",
									onClick: () => onAction({
										type: "seekDealer",
										dealer: d.id
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), "Find"]
								})]
							}), soughtD?.id === d.id && life.district === d.district ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-1",
								children: d.wares.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: () => onAction({
										type: "dealBuy",
										dealer: d.id,
										chem: w,
										qty: 1
									}),
									children: ["Buy ", STASH_META[w].name]
								}, w))
							}) : null]
						}, d.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Wealthy marks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: "Money with a pulse"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Befriend, rob, or take them off the street. Guards scale with the purse. Kidnap is a note and a bag. The families remember."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: marks.map((m) => {
							const guards = guardCount(m.wealth);
							const open = life.soughtMark === m.id && life.district === m.district;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-lg bg-raised px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: m.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono text-[10px] tracking-wide text-subtle uppercase",
											children: [
												DISTRICT_BY_ID[m.district].name,
												" · ",
												m.wealth,
												" caps · ",
												guards,
												" guard",
												guards === 1 ? "" : "s",
												" · ",
												m.mood
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted",
											children: m.title
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: life.soughtMark === m.id ? "secondary" : "ghost",
										className: "min-h-11 shrink-0",
										onClick: () => onAction({
											type: "seekMark",
											mark: m.id
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), "Find"]
									})]
								}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											onClick: () => onAction({
												type: "markAct",
												mark: m.id,
												act: "befriend"
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, {}), "Befriend"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "secondary",
											onClick: () => onAction({
												type: "markAct",
												mark: m.id,
												act: "rob"
											}),
											children: "Rob"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => onAction({
												type: "markAct",
												mark: m.id,
												act: "kidnap"
											}),
											children: "Kidnap"
										})
									]
								}) : null]
							}, m.id);
						})
					})
				]
			})
		]
	});
}
function RenoAdvance({ life, character, onAction }) {
	const d = derive(character);
	const bar = xpIntoLevel(life.xp ?? 0, character.level);
	const nextAt = xpToReach(character.level + 1);
	const bank = character.skillBank ?? 0;
	const perkBank = character.perkBank ?? 0;
	const perks = availablePerks(character, d);
	const owned = character.perks ?? [];
	const [tagPick, setTagPick] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Level"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleArrowUp, { className: "size-5" }),
							" Level ",
							character.level
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							life.xp ?? 0,
							" XP · next at ",
							nextAt,
							" · ",
							d.skillPointsPerLevel,
							" SP a level · perks every",
							" ",
							d.perkInterval
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-2 overflow-hidden rounded-full bg-inset",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-accent",
							style: { width: `${bar.pct}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-[10px] tracking-wide text-subtle uppercase",
						children: [
							"Bank ",
							bank,
							" SP · ",
							perkBank,
							" perk",
							perkBank === 1 ? "" : "s",
							" waiting"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Skills"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: "Spend the points"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Tagged skills buy 2% for 1 point until 101%. After that the street gets expensive, Fallout 2 style."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: SKILL_IDS.map((id) => {
							const tagged = (character.tagged ?? []).includes(id);
							const total = d.skills[id]?.total ?? 0;
							const { cost, gain } = spendCost(total, tagged);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 hover:bg-raised",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: cn("truncate text-sm", tagged ? "text-fg" : "text-muted"),
										children: [SKILL_META[id].name, tagged ? " · tag" : ""]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[10px] text-subtle tabular-nums",
										children: [
											total,
											"% · +",
											gain,
											"% costs ",
											cost
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									className: "min-h-11",
									disabled: bank < cost,
									onClick: () => onAction({
										type: "spendSkill",
										skill: id
									}),
									children: "+"
								})]
							}, id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Perks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold",
						children: perkBank > 0 ? "Choose" : "Earned"
					}),
					owned.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: ["Have: ", owned.join(", ")]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							"None yet. First perk at level ",
							d.perkInterval,
							"."
						]
					}),
					perkBank > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: perks.length ? perks.map((perk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-raised px-3 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: perk.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] tracking-wide text-subtle uppercase",
									children: perk.requires
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: perk.blurb
								}),
								perk.id === "tag" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "min-h-11 rounded-md bg-inset px-2 text-sm",
										value: tagPick,
										onChange: (e) => setTagPick(e.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Tag which skill"
										}), SKILL_IDS.filter((id) => !(character.tagged ?? []).includes(id)).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: id,
											children: SKILL_META[id].name
										}, id))]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										disabled: !tagPick,
										onClick: () => onAction({
											type: "pickPerk",
											perk: perk.id,
											tagSkill: tagPick || void 0
										}),
										children: "Take Tag!"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "mt-2 min-h-11",
									onClick: () => onAction({
										type: "pickPerk",
										perk: perk.id
									}),
									children: "Take"
								})
							]
						}, perk.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Nothing you qualify for yet. Raise SPECIAL or skills."
						})
					}) : null
				]
			})
		]
	});
}
var noopStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
function migrate(life, hpMax) {
	const fallback = DISTRICT_POS[life.district] ?? DISTRICT_POS.virgin;
	const pos = {
		x: life.posX ?? fallback.x,
		z: life.posZ ?? fallback.z
	};
	return ensureCity({
		...life,
		hpMax: life.hpMax || hpMax,
		trainBonus: life.trainBonus ?? 0,
		rentPaidWeek: life.rentPaidWeek ?? 0,
		posX: pos.x,
		posZ: pos.z,
		sighting: life.sighting ?? null,
		stash: {
			jet: life.stash?.jet ?? 0,
			psycho: life.stash?.psycho ?? 0,
			buffout: life.stash?.buffout ?? 0,
			mentats: life.stash?.mentats ?? 0,
			vodka: life.stash?.vodka ?? 0,
			cigarettes: life.stash?.cigarettes ?? 0,
			marijuana: life.stash?.marijuana ?? 0,
			cocaine: life.stash?.cocaine ?? 0
		},
		gangRep: {
			mordinos: life.gangRep?.mordinos ?? 0,
			wrights: life.gangRep?.wrights ?? 0,
			salvatores: life.gangRep?.salvatores ?? 0,
			bishops: life.gangRep?.bishops ?? 0
		},
		log: Array.isArray(life.log) ? life.log : [],
		dialogue: life.dialogue ?? null,
		angela: {
			met: life.angela?.met ?? false,
			mood: life.angela?.mood ?? "fresh",
			jetOffer: life.angela?.jetOffer ?? false,
			slept: life.angela?.slept ?? false,
			insulted: life.angela?.insulted ?? false,
			lastTalkDay: life.angela?.lastTalkDay ?? 0
		},
		combat: life.combat && "hexes" in life.combat ? {
			...life.combat,
			map: life.combat.map ?? null,
			targetId: life.combat.targetId ?? ""
		} : null,
		minute: life.minute ?? 0,
		loot: life.loot ?? null,
		inspecting: life.inspecting ?? null,
		insideId: life.insideId ?? null,
		npcMemory: life.npcMemory ?? {},
		job: life.job ?? null,
		worldDay: life.worldDay ?? 0,
		lastDose: life.lastDose ?? {},
		hunger: life.hunger ?? 22,
		thirst: life.thirst ?? 18,
		fatigue: life.fatigue ?? 12,
		boredom: life.boredom ?? 28,
		xp: life.xp ?? 0,
		dealers: life.dealers?.length ? life.dealers : seedDealers(),
		marks: life.marks?.length ? life.marks : seedMarks(),
		soughtDealer: life.soughtDealer ?? null,
		soughtMark: life.soughtMark ?? null,
		business: life.business ?? null,
		dealing: life.dealing ?? false,
		lab: life.lab ?? false,
		pressureDay: life.pressureDay ?? 0,
		rations: life.rations ?? 0,
		waters: life.waters ?? 0,
		fear: life.fear ?? 0,
		regard: life.regard ?? 0,
		warrant: life.warrant ?? 0,
		strain: life.strain ?? 0,
		tension: life.tension ?? 50,
		friction: {
			mordinos: life.friction?.mordinos ?? 0,
			wrights: life.friction?.wrights ?? 0,
			salvatores: life.friction?.salvatores ?? 0,
			bishops: life.friction?.bishops ?? 0
		},
		grudges: life.grudges ?? {},
		absent: life.absent ?? {},
		reprieveMinute: life.reprieveMinute ?? 0
	});
}
var useReno = create()(persist((set, get) => ({
	lives: {},
	hydrated: false,
	setHydrated: (value) => set({ hydrated: value }),
	ensure: (characterId, hpMax) => {
		const existing = get().lives[characterId];
		if (existing) {
			const ready = migrate(existing, hpMax);
			ready.hpMax = hpMax;
			if (ready.hp > hpMax) ready.hp = hpMax;
			set({ lives: {
				...get().lives,
				[characterId]: ready
			} });
			return ready;
		}
		const life = newLife(characterId, hpMax);
		set({ lives: {
			...get().lives,
			[characterId]: life
		} });
		return life;
	},
	setLife: (life) => {
		set({ lives: {
			...get().lives,
			[life.characterId]: life
		} });
	},
	remove: (characterId) => {
		const lives = { ...get().lives };
		delete lives[characterId];
		set({ lives });
	}
}), {
	name: "special-forge-reno",
	storage: createJSONStorage(() => typeof window === "undefined" ? noopStorage : localStorage),
	partialize: (state) => ({ lives: state.lives }),
	onRehydrateStorage: () => (state) => {
		state?.setHydrated(true);
	}
}));
function RenoPage() {
	const { id } = Route$1.useParams();
	const character = useRoster((s) => s.characters.find((c) => c.id === id));
	const upsert = useRoster((s) => s.upsert);
	const rosterHydrated = useRoster((s) => s.hydrated);
	const setRosterHydrated = useRoster((s) => s.setHydrated);
	const life = useReno((s) => s.lives[id]);
	const ensure = useReno((s) => s.ensure);
	const setLife = useReno((s) => s.setLife);
	const renoHydrated = useReno((s) => s.hydrated);
	const setRenoHydrated = useReno((s) => s.setHydrated);
	const [walkTo, setWalkTo] = (0, import_react.useState)(null);
	const [pane, setPane] = (0, import_react.useState)("street");
	(0, import_react.useEffect)(() => {
		if (useRoster.persist.hasHydrated()) setRosterHydrated(true);
		if (useReno.persist.hasHydrated()) setRenoHydrated(true);
	}, [setRosterHydrated, setRenoHydrated]);
	(0, import_react.useEffect)(() => {
		if (!character || !renoHydrated) return;
		ensure(character.id, derive(character).hp);
	}, [
		character,
		ensure,
		renoHydrated
	]);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => {
			const current = useReno.getState().lives[id];
			if (!current || current.dead || current.combat || current.sighting || current.dialogue || current.loot) return;
			const sheet = useRoster.getState().get(id);
			if (!sheet) return;
			const result = applyAction(current, sheet, { type: "tickMinute" });
			useReno.getState().setLife(result.life);
		}, 1e4);
		return () => window.clearInterval(timer);
	}, [id]);
	if (!rosterHydrated || !renoHydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg px-4 py-8 text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Loading New Reno…"
		})
	});
	if (!character) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg px-4 py-8 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "That dossier is not in this browser."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Back to roster"
			})
		})]
	});
	if (characterEngine(character) !== "pnp") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg px-4 py-8 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "New Reno is the d100 desk. This one was rolled on d20."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/sheet/$id",
				params: { id: character.id },
				children: "Open dossier"
			})
		})]
	});
	if (!life) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg px-4 py-8 text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Opening the city…"
		})
	});
	const sheet = character;
	const now = life;
	function act(action) {
		if (action.type === "travel" || action.type === "arrive") setWalkTo(null);
		const currentLife = useReno.getState().lives[sheet.id] ?? now;
		const currentSheet = useRoster.getState().get(sheet.id) ?? sheet;
		const result = applyAction(currentLife, currentSheet, action);
		setLife(result.life);
		if (result.character !== currentSheet) upsert(result.character);
	}
	const derived = derive(sheet);
	const inspecting = life.inspecting ? BUILDING_BY_ID[life.inspecting] : null;
	const locked = Boolean(life.combat || life.loot || life.sighting || life.dialogue);
	const panes = [
		{
			id: "street",
			label: "Street"
		},
		{
			id: "pack",
			label: "Pack"
		},
		{
			id: "city",
			label: "City"
		},
		{
			id: "level",
			label: "Level"
		}
	];
	function saveLoadout(loadout) {
		const current = useRoster.getState().get(sheet.id) ?? sheet;
		upsert({
			...current,
			loadout,
			updatedAt: Date.now()
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[11px] font-semibold tracking-[0.28em] text-muted uppercase",
							children: "New Reno · d100"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl leading-none font-semibold tracking-tight",
							children: sheet.name.trim() || "Unnamed"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-wide text-subtle uppercase sm:ml-2",
						children: clockLabel(life)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								chip: "HP",
								value: `${life.hp}/${life.hpMax}`,
								warn: life.hp <= life.hpMax / 4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								chip: "Caps",
								value: String(life.caps)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								chip: "Heat",
								value: String(Math.round(life.heat)),
								warn: life.heat >= 40
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								chip: "Warrant",
								value: String(Math.round(life.warrant ?? 0)),
								warn: (life.warrant ?? 0) >= 32
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								chip: "Fame",
								value: String(Math.round(life.fame))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								chip: "Regard",
								value: String(Math.round(life.regard ?? 0))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sheet/$id",
									params: { id: sheet.id },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, {}), "Dossier"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, {}), "Roster"]
								})
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid w-full max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,0.9fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reno-stage",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoCity3D, {
							life,
							disabled: Boolean(life.combat || life.dialogue || life.sighting || life.loot),
							walkTo,
							inspecting: life.inspecting,
							onInspect: (building) => act({
								type: "inspect",
								building
							}),
							onArrive: (district, x, z) => {
								if (district === useReno.getState().lives[sheet.id]?.district) return;
								act({
									type: "arrive",
									district,
									x,
									z
								});
							},
							onWalkTick: (x, z) => act({
								type: "walkTick",
								x,
								z
							}),
							onStreetContact: (hit) => act({
								type: "streetContact",
								...hit
							}),
							onCombatHex: (q, r) => act({
								type: "combat",
								move: "hex-step",
								q,
								r
							})
						}),
						life.combat?.onMap ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 max-h-[48%] overflow-auto p-2 lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoCombat, {
									combat: life.combat,
									character: sheet,
									onMove: (move, part, extra) => act({
										type: "combat",
										move,
										part,
										q: extra?.q,
										r: extra?.r,
										targetId: extra?.targetId
									})
								})
							})
						}) : life.combat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reno-overlay",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoCombat, {
								combat: life.combat,
								character: sheet,
								onMove: (move, part, extra) => act({
									type: "combat",
									move,
									part,
									q: extra?.q,
									r: extra?.r,
									targetId: extra?.targetId
								})
							})
						}) : null,
						life.loot && !life.combat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reno-overlay",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoLoot, {
								life,
								onTake: (take) => act({
									type: "loot",
									take
								})
							})
						}) : null,
						life.sighting && !life.combat && !life.loot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reno-overlay reno-overlay-sheet",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoSighting, {
								life,
								character: sheet,
								onChoice: (choice) => act({
									type: "encounter",
									choice
								})
							})
						}) : null,
						!life.combat && life.dialogue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reno-overlay",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AngelaTalk, {
								life,
								character: sheet,
								onReply: (reply) => act({
									type: "dialogue",
									reply
								})
							})
						}) : null,
						inspecting && !life.combat && !life.loot && !life.sighting && !life.dialogue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-auto max-h-[46%] overflow-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoBuilding, {
									building: inspecting,
									night: isNight(life),
									district: life.district,
									onClose: () => act({
										type: "inspect",
										building: null
									}),
									onWalk: () => setWalkTo({
										x: inspecting.x,
										z: inspecting.z
									}),
									onEnter: () => act({ type: "enter" }),
									onMill: () => act({ type: "mill" })
								})
							})
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "Log"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2 max-h-48 space-y-1 overflow-auto text-sm leading-relaxed text-muted",
						children: life.log.slice(0, 12).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, `${i}-${line}`))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-auto",
				children: [
					!locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 grid grid-cols-4 gap-1 rounded-xl bg-surface p-1 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
						children: panes.map((item) => {
							const on = pane === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: on ? "secondary" : "ghost",
								className: "min-h-11 px-1",
								onClick: () => setPane(item.id),
								children: item.label
							}, item.id);
						})
					}) : null,
					inspecting && !life.combat && !life.loot && !life.sighting && !life.dialogue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoBuilding, {
							building: inspecting,
							night: isNight(life),
							district: life.district,
							onClose: () => act({
								type: "inspect",
								building: null
							}),
							onWalk: () => setWalkTo({
								x: inspecting.x,
								z: inspecting.z
							}),
							onEnter: () => act({ type: "enter" }),
							onMill: () => act({ type: "mill" })
						})
					}) : null,
					life.combat?.onMap ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoCombat, {
							combat: life.combat,
							character: sheet,
							onMove: (move, part, extra) => act({
								type: "combat",
								move,
								part,
								q: extra?.q,
								r: extra?.r,
								targetId: extra?.targetId
							})
						})
					}) : life.combat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
						children: [
							"The ring is a small board. Sequence ",
							derived.sequence,
							". The street outside keeps moving without you."
						]
					}) : life.loot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
						children: "Search the body. The weapon and armor come off with the pockets, or you leave them."
					}) : life.sighting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
						children: "You saw them on the street before the hexes dropped. Talk, slip past, or take the first sequence. This is not a random encounter. They were already walking."
					}) : life.dialogue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl bg-surface p-4 text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
						children: "Angela Bishop. Finish the conversation before you walk."
					}) : pane === "pack" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoPack, {
						life: now,
						character: sheet,
						onAction: act,
						onLoadout: saveLoadout
					}) : pane === "city" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoIntel, {
						life: now,
						character: sheet,
						onAction: act
					}) : pane === "level" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoAdvance, {
						life: now,
						character: sheet,
						onAction: act
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoDesk, {
						life: now,
						character: sheet,
						onAction: act
					})
				]
			})]
		})]
	});
}
function Stat({ chip, value, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-raised px-2 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[10px] tracking-widest text-subtle uppercase",
			children: chip
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `font-mono text-sm tabular-nums ${warn ? "text-danger" : ""}`,
			children: value
		})]
	});
}
//#endregion
export { RenoPage as component };
