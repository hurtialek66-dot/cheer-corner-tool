import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const PAGE_NAME = "Our Community";
const TAGLINE = "A place to gather, share, and belong.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${PAGE_NAME} — ${TAGLINE}` },
      {
        name: "description",
        content:
          "Welcome to our community page — discover our story, what we do, and how to get involved. Follow us on Facebook for daily updates.",
      },
      { property: "og:title", content: `${PAGE_NAME} — ${TAGLINE}` },
      {
        property: "og:description",
        content: "Discover our story, what we do, and how to connect with us.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Offerings />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg tracking-tight">
          {PAGE_NAME}
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#offerings" className="hover:text-foreground transition">What we do</a>
          <a href="#gallery" className="hover:text-foreground transition">Moments</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90 transition"
        >
          Say hello
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
            Welcome
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.05]">
            {TAGLINE}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            We're {PAGE_NAME} — a small corner of the internet built around the
            people, stories, and moments that make our page feel like home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#about"
              className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Our story
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src={heroImg}
              alt="Community gathering at golden hour"
              width={1600}
              height={1104}
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl">Rooted in something real.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            What began as a simple Facebook page has grown into a community of
            friends, neighbors, and quiet supporters — people who show up, share,
            and cheer each other on.
          </p>
          <p>
            Every post, every comment, every "like" is part of a bigger story
            we're writing together. This site is our home base — a slower place
            to share who we are and what we care about.
          </p>
          <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-border/60">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Since</dt>
              <dd className="mt-2 font-display text-3xl">2021</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Members</dt>
              <dd className="mt-2 font-display text-3xl">2k+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Stories</dt>
              <dd className="mt-2 font-display text-3xl">100+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

const OFFERINGS = [
  {
    title: "Daily updates",
    body: "Photos, stories, and small notes from the week — the kind of things that make our page feel alive.",
  },
  {
    title: "Community events",
    body: "Meetups, workshops, and gatherings — online and off — where our followers become friends.",
  },
  {
    title: "Behind the scenes",
    body: "Honest looks at how it all comes together, straight from the people behind the page.",
  },
];

function Offerings() {
  return (
    <section id="offerings" className="py-24 md:py-32 bg-secondary/50 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            What we do
          </p>
          <h2 className="text-3xl md:text-5xl">A little bit of everything, made with care.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {OFFERINGS.map((o, i) => (
            <article
              key={o.title}
              className="group relative rounded-2xl bg-card p-8 border border-border/60 hover:shadow-[var(--shadow-soft)] transition"
            >
              <div className="text-xs font-mono text-primary mb-6">
                0{i + 1}
              </div>
              <h3 className="text-2xl mb-3">{o.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{o.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Moments
            </p>
            <h2 className="text-3xl md:text-5xl max-w-xl">
              A few of our favorite frames.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            See more on Facebook →
          </a>
        </div>
        <div className="grid md:grid-cols-6 gap-4">
          <div className="md:col-span-4 md:row-span-2 rounded-2xl overflow-hidden">
            <img
              src={gallery3}
              alt="Warm still life"
              width={900}
              height={900}
              loading="lazy"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="md:col-span-2 rounded-2xl overflow-hidden">
            <img
              src={gallery1}
              alt="Detail shot"
              width={900}
              height={1100}
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-2 rounded-2xl overflow-hidden">
            <img
              src={gallery2}
              alt="People gathered"
              width={900}
              height={700}
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
          Say hello
        </p>
        <h2 className="text-4xl md:text-6xl">Let's stay in touch.</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          The best place to reach us — and to see what we're up to every day —
          is right on Facebook. Come say hi.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.facebook.com/share/1DBXqaMakv/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium shadow-[var(--shadow-soft)] hover:opacity-90 transition"
          >
            Visit our Facebook page
          </a>
          <a
            href="mailto:hello@example.com"
            className="rounded-full border border-border px-8 py-4 font-medium hover:bg-background transition"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {PAGE_NAME}. Made with care.</p>
        <p className="font-display italic">{TAGLINE}</p>
      </div>
    </footer>
  );
}
