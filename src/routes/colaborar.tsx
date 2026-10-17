import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";
import { SimpleForm } from "@/components/Forms";

export const Route = createFileRoute("/colaborar")({
  head: () => ({
    meta: [
      { title: "Empresas y colaboradores \u2014 Semillero STEM" },
      { name: "description", content: "Empresas y entidades pueden apoyar el programa con talento voluntario, recursos o espacios." },
      { property: "og:title", content: "Empresas y colaboradores \u2014 Semillero STEM" },
      { property: "og:description", content: "Empresas y entidades pueden apoyar el programa con talento voluntario, recursos o espacios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PageColaborar,
});

function PageColaborar() {
  return (
    <Layout>
      <PageHero kicker="Empresas y colaboradores" title={<>Construyamos <span className="text-gradient">el futuro juntos</span></>}>Empresas y entidades pueden apoyar el programa con talento voluntario, recursos o espacios.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Formas de colaborar</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Voluntariado profesional</li><li>✦ Recursos y materiales</li><li>✦ Espacios para eventos</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Proceso</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Envía tu propuesta</li><li>✦ La Fundación la revisa</li><li>✦ Acordamos el formato</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Transparencia</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Solo se publican colaboraciones confirmadas</li></ul></Card>
        </div>
      </Section>
      <Section title="Solicitud"><div className="max-w-xl"><SimpleForm fields={[{name:"entidad",label:"Empresa o entidad",required:true},{name:"contacto",label:"Persona de contacto",required:true},{name:"email",label:"Correo profesional",type:"email",required:true},{name:"tipo",label:"Tipo de colaboración",options:["Voluntariado","Recursos","Espacios","Otra"]}]} submit="Enviar propuesta" success="Tu propuesta queda pendiente de revisión." /></div></Section>
    </Layout>
  );
}
