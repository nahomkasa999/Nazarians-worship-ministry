import { betterFetch } from "@better-fetch/fetch";
import type {
  AdminBlogCreateResponse,
  AdminBlogDetail,
  AdminBlogListItem,
} from "@/lib/contracts/blog";

export { readApiErrorMessage } from "@/lib/api/error-message";

export type ApiErrorBody = {
  error?: string;
  code?: string;
};

export async function listAdminBlogs() {
  return betterFetch<{ blogs: AdminBlogListItem[] }, ApiErrorBody>("/api/admin/blogs", {
    credentials: "include",
  });
}

export async function getAdminBlog(id: string) {
  return betterFetch<AdminBlogDetail, ApiErrorBody>(`/api/admin/blogs/${id}`, {
    credentials: "include",
  });
}

export async function createAdminBlog(body: Record<string, unknown>) {
  return betterFetch<AdminBlogCreateResponse, ApiErrorBody>("/api/admin/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });
}

export async function patchAdminBlog(id: string, body: Record<string, unknown>) {
  return betterFetch<AdminBlogCreateResponse, ApiErrorBody>(`/api/admin/blogs/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });
}

export async function deleteAdminBlog(id: string) {
  return betterFetch<{ ok: true }, ApiErrorBody>(`/api/admin/blogs/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
}

export async function uploadBlogEditorImage(file: File) {
  const fd = new FormData();
  fd.set("image", file);
  return betterFetch<{ url: string }, ApiErrorBody>("/api/admin/blogs/upload-image", {
    method: "POST",
    body: fd,
    credentials: "include",
  });
}
