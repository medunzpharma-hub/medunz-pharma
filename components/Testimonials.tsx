"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Farmacia Central",
    text: "Excelente servicio, entregas rápidas y productos de calidad. Muy recomendados.",
  },
  {
    name: "Dra. Ana López",
    role: "Clínica Vida Salud",
    text: "Atención profesional y confiable. Siempre cumplen con los tiempos.",
  },
  {
    name: "Luis Fernández",
    role: "Distribuidor independiente",
    text: "Precios competitivos y excelente atención. Trabajar con ellos es fácil.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-100 text-gray-800">

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-gray-500">
          Confianza construida con resultados reales
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-200"
          >

            {/* ESTRELLAS */}
            <div className="flex mb-4 text-yellow-400">
              {"★★★★★"}
            </div>

            {/* TEXTO */}
            <p className="text-gray-600 mb-6">
              “{t.text}”
            </p>

            {/* USUARIO */}
            <div>
              <h4 className="font-semibold text-gray-900">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500">
                {t.role}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}