import { betterFetch } from "@better-fetch/fetch";
import type { MembershipWriteInput } from "@/lib/validation/schemas";

type ApiErrorShape = {
  error?: {
    message?: string;
  };
};

export async function createMembershipRequest(payload: MembershipWriteInput) {
  const body = new FormData();
  body.set("fullName", payload.fullName);
  body.set("email", payload.email);
  body.set("phone", payload.phone);
  if (payload.telegram) body.set("telegram", payload.telegram);
  if (payload.message) body.set("message", payload.message);

  return betterFetch<
    { id: string; email?: { sent: true } | { sent: false; message: string } },
    ApiErrorShape
  >("/api/community/memberships", {
    method: "POST",
    body,
  });
}

export async function submitMembershipPaymentProof(args: {
  id: string;
  email: string;
  phone: string;
  paymentProof: File;
}) {
  const body = new FormData();
  body.set("email", args.email);
  body.set("phone", args.phone);
  body.set("paymentProof", args.paymentProof);

  return betterFetch<{ ok: true }, ApiErrorShape>(
    `/api/community/memberships/${encodeURIComponent(args.id)}/payment-proof`,
    {
      method: "POST",
      body,
    },
  );
}
