import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { contacto, ruta, telLink, whatsappLink } from "@/data/content";

export default function Footer({ lang, c }) {
  const { ui } = c;
  return (
    <footer className="bg-petroleo text-grisaceo">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variante="blanco" className="h-8 w-auto" />
          <p className="mt-5 max-w-xs leading-relaxed">{ui.resumenMarca}</p>
          <p className="mt-4 font-display font-semibold text-naranja">{ui.lema}</p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white">{ui.navegacion}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {ui.nav.map(({ href, label }) => (
              <li key={href}>
                <Link href={ruta(lang, href)} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white">{ui.servicios}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {c.servicios.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={ruta(lang, `/servicios/${s.slug}`)} className="hover:text-white">
                  {s.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white">{ui.contacto}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="text-white">{contacto.responsable}</li>
            <li>
              <a href={whatsappLink(ui.mensajeBase)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <MessageCircle size={17} className="text-naranja" /> {ui.whatsapp} +502 {contacto.telefono}
              </a>
            </li>
            <li>
              <a href={telLink()} className="flex items-center gap-2 hover:text-white">
                <Phone size={17} className="text-naranja" /> {ui.llamar} +502 {contacto.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacto.correo}`} className="flex items-center gap-2 break-all hover:text-white">
                <Mail size={17} className="shrink-0 text-naranja" /> {contacto.correo}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={17} className="text-naranja" /> {ui.pais}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-grisaceo/80 sm:px-6 md:flex-row md:justify-between">
          <p>{ui.derechos}</p>
          <p>
            {ui.diseno} <span className="font-semibold text-grisaceo">Axel Rodas</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
