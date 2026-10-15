import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

// ── Structured Data Schemas ───────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://pulseai.biz.id/#organization",
  name: "PT Astra Solusi Digital",
  alternateName: ["PulseAI", "Pulse AI", "PT Astra Solusi Digital"],
  url: "https://pulseai.biz.id",
  logo: {
    "@type": "ImageObject",
    url: "https://pulseai.biz.id/logo-primary.png",
    width: 512,
    height: 512,
  },
  description:
    "PT Astra Solusi Digital adalah perusahaan teknologi AI Indonesia yang mengembangkan PulseAI — platform automasi bisnis berbasis kecerdasan buatan untuk UMKM dan perusahaan Indonesia.",
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "ID",
    addressLocality: "Indonesia",
  },
  founder: {
    "@type": "Person",
    name: "Amir Faisal Karimullah",
    jobTitle: "Direktur Utama",
    honorificSuffix: "A.Md.Kom.",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-878-2656-3459",
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
    contactOption: "TollFree",
  },
  sameAs: [
    "https://dashboard.pulseai.biz.id",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://pulseai.biz.id/#website",
  name: "PulseAI",
  url: "https://pulseai.biz.id",
  publisher: { "@id": "https://pulseai.biz.id/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://pulseai.biz.id/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://pulseai.biz.id/#software",
  name: "PulseAI",
  alternateName: "Pulse AI",
  operatingSystem: "Web, Android, iOS",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: [
    "Chatbot AI",
    "Applicant Tracking System",
    "HR Software",
    "Financial Management",
    "Customer Service Software",
  ],
  description:
    "PulseAI adalah platform AI all-in-one dari PT Astra Solusi Digital dengan 3 modul: Pulse Chat (chatbot AI & CS otomatis 24/7), Pulse Career (ATS CV Scanner & rekrutmen AI), dan Pulse Finance (keuangan bisnis & estimasi pajak).",
  url: "https://pulseai.biz.id",
  screenshot: "https://pulseai.biz.id/og-image.png",
  featureList: [
    "Pulse Chat - AI Chatbot WhatsApp & Website",
    "Pulse Chat - Lead Generation Otomatis 24/7",
    "Pulse Career - ATS CV Scanner AI",
    "Pulse Career - Bulk CV Scan (Free: 10, Premium: 20+)",
    "Pulse Career - Deteksi Red Flag Kandidat",
    "Pulse Finance - Manajemen Keuangan Bisnis",
    "Pulse Finance - Estimasi Pajak Otomatis",
    "Integrasi WhatsApp Business",
    "Widget Website",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Paket Starter",
      price: "79000",
      priceCurrency: "IDR",
      description: "1 bulan — AI Chatbot + 10 CV Scan",
    },
    {
      "@type": "Offer",
      name: "Paket Pro",
      price: "199000",
      priceCurrency: "IDR",
      description: "3 bulan — AI Chatbot + 20 CV Scan + Pulse Finance",
    },
    {
      "@type": "Offer",
      name: "Paket Full Scale",
      price: "699000",
      priceCurrency: "IDR",
      description: "12 bulan — Semua fitur + 30 CV Scan",
    },
  ],
  provider: { "@id": "https://pulseai.biz.id/#organization" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "87",
    bestRating: "5",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pulseai.biz.id"),
  title: {
    default:
      "PulseAI — Chatbot AI, Jasa Website Kilat & ATS CV Scanner | PT Astra Solusi Digital",
    template: "%s | PulseAI — PT Astra Solusi Digital",
  },
  description:
    "PulseAI by PT Astra Solusi Digital: platform automasi bisnis & jasa pembuatan website kilat 1 hari jadi. Dilengkapi Pulse Chat (chatbot AI WhatsApp & CS 24/7), Pulse Career (ATS CV Scanner), Pulse Finance, dan paket website siap pakai bergaransi.",
  keywords: [
    // Brand keywords
    "PulseAI",
    "Pulse AI",
    "pulseai.biz.id",
    "PT Astra Solusi Digital",
    "Astra Solusi Digital",
    // Pulse Chat keywords
    "chatbot AI Indonesia",
    "chatbot WhatsApp bisnis",
    "AI customer service Indonesia",
    "chatbot UMKM Indonesia",
    "chatbot WhatsApp otomatis",
    "AI sales assistant Indonesia",
    "chatbot AI gratis Indonesia",
    "Pulse Chat",
    "automasi customer service",
    "RAG AI Indonesia",
    // Pulse Career / ATS keywords
    "ATS scanner Indonesia",
    "ATS CV scanner Indonesia",
    "scan CV otomatis",
    "AI rekrutmen Indonesia",
    "software ATS Indonesia",
    "aplikasi rekrutmen AI",
    "seleksi CV otomatis",
    "Pulse Career",
    "bulk CV scan",
    "HR software AI Indonesia",
    "screening CV AI",
    // Pulse Finance keywords
    "Pulse Finance",
    "aplikasi keuangan bisnis Indonesia",
    "estimasi pajak bisnis",
    "manajemen keuangan UMKM",
    "software keuangan AI",
    // General AI/Bisnis keywords
    "platform AI bisnis Indonesia",
    "automasi bisnis AI",
    "platform AI UMKM",
    "AI Indonesia",
    "software bisnis AI Indonesia",
    "transformasi digital UMKM",
    "jasa pembuatan website",
    "jasa website kilat",
    "bikin website 1 hari jadi",
    "jasa web UMKM",
    "website company profile murah",
    "jasa landing page profesional",
  ],
  authors: [
    { name: "PT Astra Solusi Digital", url: "https://pulseai.biz.id" },
    { name: "Amir Faisal Karimullah" },
  ],
  creator: "PT Astra Solusi Digital",
  publisher: "PT Astra Solusi Digital",
  category: "Technology, Business Software, AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://pulseai.biz.id",
    languages: {
      "id-ID": "https://pulseai.biz.id",
    },
  },
  openGraph: {
    title:
      "PulseAI — Chatbot AI, Jasa Website Kilat & ATS CV Scanner | PT Astra Solusi Digital",
    description:
      "Platform automasi bisnis & jasa pembuatan website kilat 1 hari jadi dari PT Astra Solusi Digital. Dilengkapi Pulse Chat, Pulse Career, Pulse Finance, dan garansi website cepat siap tayang.",
    url: "https://pulseai.biz.id",
    siteName: "PulseAI — PT Astra Solusi Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PulseAI — Chatbot AI, ATS CV Scanner, dan Keuangan Bisnis untuk Indonesia | PT Astra Solusi Digital",
        type: "image/png",
      },
    ],
    locale: "id_ID",
    type: "website",
    countryName: "Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseAI — Chatbot AI, Jasa Website Kilat & ATS CV Scanner",
    description:
      "Solusi automasi bisnis & jasa pembuatan website kilat 1 hari jadi dari PT Astra Solusi Digital. Chatbot AI, ATS CV Scanner, dan website bergaransi.",
    images: ["/og-image.png"],
    creator: "@pulseai_id",
    site: "@pulseai_id",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "mKa4vaJr69SUnc4w34h9v3fkt2cqLg91woYEA5wNjow",
  },
  icons: {
    icon: [
      { url: "/logo-primary.png", type: "image/png" },
    ],
    shortcut: "/logo-primary.png",
    apple: "/logo-primary.png",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "ID",
    "geo.country": "Indonesia",
    "language": "Indonesian",
    "revisit-after": "7 days",
    "rating": "general",
    "copyright": "PT Astra Solusi Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} font-sans scroll-smooth`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://api.pulseai.biz.id" />
      </head>
      <body className="min-h-screen flex flex-col antialiased text-slate-800 bg-slate-50 selection:bg-emerald-500 selection:text-white">

        {/* ── Structured Data: Organization ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* ── Structured Data: WebSite ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* ── Structured Data: SoftwareApplication ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />

        {children}

        {/* ── Google Analytics GA4 ── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NCJ4405BXK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NCJ4405BXK', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* ── PulseAI Widget ── */}
        <Script
          src="https://api.pulseai.biz.id/api/widget.js?orgId=913f196b-f42a-4090-9153-244b603dbfe0&botName=Pulse%20AI%20Assistant&company=PulseAI"
          strategy="lazyOnload"
        />
        <script src="https://api.pulseai.biz.id/api/widget.js?orgId=0b2c513b-8cee-4660-a5b1-7f75bbaa12c7&projectId=a8a1bbe1-88f3-4e50-a5dd-18b9899cdb8b&botName=Kantor%20Cabang%202&company=Kantor%20Cabang%202"></script>
      </body>
    </html>
  );
}
