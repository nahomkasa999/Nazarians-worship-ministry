import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { uploadEventPoster } from "@/lib/supabase/storage";

export const getAdminEventsRouteDoc = {
  method: "get",
  path: "/api/admin/events",
  tags: ["Admin Events"],
  summary: "List event posters",
  responses: {
    200: { description: "Events fetched" },
    401: { description: "Unauthorized" },
  },
} as const;

export const postAdminEventsRouteDoc = {
  method: "post",
  path: "/api/admin/events",
  tags: ["Admin Events"],
  summary: "Upload event poster and create event",
  requestBody: {
    required: true,
    content: {
      "multipart/form-data": {
        schema: {
          type: "object",
          required: ["poster"],
          properties: {
            poster: { type: "string", format: "binary", description: "Poster image" },
          },
        },
      },
    },
  },
  responses: {
    200: { description: "Created" },
    400: { description: "Validation or upload failed" },
    401: { description: "Unauthorized" },
  },
} as const;

export async function GET(request: Request) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const events = await db.event.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      imageUrl: true,
      storagePath: true,
      createdAt: true,
    },
  });

  return NextResponse.json({
    events: events.map((e) => ({
      ...e,
      createdAt: e.createdAt.toISOString(),
    })),
  });
}

export async function POST(request: Request) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
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

  const maxPos = await db.event.aggregate({ _max: { position: true } });
  const nextPosition = (maxPos._max.position ?? -1) + 1;

  const created = await db.event.create({
    data: {
      imageUrl: uploaded.publicUrl,
      storagePath: uploaded.storagePath,
      position: nextPosition,
      active: true,
    },
    select: { id: true, imageUrl: true },
  });

  return NextResponse.json(created);
}
