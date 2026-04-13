type ZodFlattenedDetails = {
  formErrors?: string[];
  fieldErrors?: Record<string, string[] | undefined>;
};

/** Fields we show inline on the membership request form. */
export const MEMBERSHIP_REQUEST_FIELD_KEYS = [
  "fullName",
  "email",
  "phone",
  "telegram",
  "message",
] as const;

export type MembershipRequestFieldKey = (typeof MEMBERSHIP_REQUEST_FIELD_KEYS)[number];

export type ParsedValidationDetails = {
  /** First error message per known field (for inline UI). */
  fieldErrors: Partial<Record<MembershipRequestFieldKey, string>>;
  /** Errors not tied to a specific field, or extra keys from the API. */
  formErrors: string[];
};

const membershipFieldSet = new Set<string>(MEMBERSHIP_REQUEST_FIELD_KEYS);

/**
 * Parses API `details` (Zod flattenError shape) for membership forms:
 * maps `fieldErrors` to single strings per field; collects the rest into `formErrors`.
 */
export function parseMembershipValidationDetails(details: unknown): ParsedValidationDetails {
  const fieldErrors: Partial<Record<MembershipRequestFieldKey, string>> = {};
  const formErrors: string[] = [];

  if (!details || typeof details !== "object") {
    return { fieldErrors, formErrors };
  }

  const d = details as ZodFlattenedDetails;

  if (Array.isArray(d.formErrors)) {
    for (const msg of d.formErrors) {
      if (typeof msg === "string" && msg.trim()) formErrors.push(msg.trim());
    }
  }

  if (d.fieldErrors && typeof d.fieldErrors === "object") {
    for (const [key, msgs] of Object.entries(d.fieldErrors)) {
      if (!Array.isArray(msgs)) continue;
      const first = msgs.find((m) => typeof m === "string" && m.trim()) as string | undefined;
      if (!first?.trim()) continue;

      if (membershipFieldSet.has(key)) {
        fieldErrors[key as MembershipRequestFieldKey] = first.trim();
      } else {
        formErrors.push(`${key}: ${first.trim()}`);
      }
    }
  }

  return { fieldErrors, formErrors };
}

/** Turns API `details` (e.g. Zod flattenError) into a single readable message. */
export function formatValidationDetails(details: unknown): string | null {
  if (!details || typeof details !== "object") return null;
  const d = details as ZodFlattenedDetails;
  const parts: string[] = [];
  if (Array.isArray(d.formErrors)) {
    for (const msg of d.formErrors) {
      if (typeof msg === "string" && msg.trim()) parts.push(msg.trim());
    }
  }
  if (d.fieldErrors && typeof d.fieldErrors === "object") {
    for (const [key, msgs] of Object.entries(d.fieldErrors)) {
      if (!Array.isArray(msgs)) continue;
      for (const msg of msgs) {
        if (typeof msg === "string" && msg.trim()) {
          parts.push(`${key}: ${msg.trim()}`);
        }
      }
    }
  }
  if (parts.length === 0) return null;
  return parts.join(" ");
}

/** better-fetch merges JSON `error` string with `message` / `statusText` on the error object. */
export function readApiErrorMessage(error: unknown, fallback = "Something went wrong.") {
  if (error && typeof error === "object") {
    const e = error as {
      error?: string;
      message?: string;
      statusText?: string;
      details?: unknown;
    };
    const fromDetails = formatValidationDetails(e.details);
    if (fromDetails) return fromDetails;
    if (typeof e.error === "string" && e.error.length > 0) return e.error;
    if (typeof e.message === "string" && e.message.length > 0) return e.message;
    if (typeof e.statusText === "string" && e.statusText.length > 0) return e.statusText;
  }
  return fallback;
}
