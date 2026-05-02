import { betterFetch } from "@better-fetch/fetch";
import type { MembershipWriteInput } from "@/lib/validation/schemas";

type ApiErrorShape = {
  error?: {
    message?: string;
  };
};

export type MembershipRequestCreateInput = MembershipWriteInput & {
  paymentMethod: string;
};

export async function createMembershipRequest(payload: MembershipRequestCreateInput, paymentProof: File) {
  const body = new FormData();
  body.set("fullName", payload.fullName);
  body.set("email", payload.email);
  body.set("phone", payload.phone);
  if (payload.telegram) body.set("telegram", payload.telegram);
  if (payload.message) body.set("message", payload.message);
  body.set("paymentMethod", payload.paymentMethod);
  body.set("paymentProof", paymentProof);

  return betterFetch<
    { id: string; email?: { sent: true } | { sent: false; message: string } },
    ApiErrorShape
  >("/api/membership/requests", {
    method: "POST",
    body,
    credentials: "include",
  });
}

