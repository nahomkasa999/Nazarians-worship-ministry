import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma";
import pg from "pg";

function resolvePgConnectionString() {
  const databaseUrl = process.env.DATABASE_URL;
  // Prefer DATABASE_URL for app runtime because it is usually the pooled endpoint on hosted platforms.
  if (databaseUrl && !databaseUrl.startsWith("prisma+postgres://")) {
    return databaseUrl;
  }

  const directUrl = process.env.DIRECT_DATABASE_URL ?? process.env.DIRECT_URL;
  if (directUrl) {
    return directUrl;
  }

  if (!databaseUrl) {
    throw new Error("Missing DATABASE_URL (or DIRECT_DATABASE_URL) environment variable.");
  }

  throw new Error(
    "DATABASE_URL is using prisma+postgres protocol, which pg adapter cannot use directly. Set DIRECT_DATABASE_URL to your postgres:// connection string."
  );
}

const prismaClientSingleton = () => {
  const connectionString = resolvePgConnectionString();
  const pool = new pg.Pool({
    connectionString,
    // Keep low per-instance connections to avoid saturating small pooled plans.
    max: Number(process.env.PG_POOL_MAX ?? 3),
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
export { prisma as db };
