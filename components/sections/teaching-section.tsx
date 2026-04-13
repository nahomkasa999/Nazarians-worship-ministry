import { figmaAssets } from "@/content/images";
import { SectionHeader } from "@/components/common/section-header";
import { TeachingCard } from "@/components/blocks/teaching-card";
import { getTeachingsForHome } from "@/lib/data/teachings-public";
import { formatDurationSeconds } from "@/lib/youtube/duration";

const HOME_TEACHINGS_LIMIT = 6;

export async function TeachingSection() {
  const rows = await getTeachingsForHome(HOME_TEACHINGS_LIMIT);
  if (rows.length === 0) {
    return null;
  }

  return (
    <section className="teaching">
      <SectionHeader
        title="Latest Teaching"
        showViewAll
        viewAllHref="/courses"
        arrowSrc={figmaAssets.imgArrowRight1}
      />
      <div className="teaching__grid">
        {rows.map((t) => (
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
    </section>
  );
}

export default TeachingSection;
