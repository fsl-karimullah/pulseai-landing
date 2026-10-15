import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ReaderClient from "./ReaderClient";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .get();

  if (!post) return { title: "Berita Tidak Ditemukan — PulseAI" };

  const title = post.metaTitle || `${post.title} — PulseAI Radar`;
  const description = post.metaDesc || post.excerpt || post.content.slice(0, 160);
  const tags: string[] = JSON.parse(post.tags || "[]");
  const url = `https://pulseai.biz.id/berita/${slug}`;

  return {
    title,
    description,
    keywords: [...tags, "Berita AI", "Artificial Intelligence Indonesia", "Teknologi Terkini", "PulseAI"],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author || "PulseAI Tech Radar"],
      tags,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return "Terbaru";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readingTime(content: string) {
  return Math.max(1, Math.round(content.split(/\s+/).length / 180));
}

function getSourceDomain(url: string | null): string {
  if (!url) return "Publikasi Resmi";
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return "Sumber Eksternal";
  }
}

// Clean markdown to HTML formatting tailored for high reading comfort
function renderArticleMarkdown(md: string): string {
  return md
    // Headers
    .replace(/^### (.+)$/gm, "<h3 class='text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight'>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2 class='text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200/60 pb-2'>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1 class='text-3xl md:text-4xl font-black text-stone-900 mt-10 mb-5 tracking-tight'>$1</h1>")
    // Bold & italic
    .replace(/\*\*(.+?)\*\*/g, "<strong class='font-bold text-stone-900'>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em class='italic text-stone-800'>$1</em>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code class='bg-stone-100 text-emerald-800 px-1.5 py-0.5 rounded text-sm font-mono border border-stone-200/80'>$1</code>")
    // Code blocks
    .replace(/```[\w]*\n([\s\S]+?)```/gm, "<pre class='bg-stone-900 text-stone-100 rounded-2xl p-5 my-6 overflow-x-auto text-sm font-mono leading-relaxed shadow-sm'><code>$1</code></pre>")
    // Blockquote
    .replace(/^\> (.+)$/gm, "<blockquote class='border-l-4 border-emerald-600 bg-emerald-50/40 text-stone-700 italic pl-5 pr-4 py-3 my-6 rounded-r-xl'>$1</blockquote>")
    // Unordered list
    .replace(/^- (.+)$/gm, "<li class='ml-6 list-disc text-stone-700 mb-2 leading-relaxed'>$1</li>")
    // Ordered list
    .replace(/^\d+\. (.+)$/gm, "<li class='ml-6 list-decimal text-stone-700 mb-2 leading-relaxed'>$1</li>")
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, "<a href='$2' class='text-emerald-700 hover:text-emerald-800 underline underline-offset-4 font-semibold' target='_blank' rel='noopener noreferrer'>$1</a>")
    // Paragraphs
    .replace(/\n\n/g, "</p><p class='text-stone-700 text-lg md:text-xl leading-[1.85] md:leading-[1.9] my-5 font-normal'>")
    .replace(/^(?!<[hpblc])(.+)$/gm, "<p class='text-stone-700 text-lg md:text-xl leading-[1.85] md:leading-[1.9] my-5 font-normal'>$1</p>");
}

