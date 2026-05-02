import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BlogRichTextViewer } from "@/components/blog/blog-rich-text-viewer";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { getPublishedTeachingBySlugOrId } from "@/lib/data/teachings-public";
import { canAccessMembersOnlyContent } from "@/lib/membership-access";
import { getUserSessionFromHeaders } from "@/lib/user-session";
import { headers } from "next/headers";
import { db } from "@/lib/prisma";
import { parseTeachingDescription, teachingDescriptionPreview } from "@/lib/teaching-description";
import { SITE_NAME, toAbsoluteUrl } from "@/lib/seo/site";
import { TeachingAttachments } from "@/components/teachings/teaching-attachments";
import { Button } from "@/components/ui/button";
import { getLocaleFromCookies } from "@/lib/i18n/get-locale";
import { pickLocalizedTeaching } from "@/lib/i18n/pick-localized-content";
import { LanguageToggle } from "@/components/i18n/language-toggle";
import { absoluteAssetUrl } from "@/lib/seo/absolute-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const teaching = await getPublishedTeachingBySlugOrId(slug);
  if (!teaching) {
    return {
      title: "Courses",
    };
  }

  if (teaching.membersOnly) {
    const headerList = await headers();
    const session = await getUserSessionFromHeaders(headerList);
    const role = (session?.user as { role?: string | null } | undefined)?.role;
    const canSee = await canAccessMembersOnlyContent({
      userId: session?.user?.id,
      role,
    });
    if (!canSee) {
      return {
        title: "Members-only teaching",
        robots: { index: false, follow: false },
      };
    }
  }

  const locale = await getLocaleFromCookies();
  const loc = pickLocalizedTeaching(teaching, locale);
  const description =
    teachingDescriptionPreview(loc.description) ||
    "Watch worship ministry teachings and practical guidance for church teams in Ethiopia.";
  const canonicalSlug = teaching.slug || teaching.id;
  const path = `/teaching/${canonicalSlug}`;
  const ogUrl = toAbsoluteUrl(path);
  const ogImage = absoluteAssetUrl(teaching.thumbnailUrl, "/og-default.png");

  return {
    title: loc.title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${loc.title} | ${SITE_NAME}`,
      description,
      type: "video.other",
      url: ogUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: loc.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${loc.title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

export default async function TeachingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const teaching = await getPublishedTeachingBySlugOrId(slug);

  if (!teaching) {
    notFound();
  }

  const locale = await getLocaleFromCookies();
  const localized = pickLocalizedTeaching(teaching, locale);

  const session = await getUserSessionFromHeaders(await headers());
  const role = (session?.user as { role?: string | null } | undefined)?.role;
  const canAccess =
    !teaching.membersOnly ||
    (await canAccessMembersOnlyContent({ userId: session?.user?.id, role }));

  const attachments = canAccess
    ? await db.teachingAttachment.findMany({
        where: { teachingId: teaching.id },
        orderBy: { createdAt: "desc" },
        select: { id: true, title: true, createdAt: true },
      })
    : [];
  const richDescription = parseTeachingDescription(localized.description);
  const canonicalSlug = teaching.slug || teaching.id;
  const teachingUrl = toAbsoluteUrl(`/teaching/${canonicalSlug}`);
  const teachingImage = teaching.thumbnailUrl || toAbsoluteUrl("/og-default.png");
  const showPublicTeachingDetails = !teaching.membersOnly || canAccess;
  const videoJsonLd = showPublicTeachingDetails
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: localized.title,
        description:
          teachingDescriptionPreview(localized.description) ||
          "Worship ministry teaching from Nazarian Worship Ministry.",
        thumbnailUrl: [teachingImage],
        uploadDate: teaching.createdAt.toISOString(),
        embedUrl: `https://www.youtube.com/embed/${teaching.youtubeId}`,
        contentUrl: teaching.youtubeUrl,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
        },
        mainEntityOfPage: teachingUrl,
      }
    : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        {videoJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
          />
        ) : null}
        <article className="mx-auto max-w-5xl space-y-6 px-[var(--page-side)] py-10 sm:py-14">
          <div className="flex justify-end">
            <LanguageToggle />
          </div>
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold sm:text-4xl">
              {showPublicTeachingDetails ? localized.title : "Members-only teaching"}
            </h1>
            {showPublicTeachingDetails ? (
              <p className="text-sm text-muted-foreground">
                {teaching.semesterLabel || "Teaching session"}
                {teaching.scheduleLine ? ` · ${teaching.scheduleLine}` : ""}
                {teaching.venueLine ? ` · ${teaching.venueLine}` : ""}
              </p>
            ) : null}
          </header>
          <div className="overflow-hidden rounded-lg border bg-black">
            {canAccess ? (
              <iframe
                src={`https://www.youtube.com/embed/${teaching.youtubeId}`}
                title={localized.title}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-muted/20 p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  The video unlocks for active members and for signed-in administrators. Notes and downloads stay hidden until then.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button asChild>
                    <Link href="/membership">Become a member</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/login?next=/members">Member sign in</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
          {canAccess ? (
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Downloads</h2>
              <p className="text-sm text-muted-foreground">
                PDFs and resources attached to this lesson.
              </p>
              <div className="mt-1">
                <TeachingAttachments
                  attachments={attachments.map((a) => ({
                    id: a.id,
                    title: a.title,
                    createdAt: a.createdAt.toISOString(),
                  }))}
                />
              </div>
            </section>
          ) : null}
          {canAccess ? (
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Notes</h2>
              <div className="mt-1">
                {richDescription ? (
                  <BlogRichTextViewer content={richDescription} />
                ) : (
                  <p className="whitespace-pre-wrap text-sm leading-7 text-muted-foreground">
                    {teachingDescriptionPreview(localized.description) || "Teaching notes will be added soon."}
                  </p>
                )}
              </div>
            </section>
          ) : teaching.membersOnly ? (
            <section className="rounded-lg border border-dashed bg-muted/20 p-6 text-center text-sm text-muted-foreground">
              Lesson notes unlock together with the video once your membership is active.
            </section>
          ) : null}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Keep growing in worship ministry</h2>
            <p className="text-sm text-muted-foreground">
              Read step-by-step worship guides and practical ministry articles for church teams.
            </p>
            <div className="mt-1">
              <Link href="/blog" className="text-sm font-medium underline underline-offset-4">
                Read related blog articles
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
