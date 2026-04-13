import { betterFetch } from "@better-fetch/fetch";
import type { MembershipWriteInput } from "@/lib/validation/schemas";

type ApiErrorShape = {
  error?: {
    message?: string;
  };
};

export async function submitMembershipRequest(payload: MembershipWriteInput) {
  return betterFetch<{ id: string }, ApiErrorShape>("/api/community/memberships", {
    method: "POST",
    body: payload,
  });
}
