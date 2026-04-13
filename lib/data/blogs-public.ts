import { BlogStatus } from "@/generated/prisma";
import { db } from "@/lib/prisma";

export async function getPublishedBlogs(options?: { take?: number }) {
  return db.blog.findMany({
    where: { status: BlogStatus.PUBLISHED },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    take: options?.take,
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      coverImage: true,
      publishedAt: true,
      viewCount: true,
    },
  });
}

export async function getPublishedBlogBySlug(slug: string) {
  return db.blog.findFirst({
    where: { slug, status: BlogStatus.PUBLISHED },
  });
}
