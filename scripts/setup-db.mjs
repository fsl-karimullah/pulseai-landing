#!/usr/bin/env node
/**
 * Setup Database & Seed Admin User
 * Jalankan: node scripts/setup-db.mjs
 *
 * Atau dengan custom password:
 * ADMIN_USER=myuser ADMIN_PASS=mypassword node scripts/setup-db.mjs
 */

import Database from "better-sqlite3";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, "..", "database.sqlite");

const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

// ── Create Tables ─────────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    title        TEXT NOT NULL,
    slug         TEXT UNIQUE NOT NULL,
    excerpt      TEXT,
    content      TEXT NOT NULL DEFAULT '',
    cover_image  TEXT,
    author       TEXT NOT NULL DEFAULT 'Admin',
    status       TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published')),
    meta_title   TEXT,
    meta_desc    TEXT,
    tags         TEXT DEFAULT '[]',
    views        INTEGER NOT NULL DEFAULT 0,
    created_at   TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at   TEXT NOT NULL DEFAULT (datetime('now')),
    published_at TEXT
  );

  CREATE TABLE IF NOT EXISTS admin_users (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    username   TEXT UNIQUE NOT NULL,
    password   TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// ── Seed Admin User ───────────────────────────────────────────────────────────
const username = process.env.ADMIN_USER || "admin";
const plainPassword = process.env.ADMIN_PASS || "pulseai2024";

// Note: We use a simple but secure approach for the setup script
// Production uses bcrypt via the API, this is just for initial setup
// Generate bcrypt-like hash using SHA-256 with salt
import bcryptjs from "bcryptjs";
const hash = await bcryptjs.hash(plainPassword, 12);

const existing = db.prepare("SELECT id FROM admin_users WHERE username = ?").get(username);

if (existing) {
  // Update password if user exists
  db.prepare("UPDATE admin_users SET password = ? WHERE username = ?").run(hash, username);
  console.log(`✅ Password admin "${username}" diperbarui`);
} else {
  db.prepare("INSERT INTO admin_users (username, password) VALUES (?, ?)").run(username, hash);
  console.log(`✅ Admin user "${username}" berhasil dibuat`);
}

db.close();

console.log("");
console.log("🚀 Database siap!");
console.log(`📂 File: ${dbPath}`);
console.log(`👤 Username: ${username}`);
console.log(`🔑 Password: ${plainPassword}`);
console.log("");
console.log("Akses admin: http://localhost:3000/admin/login");
console.log("⚠️  Ganti password setelah login pertama!");
