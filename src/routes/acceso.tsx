import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { SimpleForm } from "@/components/Forms";
import { Ozi } from "@/components/Ozi";

export const Route = createFileRoute("/acceso")({
  head: () => ({
    meta: [
      { title: "Acceso — Semillero STEM" },
      { name: "description", content: "Accede a tu espacio en Semillero STEM." },
      { property: "og:title", content: "Acceso — Semillero STEM" },
      { property: "og:description", content: "Participantes, mentores y equipo de la Fundación." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Acceso,
});

function Acceso() {
  return (
    <Layout>
      <PageHero kicker="Acceso" title={<>Entra en <span className="text-gradient">tu espacio</span></>} />
      <div className="mx-auto grid max-w-4xl items-center gap-8 px-6 md:grid-cols-2">
        <Ozi size={150} message="¡Hola! Me alegra verte de nuevo. Inicia sesión para seguir con tus retos." />
        <div>
          <SimpleForm
            fields={[{ name: "email", label: "Correo electrónico", type: "email", required: true }, { name: "password", label: "Contraseña", type: "password", required: true }]}
            submit="Iniciar sesión"
            success="El acceso real estará disponible en cuanto se active el sistema de cuentas."
          />
          <p className="mt-4 text-center text-sm">¿No tienes cuenta? <Link to="/registro" className="font-semibold text-violet underline">Solicita tu inscripción</Link></p>
        </div>
      </div>
    </Layout>
  );
}
