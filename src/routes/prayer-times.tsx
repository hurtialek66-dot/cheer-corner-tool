import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Suspense } from "react";
import { PageHeader } from "@/components/site-chrome";
import { fetchPrizrenPrayerTimes, iqamahFor } from "@/lib/prayer-times";

const prayerTimesQuery = queryOptions({
  queryKey: ["prayer-times", "prizren", new Date().toDateString()],
  queryFn: () => fetchPrizrenPrayerTimes(),
  staleTime: 1000 * 60 * 30,
});

export const Route = createFileRoute("/prayer-times")({
  head: () => ({
    meta: [
      { title: "Vakat namaza — Prizren, Kosovo | Džamija Recane" },
      { name: "description", content: "Dnevni ezan i ikamet za Prizren, Kosovo, kao i raspored džume u džamiji Recane." },
      { property: "og:title", content: "Vakat namaza — Prizren, Kosovo" },
      { property: "og:description", content: "Dnevni ezan i ikamet za Prizren, Kosovo." },
      { property: "og:url", content: "/prayer-times" },
    ],
    links: [{ rel: "canonical", href: "/prayer-times" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(prayerTimesQuery),
  component: PrayerTimesPage,
});

const JUMUAH = [
  { khutbah: "1. hutba", time: "13:15" },
  { khutbah: "2. hutba", time: "14:15" },
];

function PrayerTimesPage() {
  return (
    <>
      <Suspense fallback={<PageHeader eyebrow="Vakat namaza" title="Učitavanje…" description="Prizren, Kosovo" />}>
        <PrayerTimesContent />
      </Suspense>
    </>
  );
}

function PrayerTimesContent() {
  const { data } = useSuspenseQuery(prayerTimesQuery);
  const rows = [
    { name: "Sabah", adhan: data.timings.Fajr, iqamah: iqamahFor(data.timings.Fajr, 20) },
    { name: "Izlazak sunca", adhan: data.timings.Sunrise, iqamah: "—" },
    { name: "Podne", adhan: data.timings.Dhuhr, iqamah: iqamahFor(data.timings.Dhuhr, 20) },
    { name: "Ikindija", adhan: data.timings.Asr, iqamah: iqamahFor(data.timings.Asr, 20) },
    { name: "Akšam", adhan: data.timings.Maghrib, iqamah: iqamahFor(data.timings.Maghrib, 5) },
    { name: "Jacija", adhan: data.timings.Isha, iqamah: iqamahFor(data.timings.Isha, 15) },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Vakat namaza · Prizren, Kosovo"
        title="Današnji raspored."
        description={`${data.date.readable} · ${data.date.hijri}`}
      />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-xl border border-border/60">
            <table className="w-full text-left">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 font-display text-lg">Namaz</th>
                  <th className="px-6 py-4 font-display text-lg">Ezan</th>
                  <th className="px-6 py-4 font-display text-lg">Ikamet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {rows.map((p) => (
                  <tr key={p.name} className="hover:bg-secondary/50 transition">
                    <td className="px-6 py-4 font-display text-xl text-primary">{p.name}</td>
                    <td className="px-6 py-4 tabular-nums text-lg">{p.adhan}</td>
                    <td className="px-6 py-4 tabular-nums text-lg font-semibold">{p.iqamah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Vaktovi izračunati za Prizren, Kosovo prema Takvimi izvoru Islamske zajednice Kosova. Vremena ikameta su okvirna.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] mb-4">Svakog petka</p>
          <h2 className="font-display text-4xl mb-8">Džuma-namaz</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {JUMUAH.map((j) => (
              <div key={j.khutbah} className="rounded-xl bg-card border border-border/60 p-6">
                <div className="font-display text-2xl text-primary">{j.khutbah}</div>
                <div className="text-3xl font-semibold mt-2 tabular-nums">{j.time}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground">
            Molimo dođite 10 minuta ranije. Dostupan je dodatni prostor za namaz i parking.
          </p>
        </div>
      </section>
    </>
  );
}
