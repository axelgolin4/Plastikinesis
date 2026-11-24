// Contenido del sitio en español e inglés. Las páginas piden el idioma con getContent(lang).

export const locales = ["es", "en"];
export const hasLocale = (lang) => locales.includes(lang);

export const contacto = {
  nombre: "Plastikinesis",
  responsable: "Jorge Castillo",
  telefono: "5544-7261",
  whatsapp: "50255447261",
  correo: "Plastikinesis@gmail.com",
};

export const telLink = () => `tel:+502${contacto.telefono.replace(/\D/g, "")}`;
export const whatsappLink = (mensaje) =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;

// Ruta con el prefijo de idioma: ruta("en", "/servicios") → "/en/servicios".
export const ruta = (lang, path = "/") => `/${lang}${path === "/" ? "" : path}`;

// Fotos e íconos compartidos por servicio e industria (no dependen del idioma).
const fotosServicio = {
  "ingenieria-inversa": "/fotos/piezas-polimero.jpg",
  "repuestos-y-piezas-especiales": "/fotos/componentes-mecanicos.jpg",
  "fixtures-poka-yoke": "/fotos/planta-supervision.jpg",
  "componentes-rigidos-y-flexibles": "/fotos/piezas-blancas.jpg",
  "poliuretano-colado": "/fotos/piezas-polimero.jpg",
  "maquinado-cnc": "/fotos/maquinado.jpg",
  "diseno-de-moldes": "/fotos/robotica.jpg",
};

const fotosIndustria = {
  alimentos: "/fotos/piezas-blancas.jpg",
  empaque: "/fotos/robotica.jpg",
  metalmecanica: "/fotos/maquinado.jpg",
  mineria: "/fotos/planta-supervision.jpg",
  automotriz: "/fotos/componentes-mecanicos.jpg",
  oem: "/fotos/piezas-polimero.jpg",
};

