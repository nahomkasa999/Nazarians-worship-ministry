import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

function isAdminRole(role: string | null | undefined) {
  return role === "admin";
}

export async function getAdminSessionFromHeaders(headerList: Headers) {
  const session = await auth.api.getSession({ headers: headerList });
  if (!session?.user) return null;
  const role = (session.user as { role?: string | null }).role;
  if (!isAdminRole(role ?? undefined)) return null;
  return session;
}

export async function requireAdminPage() {
  const headerList = await headers();
  const session = await auth.api.getSession({ headers: headerList });
  if (!session?.user) {
    redirect("/login");
  }
  const role = (session.user as { role?: string | null }).role;
  if (!isAdminRole(role ?? undefined)) {
    redirect("/");
  }
  return session;
}
