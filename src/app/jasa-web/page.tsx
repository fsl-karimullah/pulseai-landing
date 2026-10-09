import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Jasa Pembuatan Website Kilat | PulseAI",
  description: "Website Bisnis & Company Profile Siap Tayang dalam 2–6 Jam oleh PT Astra Solusi Digital.",
};

export default function JasaWebPage() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-emerald-500 selection:text-white scroll-smooth">
      {/* Simple Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-100">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
             <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              </div>
              <span className="font-black text-xl text-slate-900 tracking-tight">
                PulseAI
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            <Link href="#pricing" className="hover:text-emerald-600 transition-colors duration-200">Harga</Link>
            <Link href="#workflow" className="hover:text-emerald-600 transition-colors duration-200">Alur Kerja</Link>
            <Link href="#faq" className="hover:text-emerald-600 transition-colors duration-200">FAQ</Link>
          </nav>
          <Link href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20mau%20konsultasi%20pembuatan%20website." target="_blank" className="text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-slate-900/20 hover:-translate-y-px">
            Konsultasi WA
          </Link>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-400/10 blur-3xl rounded-full pointer-events-none"></div>
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Layanan Kilat • PT Astra Solusi Digital
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Website Bisnis & Company Profile Siap Tayang dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">2–6 Jam</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Tingkatkan kredibilitas bisnis Anda dengan website berkecepatan tinggi, tampilan modern, dan siap terhubung ke WhatsApp atau AI CS. <strong>Tanpa biaya sewa server bulanan yang mahal.</strong>
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-slate-500">
                 <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Hosted on High-Speed Vercel Global CDN</span>
                 <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Mobile Responsive</span>
                 <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Free SSL HTTPS</span>
                 <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> 100% Siap Pakai</span>
              </div>
           </div>
        </section>

        {/* ALUR KERJA (HANYA 3 LANGKAH) */}
        <section id="workflow" className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Cara Kerja Kami</h2>
              <p className="text-slate-500">Tiga langkah mudah untuk go-digital hari ini juga.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl font-black text-slate-300 absolute -top-6 border-4 border-slate-50 shadow-sm">1</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-4">Kirim Materi</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Kirimkan logo, profil usaha, deskripsi layanan, dan kontak Anda via WhatsApp.</p>
               </div>
               <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100 relative shadow-sm">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl font-black text-emerald-500 absolute -top-6 border-4 border-white shadow-sm">2</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-4">Proses Kilat</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Tim ahli kami merakit dan men-deploy web Anda langsung ke Vercel CDN dalam hitungan jam.</p>
               </div>
               <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl font-black text-slate-300 absolute -top-6 border-4 border-slate-50 shadow-sm">3</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-4">Web Live & Siap Jualan!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Website Anda tayang, responsif, super cepat, dan langsung siap menerima orderan pelanggan.</p>
               </div>
            </div>
          </div>
        </section>

        {/* PRICING & SERVICE TIERS */}
        <section id="pricing" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pilihan Paket Website</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Kami menyediakan opsi dari company profile cepat saji hingga aplikasi web custom terintegrasi AI.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              
              {/* Paket 1 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Express Company Profile</h3>
                  <p className="text-sm text-slate-500">Target: UMKM, Toko, Kontraktor, Klinik, & Portofolio Legalitas Tender.</p>
                </div>
                <div className="mb-6">
                  <span className="text-slate-500 text-sm font-medium">Mulai</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 500.000</span>
                  </div>
                </div>
                <div className="mb-8">
                   <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-lg border border-amber-200/50 mb-5">
                      ⏱️ SLA: Selesai 2 – 6 Jam (Maks. 1 Hari)
                   </div>
                   <ul className="space-y-4 text-sm text-slate-600">
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>1 Halaman Modern Single-Page (Hero, Tentang Kami, Layanan/Produk, Galeri/Portofolio, Kontak/Alamat)</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Desain ultra responsif (Mobile & Desktop)</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Hosting gratis, aman, dan ngebut di Vercel CDN (Bebas biaya server bulanan)</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Integrasi tombol CTA langsung ke WhatsApp Admin</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Setup domain klien (Biaya domain dibeli sendiri oleh klien)</span></li>
                   </ul>
                </div>
                <Link href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20mau%20order%20Website%20Company%20Profile%20Kilat%20500k." target="_blank" className="block w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-center rounded-xl transition-colors">
                  Pesan Web Kilat 500k
                </Link>
              </div>

              {/* Paket 2 (Popular) */}
              <div className="bg-emerald-600 rounded-3xl p-8 border border-emerald-500 shadow-xl shadow-emerald-500/20 relative lg:-mt-4 lg:mb-4 transition-all hover:-translate-y-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-black uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                  Paling Populer / Best Value
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 mt-2">Company Profile + AI Chatbot</h3>
                  <p className="text-sm text-emerald-100">Target: Bisnis yang ingin otomatisasi penuh antara web dan CS WhatsApp.</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold text-white">Rp 1.250.000</span>
                  </div>
                  <p className="text-emerald-200 text-xs mt-1.5 font-medium">+ Biaya Langganan AI</p>
                </div>
                <div className="mb-8">
                   <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-700/50 text-emerald-100 text-xs font-bold rounded-lg border border-emerald-500/50 mb-5">
                      ⏱️ SLA: Selesai 1 – 2 Hari Kerja
                   </div>
                   <ul className="space-y-4 text-sm text-emerald-50">
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Semua fitur di Paket Express Company Profile (Vercel CDN)</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Setup & Integrasi Asisten WhatsApp AI resmi (PulseAI Engine) pada nomor WhatsApp klien</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Training Knowledge Base AI sesuai profil produk, jasa, dan FAQ bisnis klien</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Biaya Pemeliharaan & Kuota Token AI: Berlangganan mulai Rp 350.000/bulan</span></li>
                   </ul>
                </div>
                <Link href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20tertarik%20dengan%20paket%20Web%20Company%20Profile%20+%20AI%20Chatbot." target="_blank" className="block w-full py-3.5 px-4 bg-white hover:bg-slate-50 text-emerald-700 font-bold text-center rounded-xl transition-colors shadow-sm">
                  Pesan Paket Web + AI
                </Link>
              </div>

              {/* Paket 3 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Web & Application</h3>
                  <p className="text-sm text-slate-500">Target: Perusahaan yang butuh portal internal, sistem kustom, atau fitur skala besar.</p>
                </div>
                <div className="mb-6">
                  <span className="text-slate-500 text-sm font-medium">Mulai</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 3.500.000</span><span className="text-slate-500 font-bold">++</span>
                  </div>
                </div>
                <div className="mb-8">
                   <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg border border-slate-200 mb-5">
                      ⏱️ SLA: 7 – 21 Hari Kerja
                   </div>
                   <ul className="space-y-4 text-sm text-slate-600">
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Full-stack kustom (Laravel / Next.js + PostgreSQL)</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Autentikasi multi-role & dashboard panel</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Integrasi API pihak ketiga (Payment Gateway, Bank, CRM, Webhook)</span></li>
                     <li className="flex items-start gap-2.5"><svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> <span>Pengaturan Dedicated VPS / Cloud Server mandiri</span></li>
                   </ul>
                </div>
                <Link href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20ingin%20konsultasi%20kebutuhan%20pembuatan%20website/sistem%20kustom." target="_blank" className="block w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-center rounded-xl transition-colors">
                  Konsultasi Custom Project
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Tanya Jawab (FAQ)</h2>
              <p className="text-slate-500">Hal-hal yang sering ditanyakan seputar jasa pembuatan website kami.</p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "Kenapa tidak ada biaya sewa server bulanan untuk paket Express?",
                  a: "Website Anda dideploy ke infrastruktur Vercel global CDN yang menyediakan kuota gratis yang sangat besar, stabil, dan super cepat untuk website statis / Single-Page Application. Sehingga Anda bebas dari beban biaya langganan server bulanan."
                },
                {
                  q: "Bagaimana dengan domainnya?",
                  a: "Klien bisa menggunakan domain yang sudah dimiliki dan kami akan membantu menghubungkannya ke server. Jika belum punya, kami bisa memandu Anda membelinya sendiri (agar kepemilikan 100% di tangan Anda) atau kami bantu daftarkan sebagai layanan tambahan."
                },
                {
                  q: "Bagaimana cara kerja AI Chatbot WhatsApp pada paket ke-2?",
                  a: "Setelah website selesai, kami akan mengintegrasikan engine PulseAI ke nomor WhatsApp bisnis Anda. AI kami akan dilatih (ditraining) membaca informasi website, daftar harga, dan katalog produk Anda. AI asisten ini akan otomatis membalas pertanyaan pelanggan Anda 24/7 di WhatsApp resmi."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-slate-900">
                    {faq.q}
                    <span className="transition group-open:rotate-180 text-emerald-600">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer minimal */}
      <footer className="py-8 bg-slate-900 text-center border-t border-slate-800">
        <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} PT Astra Solusi Digital. All rights reserved.</p>
      </footer>
    </div>
  );
}
