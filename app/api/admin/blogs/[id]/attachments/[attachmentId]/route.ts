import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { z } from "zod";

const attachmentParamsSchema = z.object({
  id: z.string().min(1),
  attachmentId: z.string().min(1),
});

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string; attachmentId: string }> }
) {
  const session = await getAdminSessionFromHeaders(_request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const parsed = attachmentParamsSchema.safeParse(await params);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid id.", code: "INVALID_ID" }, { status: 400 });
  }

  const { id: blogId, attachmentId } = parsed.data;

  const row = await db.blogAttachment.findFirst({
    where: { id: attachmentId, blogId },
  });
  if (!row) {
    return NextResponse.json({ error: "Not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  await db.blogAttachment.delete({ where: { id: attachmentId } });
  return NextResponse.json({ ok: true as const });
}
