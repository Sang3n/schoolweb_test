import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/student-life", label: "Student Life" },
  { to: "/facilities", label: "Facilities" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-navy-deep text-ivory/80 text-xs">
        <div className="container-x mx-auto max-w-7xl flex h-9 items-center justify-between">
          <span className="hidden md:block tracking-wide">Admissions Open 2026 · Limited Seats Available</span>
          <div className="flex gap-5">
            <a href="tel:+9779800000000" className="hover:text-[var(--color-gold)] transition">+977 980-0000000</a>
            <a href="mailto:info@pathibhara.edu.np" className="hidden sm:inline hover:text-[var(--color-gold)] transition">info@pathibhara.edu.np</a>
          </div>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-background"
        }`}
      >
        <div className="container-x mx-auto max-w-7xl flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-11 rounded-full gradient-gold flex items-center justify-center shadow-soft">
              <GraduationCap className="size-6 text-navy-deep" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl text-navy-deep">Pathibhara</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">English Boarding School</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-navy transition relative py-2"
                activeProps={{ className: "text-navy font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              className="hidden md:inline-flex h-10 px-5 items-center justify-center rounded-full bg-navy text-ivory text-sm font-medium tracking-wide hover:bg-navy-deep transition shadow-soft"
            >
              Apply Now
            </Link>
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t bg-background">
            <div className="container-x mx-auto max-w-7xl py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-foreground/80 hover:text-navy border-b border-border/60"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="mt-3 h-11 inline-flex items-center justify-center rounded-full bg-navy text-ivory font-medium"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
