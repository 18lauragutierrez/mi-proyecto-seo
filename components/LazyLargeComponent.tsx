"use client";

import dynamic from 'next/dynamic';

// Al usar "use client", podemos usar ssr: false para forzar la carga solo en el navegador
const DynamicComponent = dynamic(() => import('./LargeComponent'), { 
  ssr: false,
  loading: () => <p className="mt-8 p-6 text-zinc-500 animate-pulse text-center w-full">Cargando componente pesado...</p> 
});

export default function LazyLargeComponent() {
  return <DynamicComponent />;
}
