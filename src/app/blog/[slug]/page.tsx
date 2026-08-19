import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

// ── Dynamic Metadata (SEO per artikel) ───────────────────────────────────────
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .get();

  if (!post) return { title: "Artikel Tidak Ditemukan" };

  const title = post.metaTitle || post.title;
  const description = post.metaDesc || post.excerpt || post.content.slice(0, 155);
  const tags: string[] = JSON.parse(post.tags || "[]");
  const url = `https://pulseai.biz.id/blog/${slug}`;

  return {
    title,
    description,
    keywords: [...tags, "PulseAI", "PT Astra Solusi Digital", "AI Indonesia"],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags,
      images: post.coverImage
        ? [{ url: post.coverImage, alt: title }]
        : [{ url: "/og-image.png", alt: "PulseAI Blog" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.coverImage ? [post.coverImage] : ["/og-image.png"],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function readingTime(content: string) {
  return Math.max(1, Math.round(content.split(/\s+/).length / 200));
}

// Simple markdown to HTML (basic, no external lib needed for now)
function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3 class='text-xl font-bold text-slate-900 mt-8 mb-3'>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2 class='text-2xl font-black text-slate-900 mt-10 mb-4'>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1 class='text-3xl font-black text-slate-900 mt-10 mb-4'>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong class='font-bold text-slate-900'>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class='bg-slate-100 text-emerald-700 px-1.5 py-0.5 rounded text-sm font-mono'>$1</code>")
    .replace(/```[\w]*\n([\s\S]+?)```/gm, "<pre class='bg-slate-900 text-emerald-400 rounded-xl p-5 my-5 overflow-x-auto text-sm font-mono leading-relaxed'><code>$1</code></pre>")
    .replace(/^\> (.+)$/gm, "<blockquote class='border-l-4 border-emerald-500 pl-5 py-1 my-5 text-slate-600 italic bg-emerald-50/50 rounded-r-xl'>$1</blockquote>")
    .replace(/^- (.+)$/gm, "<li class='ml-5 list-disc text-slate-700 mb-1'>$1</li>")
    .replace(/^\d+\. (.+)$/gm, "<li class='ml-5 list-decimal text-slate-700 mb-1'>$1</li>")
    .replace(/\[(.+?)\]\((.+?)\)/g, "<a href='$2' class='text-emerald-600 hover:text-emerald-700 underline underline-offset-2 font-medium' target='_blank' rel='noopener'>$1</a>")
    .replace(/\n\n/g, "</p><p class='text-slate-700 leading-relaxed my-4'>")
    .replace(/^(?!<[hpblc])(.+)$/gm, "<p class='text-slate-700 leading-relaxed my-4'>$1</p>");
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .get();

  if (!post) notFound();

  // Increment views
  db.update(posts).set({ views: post.views + 1 }).where(eq(posts.id, post.id)).run();

  const tags: string[] = JSON.parse(post.tags || "[]");
  const minutes = readingTime(post.content);

  // JSON-LD Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle || post.title,
    description: post.metaDesc || post.excerpt,
    image: post.coverImage || "https://pulseai.biz.id/og-image.png",
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "PT Astra Solusi Digital",
      logo: { "@type": "ImageObject", url: "https://pulseai.biz.id/logo-primary.png" },
    },
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://pulseai.biz.id/blog/${slug}` },
    keywords: tags.join(", "),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            </div>
            <span className="font-black text-xl text-slate-900 tracking-tight">PulseAI</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-500">
            <Link href="/blog" className="text-emerald-600">Blog</Link>
            <Link href="/#harga" className="hover:text-emerald-600 transition-colors">Harga</Link>
          </nav>
          <Link href="https://dashboard.pulseai.biz.id" className="text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/25">
            Dashboard
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-slate-600 transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-slate-600 truncate">{post.title}</span>
        </nav>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 md:px-8 max-w-3xl py-8 pb-20">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-5">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-100">
          <span>✍️ {post.author}</span>
          <span>·</span>
          <span>{formatDate(post.publishedAt || post.createdAt)}</span>
          <span>·</span>
          <span>{minutes} menit baca</span>
          <span>·</span>
          <span>{post.views.toLocaleString("id-ID")} views</span>
        </div>

        {/* Cover */}
        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl mb-8 shadow-lg"
          />
        )}

        {/* Content */}
        <div
          className="text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl text-center">
          <p className="text-slate-600 font-semibold mb-3">Ingin coba PulseAI untuk bisnis Anda?</p>
          <Link
            href="https://dashboard.pulseai.biz.id"
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/25 hover:-translate-y-px"
          >
            Mulai Gratis Sekarang →
          </Link>
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors">
            ← Lihat Semua Artikel
          </Link>
        </div>
      </article>

      <footer className="border-t border-slate-100 py-8 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} <Link href="/" className="hover:text-emerald-600 transition-colors">PulseAI</Link> by PT Astra Solusi Digital</p>
      </footer>
    </div>
  );
}
