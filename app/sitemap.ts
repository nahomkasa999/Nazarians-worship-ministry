import type { MetadataRoute } from "next";
import { getPublishedBlogs } from "@/lib/data/blogs-public";
import { getAllPublishedTeachings } from "@/lib/data/teachings-public";
import { toAbsoluteUrl } from "@/lib/seo/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, teachings] = await Promise.all([getPublishedBlogs(), getAllPublishedTeachings()]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: toAbsoluteUrl("/") },
    { url: toAbsoluteUrl("/blog") },
    { url: toAbsoluteUrl("/courses") },
    { url: toAbsoluteUrl("/community") },
    { url: toAbsoluteUrl("/manifesto") },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt ?? new Date(),
  }));

  const teachingRoutes: MetadataRoute.Sitemap = teachings.map((teaching) => ({
    url: toAbsoluteUrl(`/teaching/${teaching.slug || teaching.id}`),
    lastModified: teaching.updatedAt,
  }));

  return [...staticRoutes, ...blogRoutes, ...teachingRoutes];
}
