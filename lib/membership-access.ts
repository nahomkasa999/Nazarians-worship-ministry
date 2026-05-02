import { db } from "@/lib/prisma";

/** Approved membership that is still valid (open-ended expiry or end date in the future). */
export async function findActiveApprovedMembership(userId: string) {
  return db.membershipRequest.findFirst({
    where: {
      userId,
      status: "APPROVED",
      OR: [{ membershipExpiresAt: null }, { membershipExpiresAt: { gt: new Date() } }],
    },
    select: { id: true },
  });
}

export async function canAccessMembersOnlyContent(opts: {
  userId: string | undefined;
  role: string | null | undefined;
}): Promise<boolean> {
  if (!opts.userId) return false;
  if (opts.role === "admin") return true;
  const membership = await findActiveApprovedMembership(opts.userId);
  return Boolean(membership);
}
