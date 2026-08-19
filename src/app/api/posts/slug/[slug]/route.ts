import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { eq, and } from "drizzle-orm";

type Params = { params: Promise<{ slug: string }> };

// ── GET /api/posts/slug/[slug] — Public: get published post + increment views ─
export async function GET(_request: NextRequest, { params }: Params) {
  try {
    const { slug } = await params;

    const post = db
      .select()
      .from(posts)
      .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
      .get();

    if (!post) {
      return NextResponse.json({ error: "Artikel tidak ditemukan" }, { status: 404 });
    }

    // Increment views
    db.update(posts)
      .set({ views: post.views + 1 })
      .where(eq(posts.id, post.id))
      .run();

    return NextResponse.json({ post: { ...post, views: post.views + 1 } });
  } catch (error) {
    console.error("GET /api/posts/slug/[slug] error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
