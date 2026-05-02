import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { uploadMembershipPaymentProof } from "@/lib/supabase/storage";
import { membershipIdParamsSchema, membershipWriteSchema } from "@/lib/validation/schemas";
import { flattenError } from "zod";

const paymentProofSubmitSchema = membershipWriteSchema.pick({
  email: true,
  phone: true,
});

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const parsedParams = membershipIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid membership request id." }, { status: 400 });
  }

  const formData = await request.formData();
  const identity = {
    email: formData.get("email"),
    phone: formData.get("phone"),
  };
  const parsedIdentity = paymentProofSubmitSchema.safeParse(identity);
  if (!parsedIdentity.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        details: flattenError(parsedIdentity.error),
      },
      { status: 400 },
    );
  }

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

  const membership = await db.membershipRequest.findUnique({
    where: { id: parsedParams.data.id },
    select: {
      id: true,
      status: true,
      email: true,
      phone: true,
      paymentProofStoragePath: true,
      paymentSubmittedAt: true,
    },
  });

  if (!membership) {
    return NextResponse.json({ error: "Membership request not found." }, { status: 404 });
  }

  if (membership.status !== "PENDING") {
    return NextResponse.json(
      { error: "This membership request can no longer accept payment proof." },
      { status: 409 },
    );
  }

  // Basic ownership check: require matching email + phone for the request.
  const sameEmail = membership.email.toLowerCase() === parsedIdentity.data.email.toLowerCase();
  const samePhone = membership.phone === parsedIdentity.data.phone;
  if (!sameEmail || !samePhone) {
    return NextResponse.json({ error: "Email or phone does not match this request." }, { status: 403 });
  }

  if (membership.paymentProofStoragePath || membership.paymentSubmittedAt) {
    return NextResponse.json(
      { error: "Payment proof was already submitted for this request." },
      { status: 409 },
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

  await db.membershipRequest.update({
    where: { id: membership.id },
    data: {
      paymentProofStoragePath: upload.storagePath,
      paymentSubmittedAt: new Date(),
    },
    select: { id: true },
  });

  return NextResponse.json({ ok: true as const });
}

