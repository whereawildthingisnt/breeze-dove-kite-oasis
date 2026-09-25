import type { PerkId, SkillId } from "@/lib/special/types";

export type DistrictId =
  | "virgin"
  | "shark"
  | "desperado"
  | "motel"
  | "mordino"
  | "salvatore"
  | "jungle"
  | "stables"
  | "wright"
  | "chop"
  | "rail"
  | "golgotha"
  | "bishop"
  | "market";

export type GangId = "mordinos" | "wrights" | "salvatores" | "bishops";

export type HousingId =
  | "motel-room"
  | "shark-suite"
  | "wright-bunk"
  | "jungle-shack"
  | "chop-loft"
  | "golgotha-crypt"
  | "bishop-room";

export type ChemId = "jet" | "psycho" | "buffout" | "mentats";

export type HabitId = "vodka" | "cigarettes" | "marijuana" | "cocaine";

export type StashId = ChemId | HabitId;

export type BoxingRank =
  | "unsigned"
  | "prelim"
  | "contender"
  | "title"
  | "champion";

export type CombatKind = "street" | "boxing" | "raid";

export type EncounterSetting =
  | "street"
  | "alley"
  | "casino"
  | "yard"
  | "crypt"
  | "ring"
  | "rail"
  | "motel";

export type ZoneKind =
  | "strip"
  | "alley"
  | "motel"
  | "residential"
  | "industrial"
  | "compound"
  | "wild"
  | "outskirts";

export type BuildingUse =
  | "casino"
  | "motel"
  | "tenement"
  | "shop"
  | "bar"
  | "warehouse"
  | "shack"
  | "abandoned"
  | "pawn"
  | "ring"
  | "crypt"
  | "rail"
  | "office"
  | "club"
  | "gas";

export type HexKind = "open" | "cover" | "wall" | "exit";

export interface HexCell {
  q: number;
  r: number;
  kind: HexKind;
}

export interface HexBoard {
  setting: EncounterSetting;
  radius: number;
  cells: HexCell[];
  scene: string;
}

export interface Sighting {
  spotted: boolean;
  setting: EncounterSetting;
  foeIds: string[];
  foeNames: string[];
  map: HexBoard;
  placements: Array<{ id: string; q: number; r: number; player?: boolean; ally?: boolean }>;
  allyIds?: string[];
  allyNames?: string[];
  /** Parallel to foeIds/allyIds when those ids are people, not foe-pool keys. */
  foeKinds?: string[];
  allyKinds?: string[];
  cause?: "feud" | "hunt" | "crime" | "ring";
  lighting: number;
  lightingLabel: string;
  reason: string;
}

export type BodyPart = "torso" | "legs" | "arms" | "groin" | "head" | "eyes";

export const BODY_PARTS: BodyPart[] = ["torso", "legs", "arms", "groin", "head", "eyes"];

export type Stance = "standing" | "crouching" | "prone";

export interface DistrictDef {
  id: DistrictId;
  name: string;
  blurb: string;
  q: number;
  r: number;
  art: "casino" | "squat" | "ring" | "motel" | "bar" | "rail" | "crypt";
  danger: number;
  gang?: GangId;
  sell: number;
  buy: number;
  tags: Array<"casino" | "housing" | "gang" | "ring" | "market" | "wild">;
}

export interface HousingDef {
  id: HousingId;
  name: string;
  district: DistrictId;
  kind: "rent" | "squat";
  rent: number;
  danger: number;
  convertSkill?: SkillId;
  convertTarget?: number;
  note: string;
  requiresGang?: GangId;
  requiresRank?: number;
}

export interface GangDef {
  id: GangId;
  name: string;
  turf: DistrictId;
  pitch: string;
  color: string;
  head: string;
  underboss: string;
  front: string;
  credo: string;
  rival: GangId;
  ranks: string[];
}

