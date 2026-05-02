import { z } from "zod";

export const teachingIdParamsSchema = z.object({
  id: z.string().min(1),
});

export const teachingCreateBodySchema = z.object({
  youtubeUrl: z.string().min(1, "YouTube URL is required"),
  title: z.string().optional(),
  titleAm: z.string().nullable().optional(),
  titleOm: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  descriptionAm: z.string().nullable().optional(),
  descriptionOm: z.string().nullable().optional(),
  thumbnailUrl: z.union([z.string().url(), z.literal("")]).nullable().optional(),
  durationSeconds: z.number().int().min(0).nullable().optional(),
  semesterLabel: z.string().nullable().optional(),
  scheduleLine: z.string().nullable().optional(),
  venueLine: z.string().nullable().optional(),
  published: z.boolean().optional(),
  membersOnly: z.boolean().optional(),
  position: z.number().int().optional(),
});

export type TeachingCreateBody = z.infer<typeof teachingCreateBodySchema>;

export const teachingPatchBodySchema = teachingCreateBodySchema
  .partial()
  .extend({
    youtubeUrl: z.string().min(1).optional(),
    refreshFromYoutube: z.boolean().optional(),
  });

export type TeachingPatchBody = z.infer<typeof teachingPatchBodySchema>;

export const adminTeachingListItemSchema = z.object({
  id: z.string(),
  slug: z.string().nullable(),
  youtubeUrl: z.string(),
  youtubeId: z.string(),
  thumbnailUrl: z.string().nullable(),
  title: z.string(),
  titleAm: z.string().nullable().optional(),
  titleOm: z.string().nullable().optional(),
  description: z.string().nullable(),
  descriptionAm: z.string().nullable().optional(),
  descriptionOm: z.string().nullable().optional(),
  durationSeconds: z.number().nullable(),
  semesterLabel: z.string().nullable(),
  scheduleLine: z.string().nullable(),
  venueLine: z.string().nullable(),
  position: z.number(),
  published: z.boolean(),
  membersOnly: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type AdminTeachingListItem = z.infer<typeof adminTeachingListItemSchema>;
