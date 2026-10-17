import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";

export const Route = createFileRoute("/explora")({
  head: () => ({
    meta: [
      { title: "Exploradores \u00b7 8\u201311 a\u00f1os \u2014 Semillero STEM" },
      { name: "description", content: "Retos cortos, visuales y manipulativos para descubrir c\u00f3mo funciona el mundo, acompa\u00f1ados siempre por OZI." },
      { property: "og:title", content: "Exploradores \u00b7 8\u201311 a\u00f1os \u2014 Semillero STEM" },
      { property: "og:description", content: "Retos cortos, visuales y manipulativos para descubrir c\u00f3mo funciona el mundo, acompa\u00f1ados siempre por OZI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PageExplora,
});

function PageExplora() {
  return (
    <Layout>
      <PageHero kicker="Exploradores \u00b7 8\u201311 a\u00f1os" title={<>La curiosidad es <span className="text-gradient">el primer paso</span></>}>Retos cortos, visuales y manipulativos para descubrir cómo funciona el mundo, acompañados siempre por OZI.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Lo que harás</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Juegos de lógica</li><li>✦ Experimentos sencillos en casa o en clase</li><li>✦ Pensamiento computacional sin pantallas y con ellas</li><li>✦ Retos creativos</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Cómo avanzas</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Insignias por explorar, crear y colaborar</li><li>✦ Pistas de OZI cuando te atasques</li><li>✦ Sin prisas ni competiciones</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Para familias</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Datos mínimos</li><li>✦ Autorización de madre, padre o tutor</li><li>✦ Sin perfiles públicos</li></ul></Card>
        </div>
      </Section>
    </Layout>
  );
}
