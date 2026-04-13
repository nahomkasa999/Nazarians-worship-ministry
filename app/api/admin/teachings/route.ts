import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { teachingCreateBodySchema } from "@/lib/contracts/teachings";
import { fetchYoutubeVideoMetadata } from "@/lib/youtube/fetch-metadata";
import { canonicalWatchUrl, parseYoutubeVideoId } from "@/lib/youtube/parse-id";

export const getAdminTeachingsRouteDoc = {
  method: "get",
  path: "/api/admin/teachings",
  tags: ["Admin Teachings"],
  summary: "List all teachings",
  responses: {
    200: { description: "List" },
    401: { description: "Unauthorized" },
  },
} as const;

export const postAdminTeachingsRouteDoc = {
  method: "post",
  path: "/api/admin/teachings",
  tags: ["Admin Teachings"],
  summary: "Create teaching from YouTube URL",
  responses: {
    200: { description: "Created" },
    400: { description: "Validation failed" },
    401: { description: "Unauthorized" },
    409: { description: "Duplicate youtube id" },
  },
} as const;

export async function GET(request: Request) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const rows = await db.teaching.findMany({
    orderBy: [{ position: "asc" }, { createdAt: "desc" }],
  });

  return NextResponse.json({
    teachings: rows.map((t) => ({
      ...t,
      createdAt: t.createdAt.toISOString(),
      updatedAt: t.updatedAt.toISOString(),
    })),
  });
}

export async function POST(request: Request) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON.", code: "INVALID_JSON" }, { status: 400 });
  }

  const parsed = teachingCreateBodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request body.", code: "VALIDATION_FAILED" },
      { status: 400 }
    );
  }

  const body = parsed.data;
  const videoId = parseYoutubeVideoId(body.youtubeUrl);
  if (!videoId) {
    return NextResponse.json(
      { error: "Could not parse a valid YouTube video ID from the URL.", code: "INVALID_URL" },
      { status: 400 }
    );
  }

  const existing = await db.teaching.findUnique({ where: { youtubeId: videoId } });
  if (existing) {
    return NextResponse.json(
      { error: "This video is already added.", code: "DUPLICATE" },
      { status: 409 }
    );
  }

  const meta = await fetchYoutubeVideoMetadata(body.youtubeUrl);
  if (!meta.ok) {
    return NextResponse.json({ error: meta.message, code: "YOUTUBE_FETCH_FAILED" }, { status: 400 });
  }

  const title = (body.title?.trim() || meta.data.title).trim();
  if (!title) {
    return NextResponse.json(
      {
        error:
          "Could not load the video title. Use a normal watch URL (youtube.com/watch?v=…), enter a title manually, or fix YOUTUBE_DATA_API_KEY / API restrictions in Google Cloud.",
        code: "MISSING_TITLE",
      },
      { status: 400 }
    );
  }

  const description =
    body.description !== undefined ? body.description : meta.data.description;
  const thumbnailUrl =
    body.thumbnailUrl !== undefined && body.thumbnailUrl !== ""
      ? body.thumbnailUrl
      : meta.data.thumbnailUrl;
  const durationSeconds =
    body.durationSeconds !== undefined && body.durationSeconds !== null
      ? body.durationSeconds
      : meta.data.durationSeconds;

  const maxPos = await db.teaching.aggregate({ _max: { position: true } });
  const position = body.position ?? (maxPos._max.position ?? -1) + 1;

  const created = await db.teaching.create({
    data: {
      youtubeUrl: canonicalWatchUrl(meta.data.youtubeId),
      youtubeId: meta.data.youtubeId,
      thumbnailUrl,
      title,
      description,
      durationSeconds,
      semesterLabel: body.semesterLabel ?? null,
      scheduleLine: body.scheduleLine ?? null,
      venueLine: body.venueLine ?? null,
      position,
      published: body.published ?? true,
    },
  });

  return NextResponse.json({
    teaching: {
      ...created,
      createdAt: created.createdAt.toISOString(),
      updatedAt: created.updatedAt.toISOString(),
    },
  });
}
