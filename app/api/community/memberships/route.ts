import { NextResponse } from "next/server";
import { Prisma } from "@/generated/prisma";
import { db } from "@/lib/prisma";
import { membershipWriteSchema } from "@/lib/validation/schemas";
import { flattenError } from "zod";

export const createMembershipRouteDoc = {
  method: "post",
  path: "/api/community/memberships",
  tags: ["Community"],
  summary: "Submit membership request",
  request: {
    body: {
      type: "object",
      required: ["fullName", "email", "phone"],
      properties: {
        fullName: { type: "string", example: "John Doe" },
        email: { type: "string", example: "john@example.com" },
        phone: { type: "string", example: "0912345678" },
        telegram: { type: "string", example: "myusername" },
        message: { type: "string", example: "I want to serve in worship team." },
      },
    },
  },
  responses: {
    200: { description: "Request submitted" },
    400: { description: "Validation failed" },
    409: {
      description:
        "Already a member, pending request exists, or unique constraint (email/phone + status)",
    },
  },
} as const;

export async function POST(request: Request) {
  const payload = await request.json();
  const parsedBody = membershipWriteSchema.safeParse(payload);
  if (!parsedBody.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        details: flattenError(parsedBody.error),
      },
      { status: 400 }
    );
  }

  const { fullName, email, phone, telegram, message } = parsedBody.data;

  const approvedByEmail = await db.membershipRequest.findFirst({
    where: {
      status: "APPROVED",
      email: { equals: email, mode: "insensitive" },
    },
    select: { id: true },
  });

  const approvedByPhone = await db.membershipRequest.findFirst({
    where: {
      status: "APPROVED",
      phone,
    },
    select: { id: true },
  });

  if (approvedByEmail || approvedByPhone) {
    return NextResponse.json(
      {
        error: "You are already a member.",
        details: {
          formErrors: [
            "You are already a member. You do not need to submit another request.",
          ],
          fieldErrors: {
            ...(approvedByEmail ?
              { email: ["This email is already registered as a member."] }
            : {}),
            ...(approvedByPhone ?
              { phone: ["This phone number is already registered as a member."] }
            : {}),
          },
        },
      },
      { status: 409 },
    );
  }

  const existingPending = await db.membershipRequest.findFirst({
    where: {
      email: { equals: email, mode: "insensitive" },
      status: "PENDING",
    },
    select: { id: true },
  });

  if (existingPending) {
    return NextResponse.json(
      {
        error: "You already have a pending request.",
        details: {
          fieldErrors: {
            email: ["This email already has a pending membership request."],
          },
          formErrors: [] as string[],
        },
      },
      { status: 409 },
    );
  }

  try {
    const created = await db.membershipRequest.create({
      data: {
        fullName,
        email,
        phone,
        telegram: telegram ?? null,
        message: message || null,
      },
      select: { id: true },
    });
    return NextResponse.json({ id: created.id });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientValidationError) {
      const hint =
        err.message.includes("Unknown argument `telegram`") ?
          " The database or server needs the latest migration (including the telegram column). Ask an admin to run: prisma migrate deploy && prisma generate, then restart the app."
        : "";
      return NextResponse.json(
        {
          error: "Could not save your request.",
          details: {
            formErrors: [
              `Something went wrong while saving.${hint} If this keeps happening, contact us.`,
            ],
            fieldErrors: {} as Record<string, string[]>,
          },
        },
        { status: 503 },
      );
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return NextResponse.json(
        {
          error: "You are already a member or a request already exists.",
          details: {
            formErrors: [
              "You are already a member, or this email already has a request. If you think this is wrong, contact us.",
            ],
            fieldErrors: {} as Record<string, string[]>,
          },
        },
        { status: 409 },
      );
    }
    throw err;
  }
}
