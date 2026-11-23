import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import { servicios } from "@/data/site";

export const metadata = { title: "Servicios" };

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        title="Nuestros servicios"
        subtitle="Diseño, ingeniería inversa y fabricación especializada para mantener, reparar y optimizar tu maquinaria."
        crumbs={[{ label: "Servicios" }]}
      />

      <section className="bg-niebla py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {servicios.map((s) => (
            <ServiceCard key={s.slug} servicio={s} />
          ))}
        </div>
      </section>

      <CtaBanner mensaje="Hola, tengo una pieza y no sé qué servicio necesito. ¿Me pueden orientar?" />
    </>
  );
}
