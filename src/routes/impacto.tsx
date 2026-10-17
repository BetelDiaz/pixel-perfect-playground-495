import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";

export const Route = createFileRoute("/impacto")({
  head: () => ({
    meta: [
      { title: "Impacto \u2014 Semillero STEM" },
      { name: "description", content: "Los indicadores se publicar\u00e1n cuando existan datos verificados del piloto y una metodolog\u00eda de evaluaci\u00f3n adecuada." },
      { property: "og:title", content: "Impacto \u2014 Semillero STEM" },
      { property: "og:description", content: "Los indicadores se publicar\u00e1n cuando existan datos verificados del piloto y una metodolog\u00eda de evaluaci\u00f3n adecuada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PageImpacto,
});

function PageImpacto() {
  return (
    <Layout>
      <PageHero kicker="Impacto" title={<>Medimos lo que <span className="text-gradient">importa</span></>}>Los indicadores se publicarán cuando existan datos verificados del piloto y una metodología de evaluación adecuada.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Participación</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Participantes registrados y activos</li><li>✦ Retos completados</li><li>✦ Asistencia a talleres</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Impacto educativo</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Interés por STEM</li><li>✦ Confianza percibida</li><li>✦ Participación de niñas y niños</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Estado</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Indicador por medir</li><li>✦ Datos del piloto pendientes</li></ul></Card>
        </div>
      </Section>
    </Layout>
  );
}
