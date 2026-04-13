import { notFound } from "next/navigation";
import { BlogRichTextViewer } from "@/components/blog/blog-rich-text-viewer";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { getPublishedTeachingById } from "@/lib/data/teachings-public";
import { parseTeachingDescription, teachingDescriptionPreview } from "@/lib/teaching-description";

export default async function TeachingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teaching = await getPublishedTeachingById(id);

  if (!teaching) {
    notFound();
  }
  const richDescription = parseTeachingDescription(teaching.description);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
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
        </article>
      </main>
      <Footer />
    </div>
  );
}
