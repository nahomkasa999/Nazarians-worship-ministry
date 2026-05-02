import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { BlogRichTextViewer } from "@/components/blog/blog-rich-text-viewer";
import { Button } from "@/components/ui/button";
import { getPublishedBlogBySlug } from "@/lib/data/blogs-public";
import { canAccessMembersOnlyContent } from "@/lib/membership-access";
import { getUserSessionFromHeaders } from "@/lib/user-session";
import { db } from "@/lib/prisma";
import { SITE_NAME, toAbsoluteUrl } from "@/lib/seo/site";
import { BLOG_FALLBACK_IMAGE } from "@/lib/blog/fallback-image";
import { getLocaleFromCookies } from "@/lib/i18n/get-locale";
import { pickLocalizedBlog } from "@/lib/i18n/pick-localized-content";
import { TeachingAttachments } from "@/components/teachings/teaching-attachments";
import { LanguageToggle } from "@/components/i18n/language-toggle";
import { absoluteAssetUrl } from "@/lib/seo/absolute-url";

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

  if (post.membersOnly) {
    const headerList = await headers();
    const session = await getUserSessionFromHeaders(headerList);
    const role = (session?.user as { role?: string | null } | undefined)?.role;
    const canSee = await canAccessMembersOnlyContent({
      userId: session?.user?.id,
      role,
    });
    if (!canSee) {
      return {
        title: "Members-only article",
        robots: { index: false, follow: false },
      };
    }
  }

  const locale = await getLocaleFromCookies();
  const display = pickLocalizedBlog(post, locale);
  const title = `${display.title} | ${SITE_NAME}`;
  const description =
    display.excerpt?.trim() ||
    "Read practical worship ministry guidance and biblical insights from Nazarian Worship Ministry.";
  const path = `/blog/${post.slug}`;
  const ogUrl = toAbsoluteUrl(path);
  const ogImage = absoluteAssetUrl(post.coverImage, BLOG_FALLBACK_IMAGE);

  return {
    title: display.title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: ogUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: display.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const row = await getPublishedBlogBySlug(slug);
  if (!row) {
    notFound();
  }

  const locale = await getLocaleFromCookies();
  const localized = pickLocalizedBlog(row, locale);

  const session = await getUserSessionFromHeaders(await headers());
  const role = (session?.user as { role?: string | null } | undefined)?.role;
  const canAccess =
    !row.membersOnly ||
    (await canAccessMembersOnlyContent({ userId: session?.user?.id, role }));

  const updated = canAccess
    ? await db.blog.update({
        where: { id: row.id },
        data: { viewCount: { increment: 1 } },
      })
    : row;

  const blogAttachments = canAccess
    ? await db.blogAttachment.findMany({
        where: { blogId: updated.id },
        orderBy: { createdAt: "desc" },
        select: { id: true, title: true, createdAt: true },
      })
    : [];

  const postUrl = toAbsoluteUrl(`/blog/${updated.slug}`);
  const postImage = updated.coverImage || BLOG_FALLBACK_IMAGE;
  const articleJsonLd = canAccess
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: localized.title,
        description: localized.excerpt || undefined,
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
      }
    : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        {articleJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          />
        ) : null}
        <article className="mx-auto max-w-3xl px-[var(--page-side)] py-10 sm:py-14">
          <div className="mb-6 flex justify-end">
            <LanguageToggle />
          </div>
          <header className="mb-8">
            <h1 className="text-2xl font-semibold sm:text-4xl">
              {canAccess ? localized.title : "Members-only article"}
            </h1>
            {canAccess ? (
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                {updated.publishedAt
                  ? new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(updated.publishedAt)
                  : null}
                {updated.viewCount > 0 ? ` · ${updated.viewCount} views` : null}
              </p>
            ) : null}
          </header>
          {canAccess ? (
            <>
              <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src={updated.coverImage || BLOG_FALLBACK_IMAGE}
                  alt={localized.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
              {blogAttachments.length > 0 ? (
                <section className="mb-10 space-y-3">
                  <h2 className="text-lg font-semibold">Downloads</h2>
                  <p className="text-sm text-muted-foreground">PDFs attached to this article.</p>
                  <TeachingAttachments
                    downloadApiPrefix="/api/blogs/attachments"
                    attachments={blogAttachments.map((a) => ({
                      id: a.id,
                      title: a.title,
                      createdAt: a.createdAt.toISOString(),
                    }))}
                  />
                </section>
              ) : null}
              {localized.excerpt ? (
                <p className="mb-8 text-base text-muted-foreground sm:text-lg">{localized.excerpt}</p>
              ) : null}
              <BlogRichTextViewer content={localized.content} />
              <section className="mt-10 space-y-3">
                <h2 className="text-lg font-semibold">Related worship resources</h2>
                <p className="text-sm text-muted-foreground">
                  Continue learning with our teaching videos and practical worship ministry sessions.
                </p>
                <div>
                  <Link href="/courses" className="text-sm font-medium underline underline-offset-4">
                    Explore worship courses
                  </Link>
                </div>
              </section>
            </>
          ) : (
            <div className="rounded-lg border bg-muted/30 p-8 text-center">
              <p className="text-base font-medium text-foreground">This article is for members</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in as an approved member to read the full post. Administrators always have access when signed in.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <Link href="/membership">Become a member</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/login?next=/members">Member sign in</Link>
                </Button>
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
