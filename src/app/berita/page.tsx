import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq, desc, and } from "drizzle-orm";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Berita AI & Tren Teknologi Terkini — PulseAI",
  description:
    "Update berita harian seputar Artificial Intelligence, machine learning, automasi bisnis, dan teknologi digital global yang dikurasi khusus untuk kemudahan membaca.",
  alternates: { canonical: "https://pulseai.biz.id/berita" },
  openGraph: {
    title: "Berita AI & Tren Teknologi Terkini — PulseAI",
    description:
      "Rangkuman berita AI dan tech global harian. Nyaman dibaca, padat wawasan, dan lengkap dengan sumber rujukan utama.",
    url: "https://pulseai.biz.id/berita",
    type: "website",
  },
};

function formatDate(dateStr: string | null) {
  if (!dateStr) return "Terbaru";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readingTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 180));
}

function getSourceDomain(url: string | null): string {
  if (!url) return "PulseAI Desk";
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return "Sumber Eksternal";
  }
}

export default function BeritaPage() {
  const newsList = db
    .select()
    .from(posts)
    .where(and(eq(posts.status, "published"), eq(posts.category, "news")))
    .orderBy(desc(posts.publishedAt))
    .all();

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 selection:bg-emerald-500 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#faf9f6]/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            </div>
            <span className="font-black text-xl text-stone-900 tracking-tight">PulseAI</span>
            <span className="hidden sm:inline-block text-[11px] font-bold tracking-widest uppercase text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-300/60 ml-1">
              Radar Berita
            </span>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6 text-sm font-semibold text-stone-600">
            <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
            <Link href="/berita" className="text-emerald-700 font-bold">Berita AI</Link>
            <Link href="/blog" className="hover:text-emerald-700 transition-colors">Blog</Link>
            <Link href="/jasa-web" className="hover:text-emerald-700 transition-colors hidden sm:block">Jasa Web</Link>
          </nav>
          <Link
            href="https://dashboard.pulseai.biz.id"
            className="text-xs md:text-sm font-bold bg-stone-900 hover:bg-stone-800 text-white px-4 md:px-5 py-2 rounded-xl transition-all shadow-sm"
          >
            Dashboard
          </Link>
        </div>
      </header>

      {/* Hero Section - Text First, Clean & Focused */}
      <section className="pt-16 pb-12 px-4 border-b border-stone-200/60 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Update Harian AI & Teknologi Global
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.15] mb-5">
            Kilas Berita <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">AI & Tech</span> Terkini
          </h1>
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Disajikan dalam format teks yang rapi, ringkas, dan nyaman dibaca tanpa distraksi gambar berat. Lengkap dengan sumber rujukan utama untuk transparansi informasi.
          </p>
        </div>
      </section>

      {/* Main Content List */}
      <main className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {newsList.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl">
                📰
              </div>
              <h2 className="text-xl font-bold text-stone-800 mb-2">Belum ada berita hari ini</h2>
              <p className="text-stone-500 text-sm max-w-md mx-auto mb-6">
                Sistem AI kami sedang mengumpulkan dan menyusun rangkuman berita teknologi terbaru. Berita akan otomatis diperbarui setiap hari jam 10 pagi.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
              >
                ← Kembali ke Beranda
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {newsList.map((item, index) => {
                const tags: string[] = JSON.parse(item.tags || "[]");
                const minutes = readingTime(item.content);
                const sourceDomain = getSourceDomain(item.sourceUrl);

                return (
                  <article
                    key={item.id}
                    className="group bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 hover:border-emerald-500/40 p-6 md:p-8 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-950/5 relative"
                  >
                    {/* Meta Top Line */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-stone-500 mb-3">
                      <span className="font-semibold text-stone-900 bg-stone-100 px-2.5 py-1 rounded-md">
                        {formatDate(item.publishedAt || item.createdAt)}
                      </span>
                      <span>•</span>
                      <span className="text-emerald-700 font-medium">⏱️ {minutes} menit baca</span>
                      {sourceDomain && (
                        <>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1 text-stone-600 bg-stone-50 px-2 py-0.5 rounded border border-stone-200">
                            🌐 Rujukan: <strong className="font-semibold">{sourceDomain}</strong>
                          </span>
                        </>
                      )}
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 group-hover:text-emerald-800 transition-colors tracking-tight leading-snug mb-3">
                      <Link href={`/berita/${item.slug}`} className="focus:outline-none">
                        {item.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    {item.excerpt && (
                      <p className="text-stone-600 text-base md:text-lg leading-relaxed line-clamp-3 mb-5 font-normal">
                        {item.excerpt}
                      </p>
                    )}

                    {/* Footer Row: Tags + CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-100">
                      <div className="flex flex-wrap gap-1.5">
                        {tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200/70"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/berita/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-transform group-hover:translate-x-1"
                      >
                        Baca Lengkap
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* SEO & Community Footer */}
      <footer className="border-t border-stone-200 bg-white py-12 px-4 mt-16 text-center text-stone-500 text-sm">
        <div className="container mx-auto max-w-4xl space-y-4">
          <p className="font-semibold text-stone-700">
            PulseAI Radar Berita — Menghubungkan Inovasi Kecerdasan Buatan dengan Pelaku Bisnis Indonesia
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-500">
            <Link href="/" className="hover:text-emerald-700">Beranda</Link>
            <Link href="/berita" className="hover:text-emerald-700">Berita AI</Link>
            <Link href="/blog" className="hover:text-emerald-700">Blog PulseAI</Link>
            <Link href="/jasa-web" className="hover:text-emerald-700">Jasa Website</Link>
            <Link href="/privacy" className="hover:text-emerald-700">Kebijakan Privasi</Link>
          </div>
          <p className="text-xs text-stone-400 pt-4">
            © {new Date().getFullYear()} PulseAI by PT Astra Solusi Digital. Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
      </footer>
    </div>
  );
}
