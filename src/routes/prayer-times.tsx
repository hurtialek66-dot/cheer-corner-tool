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
      { title: "Prayer Times — Prizren, Kosovo | Al-Noor Mosque" },
      { name: "description", content: "Daily adhan and iqamah times for Prizren, Kosovo, plus Jumu'ah schedule at Al-Noor Mosque." },
      { property: "og:title", content: "Prayer Times — Prizren, Kosovo" },
      { property: "og:description", content: "Daily adhan and iqamah times for Prizren, Kosovo." },
      { property: "og:url", content: "/prayer-times" },
    ],
    links: [{ rel: "canonical", href: "/prayer-times" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(prayerTimesQuery),
  component: PrayerTimesPage,
});

const JUMUAH = [
  { khutbah: "1st Khutbah", time: "13:15" },
  { khutbah: "2nd Khutbah", time: "14:15" },
];

function PrayerTimesPage() {
  return (
    <>
      <Suspense fallback={<PageHeader eyebrow="Prayer Times" title="Loading…" description="Prizren, Kosovo" />}>
        <PrayerTimesContent />
      </Suspense>
    </>
  );
}

function PrayerTimesContent() {
  const { data } = useSuspenseQuery(prayerTimesQuery);
  const rows = [
    { name: "Fajr", adhan: data.timings.Fajr, iqamah: iqamahFor(data.timings.Fajr, 20) },
    { name: "Sunrise", adhan: data.timings.Sunrise, iqamah: "—" },
    { name: "Dhuhr", adhan: data.timings.Dhuhr, iqamah: iqamahFor(data.timings.Dhuhr, 20) },
    { name: "Asr", adhan: data.timings.Asr, iqamah: iqamahFor(data.timings.Asr, 20) },
    { name: "Maghrib", adhan: data.timings.Maghrib, iqamah: iqamahFor(data.timings.Maghrib, 5) },
    { name: "Isha", adhan: data.timings.Isha, iqamah: iqamahFor(data.timings.Isha, 15) },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Prayer Times · Prizren, Kosovo"
        title="Today's schedule."
        description={`${data.date.readable} · ${data.date.hijri}`}
      />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-xl border border-border/60">
            <table className="w-full text-left">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 font-display text-lg">Prayer</th>
                  <th className="px-6 py-4 font-display text-lg">Adhan</th>
                  <th className="px-6 py-4 font-display text-lg">Iqamah</th>
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
            Times calculated for Prizren, Kosovo using the Diyanet method. Iqamah times are approximate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] mb-4">Every Friday</p>
          <h2 className="font-display text-4xl mb-8">Jumu'ah Prayer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {JUMUAH.map((j) => (
              <div key={j.khutbah} className="rounded-xl bg-card border border-border/60 p-6">
                <div className="font-display text-2xl text-primary">{j.khutbah}</div>
                <div className="text-3xl font-semibold mt-2 tabular-nums">{j.time}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground">
            Please arrive 10 minutes early. Overflow prayer space and parking are available.
          </p>
        </div>
      </section>
    </>
  );
}
