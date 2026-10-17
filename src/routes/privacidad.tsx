import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Privacidad \u2014 Semillero STEM" },
      { name: "description", content: "Documento preparado para revisi\u00f3n de la Fundaci\u00f3n. No constituye un texto legal definitivo." },
      { property: "og:title", content: "Privacidad \u2014 Semillero STEM" },
      { property: "og:description", content: "Documento preparado para revisi\u00f3n de la Fundaci\u00f3n. No constituye un texto legal definitivo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PagePrivacidad,
});

function PagePrivacidad() {
  return (
    <Layout>
      <PageHero kicker="Privacidad" title={<>Privacidad y cookies</>}>Documento preparado para revisión de la Fundación. No constituye un texto legal definitivo.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Datos que recogemos</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Solo los mínimos necesarios</li><li>✦ Sin datos sensibles en el navegador</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Tus derechos</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Acceso, rectificación y supresión</li><li>✦ Contacto a través de la Fundación</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Cookies</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Solo técnicas necesarias</li><li>✦ Sin publicidad ni seguimiento</li></ul></Card>
        </div>
      </Section>
    </Layout>
  );
}
