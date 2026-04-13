import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { teachingIdParamsSchema, teachingPatchBodySchema } from "@/lib/contracts/teachings";
import { generateUniqueTeachingSlug } from "@/lib/teachings/slug";
import { fetchYoutubeVideoMetadata } from "@/lib/youtube/fetch-metadata";
import { canonicalWatchUrl, parseYoutubeVideoId } from "@/lib/youtube/parse-id";

export const patchAdminTeachingRouteDoc = {
  method: "patch",
  path: "/api/admin/teachings/{id}",
  tags: ["Admin Teachings"],
  summary: "Update teaching",
  responses: {
    200: { description: "Updated" },
    400: { description: "Bad request" },
    401: { description: "Unauthorized" },
    404: { description: "Not found" },
    409: { description: "Duplicate youtube id" },
  },
} as const;

export const deleteAdminTeachingRouteDoc = {
  method: "delete",
  path: "/api/admin/teachings/{id}",
  tags: ["Admin Teachings"],
  summary: "Delete teaching",
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

  const parsedParams = teachingIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid id.", code: "INVALID_ID" }, { status: 400 });
  }

  const row = await db.teaching.findUnique({ where: { id: parsedParams.data.id } });
  if (!row) {
    return NextResponse.json({ error: "Not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON.", code: "INVALID_JSON" }, { status: 400 });
  }

  const parsed = teachingPatchBodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request body.", code: "VALIDATION_FAILED" },
      { status: 400 }
    );
  }

  const body = parsed.data;
  let youtubeId = row.youtubeId;
  let youtubeUrl = row.youtubeUrl;

  if (body.youtubeUrl) {
    const vid = parseYoutubeVideoId(body.youtubeUrl);
    if (!vid) {
      return NextResponse.json(
        { error: "Could not parse a valid YouTube video ID from the URL.", code: "INVALID_URL" },
        { status: 400 }
      );
    }
    if (vid !== row.youtubeId) {
      const clash = await db.teaching.findUnique({ where: { youtubeId: vid } });
      if (clash && clash.id !== row.id) {
        return NextResponse.json(
          { error: "Another teaching already uses this video.", code: "DUPLICATE" },
          { status: 409 }
        );
      }
    }
    youtubeId = vid;
    youtubeUrl = canonicalWatchUrl(vid);
  }

  let title = body.title !== undefined ? body.title.trim() : row.title;
  let description = body.description !== undefined ? body.description : row.description;
  let thumbnailUrl = body.thumbnailUrl !== undefined ? body.thumbnailUrl || null : row.thumbnailUrl;
  let durationSeconds =
    body.durationSeconds !== undefined ? body.durationSeconds : row.durationSeconds;

  if (body.youtubeUrl && parseYoutubeVideoId(body.youtubeUrl) !== row.youtubeId) {
    const meta = await fetchYoutubeVideoMetadata(body.youtubeUrl!);
    if (!meta.ok) {
      return NextResponse.json({ error: meta.message, code: "YOUTUBE_FETCH_FAILED" }, { status: 400 });
    }
    youtubeId = meta.data.youtubeId;
    youtubeUrl = canonicalWatchUrl(meta.data.youtubeId);
    if (body.title === undefined) title = meta.data.title.trim() || title;
    if (body.description === undefined) description = meta.data.description;
    if (body.thumbnailUrl === undefined) thumbnailUrl = meta.data.thumbnailUrl;
    if (body.durationSeconds === undefined) durationSeconds = meta.data.durationSeconds;
  }

  if (body.refreshFromYoutube) {
    const meta = await fetchYoutubeVideoMetadata(youtubeUrl);
    if (!meta.ok) {
      return NextResponse.json({ error: meta.message, code: "YOUTUBE_FETCH_FAILED" }, { status: 400 });
    }
    youtubeId = meta.data.youtubeId;
    youtubeUrl = canonicalWatchUrl(meta.data.youtubeId);
    if (body.title === undefined) title = meta.data.title.trim() || title;
    if (body.description === undefined) description = meta.data.description;
    if (body.thumbnailUrl === undefined) thumbnailUrl = meta.data.thumbnailUrl;
    if (body.durationSeconds === undefined) durationSeconds = meta.data.durationSeconds;
  }

  if (!title) {
    return NextResponse.json(
      {
        error:
          "Title is required. Enter a title manually or fix the video URL / YouTube API key.",
        code: "MISSING_TITLE",
      },
      { status: 400 }
    );
  }

  const updated = await db.teaching.update({
    where: { id: row.id },
    data: {
      slug: await generateUniqueTeachingSlug(title, row.id),
      youtubeUrl,
      youtubeId,
      title,
      description,
      thumbnailUrl,
      durationSeconds,
      semesterLabel: body.semesterLabel !== undefined ? body.semesterLabel : row.semesterLabel,
      scheduleLine: body.scheduleLine !== undefined ? body.scheduleLine : row.scheduleLine,
      venueLine: body.venueLine !== undefined ? body.venueLine : row.venueLine,
      published: body.published !== undefined ? body.published : row.published,
      position: body.position !== undefined ? body.position : row.position,
    },
  });

  return NextResponse.json({
    teaching: {
      ...updated,
      createdAt: updated.createdAt.toISOString(),
      updatedAt: updated.updatedAt.toISOString(),
    },
  });
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const parsedParams = teachingIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid id.", code: "INVALID_ID" }, { status: 400 });
  }

  const row = await db.teaching.findUnique({ where: { id: parsedParams.data.id } });
  if (!row) {
    return NextResponse.json({ error: "Not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  await db.teaching.delete({ where: { id: row.id } });
  return NextResponse.json({ ok: true as const });
}
