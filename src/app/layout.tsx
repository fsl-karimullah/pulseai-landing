import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pulseai.biz.id"),
  title: {
    default: "PulseAI - Asisten Sales AI Otomatis untuk Bisnis & UMKM",
    template: "%s | PulseAI"
  },
  description:
    "Tingkatkan konversi bisnis Anda dengan PulseAI. Chatbot AI berbasis RAG yang paham katalog produk Anda dan aktif 24/7 di WhatsApp & Website.",
  keywords: [
    "AI Sales Assistant",
    "Chatbot UMKM",
    "RAG AI Indonesia",
    "Automasi Sales",
    "PulseAI",
    "Chatbot WhatsApp Bisnis",
    "AI Customer Service",
    "Knowledge Base AI"
  ],
  authors: [{ name: "PulseAI Team" }],
  creator: "PulseAI",
  publisher: "PulseAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PulseAI - Asisten Sales AI Otomatis untuk Bisnis & UMKM",
    description:
      "Tingkatkan konversi bisnis Anda dengan PulseAI. Chatbot AI berbasis RAG yang paham katalog produk Anda dan aktif 24/7 di WhatsApp & Website.",
    url: "https://pulseai.biz.id",
    siteName: "PulseAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PulseAI - Smart AI Sales Assistant",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseAI - Smart AI Sales Assistant",
    description: "Ubah PDF Bisnis Anda Menjadi Chatbot Pintar dalam hitungan detik.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "mKa4vaJr69SUnc4w34h9v3fkt2cqLg91woYEA",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "PulseAI",
              "operatingSystem": "Web",
              "applicationCategory": "BusinessApplication",
              "description": "Asisten Sales AI Otomatis untuk Bisnis & UMKM berbasis RAG.",
              "offers": {
                "@type": "Offer",
                "price": "99000",
                "priceCurrency": "IDR"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
