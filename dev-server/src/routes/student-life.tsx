import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Music, Palette, Trophy, Users, Mic, Tent } from "lucide-react";
import hero from "@/assets/sports.jpg";
import lib from "@/assets/library.jpg";
import lab from "@/assets/lab.jpg";
import grad from "@/assets/graduation.jpg";
import sports from "@/assets/sports.jpg";
import comp from "@/assets/computer-lab.jpg";
import acad from "@/assets/academics.jpg";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life — Pathibhara English Boarding School" },
      { name: "description", content: "Clubs, sports, arts, and activities that shape character beyond the classroom." },
      { property: "og:title", content: "Student Life at Pathibhara" },
      { property: "og:description", content: "Clubs, sports, activities, and events." },
      { property: "og:url", content: "/student-life" },
    ],
    links: [{ rel: "canonical", href: "/student-life" }],
  }),
  component: StudentLife,
});

function StudentLife() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Student Life"
        title="Life beyond the classroom."
        subtitle="Where friendships flourish, talents are discovered, and character is built."
        image={hero}
      />

      <section className="container-x mx-auto max-w-7xl py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Activities</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">Discover your passion</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { i: Trophy, t: "Sports & Athletics", d: "Football, basketball, cricket, athletics, and table tennis." },
            { i: Music, t: "Music Society", d: "Choir, classical and contemporary instrumental ensembles." },
            { i: Palette, t: "Arts & Design", d: "Visual arts, photography, and design clubs." },
            { i: Mic, t: "Debate & MUN", d: "Public speaking, debate, and Model United Nations." },
            { i: Users, t: "Service Clubs", d: "Community service, environment, and outreach programs." },
            { i: Tent, t: "Outdoor Education", d: "Treks, camps, and adventure programs in the Himalayas." },
          ].map((c, i) => (
            <div key={i} className="bg-card border border-border/60 rounded-2xl p-8 hover-lift">
              <div className="size-12 rounded-xl bg-secondary flex items-center justify-center text-navy mb-5">
                <c.i className="size-5" />
              </div>
              <h3 className="font-display text-2xl text-navy-deep">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary">
        <div className="container-x mx-auto max-w-7xl py-24">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">Gallery</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-navy-deep">Moments from our campus</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[hero, lib, lab, grad, sports, comp, acad, hero, lib].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl group">
                <img src={src} alt="" loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
