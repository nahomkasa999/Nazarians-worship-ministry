import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getAdminSessionFromHeaders } from "@/lib/admin-session";
import { membershipStatusQuerySchema } from "@/lib/validation/schemas";

export const getMembershipsRouteDoc = {
  method: "get",
  path: "/api/admin/memberships",
  tags: ["Admin Memberships"],
  summary: "List membership requests by status",
  responses: {
    200: { description: "Memberships fetched" },
    401: { description: "Unauthorized" },
  },
} as const;

export async function GET(request: Request) {
  const session = await getAdminSessionFromHeaders(request.headers);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const parsedQuery = membershipStatusQuerySchema.safeParse({
    status: url.searchParams.get("status") || undefined,
  });

  const memberships = await db.membershipRequest.findMany({
    where: { status: parsedQuery.success ? parsedQuery.data.status : "PENDING" },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      telegram: true,
      message: true,
      status: true,
      approvedAt: true,
      createdAt: true,
    },
  });

  return NextResponse.json({ memberships });
}
