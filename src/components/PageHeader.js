import Image from "next/image";
import Link from "next/link";
import { ruta } from "@/data/content";

// Encabezado de página interna: banda oscura con las ondas de marca.
export default function PageHeader({ lang, ui, title, subtitle, crumbs = [] }) {
  return (
    <section className="relative isolate overflow-hidden bg-petroleo text-white">
      <Image src="/marca/ondas.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover object-right opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-petroleo via-petroleo/85 to-petroleo/20" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <nav aria-label={ui.ruta} className="text-sm text-grisaceo/80">
          <Link href={ruta(lang)} className="hover:text-white">
            {ui.inicio}
          </Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="mx-2 text-grisaceo/40">/</span>
              {c.href ? (
                <Link href={ruta(lang, c.href)} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-grisaceo">{subtitle}</p>}
      </div>
    </section>
  );
}
