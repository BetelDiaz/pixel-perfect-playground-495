import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Card, Section } from "@/components/Layout";
import { SimpleForm } from "@/components/Forms";

export const Route = createFileRoute("/mentores")({
  head: () => ({
    meta: [
      { title: "Mentores \u2014 Semillero STEM" },
      { name: "description", content: "Si trabajas en ciencia, tecnolog\u00eda, ingenier\u00eda o matem\u00e1ticas, puedes acompa\u00f1ar talleres y mostrar caminos reales." },
      { property: "og:title", content: "Mentores \u2014 Semillero STEM" },
      { property: "og:description", content: "Si trabajas en ciencia, tecnolog\u00eda, ingenier\u00eda o matem\u00e1ticas, puedes acompa\u00f1ar talleres y mostrar caminos reales." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PageMentores,
});

function PageMentores() {
  return (
    <Layout>
      <PageHero kicker="Mentores" title={<>Inspira a <span className="text-gradient">la próxima generación</span></>}>Si trabajas en ciencia, tecnología, ingeniería o matemáticas, puedes acompañar talleres y mostrar caminos reales.</PageHero>
      <Section title="Lo esencial">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h3 className="text-xl font-bold">Qué harás</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Preparar y dinamizar actividades</li><li>✦ Compartir tu trayectoria</li><li>✦ Acompañar proyectos de forma autorizada</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Formación incluida</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Comunicación con menores</li><li>✦ Facilitación inclusiva</li><li>✦ Protección de menores</li></ul></Card>
          <Card><h3 className="text-xl font-bold">Recursos</h3><ul className="mt-3 space-y-2 text-muted-foreground"><li>✦ Guías para talleres</li><li>✦ Materiales educativos</li><li>✦ Seguimiento autorizado</li></ul></Card>
        </div>
      </Section>
      <Section title="Solicitud"><div className="max-w-xl"><SimpleForm fields={[{name:"nombre",label:"Nombre y apellidos",required:true},{name:"email",label:"Correo profesional",type:"email",required:true},{name:"area",label:"Área STEM",options:["Ciencia","Tecnología","Ingeniería","Matemáticas"],required:true},{name:"ok",label:"Acepto la formación en protección de menores",type:"checkbox",required:true}]} submit="Enviar candidatura" success="Tu candidatura queda pendiente de revisión por la Fundación." /></div></Section>
    </Layout>
  );
}
