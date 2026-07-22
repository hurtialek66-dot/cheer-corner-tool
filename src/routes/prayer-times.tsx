import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/prayer-times")({
  head: () => ({
    meta: [
      { title: "Prayer Times — Al-Noor Mosque" },
      { name: "description", content: "Daily adhan and iqamah times, Jumu'ah schedule, and monthly calendar at Al-Noor Mosque." },
      { property: "og:title", content: "Prayer Times — Al-Noor Mosque" },
      { property: "og:description", content: "Daily adhan and iqamah times, Jumu'ah, and calendar." },
      { property: "og:url", content: "/prayer-times" },
    ],
    links: [{ rel: "canonical", href: "/prayer-times" }],
  }),
  component: PrayerTimes,
});

const PRAYERS = [
  { name: "Fajr", adhan: "5:12 AM", iqamah: "5:32 AM" },
  { name: "Sunrise", adhan: "6:45 AM", iqamah: "—" },
  { name: "Dhuhr", adhan: "1:05 PM", iqamah: "1:25 PM" },
  { name: "Asr", adhan: "4:40 PM", iqamah: "5:00 PM" },
  { name: "Maghrib", adhan: "7:18 PM", iqamah: "7:23 PM" },
  { name: "Isha", adhan: "8:45 PM", iqamah: "9:00 PM" },
];

const JUMUAH = [
  { khutbah: "1st Khutbah", time: "1:15 PM" },
  { khutbah: "2nd Khutbah", time: "2:15 PM" },
];

function PrayerTimes() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  return (
    <>
      <PageHeader eyebrow="Prayer Times" title="Today's schedule." description={today} />
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
                {PRAYERS.map((p) => (
                  <tr key={p.name} className="hover:bg-secondary/50 transition">
                    <td className="px-6 py-4 font-display text-xl text-primary">{p.name}</td>
                    <td className="px-6 py-4 tabular-nums text-lg">{p.adhan}</td>
                    <td className="px-6 py-4 tabular-nums text-lg font-semibold">{p.iqamah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
