import { NextResponse } from "next/server";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { uploadBlogImage } from "@/lib/supabase/storage";

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

  const file = formData.get("image");
  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "Choose an image file to upload.", code: "MISSING_FILE" },
      { status: 400 }
    );
  }

  const uploaded = await uploadBlogImage(file);
  if (!uploaded.ok) {
    return NextResponse.json({ error: uploaded.message, code: "UPLOAD_FAILED" }, { status: 400 });
  }

  return NextResponse.json({ url: uploaded.url });
}
