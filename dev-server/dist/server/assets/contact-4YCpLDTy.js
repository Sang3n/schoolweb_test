import { n as SiteLayout, t as PageHero } from "./Layout-B1V-rh51.js";
import { t as hero_campus_default } from "./hero-campus-q5PBBZL6.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	const [sent, setSent] = useState(false);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Contact",
			title: "We'd love to hear from you.",
			subtitle: "Whether you're considering admission or simply want to learn more — our team is here to help.",
			image: hero_campus_default
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24 grid lg:grid-cols-2 gap-12",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl text-navy-deep",
					children: "Get in touch"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground",
					children: "Reach us through any of the channels below, or drop a message and we'll respond within one business day."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 space-y-6",
					children: [
						{
							i: MapPin,
							t: "Address",
							v: "2RM5+63C, Chamaita 57400, Nepal"
						},
						{
							i: Phone,
							t: "Phone",
							v: "+977 980-0000000"
						},
						{
							i: Mail,
							t: "Email",
							v: "info@pathibhara.edu.np"
						}
					].map((c, i) => /* @__PURE__ */ jsxs("div", {
						className: "flex gap-5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "size-12 rounded-full gradient-gold flex items-center justify-center text-navy-deep shrink-0",
							children: /* @__PURE__ */ jsx(c.i, { className: "size-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs tracking-[0.2em] uppercase text-[var(--color-gold)]",
							children: c.t
						}), /* @__PURE__ */ jsx("div", {
							className: "text-navy-deep font-medium mt-1",
							children: c.v
						})] })]
					}, i))
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "https://wa.me/9779800000000",
					className: "mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-medium hover:opacity-90 transition shadow-soft",
					children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-5" }), " Chat on WhatsApp"]
				})
			] }), /* @__PURE__ */ jsx("div", {
				className: "bg-card rounded-2xl border border-border/60 p-10 shadow-soft",
				children: sent ? /* @__PURE__ */ jsxs("div", {
					className: "text-center py-8",
					children: [
						/* @__PURE__ */ jsx(CheckCircle2, { className: "size-12 mx-auto text-[var(--color-gold)]" }),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl mt-4 text-navy-deep",
							children: "Message sent"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-muted-foreground",
							children: "We'll be in touch shortly."
						})
					]
				}) : /* @__PURE__ */ jsxs("form", {
					className: "grid gap-5",
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl text-navy-deep",
							children: "Send a message"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx("input", {
								required: true,
								placeholder: "Your name *",
								className: "h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:border-[var(--color-gold)]"
							}), /* @__PURE__ */ jsx("input", {
								required: true,
								type: "email",
								placeholder: "Email *",
								className: "h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:border-[var(--color-gold)]"
							})]
						}),
						/* @__PURE__ */ jsx("input", {
							placeholder: "Subject",
							className: "h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:border-[var(--color-gold)]"
						}),
						/* @__PURE__ */ jsx("textarea", {
							required: true,
							rows: 5,
							placeholder: "Your message *",
							className: "px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:border-[var(--color-gold)]"
						}),
						/* @__PURE__ */ jsx("button", {
							className: "h-12 rounded-full bg-navy text-ivory font-medium hover:bg-navy-deep transition",
							children: "Send Message"
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-x mx-auto max-w-7xl pb-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-2xl overflow-hidden border border-border/60 shadow-soft",
				children: /* @__PURE__ */ jsx("iframe", {
					title: "Pathibhara English Boarding School location",
					src: "https://www.google.com/maps?q=Chamaita+57400+Nepal&output=embed",
					className: "w-full h-[450px] border-0",
					loading: "lazy"
				})
			})
		})
	] });
}
//#endregion
export { Contact as component };
