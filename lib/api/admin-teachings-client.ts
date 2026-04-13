import { betterFetch } from "@better-fetch/fetch";
import type {
  AdminTeachingListItem,
  TeachingCreateBody,
  TeachingPatchBody,
} from "@/lib/contracts/teachings";

export type ApiErrorBody = {
  error?: string;
  code?: string;
};

export type TeachingResponse = {
  teaching: AdminTeachingListItem;
};

export async function listAdminTeachings() {
  return betterFetch<{ teachings: AdminTeachingListItem[] }, ApiErrorBody>("/api/admin/teachings", {
    credentials: "include",
  });
}

export async function createTeaching(body: TeachingCreateBody) {
  return betterFetch<TeachingResponse, ApiErrorBody>("/api/admin/teachings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });
}

export async function updateTeaching(id: string, body: TeachingPatchBody) {
  return betterFetch<TeachingResponse, ApiErrorBody>(`/api/admin/teachings/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });
}

export async function deleteTeaching(id: string) {
  return betterFetch<{ ok: true }, ApiErrorBody>(`/api/admin/teachings/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
}
