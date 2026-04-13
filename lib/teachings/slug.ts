import { db } from "@/lib/prisma";

function normalizeSlug(input: string) {
  const base = input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return base || "teaching";
}

export function teachingSlugFromTitle(title: string) {
  return normalizeSlug(title);
}

export async function generateUniqueTeachingSlug(title: string, excludeId?: string) {
  const base = teachingSlugFromTitle(title);
  let attempt = base;
  let suffix = 2;

  while (true) {
    const existing = await db.teaching.findUnique({ where: { slug: attempt } });
    if (!existing || existing.id === excludeId) {
      return attempt;
    }
    attempt = `${base}-${suffix}`;
    suffix += 1;
  }
}
