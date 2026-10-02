import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Bus, Building2, BookOpen, Beaker, Monitor, UtensilsCrossed } from "lucide-react";
import hero from "@/assets/library.jpg";
import lib from "@/assets/library.jpg";
import lab from "@/assets/lab.jpg";
import comp from "@/assets/computer-lab.jpg";
import sports from "@/assets/sports.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Pathibhara English Boarding School" },
      { name: "description", content: "World-class library, science labs, computer suites, sports, transport, hostel, and cafeteria." },
      { property: "og:title", content: "Campus Facilities" },
      { property: "og:description", content: "Library, labs, hostel, transport, and more." },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: Facilities,
});

const items = [
  { img: lib, i: BookOpen, t: "Library & Resource Centre", d: "Over 20,000 books across English and Nepali, with quiet reading rooms and digital resources." },
  { img: lab, i: Beaker, t: "Science Laboratories", d: "Fully equipped Physics, Chemistry, and Biology labs with safety-first design." },
  { img: comp, i: Monitor, t: "Computer & Robotics Lab", d: "Modern workstations, coding stations, and robotics kits for hands-on learning." },
  { img: sports, i: Building2, t: "Sports Complex", d: "Football field, basketball court, indoor hall, and athletics track." },
];

function Facilities() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Facilities"
        title="Spaces designed for learning."
        subtitle="Every corner of our campus is built to nurture curiosity, creativity, and community."
        image={hero}
      />

      <section className="container-x mx-auto max-w-7xl py-24 space-y-16">
        {items.map((it, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-elegant">
              <img src={it.img} alt={it.t} loading="lazy" className="size-full object-cover" />
            </div>
            <div>
              <div className="size-14 rounded-full gradient-gold flex items-center justify-center text-navy-deep">
                <it.i className="size-6" />
              </div>
              <h2 className="font-display text-4xl mt-6 text-navy-deep">{it.t}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-secondary">
        <div className="container-x mx-auto max-w-7xl py-24 grid md:grid-cols-3 gap-6">
          {[
            { i: Bus, t: "Transportation", d: "Safe, GPS-tracked buses across major routes." },
            { i: Building2, t: "Boarding House", d: "Warm, supervised residence with house parents." },
            { i: UtensilsCrossed, t: "Cafeteria", d: "Nutritious, freshly prepared meals daily." },
          ].map((s, i) => (
            <div key={i} className="bg-card border border-border/60 rounded-2xl p-8 hover-lift">
              <div className="size-12 rounded-xl bg-secondary flex items-center justify-center text-navy mb-5">
                <s.i className="size-5" />
              </div>
              <h3 className="font-display text-2xl text-navy-deep">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
