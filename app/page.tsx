export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-green-500 text-white">
      
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Medunz Pharma"
          className="w-32 h-32 mb-6"
        />

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Medunz Pharma
        </h1>

        {/* SUBTITLE */}
        <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-90">
          Distribución farmacéutica confiable, rápida y profesional.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Solicitar pedido
          </button>

          <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition">
            Contactar
          </button>
        </div>
      </section>

    </main>
  );
}