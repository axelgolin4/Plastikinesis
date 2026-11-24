import Image from "next/image";
import ContactActions from "./ContactActions";

// Cierre de página: la invitación a enviar el proyecto, sobre las ondas de marca.
export default function CtaBanner({ c, mensaje }) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-petroleo px-6 py-14 text-white sm:px-12 sm:py-16">
        <Image src="/marca/ondas.jpg" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="-z-10 object-cover opacity-70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-petroleo via-petroleo/80 to-transparent" />
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">{c.cta.titulo}</h2>
          <p className="mt-4 text-lg leading-relaxed text-grisaceo">{c.cta.texto}</p>
          <ContactActions ui={c.ui} mensaje={mensaje} dark className="mt-8" />
        </div>
      </div>
    </section>
  );
}
