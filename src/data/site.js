export const contacto = {
  nombre: "Plastikinesis",
  responsable: "Jorge Castillo",
  telefono: "5544-7261",
  whatsapp: "50255447261",
  correo: "Plastikinesis@gmail.com",
  pais: "Guatemala",
};

export const telLink = () => `tel:+502${contacto.telefono.replace(/\D/g, "")}`;

export const whatsappLink = (mensaje = "Hola, tengo un proyecto y quiero una propuesta de Plastikinesis.") =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/industrias", label: "Industrias" },
  { href: "/contacto", label: "Contacto" },
];

export const servicios = [
  {
    slug: "ingenieria-inversa",
    titulo: "Ingeniería inversa y rediseño",
    resumen: "Reproducimos y mejoramos componentes a partir de muestras, planos o especificaciones.",
    descripcion:
      "Cuando una pieza ya no se fabrica o no tiene planos, partimos de lo que tienes: la pieza original, aunque esté dañada, una fotografía con medidas o una especificación. La medimos, levantamos su geometría y la reproducimos. Si la pieza fallaba por desgaste o por el material, la rediseñamos para que dure más en tu aplicación.",
    incluye: ["Medición y levantamiento de la pieza", "Modelo CAD de la pieza", "Mejora del material o la geometría", "Reproducción en polímero"],
    foto: "/fotos/piezas-polimero.jpg",
  },
  {
    slug: "repuestos-y-piezas-especiales",
    titulo: "Repuestos y piezas especiales",
    resumen: "Piezas personalizadas, repuestos descontinuados o difíciles de conseguir.",
    descripcion:
      "Una máquina parada por una pieza que no se consigue cuesta más que la pieza. Fabricamos repuestos descontinuados, importados o difíciles de encontrar, y piezas especiales que no existen en catálogo, para que tu equipo vuelva a trabajar.",
    incluye: ["Repuestos descontinuados", "Piezas importadas difíciles de conseguir", "Piezas fuera de catálogo", "Desde una sola unidad"],
    foto: "/fotos/componentes-mecanicos.jpg",
  },
  {
    slug: "fixtures-poka-yoke",
    titulo: "Fixtures y dispositivos Poka-Yoke",
    resumen: "Dispositivos para facilitar el ensamble, mejorar la precisión y prevenir errores operativos.",
    descripcion:
      "Diseñamos y fabricamos fixtures, plantillas y dispositivos Poka-Yoke a la medida de tu línea: sujetan, posicionan y guían cada pieza para que el ensamble sea más rápido, más preciso y a prueba de errores.",
    incluye: ["Fixtures de ensamble y sujeción", "Plantillas de posicionamiento", "Dispositivos a prueba de errores", "Ajustes según tu proceso"],
    foto: "/fotos/planta-supervision.jpg",
  },
  {
    slug: "componentes-rigidos-y-flexibles",
    titulo: "Componentes rígidos y flexibles",
    resumen: "Piezas técnicas a medida con polímeros rígidos, cauchos y materiales compuestos.",
    descripcion:
      "Elegimos el material según lo que la pieza debe resistir: impacto, desgaste, químicos, temperatura o contacto con alimentos. Fabricamos componentes rígidos en polímeros técnicos y componentes flexibles en cauchos y elastómeros, en la dureza que tu aplicación necesita.",
    incluye: ["Polímeros técnicos rígidos", "Cauchos y elastómeros", "Materiales compuestos", "Dureza según la aplicación"],
    foto: "/fotos/piezas-blancas.jpg",
  },
  {
    slug: "poliuretano-colado",
    titulo: "Piezas de poliuretano colado",
    resumen: "Rodillos, ruedas, bujes, empaques, raspadores y más, colados a medida.",
    descripcion:
      "El poliuretano colado resiste mejor la abrasión, el corte y el impacto que muchos cauchos y plásticos, y se puede formular desde muy suave hasta muy duro. Lo colamos en moldes a la medida de tu pieza, y también podemos recubrir núcleos nuevos o existentes, como rodillos y ruedas.",
    incluye: ["Rodillos y ruedas", "Bujes, empaques y sellos", "Raspadores y amortiguadores", "Acoples y liners"],
    foto: "/fotos/piezas-polimero.jpg",
  },
  {
    slug: "maquinado-cnc",
    titulo: "Maquinado CNC",
    resumen: "Torneado, fresado, perforado y acabado de piezas de polímero y de moldes.",
    descripcion:
      "Maquinamos piezas de polímero con herramientas, velocidades y sujeción adecuadas para materiales que se deforman y se calientan. Agregamos agujeros, ranuras y perfiles después del colado, y maquinamos los moldes con los que fabricamos tus piezas.",
    incluye: ["Torneado y fresado", "Perforado y ranurado", "Acabado de piezas coladas", "Maquinado de moldes"],
    foto: "/fotos/maquinado.jpg",
  },
  {
    slug: "diseno-de-moldes",
    titulo: "Diseño y fabricación de moldes",
    resumen: "Moldes propios para tus piezas, incluidos moldes impresos en 3D para prototipos.",
    descripcion:
      "Diseñamos y fabricamos el molde de tu pieza para que cada unidad salga igual. Para prototipos y lotes pequeños usamos moldes impresos en 3D, más rápidos y económicos; para producción, moldes maquinados más duraderos.",
    incluye: ["Diseño del molde", "Moldes impresos en 3D para prototipos", "Moldes maquinados para producción", "Ajustes después de la primera pieza"],
    foto: "/fotos/robotica.jpg",
  },
];

