import { db } from "@/lib/prisma";

const publishedWhere = { published: true as const };
const orderBy = [{ position: "asc" as const }, { createdAt: "desc" as const }];

export async function getTeachingsForHome(limit: number) {
  return db.teaching.findMany({
    where: publishedWhere,
    orderBy,
    take: limit,
    select: {
      id: true,
      slug: true,
      youtubeUrl: true,
      youtubeId: true,
      thumbnailUrl: true,
      title: true,
      description: true,
      durationSeconds: true,
      semesterLabel: true,
      scheduleLine: true,
      venueLine: true,
      position: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function getAllPublishedTeachings() {
  return db.teaching.findMany({
    where: publishedWhere,
    orderBy,
    select: {
      id: true,
      slug: true,
      youtubeUrl: true,
      youtubeId: true,
      thumbnailUrl: true,
      title: true,
      description: true,
      durationSeconds: true,
      semesterLabel: true,
      scheduleLine: true,
      venueLine: true,
      position: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function getPublishedTeachingBySlugOrId(slugOrId: string) {
  return db.teaching.findFirst({
    where: {
      published: true,
      OR: [{ slug: slugOrId }, { id: slugOrId }],
    },
  });
}
