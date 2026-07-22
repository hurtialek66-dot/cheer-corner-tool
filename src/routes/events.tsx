import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Al-Noor Mosque" },
      { name: "description", content: "Upcoming events, lectures, iftars, Eid prayers, and community programs at Al-Noor Mosque." },
      { property: "og:title", content: "Events at Al-Noor Mosque" },
      { property: "og:description", content: "Lectures, iftars, Eid prayers, and community programs." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

const EVENTS = [
  {
    date: "Fri, Mar 14",
    time: "After Maghrib",
    title: "Community Iftar",
    body: "Break your fast with the community. Complimentary meal for all — please RSVP so we can plan.",
    tag: "Ramadan",
  },
  {
    date: "Sat, Mar 22",
    time: "10:00 AM",
    title: "Youth Halaqah",
    body: "Weekly gathering for ages 12–18. Quran study, discussion, and refreshments.",
    tag: "Youth",
  },
  {
    date: "Sun, Mar 30",
    time: "8:00 AM",
    title: "Eid al-Fitr Prayer",
    body: "Two Eid prayers with overflow space. Family breakfast to follow in the community hall.",
    tag: "Eid",
  },
  {
    date: "Wed, Apr 3",
    time: "7:30 PM",
    title: "Lecture: The Prophetic Character",
    body: "Guest speaker Sheikh Ahmed on cultivating the character of the Prophet ﷺ in daily life.",
    tag: "Lecture",
  },
  {
    date: "Sat, Apr 13",
    time: "11:00 AM",
    title: "New Muslim Welcome",
    body: "An informal meet-up for new Muslims and those exploring Islam. Refreshments provided.",
    tag: "Community",
  },
  {
    date: "Every Sun",
    time: "10:00 AM",
    title: "Weekend Quran School",
    body: "Quran, Arabic, and Islamic studies for children ages 5–14. Registration open year-round.",
    tag: "Recurring",
  },
];

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="What's happening at the masjid."
        description="From weekly halaqahs to Eid prayers, there's always something bringing us together. All are welcome."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
          {EVENTS.map((e) => (
            <article key={e.title} className="group rounded-xl border border-border/60 bg-card p-7 hover:shadow-[var(--shadow-soft)] transition">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-sm text-primary font-medium">{e.date}</div>
                  <div className="text-xs text-muted-foreground mt-1">{e.time}</div>
                </div>
                <span className="text-xs uppercase tracking-widest text-[color:var(--gold)] border border-[var(--gold)]/40 rounded-full px-3 py-1">
                  {e.tag}
                </span>
              </div>
              <h3 className="font-display text-2xl mb-2">{e.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{e.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
