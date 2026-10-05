import { n as SiteLayout } from "./Layout-B1V-rh51.js";
import { t as graduation_default } from "./graduation-CzWSoK81.js";
import { t as principal_default } from "./principal-DMhe8JYn.js";
import { t as academics_default } from "./academics-BwuF8iTc.js";
import { t as hero_campus_default } from "./hero-campus-q5PBBZL6.js";
import { n as library_default, t as computer_lab_default } from "./computer-lab-BtOirEEg.js";
import { n as lab_default, t as sports_default } from "./sports-B7OaOr7l.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, Beaker, BookOpen, Calendar, ChevronRight, GraduationCap, Microscope, Quote, Sparkles, Users } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
function Counter({ to, suffix = "" }) {
	const [n, setN] = useState(0);
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) {
				const dur = 1600;
				const start = performance.now();
				const tick = (t) => {
					const p = Math.min(1, (t - start) / dur);
					setN(Math.floor(p * to));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
				io.disconnect();
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [to]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [n.toLocaleString(), suffix]
	});
}
function Home() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative min-h-[92vh] flex items-center overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: hero_campus_default,
					alt: "Pathibhara campus",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-hero" }),
				/* @__PURE__ */ jsx("div", {
					className: "relative container-x mx-auto max-w-7xl py-24 text-ivory",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-3xl fade-up",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
								children: [/* @__PURE__ */ jsx("span", { className: "gold-rule" }), " Est. 1998 · Chamaita, Nepal"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-6 leading-[1.05] text-balance",
								children: ["Where minds grow, ", /* @__PURE__ */ jsx("em", {
									className: "not-italic text-[var(--color-gold)]",
									children: "character endures."
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-8 text-lg md:text-xl text-ivory/85 max-w-2xl leading-relaxed",
								children: "A premier English boarding school nurturing curious, courageous, and compassionate global citizens through world-class academics and timeless values."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/admissions",
									className: "group h-14 px-8 inline-flex items-center gap-2 rounded-full gradient-gold text-navy-deep font-semibold shadow-elegant hover:scale-[1.02] transition",
									children: ["Apply Now ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition" })]
								}), /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "h-14 px-8 inline-flex items-center gap-2 rounded-full border border-ivory/40 text-ivory font-medium hover:bg-ivory/10 transition backdrop-blur",
									children: "Book a Visit"
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-12 gap-12 items-end mb-16",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
						children: "Why Pathibhara"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep text-balance",
						children: "An education built on excellence, integrity, and inquiry."
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "lg:col-span-5 text-muted-foreground leading-relaxed",
					children: "For over two decades, we have crafted an environment where every child is challenged academically, nurtured personally, and inspired to lead."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: [
					{
						icon: BookOpen,
						title: "Academic Excellence",
						text: "A rigorous curriculum that consistently delivers top regional results."
					},
					{
						icon: Microscope,
						title: "Modern Facilities",
						text: "State-of-the-art labs, library, and digital learning spaces."
					},
					{
						icon: Users,
						title: "Expert Faculty",
						text: "Mentors with international training and decades of classroom experience."
					},
					{
						icon: Award,
						title: "Proven Achievements",
						text: "Hundreds of graduates placed at top universities worldwide."
					}
				].map((f, i) => /* @__PURE__ */ jsxs("div", {
					className: "group bg-card rounded-2xl p-8 border border-border/60 hover-lift fade-up",
					style: { animationDelay: `${i * .08}s` },
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "size-12 rounded-xl bg-secondary flex items-center justify-center text-navy mb-6 group-hover:gradient-gold transition",
							children: /* @__PURE__ */ jsx(f.icon, { className: "size-5" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl text-navy-deep",
							children: f.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: f.text
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-navy text-ivory",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x mx-auto max-w-7xl py-20 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center",
				children: [
					{
						n: 1850,
						s: "+",
						label: "Students Enrolled"
					},
					{
						n: 98,
						s: "%",
						label: "Graduation Success"
					},
					{
						n: 27,
						s: "",
						label: "Years of Excellence"
					},
					{
						n: 320,
						s: "+",
						label: "University Placements"
					}
				].map((s, i) => /* @__PURE__ */ jsxs("div", {
					className: "fade-up",
					style: { animationDelay: `${i * .1}s` },
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-5xl md:text-6xl text-[var(--color-gold)]",
						children: /* @__PURE__ */ jsx(Counter, {
							to: s.n,
							suffix: s.s
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-3 text-sm tracking-[0.2em] uppercase text-ivory/70",
						children: s.label
					})]
				}, i))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Programs"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep text-balance",
					children: "Featured academic pathways"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-3 gap-6",
				children: [
					{
						img: academics_default,
						eyebrow: "Early Years",
						title: "Foundation School",
						text: "Nursery through Grade 5 — discovery-based learning."
					},
					{
						img: lab_default,
						eyebrow: "Middle School",
						title: "Inquiry Years",
						text: "Grades 6–8 with hands-on STEM and humanities."
					},
					{
						img: graduation_default,
						eyebrow: "High School",
						title: "Senior Academy",
						text: "Grades 9–12, university preparation with global standards."
					}
				].map((p, i) => /* @__PURE__ */ jsxs("article", {
					className: "group rounded-2xl overflow-hidden bg-card border border-border/60 hover-lift",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							className: "size-full object-cover transition duration-700 group-hover:scale-105"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-7",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs tracking-[0.2em] uppercase text-[var(--color-gold)]",
								children: p.eyebrow
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl mt-2 text-navy-deep",
								children: p.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: p.text
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: "/academics",
								className: "mt-5 inline-flex items-center gap-1 text-sm text-navy font-medium group/link",
								children: ["Discover ", /* @__PURE__ */ jsx(ChevronRight, { className: "size-4 group-hover/link:translate-x-1 transition" })]
							})
						]
					})]
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl py-24 grid lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5 order-2 lg:order-1",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative aspect-[4/5] max-w-md rounded-2xl overflow-hidden shadow-elegant",
						children: [/* @__PURE__ */ jsx("img", {
							src: principal_default,
							alt: "Principal",
							loading: "lazy",
							className: "size-full object-cover"
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy-deep/90 to-transparent text-ivory",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-2xl",
								children: "Dr. Ramesh Bhattarai"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mt-1",
								children: "Principal"
							})]
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7 order-1 lg:order-2",
					children: [
						/* @__PURE__ */ jsx(Quote, { className: "size-10 text-[var(--color-gold)]" }),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl md:text-4xl mt-6 text-navy-deep text-balance leading-tight",
							children: "\"Every child who walks through our gates carries the seeds of greatness. Our calling is simply to provide the soil, the light, and the patience.\""
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-muted-foreground leading-relaxed max-w-xl",
							children: "At Pathibhara, we believe education is more than examinations — it is the cultivation of wisdom, empathy, and the lifelong habit of inquiry. Welcome to a school that values who your child becomes as much as what they achieve."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/about",
							className: "mt-8 inline-flex items-center gap-2 text-navy font-medium group",
							children: ["Read full message ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition" })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-end justify-between gap-6 mb-12",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Campus Life"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
					children: "A glimpse into our world"
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/student-life",
					className: "text-sm font-medium text-navy inline-flex items-center gap-1 group",
					children: ["View full gallery ", /* @__PURE__ */ jsx(ChevronRight, { className: "size-4 group-hover:translate-x-1 transition" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					library_default,
					sports_default,
					computer_lab_default,
					lab_default
				].map((src, i) => /* @__PURE__ */ jsx("div", {
					className: `overflow-hidden rounded-xl ${i % 3 === 0 ? "row-span-2 md:row-span-2 aspect-[3/4]" : "aspect-square"} group`,
					children: /* @__PURE__ */ jsx("img", {
						src,
						loading: "lazy",
						alt: "",
						className: "size-full object-cover transition duration-700 group-hover:scale-110"
					})
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-navy-deep text-ivory",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-2xl mx-auto mb-16",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
						children: "Voices"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl md:text-5xl mt-4",
						children: "What our community says"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						{
							q: "Pathibhara gave my daughter the confidence to dream beyond borders. The faculty truly cares.",
							n: "Sunita Sharma",
							r: "Parent, Grade 10"
						},
						{
							q: "I arrived shy and unsure. I leave ready for university and life. This school changed me.",
							n: "Aarav Khadka",
							r: "Alumnus, Class of 2024"
						},
						{
							q: "The blend of tradition and modernity here is rare. My son loves coming to school every day.",
							n: "Bikash Rai",
							r: "Parent, Grade 6"
						}
					].map((t, i) => /* @__PURE__ */ jsxs("figure", {
						className: "rounded-2xl bg-ivory/5 border border-ivory/10 p-8 backdrop-blur hover:bg-ivory/10 transition",
						children: [
							/* @__PURE__ */ jsx(Quote, { className: "size-7 text-[var(--color-gold)]" }),
							/* @__PURE__ */ jsxs("blockquote", {
								className: "mt-5 text-ivory/90 leading-relaxed",
								children: [
									"\"",
									t.q,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("figcaption", {
								className: "mt-6 pt-6 border-t border-ivory/10",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-medium",
									children: t.n
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-ivory/60 mt-1",
									children: t.r
								})]
							})
						]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-end justify-between gap-6 mb-12",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Latest"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
					children: "News & Events"
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/news",
					className: "text-sm font-medium text-navy inline-flex items-center gap-1 group",
					children: ["All updates ", /* @__PURE__ */ jsx(ChevronRight, { className: "size-4 group-hover:translate-x-1 transition" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-3 gap-8",
				children: [
					{
						d: "12 Mar",
						t: "Annual Science Exhibition 2026",
						e: "Over 200 student projects on display across four labs.",
						i: Beaker
					},
					{
						d: "28 Mar",
						t: "Inter-School Debate Championship",
						e: "Hosting 14 schools across Eastern Nepal this spring.",
						i: Sparkles
					},
					{
						d: "15 Apr",
						t: "Graduation Ceremony — Class of 2026",
						e: "Celebrating the achievements of our newest alumni.",
						i: GraduationCap
					}
				].map((n, i) => /* @__PURE__ */ jsxs("article", {
					className: "group border-t border-border pt-8 hover-lift",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx(Calendar, { className: "size-4 text-[var(--color-gold)]" }),
								" ",
								n.d,
								", 2026"
							]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl mt-4 text-navy-deep group-hover:text-navy transition",
							children: n.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: n.e
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/news",
							className: "mt-5 inline-flex items-center gap-1 text-sm text-navy font-medium",
							children: ["Read more ", /* @__PURE__ */ jsx(ChevronRight, { className: "size-4" })]
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-x mx-auto max-w-7xl pb-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-3xl gradient-hero p-12 md:p-20 text-ivory",
				children: [/* @__PURE__ */ jsx("img", {
					src: graduation_default,
					alt: "",
					className: "absolute inset-0 size-full object-cover mix-blend-overlay opacity-50",
					loading: "lazy"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-5xl text-balance",
							children: "Begin a journey of excellence."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-ivory/85 text-lg",
							children: "Admissions for 2026 are now open. Schedule a campus visit or apply online today."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/admissions",
								className: "h-14 px-8 inline-flex items-center gap-2 rounded-full gradient-gold text-navy-deep font-semibold shadow-elegant",
								children: ["Apply Now ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "h-14 px-8 inline-flex items-center rounded-full border border-ivory/40 text-ivory font-medium hover:bg-ivory/10 transition",
								children: "Book a Visit"
							})]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
