import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/mosque-hero.jpg";
import exteriorImg from "@/assets/mosque-exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Noor Mosque — A Home for Faith & Community" },
      { name: "description", content: "Al-Noor Mosque welcomes you for daily prayers, Jumu'ah, Quran classes, and community events. All are welcome." },
      { property: "og:title", content: "Al-Noor Mosque — A Home for Faith & Community" },
      { property: "og:description", content: "Daily prayers, Jumu'ah, classes, and community events. All are welcome." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TODAY_PRAYERS = [
  { name: "Fajr", adhan: "5:12", iqamah: "5:32" },
  { name: "Dhuhr", adhan: "1:05", iqamah: "1:25" },
  { name: "Asr", adhan: "4:40", iqamah: "5:00" },
  { name: "Maghrib", adhan: "7:18", iqamah: "7:23" },
  { name: "Isha", adhan: "8:45", iqamah: "9:00" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Al-Noor Mosque prayer hall"
            width={1600}
            height={1104}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44 text-primary-foreground">
          <p className="font-arabic text-2xl md:text-3xl text-[color:var(--gold)] mb-6">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            A home for faith, learning, and community.
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-xl">
            Welcome to Al-Noor Mosque — a place of worship open to all, in the heart of our community.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/prayer-times"
              className="rounded-full bg-[var(--gold)] text-primary px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Today's prayer times
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition"
            >
              About the mosque
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer times strip */}
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">Today</p>
              <h2 className="font-display text-3xl">Prayer Times</h2>
            </div>
            <Link to="/prayer-times" className="text-sm text-primary underline underline-offset-4">
              Full schedule →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TODAY_PRAYERS.map((p) => (
              <div key={p.name} className="rounded-lg border border-border/60 bg-background p-5 text-center">
                <div className="font-display text-xl text-primary">{p.name}</div>
                <div className="mt-3 text-2xl font-semibold tabular-nums">{p.iqamah}</div>
                <div className="text-xs text-muted-foreground mt-1">Adhan {p.adhan}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src={exteriorImg}
              alt="Al-Noor Mosque exterior at dusk"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-xl shadow-[var(--shadow-soft)]"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] mb-4">Assalāmu ʿalaykum</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Peace be upon you. Come as you are.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Al-Noor Mosque is a house of worship serving Muslims and welcoming
              neighbors of every background. Our doors are open for the five daily
              prayers, Jumu'ah, learning circles, and community gatherings throughout the year.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Whether you're visiting for the first time or joining us regularly,
              you'll find a welcoming place to pray, learn, and belong.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/about" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium">
                Our story
              </Link>
              <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition">
                Plan a visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-20 bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] mb-4">What we offer</p>
            <h2 className="font-display text-4xl md:text-5xl">A place for every part of the week.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Daily Prayers", d: "Fajr through Isha, every day of the year — with iqamah shortly after each adhan." },
              { t: "Jumu'ah Prayer", d: "Two khutbahs each Friday afternoon. Overflow space available. All welcome." },
              { t: "Quran & Learning", d: "Weekly Quran classes, tajweed, and youth halaqah for all ages and levels." },
              { t: "Community Events", d: "Iftars, Eid celebrations, lectures, and family programs throughout the year." },
              { t: "New Muslim Support", d: "Guidance, mentorship, and a warm welcome for those exploring or embracing Islam." },
              { t: "Charity & Zakat", d: "Collection and distribution of zakat, sadaqah, and food assistance for those in need." },
            ].map((f) => (
              <article key={f.t} className="rounded-xl bg-card border border-border/60 p-7 hover:shadow-[var(--shadow-soft)] transition">
                <h3 className="font-display text-2xl text-primary mb-3">{f.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-arabic text-3xl text-[color:var(--gold)] mb-6">وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ</p>
          <h2 className="font-display text-4xl md:text-5xl">Support our masjid.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Al-Noor is sustained entirely by the generosity of our community.
            Your donation helps keep our doors open, our programs running, and our neighbors fed.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium shadow-[var(--shadow-soft)] hover:opacity-90 transition"
          >
            Donate now
          </Link>
        </div>
      </section>
    </>
  );
}
