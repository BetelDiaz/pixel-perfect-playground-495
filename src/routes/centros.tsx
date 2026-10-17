import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";
import { SimpleForm } from "@/components/Forms";

export const Route = createFileRoute("/centros")({
  head: () => ({
    meta: [
      { title: "Centros educativos \u2014 Semillero STEM" },
      { name: "description", content: "Colegios, institutos y entidades educativas pueden incorporar los itinerarios a su actividad." },
      { property: "og:title", content: "Centros educativos \u2014 Semillero STEM" },
      { property: "og:description", content: "Colegios, institutos y entidades educativas pueden incorporar los itinerarios a su actividad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PageCentros,
});

function PageCentros() {
  return (
    <Layout>
      <PageHero kicker="Centros educativos" title={<>Lleva Semillero STEM <span className="text-gradient">a tu centro</span></>}>Colegios, institutos y entidades educativas pueden incorporar los itinerarios a su actividad.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Edades y actividades</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Exploradores 8–11 y Creadores 12–18</li><li>✦ Retos adaptables al aula</li><li>✦ Talleres con mentores</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Compromisos</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Persona coordinadora en el centro</li><li>✦ Gestión de autorizaciones</li><li>✦ Participación en la evaluación</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Incorporación</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Solicitud</li><li>✦ Revisión por la Fundación</li><li>✦ Reunión de arranque</li></ul></Card>
        </div>
      </Section>
      <Section title="Solicitud"><div className="max-w-xl"><SimpleForm fields={[{name:"centro",label:"Nombre del centro",required:true},{name:"contacto",label:"Persona de contacto",required:true},{name:"email",label:"Correo profesional",type:"email",required:true},{name:"edades",label:"Edades del alumnado",options:["8–11","12–16","16–18","Varias"]}]} submit="Solicitar incorporación" success="La solicitud queda pendiente de revisión." /></div></Section>
    </Layout>
  );
}
