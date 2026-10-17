import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/programa", l: "Programa" },
  { to: "/explora", l: "Exploradores" },
  { to: "/crea", l: "Creadores" },
  { to: "/retos", l: "Retos" },
  { to: "/mentores", l: "Mentores" },
  { to: "/impacto", l: "Impacto" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 tech-grid" />
      <header className="sticky top-3 z-30 mx-auto mt-3 max-w-6xl px-3">
        <div className="flex items-center justify-between rounded-full px-5 py-2.5 glass">
          <Link to="/" className="font-display text-lg font-bold">
            <span className="text-gradient">Semillero</span> STEM
          </Link>
          <nav className="hidden gap-1 text-sm lg:flex" aria-label="Principal">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-full px-3 py-1.5 hover:bg-background-soft" activeProps={{ className: "bg-background-soft font-semibold text-violet" }}>
                {n.l}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/acceso" className="hidden rounded-full px-4 py-2 text-sm font-medium btn-secondary sm:inline-block">Acceder</Link>
            <Link to="/registro" className="rounded-full px-4 py-2 text-sm font-medium btn-primary">Inscríbete</Link>
            <button className="rounded-full px-3 py-2 lg:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
          </div>
        </div>
        {open && (
          <nav className="mt-2 grid gap-1 rounded-3xl p-3 glass lg:hidden" aria-label="Móvil">
            {[...nav, { to: "/centros", l: "Centros" }, { to: "/colaborar", l: "Colaborar" }, { to: "/acceso", l: "Acceder" }].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-background-soft">{n.l}</Link>
            ))}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="mt-20 bg-background-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold"><span className="text-gradient">Semillero</span> STEM</p>
            <p className="mt-2 text-muted-foreground">Un programa de Fundación Grupo OESIA.</p>
            <a className="mt-2 inline-block font-medium text-violet underline" href="https://fundacion.grupooesia.com/contacto/" target="_blank" rel="noreferrer">Contacto oficial de la Fundación</a>
          </div>
          <FooterCol t="Programa" items={[["/programa", "Presentación"], ["/explora", "Exploradores 8–11"], ["/crea", "Creadores 12–18"], ["/retos", "Retos"]]} />
          <FooterCol t="Participa" items={[["/mentores", "Mentores"], ["/centros", "Centros educativos"], ["/colaborar", "Empresas"], ["/impacto", "Impacto"]]} />
          <FooterCol t="Legal" items={[["/privacidad", "Privacidad y cookies"], ["/proteccion-menores", "Protección de menores"]]} />
        </div>
        <p className="pb-8 text-center text-xs text-muted-foreground">© 2026 Fundación Grupo OESIA · Textos legales pendientes de revisión por la Fundación.</p>
      </footer>
    </div>
  );
}

function FooterCol({ t, items }: { t: string; items: [string, string][] }) {
  return (
    <div>
      <p className="font-semibold">{t}</p>
      <ul className="mt-2 space-y-1.5 text-muted-foreground">
        {items.map(([to, l]) => (
          <li key={to}><Link to={to} className="hover:text-violet">{l}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export function PageHero({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-10 pt-20 text-center">
      <p className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet glass">{kicker}</p>
      <h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
      {children && <div className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl p-7 glass transition-transform hover:-translate-y-1 ${className}`}>{children}</div>;
}

export function DemoBadge({ children = "Ejemplo ficticio" }: { children?: ReactNode }) {
  return <span className="inline-block rounded-full bg-background-soft px-2.5 py-0.5 text-xs font-semibold text-violet">◇ {children}</span>;
}

export function Section({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
