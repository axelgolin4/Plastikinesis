import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import ContactActions from "@/components/ContactActions";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { getContent, locales } from "@/data/content";

export function generateStaticParams() {
  return locales.flatMap((lang) => getContent(lang).servicios.map((s) => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const servicio = getContent(lang).servicios.find((s) => s.slug === slug);
  return { title: servicio?.titulo, description: servicio?.resumen };
}

export default async function ServicioPage({ params }) {
  const { lang, slug } = await params;
  const c = getContent(lang);
  const servicio = c.servicios.find((s) => s.slug === slug);
  if (!servicio) notFound();

  const d = c.servicioDetalle;
  const otros = c.servicios.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        lang={lang}
        ui={c.ui}
        title={servicio.titulo}
        subtitle={servicio.resumen}
        crumbs={[{ label: c.ui.servicios, href: "/servicios" }, { label: servicio.titulo }]}
      />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="max-w-[65ch] text-lg leading-relaxed text-texto">{servicio.descripcion}</p>
          <h2 className="mt-12 font-display text-2xl font-bold text-texto">{d.incluye}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {servicio.incluye.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-2xl bg-superficie p-4 text-texto">
                <CheckCircle2 size={20} className="shrink-0 text-rojo" /> {item}
              </li>
            ))}
          </ul>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image src={servicio.foto} alt={servicio.titulo} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
        </div>

        <aside className="rounded-3xl bg-petroleo p-7 text-white ring-1 ring-white/10 lg:sticky lg:top-28 lg:col-span-5">
          <h2 className="font-display text-2xl font-bold">{d.ctaTitulo}</h2>
          <p className="mt-3 leading-relaxed text-grisaceo">{d.ctaTexto}</p>
          <ContactActions ui={c.ui} mensaje={d.mensaje(servicio.titulo)} dark compact className="mt-6 !grid w-full" />
          <h3 className="mt-10 font-display font-semibold">{c.home.comoTitulo}</h3>
          <ol className="mt-4 space-y-4">
            {c.pasos.map((p, i) => (
              <li key={p.titulo} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-rojo text-sm font-bold">{i + 1}</span>
                <div>
                  <p className="font-semibold">{p.titulo}</p>
                  <p className="text-sm leading-relaxed text-grisaceo">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="bg-banda py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-texto">{d.otros}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otros.map((s) => (
              <ServiceCard key={s.slug} lang={lang} ui={c.ui} servicio={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
