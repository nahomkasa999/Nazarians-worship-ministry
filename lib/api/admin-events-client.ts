import { betterFetch } from "@better-fetch/fetch";
import type { AdminEventCreateResponse, AdminEventListItem } from "@/lib/contracts/events";

export { readApiErrorMessage } from "@/lib/api/error-message";

export type ApiErrorBody = {
  error?: string;
  code?: string;
};

export async function listAdminEvents() {
  return betterFetch<{ events: AdminEventListItem[] }, ApiErrorBody>("/api/admin/events", {
    credentials: "include",
  });
}

export async function createAdminEventPoster(formData: FormData) {
  return betterFetch<AdminEventCreateResponse, ApiErrorBody>("/api/admin/events", {
    method: "POST",
    body: formData,
    credentials: "include",
  });
}

export async function replaceAdminEventPoster(id: string, formData: FormData) {
  return betterFetch<AdminEventCreateResponse, ApiErrorBody>(`/api/admin/events/${id}`, {
    method: "PATCH",
    body: formData,
    credentials: "include",
  });
}

export async function deleteAdminEvent(id: string) {
  return betterFetch<{ ok: true }, ApiErrorBody>(`/api/admin/events/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
}
