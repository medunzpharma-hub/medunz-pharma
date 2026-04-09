"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "59160789790"; // tu número (sin +)

  const message = "Hola, quiero información sobre sus productos";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">

        {/* EFECTO PULSO */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping"></span>

        {/* BOTÓN */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition">
          
          {/* ICONO WHATSAPP */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.79 11.79 0 0012.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.18 1.6 6.02L0 24l6.17-1.62a11.9 11.9 0 005.84 1.49h.01c6.62 0 11.99-5.37 11.99-11.99 0-3.2-1.25-6.21-3.49-8.4zM12 21.5c-1.8 0-3.56-.48-5.09-1.39l-.36-.21-3.66.96.98-3.57-.23-.37a9.46 9.46 0 01-1.46-5.01c0-5.24 4.27-9.5 9.51-9.5 2.54 0 4.92.99 6.71 2.78a9.43 9.43 0 012.79 6.71c0 5.24-4.26 9.5-9.5 9.5zm5.23-7.14c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.73.94-.9 1.14-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.43-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.02 2.81 1.16 3 .14.19 2.01 3.06 4.87 4.29.68.29 1.2.46 1.61.59.68.22 1.29.19 1.78.12.54-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
          </svg>

        </div>
      </div>
    </motion.a>
  );
}