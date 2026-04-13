const DEFAULT_SITE_URL = "http://localhost:3000";

export const SITE_NAME = "Nazarian Worship Ministry";

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const raw = fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_SITE_URL;
  return raw.replace(/\/+$/, "");
}

export function toAbsoluteUrl(pathname: string) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
