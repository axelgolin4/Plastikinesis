import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import ContactActions from "@/components/ContactActions";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { pasos, servicios } from "@/data/site";

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  return { title: servicio?.titulo ?? "Servicio", description: servicio?.resumen };
}

export default async function ServicioPage({ params }) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) notFound();

  const otros = servicios.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={servicio.titulo}
        subtitle={servicio.resumen}
        crumbs={[{ label: "Servicios", href: "/servicios" }, { label: servicio.titulo }]}
      />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="max-w-[65ch] text-lg leading-relaxed text-ink">{servicio.descripcion}</p>
          <h2 className="mt-12 font-display text-2xl font-bold text-petroleo">Qué incluye</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {servicio.incluye.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-2xl bg-niebla p-4 text-ink">
                <CheckCircle2 size={20} className="shrink-0 text-rojo" /> {item}
              </li>
            ))}
          </ul>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image src={servicio.foto} alt={servicio.titulo} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
        </div>

        <aside className="rounded-3xl bg-petroleo p-7 text-white lg:sticky lg:top-28 lg:col-span-5">
          <h2 className="font-display text-2xl font-bold">Cuéntanos tu proyecto</h2>
          <p className="mt-3 leading-relaxed text-grisaceo">
            Compártenos una fotografía, muestra física, plano técnico o modelo CAD y te enviamos una propuesta a medida.
          </p>
          <ContactActions mensaje={`Hola, me interesa el servicio de ${servicio.titulo}.`} dark compact className="mt-6 !grid w-full" />
          <h3 className="mt-10 font-display font-semibold">Cómo trabajamos</h3>
          <ol className="mt-4 space-y-4">
            {pasos.map((p, i) => (
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

      <section className="bg-niebla py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-petroleo">Otros servicios</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otros.map((s) => (
              <ServiceCard key={s.slug} servicio={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
