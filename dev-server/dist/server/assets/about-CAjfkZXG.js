import { n as SiteLayout, t as PageHero } from "./Layout-B1V-rh51.js";
import { t as graduation_default } from "./graduation-CzWSoK81.js";
import { t as principal_default } from "./principal-DMhe8JYn.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Award, Compass, Heart, ShieldCheck, Sparkles, Target } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
var leaders = [
	{
		n: "Dr. Ramesh Bhattarai",
		r: "Principal",
		b: "M.Ed., 28 years in education leadership."
	},
	{
		n: "Mrs. Sabina Limbu",
		r: "Vice Principal — Academics",
		b: "Cambridge-certified, curriculum specialist."
	},
	{
		n: "Mr. Prabin Tamang",
		r: "Head of Pastoral Care",
		b: "Counsellor and student welfare lead."
	},
	{
		n: "Ms. Anjali Gurung",
		r: "Director of Admissions",
		b: "Family liaison and outreach lead."
	}
];
function About() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "About Us",
			title: "A heritage of learning. A future of leaders.",
			subtitle: "Since 1998, Pathibhara has been a place where rigorous academics meet timeless values, producing graduates who serve communities at home and abroad.",
			image: graduation_default
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-x mx-auto max-w-7xl py-24 grid md:grid-cols-2 gap-8",
			children: [{
				icon: Target,
				t: "Our Mission",
				d: "To cultivate intellectually curious, ethically grounded young people prepared to lead lives of purpose and contribution."
			}, {
				icon: Compass,
				t: "Our Vision",
				d: "To be Nepal's most respected English boarding school — a beacon of academic excellence and character formation."
			}].map((m, i) => /* @__PURE__ */ jsxs("div", {
				className: "bg-card border border-border/60 rounded-2xl p-10 hover-lift",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "size-14 rounded-full gradient-gold flex items-center justify-center text-navy-deep mb-6",
						children: /* @__PURE__ */ jsx(m.icon, { className: "size-6" })
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl text-navy-deep",
						children: m.t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground leading-relaxed",
						children: m.d
					})
				]
			}, i))
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-2xl mx-auto mb-16",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
						children: "Our Journey"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
						children: "A timeline of growth"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative max-w-3xl mx-auto",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" }), [
						{
							y: "1998",
							t: "Founded in Chamaita",
							d: "Opened with 86 students and a vision rooted in service."
						},
						{
							y: "2007",
							t: "Senior Academy Established",
							d: "Grades 11–12 introduced with science and management streams."
						},
						{
							y: "2015",
							t: "New Science & Tech Wing",
							d: "Modern labs and computer suites inaugurated."
						},
						{
							y: "2022",
							t: "Boarding House Expansion",
							d: "On-campus residence doubled to welcome more students."
						},
						{
							y: "2026",
							t: "International Partnerships",
							d: "Exchange programs with schools in the UK and Singapore."
						}
					].map((e, i) => /* @__PURE__ */ jsxs("div", {
						className: `relative grid md:grid-cols-2 gap-6 mb-10 ${i % 2 ? "md:text-left" : "md:text-right"}`,
						children: [/* @__PURE__ */ jsxs("div", {
							className: `pl-12 md:pl-0 ${i % 2 ? "md:order-2 md:pl-10" : "md:pr-10"}`,
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-display text-3xl text-[var(--color-gold)]",
									children: e.y
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl mt-1 text-navy-deep",
									children: e.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: e.d
								})
							]
						}), /* @__PURE__ */ jsx("div", { className: "absolute left-2 md:left-1/2 -translate-x-1/2 top-2 size-4 rounded-full bg-navy ring-4 ring-secondary" })]
					}, i))]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Leadership"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
					children: "Meet our team"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: leaders.map((l, i) => /* @__PURE__ */ jsxs("div", {
					className: "bg-card border border-border/60 rounded-2xl overflow-hidden hover-lift",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-square overflow-hidden bg-secondary",
						children: /* @__PURE__ */ jsx("img", {
							src: principal_default,
							alt: l.n,
							loading: "lazy",
							className: "size-full object-cover"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl text-navy-deep",
								children: l.n
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mt-1",
								children: l.r
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: l.b
							})
						]
					})]
				}, i))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "bg-navy-deep text-ivory",
			children: [/* @__PURE__ */ jsx("div", {
				className: "container-x mx-auto max-w-7xl py-24 grid md:grid-cols-3 gap-10",
				children: [
					{
						i: Heart,
						t: "Compassion",
						d: "Empathy as the foundation of community."
					},
					{
						i: ShieldCheck,
						t: "Integrity",
						d: "Honesty in word, fairness in action."
					},
					{
						i: Sparkles,
						t: "Excellence",
						d: "Pursuit of mastery in mind and craft."
					}
				].map((v, i) => /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(v.i, { className: "size-8 text-[var(--color-gold)]" }),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl mt-4",
						children: v.t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-ivory/70",
						children: v.d
					})
				] }, i))
			}), /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl pb-20 border-t border-ivory/10 pt-12 flex flex-wrap items-center justify-between gap-6",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Accreditation"
				}), /* @__PURE__ */ jsx("div", {
					className: "font-display text-2xl mt-2",
					children: "Recognized by the Ministry of Education, Nepal"
				})] }), /* @__PURE__ */ jsx(Award, { className: "size-12 text-[var(--color-gold)]" })]
			})]
		})
	] });
}
//#endregion
export { About as component };
