"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

// Animations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md text-slate-900">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          </div>
          <span className="font-bold text-xl tracking-tight flex items-center gap-2">
            PulseAI
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-emerald-200">Beta</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <Link href="#fitur" className="hover:text-emerald-600 transition-colors">Fitur</Link>
          <Link href="#solusi" className="hover:text-emerald-600 transition-colors">Solusi</Link>
          <Link href="#harga" className="hover:text-emerald-600 transition-colors">Harga</Link>
          <Link href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://wa.me/6287826563459"
            target="_blank"
            className="text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-emerald-50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-12 -left-12 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container relative mx-auto px-4 md:px-6 text-center max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Ubah <span className="text-emerald-600">PDF Bisnis</span> Anda Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Chatbot Pintar</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Capek menjawab pertanyaan yang sama berulang kali? Unggah katalog atau dokumen PDF Anda, dan biarkan AI kami melayani pelanggan Anda dengan akurasi 100% menggunakan data bisnis Anda sendiri.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://wa.me/6287826563459"
              target="_blank"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a demo
              <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </Link>
            <Link
              href="http://localhost:3001"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-slate-700 bg-white border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50 rounded-full transition-all shadow-sm"
            >
              Lihat Demo
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const industries = ["FinTech", "E-Commerce", "HealthCare", "SaaS", "Real Estate"];
  return (
    <section className="py-12 border-y border-slate-200 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Modern AI Solution for Every Industry</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {industries.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
              </div>
              <span className="text-xl font-bold text-slate-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemBreakdown() {
  return (
    <section id="solusi" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">The Cost of Slow Response</motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto">Dalam era digital, pelanggan mengharapkan balasan instan. Keterlambatan membalas chat berujung pada hilangnya potensi penjualan.</motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Instan PDF Training",
              desc: "Cukup upload PDF katalog atau SOP bisnis Anda. AI akan mempelajarinya dalam hitungan detik.",
              icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            },
            {
              title: "Website Widget",
              desc: "Pasang widget chat di website Anda hanya dengan satu baris kode. Mudah dan cepat.",
              icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            },
            {
              title: "Akurasi 100%",
              desc: "AI hanya menjawab berdasarkan dokumen yang Anda berikan. Tidak ada halusinasi atau info ngawur.",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors group">
              <div className="w-14 h-14 bg-slate-700 group-hover:bg-emerald-500 text-emerald-400 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DeepDiveFeatures() {
  const features = [
    {
      title: "Akurasi Tinggi dengan Teknologi RAG",
      desc: "Ucapkan selamat tinggal pada chatbot bodoh yang hanya mengandalkan kata kunci. PulseAI menggunakan Retrieval-Augmented Generation (RAG) untuk membaca, memahami, dan memproses PDF, dokumen katalog, atau website Anda. Hasilnya? AI merespons layaknya karyawan terbaik Anda yang tahu segalanya tentang produk.",
      image: "/rag_accuracy.png",
      reversed: false,
      usps: [
        "Memahami konteks dokumen secara mendalam",
        "Jawaban berbasis data real-time dari PDF Anda",
        "Minimasi kesalahan informasi atau halusinasi AI"
      ]
    },
    {
      title: "Lead Generation Otomatis 24/7",
      desc: "Biarkan AI yang melakukan prospecting. PulseAI dirancang untuk tidak hanya menjawab pertanyaan, tapi juga memandu percakapan menuju konversi. AI dapat mengumpulkan nama, nomor telepon, dan kebutuhan spesifik pelanggan, lalu menyimpannya langsung ke sistem Anda.",
      image: "/lead_gen.png",
      reversed: true,
      usps: [
        "Kualifikasi prospek secara otomatis 24/7",
        "Pengumpulan data leads yang terstruktur",
        "Peningkatan rasio konversi hingga 3x lipat"
      ]
    },
    {
      title: "Integrasi Widget Website",
      desc: "Tampilkan chatbot Anda di website dengan widget yang cantik dan responsif. Berikan pengalaman layanan pelanggan yang instan tanpa perlu coding yang rumit.",
      image: "/widget_demo.png",
      reversed: false,
      usps: [
        "Instalasi instan hanya dengan satu baris kode",
        "Desain responsif & elegan di semua perangkat",
        "Ringan & tidak memperlambat loading website"
      ]
    }
  ];

  return (
    <section id="fitur" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Masa Depan Automasi Bisnis</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Teknologi Enterprise yang disederhanakan agar mudah digunakan oleh UMKM dan Bisnis dari berbagai skala.</p>
        </div>

        <div className="space-y-24">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col md:flex-row items-center gap-12 ${feature.reversed ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div variants={fadeInUp} className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="w-full md:w-1/2">
                <div className="inline-block bg-emerald-100 text-emerald-700 font-bold px-4 py-1.5 rounded-full text-sm mb-6">Fitur Unggulan {i+1}</div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">{feature.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{feature.desc}</p>
                <ul className="space-y-4">
                  {feature.usps.map((usp, j) => (
                    <li key={j} className="flex items-center text-slate-700 font-medium">
                      <svg className="w-6 h-6 mr-3 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {usp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: "Starter",
      price: "Gratis",
      period: "",
      desc: "Coba PulseAI secara gratis tanpa kartu kredit.",
      features: ["1 Chatbot Agent", "1 Dokumen PDF (Max 2MB)", "100 Pesan / bulan", "Web Widget Integration"],
      cta: "Book a demo",
      popular: false,
      href: "https://wa.me/6287826563459"
    },
    {
      name: "Business Plan",
      originalPrice: isAnnual ? "Rp 1.188.000" : "Rp 499.000",
      price: isAnnual ? "Rp 949k" : "Rp 99k",
      period: isAnnual ? "/tahun" : "/bulan",
      savings: isAnnual ? "Hemat Rp 239.000" : null,
      desc: "Fokus pada Akurasi Data Dokumen untuk pertumbuhan bisnis.",
      features: [
        "1 Chatbot Agent", 
        "Up to 10 Dokumen PDF", 
        "2,000 Pesan / bulan", 
        "Custom Branding (No Logo)", 
        "Web Widget Integration", 
        "Prioritas Support"
      ],
      cta: "Book a demo",
      popular: true,
      href: "https://wa.me/6287826563459"
    },
    {
      name: "Enterprise",
      price: "Kustom",
      period: "",
      desc: "Solusi kustom untuk kebutuhan korporasi skala besar.",
      features: ["Unlimited PDFs", "High Volume Messaging", "Dedicated Infrastructure", "API Access", "Priority Support"],
      cta: "Book a demo",
      popular: false,
      href: "https://wa.me/6287826563459"
    }
  ];

  return (
    <section id="harga" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Investasi Fleksibel untuk Semua</h2>
          <p className="text-xl text-slate-600 mb-8">Pilih paket yang sesuai dengan volume percakapan harian Anda.</p>
          
          {/* Toggle Billing */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-emerald-600' : 'text-slate-500'}`}>Bulanan</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-slate-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-7 bg-emerald-500' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-emerald-600' : 'text-slate-500'}`}>Tahunan</span>
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tight animate-pulse">Hemat 20%</span>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center"
        >
          {tiers.map((tier, i) => (
            <motion.div key={i} variants={fadeInUp} className={`relative p-8 rounded-3xl border flex flex-col ${tier.popular ? 'border-emerald-500 shadow-2xl bg-slate-900 text-white transform md:-translate-y-4 md:scale-105 z-10' : 'border-slate-200 shadow-sm bg-white text-slate-900'}`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">Paling Populer</span>
                </div>
              )}
              {tier.savings && (
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">{tier.savings}</span>
                </div>
              )}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                <p className={`text-sm ${tier.popular ? 'text-slate-300' : 'text-slate-500'} mb-6 min-h-[40px]`}>{tier.desc}</p>
                <div className="flex flex-col gap-1">
                  {tier.originalPrice && (
                    <span className="text-slate-500 line-through text-sm font-medium">
                      {tier.originalPrice}
                    </span>
                  )}
                  <div className="flex items-baseline">
                    <span className={`text-4xl md:text-5xl font-extrabold ${tier.popular ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
                    <span className={`text-lg ml-2 font-medium ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>{tier.period}</span>
                  </div>
                </div>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <svg className={`w-6 h-6 mr-3 shrink-0 ${tier.popular ? 'text-emerald-400' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className={`font-medium ${tier.popular ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://wa.me/6287826563459"
                target="_blank"
                className={`block w-full text-center py-4 px-6 rounded-xl font-bold text-lg transition-all ${tier.popular ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:shadow-emerald-500/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-slate-500 font-medium bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
            🛡️ <span className="text-slate-900 font-bold">Garansi Kepuasan:</span> Jika sistem kami mengalami kendala teknis yang tidak terselesaikan dalam 7 hari, uang Anda kembali 100%.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Budi Santoso",
      role: "Owner, TechStore ID",
      content: "Sejak menggunakan PulseAI, tim CS kami tidak lagi kewalahan di malam hari. Konversi penjualan meningkat 30% karena semua prospek dibalas dalam hitungan detik.",
      rating: 5
    },
    {
      name: "Rina Amelia",
      role: "Marketing Director, BeautyGlow",
      content: "Teknologi RAG-nya luar biasa! AI ini benar-benar paham detail ingredients produk kosmetik kami dan bisa menjawab pertanyaan rumit dari pelanggan.",
      rating: 5
    },
    {
      name: "Ahmad Rizky",
      role: "Founder, OtoParts",
      content: "Integrasi WhatsApp-nya sangat lancar. Kami bisa fokus pada strategi bisnis sementara PulseAI menangani ratusan pertanyaan tentang ketersediaan suku cadang.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Dipercaya oleh Pebisnis Cerdas</h2>
          <p className="text-xl text-slate-600">Lihat apa kata mereka yang telah mengotomatiskan bisnisnya.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {reviews.map((review, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 font-medium italic">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apa itu PulseAI dan bagaimana ia membantu bisnis saya?",
      a: "PulseAI adalah asisten sales AI otomatis berbasis RAG (Retrieval-Augmented Generation). Ia bertindak sebagai tim CS virtual yang paham katalog produk Anda 100% dan membalas pertanyaan pelanggan 24/7 di WhatsApp dan Website."
    },
    {
      q: "Bagaimana cara kerja AI RAG ini?",
      a: "Anda cukup mengunggah file PDF, dokumen teks, atau link website bisnis Anda ke dalam dashboard PulseAI. AI kami akan mengekstrak data tersebut menjadi basis pengetahuan (Knowledge Base) untuk menjawab pertanyaan pelanggan secara akurat tanpa halusinasi."
    },
    {
      q: "Apakah bisa disambungkan ke Website saya?",
      a: "Tentu saja. Anda akan mendapatkan satu baris kode script yang bisa dipasang di website apapun (WordPress, Shopify, atau Custom Code) untuk memunculkan widget chat AI Anda."
    },
    {
      q: "Apakah AI ini bisa memproses transaksi atau pembayaran?",
      a: "Saat ini, PulseAI dirancang kuat untuk Lead Generation dan Customer Support (menjawab pertanyaan katalog, harga, dll). Namun, Anda dapat menyisipkan tautan checkout atau payment gateway pada balasan AI untuk memandu pelanggan melakukan pembayaran mandiri."
    },
    {
      q: "Bagaimana jika pelanggan ingin berbicara dengan CS manusia?",
      a: "PulseAI memiliki fitur handoff (pengalihan). Jika AI tidak dapat menjawab pertanyaan atau pelanggan meminta berbicara dengan agen manusia, sistem akan memberikan notifikasi kepada Anda untuk mengambil alih chat secara manual."
    },
    {
      q: "Apakah data bisnis saya aman?",
      a: "Keamanan data adalah prioritas utama kami. Dokumen yang Anda unggah hanya digunakan sebagai basis pengetahuan untuk chatbot Anda sendiri dan tidak akan pernah dibagikan atau digunakan untuk melatih model publik lainnya."
    },
    {
      q: "Mengapa harganya sangat murah?",
      a: "Karena kami baru saja melakukan Beta Launch dan ingin Anda menjadi bagian dari perjalanan PulseAI dalam menyempurnakan AI terbaik untuk bisnis Indonesia. Ini adalah investasi awal bagi kami untuk mendapatkan feedback dari user-user terbaik."
    }
  ];

  // Generate JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-emerald-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-xl text-slate-600">Pelajari lebih lanjut tentang bagaimana PulseAI bekerja untuk Anda.</p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-slate-900 pr-8">{faq.q}</h3>
                <svg 
                  className={`w-6 h-6 text-emerald-500 transform transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Expandable Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  <p className="text-slate-600 leading-relaxed text-lg">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalPitch() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Siap Mengotomatiskan Bisnis Anda?<br/>Gabung dengan ratusan pebisnis cerdas lainnya.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
            Mulai sekarang juga. Setup sistem AI Anda dalam hitungan menit tanpa perlu kemampuan coding sedikitpun.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="https://wa.me/6287826563459"
              target="_blank"
              className="inline-flex items-center justify-center h-16 px-10 text-xl font-bold text-emerald-700 bg-white hover:bg-emerald-50 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Book a demo
              <svg className="w-6 h-6 ml-3 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight flex items-center gap-2">
                PulseAI
                <span className="bg-white/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-white/10">Beta</span>
              </span>
            </div>
            <p className="text-base text-slate-400 max-w-md leading-relaxed">
              Masa depan customer service dan penjualan ada di tangan AI. Percepat pertumbuhan bisnis Anda sekarang dengan asisten pintar yang bekerja 24 jam nonstop.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Produk</h4>
            <ul className="space-y-4 text-base">
              <li><Link href="#fitur" className="hover:text-emerald-400 transition-colors">Fitur</Link></li>
              <li><Link href="#solusi" className="hover:text-emerald-400 transition-colors">Solusi</Link></li>
              <li><Link href="#harga" className="hover:text-emerald-400 transition-colors">Harga</Link></li>
              <li><Link href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-base">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PulseAI (pulseai.biz.id). All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social Links placeholders */}
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-500 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemBreakdown />
        <DeepDiveFeatures />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalPitch />
      </main>
      <Footer />
    </div>
  );
}
