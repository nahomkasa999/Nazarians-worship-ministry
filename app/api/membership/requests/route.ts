import { NextResponse } from "next/server";
import { Prisma } from "@/generated/prisma";
import { db } from "@/lib/prisma";
import { getUserSessionFromHeaders } from "@/lib/user-session";
import { sendMembershipRequestReceivedEmail } from "@/lib/email/send-membership-approved";
import { uploadMembershipPaymentProof } from "@/lib/supabase/storage";
import { membershipWriteSchema } from "@/lib/validation/schemas";
import { flattenError, z } from "zod";

const paymentMethodSchema = z.string().trim().min(1, "Choose a payment method.");

export async function POST(request: Request) {
  const session = await getUserSessionFromHeaders(request.headers);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const payload = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    telegram: formData.get("telegram"),
    message: formData.get("message"),
  };
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

  const paymentMethodRaw = formData.get("paymentMethod");
  const parsedPaymentMethod = paymentMethodSchema.safeParse(
    typeof paymentMethodRaw === "string" ? paymentMethodRaw : "",
  );
  if (!parsedPaymentMethod.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        details: {
          formErrors: [] as string[],
          fieldErrors: { paymentMethod: [parsedPaymentMethod.error.issues[0]?.message ?? "Choose a payment method."] },
        },
      },
      { status: 400 },
    );
  }

  const { fullName, email, phone, telegram, message } = parsedBody.data;

  const paymentProof = formData.get("paymentProof");
  if (!(paymentProof instanceof File)) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        details: {
          formErrors: [] as string[],
          fieldErrors: { paymentProof: ["Upload a screenshot of your payment confirmation."] },
        },
      },
      { status: 400 },
    );
  }

  const upload = await uploadMembershipPaymentProof(paymentProof);
  if (!upload.ok) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        details: {
          formErrors: [] as string[],
          fieldErrors: { paymentProof: [upload.message] },
        },
      },
      { status: 400 },
    );
  }

  const now = new Date();

  const existingActive = await db.membershipRequest.findFirst({
    where: {
      status: "APPROVED",
      OR: [
        { userId: session.user.id },
        { email: { equals: email, mode: "insensitive" } },
        { phone },
      ],
      membershipExpiresAt: { gt: now },
    },
    select: { id: true },
  });
  if (existingActive) {
    return NextResponse.json(
      {
        error: "You already have an active membership.",
        details: {
          formErrors: ["You already have an active membership. You do not need to submit another request."],
          fieldErrors: {} as Record<string, string[]>,
        },
      },
      { status: 409 },
    );
  }

  const existingPending = await db.membershipRequest.findFirst({
    where: {
      status: "PENDING",
      OR: [
        { userId: session.user.id },
        { email: { equals: email, mode: "insensitive" } },
      ],
    },
    select: { id: true },
  });
  if (existingPending) {
    return NextResponse.json(
      {
        error: "You already have a pending request.",
        details: {
          formErrors: ["You already have a pending membership request. Our admin team will review it soon."],
          fieldErrors: {} as Record<string, string[]>,
        },
      },
      { status: 409 },
    );
  }

  try {
    const created = await db.membershipRequest.create({
      data: {
        userId: session.user.id,
        fullName,
        email,
        phone,
        telegram: telegram ?? null,
        message: message || null,
        paymentMethod: parsedPaymentMethod.data,
        paymentProofStoragePath: upload.storagePath,
        paymentSubmittedAt: new Date(),
      },
      select: { id: true },
    });

    const emailOutcome = await sendMembershipRequestReceivedEmail({
      to: email,
      fullName,
    });

    return NextResponse.json({
      id: created.id,
      email: emailOutcome.sent ? { sent: true } : { sent: false, message: emailOutcome.message },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return NextResponse.json(
        {
          error: "A request already exists for this email.",
          details: {
            formErrors: ["A request already exists for this email. If you think this is wrong, contact us."],
            fieldErrors: {} as Record<string, string[]>,
          },
        },
        { status: 409 },
      );
    }
    throw err;
  }
}

