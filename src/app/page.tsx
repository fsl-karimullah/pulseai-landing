"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ── Animations ────────────────────────────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-100">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          </div>
          <span className="font-black text-xl text-slate-900 tracking-tight">
            PulseAI
            <span className="ml-2 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-emerald-200">Beta</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
          {["#solusi|Solusi", "#fitur|Fitur", "#harga|Harga", "#faq|FAQ"].map((item) => {
            const [href, label] = item.split("|");
            return <Link key={href} href={href} className="hover:text-emerald-600 transition-colors duration-200">{label}</Link>;
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="https://dashboard.pulseai.biz.id" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">Login</Link>
          <Link href="https://wa.me/6287826563459" target="_blank" className="text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-px">
            Book a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white pt-24 pb-24 md:pt-36 md:pb-32">
      {/* Subtle background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-emerald-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -right-32 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-24 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#d1fae5_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 text-center max-w-5xl">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-7">

          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-300/60 bg-emerald-50 text-emerald-700 text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              Platform AI Otomasi Bisnis #1 Indonesia
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Satu Platform.{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700">
              Semua Otomasi.
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            PulseAI mengotomatiskan dua pilar terpenting bisnis Anda — dari sales &amp; customer service hingga proses rekrutmen.
          </motion.p>

          {/* Pillar Cards */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            {[
              { icon: "💬", label: "AI Chatbot & Sales", sub: "Layani pelanggan 24/7", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
              { icon: "📋", label: "AI HR & ATS Scanner", sub: "Rekrut kandidat terbaik", bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700" },
            ].map((p) => (
              <div key={p.label} className={`flex items-center gap-3.5 ${p.bg} border ${p.border} rounded-2xl px-5 py-3.5 shadow-sm`}>
                <span className="text-2xl">{p.icon}</span>
                <div className="text-left">
                  <p className={`font-bold text-sm leading-none mb-1 ${p.text}`}>{p.label}</p>
                  <p className="text-slate-500 text-xs">{p.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link href="https://wa.me/6287826563459" target="_blank" className="group inline-flex items-center justify-center gap-2 h-14 px-9 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-2xl transition-all shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-1">
              Mulai Gratis Sekarang
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="https://dashboard.pulseai.biz.id" className="inline-flex items-center justify-center h-14 px-9 text-base font-bold text-slate-700 bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 rounded-2xl transition-all shadow-sm">
              Login Dashboard
            </Link>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-slate-400 text-xs tracking-wide">
            Tidak perlu kartu kredit · Setup 5 menit · Kuota gratis tersedia
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "24/7", label: "Operasi Tanpa Henti", icon: "⚡" },
    { value: "< 2s", label: "Waktu Respons AI", icon: "🚀" },
    { value: "100%", label: "Akurasi Data Bisnis", icon: "🎯" },
    { value: "5 Mnt", label: "Waktu Setup", icon: "⏱️" },
  ];

  return (
    <section className="relative bg-emerald-600 py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-emerald-500/40">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center py-4 px-6"
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <p className="text-3xl md:text-4xl font-black text-white mb-1 tabular-nums">{s.value}</p>
              <p className="text-emerald-100/80 text-xs font-medium uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Problem Section ───────────────────────────────────────────────────────────
function ProblemBreakdown() {
  const problems = [
    { emoji: "😩", problem: "Tim CS kewalahan menjawab chat berulang di luar jam kerja", solution: "AI Chatbot menjawab ribuan pertanyaan sekaligus, 24/7 otomatis" },
    { emoji: "⏳", problem: "Screening ratusan CV memakan waktu berminggu-minggu", solution: "AI ATS Scanner menyeleksi CV lengkap dalam hitungan detik" },
    { emoji: "📉", problem: "Leads hilang karena respons terlambat", solution: "AI mengumpulkan & membalas leads kapanpun, tanpa jeda" },
    { emoji: "🤷", problem: "Keputusan rekrutmen bias & tidak konsisten", solution: "AI memberi skor objektif & rekomendasi berbasis data CV" },
  ];

  return (
    <section id="solusi" className="py-24 bg-gradient-to-b from-white to-emerald-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 text-emerald-600 text-sm font-bold uppercase tracking-widest mb-5">
            <span className="w-6 h-px bg-emerald-400" /> Masalah → Solusi <span className="w-6 h-px bg-emerald-400" />
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">
            Bisnis Modern Butuh<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Automasi Cerdas</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg max-w-2xl mx-auto">
            PulseAI memecahkan dua masalah terbesar yang membuang waktu &amp; uang bisnis Anda.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
          {problems.map((item, i) => (
            <motion.div key={i} variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 group-hover:from-emerald-50/80 to-transparent transition-all duration-500 pointer-events-none rounded-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-emerald-100 flex items-center justify-center text-2xl shrink-0 transition-colors">
                  {item.emoji}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 shrink-0 w-4 h-4 rounded-full border border-red-200 bg-red-50 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </span>
                    <p className="text-slate-400 text-sm line-through decoration-red-300/60 leading-relaxed">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <p className="text-slate-800 font-semibold text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Product Suite Tabs ────────────────────────────────────────────────────────
function ProductSuite() {
  const [activeTab, setActiveTab] = useState<"chatbot" | "ats">("chatbot");

  const chatbotFeatures = [
    { icon: "🧠", title: "Akurasi RAG 100%", desc: "AI hanya menjawab dari dokumen yang Anda upload. Zero halusinasi, zero jawaban ngawur." },
    { icon: "📄", title: "Upload PDF Instan", desc: "Upload katalog, SOP, atau FAQ bisnis. AI belajar dan siap melayani dalam detik." },
    { icon: "💬", title: "Widget Website", desc: "Pasang di website apapun dengan satu baris kode. Plug & play tanpa coding." },
    { icon: "📱", title: "Integrasi WhatsApp", desc: "Bot otomatis langsung dari nomor WhatsApp bisnis Anda via QR scan." },
    { icon: "🎯", title: "Lead Capture Otomatis", desc: "AI mengumpulkan nama & kontak prospek dari setiap percakapan secara otomatis." },
    { icon: "🕐", title: "Operasi 24/7", desc: "Tidak ada jam tidur. Bisnis Anda terus berjalan selagi Anda istirahat." },
  ];

  const atsFeatures = [
    { icon: "🎯", title: "ATS Scoring 0-100", desc: "Skor kecocokan CV vs deskripsi pekerjaan berbasis konteks, bukan sekedar keyword matching." },
    { icon: "📋", title: "Ekstraksi Data Otomatis", desc: "Nama, email, WhatsApp, pendidikan — semua diekstrak dari PDF tanpa input manual." },
    { icon: "⚖️", title: "Analisis Kelebihan & Gap", desc: "AI memberikan breakdown kekuatan dan kekurangan kandidat terhadap role yang dilamar." },
    { icon: "🚩", title: "Deteksi Red Flags", desc: "Job hopping, gap kerja panjang, loncatan karier ekstrem — semua terdeteksi otomatis." },
    { icon: "✅", title: "Rekomendasi HR Instan", desc: "Lolos Interview / Talent Pool / Tolak — keputusan AI berbasis data dalam detik." },
    { icon: "💬", title: "Draft WhatsApp Otomatis", desc: "Pesan balasan ke kandidat dibuat AI secara otomatis, tinggal copy-paste & kirim." },
  ];

  const isAts = activeTab === "ats";
  const features = isAts ? atsFeatures : chatbotFeatures;

  return (
    <section id="fitur" className="py-24 bg-gradient-to-b from-emerald-50/50 via-white to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-14">
          <motion.span variants={fadeInUp} className="inline-block mb-4 bg-emerald-100 text-emerald-700 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-emerald-200">
            Suite Produk PulseAI
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Dua Modul. Satu Platform.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Automasi Total.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg max-w-2xl mx-auto">
            Pilih modul yang dibutuhkan, atau gunakan keduanya untuk efisiensi maksimal.
          </motion.p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 rounded-2xl p-1.5 gap-1 shadow-inner border border-slate-200">
            {[
              { id: "chatbot", label: "🤖 AI Chatbot & Sales" },
              { id: "ats", label: "📋 AI HR & ATS Scanner" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "chatbot" | "ats")}
                className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-md border border-slate-100"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Description Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-desc"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`mb-10 p-6 rounded-2xl border text-center ${
              isAts
                ? "bg-violet-50 border-violet-200"
                : "bg-emerald-50 border-emerald-200"
            }`}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isAts ? "📋 AI HR Tools & ATS CV Scanner" : "🤖 AI Chatbot & Lead Generation"}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
              {isAts
                ? "Berhenti buang waktu membaca CV manual. AI membaca, menilai, dan deteksi red flag dari setiap pelamar — dalam hitungan detik."
                : "Ubah dokumen bisnis jadi asisten AI. Layani pelanggan, kumpulkan leads, dan tingkatkan konversi — otomatis 24/7 tanpa CS tambahan."}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Feature Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-cards"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className={`group bg-white border transition-all duration-300 hover:shadow-xl rounded-2xl p-6 cursor-default ${
                  isAts
                    ? "border-slate-100 hover:border-violet-200 hover:shadow-violet-50"
                    : "border-slate-100 hover:border-emerald-200 hover:shadow-emerald-50"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110 duration-300 ${
                  isAts ? "bg-violet-50 border border-violet-100" : "bg-emerald-50 border border-emerald-100"
                }`}>
                  {f.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-base">{f.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const [activeProduct, setActiveProduct] = useState<"chatbot" | "ats">("chatbot");

  const chatbotSteps = [
    { step: "01", emoji: "📂", title: "Upload Dokumen", desc: "Upload PDF katalog produk, SOP, atau website bisnis Anda ke dashboard PulseAI.", color: "from-emerald-400 to-teal-500" },
    { step: "02", emoji: "🧠", title: "AI Memproses", desc: "PulseAI RAG memahami seluruh konten dokumen Anda secara mendalam dalam hitungan detik.", color: "from-teal-400 to-emerald-500" },
    { step: "03", emoji: "🔌", title: "Pasang Widget / WA", desc: "Salin satu baris kode ke website Anda, atau scan QR untuk koneksi WhatsApp bisnis.", color: "from-emerald-500 to-green-500" },
    { step: "04", emoji: "⚡", title: "AI Bekerja Otomatis", desc: "Chatbot menjawab pelanggan, mengumpulkan leads, dan melaporkan hasilnya ke dashboard.", color: "from-green-400 to-emerald-600" },
  ];

  const atsSteps = [
    { step: "01", emoji: "📝", title: "Buat Lowongan", desc: "Isi judul posisi, deskripsi pekerjaan, dan persyaratan kandidat di dashboard Anda.", color: "from-violet-400 to-indigo-500" },
    { step: "02", emoji: "📤", title: "Upload CV (PDF)", desc: "Drag & drop file CV pelamar. Bisa satu per satu atau minta pelamar submit via link.", color: "from-indigo-400 to-violet-500" },
    { step: "03", emoji: "🔍", title: "AI Menganalisis", desc: "Gemini AI membaca CV, menilai kecocokan, mendeteksi red flags, dan memberi skor ATS.", color: "from-violet-500 to-purple-500" },
    { step: "04", emoji: "✅", title: "Ambil Keputusan", desc: "Dapat rekomendasi HR (Lolos/Pool/Tolak) + draft pesan WhatsApp ke kandidat siap kirim.", color: "from-purple-400 to-violet-600" },
  ];

  const isAts = activeProduct === "ats";
  const steps = isAts ? atsSteps : chatbotSteps;
  const accentRing = isAts ? "ring-violet-200" : "ring-emerald-200";

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#d1fae5_1px,transparent_1px)] bg-[size:28px_28px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 bg-emerald-100 text-emerald-700 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-emerald-200">Step by Step</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Cara Kerja PulseAI</h2>
          <p className="text-slate-500 text-lg">Setup mudah, hasil langsung terasa.</p>

          {/* Tab toggle */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-white rounded-2xl p-1.5 gap-1 border border-slate-200 shadow-md">
              {[
                { id: "chatbot", label: "🤖 AI Chatbot", activeClass: "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30" },
                { id: "ats", label: "📋 AI ATS Scanner", activeClass: "bg-violet-600 text-white shadow-lg shadow-violet-600/30" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProduct(tab.id as "chatbot" | "ats")}
                  className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${activeProduct === tab.id ? tab.activeClass : "text-slate-500 hover:text-slate-700"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((s, i) => (
              <div key={i} className="relative group flex flex-col">
                {/* Arrow connector between cards */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 left-full z-20 items-center -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full bg-white border-2 ${accentRing} flex items-center justify-center shadow-sm`}>
                      <svg className={`w-3.5 h-3.5 ${isAts ? "text-violet-500" : "text-emerald-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex-1 flex flex-col rounded-2xl bg-white border border-slate-100 p-6 transition-all duration-300 cursor-default group-hover:-translate-y-2 group-hover:shadow-2xl ${isAts ? 'group-hover:border-violet-200 group-hover:shadow-violet-100/80' : 'group-hover:border-emerald-200 group-hover:shadow-emerald-100/80'}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {s.emoji}
                    </div>
                    <span className={`text-xs font-black px-2.5 py-1 rounded-full border ${isAts ? 'bg-violet-50 text-violet-600 border-violet-200' : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
                      STEP {s.step}
                    </span>
                  </div>
                  <h4 className="font-black text-slate-900 text-base mb-2 leading-snug">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <div className={`mt-5 h-1 rounded-full bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ── Deep Dive Features ────────────────────────────────────────────────────────
function DeepDiveFeatures() {
  const features = [
    {
      tag: "AI Chatbot · Modul 01", tagBg: "bg-emerald-100", tagText: "text-emerald-700", tagBorder: "border-emerald-200",
      title: "Chatbot Pintar Berbasis Dokumen Bisnis Anda",
      desc: "Bukan chatbot generik yang menjawab sembarang. PulseAI menggunakan RAG (Retrieval-Augmented Generation) yang membaca dokumen bisnis Anda — katalog, SOP, FAQ — lalu menjawab pelanggan layaknya karyawan terbaik Anda.",
      image: "/rag_accuracy.png",
      reversed: false,
      checkColor: "bg-emerald-100 border-emerald-200",
      iconColor: "text-emerald-600",
      usps: ["Jawaban 100% berbasis data bisnis Anda sendiri", "Tanpa halusinasi atau informasi ngawur", "Update pengetahuan AI cukup dengan upload dokumen baru"],
    },
    {
      tag: "AI Chatbot · Modul 02", tagBg: "bg-emerald-100", tagText: "text-emerald-700", tagBorder: "border-emerald-200",
      title: "Lead Generation Otomatis 24/7",
      desc: "PulseAI tidak hanya menjawab pertanyaan — ia memandu percakapan menuju konversi. AI mengumpulkan nama, nomor telepon, dan kebutuhan spesifik pelanggan, lalu menyimpannya ke dashboard Anda secara otomatis.",
      image: "/lead_gen.png",
      reversed: true,
      checkColor: "bg-emerald-100 border-emerald-200",
      iconColor: "text-emerald-600",
      usps: ["Kualifikasi prospek otomatis saat Anda tidur", "Pengumpulan data leads yang terstruktur & bersih", "Peningkatan rasio konversi hingga 3x lipat"],
    },
    {
      tag: "AI HR Tools · Modul 03", tagBg: "bg-violet-100", tagText: "text-violet-700", tagBorder: "border-violet-200",
      title: "AI ATS CV Scanner untuk Rekrutmen Lebih Cerdas",
      desc: "Berhenti membuang waktu membaca ratusan CV secara manual. Upload CV pelamar, dan AI memberikan ATS Score, analisis mendalam, deteksi red flags, serta rekomendasi keputusan HR dalam hitungan detik.",
      image: "/widget_demo.png",
      reversed: false,
      checkColor: "bg-violet-100 border-violet-200",
      iconColor: "text-violet-600",
      usps: ["ATS Score 0-100 berdasarkan kesesuaian dengan JD", "Deteksi otomatis job hopping, gap kerja & inkonsistensi data", "Draft pesan WhatsApp ke kandidat dibuat otomatis"],
    },
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="inline-block mb-4 bg-slate-100 text-slate-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-slate-200">Detail Fitur</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">Cara Setiap Modul Bekerja</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Teknologi enterprise, disederhanakan untuk UMKM dan bisnis berkembang.</p>
        </div>

        <div className="space-y-28">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col lg:flex-row items-center gap-14 ${f.reversed ? "lg:flex-row-reverse" : ""}`}
            >
              <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 group">
                  <Image src={f.image} alt={f.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${f.tagBg} ${f.tagBorder}`}>
                  <span className={`text-xs font-black uppercase tracking-widest ${f.tagText}`}>{f.tag}</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 leading-tight">{f.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{f.desc}</p>
                <ul className="space-y-3">
                  {f.usps.map((usp, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${f.checkColor}`}>
                        <svg className={`w-3 h-3 ${f.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{usp}</span>
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

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const tiers = [
    {
      name: "Starter", duration: "1 Bulan", price: "Rp 79.000", per: "~~Rp 149.000~~ (Hemat 47%)",
      desc: "Solusi cerdas untuk automasi bisnis jangka pendek.",
      popular: false, badge: null,
      bg: "bg-white", border: "border-slate-200", hover: "hover:border-emerald-300 hover:shadow-emerald-100",
      href: "https://dashboard.pulseai.biz.id", cta: "Mulai Sekarang",
      ctaClass: "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700",
      features: ["♾️ AI Chatbot Unlimited Pesan", "📄 10 Kuota Scan CV / Bulan", "🌐 Widget Website", "📱 Integrasi WhatsApp", "🎯 Lead Capture Otomatis", "💬 Support Teknis 24/7"],
      bonus: "Top-up kredit untuk ekstra scan",
    },
    {
      name: "Pro", duration: "3 Bulan", price: "Rp 199.000", per: "~~Rp 599.000~~ (Hemat 67%)",
      desc: "Penawaran terbaik untuk stabilitas bisnis Anda.",
      popular: true, badge: "BEST VALUE",
      bg: "bg-gradient-to-b from-emerald-600 to-emerald-700", border: "border-emerald-600", hover: "",
      href: "https://dashboard.pulseai.biz.id", cta: "Ambil Penawaran Ini",
      ctaClass: "bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg shadow-emerald-900/20",
      features: ["♾️ AI Chatbot Unlimited Pesan", "📄 20 Kuota Scan CV / Bulan", "🌐 Widget Website", "📱 Integrasi WhatsApp", "🎯 Lead Capture Otomatis", "💬 Support Teknis 24/7"],
      bonus: "Top-up kredit untuk ekstra scan",
    },
    {
      name: "Full Scale", duration: "12 Bulan", price: "Rp 699.000", per: "~~Rp 1.499.000~~ (Hemat 53%)",
      desc: "Investasi maksimal untuk efisiensi total sepanjang tahun.",
      popular: false, badge: null,
      bg: "bg-white", border: "border-slate-200", hover: "hover:border-emerald-300 hover:shadow-emerald-100",
      href: "https://dashboard.pulseai.biz.id", cta: "Go Full Scale",
      ctaClass: "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700",
      features: ["♾️ AI Chatbot Unlimited Pesan", "📄 30 Kuota Scan CV / Bulan", "🌐 Widget Website", "📱 Integrasi WhatsApp", "🎯 Lead Capture Otomatis", "💬 Support Teknis 24/7"],
      bonus: "Top-up kredit untuk ekstra scan",
    },
  ];

  return (
    <section id="harga" className="py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#d1fae5_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 text-emerald-600 font-bold tracking-widest uppercase text-xs mb-5">
            <span className="w-8 h-px bg-emerald-400" /> Pricing Plans <span className="w-8 h-px bg-emerald-400" />
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Investasi Cerdas<br />Untuk Bisnis Anda
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg max-w-xl mx-auto">
            Semua paket sudah termasuk <strong className="text-slate-800">AI Chatbot + AI ATS CV Scanner</strong>.
          </motion.p>
        </motion.div>

        {/* Bonus callout */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-2xl mx-auto">
          <div className="flex items-start gap-4 bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl px-6 py-5 shadow-sm">
            <div className="text-3xl shrink-0">🔥</div>
            <div>
              <p className="text-slate-900 font-bold text-sm mb-1">Butuh lebih dari kuota bulanan?</p>
              <p className="text-slate-600 text-sm leading-relaxed">PulseAI kini menggunakan <span className="text-violet-700 font-bold">Sistem Top-Up Kredit Fleksibel</span>. Kehabisan kuota CV Scan? Anda bisa top-up kapan saja (Rp 10.000 = 100 Kredit = 10 Extra Scan) tanpa harus langganan baru!</p>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl border overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${tier.bg} ${tier.border} ${tier.hover}`}
            >
              {tier.badge && (
                <div className="bg-white text-center py-2 border-b border-emerald-500/30">
                  <span className="text-emerald-700 text-xs font-black uppercase tracking-[0.2em]">{tier.badge}</span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-1 ${tier.popular ? "text-white" : "text-slate-900"}`}>Paket {tier.name}</h3>
                  <p className={`text-sm font-medium ${tier.popular ? "text-emerald-100" : "text-slate-400"}`}>Durasi {tier.duration}</p>
                </div>

                <div className="mb-2">
                  <span className={`text-5xl font-black tracking-tight ${tier.popular ? "text-white" : "text-slate-900"}`}>{tier.price}</span>
                </div>
                <p className={`text-sm font-bold mb-6 ${tier.popular ? "text-emerald-200" : "text-emerald-600"}`}>{tier.per}</p>

                <p className={`text-sm leading-relaxed mb-8 ${tier.popular ? "text-emerald-100" : "text-slate-500"}`}>{tier.desc}</p>

                <div className="space-y-3 flex-1 mb-6">
                  {tier.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${tier.popular ? "bg-emerald-500/30 border border-emerald-400/40" : "bg-emerald-100 border border-emerald-200"}`}>
                        <svg className={`w-2.5 h-2.5 ${tier.popular ? "text-emerald-200" : "text-emerald-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className={`text-sm ${tier.popular ? "text-emerald-50" : "text-slate-600"}`}>{feat}</span>
                    </div>
                  ))}

                  <div className="mt-5 pt-5 border-t border-white/20">
                    <div className={`flex items-start gap-3 rounded-xl px-3.5 py-3 ${tier.popular ? "bg-white/15 border border-white/20" : "bg-violet-50 border border-violet-200"}`}>
                      <span className="text-base shrink-0">🔥</span>
                      <span className={`text-xs font-bold leading-relaxed ${tier.popular ? "text-white" : "text-violet-700"}`}>BONUS: {tier.bonus}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={tier.href}
                  target="_blank"
                  className={`block text-center py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-px ${tier.ctaClass}`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { name: "Budi Santoso", role: "Owner, TechStore ID", tag: "AI Chatbot", tagBg: "bg-emerald-100 text-emerald-700 border border-emerald-200", avatar: "from-emerald-400 to-teal-500", content: "Sejak pakai PulseAI, tim CS kami tidak lagi kewalahan di malam hari. Konversi penjualan naik 30% karena semua prospek dibalas dalam hitungan detik.", rating: 5 },
    { name: "Rina Amelia", role: "HR Director, BeautyGlow", tag: "AI ATS Scanner", tagBg: "bg-violet-100 text-violet-700 border border-violet-200", avatar: "from-violet-400 to-indigo-500", content: "Proses screening CV yang biasanya 2 minggu, sekarang selesai dalam 2 jam. AI-nya akurat banget dalam mendeteksi kandidat tidak sesuai kualifikasi.", rating: 5 },
    { name: "Ahmad Rizky", role: "Founder, OtoParts", tag: "Chatbot + ATS", tagBg: "bg-blue-100 text-blue-700 border border-blue-200", avatar: "from-blue-400 to-cyan-500", content: "Dua fitur dalam satu platform! Chatbot bantu tim CS kami, ATS Scanner hemat waktu HR. Value for money yang benar-benar luar biasa.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#d1fae5_1px,transparent_1px)] bg-[size:28px_28px] opacity-25 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-14">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Dipercaya Pebisnis Cerdas</motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg">Lihat apa kata mereka yang telah mengotomatiskan bisnisnya.</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i} variants={fadeInUp}
              className="group relative bg-white border border-slate-100 hover:border-emerald-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:shadow-emerald-50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-7 right-7 text-5xl text-slate-100 font-serif leading-none select-none">"</div>

              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, k) => (
                    <svg key={k} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${r.tagBg}`}>{r.tag}</span>
              </div>

              <p className="text-slate-600 leading-relaxed mb-7 text-sm font-medium relative z-10">&ldquo;{r.content}&rdquo;</p>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-50">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.avatar} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                  <p className="text-slate-400 text-xs">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Apa itu PulseAI dan apa yang bisa dilakukan?", a: "PulseAI adalah platform automasi bisnis berbasis AI dengan dua modul: (1) AI Chatbot & Lead Generation — asisten penjualan 24/7 di website dan WhatsApp, dan (2) AI HR Tools & ATS Scanner — sistem rekrutmen otomatis yang menilai CV pelamar dalam hitungan detik." },
    { q: "Bagaimana cara kerja AI Chatbot-nya?", a: "Upload dokumen bisnis (PDF katalog, SOP, FAQ) ke dashboard. AI menggunakan teknologi RAG untuk memahami konten tersebut dan menjawab pelanggan dengan akurasi 100% berbasis data Anda. Tidak ada halusinasi, tidak ada jawaban ngawur." },
    { q: "Apa itu AI ATS CV Scanner dan cara kerjanya?", a: "AI ATS Scanner membaca PDF CV pelamar dan menghasilkan: Skor ATS (0-100), analisis kelebihan & kekurangan, deteksi red flags (job hopping, gap kerja), rekomendasi keputusan HR, dan draft pesan WhatsApp ke kandidat yang siap kirim." },
    { q: "Apakah perlu berlangganan untuk pakai ATS CV Scanner?", a: "Tidak! AI ATS CV Scanner sudah termasuk BONUS di semua paket. Subscriber mendapat kuota 50 scan CV per bulan. Tanpa langganan pun tersedia 5 scan gratis per bulan untuk dicoba." },
    { q: "Bisa disambungkan ke WhatsApp dan Website?", a: "Tentu! AI Chatbot tersedia dalam dua channel: Widget Website (satu baris kode untuk WordPress, Shopify, atau custom website) dan WhatsApp (scan QR untuk hubungkan nomor bisnis Anda)." },
    { q: "Apakah data bisnis dan CV pelamar saya aman?", a: "Keamanan data adalah prioritas utama. Dokumen bisnis hanya digunakan sebagai basis pengetahuan chatbot Anda sendiri. Data CV tersimpan di sistem Anda dan tidak pernah dibagikan atau digunakan melatih model AI publik." },
    { q: "Mengapa harganya sangat murah?", a: "Karena kami baru saja Beta Launch dan ingin Anda menjadi bagian dari perjalanan PulseAI. Harga early adopter ini tidak akan berlaku selamanya — semakin cepat bergabung, semakin besar keuntungan Anda!" },
  ];

  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-14">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Pertanyaan Umum</motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-lg">Pelajari lebih lanjut tentang bagaimana PulseAI bekerja.</motion.p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? "border-emerald-200 shadow-lg shadow-emerald-50" : "border-slate-100 shadow-sm hover:border-slate-200"}`}
            >
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-6 py-5 text-left flex justify-between items-center gap-4">
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{faq.q}</h3>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? "bg-emerald-600 rotate-180" : "bg-slate-100"}`}>
                  <svg className={`w-4 h-4 transition-colors ${openIndex === i ? "text-white" : "text-slate-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <div className="px-6 pb-5 border-t border-emerald-50">
                      <p className="text-slate-600 text-sm leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────
function FinalPitch() {
  return (
    <section className="py-28 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold backdrop-blur-sm">
            🚀 Automasi Bisnis Dimulai Hari Ini
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Siap Mengotomatiskan<br />Bisnis Anda?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-emerald-100 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            AI Chatbot + AI ATS CV Scanner. Setup dalam 5 menit. Tidak perlu coding. Tidak perlu tim IT.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://wa.me/6287826563459" target="_blank" className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 text-lg font-bold text-emerald-700 bg-white hover:bg-emerald-50 rounded-2xl shadow-2xl shadow-emerald-900/20 transition-all hover:-translate-y-1">
              Book a Demo
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="https://dashboard.pulseai.biz.id" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white border-2 border-white/30 hover:bg-white/15 hover:border-white/50 rounded-2xl transition-all">
              Coba Gratis
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              </div>
              <span className="font-black text-xl text-white">PulseAI <span className="text-[10px] font-bold bg-white/10 text-emerald-400 px-2 py-0.5 rounded-full border border-white/10 align-middle ml-1">Beta</span></span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Platform AI Otomasi Bisnis — AI Chatbot untuk Sales & CS, plus AI ATS CV Scanner untuk rekrutmen lebih cerdas. Satu platform, semua kebutuhan automasi.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Produk</h4>
            <ul className="space-y-3 text-sm">
              {["#solusi|Solusi", "#fitur|Fitur", "#harga|Harga", "#faq|FAQ"].map((item) => {
                const [href, label] = item.split("|");
                return <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>;
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} PulseAI (pulseai.biz.id). All rights reserved.</p>
          <div className="flex gap-5">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Page Assembly ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-emerald-500 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ProblemBreakdown />
        <ProductSuite />
        <HowItWorks />
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
