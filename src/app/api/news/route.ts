import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq, desc, and, sql, like } from "drizzle-orm";
import { verifyToken } from "@/lib/auth";

const DEFAULT_NEWS_SECRET = "pulseai-news-cron-sec-8f92a1c0";

// Helper: slugify title if slug is missing
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ── GET /api/news — List news articles ───────────────────────────────────────
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get("limit") || "10", 10), 50);
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const offset = (page - 1) * limit;
    const tag = searchParams.get("tag");

    let condition = and(
      eq(posts.status, "published"),
      eq(posts.category, "news")
    );

    if (tag) {
      condition = and(
        condition,
        like(posts.tags, `%"${tag}"%`)
      );
    }

    const newsItems = db
      .select({
        id: posts.id,
        title: posts.title,
        slug: posts.slug,
        excerpt: posts.excerpt,
        author: posts.author,
        tags: posts.tags,
        category: posts.category,
        sourceUrl: posts.sourceUrl,
        views: posts.views,
        publishedAt: posts.publishedAt,
        createdAt: posts.createdAt,
      })
      .from(posts)
      .where(condition)
      .orderBy(desc(posts.publishedAt))
      .limit(limit)
      .offset(offset)
      .all();

    return NextResponse.json({
      success: true,
      data: newsItems,
      page,
      limit,
    });
  } catch (error) {
    console.error("GET /api/news error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

// ── POST /api/news — Create & publish news item (API key or admin auth) ──────
export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get("x-api-key") || 
      request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
    const configuredSecret = process.env.NEWS_API_SECRET || DEFAULT_NEWS_SECRET;

    let isAuthorized = false;

    // 1. Check API Key
    if (apiKey && apiKey === configuredSecret) {
      isAuthorized = true;
    } else {
      // 2. Fallback to Admin Cookie Token
      const token = request.cookies.get("admin_token")?.value;
      if (token) {
        const payload = await verifyToken(token);
        if (payload) isAuthorized = true;
      }
    }

    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Invalid or missing API key" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      title,
      slug: customSlug,
      excerpt,
      content,
      author = "PulseAI Tech Radar",
      sourceUrl,
      tags = ["AI", "Teknologi"],
      metaTitle,
      metaDesc,
      status = "published",
    } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: "Field 'title' dan 'content' wajib diisi" },
        { status: 400 }
      );
    }

    const baseSlug = customSlug ? slugify(customSlug) : slugify(title);
    let finalSlug = baseSlug;

    // Check if slug exists, append random suffix if conflict
    const existing = db
      .select({ id: posts.id })
      .from(posts)
      .where(eq(posts.slug, finalSlug))
      .get();

    if (existing) {
      const dateSuffix = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const rand = Math.floor(1000 + Math.random() * 9000);
      finalSlug = `${baseSlug}-${dateSuffix}-${rand}`;
    }

    const now = new Date().toISOString();
    const publishedAt = status === "published" ? now : null;

    const result = db
      .insert(posts)
      .values({
        title,
        slug: finalSlug,
        excerpt: excerpt || content.slice(0, 160).replace(/[#*`\n]/g, " ").trim(),
        content,
        author,
        status: status as "published" | "draft",
        category: "news",
        sourceUrl: sourceUrl || null,
        metaTitle: metaTitle || `${title} | Berita AI & Tech PulseAI`,
        metaDesc: metaDesc || excerpt || content.slice(0, 155),
        tags: JSON.stringify(Array.isArray(tags) ? tags : [tags]),
        createdAt: now,
        updatedAt: now,
        publishedAt,
      })
      .returning()
      .get();

    return NextResponse.json({
      success: true,
      message: "Berita berhasil diterbitkan",
      data: result,
    }, { status: 201 });

  } catch (error: unknown) {
    console.error("POST /api/news error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Internal Server Error",
    }, { status: 500 });
  }
}
