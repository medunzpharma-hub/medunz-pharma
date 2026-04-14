"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import DashboardLayout from "@/components/DashboardLayout";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        router.push("/login");
      } else {
        setUser(firebaseUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  // 🔄 Loader mientras verifica sesión
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Cargando...</p>
      </div>
    );
  }

  return (
    <DashboardLayout>
      {/* BIENVENIDA */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Bienvenido, {user?.email}
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold mb-2">Pedidos</h3>
          <p className="text-gray-500">Revisa tu historial de pedidos</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold mb-2">Recetas</h3>
          <p className="text-gray-500">Gestiona tus recetas médicas</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold mb-2">Soporte</h3>
          <p className="text-gray-500">Contáctanos directamente</p>
        </div>

      </div>

      {/* BLOQUE EXTRA */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold mb-4">Actividad reciente</h3>
        <p className="text-gray-500">
          No tienes actividad reciente aún.
        </p>
      </div>
    </DashboardLayout>
  );
}