import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt i posjeta — Džamija Recane" },
      { name: "description", content: "Posjetite džamiju Recane. Adresa, radno vrijeme, telefon, e-mail i uputstva." },
      { property: "og:title", content: "Kontakt — Džamija Recane" },
      { property: "og:description", content: "Adresa, radno vrijeme, telefon, e-mail i uputstva." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Posjeta"
        title="Dođite klanjati s nama."
        description="Otvoreni smo svakog dana za pet dnevnih namaza. Posjetioci su uvijek dobrodošli — bez najave."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl mb-6">Kontaktirajte nas</h2>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Adresa</dt>
                <dd className="mt-2 text-lg">Ulica Zajednice 123<br />Prizren, Kosovo</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Telefon</dt>
                <dd className="mt-2 text-lg">(555) 123-4567</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">E-mail</dt>
                <dd className="mt-2 text-lg">info@dzamija-recane.org</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Radno vrijeme</dt>
                <dd className="mt-2 text-lg">Otvoreno svaki dan, 30 min prije sabaha — 30 min nakon jacije</dd>
              </div>
            </dl>
          </div>

          <form className="rounded-xl border border-border/60 bg-card p-8 space-y-4">
            <h2 className="font-display text-3xl mb-2">Pošaljite poruku</h2>
            <p className="text-sm text-muted-foreground mb-4">Obično odgovaramo u roku od jednog dana, inšaAllah.</p>
            <div>
              <label className="block text-sm mb-2">Vaše ime</label>
              <input type="text" className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm mb-2">E-mail</label>
              <input type="email" className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm mb-2">Poruka</label>
              <textarea rows={5} className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="button" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">
              Pošalji poruku
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
