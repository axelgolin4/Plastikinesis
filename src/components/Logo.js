import Image from "next/image";

// Logo oficial del manual de marca, sin alterar. `variante`: oscuro (fondos claros) o blanco (fondos oscuros).
export default function Logo({ variante = "oscuro", className = "h-8 w-auto" }) {
  return (
    <Image
      src={`/marca/logo-horizontal-${variante}.png`}
      alt="Plastikinesis"
      width={3761}
      height={650}
      className={className}
      priority
    />
  );
}
