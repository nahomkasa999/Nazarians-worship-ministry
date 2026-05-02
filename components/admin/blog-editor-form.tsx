"use client";

import type { JSONContent } from "@tiptap/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { cn } from "@/lib/utils";

type BlogEditorFormProps = {
  mode: "create" | "edit";
  initial?: AdminBlogDetail;
};

type Lang = "en" | "am" | "om";

type LangFields = {
  title: string;
  excerpt: string;
  content: unknown;
};

type BlogAttachmentDto = {
  id: string;
  title: string | null;
  createdAt: string;
};

function normalizeOptionalContent(c: unknown): unknown | null {
  if (c == null) return null;
  if (JSON.stringify(c) === JSON.stringify(BLOG_EMPTY_DOC)) return null;
  return c;
}

export function BlogEditorForm({ mode, initial }: BlogEditorFormProps) {
  const router = useRouter();
  const coverInputRef = useRef<HTMLInputElement>(null);
  const slugEditedRef = useRef(false);

  const [lang, setLang] = useState<Lang>("en");
  const [trl, setTrl] = useState<Record<Lang, LangFields>>({
    en: {
      title: initial?.title ?? "",
      excerpt: initial?.excerpt ?? "",
      content: initial?.content ?? BLOG_EMPTY_DOC,
    },
    am: {
      title: initial?.titleAm ?? "",
      excerpt: initial?.excerptAm ?? "",
      content: initial?.contentAm ?? BLOG_EMPTY_DOC,
    },
    om: {
      title: initial?.titleOm ?? "",
      excerpt: initial?.excerptOm ?? "",
      content: initial?.contentOm ?? BLOG_EMPTY_DOC,
    },
  });

  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">(initial?.status ?? "PUBLISHED");
  const [membersOnly, setMembersOnly] = useState(initial?.membersOnly ?? false);
  const [busy, setBusy] = useState(false);

  const [attachments, setAttachments] = useState<BlogAttachmentDto[]>([]);
  const [attachmentsBusy, setAttachmentsBusy] = useState(false);
  const [attachmentTitle, setAttachmentTitle] = useState("");
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const cur = trl[lang];
  const setCur = (patch: Partial<LangFields>) => {
    setTrl((prev) => ({ ...prev, [lang]: { ...prev[lang], ...patch } }));
  };

  useEffect(() => {
    if (mode !== "edit" || !initial?.id) return;
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch(`/api/admin/blogs/${initial.id}/attachments`, { method: "GET" });
        const data = (await res.json()) as { attachments?: BlogAttachmentDto[] };
        if (cancelled) return;
        if (!res.ok || !data.attachments) return;
        setAttachments(data.attachments);
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [initial?.id, mode]);

  const onTitleBlur = useCallback(() => {
    if (mode === "edit" && slugEditedRef.current) return;
    if (slugEditedRef.current && slug.trim()) return;
    const next = slugify(trl.en.title, { lower: true, strict: true, trim: true });
    if (next) setSlug(next);
  }, [mode, trl.en.title, slug]);

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

  const uploadAttachment = async (blogId: string) => {
    if (!attachmentFile) {
      toast.error("Choose a PDF file first.");
      return;
    }
    setAttachmentsBusy(true);
    try {
      const body = new FormData();
      body.set("file", attachmentFile);
      if (attachmentTitle.trim()) body.set("title", attachmentTitle.trim());
      const res = await fetch(`/api/admin/blogs/${blogId}/attachments`, { method: "POST", body });
      const data = (await res.json()) as { attachment?: BlogAttachmentDto; error?: string };
      if (!res.ok || !data.attachment) {
        toast.error(data.error || "Failed to upload PDF.");
        return;
      }
      setAttachments((prev) => [data.attachment!, ...prev]);
      setAttachmentFile(null);
      setAttachmentTitle("");
      toast.success("PDF attached.");
    } catch {
      toast.error("Failed to upload PDF.");
    } finally {
      setAttachmentsBusy(false);
    }
  };

  const save = async () => {
    const slugValue =
      slug.trim() ||
      slugify(trl.en.title, { lower: true, strict: true, trim: true }) ||
      "post";

    if (!trl.en.title.trim()) {
      toast.error("English title is required.");
      return;
    }

    const bodyBase = {
      title: trl.en.title.trim(),
      titleAm: trl.am.title.trim() || null,
      titleOm: trl.om.title.trim() || null,
      slug: slugValue,
      excerpt: trl.en.excerpt.trim() || null,
      excerptAm: trl.am.excerpt.trim() || null,
      excerptOm: trl.om.excerpt.trim() || null,
      content: trl.en.content,
      contentAm: normalizeOptionalContent(trl.am.content),
      contentOm: normalizeOptionalContent(trl.om.content),
      coverImage: coverImage.trim() || null,
      status: "PUBLISHED" as const,
      membersOnly,
    };

    setBusy(true);
    if (mode === "create") {
      const res = await createAdminBlog(bodyBase);
      setBusy(false);
      if (res.error) {
        toast.error(readApiErrorMessage(res.error));
        return;
      }
      toast.success("Published.");
      setStatus("PUBLISHED");
      if (res.data?.slug) setSlug(res.data.slug);
      const newId = res.data?.id;
      if (newId && attachmentFile) {
        await uploadAttachment(newId);
      }
      if (newId) {
        router.replace(`/dashboard/blogs/${newId}`);
        router.refresh();
      }
      return;
    }

    if (!initial?.id) {
      setBusy(false);
      return;
    }

    const res = await patchAdminBlog(initial.id, bodyBase);
    setBusy(false);
    if (res.error) {
      toast.error(readApiErrorMessage(res.error));
      return;
    }
    if (attachmentFile) {
      await uploadAttachment(initial.id);
    }
    toast.success("Published.");
    if (res.data?.slug) setSlug(res.data.slug);
    setStatus("PUBLISHED");
    router.refresh();
  };

  const langPills: { id: Lang; label: string }[] = [
    { id: "en", label: "English" },
    { id: "am", label: "አማርኛ" },
    { id: "om", label: "Afaan Oromoo" },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="flex items-center justify-between gap-3">
        <Button type="button" variant="ghost" size="sm" asChild>
          <Link href="/dashboard/blogs">
            <ArrowLeftIcon />
          </Link>
        </Button>
        {initial?.id && status === "PUBLISHED" && (slug.trim() || initial?.slug) ? (
          <Button type="button" variant="outline" size="sm" className="ml-auto" asChild>
            <Link href={`/blog/${slug.trim() || initial?.slug}`} target="_blank" rel="noreferrer">
              {membersOnly ? "Preview (members)" : "View live"}
            </Link>
          </Button>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label className="text-muted-foreground">Language</Label>
        <div className="flex flex-wrap gap-2">
          {langPills.map((p) => (
            <Button
              key={p.id}
              type="button"
              size="sm"
              variant={lang === p.id ? "default" : "outline"}
              className={cn("rounded-full", lang !== p.id && "text-muted-foreground")}
              onClick={() => setLang(p.id)}
              disabled={busy}
            >
              {p.label}
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          English is required for the main title; other languages fall back to English on the public site when left empty.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="blog-title">Title ({lang === "en" ? "required" : "optional"})</Label>
        <Input
          id="blog-title"
          value={cur.title}
          onChange={(e) => setCur({ title: e.target.value })}
          onBlur={lang === "en" ? onTitleBlur : undefined}
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
          value={cur.excerpt}
          onChange={(e) => setCur({ excerpt: e.target.value })}
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

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug">
        <input
          type="checkbox"
          checked={membersOnly}
          onChange={(e) => setMembersOnly(e.target.checked)}
          disabled={busy}
          className="mt-0.5"
        />
        <span>
          <span className="font-medium">Members only</span>
          <span className="mt-1 block text-muted-foreground">
            Hidden from the public blog index; active members and admins can open it from their portal or direct link when signed in.
          </span>
        </span>
      </label>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showPdf}
            onChange={(e) => setShowPdf(e.target.checked)}
            disabled={busy}
          />
          Attach PDF (optional)
        </label>
      </div>

      {showPdf ? (
        <div className="space-y-4 rounded-lg border p-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">PDF attachment</p>
            <p className="text-sm text-muted-foreground">Upload a PDF for members to download from the top of the post.</p>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            <div className="space-y-1 md:col-span-1">
              <Label htmlFor="blog-pdf-title">Title (optional)</Label>
              <Input
                id="blog-pdf-title"
                value={attachmentTitle}
                onChange={(e) => setAttachmentTitle(e.target.value)}
                disabled={busy || attachmentsBusy}
                placeholder="e.g. Discussion guide"
              />
            </div>
            <div className="space-y-1 md:col-span-2">
              <Label htmlFor="blog-pdf-file">PDF file</Label>
              <Input
                id="blog-pdf-file"
                type="file"
                accept="application/pdf"
                disabled={busy || attachmentsBusy}
                onChange={(e) => setAttachmentFile(e.target.files?.[0] ?? null)}
              />
            </div>
          </div>
          {mode === "edit" && initial?.id ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => void uploadAttachment(initial.id)}
              disabled={busy || attachmentsBusy}
            >
              {attachmentsBusy ? "Uploading…" : "Upload & attach now"}
            </Button>
          ) : null}
        </div>
      ) : null}

      {mode === "edit" && initial?.id && attachments.length > 0 ? (
        <div className="space-y-2 rounded-lg border p-4">
          <p className="text-sm font-medium">Existing PDF attachments</p>
          <div className="space-y-2">
            {attachments.map((a) => (
              <div key={a.id} className="flex items-center justify-between rounded-md border px-3 py-2 text-sm">
                <div className="min-w-0">
                  <p className="truncate font-medium">{a.title || "PDF attachment"}</p>
                  <p className="text-xs text-muted-foreground">Uploaded {new Date(a.createdAt).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="space-y-2">
        <Label>Body</Label>
        <BlogRichTextEditor
          key={lang}
          content={cur.content as JSONContent}
          onChange={(json: JSONContent) => setCur({ content: json })}
          onUploadImage={uploadImageFile}
          disabled={busy}
        />
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        <Button type="button" disabled={busy} onClick={() => void save()}>
          {busy ? "Publishing…" : "Publish"}
        </Button>
      </div>
    </div>
  );
}
