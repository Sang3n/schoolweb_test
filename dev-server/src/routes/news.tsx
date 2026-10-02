import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Calendar, ChevronRight } from "lucide-react";
import hero from "@/assets/graduation.jpg";
import acad from "@/assets/academics.jpg";
import lab from "@/assets/lab.jpg";
import sports from "@/assets/sports.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Pathibhara English Boarding School" },
      { name: "description", content: "The latest news, announcements, and upcoming events at Pathibhara." },
      { property: "og:title", content: "News & Events" },
      { property: "og:description", content: "Stay updated with Pathibhara news and events." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

const posts = [
  { img: acad, d: "Mar 12, 2026", c: "Academics", t: "Annual Science Exhibition draws 200+ projects", e: "Students showcased innovations across robotics, biology, and sustainability themes." },
  { img: lab, d: "Mar 28, 2026", c: "Events", t: "Inter-School Debate Championship 2026", e: "Pathibhara hosts 14 schools from across Eastern Nepal in a three-day tournament." },
  { img: hero, d: "Apr 15, 2026", c: "Milestone", t: "Class of 2026 graduates with record honours", e: "98% of graduates received placement offers from top universities." },
  { img: sports, d: "May 02, 2026", c: "Sports", t: "Football team wins regional championship", e: "Our senior boys' team brought home the trophy after a thrilling final." },
  { img: acad, d: "May 18, 2026", c: "Academics", t: "New Mathematics Olympiad club launched", e: "Open to students from Grade 7 upward — meets every Wednesday." },
  { img: lab, d: "Jun 02, 2026", c: "Announcement", t: "Summer Enrichment Program registration", e: "Three-week camps in robotics, creative writing, and outdoor leadership." },
];

function News() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="News & Events"
        title="Stories from our community."
        subtitle="Stay connected with the latest happenings, achievements, and upcoming events at Pathibhara."
        image={hero}
      />
      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden bg-card border border-border/60 hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <Calendar className="size-4 text-[var(--color-gold)]" /> {p.d} · <span className="text-[var(--color-gold)]">{p.c}</span>
                </div>
                <h3 className="font-display text-2xl mt-3 text-navy-deep group-hover:text-navy transition">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.e}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm text-navy font-medium">
                  Read more <ChevronRight className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
