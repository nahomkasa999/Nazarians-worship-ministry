import { db } from "@/lib/prisma";

const RECENT_EVENTS_LIMIT = 6;

export async function getRecentEventsForLanding() {
  return db.event.findMany({
    where: { active: true, membersOnly: false },
    orderBy: { createdAt: "desc" },
    take: RECENT_EVENTS_LIMIT,
    select: {
      id: true,
      imageUrl: true,
    },
  });
}
