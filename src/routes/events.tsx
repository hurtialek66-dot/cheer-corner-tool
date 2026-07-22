import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Događaji — Džamija Al-Nur" },
      { name: "description", content: "Predstojeći događaji, predavanja, iftari, bajramski namazi i programi zajednice u džamiji Al-Nur." },
      { property: "og:title", content: "Događaji u džamiji Al-Nur" },
      { property: "og:description", content: "Predavanja, iftari, bajramski namazi i programi zajednice." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

const EVENTS = [
  {
    date: "Pet, 14. mart",
    time: "Nakon akšama",
    title: "Zajednički iftar",
    body: "Iftarite s zajednicom. Besplatan obrok za sve — molimo prijavite se kako bismo planirali.",
    tag: "Ramazan",
  },
  {
    date: "Sub, 22. mart",
    time: "10:00",
    title: "Omladinska halka",
    body: "Sedmično okupljanje za uzrast 12–18. Učenje Kur'ana, razgovor i osvježenje.",
    tag: "Mladi",
  },
  {
    date: "Ned, 30. mart",
    time: "08:00",
    title: "Bajram-namaz (Ramazanski bajram)",
    body: "Dva bajram-namaza sa dodatnim prostorom. Porodični doručak nakon namaza u sali zajednice.",
    tag: "Bajram",
  },
  {
    date: "Sri, 3. april",
    time: "19:30",
    title: "Predavanje: Poslanikov ahlak",
    body: "Gost predavač šejh Ahmed o njegovanju ahlaka Poslanika ﷺ u svakodnevnom životu.",
    tag: "Predavanje",
  },
  {
    date: "Sub, 13. april",
    time: "11:00",
    title: "Dobrodošlica novim muslimanima",
    body: "Neformalno okupljanje za nove muslimane i one koji istražuju islam. Osvježenje obezbijeđeno.",
    tag: "Zajednica",
  },
  {
    date: "Svake nedjelje",
    time: "10:00",
    title: "Vikend mekteb",
    body: "Kur'an, arapski jezik i islamske nauke za djecu uzrasta 5–14. Upisi otvoreni tokom godine.",
    tag: "Redovno",
  },
];

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Događaji"
        title="Šta se dešava u našoj džamiji."
        description="Od sedmičnih halki do bajram-namaza, uvijek se nešto dešava. Svi su dobrodošli."
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
