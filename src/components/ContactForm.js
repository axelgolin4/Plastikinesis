"use client";

import { MessageCircle } from "lucide-react";
import { servicios, tienePieza, whatsappLink } from "@/data/site";

const inputClass =
  "w-full min-h-12 rounded-2xl border border-grisaceo bg-white px-4 py-3 text-ink outline-none transition-[border-color,box-shadow] duration-150 focus:border-rojo focus:ring-2 focus:ring-rojo/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-petroleo";

// Arma el mensaje con los datos del formulario y lo abre en WhatsApp.
export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const mensaje = [
      `Hola, soy ${data.get("nombre")}${data.get("empresa") ? ` de ${data.get("empresa")}` : ""}.`,
      `Necesito: ${data.get("servicio")}. Cantidad aproximada: ${data.get("cantidad")}.`,
      `Tengo: ${data.get("tengo")}.`,
      data.get("mensaje"),
      `Mi teléfono: ${data.get("telefono")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(mensaje), "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="font-display text-3xl font-bold text-petroleo">Envíanos tu proyecto</h2>
      <p className="text-acero">Llena estos datos y el mensaje sale listo en WhatsApp. Ahí mismo puedes adjuntar fotos, planos o archivos CAD.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>Nombre</label>
          <input id="nombre" name="nombre" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>Empresa (opcional)</label>
          <input id="empresa" name="empresa" autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>Teléfono</label>
          <input id="telefono" name="telefono" required type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cantidad" className={labelClass}>Cantidad</label>
          <select id="cantidad" name="cantidad" className={inputClass} defaultValue="Una pieza">
            {["Una pieza", "Prototipo", "Lote corto", "Producción en serie"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="servicio" className={labelClass}>Qué necesitas</label>
        <select id="servicio" name="servicio" className={inputClass} defaultValue={servicios[0].titulo}>
          {servicios.map((s) => (
            <option key={s.slug}>{s.titulo}</option>
          ))}
          <option>No estoy seguro</option>
        </select>
      </div>
      <div>
        <label htmlFor="tengo" className={labelClass}>Qué tienes de tu pieza</label>
        <select id="tengo" name="tengo" className={inputClass} defaultValue={tienePieza[0].frase}>
          {tienePieza.map((t) => (
            <option key={t.id} value={t.frase}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className={labelClass}>Describe la pieza o el problema</label>
        <textarea id="mensaje" name="mensaje" rows={4} className={inputClass} />
      </div>
      <button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-rojo font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-rojo-hondo active:scale-[0.98]">
        <MessageCircle size={20} /> Enviar por WhatsApp
      </button>
    </form>
  );
}
