import Link from "next/link";


export const metadata = {
  title: "Privacy Policy | PulseAI",
  description: "Kebijakan Privasi dan Perlindungan Data PulseAI oleh PT Astra Solusi Digital.",
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Privacy Policy (Kebijakan Privasi)</h1>
          <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">Pembaruan Terakhir: 24 Agustus 2026</p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Pendahuluan</h2>
              <p>
                <strong>PT Astra Solusi Digital</strong> ("Kami") sangat menghargai privasi Anda dan berkomitmen untuk melindungi Data Pribadi Anda serta data milik klien atau pelamar Anda yang diproses melalui layanan PulseAI. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi tersebut sesuai dengan Undang-Undang Perlindungan Data Pribadi (UU PDP) yang berlaku di Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Data Registrasi:</strong> Nama, alamat email, nomor telepon, dan informasi perusahaan saat Anda membuat akun.</li>
                <li><strong>Data Interaksi WhatsApp & Meta:</strong> Saat berinteraksi melalui integrasi WhatsApp Business API kami, kami mengumpulkan nomor telepon, nama profil WhatsApp, dan isi pesan untuk memberikan respons chatbot yang akurat. Data yang ditransmisikan melalui WhatsApp diproses sesuai dengan Kebijakan Privasi Meta.</li>
                <li><strong>Data Interaksi (Pulse Chat):</strong> Riwayat percakapan chatbot, dokumen *knowledge base* yang Anda unggah, dan data calon pelanggan (leads) yang dikumpulkan bot.</li>
                <li><strong>Data Sensitif (Pulse Career - Data Pelamar/CV):</strong> Dokumen *Curriculum Vitae* (CV) atau resume yang Anda unggah ke dalam sistem untuk keperluan *ATS Scoring* dan analisis kandidat.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Pengumpulan dan Pemrosesan Data Sensitif (Data Pelamar/CV)</h2>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-4">
                <p className="font-semibold text-emerald-900 mb-2">Terkait penggunaan modul Pulse Career, berikut adalah komitmen kami terhadap penanganan dokumen CV pelamar:</p>
                <ol className="list-decimal pl-5 space-y-3 text-emerald-800">
                  <li>Kami menerima dan mengekstrak dokumen CV/Resume yang diunggah oleh Anda semata-mata untuk keperluan *ATS scoring* dan rekomendasi HR.</li>
                  <li>Data ini dianggap sebagai Data Pribadi Pihak Ketiga (kandidat). Anda, selaku Pengguna (HR/Perusahaan), bertanggung jawab secara hukum untuk memastikan bahwa pelamar telah memberikan persetujuan eksplisit kepada Anda untuk memproses data mereka melalui pihak ketiga (PulseAI).</li>
                  <li>Data diproses oleh sistem AI kami secara tertutup. <strong>Data ini TIDAK akan dijual kepada pihak ketiga atau digunakan untuk melatih model AI publik (non-training data).</strong></li>
                  <li>Data disimpan pada infrastruktur cloud terenkripsi, dan hanya Anda (sebagai pemilik akun yang sah) yang memiliki hak akses penuh terhadap dokumen tersebut. Anda dapat menghapus data tersebut kapan saja melalui dasbor Anda.</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Penggunaan Informasi</h2>
              <p>
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Menyediakan, memelihara, dan meningkatkan Layanan kami.</li>
                <li>Menghasilkan analisis data sesuai instruksi yang Anda berikan (seperti ekstraksi CV atau laporan keuangan).</li>
                <li>Berkomunikasi dengan Anda mengenai pembaruan layanan, masalah teknis, atau penawaran yang relevan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Keamanan Data</h2>
              <p>
                Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang memadai, termasuk enkripsi data dan pembatasan akses, untuk melindungi informasi Anda dan data pihak ketiga dari akses, penggunaan, atau pengungkapan yang tidak sah. Meskipun demikian, tidak ada metode transmisi di internet yang 100% aman, dan kami tidak dapat menjamin keamanan mutlak atas data Anda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Penghapusan dan Hak Subjek Data</h2>
              <p>
                Anda memiliki hak untuk mengakses, mengoreksi, atau menghapus Data Pribadi Anda dari sistem kami. Jika Anda ingin menghapus akun Anda beserta seluruh data yang terkait secara permanen, silakan hubungi tim dukungan kami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Perubahan Kebijakan Privasi</h2>
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Jika kami melakukan perubahan yang signifikan terkait cara kami menangani Data Pribadi, kami akan memberitahukan Anda melalui email atau melalui pemberitahuan di dalam platform PulseAI.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. Kontak Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai perlindungan data atau Kebijakan Privasi ini, silakan hubungi kami di:
                <br /><br />
                <strong>PT Astra Solusi Digital</strong><br />
                Email: support@pulseai.biz.id
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
