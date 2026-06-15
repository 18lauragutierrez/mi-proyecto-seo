import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog SEO - Estrategias y Novedades',
  description: 'Descubre los mejores artículos sobre optimización en buscadores, desarrollo web y rendimiento usando Next.js.',
  openGraph: {
    title: 'Blog SEO - Estrategias y Novedades',
    description: 'Aprende las últimas tendencias de SEO y desarrollo web para posicionar tu sitio en el número 1.',
    type: 'website',
  },
};

export default function Blog() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen p-8">
      <main className="flex flex-col items-center gap-6 text-center py-16 px-12 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-2xl w-full border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Nuestro Blog
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Últimas noticias, guías y estrategias sobre optimización SEO.
        </p>
        <Link href="/" className="mt-8 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
          Volver al Inicio
        </Link>
      </main>
    </div>
  );
}
