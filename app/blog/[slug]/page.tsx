import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { BlogRichTextViewer } from "@/components/blog/blog-rich-text-viewer";
import { getPublishedBlogBySlug } from "@/lib/data/blogs-public";
import { db } from "@/lib/prisma";
import { SITE_NAME, toAbsoluteUrl } from "@/lib/seo/site";
import { BLOG_FALLBACK_IMAGE } from "@/lib/blog/fallback-image";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);
  if (!post) {
    return {
      title: "Blog",
    };
  }

  const title = `${post.title} | ${SITE_NAME}`;
  const description =
    post.excerpt?.trim() ||
    "Read practical worship ministry guidance and biblical insights from Nazarian Worship Ministry.";
  const url = `/blog/${post.slug}`;
  const image = post.coverImage || BLOG_FALLBACK_IMAGE;

  return {
    title: post.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

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

  const postUrl = toAbsoluteUrl(`/blog/${updated.slug}`);
  const postImage = updated.coverImage || BLOG_FALLBACK_IMAGE;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: updated.title,
    description: updated.excerpt || undefined,
    image: [postImage],
    datePublished: updated.publishedAt?.toISOString(),
    dateModified: updated.updatedAt.toISOString(),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/og-default.png"),
      },
    },
    mainEntityOfPage: postUrl,
    url: postUrl,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
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
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden bg-muted">
            <Image
              src={updated.coverImage || BLOG_FALLBACK_IMAGE}
              alt={updated.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          {updated.excerpt ? (
            <p className="mb-8 text-base text-muted-foreground sm:text-lg">{updated.excerpt}</p>
          ) : null}
          <BlogRichTextViewer content={updated.content} />
          <section className="mt-10 rounded-lg border bg-card p-5">
            <h2 className="text-lg font-semibold">Related worship resources</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Continue learning with our teaching videos and practical worship ministry sessions.
            </p>
            <div className="mt-4">
              <Link href="/courses" className="text-sm font-medium underline underline-offset-4">
                Explore worship courses
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
