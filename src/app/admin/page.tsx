import { db } from "@/lib/db";
import { posts } from "@/schema/posts";
import { desc } from "drizzle-orm";
import AdminPostsClient from "./AdminPostsClient";

export const dynamic = "force-dynamic";

export default function AdminDashboard() {
  const allPosts = db.select().from(posts).orderBy(desc(posts.createdAt)).all();

  return <AdminPostsClient initialPosts={allPosts} />;
}
