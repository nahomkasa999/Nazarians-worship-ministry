import type { ContentLocale } from "@/lib/i18n/get-locale";

type BlogRow = {
  title: string;
  titleAm: string | null;
  titleOm: string | null;
  excerpt: string | null;
  excerptAm: string | null;
  excerptOm: string | null;
  content: unknown;
  contentAm: unknown | null;
  contentOm: unknown | null;
};

export function pickLocalizedBlog(row: BlogRow, locale: ContentLocale) {
  if (locale === "am") {
    return {
      title: row.titleAm?.trim() || row.title,
      excerpt: row.excerptAm?.trim() || row.excerpt,
      content: row.contentAm ?? row.content,
    };
  }
  if (locale === "om") {
    return {
      title: row.titleOm?.trim() || row.title,
      excerpt: row.excerptOm?.trim() || row.excerpt,
      content: row.contentOm ?? row.content,
    };
  }
  return {
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
  };
}

type TeachingRow = {
  title: string;
  titleAm: string | null;
  titleOm: string | null;
  description: string | null;
  descriptionAm: string | null;
  descriptionOm: string | null;
};

export function pickLocalizedTeaching(row: TeachingRow, locale: ContentLocale) {
  if (locale === "am") {
    return {
      title: row.titleAm?.trim() || row.title,
      description: row.descriptionAm?.trim() ? row.descriptionAm : row.description,
    };
  }
  if (locale === "om") {
    return {
      title: row.titleOm?.trim() || row.title,
      description: row.descriptionOm?.trim() ? row.descriptionOm : row.description,
    };
  }
  return {
    title: row.title,
    description: row.description,
  };
}
