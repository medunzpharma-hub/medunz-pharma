"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-900 text-white p-6 hidden md:flex flex-col justify-between">

        <div>
          <h2 className="text-2xl font-bold mb-10">
            MEDUNZ <span className="text-green-400">PHARMA</span>
          </h2>

          <nav className="space-y-4">
            <p className="hover:text-green-400 cursor-pointer">Dashboard</p>
            <p className="hover:text-green-400 cursor-pointer">Pedidos</p>
            <p className="hover:text-green-400 cursor-pointer">Recetas</p>
            <p className="hover:text-green-400 cursor-pointer">Soporte</p>
          </nav>
        </div>

        {/* LOGOUT */}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            router.push("/");
          }}
          className="bg-red-500 py-2 rounded-lg hover:bg-red-400"
        >
          Cerrar sesión
        </button>
      </aside>

      {/* CONTENIDO */}
      <div className="flex-1">

        {/* HEADER */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Panel de Cliente
          </h1>

          <span className="text-sm text-gray-500">
            Bienvenido
          </span>
        </header>

        {/* MAIN */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}