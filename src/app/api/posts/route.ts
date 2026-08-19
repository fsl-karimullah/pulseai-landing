import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq, desc } from "drizzle-orm";
import { verifyToken } from "@/lib/auth";

// ── GET /api/posts — List posts (admin: all, public: published only) ──────────
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status"); // 'all' | 'published' | 'draft'
    
    // Check auth from cookie directly
    const token = request.cookies.get("admin_token")?.value;
    const payload = token ? await verifyToken(token) : null;
    const isAdmin = !!payload;

    let query;
    if (isAdmin && status === "all") {
      query = db.select().from(posts).orderBy(desc(posts.createdAt)).all();
    } else if (isAdmin && status === "draft") {
      query = db
        .select()
        .from(posts)
        .where(eq(posts.status, "draft"))
        .orderBy(desc(posts.createdAt))
        .all();
    } else {
      // Public: published only
      query = db
        .select()
        .from(posts)
        .where(eq(posts.status, "published"))
        .orderBy(desc(posts.publishedAt))
        .all();
    }

    return NextResponse.json({ posts: query });
  } catch (error) {
    console.error("GET /api/posts error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ── POST /api/posts — Create post (admin only) ────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    const payload = token ? await verifyToken(token) : null;
    
    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      author,
      status: postStatus,
      metaTitle,
      metaDesc,
      tags,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, dan content wajib diisi" },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const publishedAt = postStatus === "published" ? now : null;

    const result = db
      .insert(posts)
      .values({
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverImage: coverImage || null,
        author: author || "Admin",
        status: postStatus || "draft",
        metaTitle: metaTitle || null,
        metaDesc: metaDesc || null,
        tags: JSON.stringify(tags || []),
        createdAt: now,
        updatedAt: now,
        publishedAt,
      })
      .returning()
      .get();

    return NextResponse.json({ post: result }, { status: 201 });
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      error.message.includes("UNIQUE constraint failed")
    ) {
      return NextResponse.json(
        { error: "Slug sudah dipakai, gunakan slug lain" },
        { status: 409 }
      );
    }
    console.error("POST /api/posts error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
