import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Suspense } from "react";
import heroAsset from "@/assets/mosque-recane-hero.jpg.asset.json";
import exteriorImg from "@/assets/mosque-recane-exterior.jpg.asset.json";
import { fetchPrizrenPrayerTimes } from "@/lib/prayer-times";

const prayerTimesQuery = queryOptions({
  queryKey: ["prayer-times", "prizren", new Date().toDateString()],
  queryFn: () => fetchPrizrenPrayerTimes(),
  staleTime: 1000 * 60 * 30,
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Džamija Rečane — Prizren, Kosovo" },
      { name: "description", content: "Džamija Rečane u Prizrenu, Kosovo — dobrodošli na dnevne namaze, časove Kur'ana i događaje zajednice." },
      { property: "og:title", content: "Džamija Rečane — Prizren, Kosovo" },
      { property: "og:description", content: "Dnevni namazi, časovi i događaji zajednice u Prizrenu, Kosovo." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(prayerTimesQuery),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroAsset.url}
            alt="Unutrašnjost džamije Rečane"
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
            Dom vjere, znanja i zajedništva.
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-xl">
            Dobrodošli u džamiju Rečane, mjesto ibadeta otvoreno za sve, u srcu naše zajednice.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/prayer-times"
              className="rounded-full bg-[var(--gold)] text-primary px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Današnje vreme namaza
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition"
            >
              O džamiji
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer times strip */}
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">Danas</p>
              <h2 className="font-display text-3xl">Vreme namaza</h2>
            </div>
            <Link to="/prayer-times" className="text-sm text-primary underline underline-offset-4">
              Cijeli raspored →
            </Link>
          </div>
          <Suspense fallback={<div className="text-muted-foreground text-sm">Učitavanje vaktova…</div>}>
            <TodayPrayerStrip />
          </Suspense>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src={exteriorImg.url}
              alt="Vanjski izgled džamije Rečane u sumrak"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-xl shadow-[var(--shadow-soft)]"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] mb-4">Es-selamu alejkum</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
            {"\n"}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              Es-selamu alejkum dragi prijatelji, džematlije i svi ljudi dobre volje!{"\n\n"}
              Ova stranica je kreirana sa ciljem da vas redovno obaveštavamo o aktivnostima našeg džemata i džamije u Rečane.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Bilo da nam dolazite prvi put ili nam se redovno pridružujete,
              pronaći ćete toplo mjesto za namaz, učenje i pripadnost.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/about" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium">
                Naša priča
              </Link>
              <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition">
                Planiraj posjetu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-20 bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] mb-4">Šta nudimo</p>
            <h2 className="font-display text-4xl md:text-5xl">Mjesto za svaki dio sedmice.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Dnevni namazi", d: "Od sabaha do jacije, svaki dan u godini\u00a0" },
              { t: "Kur'an i učenje", d: "Sedmični časovi Kur'ana, za sve uzraste i nivoe." },
              { t: "Događaji zajednice", d: "Iftari, bajramske proslave i predavanja" },
              { t: "Zekat i sadaka", d: "Sakupljanje i raspodjela zekata, sadake i pomoći u hrani onima kojima je potrebna." },
            ].map((f) => (
              <article key={f.t} className="rounded-xl bg-card border border-border/60 p-7 hover:shadow-[var(--shadow-soft)] transition">
                <h3 className="font-display text-2xl text-primary mb-3">{f.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

function TodayPrayerStrip() {
  const { data } = useSuspenseQuery(prayerTimesQuery);
  const items = [
    { name: "Sabah", adhan: data.timings.Fajr },
    { name: "Podne", adhan: data.timings.Dhuhr },
    { name: "Ikindija", adhan: data.timings.Asr },
    { name: "Akšam", adhan: data.timings.Maghrib },
    { name: "Jacija", adhan: data.timings.Isha },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {items.map((p) => (
        <div key={p.name} className="rounded-lg border border-border/60 bg-background p-5 text-center">
          <div className="font-display text-xl text-primary">{p.name}</div>
          <div className="mt-3 text-2xl font-semibold tabular-nums">{p.adhan}</div>
          <div className="text-xs text-muted-foreground mt-1">Ezan</div>
        </div>
      ))}
    </div>
  );
}
