import { z } from "zod";

export const eventIdParamsSchema = z.object({
  id: z.string().min(1),
});

export type EventIdParams = z.infer<typeof eventIdParamsSchema>;

export const adminEventListItemSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  storagePath: z.string().nullable(),
  createdAt: z.string(),
});

export const adminEventsListResponseSchema = z.object({
  events: z.array(adminEventListItemSchema),
});

export type AdminEventListItem = z.infer<typeof adminEventListItemSchema>;

export const adminEventCreateResponseSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
});

export type AdminEventCreateResponse = z.infer<typeof adminEventCreateResponseSchema>;
