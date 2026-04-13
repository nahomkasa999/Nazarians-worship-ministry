import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma";
import pg from "pg";

function resolvePgConnectionString() {
  const directUrl = process.env.DIRECT_DATABASE_URL ?? process.env.DIRECT_URL;
  if (directUrl) return directUrl;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("Missing DATABASE_URL (or DIRECT_DATABASE_URL) environment variable.");
  }

  if (databaseUrl.startsWith("prisma+postgres://")) {
    throw new Error(
      "DATABASE_URL is using prisma+postgres protocol, which pg adapter cannot use directly. Set DIRECT_DATABASE_URL to your postgres:// connection string."
    );
  }

  return databaseUrl;
}

const prismaClientSingleton = () => {
  const connectionString = resolvePgConnectionString();
  const pool = new pg.Pool({ connectionString });
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
