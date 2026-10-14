import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Jasa Pembuatan Website Kilat | PulseAI",
  description: "Website Bisnis & Company Profile Siap Tayang dalam 2–6 Jam oleh PT Astra Solusi Digital.",
};

// ── Types ──────────────────────────────────────────────────────────────────────
interface Package {
  id: number;
  name: string;
  thumbnail: string;
  url_preview: string;
  price: number;
  description: string;
}

// ── Server-side data fetch ─────────────────────────────────────────────────────
async function getPackages(): Promise<Package[]> {
  try {
    const res = await fetch('https://api.akademiumkm.id/api/packages', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'https://akademiumkm.id',
        'Referer': 'https://akademiumkm.id/',
      },
      next: { revalidate: 3600 }, // revalidate every 1 hour
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').slice(0, 120) + (html.length > 120 ? '…' : '');
}

// ── Check icon ─────────────────────────────────────────────────────────────────
function CheckIcon({ color = 'text-emerald-500' }: { color?: string }) {
  return (
    <svg className={`w-5 h-5 ${color} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function JasaWebPage() {
  const packages = await getPackages();

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-emerald-500 selection:text-white scroll-smooth">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-100">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            </div>
            <span className="font-black text-xl text-slate-900 tracking-tight">PulseAI</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            <Link href="#pricing" className="hover:text-emerald-600 transition-colors duration-200">Harga</Link>
            <Link href="#portfolio" className="hover:text-emerald-600 transition-colors duration-200">Portofolio</Link>
            <Link href="#workflow" className="hover:text-emerald-600 transition-colors duration-200">Alur Kerja</Link>
            <Link href="#faq" className="hover:text-emerald-600 transition-colors duration-200">FAQ</Link>
          </nav>
          <Link
            href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20mau%20konsultasi%20pembuatan%20website."
            target="_blank"
            className="text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-slate-900/20 hover:-translate-y-px"
          >
            Konsultasi WA
          </Link>
        </div>
      </header>

      <main>
        {/* ── HERO SECTION ── */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-400/10 blur-3xl rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Layanan Kilat • PT Astra Solusi Digital
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Website Bisnis &amp; Company Profile Siap Tayang dalam{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">2–6 Jam</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tingkatkan penjualan dan kredibilitas bisnis Anda dengan website katalog dinamis, halaman admin mandiri, dan integrasi checkout langsung ke WhatsApp.{' '}
              <strong>Tanpa biaya sewa server bulanan (Sistem Beli Putus).</strong>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-slate-500">
              {['Website Dinamis + Halaman Admin', 'Fast Checkout ke WhatsApp', 'Free Domain Resmi .my.id', 'Bebas Biaya Server Bulanan'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING SECTION ── */}
        <section id="pricing" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pilihan Paket Website Siap Jualan</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Mulai dari web katalog produk kilat dengan admin panel mandiri hingga sistem aplikasi bisnis kustom.</p>
            </div>

            {/* 3 equal-height cards — use items-stretch so all cards fill the row */}
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">

              {/* Paket 1 */}
              <div className="flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Web Toko &amp; Katalog Express</h3>
                  <p className="text-sm text-slate-500">Target: UMKM, Toko, Kuliner, Fashion &amp; Olshop yang butuh etalase produk aktif.</p>
                </div>
                <div className="mb-6">
                  <span className="text-slate-500 text-sm font-medium">Mulai</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 500.000</span>
                    <span className="text-slate-500 text-xs font-semibold">/ Sekali Bayar</span>
                  </div>
                </div>
                <div className="flex-1 mb-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-lg border border-amber-200/50 mb-5">
                    ⏱️ SLA: Selesai 1 – 2 Hari Kerja
                  </div>
                  <ul className="space-y-4 text-sm text-slate-600">
                    {[
                      'Website Toko & Etalase Dinamis (Hero Promo, Profil Toko, Katalog Produk, Kontak & Alamat Maps)',
                      'Halaman Admin Khusus: Pemilik bisa login lewat HP/Laptop untuk Tambah, Edit Harga, Upload Foto, & Hapus Produk sendiri',
                      'Fast Checkout WhatsApp: Pembeli klik "Beli", format rincian pesanan otomatis terisi rapi langsung ke WhatsApp penjual',
                      'Kapasitas hingga 15 – 20 Produk aktif',
                      'Sudah Termasuk Domain Resmi: Bebas pilih domain (.my.id aktif 1 tahun) atau pasang domain sendiri',
                      'Hosting Cloud Cepat & Stabil (Bebas Biaya Server Bulanan / Beli Putus)',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5"><CheckIcon /><span>{f}</span></li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20mau%20order%20Website%20Katalog%20Dinamis%20500k."
                  target="_blank"
                  className="block w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-center rounded-xl transition-colors mt-auto"
                >
                  Pesan Web Katalog 500k
                </Link>
              </div>

              {/* Paket 2 — Most Popular */}
              <div className="flex flex-col bg-emerald-600 rounded-3xl p-8 border-2 border-emerald-400 shadow-2xl shadow-emerald-500/30 relative hover:-translate-y-1 transition-all">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-black uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                  Paling Populer / Best Value
                </div>
                <div className="mb-6 mt-2">
                  <h3 className="text-xl font-bold text-white mb-2">Business Catalog Pro &amp; Marketing</h3>
                  <p className="text-sm text-emerald-100">Target: Bisnis berkembang, distributor, fashion &amp; toko dengan banyak varian produk.</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold text-white">Rp 1.250.000</span>
                    <span className="text-emerald-200 text-xs font-semibold">/ Sekali Bayar</span>
                  </div>
                  <p className="text-emerald-200 text-xs mt-1.5 font-medium">Beli Putus • Tanpa Biaya Bulanan</p>
                </div>
                <div className="flex-1 mb-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-700/50 text-emerald-100 text-xs font-bold rounded-lg border border-emerald-500/50 mb-5">
                    ⏱️ SLA: Selesai 2 – 3 Hari Kerja
                  </div>
                  <ul className="space-y-4 text-sm text-emerald-50">
                    {[
                      'Semua fitur lengkap di Paket Web Katalog Express',
                      '🔥 BONUS: Gratis 1 Bulan Widget AI Chatbot Website (Otomatis jawab pertanyaan pembeli 24/7 di web tanpa ribet WhatsApp Meta)',
                      'Kapasitas Produk UNLIMITED (Tanpa batas jumlah produk) + Filter Kategori Bertingkat & Fitur Search',
                      'Halaman Khusus Tiap Produk + Rich Preview WhatsApp (Saat link produk di-share ke WA, otomatis muncul foto, judul & harganya di chat)',
                      'Halaman Admin Pro: Dashboard kelola promo diskon, label produk (Best Seller/Promo), & rekap pesanan masuk',
                      'Banner / Slider Promo Berjalan di halaman utama untuk flash sale & event',
                      'Termasuk Domain Pilihan (.my.id gratis atau opsi upgrade domain .com/.id)',
                      'Setup Google Maps Bisnis & Pasang Tracking Iklan (Meta Pixel FB/IG Ads & Google Analytics)',
                      'Opsi perpanjangan AI Chatbot setelah 1 bulan fleksibel sesuai paket PulseAI (mulai Rp 150.000/bln — tanpa paksaan)',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5"><CheckIcon color="text-emerald-300" /><span>{f}</span></li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20tertarik%20dengan%20paket%20Business%20Catalog%20Pro%201.25jt."
                  target="_blank"
                  className="block w-full py-3.5 px-4 bg-white hover:bg-slate-50 text-emerald-700 font-bold text-center rounded-xl transition-colors shadow-sm mt-auto"
                >
                  Pesan Paket Business Pro
                </Link>
              </div>

              {/* Paket 3 */}
              <div className="flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Web &amp; Application</h3>
                  <p className="text-sm text-slate-500">Target: Perusahaan yang butuh portal internal, sistem kustom, atau fitur skala besar.</p>
                </div>
                <div className="mb-6">
                  <span className="text-slate-500 text-sm font-medium">Mulai</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 3.500.000</span>
                    <span className="text-slate-500 font-bold">++</span>
                  </div>
                </div>
                <div className="flex-1 mb-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg border border-slate-200 mb-5">
                    ⏱️ SLA: 7 – 21 Hari Kerja
                  </div>
                  <ul className="space-y-4 text-sm text-slate-600">
                    {[
                      'Full-stack kustom (Laravel / Next.js + PostgreSQL)',
                      'Autentikasi multi-role & dashboard panel',
                      'Integrasi API pihak ketiga (Payment Gateway, Bank, CRM, Webhook)',
                      'Pengaturan Dedicated VPS / Cloud Server mandiri',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5"><CheckIcon /><span>{f}</span></li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20ingin%20konsultasi%20kebutuhan%20pembuatan%20website/sistem%20kustom."
                  target="_blank"
                  className="block w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-center rounded-xl transition-colors mt-auto"
                >
                  Konsultasi Custom Project
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── PORTFOLIO / TEMPLATE SHOWCASE ── */}
        {packages.length > 0 && (
          <section id="portfolio" className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-5">
                  🎨 Template Siap Pakai
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Contoh Hasil Karya Kami</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Pilih dari koleksi template premium kami — klik untuk preview langsung, lalu pesan via WhatsApp untuk kustomisasi ke bisnis Anda.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={pkg.thumbnail}
                        alt={pkg.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                      {/* Price chip */}
                      <div className="absolute top-2 right-2 px-2.5 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full shadow">
                        {formatPrice(pkg.price)}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug line-clamp-2">{pkg.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed flex-1 line-clamp-3 mb-4">
                        {stripHtml(pkg.description)}
                      </p>

                      <div className="flex gap-2 mt-auto">
                        <Link
                          href={pkg.url_preview}
                          target="_blank"
                          className="flex-1 text-center py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors"
                        >
                          👁 Preview
                        </Link>
                        <Link
                          href={`https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20tertarik%20dengan%20template%20"${encodeURIComponent(pkg.name)}"%20seharga%20${encodeURIComponent(formatPrice(pkg.price))}.%20Bisa%20dibantu%20kustomisasi?`}
                          target="_blank"
                          className="flex-1 text-center py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors"
                        >
                          Pesan
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-slate-500 text-sm mb-4">Template yang Anda cari tidak ada? Kami bisa buat dari nol sesuai kebutuhan Anda.</p>
                <Link
                  href="https://wa.me/6287826563459?text=Halo%20Astra%20Solusi%20Digital,%20saya%20ingin%20request%20template%20custom%20untuk%20bisnis%20saya."
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all hover:-translate-y-px shadow-md"
                >
                  Request Template Custom
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── ALUR KERJA ── */}
        <section id="workflow" className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Cara Kerja Kami</h2>
              <p className="text-slate-500">Tiga langkah mudah untuk go-digital hari ini juga.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: '1', title: 'Kirim Materi', desc: 'Kirimkan logo, profil usaha, deskripsi layanan, dan kontak Anda via WhatsApp.', accent: false },
                { n: '2', title: 'Setup & Input Data', desc: 'Tim kami menyiapkan website, halaman admin, menginput produk awal Anda, dan menghubungkannya ke WhatsApp.', accent: true },
                { n: '3', title: 'Web Live & Siap Jualan!', desc: 'Website Anda tayang, responsif, super cepat, dan langsung siap menerima orderan pelanggan.', accent: false },
              ].map((s) => (
                <div key={s.n} className={`rounded-2xl p-8 border relative shadow-sm ${s.accent ? 'bg-emerald-50/50 border-emerald-100' : 'bg-white border-slate-100'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black absolute -top-6 border-4 shadow-sm ${s.accent ? 'bg-emerald-100 text-emerald-600 border-white' : 'bg-white text-slate-300 border-slate-50'}`}>
                    {s.n}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-4">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Tanya Jawab (FAQ)</h2>
              <p className="text-slate-500">Hal-hal yang sering ditanyakan seputar jasa pembuatan website kami.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'Kenapa tidak ada biaya sewa server bulanan?',
                  a: 'Website Anda dikelola pada infrastruktur cloud server modern yang dioptimasi khusus untuk katalog dinamis ringan. Seluruh biaya hosting sudah kami gratiskan selamanya, sehingga Anda bebas dari beban biaya langganan bulanan (sistem beli putus).',
                },
                {
                  q: 'Bagaimana dengan domainnya?',
                  a: 'Setiap paket sudah termasuk domain resmi (pilihan gratis domain lokal seperti .my.id aktif selama 1 tahun) atau Anda bisa menghubungkan domain yang sudah Anda miliki. Jika ingin upgrade ke domain internasional seperti .com atau .id, Anda cukup menambah selisih biaya registrasi domain resmi tersebut.',
                },
                {
                  q: 'Bagaimana cara klien mengelola produk dan menerima pesanan?',
                  a: 'Kami sediakan Halaman Admin khusus yang bisa Anda akses langsung lewat HP atau laptop. Di sana Anda bisa menambah produk baru, mengganti harga, mengunggah foto, dan mengatur stok kapan saja tanpa perlu paham koding. Setiap kali pengunjung website mengklik "Beli/Pesan", rincian pesanan akan otomatis terformat rapi dan dikirim langsung ke WhatsApp Anda.',
                },
                {
                  q: 'Bagaimana dengan bonus Widget AI Chatbot pada Paket Business Pro?',
                  a: 'Setiap pemesanan Paket Business Pro langsung mendapatkan bonus 1 bulan gratis Widget AI Chatbot (PulseAI Engine) yang terpasang langsung di website Anda. AI ini otomatis dilatih mengenali produk dan FAQ bisnis Anda untuk menjawab pertanyaan pengunjung secara cerdas 24/7 di web tanpa memerlukan verifikasi rumit WhatsApp Meta. Setelah 1 bulan, perpanjangan bersifat opsional sesuai tarif langganan PulseAI (mulai Rp 150.000/bln). Jika tidak diperpanjang, website katalog dan checkout WhatsApp Anda tetap aktif selamanya tanpa terganggu.',
                },
              ].map((faq, i) => (
                <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-slate-900">
                    {faq.q}
                    <span className="transition group-open:rotate-180 text-emerald-600 shrink-0 ml-4">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-center border-t border-slate-800">
        <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} PT Astra Solusi Digital. All rights reserved.</p>
      </footer>
    </div>
  );
}
