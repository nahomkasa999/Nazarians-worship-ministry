import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { BlogRichTextViewer } from "@/components/blog/blog-rich-text-viewer";
import { getPublishedBlogBySlug } from "@/lib/data/blogs-public";
import { db } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const row = await getPublishedBlogBySlug(slug);
  if (!row) {
    notFound();
  }

  const updated = await db.blog.update({
    where: { id: row.id },
    data: { viewCount: { increment: 1 } },
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-[var(--page-side)] py-10 sm:py-14">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold sm:text-4xl">{updated.title}</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
              {updated.publishedAt
                ? new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(updated.publishedAt)
                : null}
              {updated.viewCount > 0 ? ` · ${updated.viewCount} views` : null}
            </p>
          </header>
          {updated.coverImage ? (
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden bg-muted">
              <Image
                src={updated.coverImage}
                alt={updated.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          ) : null}
          {updated.excerpt ? (
            <p className="mb-8 text-base text-muted-foreground sm:text-lg">{updated.excerpt}</p>
          ) : null}
          <BlogRichTextViewer content={updated.content} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
