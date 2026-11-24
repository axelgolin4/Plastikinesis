import { Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contacto, getContent, telLink, whatsappLink } from "@/data/content";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getContent(lang).ui.contacto };
}

export default async function ContactoPage({ params }) {
  const { lang } = await params;
  const c = getContent(lang);
  const p = c.contactoPagina;

  const datos = [
    { icon: User, titulo: p.datos.contacto, valor: contacto.responsable },
    { icon: MessageCircle, titulo: p.datos.whatsapp, valor: `+502 ${contacto.telefono}`, href: whatsappLink(c.ui.mensajeBase), externo: true },
    { icon: Phone, titulo: p.datos.telefono, valor: `+502 ${contacto.telefono}`, href: telLink() },
    { icon: Mail, titulo: p.datos.correo, valor: contacto.correo, href: `mailto:${contacto.correo}` },
    { icon: MapPin, titulo: p.datos.ubicacion, valor: c.ui.pais },
  ];

  return (
    <>
      <PageHeader lang={lang} ui={c.ui} title={p.titulo} subtitle={p.subtitulo} crumbs={[{ label: c.ui.contacto }]} />

      <section className="mx-auto grid max-w-7xl items-start gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm lang={lang} />
        </div>
        <aside className="rounded-3xl bg-superficie p-7 ring-1 ring-borde lg:col-span-5">
          <ul className="divide-y divide-borde">
            {datos.map(({ icon: Icon, titulo, valor, href, externo }) => (
              <li key={titulo} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-rojo/10 text-rojo">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-texto-2">{titulo}</p>
                  {href ? (
                    <a
                      href={href}
                      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="break-all font-semibold text-texto hover:text-enlace"
                    >
                      {valor}
                    </a>
                  ) : (
                    <p className="font-semibold text-texto">{valor}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}
