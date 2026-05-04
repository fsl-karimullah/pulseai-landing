import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PulseAI - Asisten Sales AI Otomatis untuk Bisnis & UMKM",
  description:
    "Tingkatkan konversi bisnis Anda dengan PulseAI. Chatbot AI berbasis RAG yang paham katalog produk Anda dan aktif 24/7 di WhatsApp & Website.",
  openGraph: {
    title: "PulseAI - Asisten Sales AI Otomatis untuk Bisnis & UMKM",
    description:
      "Tingkatkan konversi bisnis Anda dengan PulseAI. Chatbot AI berbasis RAG yang paham katalog produk Anda dan aktif 24/7 di WhatsApp & Website.",
    url: "https://pulseai.biz.id",
    siteName: "PulseAI",
    images: [
      {
        url: "/og-image.jpg", // placeholder
        width: 1200,
        height: 630,
        alt: "PulseAI Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased text-slate-800 bg-slate-50 selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
