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
  return betterFetch<{ ok: true; status: "REJECTED" }, ApiErrorShape>(`/api/admin/memberships/${id}`, {
    method: "DELETE",
  });
}