const es = {
  lang: "es",
  meta: {
    titulo: "Plastikinesis | Ingeniería y fabricación de componentes técnicos a medida",
    plantilla: "%s | Plastikinesis",
    descripcion:
      "Ingeniería inversa, repuestos, fixtures Poka-Yoke, piezas de poliuretano colado, maquinado CNC y moldes en Guatemala. De una pieza a miles de unidades.",
  },
  ui: {
    nav: [
      { href: "/", label: "Inicio" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/servicios", label: "Servicios" },
      { href: "/contacto", label: "Contacto" },
    ],
    llamar: "Llamar",
    whatsapp: "WhatsApp",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    cambiarIdioma: "View in English",
    modoOscuro: "Activar modo oscuro",
    modoClaro: "Activar modo claro",
    inicio: "Inicio",
    ruta: "Ruta",
    verServicio: "Ver servicio",
    verTodos: "Ver todos los servicios",
    escribenos: "Escríbenos",
    mensajeBase: "Hola, tengo un proyecto y quiero una propuesta de Plastikinesis.",
    pais: "Guatemala",
    contacto: "Contacto",
    navegacion: "Navegación",
    servicios: "Servicios",
    lema: "Industria sin límite",
    resumenMarca: "Ingeniería y fabricación de componentes técnicos a medida. De una pieza a miles de unidades.",
    derechos: "© 2026 Plastikinesis. Ingeniería y fabricación de componentes técnicos a medida.",
    diseno: "Diseño web:",
    llamarA: "Llamar a Plastikinesis",
    escribirA: "Escribir a Plastikinesis por WhatsApp",
  },
  picker: {
    pregunta: "¿Qué tienes de tu pieza?",
    opciones: [
      { id: "foto", label: "Una fotografía", frase: "una fotografía de la pieza" },
      { id: "muestra", label: "La pieza o una muestra", frase: "la pieza física o una muestra" },
      { id: "plano", label: "Un plano técnico", frase: "un plano técnico" },
      { id: "cad", label: "Un modelo CAD", frase: "un modelo CAD" },
    ],
    mensaje: (frase) => `Hola, tengo ${frase} y quiero una propuesta de Plastikinesis para fabricarla.`,
    vistaPrevia: (m) => `Tu mensaje dirá: «${m}»`,
    ayuda: "Marca una opción y el mensaje sale escrito.",
  },
  home: {
    titulo: "Ingeniería y fabricación de componentes técnicos",
    tituloAcento: "a medida",
    intro:
      "De una pieza a miles de unidades. Reproducimos, mejoramos y fabricamos las piezas de tu maquinaria en polímeros técnicos, cauchos y poliuretano.",
    fotoAlt: "Piezas técnicas de polímero blancas, negras y azules",
    pastillas: ["Materiales · Prototipos", "Lotes · Producción en serie"],
    serviciosTitulo: "Nuestros servicios",
    serviciosIntro:
      "Fabricamos componentes mecánicos mediante diseño, ingeniería inversa y producción especializada para mantener, reparar y optimizar maquinaria industrial.",
    noVesTitulo: "¿No ves tu pieza aquí?",
    noVesTexto: "Cuéntanos qué necesitas y te decimos si la podemos fabricar.",
    noVesMensaje: "Hola, necesito una pieza que no veo en sus servicios. ¿Me pueden ayudar?",
    escalaTitulo: "De una pieza a miles de unidades",
    escalaIntro:
      "Desde prototipos y repuestos individuales hasta lotes cortos y producción en serie, adaptamos cada proyecto a lo que tu planta necesita.",
    comoTitulo: "Cómo trabajamos",
    comoIntro: "Empiezas con lo que tengas de tu pieza. Nosotros hacemos el resto.",
    comoFotoAlt: "Técnico trabajando en una máquina fresadora",
    durezaTitulo: "¿Qué tan dura debe ser tu pieza?",
    durezaIntro:
      "Cada aplicación pide una dureza distinta. Como referencia general, así se compara la escala Shore con objetos de todos los días; al evaluar tu proyecto te recomendamos el material y la dureza adecuados.",
  },
  escala: [
    { titulo: "Prototipo", texto: "Una primera pieza para probar forma, medida y material antes de producir." },
    { titulo: "Repuesto único", texto: "La pieza que necesitas para que tu máquina vuelva a trabajar, aunque sea solo una." },
    { titulo: "Lotes cortos", texto: "Decenas o cientos de piezas iguales para mantenimiento o reposición." },
    { titulo: "Producción en serie", texto: "Miles de unidades con molde propio y la misma calidad en cada pieza." },
  ],
  pasos: [
    { titulo: "Nos compartes tu proyecto", texto: "Una fotografía, una muestra física, un plano técnico o un modelo CAD." },
    { titulo: "Evaluamos la pieza", texto: "Revisamos la geometría, la función y el material que mejor la resuelve." },
    { titulo: "Te enviamos una propuesta", texto: "Una propuesta a medida según la cantidad que necesitas." },
    { titulo: "Fabricamos y entregamos", texto: "Producimos tu pieza o tu lote y lo ajustamos si hace falta." },
  ],
  durezas: [
    { escala: "Shore 00", valor: "Muy suave", ejemplo: "Gomita o plantilla de gel" },
    { escala: "Shore A 40", valor: "Suave", ejemplo: "Liga de hule" },
    { escala: "Shore A 60", valor: "Media", ejemplo: "Borrador de lápiz" },
    { escala: "Shore A 80", valor: "Firme", ejemplo: "Banda de rodadura de una llanta" },
    { escala: "Shore A 95", valor: "Dura", ejemplo: "Rueda de carrito de supermercado" },
    { escala: "Shore D", valor: "Muy dura", ejemplo: "Casco de seguridad" },
  ],
  industriasBloque: {
    titulo: "Industrias y piezas que puedes pedir",
    intro: "Pasa el cursor o toca una industria para ver ejemplos de piezas que fabricamos a medida.",
    tocar: "Ver piezas",
  },
  industrias: [
    { id: "alimentos", titulo: "Alimentos y bebidas", piezas: ["Raspadores", "Guías de banda", "Rodillos", "Empaques y sellos", "Estrellas de transferencia", "Bujes"] },
    { id: "empaque", titulo: "Empaque y automatización", piezas: ["Rodillos de arrastre", "Topes y amortiguadores", "Guías y carriles", "Poleas", "Fixtures de ensamble"] },
    { id: "metalmecanica", titulo: "Metalmecánica", piezas: ["Almohadillas para troquel", "Pads de prensa", "Mordazas suaves", "Bujes", "Protectores de piezas"] },
    { id: "mineria", titulo: "Minería y agroindustria", piezas: ["Liners de desgaste", "Raspadores", "Rodillos", "Sellos", "Bujes y soportes"] },
    { id: "automotriz", titulo: "Automotriz y transporte", piezas: ["Bujes de suspensión", "Topes y amortiguadores", "Soportes", "Empaques", "Acoples"] },
    { id: "oem", titulo: "Fabricantes de equipo (OEM)", piezas: ["Ruedas y rodillos", "Acoples flexibles", "Engranes de polímero", "Carcasas", "Componentes a medida"] },
  ],
  catalogo: {
    titulo: "Piezas que puedes mandar a hacer",
    intro: "Algunos ejemplos de lo que fabricamos. Si tu pieza no está en la lista, igual podemos evaluarla.",
    piezas: [
      "Rodillos", "Ruedas", "Bujes", "Empaques y sellos", "Raspadores", "Amortiguadores", "Acoples",
      "Liners de desgaste", "Engranes de polímero", "Poleas", "Guías", "Topes", "Mordazas suaves",
      "Almohadillas para troquel", "Fixtures", "Dispositivos Poka-Yoke", "Carcasas", "Repuestos descontinuados",
    ],
  },
  servicios: [
    {
      slug: "ingenieria-inversa",
      titulo: "Ingeniería inversa y rediseño",
      resumen: "Reproducimos y mejoramos componentes a partir de muestras, planos o especificaciones.",
      descripcion:
        "Cuando una pieza ya no se fabrica o no tiene planos, partimos de lo que tienes: la pieza original, aunque esté dañada, una fotografía con medidas o una especificación. La medimos, levantamos su geometría y la reproducimos. Si la pieza fallaba por desgaste o por el material, la rediseñamos para que dure más en tu aplicación.",
      incluye: ["Medición y levantamiento de la pieza", "Modelo CAD de la pieza", "Mejora del material o la geometría", "Reproducción en polímero"],
    },
    {
      slug: "repuestos-y-piezas-especiales",
      titulo: "Repuestos y piezas especiales",
      resumen: "Piezas personalizadas, repuestos descontinuados o difíciles de conseguir.",
      descripcion:
        "Una máquina parada por una pieza que no se consigue cuesta más que la pieza. Fabricamos repuestos descontinuados, importados o difíciles de encontrar, y piezas especiales que no existen en catálogo, para que tu equipo vuelva a trabajar.",
      incluye: ["Repuestos descontinuados", "Piezas importadas difíciles de conseguir", "Piezas fuera de catálogo", "Desde una sola unidad"],
    },
    {
      slug: "fixtures-poka-yoke",
      titulo: "Fixtures y dispositivos Poka-Yoke",
      resumen: "Dispositivos para facilitar el ensamble, mejorar la precisión y prevenir errores operativos.",
      descripcion:
        "Diseñamos y fabricamos fixtures, plantillas y dispositivos Poka-Yoke a la medida de tu línea: sujetan, posicionan y guían cada pieza para que el ensamble sea más rápido, más preciso y a prueba de errores.",
      incluye: ["Fixtures de ensamble y sujeción", "Plantillas de posicionamiento", "Dispositivos a prueba de errores", "Ajustes según tu proceso"],
    },
    {
      slug: "componentes-rigidos-y-flexibles",
      titulo: "Componentes rígidos y flexibles",
      resumen: "Piezas técnicas a medida con polímeros rígidos, cauchos y materiales compuestos.",
      descripcion:
        "Elegimos el material según lo que la pieza debe resistir: impacto, desgaste, químicos, temperatura o contacto con alimentos. Fabricamos componentes rígidos en polímeros técnicos y componentes flexibles en cauchos y elastómeros, en la dureza que tu aplicación necesita.",
      incluye: ["Polímeros técnicos rígidos", "Cauchos y elastómeros", "Materiales compuestos", "Dureza según la aplicación"],
    },
    {
      slug: "poliuretano-colado",
      titulo: "Piezas de poliuretano colado",
      resumen: "Rodillos, ruedas, bujes, empaques, raspadores y más, colados a medida.",
      descripcion:
        "El poliuretano colado resiste mejor la abrasión, el corte y el impacto que muchos cauchos y plásticos, y se puede formular en distintas durezas. Lo colamos en moldes a la medida de tu pieza.",
      incluye: ["Rodillos y ruedas", "Bujes, empaques y sellos", "Raspadores y amortiguadores", "Acoples y liners"],
    },
    {
      slug: "maquinado-cnc",
      titulo: "Maquinado CNC",
      resumen: "Torneado, fresado, perforado y acabado de piezas de polímero y de moldes.",
      descripcion:
        "Maquinamos piezas de polímero con herramientas, velocidades y sujeción adecuadas para materiales que se deforman y se calientan. Agregamos agujeros, ranuras y perfiles después del colado, y maquinamos los moldes con los que fabricamos tus piezas.",
      incluye: ["Torneado y fresado", "Perforado y ranurado", "Acabado de piezas coladas", "Maquinado de moldes"],
    },
    {
      slug: "diseno-de-moldes",
      titulo: "Diseño y fabricación de moldes",
      resumen: "Moldes propios para tus piezas, incluidos moldes impresos en 3D para prototipos.",
      descripcion:
        "Diseñamos y fabricamos el molde de tu pieza para que cada unidad salga igual. Para prototipos y lotes pequeños usamos moldes impresos en 3D, más rápidos y económicos; para producción, moldes maquinados más duraderos.",
      incluye: ["Diseño del molde", "Moldes impresos en 3D para prototipos", "Moldes maquinados para producción", "Ajustes después de la primera pieza"],
    },
  ],
  serviciosPagina: {
    titulo: "Nuestros servicios",
    subtitulo: "Diseño, ingeniería inversa y fabricación especializada para mantener, reparar y optimizar tu maquinaria.",
    ctaMensaje: "Hola, tengo una pieza y no sé qué servicio necesito. ¿Me pueden orientar?",
  },
  servicioDetalle: {
    incluye: "Qué incluye",
    ctaTitulo: "Cuéntanos tu proyecto",
    ctaTexto: "Compártenos una fotografía, muestra física, plano técnico o modelo CAD y te enviamos una propuesta a medida.",
    mensaje: (t) => `Hola, me interesa el servicio de ${t}.`,
    otros: "Otros servicios",
  },
  nosotros: {
    titulo: "Industria sin límite",
    subtitulo: "Diseño mecánico, ingeniería de polímeros y fabricación personalizada de componentes.",
    enfoqueTitulo: "Un enfoque integral",
    enfoque: [
      "Nuestros clientes eligen Plastikinesis porque ayudamos a que sus proyectos avancen sin fricción. Desde Guatemala combinamos diseño mecánico, ingeniería de polímeros y fabricación propia, con un trato cercano en cada proyecto. El resultado son piezas confiables, versátiles y consistentes, como las necesita tu planta.",
      "Participamos en el diseño y desarrollo de cada pieza: elegimos el material, sea un polímero rígido, un caucho o un poliuretano, según la aplicación y el entorno donde va a trabajar. Así logramos mejores piezas, desarrollos más ágiles y una comunicación clara durante todo el proceso.",
      "Más allá de cada pieza, buscamos relaciones de largo plazo. Trabajar con nosotros es contar con un aliado técnico para mantener, reparar y mejorar tu maquinaria.",
    ],
    fotoAlt: "Piezas de polímero blancas fabricadas a medida",
    pilaresTitulo: "Nuestro enfoque",
    pilares: [
      { titulo: "Diseño mecánico", texto: "Levantamos, modelamos y rediseñamos cada pieza para su función real." },
      { titulo: "Ingeniería de polímeros", texto: "Elegimos el material y la dureza según lo que la pieza debe resistir." },
      { titulo: "Fabricación propia", texto: "Moldes, colado y maquinado para controlar cada paso del proceso." },
      { titulo: "A la medida", texto: "Cada proyecto se adapta a la cantidad que necesita tu planta." },
    ],
  },
  cta: {
    titulo: "¿Tienes un proyecto?",
    texto:
      "Compártenos una fotografía, muestra física, plano técnico o modelo CAD. Evaluamos tu proyecto y te enviamos una propuesta a medida.",
  },
  contactoPagina: {
    titulo: "¿Tienes un proyecto?",
    subtitulo:
      "Compártenos una fotografía, muestra física, plano técnico o modelo CAD para evaluar tu proyecto y desarrollar una propuesta a medida.",
    datos: { contacto: "Contacto", whatsapp: "WhatsApp", telefono: "Teléfono", correo: "Correo", ubicacion: "Ubicación" },
  },
  form: {
    titulo: "Envíanos tu proyecto",
    intro: "Llena estos datos y el mensaje sale listo en WhatsApp. Ahí mismo puedes adjuntar fotos, planos o archivos CAD.",
    nombre: "Nombre",
    empresa: "Empresa (opcional)",
    telefono: "Teléfono",
    cantidad: "Cantidad",
    cantidades: ["Una pieza", "Prototipo", "Lote corto", "Producción en serie"],
    servicio: "Qué necesitas",
    noSeguro: "No estoy seguro",
    tengo: "Qué tienes de tu pieza",
    describe: "Describe la pieza o el problema",
    enviar: "Enviar por WhatsApp",
    armar: ({ nombre, empresa, servicio, cantidad, tengo, mensaje, telefono }) =>
      [
        `Hola, soy ${nombre}${empresa ? ` de ${empresa}` : ""}.`,
        `Necesito: ${servicio}. Cantidad aproximada: ${cantidad}.`,
        `Tengo: ${tengo}.`,
        mensaje,
        `Mi teléfono: ${telefono}`,
      ]
        .filter(Boolean)
        .join("\n"),
  },
};

const en = {
  lang: "en",
  meta: {
    titulo: "Plastikinesis | Engineering and manufacturing of custom technical components",
    plantilla: "%s | Plastikinesis",
    descripcion:
      "Reverse engineering, spare parts, Poka-Yoke fixtures, cast polyurethane parts, CNC machining and molds in Guatemala. From one part to thousands of units.",
  },
  ui: {
    nav: [
      { href: "/", label: "Home" },
      { href: "/nosotros", label: "About" },
      { href: "/servicios", label: "Services" },
      { href: "/contacto", label: "Contact" },
    ],
    llamar: "Call",
    whatsapp: "WhatsApp",
    abrirMenu: "Open menu",
    cerrarMenu: "Close menu",
    cambiarIdioma: "Ver en español",
    modoOscuro: "Switch to dark mode",
    modoClaro: "Switch to light mode",
    inicio: "Home",
    ruta: "Breadcrumb",
    verServicio: "View service",
    verTodos: "View all services",
    escribenos: "Message us",
    mensajeBase: "Hi, I have a project and would like a quote from Plastikinesis.",
    pais: "Guatemala",
    contacto: "Contact",
    navegacion: "Navigation",
    servicios: "Services",
    lema: "Industry without limits",
    resumenMarca: "Engineering and manufacturing of custom technical components. From one part to thousands of units.",
    derechos: "© 2026 Plastikinesis. Engineering and manufacturing of custom technical components.",
    diseno: "Web design:",
    llamarA: "Call Plastikinesis",
    escribirA: "Message Plastikinesis on WhatsApp",
  },
  picker: {
    pregunta: "What do you have of your part?",
    opciones: [
      { id: "foto", label: "A photo", frase: "a photo of the part" },
      { id: "muestra", label: "The part or a sample", frase: "the physical part or a sample" },
      { id: "plano", label: "A technical drawing", frase: "a technical drawing" },
      { id: "cad", label: "A CAD model", frase: "a CAD model" },
    ],
    mensaje: (frase) => `Hi, I have ${frase} and would like a quote from Plastikinesis to manufacture it.`,
    vistaPrevia: (m) => `Your message will read: “${m}”`,
    ayuda: "Pick an option and the message is written for you.",
  },
  home: {
    titulo: "Engineering and manufacturing of",
    tituloAcento: "custom technical components",
    intro:
      "From one part to thousands of units. We reproduce, improve and manufacture the parts of your machinery in technical polymers, rubbers and polyurethane.",
    fotoAlt: "White, black and blue technical polymer parts",
    pastillas: ["Materials · Prototypes", "Batches · Series production"],
    serviciosTitulo: "Our services",
    serviciosIntro:
      "We manufacture mechanical components through design, reverse engineering and specialized production to maintain, repair and optimize industrial machinery.",
    noVesTitulo: "Don't see your part here?",
    noVesTexto: "Tell us what you need and we'll let you know if we can make it.",
    noVesMensaje: "Hi, I need a part I don't see in your services. Can you help me?",
    escalaTitulo: "From one part to thousands of units",
    escalaIntro:
      "From prototypes and single spare parts to short batches and series production, we adapt every project to what your plant needs.",
    comoTitulo: "How we work",
    comoIntro: "Start with whatever you have of your part. We take care of the rest.",
    comoFotoAlt: "Technician working on a milling machine",
    durezaTitulo: "How hard should your part be?",
    durezaIntro:
      "Every application calls for a different hardness. As a general reference, this is how the Shore scale compares to everyday objects; when we evaluate your project we recommend the right material and hardness.",
  },
  escala: [
    { titulo: "Prototype", texto: "A first part to test shape, size and material before production." },
    { titulo: "Single spare part", texto: "The part you need to get your machine running again, even if it's just one." },
    { titulo: "Short batches", texto: "Tens or hundreds of identical parts for maintenance or replacement." },
    { titulo: "Series production", texto: "Thousands of units with a dedicated mold and the same quality in every part." },
  ],
  pasos: [
    { titulo: "Share your project", texto: "A photo, a physical sample, a technical drawing or a CAD model." },
    { titulo: "We evaluate the part", texto: "We review its geometry, its function and the material that best solves it." },
    { titulo: "We send you a quote", texto: "A tailored proposal based on the quantity you need." },
    { titulo: "We manufacture and deliver", texto: "We produce your part or batch and adjust it if needed." },
  ],
  durezas: [
    { escala: "Shore 00", valor: "Very soft", ejemplo: "Gummy candy or gel insole" },
    { escala: "Shore A 40", valor: "Soft", ejemplo: "Rubber band" },
    { escala: "Shore A 60", valor: "Medium", ejemplo: "Pencil eraser" },
    { escala: "Shore A 80", valor: "Firm", ejemplo: "Tire tread" },
    { escala: "Shore A 95", valor: "Hard", ejemplo: "Shopping cart wheel" },
    { escala: "Shore D", valor: "Very hard", ejemplo: "Hard hat" },
  ],
  industriasBloque: {
    titulo: "Industries and parts you can order",
    intro: "Hover or tap an industry to see examples of the custom parts we manufacture.",
    tocar: "See parts",
  },
  industrias: [
    { id: "alimentos", titulo: "Food and beverage", piezas: ["Scrapers", "Belt guides", "Rollers", "Gaskets and seals", "Transfer star wheels", "Bushings"] },
    { id: "empaque", titulo: "Packaging and automation", piezas: ["Drive rollers", "Bumpers and stops", "Guides and rails", "Pulleys", "Assembly fixtures"] },
    { id: "metalmecanica", titulo: "Metalworking", piezas: ["Die pads", "Press pads", "Soft jaws", "Bushings", "Part protectors"] },
    { id: "mineria", titulo: "Mining and agribusiness", piezas: ["Wear liners", "Scrapers", "Rollers", "Seals", "Bushings and mounts"] },
    { id: "automotriz", titulo: "Automotive and transport", piezas: ["Suspension bushings", "Bumpers and shock absorbers", "Mounts", "Gaskets", "Couplings"] },
    { id: "oem", titulo: "Equipment manufacturers (OEM)", piezas: ["Wheels and rollers", "Flexible couplings", "Polymer gears", "Housings", "Custom components"] },
  ],
  catalogo: {
    titulo: "Parts you can have made",
    intro: "A few examples of what we manufacture. If your part isn't on the list, we can still evaluate it.",
    piezas: [
      "Rollers", "Wheels", "Bushings", "Gaskets and seals", "Scrapers", "Shock absorbers", "Couplings",
      "Wear liners", "Polymer gears", "Pulleys", "Guides", "Bumpers", "Soft jaws", "Die pads", "Fixtures",
      "Poka-Yoke devices", "Housings", "Discontinued spare parts",
    ],
  },
  servicios: [
    {
      slug: "ingenieria-inversa",
      titulo: "Reverse engineering and redesign",
      resumen: "We reproduce and improve components from samples, drawings or specifications.",
      descripcion:
        "When a part is no longer made or has no drawings, we start from what you have: the original part, even if it's damaged, a photo with measurements or a specification. We measure it, capture its geometry and reproduce it. If the part failed because of wear or material, we redesign it to last longer in your application.",
      incluye: ["Measuring and surveying the part", "CAD model of the part", "Improved material or geometry", "Reproduction in polymer"],
    },
    {
      slug: "repuestos-y-piezas-especiales",
      titulo: "Spare parts and special parts",
      resumen: "Custom parts and discontinued or hard-to-find spare parts.",
      descripcion:
        "A machine stopped by a part you can't find costs more than the part. We manufacture discontinued, imported or hard-to-find spare parts, and special parts that don't exist in any catalog, so your equipment gets back to work.",
      incluye: ["Discontinued spare parts", "Hard-to-find imported parts", "Off-catalog parts", "From a single unit"],
    },
    {
      slug: "fixtures-poka-yoke",
      titulo: "Fixtures and Poka-Yoke devices",
      resumen: "Devices that make assembly easier, improve precision and prevent operating errors.",
      descripcion:
        "We design and build fixtures, jigs and Poka-Yoke devices tailored to your line: they hold, position and guide every part so assembly is faster, more precise and error-proof.",
      incluye: ["Assembly and holding fixtures", "Positioning jigs", "Error-proofing devices", "Adjustments for your process"],
    },
    {
      slug: "componentes-rigidos-y-flexibles",
      titulo: "Rigid and flexible components",
      resumen: "Custom technical parts in rigid polymers, rubbers and composite materials.",
      descripcion:
        "We choose the material for what the part has to withstand: impact, wear, chemicals, temperature or contact with food. We make rigid components in technical polymers and flexible components in rubbers and elastomers, in the hardness your application needs.",
      incluye: ["Rigid technical polymers", "Rubbers and elastomers", "Composite materials", "Hardness for the application"],
    },
    {
      slug: "poliuretano-colado",
      titulo: "Cast polyurethane parts",
      resumen: "Rollers, wheels, bushings, gaskets, scrapers and more, cast to order.",
      descripcion:
        "Cast polyurethane resists abrasion, cutting and impact better than many rubbers and plastics, and it can be formulated in different hardnesses. We cast it in molds made to fit your part.",
      incluye: ["Rollers and wheels", "Bushings, gaskets and seals", "Scrapers and shock absorbers", "Couplings and liners"],
    },
    {
      slug: "maquinado-cnc",
      titulo: "CNC machining",
      resumen: "Turning, milling, drilling and finishing of polymer parts and molds.",
      descripcion:
        "We machine polymer parts with the right tools, speeds and fixturing for materials that deflect and heat up. We add holes, slots and profiles after casting, and we machine the molds we use to make your parts.",
      incluye: ["Turning and milling", "Drilling and slotting", "Finishing of cast parts", "Mold machining"],
    },
    {
      slug: "diseno-de-moldes",
      titulo: "Mold design and manufacturing",
      resumen: "Dedicated molds for your parts, including 3D-printed molds for prototypes.",
      descripcion:
        "We design and build the mold for your part so every unit comes out the same. For prototypes and small batches we use 3D-printed molds, which are faster and more affordable; for production, longer-lasting machined molds.",
      incluye: ["Mold design", "3D-printed molds for prototypes", "Machined molds for production", "Adjustments after the first part"],
    },
  ],
  serviciosPagina: {
    titulo: "Our services",
    subtitulo: "Design, reverse engineering and specialized manufacturing to maintain, repair and optimize your machinery.",
    ctaMensaje: "Hi, I have a part and I'm not sure which service I need. Can you help me?",
  },
  servicioDetalle: {
    incluye: "What's included",
    ctaTitulo: "Tell us about your project",
    ctaTexto: "Share a photo, physical sample, technical drawing or CAD model and we'll send you a tailored proposal.",
    mensaje: (t) => `Hi, I'm interested in your ${t} service.`,
    otros: "Other services",
  },
  nosotros: {
    titulo: "Industry without limits",
    subtitulo: "Mechanical design, polymer engineering and custom component manufacturing.",
    enfoqueTitulo: "A holistic approach",
    enfoque: [
      "Our customers choose Plastikinesis because we help their projects move forward without friction. From Guatemala we combine mechanical design, polymer engineering and in-house manufacturing, with a close, personal approach to every project. The result is parts that are reliable, versatile and consistent, the way your plant needs them.",
      "We take part in the design and development of every part: we choose the material, whether a rigid polymer, a rubber or a polyurethane, based on the application and the environment it will work in. That means better parts, faster development and clear communication throughout the process.",
      "Beyond each part, we look for long-term relationships. Working with us means having a technical partner to maintain, repair and improve your machinery.",
    ],
    fotoAlt: "Custom-made white polymer parts",
    pilaresTitulo: "What drives us",
    pilares: [
      { titulo: "Mechanical design", texto: "We survey, model and redesign every part for its real function." },
      { titulo: "Polymer engineering", texto: "We choose the material and hardness for what the part must withstand." },
      { titulo: "In-house manufacturing", texto: "Molds, casting and machining to control every step of the process." },
      { titulo: "Made to fit", texto: "Every project adapts to the quantity your plant needs." },
    ],
  },
  cta: {
    titulo: "Have a project?",
    texto:
      "Share a photo, physical sample, technical drawing or CAD model. We evaluate your project and send you a tailored proposal.",
  },
  contactoPagina: {
    titulo: "Have a project?",
    subtitulo:
      "Share a photo, physical sample, technical drawing or CAD model so we can evaluate your project and prepare a tailored proposal.",
    datos: { contacto: "Contact", whatsapp: "WhatsApp", telefono: "Phone", correo: "Email", ubicacion: "Location" },
  },
  form: {
    titulo: "Send us your project",
    intro: "Fill in these details and the message is ready in WhatsApp. You can attach photos, drawings or CAD files right there.",
    nombre: "Name",
    empresa: "Company (optional)",
    telefono: "Phone",
    cantidad: "Quantity",
    cantidades: ["One part", "Prototype", "Short batch", "Series production"],
    servicio: "What you need",
    noSeguro: "I'm not sure",
    tengo: "What you have of your part",
    describe: "Describe the part or the problem",
    enviar: "Send via WhatsApp",
    armar: ({ nombre, empresa, servicio, cantidad, tengo, mensaje, telefono }) =>
      [
        `Hi, I'm ${nombre}${empresa ? ` from ${empresa}` : ""}.`,
        `I need: ${servicio}. Approximate quantity: ${cantidad}.`,
        `I have: ${tengo}.`,
        mensaje,
        `My phone: ${telefono}`,
      ]
        .filter(Boolean)
        .join("\n"),
  },
};

const contenidos = { es, en };

export function getContent(lang) {
  const c = contenidos[lang] ?? es;
  return {
    ...c,
    servicios: c.servicios.map((s) => ({ ...s, foto: fotosServicio[s.slug] })),
    industrias: c.industrias.map((i) => ({ ...i, foto: fotosIndustria[i.id] })),
  };
}
