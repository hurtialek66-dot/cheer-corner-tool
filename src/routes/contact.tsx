import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Al-Noor Mosque" },
      { name: "description", content: "Visit Al-Noor Mosque. Address, hours, phone, email, and directions." },
      { property: "og:title", content: "Contact Al-Noor Mosque" },
      { property: "og:description", content: "Address, hours, phone, email, and directions." },
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
        eyebrow="Visit"
        title="Come pray with us."
        description="We're open every day for the five daily prayers. Visitors are always welcome — no appointment needed."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl mb-6">Get in touch</h2>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Address</dt>
                <dd className="mt-2 text-lg">123 Community Way<br />Your City, ST 00000</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Phone</dt>
                <dd className="mt-2 text-lg">(555) 123-4567</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Email</dt>
                <dd className="mt-2 text-lg">info@alnoor-mosque.org</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Hours</dt>
                <dd className="mt-2 text-lg">Open daily, 30 min before Fajr — 30 min after Isha</dd>
              </div>
            </dl>
          </div>

          <form className="rounded-xl border border-border/60 bg-card p-8 space-y-4">
            <h2 className="font-display text-3xl mb-2">Send a message</h2>
            <p className="text-sm text-muted-foreground mb-4">We usually reply within a day, in shā' Allāh.</p>
            <div>
              <label className="block text-sm mb-2">Your name</label>
              <input type="text" className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input type="email" className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea rows={5} className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="button" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
