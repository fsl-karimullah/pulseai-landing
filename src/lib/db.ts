import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "@/schema/posts";
import path from "path";

// SQLite file di root project
const dbPath = path.join(process.cwd(), "database.sqlite");

const sqlite = new Database(dbPath);

// Enable WAL mode untuk performa lebih baik (read-heavy)
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");

export const db = drizzle(sqlite, { schema });

export default sqlite;
