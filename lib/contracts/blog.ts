import { z } from "zod";

export const blogStatusSchema = z.enum(["DRAFT", "PUBLISHED"]);

export const blogIdParamsSchema = z.object({
  id: z.string().min(1),
});

export type BlogIdParams = z.infer<typeof blogIdParamsSchema>;

/** TipTap / ProseMirror JSON document */
export const tiptapJsonSchema = z.unknown();

export const adminBlogListItemSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string().nullable(),
  coverImage: z.string().nullable(),
  status: blogStatusSchema,
  publishedAt: z.string().nullable(),
  viewCount: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const adminBlogsListResponseSchema = z.object({
  blogs: z.array(adminBlogListItemSchema),
});

export type AdminBlogListItem = z.infer<typeof adminBlogListItemSchema>;

export const adminBlogDetailSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string().nullable(),
  content: z.unknown(),
  coverImage: z.string().nullable(),
  status: blogStatusSchema,
  publishedAt: z.string().nullable(),
  viewCount: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type AdminBlogDetail = z.infer<typeof adminBlogDetailSchema>;

export const adminBlogCreateBodySchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).optional(),
  excerpt: z.string().optional().nullable(),
  content: tiptapJsonSchema.optional(),
  coverImage: z.string().optional().nullable(),
  status: blogStatusSchema.optional(),
});

export const adminBlogPatchBodySchema = z.object({
  title: z.string().min(1).optional(),
  slug: z.string().min(1).optional(),
  excerpt: z.string().optional().nullable(),
  content: tiptapJsonSchema.optional(),
  coverImage: z.string().optional().nullable(),
  status: blogStatusSchema.optional(),
});

export const adminBlogCreateResponseSchema = z.object({
  id: z.string(),
  slug: z.string(),
});

export type AdminBlogCreateResponse = z.infer<typeof adminBlogCreateResponseSchema>;

export const blogImageUploadResponseSchema = z.object({
  url: z.string(),
});
