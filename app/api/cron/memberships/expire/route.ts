import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

function isAuthorized(request: Request) {
  const expected = process.env.CRON_SECRET?.trim();
  if (!expected) return false;
  const provided = request.headers.get("x-cron-secret")?.trim();
  return Boolean(provided) && provided === expected;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const expiring = await db.membershipRequest.findMany({
    where: {
      status: "APPROVED",
      membershipExpiresAt: { lt: now },
      userId: { not: null },
    },
    select: { id: true, userId: true, membershipExpiresAt: true },
    take: 500,
  });

  if (expiring.length === 0) {
    return NextResponse.json({ ok: true, expiredCount: 0 });
  }

  const ids = expiring.map((m) => m.id);

  await db.$transaction([
    db.membershipRequest.updateMany({
      where: { id: { in: ids }, status: "APPROVED" },
      data: { status: "EXPIRED" },
    }),
    db.membershipNotification.createMany({
      data: expiring
        .filter((m) => m.userId)
        .map((m) => ({
          userId: m.userId!,
          title: "Membership expired",
          body: m.membershipExpiresAt
            ? `Your membership expired on ${m.membershipExpiresAt.toLocaleDateString()}. Renew to continue access.`
            : "Your membership expired. Renew to continue access.",
          type: "membership.expired",
        })),
      skipDuplicates: true,
    }),
  ]);

  return NextResponse.json({ ok: true, expiredCount: ids.length });
}

export async function GET(request: Request) {
  // Allow GET for manual testing with same auth header.
  return POST(request);
}

