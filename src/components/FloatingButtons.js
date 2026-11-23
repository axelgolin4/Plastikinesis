import { MessageCircle, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/data/site";

// Las dos formas de enviar un proyecto, siempre a la mano.
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={telLink()}
        aria-label="Llamar a Plastikinesis"
        className="grid h-13 w-13 place-items-center rounded-full bg-petroleo text-white shadow-[0_10px_24px_-8px_rgba(25,27,39,0.6)] transition-transform duration-150 active:scale-95"
      >
        <Phone size={22} />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a Plastikinesis por WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-rojo text-white shadow-[0_10px_24px_-8px_rgba(210,66,32,0.7)] transition-transform duration-150 active:scale-95"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
