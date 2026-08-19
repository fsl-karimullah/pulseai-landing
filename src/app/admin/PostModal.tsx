"use client";

import { useState, useEffect, useRef } from "react";
import { Post } from "@/schema/posts";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingPost: Post | null;
  onSaved: (post: Post, isNew: boolean) => void;
}

export default function PostModal({ isOpen, onClose, editingPost, onSaved }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (editingPost) {
        setTitle(editingPost.title);
        setSlug(editingPost.slug);
        setExcerpt(editingPost.excerpt || "");
        setContent(editingPost.content);
        setCoverImage(editingPost.coverImage || "");
        setStatus(editingPost.status);
        setMetaTitle(editingPost.metaTitle || "");
        setMetaDesc(editingPost.metaDesc || "");
      } else {
        setTitle("");
        setSlug("");
        setExcerpt("");
        setContent("");
        setCoverImage("");
        setStatus("draft");
        setMetaTitle("");
        setMetaDesc("");
      }
      setError("");
    }
  }, [isOpen, editingPost]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!editingPost) {
      setSlug(
        newTitle
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      );
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setCoverImage(data.url);
      } else {
        setError(data.error || "Gagal mengunggah gambar");
      }
    } catch (err) {
      console.error(err);
      setError("Kesalahan saat mengunggah gambar");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError("");

    const payload = {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      status,
      metaTitle,
      metaDesc,
    };

    try {
      const url = editingPost ? `/api/posts/${editingPost.id}` : "/api/posts";
      const method = editingPost ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal menyimpan artikel");
      }

      onSaved(data.post, !editingPost);
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
          <h2 className="text-xl font-bold text-white">
            {editingPost ? "Edit Artikel" : "Tulis Artikel Baru"}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form id="post-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title & Slug */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Judul Artikel</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="Misal: Pentingnya AI untuk Bisnis..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">URL Slug</label>
                <div className="flex bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
                  <span className="px-4 py-3 bg-slate-800/50 text-slate-500 border-r border-slate-700 text-sm">
                    pulseai.biz.id/blog/
                  </span>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="flex-1 bg-transparent text-emerald-400 px-4 py-3 focus:outline-none text-sm"
                    placeholder="pentingnya-ai"
                  />
                </div>
              </div>
            </div>

            {/* Cover Image Upload */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Gambar Cover</label>
              <div className="flex items-center gap-4">
                {coverImage && (
                  <img src={coverImage} alt="Cover Preview" className="h-16 w-24 object-cover rounded-lg border border-slate-700" />
                )}
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      {isUploading ? "Mengunggah..." : "Pilih File Gambar"}
                    </button>
                    <input
                      type="text"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      placeholder="Atau masukkan URL gambar..."
                      className="flex-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Ringkasan (Excerpt)</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all h-20 resize-none"
                placeholder="Ringkasan singkat yang muncul di daftar artikel..."
              />
            </div>

            {/* Content (Markdown) */}
            <div className="space-y-2 flex-1 flex flex-col min-h-[300px]">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-300">Konten Artikel (Format Markdown)</label>
                <span className="text-xs text-slate-500">{content.length} karakter</span>
              </div>
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full flex-1 bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm resize-none"
                placeholder="# Judul H1&#10;&#10;Tulis konten artikel di sini menggunakan Markdown..."
              />
            </div>

            {/* SEO Options */}
            <div className="grid md:grid-cols-2 gap-6 bg-slate-800/30 p-5 rounded-xl border border-slate-800/50">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">SEO Meta Title <span className="text-slate-500 font-normal">(Opsional)</span></label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="Override judul untuk Google..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">SEO Meta Description <span className="text-slate-500 font-normal">(Opsional)</span></label>
                <input
                  type="text"
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="Override deskripsi untuk Google..."
                />
              </div>
            </div>
            
          </form>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400">Status:</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
            >
              <option value="draft">Draft (Sembunyikan)</option>
              <option value="published">Published (Tayangkan)</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-slate-300 hover:text-white font-medium transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              form="post-form"
              disabled={isSaving}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-900/20 transition-all disabled:opacity-50"
            >
              {isSaving ? "Menyimpan..." : "Simpan Artikel"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
