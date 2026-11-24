import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import IndustriasMosaico from "@/components/IndustriasMosaico";
import CatalogoPiezas from "@/components/CatalogoPiezas";
import { getContent } from "@/data/content";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getContent(lang).serviciosPagina.titulo };
}

export default async function ServiciosPage({ params }) {
  const { lang } = await params;
  const c = getContent(lang);
  const p = c.serviciosPagina;

  return (
    <>
      <PageHeader lang={lang} ui={c.ui} title={p.titulo} subtitle={p.subtitulo} crumbs={[{ label: c.ui.servicios }]} />

      <section className="bg-banda py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {c.servicios.map((s) => (
            <ServiceCard key={s.slug} lang={lang} ui={c.ui} servicio={s} />
          ))}
        </div>
      </section>

      <section id="industrias" className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-20 sm:px-6 sm:pt-24">
        <div className="max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-texto sm:text-4xl">
            {c.industriasBloque.titulo}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-texto-2">{c.industriasBloque.intro}</p>
        </div>
        <div className="mt-12">
          <IndustriasMosaico lang={lang} />
        </div>
      </section>

      <CatalogoPiezas c={c} />

      <CtaBanner c={c} mensaje={p.ctaMensaje} />
    </>
  );
}
