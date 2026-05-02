import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { membershipIdParamsSchema } from "@/lib/validation/schemas";
import { sendMembershipRejectedEmail } from "@/lib/email/send-membership-approved";
import { z } from "zod";

const rejectBodySchema = z.object({
  reason: z.string().trim().max(4000).optional(),
});

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsedParams = membershipIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid membership request id." }, { status: 400 });
  }

  let json: unknown = {};
  try {
    json = await request.json();
  } catch {
    json = {};
  }

  const parsedBody = rejectBodySchema.safeParse(json);
  if (!parsedBody.success) {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const membership = await db.membershipRequest.findUnique({
    where: { id: parsedParams.data.id },
    select: { id: true, email: true, fullName: true, userId: true },
  });
  if (!membership) {
    return NextResponse.json({ error: "Membership request not found." }, { status: 404 });
  }

  const reason = parsedBody.data.reason?.trim() || null;

  await db.membershipRequest.update({
    where: { id: membership.id },
    data: {
      status: "REJECTED",
      approvedAt: null,
      approvedBy: null,
      membershipStartsAt: null,
      membershipExpiresAt: null,
      rejectionReason: reason,
    },
    select: { id: true },
  });

  if (membership.userId) {
    await db.membershipNotification.create({
      data: {
        userId: membership.userId,
        title: "Membership rejected",
        body: reason || "Your membership request was rejected.",
        type: "membership.rejected",
      },
      select: { id: true },
    });
  }

  await sendMembershipRejectedEmail({
    to: membership.email,
    fullName: membership.fullName,
    reason,
  });

  return NextResponse.json({ ok: true, status: "REJECTED" as const });
}

