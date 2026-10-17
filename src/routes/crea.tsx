import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";

export const Route = createFileRoute("/crea")({
  head: () => ({
    meta: [
      { title: "Creadores \u00b7 12\u201318 a\u00f1os \u2014 Semillero STEM" },
      { name: "description", content: "Proyectos con m\u00e1s autonom\u00eda: programa, entrena modelos de IA, construye prototipos y conoce a profesionales que ya trabajan en STEM." },
      { property: "og:title", content: "Creadores \u00b7 12\u201318 a\u00f1os \u2014 Semillero STEM" },
      { property: "og:description", content: "Proyectos con m\u00e1s autonom\u00eda: programa, entrena modelos de IA, construye prototipos y conoce a profesionales que ya trabajan en STEM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PageCrea,
});

function PageCrea() {
  return (
    <Layout>
      <PageHero kicker="Creadores \u00b7 12\u201318 a\u00f1os" title={<>De una idea a <span className="text-gradient">una solución real</span></>}>Proyectos con más autonomía: programa, entrena modelos de IA, construye prototipos y conoce a profesionales que ya trabajan en STEM.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Áreas</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Programación</li><li>✦ Inteligencia artificial</li><li>✦ Robótica</li><li>✦ Prototipado y diseño</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Experiencias</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Hackatones</li><li>✦ Sesiones con mentores</li><li>✦ Orientación profesional</li><li>✦ Portafolio de proyectos</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Prioridad 12–16</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ La fase inicial se centra en este grupo</li><li>✦ Retos con niveles progresivos</li><li>✦ Trabajo en equipo</li></ul></Card>
        </div>
      </Section>
    </Layout>
  );
}
