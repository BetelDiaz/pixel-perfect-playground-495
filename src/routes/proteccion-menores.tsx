import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";

export const Route = createFileRoute("/proteccion-menores")({
  head: () => ({
    meta: [
      { title: "Protecci\u00f3n de menores \u2014 Semillero STEM" },
      { name: "description", content: "Medidas de dise\u00f1o pensadas para proteger a ni\u00f1os, ni\u00f1as y adolescentes. Pendiente de validaci\u00f3n profesional." },
      { property: "og:title", content: "Protecci\u00f3n de menores \u2014 Semillero STEM" },
      { property: "og:description", content: "Medidas de dise\u00f1o pensadas para proteger a ni\u00f1os, ni\u00f1as y adolescentes. Pendiente de validaci\u00f3n profesional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PageProteccionMenores,
});

function PageProteccionMenores() {
  return (
    <Layout>
      <PageHero kicker="Protecci\u00f3n de menores" title={<>Un espacio <span className="text-gradient">seguro</span></>}>Medidas de diseño pensadas para proteger a niños, niñas y adolescentes. Pendiente de validación profesional.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Por diseño</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Sin mensajería privada abierta</li><li>✦ Sin perfiles públicos por defecto</li><li>✦ Sin publicación automática de fotos</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Control</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Autorizaciones familiares</li><li>✦ Revisión de contenidos</li><li>✦ Permisos por rol</li></ul></Card>
          <Card><h3 className="text-xl font-bold">OZI</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Mensajes revisados previamente</li><li>✦ No es un chat abierto</li></ul></Card>
        </div>
      </Section>
    </Layout>
  );
}
