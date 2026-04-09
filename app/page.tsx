import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-green-500 text-white">

      {/* BACKGROUND MEDUSA GRANDE */}
      <div className="absolute left-0 top-0 h-full w-1/2 opacity-10 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="bg"
          width={600}
          height={600}
        />
      </div>

      {/* CONTENIDO */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">

        {/* IZQUIERDA (vacío para balance visual en desktop) */}
        <div className="hidden md:block w-1/2"></div>

        {/* DERECHA (contenido principal) */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start mb-6">
            <Image
              src="/logo.png"
              alt="Medunz Pharma"
              width={80}
              height={80}
            />
          </div>

          {/* TITULO */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            MEDUNZ <span className="text-green-400">PHARMA</span>
          </h1>

          {/* SUBTITULO */}
          <p className="mb-8 text-lg opacity-90">
            Distribuidora de medicamentos con calidad garantizada y entrega rápida.
          </p>

          {/* BENEFICIOS */}
          <div className="space-y-4 mb-8">

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">✓</span>
              <p>Calidad garantizada</p>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">✓</span>
              <p>Entrega rápida</p>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">✓</span>
              <p>Atención profesional</p>
            </div>

          </div>

          {/* BOTONES */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Solicitar pedido
            </button>

            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition">
              Contactar
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER INFO */}
      <div className="relative z-10 text-center pb-10 text-sm opacity-90">
        Venta al por mayor y menor | Cobertura regional | Entrega rápida
      </div>

    </main>
  );
}