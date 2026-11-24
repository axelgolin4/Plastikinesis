"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import Logo from "./Logo";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";
import { ruta, telLink, whatsappLink } from "@/data/content";

export default function Navbar({ lang, ui, servicios }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    const destino = ruta(lang, href);
    return href === "/" ? pathname === destino : pathname.startsWith(destino);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-borde bg-fondo/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href={ruta(lang)} onClick={() => setOpen(false)} aria-label="Plastikinesis">
          <Logo className="h-7 w-auto sm:h-8" />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {ui.nav.map(({ href, label }) => (
            <li key={href} className="group relative">
              <Link
                href={ruta(lang, href)}
                aria-current={isActive(href) ? "page" : undefined}
                className={`flex items-center gap-1 py-2 text-[0.95rem] font-medium transition-colors duration-150 hover:text-rojo ${
                  isActive(href) ? "text-enlace" : "text-texto-2"
                }`}
              >
                {label}
                {href === "/servicios" && (
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>
              {href === "/servicios" && (
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 -translate-y-1 pt-3 opacity-0 transition-[opacity,visibility,translate] duration-150 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="rounded-2xl bg-tarjeta p-2 shadow-[0_20px_40px_-16px_rgba(25,27,39,0.35)] ring-1 ring-borde">
                    {servicios.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={ruta(lang, `/servicios/${s.slug}`)}
                          className="block rounded-xl px-3 py-2 text-sm text-texto-2 transition-colors duration-100 hover:bg-superficie hover:text-enlace"
                        >
                          {s.titulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} ui={ui} />
          <ThemeToggle ui={ui} />
          <a
            href={telLink()}
            className="hidden min-h-10 items-center gap-1.5 rounded-full bg-btn2 px-4 text-sm font-semibold text-btn2-texto transition-[background-color,transform] duration-150 hover:bg-btn2-hover active:scale-[0.97] lg:inline-flex"
          >
            <Phone size={16} /> {ui.llamar}
          </a>
          <a
            href={whatsappLink(ui.mensajeBase)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center gap-1.5 rounded-full bg-rojo px-4 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-rojo-hondo active:scale-[0.97] lg:inline-flex"
          >
            <MessageCircle size={16} /> {ui.whatsapp}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-full text-texto lg:hidden"
            aria-label={open ? ui.cerrarMenu : ui.abrirMenu}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="pop-in border-t border-borde bg-fondo px-4 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {ui.nav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={ruta(lang, href)}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b border-borde font-display text-lg font-semibold ${
                    isActive(href) ? "text-enlace" : "text-texto"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={telLink()}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-btn2 font-semibold text-btn2-texto"
            >
              <Phone size={18} /> {ui.llamar}
            </a>
            <a
              href={whatsappLink(ui.mensajeBase)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-rojo font-semibold text-white"
            >
              <MessageCircle size={18} /> {ui.whatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
