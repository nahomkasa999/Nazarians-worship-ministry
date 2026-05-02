import { MembershipStatus } from "@/generated/prisma";
import { db } from "@/lib/prisma";

async function activeMemberUserIds(): Promise<string[]> {
  const now = new Date();
  const rows = await db.membershipRequest.findMany({
    where: {
      status: MembershipStatus.APPROVED,
      userId: { not: null },
      OR: [{ membershipExpiresAt: null }, { membershipExpiresAt: { gt: now } }],
    },
    select: { userId: true },
  });
  const ids = new Set<string>();
  for (const r of rows) {
    if (r.userId) ids.add(r.userId);
  }
  return [...ids];
}

/** Notify approved members when a new blog post is first published. */
export async function notifyMembersNewBlog(opts: { title: string; slug: string }) {
  const userIds = await activeMemberUserIds();
  if (userIds.length === 0) return;

  await db.membershipNotification.createMany({
    data: userIds.map((userId) => ({
      userId,
      title: `New article: ${opts.title}`,
      body: "A new blog post is available in the member portal.",
      type: "blog",
    })),
  });
}

/** Notify approved members when a new teaching is published (or first goes live). */
export async function notifyMembersNewTeaching(opts: { title: string }) {
  const userIds = await activeMemberUserIds();
  if (userIds.length === 0) return;

  await db.membershipNotification.createMany({
    data: userIds.map((userId) => ({
      userId,
      title: `New teaching: ${opts.title}`,
      body: "A new course video is available in the member portal.",
      type: "teaching",
    })),
  });
}

/** Notify approved members when a new event poster is released. */
export async function notifyMembersNewEvent(opts: { title?: string | null }) {
  const userIds = await activeMemberUserIds();
  if (userIds.length === 0) return;

  const normalizedTitle = opts.title?.trim();
  await db.membershipNotification.createMany({
    data: userIds.map((userId) => ({
      userId,
      title: normalizedTitle ? `New event: ${normalizedTitle}` : "New member event released",
      body: "A new event update is available in the member portal.",
      type: "event",
    })),
  });
}
