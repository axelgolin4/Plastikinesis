/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // El sitio vive en /es y /en; las rutas sin idioma van a español.
  async redirects() {
    return [
      { source: "/", destination: "/es", permanent: false },
      { source: "/industrias", destination: "/es/servicios", permanent: true },
      { source: "/:pagina(nosotros|servicios|contacto)", destination: "/es/:pagina", permanent: true },
      { source: "/servicios/:slug", destination: "/es/servicios/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