export interface Combatant {
  id: string;
  name: string;
  player: boolean;
  /** Missing on older saves: player → you, otherwise a foe. */
  side?: "player" | "ally" | "foe";
  hp: number;
  hpMax: number;
  ap: number;
  apMax: number;
  ac: number;
  baseAc: number;
  leftoverAc: number;
  dt: number;
  dr: number;
  sequence: number;
  pe: number;
  st: number;
  en: number;
  lk: number;
  unarmed: number;
  melee: number;
  guns: number;
  md: number;
  crit: number;
  finesse: boolean;
  fastShot: boolean;
  nightPerson: boolean;
  weaponName: string;
  /** Catalog id of the piece they are holding. Looted off foes. */
  weaponId?: string;
  /** Catalog id of the armor they are wearing, if any. */
  armorId?: string;
  weaponSkill: "unarmed" | "melee" | "guns";
  dmg: string;
  apCost: number;
  apAimed: number | null;
  apBurst: number | null;
  burstShots: number;
  weaponRange: number;
  minSt: number;
  weaponWeight: number;
  mag: number;
  loaded: number;
  stance: Stance;
  down: boolean;
  /** Left the map. Not a body, and not a target. */
  fled?: boolean;
  cover: number;
  crippled: Partial<Record<BodyPart, boolean>>;
  hexQ: number;
  hexR: number;
  /** Ticks until this body can swing or shoot again. Field fights only. */
  cool?: number;
  kind: string;
  /** Gun hits still on the body. */
  wounds?: number;
}

export interface CombatState {
  kind: CombatKind;
  round: number;
  order: string[];
  turn: number;
  hexes: number;
  lighting: number;
  lightingLabel: string;
  combatants: Combatant[];
  log: string[];
  result?: "win" | "loss" | "flee";
  purse?: number;
  map: HexBoard | null;
  targetId: string;
  /** Street fights use the real block, not a turn order. */
  field?: boolean;
  /** Street fights pause the city and use hexes scaled onto the asphalt. */
  onMap?: boolean;
  originX?: number;
  originZ?: number;
  hexScale?: number;
  cause?: "feud" | "hunt" | "crime" | "ring";
  /** Gunshots fired this fight. The street plays one crack per count. */
  bangs?: number;
}

export interface StreetCorpse {
  id: string;
  name: string;
  x: number;
  z: number;
  sprite: string;
  wounds: number;
  cleanMinute: number;
  cleaner: "cops" | "people";
  cleanerName: string;
}

export interface LootReport {
  log: string[];
  drops: Array<{ name: string; stash?: StashId; caps?: number; pack?: string; qty: number }>;
  foeNames: string[];
  summary: string;
}

export interface AngelaState {
  met: boolean;
  mood: "fresh" | "flirt" | "rejected" | "hot" | "mad";
  jetOffer: boolean;
  slept: boolean;
  insulted: boolean;
  lastTalkDay: number;
}

export interface DialogueState {
  who: "angela";
  node: string;
}

export interface Dealer {
  id: string;
  name: string;
  district: DistrictId;
  gang?: GangId;
  wares: StashId[];
  size: "runner" | "corner" | "house";
  note: string;
}

export interface AddressPin {
  id: string;
  name: string;
  x: number;
  z: number;
}

export type RouteThen = "talk" | "meet-dealer" | "meet-mark" | "sleep" | "enter" | "angela";

/** A walk the legs are already doing. Not a teleport. */
export interface RoutePlan {
  id: string;
  label: string;
  x: number;
  z: number;
  waypoints: Array<{ x: number; z: number }>;
  then?: RouteThen;
  who?: string;
  building?: string;
  clear: boolean;
}

export interface RenoBusiness {
  name: string;
  invested: number;
  district: DistrictId;
  openedDay: number;
}

export type MarkMood = "cold" | "warm" | "friend" | "hostile";

export interface Mark {
  id: string;
  name: string;
  district: DistrictId;
  wealth: number;
  title: string;
  gang?: GangId;
  mood: MarkMood;
}

export interface NpcMemory {
  mood: number;
  last: string;
}

export interface StreetJob {
  id: string;
  title: string;
  giver: string;
  from: DistrictId;
  to: DistrictId;
  stage: "carry" | "deliver";
  pay: number;
  item: string;
  blurb: string;
}

/** A clock-in. The city uses you, then gives you back. Rank is merit, not a calendar. */
export interface Employment {
  kind: "counter" | "family" | "raid";
  gang?: GangId;
  employer: string;
  title: string;
  rank: number;
  merit: number;
  calls: number;
  pending?: { skill: string; where: string; blurb: string; pay: number } | null;
}

export interface VassalPaper {
  gang: GangId;
  cut: number;
  since: number;
}

