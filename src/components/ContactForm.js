"use client";

import { MessageCircle } from "lucide-react";
import { getContent, whatsappLink } from "@/data/content";

const inputClass =
  "w-full min-h-12 rounded-2xl border border-borde bg-tarjeta px-4 py-3 text-texto outline-none transition-[border-color,box-shadow] duration-150 focus:border-rojo focus:ring-2 focus:ring-rojo/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-texto";

// Arma el mensaje con los datos del formulario y lo abre en WhatsApp.
export default function ContactForm({ lang }) {
  const { form, servicios, picker } = getContent(lang);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    window.open(whatsappLink(form.armar(data)), "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="font-display text-3xl font-bold text-texto">{form.titulo}</h2>
      <p className="text-texto-2">{form.intro}</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>{form.nombre}</label>
          <input id="nombre" name="nombre" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>{form.empresa}</label>
          <input id="empresa" name="empresa" autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>{form.telefono}</label>
          <input id="telefono" name="telefono" required type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cantidad" className={labelClass}>{form.cantidad}</label>
          <select id="cantidad" name="cantidad" className={inputClass} defaultValue={form.cantidades[0]}>
            {form.cantidades.map((q) => (
              <option key={q}>{q}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="servicio" className={labelClass}>{form.servicio}</label>
        <select id="servicio" name="servicio" className={inputClass} defaultValue={servicios[0].titulo}>
          {servicios.map((s) => (
            <option key={s.slug}>{s.titulo}</option>
          ))}
          <option>{form.noSeguro}</option>
        </select>
      </div>
      <div>
        <label htmlFor="tengo" className={labelClass}>{form.tengo}</label>
        <select id="tengo" name="tengo" className={inputClass} defaultValue={picker.opciones[0].frase}>
          {picker.opciones.map((t) => (
            <option key={t.id} value={t.frase}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className={labelClass}>{form.describe}</label>
        <textarea id="mensaje" name="mensaje" rows={4} className={inputClass} />
      </div>
      <button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-rojo font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-rojo-hondo active:scale-[0.98]">
        <MessageCircle size={20} /> {form.enviar}
      </button>
    </form>
  );
}
