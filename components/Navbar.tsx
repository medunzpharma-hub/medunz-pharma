"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO + NOMBRE */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-xl shadow-md">
            <Image
              src="/logo.png"
              alt="Medunz Pharma"
              width={40}
              height={40}
            />
          </div>

          <span className="font-bold text-white text-lg tracking-wide">
            MEDUNZ <span className="text-green-400">PHARMA</span>
          </span>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm">

          <a href="#" className="hover:text-green-400 transition">
            Inicio
          </a>

          <a href="#" className="hover:text-green-400 transition">
            Servicios
          </a>

          <a href="#" className="hover:text-green-400 transition">
            Contacto
          </a>

          {/* BOTÓN */}
          <button className="bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition">
            Pedidos
          </button>

        </div>
      </div>
    </motion.nav>
  );
}