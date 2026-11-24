---
name: Plastikinesis
description: Ingeniería y fabricación de componentes técnicos a medida. De una pieza a miles de unidades.
colors:
  petroleo: "#191b27"
  petroleo-2: "#242737"
  grisaceo: "#dae1eb"
  niebla: "#f3f5f9"
  naranja: "#e6a666"
  rojo: "#d24220"
  rojo-hondo: "#b5361a"
  ink: "#191b27"
  acero: "#4f5668"
  blanco: "#ffffff"
typography:
  display:
    fontFamily: "Lexend, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Lexend, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Lexend, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.375
  lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  grid-gap: "20px"
  card: "28px"
  block: "48px"
  section: "80px"
  section-sm: "96px"
  container: "1280px"
components:
  button-whatsapp:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.blanco}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-whatsapp-hover:
    backgroundColor: "{colors.rojo-hondo}"
  button-llamar:
    backgroundColor: "{colors.petroleo}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-llamar-hover:
    backgroundColor: "{colors.petroleo-2}"
  button-llamar-oscuro:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.petroleo}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-llamar-oscuro-hover:
    backgroundColor: "{colors.grisaceo}"
  chip-pieza:
    textColor: "{colors.blanco}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "44px"
  chip-pieza-marcada:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.petroleo}"
  card-servicio:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.petroleo}"
    rounded: "{rounded.3xl}"
    padding: "28px"
  card-cierre:
    backgroundColor: "{colors.petroleo}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.3xl}"
    padding: "28px"
  card-niebla:
    backgroundColor: "{colors.niebla}"
    textColor: "{colors.ink}"
    rounded: "{rounded.3xl}"
    padding: "28px"
  input:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "12px 16px"
    height: "48px"
---

# Design System: Plastikinesis

## Overview

**Creative North Star: "El taller sobre petróleo"**

Plastikinesis se ve como un taller confiable puesto sobre el azul petróleo de su manual de marca: bandas oscuras con las ondas fluidas rojo-naranja de la marca abren y cierran cada página, y entre ellas el contenido respira sobre blanco y azul grisáceo claro. Las piezas reales (polímero, planta, robótica) hacen el trabajo de convencer; la interfaz solo las enmarca en tarjetas muy redondeadas, como en el brochure del cliente.

La densidad es media y directa, pensada para jefes de mantenimiento que revisan desde el celular en planta: titulares cortos en Lexend, texto en Inter con interlineado amplio, y las dos acciones de contacto (WhatsApp y Llamar) siempre del mismo tamaño y siempre visibles, en el encabezado, en el hero, en el cierre y en los botones flotantes. El mundo rechaza el sitio industrial genérico de stock gris, engranes y tres tarjetas iguales.

El color manda por bloques, no por adorno: petróleo para hero, bandas y pie; azul grisáceo para secciones alternas; rojo anaranjado solo para acciones y marcas de progreso; naranja cálido como acento secundario sobre oscuro.

**Key Characteristics:**
- Alternancia de bandas: petróleo con ondas, blanco, azul grisáceo, petróleo sólido.
- Píldoras para toda acción; tarjetas de 24px para todo contenedor.
- WhatsApp y Llamar como par de igual peso en cada punto de decisión.
- Fotos reales de piezas y planta en marcos redondeados, nunca íconos ilustrativos grandes.
- Logo oficial sin alterar, en versión oscura sobre claro y blanca sobre oscuro.

## Colors

Paleta oficial del manual de marca (cuatro colores) más tres derivados funcionales para estados y texto.

### Primary
- **Rojo anaranjado** (rojo): el color de la acción. Botón WhatsApp, botón flotante principal, números de pasos, íconos de servicio, enlace activo del menú, selección de texto y anillo de foco. Nunca como fondo de sección.
- **Rojo hondo** (rojo-hondo): derivado, no oficial. Hover de los botones rojos y color de los enlaces de texto sobre fondos claros («Ver servicio», «Ver todos»), donde el rojo oficial pierde contraste en tamaños pequeños.

