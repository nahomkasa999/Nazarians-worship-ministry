import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BlogRichTextViewer } from "@/components/blog/blog-rich-text-viewer";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { getPublishedTeachingBySlugOrId } from "@/lib/data/teachings-public";
import { parseTeachingDescription, teachingDescriptionPreview } from "@/lib/teaching-description";
import { SITE_NAME, toAbsoluteUrl } from "@/lib/seo/site";

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

  const description =
    teachingDescriptionPreview(teaching.description) ||
    "Watch worship ministry teachings and practical guidance for church teams in Ethiopia.";
  const canonicalSlug = teaching.slug || teaching.id;
  const url = `/teaching/${canonicalSlug}`;
  const image = teaching.thumbnailUrl || "/og-default.png";

  return {
    title: teaching.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${teaching.title} | ${SITE_NAME}`,
      description,
      type: "video.other",
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${teaching.title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

export default async function TeachingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const teaching = await getPublishedTeachingBySlugOrId(slug);

  if (!teaching) {
    notFound();
  }
  const richDescription = parseTeachingDescription(teaching.description);
  const canonicalSlug = teaching.slug || teaching.id;
  const teachingUrl = toAbsoluteUrl(`/teaching/${canonicalSlug}`);
  const teachingImage = teaching.thumbnailUrl || toAbsoluteUrl("/og-default.png");
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: teaching.title,
    description:
      teachingDescriptionPreview(teaching.description) ||
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
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
        <article className="mx-auto max-w-5xl space-y-6 px-[var(--page-side)] py-10 sm:py-14">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold sm:text-4xl">{teaching.title}</h1>
            <p className="text-sm text-muted-foreground">
              {teaching.semesterLabel || "Teaching session"}
              {teaching.scheduleLine ? ` · ${teaching.scheduleLine}` : ""}
              {teaching.venueLine ? ` · ${teaching.venueLine}` : ""}
            </p>
          </header>
          <div className="overflow-hidden rounded-lg border bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${teaching.youtubeId}`}
              title={teaching.title}
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <section className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">Notes</h2>
            <div className="mt-3">
              {richDescription ? (
                <BlogRichTextViewer content={richDescription} />
              ) : (
                <p className="whitespace-pre-wrap text-sm leading-7 text-muted-foreground">
                  {teachingDescriptionPreview(teaching.description) || "Teaching notes will be added soon."}
                </p>
              )}
            </div>
          </section>
          <section className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">Keep growing in worship ministry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Read step-by-step worship guides and practical ministry articles for church teams.
            </p>
            <div className="mt-4">
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
