"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email) {
      localStorage.setItem("user", email);
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-green-500 px-6">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Acceso Clientes
        </h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-400 transition"
        >
          Ingresar
        </button>

      </div>
    </div>
  );
}