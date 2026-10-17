import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";

export const Route = createFileRoute("/programa")({
  head: () => ({
    meta: [
      { title: "Programa \u2014 Semillero STEM" },
      { name: "description", content: "Un programa de Fundaci\u00f3n Grupo OESIA para despertar el inter\u00e9s por la ciencia, la tecnolog\u00eda, la ingenier\u00eda y las matem\u00e1ticas entre los 8 y los 18 a\u00f1os." },
      { property: "og:title", content: "Programa \u2014 Semillero STEM" },
      { property: "og:description", content: "Un programa de Fundaci\u00f3n Grupo OESIA para despertar el inter\u00e9s por la ciencia, la tecnolog\u00eda, la ingenier\u00eda y las matem\u00e1ticas entre los 8 y los 18 a\u00f1os." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PagePrograma,
});

function PagePrograma() {
  return (
    <Layout>
      <PageHero kicker="Programa" title={<>Semillero STEM: <span className="text-gradient">tecnología para todas las personas</span></>}>Un programa de Fundación Grupo OESIA para despertar el interés por la ciencia, la tecnología, la ingeniería y las matemáticas entre los 8 y los 18 años.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Objetivos</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Despertar la curiosidad científica</li><li>✦ Desarrollar habilidades prácticas</li><li>✦ Conectar con referentes profesionales</li><li>✦ Ayudar a descubrir vocaciones</li><li>✦ Reducir la brecha de género en STEM</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Dos itinerarios</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Exploradores (8–11): descubrir y experimentar</li><li>✦ Creadores (12–18): crear soluciones reales</li><li>✦ Fase inicial centrada en 12–16 años</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Cómo funciona</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Retos guiados por OZI</li><li>✦ Talleres con mentores voluntarios</li><li>✦ Proyectos e insignias</li><li>✦ Seguimiento seguro con autorización familiar</li></ul></Card>
        </div>
      </Section>
    </Layout>
  );
}
