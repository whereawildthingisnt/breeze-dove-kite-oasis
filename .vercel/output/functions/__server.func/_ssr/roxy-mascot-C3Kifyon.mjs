import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { g as FolderOpen, l as Plus } from "../_libs/lucide-react.mjs";
import { b as SPECIAL_META, k as cn, n as Button, y as SPECIAL_KEYS } from "./store-CHBbC2-O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roxy-mascot-C3Kifyon.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppShell({ children, special }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed inset-0 opacity-[0.035]",
				style: {
					backgroundImage: "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
					backgroundSize: "48px 48px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[11px] font-semibold tracking-[0.28em] text-muted uppercase",
							children: "SPECIAL d20"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl leading-none font-semibold tracking-tight",
							children: "SPECIAL Forge"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, {}), "Roster"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/new",
								search: { engine: "d20" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "New"]
							})
						})]
					})]
				}), special ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl grid-cols-7 px-1 sm:px-6",
						children: SPECIAL_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-0.5 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-widest text-subtle",
								children: SPECIAL_META[key].letter
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("font-mono text-sm tabular-nums sm:text-base", special[key] <= 2 && "text-danger", special[key] >= 11 && "text-accent"),
								children: special[key]
							})]
						}, key))
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8",
				children
			})
		]
	});
}
var MOOD_CLASS = {
	cheer: "",
	wow: "brightness-110 saturate-125 contrast-110",
	ouch: "brightness-95 saturate-75",
	flirt: "brightness-105 saturate-125 contrast-105"
};
function RoxyFigure({ mood = "cheer", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/mascot/roxy.webp",
		alt: "Roxy, the forge girl",
		className: cn("roxy-idle h-full w-auto max-w-full object-contain object-bottom", MOOD_CLASS[mood], className)
	});
}
function RoxyDock({ lines, compact = false }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const safeLines = lines.length ? lines : [{
		mood: "cheer",
		text: "Roll something. Empty paper makes me mean."
	}];
	const line = safeLines[index % safeLines.length];
	(0, import_react.useEffect)(() => {
		setIndex(0);
	}, [lines.map((l) => l.text).join("|")]);
	(0, import_react.useEffect)(() => {
		if (safeLines.length < 2) return;
		const id = window.setInterval(() => setIndex((n) => n + 1), 7e3);
		return () => window.clearInterval(id);
	}, [safeLines.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "no-print flex flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setIndex((n) => n + 1),
			className: "relative z-10 mb-3 w-full max-w-xs rounded-2xl bg-raised px-4 py-3 text-left shadow-[0_0_0_1px_rgba(236,234,227,0.12)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[11px] tracking-[0.22em] text-accent uppercase",
					children: "Roxy · Forge Girl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-fg",
					children: line.text
				}),
				safeLines.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-mono text-[10px] tracking-widest text-subtle",
					children: [
						index % safeLines.length + 1,
						"/",
						safeLines.length,
						" tap"
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "absolute bottom-[-7px] left-1/2 size-3.5 -translate-x-1/2 rotate-45 bg-raised shadow-[1px_1px_0_rgba(236,234,227,0.12)]"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative flex w-full max-w-xs items-end justify-center overflow-hidden rounded-2xl", compact ? "h-64" : "h-[28rem]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-6 rounded-full bg-accent/10 blur-2xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoxyFigure, {
				mood: line.mood,
				className: compact ? "h-64 drop-shadow-lg" : "h-[28rem] drop-shadow-xl"
			})]
		})]
	});
}
//#endregion
export { RoxyDock as n, AppShell as t };
