import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { a as Search, d as Minus, l as Plus, r as Trash2, s as Save, v as Dices } from "../_libs/lucide-react.mjs";
import { i as Route$2 } from "./router-B4NkMof1.mjs";
import { D as characterEngine, F as describeSpecial, G as pathNotes, H as genderOf, L as emptySpecial, M as defaultAddQty, N as derive, P as describeItem, Q as setQty, R as ensureLoadout, S as addAndSlot, U as getItem, X as rollD10, Y as rollArray, _ as SKILL_IDS, a as D20_TRAIT_IDS, b as SPECIAL_META, c as GENDER_META, et as sumSpecial, f as PNP_TRAITS, g as SCARS, i as CATEGORIES, k as cn, l as KITS, n as Button, o as EDUCATIONS, p as PNP_TRAIT_IDS, q as removeStack, r as CATALOG, rt as useRoster, s as GENDER_IDS, t as BACKGROUNDS, u as LIVES, v as SKILL_META, w as applyKit, x as TRAITS, y as SPECIAL_KEYS } from "./store-CHBbC2-O.mjs";
import { n as RoxyDock, t as AppShell } from "./roxy-mascot-C3Kifyon.mjs";
import { n as LoadoutBoard, t as Badge } from "./loadout-board-DvCxvGCw.mjs";
import { n as mascotLines, t as CharacterSheet } from "./character-sheet-ysEPB0Jv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-CHloUYnW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-inset px-3 text-sm text-fg shadow-[0_0_0_1px_rgba(236,234,227,0.1)] transition-[box-shadow] duration-150 placeholder:text-subtle hover:shadow-[0_0_0_1px_rgba(236,234,227,0.18)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-accent)] disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function EquipmentDesk({ character, onChange }) {
	const engine = characterEngine(character);
	const loadout = ensureLoadout(character.loadout);
	const derived = derive(character);
	const pnp = engine === "pnp";
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const items = (0, import_react.useMemo)(() => {
		const category = CATEGORIES.find((c) => c.id === cat) ?? CATEGORIES[0];
		const q = query.trim().toLowerCase();
		return CATALOG.filter((item) => {
			if (item.id === "fists") return false;
			if (!category.test(item)) return false;
			if (!q) return true;
			return item.name.toLowerCase().includes(q) || item.id.includes(q) || (item.notes?.toLowerCase().includes(q) ?? false) || (item.skill?.toLowerCase().includes(q) ?? false);
		});
	}, [cat, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl font-semibold tracking-tight",
				children: "Equipment"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: pnp ? "Classic PnP list. Pick weapons, armor, ammo, chems, and gear. Slots are left/right hands, body, helmet, and pockets." : "Same PnP list, converted for d20: armor AC is the PnP AC divided by 5. Damage dice, AP, range, and DT/DR stay as written."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: derived.overweight ? "danger" : "outline",
						children: [
							derived.carriedWeight,
							"/",
							derived.carryWeight,
							" lb"
						]
					}),
					derived.gearArmorAc > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "ok",
						children: [pnp ? `Armor AC ${derived.gearArmorAc}%` : `Armor AC ${derived.gearArmorAc}`, derived.gearDt || derived.gearDr ? ` · DT ${derived.gearDt}/DR ${derived.gearDr}%` : ""]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: "No armor worn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						children: [loadout.pack.length, " stacks"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
					children: "Starting kits"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2",
					children: KITS.map((kit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onChange(applyKit(loadout, kit, true)),
						className: "rounded-lg bg-raised px-3 py-3 text-left transition-colors hover:bg-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: kit.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: kit.pitch
						})]
					}, kit.id))
				}),
				loadout.pack.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "mt-2",
					onClick: () => onChange(ensureLoadout(null)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Empty pack"]
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadoutBoard, {
				character,
				onChange
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
				children: "Pack"
			}), loadout.pack.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nothing yet. Add from the catalog below. Items auto-slot if the matching body slot or pocket is empty."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: loadout.pack.map((stack) => {
					const item = getItem(stack.itemId);
					if (!item) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 rounded-md bg-raised px-2 py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-mono text-[11px] text-subtle",
								children: describeItem(item, engine)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "icon-sm",
									variant: "ghost",
									"aria-label": `Fewer ${item.name}`,
									onClick: () => onChange(setQty(loadout, stack.uid, stack.qty - 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-6 text-center font-mono text-sm tabular-nums",
									children: stack.qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "icon-sm",
									variant: "ghost",
									"aria-label": `More ${item.name}`,
									onClick: () => onChange(setQty(loadout, stack.uid, stack.qty + 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "icon-sm",
									variant: "ghost",
									"aria-label": `Remove ${item.name}`,
									onClick: () => onChange(removeStack(loadout, stack.uid)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
								})
							]
						})]
					}, stack.uid);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
					children: "Catalog · PnP converted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-3 left-3 size-4 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search every weapon, armor, chem, and tool",
						className: "pl-9"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 flex gap-1 overflow-x-auto pb-1",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCat(c.id),
						className: cn("rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors", cat === c.id ? "bg-accent text-accent-fg" : "text-muted hover:bg-raised hover:text-fg"),
						children: c.label
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-[28rem] space-y-1 overflow-y-auto pr-1",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onChange(addAndSlot(loadout, item.id, defaultAddQty(item))),
						className: "flex w-full items-start gap-3 rounded-md px-2 py-2 text-left hover:bg-raised",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-inset font-mono text-[10px] text-subtle uppercase",
								children: item.kind === "weapon" ? item.skill?.slice(0, 2) : item.kind.slice(0, 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-mono text-[11px] text-muted",
										children: describeItem(item, engine)
									}),
									item.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-[11px] text-subtle",
										children: item.notes
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mt-1 size-4 shrink-0 text-subtle" })
						]
					}) }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-[11px] text-subtle",
					children: [items.length, " listed"]
				})
			] })
		]
	});
}
function parseLoose(raw) {
	const trimmed = raw.trim();
	if (trimmed === "" || trimmed === "-" || trimmed === "+") return null;
	const n = Number(trimmed);
	if (!Number.isFinite(n)) return null;
	return Math.trunc(n);
}
function StatStepper({ value, onChange, disabledPlus, disabledMinus, ariaLabel, size = "md" }) {
	const large = size === "lg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center rounded-md bg-inset shadow-[0_0_0_1px_rgba(236,234,227,0.1)]", large ? "h-12" : "h-11"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Decrease ${ariaLabel}`,
				disabled: disabledMinus,
				onClick: () => onChange(value - 1),
				className: cn("grid place-items-center text-muted transition-colors hover:text-fg disabled:opacity-30", large ? "size-12" : "size-11"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				"aria-label": ariaLabel,
				inputMode: "numeric",
				value: Number.isFinite(value) ? String(value) : "0",
				onChange: (e) => {
					const parsed = parseLoose(e.target.value);
					if (parsed !== null) onChange(parsed);
				},
				className: cn("w-14 bg-transparent text-center font-mono tabular-nums text-fg focus-visible:outline-none", large ? "text-xl" : "text-lg")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Increase ${ariaLabel}`,
				disabled: disabledPlus,
				onClick: () => onChange(value + 1),
				className: cn("grid place-items-center text-muted transition-colors hover:text-fg disabled:opacity-30", large ? "size-12" : "size-11"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})
		]
	});
}
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
	ref,
	className: cn("text-xs font-medium tracking-wide text-muted uppercase", className),
	...props
}));
Label.displayName = "Label";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md bg-inset px-3 py-2.5 text-sm text-fg shadow-[0_0_0_1px_rgba(236,234,227,0.1)] transition-[box-shadow] duration-150 placeholder:text-subtle hover:shadow-[0_0_0_1px_rgba(236,234,227,0.18)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-accent)] disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var STEPS_D20 = [
	"Dossier",
	"SPECIAL",
	"Background",
	"Free points",
	"Past",
	"Traits",
	"Tags",
	"Equipment",
	"Review"
];
var STEPS_PNP = [
	"Dossier",
	"SPECIAL",
	"Free points",
	"Past",
	"Traits",
	"Tags",
	"Equipment",
	"Review"
];
function ForgeWizard({ mode }) {
	const navigate = useNavigate();
	const draft = useRoster((s) => s.draft);
	const patchDraft = useRoster((s) => s.patchDraft);
	const saveDraft = useRoster((s) => s.saveDraft);
	const engine = draft ? characterEngine(draft) : "d20";
	const steps = engine === "pnp" ? STEPS_PNP : STEPS_D20;
	const [step, setStep] = (0, import_react.useState)(mode === "edit" ? steps.length - 1 : 0);
	const derived = draft ? derive(draft) : null;
	const lines = (0, import_react.useMemo)(() => draft ? mascotLines(draft) : [], [draft]);
	if (!draft || !derived) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "No character loaded."
	}) });
	const label = steps[Math.min(step, steps.length - 1)] ?? "Dossier";
	function save() {
		const saved = saveDraft();
		if (!saved) return;
		if (characterEngine(saved) === "pnp") navigate({
			to: "/reno/$id",
			params: { id: saved.id }
		});
		else navigate({
			to: "/sheet/$id",
			params: { id: saved.id }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		special: derived.special,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
					children: [
						mode === "edit" ? "Revise" : "Create",
						" ·",
						" ",
						engine === "pnp" ? "Fallout PnP d100" : "SPECIAL d20",
						" · no safety net"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: draft.name.trim() || "New personnel"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: save,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {}), engine === "pnp" ? "Save and enter New Reno" : "Save to roster"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "no-print mb-6 flex gap-1 overflow-x-auto pb-1",
				children: steps.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setStep(i),
					className: cn("rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors", i === step ? "bg-accent text-accent-fg" : "text-muted hover:bg-raised hover:text-fg"),
					children: [
						i + 1,
						". ",
						name
					]
				}, name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface p-5 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
					children: [
						label === "Dossier" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierStep, {
							draft,
							patch: patchDraft
						}) : null,
						label === "SPECIAL" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialStep, {
							draft,
							patch: patchDraft
						}) : null,
						label === "Background" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundStep, {
							draft,
							patch: patchDraft
						}) : null,
						label === "Free points" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FreeStep, {
							draft,
							patch: patchDraft
						}) : null,
						label === "Past" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PastStep, {
							draft,
							patch: patchDraft
						}) : null,
						label === "Traits" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TraitStep, {
							draft,
							patch: patchDraft
						}) : null,
						label === "Tags" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagStep, {
							draft,
							patch: patchDraft
						}) : null,
						label === "Equipment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentDesk, {
							character: draft,
							onChange: (loadout) => patchDraft({ loadout })
						}) : null,
						label === "Review" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewStep, {
							draft,
							patch: patchDraft,
							onSave: save
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								disabled: step === 0,
								onClick: () => setStep((s) => Math.max(0, s - 1)),
								children: "Back"
							}), step < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setStep((s) => s + 1),
								children: "Next"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: save,
								children: "Save character"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 lg:sticky lg:top-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoxyDock, {
						lines,
						compact: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterSheet, {
						character: draft,
						compact: true
					})]
				})]
			})
		]
	});
}
function DossierStep({ draft, patch }) {
	const pnp = characterEngine(draft) === "pnp";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Dossier",
				body: pnp ? "Classic Fallout PnP. No backgrounds. Skills are percentile. SPECIAL is still rolled and uncapped." : "Name is optional until you save. Level feeds derived stats live. Armor AC is a fallback if you skip the equipment step."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Name",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: draft.name,
					placeholder: "Personnel name",
					onChange: (e) => patch({ name: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
				label: "Gender",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: GENDER_IDS.map((id) => {
						const selected = genderOf(draft) === id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => patch({ gender: id }),
							className: cn("min-h-11 rounded-lg px-3 py-2 text-left transition-colors", selected ? "bg-accent text-accent-fg" : "bg-raised text-fg hover:bg-border"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: GENDER_META[id].name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("mt-0.5 block text-[11px] leading-snug", selected ? "text-accent-fg/80" : "text-subtle"),
								children: [
									GENDER_META[id].pronoun,
									"/",
									GENDER_META[id].object
								]
							})]
						}, id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-subtle",
					children: GENDER_META[genderOf(draft)].blurb
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Level",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStepper, {
						ariaLabel: "Level",
						value: draft.level,
						onChange: (level) => patch({ level })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Armor AC (if nothing worn)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStepper, {
						ariaLabel: "Armor AC",
						value: draft.armorAc,
						onChange: (armorAc) => patch({ armorAc })
					})
				})]
			}),
			pnp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Karma",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStepper, {
					ariaLabel: "Karma",
					value: draft.karma ?? 0,
					onChange: (karma) => patch({ karma })
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Appearance",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 3,
					value: draft.appearance,
					onChange: (e) => patch({ appearance: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "History",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 3,
					value: draft.history,
					onChange: (e) => patch({ history: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Goals",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 2,
					value: draft.goals,
					onChange: (e) => patch({ goals: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Equipment notes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 2,
					value: draft.equipment,
					onChange: (e) => patch({ equipment: e.target.value })
				})
			})
		]
	});
}
function SpecialStep({ draft, patch }) {
	const total = sumSpecial(draft.rolled);
	const pnp = characterEngine(draft) === "pnp";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Roll SPECIAL",
				body: pnp ? "Classic PnP started everyone at 5 and handed out 5 points. Here you still roll 1d10 each. Ones stay ones. No racial min/max. Type any integer." : "1d10 each. Ones stay ones. Twos stay twos. Totals are not raised to 35 or cut to 55. Type any integer you want — including 0, negatives, and numbers past 10."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => patch({ rolled: rollArray() }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, {}), "Roll full array"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => patch({ rolled: emptySpecial(0) }),
						children: "Zero the dice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						children: ["Rolled total ", total]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: SPECIAL_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialRow, {
					attr: key,
					value: draft.rolled[key],
					onChange: (n) => patch({ rolled: {
						...draft.rolled,
						[key]: n
					} }),
					onReroll: () => patch({ rolled: {
						...draft.rolled,
						[key]: rollD10()
					} })
				}, key))
			})
		]
	});
}
function SpecialRow({ attr, value, onChange, onReroll }) {
	const meta = SPECIAL_META[attr];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2 rounded-lg bg-raised px-3 py-3 sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs tracking-widest text-accent",
					children: attr
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: meta.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: meta.blurb
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStepper, {
				ariaLabel: meta.name,
				value,
				onChange
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: onReroll,
				children: "d10"
			})]
		})]
	});
}
function BackgroundStep({ draft, patch }) {
	const customSpent = sumSpecial(draft.customBackground.special);
	const customSkills = Object.values(draft.customBackground.skills).reduce((n, v) => n + (v ?? 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Background",
				body: "Every background is exactly +5 SPECIAL, already baked into the package. Custom still has to land on +5 SPECIAL and +5 skill ranks."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: BACKGROUNDS.map((bg) => {
					const active = draft.backgroundId === bg.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => patch({ backgroundId: bg.id }),
						className: cn("rounded-lg px-3 py-3 text-left transition-colors", active ? "bg-accent text-accent-fg" : "bg-raised hover:bg-border"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: bg.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-1 text-xs", active ? "text-accent-fg/80" : "text-muted"),
								children: bg.pitch
							}),
							bg.id !== "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-2 font-mono text-[11px]", active ? "text-accent-fg/70" : "text-subtle"),
								children: SPECIAL_KEYS.filter((k) => (bg.special[k] ?? 0) > 0).map((k) => `${k} +${bg.special[k]}`).join(" · ")
							}) : null
						]
					}, bg.id);
				})
			}),
			draft.backgroundId === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-lg bg-raised p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Custom name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draft.customBackground.name,
							onChange: (e) => patch({ customBackground: {
								...draft.customBackground,
								name: e.target.value
							} })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"SPECIAL spent ",
							customSpent,
							"/",
							5,
							" · skills",
							" ",
							customSkills,
							"/",
							5
						]
					}),
					SPECIAL_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs",
							children: key
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStepper, {
							ariaLabel: `Custom ${key}`,
							value: draft.customBackground.special[key],
							onChange: (n) => patch({ customBackground: {
								...draft.customBackground,
								special: {
									...draft.customBackground.special,
									[key]: n
								}
							} })
						})]
					}, key)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: SKILL_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: SKILL_META[id].name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStepper, {
								ariaLabel: `Custom ${SKILL_META[id].name}`,
								value: draft.customBackground.skills[id] ?? 0,
								onChange: (n) => patch({ customBackground: {
									...draft.customBackground,
									skills: {
										...draft.customBackground.skills,
										[id]: n
									}
								} })
							})]
						}, id))
					})
				]
			}) : null
		]
	});
}
function FreeStep({ draft, patch }) {
	const remaining = 5 - sumSpecial(draft.free);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Five free points",
				body: "Place +5 wherever you want. They may raise an attribute above 10. The budget is 5 points — the stats themselves have no cap."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				variant: remaining === 0 ? "ok" : "outline",
				children: [remaining, " unspent"]
			}),
			SPECIAL_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 rounded-lg bg-raised px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs tracking-widest text-accent",
					children: key
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm",
					children: SPECIAL_META[key].name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStepper, {
					ariaLabel: `Free ${key}`,
					value: draft.free[key],
					disabledPlus: remaining <= 0,
					onChange: (n) => {
						const next = {
							...draft.free,
							[key]: n
						};
						if (sumSpecial(next) > 5 && n > draft.free[key]) return;
						patch({ free: next });
					}
				})]
			}, key)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
					title: "Permanent adjust",
					body: "Mutations, cyberware, aging, GM fiat. No floor. No ceiling."
				}), SPECIAL_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs",
						children: key
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStepper, {
						ariaLabel: `Adjust ${key}`,
						value: draft.adjust[key],
						onChange: (n) => patch({ adjust: {
							...draft.adjust,
							[key]: n
						} })
					})]
				}, key))]
			})
		]
	});
}
function PastStep({ draft, patch }) {
	const derived = derive(draft);
	const educationId = draft.educationId ?? "none";
	const lifeId = draft.lifeId ?? "none";
	const scars = draft.scars ?? [];
	const pnp = characterEngine(draft) === "pnp";
	function toggleScar(id) {
		const has = scars.includes(id);
		let next = has ? scars.filter((s) => s !== id) : [...scars, id];
		if (!has && next.length > 2) next = [...next.slice(1)];
		patch({ scars: next });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Past",
				body: pnp ? "Education and life are how a d100 sheet gets a biography without a background package. They rewrite skill formulas, shift SPECIAL, and can change HP, AP, carry, healing — the whole derived block. Scars cost something and pay something back." : "Background is the job. Education and life are how you got there. They rewrite skill formulas, not just add ranks, and they can rewrite HP and other derived stats. Scars are a bill with a refund."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					"Path SPECIAL on this sheet:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-fg",
						children: describeSpecial(derived.pathSpecial)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathPicker, {
				title: "Education",
				hint: "One. What sat in your head before the campaign.",
				items: EDUCATIONS,
				activeId: educationId,
				onPick: (id) => patch({ educationId: id })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathPicker, {
				title: "Life",
				hint: "One. The years that put you on this paper. Stacks with education. Later rewrites win if they touch the same skill.",
				items: LIVES,
				activeId: lifeId,
				onPick: (id) => patch({ lifeId: id })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg font-semibold",
						children: "Scars"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Up to ",
							2,
							". Each one hurts and each one pays — a penalty plus a benefit, stacked after education and life. A glass eye will override a firing-line gun formula."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							scars.length,
							"/",
							2,
							" marked"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathGrid, {
						items: SCARS,
						isActive: (id) => scars.includes(id),
						danger: true,
						onPick: (id) => toggleScar(id)
					})
				]
			})
		]
	});
}
function PathPicker({ title, hint, items, activeId, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display text-lg font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathGrid, {
				items,
				isActive: (id) => id === activeId,
				onPick: (id) => onPick(id)
			})
		]
	});
}
function PathGrid({ items, isActive, onPick, danger = false }) {
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = items.filter((item) => {
		if (!q.trim()) return true;
		return `${item.name} ${item.summary} ${item.story}`.toLowerCase().includes(q.trim().toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: `Filter ${items.length} options`,
				"aria-label": "Filter paths"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, {
					active: isActive(item.id),
					name: item.name,
					summary: item.summary,
					story: item.story,
					special: describeSpecial(item.special),
					notes: pathNotes(item),
					danger,
					onClick: () => onPick(item.id)
				}, item.id))
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nothing matches that filter."
			}) : null
		]
	});
}
function PathCard({ active, name, summary, story, special, notes, danger = false, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("w-full rounded-lg px-4 py-3 text-left transition-colors", active ? danger ? "bg-danger text-fg" : "bg-accent text-accent-fg" : "bg-raised hover:bg-border"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-baseline justify-between gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: name
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-0.5 text-xs leading-snug", active ? danger ? "text-fg/70" : "text-accent-fg/70" : "text-subtle"),
				children: summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-1 text-sm", active ? danger ? "text-fg/85" : "text-accent-fg/80" : "text-muted"),
				children: active ? story : story.length > 110 ? `${story.slice(0, 110)}…` : story
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2 font-mono text-[11px]", active ? danger ? "text-fg/70" : "text-accent-fg/70" : "text-subtle"),
				children: special
			}),
			notes.length && active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: cn("mt-1 space-y-0.5 text-xs", danger ? "text-fg/75" : "text-accent-fg/75"),
				children: notes.map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, `${i}-${note}`))
			}) : null
		]
	});
}
function TraitStep({ draft, patch }) {
	const pnp = characterEngine(draft) === "pnp";
	const ids = pnp ? PNP_TRAIT_IDS : D20_TRAIT_IDS;
	function toggle(id) {
		const has = draft.traits.includes(id);
		let traits = has ? draft.traits.filter((t) => t !== id) : [...draft.traits, id];
		if (pnp && !has && traits.length > 2) traits = [...traits.slice(1)];
		patch({ traits });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Traits",
				body: pnp ? "Classic PnP allows two traits. Picking a third replaces the oldest. These use the original d100 effects." : "Classic Fallout trait list, converted to d20 numbers (percents ÷ 5). Lifegiver is a perk, not a trait. Pick as many as the table allows — the desk does not cap the count."
			}),
			pnp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					draft.traits.length,
					"/",
					2,
					" selected"
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: ids.map((id) => {
					const active = draft.traits.includes(id);
					const t = pnp ? PNP_TRAITS[id] : TRAITS[id];
					if (!t) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggle(id),
						className: cn("w-full rounded-lg px-4 py-3 text-left transition-colors", active ? "bg-accent text-accent-fg" : "bg-raised hover:bg-border"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs", active ? "text-accent-fg/70" : "text-subtle"),
								children: t.summary
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-1 text-sm", active ? "text-accent-fg/80" : "text-muted"),
							children: t.detail
						})]
					}, id);
				})
			})
		]
	});
}
function TagStep({ draft, patch }) {
	const derived = derive(draft);
	const pnp = characterEngine(draft) === "pnp";
	function toggle(id) {
		const has = draft.tagged.includes(id);
		let tagged = has ? draft.tagged.filter((s) => s !== id) : [...draft.tagged, id];
		if (!has && tagged.length > 3) tagged = [...tagged.slice(1)];
		patch({ tagged });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Tag skills",
				body: pnp ? "Three tags, no more, no less in the original rules. Each tagged skill gets +20% and grows twice as fast." : "Three tags, +4 each, applied after formulas, background, and traits. Tagging a fourth replaces the oldest."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					draft.tagged.length,
					"/",
					3,
					" tagged"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1",
				children: SKILL_IDS.map((id) => {
					const active = draft.tagged.includes(id);
					const row = derived.skills[id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggle(id),
						className: cn("flex w-full items-center justify-between rounded-md px-3 py-2 text-left", active ? "bg-accent text-accent-fg" : "hover:bg-raised"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [SKILL_META[id].name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("ml-2 text-xs", active ? "text-accent-fg/70" : "text-subtle"),
							children: SKILL_META[id].blurb
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono tabular-nums",
							children: [row.total, pnp ? "%" : ""]
						})]
					}, id);
				})
			})
		]
	});
}
function ReviewStep({ draft, patch, onSave }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				title: "Review",
				body: characterEngine(draft) === "pnp" ? "Save drops you on Virgin Street. New Reno is the d100 life — housing, families, chems, the Ring." : "Derived numbers update from the live SPECIAL. Worn armor feeds AC. Save stores the dossier in this browser."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Notes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 4,
					value: draft.notes,
					onChange: (e) => patch({ notes: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onSave,
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {}), characterEngine(draft) === "pnp" ? "Save and enter New Reno" : "Save to roster"]
			})
		]
	});
}
function Header({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-display text-2xl font-semibold tracking-tight",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm text-muted",
		children: body
	})] });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function NewCharacter() {
	const { engine } = Route$2.useSearch();
	const draft = useRoster((s) => s.draft);
	const startNew = useRoster((s) => s.startNew);
	(0, import_react.useEffect)(() => {
		if (!draft || characterEngine(draft) !== engine) startNew(engine);
	}, [
		draft,
		engine,
		startNew
	]);
	if (!draft) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForgeWizard, { mode: "create" });
}
//#endregion
export { NewCharacter as component };