export interface StoryState {
  /** Richard Wright's death, still between the Wrights and the Mordinos. */
  richard: "open" | "named" | "answered";
  /** Jet: Stables bench → racked → Chop Shop route → sold or short. */
  jetRun: "cooking" | "loaded" | "moving" | "short" | "sold";
  /** Bishop paper from the Shark Club desk to the mayor. */
  bishopLetter: "desk" | "carried" | "missing" | "delivered";
  /** Salvatore crate. Rail, then the bar, then inventory. */
  enclaveCrate: "rumor" | "rail" | "bar" | "gone";
  mayorSqueeze: number;
  /** How far the player has stepped into the families' actual business. */
  involvement: number;
  courierMissing: boolean;
  bloodDay: number;
  bloodDistrict: DistrictId | "";
  heard: string[];
}

export interface FamilyLedger {
  cash: number;
  influence: number;
  security: number;
  operation: string;
}

export interface VenueLive {
  cash: number;
  customers: number;
  revenueToday: number;
  occupancy: number;
  activity: string;
}

/** Hourly abstract city. Not a person. Not a frame. */
export interface CityPulse {
  stamp: number;
  demand: number;
  streetCash: number;
  /** Caps still in the pockets of people who do not live here. */
  visitorSpend: number;
  lastColor: string;
  families: Record<GangId, FamilyLedger>;
  venues: Record<string, VenueLive>;
  story: StoryState;
}

export interface RenoLife {
  characterId: string;
  day: number;
  hour: number;
  minute: number;
  /** 0–59. The street clock runs in real seconds unless you speed it up. */
  second?: number;
  /** Game seconds per real second. 1 is real time. 0 holds the clock. */
  clock?: number;
  caps: number;
  hp: number;
  hpMax: number;
  heat: number;
  fame: number;
  district: DistrictId;
  posX: number;
  posZ: number;
  housingId: HousingId | null;
  squatProgress: number;
  gangId: GangId | null;
  gangRank: number;
  gangRep: Record<GangId, number>;
  stash: Record<StashId, number>;
  boxingRank: BoxingRank;
  boxingWins: number;
  boxingLosses: number;
  nextFightDay: number;
  trainBonus: number;
  rentPaidWeek: number;
  addicted: Partial<Record<StashId, number>>;
  lastDose: Partial<Record<StashId, number>>;
  hunger: number;
  thirst: number;
  fatigue: number;
  boredom: number;
  xp: number;
  dealers: Dealer[];
  marks: Mark[];
  soughtDealer: string | null;
  soughtMark: string | null;
  business: RenoBusiness | null;
  dealing: boolean;
  lab: boolean;
  /** Absolute day someone starts hunting stashes or the player. 0 = nobody is looking yet. */
  pressureDay: number;
  rations: number;
  waters: number;
  log: string[];
  combat: CombatState | null;
  sighting: Sighting | null;
  dialogue: DialogueState | null;
  angela: AngelaState;
  dead: boolean;
  loot: LootReport | null;
  inspecting: string | null;
  /** Building id while you are through the door. Null on the sidewalk. */
  insideId: string | null;
  npcMemory: Record<string, NpcMemory>;
  job: StreetJob | null;
  /** Clocked work. Not the same as a one-off delivery. */
  post?: Employment | null;
  /** A family takes a cut and lends muscle. You are not made. */
  vassal?: VassalPaper | null;
  vassalOffer?: GangId | null;
  /** Last game-day the families and the tills ran without you. */
  worldDay: number;
  /** How hard the block flinches. Lags behind a body, fades over days. */
  fear: number;
  /** What strangers actually believe. Lags fame. Fear drags it down. */
  regard: number;
  /** The chase. Trails heat. Families walk it off the strip once this catches up. */
  warrant: number;
  /** Minutes a need has stayed ugly. Penalties wait on this, not the first red tick. */
  strain: number;
  /** Family temperature. High means rival crews are walking toward each other. */
  tension: number;
  /** How hot each family is toward you. Slow. */
  friction: Record<GangId, number>;
  /** One person's memory of you. Keyed by soul id. */
  grudges: Record<string, number>;
  /** Game-day a soul comes back after a street death. */
  absent: Record<string, number>;
  /** Bodies still on the asphalt. Horizontal. The code or a stranger moves them. */
  corpses?: StreetCorpse[];
  /** Knocked out on the pavement. The body stays until they get up. */
  flat?: boolean;
  /** How far each private dance has gone. Keyed by revue id. */
  privateShows?: Record<string, number>;
  /** Absolute minute before the street will square up with you again. */
  reprieveMinute: number;
  /** Far simulation: tills, rooms, family books, story. Advanced once an hour. */
  pulse?: CityPulse;
  /** Corners the player wrote down. Key districts stay in the book without being saved. */
  book?: AddressPin[];
  /** Current on-foot route. Null when you are not being walked somewhere. */
  nav?: RoutePlan | null;
}

