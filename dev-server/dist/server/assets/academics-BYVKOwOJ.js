import { n as SiteLayout, t as PageHero } from "./Layout-B1V-rh51.js";
import { t as academics_default } from "./academics-BwuF8iTc.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Atom, BookOpen, Brain, Calculator, Globe, Languages, Music, Palette } from "lucide-react";
//#region src/routes/academics.tsx?tsr-split=component
var departments = [
	{
		i: Atom,
		t: "Sciences",
		d: "Physics, Chemistry, Biology with full lab integration."
	},
	{
		i: Calculator,
		t: "Mathematics",
		d: "Pure and applied math from foundation to advanced."
	},
	{
		i: Languages,
		t: "Languages",
		d: "English, Nepali, and an optional third language."
	},
	{
		i: Globe,
		t: "Humanities",
		d: "History, geography, and social studies with field study."
	},
	{
		i: Brain,
		t: "Computer Science",
		d: "Coding, robotics, and digital citizenship."
	},
	{
		i: Palette,
		t: "Arts",
		d: "Visual arts, design, and creative expression."
	},
	{
		i: Music,
		t: "Performing Arts",
		d: "Music, dance, and theatre programs."
	},
	{
		i: BookOpen,
		t: "Wellness & Ethics",
		d: "Mindfulness, ethics, and physical education."
	}
];
function Academics() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Academics",
			title: "A curriculum that challenges. A community that supports.",
			subtitle: "From Nursery to Grade 12, our academic program combines international rigor with the warmth of personal mentorship.",
			image: academics_default
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24 grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Our Approach"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep text-balance",
					children: "Learning that lasts a lifetime."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 text-muted-foreground leading-relaxed",
					children: "We teach students to ask better questions, not just memorize better answers. Our classrooms balance direct instruction with inquiry, collaboration, and reflection — preparing students for the demands of university and the unknowns of tomorrow."
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-8 space-y-4",
					children: [
						"Small class sizes (max 22 students)",
						"Personalized academic mentorship",
						"Project-based and inquiry learning",
						"Annual academic conferences"
					].map((p, i) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3 text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "size-5 mt-0.5 rounded-full gradient-gold flex items-center justify-center text-navy-deep text-xs font-bold",
							children: "✓"
						}), /* @__PURE__ */ jsx("span", { children: p })]
					}, i))
				})
			] }), /* @__PURE__ */ jsx("div", {
				className: "aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant",
				children: /* @__PURE__ */ jsx("img", {
					src: academics_default,
					alt: "",
					loading: "lazy",
					className: "size-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-2xl mx-auto mb-16",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
						children: "Departments"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
						children: "Eight pillars of inquiry"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: departments.map((d, i) => /* @__PURE__ */ jsxs("div", {
						className: "bg-card border border-border/60 rounded-2xl p-7 hover-lift",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "size-12 rounded-xl bg-secondary flex items-center justify-center text-navy mb-5",
								children: /* @__PURE__ */ jsx(d.i, { className: "size-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl text-navy-deep",
								children: d.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: d.d
							})
						]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Stages"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
					children: "School stages"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-3 gap-6",
				children: [
					{
						g: "Nursery — Grade 5",
						t: "Foundation School",
						d: "Play-based discovery, literacy, and numeracy."
					},
					{
						g: "Grade 6 — 8",
						t: "Middle School",
						d: "Inquiry, exploration, and skill-building across disciplines."
					},
					{
						g: "Grade 9 — 12",
						t: "Senior Academy",
						d: "SEE & +2 streams with university counselling."
					}
				].map((s, i) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border/60 p-8 hover-lift bg-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs tracking-[0.2em] uppercase text-[var(--color-gold)]",
							children: s.g
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl mt-2 text-navy-deep",
							children: s.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: s.d
						})
					]
				}, i))
			})]
		})
	] });
}
//#endregion
export { Academics as component };
