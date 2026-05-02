import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getUserSessionFromHeaders } from "@/lib/user-session";
import { createTeachingPdfSignedUrl } from "@/lib/supabase/storage";
import { canAccessMembersOnlyContent } from "@/lib/membership-access";
import { z } from "zod";

const paramsSchema = z.object({ id: z.string().min(1) });

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const parsedParams = paramsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid id." }, { status: 400 });
  }

  const session = await getUserSessionFromHeaders(request.headers);
  const role = (session?.user as { role?: string | null } | undefined)?.role;

  const attachment = await db.teachingAttachment.findUnique({
    where: { id: parsedParams.data.id },
    select: {
      storagePath: true,
      teaching: { select: { membersOnly: true } },
    },
  });
  if (!attachment) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  if (attachment.teaching.membersOnly) {
    const allowed = await canAccessMembersOnlyContent({
      userId: session?.user?.id,
      role,
    });
    if (!allowed) {
      return NextResponse.json({ error: "Membership required." }, { status: 403 });
    }
  }

  const signed = await createTeachingPdfSignedUrl(attachment.storagePath, 120);
  if (!signed.ok) {
    return NextResponse.json({ error: signed.message }, { status: 503 });
  }

  return NextResponse.json({ signedUrl: signed.signedUrl });
}

