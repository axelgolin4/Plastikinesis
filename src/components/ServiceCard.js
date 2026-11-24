import Link from "next/link";
import { ArrowRight, Boxes, Crosshair, Drill, FlaskConical, Layers, ScanLine, Wrench } from "lucide-react";
import { ruta } from "@/data/content";

export const iconos = {
  "ingenieria-inversa": ScanLine,
  "repuestos-y-piezas-especiales": Wrench,
  "fixtures-poka-yoke": Crosshair,
  "componentes-rigidos-y-flexibles": Layers,
  "poliuretano-colado": FlaskConical,
  "maquinado-cnc": Drill,
  "diseno-de-moldes": Boxes,
};

// Tarjeta de servicio: el ícono acompaña al título en la misma línea, como en el brochure.
export default function ServiceCard({ lang, ui, servicio }) {
  const Icon = iconos[servicio.slug] ?? Wrench;

  return (
    <Link
      href={ruta(lang, `/servicios/${servicio.slug}`)}
      className="group flex flex-col rounded-3xl bg-tarjeta p-7 ring-1 ring-borde transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_40px_-24px_rgba(25,27,39,0.35)]"
    >
      <h3 className="flex items-start gap-3 font-display text-xl font-semibold leading-snug text-texto">
        <Icon size={24} className="mt-0.5 shrink-0 text-rojo" aria-hidden="true" />
        <span className="min-w-0 flex-1 text-balance">
          {/* "Poka-Yoke" no debe partirse en el guion */}
          {servicio.titulo.split(/(Poka-Yoke)/).map((parte, i) =>
            parte === "Poka-Yoke" ? (
              <span key={i} className="whitespace-nowrap">
                {parte}
              </span>
            ) : (
              parte
            ),
          )}
        </span>
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-texto-2">{servicio.resumen}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-enlace">
        {ui.verServicio} <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
