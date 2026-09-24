import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { c as Printer, p as MapPinned, u as Pencil } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-B4NkMof1.mjs";
import { D as characterEngine, N as derive, n as Button, rt as useRoster } from "./store-CHBbC2-O.mjs";
import { n as RoxyDock, t as AppShell } from "./roxy-mascot-C3Kifyon.mjs";
import { n as mascotLines, t as CharacterSheet } from "./character-sheet-ysEPB0Jv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sheet._id-XC9MKrbN.js
var import_jsx_runtime = require_jsx_runtime();
function SheetPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const character = useRoster((s) => s.characters.find((c) => c.id === id));
	const startDraft = useRoster((s) => s.startDraft);
	if (!character) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "That dossier is not in this browser."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		className: "mt-4",
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			children: "Back to roster"
		})
	})] });
	const derived = derive(character);
	const engine = characterEngine(character);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		special: derived.special,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-print mb-5 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
				children: ["Saved dossier · ", engine === "pnp" ? "Fallout PnP d100" : "SPECIAL d20"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold tracking-tight",
				children: character.name.trim() || "Unnamed"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					engine === "pnp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/reno/$id",
							params: { id: character.id },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, {}), "Enter New Reno"]
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => {
							startDraft(character);
							navigate({
								to: "/new",
								search: { engine }
							});
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), "Edit"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_260px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterSheet, { character }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:sticky lg:top-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoxyDock, { lines: mascotLines(character) })
			})]
		})]
	});
}
//#endregion
export { SheetPage as component };
