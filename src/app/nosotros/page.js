import Image from "next/image";
import { Cog, Layers, ScanLine, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata = { title: "Nosotros" };

const enfoque = [
  { icon: ScanLine, titulo: "Diseño mecánico", texto: "Levantamos, modelamos y rediseñamos cada pieza para su función real." },
  { icon: Layers, titulo: "Ingeniería de polímeros", texto: "Elegimos el material y la dureza según lo que la pieza debe resistir." },
  { icon: Wrench, titulo: "Fabricación propia", texto: "Moldes, colado y maquinado para controlar cada paso del proceso." },
  { icon: Cog, titulo: "A la medida", texto: "Cada proyecto se adapta a la cantidad y al plazo que necesita tu planta." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        title="Industria sin límite"
        subtitle="Diseño mecánico, ingeniería de polímeros y fabricación personalizada de componentes."
        crumbs={[{ label: "Nosotros" }]}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-acero">
          <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-petroleo sm:text-4xl">
            Piezas a medida para que tu maquinaria siga trabajando
          </h2>
          <p>
            Plastikinesis es una marca especializada en diseño mecánico, ingeniería de polímeros y fabricación
            personalizada de componentes. Desarrollamos piezas y soluciones a medida mediante procesos de diseño,
            innovación y manufactura, ofreciendo alternativas funcionales para necesidades industriales específicas.
          </p>
          <p>
            Trabajamos con lo que tengas: una pieza dañada, una muestra, una fotografía, un plano o un modelo CAD. A
            partir de ahí reproducimos, mejoramos o fabricamos desde una pieza hasta miles de unidades.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src="/fotos/piezas-blancas.jpg" alt="Piezas de polímero blancas fabricadas a medida" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-petroleo py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold tracking-[-0.01em] sm:text-4xl">Nuestro enfoque</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {enfoque.map(({ icon: Icon, titulo, texto }) => (
              <div key={titulo} className="border-t border-white/15 pt-6">
                <Icon className="text-naranja" size={28} />
                <h3 className="mt-4 font-display text-xl font-semibold">{titulo}</h3>
                <p className="mt-2 leading-relaxed text-grisaceo">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-balance font-display text-2xl font-semibold leading-snug text-petroleo sm:text-3xl">
          Fabricamos componentes mecánicos mediante diseño, ingeniería inversa y producción especializada para mantener,
          reparar y optimizar maquinaria industrial.
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
