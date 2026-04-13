"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const whatsappMessage = `Hola, soy ${form.name}. Mi número es ${form.phone}. ${form.message}`;
    const url = `https://wa.me/59170745349?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-white text-gray-800 py-20 px-6">

      <div className="max-w-4xl mx-auto text-center mb-12">
	  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
	    Contáctanos
	  </h2>
	  <p className="text-gray-600">
	    Solicita información o cotiza tus productos fácilmente
	  </p>
	</div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >

        {/* NOMBRE */}
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* TELÉFONO */}
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          required
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* MENSAJE */}
        <textarea
          name="message"
          placeholder="Mensaje"
          rows={4}
          required
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* BOTÓN */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Enviar por WhatsApp
        </button>

      </motion.form>
    </section>
  );
}