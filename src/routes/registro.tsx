import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { SimpleForm } from "@/components/Forms";

export const Route = createFileRoute("/registro")({
  head: () => ({
    meta: [
      { title: "Inscripción — Semillero STEM" },
      { name: "description", content: "Solicita tu inscripción en Semillero STEM con autorización familiar." },
      { property: "og:title", content: "Inscripción — Semillero STEM" },
      { property: "og:description", content: "Únete a los itinerarios Exploradores o Creadores." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Registro,
});

function Registro() {
  return (
    <Layout>
      <PageHero kicker="Inscripción" title={<>Empieza a <span className="text-gradient">construir el futuro</span></>}>
        Pedimos solo los datos imprescindibles. Si eres menor, la solicitud la completa tu madre, padre o tutor legal.
      </PageHero>
      <div className="mx-auto max-w-xl px-6">
        <SimpleForm
          fields={[
            { name: "alias", label: "Nombre o alias del participante", required: true, hint: "No necesitamos apellidos." },
            { name: "itinerario", label: "Itinerario", options: ["Exploradores (8–11)", "Creadores (12–18)"], required: true },
            { name: "tutor", label: "Correo de la persona tutora", type: "email", required: true },
            { name: "autoriza", label: "Soy madre, padre o tutor legal y autorizo la participación", type: "checkbox", required: true },
            { name: "priv", label: "He leído la información de privacidad", type: "checkbox", required: true },
          ]}
          submit="Enviar solicitud"
          success="La solicitud quedará pendiente de revisión por la Fundación."
        />
        <p className="mt-4 text-center text-sm"><Link to="/proteccion-menores" className="text-violet underline">Cómo protegemos a los menores</Link></p>
      </div>
    </Layout>
  );
}
