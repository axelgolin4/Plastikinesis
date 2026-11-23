"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, servicios, telLink, whatsappLink } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-grisaceo bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Plastikinesis, inicio">
          <Logo className="h-7 w-auto sm:h-8" />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="group relative">
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`flex items-center gap-1 py-2 text-[0.95rem] font-medium transition-colors duration-150 hover:text-rojo ${
                  isActive(href) ? "text-rojo" : "text-acero"
                }`}
              >
                {label}
                {href === "/servicios" && (
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>
              {href === "/servicios" && (
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 -translate-y-1 pt-3 opacity-0 transition-[opacity,visibility,translate] duration-150 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="rounded-2xl bg-white p-2 shadow-[0_20px_40px_-16px_rgba(25,27,39,0.35)] ring-1 ring-grisaceo">
                    {servicios.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/servicios/${s.slug}`}
                          className="block rounded-xl px-3 py-2 text-sm text-acero transition-colors duration-100 hover:bg-niebla hover:text-rojo"
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

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={telLink()}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-petroleo px-4 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-petroleo-2 active:scale-[0.97]"
          >
            <Phone size={16} /> Llamar
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-rojo px-4 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-rojo-hondo active:scale-[0.97]"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full text-petroleo lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="pop-in border-t border-grisaceo bg-white px-4 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b border-niebla font-display text-lg font-semibold ${
                    isActive(href) ? "text-rojo" : "text-petroleo"
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
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-petroleo font-semibold text-white"
            >
              <Phone size={18} /> Llamar
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-rojo font-semibold text-white"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
