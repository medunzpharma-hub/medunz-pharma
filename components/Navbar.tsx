"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicios", "contacto"];
      const scrollY = window.scrollY + 120;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          if (
            scrollY >= el.offsetTop &&
            scrollY < el.offsetTop + el.offsetHeight
          ) {
            setActive(section);
          }
        }
      }

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section: string) =>
    `block py-2 ${
      active === section
        ? "text-green-400 font-semibold"
        : "text-white hover:text-green-400"
    }`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "bg-blue-900/80 backdrop-blur-lg shadow-lg"
          : "bg-white/10 backdrop-blur-md"
      } border-b border-white/20`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-xl">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </div>

          <span className="font-bold text-white text-lg">
            MEDUNZ <span className="text-green-400">PHARMA</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#inicio" className={linkClass("inicio")}>Inicio</a>
          <a href="#servicios" className={linkClass("servicios")}>Servicios</a>
          <a href="#contacto" className={linkClass("contacto")}>Contacto</a>

          <a
            href="#contacto"
            className="bg-green-500 px-5 py-2 rounded-lg font-semibold hover:bg-green-400"
          >
            Pedidos
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-lg px-6 py-4 space-y-2">
          <a href="#inicio" onClick={() => setOpen(false)} className={linkClass("inicio")}>Inicio</a>
          <a href="#servicios" onClick={() => setOpen(false)} className={linkClass("servicios")}>Servicios</a>
          <a href="#contacto" onClick={() => setOpen(false)} className={linkClass("contacto")}>Contacto</a>

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block bg-green-500 text-center py-2 rounded-lg font-semibold mt-2"
          >
            Pedidos
          </a>
        </div>
      )}
    </motion.nav>
  );
}