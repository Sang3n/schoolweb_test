import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Award, Compass, Heart, ShieldCheck, Sparkles, Target } from "lucide-react";
import hero from "@/assets/graduation.jpg";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pathibhara English Boarding School" },
      { name: "description", content: "Our mission, vision, history, and leadership. Discover the values that have shaped Pathibhara since 1998." },
      { property: "og:title", content: "About Pathibhara" },
      { property: "og:description", content: "Mission, vision, history, and leadership." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const leaders = [
  { n: "Dr. Ramesh Bhattarai", r: "Principal", b: "M.Ed., 28 years in education leadership." },
  { n: "Mrs. Sabina Limbu", r: "Vice Principal — Academics", b: "Cambridge-certified, curriculum specialist." },
  { n: "Mr. Prabin Tamang", r: "Head of Pastoral Care", b: "Counsellor and student welfare lead." },
  { n: "Ms. Anjali Gurung", r: "Director of Admissions", b: "Family liaison and outreach lead." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A heritage of learning. A future of leaders."
        subtitle="Since 1998, Pathibhara has been a place where rigorous academics meet timeless values, producing graduates who serve communities at home and abroad."
        image={hero}
      />

      {/* Mission Vision */}
      <section className="container-x mx-auto max-w-7xl py-24 grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, t: "Our Mission", d: "To cultivate intellectually curious, ethically grounded young people prepared to lead lives of purpose and contribution." },
          { icon: Compass, t: "Our Vision", d: "To be Nepal's most respected English boarding school — a beacon of academic excellence and character formation." },
        ].map((m, i) => (
          <div key={i} className="bg-card border border-border/60 rounded-2xl p-10 hover-lift">
            <div className="size-14 rounded-full gradient-gold flex items-center justify-center text-navy-deep mb-6">
              <m.icon className="size-6" />
            </div>
            <h2 className="font-display text-3xl text-navy-deep">{m.t}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{m.d}</p>
          </div>
        ))}
      </section>

      {/* History */}
      <section className="bg-secondary">
        <div className="container-x mx-auto max-w-7xl py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Our Journey</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">A timeline of growth</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {[
              { y: "1998", t: "Founded in Chamaita", d: "Opened with 86 students and a vision rooted in service." },
              { y: "2007", t: "Senior Academy Established", d: "Grades 11–12 introduced with science and management streams." },
              { y: "2015", t: "New Science & Tech Wing", d: "Modern labs and computer suites inaugurated." },
              { y: "2022", t: "Boarding House Expansion", d: "On-campus residence doubled to welcome more students." },
              { y: "2026", t: "International Partnerships", d: "Exchange programs with schools in the UK and Singapore." },
            ].map((e, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 gap-6 mb-10 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:order-2 md:pl-10" : "md:pr-10"}`}>
                  <div className="font-display text-3xl text-[var(--color-gold)]">{e.y}</div>
                  <h3 className="font-display text-xl mt-1 text-navy-deep">{e.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
                </div>
                <div className="absolute left-2 md:left-1/2 -translate-x-1/2 top-2 size-4 rounded-full bg-navy ring-4 ring-secondary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Leadership</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">Meet our team</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((l, i) => (
            <div key={i} className="bg-card border border-border/60 rounded-2xl overflow-hidden hover-lift">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={principal} alt={l.n} loading="lazy" className="size-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-navy-deep">{l.n}</h3>
                <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mt-1">{l.r}</div>
                <p className="mt-3 text-sm text-muted-foreground">{l.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values / Accreditation */}
      <section className="bg-navy-deep text-ivory">
        <div className="container-x mx-auto max-w-7xl py-24 grid md:grid-cols-3 gap-10">
          {[
            { i: Heart, t: "Compassion", d: "Empathy as the foundation of community." },
            { i: ShieldCheck, t: "Integrity", d: "Honesty in word, fairness in action." },
            { i: Sparkles, t: "Excellence", d: "Pursuit of mastery in mind and craft." },
          ].map((v, i) => (
            <div key={i}>
              <v.i className="size-8 text-[var(--color-gold)]" />
              <h3 className="font-display text-2xl mt-4">{v.t}</h3>
              <p className="mt-2 text-ivory/70">{v.d}</p>
            </div>
          ))}
        </div>
        <div className="container-x mx-auto max-w-7xl pb-20 border-t border-ivory/10 pt-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Accreditation</div>
            <div className="font-display text-2xl mt-2">Recognized by the Ministry of Education, Nepal</div>
          </div>
          <Award className="size-12 text-[var(--color-gold)]" />
        </div>
      </section>
    </SiteLayout>
  );
}
