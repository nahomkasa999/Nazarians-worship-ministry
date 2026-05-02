import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { membershipIdParamsSchema } from "@/lib/validation/schemas";
import { createMembershipPaymentProofSignedUrl } from "@/lib/supabase/storage";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsedParams = membershipIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid membership request id." }, { status: 400 });
  }

  const membership = await db.membershipRequest.findUnique({
    where: { id: parsedParams.data.id },
    select: { paymentProofStoragePath: true },
  });

  if (!membership?.paymentProofStoragePath) {
    return NextResponse.json({ error: "Payment proof not found." }, { status: 404 });
  }

  const signed = await createMembershipPaymentProofSignedUrl(membership.paymentProofStoragePath, 120);
  if (!signed.ok) {
    return NextResponse.json({ error: signed.message }, { status: 503 });
  }

  return NextResponse.json({ signedUrl: signed.signedUrl });
}

