import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero, Card, DemoBadge, Section } from "@/components/Layout";
import { retos } from "@/lib/data";

export const Route = createFileRoute("/retos")({
  head: () => ({
    meta: [
      { title: "Retos — Semillero STEM" },
      { name: "description", content: "Retos y actividades de muestra de Semillero STEM por área, edad y dificultad." },
      { property: "og:title", content: "Retos — Semillero STEM" },
      { property: "og:description", content: "Descubre retos STEM de ejemplo para 8 a 18 años." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Retos,
});

const areas = ["Todas", "Ciencia", "Tecnología", "Ingeniería", "Matemáticas"];

function Retos() {
  const [area, setArea] = useState("Todas");
  const list = retos.filter((r) => area === "Todas" || r.area === area);
  return (
    <Layout>
      <PageHero kicker="Retos" title={<>Elige tu <span className="text-gradient">próximo reto</span></>}>
        Actividades de muestra para conocer cómo se aprende en Semillero STEM. Todas son ejemplos ficticios.
      </PageHero>
      <Section title="Catálogo de ejemplo">
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar por área">
          {areas.map((a) => (
            <button key={a} aria-pressed={area === a} onClick={() => setArea(a)} className={`rounded-full px-4 py-2 text-sm font-semibold ${area === a ? "btn-primary" : "btn-secondary"}`}>{a}</button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {list.map((r) => (
            <Card key={r.t}>
              <div className="flex items-center justify-between"><DemoBadge /><span className="text-sm font-semibold text-magenta">{r.area}</span></div>
              <h3 className="mt-3 text-2xl font-bold">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Dificultad {r.dif} · {r.edad} · {r.dur}</p>
              <div className="mt-3 flex flex-wrap gap-1">{r.hab.map((h) => <span key={h} className="rounded-full bg-background-soft px-2 py-0.5 text-xs text-violet">{h}</span>)}</div>
            </Card>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
