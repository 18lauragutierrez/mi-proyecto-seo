import type { Metadata } from 'next';
import Image from 'next/image';
import LazyLargeComponent from '../components/LazyLargeComponent';

export const metadata: Metadata = {
  title: 'Mi Sitio Optimizado - Home',
  description: 'Aprende sobre optimización SEO y rendimiento en Next.js.',
  keywords: ['Next.js', 'SEO', 'optimización web'],
  verification: {
    google: 'AZurR9wL23TclSBC9IiKZFjJOyNhNPiXXL-eYYXTUtg',
  },
  openGraph: {
    title: 'Mi Sitio Optimizado',
    description: 'Descubre técnicas avanzadas para mejorar tu web con Next.js.',
    images: ['/images/seo-image.png'],
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen p-8">
      <main className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left py-16 px-12 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-3xl w-full border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Bienvenido a mi página optimizada
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Aprende cómo mejorar el rendimiento y SEO en Next.js.
        </p>

        <div className="w-full mt-6 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm flex justify-center bg-black">
          <Image
            src="/images/seo-image.png"
            width={800}
            height={400}
            alt="Ejemplo de imagen optimizada"
            priority
            className="object-cover"
          />
        </div>

        {/* Componente cargado perezosamente envuelto en un Client Component */}
        <LazyLargeComponent />
      </main>
    </div>
  );
}
