import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq } from "drizzle-orm";
import { verifyToken } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

// ── GET /api/posts/[id] ───────────────────────────────────────────────────────
export async function GET(_request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const post = db
      .select()
      .from(posts)
      .where(eq(posts.id, Number(id)))
      .get();

    if (!post) {
      return NextResponse.json({ error: "Post tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("GET /api/posts/[id] error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ── PUT /api/posts/[id] ───────────────────────────────────────────────────────
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    const payload = token ? await verifyToken(token) : null;
    
    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    const existing = db
      .select()
      .from(posts)
      .where(eq(posts.id, Number(id)))
      .get();

    if (!existing) {
      return NextResponse.json({ error: "Post tidak ditemukan" }, { status: 404 });
    }

    const now = new Date().toISOString();
    const isPublishing =
      body.status === "published" && existing.status === "draft";

    const updated = db
      .update(posts)
      .set({
        title: body.title ?? existing.title,
        slug: body.slug ?? existing.slug,
        excerpt: body.excerpt ?? existing.excerpt,
        content: body.content ?? existing.content,
        coverImage: body.coverImage ?? existing.coverImage,
        author: body.author ?? existing.author,
        status: body.status ?? existing.status,
        metaTitle: body.metaTitle ?? existing.metaTitle,
        metaDesc: body.metaDesc ?? existing.metaDesc,
        tags: body.tags ? JSON.stringify(body.tags) : existing.tags,
        updatedAt: now,
        publishedAt: isPublishing ? now : existing.publishedAt,
      })
      .where(eq(posts.id, Number(id)))
      .returning()
      .get();

    return NextResponse.json({ post: updated });
  } catch (error) {
    console.error("PUT /api/posts/[id] error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ── DELETE /api/posts/[id] ────────────────────────────────────────────────────
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    const payload = token ? await verifyToken(token) : null;
    
    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    db.delete(posts).where(eq(posts.id, Number(id))).run();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/posts/[id] error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
