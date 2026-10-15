#!/usr/bin/env node
/**
 * PulseAI Daily AI Tech & News Scheduler
 * 
 * Jadwal: Setiap hari jam 10:00 Pagi (WIB)
 * Alur:
 * 1. AI mencari/mengurasi topik berita terkini seputar AI & Teknologi.
 * 2. Mengolahnya menjadi artikel mendalam dan nyaman dibaca dalam bahasa Indonesia.
 * 3. Menyertakan link sumber utama asli untuk kredibilitas & SEO backlinks.
 * 4. Meng-execute API POST /api/news untuk mempublikasikan artikel secara otomatis.
 * 
 * Penggunaan:
 * - Jalankan sekali sekarang:  node scripts/daily-news-cron.mjs --now
 * - Jalankan sebagai daemon:   node scripts/daily-news-cron.mjs
 * - Atau pasang di crontab:   0 10 * * * /usr/bin/node /var/www/pulseai-landing/pulseai-landing/scripts/daily-news-cron.mjs --now >> /var/log/pulseai-news.log 2>&1
 */

import Database from "better-sqlite3";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const dbPath = join(rootDir, "database.sqlite");

// Load .env manually if not in process.env
const envPath = join(rootDir, ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const [key, ...rest] = trimmed.split("=");
      const val = rest.join("=").trim().replace(/^['"]|['"]$/g, "");
      if (!process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    }
  }
}

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || "sk-a089d4b8585c4b6b85812e3a27308984";
const DEEPSEEK_BASE_URL = process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com";
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek-chat";
const NEWS_API_SECRET = process.env.NEWS_API_SECRET || "pulseai-news-cron-sec-8f92a1c0";
const SITE_URL = process.env.NEWS_API_URL || (process.env.PORT ? `http://localhost:${process.env.PORT}` : "http://localhost:8000");

// Curated pool of high-impact AI & Tech themes and verified primary publication sources
const TECH_AI_TOPICS = [
  {
    focus: "Perkembangan Model AI Reasoning, LLM Open Source & Agen Otomasi Bisnis",
    exampleSources: [
      "https://openai.com/news",
      "https://deepmind.google/discover/blog",
      "https://www.anthropic.com/news",
      "https://huggingface.co/blog"
    ]
  },
  {
    focus: "Inovasi Hardware Chip AI, Efisiensi Komputasi GPU & Infrastruktur Cloud",
    exampleSources: [
      "https://nvidianews.nvidia.com",
      "https://cloud.google.com/blog/products/ai-machine-learning",
      "https://blogs.microsoft.com/ai"
    ]
  },
  {
    focus: "Penerapan AI untuk Automasi Customer Service, Finansial & HR di Asia Tenggara",
    exampleSources: [
      "https://techcrunch.com/category/artificial-intelligence",
      "https://www.technologyreview.com/topic/artificial-intelligence",
      "https://www.bloomberg.com/technology"
    ]
  },
  {
    focus: "Regulasi Keamanan AI, Etika Data & Perlindungan Privasi Global",
    exampleSources: [
      "https://www.reuters.com/technology/artificial-intelligence",
      "https://www.theverge.com/ai-artificial-intelligence",
      "https://arstechnica.com/information-technology"
    ]
  }
];

function getRandomTopic() {
  const index = Math.floor(Math.random() * TECH_AI_TOPICS.length);
  return TECH_AI_TOPICS[index];
}

/**
 * Panggil DeepSeek untuk merangkum dan menghasilkan artikel berita komprehensif
 */
async function generateAINewsArticle() {
  const selectedTopic = getRandomTopic();
  const todayStr = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const prompt = `Anda adalah Redaktur Utama Teknologi & AI untuk PulseAI Radar Berita (pulseai.biz.id), portal wawasan AI nomor 1 di Indonesia.
Hari ini adalah: ${todayStr}.
Topik Utama Berita: ${selectedTopic.focus}.
Referensi domain publikasi resmi: ${selectedTopic.exampleSources.join(", ")}.

Tugas Anda:
Buatlah SATU artikel berita teknologi & Artificial Intelligence terkini yang sangat informatif, faktual, mendalam, dan nyaman dibaca (reader-friendly text-first).
Artikel ini ditujukan bagi profesional bisnis, developer, dan penggiat teknologi di Indonesia.

PANDUAN PENULISAN:
1. Judul: Lugas, berbobot, menarik tanpa clickbait berlebihan, relevan dengan perkembangan AI/Tech.
2. Ringkasan Eksekutif (Excerpt): 2 kalimat padat yang merangkum inti terobosan.
3. Struktur Konten (Markdown):
   - ## Latar Belakang & Terobosan Utama: Apa yang baru saja terjadi atau diluncurkan?
   - ## Rincian Teknis & Keunggulan: Bagaimana inovasi ini bekerja dan mengapa lebih efisien?
   - ## Dampak Strategis bagi Pelaku Bisnis & UMKM: Bagaimana ini relevan bagi efisiensi kerja di Indonesia?
   - ## Kesimpulan & Outlook Mendatang: Rangkuman poin kunci ke depan.
4. Sumber Rujukan Asli (sourceUrl): Wajib sertakan SATU URL spesifik dari portal/lab resmi (misal: link resmi OpenAI, Google DeepMind, TechCrunch, atau The Verge).
5. Format Respons: WAJIB HANYA berupa JSON murni tanpa markdown triple-backtick di luarnya.

STRUKTUR JSON YANG DIHARUSKAN:
{
  "title": "Judul Berita Lengkap Bahasa Indonesia",
  "slug": "judul-berita-seo-friendly-lowercase",
  "excerpt": "Ringkasan 2 kalimat singkat padat untuk cuplikan berita.",
  "content": "Isi lengkap artikel dalam format Markdown rapi...",
  "sourceUrl": "https://url-sumber-berita-asli.com/path",
  "tags": ["AI", "Teknologi", "Machine Learning", "Inovasi"],
  "metaTitle": "Judul SEO Maksimal 60 Karakter",
  "metaDesc": "Deskripsi meta untuk mesin pencari Google (140-155 karakter)..."
}`;

  console.log("🤖 Mengirim permintaan pembuatan berita ke DeepSeek...");

  const response = await fetch(`${DEEPSEEK_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      messages: [
        {
          role: "system",
          content: "You are an elite Indonesian Tech & AI News Journalist. Return ONLY valid raw JSON without any markdown formatting wrappers."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2500,
      response_format: { type: "json_object" }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const rawText = data.choices[0].message.content.trim();
  
  // Clean possible markdown code fences
  const cleanedText = rawText.replace(/^```json\s*/i, "").replace(/^```\s*/, "").replace(/```$/, "").trim();
  let parsedArticle;
  try {
    parsedArticle = JSON.parse(cleanedText);
  } catch (e) {
    console.error("Raw LLM output:", rawText);
    throw new Error(`Gagal parse respons AI: ${e.message}`);
  }

  // Handle nested objects if LLM wrapped in article / news / data / articles
  let obj = parsedArticle;
  if (parsedArticle.article && typeof parsedArticle.article === "object") obj = parsedArticle.article;
  else if (parsedArticle.news && typeof parsedArticle.news === "object") obj = parsedArticle.news;
  else if (parsedArticle.data && typeof parsedArticle.data === "object") obj = parsedArticle.data;
  else if (Array.isArray(parsedArticle) && parsedArticle[0]) obj = parsedArticle[0];
  else if (Array.isArray(parsedArticle.articles) && parsedArticle.articles[0]) obj = parsedArticle.articles[0];

  const title = obj.title || obj.Title || obj.judul || obj.Judul || "Terobosan AI & Teknologi Terkini";
  const rawSlug = obj.slug || obj.Slug || title;
  const slug = String(rawSlug).toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");
  const excerpt = obj.excerpt || obj.Excerpt || obj.ringkasan || obj.summary || "";
  const content = obj.content || obj.Content || obj.isi || obj.body || excerpt;
  const sourceUrl = obj.sourceUrl || obj.source_url || obj.SourceUrl || obj.source || obj.url || "https://techcrunch.com/category/artificial-intelligence";
  const tags = Array.isArray(obj.tags) ? obj.tags : ["AI", "Teknologi"];
  const metaTitle = obj.metaTitle || obj.meta_title || title;
  const metaDesc = obj.metaDesc || obj.meta_desc || excerpt;

  return {
    title,
    slug,
    excerpt,
    content,
    sourceUrl,
    tags,
    metaTitle,
    metaDesc
  };
}

/**
 * Eksekusi API atau DB fallback untuk mempublikasikan artikel
 */
async function submitNewsPost(article) {
  console.log(`📤 Mempublikasikan berita: "${article.title}"...`);

  // 1. Coba lewat API endpoint (HTTP)
  try {
    const apiUrl = `${SITE_URL}/api/news`;
    console.log(`📡 Mencoba posting ke API: ${apiUrl}`);

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": NEWS_API_SECRET,
      },
      body: JSON.stringify({
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content,
        sourceUrl: article.sourceUrl,
        tags: article.tags,
        metaTitle: article.metaTitle,
        metaDesc: article.metaDesc,
        author: "PulseAI Tech Radar",
        status: "published"
      }),
    });

    if (res.ok) {
      const json = await res.json();
      console.log("✅ Berhasil submit via API!");
      console.log(`🔗 Slug: ${json.data?.slug || article.slug}`);
      return json.data;
    } else {
      console.warn(`⚠️ API response not OK (${res.status}), beralih ke direct DB insertion...`);
    }
  } catch (err) {
    console.warn("⚠️ API endpoint tidak terjangkau (mungkin server belum up), beralih ke direct DB insertion:", err.message);
  }

  // 2. Direct SQLite insertion fallback
  console.log("💾 Menyimpan langsung ke database SQLite:", dbPath);
  const db = new Database(dbPath);
  db.pragma("journal_mode = WAL");

  const now = new Date().toISOString();
  let rawSlug = article.slug || article.title || "berita-ai-terkini";
  let finalSlug = String(rawSlug).toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");

  const existing = db.prepare("SELECT id FROM posts WHERE slug = ?").get(finalSlug);
  if (existing) {
    const rand = Math.floor(1000 + Math.random() * 9000);
    finalSlug = `${finalSlug}-${rand}`;
  }

  const insertStmt = db.prepare(`
    INSERT INTO posts (
      title, slug, excerpt, content, cover_image, author,
      status, category, meta_title, meta_desc, tags, views,
      source_url, created_at, updated_at, published_at
    ) VALUES (
      ?, ?, ?, ?, NULL, 'PulseAI Tech Radar',
      'published', 'news', ?, ?, ?, 0,
      ?, ?, ?, ?
    )
  `);

  insertStmt.run(
    article.title,
    finalSlug,
    article.excerpt,
    article.content,
    article.metaTitle || article.title,
    article.metaDesc || article.excerpt,
    JSON.stringify(article.tags || ["AI", "Teknologi"]),
    article.sourceUrl || null,
    now,
    now,
    now
  );

  db.close();
  console.log(`✅ Berhasil disimpan langsung ke database! Slug: ${finalSlug}`);
  return { ...article, slug: finalSlug };
}

