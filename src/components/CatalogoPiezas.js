import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/content";

// Lista de piezas que el cliente puede mandar a hacer; cada una abre WhatsApp con la pieza ya escrita.
export default function CatalogoPiezas({ c }) {
  const pedir = (p) =>
    c.lang === "es" ? `Hola, quiero cotizar: ${p}.` : `Hi, I'd like a quote for: ${p}.`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-texto sm:text-4xl">
          {c.catalogo.titulo}
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-texto-2">{c.catalogo.intro}</p>
      </div>
      <ul className="mt-10 flex flex-wrap gap-3">
        {c.catalogo.piezas.map((p) => (
          <li key={p}>
            <a
              href={whatsappLink(pedir(p))}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-superficie px-5 font-medium text-texto ring-1 ring-borde transition-[background-color,color] duration-150 hover:bg-rojo hover:text-white"
            >
              {p}
              <MessageCircle size={15} className="text-enlace transition-colors duration-150 group-hover:text-white" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
