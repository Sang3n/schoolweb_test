import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pathibhara English Boarding School" },
      { name: "description", content: "Get in touch with Pathibhara English Boarding School. Visit us in Chamaita, Nepal." },
      { property: "og:title", content: "Contact Pathibhara" },
      { property: "og:description", content: "Phone, email, address, and inquiry form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you."
        subtitle="Whether you're considering admission or simply want to learn more — our team is here to help."
        image={hero}
      />

      <section className="container-x mx-auto max-w-7xl py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-4xl text-navy-deep">Get in touch</h2>
          <p className="mt-4 text-muted-foreground">Reach us through any of the channels below, or drop a message and we'll respond within one business day.</p>
          <div className="mt-10 space-y-6">
            {[
              { i: MapPin, t: "Address", v: "2RM5+63C, Chamaita 57400, Nepal" },
              { i: Phone, t: "Phone", v: "+977 980-0000000" },
              { i: Mail, t: "Email", v: "info@pathibhara.edu.np" },
            ].map((c, i) => (
              <div key={i} className="flex gap-5">
                <div className="size-12 rounded-full gradient-gold flex items-center justify-center text-navy-deep shrink-0">
                  <c.i className="size-5" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)]">{c.t}</div>
                  <div className="text-navy-deep font-medium mt-1">{c.v}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/9779800000000"
            className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-medium hover:opacity-90 transition shadow-soft"
          >
            <MessageCircle className="size-5" /> Chat on WhatsApp
          </a>
        </div>

        <div className="bg-card rounded-2xl border border-border/60 p-10 shadow-soft">
          {sent ? (
            <div className="text-center py-8">
              <CheckCircle2 className="size-12 mx-auto text-[var(--color-gold)]" />
              <h3 className="font-display text-2xl mt-4 text-navy-deep">Message sent</h3>
              <p className="mt-2 text-muted-foreground">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="grid gap-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <h3 className="font-display text-2xl text-navy-deep">Send a message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Your name *" className="h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:border-[var(--color-gold)]" />
                <input required type="email" placeholder="Email *" className="h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:border-[var(--color-gold)]" />
              </div>
              <input placeholder="Subject" className="h-11 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:border-[var(--color-gold)]" />
              <textarea required rows={5} placeholder="Your message *" className="px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:border-[var(--color-gold)]" />
              <button className="h-12 rounded-full bg-navy text-ivory font-medium hover:bg-navy-deep transition">Send Message</button>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="container-x mx-auto max-w-7xl pb-24">
        <div className="rounded-2xl overflow-hidden border border-border/60 shadow-soft">
          <iframe
            title="Pathibhara English Boarding School location"
            src="https://www.google.com/maps?q=Chamaita+57400+Nepal&output=embed"
            className="w-full h-[450px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
