import Link from "next/link";


export const metadata = {
  title: "Terms of Service | PulseAI",
  description: "Syarat dan Ketentuan layanan PulseAI oleh PT Astra Solusi Digital.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center text-slate-500 hover:text-emerald-600 transition-colors font-medium">
            ←
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Terms of Service (Syarat dan Ketentuan)</h1>
          <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">Pembaruan Terakhir: 24 Agustus 2026</p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Ketentuan Umum</h2>
              <p>
                Selamat datang di PulseAI. Layanan ini disediakan oleh <strong>PT Astra Solusi Digital</strong> ("Kami"). Dengan mendaftar, mengakses, atau menggunakan layanan PulseAI, termasuk Pulse Chat, Pulse Career, dan Pulse Finance ("Layanan"), Anda ("Pengguna") menyetujui untuk tunduk pada Syarat dan Ketentuan ini.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Deskripsi Layanan</h2>
              <p>
                PulseAI adalah platform kecerdasan buatan (AI) yang menyediakan alat otomatisasi operasional bisnis. Layanan kami mencakup namun tidak terbatas pada chatbot (Pulse Chat), pemindaian CV/Resume pelamar kerja (Pulse Career), dan alat manajemen keuangan (Pulse Finance). Kami berhak menambah, mengubah, atau menghentikan fitur tertentu kapan saja demi peningkatan layanan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Penggunaan WhatsApp (Non-Official API)</h2>
              <p>
                Layanan Pulse Chat menyediakan opsi integrasi WhatsApp menggunakan teknologi non-official API (via pindaian kode QR) guna memberikan kepraktisan operasional bagi UMKM.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Anda memahami dan menyetujui bahwa penggunaan API non-resmi memiliki risiko, termasuk namun tidak terbatas pada <strong>pembatasan, suspensi, atau pemblokiran nomor WhatsApp</strong> oleh pihak Meta/WhatsApp jika terdeteksi aktivitas mencurigakan, pengiriman pesan massal/spam, atau laporan dari pengguna lain.</li>
                <li>Kami <strong>sangat menyarankan</strong> Anda untuk menggunakan nomor telepon khusus bisnis (bukan nomor telepon pribadi utama) saat menggunakan fitur ini.</li>
                <li>PT Astra Solusi Digital <strong>tidak bertanggung jawab</strong> atas kerugian material maupun imaterial yang timbul akibat pemblokiran nomor WhatsApp Pengguna oleh pihak Meta/WhatsApp.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Akun dan Keamanan</h2>
              <p>
                Anda bertanggung jawab penuh atas kerahasiaan kredensial akun Anda (email, kata sandi, token API). Segala aktivitas yang terjadi di bawah akun Anda adalah tanggung jawab Anda sepenuhnya. Jika Anda mencurigai adanya akses tidak sah ke akun Anda, segera hubungi tim dukungan kami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Kebijakan Privasi & Data</h2>
              <p>
                Penggunaan Layanan tunduk pada Kebijakan Privasi (Privacy Policy) kami. Dengan menggunakan Layanan, Anda menyetujui praktik pengumpulan, penggunaan, dan penyimpanan data sebagaimana dijelaskan dalam <Link href="/privacy" className="text-emerald-600 hover:underline">Kebijakan Privasi</Link> kami. Khusus untuk pemrosesan Data Pribadi Pihak Ketiga (seperti data pelamar/CV pelanggan Anda), Anda menjamin bahwa Anda telah memperoleh izin yang sah dari pemilik data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Batasan Tanggung Jawab (Limitation of Liability)</h2>
              <p>
                Layanan diberikan secara "sebagaimana adanya" (as is). PT Astra Solusi Digital tidak menjamin bahwa Layanan akan 100% bebas dari gangguan, kesalahan teknis, atau cacat perangkat lunak. Sejauh diizinkan oleh hukum yang berlaku, kami tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, atau konsekuensial (termasuk hilangnya pendapatan atau data) yang timbul dari penggunaan atau ketidakmampuan menggunakan Layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Pemutusan Layanan</h2>
              <p>
                Kami berhak untuk menangguhkan atau mengakhiri akses Anda ke Layanan kapan saja, tanpa pemberitahuan sebelumnya, jika kami menemukan pelanggaran terhadap Syarat dan Ketentuan ini, termasuk penyalahgunaan sistem (spamming, peretasan, pelanggaran hak cipta).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. Kontak</h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami di <strong>support@pulseai.biz.id</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
