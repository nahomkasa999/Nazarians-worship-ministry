import { toAbsoluteUrl } from "@/lib/seo/site";

/** Ensures share-preview URLs are absolute (Telegram, WhatsApp, etc.). */
export function absoluteAssetUrl(url: string | null | undefined, fallbackPath: string): string {
  const raw = (url?.trim() || fallbackPath).trim();
  if (/^https?:\/\//i.test(raw)) return raw;
  return toAbsoluteUrl(raw.startsWith("/") ? raw : `/${raw}`);
}
