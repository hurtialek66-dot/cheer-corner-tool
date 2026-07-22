import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";
import exteriorImg from "@/assets/mosque-exterior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "O nama — Džamija Recane" },
      { name: "description", content: "Naša istorija, misija i zajednica kojoj služimo u džamiji Recane." },
      { property: "og:title", content: "O džamiji Recane" },
      { property: "og:description", content: "Naša istorija, misija i zajednica." },
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
        eyebrow="O nama"
        title="Zajednica izgrađena na vjeri, znanju i milosti."
        description="Džamija Recane osnovana je da bude duhovni dom i mjesto pripadnosti za naše komšije."
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-start">
          <img src={exteriorImg} alt="Vanjski izgled džamije" width={1400} height={900} loading="lazy" className="rounded-xl shadow-[var(--shadow-soft)]" />
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Osnovana prije više od dvije decenije od strane male grupe porodica, džamija Recane
              izrasla je u živu zajednicu koja služi stotinama vjernika svake sedmice.
            </p>
            <p>
              I dalje smo posvećeni vrijednostima koje su oblikovale naše početke: autentičnom
              islamskom učenju, toploj gostoljubivosti i služenju svim ljudima — muslimanima i nemuslimanima.
            </p>
            <p>
              Naš imam i volonteri zajedno rade kako bi džamija bila mjesto dobrodošlice
              za namaz, razmišljanje, obrazovanje i zajedništvo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl mb-12 text-center">Naše vrijednosti</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Vjera", d: "Utemeljeni u Kur'anu i Sunnetu, trudimo se ibadetiti Allahu s iskrenošću." },
              { t: "Znanje", d: "Vjerujemo da je učenje doživotna obaveza i radost. Svi su dobrodošli da uče s nama." },
              { t: "Zajednica", d: "Džamija je dom. Brinemo jedni o drugima, o komšijama i o onima kojima je pomoć potrebna." },
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
