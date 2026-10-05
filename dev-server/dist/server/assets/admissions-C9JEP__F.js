import { n as SiteLayout, t as PageHero } from "./Layout-B1V-rh51.js";
import { t as graduation_default } from "./graduation-CzWSoK81.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Calendar, CheckCircle2, ChevronDown, FileText, GraduationCap, Wallet } from "lucide-react";
//#region src/routes/admissions.tsx?tsr-split=component
function Admissions() {
	const [submitted, setSubmitted] = useState(false);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Admissions",
			title: "Join a community of curious minds.",
			subtitle: "We welcome applications from families who share our values of integrity, hard work, and kindness.",
			image: graduation_default
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Process"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
					children: "Four steps to enrollment"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-4 gap-6",
				children: [
					{
						n: "01",
						t: "Inquire",
						d: "Submit the online inquiry form or call us."
					},
					{
						n: "02",
						t: "Visit",
						d: "Schedule a campus tour with our admissions team."
					},
					{
						n: "03",
						t: "Apply",
						d: "Complete the application and assessment."
					},
					{
						n: "04",
						t: "Enroll",
						d: "Confirm placement and join orientation."
					}
				].map((s, i) => /* @__PURE__ */ jsxs("div", {
					className: "relative bg-card rounded-2xl p-8 border border-border/60 hover-lift",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "font-display text-6xl text-[var(--color-gold)]/30",
							children: s.n
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl text-navy-deep mt-2",
							children: s.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: s.d
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x mx-auto max-w-7xl py-24 grid md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "bg-card rounded-2xl p-10 border border-border/60",
					children: [
						/* @__PURE__ */ jsx(Wallet, { className: "size-8 text-[var(--color-gold)]" }),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-3xl mt-5 text-navy-deep",
							children: "Fee Structure"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Transparent annual fees — all-inclusive of tuition, materials, and activities."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 divide-y divide-border",
							children: [
								["Nursery — UKG", "Rs. 65,000 / yr"],
								["Grade 1 — 5", "Rs. 82,000 / yr"],
								["Grade 6 — 8", "Rs. 96,000 / yr"],
								["Grade 9 — 10", "Rs. 1,15,000 / yr"],
								["Grade 11 — 12", "Rs. 1,40,000 / yr"]
							].map(([k, v]) => /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between py-3 text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: k
								}), /* @__PURE__ */ jsx("span", {
									className: "font-medium text-navy-deep",
									children: v
								})]
							}, k))
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "bg-navy-deep text-ivory rounded-2xl p-10",
					children: [
						/* @__PURE__ */ jsx(GraduationCap, { className: "size-8 text-[var(--color-gold)]" }),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-3xl mt-5",
							children: "Scholarships"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-ivory/75 text-sm",
							children: "We are committed to making excellent education accessible. Scholarships are awarded on the basis of merit, need, and exceptional talent."
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: [
								"Merit Scholarship — up to 50% tuition",
								"Need-based Aid — case-by-case review",
								"Sports & Arts Excellence — up to 30%",
								"Sibling Discount — 10% for second child"
							].map((s) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ jsx(CheckCircle2, { className: "size-5 text-[var(--color-gold)] shrink-0" }),
									" ",
									s
								]
							}, s))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-7xl py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "Calendar"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:text-5xl mt-4 text-navy-deep",
					children: "Important dates"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto divide-y divide-border border-y border-border",
				children: [
					["Applications Open", "January 15, 2026"],
					["Entrance Assessment", "February 28, 2026"],
					["Results Announced", "March 10, 2026"],
					["Enrollment Deadline", "March 25, 2026"],
					["Academic Year Begins", "April 15, 2026"]
				].map(([k, v]) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between py-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Calendar, { className: "size-5 text-[var(--color-gold)]" }), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-navy-deep",
							children: k
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground text-sm",
						children: v
					})]
				}, k))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-x mx-auto max-w-7xl pb-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl mx-auto bg-card rounded-2xl border border-border/60 p-10 md:p-14 shadow-soft",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-10",
					children: [
						/* @__PURE__ */ jsx(FileText, { className: "size-9 text-[var(--color-gold)] mx-auto" }),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl mt-4 text-navy-deep",
							children: "Online Inquiry"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground text-sm",
							children: "Tell us about your child. Our team responds within 24 hours."
						})
					]
				}), submitted ? /* @__PURE__ */ jsxs("div", {
					className: "text-center py-8",
					children: [
						/* @__PURE__ */ jsx(CheckCircle2, { className: "size-12 mx-auto text-[var(--color-gold)]" }),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl mt-4 text-navy-deep",
							children: "Thank you!"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-muted-foreground",
							children: "We've received your inquiry and will be in touch shortly."
						})
					]
				}) : /* @__PURE__ */ jsxs("form", {
					className: "grid gap-5",
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitted(true);
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Parent Name",
								required: true
							}), /* @__PURE__ */ jsx(Field, {
								label: "Phone",
								type: "tel",
								required: true
							})]
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Email",
							type: "email",
							required: true
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Child's Name",
								required: true
							}), /* @__PURE__ */ jsx(Field, {
								label: "Applying for Grade",
								required: true
							})]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium text-navy-deep",
							children: "Message"
						}), /* @__PURE__ */ jsx("textarea", {
							rows: 4,
							className: "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
						})] }),
						/* @__PURE__ */ jsx("button", {
							className: "h-12 mt-2 rounded-full bg-navy text-ivory font-medium hover:bg-navy-deep transition",
							children: "Submit Inquiry"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x mx-auto max-w-3xl pb-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-10",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]",
					children: "FAQ"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl mt-4 text-navy-deep",
					children: "Common questions"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-3",
				children: [
					{
						q: "Is boarding mandatory?",
						a: "No. We offer both day-school and boarding options for grades 6 and above."
					},
					{
						q: "What is the medium of instruction?",
						a: "English is our primary medium across all subjects except Nepali."
					},
					{
						q: "Do you offer transport?",
						a: "Yes — we operate routes across Chamaita and nearby areas."
					},
					{
						q: "Are there scholarships?",
						a: "Yes — merit and need-based scholarships are awarded annually."
					}
				].map((f, i) => /* @__PURE__ */ jsx(Faq, { ...f }, i))
			})]
		})
	] });
}
function Field({ label, type = "text", required }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
		className: "text-sm font-medium text-navy-deep",
		children: [label, required && " *"]
	}), /* @__PURE__ */ jsx("input", {
		type,
		required,
		className: "mt-2 w-full h-11 rounded-lg border border-input bg-background px-4 text-sm focus:outline-none focus:border-[var(--color-gold)]"
	})] });
}
function Faq({ q, a }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "border border-border/60 rounded-xl overflow-hidden",
		children: [/* @__PURE__ */ jsxs("button", {
			onClick: () => setOpen(!open),
			className: "w-full flex items-center justify-between p-5 text-left",
			children: [/* @__PURE__ */ jsx("span", {
				className: "font-medium text-navy-deep",
				children: q
			}), /* @__PURE__ */ jsx(ChevronDown, { className: `size-5 transition ${open ? "rotate-180" : ""}` })]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "px-5 pb-5 text-sm text-muted-foreground",
			children: a
		})]
	});
}
//#endregion
export { Admissions as component };
