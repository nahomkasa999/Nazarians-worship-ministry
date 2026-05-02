import { NextResponse } from "next/server";
import { getUserSessionFromHeaders } from "@/lib/user-session";
import { db } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await getUserSessionFromHeaders(request.headers);
  if (!session?.user) {
    return NextResponse.json({ count: 0 });
  }

  const count = await db.membershipNotification.count({
    where: { userId: session.user.id, readAt: null },
  });

  return NextResponse.json({ count });
}
