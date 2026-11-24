import Image from "next/image";
import { Crosshair, Layers, ScanLine, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { getContent } from "@/data/content";

const iconosPilares = [ScanLine, Layers, Wrench, Crosshair];

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getContent(lang).ui.nav[1].label };
}

export default async function NosotrosPage({ params }) {
  const { lang } = await params;
  const c = getContent(lang);
  const n = c.nosotros;

  return (
    <>
      <PageHeader lang={lang} ui={c.ui} title={n.titulo} subtitle={n.subtitulo} crumbs={[{ label: c.ui.nav[1].label }]} />

      {/* Un enfoque integral */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-bold tracking-[0.08em] text-texto sm:text-5xl">{n.enfoqueTitulo}</h2>
        <div className="mt-10 grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-texto-2 lg:col-span-7">
            {n.enfoque.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-5">
            <Image src="/fotos/piezas-blancas.jpg" alt={n.fotoAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-petroleo py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold tracking-[-0.01em] sm:text-4xl">{n.pilaresTitulo}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {n.pilares.map(({ titulo, texto }, i) => {
              const Icon = iconosPilares[i];
              return (
                <div key={titulo} className="border-t border-white/15 pt-6">
                  <Icon className="text-naranja" size={28} />
                  <h3 className="mt-4 font-display text-xl font-semibold">{titulo}</h3>
                  <p className="mt-2 leading-relaxed text-grisaceo">{texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner c={c} />
    </>
  );
}
