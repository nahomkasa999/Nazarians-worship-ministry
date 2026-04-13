import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { getPublishedBlogs } from "@/lib/data/blogs-public";
import { figmaAssets } from "@/content/images";
import { getRelativeDateLabel } from "@/lib/relative-date";

export default async function BlogListPage() {
  const posts = await getPublishedBlogs();

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-[var(--page-side)] pt-10 pb-8 sm:pt-14">
            <h1 className="text-2xl font-semibold sm:text-4xl">Blog</h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              News and articles from Nazarian Worship Ministry.
            </p>
          </div>
          {posts.length === 0 ? (
            <p className="px-[var(--page-side)] text-center text-sm text-muted-foreground">
              No posts yet. Check back soon.
            </p>
          ) : (
            <ul className="mx-auto grid max-w-6xl gap-6 px-[var(--page-side)] md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <li key={post.id} className="overflow-hidden rounded-lg border bg-card">
                  <article>
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <div className="relative aspect-[16/9] w-full bg-muted">
                        <Image
                          src={post.coverImage || figmaAssets.imgBlog1}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="space-y-3 p-4">
                        <h2 className="text-lg font-semibold group-hover:underline sm:text-xl">{post.title}</h2>
                      {post.excerpt ? (
                          <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      ) : null}
                        <p className="text-xs text-muted-foreground">
                        {post.publishedAt
                          ? new Intl.DateTimeFormat("en", {
                              dateStyle: "medium",
                            }).format(post.publishedAt) + ` · ${getRelativeDateLabel(post.publishedAt)}`
                          : ""}
                        {post.viewCount > 0 ? ` · ${post.viewCount} views` : null}
                        </p>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
