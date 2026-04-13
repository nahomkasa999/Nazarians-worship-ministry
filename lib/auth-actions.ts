"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

/**
 * Creates a user with a specific role.
 * Only callable by an admin session according to Better Auth admin plugin.
 */
export async function createUserAsAdmin(
  email: string,
  password: string,
  name: string,
  role: "user" | "admin" = "user"
) {
  const response = await auth.api.createUser({
    body: {
      email,
      password,
      name,
      role,
    },
    headers: await headers(),
  });
  
  revalidatePath("/dashboard");
  return response;
}

/**
 * Removes a user.
 * Only callable by an admin session.
 */
export async function deleteUserAsAdmin(userId: string) {
  const response = await auth.api.removeUser({
    body: { userId },
    headers: await headers(),
  });
  
  revalidatePath("/dashboard");
  return response;
}

/**
 * Bans a user.
 */
export async function banUserAsAdmin(userId: string, reason: string, expiresDays: number = 7) {
    const response = await auth.api.banUser({
        body: {
            userId,
            banReason: reason,
            banExpiresIn: 60 * 60 * 24 * expiresDays,
        },
        headers: await headers(),
    });

    revalidatePath("/dashboard");
    return response;
}

/**
 * Unbans a user.
 */
export async function unbanUserAsAdmin(userId: string) {
    const response = await auth.api.unbanUser({
        body: { userId },
        headers: await headers(),
    });

    revalidatePath("/dashboard");
    return response;
}
