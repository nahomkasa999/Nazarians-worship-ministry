import { z } from "zod";

export const eventIdParamsSchema = z.object({
  id: z.string().min(1),
});

export type EventIdParams = z.infer<typeof eventIdParamsSchema>;

export const adminEventListItemSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  storagePath: z.string().nullable(),
  membersOnly: z.boolean(),
  createdAt: z.string(),
});

export const adminEventsListResponseSchema = z.object({
  events: z.array(adminEventListItemSchema),
});

export type AdminEventListItem = z.infer<typeof adminEventListItemSchema>;

export const adminEventPatchJsonSchema = z.object({
  membersOnly: z.boolean(),
});

export type AdminEventPatchJson = z.infer<typeof adminEventPatchJsonSchema>;

export const adminEventCreateResponseSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
});

export type AdminEventCreateResponse = z.infer<typeof adminEventCreateResponseSchema>;
