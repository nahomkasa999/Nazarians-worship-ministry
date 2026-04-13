import { NextResponse } from "next/server";
import slugify from "slugify";
import { BlogStatus, Prisma } from "@/generated/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { adminBlogPatchBodySchema, blogIdParamsSchema } from "@/lib/contracts/blog";
import { db } from "@/lib/prisma";

async function ensureUniqueSlug(base: string, excludeId: string) {
  let slug = base;
  let n = 0;
  for (;;) {
    const existing = await db.blog.findFirst({
      where: {
        slug,
        NOT: { id: excludeId },
      },
    });
    if (!existing) return slug;
    n += 1;
    slug = `${base}-${n}`;
  }
}

export async function GET(
  request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const { id } = blogIdParamsSchema.parse(await ctx.params);

  const row = await db.blog.findUnique({ where: { id } });
  if (!row) {
    return NextResponse.json({ error: "Not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  return NextResponse.json({
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    coverImage: row.coverImage,
    status: row.status,
    publishedAt: row.publishedAt?.toISOString() ?? null,
    viewCount: row.viewCount,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  });
}

export async function PATCH(
  request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const { id } = blogIdParamsSchema.parse(await ctx.params);

  const existing = await db.blog.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON.", code: "INVALID_JSON" }, { status: 400 });
  }

  const parsed = adminBlogPatchBodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request body.", code: "VALIDATION_FAILED" },
      { status: 400 }
    );
  }

  const body = parsed.data;

  let slug = existing.slug;
  if (body.slug !== undefined) {
    const base =
      slugify(body.slug.trim(), { lower: true, strict: true, trim: true }) ||
      (body.title !== undefined
        ? slugify(body.title, { lower: true, strict: true, trim: true })
        : existing.slug);
    slug = await ensureUniqueSlug(base || "post", id);
  }

  let status = existing.status;
  let publishedAt = existing.publishedAt;
  if (body.status !== undefined) {
    status = body.status === "PUBLISHED" ? BlogStatus.PUBLISHED : BlogStatus.DRAFT;
    if (status === BlogStatus.PUBLISHED && !publishedAt) {
      publishedAt = new Date();
    }
    if (status === BlogStatus.DRAFT) {
      publishedAt = null;
    }
  }

  const updated = await db.blog.update({
    where: { id },
    data: {
      ...(body.title !== undefined ? { title: body.title.trim() } : {}),
      slug,
      ...(body.excerpt !== undefined ? { excerpt: body.excerpt?.trim() || null } : {}),
      ...(body.content !== undefined
        ? { content: body.content as Prisma.InputJsonValue }
        : {}),
      ...(body.coverImage !== undefined ? { coverImage: body.coverImage?.trim() || null } : {}),
      status,
      publishedAt,
    },
    select: { id: true, slug: true },
  });

  return NextResponse.json({ id: updated.id, slug: updated.slug });
}

export async function DELETE(
  request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const { id } = blogIdParamsSchema.parse(await ctx.params);

  try {
    await db.blog.delete({ where: { id } });
  } catch {
    return NextResponse.json({ error: "Not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  return NextResponse.json({ ok: true as const });
}
