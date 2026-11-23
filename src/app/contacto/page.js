import { Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contacto, telLink, whatsappLink } from "@/data/site";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  const datos = [
    { icon: User, titulo: "Contacto", valor: contacto.responsable },
    {
      icon: MessageCircle,
      titulo: "WhatsApp",
      valor: `+502 ${contacto.telefono}`,
      href: whatsappLink(),
      externo: true,
    },
    { icon: Phone, titulo: "Teléfono", valor: `+502 ${contacto.telefono}`, href: telLink() },
    { icon: Mail, titulo: "Correo", valor: contacto.correo, href: `mailto:${contacto.correo}` },
    { icon: MapPin, titulo: "Ubicación", valor: contacto.pais },
  ];

  return (
    <>
      <PageHeader
        title="¿Tienes un proyecto?"
        subtitle="Compártenos una fotografía, muestra física, plano técnico o modelo CAD para evaluar tu proyecto y desarrollar una propuesta a medida."
        crumbs={[{ label: "Contacto" }]}
      />

      <section className="mx-auto grid max-w-7xl items-start gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <aside className="rounded-3xl bg-niebla p-7 lg:col-span-5">
          <ul className="divide-y divide-grisaceo">
            {datos.map(({ icon: Icon, titulo, valor, href, externo }) => (
              <li key={titulo} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-rojo/10 text-rojo">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-acero">{titulo}</p>
                  {href ? (
                    <a
                      href={href}
                      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="break-all font-semibold text-petroleo hover:text-rojo"
                    >
                      {valor}
                    </a>
                  ) : (
                    <p className="font-semibold text-petroleo">{valor}</p>
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
