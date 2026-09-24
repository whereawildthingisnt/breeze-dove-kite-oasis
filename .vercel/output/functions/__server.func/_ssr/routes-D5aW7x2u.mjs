import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { l as Plus, p as MapPinned, r as Trash2, y as Copy } from "../_libs/lucide-react.mjs";
import { D as characterEngine, H as genderOf, N as derive, c as GENDER_META, n as Button, rt as useRoster, t as BACKGROUNDS, y as SPECIAL_KEYS } from "./store-CHBbC2-O.mjs";
import { n as RoxyDock, t as AppShell } from "./roxy-mascot-C3Kifyon.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D5aW7x2u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const navigate = useNavigate();
	const hydrated = useRoster((s) => s.hydrated);
	const characters = useRoster((s) => s.characters);
	const startNew = useRoster((s) => s.startNew);
	const loadExample = useRoster((s) => s.loadExample);
	const loadPnpExample = useRoster((s) => s.loadPnpExample);
	const remove = useRoster((s) => s.remove);
	const duplicate = useRoster((s) => s.duplicate);
	const setHydrated = useRoster((s) => s.setHydrated);
	(0, import_react.useEffect)(() => {
		if (useRoster.persist.hasHydrated()) setHydrated(true);
	}, [setHydrated]);
	function createNew(engine) {
		startNew(engine);
		navigate({
			to: "/new",
			search: { engine }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.28em] text-subtle uppercase",
				children: "SPECIAL Forge · two desks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-1 max-w-xl text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl",
				children: "Make a person. Keep the ugly rolls."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Two character desks, one roster. Roll 1d10 seven times either way. Ones stay ones. Nothing is padded to 35 or shaved to 55. Stats do not cap at 10. Finish a d100 sheet and New Reno opens — rent, squats, families, chems, the Ring."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => createNew("d20"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "New d20 character"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					onClick: () => createNew("pnp"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "New PnP d100 character"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => {
						const example = loadExample();
						navigate({
							to: "/sheet/$id",
							params: { id: example.id }
						});
					},
					children: "Load d20 example"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => {
						const example = loadPnpExample();
						navigate({
							to: "/reno/$id",
							params: { id: example.id }
						});
					},
					children: "Load PnP example into New Reno"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoxyDock, {
					compact: true,
					lines: [{
						mood: "flirt",
						text: "I'm Roxy. Pick a desk. d20 is the new engine. d100 is the old Fallout PnP sheet — still rolled, still uncapped, no backgrounds."
					}]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold",
						children: "Roster"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-subtle tabular-nums",
						children: hydrated ? characters.length : "—"
					})]
				}), !hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 rounded-xl bg-surface" }) : characters.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl bg-surface px-5 py-8 shadow-[0_0_0_1px_rgba(236,234,227,0.08)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Empty folder. Roxy is bored. Roll a d20 array, or open the old percentile desk."
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: characters.map((c) => {
						const d = derive(c);
						const engine = characterEngine(c);
						const bg = engine === "pnp" ? "PnP d100" : c.backgroundId === "custom" ? c.customBackground.name : c.backgroundId === "none" ? "—" : BACKGROUNDS.find((b) => b.id === c.backgroundId)?.name;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-col gap-3 rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,227,0.08)] sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sheet/$id",
								params: { id: c.id },
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xl leading-none",
										children: c.name.trim() || "Unnamed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											bg,
											" · ",
											GENDER_META[genderOf(c)].name,
											" · Lv ",
											c.level,
											" · HP ",
											d.hp,
											" · AP ",
											d.ap
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-mono text-[11px] tracking-wide text-subtle",
										children: SPECIAL_KEYS.map((k) => `${k}${d.special[k]}`).join("  ")
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									engine === "pnp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										size: "sm",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/reno/$id",
											params: { id: c.id },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, {}), "Reno"]
										})
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										"aria-label": "Duplicate",
										onClick: () => duplicate(c.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										"aria-label": "Delete",
										onClick: () => remove(c.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
									})
								]
							})]
						}, c.id);
					})
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoxyDock, { lines: [{
				mood: "flirt",
				text: "I'm Roxy. Pick a desk. d20 is the new engine. d100 is the old Fallout PnP sheet — still rolled, still uncapped, no backgrounds."
			}] })
		})]
	}) });
}
//#endregion
export { Home as component };
