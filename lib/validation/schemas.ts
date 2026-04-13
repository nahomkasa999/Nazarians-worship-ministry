import { z } from "zod";
import { normalizeEthiopianMobile } from "@/lib/validation/ethiopian-phone";

function normalizeTelegramField(val: unknown): string | undefined {
  if (val == null || val === "") return undefined;
  if (typeof val !== "string") return undefined;
  let s = val.trim();
  const tme = s.match(
    /(?:https?:\/\/)?(?:www\.)?t\.me\/([a-zA-Z0-9_]{1,64})(?:\?.*)?$/i,
  );
  if (tme?.[1]) s = tme[1];
  s = s.replace(/^@+/, "").trim();
  return s === "" ? undefined : s;
}

export const membershipWriteSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .refine((value) => normalizeEthiopianMobile(value) !== null, {
      message:
        "Enter a valid Ethiopian mobile number (e.g. 0912345678, 0712345678, or +251 91 234 5678).",
    })
    .transform((value) => normalizeEthiopianMobile(value)!),
  telegram: z
    .preprocess(normalizeTelegramField, z.union([z.undefined(), z.string()]))
    .refine(
      (s) => s === undefined || /^[a-zA-Z0-9_]{1,64}$/.test(s),
      {
        message:
          "Telegram: use letters, numbers, or underscores (1–64 chars), a t.me link, or leave blank.",
      },
    ),
  message: z.preprocess(
    (val) => (val == null || val === "" ? undefined : val),
    z.string().max(8000).optional(),
  ),
});

export type MembershipWriteInput = z.infer<typeof membershipWriteSchema>;

export const membershipStatusQuerySchema = z.object({
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
});

export const membershipIdParamsSchema = z.object({
  id: z.string().min(1),
});
