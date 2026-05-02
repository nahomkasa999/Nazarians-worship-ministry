import { cookies } from "next/headers";

export type ContentLocale = "en" | "am" | "om";

export async function getLocaleFromCookies(): Promise<ContentLocale> {
  const jar = await cookies();
  const v = jar.get("nwm-lang")?.value;
  if (v === "am" || v === "om") return v;
  return "en";
}
