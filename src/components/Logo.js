import Image from "next/image";

// Logo oficial del manual de marca, sin alterar.
// variante "auto": oscuro en modo claro y blanco en modo oscuro; "blanco": siempre blanco (fondos oscuros).
export default function Logo({ variante = "auto", className = "h-8 w-auto" }) {
  if (variante === "blanco") {
    return <Image src="/marca/logo-horizontal-blanco.png" alt="Plastikinesis" width={3761} height={650} className={className} />;
  }
  return (
    <>
      <Image
        src="/marca/logo-horizontal-oscuro.png"
        alt="Plastikinesis"
        width={3761}
        height={650}
        className={`${className} dark:hidden`}
        loading="eager"
      />
      <Image
        src="/marca/logo-horizontal-blanco.png"
        alt="Plastikinesis"
        width={3761}
        height={650}
        className={`${className} hidden dark:block`}
        loading="eager"
      />
    </>
  );
}
