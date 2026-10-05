import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Facebook, GraduationCap, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X, Youtube } from "lucide-react";
//#region src/components/site/Header.tsx
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/academics",
		label: "Academics"
	},
	{
		to: "/admissions",
		label: "Admissions"
	},
	{
		to: "/student-life",
		label: "Student Life"
	},
	{
		to: "/facilities",
		label: "Facilities"
	},
	{
		to: "/news",
		label: "News"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "bg-navy-deep text-ivory/80 text-xs",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-x mx-auto max-w-7xl flex h-9 items-center justify-between",
			children: [/* @__PURE__ */ jsx("span", {
				className: "hidden md:block tracking-wide",
				children: "Admissions Open 2026 · Limited Seats Available"
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex gap-5",
				children: [/* @__PURE__ */ jsx("a", {
					href: "tel:+9779800000000",
					className: "hover:text-[var(--color-gold)] transition",
					children: "+977 980-0000000"
				}), /* @__PURE__ */ jsx("a", {
					href: "mailto:info@pathibhara.edu.np",
					className: "hidden sm:inline hover:text-[var(--color-gold)] transition",
					children: "info@pathibhara.edu.np"
				})]
			})]
		})
	}), /* @__PURE__ */ jsxs("header", {
		className: `sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-background"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-x mx-auto max-w-7xl flex h-20 items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-3 group",
					children: [/* @__PURE__ */ jsx("div", {
						className: "size-11 rounded-full gradient-gold flex items-center justify-center shadow-soft",
						children: /* @__PURE__ */ jsx(GraduationCap, {
							className: "size-6 text-navy-deep",
							strokeWidth: 2.2
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-xl text-navy-deep",
							children: "Pathibhara"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] tracking-[0.2em] uppercase text-muted-foreground",
							children: "English Boarding School"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: nav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: "text-sm font-medium text-foreground/80 hover:text-navy transition relative py-2",
						activeProps: { className: "text-navy font-semibold" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/admissions",
						className: "hidden md:inline-flex h-10 px-5 items-center justify-center rounded-full bg-navy text-ivory text-sm font-medium tracking-wide hover:bg-navy-deep transition shadow-soft",
						children: "Apply Now"
					}), /* @__PURE__ */ jsx("button", {
						className: "lg:hidden p-2 text-navy",
						onClick: () => setOpen((v) => !v),
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsx(Menu, { className: "size-6" })
					})]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden border-t bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl py-4 flex flex-col gap-1",
				children: [nav.map((n) => /* @__PURE__ */ jsx(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "py-3 text-base font-medium text-foreground/80 hover:text-navy border-b border-border/60",
					children: n.label
				}, n.to)), /* @__PURE__ */ jsx(Link, {
					to: "/admissions",
					onClick: () => setOpen(false),
					className: "mt-3 h-11 inline-flex items-center justify-center rounded-full bg-navy text-ivory font-medium",
					children: "Apply Now"
				})]
			})
		})]
	})] });
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-navy-deep text-ivory mt-24",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-x mx-auto max-w-7xl py-20 grid gap-12 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "size-11 rounded-full gradient-gold flex items-center justify-center",
							children: /* @__PURE__ */ jsx(GraduationCap, { className: "size-6 text-navy-deep" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-xl",
							children: "Pathibhara"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] tracking-[0.2em] uppercase text-ivory/60",
							children: "English Boarding School"
						})] })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-sm text-ivory/70 leading-relaxed",
						children: "Shaping curious, courageous, and compassionate global citizens since 1998."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 flex gap-3",
						children: [
							Facebook,
							Instagram,
							Youtube,
							Linkedin
						].map((Icon, i) => /* @__PURE__ */ jsx("a", {
							href: "#",
							className: "size-9 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-navy-deep hover:border-transparent transition",
							children: /* @__PURE__ */ jsx(Icon, { className: "size-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-5",
					children: "Explore"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-3 text-sm text-ivory/75",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-[var(--color-gold)]",
							children: "About Us"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/academics",
							className: "hover:text-[var(--color-gold)]",
							children: "Academics"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/admissions",
							className: "hover:text-[var(--color-gold)]",
							children: "Admissions"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/facilities",
							className: "hover:text-[var(--color-gold)]",
							children: "Facilities"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/student-life",
							className: "hover:text-[var(--color-gold)]",
							children: "Student Life"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-5",
					children: "Visit"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-4 text-sm text-ivory/75",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "size-4 mt-0.5 shrink-0 text-[var(--color-gold)]" }), " 2RM5+63C, Chamaita 57400, Nepal"]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx(Phone, { className: "size-4 mt-0.5 shrink-0 text-[var(--color-gold)]" }), " +977 980-0000000"]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx(Mail, { className: "size-4 mt-0.5 shrink-0 text-[var(--color-gold)]" }), " info@pathibhara.edu.np"]
						})
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h4", {
						className: "text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-5",
						children: "Newsletter"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-ivory/70 mb-4",
						children: "Stay updated with school events, news, and announcements."
					}),
					/* @__PURE__ */ jsxs("form", {
						className: "flex gap-2",
						onSubmit: (e) => e.preventDefault(),
						children: [/* @__PURE__ */ jsx("input", {
							type: "email",
							required: true,
							placeholder: "Your email",
							className: "flex-1 h-11 px-4 rounded-full bg-ivory/10 border border-ivory/20 text-sm placeholder:text-ivory/50 focus:outline-none focus:border-[var(--color-gold)]"
						}), /* @__PURE__ */ jsx("button", {
							className: "h-11 px-5 rounded-full gradient-gold text-navy-deep text-sm font-medium hover:opacity-90 transition",
							children: "Join"
						})]
					})
				] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-ivory/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Pathibhara English Boarding School. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "Crafted with excellence · Chamaita, Nepal" })]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Layout.tsx
function SiteLayout({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function PageHero({ eyebrow, title, subtitle, image }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[52vh] min-h-[400px] flex items-end overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 size-full object-cover",
				loading: "eager"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-hero" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative container-x mx-auto max-w-7xl pb-16 text-ivory fade-up",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
						children: eyebrow
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-display text-5xl md:text-6xl mt-4 max-w-3xl text-balance",
						children: title
					}),
					subtitle && /* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-2xl text-ivory/80 text-lg",
						children: subtitle
					})
				]
			})
		]
	});
}
//#endregion
export { SiteLayout as n, PageHero as t };
