import { y as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { x as Ban } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { $ as stackItem, B as findStack, D as characterEngine, J as resistLine, K as putInPocket, N as derive, O as clearPocket, P as describeItem, R as ensureLoadout, T as armorAcFor, U as getItem, V as formatDamage, h as POCKET_LABELS, k as cn, m as POCKET_IDS, n as Button, nt as unequip, z as equip } from "./store-CHBbC2-O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/loadout-board-DvCxvGCw.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-sm px-1.5 py-0.5 font-mono text-[11px] font-medium tracking-wide uppercase", {
	variants: { variant: {
		default: "bg-raised text-muted",
		accent: "bg-accent text-accent-fg",
		outline: "text-muted shadow-[0_0_0_1px_rgba(236,234,227,0.14)]",
		danger: "bg-danger/15 text-danger",
		ok: "bg-ok/15 text-ok"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var BODY_SLOTS = [
	{
		id: "head",
		label: "Head",
		hint: "Helmet"
	},
	{
		id: "body",
		label: "Body",
		hint: "Armor"
	},
	{
		id: "left",
		label: "Left hand",
		hint: "Weapon"
	},
	{
		id: "right",
		label: "Right hand",
		hint: "Weapon"
	}
];
function LoadoutBoard({ character, onChange, compact = false }) {
	const engine = characterEngine(character);
	const loadout = ensureLoadout(character.loadout);
	const derived = derive(character);
	const interactive = Boolean(onChange);
	const bodyItem = stackItem(loadout, loadout.body);
	const helmetIncluded = Boolean(bodyItem?.includesHelmet);
	function patch(next) {
		onChange?.(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
			children: [BODY_SLOTS.filter((slot) => {
				return !((slot.id === "left" || slot.id === "right") && Boolean(loadout.left) && loadout.left === loadout.right && slot.id === "left");
			}).map((slot) => {
				const twoHand = (slot.id === "left" || slot.id === "right") && Boolean(loadout.left) && loadout.left === loadout.right;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlotCard, {
					title: twoHand ? "Both hands" : slot.label,
					hint: slot.id === "head" && helmetIncluded ? "Built into the suit" : slot.hint,
					className: cn(slot.id === "head" && "sm:col-start-2 sm:row-start-1", slot.id === "left" && "sm:col-start-1 sm:row-start-2", slot.id === "right" && "sm:col-start-3 sm:row-start-2", slot.id === "body" && "sm:col-start-2 sm:row-start-3"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquippedBlock, {
						loadout,
						uid: slot.id === "head" && helmetIncluded ? loadout.body : loadout[slot.id],
						engine,
						included: slot.id === "head" && helmetIncluded,
						strength: derived.special.STR
					}), interactive && !(slot.id === "head" && helmetIncluded) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotPicker, {
						loadout,
						slot: slot.id,
						onPick: (uid) => patch(equip(loadout, uid, slot.id)),
						onClear: () => patch(unequip(loadout, slot.id))
					}) : null]
				}, slot.id);
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden items-center justify-center sm:col-start-2 sm:row-start-2 sm:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyFigure, {
					helmet: Boolean(loadout.head) || helmetIncluded,
					armor: Boolean(loadout.body),
					left: Boolean(loadout.left),
					right: Boolean(loadout.right)
				})
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
			children: "Pockets"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid gap-2", compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"),
			children: POCKET_IDS.map((pocket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlotCard, {
				title: POCKET_LABELS[pocket],
				hint: "Quick access",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquippedBlock, {
					loadout,
					uid: loadout.pockets[pocket],
					engine,
					strength: derived.special.STR
				}), interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotPicker, {
					loadout,
					slot: pocket,
					onPick: (uid) => patch(putInPocket(loadout, uid, pocket)),
					onClear: () => patch(clearPocket(loadout, pocket))
				}) : null]
			}, pocket))
		})] })]
	});
}
function SlotCard({ title, hint, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-lg bg-raised px-3 py-3 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
				children: title
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-subtle",
				children: hint
			}) : null]
		}), children]
	});
}
function EquippedBlock({ loadout, uid, engine, included, strength }) {
	const stack = findStack(loadout, uid);
	const item = stackItem(loadout, uid);
	if (!stack || !item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-subtle",
		children: "Empty"
	});
	const heavy = item.kind === "weapon" && strength < item.minSt;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium leading-snug",
				children: item.name
			}), stack.qty > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-xs tabular-nums text-muted",
				children: ["×", stack.qty]
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 font-mono text-[11px] text-muted",
			children: describeItem(item, engine)
		}),
		item.kind === "weapon" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 font-mono text-[11px] text-subtle",
			children: [formatDamage(item, engine), item.ammo?.length ? ` · ${item.ammo.map((id) => getItem(id)?.name ?? id).join(" / ")}` : ""]
		}) : null,
		item.kind === "armor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 font-mono text-[11px] text-subtle",
			children: [engine === "pnp" ? `AC ${armorAcFor(item, engine)}%` : `AC ${armorAcFor(item, engine)}`, resistLine(item) ? ` · ${resistLine(item)}` : ""]
		}) : null,
		included ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
			variant: "outline",
			className: "mt-1",
			children: "Helmet included"
		}) : null,
		heavy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-[11px] text-danger",
			children: [
				"Min ST ",
				item.minSt,
				". You have ",
				strength,
				"."
			]
		}) : null,
		item.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[11px] text-subtle",
			children: item.notes
		}) : null
	] });
}
function SlotPicker({ loadout, slot, onPick, onClear }) {
	const filled = slot === "head" || slot === "body" || slot === "left" || slot === "right" ? loadout[slot] : loadout.pockets[slot];
	const options = loadout.pack.filter((stack) => {
		const item = getItem(stack.itemId);
		if (!item) return false;
		if (slot === "head") return item.kind === "helmet";
		if (slot === "body") return item.kind === "armor";
		if (slot === "left" || slot === "right") return item.kind === "weapon";
		if (slot === "ammo") return item.kind === "ammo" || item.pocket === "ammo";
		if (slot === "chems") return item.kind === "chem";
		if (slot === "aid") return item.pocket === "aid" || item.id.includes("stim");
		return item.kind !== "armor" && item.kind !== "helmet";
	});
	if (options.length === 0 && !filled) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-[11px] text-subtle",
		children: "Nothing in the pack fits."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex flex-wrap gap-1",
		children: [filled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			size: "sm",
			variant: "ghost",
			onClick: onClear,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, {}), "Unequip"]
		}) : null, options.map((stack) => {
			const item = getItem(stack.itemId);
			if (!item) return null;
			const active = stack.uid === filled;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onPick(stack.uid),
				className: cn("rounded-md px-2 py-1 text-left text-[11px] transition-colors", active ? "bg-accent text-accent-fg" : "bg-inset text-muted hover:text-fg"),
				children: [item.name, stack.qty > 1 ? ` ×${stack.qty}` : ""]
			}, stack.uid);
		})]
	});
}
function BodyFigure({ helmet, armor, left, right }) {
	const on = "var(--color-accent)";
	const off = "color-mix(in oklab, var(--color-fg) 22%, transparent)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 220",
		className: "h-56 w-32",
		"aria-hidden": true,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "22",
				r: "16",
				stroke: helmet ? on : off,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "38",
				y: "42",
				width: "44",
				height: "64",
				rx: "8",
				stroke: armor ? on : off,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M38 50 L18 108",
				stroke: left ? on : off,
				strokeWidth: "2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M82 50 L102 108",
				stroke: right ? on : off,
				strokeWidth: "2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 106 L42 200",
				stroke: off,
				strokeWidth: "2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M72 106 L78 200",
				stroke: off,
				strokeWidth: "2",
				strokeLinecap: "round"
			})
		]
	});
}
function PackTable({ character, compact = false }) {
	const engine = characterEngine(character);
	const loadout = ensureLoadout(character.loadout);
	const derived = derive(character);
	if (loadout.pack.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Pack is empty."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "text-left text-[11px] tracking-wide text-subtle uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 font-medium",
						children: "Item"
					}),
					!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-2 py-2 font-medium",
						children: "Stats"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-2 py-2 text-right font-medium",
						children: "Qty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-2 py-2 text-right font-medium",
						children: "Lb"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: loadout.pack.map((stack) => {
				const item = getItem(stack.itemId);
				if (!item) return null;
				const where = loadout.head === stack.uid ? "Head" : loadout.body === stack.uid ? "Body" : loadout.left === stack.uid || loadout.right === stack.uid ? loadout.left === loadout.right ? "Both hands" : loadout.left === stack.uid ? "Left" : "Right" : POCKET_IDS.find((p) => loadout.pockets[p] === stack.uid);
				const loc = where ? typeof where === "string" && where in POCKET_LABELS ? POCKET_LABELS[where] : where : "Pack";
				const heavy = item.kind === "weapon" && derived.special.STR < item.minSt;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[11px] text-subtle",
								children: [loc, heavy ? " · too heavy" : ""]
							})]
						}),
						!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-2 py-2 font-mono text-[11px] text-muted",
							children: describeItem(item, engine)
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-2 py-2 text-right font-mono tabular-nums",
							children: stack.qty
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-2 py-2 text-right font-mono tabular-nums",
							children: (item.weight * stack.qty).toFixed(item.weight % 1 ? 1 : 0)
						})
					]
				}, stack.uid);
			}) })]
		})
	});
}
//#endregion
export { LoadoutBoard as n, PackTable as r, Badge as t };
