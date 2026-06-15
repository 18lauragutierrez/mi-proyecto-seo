import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contacto - Hablemos de tu Proyecto',
  description: '¿Necesitas ayuda con el SEO de tu web? Contáctanos y optimicemos juntos tu aplicación para alcanzar los primeros resultados de Google.',
  openGraph: {
    title: 'Contacto - Hablemos de tu Proyecto',
    description: 'Escríbenos para llevar el rendimiento y el SEO de tu sitio web al siguiente nivel.',
    type: 'website',
  },
};

export default function Contacto() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen p-8">
      <main className="flex flex-col items-center gap-6 text-center py-16 px-12 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-2xl w-full border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Contáctanos
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Estamos aquí para ayudarte a mejorar tu posicionamiento y desarrollo.
        </p>
        <Link href="/" className="mt-8 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
          Volver al Inicio
        </Link>
      </main>
    </div>
  );
}
