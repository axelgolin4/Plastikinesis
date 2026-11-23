import Link from "next/link";
import { ArrowRight, Boxes, Cog, Drill, Layers, RefreshCcw, ScanLine, Wrench } from "lucide-react";

export const iconos = {
  "ingenieria-inversa": ScanLine,
  "repuestos-y-piezas-especiales": Wrench,
  "fixtures-poka-yoke": Cog,
  "componentes-rigidos-y-flexibles": Layers,
  "poliuretano-colado": RefreshCcw,
  "maquinado-cnc": Drill,
  "diseno-de-moldes": Boxes,
};

// Tarjeta de servicio: el ícono acompaña al título en la misma línea, como en el brochure.
export default function ServiceCard({ servicio }) {
  const Icon = iconos[servicio.slug] ?? Cog;

  return (
    <Link
      href={`/servicios/${servicio.slug}`}
      className="group flex flex-col rounded-3xl bg-white p-7 ring-1 ring-grisaceo transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_40px_-24px_rgba(25,27,39,0.35)]"
    >
      <h3 className="flex items-start gap-3 font-display text-xl font-semibold leading-snug text-petroleo">
        <Icon size={24} className="mt-0.5 shrink-0 text-rojo transition-colors duration-200 group-hover:text-rojo-hondo" aria-hidden="true" />
        <span className="text-balance">{servicio.titulo}</span>
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-acero">{servicio.resumen}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-rojo-hondo">
        Ver servicio <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
