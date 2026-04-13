import Image from "next/image";
import { SectionHeader } from "@/components/common/section-header";
import { getRecentEventsForLanding } from "@/lib/data/recent-events";

export async function EventsSection() {
  const events = await getRecentEventsForLanding();
  if (events.length === 0) {
    return null;
  }

  return (
    <section className="events" id="events">
      <SectionHeader title="Recent Events" />
      <div className="events__grid">
        {events.map((e) => (
          <div key={e.id} className="events__card">
            <div className="events__card-inner">
              <Image
                src={e.imageUrl}
                alt=""
                fill
                className="events__poster-img"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventsSection;
