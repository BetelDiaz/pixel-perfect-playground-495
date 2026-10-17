import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Semillero STEM — Fundación Grupo OESIA" },
      { name: "description", content: "Descubre la ciencia, la tecnología, la ingeniería y las matemáticas. Retos, mentoras y mentores para jóvenes de 8 a 18 años." },
      { property: "og:title", content: "Semillero STEM — Fundación Grupo OESIA" },
      { property: "og:description", content: "El futuro tecnológico pertenece a todas las personas. Únete al Semillero STEM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const areas = [
  { l: "Ciencia", d: "Experimenta, observa y formula tus propias preguntas.", c: "bg-primary" },
  { l: "Tecnología", d: "Programa, crea con IA y construye robots.", c: "bg-coral" },
  { l: "Ingeniería", d: "Diseña soluciones reales para retos reales.", c: "bg-mint" },
  { l: "Matemáticas", d: "Descubre los patrones que mueven el mundo.", c: "bg-sun" },
];

const espacios = [
  { t: "Participantes", d: "Tu laboratorio personal: retos, insignias y progreso." },
  { t: "Mentoras y mentores", d: "Profesionales STEM que acompañan y inspiran." },
  { t: "Familias y centros", d: "Seguimiento seguro y respetuoso con la privacidad." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-4 z-20 mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-6 py-3 glass">
        <span className="font-display text-lg font-bold"><span className="text-gradient">Semillero</span> STEM</span>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#areas">Áreas</a><a href="#espacios">Espacios</a><a href="#unete">Únete</a>
        </nav>
        <a href="#unete" className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-primary-foreground">Inscríbete</a>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-medium uppercase tracking-widest glass">Fundación Grupo OESIA · 8–18 años</p>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Imagina, crea y <span className="text-gradient">lidera el futuro</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Un laboratorio digital donde niñas, niños y jóvenes descubren su vocación STEM junto a referentes reales.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#unete" className="rounded-full bg-brand px-7 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)]">Empieza tu aventura</a>
              <a href="#areas" className="rounded-full px-7 py-3 font-medium glass">Explorar</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-brand opacity-30 blur-3xl" />
            <img src={hero} width={1536} height={1024} alt="Jóvenes experimentando con robots y hologramas" className="relative rounded-[2rem] border-4 border-card float" />
          </div>
        </section>

        <section id="areas" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">Cuatro mundos por explorar</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <div key={a.l} className="rounded-3xl p-6 glass transition-transform hover:-translate-y-2">
                <div className={`mb-5 h-12 w-12 rounded-2xl ${a.c}`} />
                <h3 className="text-xl font-bold">{a.l}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="espacios" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">Un espacio para cada persona</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {espacios.map((e, i) => (
              <div key={e.t} className="rounded-3xl p-8 glass">
                <span className="font-display text-5xl font-bold text-gradient">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{e.t}</h3>
                <p className="mt-2 text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="unete" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-[2.5rem] bg-brand p-12 text-center text-primary-foreground">
            <h2 className="text-4xl font-bold">La innovación también es tuya</h2>
            <p className="mx-auto mt-4 max-w-lg opacity-90">Las inscripciones abrirán muy pronto. Prepárate para tu primer reto.</p>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-muted-foreground">© 2026 Fundación Grupo OESIA · Semillero STEM</footer>
    </div>
  );
}
