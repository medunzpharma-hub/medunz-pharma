"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-green-500">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        {/* TÍTULO */}
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Iniciar sesión
        </h2>

        {/* INPUT EMAIL */}
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* INPUT PASSWORD */}
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* BOTÓN */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-400 transition"
        >
          Ingresar
        </button>

      </div>
    </main>
  );
}