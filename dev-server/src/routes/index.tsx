import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Award, Beaker, BookOpen, Calendar, ChevronRight, GraduationCap, Microscope, Quote, Sparkles, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero-campus.jpg";
import academics from "@/assets/academics.jpg";
import library from "@/assets/library.jpg";
import lab from "@/assets/lab.jpg";
import grad from "@/assets/graduation.jpg";
import principal from "@/assets/principal.jpg";
import sports from "@/assets/sports.jpg";
import compLab from "@/assets/computer-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pathibhara English Boarding School — Excellence in Education" },
      { name: "description", content: "Pathibhara English Boarding School in Chamaita, Nepal — nurturing curious minds and shaping global citizens through world-class academics, modern facilities, and dedicated faculty." },
      { property: "og:title", content: "Pathibhara English Boarding School" },
      { property: "og:description", content: "Excellence in education. Shaping global citizens since 1998." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1600;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={hero} alt="Pathibhara campus" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-x mx-auto max-w-7xl py-24 text-ivory">
          <div className="max-w-3xl fade-up">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">
              <span className="gold-rule" /> Est. 1998 · Chamaita, Nepal
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-6 leading-[1.05] text-balance">
              Where minds grow, <em className="not-italic text-[var(--color-gold)]">character endures.</em>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ivory/85 max-w-2xl leading-relaxed">
              A premier English boarding school nurturing curious, courageous, and compassionate
              global citizens through world-class academics and timeless values.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="group h-14 px-8 inline-flex items-center gap-2 rounded-full gradient-gold text-navy-deep font-semibold shadow-elegant hover:scale-[1.02] transition"
              >
                Apply Now <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="h-14 px-8 inline-flex items-center gap-2 rounded-full border border-ivory/40 text-ivory font-medium hover:bg-ivory/10 transition backdrop-blur"
              >
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Why Pathibhara</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep text-balance">
              An education built on excellence, integrity, and inquiry.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            For over two decades, we have crafted an environment where every child is challenged
            academically, nurtured personally, and inspired to lead.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Academic Excellence", text: "A rigorous curriculum that consistently delivers top regional results." },
            { icon: Microscope, title: "Modern Facilities", text: "State-of-the-art labs, library, and digital learning spaces." },
            { icon: Users, title: "Expert Faculty", text: "Mentors with international training and decades of classroom experience." },
            { icon: Award, title: "Proven Achievements", text: "Hundreds of graduates placed at top universities worldwide." },
          ].map((f, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 border border-border/60 hover-lift fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="size-12 rounded-xl bg-secondary flex items-center justify-center text-navy mb-6 group-hover:gradient-gold transition">
                <f.icon className="size-5" />
              </div>
              <h3 className="font-display text-2xl text-navy-deep">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy text-ivory">
        <div className="container-x mx-auto max-w-7xl py-20 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { n: 1850, s: "+", label: "Students Enrolled" },
            { n: 98, s: "%", label: "Graduation Success" },
            { n: 27, s: "", label: "Years of Excellence" },
            { n: 320, s: "+", label: "University Placements" },
          ].map((s, i) => (
            <div key={i} className="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="font-display text-5xl md:text-6xl text-[var(--color-gold)]">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-3 text-sm tracking-[0.2em] uppercase text-ivory/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Programs</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep text-balance">Featured academic pathways</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: academics, eyebrow: "Early Years", title: "Foundation School", text: "Nursery through Grade 5 — discovery-based learning." },
            { img: lab, eyebrow: "Middle School", title: "Inquiry Years", text: "Grades 6–8 with hands-on STEM and humanities." },
            { img: grad, eyebrow: "High School", title: "Senior Academy", text: "Grades 9–12, university preparation with global standards." },
          ].map((p, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden bg-card border border-border/60 hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)]">{p.eyebrow}</span>
                <h3 className="font-display text-2xl mt-2 text-navy-deep">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                <Link to="/academics" className="mt-5 inline-flex items-center gap-1 text-sm text-navy font-medium group/link">
                  Discover <ChevronRight className="size-4 group-hover/link:translate-x-1 transition" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="bg-secondary">
        <div className="container-x mx-auto max-w-7xl py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md rounded-2xl overflow-hidden shadow-elegant">
              <img src={principal} alt="Principal" loading="lazy" className="size-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy-deep/90 to-transparent text-ivory">
                <div className="font-display text-2xl">Dr. Ramesh Bhattarai</div>
                <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mt-1">Principal</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Quote className="size-10 text-[var(--color-gold)]" />
            <h2 className="font-display text-3xl md:text-4xl mt-6 text-navy-deep text-balance leading-tight">
              "Every child who walks through our gates carries the seeds of greatness.
              Our calling is simply to provide the soil, the light, and the patience."
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              At Pathibhara, we believe education is more than examinations — it is the cultivation of
              wisdom, empathy, and the lifelong habit of inquiry. Welcome to a school that values
              who your child becomes as much as what they achieve.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-navy font-medium group">
              Read full message <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* CAMPUS GALLERY */}
      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Campus Life</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">A glimpse into our world</h2>
          </div>
          <Link to="/student-life" className="text-sm font-medium text-navy inline-flex items-center gap-1 group">
            View full gallery <ChevronRight className="size-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[library, sports, compLab, lab].map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-xl ${i % 3 === 0 ? "row-span-2 md:row-span-2 aspect-[3/4]" : "aspect-square"} group`}>
              <img src={src} loading="lazy" alt="" className="size-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy-deep text-ivory">
        <div className="container-x mx-auto max-w-7xl py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Voices</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">What our community says</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Pathibhara gave my daughter the confidence to dream beyond borders. The faculty truly cares.", n: "Sunita Sharma", r: "Parent, Grade 10" },
              { q: "I arrived shy and unsure. I leave ready for university and life. This school changed me.", n: "Aarav Khadka", r: "Alumnus, Class of 2024" },
              { q: "The blend of tradition and modernity here is rare. My son loves coming to school every day.", n: "Bikash Rai", r: "Parent, Grade 6" },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl bg-ivory/5 border border-ivory/10 p-8 backdrop-blur hover:bg-ivory/10 transition">
                <Quote className="size-7 text-[var(--color-gold)]" />
                <blockquote className="mt-5 text-ivory/90 leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-ivory/10">
                  <div className="font-medium">{t.n}</div>
                  <div className="text-xs text-ivory/60 mt-1">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS / EVENTS */}
      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Latest</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">News & Events</h2>
          </div>
          <Link to="/news" className="text-sm font-medium text-navy inline-flex items-center gap-1 group">
            All updates <ChevronRight className="size-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { d: "12 Mar", t: "Annual Science Exhibition 2026", e: "Over 200 student projects on display across four labs.", i: Beaker },
            { d: "28 Mar", t: "Inter-School Debate Championship", e: "Hosting 14 schools across Eastern Nepal this spring.", i: Sparkles },
            { d: "15 Apr", t: "Graduation Ceremony — Class of 2026", e: "Celebrating the achievements of our newest alumni.", i: GraduationCap },
          ].map((n, i) => (
            <article key={i} className="group border-t border-border pt-8 hover-lift">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Calendar className="size-4 text-[var(--color-gold)]" /> {n.d}, 2026
              </div>
              <h3 className="font-display text-2xl mt-4 text-navy-deep group-hover:text-navy transition">{n.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{n.e}</p>
              <Link to="/news" className="mt-5 inline-flex items-center gap-1 text-sm text-navy font-medium">
                Read more <ChevronRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 md:p-20 text-ivory">
          <img src={grad} alt="" className="absolute inset-0 size-full object-cover mix-blend-overlay opacity-50" loading="lazy" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl text-balance">Begin a journey of excellence.</h2>
            <p className="mt-5 text-ivory/85 text-lg">
              Admissions for 2026 are now open. Schedule a campus visit or apply online today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/admissions" className="h-14 px-8 inline-flex items-center gap-2 rounded-full gradient-gold text-navy-deep font-semibold shadow-elegant">
                Apply Now <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact" className="h-14 px-8 inline-flex items-center rounded-full border border-ivory/40 text-ivory font-medium hover:bg-ivory/10 transition">
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
