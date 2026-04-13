/**
 * Normalizes common Ethiopian mobile inputs to E.164 (+251 + 9-digit national number).
 * Accepts e.g. +251 91 234 5678, 251712345678, 0912345678, 0712345678, 912345678.
 * National mobile prefixes often start with 7 or 9.
 */
export function normalizeEthiopianMobile(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  const digitsOnly = trimmed.replace(/\D/g, "");
  if (!digitsOnly) return null;

  const nationalMobileFirst = (d: string | undefined) => d === "9" || d === "7";

  if (digitsOnly.startsWith("251")) {
    if (digitsOnly.length === 12 && nationalMobileFirst(digitsOnly[3])) {
      return `+${digitsOnly}`;
    }
    return null;
  }

  if (digitsOnly.startsWith("0") && digitsOnly.length === 10) {
    if (nationalMobileFirst(digitsOnly[1])) {
      return `+251${digitsOnly.slice(1)}`;
    }
    return null;
  }

  if (digitsOnly.length === 9 && nationalMobileFirst(digitsOnly[0])) {
    return `+251${digitsOnly}`;
  }

  return null;
}
