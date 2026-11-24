import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import IndustriasMosaico from "@/components/IndustriasMosaico";
import PiecePicker from "@/components/PiecePicker";
import ServiceCard from "@/components/ServiceCard";
import { getContent, ruta, whatsappLink } from "@/data/content";

// Barras de la escala, de una pieza a miles: ancho en celular, alto en escritorio.
const anchos = ["w-1/6", "w-2/6", "w-4/6", "w-full"];
const alturas = ["lg:h-6", "lg:h-12", "lg:h-24", "lg:h-40"];

export default async function Home({ params }) {
  const { lang } = await params;
  const c = getContent(lang);
  const { home, ui } = c;

  return (
    <>
      {/* Hero: ondas de marca, propuesta y selector de lo que tiene el cliente */}
      <section className="relative isolate overflow-hidden bg-petroleo text-white">
        <Image src="/marca/ondas.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-petroleo via-petroleo/90 to-petroleo/10" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              {home.titulo} <span className="text-naranja">{home.tituloAcento}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grisaceo">{home.intro}</p>
            <div className="mt-9">
              <PiecePicker lang={lang} />
            </div>
          </div>

          {/* En celular la foto de piezas va debajo de los botones, apaisada */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl lg:aspect-[4/5]">
              <Image
                src="/fotos/piezas-polimero.jpg"
                alt={home.fotoAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            {home.pastillas.map((p, i) => (
              <span
                key={p}
                className={`absolute left-3 rounded-full bg-rojo px-4 py-2 text-xs font-semibold shadow-[0_12px_24px_-10px_rgba(25,27,39,0.6)] sm:text-sm lg:-left-6 lg:px-5 lg:py-2.5 ${
                  i === 0 ? "top-3 lg:top-10" : "top-13 sm:top-14 lg:top-24"
                }`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-banda py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-texto sm:text-4xl">
                {home.serviciosTitulo}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-texto-2">{home.serviciosIntro}</p>
            </div>
            <Link href={ruta(lang, "/servicios")} className="inline-flex items-center gap-2 font-semibold text-enlace transition-[gap] hover:gap-3">
              {ui.verTodos} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.servicios.map((s) => (
              <ServiceCard key={s.slug} lang={lang} ui={ui} servicio={s} />
            ))}
            <a
              href={whatsappLink(home.noVesMensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl bg-petroleo p-7 text-white ring-1 ring-white/10 transition-transform duration-200 ease-out hover:-translate-y-1"
            >
              <h3 className="font-display text-xl font-semibold leading-snug">{home.noVesTitulo}</h3>
              <p className="mt-2 leading-relaxed text-grisaceo">{home.noVesTexto}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-naranja">
                <MessageCircle size={18} /> {ui.escribenos}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Industrias y piezas */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-texto sm:text-4xl">
            {c.industriasBloque.titulo}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-texto-2">{c.industriasBloque.intro}</p>
        </div>
        <div className="mt-12">
          <IndustriasMosaico lang={lang} />
        </div>
      </section>

      {/* De una pieza a miles de unidades */}
      <section className="bg-petroleo py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] sm:text-4xl">{home.escalaTitulo}</h2>
            <p className="mt-3 text-lg leading-relaxed text-grisaceo">{home.escalaIntro}</p>
          </div>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.escala.map((e, i) => (
              <li key={e.titulo} className="flex flex-col">
                {/* En celular la barra crece a lo ancho; en escritorio, hacia arriba */}
                <div className="flex h-8 items-center lg:h-40 lg:items-end">
                  <span
                    className={`h-4 rounded-full bg-gradient-to-r from-rojo to-naranja lg:w-14 lg:rounded-b-none lg:rounded-t-xl lg:bg-gradient-to-t ${anchos[i]} ${alturas[i]}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 border-t border-white/15 pt-5 lg:mt-0">
                  <h3 className="font-display text-xl font-semibold">{e.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-grisaceo">{e.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src="/fotos/maquinado.jpg" alt={home.comoFotoAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-texto sm:text-4xl">{home.comoTitulo}</h2>
          <p className="mt-3 text-lg leading-relaxed text-texto-2">{home.comoIntro}</p>
          <ol className="mt-8 space-y-6">
            {c.pasos.map((p, i) => (
              <li key={p.titulo} className="flex gap-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rojo font-display font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-texto">{p.titulo}</h3>
                  <p className="mt-1 leading-relaxed text-texto-2">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Durezas: referencia general para elegir el material */}
      <section className="bg-banda py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-texto sm:text-4xl">{home.durezaTitulo}</h2>
            <p className="mt-3 text-lg leading-relaxed text-texto-2">{home.durezaIntro}</p>
          </div>
          <div className="mt-12">
            <div className="h-3 rounded-full bg-gradient-to-r from-naranja via-rojo to-petroleo dark:to-grisaceo" aria-hidden="true" />
            <ol className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {c.durezas.map((d) => (
                <li key={d.escala}>
                  <p className="font-display font-semibold text-texto">{d.valor}</p>
                  <p className="text-sm font-medium text-enlace">{d.escala}</p>
                  <p className="mt-1 text-sm leading-relaxed text-texto-2">{d.ejemplo}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBanner c={c} />
    </>
  );
}
