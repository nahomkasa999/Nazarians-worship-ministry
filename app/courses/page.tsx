import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { TeachingCard } from "@/components/blocks/teaching-card";
import { getAllPublishedTeachings } from "@/lib/data/teachings-public";
import { formatDurationSeconds } from "@/lib/youtube/duration";

export default async function CoursesPage() {
  const teachings = await getAllPublishedTeachings();

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="teaching pb-16">
          <div className="mx-auto max-w-6xl px-[var(--page-side)] pt-10 pb-4 text-center sm:pt-14">
            <h1 className="text-2xl font-semibold sm:text-4xl">Courses</h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Teaching videos and series from Nazarian Worship Ministry.
            </p>
          </div>
          {teachings.length === 0 ? (
            <p className="px-[var(--page-side)] text-center text-sm text-muted-foreground">
              No courses are published yet. Check back soon.
            </p>
          ) : (
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-[var(--page-side)] md:grid-cols-2 lg:grid-cols-3">
              {teachings.map((t) => (
                <TeachingCard
                  key={t.id}
                  id={t.id}
                  youtubeId={t.youtubeId}
                  thumbnailUrl={t.thumbnailUrl}
                  title={t.title}
                  semester={t.semesterLabel}
                  meeting={t.scheduleLine}
                  location={t.venueLine}
                  description={t.description}
                  href={`/teaching/${t.id}`}
                  durationLabel={
                    t.durationSeconds != null ? formatDurationSeconds(t.durationSeconds) : null
                  }
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
