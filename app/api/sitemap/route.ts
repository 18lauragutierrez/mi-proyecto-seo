import { NextResponse } from 'next/server';

const BASE_URL = "https://mi-proyecto-seo-1-nd99.onrender.com";

// --- SIMULACIÓN DE UNA BASE DE DATOS O CMS ---
// Esta función simula una llamada a tu backend para obtener datos dinámicos
async function fetchRutasDesdeCMS() {
  // En un proyecto real, aquí harías un fetch() a tu API o base de datos.
  // Por ejemplo: await fetch('https://mi-cms.com/api/posts')
  return [
    { slug: 'que-es-el-seo' },
    { slug: 'optimizacion-en-nextjs' },
    { slug: 'guia-de-lazy-loading' }
  ];
}

export async function GET() {
  // 1. Definimos las rutas estáticas base que ya conocemos
  const rutasEstaticas = ["/", "/blog", "/contacto"];

  // 2. Obtenemos las rutas dinámicas consultando nuestro "CMS/Base de Datos"
  const posts = await fetchRutasDesdeCMS();
  const rutasDinamicas = posts.map(post => `/blog/${post.slug}`);

  // 3. Juntamos todas las rutas en un solo arreglo
  const todasLasRutas = [...rutasEstaticas, ...rutasDinamicas];

  // 4. Generamos la estructura XML del Sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${todasLasRutas
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("\n    ")}
  </urlset>`;

  // 5. Devolvemos el XML con las cabeceras correctas
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
