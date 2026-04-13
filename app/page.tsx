"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-green-500 text-white pt-20 overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* GLOW BACKGROUND */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-green-400 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-400 opacity-20 blur-[120px] rounded-full"></div>

      {/* FONDO DECORATIVO */}
      <div className="absolute left-0 top-0 h-full w-1/2 opacity-10 flex items-center justify-center pointer-events-none -z-10">
        <Image src="/logo.png" alt="bg" width={600} height={600} />
      </div>

      {/* HERO */}
      <section
        id="inicio"
        className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-20 max-w-7xl mx-auto scroll-mt-24"
      >

        {/* ESPACIO IZQUIERDO */}
        <div className="hidden md:block w-1/2"></div>

        {/* CONTENIDO */}
        <div className="w-full md:w-1/2">

          {/* GLASS CARD */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl text-center md:text-left">

            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-start mb-6"
            >
              <div className="bg-white p-2 rounded-xl shadow-md">
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
              <button className="bg-gradient-to-r from-green-400 to-green-500 text-blue-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-green-400/50 transition">
                Solicitar pedido
              </button>

              <button className="border border-white/30 px-6 py-3 rounded-xl font-semibold backdrop-blur-md hover:bg-white hover:text-blue-900 transition">
                Contactar
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <div id="servicios" className="scroll-mt-24 relative z-10">
        <Services />
      </div>

      {/* TESTIMONIOS */}
	<div id="contacto" className="scroll-mt-24 relative z-10">
		<Testimonials />
	</div>

      {/* CONTACTO */}
      <div id="contacto" className="scroll-mt-24 relative z-10">
        <Contact />
      </div>

      {/* WHATSAPP */}
      <WhatsAppButton />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}