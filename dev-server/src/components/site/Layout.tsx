import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[52vh] min-h-[400px] flex items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative container-x mx-auto max-w-7xl pb-16 text-ivory fade-up">
        <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">{eyebrow}</span>
        <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-3xl text-balance">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-ivory/80 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