export default async function BeritaDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .get();

  if (!post) notFound();

  // Increment views
  try {
    db.update(posts).set({ views: post.views + 1 }).where(eq(posts.id, post.id)).run();
  } catch (err) {
    console.error("Failed to update views:", err);
  }

  const tags: string[] = JSON.parse(post.tags || "[]");
  const minutes = readingTime(post.content);
  const sourceDomain = getSourceDomain(post.sourceUrl);

  // Article Schema for Google SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.metaTitle || post.title,
    description: post.metaDesc || post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author || "PulseAI Tech Radar",
      url: "https://pulseai.biz.id",
    },
    publisher: {
      "@type": "Organization",
      name: "PT Astra Solusi Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://pulseai.biz.id/logo-primary.png",
      },
    },
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pulseai.biz.id/berita/${slug}`,
    },
    keywords: tags.join(", "),
    isBasedOn: post.sourceUrl || undefined,
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-800 selection:bg-emerald-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-[#fcfbf9]/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            </div>
            <span className="font-black text-xl text-stone-900 tracking-tight">PulseAI</span>
            <span className="hidden sm:inline-block text-[11px] font-bold tracking-widest uppercase text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-300/60 ml-1">
              Radar
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm font-semibold text-stone-600">
            <Link href="/berita" className="text-emerald-700 hover:text-emerald-800 transition-colors">
              ← Semua Berita
            </Link>
            <Link href="/blog" className="hover:text-emerald-700 transition-colors hidden sm:block">
              Blog
            </Link>
          </nav>
          <Link
            href="https://dashboard.pulseai.biz.id"
            className="text-xs md:text-sm font-bold bg-stone-900 hover:bg-stone-800 text-white px-4 md:px-5 py-2 rounded-xl transition-all shadow-sm"
          >
            Dashboard
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 max-w-3xl pt-8 pb-3">
        <nav className="flex items-center gap-2 text-xs text-stone-500 font-medium">
          <Link href="/" className="hover:text-stone-800">Home</Link>
          <span>/</span>
          <Link href="/berita" className="hover:text-stone-800">Berita AI</Link>
          <span>/</span>
          <span className="text-stone-700 truncate max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* Reader Layout Container - Centered, comfortable max-w-3xl */}
      <article className="container mx-auto px-4 md:px-8 max-w-3xl pb-24">
        {/* Interactive Reader Toolbar (Progress, Font Size, Share) */}
        <ReaderClient
          title={post.title}
          sourceUrl={post.sourceUrl}
          slug={post.slug}
          minutes={minutes}
        />

        {/* Article Meta Header */}
        <header className="mb-8">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.2] mb-5">
            {post.title}
          </h1>

          {/* Subheader Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-stone-500 border-y border-stone-200/80 py-3.5 mb-6">
            <span className="font-semibold text-stone-900">
              ✍️ {post.author || "PulseAI Tech Radar"}
            </span>
            <span>•</span>
            <time dateTime={post.publishedAt || post.createdAt}>
              {formatDate(post.publishedAt || post.createdAt)}
            </time>
            <span>•</span>
            <span className="text-emerald-700 font-medium">
              ⏱️ {minutes} menit baca
            </span>
            <span>•</span>
            <span>{post.views.toLocaleString("id-ID")} kali dibaca</span>
          </div>

          {/* Key Excerpt / Lead summary */}
          {post.excerpt && (
            <div className="p-5 md:p-6 bg-white rounded-2xl border border-stone-200 shadow-xs mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">
                📌 Ringkasan Eksekutif
              </span>
              <p className="text-stone-700 text-lg md:text-xl font-medium leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          )}
        </header>

        {/* Clean Article Body (Text-only, High Legibility) */}
        <div
          className="article-content font-serif text-stone-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderArticleMarkdown(post.content) }}
        />

        {/* Primary Source Link & Attribution Box (Crucial for SEO & Transparency) */}
        {post.sourceUrl && (
          <div className="mt-14 p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-stone-200/90 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 text-xl font-bold">
                🌐
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-1">
                  Sumber Utama & Rujukan Informasi
                </span>
                <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 truncate">
                  {sourceDomain}
                </h3>
                <p className="text-xs md:text-sm text-stone-600 mb-4 leading-relaxed">
                  Artikel ini dikurasi, dianalisis, dan disajikan kembali dalam bahasa Indonesia yang ringkas oleh tim riset PulseAI dengan mengacu pada laporan atau rilis resmi berikut:
                </p>
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs md:text-sm font-semibold transition-all shadow-xs"
                >
                  <span>Kunjungi Sumber Asli ({sourceDomain})</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Next Step / PulseAI CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-emerald-900 to-stone-900 text-white rounded-3xl text-center shadow-lg">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Transformasi Bisnis Anda
          </span>
          <h3 className="text-2xl md:text-3xl font-black mb-3">
            Otomatiskan Customer Service & Operasional dengan AI
          </h3>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            PulseAI membantu bisnis Anda memiliki Chatbot WhatsApp pintar 24/7, AI CV Screening, dan pembukuan otomatis tanpa biaya mahal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://dashboard.pulseai.biz.id"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-md"
            >
              Coba Gratis Sekarang →
            </Link>
            <Link
              href="/berita"
              className="px-6 py-3 bg-stone-800/80 hover:bg-stone-800 text-white font-semibold text-sm rounded-xl transition-all border border-stone-700"
            >
              Lihat Berita Lainnya
            </Link>
          </div>
        </div>

        {/* Back navigation */}
        <div className="mt-10 text-center">
          <Link
            href="/berita"
            className="text-emerald-700 hover:text-emerald-800 text-sm font-semibold underline underline-offset-4"
          >
            ← Kembali ke Indeks Berita AI
          </Link>
        </div>
      </article>

      {/* Minimal Footer */}
      <footer className="border-t border-stone-200 bg-white py-10 px-4 text-center text-xs text-stone-500">
        <p>© {new Date().getFullYear()} PulseAI by PT Astra Solusi Digital. Diterbitkan untuk tujuan edukasi & wawasan teknologi.</p>
      </footer>
    </div>
  );
}
