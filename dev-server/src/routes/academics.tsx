import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Atom, BookOpen, Brain, Globe, Music, Palette, Calculator, Languages } from "lucide-react";
import hero from "@/assets/academics.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Pathibhara English Boarding School" },
      { name: "description", content: "Our curriculum, departments, and learning approach combine rigorous academics with character formation." },
      { property: "og:title", content: "Academics at Pathibhara" },
      { property: "og:description", content: "Curriculum, departments, faculty, and learning approach." },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: Academics,
});

const departments = [
  { i: Atom, t: "Sciences", d: "Physics, Chemistry, Biology with full lab integration." },
  { i: Calculator, t: "Mathematics", d: "Pure and applied math from foundation to advanced." },
  { i: Languages, t: "Languages", d: "English, Nepali, and an optional third language." },
  { i: Globe, t: "Humanities", d: "History, geography, and social studies with field study." },
  { i: Brain, t: "Computer Science", d: "Coding, robotics, and digital citizenship." },
  { i: Palette, t: "Arts", d: "Visual arts, design, and creative expression." },
  { i: Music, t: "Performing Arts", d: "Music, dance, and theatre programs." },
  { i: BookOpen, t: "Wellness & Ethics", d: "Mindfulness, ethics, and physical education." },
];

function Academics() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Academics"
        title="A curriculum that challenges. A community that supports."
        subtitle="From Nursery to Grade 12, our academic program combines international rigor with the warmth of personal mentorship."
        image={hero}
      />

      <section className="container-x mx-auto max-w-7xl py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Our Approach</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep text-balance">Learning that lasts a lifetime.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We teach students to ask better questions, not just memorize better answers. Our classrooms
            balance direct instruction with inquiry, collaboration, and reflection — preparing students
            for the demands of university and the unknowns of tomorrow.
          </p>
          <ul className="mt-8 space-y-4">
            {["Small class sizes (max 22 students)", "Personalized academic mentorship", "Project-based and inquiry learning", "Annual academic conferences"].map((p, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="size-5 mt-0.5 rounded-full gradient-gold flex items-center justify-center text-navy-deep text-xs font-bold">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant">
          <img src={hero} alt="" loading="lazy" className="size-full object-cover" />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-x mx-auto max-w-7xl py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Departments</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">Eight pillars of inquiry</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((d, i) => (
              <div key={i} className="bg-card border border-border/60 rounded-2xl p-7 hover-lift">
                <div className="size-12 rounded-xl bg-secondary flex items-center justify-center text-navy mb-5">
                  <d.i className="size-5" />
                </div>
                <h3 className="font-display text-xl text-navy-deep">{d.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Stages</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">School stages</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { g: "Nursery — Grade 5", t: "Foundation School", d: "Play-based discovery, literacy, and numeracy." },
            { g: "Grade 6 — 8", t: "Middle School", d: "Inquiry, exploration, and skill-building across disciplines." },
            { g: "Grade 9 — 12", t: "Senior Academy", d: "SEE & +2 streams with university counselling." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-border/60 p-8 hover-lift bg-card">
              <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)]">{s.g}</div>
              <h3 className="font-display text-2xl mt-2 text-navy-deep">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
