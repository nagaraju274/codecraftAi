
// src/lib/mongodb.ts
import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = 'mongodb://localhost:27017';
const MONGODB_DB = 'codecraft-ai';

// In production mode, it's best to not use a global variable.
// In development mode, we use a global variable so that the value
// is preserved across module reloads caused by HMR (Hot Module Replacement).
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI, {});

  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client: cachedClient, db: cachedDb };
}
