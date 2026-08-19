import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Tips AI, Bisnis & Rekrutmen | PulseAI",
  description:
    "Artikel dan tips seputar AI untuk bisnis, automasi customer service, rekrutmen cerdas, dan transformasi digital UMKM Indonesia dari PT Astra Solusi Digital.",
  alternates: { canonical: "https://pulseai.biz.id/blog" },
  openGraph: {
    title: "Blog PulseAI — Tips AI, Bisnis & Rekrutmen untuk Indonesia",
    description:
      "Baca artikel terbaru tentang AI chatbot, ATS CV Scanner, dan keuangan bisnis dari tim PT Astra Solusi Digital.",
    url: "https://pulseai.biz.id/blog",
    type: "website",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readingTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export default function BlogPage() {
  const publishedPosts = db
    .select()
    .from(posts)
    .where(eq(posts.status, "published"))
    .orderBy(desc(posts.publishedAt))
    .all();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Navbar placeholder — reuse from landing page */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            </div>
            <span className="font-black text-xl text-slate-900 tracking-tight">PulseAI</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-500">
            <Link href="/#fitur" className="hover:text-emerald-600 transition-colors">Fitur</Link>
            <Link href="/#harga" className="hover:text-emerald-600 transition-colors">Harga</Link>
            <Link href="/blog" className="text-emerald-600">Blog</Link>
          </nav>
          <Link
            href="https://dashboard.pulseai.biz.id"
            className="text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/25"
          >
            Dashboard
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-20 text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-emerald-400" /> Blog PulseAI <span className="w-6 h-px bg-emerald-400" />
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Tips AI, Bisnis &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Rekrutmen Cerdas
            </span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Artikel dari tim PT Astra Solusi Digital tentang AI, automasi bisnis, rekrutmen, dan transformasi digital untuk Indonesia.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {publishedPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">📝</p>
              <p className="text-slate-400">Artikel akan segera hadir. Pantau terus!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedPosts.map((post, i) => {
                const tags: string[] = JSON.parse(post.tags || "[]");
                const minutes = readingTime(post.content);
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className={`group relative bg-white border border-slate-100 hover:border-emerald-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 hover:-translate-y-1 flex flex-col ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
                  >
                    {/* Cover */}
                    {post.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
                        <span className="text-5xl opacity-30">📝</span>
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      {/* Tags */}
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h2 className="font-black text-slate-900 text-lg leading-snug mb-2 group-hover:text-emerald-700 transition-colors">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-xs text-slate-400 mt-auto pt-4 border-t border-slate-50">
                        <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                        <span>{minutes} menit baca</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-slate-100 py-8 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} <Link href="/" className="hover:text-emerald-600 transition-colors">PulseAI</Link> by PT Astra Solusi Digital</p>
      </footer>
    </div>
  );
}