export type RenoAction =
  | { type: "travel"; district: DistrictId }
  | { type: "navigate"; x: number; z: number; label: string; then?: RouteThen; who?: string; building?: string }
  | { type: "cancelNav" }
  | { type: "navArrive" }
  | { type: "pin"; name: string; x: number; z: number }
  | { type: "forgetPin"; id: string }
  | { type: "sleep" }
  | { type: "wander" }
  | { type: "rent"; housing: HousingId }
  | { type: "squat"; housing: HousingId }
  | { type: "leaveHome" }
  | { type: "convert" }
  | { type: "payRent" }
  | { type: "joinGang"; gang: GangId }
  | { type: "quitGang" }
  | { type: "gangJob" }
  | { type: "buyChems"; chem: StashId; qty: number }
  | { type: "sellChems"; chem: StashId; qty: number }
  | { type: "joinBoxing" }
  | { type: "train" }
  | { type: "fightCard" }
  | { type: "stimpak" }
  | { type: "oddJob" }
  | { type: "talk"; who: "angela" }
  | { type: "dialogue"; reply: string }
  | { type: "encounter"; choice: "fight" | "flee" | "talk" }
  | { type: "arrive"; district: DistrictId; x: number; z: number }
  | { type: "walkTick"; x: number; z: number }
  | { type: "tickMinute" }
  | { type: "tickClock"; seconds: number }
  | { type: "setClock"; pace: number }
  | { type: "inspect"; building: string | null }
  | { type: "enter" }
  | { type: "exit" }
  | { type: "street"; act: "talk" | "lean" | "bribe" | "shake" | "tip" | "door" | "deliver" }
  | { type: "streetTalk"; actorId: string }
  | { type: "mill" }
  | { type: "linger" }
  | { type: "privateDance"; dancer: string }
  | { type: "loot"; take: boolean }
  | { type: "eat" }
  | { type: "drink"; kind: "water" | "vodka" }
  | { type: "useStash"; stash: StashId }
  | { type: "seekDealer"; dealer: string }
  | { type: "dealBuy"; dealer: string; chem: StashId; qty: number }
  | { type: "seekMark"; mark: string }
  | { type: "markAct"; mark: string; act: "befriend" | "rob" | "kidnap" }
  | { type: "spendSkill"; skill: SkillId }
  | { type: "pickPerk"; perk: PerkId; tagSkill?: SkillId }
  | { type: "courtFamily"; gang: GangId }
  | { type: "carouse" }
  | { type: "business" }
  | { type: "dealing" }
  | { type: "lab" }
  | { type: "stock"; kind: "meal" | "water" }
  | { type: "streetContact"; x: number; z: number; reason: string; surprise: boolean; cause: "feud" | "hunt" | "crime"; foes: Array<{ id: string; name: string; kind: string; x: number; z: number }>; allies: Array<{ id: string; name: string; kind: string; x: number; z: number }> }
  | { type: "combat"; move: CombatMove; part?: BodyPart; q?: number; r?: number; targetId?: string }
  | { type: "rise" }
  | { type: "clockIn"; post: "counter" | "family" | "raid" }
  | { type: "answerCall" }
  | { type: "ignoreCall" }
  | { type: "vassal"; take: boolean };

export type CombatMove =
  | "advance"
  | "withdraw"
  | "sprint-in"
  | "sprint-out"
  | "attack"
  | "aimed"
  | "burst"
  | "crouch"
  | "prone"
  | "stand"
  | "reload"
  | "stimpak"
  | "cover"
  | "defend"
  | "flee"
  | "hex-step"
  | "field-walk"
  | "field-tick";
