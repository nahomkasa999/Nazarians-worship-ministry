import { db } from "@/lib/prisma";

const publishedWhere = { published: true as const };
const orderBy = [{ position: "asc" as const }, { createdAt: "desc" as const }];

export async function getTeachingsForHome(limit: number) {
  return db.teaching.findMany({
    where: publishedWhere,
    orderBy,
    take: limit,
  });
}

export async function getAllPublishedTeachings() {
  return db.teaching.findMany({
    where: publishedWhere,
    orderBy,
  });
}

export async function getPublishedTeachingById(id: string) {
  return db.teaching.findFirst({
    where: {
      id,
      published: true,
    },
  });
}
