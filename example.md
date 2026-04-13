# Requirements for success

- Types for frontend and backend are built from **Zod** in one shared place; TypeScript types are derived with `z.infer<typeof …>` (no duplicate hand-written DTOs).
- Frontend API calls use **better-fetch** only (not axios or similar).
- Success and failure both surface through a **toaster** with clear, user-facing messages.
- Backend: **local Swagger / OpenAPI** for documentation and **Zod validation** on requests (and typed JSON responses).
- Every request body, query, and response shape used across the wire is defined (Zod + inferred types).

---

## Shared contract (single source of truth)

**File:** `lib/contracts/memberships.ts` (or `lib/validation/schemas.ts` — pick one tree and stay consistent.)

```ts
import { z } from "zod";

/** POST /api/community/memberships */
export const membershipWriteSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().optional(),
});

export type MembershipWriteInput = z.infer<typeof membershipWriteSchema>;

export const membershipCreatedResponseSchema = z.object({
  id: z.string().min(1), // e.g. Prisma @default(cuid()) — use .uuid() only if your DB uses UUIDs
});

export type MembershipCreatedResponse = z.infer<
  typeof membershipCreatedResponseSchema
>;
```

**Rule:** The route handler and the client both import from this file. Optional: run the same Zod on the client before submit for instant field feedback.

---

## Backend example

**One file:** OpenAPI-style route doc and the handler live together (e.g. `app/api/community/memberships/route.ts`). Your aggregator for `/api/openapi.json` imports `postCommunityMembershipsDoc` from this same module—no separate `lib/openapi/...` file for this endpoint.

```ts
// app/api/community/memberships/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/prisma";
import {
  membershipWriteSchema,
  membershipCreatedResponseSchema,
} from "@/lib/contracts/memberships";

/** Fed into the local Swagger / OpenAPI spec (same file as POST). */
export const postCommunityMembershipsDoc = {
  method: "post",
  path: "/api/community/memberships",
  tags: ["Community"],
  summary: "Submit a membership request",
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["fullName", "email", "phone"],
          properties: {
            fullName: { type: "string" },
            email: { type: "string", format: "email" },
            phone: { type: "string" },
            message: { type: "string" },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Created",
      content: {
        "application/json": {
          schema: { type: "object", properties: { id: { type: "string" } } },
        },
      },
    },
    400: { description: "Validation failed" },
    409: { description: "Duplicate pending request" },
  },
} as const;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body.", code: "INVALID_JSON" },
      { status: 400 }
    );
  }

  const parsed = membershipWriteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        code: "VALIDATION_FAILED",
        details: z.flattenError(parsed.error),
      },
      { status: 400 }
    );
  }

  const { fullName, email, phone, message } = parsed.data;

  const existingPending = await db.membershipRequest.findFirst({
    where: { email, status: "PENDING" },
    select: { id: true },
  });

  if (existingPending) {
    return NextResponse.json(
      {
        error: "You already have a pending request. We will contact you soon.",
        code: "DUPLICATE_PENDING",
      },
      { status: 409 }
    );
  }

  const created = await db.membershipRequest.create({
    data: { fullName, email, phone, message: message ?? null },
    select: { id: true },
  });

  const payload = membershipCreatedResponseSchema.parse({ id: created.id });
  return NextResponse.json(payload, { status: 200 });
}
```

---

## Frontend example

**1) API client** — better-fetch with generics tied to the same types as the contract.

```ts
// lib/api/community-memberships-client.ts
import { betterFetch } from "@better-fetch/fetch";
import type {
  MembershipWriteInput,
  MembershipCreatedResponse,
} from "@/lib/contracts/memberships";

type ApiErrorBody = {
  error: string;
  code?: string;
  details?: unknown;
};

export async function submitMembershipRequest(payload: MembershipWriteInput) {
  return betterFetch<MembershipCreatedResponse, ApiErrorBody>(
    "/api/community/memberships",
    {
      method: "POST",
      body: payload, // better-fetch serializes JSON (same pattern as existing clients)
      credentials: "include", // when routes need cookies / Better Auth
    }
  );
}
```

**2) UI + toaster** — map `data` / `error` to clear messages (example uses Sonner; swap for your toast library if different).

```tsx
// components/membership-form.tsx (excerpt)
"use client";

import { toast } from "sonner";
import { submitMembershipRequest } from "@/lib/api/community-memberships-client";
import type { MembershipWriteInput } from "@/lib/contracts/memberships";

export async function onSubmit(values: MembershipWriteInput) {
  const { data, error } = await submitMembershipRequest(values);

  if (error) {
    const msg =
      typeof error === "object" && error !== null && "error" in error
        ? String((error as { error?: string }).error)
        : "Something went wrong. Please try again.";
    toast.error(msg);
    return;
  }

  if (data) {
    toast.success("Your membership request was submitted. We will be in touch.");
  }
}
```

**3) Root layout** — mount the toaster once.

```tsx
// app/layout.tsx (excerpt)
import { Toaster } from "sonner";

// inside <body>:
<Toaster richColors closeButton />;
```

---

## Conventions to align on (edit as you like)

| Topic        | Suggestion                                                                 |
| ------------ | -------------------------------------------------------------------------- |
| Error JSON   | `{ error: string, code?: string, details?: unknown }`                      |
| Success JSON | Domain object or `{ data: T }` — pick one style for all new endpoints      |
| Docs         | OpenAPI fragments exported **from the same file** as each route; one builder merges them for `/api/openapi.json` + local Swagger UI |
| Dependencies | `zod`, `@better-fetch/fetch`, `sonner` (or shadcn toast wrapper)           |

---

_Update this file with your choices (envelope shape, folder names, toast library); implementation in the repo can then follow this spec._