export const escala = [
  { titulo: "Prototipo", texto: "Una primera pieza para probar forma, medida y material antes de producir." },
  { titulo: "Repuesto único", texto: "La pieza que necesitas para que tu máquina vuelva a trabajar, aunque sea solo una." },
  { titulo: "Lotes cortos", texto: "Decenas o cientos de piezas iguales para mantenimiento o reposición." },
  { titulo: "Producción en serie", texto: "Miles de unidades con molde propio y la misma calidad en cada pieza." },
];

export const pasos = [
  { titulo: "Nos compartes tu proyecto", texto: "Una fotografía, una muestra física, un plano técnico o un modelo CAD." },
  { titulo: "Evaluamos la pieza", texto: "Revisamos la geometría, la función y el material que mejor la resuelve." },
  { titulo: "Te enviamos una propuesta", texto: "Una propuesta a medida según la cantidad que necesitas." },
  { titulo: "Fabricamos y entregamos", texto: "Producimos tu pieza o tu lote y lo ajustamos si hace falta." },
];

// Escala de dureza Shore con objetos cotidianos, como referencia para elegir el material.
export const durezas = [
  { escala: "Shore OO", valor: "Muy suave", ejemplo: "Gomita o plantilla de gel" },
  { escala: "Shore A 40", valor: "Suave", ejemplo: "Liga de hule" },
  { escala: "Shore A 60", valor: "Media", ejemplo: "Borrador de lápiz" },
  { escala: "Shore A 80", valor: "Firme", ejemplo: "Banda de rodadura de una llanta" },
  { escala: "Shore A 95", valor: "Dura", ejemplo: "Rueda de carrito de supermercado" },
  { escala: "Shore D", valor: "Muy dura", ejemplo: "Casco de seguridad" },
];

export const industrias = [
  { titulo: "Alimentos y bebidas", texto: "Piezas para líneas de proceso y empaque, con materiales aptos para la aplicación." },
  { titulo: "Empaque", texto: "Rodillos, guías y piezas de desgaste para máquinas de empaque y etiquetado." },
  { titulo: "Metalmecánica", texto: "Componentes para prensas, troqueles y equipos de formado de metal." },
  { titulo: "Agroindustria", texto: "Piezas que resisten la intemperie, la abrasión y los químicos del campo." },
  { titulo: "Minería y canteras", texto: "Liners, raspadores y piezas de alto desgaste para equipos de proceso." },
  { titulo: "Automotriz y transporte", texto: "Bujes, amortiguadores y componentes a medida para flotas y talleres." },
  { titulo: "Automatización de procesos", texto: "Rodillos, topes y piezas para bandas y sistemas de manejo de material." },
  { titulo: "Fabricantes de equipo (OEM)", texto: "Componentes a medida para integrar en las máquinas que fabricas." },
];

export const tienePieza = [
  { id: "foto", label: "Una fotografía", frase: "una fotografía de la pieza" },
  { id: "muestra", label: "La pieza o una muestra", frase: "la pieza física o una muestra" },
  { id: "plano", label: "Un plano técnico", frase: "un plano técnico" },
  { id: "cad", label: "Un modelo CAD", frase: "un modelo CAD" },
];
