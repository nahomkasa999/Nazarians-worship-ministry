import { createClient } from "@supabase/supabase-js";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const ALLOWED_PDF_TYPES = new Set(["application/pdf"]);
export const MAX_POSTER_BYTES = 8 * 1024 * 1024;
export const MAX_PDF_BYTES = 25 * 1024 * 1024;

export function getEventPostersBucket() {
  return process.env.SUPABASE_EVENT_POSTERS_BUCKET ?? "Event-posters";
} 

export function getMembershipPaymentsBucket() {
  return process.env.SUPABASE_MEMBERSHIP_PAYMENTS_BUCKET ?? "membership-payments";
}

export function getPdfsBucket() {
  return process.env.SUPABASE_PDFS_BUCKET ?? "pdfs";
}

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function assertPosterFile(file: File) {
  if (!ALLOWED_TYPES.has(file.type)) {
    return { ok: false as const, message: "Use a JPEG, PNG, or WebP image." };
  }
  if (file.size <= 0 || file.size > MAX_POSTER_BYTES) {
    return {
      ok: false as const,
      message: `Image must be under ${MAX_POSTER_BYTES / (1024 * 1024)} MB.`,
    };
  }
  return { ok: true as const };
}

export function assertPdfFile(file: File) {
  if (!ALLOWED_PDF_TYPES.has(file.type)) {
    return { ok: false as const, message: "Use a PDF file." };
  }
  if (file.size <= 0 || file.size > MAX_PDF_BYTES) {
    return {
      ok: false as const,
      message: `PDF must be under ${MAX_PDF_BYTES / (1024 * 1024)} MB.`,
    };
  }
  return { ok: true as const };
}

export function buildStorageObjectPath(originalName: string) {
  const safe =
    originalName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80) || "poster";
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `events/${id}-${safe}`;
}

export function buildBlogImagePath(originalName: string) {
  const safe =
    originalName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80) || "image";
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `blog/${id}-${safe}`;
}

export function buildMembershipPaymentProofPath(originalName: string) {
  const safe =
    originalName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80) || "receipt";
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `membership-payments/${id}-${safe}`;
}

export function buildTeachingPdfPath(teachingId: string, originalName: string) {
  const safe =
    originalName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80) || "attachment";
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `teachings/${teachingId}/${id}-${safe}`;
}

export function buildBlogPdfPath(blogId: string, originalName: string) {
  const safe =
    originalName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80) || "attachment";
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `blogs/${blogId}/${id}-${safe}`;
}

export async function uploadEventPoster(file: File) {
  const check = assertPosterFile(file);
  if (!check.ok) return { ok: false as const, message: check.message };

  const supabase = getSupabaseAdmin();
  const bucket = getEventPostersBucket();
  const path = buildStorageObjectPath(file.name);
  const buf = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(bucket).upload(path, buf, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return { ok: false as const, message: error.message || "Upload failed." };
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(path);

  return { ok: true as const, publicUrl, storagePath: path };
}

export async function uploadMembershipPaymentProof(file: File) {
  const check = assertPosterFile(file);
  if (!check.ok) return { ok: false as const, message: check.message };

  const supabase = getSupabaseAdmin();
  const bucket = getMembershipPaymentsBucket();
  const path = buildMembershipPaymentProofPath(file.name);
  const buf = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(bucket).upload(path, buf, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return { ok: false as const, message: error.message || "Upload failed." };
  }

  return { ok: true as const, storagePath: path };
}

export async function createMembershipPaymentProofSignedUrl(storagePath: string, expiresInSeconds = 60) {
  const supabase = getSupabaseAdmin();
  const bucket = getMembershipPaymentsBucket();
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(storagePath, expiresInSeconds);
  if (error || !data?.signedUrl) {
    return { ok: false as const, message: error?.message || "Could not create signed URL." };
  }
  return { ok: true as const, signedUrl: data.signedUrl };
}

export async function uploadTeachingPdf(file: File, teachingId: string) {
  const check = assertPdfFile(file);
  if (!check.ok) return { ok: false as const, message: check.message };

  const supabase = getSupabaseAdmin();
  const bucket = getPdfsBucket();
  const path = buildTeachingPdfPath(teachingId, file.name);
  const buf = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(bucket).upload(path, buf, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return { ok: false as const, message: error.message || "Upload failed." };
  }

  return { ok: true as const, storagePath: path };
}

export async function uploadBlogPdf(file: File, blogId: string) {
  const check = assertPdfFile(file);
  if (!check.ok) return { ok: false as const, message: check.message };

  const supabase = getSupabaseAdmin();
  const bucket = getPdfsBucket();
  const path = buildBlogPdfPath(blogId, file.name);
  const buf = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(bucket).upload(path, buf, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return { ok: false as const, message: error.message || "Upload failed." };
  }

  return { ok: true as const, storagePath: path };
}

export async function createTeachingPdfSignedUrl(storagePath: string, expiresInSeconds = 120) {
  const supabase = getSupabaseAdmin();
  const bucket = getPdfsBucket();
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(storagePath, expiresInSeconds);
  if (error || !data?.signedUrl) {
    return { ok: false as const, message: error?.message || "Could not create signed URL." };
  }
  return { ok: true as const, signedUrl: data.signedUrl };
}

export async function removeEventPosterObject(storagePath: string) {
  const supabase = getSupabaseAdmin();
  const bucket = getEventPostersBucket();
  const { error } = await supabase.storage.from(bucket).remove([storagePath]);
  if (error) {
    console.warn("Supabase storage remove:", error.message);
  }
}

export async function uploadBlogImage(file: File) {
  const check = assertPosterFile(file);
  if (!check.ok) return { ok: false as const, message: check.message };

  const supabase = getSupabaseAdmin();
  const bucket = getEventPostersBucket();
  const path = buildBlogImagePath(file.name);
  const buf = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from(bucket).upload(path, buf, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return { ok: false as const, message: error.message || "Upload failed." };
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(path);

  return { ok: true as const, url: publicUrl, storagePath: path };
}
