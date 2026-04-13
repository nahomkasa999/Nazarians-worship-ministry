import { NextResponse } from "next/server";
import { Prisma } from "@/generated/prisma";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { sendMembershipApprovedEmail } from "@/lib/email/send-membership-approved";
import { membershipIdParamsSchema } from "@/lib/validation/schemas";

export const approveMembershipRouteDoc = {
  method: "post",
  path: "/api/admin/memberships/{id}",
  tags: ["Admin Memberships"],
  summary: "Approve membership request",
  request: {
    params: {
      type: "object",
      properties: {
        id: { type: "string", example: "cm123membershipid" },
      },
      required: ["id"],
    },
  },
  responses: {
    200: { description: "Membership approved" },
    400: { description: "Invalid id" },
    401: { description: "Unauthorized" },
    404: { description: "Not found" },
  },
} as const;

export const rejectMembershipRouteDoc = {
  method: "delete",
  path: "/api/admin/memberships/{id}",
  tags: ["Admin Memberships"],
  summary: "Reject membership request",
  request: {
    params: {
      type: "object",
      properties: {
        id: { type: "string", example: "cm123membershipid" },
      },
      required: ["id"],
    },
  },
  responses: {
    200: { description: "Membership rejected" },
    400: { description: "Invalid id" },
    401: { description: "Unauthorized" },
    404: { description: "Not found" },
  },
} as const;

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsedParams = membershipIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid membership request id." }, { status: 400 });
  }

  const pending = await db.membershipRequest.findFirst({
    where: {
      id: parsedParams.data.id,
      status: "PENDING",
    },
    select: { id: true, email: true, phone: true },
  });

  if (!pending) {
    return NextResponse.json({ error: "Membership request not found." }, { status: 404 });
  }

  const approvedSameEmail = await db.membershipRequest.findFirst({
    where: {
      status: "APPROVED",
      email: { equals: pending.email, mode: "insensitive" },
      NOT: { id: pending.id },
    },
    select: { id: true },
  });

  const approvedSamePhone = await db.membershipRequest.findFirst({
    where: {
      status: "APPROVED",
      phone: pending.phone,
      NOT: { id: pending.id },
    },
    select: { id: true },
  });

  if (approvedSameEmail || approvedSamePhone) {
    return NextResponse.json(
      {
        error:
          "Cannot approve: this email or phone already belongs to an approved member. Reject this duplicate request or resolve the existing record first.",
      },
      { status: 409 },
    );
  }

  let updated;
  try {
    updated = await db.membershipRequest.updateMany({
      where: {
        id: pending.id,
        status: "PENDING",
      },
      data: {
        status: "APPROVED",
        approvedAt: new Date(),
        approvedBy: session.user.email,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return NextResponse.json(
        {
          error:
            "Could not approve: another approved membership already uses this email or status combination.",
        },
        { status: 409 },
      );
    }
    throw err;
  }

  if (updated.count === 0) {
    return NextResponse.json({ error: "Membership request not found." }, { status: 404 });
  }

  const approved = await db.membershipRequest.findUnique({
    where: { id: parsedParams.data.id },
    select: { email: true, fullName: true, telegram: true },
  });

  let emailResult: { sent: true } | { sent: false; message: string } = {
    sent: false,
    message: "Could not load membership record to send email.",
  };

  if (approved) {
    const outcome = await sendMembershipApprovedEmail({
      to: approved.email,
      fullName: approved.fullName,
      telegram: approved.telegram,
    });
    emailResult =
      outcome.sent ?
        { sent: true }
      : { sent: false, message: outcome.message };
  }

  return NextResponse.json({
    ok: true,
    status: "APPROVED" as const,
    email: emailResult,
  });
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsedParams = membershipIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid membership request id." }, { status: 400 });
  }

  const updated = await db.membershipRequest.updateMany({
    where: {
      id: parsedParams.data.id,
      status: { in: ["PENDING", "APPROVED"] },
    },
    data: {
      status: "REJECTED",
      approvedAt: null,
      approvedBy: null,
    },
  });

  if (updated.count === 0) {
    return NextResponse.json({ error: "Membership request not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true, status: "REJECTED" as const });
}
