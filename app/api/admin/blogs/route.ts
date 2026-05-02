import { NextResponse } from "next/server";
import slugify from "slugify";
import { BlogStatus, Prisma } from "@/generated/prisma";
import { BLOG_EMPTY_DOC } from "@/lib/blog/default-content";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { adminBlogCreateBodySchema } from "@/lib/contracts/blog";
import { db } from "@/lib/prisma";
import { notifyMembersNewBlog } from "@/lib/members/notify-new-content";

async function ensureUniqueSlug(base: string, excludeId?: string) {
  let slug = base;
  let n = 0;
  for (;;) {
    const existing = await db.blog.findFirst({
      where: {
        slug,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    if (!existing) return slug;
    n += 1;
    slug = `${base}-${n}`;
  }
}

export async function GET(request: Request) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const rows = await db.blog.findMany({
    orderBy: [{ updatedAt: "desc" }],
  });

  return NextResponse.json({
    blogs: rows.map((b) => ({
      id: b.id,
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt,
      coverImage: b.coverImage,
      status: b.status,
      publishedAt: b.publishedAt?.toISOString() ?? null,
      viewCount: b.viewCount,
      membersOnly: b.membersOnly,
      createdAt: b.createdAt.toISOString(),
      updatedAt: b.updatedAt.toISOString(),
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

  const parsed = adminBlogCreateBodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request body.", code: "VALIDATION_FAILED" },
      { status: 400 }
    );
  }

  const body = parsed.data;
  const baseSlug =
    body.slug?.trim() ||
    slugify(body.title, { lower: true, strict: true, trim: true }) ||
    "post";
  const slug = await ensureUniqueSlug(baseSlug);

  const status = body.status === "DRAFT" ? BlogStatus.DRAFT : BlogStatus.PUBLISHED;
  const publishedAt = status === BlogStatus.PUBLISHED ? new Date() : null;

  const content: Prisma.InputJsonValue =
    body.content !== undefined ? (body.content as Prisma.InputJsonValue) : BLOG_EMPTY_DOC;

  const created = await db.blog.create({
    data: {
      title: body.title.trim(),
      titleAm: body.titleAm?.trim() || null,
      titleOm: body.titleOm?.trim() || null,
      slug,
      excerpt: body.excerpt?.trim() || null,
      excerptAm: body.excerptAm?.trim() || null,
      excerptOm: body.excerptOm?.trim() || null,
      content,
      ...(body.contentAm !== undefined
        ? {
            contentAm:
              body.contentAm === null
                ? Prisma.DbNull
                : (body.contentAm as Prisma.InputJsonValue),
          }
        : {}),
      ...(body.contentOm !== undefined
        ? {
            contentOm:
              body.contentOm === null
                ? Prisma.DbNull
                : (body.contentOm as Prisma.InputJsonValue),
          }
        : {}),
      coverImage: body.coverImage?.trim() || null,
      status,
      publishedAt,
      membersOnly: body.membersOnly ?? false,
    },
    select: { id: true, slug: true },
  });

  if (status === BlogStatus.PUBLISHED) {
    void notifyMembersNewBlog({ title: body.title.trim(), slug: created.slug }).catch((err) =>
      console.error("[notifyMembersNewBlog]", err)
    );
  }

  return NextResponse.json({ id: created.id, slug: created.slug });
}
