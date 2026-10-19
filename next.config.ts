import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" }, // Evita Clickjacking
  { key: "X-Content-Type-Options", value: "nosniff" }, // Previene MIME-sniffing
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
];

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // Idiomas: el castellano se sirve sin prefijo (/contacto) y el catalán bajo /ca (/ca/contacto).
  // Internamente todas las páginas viven en app/[locale], así que reescribimos las URLs sin prefijo
  // a /es y evitamos que /es/... quede duplicado redirigiéndolo a la URL sin prefijo.
  async redirects() {
    return [{ source: "/es/:path*", destination: "/:path*", permanent: true }];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      // afterFiles: se aplican después de comprobar public/ y las rutas de API, para no romper el PDF, el logo, etc.
      afterFiles: [
        { source: "/", destination: "/es" },
        { source: "/:path((?!ca(?:/|$)|es(?:/|$)|api(?:/|$)|_next/).+)", destination: "/es/:path" },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
