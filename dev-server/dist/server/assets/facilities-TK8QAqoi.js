import { n as SiteLayout, t as PageHero } from "./Layout-B1V-rh51.js";
import { n as library_default, t as computer_lab_default } from "./computer-lab-BtOirEEg.js";
import { n as lab_default, t as sports_default } from "./sports-B7OaOr7l.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Beaker, BookOpen, Building2, Bus, Monitor, UtensilsCrossed } from "lucide-react";
//#region src/routes/facilities.tsx?tsr-split=component
var items = [
	{
		img: library_default,
		i: BookOpen,
		t: "Library & Resource Centre",
		d: "Over 20,000 books across English and Nepali, with quiet reading rooms and digital resources."
	},
	{
		img: lab_default,
		i: Beaker,
		t: "Science Laboratories",
		d: "Fully equipped Physics, Chemistry, and Biology labs with safety-first design."
	},
	{
		img: computer_lab_default,
		i: Monitor,
		t: "Computer & Robotics Lab",
		d: "Modern workstations, coding stations, and robotics kits for hands-on learning."
	},
	{
		img: sports_default,
		i: Building2,
		t: "Sports Complex",
		d: "Football field, basketball court, indoor hall, and athletics track."
	}
];
function Facilities() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Facilities",
			title: "Spaces designed for learning.",
			subtitle: "Every corner of our campus is built to nurture curiosity, creativity, and community.",
			image: library_default
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-x mx-auto max-w-7xl py-24 space-y-16",
			children: items.map((it, i) => /* @__PURE__ */ jsxs("div", {
				className: `grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-[4/3] overflow-hidden rounded-2xl shadow-elegant",
					children: /* @__PURE__ */ jsx("img", {
						src: it.img,
						alt: it.t,
						loading: "lazy",
						className: "size-full object-cover"
					})
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "size-14 rounded-full gradient-gold flex items-center justify-center text-navy-deep",
						children: /* @__PURE__ */ jsx(it.i, { className: "size-6" })
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl mt-6 text-navy-deep",
						children: it.t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground leading-relaxed",
						children: it.d
					})
				] })]
			}, i))
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x mx-auto max-w-7xl py-24 grid md:grid-cols-3 gap-6",
				children: [
					{
						i: Bus,
						t: "Transportation",
						d: "Safe, GPS-tracked buses across major routes."
					},
					{
						i: Building2,
						t: "Boarding House",
						d: "Warm, supervised residence with house parents."
					},
					{
						i: UtensilsCrossed,
						t: "Cafeteria",
						d: "Nutritious, freshly prepared meals daily."
					}
				].map((s, i) => /* @__PURE__ */ jsxs("div", {
					className: "bg-card border border-border/60 rounded-2xl p-8 hover-lift",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "size-12 rounded-xl bg-secondary flex items-center justify-center text-navy mb-5",
							children: /* @__PURE__ */ jsx(s.i, { className: "size-5" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl text-navy-deep",
							children: s.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: s.d
						})
					]
				}, i))
			})
		})
	] });
}
//#endregion
export { Facilities as component };
