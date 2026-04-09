"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Distribución de medicamentos",
    description: "Venta al por mayor y menor con productos certificados.",
    icon: "💊",
  },
  {
    title: "Entrega rápida",
    description: "Logística eficiente con cobertura regional.",
    icon: "🚚",
  },
  {
    title: "Atención profesional",
    description: "Asesoría personalizada para farmacias y clínicas.",
    icon: "🧑‍⚕️",
  },
];

export default function Services() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6">
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-gray-500">
          Soluciones confiables para el abastecimiento de medicamentos
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-500">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}