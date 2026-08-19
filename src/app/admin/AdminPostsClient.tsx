"use client";

import { useState } from "react";
import { Post } from "@/schema/posts";
import Link from "next/link";
import PostModal from "./PostModal";

export default function AdminPostsClient({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);

  const handleOpenAdd = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (post: Post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) return;
    setIsDeleting(id);
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert("Gagal menghapus artikel");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan sistem");
    } finally {
      setIsDeleting(null);
    }
  };

  const handleSaved = (savedPost: Post, isNew: boolean) => {
    if (isNew) {
      setPosts((prev) => [savedPost, ...prev]);
    } else {
      setPosts((prev) => prev.map((p) => (p.id === savedPost.id ? savedPost : p)));
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white mb-1">Kelola Artikel</h1>
          <p className="text-slate-400 text-sm">Manajemen semua blog post PulseAI</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-sm transition-all"
        >
          <span>✏️</span> Tulis Artikel Baru
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 mb-4">Belum ada artikel yang ditulis.</p>
            <button
              onClick={handleOpenAdd}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Buat Artikel Pertama
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-800/50 text-xs uppercase text-slate-300">
                <tr>
                  <th className="px-6 py-4 font-bold">Judul</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Views</th>
                  <th className="px-6 py-4 font-bold">Tanggal</th>
                  <th className="px-6 py-4 font-bold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white max-w-[300px] truncate">
                      {post.title}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${
                          post.status === "published"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {post.status === "published" ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4">{post.views.toLocaleString("id-ID")}</td>
                    <td className="px-6 py-4">
                      {new Date(post.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                      >
                        Lihat
                      </a>
                      <button
                        onClick={() => handleOpenEdit(post)}
                        className="text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        disabled={isDeleting === post.id}
                        className="text-red-400 hover:text-red-300 font-semibold disabled:opacity-50"
                      >
                        {isDeleting === post.id ? "Menghapus..." : "Hapus"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editingPost={editingPost}
        onSaved={handleSaved}
      />
    </div>
  );
}
