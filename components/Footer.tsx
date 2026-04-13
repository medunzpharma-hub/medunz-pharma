"use client";

import Image from "next/image";

export default function Footer() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LOGO */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-2 rounded-xl">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
            </div>

            <span className="font-bold text-lg">
              MEDUNZ <span className="text-green-400">PHARMA</span>
            </span>
          </div>

          <p className="text-sm text-gray-300">
            Distribución farmacéutica confiable con productos de calidad garantizada.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Enlaces</h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <button onClick={() => scrollToSection("inicio")} className="hover:text-green-400">
                Inicio
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("servicios")} className="hover:text-green-400">
                Servicios
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("contacto")} className="hover:text-green-400">
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 Cochabamba, Bolivia</li>
            <li>📞 +591 60789790</li>
            <li>✉️ medunz.pharma@gmail.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} GHOST Web & Software Designer
      </div>

    </footer>
  );
}