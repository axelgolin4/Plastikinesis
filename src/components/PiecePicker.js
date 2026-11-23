"use client";

import { useState } from "react";
import ContactActions from "./ContactActions";
import { tienePieza } from "@/data/site";

// El cliente marca qué tiene de su pieza y el mensaje de WhatsApp sale escrito.
export default function PiecePicker() {
  const [eleccion, setEleccion] = useState(null);
  const elegida = tienePieza.find((t) => t.id === eleccion);
  const mensaje = elegida
    ? `Hola, tengo ${elegida.frase} y quiero una propuesta de Plastikinesis para fabricarla.`
    : undefined;

  return (
    <div>
      <fieldset>
        <legend className="font-display font-semibold text-white">¿Qué tienes de tu pieza?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {tienePieza.map((t) => {
            const marcada = t.id === eleccion;
            return (
              <label
                key={t.id}
                className={`flex min-h-11 cursor-pointer select-none items-center rounded-full border px-4 text-sm font-medium transition-colors duration-150 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-white ${
                  marcada
                    ? "border-naranja bg-naranja text-petroleo"
                    : "border-white/25 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <input
                  type="radio"
                  name="pieza"
                  value={t.id}
                  checked={marcada}
                  onChange={() => setEleccion(t.id)}
                  className="sr-only"
                />
                {t.label}
              </label>
            );
          })}
        </div>
      </fieldset>
      <p className="mt-3 min-h-5 text-sm text-white/70" aria-live="polite">
        {elegida ? `Tu mensaje dirá: «${mensaje}»` : "Marca una opción y el mensaje sale escrito."}
      </p>
      <ContactActions mensaje={mensaje} dark className="mt-5" />
    </div>
  );
}
