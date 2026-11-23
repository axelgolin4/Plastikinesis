import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { industrias } from "@/data/site";

export const metadata = { title: "Industrias" };

export default function IndustriasPage() {
  return (
    <>
      <PageHeader
        title="Piezas para la industria que no puede parar"
        subtitle="Componentes a medida para mantener, reparar y mejorar maquinaria en distintos sectores."
        crumbs={[{ label: "Industrias" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industrias.map((ind) => (
            <article key={ind.titulo} className="rounded-3xl bg-niebla p-7">
              <h2 className="font-display text-xl font-semibold text-petroleo">{ind.titulo}</h2>
              <p className="mt-2 leading-relaxed text-acero">{ind.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-8 sm:grid-cols-3 sm:px-6">
        {[
          { src: "/fotos/robotica.jpg", alt: "Brazos robóticos en una línea de producción" },
          { src: "/fotos/componentes-mecanicos.jpg", alt: "Componentes mecánicos: engranes, acoples, sellos y piezas maquinadas" },
          { src: "/fotos/planta-supervision.jpg", alt: "Personal de planta revisando un equipo industrial" },
        ].map((foto) => (
          <div key={foto.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={foto.src} alt={foto.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      <CtaBanner mensaje="Hola, trabajo en la industria y necesito una pieza a medida." />
    </>
  );
}
