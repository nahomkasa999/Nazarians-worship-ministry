"use client";

import type { JSONContent } from "@tiptap/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import slugify from "slugify";
import { toast } from "sonner";
import { ArrowLeftIcon } from "lucide-react";
import { BlogRichTextEditor } from "@/components/blog/blog-rich-text-editor";
import { BLOG_EMPTY_DOC } from "@/lib/blog/default-content";
import {
  createAdminBlog,
  patchAdminBlog,
  uploadBlogEditorImage,
} from "@/lib/api/admin-blogs-client";
import { readApiErrorMessage } from "@/lib/api/error-message";
import type { AdminBlogDetail } from "@/lib/contracts/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type BlogEditorFormProps = {
  mode: "create" | "edit";
  initial?: AdminBlogDetail;
};

export function BlogEditorForm({ mode, initial }: BlogEditorFormProps) {
  const router = useRouter();
  const coverInputRef = useRef<HTMLInputElement>(null);
  const slugEditedRef = useRef(false);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [content, setContent] = useState<unknown>(initial?.content ?? BLOG_EMPTY_DOC);
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">(initial?.status ?? "DRAFT");
  const [busy, setBusy] = useState(false);

  const onTitleBlur = useCallback(() => {
    if (mode === "edit" && slugEditedRef.current) return;
    if (slugEditedRef.current && slug.trim()) return;
    const next = slugify(title, { lower: true, strict: true, trim: true });
    if (next) setSlug(next);
  }, [mode, title, slug]);

  const onSlugChange = useCallback((v: string) => {
    slugEditedRef.current = true;
    setSlug(v);
  }, []);

  const uploadImageFile = useCallback(async (file: File) => {
    const res = await uploadBlogEditorImage(file);
    if (res.error) {
      toast.error(readApiErrorMessage(res.error));
      return null;
    }
    return res.data?.url ?? null;
  }, []);

  const onCoverFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file) return;
      setBusy(true);
      const url = await uploadImageFile(file);
      setBusy(false);
      if (url) {
        setCoverImage(url);
        toast.success("Cover image uploaded.");
      }
    },
    [uploadImageFile]
  );

  const save = async (nextStatus: "DRAFT" | "PUBLISHED") => {
    const slugValue =
      slug.trim() ||
      slugify(title, { lower: true, strict: true, trim: true }) ||
      "post";

    if (!title.trim()) {
      toast.error("Title is required.");
      return;
    }

    setBusy(true);
    if (mode === "create") {
      const res = await createAdminBlog({
        title: title.trim(),
        slug: slugValue,
        excerpt: excerpt.trim() || null,
        content,
        coverImage: coverImage.trim() || null,
        status: nextStatus,
      });
      setBusy(false);
      if (res.error) {
        toast.error(readApiErrorMessage(res.error));
        return;
      }
      toast.success(nextStatus === "PUBLISHED" ? "Published." : "Draft saved.");
      if (res.data?.slug) setSlug(res.data.slug);
      if (res.data?.id) {
        router.replace(`/dashboard/blogs/${res.data.id}`);
        router.refresh();
      }
      return;
    }

    if (!initial?.id) {
      setBusy(false);
      return;
    }

    const res = await patchAdminBlog(initial.id, {
      title: title.trim(),
      slug: slugValue,
      excerpt: excerpt.trim() || null,
      content,
      coverImage: coverImage.trim() || null,
      status: nextStatus,
    });
    setBusy(false);
    if (res.error) {
      toast.error(readApiErrorMessage(res.error));
      return;
    }
    toast.success(nextStatus === "PUBLISHED" ? "Published." : "Draft saved.");
    if (res.data?.slug) setSlug(res.data.slug);
    setStatus(nextStatus);
    router.refresh();
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="flex items-center justify-between gap-3">
        <Button type="button" variant="ghost" size="sm" asChild>
          <Link href="/dashboard/blogs">
            <ArrowLeftIcon />
          </Link>
        </Button>
        {status === "PUBLISHED" && (slug.trim() || initial?.slug) ? (
          <Button type="button" variant="outline" size="sm" className="ml-auto" asChild>
            <Link href={`/blog/${slug.trim() || initial?.slug}`} target="_blank" rel="noreferrer">
              View live
            </Link>
          </Button>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="blog-title">Title</Label>
        <Input
          id="blog-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={onTitleBlur}
          disabled={busy}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="blog-slug">URL slug</Label>
        <Input
          id="blog-slug"
          value={slug}
          onChange={(e) => onSlugChange(e.target.value)}
          disabled={busy}
          className="font-mono text-sm"
        />
        <p className="text-xs text-muted-foreground">Public URL: /blog/{slug || "…"}</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="blog-excerpt">Excerpt</Label>
        <Textarea
          id="blog-excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          disabled={busy}
          rows={3}
          placeholder="Short summary for listings"
        />
      </div>

      <div className="space-y-2">
        <Label>Cover image</Label>
        <input
          ref={coverInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={onCoverFile}
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" variant="outline" size="sm" disabled={busy} onClick={() => coverInputRef.current?.click()}>
            Upload cover
          </Button>
          {coverImage ? (
            <Button type="button" variant="ghost" size="sm" disabled={busy} onClick={() => setCoverImage("")}>
              Remove
            </Button>
          ) : null}
        </div>
        {coverImage ? (
          <div className="relative mt-2 aspect-[16/9] max-w-md overflow-hidden rounded border border-border bg-muted">
            <Image src={coverImage} alt="" fill className="object-cover" sizes="400px" />
          </div>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label>Body</Label>
        <BlogRichTextEditor
          content={content}
          onChange={(json: JSONContent) => setContent(json)}
          onUploadImage={uploadImageFile}
          disabled={busy}
        />
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        <Button type="button" disabled={busy} onClick={() => save("DRAFT")}>
          Save draft
        </Button>
        <Button type="button" disabled={busy} onClick={() => save("PUBLISHED")}>
          Publish
        </Button>
      </div>
    </div>
  );
}
