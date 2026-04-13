import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Medunz Pharma",
    template: "%s | Medunz Pharma",
  },
  description:
    "Distribuidora farmacéutica en Bolivia. Medicamentos de calidad, entrega rápida y atención profesional.",

  keywords: [
    "medicamentos Bolivia",
    "distribuidora farmacéutica",
    "farmacia Cochabamba",
    "proveedor de medicamentos",
    "venta de medicamentos",
  ],

  authors: [{ name: "GHOST Web & Software Designer" }],

  openGraph: {
    title: "Medunz Pharma",
    description:
      "Distribución de medicamentos con calidad garantizada.",
    url: "https://medunz-pharma.vercel.app/",
    siteName: "Medunz Pharma",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_BO",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