### Secondary
- **Naranja cálido** (naranja): acento sobre petróleo. Las palabras destacadas del titular del hero («a medida»), el lema «Industria sin límite», los íconos del pie, el chip marcado del selector y el extremo cálido de los degradados de marca.

### Neutral
- **Azul petróleo oscuro** (petroleo / ink): fondo de hero, encabezados de página, banda de escala, tarjeta de cierre y pie; también el color de todo texto principal y titular sobre claro.
- **Petróleo 2** (petroleo-2): derivado, no oficial. Hover del botón Llamar oscuro.
- **Azul grisáceo claro** (grisaceo): fondo de secciones alternas, bordes (encabezado, anillos de tarjetas, campos), y texto secundario sobre petróleo.
- **Niebla** (niebla): derivado, no oficial. Fondo de tarjetas y bloques informativos dentro de secciones blancas (Contacto, Industrias, listas de servicio) y hover de los ítems del submenú.
- **Acero** (acero): texto secundario y de cuerpo sobre blanco y grisáceo; enlaces inactivos del menú.

### Named Rules
**The Manual Intacto Rule.** Los cuatro colores oficiales (#191B27, #DAE1EB, #E6A666, #D24220) no se alteran ni se sustituyen. Los derivados (rojo-hondo, petroleo-2, niebla, acero) existen solo para estados, texto y superficies de apoyo; nunca reemplazan a un oficial en su papel.

**The Rojo Es Acción Rule.** El rojo anaranjado marca lo que se toca o lo que avanza (botones, pasos, barras de escala). No se usa como fondo de banda ni como decoración.

## Typography

**Display Font:** Lexend (sustituto web de Quantify; fallback sans-serif)
**Body Font:** Inter (sustituto web de Helvetica Now; fallback sans-serif)

**Character:** Lexend da a los titulares una geometría ancha y técnica cercana a Quantify; Inter mantiene el texto neutro y legible como Helvetica Now. Ambas se cargan con `next/font/google` como variables `--font-lexend` y `--font-inter`.

### Hierarchy
- **Display** (700, 2.25rem en celular a 3.75rem en escritorio, 1.05, -0.02em): solo el titular del hero de inicio. El encabezado de páginas internas usa la misma voz a 2.25rem–3rem con interlineado 1.08.
- **Headline** (700, 1.875rem a 2.25rem, -0.01em): títulos de sección («Nuestros servicios», «Cómo trabajamos»). Siempre con `text-wrap: balance`.
- **Title** (600, 1.25rem, 1.375): títulos de tarjeta y de etapa; 1.125rem en pasos y elementos de lista.
- **Lead** (400, 1.125rem, 1.625): la bajada bajo cada titular, máximo ~42rem de ancho.
- **Body** (400, 1rem, 1.625): texto de tarjetas y listas; `text-wrap: pretty` en párrafos.
- **Label** (600, 0.875rem): botones compactos, etiquetas de formulario, chips, enlaces del menú (500, 0.95rem).

### Named Rules
**The Sustitución Declarada Rule.** Quantify y Helvetica Now no tienen archivos web; Lexend e Inter son sus sustitutos explícitos. Si el cliente entrega archivos web oficiales, se reemplazan las variables `--font-display` y `--font-sans` sin tocar la jerarquía.

**The Lexend Titula Rule.** Lexend solo para titulares, títulos de tarjeta, números de paso y el lema; todo lo demás en Inter.

## Layout

Contenedor centrado de 1280px con margen lateral de 16px en celular y 24px desde `sm`. Las secciones tienen 80px de padding vertical (96px desde `sm`); los encabezados de página interna, 64px (80px desde `sm`). Entre el bloque de titular de sección y su contenido hay 48px.

Las secciones alternan fondo de banda completa: hero petróleo con ondas, grisáceo, petróleo sólido, blanco, grisáceo, blanco; el cierre es una tarjeta petróleo con ondas de esquinas de 24px dentro del contenedor, no una banda. El hero usa una retícula de 12 columnas (7 texto, 5 foto) en escritorio; en celular la foto pasa debajo de las acciones en formato apaisado 16:10.

Las retículas de tarjetas van de 1 a 2 a 4 columnas con 20px de separación. Los encabezados de sección con enlace «Ver todos» alinean titular a la izquierda y enlace al pie, a la derecha.

**The Acción a la Mano Rule.** En cada vista hay un par WhatsApp/Llamar alcanzable: en el encabezado (escritorio), en el menú móvil, en el hero, en el cierre y en los botones flotantes fijos abajo a la derecha (Llamar 52px petróleo, WhatsApp 56px rojo).

## Elevation & Depth

El sistema es plano en reposo y separa por bloques de color y anillos de 1px en grisáceo. Las sombras son difusas, teñidas de petróleo o rojo, con desplazamiento negativo de propagación, y solo aparecen en elementos que flotan (submenú, botones flotantes, píldoras sobre la foto del hero) o como respuesta al hover de una tarjeta. La profundidad del hero y el cierre viene de la imagen de ondas de marca bajo un degradado petróleo de izquierda a derecha.

### Shadow Vocabulary
- **Flotante de acción** (`0 10px 24px -8px rgba(25,27,39,0.6)`; en rojo `rgba(210,66,32,0.7)`): botones flotantes.
- **Píldora sobre foto** (`0 12px 24px -10px rgba(25,27,39,0.6)`): píldoras rojas del hero.
- **Menú** (`0 20px 40px -16px rgba(25,27,39,0.35)`): submenú de Servicios, con anillo grisáceo.
- **Hover de tarjeta** (`0 24px 40px -24px rgba(25,27,39,0.35)`): tarjeta de servicio al pasar el cursor, junto con un desplazamiento de -4px.

### Named Rules
**The Plano Hasta Tocar Rule.** Tarjetas y secciones no llevan sombra en reposo; la sombra aparece al hover o en lo que flota sobre el contenido.

## Shapes

Formas redondeadas como en el brochure: 24px para toda tarjeta, foto, banda de cierre y bloque informativo; 16px para campos de formulario, ítems de lista y contenedores de ícono; 12px para ítems del submenú y la punta de las barras de escala; píldora completa para botones, chips, píldoras de etiqueta, números de paso y la regla de dureza. No hay esquinas rectas en elementos interactivos.

## Components

### Buttons
Rotundos y táctiles: píldoras de 48px de alto que se hunden un poco al presionarse.
- **Shape:** píldora completa (9999px), 48px de alto, 24px de padding lateral; 40px en el encabezado de escritorio.
- **WhatsApp (primario):** rojo con texto blanco, ícono de mensaje a 20px, Inter 600.
- **Llamar:** petróleo con texto blanco sobre fondos claros; blanco con texto petróleo sobre fondos oscuros. Muestra el número en tabular-nums desde `sm`.
- **Hover / Focus / Active:** el rojo pasa a rojo-hondo, el petróleo a petróleo-2, el blanco a grisáceo, en 150ms; `active` escala a 0.97; foco con contorno rojo de 2px y separación de 3px.
- **Enlace de texto:** rojo-hondo 600 con flecha; la separación crece de 8px a 12px al hover.

### Chips (selector «¿Qué tienes de tu pieza?»)
- **Style:** píldoras de 44px sobre petróleo, borde blanco al 25%, fondo blanco al 10%, texto blanco 0.875rem 500.
- **State:** al marcarse pasan a naranja con texto petróleo; hover a blanco al 20%; foco con anillo blanco de 2px. Debajo, una línea viva muestra el mensaje de WhatsApp que se enviará.

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** blanco con anillo grisáceo de 1px (servicio, sobre banda grisácea); niebla sin borde (bloques de Contacto e Industrias); petróleo para la tarjeta de cierre de la retícula («¿No ves tu pieza aquí?») con acción en naranja.
- **Shadow Strategy:** plano; ver Plano Hasta Tocar.
- **Internal Padding:** 28px.
- **Servicio:** ícono rojo de 24px en la misma línea que el título Lexend, resumen en acero y «Ver servicio» en rojo-hondo al pie; hover sube 4px y la flecha avanza 4px.

### Inputs / Fields
- **Style:** fondo blanco, borde grisáceo de 1px, 16px de radio, 48px de alto mínimo; etiquetas en 0.875rem 600 petróleo encima.
- **Focus:** borde rojo y anillo rojo al 20% de 2px, en 150ms.

### Navigation
- **Encabezado:** fijo arriba, blanco al 95% con desenfoque y borde inferior grisáceo; logo de 28–32px de alto. Enlaces Inter 500 en acero, activo y hover en rojo. Servicios abre un submenú de 320px en tarjeta de 16px.
- **Móvil:** botón de menú de 44px; el panel entra con un fade de 180ms y 4px; enlaces Lexend 600 de 48px con divisores niebla y el par Llamar/WhatsApp en dos columnas.
- **Pie:** petróleo con texto grisáceo, cuatro columnas, títulos Lexend en blanco, íconos en naranja.

### Encabezado de página (PageHeader)
Banda petróleo con las ondas de marca al 60% de opacidad bajo un degradado petróleo hacia la derecha; migas en grisáceo al 80%, titular Lexend 700 y bajada en grisáceo.

### Escala «De una pieza a miles»
Firma del sitio: cuatro barras con degradado rojo→naranja que crecen de prototipo a producción en serie, a lo ancho en celular y hacia arriba en escritorio, sobre banda petróleo con divisores blancos al 15%. La regla de dureza Shore reutiliza el mismo lenguaje: una píldora de 12px con degradado naranja→rojo→petróleo.

## Do's and Don'ts

### Do:
- **Do** usar el logo oficial del manual tal cual: versión oscura sobre fondos claros y versión blanca sobre petróleo, escalado solo por alto.
- **Do** mantener WhatsApp (rojo) y Llamar (petróleo o blanco) del mismo tamaño y lado a lado en cada punto de decisión.
- **Do** abrir las páginas internas con el encabezado petróleo de ondas y cerrarlas con la tarjeta de cierre de 24px.
- **Do** usar Lexend para titulares e Inter para texto, declarados como sustitutos de Quantify y Helvetica Now.
- **Do** redondear tarjetas y fotos a 24px y toda acción a píldora completa.
- **Do** usar rojo-hondo para enlaces de texto pequeños sobre claro.

### Don't:
- **Don't** aplicar al logo sombras, brillos, contornos, cambios de color, rotación, inclinación ni cambios de disposición, ni combinarlo con colores no autorizados.
- **Don't** modificar los cuatro colores oficiales ni crear nuevos tonos de marca más allá de los derivados de estado documentados.
- **Don't** usar rojo como fondo de banda o de sección.
- **Don't** usar fotos de stock gris genérico, engranes decorativos ni retículas de tres tarjetas iguales.
- **Don't** poner sombra a tarjetas en reposo.

## Modo oscuro e idiomas

- **Tema:** la clase `dark` en `<html>` activa el modo oscuro (`@custom-variant dark` en `globals.css`). Las superficies y textos usan tokens que cambian con el tema: `fondo`, `superficie`, `banda`, `tarjeta`, `texto`, `texto-2`, `borde`, `enlace` y `btn2`. Las bandas de marca en `petroleo` (hero, escala, pie, cierre) no cambian. El tema se guarda en `localStorage` ("tema") y, sin preferencia guardada, sigue al sistema. El logo usa la versión oscura en modo claro y la blanca en modo oscuro, siempre la oficial.
- **Idiomas:** el sitio vive en `/es` y `/en` (`src/app/[lang]`); todo el texto está en `src/data/content.js`. La raíz `/` redirige a `/es`.
- **Controles:** dos botones pequeños de 36px en la barra: ES/EN (lleva a la misma página en el otro idioma) y luna/sol.
- **Industrias:** ya no tienen página propia. Se muestran como mosaico de fotos con ícono y nombre; al pasar el cursor, enfocar o tocar, aparece la lista de piezas de ejemplo. Viven en Inicio y en Servicios, junto con el catálogo "Piezas que puedes mandar a hacer".
