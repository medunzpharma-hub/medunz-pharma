"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-green-500 text-white">

      {/* FONDO MEDUSA */}
      <div className="absolute left-0 top-0 h-full w-1/2 opacity-10 flex items-center justify-center">
        <Image src="/logo.png" alt="bg" width={600} height={600} />
      </div>

      {/* CONTENIDO */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">

        <div className="hidden md:block w-1/2"></div>

        <div className="w-full md:w-1/2 text-center md:text-left">

          {/* LOGO MEJORADO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start mb-6"
          >
            <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Image
                src="/logo.png"
                alt="Medunz Pharma"
                width={80}
                height={80}
              />
            </div>
          </motion.div>

          {/* TITULO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            MEDUNZ <span className="text-green-400">PHARMA</span>
          </motion.h1>

          {/* SUBTITULO */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-lg opacity-90"
          >
            Distribuidora de medicamentos con calidad garantizada y entrega rápida.
          </motion.p>

          {/* BENEFICIOS */}
          <div className="space-y-4 mb-8">

            {[
              "Calidad garantizada",
              "Entrega rápida",
              "Atención profesional",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.2 }}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  ✓
                </span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 flex-wrap justify-center md:justify-start"
          >
            <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Solicitar pedido
            </button>

            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition">
              Contactar
            </button>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 text-center pb-10 text-sm opacity-90"
      >
        Venta al por mayor y menor | Cobertura regional | Entrega rápida
      </motion.div>

    </main>
  );
}