import pg from "pg";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

let { Pool } = pg;
let dbUrl = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
let db = new Pool({
  connectionString: dbUrl,
  ssl: false
});
const sqlPath = "./ticket.sql";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sqlAbsolutePath = path.resolve(__dirname, sqlPath);
db.query(fs.readFileSync(sqlAbsolutePath, "utf8"));

export default db;
