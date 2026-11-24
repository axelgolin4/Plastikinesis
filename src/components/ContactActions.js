import { MessageCircle, Phone } from "lucide-react";
import { contacto, telLink, whatsappLink } from "@/data/content";

// WhatsApp y llamada con el mismo peso. `dark` es para fondos oscuros, donde llamar va en blanco.
export default function ContactActions({ ui, mensaje, dark = false, compact = false, className = "" }) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 font-semibold transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]";

  return (
    <div className={`grid grid-cols-2 gap-3 sm:inline-grid sm:auto-cols-fr sm:grid-flow-col ${className}`}>
      <a
        href={whatsappLink(mensaje ?? ui.mensajeBase)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-rojo text-white hover:bg-rojo-hondo`}
      >
        <MessageCircle size={20} />
        {ui.whatsapp}
      </a>
      <a
        href={telLink()}
        className={`${base} ${dark ? "bg-white text-petroleo hover:bg-grisaceo" : "bg-btn2 text-btn2-texto hover:bg-btn2-hover"}`}
      >
        <Phone size={19} />
        <span>
          {ui.llamar} {!compact && <span className="hidden tabular-nums sm:inline">{contacto.telefono}</span>}
        </span>
      </a>
    </div>
  );
}
