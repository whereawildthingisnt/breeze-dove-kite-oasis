import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as require_jsx_runtime, _ as ShapeGeometry, c as useThree, d as CanvasTexture, f as ClampToEdgeWrapping, g as Shape, h as SRGBColorSpace, i as Html, l as BufferAttribute, m as RepeatWrapping, n as useTexture, o as Canvas, p as LinearFilter, r as Billboard, s as useFrame, t as OrbitControls, u as BufferGeometry, v as Texture, y as Vector3 } from "../_libs/@react-three/drei+[...].mjs";
import { S as Backpack, _ as FlaskConical, a as Search, b as CircleArrowUp, f as Martini, g as FolderOpen, h as Handshake, i as Store, m as Landmark, o as ScrollText, t as Users } from "../_libs/lucide-react.mjs";
import { r as Route$1 } from "./router-Ci9gvMsl.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { $ as stackItem, A as consumeItem, C as addToPack, D as characterEngine, E as availablePerks, H as genderOf, N as derive, R as ensureLoadout, U as getItem, V as formatDamage, _ as SKILL_IDS, d as PERK_BY_ID, j as countItem, k as cn, n as Button, rt as useRoster, v as SKILL_META } from "./store-CHBbC2-O.mjs";
import { n as LoadoutBoard } from "./loadout-board-DvCxvGCw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reno._id-CGzLUZhG.js
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
var LINES = {
	clear: "The sky opens. You can see the next block, which is not always a kindness.",
	dust: "Dust comes in off the flats. Neon turns brown. People squint and keep walking.",
	wind: "Wind down the streets. Signs complain. Paper and grit move faster than the cars.",
	rain: "Rain. Reno does not know what to do with it. The lots shine and the crowds step inside.",
	storm: "A storm sits on the city. Short sight, hard rain, and every door looks smarter than the sidewalk."
};
/** Changes every six hours. Same clock, same sky, for everyone. */
function weatherAt(day, hour) {
	const h = (hour % 24 + 24) % 24;
	const slot = Math.max(0, day) * 4 + Math.floor(h / 6);
	const n = (slot * 17 + slot * slot + 3) % 11;
	if (n <= 5) return "clear";
	if (n <= 7) return "dust";
	if (n === 8) return "wind";
	if (n === 9) return "rain";
	return "storm";
}
function weatherLine(weather) {
	return LINES[weather];
}
function weatherCrowd(weather) {
	if (weather === "storm") return .62;
	if (weather === "rain") return .78;
	if (weather === "dust") return .9;
	if (weather === "wind") return .94;
	return 1;
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
		blurb: "A weekend sold to people who do not live here. The people who do live here sell it back.",
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
		blurb: "Hourly keys, short stays, and a day wage that will not rent the week.",
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
	const month = Math.floor((life.day - 1) / 30) + 1;
	const dom = (life.day - 1) % 30 + 1;
	const pad = String(h).padStart(2, "0");
	const min = String(life.minute ?? 0).padStart(2, "0");
	const night = h >= 20 || h < 6;
	const wx = weatherAt(life.day, h);
	const sky = wx === "clear" ? "" : ` · ${wx}`;
	return `Month ${month} · Day ${dom} · ${pad}:${min}${night ? " · night" : ""}${sky}`;
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
		corpses: [],
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
	if (x * x + (z - 40) * (z - 40) > 115600) return "wild";
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
	office: ["Bishop books", "Quiet floor"],
	club: [
		"Silver Slipper",
		"The Go-Go",
		"Mapes Floor",
		"Harold's Revue",
		"Neon Corral"
	],
	gas: [
		"Last Pump North",
		"South Cut Fuel",
		"East Grade",
		"West Dust Stop"
	]
};
var RUMOR = {
	casino: ["They came in with clean boots. The felt will have the boots by midnight.", "A cheat got dragged out last night. The floor was mopped."],
	motel: ["Short stays. The train leaves. The bill stays with whoever works the desk.", "A pimp named Calico runs the back stairs. He taxes smiles."],
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
	office: ["Polite floor. Politics with a gun in the drawer."],
	club: ["A floor show, a band, and a minimum that is not a suggestion.", "Vegas lights on a Reno tab. The revue starts when the street gets dark."],
	gas: ["The last pumps before the sand. Travelers who are not staying."]
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
	office: ["Bishop secretaries and men in good coats."],
	club: ["A band, floor staff, and people in from the highway for the show."],
	gas: ["A clerk, a dog, and plates that are not from here."]
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
	if (use === "club") return "Buy a ticket";
	if (use === "gas") return "Fill up";
	return "Talk to locals";
}
var KEY_LOCATIONS = [
	{
		id: "virgin",
		name: "Virgin Street",
		blurb: "Outside money. Local cut."
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
		blurb: "Short stays. The train leaves."
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
/** 1 world unit = 1 meter. People are 5'9". Cars are a real sedan. */
var HUMAN_M = 1.7526;
var HUMAN_W = .48;
var DOOR_H = 2.13;
var DOOR_W = .9;
var CAR_L = 4.72;
var CAR_W = 1.82;
var CAR_H = 1.46;
var MILE = 1609;
/** Floor to floor, including the slab. */
var STORY = 3.15;
/** Curb to building face. */
var SIDEWALK = 2.4;
/** Typical stall: car plus a step so doors can open. */
var PARK_GAP = 6.92;
function floors(n) {
	return Math.round(n * STORY * 10) / 10;
}
var RUNS = [
	{
		id: "virgin",
		ax: -90,
		az: 1.6,
		bx: 140,
		bz: 1.6,
		speed: .04,
		phase: .1,
		color: "#3a3e44"
	},
	{
		id: "main",
		ax: 1.6,
		az: -40,
		bx: 1.6,
		bz: 150,
		speed: .035,
		phase: .4,
		color: "#6a3030"
	},
	{
		id: "second",
		ax: -70,
		az: 56.4,
		bx: 120,
		bz: 56.4,
		speed: .03,
		phase: .7,
		color: "#2c3a34"
	},
	{
		id: "north",
		ax: 22,
		az: -200,
		bx: 22,
		bz: -1809,
		speed: .02,
		phase: .2,
		color: "#4a4038"
	},
	{
		id: "south",
		ax: 18,
		az: 220,
		bx: 18,
		bz: 1829,
		speed: .018,
		phase: .55,
		color: "#1e242c"
	},
	{
		id: "east",
		ax: 220,
		az: 42,
		bx: 1829,
		bz: 42,
		speed: .02,
		phase: .33,
		color: "#3a3e44"
	},
	{
		id: "west",
		ax: -200,
		az: 38,
		bx: -1809,
		bz: 38,
		speed: .017,
		phase: .8,
		color: "#6a3030"
	}
];
function runPose(run, time) {
	const u = ((time * run.speed + run.phase) % 1 + 1) % 1;
	const forward = u < .5;
	const ping = forward ? u * 2 : (1 - u) * 2;
	const x = run.ax + (run.bx - run.ax) * ping;
	const z = run.az + (run.bz - run.az) * ping;
	const dx = run.bx - run.ax;
	const dz = run.bz - run.az;
	return {
		x,
		z,
		yaw: Math.atan2(forward ? dx : -dx, forward ? dz : -dz)
	};
}
var CITY_POPULATION = 108640;
var LANDMARK = {
	virgin: {
		sprite: "/reno/sprites/neon-casino.webp",
		w: 48,
		h: floors(5),
		depth: 28,
		neon: true,
		form: "casino"
	},
	shark: {
		sprite: "/reno/sprites/casino-tower.webp",
		w: 16,
		h: floors(16),
		depth: 14,
		neon: true,
		form: "tower"
	},
	desperado: {
		sprite: "/reno/sprites/neon-casino.webp",
		w: 40,
		h: floors(3),
		depth: 22,
		neon: true,
		form: "marquee"
	},
	bishop: {
		sprite: "/reno/sprites/apartment.webp",
		w: 24,
		h: floors(9),
		depth: 18,
		neon: true,
		form: "slab"
	},
	mordino: {
		sprite: "/reno/bar.webp",
		w: 22,
		h: floors(3),
		depth: 16,
		neon: true,
		form: "marquee"
	},
	salvatore: {
		sprite: "/reno/bar.webp",
		w: 18,
		h: floors(4),
		depth: 14,
		form: "slab"
	},
	motel: {
		sprite: "/reno/sprites/motel.webp",
		w: 46,
		h: floors(3),
		depth: 16,
		form: "hotel"
	},
	stables: {
		sprite: "/reno/sprites/ring.webp",
		w: 34,
		h: floors(3),
		depth: 26,
		form: "arena"
	},
	jungle: {
		sprite: "/reno/sprites/shack.webp",
		w: 9,
		h: 3.6,
		depth: 7,
		form: "shack"
	},
	wright: {
		sprite: "/reno/sprites/motel.webp",
		w: 30,
		h: floors(3),
		depth: 20,
		form: "court"
	},
	chop: {
		sprite: "/reno/sprites/warehouse.webp",
		w: 38,
		h: 11.2,
		depth: 22,
		form: "loft"
	},
	rail: {
		sprite: "/reno/rail.webp",
		w: 52,
		h: 12.4,
		depth: 20,
		form: "depot"
	},
	market: {
		sprite: "/reno/sprites/shop.webp",
		w: 18,
		h: floors(2),
		depth: 14,
		form: "pawn"
	},
	golgotha: {
		sprite: "/reno/crypt.webp",
		w: 16,
		h: floors(2),
		depth: 12,
		form: "church"
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
/** Put a landmark on the sidewalk of the nearest street, inside the block, not in the lanes. */
function seatLandmark(x, z, front, depth, roads) {
	const local = roads.filter((r) => r.w < 400 && r.d < 400);
	const horiz = local.filter((r) => r.w >= r.d);
	const vert = local.filter((r) => r.d > r.w);
	let road = horiz[0];
	let best = Infinity;
	for (const r of horiz) {
		if (x < r.x - r.w / 2 - 20 || x > r.x + r.w / 2 + 20) continue;
		const d = Math.abs(z - r.z);
		if (d < best) {
			best = d;
			road = r;
		}
	}
	const side = z >= road.z ? 1 : -1;
	const crossings = vert.filter((v) => Math.abs(v.z - road.z) <= v.d / 2 + road.d).sort((a, b) => a.x - b.x);
	let left = road.x - road.w / 2 + 4;
	let right = road.x + road.w / 2 - 4;
	let gapFound = false;
	for (let i = 0; i < crossings.length - 1; i++) {
		const a = crossings[i];
		const b = crossings[i + 1];
		const innerL = a.x + a.w / 2;
		const innerR = b.x - b.w / 2;
		if (innerR - innerL < 12) continue;
		if (x >= a.x - 6 && x <= b.x + 6) {
			left = innerL;
			right = innerR;
			gapFound = true;
			break;
		}
	}
	if (!gapFound && crossings.length >= 2) {
		let bi = 0;
		let bd = Infinity;
		for (let i = 0; i < crossings.length - 1; i++) {
			const mid = (crossings[i].x + crossings[i + 1].x) / 2;
			const d = Math.abs(mid - x);
			if (crossings[i + 1].x - crossings[i + 1].w / 2 - (crossings[i].x + crossings[i].w / 2) > 12 && d < bd) {
				bd = d;
				bi = i;
			}
		}
		const a = crossings[bi];
		const b = crossings[bi + 1];
		left = a.x + a.w / 2;
		right = b.x - b.w / 2;
	}
	const width = Math.min(front, Math.max(8, right - left - 1.4));
	const cx = (left + right) / 2;
	let room = 36;
	for (const h of horiz) {
		if (h === road) continue;
		if (Math.abs(h.x - cx) > h.w / 2) continue;
		if (side > 0 && h.z > road.z) {
			const space = h.z - h.d / 2 - (road.z + road.d / 2) - SIDEWALK * 2;
			if (space > 4) room = Math.min(room, space);
		} else if (side < 0 && h.z < road.z) {
			const space = road.z - road.d / 2 - (h.z + h.d / 2) - SIDEWALK * 2;
			if (space > 4) room = Math.min(room, space);
		}
	}
	const deep = Math.min(depth, Math.max(8, room));
	return {
		x: cx,
		z: road.z + side * (road.d / 2 + SIDEWALK + deep / 2 + .5),
		width,
		depth: deep
	};
}
function buildCity() {
	const rand = mulberry(2244);
	const roads = [
		{
			x: 20,
			z: 0,
			w: 280,
			d: 14,
			name: "Virgin Street"
		},
		{
			x: 20,
			z: 58,
			w: 240,
			d: 12,
			name: "Second Street"
		},
		{
			x: 20,
			z: 102,
			w: 240,
			d: 12,
			name: "Wright Road"
		},
		{
			x: 20,
			z: -40,
			w: 200,
			d: 12,
			name: "Bishop Street"
		},
		{
			x: 20,
			z: 156,
			w: 100,
			d: 11,
			name: "Golgotha Road"
		},
		{
			x: 36,
			z: -72,
			w: 160,
			d: 9,
			name: "North Cut"
		},
		{
			x: 0,
			z: 50,
			w: 12,
			d: 250,
			name: "Main"
		},
		{
			x: 48,
			z: 40,
			w: 12,
			d: 230,
			name: "Shark Street"
		},
		{
			x: 96,
			z: 50,
			w: 11,
			d: 220,
			name: "Desperado"
		},
		{
			x: -52,
			z: 50,
			w: 11,
			d: 200,
			name: "Mordino Way"
		},
		{
			x: 132,
			z: 60,
			w: 11,
			d: 160,
			name: "Market Street"
		},
		{
			x: -92,
			z: 50,
			w: 10,
			d: 140,
			name: "Salvatore"
		},
		{
			x: 68,
			z: 80,
			w: 90,
			d: 8,
			name: "Yard Row"
		},
		{
			x: -20,
			z: 28,
			w: 9,
			d: 90,
			name: "Jungle Cut"
		},
		{
			x: 72,
			z: -20,
			w: 9,
			d: 80,
			name: "East Cut"
		},
		{
			x: 178,
			z: 58,
			w: 78,
			d: 8,
			name: "East Second"
		},
		{
			x: 196,
			z: 42,
			w: 8,
			d: 112,
			name: "Catclaw"
		},
		{
			x: 176,
			z: 8,
			w: 68,
			d: 7.5,
			name: "Neon Spur"
		},
		{
			x: 188,
			z: 90,
			w: 58,
			d: 7.5,
			name: "Lucky Lane"
		},
		{
			x: -130,
			z: 16,
			w: 8,
			d: 92,
			name: "Dust Road"
		},
		{
			x: -118,
			z: 46,
			w: 58,
			d: 7.5,
			name: "West Lot"
		},
		{
			x: -124,
			z: -8,
			w: 48,
			d: 7.5,
			name: "Tin Row"
		}
	];
	const buildings = DISTRICTS.map((d, i) => {
		const p = DISTRICT_POS[d.id];
		const mark = LANDMARK[d.id];
		const spot = seatLandmark(p.x, p.z, mark.w, mark.depth, roads);
		const lore = LANDMARK_LORE[d.id];
		return stamp({
			id: `land-${d.id}`,
			x: spot.x,
			z: spot.z,
			sprite: mark.sprite,
			width: spot.width,
			height: mark.h,
			depth: spot.depth,
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
	const stripSprite = (i) => {
		const k = Math.abs(i) % 7;
		if (k === 0) return {
			sprite: "/reno/sprites/casino-tower.webp",
			w: 12,
			h: floors(14),
			neon: true
		};
		if (k === 1) return {
			sprite: "/reno/sprites/casino-tower.webp",
			w: 14,
			h: floors(8),
			neon: true
		};
		if (k === 2) return {
			sprite: "/reno/sprites/neon-casino.webp",
			w: 36,
			h: floors(2),
			neon: true
		};
		if (k === 3) return {
			sprite: "/reno/sprites/neon-casino.webp",
			w: 24,
			h: floors(4),
			neon: true
		};
		if (k === 4) return {
			sprite: "/reno/sprites/neon-casino.webp",
			w: 18,
			h: floors(3),
			neon: true
		};
		if (k === 5) return {
			sprite: "/reno/sprites/apartment.webp",
			w: 16,
			h: floors(6),
			neon: true
		};
		return {
			sprite: "/reno/sprites/neon-casino.webp",
			w: 28,
			h: floors(3),
			neon: true
		};
	};
	const kindFor = (zone, n) => {
		const k = Math.abs(n) % 6;
		if (zone === "outskirts") {
			if (k <= 1) return {
				sprite: "/reno/sprites/neon-casino.webp",
				w: k === 0 ? 22 : 14,
				h: floors(k === 0 ? 2 : 3),
				neon: true
			};
			if (k <= 3) return {
				sprite: "/reno/sprites/motel.webp",
				w: k === 2 ? 28 : 16,
				h: floors(2)
			};
			if (k === 4) return {
				sprite: "/reno/sprites/shop.webp",
				w: 12,
				h: 4.4
			};
			return {
				sprite: "/reno/sprites/shack.webp",
				w: 6.5,
				h: 3.1
			};
		}
		if (zone === "strip") return stripSprite(n);
		if (zone === "wild") return k % 4 === 0 ? {
			sprite: "/reno/crypt.webp",
			w: 10,
			h: floors(2)
		} : {
			sprite: "/reno/sprites/shack.webp",
			w: 6 + k % 3,
			h: 3.1 + k % 3 * .35
		};
		if (zone === "industrial") {
			if (k % 3 === 0) return {
				sprite: "/reno/sprites/warehouse.webp",
				w: 36,
				h: 11.4
			};
			if (k % 3 === 1) return {
				sprite: "/reno/rail.webp",
				w: 28,
				h: 9.6
			};
			return {
				sprite: "/reno/sprites/warehouse.webp",
				w: 20,
				h: 6.8
			};
		}
		if (zone === "motel") return k % 2 === 0 ? {
			sprite: "/reno/sprites/motel.webp",
			w: 32,
			h: floors(2)
		} : {
			sprite: "/reno/sprites/motel.webp",
			w: 18,
			h: floors(3)
		};
		if (zone === "compound") return k % 2 === 0 ? {
			sprite: "/reno/sprites/apartment.webp",
			w: 20,
			h: floors(3 + k % 3)
		} : {
			sprite: "/reno/sprites/warehouse.webp",
			w: 24,
			h: 7.2
		};
		if (zone === "alley") {
			if (k % 3 === 0) return {
				sprite: "/reno/sprites/pawnshop.webp",
				w: 7.5,
				h: floors(2)
			};
			if (k % 3 === 1) return {
				sprite: "/reno/sprites/shop.webp",
				w: 9,
				h: floors(1)
			};
			return {
				sprite: "/reno/bar.webp",
				w: 11,
				h: floors(2)
			};
		}
		if (k === 0) return {
			sprite: "/reno/sprites/tenement.webp",
			w: 12,
			h: floors(6)
		};
		if (k === 1) return {
			sprite: "/reno/sprites/apartment.webp",
			w: 18,
			h: floors(4)
		};
		if (k === 2) return {
			sprite: "/reno/sprites/tenement.webp",
			w: 10,
			h: floors(8)
		};
		if (k === 3) return {
			sprite: "/reno/sprites/apartment.webp",
			w: 22,
			h: floors(3)
		};
		if (k === 4) return {
			sprite: "/reno/sprites/shop.webp",
			w: 14,
			h: floors(2)
		};
		return {
			sprite: "/reno/sprites/tenement.webp",
			w: 15,
			h: floors(5)
		};
	};
	const formOf = (zone, sprite, i) => {
		const k = Math.abs(i) % 6;
		if (zone === "wild") return sprite.includes("crypt") || k === 0 ? "church" : "shack";
		if (zone === "outskirts") {
			if (sprite.includes("casino") || sprite.includes("neon")) return k % 2 === 0 ? "marquee" : "casino";
			if (sprite.includes("motel")) return k % 2 === 0 ? "hotel" : "motel";
			if (sprite.includes("shop")) return k % 2 === 0 ? "garage" : "diner";
			return "shack";
		}
		if (sprite.includes("casino") || sprite.includes("neon")) return [
			"tower",
			"casino",
			"marquee",
			"step",
			"slab",
			"wing"
		][k];
		if (sprite.includes("motel")) return [
			"motel",
			"hotel",
			"court",
			"wing"
		][k % 4];
		if (sprite.includes("rail")) return k % 2 === 0 ? "depot" : "loft";
		if (sprite.includes("warehouse")) return [
			"shed",
			"loft",
			"depot",
			"garage"
		][k % 4];
		if (sprite.includes("shack")) return "shack";
		if (sprite.includes("crypt")) return "church";
		if (sprite.includes("ring")) return "arena";
		if (sprite.includes("bar")) return k % 3 === 0 ? "marquee" : k % 3 === 1 ? "diner" : "wing";
		if (sprite.includes("pawn")) return "pawn";
		if (sprite.includes("shop")) return k % 3 === 0 ? "pawn" : k % 3 === 1 ? "diner" : "wing";
		return [
			"walkup",
			"step",
			"court",
			"slab",
			"box",
			"tower"
		][k];
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
		const roll = rand();
		let hScale = fringe ? .88 + rand() * .16 : .78 + rand() * .42;
		if (zone === "strip" && roll > .74) hScale *= 1.55;
		if (zone === "residential" && roll > .82) hScale *= 1.28;
		if (zone === "alley") hScale *= .7 + rand() * .22;
		if (zone === "industrial") hScale *= .92 + rand() * .4;
		const rawH = kind.h * hScale;
		const height = zone === "strip" ? Math.min(rawH, floors(11)) : zone === "residential" || zone === "compound" ? Math.min(rawH, floors(8)) : rawH;
		const widthMul = roll < .2 ? .58 : roll > .78 ? .96 : .78 + rand() * .14;
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
			width: frontage * (fringe ? .86 : 1) * widthMul,
			height,
			depth: Math.min(thick, (kind.w ?? frontage) * .72) * (.92 + rand() * .1),
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
		const zone = zoneAt((innerL + innerR) / 2, (innerS + innerN) / 2);
		const thick = Math.min(zone === "industrial" ? 22 : zone === "wild" ? 8 : zone === "strip" ? 16 : zone === "alley" ? 10 : 14, Math.max(zone === "alley" || zone === "wild" ? 6 : 8, Math.min(lotW, lotD) * (zone === "industrial" ? .48 : .34)));
		const lotUnit = zone === "alley" ? 11 : zone === "industrial" ? 24 : zone === "strip" ? 18 : 15;
		const rowX = (z, face) => {
			const count = Math.max(1, Math.floor(lotW / lotUnit));
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
			const count = Math.max(1, Math.floor(span / lotUnit));
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
		const thick = 12;
		const along0 = (horizontal ? road.x - road.w / 2 : road.z - road.d / 2) + 6;
		const span = (horizontal ? road.x + road.w / 2 : road.z + road.d / 2) - 6 - along0;
		if (span < 20) continue;
		const count = Math.max(1, Math.floor(span / 18));
		const step = span / count;
		for (const sign of [1, -1]) {
			const face = horizontal ? sign > 0 ? "-z" : "+z" : sign > 0 ? "-x" : "+x";
			for (let i = 0; i < count; i++) {
				const t = along0 + (i + .5) * step;
				place(horizontal ? t : road.x + sign * (half + WALK + thick / 2), horizontal ? road.z + sign * (half + WALK + thick / 2) : t, Math.max(8, step - 1.2), face, thick);
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
		const count = Math.max(2, Math.round(length / PARK_GAP));
		for (let i = 0; i < count; i++) {
			const t = (i + .32) / count - .5;
			const alongHalf = alongX ? road.d / 2 : road.w / 2;
			const curb = Math.max(CAR_W, alongHalf - .35 - CAR_W / 2);
			const walk = alongHalf + 1.35;
			const side = i % 2 === 0 ? 1 : -1;
			const x = alongX ? road.x + t * road.w * .92 : road.x + side * curb;
			const z = alongX ? road.z + side * curb : road.z + t * road.d * .92;
			if (nearLandmark(x, z, 11)) continue;
			cars.push({
				id: `car-${c}`,
				x,
				z,
				sprite: CARS[Math.floor(rand() * CARS.length)],
				width: 4.72,
				height: 1.46,
				yaw: alongX ? Math.PI / 2 : 0
			});
			lamps.push({
				id: `lamp-${c}`,
				x: alongX ? road.x + t * road.w : road.x + side * walk,
				z: alongX ? road.z + side * walk : road.z + t * road.d,
				sprite: "/reno/sprites/lamp.webp",
				width: .2,
				height: 6.2
			});
			c += 1;
		}
	}
	const peds = [];
	let p = 0;
	for (const road of roads) {
		const alongX = road.w >= road.d;
		const length = alongX ? road.w : road.d;
		const count = Math.max(2, Math.round(length / 12));
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
	for (const s of [
		{
			id: "club-slipper",
			name: "Silver Slipper",
			x: -24,
			z: 22,
			use: "club",
			rumor: "A floor show with a horn section. Minimum at the door.",
			people: "Band, floor staff, highway money."
		},
		{
			id: "club-gogo",
			name: "The Go-Go",
			x: 42,
			z: -22,
			use: "club",
			rumor: "Revue lights. Reno trying to be the other strip.",
			people: "A stage, a bartender, people who drove in."
		},
		{
			id: "club-mapes",
			name: "Mapes Floor",
			x: 78,
			z: 22,
			use: "club",
			rumor: "The old floor. Tickets, not a back room.",
			people: "Ushers and a band that knows the same twelve songs."
		},
		{
			id: "club-harolds",
			name: "Harold's Revue",
			x: 112,
			z: -22,
			use: "club",
			rumor: "Cabaret. The sign is louder than the act.",
			people: "A comic, a trio, tourists from the grade."
		},
		{
			id: "bar-cal",
			name: "Cal-Neva",
			x: -58,
			z: -22,
			use: "bar",
			rumor: "A bar that kept the state-line joke.",
			people: "Regulars and plates from out of town."
		}
	]) buildings.push(stamp({
		id: s.id,
		x: s.x,
		z: s.z,
		sprite: s.use === "bar" ? "/reno/bar.webp" : "/reno/sprites/neon-casino.webp",
		width: s.use === "bar" ? 18 : 28,
		height: floors(s.use === "bar" ? 2 : 3),
		depth: s.use === "bar" ? 12 : 16,
		neon: true,
		label: s.name,
		form: s.use === "bar" ? "diner" : "marquee",
		face: s.z > 0 ? "-z" : "+z"
	}, buildings.length, {
		name: s.name,
		use: s.use,
		abandoned: false,
		rumor: s.rumor,
		people: s.people
	}));
	const spokes = [
		{
			x: 20,
			z: -200 - MILE / 2,
			w: 12,
			d: MILE,
			name: "North Highway"
		},
		{
			x: 20,
			z: 220 + MILE / 2,
			w: 12,
			d: MILE,
			name: "South Highway"
		},
		{
			x: 220 + MILE / 2,
			z: 40,
			w: MILE,
			d: 12,
			name: "East Highway"
		},
		{
			x: -200 - MILE / 2,
			z: 40,
			w: MILE,
			d: 12,
			name: "West Highway"
		}
	];
	roads.push(...spokes);
	for (const s of [
		{
			id: "gas-n",
			name: "Last Pump North",
			x: 34,
			z: -1480,
			use: "gas"
		},
		{
			id: "motel-n",
			name: "Grade Courts",
			x: 52,
			z: -1464,
			use: "motel"
		},
		{
			id: "gas-s",
			name: "South Cut Fuel",
			x: 6,
			z: 1500,
			use: "gas"
		},
		{
			id: "motel-s",
			name: "Mile Marker Beds",
			x: 28,
			z: 1486,
			use: "motel"
		},
		{
			id: "gas-e",
			name: "East Grade",
			x: 1520,
			z: 54,
			use: "gas"
		},
		{
			id: "motel-e",
			name: "East Wash Motor",
			x: 1504,
			z: 72,
			use: "motel"
		},
		{
			id: "gas-w",
			name: "West Dust Stop",
			x: -1480,
			z: 26,
			use: "gas"
		},
		{
			id: "motel-w",
			name: "West Apron Inn",
			x: -1462,
			z: 48,
			use: "motel"
		}
	]) buildings.push(stamp({
		id: s.id,
		x: s.x,
		z: s.z,
		sprite: s.use === "gas" ? "/reno/sprites/shop.webp" : "/reno/sprites/motel.webp",
		width: s.use === "gas" ? 16 : 28,
		height: s.use === "gas" ? 4.6 : floors(2),
		depth: s.use === "gas" ? 12 : 12,
		label: s.name,
		form: s.use === "gas" ? "garage" : "motel"
	}, buildings.length, {
		name: s.name,
		use: s.use,
		abandoned: false,
		rumor: s.use === "gas" ? "Pumps a mile out. The city is a glow, not a street." : "A small motel for people who are not in Reno yet.",
		people: "Travelers. A clerk. Plates from somewhere else."
	}));
	const junk = [];
	let j = 0;
	for (const road of roads) {
		if (road.w > 400 || road.d > 400) continue;
		const alongX = road.w >= road.d;
		const length = alongX ? road.w : road.d;
		const alley = (alongX ? road.d / 2 : road.w / 2) + 8.4;
		const n = Math.max(1, Math.round(length / 36));
		for (let i = 0; i < n; i++) {
			const t = (i + .5) / n - .5;
			const side = i % 2 === 0 ? 1 : -1;
			const x = alongX ? road.x + t * road.w * .86 : road.x + side * alley;
			const z = alongX ? road.z + side * alley : road.z + t * road.d * .86;
			if (nearLandmark(x, z, 8)) continue;
			junk.push({
				id: `dump-${j}`,
				x,
				z,
				sprite: "",
				width: 1.5,
				height: 1.25,
				yaw: alongX ? 0 : Math.PI / 2,
				kind: "dumpster"
			});
			junk.push({
				id: `trash-${j}`,
				x: x + (alongX ? 1.3 : 0),
				z: z + (alongX ? 0 : 1.3),
				sprite: "",
				width: .45,
				height: .28,
				kind: "trash"
			});
			j += 1;
		}
	}
	return {
		buildings,
		blocks,
		roads,
		cars,
		lamps,
		peds,
		junk
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
function hourSky(hour, weather = "clear") {
	const h = (hour % 24 + 24) % 24;
	const night = h >= 21 || h < 5;
	let sky = "#8aa3b0";
	let fog = "#93a4ab";
	let sun = 1;
	let neon = 0;
	if (h >= 21 || h < 5) {
		sky = "#010006";
		fog = "#020108";
		sun = .02;
		neon = 1;
	} else if (h < 7) {
		sky = "#120c14";
		fog = "#100c12";
		sun = .12;
		neon = .9;
	} else if (h < 9) {
		sky = "#7d8ea0";
		fog = "#8a97a4";
		sun = .7;
		neon = .15;
	} else if (h >= 18 && h < 20) {
		sky = "#c47a4a";
		fog = "#a86a48";
		sun = .45;
		neon = .55;
	} else if (h >= 20) {
		sky = "#08060e";
		fog = "#06040c";
		sun = .05;
		neon = 1;
	}
	let fogNear = night ? 36 : 55;
	let fogFar = night ? 220 : 520;
	if (weather === "dust") {
		fog = "#8d7356";
		sky = night ? "#1a120c" : "#a08868";
		sun *= .62;
		fogNear = 14;
		fogFar = 80;
	} else if (weather === "wind") {
		fogNear = 22;
		fogFar = 140;
	} else if (weather === "rain") {
		sky = night ? "#07080c" : "#4a5560";
		fog = "#3c4650";
		sun = Math.min(sun, .28);
		neon = Math.max(neon, .45);
		fogNear = 10;
		fogFar = 64;
	} else if (weather === "storm") {
		sky = "#12141a";
		fog = "#0c0e14";
		sun = .06;
		neon = 1;
		fogNear = 6;
		fogFar = 36;
	}
	return {
		sky,
		fog,
		sun,
		neon,
		fogNear,
		fogFar
	};
}
function skyNow(day, hour) {
	return hourSky(hour, weatherAt(day, hour));
}
var WALK = SIDEWALK;
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
var STORY_PX = 160;
var FACADE_STORIES = 4;
var TILE_W = 128;
function idHash(id) {
	let h = 2166136261;
	for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
	return h >>> 0;
}
function paintSkin(skin, variant) {
	const H = 640;
	const canvas = document.createElement("canvas");
	canvas.width = TILE_W;
	canvas.height = H;
	const g = canvas.getContext("2d");
	const glowCanvas = document.createElement("canvas");
	glowCanvas.width = TILE_W;
	glowCanvas.height = H;
	const gl = glowCanvas.getContext("2d");
	gl.fillStyle = "#000";
	gl.fillRect(0, 0, TILE_W, H);
	let seed = (variant + 1) * 997 + skin.length * 17;
	const rnd = () => {
		seed = Math.imul(seed, 1664525) + 1013904223 >>> 0;
		return seed / 4294967296;
	};
	g.fillStyle = {
		brick: variant ? "#8c5340" : "#b16d52",
		stucco: variant ? "#cbb89a" : "#e6d4b6",
		concrete: variant ? "#7c827e" : "#a0a79f",
		metal: variant ? "#5a5646" : "#746e58",
		board: variant ? "#684430" : "#8d5c3a",
		stone: variant ? "#6c706a" : "#8c9088",
		plaster: variant ? "#ead4ae" : "#f6e6c8",
		chrome: variant ? "#c5ccd2" : "#e7ebef"
	}[skin];
	g.fillRect(0, 0, TILE_W, H);
	if (skin === "brick") {
		const bh = 8;
		const bw = 18;
		for (let y = 0; y < H; y += bh) {
			const off = Math.floor(y / bh) % 2 ? bw / 2 : 0;
			for (let x = -18; x < 146; x += bw) {
				const shade = .75 + rnd() * .45;
				g.fillStyle = `rgba(${Math.floor(70 * shade)},${Math.floor(32 * shade)},${Math.floor(24 * shade)},0.42)`;
				g.fillRect(x + off + 1, y + 1, 16, 6);
			}
			g.fillStyle = "rgba(36,18,12,0.55)";
			g.fillRect(0, y, TILE_W, 1);
		}
	} else if (skin === "board") for (let y = 0; y < H; y += 10) {
		g.fillStyle = y % 20 === 0 ? "rgba(0,0,0,0.28)" : "rgba(255,214,170,0.06)";
		g.fillRect(0, y, TILE_W, 9);
		g.fillStyle = "rgba(28,14,8,0.65)";
		g.fillRect(0, y + 9, TILE_W, 1);
	}
	else if (skin === "metal") for (let x = 0; x < TILE_W; x += 7) {
		g.fillStyle = x % 14 === 0 ? "rgba(0,0,0,0.32)" : "rgba(255,255,255,0.07)";
		g.fillRect(x, 0, 3, H);
	}
	else if (skin === "stone") {
		const bh = 26;
		const bw = 36;
		g.lineWidth = 2;
		for (let y = 0; y < H; y += bh) {
			const off = Math.floor(y / bh) % 2 ? 16 : 0;
			for (let x = -36; x < 164; x += bw) {
				g.strokeStyle = "rgba(18,20,18,0.6)";
				g.strokeRect(x + off, y, bw, bh);
			}
		}
	} else if (skin === "stucco" || skin === "plaster") for (let i = 0; i < 90; i++) {
		g.fillStyle = `rgba(70,48,28,${.04 + rnd() * .09})`;
		g.fillRect(rnd() * TILE_W, rnd() * H, 2 + rnd() * 5, 2);
	}
	else if (skin === "concrete") for (let s = 0; s < FACADE_STORIES; s++) {
		g.fillStyle = "rgba(0,0,0,0.22)";
		g.fillRect(0, H - s * STORY_PX - 8, TILE_W, 5);
	}
	else if (skin === "chrome") {
		g.fillStyle = "#8e1e22";
		g.fillRect(0, 618, TILE_W, 12);
	}
	const frame = {
		brick: "#d9cbb4",
		stucco: "#f3ecdf",
		concrete: "#c5ccc6",
		metal: "#2e3230",
		board: "#3a2418",
		stone: "#c8c2b4",
		plaster: "#c6a15a",
		chrome: "#f4f7f8"
	};
	const drawWin = (x, y, ww, wh, glowColor) => {
		g.fillStyle = "rgba(0,0,0,0.35)";
		g.fillRect(x - 8, y - 8, ww + 16, wh + 18);
		g.fillStyle = frame[skin];
		g.fillRect(x - 6, y - 6, ww + 12, wh + 14);
		g.fillStyle = "#0c1218";
		g.fillRect(x, y, ww, wh);
		g.fillStyle = "rgba(210,230,236,0.45)";
		g.beginPath();
		g.moveTo(x, y);
		g.lineTo(x + ww * .46, y);
		g.lineTo(x, y + wh * .55);
		g.fill();
		g.fillStyle = frame[skin];
		g.fillRect(x + ww * .47, y, 3, wh);
		if (glowColor !== "#000") {
			gl.fillStyle = glowColor;
			gl.fillRect(x + 3, y + 3, ww - 6, wh - 6);
		}
	};
	for (let s = 0; s < FACADE_STORIES; s++) {
		const y0 = H - (s + 1) * STORY_PX;
		const ground = s === 0;
		const lit = rnd();
		const glowColor = lit > .55 ? "#ffc27a" : lit > .38 ? "#9fd4ff" : "#000";
		const shift = variant ? 6 : 0;
		if (skin === "metal") {
			drawWin(18 + shift, y0 + 22, 24, 20, glowColor);
			drawWin(78 - shift, y0 + 22, 24, 20, glowColor);
		} else if (skin === "concrete") drawWin(8, y0 + 46, 112, 42, glowColor);
		else if (skin === "board") drawWin(44 + shift, y0 + 42, 32, 40, glowColor);
		else if (ground && (skin === "plaster" || skin === "chrome" || skin === "brick" || skin === "stucco")) {
			drawWin(8, y0 + 34, 50, 86, glowColor);
			drawWin(70, y0 + 34, 50, 86, glowColor === "#000" ? "#ffc27a" : glowColor);
		} else {
			drawWin(14 + shift, y0 + 32, 40, 58, glowColor);
			drawWin(74 - shift, y0 + 32, 40, 58, s % 2 === 0 ? glowColor : "#000");
		}
		g.fillStyle = "rgba(20,16,12,0.55)";
		g.fillRect(0, y0, TILE_W, 14);
		g.fillStyle = "rgba(255,255,255,0.2)";
		g.fillRect(0, y0 + 14, TILE_W, 3);
	}
	g.fillStyle = "rgba(20,16,12,0.28)";
	g.fillRect(0, 622, TILE_W, 18);
	const map = new CanvasTexture(canvas);
	map.colorSpace = SRGBColorSpace;
	map.wrapS = map.wrapT = RepeatWrapping;
	map.anisotropy = 4;
	const glow = new CanvasTexture(glowCanvas);
	glow.colorSpace = SRGBColorSpace;
	glow.wrapS = glow.wrapT = RepeatWrapping;
	return {
		map,
		glow
	};
}
function paintSkins() {
	const skins = [
		"brick",
		"stucco",
		"concrete",
		"metal",
		"board",
		"stone",
		"plaster",
		"chrome"
	];
	const out = {};
	for (const skin of skins) out[skin] = [paintSkin(skin, 0), paintSkin(skin, 1)];
	return out;
}
function skinFor(form, style, id) {
	if (form === "church") return "stone";
	if (form === "diner") return "chrome";
	if (form === "shack") return "board";
	if (form === "shed" || form === "loft" || form === "garage" || form === "depot") return "metal";
	if (form === "tower" || form === "slab" || form === "arena") return "concrete";
	if (form === "casino" || form === "marquee" || form === "hotel") return "plaster";
	if (form === "motel" || form === "court") return "stucco";
	if (style === "warehouse") return "metal";
	if (style === "bar" || form === "pawn") return "brick";
	return idHash(id) % 2 === 0 ? "brick" : "stucco";
}
function facadeTint(id) {
	const tints = [
		"#ffffff",
		"#f4e7d6",
		"#efe4d4",
		"#e7eee6",
		"#f8f2e6",
		"#f3e4d6",
		"#e9e6df",
		"#f7f3ea"
	];
	return tints[idHash(id) % tints.length];
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
function Part({ a, p, r, color, map, glow, night, metal = .05, rough = .86, em, ei }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: p,
		rotation: r,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: a }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			map,
			color,
			roughness: rough,
			metalness: metal,
			emissive: em ?? (glow ? "#ffffff" : "#000000"),
			emissiveMap: glow,
			emissiveIntensity: ei ?? (glow ? night ? .85 : .04 : 0)
		})]
	});
}
function StreetTrim({ w, h, d, form }) {
	if (form === "arena" || form === "shack" || form === "diner") return null;
	const parapet = form === "shed" || form === "loft" || form === "garage" || form === "depot" ? .55 : 1.15;
	const bands = form === "shed" || form === "loft" || form === "garage" ? [] : h > 7 ? [.34, .62] : [.55];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.15,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				w + .22,
				2.3,
				d + .22
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#241e1a",
				roughness: .94
			})]
		}),
		bands.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				h * t,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				w + .85,
				.32,
				d + .85
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#f0e6d4",
				roughness: .72
			})]
		}, t)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				h + parapet / 2,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				w + .85,
				parapet,
				d + .85
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#efe4d2",
				roughness: .7
			})]
		}),
		[
			[w / 2, d / 2],
			[-w / 2, d / 2],
			[w / 2, -d / 2],
			[-w / 2, -d / 2]
		].map(([x, z]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				x,
				h / 2,
				z
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.55,
				h + parapet,
				.55
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#f4efe4",
				roughness: .7
			})]
		}, `${x}:${z}`))
	] });
}
function FormBody({ form, w, h, d, ns, face, map, glow, night, accent }) {
	const cap = "#2a2724";
	const span = ns ? d : w;
	const thick = ns ? w : d;
	const wall = {
		map,
		glow,
		night,
		color: "#ffffff"
	};
	if (form === "step") {
		const baseH = h * .55;
		const topH = h - baseH;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w,
					baseH,
					d
				],
				p: [
					0,
					baseH / 2,
					0
				],
				...wall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w * .62,
					topH,
					d * .58
				],
				p: [
					w * .08,
					baseH + topH / 2,
					d * .06
				],
				...wall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w * .7,
					.28,
					d * .66
				],
				p: [
					w * .08,
					baseH + .1,
					d * .06
				],
				color: cap
			})
		] });
	}
	if (form === "tower") {
		const pod = Math.min(h * .22, 8);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w,
					pod,
					d
				],
				p: [
					0,
					pod / 2,
					0
				],
				...wall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w * .38,
					h - pod,
					d * .38
				],
				p: [
					0,
					pod + (h - pod) / 2,
					0
				],
				...wall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w * .58,
					.4,
					d * .58
				],
				p: [
					0,
					pod + .15,
					0
				],
				color: cap
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w * .24,
					2.4,
					d * .24
				],
				p: [
					0,
					h + 1.2,
					0
				],
				...wall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					h + 3.6,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.07,
					.09,
					2.6,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2c2a28",
					metalness: .6,
					roughness: .35
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					h + 5,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.18,
					8,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: accent,
					emissive: accent,
					emissiveIntensity: night ? 1.7 : .2
				})]
			})
		] });
	}
	if (form === "wing") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .62, h, thick),
			p: alongFront(ns, w, d, -.16, h / 2),
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .36, h * .55, thick * .78),
			p: alongFront(ns, w, d, .3, h * .28),
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.9,
				h * .4,
				.9
			],
			p: [
				0,
				h * .7,
				0
			],
			...wall
		})
	] });
	if (form === "motel" || form === "hotel") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .8, h * .7, thick * .7),
			p: alongFront(ns, w, d, .08, h * .35),
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .22, h, thick * .92),
			p: alongFront(ns, w, d, -.32, h / 2),
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .7, .14, 1.4),
			p: facePoint(face, w, d, Math.min(h * .42, 4.2), .85),
			color: "#6a5344"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .5, .18, 2.4),
			p: facePoint(face, w, d, 3.05, 1.3),
			color: "#3a3028"
		})
	] });
	if (form === "shack") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .84,
				h * .6,
				d * .8
			],
			p: [
				0,
				h * .3,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * 1.2,
				.18,
				d * 1.15
			],
			p: [
				0,
				h * .64,
				0
			],
			r: ns ? [
				.32,
				0,
				0
			] : [
				0,
				0,
				-.26
			],
			color: "#5a4030",
			rough: 1
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.28,
				.9,
				.28
			],
			p: [
				w * .28,
				h * .8,
				0
			],
			color: "#3a3028"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .5, .1, .9),
			p: facePoint(face, w, d, h * .34, .55),
			color: "#6a4c38"
		})
	] });
	if (form === "casino" || form === "marquee") {
		const podium = Math.min(h, Math.max(4.2, h * .62));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w,
					podium,
					d
				],
				p: [
					0,
					podium / 2,
					0
				],
				...wall
			}),
			form === "casino" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: frontBox(ns, span * .16, h * 1.08, thick * .4),
				p: alongFront(ns, w, d, .36, h * .5),
				...wall
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: frontBox(ns, span * .78, .7, 2.2),
				p: facePoint(face, w, d, Math.min(h * .7, h - .4), 1.15),
				color: accent,
				em: accent,
				ei: night ? 1.6 : .25,
				metal: .2,
				rough: .4
			}),
			form === "marquee" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: frontBox(ns, .55, Math.min(h * .9, 9), 2.2),
				p: alongFront(ns, w, d, -.42, h * .48),
				color: accent,
				em: accent,
				ei: night ? 1.4 : .2
			}) : null
		] });
	}
	if (form === "shed" || form === "loft") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w,
				h * .68,
				d
			],
			p: [
				0,
				h * .34,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .32, h * .32, .4),
			p: facePoint(face, w, d, 1.1, .15),
			color: "#241f1c",
			metal: .3
		}),
		form === "loft" ? [
			-.28,
			0,
			.28
		].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .96,
				.22,
				d * .3
			],
			p: [
				0,
				h * .82,
				t * d * .62
			],
			r: ns ? [
				.7,
				0,
				0
			] : [
				0,
				0,
				.7
			],
			color: "#4a463c",
			metal: .4,
			rough: .5
		}, t)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .3,
				h * .18,
				d * .26
			],
			p: [
				0,
				h * .78,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.7,
				h * .55,
				.7
			],
			p: [
				w * .32,
				h * .9,
				-d * .18
			],
			color: "#5a4030"
		})
	] });
	if (form === "walkup") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w,
				h,
				d * .9
			],
			p: [
				0,
				h / 2,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, Math.min(span * .28, 3.2), h * .78, 1.1),
			p: facePoint(face, w, d, h * .4, .4),
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				1.1,
				1.3,
				1.1
			],
			p: [
				w * .22,
				h + .9,
				0
			],
			color: "#5c564c",
			metal: .25
		})
	] });
	if (form === "depot") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .72,
				h * .55,
				d
			],
			p: [
				w * .08,
				h * .28,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .2,
				h,
				d * .48
			],
			p: [
				-w * .34,
				h / 2,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .75, .16, 3.2),
			p: facePoint(face, w, d, 3.6, 1.6),
			color: "#3a3834",
			metal: .25
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-w * .34,
				h * .72,
				face === "-z" ? -d * .26 : d * .26
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.7, 18] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#f4efe2",
				emissive: "#f4efe2",
				emissiveIntensity: night ? .45 : .08
			})]
		})
	] });
	if (form === "garage") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .55,
				h * .9,
				d * .62
			],
			p: [
				-w * .14,
				h * .45,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .9,
				.2,
				d * .7
			],
			p: [
				w * .08,
				3.3,
				0
			],
			color: "#d5d0c4",
			metal: .2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.14,
				3.2,
				.14
			],
			p: [
				w * .32,
				1.6,
				d * .22
			],
			color: "#222",
			metal: .45
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.14,
				3.2,
				.14
			],
			p: [
				w * .32,
				1.6,
				-d * .18
			],
			color: "#222",
			metal: .45
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				w * .16,
				.9,
				d * .12
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.32,
				.32,
				1.35,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d23a32",
				metalness: .25,
				roughness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				w * .16,
				.9,
				-d * .16
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.32,
				.32,
				1.35,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d23a32",
				metalness: .25,
				roughness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.16,
				4.2,
				.16
			],
			p: [
				-w * .4,
				2.1,
				0
			],
			color: "#1c1c1c",
			metal: .5
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				1.3,
				.9,
				.12
			],
			p: [
				-w * .4,
				4.1,
				0
			],
			color: accent,
			em: accent,
			ei: night ? 1.3 : .2
		})
	] });
	if (form === "church") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .62,
				h * .62,
				d
			],
			p: [
				w * .08,
				h * .31,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .22,
				h * 1.35,
				d * .22
			],
			p: [
				-w * .24,
				h * .67,
				0
			],
			color: "#cfc8ba",
			map,
			glow,
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .1,
				h * .4,
				d * .1
			],
			p: [
				-w * .24,
				h * 1.2,
				0
			],
			color: "#6a6e68"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.9,
				.1,
				.1
			],
			p: [
				-w * .24,
				h * 1.45,
				0
			],
			color: "#f4efe2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.1,
				1.1,
				.1
			],
			p: [
				-w * .24,
				h * 1.45,
				0
			],
			color: "#f4efe2"
		})
	] });
	if (form === "arena") {
		const rad = Math.min(w, d) * .36;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					h * .32,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					rad * .78,
					rad,
					h * .55,
					18
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#8d8478",
					roughness: .75
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w * .95,
					h * .38,
					d * .32
				],
				p: [
					0,
					h * .24,
					d * .28
				],
				color: "#4a463e"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				a: [
					w * .32,
					h * .38,
					d * .95
				],
				p: [
					w * .28,
					h * .24,
					0
				],
				color: "#4a463e"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					w * .3,
					h * .85,
					d * .22
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.1,
					.12,
					h,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2a2826",
					metalness: .5
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					w * .3,
					h * 1.15,
					d * .22
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.4,
					.16,
					.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#fff1c8",
					emissive: "#fff1c8",
					emissiveIntensity: night ? 1.8 : .2
				})]
			})
		] });
	}
	if (form === "diner") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .92,
				h * .58,
				d * .75
			],
			p: [
				0,
				h * .29,
				0
			],
			...wall,
			metal: .25,
			rough: .4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				h * .66,
				0
			],
			rotation: ns ? [
				Math.PI / 2,
				0,
				0
			] : [
				0,
				0,
				Math.PI / 2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				Math.min(w, d) * .34,
				Math.min(w, d) * .34,
				Math.max(w, d) * .9,
				14,
				1,
				false,
				0,
				Math.PI
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#dfe4e8",
				metalness: .6,
				roughness: .25,
				side: 2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.16,
				h * 1.2,
				.16
			],
			p: [
				w * .42,
				h * .6,
				0
			],
			color: "#222",
			metal: .5
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				.2,
				.9,
				1.6
			],
			p: [
				w * .42,
				h * 1.15,
				0
			],
			color: accent,
			em: accent,
			ei: night ? 1.5 : .25
		})
	] });
	if (form === "pawn") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w,
				h,
				d * .78
			],
			p: [
				0,
				h / 2,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, .16, 1.3, 1.1),
			p: facePoint(face, w, d, h * .62, .7),
			color: accent,
			em: accent,
			ei: night ? 1.2 : .15
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span * .62, .1, .1),
			p: facePoint(face, w, d, 1.7, .16),
			color: "#111",
			metal: .7
		})
	] });
	if (form === "slab") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .92,
				h,
				d * .92
			],
			p: [
				0,
				h / 2,
				0
			],
			...wall
		}),
		[
			.3,
			.55,
			.78
		].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w + .5,
				.18,
				d + .5
			],
			p: [
				0,
				h * t,
				0
			],
			color: "#3e4440",
			metal: .2
		}, t)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				w * .34,
				2.1,
				d * .34
			],
			p: [
				w * .16,
				h + 1.05,
				0
			],
			color: "#4a4e4a"
		})
	] });
	if (form === "court") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: frontBox(ns, span, h * .82, thick * .32),
			p: alongFront(ns, w, d, -.3, h * .41),
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				thick * .32,
				h * .7,
				d * .78
			],
			p: [
				-w * .3,
				h * .35,
				0
			],
			...wall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
			a: [
				thick * .32,
				h * .7,
				d * .78
			],
			p: [
				w * .3,
				h * .35,
				0
			],
			...wall
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
		a: [
			w,
			h,
			d
		],
		p: [
			0,
			h / 2,
			0
		],
		...wall
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
		a: [
			.4,
			.9,
			.4
		],
		p: [
			w * .32,
			h + .45,
			d * .2
		],
		color: "#3a3632"
	})] });
}
function Block({ b, skins, night, disabled, onInspect }) {
	const style = styleOf(b.sprite);
	const front = Math.max(3.5, b.width * .96);
	const thick = b.depth ?? (style === "warehouse" || style === "motel" ? Math.max(5.2, front * .62) : Math.max(4.2, front * .52));
	const ns = b.face === "+x" || b.face === "-x";
	const w = ns ? thick : front;
	const h = Math.max(2.8, b.height);
	const d = ns ? front : thick;
	const face = b.face ?? "+z";
	let form = b.form ?? (style === "motel" ? "motel" : style === "shack" ? "shack" : style === "casino" ? "casino" : "box");
	if (style === "ring") form = "arena";
	if (style === "crypt" && form === "box") form = "church";
	const painted = skins[skinFor(form, style, b.id)][idHash(b.id) % 2];
	const repeatX = Math.max(.7, front / 3.4);
	const repeatY = Math.max(.3, h / (2.6 * FACADE_STORIES));
	const map = (0, import_react.useMemo)(() => {
		const clone = painted.map.clone();
		clone.wrapS = clone.wrapT = RepeatWrapping;
		clone.repeat.set(repeatX, repeatY);
		clone.colorSpace = SRGBColorSpace;
		clone.needsUpdate = true;
		return clone;
	}, [
		painted.map,
		repeatX,
		repeatY
	]);
	const glow = (0, import_react.useMemo)(() => {
		const clone = painted.glow.clone();
		clone.wrapS = clone.wrapT = RepeatWrapping;
		clone.repeat.set(repeatX, repeatY);
		clone.colorSpace = SRGBColorSpace;
		clone.needsUpdate = true;
		return clone;
	}, [
		painted.glow,
		repeatX,
		repeatY
	]);
	const neon = style === "casino" || style === "bar" || Boolean(b.neon) || form === "marquee";
	const neonColor = neonColorOf(b);
	const tint = facadeTint(b.id);
	const commercial = form === "pawn" || form === "diner" || form === "casino" || form === "marquee" || style === "shop" || style === "bar";
	const quietFace = form === "shack" || form === "church" || form === "arena" || form === "garage";
	const landings = form === "walkup" || form === "step" && h > 11 ? Math.min(5, Math.max(2, Math.floor(h / 3.15) - 1)) : 0;
	const roof = idHash(b.id + "roof") % 5;
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreetTrim, {
				w,
				h,
				d,
				form
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormBody, {
				form,
				w,
				h,
				d,
				ns,
				face,
				map,
				glow,
				night,
				accent: neonColor
			}),
			landings > 0 ? Array.from({ length: landings }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, 2.6 + i * 3.05, .7),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.9,
					.08,
					Math.min(front * .34, 2.4)
				] : [
					Math.min(front * .34, 2.4),
					.08,
					.9
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3a3e42",
					metalness: .55,
					roughness: .4
				})]
			}, `esc-${i}`)) : null,
			!quietFace ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, DOOR_H / 2, .1),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.1,
					DOOR_H,
					DOOR_W
				] : [
					DOOR_W,
					DOOR_H,
					.1
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#140e0c",
					roughness: .5
				})]
			}) : null,
			!quietFace ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, .14, .28),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.8,
					.18,
					1.7
				] : [
					1.7,
					.18,
					.8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#6e675e",
					roughness: .9
				})]
			}) : null,
			commercial ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, 1.55, .12),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.08,
					1.8,
					Math.min(front * .5, 7)
				] : [
					Math.min(front * .5, 7),
					1.8,
					.08
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#b7dbe8",
					emissive: "#9fd4ea",
					emissiveIntensity: night ? .4 : .06,
					roughness: .12,
					metalness: .3,
					transparent: true,
					opacity: .85
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, 2.6, .7),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					1.2,
					.1,
					Math.min(front * .66, 9)
				] : [
					Math.min(front * .66, 9),
					.1,
					1.2
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: style === "bar" || form === "diner" ? "#7a2420" : "#6a4630",
					roughness: .55
				})]
			})] }) : null,
			form === "motel" || form === "hotel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, h + .7, .25),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.14,
					.5,
					1.8
				] : [
					1.8,
					.5,
					.14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ff5a7a",
					emissive: "#ff5a7a",
					emissiveIntensity: night ? 1.7 : .18
				})]
			}) : null,
			neon && form !== "marquee" && form !== "diner" && form !== "casino" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: facePoint(face, w, d, Math.min(h * .72, h - .4), .14),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: ns ? [
					.12,
					.4,
					front * .62
				] : [
					front * .62,
					.4,
					.12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: neonColor,
					emissive: neonColor,
					emissiveIntensity: night ? 1.8 : .28,
					roughness: .35
				})]
			}) : null,
			form !== "church" && form !== "diner" && form !== "shack" && form !== "tower" && form !== "arena" && h > 5 ? roof === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					w * .22,
					h + .85,
					-d * .12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.45,
					.5,
					1.2,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#5a544c",
					metalness: .3,
					roughness: .6
				})]
			}) : roof === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-w * .16,
					h + .4,
					d * .1
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.1,
					.6,
					.8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3e4a44",
					metalness: .35,
					roughness: .55
				})]
			}) : roof === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.2,
					h + 1.6,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.05,
					.06,
					2.8,
					5
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2a2826",
					metalness: .55
				})]
			}) : roof === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					w * .28,
					h + .7,
					-d * .2
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.5,
					1.15,
					.5
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#4a342c",
					roughness: .9
				})]
			}) : null : null,
			b.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
				position: [
					0,
					h + 2.2,
					0
				],
				center: true,
				distanceFactor: 48,
				style: { pointerEvents: "none" },
				zIndexRange: [4, 0],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-sm bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] tracking-wide uppercase whitespace-nowrap",
					style: { color: tint },
					children: b.label
				})
			}) : null
		]
	});
}
function SidewalkPeople({ night, weather }) {
	const ref = (0, import_react.useRef)(null);
	const hide = weather === "storm" ? .7 : weather === "rain" ? .42 : weather === "dust" ? .16 : 0;
	useFrame(() => {
		const g = ref.current;
		if (!g) return;
		const t = performance.now() / 1e3;
		const drag = weather === "storm" ? .35 : weather === "rain" ? .55 : weather === "wind" ? .8 : 1;
		CITY.peds.forEach((ped, i) => {
			const child = g.children[i];
			if (!child) return;
			const ducked = i * 17 % 100 / 100 < hide;
			child.visible = !(ped.nightOnly && !night) && !ducked;
			if (!child.visible) return;
			const swing = Math.sin(t * .42 * drag + ped.phase) * Math.min(1.15, ped.amp * .28);
			child.position.set(ped.axis === "x" ? ped.x + swing : ped.x, 0, ped.axis === "z" ? ped.z + swing : ped.z);
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref,
		children: CITY.peds.map((ped) => {
			const cop = ped.sprite.includes("cop");
			const woman = ped.sprite.includes("woman");
			const gang = ped.sprite.includes("gang");
			const coat = cop ? "#4d5c68" : gang ? "#3a2e32" : woman ? "#8d5a62" : "#6e5a48";
			const skin = woman ? "#c4a090" : "#a88870";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					ped.x,
					0,
					ped.z
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.86,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
						.2,
						1.02,
						5,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: coat,
						roughness: .82
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.58,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.13,
						8,
						6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: skin,
						roughness: .7
					})]
				})]
			}, ped.id);
		})
	});
}
function Traffic() {
	const ref = (0, import_react.useRef)(null);
	useFrame(() => {
		const g = ref.current;
		if (!g) return;
		const t = performance.now() / 1e3;
		RUNS.forEach((run, i) => {
			const pose = runPose(run, t);
			const child = g.children[i];
			if (!child) return;
			child.position.set(pose.x, .12, pose.z);
			child.rotation.y = pose.yaw;
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref,
		children: RUNS.map((run) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.38,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				CAR_W,
				.55,
				CAR_L
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: run.color,
				metalness: .45,
				roughness: .4
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.8,
				-.15
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				CAR_W * .86,
				CAR_H - .7,
				CAR_L * .42
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#141820",
				roughness: .3
			})]
		})] }, run.id))
	});
}
function CityBlocks({ night, weather, disabled, onInspect, onWalk }) {
	const asphalt = useTexture("/reno/tex/asphalt.webp");
	const dirt = useTexture("/reno/tex/dirt.webp");
	asphalt.wrapS = asphalt.wrapT = RepeatWrapping;
	dirt.wrapS = dirt.wrapT = RepeatWrapping;
	asphalt.colorSpace = SRGBColorSpace;
	dirt.colorSpace = SRGBColorSpace;
	asphalt.repeat.set(48, 40);
	dirt.repeat.set(90, 80);
	const skins = (0, import_react.useMemo)(() => paintSkins(), []);
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
				-.08,
				40
			],
			onPointerDown: walk,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [MILE * 2 + 500, MILE * 2 + 500] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: dirt,
				color: "#6a5844",
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
			skins,
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
					.38,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					CAR_W,
					.55,
					CAR_L
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: carColors[i % carColors.length],
					metalness: .45,
					roughness: .42
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.8,
					-.15
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					CAR_W * .86,
					CAR_H - .7,
					CAR_L * .42
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#141820",
					metalness: .2,
					roughness: .28
				})]
			})]
		}, c.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Traffic, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidewalkPeople, {
			night,
			weather
		}),
		CITY.junk.map((j) => j.kind === "dumpster" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			position: [
				j.x,
				0,
				j.z
			],
			"rotation-y": j.yaw ?? 0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.62,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.5,
					1.25,
					.9
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3d4a38",
					roughness: .72,
					metalness: .2
				})]
			})
		}, j.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				j.x,
				.14,
				j.z
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.42,
				.28,
				.36
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#2a2622",
				roughness: .95
			})]
		}, j.id)),
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
						3.05,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.07,
						.09,
						6.1,
						6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2a2926",
						metalness: .55,
						roughness: .4
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.7,
						5.95,
						0
					],
					"rotation-z": Math.PI / 2,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.045,
						.045,
						1.4,
						5
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2a2926",
						metalness: .55,
						roughness: .4
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						1.3,
						5.85,
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
var SCHEDULES = {
	worker: [
		{
			from: 0,
			to: 7,
			stop: "home",
			doing: "Sleeping it off at home.",
			where: "home"
		},
		{
			from: 7,
			to: 8,
			stop: "work",
			doing: "Heading to work.",
			where: "the job"
		},
		{
			from: 8,
			to: 12,
			stop: "work",
			doing: "On the clock.",
			where: "the job"
		},
		{
			from: 12,
			to: 13,
			stop: "lunch",
			doing: "Out for lunch.",
			where: "a lunch counter"
		},
		{
			from: 13,
			to: 17,
			stop: "work",
			doing: "Back on the clock.",
			where: "the job"
		},
		{
			from: 17,
			to: 18,
			stop: "social",
			doing: "Heading to a bar.",
			where: "a bar"
		},
		{
			from: 18,
			to: 22,
			stop: "social",
			doing: "Drinking off the shift.",
			where: "a bar"
		},
		{
			from: 22,
			to: 24,
			stop: "home",
			doing: "Returning home.",
			where: "home"
		}
	],
	staff: [
		{
			from: 0,
			to: 11,
			stop: "home",
			doing: "Home until the shift.",
			where: "home"
		},
		{
			from: 11,
			to: 12,
			stop: "work",
			doing: "Heading to work.",
			where: "the casino"
		},
		{
			from: 12,
			to: 17,
			stop: "work",
			doing: "On the casino floor.",
			where: "the casino"
		},
		{
			from: 17,
			to: 18,
			stop: "social",
			doing: "Off the floor. Heading for a drink that is not on the house.",
			where: "a bar"
		},
		{
			from: 18,
			to: 21,
			stop: "social",
			doing: "Spending the paycheck.",
			where: "a bar"
		},
		{
			from: 21,
			to: 24,
			stop: "home",
			doing: "Heading home.",
			where: "home"
		}
	],
	guest: [
		{
			from: 0,
			to: 11,
			stop: "home",
			doing: "In the room.",
			where: "the hotel"
		},
		{
			from: 11,
			to: 13,
			stop: "social",
			doing: "Heading to the casino.",
			where: "the casino"
		},
		{
			from: 13,
			to: 17,
			stop: "work",
			doing: "On the casino floor.",
			where: "the tables"
		},
		{
			from: 17,
			to: 19,
			stop: "lunch",
			doing: "At the bar between sessions.",
			where: "the bar"
		},
		{
			from: 19,
			to: 23,
			stop: "work",
			doing: "Back at the tables.",
			where: "the tables"
		},
		{
			from: 23,
			to: 24,
			stop: "home",
			doing: "Heading back from the casino.",
			where: "the hotel"
		}
	],
	dealer: [
		{
			from: 0,
			to: 10,
			stop: "stash",
			doing: "At the stash.",
			where: "the stash"
		},
		{
			from: 10,
			to: 14,
			stop: "drop",
			doing: "Walking to a meeting.",
			where: "a meeting point"
		},
		{
			from: 14,
			to: 18,
			stop: "social",
			doing: "Working a back room.",
			where: "a back room"
		},
		{
			from: 18,
			to: 22,
			stop: "target",
			doing: "Waiting for a buyer.",
			where: "the buyer"
		},
		{
			from: 22,
			to: 24,
			stop: "home",
			doing: "Heading somewhere safe.",
			where: "a safe room"
		}
	],
	courier: [
		{
			from: 0,
			to: 6,
			stop: "home",
			doing: "Sleeping between drops.",
			where: "home"
		},
		{
			from: 6,
			to: 9,
			stop: "hq",
			doing: "At the family headquarters.",
			where: "family headquarters"
		},
		{
			from: 9,
			to: 12,
			stop: "drop",
			doing: "Carrying a package toward the family warehouse.",
			where: "the family warehouse"
		},
		{
			from: 12,
			to: 16,
			stop: "target",
			doing: "On a delivery.",
			where: "the drop"
		},
		{
			from: 16,
			to: 19,
			stop: "hq",
			doing: "Heading back.",
			where: "family headquarters"
		},
		{
			from: 19,
			to: 24,
			stop: "home",
			doing: "Off the route.",
			where: "home"
		}
	],
	collector: [
		{
			from: 0,
			to: 8,
			stop: "home",
			doing: "At the family property.",
			where: "the family property"
		},
		{
			from: 8,
			to: 11,
			stop: "hq",
			doing: "At the family property.",
			where: "the family property"
		},
		{
			from: 11,
			to: 15,
			stop: "work",
			doing: "Collecting from a business.",
			where: "a business that owes"
		},
		{
			from: 15,
			to: 19,
			stop: "target",
			doing: "Looking for someone who owes the family money.",
			where: "a debtor"
		},
		{
			from: 19,
			to: 22,
			stop: "hq",
			doing: "Returning with the take.",
			where: "the family property"
		},
		{
			from: 22,
			to: 24,
			stop: "home",
			doing: "Done counting.",
			where: "the family property"
		}
	],
	police: [
		{
			from: 0,
			to: 6,
			stop: "home",
			doing: "Off the clock. Mostly.",
			where: "a cot"
		},
		{
			from: 6,
			to: 10,
			stop: "patrol",
			doing: "Working the morning patrol.",
			where: "the morning patrol"
		},
		{
			from: 10,
			to: 14,
			stop: "work",
			doing: "Checking a call.",
			where: "a call"
		},
		{
			from: 14,
			to: 18,
			stop: "patrol",
			doing: "Back on the beat.",
			where: "the beat"
		},
		{
			from: 18,
			to: 23,
			stop: "patrol",
			doing: "Working the evening patrol.",
			where: "the evening patrol"
		},
		{
			from: 23,
			to: 24,
			stop: "home",
			doing: "Signing off.",
			where: "home"
		}
	],
	assassin: [
		{
			from: 0,
			to: 15,
			stop: "home",
			doing: "Lying low.",
			where: "a safe location"
		},
		{
			from: 15,
			to: 18,
			stop: "target",
			doing: "Moving toward a name.",
			where: "the target's block"
		},
		{
			from: 18,
			to: 21,
			stop: "target",
			doing: "Watching the mark.",
			where: "the target"
		},
		{
			from: 21,
			to: 24,
			stop: "home",
			doing: "Leaving the block.",
			where: "a safe location"
		}
	],
	resident: [
		{
			from: 0,
			to: 8,
			stop: "home",
			doing: "Home.",
			where: "home"
		},
		{
			from: 8,
			to: 12,
			stop: "work",
			doing: "Out at a shop.",
			where: "a shop"
		},
		{
			from: 12,
			to: 14,
			stop: "lunch",
			doing: "Running an errand.",
			where: "an errand"
		},
		{
			from: 14,
			to: 18,
			stop: "social",
			doing: "Out where people talk.",
			where: "a social spot"
		},
		{
			from: 18,
			to: 22,
			stop: "social",
			doing: "At a bar that knows their name.",
			where: "a bar"
		},
		{
			from: 22,
			to: 24,
			stop: "home",
			doing: "Returning home.",
			where: "home"
		}
	],
	tourist: [
		{
			from: 0,
			to: 11,
			stop: "home",
			doing: "Sleeping off a town they do not live in.",
			where: "a rented room"
		},
		{
			from: 11,
			to: 13,
			stop: "social",
			doing: "Looking for the loudest door.",
			where: "the strip"
		},
		{
			from: 13,
			to: 17,
			stop: "work",
			doing: "Spending like the caps are not real.",
			where: "a casino"
		},
		{
			from: 17,
			to: 19,
			stop: "lunch",
			doing: "Buying a stool, and the company that sits with it.",
			where: "a bar"
		},
		{
			from: 19,
			to: 23,
			stop: "social",
			doing: "Back on the felt. The train can wait.",
			where: "a casino"
		},
		{
			from: 23,
			to: 24,
			stop: "home",
			doing: "Heading back to a room they will not keep.",
			where: "the hotel"
		}
	],
	expat: [
		{
			from: 0,
			to: 12,
			stop: "social",
			doing: "On the same stool as yesterday.",
			where: "a bar that knows the name"
		},
		{
			from: 12,
			to: 17,
			stop: "social",
			doing: "Holding the bar down. The ticket home is a story.",
			where: "the bar"
		},
		{
			from: 17,
			to: 22,
			stop: "work",
			doing: "Where the new money is.",
			where: "a casino"
		},
		{
			from: 22,
			to: 24,
			stop: "home",
			doing: "The room he still calls temporary.",
			where: "a rented room"
		}
	],
	guide: [
		{
			from: 0,
			to: 9,
			stop: "home",
			doing: "Off the curb.",
			where: "home"
		},
		{
			from: 9,
			to: 12,
			stop: "work",
			doing: "Meeting people who just got off the road.",
			where: "a hotel curb"
		},
		{
			from: 12,
			to: 18,
			stop: "social",
			doing: "Walking an outsider to a door that pays commission.",
			where: "the strip"
		},
		{
			from: 18,
			to: 23,
			stop: "lunch",
			doing: "Collecting the cut.",
			where: "a bar"
		},
		{
			from: 23,
			to: 24,
			stop: "home",
			doing: "Done selling the city for the night.",
			where: "home"
		}
	],
	host: [
		{
			from: 0,
			to: 14,
			stop: "home",
			doing: "Off the floor. The walk-up is the real address.",
			where: "home"
		},
		{
			from: 14,
			to: 17,
			stop: "work",
			doing: "Getting the room ready for outside money.",
			where: "the floor"
		},
		{
			from: 17,
			to: 23,
			stop: "social",
			doing: "On the floor. The stool has a price.",
			where: "the floor"
		},
		{
			from: 23,
			to: 24,
			stop: "home",
			doing: "Counting what the house left.",
			where: "home"
		}
	],
	porter: [
		{
			from: 0,
			to: 5,
			stop: "home",
			doing: "Asleep between fares.",
			where: "home"
		},
		{
			from: 5,
			to: 9,
			stop: "work",
			doing: "Keys and the morning train.",
			where: "the motel desk"
		},
		{
			from: 9,
			to: 15,
			stop: "social",
			doing: "Running people who do not know the streets.",
			where: "between the hotel and the strip"
		},
		{
			from: 15,
			to: 18,
			stop: "home",
			doing: "The day wage, already spent.",
			where: "home"
		},
		{
			from: 18,
			to: 23,
			stop: "work",
			doing: "Night desk. Hourly keys for people passing through.",
			where: "the motel"
		},
		{
			from: 23,
			to: 24,
			stop: "home",
			doing: "Bike parked. Done.",
			where: "home"
		}
	],
	dancer: [
		{
			from: 4,
			to: 8,
			stop: "home",
			doing: "Asleep above the club.",
			where: "a room upstairs"
		},
		{
			from: 8,
			to: 16,
			stop: "work",
			doing: "On the floor. She walks over if you stay.",
			where: "the club floor"
		},
		{
			from: 16,
			to: 24,
			stop: "work",
			doing: "Off the stage. Walking over if you have caps.",
			where: "the club floor"
		},
		{
			from: 0,
			to: 4,
			stop: "work",
			doing: "Last set. She comes off the stage if you stay.",
			where: "the club floor"
		}
	],
	walker: [
		{
			from: 5,
			to: 16,
			stop: "home",
			doing: "Asleep. The rate is not a morning price.",
			where: "a rented room"
		},
		{
			from: 16,
			to: 18,
			stop: "work",
			doing: "Getting ready. The street is not open yet.",
			where: "a room"
		},
		{
			from: 18,
			to: 24,
			stop: "work",
			doing: "On the walk. Talk is free. The hour is not.",
			where: "the stroll"
		},
		{
			from: 0,
			to: 5,
			stop: "work",
			doing: "Still out. The last hour is quieter and the price is the same.",
			where: "the stroll"
		}
	],
	wild: [{
		from: 6,
		to: 18,
		stop: "work",
		doing: "Out where the graves thin.",
		where: "the hill"
	}, {
		from: 18,
		to: 6,
		stop: "home",
		doing: "Back in the ground that knows them.",
		where: "the crypt"
	}]
};
function hourOf$1(hour) {
	return (hour % 24 + 24) % 24;
}
function covers(phase, hour) {
	if (phase.from === phase.to) return true;
	if (phase.from < phase.to) return hour >= phase.from && hour < phase.to;
	return hour >= phase.from || hour < phase.to;
}
function phaseAt(role, hour) {
	const h = hourOf$1(hour);
	const list = SCHEDULES[role];
	return list.find((p) => covers(p, h)) ?? list[0];
}
function doingForRole(role, hour) {
	const phase = phaseAt(role, hour);
	return {
		doing: phase.doing,
		where: phase.where
	};
}
function at$1(id, dx = 0, dz = 0) {
	const p = DISTRICT_POS[id];
	return {
		x: p.x + dx,
		z: p.z + dz
	};
}
function hqDistrict(soul) {
	if (!soul.gang) return null;
	return GANG_BY_ID[soul.gang].turf;
}
function dropDistrict(soul, life) {
	const jet = life.pulse?.story.jetRun;
	if (soul.gang === "mordinos" && (jet === "moving" || jet === "loaded")) return "chop";
	if (soul.gang === "mordinos") return "chop";
	if (soul.gang === "bishops") return life.pulse?.story.bishopLetter === "carried" ? "bishop" : "rail";
	if (soul.gang === "wrights") return "jungle";
	if (soul.gang === "salvatores") return life.pulse?.story.enclaveCrate === "rail" ? "rail" : "salvatore";
	return "market";
}
function socialDistrict(soul) {
	if (soul.role === "guest" || soul.role === "tourist" || soul.role === "expat" || soul.role === "guide" || soul.role === "host" || soul.role === "porter") {
		if (soul.home.x > 70) return "desperado";
		if (soul.home.z > 40 && soul.role !== "guide" && soul.role !== "porter") return "virgin";
		if (soul.home.x < -20) return "salvatore";
		return "virgin";
	}
	if (soul.gang === "mordinos") return "desperado";
	if (soul.gang === "bishops") return "shark";
	if (soul.gang === "salvatores") return "salvatore";
	if (soul.gang === "wrights") return "jungle";
	if (soul.home.x < -20) return "salvatore";
	if (soul.home.x > 80) return "desperado";
	return "virgin";
}
function patrolPoint(soul, hour) {
	const h = hourOf$1(hour);
	const swing = (h % 6 + (h >= 18 ? 1 : 0)) / 6;
	const end = h >= 18 || h < 6 ? soul.post : {
		x: (soul.home.x + soul.post.x) / 2 + 8,
		z: (soul.home.z + soul.post.z) / 2 - 4
	};
	return {
		x: soul.home.x + (end.x - soul.home.x) * swing,
		z: soul.home.z + (end.z - soul.home.z) * swing
	};
}
function targetPoint(soul, life) {
	if (soul.id === "mickey" && life.pulse?.story.bishopLetter === "carried") return at$1("bishop", 2, 1);
	if (soul.role === "assassin") {
		const watch = soul.watch ?? (soul.gang ? GANG_BY_ID[soul.gang].rival : void 0);
		if (soul.gang && watch) {
			const a = DISTRICT_POS[GANG_BY_ID[soul.gang].turf];
			const b = DISTRICT_POS[GANG_BY_ID[watch].turf];
			return {
				x: (a.x + b.x) / 2,
				z: (a.z + b.z) / 2
			};
		}
		return at$1("chop", 2, -2);
	}
	if (soul.role === "dealer") return hourOf$1(life.hour) >= 18 || hourOf$1(life.hour) < 6 ? at$1("desperado", -2, 2) : at$1("market", 1, -2);
	if (soul.role === "courier") return at$1(dropDistrict(soul, life), 2, 1);
	if (soul.role === "collector") return hourOf$1(life.hour) % 2 === 0 ? at$1("virgin", 4, 2) : at$1("market", -3, 1);
	return soul.post;
}
function pointFor(soul, stop, life) {
	if (stop === "home" || stop === "stash") return stop === "stash" ? {
		x: soul.home.x - 3,
		z: soul.home.z + 2
	} : soul.home;
	if (stop === "work") return soul.post;
	if (stop === "lunch") return {
		x: soul.post.x + 6,
		z: soul.post.z - 4
	};
	if (stop === "social") return at$1(socialDistrict(soul), 1, -1);
	if (stop === "hq") {
		const turf = hqDistrict(soul);
		return turf ? at$1(turf, -1, 1) : soul.home;
	}
	if (stop === "drop") return at$1(dropDistrict(soul, life), -2, 2);
	if (stop === "patrol") return patrolPoint(soul, life.hour);
	return targetPoint(soul, life);
}
/** Where this named person is supposed to be. Cheap. Called for nearby detail and for the hourly abstract snap. */
function schedulePoint(soul, life) {
	const phase = phaseAt(soul.role ?? "resident", life.hour);
	const point = pointFor(soul, phase.stop, life);
	return {
		x: point.x,
		z: point.z,
		doing: phase.doing,
		where: phase.where,
		stop: phase.stop
	};
}
function activityLine(soul, life) {
	const onFloor = life.hour >= 8 || life.hour < 4;
	if (soul.role === "dancer" && onFloor && soul.pitch) return soul.pitch;
	const stroll = life.hour >= 18 || life.hour < 5;
	if (soul.role === "walker" && stroll && soul.pitch) return soul.pitch;
	return schedulePoint(soul, life).doing;
}
function streetRole(role) {
	if (role === "cop") return "police";
	if (role === "courier") return "courier";
	if (role === "dealer" || role === "lot") return "dealer";
	if (role === "soldato") return "collector";
	if (role === "bartender" || role === "tout") return "staff";
	if (role === "mechanic" || role === "clerk") return "worker";
	return "resident";
}
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
/** What New Reno actually moves. Not a national economy. */
var VENUES = [
	{
		id: "shark",
		name: "Shark Club",
		kind: "casino",
		district: "shark",
		owner: "John Bishop",
		gang: "bishops",
		prestige: 90,
		security: 78,
		employees: 36,
		open: 12,
		close: 4,
		games: [
			"blackjack",
			"poker",
			"high-limit",
			"sports book",
			"private game"
		]
	},
	{
		id: "desperado",
		name: "Desperado",
		kind: "casino",
		district: "desperado",
		owner: "Big Jesus Mordino",
		gang: "mordinos",
		prestige: 48,
		security: 36,
		employees: 18,
		open: 14,
		close: 5,
		games: [
			"slots",
			"poker",
			"roulette",
			"illegal game"
		]
	},
	{
		id: "catclaw",
		name: "Catclaw",
		kind: "casino",
		district: "market",
		owner: "nobody who signs paper",
		prestige: 12,
		security: 8,
		employees: 3,
		open: 18,
		close: 6,
		games: [
			"slots",
			"two-bit poker",
			"information for stakes"
		]
	},
	{
		id: "globes",
		name: "Golden Globes",
		kind: "bar",
		district: "mordino",
		owner: "Little Jesus Mordino",
		gang: "mordinos",
		prestige: 34,
		security: 28,
		employees: 7,
		open: 16,
		close: 4
	},
	{
		id: "salvatore",
		name: "Salvatore's Bar",
		kind: "bar",
		district: "salvatore",
		owner: "Louis Salvatore",
		gang: "salvatores",
		prestige: 72,
		security: 80,
		employees: 5,
		open: 11,
		close: 2
	},
	{
		id: "longpour",
		name: "The Long Pour",
		kind: "bar",
		district: "virgin",
		owner: "a man who pays the Bishops",
		gang: "bishops",
		prestige: 30,
		security: 22,
		employees: 4,
		open: 11,
		close: 3
	},
	{
		id: "rose",
		name: "Desert Rose",
		kind: "hotel",
		district: "motel",
		owner: "Rita Voss",
		prestige: 18,
		security: 12,
		employees: 4,
		rooms: 28,
		rate: 18,
		open: 0,
		close: 24
	},
	{
		id: "suites",
		name: "Shark Club suites",
		kind: "hotel",
		district: "shark",
		owner: "John Bishop",
		gang: "bishops",
		prestige: 80,
		security: 70,
		employees: 8,
		rooms: 14,
		rate: 70,
		open: 0,
		close: 24
	}
];
Object.fromEntries(VENUES.map((v) => [v.id, v]));
var FAMILY_PROFILE = {
	mordinos: {
		goals: "Move Jet. Keep the Desperado loud. Do not let the Wrights answer for Richard.",
		allies: "The Stables lab. No one they would call a friend.",
		businesses: "Desperado, Golden Globes",
		assets: "Jet kitchen, Myron, the night trade",
		personnel: "Vinnie Mora, Rae Mordino"
	},
	wrights: {
		goals: "Keep the stills. Make the Mordinos pay for Richard Wright.",
		allies: "The Jungle, when it suits them.",
		businesses: "Compound stills, shine sold into the Jungle",
		assets: "Orchards, shotguns, a dead son's name",
		personnel: "Clete Wright, Junebug Wright"
	},
	salvatores: {
		goals: "Stay quiet. Keep the laser and the crate nobody else can buy.",
		allies: "Men who arrive in machines the other families do not own.",
		businesses: "Salvatore's Bar",
		assets: "Energy weapons, Mason, the oxygen tank",
		personnel: "Donnie Glass, Pia Salvatore"
	},
	bishops: {
		goals: "Own the mayor, the Shark Club, and any letter that leaves town.",
		allies: "The mayor's office. NCR, when it pays.",
		businesses: "Shark Club, Bishop offices",
		assets: "The polite floor, political paper, Angela on the rail",
		personnel: "Harlan Crowe, Mickey Shaw"
	}
};
function emptyStory() {
	return {
		richard: "open",
		jetRun: "cooking",
		bishopLetter: "desk",
		enclaveCrate: "rumor",
		mayorSqueeze: 0,
		involvement: 0,
		courierMissing: false,
		bloodDay: 0,
		bloodDistrict: "",
		heard: []
	};
}
function emptyFamily(operation) {
	return {
		cash: 0,
		influence: 0,
		security: 0,
		operation
	};
}
function emptyPulse() {
	return {
		stamp: -1,
		demand: 48,
		streetCash: 0,
		visitorSpend: 0,
		lastColor: "",
		families: {
			mordinos: {
				...emptyFamily("Myron is cooking. Nothing is on the street."),
				cash: 8200,
				influence: 55,
				security: 38
			},
			wrights: {
				...emptyFamily("Stills running. Collections before supper."),
				cash: 4100,
				influence: 42,
				security: 48
			},
			salvatores: {
				...emptyFamily("Quiet rooms. The laser stays a story."),
				cash: 9600,
				influence: 58,
				security: 84
			},
			bishops: {
				...emptyFamily("The envelope is still on the Shark Club desk."),
				cash: 14e3,
				influence: 74,
				security: 66
			}
		},
		venues: Object.fromEntries(VENUES.map((v) => [v.id, {
			cash: v.prestige * 40,
			customers: 0,
			revenueToday: 0,
			occupancy: v.kind === "hotel" ? 40 : 0,
			activity: "not open yet"
		}])),
		story: emptyStory()
	};
}
function copyPulse(pulse) {
	const base = emptyPulse();
	if (!pulse) return base;
	const families = { ...base.families };
	for (const g of GANGS) families[g.id] = {
		...base.families[g.id],
		...pulse.families?.[g.id]
	};
	const venues = { ...base.venues };
	for (const v of VENUES) venues[v.id] = {
		...base.venues[v.id],
		...pulse.venues?.[v.id]
	};
	return {
		stamp: pulse.stamp ?? -1,
		demand: pulse.demand ?? base.demand,
		streetCash: pulse.streetCash ?? 0,
		visitorSpend: pulse.visitorSpend ?? 0,
		lastColor: pulse.lastColor ?? "",
		families,
		venues,
		story: {
			...base.story,
			...pulse.story,
			heard: [...pulse.story?.heard ?? []]
		}
	};
}
function ensurePulse(life) {
	life.pulse = copyPulse(life.pulse);
	return life.pulse;
}
function hourOf(hour) {
	return (hour % 24 + 24) % 24;
}
function venueOpen(v, hour) {
	const h = hourOf(hour);
	if (v.open === v.close || v.open === 0 && v.close === 24) return true;
	if (v.open < v.close) return h >= v.open && h < v.close;
	return h >= v.open || h < v.close;
}
function nightHour$1(hour) {
	const h = hourOf(hour);
	return h >= 20 || h < 6;
}
function syncOps(pulse) {
	const s = pulse.story;
	pulse.families.mordinos.operation = s.jetRun === "cooking" ? "Myron is cooking. Nothing is on the street." : s.jetRun === "loaded" ? "Jet is racked at the Stables." : s.jetRun === "moving" ? "A courier is walking the case to the Chop Shop." : s.jetRun === "short" ? "The shipment came up short. Someone is dead." : "Last night's Jet sold through the Desperado.";
	pulse.families.bishops.operation = s.courierMissing ? "A courier is missing. The envelope is not on the desk." : s.bishopLetter === "carried" ? "Mickey Shaw is carrying the mayor's letter." : s.bishopLetter === "delivered" ? "The letter landed. The mayor owes a smile." : "The envelope is still on the Shark Club desk.";
	pulse.families.salvatores.operation = s.enclaveCrate === "rail" ? "A humming crate is in the rail yard." : s.enclaveCrate === "bar" ? "The crate is inside the bar. Mason has the door." : s.enclaveCrate === "gone" ? "The crate is inventory. Do not ask." : "Quiet rooms. The laser stays a story.";
	pulse.families.wrights.operation = s.richard === "answered" ? "Richard's name has been answered." : s.richard === "named" ? "Richard's name is in the street's mouth." : s.bloodDistrict ? "A Wright cousin is asking who shorted the Jet." : "Stills running. Collections before supper.";
}
function hear(pulse, line) {
	if (!line || pulse.story.heard[0] === line) return;
	pulse.story.heard = [line, ...pulse.story.heard].slice(0, 6);
}
function stepStory(life, hour) {
	const pulse = life.pulse;
	const s = pulse.story;
	const h = hourOf(hour);
	let line = null;
	if (h === 6) {
		if (s.jetRun === "sold" || s.jetRun === "short") s.jetRun = "cooking";
		if (s.bishopLetter === "delivered") s.bishopLetter = "desk";
		if (s.enclaveCrate === "gone") s.enclaveCrate = "rumor";
		if (s.courierMissing && (life.absent?.mickey ?? 0) <= life.day) {
			s.courierMissing = false;
			s.bishopLetter = "desk";
			line = "Mickey Shaw is back on the Shark Club door. He is not explaining the missing day.";
		}
	}
	if (h === 9 && s.jetRun === "cooking") {
		s.jetRun = "loaded";
		line = "Jet is racked at the Stables. It is not on the street yet.";
	}
	if (h === 16 && s.jetRun === "loaded") {
		s.jetRun = "moving";
		line = "Rae Mordino is walking a case toward the Chop Shop. The route is the story.";
	}
	if (h === 21 && s.jetRun === "moving") {
		const covered = life.gangId === "mordinos" && s.involvement >= 2;
		if (!covered && (life.tension ?? 0) >= 62) {
			s.jetRun = "short";
			s.bloodDay = life.day;
			s.bloodDistrict = "chop";
			life.tension = clamp((life.tension ?? 0) + 6, 0, 100);
			line = "The Jet case did not all arrive. Somebody is dead at the Chop Shop. Tomorrow belongs to that.";
		} else {
			s.jetRun = "sold";
			pulse.families.mordinos.cash += 400 + pulse.demand * 4;
			line = covered ? "The Jet sold through. Your name on the Mordino side is why the case arrived whole." : "The Jet sold through the Desperado. Mordino cash moved. You did not have to be the buyer.";
		}
	}
	if (h === 11 && s.bishopLetter === "desk" && !s.courierMissing) {
		s.bishopLetter = "carried";
		line = "Mickey Shaw has the Bishop envelope. He is leaving the Shark Club with it.";
	}
	if (h === 19 && s.bishopLetter === "carried") {
		if ((life.heat ?? 0) >= 55 && s.involvement < 2 && life.gangId !== "bishops") {
			s.bishopLetter = "missing";
			s.courierMissing = true;
			life.absent = {
				...life.absent ?? {},
				mickey: life.day + 2
			};
			line = "Mickey Shaw did not make the Bishop offices. The envelope is in someone else's coat.";
		} else {
			s.bishopLetter = "delivered";
			s.mayorSqueeze += 1;
			pulse.families.bishops.influence = clamp(pulse.families.bishops.influence + 1, 0, 100);
			pulse.families.bishops.cash += 180;
			line = "The Bishop envelope landed. The mayor's office will feel it by morning.";
		}
	}
	if (h === 14 && life.day % 3 === 0 && s.enclaveCrate === "rumor") {
		s.enclaveCrate = "rail";
		line = "A crate that hums came off a boxcar. Salvatore's name is not on it. Everyone knows it anyway.";
	}
	if (h === 20 && s.enclaveCrate === "rail") {
		s.enclaveCrate = "bar";
		line = "The humming crate is inside Salvatore's. Mason is the door.";
	}
	if (h === 10 && s.enclaveCrate === "bar") {
		s.enclaveCrate = "gone";
		pulse.families.salvatores.cash += 260;
		line = "Salvatore's crate is not a rumor this morning. It is inventory.";
	}
	if (line) hear(pulse, line);
	return line;
}
function tickVenues(life, hour) {
	const pulse = life.pulse;
	const h = hourOf(hour);
	const night = nightHour$1(h);
	const s = pulse.story;
	for (const v of VENUES) {
		const live = pulse.venues[v.id];
		if (h === 0) live.revenueToday = 0;
		if (!venueOpen(v, h)) {
			if (v.kind !== "hotel") {
				live.customers = 0;
				live.activity = "Closed. The lock is the security.";
			}
			continue;
		}
		if (v.kind === "casino") {
			const games = v.games ?? ["poker"];
			const game = games[h % games.length] ?? "poker";
			const outside = night || h >= 16 ? v.district === "virgin" || v.district === "shark" || v.district === "desperado" || v.id === "catclaw" || v.id === "globes" : false;
			const crowd = Math.max(1, Math.round(v.employees * (night ? 1.7 : .55) * (outside ? 1.28 : 1) * (.55 + v.prestige / 160)));
			const wet = weatherCrowd(weatherAt(life.day, h));
			live.customers = Math.max(1, Math.round(crowd * wet));
			const take = crowd * (5 + Math.round(v.prestige / 14) + (game.includes("high") ? 12 : 0));
			live.cash += take;
			live.revenueToday += take;
			if (v.gang) pulse.families[v.gang].cash += Math.round(take * .34);
			if (outside) pulse.visitorSpend += Math.round(take * .5);
			const loud = crowd > v.employees * 2 && v.security < 50;
			if (outside) live.activity = loud ? `${game}. Outside money, loud about it. Security is watching the new faces.` : `${game}. Most of the chips came in on the road, not from this block.`;
			else live.activity = loud ? `${game}. A loud table. Security is watching.` : `${game} on the floor`;
			if (v.id === "shark" && night) live.activity += " Suites upstairs are full of people who leave on the train.";
			if (v.id === "catclaw") live.activity = `${game}. The cheap weekend. Same hunger, smaller neon.`;
			const sky = weatherAt(life.day, h);
			if (sky === "storm" || sky === "rain") live.activity += sky === "storm" ? " Storm on the door." : " Rain on the awning.";
			else if (sky === "dust") live.activity += " Dust in the entry.";
		} else if (v.kind === "bar") {
			const touristBar = v.id === "longpour";
			let mix = "workers on the first stools";
			if (touristBar && h >= 17 && h < 21) mix = "new caps on the good stools, locals working the rest";
			else if (touristBar && night) mix = "NCR and Hub money, floor staff, and people who live on the cut";
			else if (touristBar && h >= 12) mix = "a thin crowd. One long-stay, two arrivals, an informant";
			else if (h >= 17 && h < 21) mix = "gamblers, family men, and a dealer who is not here to drink";
			else if (night) mix = "the regulars, and nobody photographing the neon";
			else if (h >= 12) mix = "a thin crowd. One informant if you know the stool";
			const crowd = Math.max(1, Math.round(v.employees * (night ? 2.3 : .7) * (touristBar && night ? 1.2 : 1)));
			const sky = weatherAt(life.day, h);
			const wet = weatherCrowd(sky);
			const heads = Math.max(1, Math.round(crowd * (sky === "storm" || sky === "rain" ? 1.12 : wet)));
			live.customers = heads;
			const take = heads * (3 + Math.round(v.prestige / 30));
			live.cash += take;
			live.revenueToday += take;
			if (v.gang) pulse.families[v.gang].cash += Math.round(take * .4);
			if (night && touristBar) pulse.visitorSpend += Math.round(take * .35);
			live.activity = mix;
			if (sky === "storm") live.activity += " Storm keeps the door swinging.";
			else if (sky === "rain") live.activity += " Rain. People stay on the stools.";
			else if (sky === "dust") live.activity += " Dust on the coats.";
			else if (sky === "wind") live.activity += " Wind in the entry.";
		} else {
			const occ = clamp(Math.round((night ? 86 : 48) + v.prestige / 8 - (h >= 8 && h < 11 ? 22 : 0)), 12, 97);
			const sky = weatherAt(life.day, h);
			live.occupancy = clamp(Math.round(occ * (sky === "storm" ? 1.16 : sky === "rain" ? 1.08 : sky === "dust" ? .92 : 1)), 8, 99);
			live.customers = Math.round((v.rooms ?? 10) * live.occupancy / 100);
			const take = live.customers * (v.rate ?? 20);
			live.cash += Math.round(take / 8);
			live.revenueToday += Math.round(take / 8);
			if (v.gang) pulse.families[v.gang].cash += Math.round(take / 20);
			if (night) pulse.visitorSpend += Math.round(take / 12);
			if (h >= 8 && h < 11) live.activity = "Departures. The train takes the boots. The bill stays.";
			else if (h >= 15 && h < 19) live.activity = "Arrivals. Clean boots, short stays, asking for the loud street.";
			else if (night) live.activity = "Hourly keys. They are not from here. The night desk is.";
			else live.activity = "Housekeeping. The day wage does not cover what the night desk sees.";
			if (sky === "storm" || sky === "rain") live.activity += " Weather is filling the cheap rooms.";
			else if (sky === "dust") live.activity += " Dust on the lot. People wipe the windshield and stay.";
			if (v.id === "rose" && (s.jetRun === "moving" || s.courierMissing)) live.activity += " One key belongs to someone who is not a tourist.";
		}
	}
	if (h === 18) for (const v of VENUES) {
		if (v.kind !== "casino") continue;
		const live = pulse.venues[v.id];
		const wages = v.employees * 3;
		live.cash = Math.max(0, live.cash - wages);
		const bar = VENUES.find((b) => b.kind === "bar" && (b.district === v.district || b.gang === v.gang));
		if (bar) pulse.venues[bar.id].cash += Math.round(wages * .5);
	}
	if (h === 15) for (const g of GANGS) {
		const book = pulse.families[g.id];
		const take = 70 + book.influence;
		book.cash += take;
	}
	if (night) {
		const deals = Math.max(1, Math.round(pulse.demand / 12));
		pulse.families.mordinos.cash += deals * 9;
		pulse.streetCash += deals * 6;
		pulse.demand = clamp(pulse.demand + (h >= 21 ? 2 : 0), 18, 92);
	} else pulse.demand = clamp(pulse.demand - 1, 18, 92);
	if (h === 8) {
		const cut = Math.round(pulse.visitorSpend * .08);
		pulse.streetCash += cut;
	}
	if (h === 9) pulse.visitorSpend = Math.round(pulse.visitorSpend * .25);
}
/**
* Far-from-player simulation. Once per game hour, not per frame.
* Named people only change destination. Money, rooms, and story move here.
*/
function advanceCityHour(life) {
	const pulse = ensurePulse(life);
	const stamp = life.day * 24 + hourOf(life.hour);
	if (pulse.stamp === stamp) return null;
	pulse.stamp = stamp;
	tickVenues(life, life.hour);
	const storyLine = stepStory(life, life.hour);
	syncOps(pulse);
	const wx = weatherAt(life.day, life.hour);
	const prevHour = life.hour <= 0 ? 23 : life.hour - 1;
	const weatherNote = wx !== weatherAt(life.hour <= 0 ? life.day - 1 : life.day, prevHour) ? weatherLine(wx) : null;
	if (weatherNote) hear(pulse, weatherNote);
	const here = VENUES.find((v) => v.district === life.district && venueOpen(v, life.hour));
	const local = here ? pulse.venues[here.id] : void 0;
	if (local && here && local.activity && local.activity !== "Closed. The lock is the security.") {
		const color = `${here.name}: ${local.activity}.`;
		if (color !== pulse.lastColor) {
			pulse.lastColor = color;
			hear(pulse, color);
			if (!storyLine && (local.customers ?? 0) >= 4) return color;
		}
	}
	return storyLine ?? weatherNote;
}
function venueIn(district, kind) {
	return VENUES.find((v) => v.district === district && (!kind || v.kind === kind));
}
/** House take or payout. Player bets are part of the same till as the tourists. */
function bookWager(life, district, amount, playerWon) {
	const pulse = ensurePulse(life);
	const venue = venueIn(district, "casino") ?? venueIn(district);
	if (!venue) return;
	const live = pulse.venues[venue.id];
	if (playerWon) {
		live.cash = Math.max(0, live.cash - amount);
		live.activity = "a table just paid a stranger";
	} else {
		live.cash += amount;
		live.revenueToday += amount;
		if (venue.gang) pulse.families[venue.gang].cash += Math.round(amount * .4);
		live.activity = "the felt is eating";
	}
}
function bookDrink(life, district, caps) {
	const pulse = ensurePulse(life);
	const venue = venueIn(district, "bar") ?? venueIn(district);
	if (!venue) return;
	const live = pulse.venues[venue.id];
	live.cash += caps;
	live.revenueToday += caps;
	if (venue.gang) pulse.families[venue.gang].cash += Math.round(caps * .5);
}
function districtBlurb(life, district) {
	const pulse = life.pulse ?? emptyPulse();
	const h = hourOf(life.hour);
	const venue = VENUES.find((v) => v.district === district);
	const live = venue ? pulse.venues[venue.id] : void 0;
	if (live && venue && venueOpen(venue, h)) return `${venue.name} — ${live.activity}. ${live.customers} inside.`;
	if (h >= 22 || h < 6) return "Most of the block is indoors. What is still out is working.";
	if (h < 12) return "Shifts starting. The casinos are not the city yet.";
	return "Errands, counters, and people who have somewhere to be by dark.";
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
		role: "tourist",
		kind: "tourist",
		sprite: "/reno/tokens/tourist-traveler.webp",
		home: at("motel", -6, 8),
		post: at("virgin", 2, -2)
	},
	{
		id: "han",
		name: "Mrs. Han",
		allegiance: "citizen",
		role: "resident",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("virgin", -4, 10),
		post: at("virgin", 3, 2)
	},
	{
		id: "paulie",
		name: "Paulie Dunn",
		allegiance: "citizen",
		role: "staff",
		kind: "tourist",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("shark", 6, 4),
		post: at("shark", -2, 1)
	},
	{
		id: "june",
		name: "June Cobb",
		allegiance: "citizen",
		role: "worker",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("market", 4, 8),
		post: at("market", -2, 1)
	},
	{
		id: "hector",
		name: "Hector Ruiz",
		allegiance: "citizen",
		role: "worker",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("chop", -8, 6),
		post: at("chop", 3, -2)
	},
	{
		id: "lila",
		name: "Lila Boone",
		allegiance: "citizen",
		role: "tourist",
		kind: "tourist",
		sprite: "/reno/tokens/backpacker.webp",
		home: at("desperado", 5, 7),
		post: at("desperado", -1, 1)
	},
	{
		id: "sam",
		name: "Sam Iver",
		allegiance: "citizen",
		role: "worker",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("rail", -6, 4),
		post: at("rail", 2, -3)
	},
	{
		id: "ada",
		name: "Ada Quinn",
		allegiance: "citizen",
		role: "worker",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("bishop", 4, 8),
		post: at("bishop", -2, 1)
	},
	{
		id: "rosa",
		name: "Rosa Minh",
		allegiance: "citizen",
		role: "resident",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("virgin", 10, 12),
		post: at("market", -6, 3)
	},
	{
		id: "fran",
		name: "Fran Holt",
		allegiance: "citizen",
		role: "host",
		kind: "tourist",
		sprite: "/reno/tokens/host.webp",
		home: at("virgin", -8, -4),
		post: at("shark", -3, 2),
		night: true
	},
	{
		id: "ed",
		name: "Ed Pike",
		allegiance: "citizen",
		role: "tourist",
		kind: "tourist",
		sprite: "/reno/tokens/tourist-ncr.webp",
		home: at("motel", 7, -5),
		post: at("desperado", -1, 3),
		night: true
	},
	{
		id: "nell",
		name: "Nell Voss",
		allegiance: "citizen",
		role: "resident",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("jungle", 5, -4),
		post: at("stables", -4, 2)
	},
	{
		id: "mick",
		name: "Mick Hale",
		allegiance: "citizen",
		role: "expat",
		kind: "tourist",
		sprite: "/reno/tokens/expat.webp",
		home: at("desperado", 8, 6),
		post: at("desperado", -1, 2),
		night: true
	},
	{
		id: "sook",
		name: "Sook Voss",
		allegiance: "independent",
		role: "guide",
		kind: "john",
		sprite: "/reno/tokens/guide.webp",
		home: at("virgin", 12, 14),
		post: at("motel", -2, 4)
	},
	{
		id: "ruth",
		name: "Ruth Cobb",
		allegiance: "citizen",
		role: "host",
		kind: "tourist",
		sprite: "/reno/tokens/floor.webp",
		home: at("desperado", -6, 8),
		post: at("desperado", 2, 1),
		night: true
	},
	{
		id: "kip",
		name: "Kip Alvarez",
		allegiance: "citizen",
		role: "porter",
		kind: "john",
		sprite: "/reno/tokens/driver.webp",
		home: at("motel", 10, -8),
		post: at("motel", 1, -2)
	},
	{
		id: "cass",
		name: "Cass Fel",
		allegiance: "independent",
		role: "dealer",
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
		role: "worker",
		kind: "punk",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("stables", 6, 3),
		post: at("stables", -2, -1)
	},
	{
		id: "ivo",
		name: "Ivo Lane",
		allegiance: "independent",
		role: "courier",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("market", 2, -4),
		post: at("bishop", 6, 3)
	},
	{
		id: "cal",
		name: "Cal Dreg",
		allegiance: "independent",
		role: "dealer",
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
		role: "dealer",
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
		role: "assassin",
		kind: "merc",
		sprite: "/reno/tokens/gangster.webp",
		home: at("chop", 4, -5),
		post: at("rail", -5, 2)
	},
	{
		id: "red",
		name: "Red Miller",
		allegiance: "independent",
		role: "guest",
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
		role: "dealer",
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
		role: "collector",
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
		role: "courier",
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
		role: "collector",
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
		role: "courier",
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
		role: "collector",
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
		role: "assassin",
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
		role: "collector",
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
		role: "courier",
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
		role: "police",
		kind: "cop",
		sprite: "/reno/tokens/cop.webp",
		home: at("virgin", -2, 6),
		post: at("virgin", 6, -2)
	},
	{
		id: "keene",
		name: "Officer Keene",
		allegiance: "law",
		role: "police",
		kind: "cop",
		sprite: "/reno/tokens/cop.webp",
		home: at("shark", 3, 5),
		post: at("desperado", -2, 2)
	},
	{
		id: "dodd",
		name: "Sgt. Dodd",
		allegiance: "law",
		role: "police",
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
		role: "police",
		kind: "cop",
		sprite: "/reno/tokens/cop.webp",
		home: at("market", 6, 5),
		post: at("market", -3, -2)
	},
	{
		id: "cough",
		name: "The Cough",
		allegiance: "wild",
		role: "wild",
		kind: "ghoul",
		sprite: "/reno/tokens/junkie.webp",
		home: at("golgotha", -4, 2),
		post: at("golgotha", 3, -2)
	},
	{
		id: "shallow",
		name: "Shallow",
		allegiance: "wild",
		role: "wild",
		kind: "ghoul",
		sprite: "/reno/tokens/junkie.webp",
		home: at("golgotha", 2, 5),
		post: at("golgotha", -3, 1)
	},
	{
		id: "glow",
		name: "Old Light",
		allegiance: "wild",
		role: "wild",
		kind: "mutant",
		sprite: "/reno/tokens/junkie.webp",
		home: at("golgotha", 5, -3),
		post: at("golgotha", -1, 4)
	},
	{
		id: "bea",
		name: "Bea Toll",
		allegiance: "citizen",
		role: "tourist",
		kind: "tourist",
		sprite: "/reno/tokens/tourist-ncr.webp",
		home: {
			x: 34,
			z: -1480
		},
		post: at("virgin", 4, 2),
		ride: "north"
	},
	{
		id: "hap",
		name: "Hap Ruiz",
		allegiance: "citizen",
		role: "porter",
		kind: "john",
		sprite: "/reno/tokens/driver.webp",
		home: {
			x: 28,
			z: 1486
		},
		post: at("motel", 2, -2),
		ride: "south"
	},
	{
		id: "nena",
		name: "Nena Pell",
		allegiance: "citizen",
		role: "tourist",
		kind: "tourist",
		sprite: "/reno/tokens/tourist-traveler.webp",
		home: {
			x: 1520,
			z: 54
		},
		post: at("shark", -2, 2),
		ride: "east"
	},
	{
		id: "ortiz",
		name: "Ortiz Dane",
		allegiance: "citizen",
		role: "guide",
		kind: "john",
		sprite: "/reno/tokens/expat.webp",
		home: {
			x: -1480,
			z: 26
		},
		post: at("desperado", 2, 1),
		ride: "west"
	},
	{
		id: "cleo",
		name: "Cleo Marsh",
		allegiance: "citizen",
		role: "guest",
		kind: "tourist",
		sprite: "/reno/tokens/backpacker.webp",
		home: {
			x: 52,
			z: -1464
		},
		post: at("virgin", -4, 1)
	},
	{
		id: "len",
		name: "Len Crowe",
		allegiance: "citizen",
		role: "worker",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("virgin", -8, 6),
		post: at("market", 2, 2)
	},
	{
		id: "bao",
		name: "Bao Tran",
		allegiance: "citizen",
		role: "staff",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("desperado", -8, -6),
		post: at("desperado", 1, 3)
	},
	{
		id: "willa",
		name: "Willa Trent",
		allegiance: "citizen",
		role: "worker",
		kind: "john",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("chop", 6, -4),
		post: at("chop", -2, 2)
	},
	{
		id: "etta",
		name: "Etta Wright",
		allegiance: "family",
		gang: "wrights",
		role: "resident",
		kind: "wright",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("wright", -4, 4),
		post: at("wright", 2, 1)
	},
	{
		id: "slim",
		name: "Slim Bello",
		allegiance: "family",
		gang: "mordinos",
		watch: "bishops",
		role: "collector",
		kind: "mordino",
		sprite: "/reno/tokens/gangster.webp",
		home: at("mordino", 6, -2),
		post: at("mordino", -3, 2),
		blade: true
	},
	{
		id: "mira",
		name: "Doc Mira",
		allegiance: "citizen",
		role: "worker",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("stables", -5, 6),
		post: at("stables", 2, -2)
	},
	{
		id: "poke",
		name: "Poke Ives",
		allegiance: "independent",
		role: "resident",
		kind: "punk",
		sprite: "/reno/tokens/junkie.webp",
		home: at("jungle", -6, 5),
		post: at("jungle", 3, -2)
	},
	{
		id: "lottie",
		name: "Lottie Glass",
		allegiance: "citizen",
		role: "staff",
		kind: "tourist",
		sprite: "/reno/tokens/host.webp",
		home: at("salvatore", 5, -4),
		post: at("salvatore", -1, 2)
	},
	{
		id: "hale",
		name: "Brother Hale",
		allegiance: "citizen",
		role: "resident",
		kind: "john",
		sprite: "/reno/tokens/expat.webp",
		home: at("stables", 8, 2),
		post: at("market", -4, -2)
	},
	{
		id: "tom",
		name: "Tom Peck",
		allegiance: "citizen",
		role: "worker",
		kind: "john",
		sprite: "/reno/tokens/ped-man.webp",
		home: at("market", 8, -6),
		post: at("market", -1, 3)
	},
	{
		id: "nina",
		name: "Nina Sol",
		allegiance: "citizen",
		role: "tourist",
		kind: "tourist",
		sprite: "/reno/tokens/tourist-ncr.webp",
		home: at("shark", -8, 8),
		post: at("shark", 2, -3),
		night: true
	},
	{
		id: "wes",
		name: "Wes Calder",
		allegiance: "citizen",
		role: "guest",
		kind: "tourist",
		sprite: "/reno/tokens/backpacker.webp",
		home: at("virgin", 8, -8),
		post: at("virgin", -2, 3)
	},
	{
		id: "pearl",
		name: "Pearl Quinn",
		allegiance: "citizen",
		role: "walker",
		kind: "tourist",
		sprite: "/reno/tokens/ped-woman.webp",
		home: at("motel", -2, 6),
		post: at("motel", 2, -1),
		night: true,
		pitch: "Talk is free. The hour is forty. Click again if you mean it.",
		price: 40
	},
	{
		id: "dollie",
		name: "Dollie Shaw",
		allegiance: "citizen",
		role: "walker",
		kind: "tourist",
		sprite: "/reno/tokens/host.webp",
		home: at("virgin", 4, -8),
		post: at("virgin", -2, 2),
		night: true,
		pitch: "Standing is the ad. The hour is fifty-five. Click again to hire it.",
		price: 55
	},
	{
		id: "marisol",
		name: "Marisol Vega",
		allegiance: "citizen",
		role: "walker",
		kind: "tourist",
		sprite: "/reno/tokens/floor.webp",
		home: at("desperado", 6, -8),
		post: at("desperado", -3, -1),
		night: true,
		pitch: "No tour. Forty-five for the hour. Click again with the caps.",
		price: 45
	},
	{
		id: "kit",
		name: "Kit Abel",
		allegiance: "citizen",
		role: "walker",
		kind: "tourist",
		sprite: "/reno/tokens/tourist-traveler.webp",
		home: at("chop", -4, 8),
		post: at("chop", 2, 1),
		night: true,
		pitch: "The other job is tonight. Thirty-five. Click again.",
		price: 35
	},
	{
		id: "faye",
		name: "Faye Brin",
		allegiance: "citizen",
		role: "walker",
		kind: "tourist",
		sprite: "/reno/dance/amira/a.webp",
		home: at("salvatore", -6, 6),
		post: at("salvatore", 2, -2),
		night: true,
		pitch: "Eighty. Night number. Click again if you have it.",
		price: 80
	},
	{
		id: "tess",
		name: "Tess Harlow",
		allegiance: "citizen",
		role: "walker",
		kind: "tourist",
		sprite: "/reno/dance/luz/a.webp",
		home: at("jungle", 2, -6),
		post: at("jungle", -2, 2),
		night: true,
		pitch: "Talk so I know you're safe. Twenty-five for the hour. Click again.",
		price: 25
	},
	{
		id: "velvet",
		name: "Nia Kane",
		allegiance: "citizen",
		role: "dancer",
		kind: "dancer",
		sprite: "/reno/dance/nia/a.webp",
		home: at("shark", 2, 6),
		post: at("shark", -1, 1),
		night: true,
		pitch: "Public floor is the gold fringe. The booth is extra, and it gets more expensive.",
		price: 30
	},
	{
		id: "chrome",
		name: "Mei Della",
		allegiance: "citizen",
		role: "dancer",
		kind: "dancer",
		sprite: "/reno/dance/mei/a.webp",
		home: at("desperado", -4, 6),
		post: at("desperado", 1, -1),
		night: true,
		pitch: "Silver on the stage. If you want me closer, you pay the steps.",
		price: 28
	},
	{
		id: "goldie",
		name: "Luz Navarro",
		allegiance: "citizen",
		role: "dancer",
		kind: "dancer",
		sprite: "/reno/dance/luz/a.webp",
		home: at("virgin", 6, -6),
		post: at("virgin", 1, 2),
		night: true,
		pitch: "The fringe is the public set. The chair is not.",
		price: 32
	},
	{
		id: "emmy",
		name: "Amira Shah",
		allegiance: "citizen",
		role: "dancer",
		kind: "dancer",
		sprite: "/reno/dance/amira/a.webp",
		home: at("shark", -6, 4),
		post: at("shark", 3, -2),
		night: true,
		pitch: "Emerald on the hour. Private is three prices, not one.",
		price: 35
	},
	{
		id: "lace",
		name: "Ines Yazzie",
		allegiance: "citizen",
		role: "dancer",
		kind: "dancer",
		sprite: "/reno/dance/ines/a.webp",
		home: at("desperado", 8, -4),
		post: at("desperado", -2, 2),
		night: true,
		pitch: "I dance the floor, then the booth. The last step costs the most.",
		price: 26
	},
	{
		id: "ruby",
		name: "Ruby Pell",
		allegiance: "citizen",
		role: "dancer",
		kind: "dancer",
		sprite: "/reno/dance/ines/b.webp",
		home: at("mordino", 4, -5),
		post: at("mordino", -1, 2),
		night: true,
		pitch: "The Globes get the late set. The booth still climbs.",
		price: 26
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
	life.corpses = life.corpses ?? [];
	life.privateShows = { ...life.privateShows ?? {} };
	life.reprieveMinute = life.reprieveMinute ?? 0;
	ensurePulse(life);
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
	const g = life.grudges?.[soul.id] ?? 0;
	const fear = life.fear ?? 0;
	const warrant = life.warrant ?? 0;
	const tension = life.tension ?? 0;
	const friction = soul.gang ? life.friction?.[soul.gang] ?? 0 : 0;
	const scheduled = () => {
		const spot = schedulePoint(soul, life);
		return {
			x: spot.x,
			z: spot.z
		};
	};
	if (soul.role === "dancer") {
		const onFloor = life.hour >= 8 || life.hour < 4;
		const spot = scheduled();
		if (onFloor && dist$1(spot.x, spot.z, playerX, playerZ) < 36) return {
			x: playerX,
			z: playerZ
		};
		return spot;
	}
	if (soul.role === "walker") {
		const out = life.hour >= 18 || life.hour < 5;
		const spot = scheduled();
		if (out && dist$1(spot.x, spot.z, playerX, playerZ) < 32) return {
			x: playerX,
			z: playerZ
		};
		return spot;
	}
	if (soul.allegiance === "citizen") {
		const beat = soul.post;
		if (fear >= 18 && dist$1(beat.x, beat.z, playerX, playerZ) < 18) {
			const dx = beat.x - playerX;
			const dz = beat.z - playerZ;
			const len = Math.hypot(dx, dz) || 1;
			return {
				x: playerX + dx / len * 16,
				z: playerZ + dz / len * 16
			};
		}
		return scheduled();
	}
	if (soul.allegiance === "wild") return scheduled();
	if (soul.allegiance === "law") {
		if (warrant >= 16) return {
			x: playerX,
			z: playerZ
		};
		return scheduled();
	}
	if (soul.allegiance === "independent") {
		if (fear >= 55) return soul.home;
		if (g >= 18) return {
			x: playerX,
			z: playerZ
		};
		return scheduled();
	}
	if (soul.blade && (friction >= 18 || g >= 18)) return {
		x: playerX,
		z: playerZ
	};
	const spot = schedulePoint(soul, life);
	if (soul.blade && tension >= 64 && (spot.stop === "home" || spot.stop === "social")) return borderPoint(soul);
	return {
		x: spot.x,
		z: spot.z
	};
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
var tex = null;
/** A few dark holes on a clear plate. Drawn once. */
function woundTexture() {
	if (tex) return tex;
	const canvas = document.createElement("canvas");
	canvas.width = 128;
	canvas.height = 128;
	const g = canvas.getContext("2d");
	if (!g) {
		tex = new Texture();
		return tex;
	}
	g.clearRect(0, 0, 128, 128);
	for (const [x, y, r] of [
		[
			46,
			58,
			11
		],
		[
			74,
			40,
			7
		],
		[
			62,
			78,
			9
		],
		[
			34,
			36,
			5
		]
	]) {
		g.fillStyle = "rgba(90, 8, 10, 0.92)";
		g.beginPath();
		g.ellipse(x, y, r, r * .72, .4, 0, Math.PI * 2);
		g.fill();
		g.fillStyle = "rgba(40, 0, 0, 0.85)";
		g.beginPath();
		g.arc(x, y, r * .38, 0, Math.PI * 2);
		g.fill();
	}
	tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.needsUpdate = true;
	return tex;
}
var TOKEN_URLS = [
	"/reno/tokens/ped-man.webp",
	"/reno/tokens/ped-woman.webp",
	"/reno/tokens/cop.webp",
	"/reno/tokens/junkie.webp",
	"/reno/tokens/gangster.webp",
	"/reno/tokens/tourist-ncr.webp",
	"/reno/tokens/tourist-traveler.webp",
	"/reno/tokens/expat.webp",
	"/reno/tokens/guide.webp",
	"/reno/tokens/host.webp",
	"/reno/tokens/floor.webp",
	"/reno/tokens/driver.webp",
	"/reno/tokens/backpacker.webp",
	"/reno/tokens/velvet.webp",
	"/reno/tokens/chrome.webp",
	"/reno/tokens/fringe.webp",
	"/reno/tokens/emerald.webp",
	"/reno/tokens/lace.webp",
	"/reno/tokens/burgundy.webp",
	"/reno/dance/nia/a.webp",
	"/reno/dance/mei/a.webp",
	"/reno/dance/luz/a.webp",
	"/reno/dance/amira/a.webp",
	"/reno/dance/ines/a.webp",
	"/reno/dance/ines/b.webp"
];
function dist(ax, az, bx, bz) {
	return Math.hypot(ax - bx, az - bz);
}
function StreetCrowd({ lifeRef, player, pausedRef, hiddenRef, onContact, onTalk, onNear }) {
	const maps = useTexture(TOKEN_URLS);
	const cut = (0, import_react.useMemo)(() => {
		const list = Array.isArray(maps) ? maps : [maps];
		const rec = {};
		TOKEN_URLS.forEach((url, i) => {
			rec[url] = cutoutTexture$1(list[i], url);
		});
		return rec;
	}, [maps]);
	const group = (0, import_react.useRef)(null);
	const pos = (0, import_react.useRef)({});
	const farStamp = (0, import_react.useRef)({});
	const acc = (0, import_react.useRef)(0);
	const nearAcc = (0, import_react.useRef)(0);
	const lock = (0, import_react.useRef)(0);
	const chatAcc = (0, import_react.useRef)(0);
	const chatsRef = (0, import_react.useRef)([]);
	const chatNodes = (0, import_react.useRef)({});
	const [chats, setChats] = (0, import_react.useState)([]);
	useFrame((_, dt) => {
		const life = lifeRef.current;
		if (!life) return;
		const paused = pausedRef.current;
		const px = player.current.x;
		const pz = player.current.z;
		const spots = /* @__PURE__ */ new Map();
		const g = group.current;
		const now = performance.now() / 1e3;
		SOULS.forEach((soul, i) => {
			const gone = (life.absent?.[soul.id] ?? 0) > life.day;
			const child = g?.children[i];
			if (gone || hiddenRef.current?.has(soul.id)) {
				if (child) child.visible = false;
				return;
			}
			let cur = pos.current[soul.id];
			const goal = soulGoal(soul, life, px, pz);
			if (!cur) cur = {
				x: soul.home.x,
				z: soul.home.z
			};
			const ride = soul.ride ? RUNS.find((r) => r.id === soul.ride) : void 0;
			if (ride) {
				const p = runPose(ride, now);
				cur = {
					x: p.x + .45,
					z: p.z
				};
			} else {
				const hourKey = life.day * 24 + life.hour;
				const near = dist(cur.x, cur.z, px, pz) < 48 || dist(goal.x, goal.z, px, pz) < 48 || dist(soul.home.x, soul.home.z, px, pz) < 48;
				const chasing = dist(goal.x, goal.z, px, pz) < 2.2 && (soul.allegiance !== "citizen" || soul.role === "dancer" || soul.role === "walker");
				if (!near) {
					if (farStamp.current[soul.id] !== hourKey) {
						cur = {
							x: goal.x,
							z: goal.z
						};
						farStamp.current[soul.id] = hourKey;
					}
				} else {
					const dx = goal.x - cur.x;
					const dz = goal.z - cur.z;
					const d = Math.hypot(dx, dz);
					const stop = chasing ? 4.6 : .35;
					const wx = weatherAt(life.day, life.hour);
					const drag = wx === "storm" ? .55 : wx === "rain" ? .72 : wx === "dust" ? .84 : wx === "wind" ? .9 : 1;
					if (!paused && d > stop) {
						const step = Math.min(d - (chasing ? 4.4 : 0), (soul.allegiance === "law" || soul.blade ? 3.1 : 2.4) * drag * dt);
						if (step > 0) {
							cur.x += dx / d * step;
							cur.z += dz / d * step;
						}
					}
				}
			}
			pos.current[soul.id] = cur;
			spots.set(soul.id, cur);
			if (child) {
				child.visible = true;
				child.position.set(cur.x, 0, cur.z);
				const bob = paused ? 0 : Math.sin(performance.now() / 280 + i) * .04;
				const sprite = child.children[1];
				if (sprite) sprite.position.y = HUMAN_M / 2 + bob;
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
			onNear(best ? `${best.soul.name} · ${allegianceLabel(best.soul)}: ${activityLine(best.soul, life)}` : "Tourists, locals on the cut, families, police. Click someone. They are on a schedule.");
		}
		for (const chat of chatsRef.current) {
			const node = chatNodes.current[chat.key];
			const a = spots.get(chat.a);
			const b = spots.get(chat.b);
			if (!node || !a || !b) continue;
			node.position.set((a.x + b.x) / 2, HUMAN_M + .55, (a.z + b.z) / 2);
			node.visible = dist(px, pz, node.position.x, node.position.z) < 20;
		}
		chatAcc.current += dt;
		if (chatAcc.current > .45) {
			chatAcc.current = 0;
			const next = life.insideId ? [] : nearbyTalk(spots, px, pz, life.hour, weatherAt(life.day, life.hour));
			const prev = chatsRef.current;
			if (next.length !== prev.length || next.some((n, i) => n.key !== prev[i]?.key || n.topic !== prev[i]?.topic)) {
				chatsRef.current = next;
				setChats(next);
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		children: [
			SOULS.map((soul) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					soul.home.x,
					0,
					soul.home.z
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					"rotation-x": -Math.PI / 2,
					position: [
						0,
						.04,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.42, 16] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
						color: ringColor(soul),
						transparent: true,
						opacity: .9,
						depthWrite: false
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
					position: [
						0,
						HUMAN_M / 2,
						0
					],
					scale: [
						HUMAN_W,
						HUMAN_M,
						1
					],
					onClick: (e) => {
						e.stopPropagation();
						onTalk({
							id: soul.id,
							name: soul.name
						});
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
						map: cut[soul.sprite] ?? cut[TOKEN_URLS[0]],
						transparent: true,
						alphaTest: .35,
						depthWrite: false
					})
				})]
			}, soul.id)),
			chats.map((chat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: (node) => {
					chatNodes.current[chat.key] = node;
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
					center: true,
					distanceFactor: 8,
					zIndexRange: [6, 0],
					style: { pointerEvents: "none" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block rounded-sm bg-black/75 px-1 py-px font-mono text-[9px] leading-none whitespace-nowrap text-[#f4efe6]",
						children: chat.topic
					})
				})
			}, chat.key)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StreetBodies, {
				lifeRef,
				cut
			})
		]
	});
}
function StreetBodies({ lifeRef, cut }) {
	const sig = (0, import_react.useRef)("");
	const [bodies, setBodies] = (0, import_react.useState)([]);
	useFrame(() => {
		const list = lifeRef.current?.corpses ?? [];
		const key = list.map((b) => b.id).join(",");
		if (key === sig.current) return;
		sig.current = key;
		setBodies(list.map((b) => ({ ...b })));
	});
	const holes = (0, import_react.useMemo)(() => woundTexture(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: bodies.map((body) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			body.x,
			0,
			body.z
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
			position: [
				0,
				.28,
				0
			],
			scale: [
				HUMAN_M,
				.42,
				1
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
				map: cut[body.sprite] ?? cut["/reno/tokens/gangster.webp"],
				transparent: true,
				alphaTest: .35,
				depthWrite: false
			})
		}), Array.from({ length: Math.min(3, body.wounds) }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
			position: [
				-.35 + i * .28,
				.34,
				.04
			],
			scale: [
				.28,
				.28,
				1
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
				map: holes,
				transparent: true,
				depthWrite: false
			})
		}, i))]
	}, body.id)) });
}
function nearbyTalk(spots, px, pz, hour, weather) {
	const near = [];
	for (const soul of SOULS) {
		const s = spots.get(soul.id);
		if (!s) continue;
		if (dist(px, pz, s.x, s.z) > 22) continue;
		near.push({
			soul,
			x: s.x,
			z: s.z
		});
	}
	near.sort((a, b) => dist(px, pz, a.x, a.z) - dist(px, pz, b.x, b.z));
	const used = /* @__PURE__ */ new Set();
	const out = [];
	for (let i = 0; i < near.length; i++) {
		const a = near[i];
		if (used.has(a.soul.id)) continue;
		let best = null;
		for (let j = 0; j < near.length; j++) {
			if (i === j) continue;
			const b = near[j];
			if (used.has(b.soul.id)) continue;
			const d = dist(a.x, a.z, b.x, b.z);
			if (d > 2.6) continue;
			if (!best || d < best.d) best = {
				soul: b.soul,
				d
			};
		}
		if (!best) continue;
		used.add(a.soul.id);
		used.add(best.soul.id);
		const key = a.soul.id < best.soul.id ? `${a.soul.id}:${best.soul.id}` : `${best.soul.id}:${a.soul.id}`;
		out.push({
			key,
			a: a.soul.id,
			b: best.soul.id,
			topic: chatterTopic(a.soul, best.soul, hour, weather)
		});
		if (out.length >= 5) break;
	}
	return out;
}
function chatterTopic(a, b, hour, weather) {
	let pool;
	if (a.gang && b.gang && a.gang !== b.gang) pool = [
		"the feud",
		"turf",
		"a name"
	];
	else if (a.gang && a.gang === b.gang) pool = [
		"the take",
		"a drop",
		"the family"
	];
	else if (a.role === "police" || b.role === "police") pool = [
		"a sheet",
		"the beat",
		"heat"
	];
	else if (a.role === "dancer" || b.role === "dancer") pool = [
		"caps",
		"a dance",
		"the rail"
	];
	else if (a.role === "walker" || b.role === "walker") pool = [
		"a rate",
		"the hour",
		"the stairs"
	];
	else if (a.role === "dealer" || b.role === "dealer") pool = [
		"jet",
		"a buyer",
		"the stash"
	];
	else if (a.role === "courier" || b.role === "courier" || a.role === "collector" || b.role === "collector") pool = [
		"a package",
		"what they owe",
		"the drop"
	];
	else if (a.allegiance === "wild" || b.allegiance === "wild") pool = ["the graves", "the glow"];
	else if (a.role === "tourist" || b.role === "tourist" || a.role === "guest" || b.role === "guest") pool = [
		"the train",
		"a room",
		"caps"
	];
	else if (a.role === "host" || b.role === "host" || a.role === "guide" || b.role === "guide") pool = [
		"the stool",
		"a door",
		"the cut"
	];
	else pool = [
		"the shift",
		"rent",
		"the block",
		"a drink"
	];
	if (weather === "storm") pool = [
		"the storm",
		"staying in",
		...pool
	];
	else if (weather === "rain") pool = [
		"the rain",
		"the awning",
		...pool
	];
	else if (weather === "dust") pool = [
		"the dust",
		"the grit",
		...pool
	];
	else if (weather === "wind") pool = [
		"the wind",
		"the signs",
		...pool
	];
	const seed = chatterHash(a.id, b.id, Math.floor(hour / 2));
	return pool[seed % pool.length];
}
function chatterHash(a, b, n) {
	const s = a < b ? a + b : b + a;
	let h = n + 1;
	for (let i = 0; i < s.length; i++) h = h * 33 + s.charCodeAt(i) >>> 0;
	return h;
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
	const feud = feudNear(life, px, pz, spots);
	if (feud && feud.foes.length) return {
		x: feud.x,
		z: feud.z,
		reason: feud.reason,
		surprise: false,
		cause: "feud",
		foes: feud.foes.map(toBody),
		allies: feud.allies.map(toBody)
	};
	let best = null;
	for (const soul of SOULS) {
		const s = spots.get(soul.id);
		if (!s) continue;
		const d = dist(px, pz, s.x, s.z);
		const reason = troubleOf(soul, life, d);
		if (!reason) continue;
		if (!best || d < best.d) best = {
			soul,
			d,
			reason
		};
	}
	if (!best) return null;
	const s = spots.get(best.soul.id);
	return {
		x: s.x,
		z: s.z,
		reason: best.reason,
		surprise: best.d > 4,
		cause: best.soul.allegiance === "law" ? "crime" : "hunt",
		foes: [toBody(best.soul)],
		allies: []
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
		if (!isMelee(actor)) state.bangs = (state.bangs ?? 0) + 1;
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
		if (!isMelee(actor)) target.wounds = (target.wounds ?? 0) + 1;
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
	const byHex = new Map(combat.combatants.filter((c) => !c.fled).map((c) => [hexKey(c.hexQ, c.hexR), c]));
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
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
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
				}),
				unit && token ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
					position: [
						0,
						unit.hp <= 0 ? .28 : 1.25,
						0
					],
					scale: unit.hp <= 0 ? [
						1.7,
						.48,
						1
					] : [
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
				}) : null,
				unit && (unit.hp <= 0 || (unit.wounds ?? 0) > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sprite", {
					position: [
						.12,
						unit.hp <= 0 ? .36 : 1.15,
						.05
					],
					scale: [
						.42,
						.42,
						1
					],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spriteMaterial", {
						map: woundTexture(),
						transparent: true,
						depthWrite: false
					})
				}) : null
			]
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
function pinkBuffer(ctx, seconds = 4) {
	const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
	const data = buf.getChannelData(0);
	let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
	for (let i = 0; i < data.length; i++) {
		const white = Math.random() * 2 - 1;
		b0 = .99886 * b0 + white * .0555179;
		b1 = .99332 * b1 + white * .0750759;
		b2 = .969 * b2 + white * .153852;
		b3 = .8665 * b3 + white * .3104856;
		b4 = .55 * b4 + white * .5329522;
		b5 = -.7616 * b5 - white * .016898;
		const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * .5362;
		b6 = white * .115926;
		data[i] = pink * .11;
	}
	return buf;
}
function loop(ctx, buf, dest, type, freq, q, gain) {
	const src = ctx.createBufferSource();
	src.buffer = buf;
	src.loop = true;
	const filter = ctx.createBiquadFilter();
	filter.type = type;
	filter.frequency.value = freq;
	filter.Q.value = q;
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
	const comp = ctx.createDynamicsCompressor();
	comp.threshold.value = -18;
	comp.knee.value = 18;
	comp.ratio.value = 2.4;
	comp.attack.value = .02;
	comp.release.value = .25;
	master.connect(comp);
	comp.connect(ctx.destination);
	const dayBus = ctx.createGain();
	const nightBus = ctx.createGain();
	const rainBus = ctx.createGain();
	const windBus = ctx.createGain();
	dayBus.gain.value = 1;
	nightBus.gain.value = 0;
	rainBus.gain.value = 0;
	windBus.gain.value = .03;
	dayBus.connect(master);
	nightBus.connect(master);
	rainBus.connect(master);
	windBus.connect(master);
	const bed = pinkBuffer(ctx, 4);
	const rumble = loop(ctx, bed, dayBus, "lowpass", 110, .7, .34);
	const mid = loop(ctx, bed, dayBus, "bandpass", 420, .45, .07);
	const air = loop(ctx, bed, dayBus, "highpass", 1800, .5, .012);
	const nightRumble = loop(ctx, bed, nightBus, "lowpass", 80, .6, .22);
	const rain = loop(ctx, bed, rainBus, "highpass", 1400, .4, .55);
	const wind = loop(ctx, bed, windBus, "bandpass", 260, .35, .4);
	const hum = ctx.createOscillator();
	hum.type = "sine";
	hum.frequency.value = 60;
	const hum2 = ctx.createOscillator();
	hum2.type = "sine";
	hum2.frequency.value = 120;
	const humGain = ctx.createGain();
	humGain.gain.value = .012;
	hum.connect(humGain);
	hum2.connect(humGain);
	humGain.connect(nightBus);
	hum.start();
	hum2.start();
	let dead = false;
	let nightOn = false;
	let timer = 0;
	let dripTimer = 0;
	let wx = "clear";
	let rainLevel = 0;
	let windLevel = .06;
	const tone = (freq, dur, vol, dest, type = "sine") => {
		if (dead || ctx.state !== "running") return;
		const osc = ctx.createOscillator();
		const g = ctx.createGain();
		osc.type = type;
		osc.frequency.setValueAtTime(freq, ctx.currentTime);
		osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * .92), ctx.currentTime + dur);
		g.gain.setValueAtTime(1e-4, ctx.currentTime);
		g.gain.exponentialRampToValueAtTime(vol, ctx.currentTime + .03);
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
	const passBy = (dest) => {
		if (dead || ctx.state !== "running") return;
		const src = ctx.createBufferSource();
		src.buffer = bed;
		const filter = ctx.createBiquadFilter();
		filter.type = "bandpass";
		filter.Q.value = .8;
		const now = ctx.currentTime;
		filter.frequency.setValueAtTime(180, now);
		filter.frequency.exponentialRampToValueAtTime(900, now + 1.1);
		filter.frequency.exponentialRampToValueAtTime(160, now + 2.4);
		const g = ctx.createGain();
		g.gain.setValueAtTime(1e-4, now);
		g.gain.exponentialRampToValueAtTime(.09, now + .9);
		g.gain.exponentialRampToValueAtTime(1e-4, now + 2.4);
		const pan = ctx.createStereoPanner();
		const side = Math.random() > .5 ? 1 : -1;
		pan.pan.setValueAtTime(side * -.85, now);
		pan.pan.linearRampToValueAtTime(side * .85, now + 2.2);
		src.connect(filter);
		filter.connect(g);
		g.connect(pan);
		pan.connect(dest);
		src.start();
		src.stop(now + 2.5);
		src.onended = () => {
			src.disconnect();
			filter.disconnect();
			g.disconnect();
			pan.disconnect();
		};
	};
	const drip = () => {
		if (dead || rainLevel < .15 || ctx.state !== "running") return;
		const bursts = wx === "storm" ? 5 : 3;
		for (let i = 0; i < bursts; i++) {
			const src = ctx.createBufferSource();
			src.buffer = bed;
			const filter = ctx.createBiquadFilter();
			filter.type = "highpass";
			filter.frequency.value = 1800 + Math.random() * 3200;
			const g = ctx.createGain();
			const now = ctx.currentTime + Math.random() * .18;
			const dur = .035 + Math.random() * .05;
			g.gain.setValueAtTime(1e-4, now);
			g.gain.exponentialRampToValueAtTime(.035 * rainLevel, now + .006);
			g.gain.exponentialRampToValueAtTime(1e-4, now + dur);
			const pan = ctx.createStereoPanner();
			pan.pan.value = Math.random() * 1.7 - .85;
			src.connect(filter);
			filter.connect(g);
			g.connect(pan);
			pan.connect(master);
			src.start(now);
			src.stop(now + dur + .02);
			src.onended = () => {
				src.disconnect();
				filter.disconnect();
				g.disconnect();
				pan.disconnect();
			};
		}
	};
	const tick = () => {
		if (dead) return;
		const dest = nightOn ? nightBus : dayBus;
		if (Math.random() < (nightOn ? .42 : .62)) passBy(dest);
		if (Math.random() < (nightOn ? .28 : .16)) {
			tone(280 + Math.random() * 50, .42, .018, dest, "triangle");
			tone(360 + Math.random() * 40, .3, .01, dest);
		}
		if (nightOn && Math.random() < .08) {
			tone(740, .55, .012, nightBus, "sine");
			tone(880, .7, .008, nightBus, "sine");
		}
		if (windLevel > .08) {
			windBus.gain.setTargetAtTime(windLevel * (.55 + Math.random() * .9), ctx.currentTime, .45);
			wind.filter.frequency.setTargetAtTime(wx === "dust" ? 140 + Math.random() * 80 : 240 + Math.random() * 160, ctx.currentTime, .4);
		}
		rumble.gain.gain.setTargetAtTime(.28 + Math.random() * .12, ctx.currentTime, 1.1);
		mid.gain.gain.setTargetAtTime(.045 + Math.random() * .035, ctx.currentTime, .8);
		timer = window.setTimeout(tick, 2800 + Math.random() * 4200);
	};
	const dripLoop = () => {
		if (dead) return;
		drip();
		dripTimer = window.setTimeout(dripLoop, wx === "storm" ? 180 : 320);
	};
	return {
		unlock() {
			if (ctx.state === "suspended") ctx.resume();
			master.gain.setTargetAtTime(.55, ctx.currentTime, .12);
			if (!timer) tick();
			if (!dripTimer) dripLoop();
		},
		setNight(night) {
			nightOn = night;
			const t = ctx.currentTime;
			dayBus.gain.setTargetAtTime(night ? .15 : 1, t, .8);
			nightBus.gain.setTargetAtTime(night ? 1 : .05, t, .8);
		},
		setWeather(weather) {
			wx = weather;
			const t = ctx.currentTime;
			rainLevel = weather === "storm" ? .9 : weather === "rain" ? .58 : 0;
			windLevel = weather === "storm" ? .72 : weather === "wind" ? .48 : weather === "dust" ? .32 : .05;
			rainBus.gain.setTargetAtTime(rainLevel, t, .6);
			windBus.gain.setTargetAtTime(windLevel, t, .6);
			wind.filter.frequency.setTargetAtTime(weather === "dust" ? 160 : 300, t, .5);
			air.gain.gain.setTargetAtTime(weather === "clear" ? .016 : .008, t, .5);
		},
		setLevel(level) {
			master.gain.setTargetAtTime(Math.max(0, Math.min(1, level)) * .5, ctx.currentTime, .15);
		},
		dispose() {
			dead = true;
			window.clearTimeout(timer);
			window.clearTimeout(dripTimer);
			hum.stop();
			hum2.stop();
			rumble.src.stop();
			mid.src.stop();
			air.src.stop();
			nightRumble.src.stop();
			rain.src.stop();
			wind.src.stop();
			ctx.close();
		}
	};
}
var SPEED = 4.8;
var TURN = 2.2;
function paceOf(weather) {
	if (weather === "storm") return .62;
	if (weather === "rain") return .78;
	if (weather === "dust") return .86;
	if (weather === "wind") return .92;
	return 1;
}
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
function useCityAmbience(night, ducked, weather) {
	const api = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(true);
	const nightRef = (0, import_react.useRef)(night);
	const onRef = (0, import_react.useRef)(on);
	const duckedRef = (0, import_react.useRef)(ducked);
	const weatherRef = (0, import_react.useRef)(weather);
	nightRef.current = night;
	onRef.current = on;
	duckedRef.current = ducked;
	weatherRef.current = weather;
	(0, import_react.useEffect)(() => {
		const unlock = () => {
			if (!api.current) api.current = createCityAmbience();
			api.current.unlock();
			api.current.setNight(nightRef.current);
			api.current.setWeather(weatherRef.current);
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
		api.current?.setWeather(weather);
		api.current?.setLevel(!on ? 0 : ducked ? .22 : 1);
	}, [
		night,
		on,
		ducked,
		weather
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
			HUMAN_M / 2,
			0
		],
		scale: [
			HUMAN_W,
			HUMAN_M,
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
function WeatherField({ weather, anchor }) {
	const count = weather === "storm" ? 1100 : weather === "rain" ? 640 : weather === "dust" ? 420 : weather === "wind" ? 180 : 0;
	const ref = (0, import_react.useRef)(null);
	const geo = (0, import_react.useMemo)(() => {
		const g = new BufferGeometry();
		const pos = new Float32Array(Math.max(count, 1) * 3);
		for (let i = 0; i < count; i++) {
			pos[i * 3] = (Math.random() - .5) * 42;
			pos[i * 3 + 1] = Math.random() * 16;
			pos[i * 3 + 2] = (Math.random() - .5) * 42;
		}
		g.setAttribute("position", new BufferAttribute(pos, 3));
		return g;
	}, [count]);
	useFrame((_, raw) => {
		const pts = ref.current;
		if (!pts || count === 0) return;
		const dt = Math.min(raw, .05);
		const fall = weather === "dust" ? .8 : weather === "wind" ? .35 : weather === "storm" ? 16 : 9;
		const drift = weather === "dust" || weather === "wind" ? 6 : 1.4;
		const attr = pts.geometry.getAttribute("position");
		const arr = attr.array;
		for (let i = 0; i < count; i++) {
			arr[i * 3] += drift * dt;
			arr[i * 3 + 1] -= fall * dt;
			if (arr[i * 3] > 22) arr[i * 3] -= 44;
			if (arr[i * 3 + 1] < .15) {
				arr[i * 3] = (Math.random() - .5) * 42;
				arr[i * 3 + 1] = 10 + Math.random() * 8;
				arr[i * 3 + 2] = (Math.random() - .5) * 42;
			}
		}
		attr.needsUpdate = true;
		const p = anchor.current;
		if (p) pts.position.set(p.x, 0, p.z);
	});
	if (count === 0) return null;
	const dust = weather === "dust" || weather === "wind";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("points", {
		ref,
		geometry: geo,
		frustumCulled: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			color: dust ? "#c6a67a" : "#b7c6d2",
			size: dust ? .09 : weather === "storm" ? .05 : .032,
			transparent: true,
			opacity: dust ? .42 : .72,
			depthWrite: false,
			sizeAttenuation: true
		})
	});
}
function Rig({ life, disabled, onArrive, onWalkTick, onInspect, onStreetContact, onTalk, onNear, onCombatHex, walkTo, inspecting, injected }) {
	const player = (0, import_react.useRef)(new Vector3(life.posX, 0, life.posZ));
	const pawn = (0, import_react.useRef)(null);
	const lifeRef = (0, import_react.useRef)(life);
	const pausedRef = (0, import_react.useRef)(false);
	const hiddenRef = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	lifeRef.current = life;
	pausedRef.current = Boolean(disabled);
	hiddenRef.current = new Set(life.combat?.onMap ? life.combat.combatants.filter((c) => !c.player).map((c) => c.id) : []);
	const yaw = (0, import_react.useRef)(Math.PI);
	const speed = (0, import_react.useRef)(0);
	const target = (0, import_react.useRef)(null);
	const walked = (0, import_react.useRef)(0);
	const lastDistrict = (0, import_react.useRef)(life.district);
	const keysOf = useHeldKeys(injected);
	const { camera } = useThree();
	const sky = skyNow(life.day, life.hour);
	const weather = weatherAt(life.day, life.hour);
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
		const pace = SPEED * paceOf(weather);
		speed.current = move * pace;
		if (move) {
			player.current.x += fx * pace * dt * (move > 0 ? 1 : .65);
			player.current.z += fz * pace * dt * (move > 0 ? 1 : .65);
			walked.current += pace * dt;
		}
		if (pawn.current) pawn.current.position.set(player.current.x, HUMAN_M / 2, player.current.z);
		camDesired.set(player.current.x - fx * 10, 4.8, player.current.z - fz * 10);
		camera.position.lerp(camDesired, 1 - Math.exp(-3.2 * dt));
		lookAt.set(player.current.x + fx * 14, 2.4, player.current.z + fz * 14);
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
				sky.fogNear,
				sky.fogFar
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			sky.sky,
			"#3a322c",
			night ? .38 : .7
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				40,
				60,
				18
			],
			intensity: night ? .28 : .55 + sky.sun * .85,
			color: weather === "rain" || weather === "storm" ? "#c5d0dc" : sky.sun > .6 ? "#fff4dc" : "#ff8a4a"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-24,
				18,
				-30
			],
			intensity: night ? .12 : .28,
			color: "#d5e0ea"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: night ? .2 : .28 + sky.sun * .12 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherField, {
			weather,
			anchor: player
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityBlocks, {
			night,
			weather,
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
			onTalk,
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
function RenoCity3D({ life, disabled, onArrive, onWalkTick, onInspect, onStreetContact, onTalk, onCombatHex, walkTo, inspecting }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [near, setNear] = (0, import_react.useState)("Citizens, independents, families, police.");
	const injected = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => setReady(true), []);
	const district = DISTRICT_BY_ID[life.district];
	const night = isNight(life);
	const zone = zoneAt(life.posX, life.posZ);
	const danger = dangerOf(zone, night);
	const sound = useCityAmbience(night, Boolean(disabled), weatherAt(life.day, life.hour));
	const weather = weatherAt(life.day, life.hour);
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
						0,
						3,
						8
					],
					fov: 50,
					near: .2,
					far: 2800
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
						onTalk,
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
								night ? "neon night" : "day",
								" · ",
								weather
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-[18rem] font-mono text-[10px] leading-snug text-muted",
							children: weatherLine(weather)
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
						children: ["Click a person · click a block · WASD · rings mark who they belong to", life.combat?.onMap ? " · hexes are this street, turn-based" : ""]
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
	const height = unit.dead ? .42 : unit.down ? 1.05 : 1.85;
	const wide = unit.dead ? 1.7 : .95;
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Billboard, {
				position: [
					0,
					unit.dead ? .28 : .95,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [wide, height] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					map: tex,
					transparent: true,
					alphaTest: .12,
					toneMapped: false,
					side: 2
				})] }), unit.dead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.05,
						.02,
						.02
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.38, .38] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
						map: woundTexture(),
						transparent: true,
						depthWrite: false,
						toneMapped: false
					})]
				}) : null]
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
var ctx = null;
/** A short crack. Synthesized. No samples. */
function playGunshot() {
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return;
	if (!ctx) ctx = new AC();
	if (ctx.state === "suspended") ctx.resume();
	const t = ctx.currentTime;
	const dur = .09;
	const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
	const data = buf.getChannelData(0);
	for (let i = 0; i < data.length; i++) {
		const env = (1 - i / data.length) ** 2.4;
		data[i] = (Math.random() * 2 - 1) * env;
	}
	const src = ctx.createBufferSource();
	src.buffer = buf;
	const hp = ctx.createBiquadFilter();
	hp.type = "highpass";
	hp.frequency.value = 1100;
	const g = ctx.createGain();
	g.gain.setValueAtTime(.42, t);
	g.gain.exponentialRampToValueAtTime(.001, t + dur);
	src.connect(hp);
	hp.connect(g);
	g.connect(ctx.destination);
	src.start(t);
	const osc = ctx.createOscillator();
	osc.type = "sine";
	osc.frequency.setValueAtTime(160, t);
	osc.frequency.exponentialRampToValueAtTime(42, t + .07);
	const og = ctx.createGain();
	og.gain.setValueAtTime(.32, t);
	og.gain.exponentialRampToValueAtTime(.001, t + .08);
	osc.connect(og);
	og.connect(ctx.destination);
	osc.start(t);
	osc.stop(t + .09);
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
	const heard = (0, import_react.useRef)(combat.bangs ?? 0);
	(0, import_react.useEffect)(() => {
		const n = combat.bangs ?? 0;
		const extra = n - heard.current;
		heard.current = n;
		for (let i = 0; i < extra; i++) window.setTimeout(() => playGunshot(), i * 80);
	}, [combat.bangs]);
	const table = player?.weaponSkill === "unarmed" || player?.weaponSkill === "melee" ? AIMED_MELEE : AIMED_RANGED;
	const tokens = FOE_TOKEN;
	const activeId = combat.order[combat.turn];
	const active = combat.combatants.find((c) => c.id === activeId);
	const units = combat.combatants.filter((c) => !c.fled).map((c) => ({
		id: c.id,
		q: c.hexQ,
		r: c.hexR,
		label: c.hp <= 0 ? "Dead" : c.player ? "You" : c.name.split(" ")[0] ?? c.name,
		player: c.player,
		side: sideOf(c),
		hp: c.hp,
		hpMax: c.hpMax,
		down: c.down || c.hp <= 0,
		dead: c.hp <= 0,
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
	if (node === "room-fly") return [
		{
			id: "ceiling",
			text: "Stay in it.",
			next: "room-fly-ceiling"
		},
		{
			id: "window",
			text: "The street.",
			next: "room-fly-street"
		},
		{
			id: "enough",
			text: "That's enough.",
			next: "room-jet-down"
		}
	];
	if (node === "room-fly-ceiling") return [
		{
			id: "street",
			text: "What do you see out there?",
			next: "room-fly-street"
		},
		{
			id: "again",
			text: "Another pull.",
			next: "room-fly-again"
		},
		{
			id: "down",
			text: "Let it thin.",
			next: "room-night-jet"
		}
	];
	if (node === "room-fly-street") return [
		{
			id: "again",
			text: "Keep the party going.",
			next: "room-fly-again"
		},
		{
			id: "ride",
			text: "Ride this one out.",
			next: "room-night-jet"
		},
		{
			id: "enough",
			text: "Cap it.",
			next: "room-jet-down"
		}
	];
	if (node === "room-fly-again") return [{
		id: "hours",
		text: "Let the hours go.",
		next: "room-night-jet"
	}, {
		id: "last",
		text: "That was the last one.",
		next: "room-jet-down"
	}];
	if (node === "room-night-jet") return [{
		id: "grey",
		text: "The grey gets in.",
		next: "room-jet-down"
	}];
	if (node === "room-jet-down") return [{
		id: "dawn",
		text: "The light changes.",
		next: "morning-jet"
	}];
	if (node === "room-night") return [{
		id: "dawn",
		text: "The light changes.",
		next: "morning"
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
	if (node === "family") return "Daddy runs the Shark Club the way other men run a temper. He runs the mayor because the mayor likes a carpet and a check. He talks about NCR like it's a casino he hasn't bought yet, and he smiles when he says the word seat, like a seat is a thing you take off a man. Mother drinks on the third floor and tells anyone who will hold a glass that Angela is the problem. She isn't wrong, and she isn't interesting. The band plays the same three numbers. The tourists lose the same money. And me? I stand on the rail and wait for the ceiling to be worth looking at.";
	if (node === "john") return "Mr. Bishop wants a man in NCR dead and a vault city that learns the word please. He doesn't shout it. He says it the way he orders a drink, and the man across the table laughs because laughing is cheaper than understanding. You work for him, you don't ask twice, and you don't bring the answer up the guest stair. The guest stair is for people he intends to be seen with. I'm not one of those unless he's showing the room he has a daughter.";
	if (node === "leslie") return "Leslie Anne Bishop. Mother. She'll take your arm at the rail and your whole evening if you let her, and somewhere between the second song and the third she'll tell you Angela is the problem in this family. The dress is wrong. The hour is wrong. The company is wrong. She drinks until the band gives up and then she goes to her room and leaves the door a finger open so the hall knows she's suffering. Two doors down from mine. I use the service stair so I don't have to pass the performance.";
	if (node === "ncr") return "NCR. Cattle, paper, a president named Tandi that Daddy talks about like a meal he hasn't ordered yet. They send men in clean boots to lose money on our felt and call it diplomacy. The other families want Daddy in a hole instead of in a senate. The Mordinos would do it with Jet. The Wrights would do it with a still and a grudge. Salvatore would do it quietly and then deny the noise. Guess which one is more honest. None of them. Honesty doesn't pay the band.";
	if (node === "enforcer") return "Enforcer, whore… what's the difference, from up here? You work for him, which means the building already decided you can stand on this carpet. That means you work for ME when I'm the one talking. Don't look at Mason like he'll save you. Mason works the door. I work the boredom. You better do what I say, and I say if you're going to be in my night you're going to be in it properly. You coming, or are you another suit that only knows the guest stair?";
	if (node === "jet") return "Look. I got some Jet in my room. Not the paper wraps they push at the Desperado. Not the cough they sell to junkies off Virgin Street who think a bad night is a personality. Mine's in glass. Myron pretends he invented the sky and the Bishops pretend we don't buy the part of the sky that doesn't make you stupid. You fly on this, you remember the ceiling. The band turns into weather. The Shark Club gets small enough to live in. Y'wanna fly, or you gonna stand there and be careful?";
	if (node === "dad-jet") return "He doesn't care. (She shrugs, and the shrug is the whole policy.) Daddy cares who walks in the front, who leaves with an envelope, who says Tandi's name too loud. What his daughter does with a clean inhaler behind a crooked painting is not a family meeting. Mother would care, which is why Mother doesn't get a key to that safe. (Frowns.) Look. You wanna come fly with me or what? I'm not doing the speech twice.";
	if (node === "fame") return "The Ring. I heard. They like a body that can still stand when the purse is counted. Don't confuse that with this room. The locker room smells like other people's blood and the third floor smells like a decision I already made. You can tell me about the card later, if you're still boring enough to remember it. Don't bleed on the sheets. Don't bleed on the chair. The chair is the only honest seat in the Shark Club.";
	if (node === "upstairs") {
		if (c.life.angela.slept) return "She doesn't do the speech this time. The rail, the service stair, the red runner worn bright by hands that had somewhere else to be. She doesn't look back to see if you remember the way. Third floor. The door with the small letter B, and under it the quiet the Shark Club only spends on family. She fits the key and waits, one heel already bored of the carpet. The band is a different number than last time and the same number anyway. You coming, or did you climb all this just to be careful in a hallway?";
		return "The rail drops behind you. The band is still on the second number, brass too loud for the size of the truth, when she takes the service stair instead of the guest one. Red runner. A rail polished by people who were not invited to be seen. She doesn't look back. A maid's cart thinks about the landing and decides against it. Third floor. A door with a small letter B, and under it the kind of quiet money buys when it doesn't want a witness. She turns the key like she has done it a thousand times and is bored of every one of them. Don't touch the guest stair on the way out, she says. Mason counts faces. I don't.";
	}
	if (node === "room") return "The room is bigger than the rail made you think, and meaner. A bed that could sleep a delegation and hasn't been asked to. The spread is straight. Nobody has sat on it tonight and she doesn't look at it like a plan. Curtains the color of the carpet downstairs, heavy enough to fake a private life if you believe in curtains. Neon from Virgin Street leaks the edge of the glass and paints the ceiling pink, then blue, then pink again, a slow tide that doesn't care who owns the building. A vanity. A cracked gold mirror that tells the truth a thumb's width wrong. One heel is already off, abandoned like a decision. On the far wall a painting of the Shark Club hangs crooked on purpose. The floor noise arrives as a dull drum through the carpet: chips, a laugh that loses, brass. She sets the key down and finally looks at you. Don't touch anything that looks like my mother's. She counts. The rest of the room is mine, and the rest of the night is the safe behind that painting, if you're not going to waste it.";
	if (node === "room-window") return "She leaves the painting where it is and stands at the glass, one hand on the frame like the city might lean in. Virgin Street is a river of taillights and a horn that loses an argument with a bigger horn. Somewhere under it her father is smiling at a man who will not like the smile in the morning. NCR boots. Hub money. A white car that doesn't belong to anybody honest. Leslie Anne is two doors down, she says, and she doesn't lower her voice for it. She drinks until the band stops and then she tells people I'm the problem. The mayor comes up the guest stair with his please already written. I use the other one. That's the whole empire. A carpet, a smile, and a door I'm not supposed to open unless I'm showing off. Her breath fogs a coin of the pane and she wipes it like it offended her. You can hear the party from here if you call the band a party. I don't. The party is in the wall, and it doesn't start until that painting moves.";
	if (node === "room-chair") return "You take the chair by the vanity. The mirror puts a crack through your face and leaves hers expensive. She paces the carpet barefoot, the second heel abandoned near the bed she does not sit on and does not offer. She talks the way people talk when the door is shut and the family name is still in the hall, listening. A dealer who cried in the lobby because the table was honest for once. A dress her mother hated on sight, which is why she's wearing the idea of it. A Wright funeral she is not allowed to mention, and the way the second floor goes quiet when John Bishop walks the rail, like quiet is a tax. None of it is a secret. All of it is the kind of talk that gets repeated wrong by morning. She stops at the bedpost, looks at the painting, looks at you. You can stay until the light changes and be a person in a chair. Or you can be smart and leave before Mason counts the stairs. Or you can ask about the thing the painting is hiding. I'm bored of the chair already. The chair is what careful people do.";
	if (node === "room-safe") return "She tips the painting. The safe is small, brass, set in the wall like the room was built around a secret and then got embarrassed about it. The combination is short enough that she doesn't hide her hand. Inside: glass, not the paper wraps they sell at the Desperado to people who want to look dangerous. A clean inhaler, the kind Myron pretends he invented in a lab and the Bishops pretend they don't buy better than the street. A second one behind it, capped, patient. The neon catches the glass and puts a green coin on her knuckle. She holds the first between two fingers like a cigarette she hasn't decided to light, and for a second the bored daughter is gone and what's left is someone who knows exactly how her night is supposed to go. This isn't the dimestore cut. You fly on this, you remember the ceiling. The band downstairs turns into weather. The Shark Club gets the size of this room and then smaller than that. Virgin Street keeps moving and you don't have to be in it. She looks at the bed, dismisses it, looks at the chair, dismisses that too. The party isn't furniture. You want it, or not?";
	if (node === "room-fly") return "The inhaler is cold against your mouth and then it isn't. The hit is not the street hit. Street Jet grabs you by the ribs and spends you. This one opens a door in the air and leaves it open. The ceiling lifts half an inch and decides to stay there. Pink neon slows down and becomes a tide across the cracked mirror, blue following it like a second thought. The brass lamp ticks, once, and the tick lasts longer than a tick should. She takes her own pull without ceremony, the way you take a key you own, and the careful performance drops off her shoulders. She doesn't sit on the bed. She laughs once, short, at nothing you said. There, she says, quiet for the first time all night. Now the Shark Club can be boring without it hurting. The safe door stays open. The carpet remembers your weight a second too long. The band is weather. Your hands are a rumor. She watches the ceiling like it finally did something right. This is the party. Not the rail. Not Mother's glass. This. You can stay up here with it, or you can look at the street while it still has colors.";
	if (node === "room-fly-ceiling") return "The ceiling is a country. The crack in the plaster is a road and the road goes nowhere you have to walk. Time stops being a clock and becomes the space between the lamp's ticks. She talks, and the words arrive a moment after her mouth, which she finds funny and then forgets. Daddy's smile. The mayor's please. A man at the high-limit table who will go home poorer and tell the story wrong. She names them like cards and doesn't care who wins. Myron thinks this is chemistry, she says. It isn't. Chemistry is what they sell to people who have to work in the morning. This is the only hour in the building that isn't for sale. Her eyes are bright and far. The gown is still the gown. The bed is still made. She is on the floor now because the chair was a theory and the floor is honest. If you want the street, the window is still a window. If you want another pull, the safe didn't lock itself. If you want to be sensible, be sensible later. Sensible is how Mother lives.";
	if (node === "room-fly-street") return "The glass is cold when you find it. Virgin Street has been edited. The taillights are long as banners. A horn starts and never quite finishes. She comes to the window because you did, not because the city asked, and she names the cars the way a bored heiress names people she doesn't intend to remember. Bishop black, that's ours, don't wave. Mordino red, if it's coughing it's theirs. A white one that doesn't belong to anybody honest, which means NCR or a man who wishes he was. Hub money walks like the sidewalk is a favor. She puts two fingers on the pane and the neon climbs them, pink then blue. Downstairs they are losing chips and calling it a night out. Up here the night is the size of the dose. She is not performing the daughter. She is not performing anything. For a while she doesn't talk, and the not-talking is the kindest thing she's done since the rail. The party can take another pull, she says, almost idle. Or it can be this, the street doing the work, until the colors start telling the truth again. Your call. I'm already where I meant to be.";
	if (node === "room-fly-again") return "The second one is ruder. She warned you with her eyebrows and then didn't wait to see if you were noble about it. The ceiling, which had settled into a country, lifts again and this time it takes the mirror with it. Your mouth is dry in a way that feels like a fact from another year. She caps the first inhaler, opens the second, and shares it without a toast. Toasts are for the guest stair. The band drops out of the building entirely. What replaces it is the radiator, the curtain breathing, a cart in the hall that thinks better of the door and keeps thinking. She sits with her back to the bed that still has not been disturbed, knees up, the gown pooled, and she tells you one true thing and then gets bored of truth. I don't want the morning, she says. The morning is when Daddy counts faces and Mother counts mistakes and I go back to being furniture with a mouth. So don't be boring about the next few hours. Be here. The Jet will do the rest until it doesn't.";
	if (node === "room-night") return "You stay, and you stay sober, which she allows the way she allows a closed window. The band downstairs changes songs twice and then plays the first one again like nobody would dare correct it. A car on Virgin Street argues with a horn and loses. She kills the lamp and leaves the neon to do the work, pink then blue then pink, a slow pulse on the gold mirror. For a while neither of you performs. She tells you the mayor's please, and the funeral she isn't supposed to mention, and a dealer who cried, and then she stops telling you things, which costs her something she won't name. The chair is worse than it looks. The city keeps a hand on the window. She does not offer the safe again. She does not sit on the bed. Somewhere near the grey she says, almost kind, and kindness on her sounds like a dialect, Don't be here when the maids come. Daddy counts faces. The painting stays crooked. The night was a conversation. That's all she was willing to spend without the glass.";
	if (node === "room-night-jet") return "Hours lose their edges and then lose the idea of edges. The carpet breathes once and decides against it. She stays on the floor with her back to the unused bed and names whatever the window gives her, then names it wrong on purpose, then laughs at the wrongness and lets it go. Bishop black. Mordino red. A white honesty that isn't. You come down in pieces. Mouth dry. The lamp is too bright when a car's headlights find the crack in the curtain, and she leaves every light off except the city. The safe is still open like a mouth that forgot to close. She talks less. What she does say is smaller. A dress. A funeral. The service stair. Don't repeat any of it, she says, not as a threat, as a fact. Threats are Mason's job. Downstairs the band has either stopped or become part of the building. You couldn't swear which. The party is the long middle of the dose, and the middle is ending whether you vote or not.";
	if (node === "room-jet-down") return "The comedown is polite and then it isn't. Color drains out of the mirror first, then out of her voice. The ceiling is a ceiling. The ticks are ticks. Your tongue feels borrowed. She caps whatever is still open and sets the glass in the safe with more care than she gave the conversation, then she tips the painting toward straight and doesn't quite finish the job. Dawn is a grey line under the curtain, thin as a lie. She is already bored of the person she was at midnight, and she looks at you like you might become a story if you stay too long in the chair. One spare sits by your coat. She puts it there without commentary, a tip she will deny in the daylight if anyone is stupid enough to ask. Don't be here when the maids come, she says again, or maybe she only says it once and the Jet kept it. Daddy counts faces. I don't feel like being counted. The bed is still made. That part she seems, faintly, to respect.";
	if (node === "morning") return "You wake in the chair, neck wrong, Virgin Street gone the color of tin. Angela is not in the room. The bed is turned down at one corner and unused, a maid's idea of a night that didn't happen. The painting hangs straight. The safe is a rumor behind it. The key is gone from the vanity. A cart ticks in the hall and then thinks better of this door, the way carts do when the family name is on the other side. On a Shark Club card, in a hand that learned penmanship to annoy someone: Don't be boring about it. The neon is dead. The mirror is just a mirror, crack and all. The room smells like her perfume and like nothing else. No glass. No second story. You were a person in a chair until the light changed, and the building has already filed you under not a problem.";
	if (node === "morning-jet") return "You wake on the far side of the night, mouth dry, the lamp too honest, the chair remembering you better than the room does. Angela is gone. The safe is shut. The painting is straight, or straight enough that a maid won't report it. The bed is still made on the side nobody used. One capped inhaler sits in your coat like she meant the pocket and not the person. The card on the vanity says what she says when she doesn't want a scene. Don't be boring about it. Your head disagrees, politely, for about an hour, and then less politely. Grey light. A cart in the hall. The third floor pretending it slept. Downstairs someone is already counting last night's chips, and none of those chips are this. The party was the glass and the ceiling and the hours that wouldn't keep their shape. The morning is the Shark Club again. You take the service stair. The guest stair is for people who want to be seen leaving.";
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
function hourIn(hour, from, to) {
	if (from === to) return true;
	if (from < to) return hour >= from && hour < to;
	return hour >= from || hour < to;
}
function present(ctx, id) {
	return (ctx.absent[id] ?? 0) <= ctx.day;
}
function anySoul(ctx, pred) {
	return SOULS.some((s) => present(ctx, s.id) && pred(s.id, s.role, s.gang));
}
function indoors(...uses) {
	return (ctx) => ctx.inside != null && uses.includes(ctx.inside);
}
function exterior(ctx) {
	return ctx.inside == null;
}
function notTheseInteriors(ctx, banned) {
	return ctx.inside == null || !banned.includes(ctx.inside);
}
var QUIET_ROOMS = [
	"tenement",
	"shack",
	"office",
	"crypt",
	"shop",
	"pawn"
];
var DEFS = [
	{
		id: "jet-handoff",
		location: (ctx) => (ctx.district === "chop" || ctx.district === "rail" || ctx.district === "mordino" || ctx.district === "stables") && (exterior(ctx) || indoors("warehouse", "rail", "bar")(ctx)),
		time: (ctx) => hourIn(ctx.hour, 15, 22),
		activity: (ctx) => ctx.activity !== "sleep",
		faction: () => true,
		story: (ctx) => ctx.story.jetRun === "moving" || ctx.story.jetRun === "loaded",
		actors: (ctx) => anySoul(ctx, (_id, role, gang) => role === "courier" && gang === "mordinos"),
		build: (ctx) => ({
			id: "jet-handoff",
			reason: ctx.story.jetRun === "loaded" ? "The Jet is racked at the Stables. You walked into the room where it waits, not a dice roll." : "The Jet case is on this route. The courier was already walking it.",
			setting: ctx.district === "rail" || ctx.zone === "industrial" ? "rail" : "yard",
			foeKinds: ["mordino", "dealer"],
			allyKinds: ctx.gangId === "mordinos" ? ["mordino"] : [],
			cause: "crime",
			pressure: 22
		})
	},
	{
		id: "missing-courier",
		location: (ctx) => (ctx.district === "bishop" || ctx.district === "shark" || ctx.district === "virgin" || ctx.district === "rail") && exterior(ctx),
		time: () => true,
		activity: (ctx) => ctx.activity === "wander" || ctx.activity === "travel",
		faction: () => true,
		story: (ctx) => ctx.story.courierMissing,
		actors: (ctx) => !present(ctx, "mickey"),
		build: () => ({
			id: "missing-courier",
			reason: "Mickey Shaw is not on his route. Someone else is holding the Bishop envelope.",
			setting: "street",
			foeKinds: ["tough", "mordino"],
			allyKinds: [],
			cause: "crime",
			pressure: 18
		})
	},
	{
		id: "salvatore-crate",
		location: (ctx) => {
			if (ctx.story.enclaveCrate === "rail") return (ctx.district === "rail" || ctx.zone === "industrial") && (exterior(ctx) || indoors("warehouse", "rail")(ctx));
			if (ctx.story.enclaveCrate === "bar") return ctx.district === "salvatore" && (exterior(ctx) || indoors("bar")(ctx));
			return false;
		},
		time: () => true,
		activity: (ctx) => ctx.activity !== "sleep",
		faction: () => true,
		story: (ctx) => ctx.story.enclaveCrate === "rail" || ctx.story.enclaveCrate === "bar",
		actors: (ctx) => anySoul(ctx, (_id, role, gang) => gang === "salvatores" && (role === "collector" || role === "assassin")),
		build: (ctx) => ({
			id: "salvatore-crate",
			reason: ctx.story.enclaveCrate === "rail" ? "Salvatore's crate is in the yard. The hum is the story. You are standing next to it." : "The crate is inside Salvatore's. Mason's people do not like a second set of eyes.",
			setting: ctx.story.enclaveCrate === "rail" ? "rail" : "casino",
			foeKinds: ["salvatore", "merc"],
			allyKinds: ctx.gangId === "salvatores" ? ["salvatore"] : [],
			cause: "crime",
			pressure: 16
		})
	},
	{
		id: "collection",
		location: (ctx) => exterior(ctx) && (ctx.district === "virgin" || ctx.district === "market" || ctx.district === "desperado" || ctx.district === "jungle" || ctx.district === "shark" || ctx.zone === "outskirts") && ctx.zone !== "wild",
		time: (ctx) => hourIn(ctx.hour, 11, 19),
		activity: (ctx) => ctx.activity === "wander" || ctx.activity === "travel" || ctx.activity === "work",
		faction: (ctx) => ctx.tension >= 12 || ctx.district === "jungle" || ctx.zone === "outskirts",
		story: () => true,
		actors: (ctx) => anySoul(ctx, (_id, role) => role === "collector"),
		build: (ctx) => {
			const gang = DISTRICT_BY_ID[ctx.district].gang ?? (ctx.zone === "strip" || ctx.district === "shark" ? "bishops" : "mordinos");
			return {
				id: "collection",
				reason: "A collector is at a business that owes. You walked into the collection, not a random alley.",
				setting: "street",
				foeKinds: [gang === "wrights" ? "wright" : gang === "salvatores" ? "salvatore" : gang === "bishops" ? "bishop" : "mordino", "tough"],
				allyKinds: ctx.gangId && ctx.gangId !== gang ? [] : [],
				cause: "crime",
				pressure: 8
			};
		}
	},
	{
		id: "casino-argument",
		location: (ctx) => {
			if (!notTheseInteriors(ctx, QUIET_ROOMS)) return false;
			if (indoors("tenement", "shack", "warehouse", "crypt", "office")(ctx)) return false;
			if (ctx.inside === "casino" || ctx.inside === "bar") return true;
			if (ctx.inside != null) return false;
			return ctx.zone === "strip" || ctx.district === "shark" || ctx.district === "desperado" || ctx.district === "mordino" || ctx.district === "virgin" || ctx.zone === "outskirts" && ctx.night;
		},
		time: (ctx) => ctx.night || ctx.inside === "casino" || ctx.inside === "bar",
		activity: (ctx) => ctx.activity !== "sleep" || ctx.inside === "casino",
		faction: () => true,
		story: () => true,
		actors: () => true,
		build: (ctx) => ({
			id: "casino-argument",
			reason: "A mark on the felt says the shoe is short. Floor men are already standing. This is a casino floor, not a walk-up.",
			setting: ctx.inside === "bar" ? "casino" : "casino",
			foeKinds: ["cheat", "bouncer"],
			allyKinds: [],
			cause: "hunt",
			pressure: 6
		})
	},
	{
		id: "alley-dealer",
		location: (ctx) => exterior(ctx) && (ctx.zone === "alley" || ctx.zone === "outskirts" || ctx.zone === "industrial" || ctx.district === "market"),
		time: (ctx) => ctx.night || ctx.district === "market",
		activity: (ctx) => ctx.activity === "wander" || ctx.activity === "travel",
		faction: () => true,
		story: (ctx) => ctx.story.jetRun !== "cooking" || ctx.night,
		actors: (ctx) => anySoul(ctx, (_id, role) => role === "dealer"),
		build: () => ({
			id: "alley-dealer",
			reason: "A runner is waiting on a buyer. You walked into the handoff.",
			setting: "alley",
			foeKinds: ["dealer", "junkie"],
			allyKinds: [],
			cause: "crime",
			pressure: 10
		})
	},
	{
		id: "hotel-lot",
		location: (ctx) => (ctx.zone === "motel" || ctx.district === "motel" || ctx.inside === "motel") && ctx.inside !== "casino" && ctx.inside !== "tenement",
		time: (ctx) => ctx.night || ctx.inside === "motel",
		activity: (ctx) => ctx.activity !== "sleep" || ctx.inside === "motel",
		faction: () => true,
		story: () => true,
		actors: (ctx) => anySoul(ctx, (id, role) => role === "guest" || role === "tourist" || role === "porter" || id === "nix" || role === "dealer"),
		build: (ctx) => ({
			id: "hotel-lot",
			reason: ctx.inside === "motel" ? "The hall argument is about a key that does not match the room. It started before you opened the door." : "A guest from the Desert Rose is loud at the stairs about the rate. The lot was already doing this.",
			setting: "motel",
			foeKinds: ctx.night ? ["john", "pimp"] : ["john"],
			allyKinds: [],
			cause: "hunt",
			pressure: ctx.inside === "motel" ? 8 : 4
		})
	},
	{
		id: "patrol-stop",
		location: (ctx) => exterior(ctx) && (ctx.zone === "strip" || ctx.district === "virgin" || ctx.district === "shark" || ctx.district === "desperado"),
		time: (ctx) => hourIn(ctx.hour, 6, 10) || hourIn(ctx.hour, 18, 23),
		activity: (ctx) => ctx.activity === "wander" || ctx.activity === "travel",
		faction: (ctx) => ctx.warrant >= 12 || ctx.heat >= 45,
		story: () => true,
		actors: (ctx) => anySoul(ctx, (_id, role) => role === "police"),
		build: () => ({
			id: "patrol-stop",
			reason: "Evening patrol, or what is left of the morning one. Your name is why they stopped. Not a timer.",
			setting: "street",
			foeKinds: ["cop"],
			allyKinds: [],
			cause: "hunt",
			pressure: 14
		})
	},
	{
		id: "bar-drunk",
		location: (ctx) => {
			if (ctx.inside === "bar") return true;
			if (ctx.inside != null) return false;
			return ctx.night && (ctx.zone === "strip" || ctx.district === "salvatore" || ctx.district === "mordino" || ctx.district === "stables");
		},
		time: (ctx) => ctx.night || ctx.inside === "bar",
		activity: (ctx) => ctx.activity !== "sleep",
		faction: () => true,
		story: () => true,
		actors: () => true,
		build: () => ({
			id: "bar-drunk",
			reason: "The bar is doing what a New Reno bar does after dark. He was already drunk when you sat down.",
			setting: "casino",
			foeKinds: ["drunk"],
			allyKinds: [],
			cause: "hunt",
			pressure: 4
		})
	},
	{
		id: "doorway-night",
		location: (ctx) => exterior(ctx) && (ctx.zone === "alley" || ctx.zone === "outskirts" || ctx.zone === "wild" || ctx.zone === "industrial"),
		time: (ctx) => ctx.night,
		activity: (ctx) => ctx.activity === "sleep",
		faction: () => true,
		story: () => true,
		actors: () => true,
		build: (ctx) => ({
			id: "doorway-night",
			reason: ctx.zone === "wild" ? "You slept where the ground is wrong. What walks Golgotha was already walking." : "A boot finds you because this block does not let strangers sleep on it.",
			setting: ctx.zone === "wild" ? "crypt" : ctx.zone === "industrial" ? "rail" : "alley",
			foeKinds: ctx.zone === "wild" ? ["ghoul"] : ["tough"],
			allyKinds: [],
			cause: "hunt",
			pressure: 12
		})
	}
];
/**
* EVENT → location → time → activity → faction → story → actors.
* No match means nothing happens. A clock is not a reason.
*/
function selectEncounter(ctx) {
	for (const def of DEFS) {
		if (!def.location(ctx)) continue;
		if (!def.time(ctx)) continue;
		if (!def.activity(ctx)) continue;
		if (!def.faction(ctx)) continue;
		if (!def.story(ctx)) continue;
		if (!def.actors(ctx)) continue;
		return def.build(ctx);
	}
	return null;
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
		office: [`${name} has carpet and a secretary. The gun is in the drawer, not on the desk.`, `The polite floor stays lit. ${name} does not do night business with strangers.`],
		club: [`${name} in the afternoon is chairs on tables and a band that is not awake. The stage is a stage.`, `${name} after dark. A floor show, a horn, a minimum at the door. The highway people came for this and not for a room.`],
		gas: [`${name}. Two pumps, a dog, a clerk who can point at Reno and also point away from it.`, `${name} under a bulb. Travelers who will not give a name. The desert starts at the edge of the apron.`]
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
var ON = (hour) => hour >= 18 || hour < 5;
/** Curb talk is free. The next click, if she is working and you can pay, is the hour. */
function walkerBeat(soul, life, last) {
	const price = soul.price ?? 40;
	const working = ON(life.hour);
	const ready = last === "heard the rate" || last === "took the hour";
	if (!working) return {
		last: "caught her off the walk",
		lines: OFF[soul.id] ?? [`${soul.name} is not dressed for the street. The room behind her is a room, not a rate.`, "Come back when the neon is doing the advertising. She will not do it in daylight for you."]
	};
	if (ready && life.caps >= price) return {
		last: "took the hour",
		spend: price,
		lines: DATE[soul.id] ?? DATE.pearl
	};
	if (ready && life.caps < price) return {
		last: "heard the rate",
		lines: [`${soul.name} counts what you showed her and does not take it.`, `The hour is ${price} caps. You have ${life.caps}. Talk stays free. She does not extend credit to a face she just met.`]
	};
	return {
		last: "heard the rate",
		lines: CURB[soul.id] ?? [`${soul.name} tells you the rate is ${price}. Talk is free. Click her again if you want the hour.`]
	};
}
var CURB = {
	pearl: [
		"Pearl Quinn keeps one shoulder to the motel lamp and the other to the stair. She has been out here long enough that the neon no longer flatters her, and she has stopped asking it to.",
		"\"Talk is free,\" she says. \"People think that means I want a story. I don't. I want to know if you're the kind who pays before or the kind who explains after. The second kind walks.\"",
		"She tells you Calico takes his cut off the top of the night, not off the top of her mood. A john in a hat paid forty and argued about the change. She let him argue. The door still closed.",
		"If you want the hour, it is forty caps, upstairs, no tour of the room and no second rate once the door is shut. Click her again. If you only wanted the curb, you have had it."
	],
	dollie: [
		"Dollie Shaw laughs before she finishes a sentence, which makes the sentence cheaper than it is. Virgin Street traffic keeps trying to include her. She steps out of it without looking.",
		"\"You can stand here,\" she says. \"Standing is the advertisement. The conversation is what you do when you are not ready to be embarrassed in a hallway.\"",
		"She knows which doormen are Bishop and which are only dressed like it. She knows the train times better than the tourists do, because the train is how a man leaves without paying the second drink.",
		"The hour is fifty-five. She says it like a joke and then does not smile. Click her again if that number is real. Otherwise keep walking. The street is full of people who confuse talking with rent."
	],
	marisol: [
		"Marisol Vega smells like the Desperado's back door, which is cigarettes and the lemon soap the bar uses to lie about the floor. She speaks carefully, as if the price might be overheard by someone who would tax it.",
		"\"I am not lost,\" she says, because men keep offering to show her a city she already works. \"If you want directions, buy them from the man with the hat. If you want me, say so without the tour.\"",
		"She tells you the alley is safer than the front because the front belongs to whoever is winning cards. The alley belongs to people who already decided. Nix does not own this corner. She says that twice.",
		"Forty-five caps. One hour. She will not go to a room you will not name. Click her again when the caps are in your hand, not in a story about caps."
	],
	kit: [
		"Kit Abel has engine grease on one cuff and a dress that has survived the cuff. The Chop Shop lights make everyone look like a part. She looks like the person who decides which part is worth keeping.",
		"\"Don't ask me what a nice girl is doing here,\" she says. \"Ask me what the hour costs, or ask me which bay is stealing radiators. I answer one of those for free.\"",
		"She talks about the men who come off the late freight and want a room that is not a berth. Some of them are gentle. Some of them are not. She has a rule about the second kind that ends with her still being here and them not.",
		"Thirty-five. She is cheaper than the Strip because the Strip has a carpet and she has a lock that works. Click her again. Bring the thirty-five. Leave the speech."
	],
	faye: [
		"Faye Brin stands where Salvatore's light almost reaches and then decides not to. She is dressed like the bar's idea of a secret. The secret is that she sets the price and the bar does not.",
		"\"If you are here to be seen with me, you cannot afford to be seen with me,\" she says. \"If you are here for the hour, you can afford the hour or you cannot. The street is a bad place to negotiate a dignity you do not have.\"",
		"She will talk about Mason's people only in the negative. They do not take her cut. They do not use her name. She returns the favor by not using theirs. A cop walked past earlier and found a reason to look at a window.",
		"Eighty caps. That is the number that keeps the wrong customers proud of themselves somewhere else. Click her again if you have it. She will not haggle, and she will not pretend the curb was the product."
	],
	tess: [
		"Tess Harlow has a coat that used to be a blanket and a voice that does not rise for the Jungle, because the Jungle is loud enough. She watches your shoes first. Shoes tell her if you walked here or got lost here.",
		"\"You can talk,\" she says. \"Talk is how I know you aren't about to do something I'll have to survive. The hour is how I eat. Don't mix them up and then act confused.\"",
		"She tells you who on this block will rob you kindly and who will rob you because they are bored. The fires are other people's dinners. She does not eat at them. She eats after the work, in a room with a door.",
		"Twenty-five caps. She says it without apology, which is its own kind of price. Click her again. If you flinch at the number, she would rather you flinched out here."
	]
};
var DATE = {
	pearl: [
		"Pearl takes the forty before she takes the stairs. The bill is older than the joke she does not make. Upstairs the room is narrow, the curtain is a towel, and the lamp is honest about both of you.",
		"She locks the door with a habit, not a performance. Coat on the chair. Shoes left where she can find them if the hall gets loud. She asks, once, if there is anything you will not do. She listens to the answer. Then she stops interviewing you.",
		"The hour is bodies and breath and the motel doing what motels do through the wall: a radio, a laugh, somebody failing to be quiet. Pearl is not theatrical. She is close, specific, and done when she is done. You learn the difference between a woman working and a woman performing work.",
		"After, she sits on the edge of the bed and counts nothing, because she counted at the door. She tells you Calico will see you leave and will not care, provided you leave. \"Don't linger in the lot like you live here,\" she says. \"You don't.\"",
		"You go down cleaner than you came up and poorer by forty. The lamp at the bottom of the stair is still doing its job. Pearl is already looking past you at the sidewalk, which is the job."
	],
	dollie: [
		"Dollie folds the fifty-five into a pocket you do not see twice. She walks you off Virgin Street by a service door, still talking, as if the talking were part of the rent and the quiet would cost extra.",
		"The room is a casino's idea of modest: a bed, a mirror that has seen better guests, a window that refuses to close all the way. She kicks her heels off and becomes, briefly, a person who is not on a sidewalk. \"Clock starts when the door shuts,\" she says, and shuts it.",
		"She is funnier in the room than on the curb, and also less interested in whether you are charmed. The hour is skin and laughter and then not much laughter. She pays attention. That is the surprising part. The city keeps selling the idea that attention is free. It is not. You paid for this.",
		"When the time is gone she is dressed faster than you are. She checks the hall before she checks her hair. \"If you tell it like a story, make yourself braver,\" she says. \"They always do. I don't correct them. Corrections don't pay.\"",
		"Back on the street the neon has not missed you. Dollie is already a step farther from the door than you are. The fifty-five is somewhere in the building, and you are not invited to know which room."
	],
	marisol: [
		"Marisol does not count the forty-five in the alley. She counts it under the bulb inside, where the bills can be seen and the door can be locked in the same minute. \"Good,\" she says, which is the whole receipt.",
		"The room is behind the Desperado and does not belong to the Desperado. A sink, a bed, a chair with a man's coat that is not yours and not hers. She moves the coat without comment. The lemon soap smell is stronger in here. So is the quiet.",
		"She sets the terms with her hands, not a speech. What follows is unhurried and exact. She is not performing the alley. She is spending an hour she sold, and she intends to spend it well enough that you do not become a problem on the way out. You understand, somewhere in it, that competence is the kindness on offer.",
		"After, she washes her wrists and leaves you the towel. She tells you which door puts you on the street and which door puts you back in the card room, where you would have to pretend this was a win. \"Use the street,\" she says. \"You already paid for a private thing. Don't go make it public.\"",
		"The alley is colder than the room. Marisol stays in the doorway until you are far enough away to be nobody. Then the light behind her goes out, and the price is only a number you no longer have."
	],
	kit: [
		"Kit takes thirty-five and a look at your hands, in that order. \"You don't work here,\" she says, which is not an insult. She leads you up a stair that smells like oil and old rain, into a room that was an office until somebody needed a bed more than a desk.",
		"She bolts the door. The Chop Shop keeps working under your feet, a radio of metal. Kit hangs the dress where the grease will not get it and becomes, for the hour, less a part of the bay and more a person who decided to be paid for closeness instead of for a radiator.",
		"It is plain and good. She talks a little, not dirty for the sport of it, just enough to tell you what she wants and what she will not do. The bed complains. Neither of you apologizes to it. When she laughs it is short, surprised, and not for sale as a separate item.",
		"She is dressed again while you are still finding a sleeve. \"Don't tell the bay,\" she says. \"They'll make it a joke, and then they'll make it a debt. I don't owe them this.\" She opens the door onto the smell of work.",
		"Downstairs nobody looks up. That is the luxury thirty-five bought: an hour that the building agreed to ignore. Kit is already wiping her cuff, back on the clock that pays worse and tells fewer lies."
	],
	faye: [
		"Faye does not touch the eighty until you are off the street. A side room at the edge of Salvatore's light, not in the bar and not in the family. She counts twice. \"You can still leave,\" she says. \"After I lock it, the eighty stays even if you get shy.\"",
		"You do not leave. The room is better than the curb promised: clean sheets, a bottle she does not offer, a lamp with a shade. Faye undresses like a woman who has timed it. Nothing is tossed. The city is rude. She is not, and she charges for the difference.",
		"The hour is slow on purpose. She is skilled, a little distant, and completely present in the way that matters. You are not a story she will repeat. You are a transaction she is honoring at a level the street does not usually bother to reach. It is more intimate for being so clearly bought.",
		"When it ends she is not unkind and not lingering. She puts herself back together in the mirror without asking you how it was. \"If you brag, brag about the price,\" she says. \"The rest is not a souvenir.\"",
		"She lets you out a different door from the one you entered. Salvatore's sign is a rumor from here. Your pockets are lighter by eighty, and Faye is already a silhouette that does not owe you a wave."
	],
	tess: [
		"Tess takes the twenty-five in the open, because hiding the count is how people get robbed twice. She walks you past a fire that is not hers, up a stair that moves a little, into a room that has a lock and not much else. The lock works. She checks it.",
		"\"Shoes off,\" she says, and means it, because the floor is the cleanest thing she can offer and she keeps it that way. The coat goes on a nail. Under it she is just a woman who has decided this hour will be warm. The Jungle is outside, doing its usual work of being cold.",
		"She is direct, a bit rough at the edges, and careful where it counts. There is no music. There is breathing, the wall, a dog somewhere that does not belong to either of you. Tess does not pretend the room is a casino. She pretends nothing. That is why the twenty-five feels like more than it is.",
		"After, she shares the end of a cigarette and not a future. \"You can sleep an hour if you paid,\" she says, \"but you didn't pay for morning, and morning here asks questions.\" You understand the generosity and the limit are the same sentence.",
		"Outside, the fires have settled down to eating themselves. Tess stays in the doorway, coat on, already back at work if work walks up. You are twenty-five caps closer to broke and, for a little while, less alone than the block usually allows."
	]
};
var OFF = {
	pearl: ["Pearl answers the motel door in a robe and does not bring the rate outside with her. Daylight makes the lot look like a parking problem instead of a business.", "\"I sleep when the clerk can see the street,\" she says. \"Come back when Rita goes home. If you knock again before that, I'll assume you want a complaint, and I don't take those.\""],
	dollie: ["Dollie is on a casino stool with her shoes off and her work face nowhere. She looks younger and more tired. The hour is not for sale next to a coffee.", "\"Daytime Dollie doesn't do Virgin Street math,\" she says. \"If you sit, sit. If you came to hire me, you came to the wrong sun.\""],
	marisol: ["Marisol is carrying a paper bag and not a price. She nods like a neighbor, which is a kind of armor.", "\"Not now,\" she says. \"The alley in the day is just an alley. I like it that way for a few hours. Find me when the cards get loud.\""],
	kit: ["Kit is under a hood, actually working. The dress is a rumor. Grease is the whole sentence.", "\"You want the other job, it's tonight,\" she says, not unfriendly. \"You want a belt looked at, get in line. Don't mix the lines.\""],
	faye: ["Faye is not on the corner. A bartender who is not her says she keeps daytime like a closed account.", "If you find her at all, she is reading in a booth and does not look up. \"Eighty is a night number,\" she says. \"So is my patience.\""],
	tess: ["Tess is asleep or gone. The room door is shut and the stair does not answer. A neighbor tells you she works when the fires are the only light.", "\"Don't pound,\" the neighbor says. \"She paid for the morning by working the night. You can do the same math.\""]
};
function storyOf(life) {
	return life.pulse?.story ?? emptyPulse().story;
}
function jobOf(npc, life) {
	if (life.job || !npc?.job) return void 0;
	return npc.job;
}
function familyJob(soul, life) {
	if (life.job) return void 0;
	const story = storyOf(life);
	if (soul.id === "rae" && story.jetRun === "moving") return {
		id: "jet-case",
		title: "Walk the case",
		to: "chop",
		pay: 160,
		item: "a Jet case",
		blurb: "Chop Shop bay. Spike does not ask names. Do not open it."
	};
	if (soul.id === "mickey" && story.bishopLetter === "carried") return {
		id: "bishop-letter",
		title: "The mayor's envelope",
		to: "bishop",
		pay: 140,
		item: "a Bishop envelope",
		blurb: "Bishop offices. A secretary, not the street. Do not read it."
	};
	if (soul.gang === "wrights" && soul.role === "collector" && story.richard !== "answered") return {
		id: "wright-name",
		title: "A name for Orville",
		to: "wright",
		pay: 90,
		item: "who shorted the Jet",
		blurb: "Come back to the compound with a name, not a corpse, unless the name is already a corpse."
	};
}
/**
* Canonical street interaction.
* Every talk — click a person, the block button, a room — comes through here.
* Do not add onStreetInteract / onStreetObserve / handleStreetInteraction aliases.
*/
function handleStreetInteraction(actor, life) {
	const soul = SOUL_BY_ID[actor.id];
	const door = STREET_NPCS.find((n) => n.id === actor.id);
	const lines = [];
	let flag;
	let spend;
	const story = storyOf(life);
	const night = life.hour >= 20 || life.hour < 6;
	if (soul?.role === "walker") {
		const beat = walkerBeat(soul, life, life.npcMemory?.[actor.id]?.last);
		return {
			lines: beat.lines.slice(0, 8),
			moodDelta: 1,
			last: beat.last,
			offerJob: false,
			spend: beat.spend,
			giver: actor.name
		};
	}
	let doing = "Standing here.";
	let where = "this block";
	if (soul) {
		const spot = schedulePoint(soul, life);
		doing = spot.doing;
		where = spot.where;
	} else if (door) {
		doing = doingForRole(streetRole(door.role), life.hour).doing;
		where = door.beat;
	}
	lines.push(`${actor.name}: "${doing}"`);
	lines.push(`Toward ${where}.`);
	if (door) lines.push(night ? door.night : door.day);
	const grudge = life.grudges?.[actor.id] ?? 0;
	const mem = life.npcMemory?.[actor.id];
	if (grudge >= 18) lines.push(`${actor.name} remembers the slight. This is not a fresh introduction.`);
	else if (mem?.last) lines.push(`Last time, you ${mem.last}.`);
	else if ((mem?.mood ?? 0) > 0) lines.push("They know the face and do not mind it.");
	if (soul?.gang) {
		const book = life.pulse?.families?.[soul.gang];
		const profile = FAMILY_PROFILE[soul.gang];
		lines.push(`${GANG_BY_ID[soul.gang].name}. ${book?.operation ?? profile.goals}`);
		if (soul.gang === "wrights" && story.richard === "open") {
			lines.push("Richard Wright died on Mordino Jet. The collections are how this family stays angry.");
			flag = "richard-named";
		}
	} else if (soul?.allegiance === "law") {
		if ((life.warrant ?? 0) >= 12 || life.heat >= 40) lines.push("Your name is on the sheet. The patrol did not invent you.");
		else lines.push("They are working a route, not hunting you.");
	} else if (soul?.role === "dealer") {
		const demand = life.pulse?.demand ?? 48;
		lines.push(demand >= 55 ? "Buyers are hungry tonight. Jet is the coin." : "The corner is thin. Buyers are late.");
	} else if (soul?.role === "tourist") lines.push("They do not live here. The caps are from the NCR or the Hub. The train is the plan, until it isn't.");
	else if (soul?.role === "expat") lines.push("Long enough that the stool has their name. Still talks like the ticket home is this month.");
	else if (soul?.role === "guide") lines.push("Walks outsiders to a door that pays commission. The first price is not the price.");
	else if (soul?.role === "host") lines.push("On the floor because a day wage will not rent the week. The stool costs more if they sit.");
	else if (soul?.role === "porter") lines.push("Bike, keys, or the night desk. Moves people who do not know the streets, and charges them for not knowing.");
	else if (soul?.role === "dancer" && soul.pitch && soul.price) {
		const onFloor = life.hour >= 8 || life.hour < 4;
		lines.push(onFloor ? soul.pitch : "She's off the floor. The ask comes back with the lights.");
		if (onFloor) spend = soul.price;
	} else if (soul?.role === "guest") lines.push("Hotel guest. The casino is the other half of the room key.");
	const heard = story.heard.find((h) => !h.startsWith(`${actor.name}:`));
	if (heard) lines.push(`They've heard: ${heard}`);
	const venue = venueIn(life.district);
	if (venue && life.pulse?.venues?.[venue.id]) {
		const live = life.pulse.venues[venue.id];
		if (live.customers > 0) lines.push(`${venue.name} right now: ${live.activity}.`);
	}
	if (life.district && story.bloodDistrict === life.district && story.bloodDay === life.day) lines.push("Someone died on this block today. The families have not finished spending it.");
	const offered = (soul ? familyJob(soul, life) : void 0) ?? jobOf(door, life);
	if (offered) lines.push("They have something that has to reach another district.");
	const gangHere = DISTRICT_BY_ID[life.district]?.gang;
	if (!soul?.gang && gangHere && (life.friction?.[gangHere] ?? 0) >= 28) lines.push(`${GANG_BY_ID[gangHere].name} already have your temperature on this turf.`);
	return {
		lines: lines.slice(0, 5),
		moodDelta: 1,
		last: "talked",
		offerJob: Boolean(offered),
		job: offered,
		giver: actor.name,
		flag,
		spend
	};
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
var REVUE = [
	{
		id: "nia",
		name: "Nia Kane",
		public: ["/reno/dance/nia/a.webp", "/reno/dance/nia/b.webp"],
		private: [
			"/reno/dance/nia/p1.webp",
			"/reno/dance/nia/p2.webp",
			"/reno/dance/nia/p3.webp"
		],
		prices: [
			30,
			60,
			110
		],
		steps: [
			"Past the curtain. Gold fringe, still the costume. She starts closer than the stage.",
			"The chair. The room is smaller, so the price is not.",
			"Last step. She stays dressed and reaches. That is the private show."
		]
	},
	{
		id: "mei",
		name: "Mei Della",
		public: ["/reno/dance/mei/a.webp", "/reno/dance/mei/b.webp"],
		private: [
			"/reno/dance/mei/p1.webp",
			"/reno/dance/mei/p2.webp",
			"/reno/dance/mei/p3.webp"
		],
		prices: [
			28,
			55,
			100
		],
		steps: [
			"She leaves the silver set on. The lean is the first thing you paid for.",
			"Chair. Silver. Closer. The house is not in this room.",
			"Last step. One knee, one hand out. The costume stays. The distance does not."
		]
	},
	{
		id: "luz",
		name: "Luz Navarro",
		public: ["/reno/dance/luz/a.webp", "/reno/dance/luz/b.webp"],
		private: [
			"/reno/dance/luz/p1.webp",
			"/reno/dance/luz/p2.webp",
			"/reno/dance/luz/p3.webp"
		],
		prices: [
			32,
			65,
			120
		],
		steps: [
			"Red fringe, off the stage. First step is still a dance, not a favor.",
			"She takes the chair. The fringe moves because she does.",
			"Last step. She kneels in the dress and reaches. Pay again and she repeats it."
		]
	},
	{
		id: "amira",
		name: "Amira Shah",
		public: ["/reno/dance/amira/a.webp", "/reno/dance/amira/b.webp"],
		private: [
			"/reno/dance/amira/p1.webp",
			"/reno/dance/amira/p2.webp",
			"/reno/dance/amira/p3.webp"
		],
		prices: [
			35,
			70,
			130
		],
		steps: [
			"Emerald stays on. The braid comes over one shoulder. That is step one.",
			"The chair faces you. The costume does not come off. The price does go up.",
			"Last step. One knee, one hand. She tells you that is the end of the menu."
		]
	},
	{
		id: "ines",
		name: "Ines Yazzie",
		public: ["/reno/dance/ines/a.webp", "/reno/dance/ines/b.webp"],
		private: [
			"/reno/dance/ines/p1.webp",
			"/reno/dance/ines/p2.webp",
			"/reno/dance/ines/p3.webp"
		],
		prices: [
			26,
			52,
			95
		],
		steps: [
			"The cape is already off. Velvet stays. She is closer than the floor allows.",
			"Chair. Burgundy. She does not talk over the song.",
			"Last step. She kneels and reaches. After this, you are buying the same minute again."
		]
	}
];
/** Who is on the public floor in this building right now. */
function revueOn(district, hour) {
	const h = (hour % 24 + 24) % 24;
	if (district === "shark") return h % 2 === 0 ? REVUE[0] : REVUE[3];
	if (district === "desperado") return h % 2 === 0 ? REVUE[1] : REVUE[4];
	if (district === "mordino") return REVUE[4];
	if (district === "virgin") return REVUE[2];
	return REVUE[2];
}
function revueById(id) {
	return REVUE.find((act) => act.id === id);
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
			order: [...life.combat.order],
			bangs: life.combat.bangs ?? 0
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
		corpses: (life.corpses ?? []).map((c) => ({ ...c })),
		privateShows: { ...life.privateShows ?? {} },
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
	life.hunger = clamp((life.hunger ?? 22) + mins / 208, 0, 100);
	life.thirst = clamp((life.thirst ?? 18) + mins / 160, 0, 100);
	life.fatigue = clamp((life.fatigue ?? 12) + mins / 192, 0, 100);
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
	sweepBodies(life);
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
	const news = advanceCityHour(life);
	if (news) push(life, news);
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
function layBody(life, dead, index) {
	const x = (life.combat?.originX ?? life.posX) + index * .7;
	const z = (life.combat?.originZ ?? life.posZ) + index % 2 * .4;
	let best = 999;
	let copName = "";
	for (const soul of SOULS) {
		if (soul.role !== "police") continue;
		if ((life.absent[soul.id] ?? 0) > life.day) continue;
		const spot = schedulePoint(soul, life);
		const d = Math.hypot(spot.x - x, spot.z - z);
		if (d < best) {
			best = d;
			copName = soul.name;
		}
	}
	const cops = Boolean(copName) && best < 90;
	life.corpses = [...life.corpses ?? [], {
		id: dead.id,
		name: dead.name,
		x,
		z,
		sprite: FOE_TOKEN[dead.kind] ?? "/reno/tokens/gangster.webp",
		wounds: Math.max(1, dead.wounds ?? 1),
		cleanMinute: clockMinute(life) + (cops ? 20 + Math.round(best / 4) : 55),
		cleaner: cops ? "cops" : "people",
		cleanerName: cops ? copName : "Someone"
	}];
}
function sweepBodies(life) {
	const list = life.corpses ?? [];
	if (!list.length || life.combat) return;
	const now = clockMinute(life);
	const keep = [];
	for (const body of list) {
		if (now < body.cleanMinute) {
			keep.push(body);
			continue;
		}
		push(life, body.cleaner === "cops" ? `${body.cleanerName} bags ${body.name}. The street is a street again.` : `${body.cleanerName} takes ${body.name} off the pavement. No badge, no questions.`);
	}
	life.corpses = keep;
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
				layBody(life, dead, deadFoes.indexOf(dead));
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
			push(life, deadFoes.length ? `They drop. Flat on the ground means dead. Heat +${gained}. Someone will take the bodies. Search them first.` : "The street clears. Nothing left to search.");
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
function encounterContext(life, activity) {
	const building = life.insideId ? BUILDING_BY_ID[life.insideId] : null;
	const pulse = ensurePulse(life);
	return {
		district: life.district,
		zone: zoneAt(life.posX, life.posZ),
		hour: (life.hour % 24 + 24) % 24,
		night: isNight(life),
		inside: building ? building.abandoned ? "abandoned" : building.use : null,
		heat: life.heat,
		regard: life.regard ?? 0,
		gangId: life.gangId,
		tension: life.tension ?? 0,
		warrant: life.warrant ?? 0,
		activity,
		story: pulse.story,
		absent: life.absent ?? {},
		day: life.day
	};
}
function openContextEncounter(life, pick) {
	const night = isNight(life);
	const foes = pick.foeKinds.map((kind, i) => {
		const foe = combatantFromFoe(FOES[kind] ?? FOES.tough);
		foe.kind = kind;
		foe.id = `${pick.id}-${kind}-${i}`;
		return foe;
	});
	const allies = pick.allyKinds.map((kind, i) => {
		const ally = combatantFromFoe(FOES[kind] ?? FOES.tough);
		ally.side = "ally";
		ally.player = false;
		ally.kind = kind;
		ally.id = `${pick.id}-ally-${kind}-${i}`;
		return ally;
	});
	const layout = generateEncounter({
		setting: pick.setting,
		surprise: false,
		foeCount: Math.max(1, foes.length),
		night
	});
	foes.forEach((foe, i) => {
		const slot = layout.foes[i] ?? layout.foes[0];
		foe.hexQ = slot.q;
		foe.hexR = slot.r;
	});
	allies.forEach((ally, i) => {
		const slot = layout.foes[foes.length + i];
		ally.hexQ = slot?.q ?? layout.player.q + 1;
		ally.hexR = slot?.r ?? layout.player.r;
	});
	const light = lightingFromSetting(pick.setting, night);
	life.sighting = {
		spotted: true,
		setting: pick.setting,
		foeIds: foes.map((f) => f.id),
		foeNames: foes.map((f) => f.name),
		foeKinds: foes.map((f) => f.kind),
		allyIds: allies.map((a) => a.id),
		allyNames: allies.map((a) => a.name),
		allyKinds: allies.map((a) => a.kind),
		cause: pick.cause,
		map: layout.map,
		placements: [
			{
				id: "player",
				q: layout.player.q,
				r: layout.player.r,
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
		],
		lighting: light.penalty,
		lightingLabel: light.label,
		reason: pick.reason
	};
	push(life, pick.reason);
}
function maybeEncounter(life, _character, extra = 0, activity = "wander") {
	if (life.combat || life.sighting || life.dead || life.dialogue) return false;
	const pick = selectEncounter(encounterContext(life, activity));
	if (!pick) return false;
	const rate = Math.min(48, 5 + extra + Math.round(pick.pressure * .6) + Math.floor(life.heat / 16));
	if (d100() > rate) return false;
	openContextEncounter(life, pick);
	return true;
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
		const district = b?.district ?? life.district;
		const roll = skillRoll(skill(character, "gambling"), night ? -5 : 0);
		if (roll.crit) {
			const win = bet * 3;
			life.caps += win;
			bookWager(life, district, win - bet, true);
			push(life, `The house blinked. Gambling ${roll.roll}. +${win} caps. The till felt it.`);
		} else if (roll.success) {
			const win = bet + Math.round(bet * .6);
			life.caps += win;
			bookWager(life, district, Math.max(0, win - bet), true);
			push(life, `You beat a tourist's luck, not the house. Gambling ${roll.roll}. +${win} caps.`);
		} else {
			bookWager(life, district, bet, false);
			push(life, `The felt eats ${bet} caps. Gambling ${roll.roll}. The house keeps it.`);
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
		bookDrink(life, b?.district ?? life.district, 4);
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
function applyInteraction(life, character, actor) {
	tickMinutes(life, 12);
	const beat = handleStreetInteraction(actor, life);
	const mem = { ...remember(life.npcMemory, actor.id) };
	const roll = skillRoll(skill(character, "speech"), mem.mood * 8);
	push(life, beat.lines[0] ?? `${actor.name} has nothing to say.`);
	if (!roll.success) {
		mem.mood = Math.max(-2, mem.mood - 1);
		mem.last = "brushed you off";
		life.npcMemory = {
			...life.npcMemory,
			[actor.id]: mem
		};
		life.grudges[actor.id] = Math.min(100, (life.grudges[actor.id] ?? 0) + 2);
		push(life, `${actor.name} looks through you. Speech ${roll.roll}.`);
		return {
			life,
			character
		};
	}
	mem.mood = Math.min(2, mem.mood + beat.moodDelta);
	mem.last = beat.last;
	life.npcMemory = {
		...life.npcMemory,
		[actor.id]: mem
	};
	for (const line of beat.lines.slice(1)) push(life, line);
	if (beat.spend) {
		if (life.caps >= beat.spend) {
			life.caps -= beat.spend;
			push(life, `You pay ${beat.spend}. Caps left: ${life.caps}.`);
			if (beat.last === "took the hour") tickMinutes(life, 50);
		} else push(life, `${actor.name} waits. You have ${life.caps}. She asked for ${beat.spend}.`);
	}
	const pulse = ensurePulse(life);
	if (beat.flag === "richard-named" && pulse.story.richard === "open") pulse.story.richard = "named";
	if (SOUL_BY_ID[actor.id]?.allegiance === "family" || beat.flag === "richard-named") pulse.story.involvement = Math.min(8, pulse.story.involvement + 1);
	if (beat.offerJob && beat.job && !life.job) {
		life.job = {
			...beat.job,
			stage: "carry",
			giver: beat.giver ?? actor.name,
			from: life.district
		};
		push(life, `Job — ${beat.job.title}. Carry ${beat.job.item} to ${districtName(beat.job.to)}. ${beat.job.blurb} Pay ${beat.job.pay}.`);
	} else if (life.job) push(life, `You are already carrying ${life.job.item} for ${life.job.giver}.`);
	push(life, `Speech ${roll.roll}.`);
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
		const done = life.job;
		life.caps += done.pay;
		const title = done.title;
		const pay = done.pay;
		life.job = null;
		const pulse = ensurePulse(life);
		if (done.id === "jet-case") {
			pulse.story.jetRun = "sold";
			pulse.story.involvement = Math.min(8, pulse.story.involvement + 1);
			pulse.families.mordinos.cash += 220;
			push(life, "The case is in the bay. Tonight's Jet will not come up short.");
		} else if (done.id === "bishop-letter") {
			pulse.story.bishopLetter = "delivered";
			pulse.story.courierMissing = false;
			pulse.story.mayorSqueeze += 1;
			pulse.story.involvement = Math.min(8, pulse.story.involvement + 1);
			pulse.families.bishops.cash += 160;
			push(life, "The envelope is on a Bishop desk. The mayor's morning just got more expensive.");
		} else if (done.id === "wright-name") {
			if (pulse.story.richard === "open") pulse.story.richard = "named";
			pulse.story.involvement = Math.min(8, pulse.story.involvement + 1);
			push(life, "Orville has a name. Richard is still dead. The Wrights are less blind.");
		}
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
	return applyInteraction(life, character, {
		id: npc.id,
		name: npc.name
	});
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
	if (action.type === "streetTalk") {
		const soul = SOUL_BY_ID[action.actorId];
		if (!soul) {
			push(next, "They have already left this block.");
			return {
				life: next,
				character: sheet
			};
		}
		if ((next.absent?.[soul.id] ?? 0) > next.day) {
			push(next, `${soul.name} is not on the route. The absence is the news.`);
			return {
				life: next,
				character: sheet
			};
		}
		return applyInteraction(next, sheet, {
			id: soul.id,
			name: soul.name
		});
	}
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
	if (action.type === "linger") {
		if (!next.insideId) {
			push(next, "You are standing in the street. Time passes when you walk.");
			return {
				life: next,
				character: sheet
			};
		}
		tickMinutes(next, 30);
		const room = BUILDING_BY_ID[next.insideId];
		const use = room?.abandoned ? "abandoned" : room?.use;
		if (use === "club" || use === "bar") push(next, "Half an hour. The number changes. She is still on the stage.");
		else if (use === "casino") push(next, "Half an hour on the floor. The reels turn over. The stage does not stop.");
		else push(next, "Half an hour passes inside. The street keeps its own clock.");
		return {
			life: next,
			character: sheet
		};
	}
	if (action.type === "privateDance") {
		if (!next.insideId) {
			push(next, "The booth is indoors.");
			return {
				life: next,
				character: sheet
			};
		}
		const act = revueById(action.dancer);
		if (!act) return {
			life: next,
			character: sheet
		};
		const done = next.privateShows?.[act.id] ?? 0;
		const step = Math.min(done, act.prices.length - 1);
		const cost = act.prices[step];
		if (next.caps < cost) {
			push(next, `${act.name} waits. ${cost} caps for the next step. You have ${next.caps}.`);
			return {
				life: next,
				character: sheet
			};
		}
		next.caps -= cost;
		const now = Math.min(done + 1, act.private.length);
		next.privateShows = {
			...next.privateShows ?? {},
			[act.id]: now
		};
		tickMinutes(next, 15);
		push(next, `${act.name}: ${act.steps[now - 1] ?? act.steps[act.steps.length - 1]} −${cost} caps.`);
		return {
			life: next,
			character: sheet
		};
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
		const extra = zone === "strip" ? -12 : zone === "alley" ? 4 : zone === "wild" ? 8 : 0;
		const wx = weatherAt(next.day, next.hour);
		const wet = wx === "storm" ? 7 : wx === "rain" ? 3 : wx === "dust" ? 2 : wx === "wind" ? 1 : 0;
		maybeEncounter(next, sheet, extra + (isNight(next) ? 3 : 0) + wet, "travel");
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
		maybeEncounter(next, sheet, isNight(next) ? 8 : 0, "travel");
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
		if (!home) {
			push(next, `You sleep in a doorway. +${healed} HP. The city does not keep secrets.`);
			maybeEncounter(next, sheet, 18, "sleep");
		} else {
			push(next, `Morning in ${home.name}. +${healed} HP.`);
			if (home.kind === "squat" && housingDanger(next) >= 6) maybeEncounter(next, sheet, housingDanger(next), "sleep");
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
		maybeEncounter(next, sheet, 4, "work");
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
		maybeEncounter(next, sheet, home.danger, "wander");
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
		maybeEncounter(next, sheet, home.danger - 2, "work");
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
		maybeEncounter(next, sheet, 16, "wander");
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
		maybeEncounter(next, sheet, 6, "work");
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
		maybeEncounter(next, sheet, 4, "work");
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
		maybeEncounter(next, sheet, 8 + qty * 2, "work");
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: ["NCR, the Hub, and the caravans treat the Strip like a cheap weekend. Guides, floor staff, bike taxis, and the night desk live on that spend, because a day wage will not rent the week.", life.pulse ? ` Outside caps still walking around: ${life.pulse.visitorSpend}.` : ""]
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
						children: "Click a person on the street. Talk here if you are at a door. They will tell you where they are going."
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
	if (node === "room-safe") return {
		portrait,
		full,
		scene: "/reno/angela/room-safe.webp",
		place: "Shark Club · her room · the safe"
	};
	if (node === "room-fly" || node === "room-fly-again") return {
		portrait,
		full,
		scene: "/reno/angela/fly-hit.webp",
		place: "Shark Club · her room · the glass"
	};
	if (node === "room-fly-ceiling" || node === "room-fly-street" || node === "room-night-jet") return {
		portrait,
		full,
		scene: "/reno/angela/fly-high.webp",
		place: "Shark Club · her room · the party"
	};
	if (node === "room-jet-down" || node === "morning-jet") return {
		portrait,
		full,
		scene: "/reno/angela/fly-dawn.webp",
		place: "Shark Club · third floor · after"
	};
	if (node === "morning") return {
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
					className: "mt-4 max-h-[32rem] overflow-auto rounded-lg bg-raised px-4 py-3 text-sm leading-relaxed text-fg",
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
var TOKEN = {
	clerk: "/reno/tokens/ped-woman.webp",
	lot: "/reno/tokens/ped-woman.webp",
	tout: "/reno/tokens/ped-man.webp",
	soldato: "/reno/tokens/gangster.webp",
	cop: "/reno/tokens/cop.webp",
	courier: "/reno/tokens/ped-man.webp",
	dealer: "/reno/tokens/junkie.webp",
	bartender: "/reno/tokens/velvet.webp",
	dancer: "/reno/tokens/lace.webp",
	mechanic: "/reno/tokens/ped-man.webp"
};
var REELS = [
	"7",
	"BAR",
	"BELL",
	"CHERRY"
];
function reelFace(life, col) {
	return REELS[(life.hour * 60 + (life.minute ?? 0) + col * 5) % REELS.length];
}
function RenoInterior({ building, life, night, busy, onAct, onLinger, onPrivate, onExit }) {
	const use = building.abandoned ? "abandoned" : building.use;
	const show = use === "club" || use === "bar" || use === "casino";
	const npc = npcFor(building.district ?? life.district, night, use);
	const mem = remember(life.npcMemory, npc.id);
	const room = roomCopy(use, night, building.abandoned, building.name);
	const depth = building.depth ?? Math.min(11, building.width * .62);
	const planW = Math.max(120, Math.min(320, building.width * 10));
	const planH = Math.max(72, Math.min(200, depth * 10));
	const personPx = Math.round(HUMAN_M / DOOR_H * 64);
	const job = life.job;
	const [seat, setSeat] = (0, import_react.useState)(null);
	const [look, setLook] = (0, import_react.useState)(use === "casino" ? "machine" : "stage");
	const act = revueOn(building.district, life.hour);
	const paid = life.privateShows?.[act.id] ?? 0;
	const nextPrice = act.prices[Math.min(paid, act.prices.length - 1)];
	const publicFrame = act.public[Math.floor((life.hour * 60 + (life.minute ?? 0)) / 10) % act.public.length];
	const privateFrame = paid > 0 ? act.private[Math.min(paid, act.private.length) - 1] : null;
	const lookingAtStage = Boolean(seat && look !== "machine" && look !== "booth");
	const machine = use === "casino" && seat?.startsWith("slot") && look === "machine";
	const booth = look === "booth";
	function sit(next) {
		setSeat(next);
		if (next.startsWith("slot")) setLook("machine");
		else setLook("stage");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `reno-room ${night ? "reno-room-night" : "reno-room-day"} reno-room-${use}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
				children: room.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-1 text-2xl font-semibold tracking-tight",
				children: building.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[10px] tracking-wide text-subtle uppercase",
				children: clockLabel(life)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: room.body
			}),
			show ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 sm:grid-cols-[11rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
					children: "Room"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 grid gap-1 rounded-md bg-black/50 p-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => sit("rail"),
							className: cn("rounded-sm px-2 py-2 text-left font-mono text-[10px] tracking-wide uppercase", seat === "rail" ? "bg-accent text-accent-fg" : "bg-white/10 text-fg"),
							children: ["Stage", seat === "rail" ? " · you" : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setSeat("booth");
								setLook("booth");
							},
							className: cn("rounded-sm px-2 py-2 text-left font-mono text-[10px] tracking-wide uppercase", seat === "booth" ? "bg-accent text-accent-fg" : "bg-white/10 text-fg"),
							children: ["Booth", seat === "booth" ? " · you" : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-1",
							children: use === "casino" ? [
								0,
								1,
								2
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => sit(`slot-${i}`),
								className: cn("rounded-sm px-1 py-3 font-mono text-[9px] uppercase", seat === `slot-${i}` ? "bg-accent text-accent-fg" : "bg-white/10 text-fg"),
								children: "Slot"
							}, i)) : [
								0,
								1,
								2
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => sit("stool"),
								className: cn("rounded-sm px-1 py-3 font-mono text-[9px] uppercase", seat === "stool" ? "bg-accent text-accent-fg" : "bg-white/10 text-fg"),
								children: "Bar"
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-1 pt-1 text-[10px] text-muted",
							children: seat === "rail" ? "At the rail. Public set." : seat === "stool" ? "On a stool. The stage is past the bottles." : seat === "booth" ? "In the booth. Private steps cost more as they go." : seat?.startsWith("slot") ? "In a chair. The machine is the view." : "Pick a seat. The doorway does not count."
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
								children: machine ? "Your machine" : booth ? `Booth · ${act.name}` : `Stage · ${act.name}`
							}), use === "casino" && seat?.startsWith("slot") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: look === "machine" ? "secondary" : "ghost",
									onClick: () => setLook("machine"),
									children: "Machine"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: look === "stage" ? "secondary" : "ghost",
									onClick: () => setLook("stage"),
									children: "Stage"
								})]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 flex h-52 items-end justify-center overflow-hidden rounded-md bg-[#120c10]",
							children: !seat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-4 text-center text-sm text-muted",
								children: "Sit down. Then the room has a view."
							}) : machine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 flex gap-2",
								children: [
									0,
									1,
									2
								].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-24 w-16 items-center justify-center rounded-sm bg-[#1c1612] font-display text-xl font-semibold text-fg shadow-[inset_0_0_0_1px_rgba(236,234,227,0.16)]",
									children: reelFace(life, col)
								}, col))
							}) : booth ? privateFrame ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: privateFrame,
								alt: "",
								className: "h-full w-auto object-contain",
								style: { filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.55))" }
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-4 text-center text-sm text-muted",
								children: "The booth stays dark until you pay the first step."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: publicFrame,
								alt: "",
								className: "h-full w-auto object-contain",
								style: { filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.55))" }
							})
						}),
						seat && lookingAtStage && !machine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "The pose moves when the clock does. Pass time and the set changes."
						}) : null,
						booth ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								"Step ",
								paid,
								" of ",
								act.private.length,
								". Next is ",
								nextPrice,
								" caps.",
								paid > 0 ? ` ${act.steps[Math.min(paid, act.steps.length) - 1]}` : ""
							]
						}) : null
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-3 overflow-hidden rounded-md bg-bg/70",
				style: {
					width: planW,
					height: planH,
					maxWidth: "100%"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1a120e]",
					style: {
						width: 18,
						height: 64
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: TOKEN[npc.role] ?? TOKEN.clerk,
					alt: "",
					className: "absolute bottom-0 object-contain",
					style: {
						height: personPx,
						left: "58%",
						filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.45))"
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: TOKEN[npc.role] ?? TOKEN.clerk,
					alt: "",
					className: "h-28 w-auto object-contain",
					style: { filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.45))" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold",
							children: npc.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[10px] tracking-wide text-subtle uppercase",
							children: [
								npc.role,
								" · ",
								npc.beat,
								mem.last ? ` · remembers: you ${mem.last}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-fg",
							children: night ? npc.night : npc.day
						})
					]
				})]
			}),
			job ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Carrying ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: job.item
					}),
					" for ",
					job.giver,
					". Deliver at",
					" ",
					DISTRICT_BY_ID[job.to]?.name ?? job.to,
					". ",
					job.blurb
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						className: "min-h-11",
						disabled: busy,
						onClick: onLinger,
						children: "Pass half an hour"
					}),
					show ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						className: "min-h-11",
						disabled: busy,
						onClick: () => {
							setSeat("booth");
							setLook("booth");
							onPrivate(act.id);
						},
						children: ["Private step · ", nextPrice]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						className: "min-h-11",
						disabled: busy,
						onClick: () => onAct("talk"),
						children: "Talk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						className: "min-h-11",
						disabled: busy,
						onClick: () => onAct("lean"),
						children: "Lean"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						className: "min-h-11",
						disabled: busy,
						onClick: () => onAct("door"),
						children: "Work the door"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						className: "min-h-11",
						disabled: busy,
						onClick: () => onAct("bribe"),
						children: "Bribe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						className: "min-h-11",
						disabled: busy,
						onClick: () => onAct("shake"),
						children: "Shake down"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						className: "min-h-11",
						disabled: busy,
						onClick: () => onAct("tip"),
						children: "Tip a cop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						className: "min-h-11",
						disabled: busy || !job,
						onClick: () => onAct("deliver"),
						children: "Deliver"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						className: "min-h-11",
						disabled: busy,
						onClick: onExit,
						children: "Step outside"
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
						children: "Who owns the block"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl font-semibold tracking-tight",
						children: "Families, tills, rooms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: districtBlurb(life, life.district)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-3",
						children: GANGS.map((g) => {
							const book = life.pulse?.families?.[g.id];
							const profile = FAMILY_PROFILE[g.id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-raised px-3 py-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-base font-semibold",
										style: { color: g.color },
										children: [g.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 font-mono text-[10px] tracking-wide text-subtle uppercase",
											children: book ? `${book.cash.toLocaleString()} caps · influence ${book.influence} · security ${book.security}` : "books closed"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-fg",
										children: book?.operation ?? profile.goals
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											profile.businesses,
											". ",
											profile.personnel,
											". Rivals the ",
											GANG_BY_ID[g.rival].name,
											"."
										]
									})
								]
							}, g.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						children: VENUES.filter((v) => venueOpen(v, life.hour)).map((v) => {
							const live = life.pulse?.venues?.[v.id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg",
										children: v.name
									}),
									" · ",
									v.owner,
									v.gang ? ` · ${GANG_BY_ID[v.gang].name}` : "",
									" · ",
									live?.activity ?? "quiet",
									" · ",
									live?.customers ?? 0,
									" inside",
									live ? ` · till ${live.cash.toLocaleString()}` : ""
								]
							}, v.id);
						})
					}),
					life.pulse?.story?.heard?.[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: ["On the street: ", life.pulse.story.heard[0]]
					}) : null
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
		const life = migrate(newLife(characterId, hpMax), hpMax);
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
							disabled: Boolean(life.combat || life.dialogue || life.sighting || life.loot || life.insideId),
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
							onTalk: (actor) => act({
								type: "streetTalk",
								actorId: actor.id
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
						inspecting && !life.insideId && !life.combat && !life.loot && !life.sighting && !life.dialogue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
						}) : null,
						life.insideId && BUILDING_BY_ID[life.insideId] && !life.combat && !life.loot && !life.sighting && !life.dialogue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reno-overlay",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenoInterior, {
								building: BUILDING_BY_ID[life.insideId],
								life,
								night: isNight(life),
								onAct: (streetAct) => act({
									type: "street",
									act: streetAct
								}),
								onLinger: () => act({ type: "linger" }),
								onPrivate: (dancer) => act({
									type: "privateDance",
									dancer
								}),
								onExit: () => act({ type: "exit" })
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
					inspecting && !life.insideId && !life.combat && !life.loot && !life.sighting && !life.dialogue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
