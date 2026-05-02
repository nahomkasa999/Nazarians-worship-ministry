import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { blogIdParamsSchema } from "@/lib/contracts/blog";
import { uploadBlogPdf } from "@/lib/supabase/storage";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const parsedParams = blogIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid id.", code: "INVALID_ID" }, { status: 400 });
  }

  const attachments = await db.blogAttachment.findMany({
    where: { blogId: parsedParams.data.id },
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, createdAt: true },
  });

  return NextResponse.json({
    attachments: attachments.map((a) => ({
      id: a.id,
      title: a.title,
      createdAt: a.createdAt.toISOString(),
    })),
  });
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const parsedParams = blogIdParamsSchema.safeParse(await params);
  if (!parsedParams.success) {
    return NextResponse.json({ error: "Invalid id.", code: "INVALID_ID" }, { status: 400 });
  }

  const blog = await db.blog.findUnique({
    where: { id: parsedParams.data.id },
    select: { id: true },
  });
  if (!blog) {
    return NextResponse.json({ error: "Blog not found.", code: "NOT_FOUND" }, { status: 404 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const title = formData.get("title");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing PDF file.", code: "MISSING_FILE" }, { status: 400 });
  }

  const upload = await uploadBlogPdf(file, blog.id);
  if (!upload.ok) {
    return NextResponse.json({ error: upload.message, code: "UPLOAD_FAILED" }, { status: 400 });
  }

  const created = await db.blogAttachment.create({
    data: {
      blogId: blog.id,
      title: typeof title === "string" && title.trim() ? title.trim() : null,
      storagePath: upload.storagePath,
    },
    select: { id: true, title: true, createdAt: true },
  });

  return NextResponse.json({
    attachment: {
      id: created.id,
      title: created.title,
      createdAt: created.createdAt.toISOString(),
    },
  });
}
