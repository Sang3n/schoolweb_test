import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory mt-24">
      <div className="container-x mx-auto max-w-7xl py-20 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full gradient-gold flex items-center justify-center">
              <GraduationCap className="size-6 text-navy-deep" />
            </div>
            <div>
              <div className="font-display text-xl">Pathibhara</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-ivory/60">English Boarding School</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-ivory/70 leading-relaxed">
            Shaping curious, courageous, and compassionate global citizens since 1998.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-9 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-navy-deep hover:border-transparent transition"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li><Link to="/about" className="hover:text-[var(--color-gold)]">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-[var(--color-gold)]">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-[var(--color-gold)]">Admissions</Link></li>
            <li><Link to="/facilities" className="hover:text-[var(--color-gold)]">Facilities</Link></li>
            <li><Link to="/student-life" className="hover:text-[var(--color-gold)]">Student Life</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-5">Visit</h4>
          <ul className="space-y-4 text-sm text-ivory/75">
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 shrink-0 text-[var(--color-gold)]" /> 2RM5+63C, Chamaita 57400, Nepal</li>
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 shrink-0 text-[var(--color-gold)]" /> +977 980-0000000</li>
            <li className="flex gap-3"><Mail className="size-4 mt-0.5 shrink-0 text-[var(--color-gold)]" /> info@pathibhara.edu.np</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-5">Newsletter</h4>
          <p className="text-sm text-ivory/70 mb-4">Stay updated with school events, news, and announcements.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 h-11 px-4 rounded-full bg-ivory/10 border border-ivory/20 text-sm placeholder:text-ivory/50 focus:outline-none focus:border-[var(--color-gold)]"
            />
            <button className="h-11 px-5 rounded-full gradient-gold text-navy-deep text-sm font-medium hover:opacity-90 transition">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Pathibhara English Boarding School. All rights reserved.</p>
          <p>Crafted with excellence · Chamaita, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
