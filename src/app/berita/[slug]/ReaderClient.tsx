"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ReaderClientProps {
  title: string;
  sourceUrl?: string | null;
  slug: string;
  minutes: number;
}

export default function ReaderClient({ title, sourceUrl, slug, minutes }: ReaderClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [theme, setTheme] = useState<"light" | "sepia" | "dark">("sepia");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : `https://pulseai.biz.id/berita/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShareWA = () => {
    const url = typeof window !== "undefined" ? window.location.href : `https://pulseai.biz.id/berita/${slug}`;
    const text = encodeURIComponent(`*${title}*\n\nBaca ulasan selengkapnya di PulseAI Berita:\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const domain = sourceUrl ? (() => {
    try {
      return new URL(sourceUrl).hostname.replace(/^www\./, "");
    } catch {
      return "Sumber Asli";
    }
  })() : null;

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-stone-200/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Toolbar - Fixed bottom / floating control */}
      <div className="sticky top-20 z-40 mb-8 flex flex-wrap items-center justify-between gap-3 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-stone-200/80 shadow-sm text-xs text-stone-600">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-stone-700 flex items-center gap-1.5">
            <span>⏱️ {minutes} mnt baca</span>
          </span>
          <span className="text-stone-300">|</span>
          {/* Font Size controls */}
          <div className="inline-flex items-center rounded-lg bg-stone-100 p-0.5 border border-stone-200">
            <button
              onClick={() => setFontSize("normal")}
              className={`px-2 py-1 rounded font-medium transition-all ${
                fontSize === "normal" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500 hover:text-stone-900"
              }`}
              title="Ukuran Font Standar"
            >
              A
            </button>
            <button
              onClick={() => setFontSize("large")}
              className={`px-2 py-1 rounded font-semibold transition-all ${
                fontSize === "large" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500 hover:text-stone-900"
              }`}
              title="Ukuran Font Sedang"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize("xlarge")}
              className={`px-2 py-1 rounded font-bold transition-all ${
                fontSize === "xlarge" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500 hover:text-stone-900"
              }`}
              title="Ukuran Font Besar"
            >
              A++
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {sourceUrl && domain && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-medium transition-colors"
              title="Buka rujukan sumber berita utama"
            >
              <span>🌐</span>
              <span>Sumber: {domain}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          )}

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-medium transition-colors"
          >
            {copied ? (
              <>
                <span className="text-emerald-600">✓</span>
                <span className="text-emerald-600 font-semibold">Tersalin</span>
              </>
            ) : (
              <>
                <span>🔗</span>
                <span>Salin</span>
              </>
            )}
          </button>

          <button
            onClick={handleShareWA}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors shadow-xs"
          >
            <span>💬</span>
            <span className="hidden sm:inline">Kirim ke WA</span>
          </button>
        </div>
      </div>
    </>
  );
}
