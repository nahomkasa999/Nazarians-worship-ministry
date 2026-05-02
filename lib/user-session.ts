import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function getUserSessionFromHeaders(headerList: Headers) {
  const session = await auth.api.getSession({ headers: headerList });
  if (!session?.user) return null;
  return session;
}

export async function requireUserPage(nextPath = "/") {
  const headerList = await headers();
  const session = await auth.api.getSession({ headers: headerList });
  if (!session?.user) {
    redirect(`/login?next=${encodeURIComponent(nextPath)}`);
  }
  return session;
}

