"use client";

import { useState } from "react";
import Image from "next/image";
import { Factory, Hammer, Mountain, Package, Truck, UtensilsCrossed } from "lucide-react";
import { getContent } from "@/data/content";

const iconos = {
  alimentos: UtensilsCrossed,
  empaque: Package,
  metalmecanica: Hammer,
  mineria: Mountain,
  automotriz: Truck,
  oem: Factory,
};

// Mosaico de industrias: cada foto muestra la industria y, al pasar el cursor o tocarla, las piezas que se pueden pedir.
export default function IndustriasMosaico({ lang }) {
  const { industrias, industriasBloque } = getContent(lang);
  const [abierta, setAbierta] = useState(null);

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {industrias.map((ind) => {
        const Icon = iconos[ind.id] ?? Factory;
        const estaAbierta = abierta === ind.id;
        return (
          <li key={ind.id}>
            <button
              type="button"
              onClick={() => setAbierta(estaAbierta ? null : ind.id)}
              aria-expanded={estaAbierta}
              data-abierta={estaAbierta}
              className="industria group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl text-left text-white"
            >
              <Image
                src={ind.foto}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-petroleo/90 via-petroleo/45 to-petroleo/10" aria-hidden="true" />

              {/* Nombre de la industria */}
              <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6">
                <Icon size={30} className="shrink-0 text-naranja" aria-hidden="true" />
                <span className="font-display text-xl font-bold leading-tight">{ind.titulo}</span>
              </span>

              {/* Piezas de ejemplo */}
              <span className="industria-piezas absolute inset-0 flex flex-col justify-center bg-petroleo/95 p-6">
                <span className="flex items-center gap-3">
                  <Icon size={26} className="shrink-0 text-naranja" aria-hidden="true" />
                  <span className="font-display text-lg font-bold">{ind.titulo}</span>
                </span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {ind.piezas.map((p) => (
                    <span key={p} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-grisaceo ring-1 ring-white/15">
                      {p}
                    </span>
                  ))}
                </span>
              </span>
              <span className="sr-only">{industriasBloque.tocar}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
