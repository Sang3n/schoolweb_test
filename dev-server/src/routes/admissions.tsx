import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { useState } from "react";
import { Calendar, CheckCircle2, FileText, GraduationCap, Wallet, ChevronDown } from "lucide-react";
import hero from "@/assets/graduation.jpg";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Pathibhara English Boarding School" },
      { name: "description", content: "Admissions process, fee structure, scholarships, and online application for Pathibhara English Boarding School." },
      { property: "og:title", content: "Admissions at Pathibhara" },
      { property: "og:description", content: "Apply for admission, scholarships, fees, and dates." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: Admissions,
});

function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Admissions"
        title="Join a community of curious minds."
        subtitle="We welcome applications from families who share our values of integrity, hard work, and kindness."
        image={hero}
      />

      {/* Process */}
      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Process</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">Four steps to enrollment</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Inquire", d: "Submit the online inquiry form or call us." },
            { n: "02", t: "Visit", d: "Schedule a campus tour with our admissions team." },
            { n: "03", t: "Apply", d: "Complete the application and assessment." },
            { n: "04", t: "Enroll", d: "Confirm placement and join orientation." },
          ].map((s, i) => (
            <div key={i} className="relative bg-card rounded-2xl p-8 border border-border/60 hover-lift">
              <div className="font-display text-6xl text-[var(--color-gold)]/30">{s.n}</div>
              <h3 className="font-display text-2xl text-navy-deep mt-2">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fees + Scholarships */}
      <section className="bg-secondary">
        <div className="container-x mx-auto max-w-7xl py-24 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-10 border border-border/60">
            <Wallet className="size-8 text-[var(--color-gold)]" />
            <h3 className="font-display text-3xl mt-5 text-navy-deep">Fee Structure</h3>
            <p className="mt-3 text-sm text-muted-foreground">Transparent annual fees — all-inclusive of tuition, materials, and activities.</p>
            <div className="mt-6 divide-y divide-border">
              {[
                ["Nursery — UKG", "Rs. 65,000 / yr"],
                ["Grade 1 — 5", "Rs. 82,000 / yr"],
                ["Grade 6 — 8", "Rs. 96,000 / yr"],
                ["Grade 9 — 10", "Rs. 1,15,000 / yr"],
                ["Grade 11 — 12", "Rs. 1,40,000 / yr"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-3 text-sm">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium text-navy-deep">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy-deep text-ivory rounded-2xl p-10">
            <GraduationCap className="size-8 text-[var(--color-gold)]" />
            <h3 className="font-display text-3xl mt-5">Scholarships</h3>
            <p className="mt-3 text-ivory/75 text-sm">
              We are committed to making excellent education accessible. Scholarships are awarded on
              the basis of merit, need, and exceptional talent.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Merit Scholarship — up to 50% tuition",
                "Need-based Aid — case-by-case review",
                "Sports & Arts Excellence — up to 30%",
                "Sibling Discount — 10% for second child",
              ].map((s) => (
                <li key={s} className="flex gap-3"><CheckCircle2 className="size-5 text-[var(--color-gold)] shrink-0" /> {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Calendar</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">Important dates</h2>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-border border-y border-border">
          {[
            ["Applications Open", "January 15, 2026"],
            ["Entrance Assessment", "February 28, 2026"],
            ["Results Announced", "March 10, 2026"],
            ["Enrollment Deadline", "March 25, 2026"],
            ["Academic Year Begins", "April 15, 2026"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-5">
              <div className="flex items-center gap-3">
                <Calendar className="size-5 text-[var(--color-gold)]" />
                <span className="font-medium text-navy-deep">{k}</span>
              </div>
              <span className="text-muted-foreground text-sm">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Application form */}
      <section className="container-x mx-auto max-w-7xl pb-24">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border/60 p-10 md:p-14 shadow-soft">
          <div className="text-center mb-10">
            <FileText className="size-9 text-[var(--color-gold)] mx-auto" />
            <h2 className="font-display text-4xl mt-4 text-navy-deep">Online Inquiry</h2>
            <p className="mt-3 text-muted-foreground text-sm">Tell us about your child. Our team responds within 24 hours.</p>
          </div>
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="size-12 mx-auto text-[var(--color-gold)]" />
              <h3 className="font-display text-2xl mt-4 text-navy-deep">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">We've received your inquiry and will be in touch shortly.</p>
            </div>
          ) : (
            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Parent Name" required />
                <Field label="Phone" type="tel" required />
              </div>
              <Field label="Email" type="email" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Child's Name" required />
                <Field label="Applying for Grade" required />
              </div>
              <div>
                <label className="text-sm font-medium text-navy-deep">Message</label>
                <textarea rows={4} className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]" />
              </div>
              <button className="h-12 mt-2 rounded-full bg-navy text-ivory font-medium hover:bg-navy-deep transition">Submit Inquiry</button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x mx-auto max-w-3xl pb-24">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">FAQ</span>
          <h2 className="font-display text-4xl mt-4 text-navy-deep">Common questions</h2>
        </div>
        <div className="space-y-3">
          {[
            { q: "Is boarding mandatory?", a: "No. We offer both day-school and boarding options for grades 6 and above." },
            { q: "What is the medium of instruction?", a: "English is our primary medium across all subjects except Nepali." },
            { q: "Do you offer transport?", a: "Yes — we operate routes across Chamaita and nearby areas." },
            { q: "Are there scholarships?", a: "Yes — merit and need-based scholarships are awarded annually." },
          ].map((f, i) => <Faq key={i} {...f} />)}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy-deep">{label}{required && " *"}</label>
      <input
        type={type}
        required={required}
        className="mt-2 w-full h-11 rounded-lg border border-input bg-background px-4 text-sm focus:outline-none focus:border-[var(--color-gold)]"
      />
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/60 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-medium text-navy-deep">{q}</span>
        <ChevronDown className={`size-5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
