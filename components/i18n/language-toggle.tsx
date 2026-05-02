"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type ContentLocale = "en" | "am" | "om";

const COOKIE = "nwm-lang";
const MAX_AGE = 60 * 60 * 24 * 365;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

export function LanguageToggle({ className }: { className?: string }) {
  const router = useRouter();
  const [locale, setLocale] = useState<ContentLocale>("en");

  useEffect(() => {
    const v = readCookie(COOKIE);
    if (v === "am" || v === "om" || v === "en") setLocale(v);
  }, []);

  const setLang = useCallback(
    (next: ContentLocale) => {
      setLocale(next);
      document.cookie = `${COOKIE}=${next}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
      router.refresh();
    },
    [router]
  );

  return (
    <div
      className={cn(
        "inline-flex rounded-none border border-border p-0.5 text-xs font-medium",
        className
      )}
      role="group"
      aria-label="Content language"
    >
      {(
        [
          ["en", "EN"],
          ["am", "አማ"],
          ["om", "OM"],
        ] as const
      ).map(([code, label]) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={cn(
            "min-w-[2.25rem] px-2 py-1 transition-colors",
            locale === code
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