/**
 * Worker utama
 */
async function runDailyNewsCycle() {
  console.log("");
  console.log("==================================================");
  console.log(`🚀 [${new Date().toISOString()}] Menjalankan Siklus Berita AI...`);
  console.log("==================================================");

  try {
    const article = await generateAINewsArticle();
    console.log(`📋 Judul Dihasilkan: ${article.title}`);
    console.log(`🌐 Sumber Rujukan: ${article.sourceUrl}`);
    
    const saved = await submitNewsPost(article);
    console.log("🎉 Berita berhasil tayang di:");
    console.log(`👉 https://pulseai.biz.id/berita/${saved.slug}`);
    console.log("==================================================\n");
    return saved;
  } catch (error) {
    console.error("❌ Gagal dalam siklus berita:", error);
    throw error;
  }
}

/**
 * Scheduler: Hitung waktu hingga jam 10:00 pagi berikutnya
 */
function scheduleNextRun() {
  const targetHour = parseInt(process.env.NEWS_CRON_HOUR || "10", 10);
  const targetMinute = parseInt(process.env.NEWS_CRON_MINUTE || "0", 10);

  const now = new Date();
  const next = new Date(now);
  next.setHours(targetHour, targetMinute, 0, 0);

  // Jika jam 10 hari ini sudah lewat, jadwalkan untuk besok
  if (now.getTime() >= next.getTime()) {
    next.setDate(next.getDate() + 1);
  }

  const msUntilNext = next.getTime() - now.getTime();
  const hoursUntilNext = (msUntilNext / (1000 * 60 * 60)).toFixed(2);

  console.log(`⏰ Scheduler aktif: Jadwal tayang berikutnya pada ${next.toLocaleString("id-ID")} (sekitar ${hoursUntilNext} jam lagi).`);

  setTimeout(async () => {
    try {
      await runDailyNewsCycle();
    } catch (e) {
      console.error("Error pada jadwal jam 10:", e);
    }
    scheduleNextRun();
  }, msUntilNext);
}

// ── Entrypoint ─────────────────────────────────────────────────────────────
const isRunNow = process.argv.includes("--now");

if (isRunNow) {
  runDailyNewsCycle()
    .then(() => {
      console.log("Eksekusi --now selesai.");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
} else {
  console.log("🌟 PulseAI Daily News Cron Daemon Dimulai.");
  console.log("💡 Tips: Untuk test sekarang langsung, jalankan: node scripts/daily-news-cron.mjs --now");
  scheduleNextRun();
}
