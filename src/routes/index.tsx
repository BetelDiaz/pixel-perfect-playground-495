import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, Card, DemoBadge, Section } from "@/components/Layout";
import { Ozi } from "@/components/Ozi";
import ozi from "@/assets/ozi.png";
import { retos, pasos, indicadores } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Semillero STEM — El futuro no se espera. Se construye." },
      { name: "description", content: "Programa STEM de Fundación Grupo OESIA para niños, niñas y jóvenes de 8 a 18 años." },
      { property: "og:title", content: "Semillero STEM — Fundación Grupo OESIA" },
      { property: "og:description", content: "Descubre la tecnología, desarrolla tus ideas y construye el futuro que imaginas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const dotColors = ["bg-coral", "bg-magenta", "bg-violet", "bg-turquoise", "bg-coral"];

function Index() {
  return (
    <Layout>
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-5 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet glass">Fundación Grupo OESIA · 8–18 años</p>
          <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
            El futuro no se espera. <span className="text-gradient">Se construye.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            En Semillero STEM, niños, niñas y jóvenes descubren la tecnología, desarrollan sus ideas y empiezan a construir el futuro que imaginan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/programa" className="rounded-full px-6 py-3 font-semibold btn-primary">Explorar el programa</Link>
            <Link to="/acceso" className="rounded-full px-6 py-3 font-semibold btn-secondary">Entrar en mi espacio</Link>
            <Link to="/colaborar" className="rounded-full px-6 py-3 font-semibold text-violet underline-offset-4 hover:underline">Quiero colaborar →</Link>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div aria-hidden className="absolute inset-8 rounded-full bg-brand opacity-25 blur-3xl" />
          <div aria-hidden className="absolute inset-4 animate-[spin_40s_linear_infinite] rounded-full border-2 border-dashed border-violet/25" />
          <div aria-hidden className="absolute inset-16 rounded-full border border-coral/40" />
          {[["top-6 left-10", "bg-turquoise"], ["top-1/3 right-2", "bg-coral"], ["bottom-10 left-4", "bg-violet"], ["bottom-4 right-16", "bg-magenta"]].map(([p, c]) => (
            <span key={p} aria-hidden className={`absolute ${p} h-3 w-3 rounded-full ${c} shadow-[0_0_18px_currentColor] float`} />
          ))}
          <img src={ozi} width={1024} height={1024} alt="OZI, el robot guía de Semillero STEM, saludando" className="relative w-full max-w-md float drop-shadow-2xl" />
        </div>
      </section>

      <Section title="Descubre tu camino">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-iri">
            <p className="text-sm font-bold text-coral">EXPLORADORES · 8–11 AÑOS</p>
            <h3 className="mt-2 text-3xl font-bold">La curiosidad es el primer paso.</h3>
            <p className="mt-3 text-muted-foreground">Experiencias para descubrir la ciencia, experimentar y comprender la tecnología mediante desafíos prácticos.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">{["Juegos de lógica", "Experimentos", "Pensamiento computacional", "Creatividad", "Insignias"].map((t) => <span key={t} className="rounded-full bg-background-soft px-3 py-1">{t}</span>)}</div>
            <Link to="/explora" className="mt-6 inline-block font-semibold text-magenta">Ver itinerario →</Link>
          </Card>
          <Card className="bg-brand text-primary-foreground">
            <p className="text-sm font-bold opacity-90">CREADORES · 12–18 AÑOS · GRUPO PRIORITARIO 12–16</p>
            <h3 className="mt-2 text-3xl font-bold">De una idea a una solución real.</h3>
            <p className="mt-3 opacity-90">Experiencias para desarrollar habilidades tecnológicas, conocer referentes profesionales y convertir ideas en proyectos.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">{["Programación", "IA", "Robótica", "Prototipos", "Hackatones", "Orientación profesional"].map((t) => <span key={t} className="rounded-full bg-primary-foreground/20 px-3 py-1">{t}</span>)}</div>
            <Link to="/crea" className="mt-6 inline-block font-semibold underline">Ver itinerario →</Link>
          </Card>
        </div>
      </Section>

      <Section title="Así se aprende">
        <ol className="relative grid gap-6 md:grid-cols-5">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-1 rounded-full bg-brand md:block" />
          {pasos.map((p, i) => (
            <li key={p} className="relative text-center">
              <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full font-bold text-primary-foreground ring-4 ring-background ${dotColors[i]} ${i === 3 ? "text-foreground" : ""}`}>{i + 1}</span>
              <p className="mt-3 font-display text-xl font-bold">{p}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Tecnología con propósito">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["Pensamiento crítico", "Creatividad", "Colaboración", "Confianza", "Igualdad de oportunidades"].map((v) => (
            <Card key={v}><p className="font-display text-lg font-bold">{v}</p></Card>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">Las niñas y jóvenes tienen un lugar protagonista en STEM. Y la tecnología es de todas las personas: aquí cada joven encuentra su espacio.</p>
      </Section>

      <Section title="Retos">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {retos.map((r) => (
            <Card key={r.t}>
              <DemoBadge />
              <h3 className="mt-3 text-lg font-bold">{r.t}</h3>
              <dl className="mt-3 space-y-1 text-sm text-muted-foreground">
                <div>Dificultad: <b className="text-foreground">{r.dif}</b></div>
                <div>Edad: <b className="text-foreground">{r.edad}</b></div>
                <div>Duración: <b className="text-foreground">{r.dur}</b></div>
              </dl>
              <div className="mt-3 flex flex-wrap gap-1">{r.hab.map((h) => <span key={h} className="rounded-full bg-background-soft px-2 py-0.5 text-xs text-violet">{h}</span>)}</div>
            </Card>
          ))}
        </div>
        <Link to="/retos" className="mt-6 inline-block font-semibold text-magenta">Ver todos los retos →</Link>
      </Section>

      <Section title="Personas que inspiran">
        <Card className="flex flex-col items-center gap-6 md:flex-row">
          <Ozi size={110} />
          <div>
            <p className="text-lg">Profesionales STEM voluntarios comparten su experiencia, guían talleres y muestran caminos reales hacia la ciencia y la tecnología.</p>
            <p className="mt-2 text-sm text-muted-foreground">Los perfiles de referentes se publicarán cuando estén confirmados.</p>
            <Link to="/mentores" className="mt-4 inline-block rounded-full px-5 py-2 font-semibold btn-secondary">Quiero ser mentor/a</Link>
          </div>
        </Card>
      </Section>

      <Section title="Impacto">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {indicadores.map((i) => (
            <Card key={i}>
              <p className="font-display text-4xl font-bold text-gradient">—</p>
              <p className="mt-2 font-semibold">{i}</p>
              <p className="mt-1 text-xs text-muted-foreground">Indicador por medir · Datos del piloto pendientes</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand p-12 text-center text-primary-foreground">
          <h2 className="text-4xl font-bold md:text-5xl">Tu próxima gran idea puede empezar aquí.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/programa" className="rounded-full bg-popover px-6 py-3 font-semibold text-violet">Descubre los itinerarios</Link>
            <Link to="/acceso" className="rounded-full border-2 border-primary-foreground px-6 py-3 font-semibold">Accede a tu espacio</Link>
            <Link to="/colaborar" className="rounded-full border-2 border-primary-foreground px-6 py-3 font-semibold">Colabora con el programa</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
