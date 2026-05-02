import { betterFetch } from "@better-fetch/fetch";

type ApiErrorShape = {
  error?: {
    message?: string;
  };
};

export type ApproveMembershipSuccess = {
  ok: true;
  status: "APPROVED";
  email: { sent: true } | { sent: false; message: string };
};

export async function approveMembership(id: string) {
  return betterFetch<ApproveMembershipSuccess, ApiErrorShape>(`/api/admin/memberships/${id}`, {
    method: "POST",
  });
}

export async function rejectMembership(id: string) {
  return rejectMembershipWithReason(id);
}

export async function rejectMembershipWithReason(id: string, reason?: string) {
  return betterFetch<{ ok: true; status: "REJECTED" }, ApiErrorShape>(
    `/api/admin/memberships/${id}/reject`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason }),
    },
  );
}
