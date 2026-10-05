import { n as SiteLayout, t as PageHero } from "./Layout-B1V-rh51.js";
import { t as graduation_default } from "./graduation-CzWSoK81.js";
import { t as academics_default } from "./academics-BwuF8iTc.js";
import { n as library_default, t as computer_lab_default } from "./computer-lab-BtOirEEg.js";
import { n as lab_default, t as sports_default } from "./sports-B7OaOr7l.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Mic, Music, Palette, Tent, Trophy, Users } from "lucide-react";
//#region src/routes/student-life.tsx?tsr-split=component
function StudentLife() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Student Life",
			title: "Life beyond the classroom.",
			subtitle: "Where friendships flourish, talents are discovered, and character is built.",
			image: sports_default
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Activities"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
					children: "Discover your passion"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: [
					{
						i: Trophy,
						t: "Sports & Athletics",
						d: "Football, basketball, cricket, athletics, and table tennis."
					},
					{
						i: Music,
						t: "Music Society",
						d: "Choir, classical and contemporary instrumental ensembles."
					},
					{
						i: Palette,
						t: "Arts & Design",
						d: "Visual arts, photography, and design clubs."
					},
					{
						i: Mic,
						t: "Debate & MUN",
						d: "Public speaking, debate, and Model United Nations."
					},
					{
						i: Users,
						t: "Service Clubs",
						d: "Community service, environment, and outreach programs."
					},
					{
						i: Tent,
						t: "Outdoor Education",
						d: "Treks, camps, and adventure programs in the Himalayas."
					}
				].map((c, i) => /* @__PURE__ */ jsxs("div", {
					className: "bg-card border border-border/60 rounded-2xl p-8 hover-lift",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "size-12 rounded-xl bg-secondary flex items-center justify-center text-navy mb-5",
							children: /* @__PURE__ */ jsx(c.i, { className: "size-5" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl text-navy-deep",
							children: c.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: c.d
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
						children: "Gallery"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
						children: "Moments from our campus"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 md:grid-cols-3 gap-4",
					children: [
						sports_default,
						library_default,
						lab_default,
						graduation_default,
						sports_default,
						computer_lab_default,
						academics_default,
						sports_default,
						library_default
					].map((src, i) => /* @__PURE__ */ jsx("div", {
						className: "aspect-square overflow-hidden rounded-xl group",
						children: /* @__PURE__ */ jsx("img", {
							src,
							alt: "",
							loading: "lazy",
							className: "size-full object-cover transition duration-700 group-hover:scale-110"
						})
					}, i))
				})]
			})
		})
	] });
}
//#endregion
export { StudentLife as component };
