import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PiecePicker from "@/components/PiecePicker";
import ServiceCard from "@/components/ServiceCard";
import { durezas, escala, industrias, pasos, servicios, whatsappLink } from "@/data/site";

// Alturas de las barras de la escala: de una pieza a miles.
const alturas = ["h-6", "h-12", "h-24", "h-40"];

export default function Home() {
  return (
    <>
      {/* Hero: ondas de marca, propuesta y selector de lo que tiene el cliente */}
      <section className="relative isolate overflow-hidden bg-petroleo text-white">
        <Image
          src="/marca/ondas.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-right"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-petroleo via-petroleo/90 to-petroleo/10" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              Ingeniería y fabricación de componentes técnicos <span className="text-naranja">a medida</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grisaceo">
              De una pieza a miles de unidades. Reproducimos, mejoramos y fabricamos las piezas de tu maquinaria en
              polímeros técnicos, cauchos y poliuretano.
            </p>
            <div className="mt-9">
              <PiecePicker />
            </div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/fotos/piezas-polimero.jpg"
                alt="Piezas técnicas de polímero blancas, negras y azules"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -left-6 top-10 rounded-full bg-rojo px-5 py-2.5 text-sm font-semibold shadow-[0_12px_24px_-10px_rgba(25,27,39,0.6)]">
              Materiales · Prototipos
            </span>
            <span className="absolute -left-6 top-24 rounded-full bg-rojo px-5 py-2.5 text-sm font-semibold shadow-[0_12px_24px_-10px_rgba(25,27,39,0.6)]">
              Lotes · Producción en serie
            </span>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-niebla py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-petroleo sm:text-4xl">
                Nuestros servicios
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-acero">
                Fabricamos componentes mecánicos mediante diseño, ingeniería inversa y producción especializada para
                mantener, reparar y optimizar maquinaria industrial.
              </p>
            </div>
            <Link href="/servicios" className="inline-flex items-center gap-2 font-semibold text-rojo-hondo hover:gap-3 transition-[gap]">
              Ver todos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map((s) => (
              <ServiceCard key={s.slug} servicio={s} />
            ))}
            <a
              href={whatsappLink("Hola, necesito una pieza que no veo en sus servicios. ¿Me pueden ayudar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl bg-petroleo p-7 text-white transition-transform duration-200 ease-out hover:-translate-y-1"
            >
              <h3 className="font-display text-xl font-semibold leading-snug">¿No ves tu pieza aquí?</h3>
              <p className="mt-2 leading-relaxed text-grisaceo">Cuéntanos qué necesitas y te decimos si la podemos fabricar.</p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-naranja">
                <MessageCircle size={18} /> Escríbenos
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* De una pieza a miles de unidades */}
      <section className="bg-petroleo py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] sm:text-4xl">
              De una pieza a miles de unidades
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-grisaceo">
              Desde prototipos y repuestos individuales hasta lotes cortos y producción en serie, adaptamos cada
              proyecto a lo que tu planta necesita.
            </p>
          </div>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {escala.map((e, i) => (
              <li key={e.titulo} className="flex flex-col">
                <div className="flex h-40 items-end">
                  <span className={`w-14 rounded-t-xl bg-gradient-to-t from-rojo to-naranja ${alturas[i]}`} aria-hidden="true" />
                </div>
                <div className="border-t border-white/15 pt-5">
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
          <Image src="/fotos/maquinado.jpg" alt="Técnico trabajando en una máquina fresadora" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-petroleo sm:text-4xl">
            Cómo trabajamos
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-acero">Empiezas con lo que tengas de tu pieza. Nosotros hacemos el resto.</p>
          <ol className="mt-8 space-y-6">
            {pasos.map((p, i) => (
              <li key={p.titulo} className="flex gap-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rojo font-display font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-petroleo">{p.titulo}</h3>
                  <p className="mt-1 leading-relaxed text-acero">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Durezas: referencia para elegir el material */}
      <section className="bg-grisaceo/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-bold tracking-[-0.01em] text-petroleo sm:text-4xl">
              Desde muy suave hasta muy duro
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-acero">
              El poliuretano y los elastómeros se formulan en la dureza que tu pieza necesita. Esta referencia compara
              la escala Shore con objetos de todos los días.
            </p>
          </div>
          <div className="mt-12">
            <div className="h-3 rounded-full bg-gradient-to-r from-naranja via-rojo to-petroleo" aria-hidden="true" />
            <ol className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {durezas.map((d) => (
                <li key={d.escala}>
                  <p className="font-display font-semibold text-petroleo">{d.valor}</p>
                  <p className="text-sm font-medium text-rojo-hondo">{d.escala}</p>
                  <p className="mt-1 text-sm leading-relaxed text-acero">{d.ejemplo}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-[-0.01em] text-petroleo sm:text-4xl">
            Piezas para la industria que no puede parar
          </h2>
          <Link href="/industrias" className="inline-flex items-center gap-2 font-semibold text-rojo-hondo hover:gap-3 transition-[gap]">
            Ver industrias <ArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src="/fotos/planta-supervision.jpg" alt="Personal de planta revisando un equipo industrial" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src="/fotos/robotica.jpg" alt="Brazos robóticos en una línea de producción" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
          </div>
          <ul className="grid content-start gap-x-8 sm:grid-cols-2">
            {industrias.map((ind) => (
              <li key={ind.titulo} className="border-t border-grisaceo py-5">
                <h3 className="font-display font-semibold text-petroleo">{ind.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-acero">{ind.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
