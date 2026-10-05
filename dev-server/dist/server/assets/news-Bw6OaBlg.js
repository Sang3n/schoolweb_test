import { n as SiteLayout, t as PageHero } from "./Layout-B1V-rh51.js";
import { t as graduation_default } from "./graduation-CzWSoK81.js";
import { t as academics_default } from "./academics-BwuF8iTc.js";
import { n as lab_default, t as sports_default } from "./sports-B7OaOr7l.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Calendar, ChevronRight } from "lucide-react";
//#region src/routes/news.tsx?tsr-split=component
var posts = [
	{
		img: academics_default,
		d: "Mar 12, 2026",
		c: "Academics",
		t: "Annual Science Exhibition draws 200+ projects",
		e: "Students showcased innovations across robotics, biology, and sustainability themes."
	},
	{
		img: lab_default,
		d: "Mar 28, 2026",
		c: "Events",
		t: "Inter-School Debate Championship 2026",
		e: "Pathibhara hosts 14 schools from across Eastern Nepal in a three-day tournament."
	},
	{
		img: graduation_default,
		d: "Apr 15, 2026",
		c: "Milestone",
		t: "Class of 2026 graduates with record honours",
		e: "98% of graduates received placement offers from top universities."
	},
	{
		img: sports_default,
		d: "May 02, 2026",
		c: "Sports",
		t: "Football team wins regional championship",
		e: "Our senior boys' team brought home the trophy after a thrilling final."
	},
	{
		img: academics_default,
		d: "May 18, 2026",
		c: "Academics",
		t: "New Mathematics Olympiad club launched",
		e: "Open to students from Grade 7 upward — meets every Wednesday."
	},
	{
		img: lab_default,
		d: "Jun 02, 2026",
		c: "Announcement",
		t: "Summer Enrichment Program registration",
		e: "Three-week camps in robotics, creative writing, and outdoor leadership."
	}
];
function News() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "News & Events",
		title: "Stories from our community.",
		subtitle: "Stay connected with the latest happenings, achievements, and upcoming events at Pathibhara.",
		image: graduation_default
	}), /* @__PURE__ */ jsx("section", {
		className: "container-x mx-auto max-w-7xl py-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
			children: posts.map((p, i) => /* @__PURE__ */ jsxs("article", {
				className: "group rounded-2xl overflow-hidden bg-card border border-border/60 hover-lift",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-[4/3] overflow-hidden",
					children: /* @__PURE__ */ jsx("img", {
						src: p.img,
						alt: p.t,
						loading: "lazy",
						className: "size-full object-cover transition duration-700 group-hover:scale-105"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-7",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx(Calendar, { className: "size-4 text-[var(--color-gold)]" }),
								" ",
								p.d,
								" · ",
								/* @__PURE__ */ jsx("span", {
									className: "text-[var(--color-gold)]",
									children: p.c
								})
							]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl mt-3 text-navy-deep group-hover:text-navy transition",
							children: p.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: p.e
						}),
						/* @__PURE__ */ jsxs("button", {
							className: "mt-4 inline-flex items-center gap-1 text-sm text-navy font-medium",
							children: ["Read more ", /* @__PURE__ */ jsx(ChevronRight, { className: "size-4" })]
						})
					]
				})]
			}, i))
		})
	})] });
}
//#endregion
export { News as component };
