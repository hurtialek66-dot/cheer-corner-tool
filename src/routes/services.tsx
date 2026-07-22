import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Al-Noor Mosque" },
      { name: "description", content: "Marriage services, funeral (janazah) services, new Muslim support, counseling, and zakat at Al-Noor Mosque." },
      { property: "og:title", content: "Services — Al-Noor Mosque" },
      { property: "og:description", content: "Marriage, janazah, new Muslim support, counseling, and zakat." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const SERVICES = [
  { t: "Marriage (Nikah)", d: "Nikah ceremonies performed by our imam. Please contact us at least 30 days in advance." },
  { t: "Janazah Services", d: "Ghusl, kafan, janazah prayer, and burial guidance for families in need." },
  { t: "New Muslim Support", d: "Take your shahada with us. Mentorship, resources, and community for the journey ahead." },
  { t: "Counseling", d: "Confidential faith-based counseling for individuals, couples, and families." },
  { t: "Zakat & Sadaqah", d: "Collection and local distribution of zakat, plus our year-round food pantry." },
  { t: "Interfaith & Tours", d: "Guided mosque tours and interfaith dialogue for schools, groups, and neighbors." },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="How we serve our community."
        description="From the everyday to the milestone, we're here for the moments that matter."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <article key={s.t} className="rounded-xl bg-card border border-border/60 p-8">
              <div className="text-xs font-mono text-[color:var(--gold)] mb-4">0{i + 1}</div>
              <h3 className="font-display text-2xl text-primary mb-3">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
