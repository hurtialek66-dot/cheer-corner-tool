import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/prayer-times", label: "Prayer Times" },
  { to: "/events", label: "Events" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-arabic text-lg">
            ن
          </span>
          <span className="font-display text-xl tracking-tight">Al-Noor Mosque</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="hover:text-foreground transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Donate
        </Link>
      </div>
      {/* Mobile nav */}
      <nav className="md:hidden flex overflow-x-auto gap-5 px-6 pb-3 text-sm">
        {NAV.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: n.to === "/" }}
            activeProps={{ className: "text-primary" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="whitespace-nowrap"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gold)] text-primary font-arabic text-lg">
              ن
            </span>
            <span className="font-display text-xl">Al-Noor Mosque</span>
          </div>
          <p className="mt-4 max-w-sm text-sm opacity-80">
            A place of worship, learning, and community. All are welcome — visitors, neighbors, and worshippers alike.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest opacity-70 mb-4">Visit</h4>
          <p className="text-sm opacity-90 leading-relaxed">
            123 Community Way<br />
            Your City, ST 00000<br />
            Open daily for prayers
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest opacity-70 mb-4">Contact</h4>
          <p className="text-sm opacity-90 leading-relaxed">
            info@alnoor-mosque.org<br />
            (555) 123-4567
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Al-Noor Mosque. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-[0.04]" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] mb-4">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
