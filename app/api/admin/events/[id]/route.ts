import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { eventIdParamsSchema } from "@/lib/contracts/events";
import { removeEventPosterObject, uploadEventPoster } from "@/lib/supabase/storage";

export const patchAdminEventRouteDoc = {
  method: "patch",
  path: "/api/admin/events/{id}",
  tags: ["Admin Events"],
  summary: "Replace event poster image",
  responses: {
    200: { description: "Updated" },
    400: { description: "Bad request" },
    401: { description: "Unauthorized" },
    404: { description: "Not found" },
  },
} as const;

export const deleteAdminEventRouteDoc = {
  method: "delete",
  path: "/api/admin/events/{id}",
  tags: ["Admin Events"],
  summary: "Delete event and poster",
  responses: {
    200: { description: "Deleted" },
    401: { description: "Unauthorized" },
    404: { description: "Not found" },
  },
} as const;

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const parsedParams = eventIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid event id.", code: "INVALID_ID" }, { status: 400 });
  }

  const existing = await db.event.findUnique({
    where: { id: parsedParams.data.id },
    select: { id: true, storagePath: true },
  });

  if (!existing) {
    return NextResponse.json({ error: "Event not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid form data.", code: "INVALID_FORM" },
      { status: 400 }
    );
  }

  const poster = formData.get("poster");
  if (!(poster instanceof File)) {
    return NextResponse.json(
      { error: "Choose an image file to upload.", code: "MISSING_FILE" },
      { status: 400 }
    );
  }

  const uploaded = await uploadEventPoster(poster);
  if (!uploaded.ok) {
    return NextResponse.json({ error: uploaded.message, code: "UPLOAD_FAILED" }, { status: 400 });
  }

  if (existing.storagePath) {
    await removeEventPosterObject(existing.storagePath);
  }

  const updated = await db.event.update({
    where: { id: existing.id },
    data: {
      imageUrl: uploaded.publicUrl,
      storagePath: uploaded.storagePath,
    },
    select: { id: true, imageUrl: true },
  });

  return NextResponse.json(updated);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const parsedParams = eventIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid event id.", code: "INVALID_ID" }, { status: 400 });
  }

  const existing = await db.event.findUnique({
    where: { id: parsedParams.data.id },
    select: { id: true, storagePath: true },
  });

  if (!existing) {
    return NextResponse.json({ error: "Event not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  if (existing.storagePath) {
    await removeEventPosterObject(existing.storagePath);
  }

  await db.event.delete({ where: { id: existing.id } });

  return NextResponse.json({ ok: true as const });
}
