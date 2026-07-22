import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";
import exteriorImg from "@/assets/mosque-exterior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Al-Noor Mosque" },
      { name: "description", content: "Our history, mission, and the community we serve at Al-Noor Mosque." },
      { property: "og:title", content: "About Al-Noor Mosque" },
      { property: "og:description", content: "Our history, mission, and community." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A community built on faith, learning, and mercy."
        description="Al-Noor Mosque was founded to serve as a spiritual home and a place of belonging for our neighbors."
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-start">
          <img src={exteriorImg} alt="Mosque exterior" width={1400} height={900} loading="lazy" className="rounded-xl shadow-[var(--shadow-soft)]" />
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Established over two decades ago by a small group of families, Al-Noor Mosque
              has grown into a vibrant community serving hundreds of worshippers each week.
            </p>
            <p>
              We remain committed to the values that shaped our beginnings: authentic Islamic
              teaching, warm hospitality, and service to all people — Muslim and non-Muslim alike.
            </p>
            <p>
              Our imam and volunteers work together to make the mosque a welcoming space
              for prayer, reflection, education, and community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl mb-12 text-center">Our values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Faith", d: "Grounded in the Quran and Sunnah, we strive to worship Allah with sincerity." },
              { t: "Knowledge", d: "We believe learning is a lifelong obligation and a joy. All are welcome to study with us." },
              { t: "Community", d: "The mosque is a home. We care for one another, our neighbors, and those in need." },
            ].map((v) => (
              <div key={v.t} className="text-center">
                <h3 className="font-display text-2xl text-primary mb-3">{v.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
