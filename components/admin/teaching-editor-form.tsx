"use client";

import type { JSONContent } from "@tiptap/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowLeftIcon } from "lucide-react";
import { createTeaching, updateTeaching } from "@/lib/api/admin-teachings-client";
import { readApiErrorMessage } from "@/lib/api/error-message";
import type { AdminTeachingListItem } from "@/lib/contracts/teachings";
import { BLOG_EMPTY_DOC } from "@/lib/blog/default-content";
import { parseTeachingDescription, toTeachingDescriptionStorage } from "@/lib/teaching-description";
import { BlogRichTextEditor } from "@/components/blog/blog-rich-text-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Lang = "en" | "am" | "om";

const emptyForm = {
  youtubeUrl: "",
  title: "",
  description: "",
  semesterLabel: "",
  scheduleLine: "",
  venueLine: "",
  durationSeconds: "",
  position: "",
  membersOnly: false,
};

type TeachingEditorFormProps = {
  mode: "create" | "edit";
  initial?: AdminTeachingListItem;
};

type TeachingAttachmentDto = {
  id: string;
  title: string | null;
  createdAt: string;
};

export function TeachingEditorForm({ mode, initial }: TeachingEditorFormProps) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [titles, setTitles] = useState({
    en: initial?.title ?? "",
    am: initial?.titleAm ?? "",
    om: initial?.titleOm ?? "",
  });
  const [form, setForm] = useState(
    initial
      ? {
          youtubeUrl: initial.youtubeUrl,
          title: initial.title,
          description: initial.description ?? null,
          semesterLabel: initial.semesterLabel ?? "",
          scheduleLine: initial.scheduleLine ?? "",
          venueLine: initial.venueLine ?? "",
          durationSeconds: initial.durationSeconds != null ? String(initial.durationSeconds) : "",
          position: String(initial.position),
          membersOnly: initial.membersOnly,
        }
      : emptyForm
  );
  const [descriptionDocEn, setDescriptionDocEn] = useState<JSONContent>(
    parseTeachingDescription(initial?.description) ?? BLOG_EMPTY_DOC
  );
  const [descriptionDocAm, setDescriptionDocAm] = useState<JSONContent>(
    parseTeachingDescription(initial?.descriptionAm) ?? BLOG_EMPTY_DOC
  );
  const [descriptionDocOm, setDescriptionDocOm] = useState<JSONContent>(
    parseTeachingDescription(initial?.descriptionOm) ?? BLOG_EMPTY_DOC
  );
  const [showAdvanced, setShowAdvanced] = useState(
    Boolean(
      initial?.semesterLabel ||
      initial?.scheduleLine ||
      initial?.venueLine ||
      initial?.durationSeconds != null ||
      (initial?.position ?? 0) > 0 ||
      initial?.membersOnly === true
    )
  );

  const [attachments, setAttachments] = useState<TeachingAttachmentDto[]>([]);
  const [attachmentsBusy, setAttachmentsBusy] = useState(false);
  const [attachmentTitle, setAttachmentTitle] = useState("");
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    if (mode !== "edit" || !initial?.id) return;
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch(`/api/admin/teachings/${initial.id}/attachments`, { method: "GET" });
        const data = (await res.json()) as { attachments?: TeachingAttachmentDto[]; error?: string };
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

  const submitForm = async () => {
    if (!form.youtubeUrl.trim()) {
      toast.error("YouTube URL is required.");
      return;
    }

    const durationParsed = form.durationSeconds.trim() === "" ? undefined : parseInt(form.durationSeconds, 10);
    if (form.durationSeconds.trim() !== "" && Number.isNaN(durationParsed)) {
      toast.error("Duration must be a whole number of seconds.");
      return;
    }

    const positionParsed = form.position.trim() === "" ? undefined : parseInt(form.position, 10);
    if (form.position.trim() !== "" && Number.isNaN(positionParsed)) {
      toast.error("Position must be a whole number.");
      return;
    }

    setBusy(true);
    if (mode === "create") {
      const { data, error } = await createTeaching({
        youtubeUrl: form.youtubeUrl.trim(),
        title: titles.en.trim() || form.title.trim() || undefined,
        titleAm: titles.am.trim() || null,
        titleOm: titles.om.trim() || null,
        description: toTeachingDescriptionStorage(descriptionDocEn),
        descriptionAm: toTeachingDescriptionStorage(descriptionDocAm),
        descriptionOm: toTeachingDescriptionStorage(descriptionDocOm),
        semesterLabel: form.semesterLabel.trim() || null,
        scheduleLine: form.scheduleLine.trim() || null,
        venueLine: form.venueLine.trim() || null,
        durationSeconds: durationParsed ?? null,
        position: positionParsed,
        published: true,
        membersOnly: form.membersOnly,
      });
      if (error) {
        setBusy(false);
        toast.error(readApiErrorMessage(error));
        return;
      }

      if (data?.teaching?.id && attachmentFile) {
        toast.info("Uploading PDF attachment...");
        const body = new FormData();
        body.set("file", attachmentFile);
        if (attachmentTitle.trim()) body.set("title", attachmentTitle.trim());
        try {
          const upRes = await fetch(`/api/admin/teachings/${data.teaching.id}/attachments`, {
            method: "POST",
            body,
          });
          if (!upRes.ok) {
            toast.error("Teaching created, but PDF upload failed.");
          }
        } catch {
          toast.error("Teaching created, but PDF upload failed.");
        }
      }

      setBusy(false);
      toast.success("Published.");
      router.replace("/dashboard/teachings");
      router.refresh();
      return;
    }

    if (!initial?.id) {
      setBusy(false);
      return;
    }

    const res = await updateTeaching(initial.id, {
      youtubeUrl: form.youtubeUrl.trim(),
      title: titles.en.trim() || undefined,
      titleAm: titles.am.trim() || null,
      titleOm: titles.om.trim() || null,
      description: toTeachingDescriptionStorage(descriptionDocEn),
      descriptionAm: toTeachingDescriptionStorage(descriptionDocAm),
      descriptionOm: toTeachingDescriptionStorage(descriptionDocOm),
      semesterLabel: form.semesterLabel.trim() || null,
      scheduleLine: form.scheduleLine.trim() || null,
      venueLine: form.venueLine.trim() || null,
      durationSeconds: durationParsed ?? null,
      position: positionParsed,
      published: true,
      membersOnly: form.membersOnly,
    });
    if (res.error) {
      setBusy(false);
      toast.error(readApiErrorMessage(res.error));
      return;
    }

    if (attachmentFile) {
      toast.info("Uploading PDF attachment...");
      const body = new FormData();
      body.set("file", attachmentFile);
      if (attachmentTitle.trim()) body.set("title", attachmentTitle.trim());
      try {
        const upRes = await fetch(`/api/admin/teachings/${initial.id}/attachments`, {
          method: "POST",
          body,
        });
        if (!upRes.ok) {
          toast.error("Teaching updated, but PDF upload failed.");
        }
      } catch {
        toast.error("Teaching updated, but PDF upload failed.");
      }
    }

    setBusy(false);
    toast.success("Published.");
    router.replace("/dashboard/teachings");
    router.refresh();
  };

  const uploadAttachment = async () => {
    if (mode !== "edit" || !initial?.id) return;
    if (!attachmentFile) {
      toast.error("Choose a PDF file first.");
      return;
    }

    setAttachmentsBusy(true);
    try {
      const body = new FormData();
      body.set("file", attachmentFile);
      if (attachmentTitle.trim()) body.set("title", attachmentTitle.trim());
      const res = await fetch(`/api/admin/teachings/${initial.id}/attachments`, {
        method: "POST",
        body,
      });
      const data = (await res.json()) as { attachment?: TeachingAttachmentDto; error?: string };
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

  const descriptionDoc =
    lang === "en" ? descriptionDocEn : lang === "am" ? descriptionDocAm : descriptionDocOm;
  const setDescriptionDoc = (json: JSONContent) => {
    if (lang === "en") setDescriptionDocEn(json);
    else if (lang === "am") setDescriptionDocAm(json);
    else setDescriptionDocOm(json);
  };

  const langPills: { id: Lang; label: string }[] = [
    { id: "en", label: "English" },
    { id: "am", label: "አማርኛ" },
    { id: "om", label: "Afaan Oromoo" },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="flex items-center justify-between">
        <Button type="button" variant="ghost" size="sm" asChild>
          <Link href="/dashboard/teachings">
            <ArrowLeftIcon />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 py-2 lg:grid-cols-2">
        <div className="space-y-1">
          <Label htmlFor="yt-url">YouTube URL</Label>
          <Input
            id="yt-url"
            value={form.youtubeUrl}
            onChange={(e) => setForm((f) => ({ ...f, youtubeUrl: e.target.value }))}
            placeholder="https://www.youtube.com/watch?v=…"
            disabled={busy}
          />
        </div>
        <div className="space-y-2 lg:col-span-2">
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
        </div>
        <div className="space-y-1 lg:col-span-2">
          <Label htmlFor="yt-title">
            Title {lang === "en" ? "(optional override from YouTube)" : "(optional)"}
          </Label>
          <Input
            id="yt-title"
            value={lang === "en" ? titles.en : lang === "am" ? titles.am : titles.om}
            onChange={(e) => {
              const v = e.target.value;
              setTitles((t) => ({ ...t, [lang]: v }));
              if (lang === "en") setForm((f) => ({ ...f, title: v }));
            }}
            disabled={busy}
          />
        </div>
        <div className="space-y-2 lg:col-span-2">
          <Label>Description / notes</Label>
          <BlogRichTextEditor
            key={lang}
            content={descriptionDoc}
            onChange={(json) => setDescriptionDoc(json)}
            onUploadImage={async () => null}
            disabled={busy}
          />
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 lg:col-span-2">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showAdvanced}
              onChange={(e) => setShowAdvanced(e.target.checked)}
              disabled={busy}
            />
            Add optional details (semester, schedule, venue, ordering)
          </label>
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
        {showAdvanced ? (
          <>
            <div className="space-y-1">
              <Label htmlFor="semester">Semester / period line</Label>
              <Input
                id="semester"
                value={form.semesterLabel}
                onChange={(e) => setForm((f) => ({ ...f, semesterLabel: e.target.value }))}
                placeholder="Semesters: October – December 2025"
                disabled={busy}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="schedule">Schedule line</Label>
              <Input
                id="schedule"
                value={form.scheduleLine}
                onChange={(e) => setForm((f) => ({ ...f, scheduleLine: e.target.value }))}
                placeholder="Every Wednesday Evening"
                disabled={busy}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="venue">Venue / time line</Label>
              <Input
                id="venue"
                value={form.venueLine}
                onChange={(e) => setForm((f) => ({ ...f, venueLine: e.target.value }))}
                placeholder="6:30 PM | Main Hall"
                disabled={busy}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Label htmlFor="duration">Duration (seconds)</Label>
                <Input
                  id="duration"
                  value={form.durationSeconds}
                  onChange={(e) => setForm((f) => ({ ...f, durationSeconds: e.target.value }))}
                  placeholder="auto from API"
                  disabled={busy}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  value={form.position}
                  onChange={(e) => setForm((f) => ({ ...f, position: e.target.value }))}
                  placeholder="order"
                  disabled={busy}
                />
              </div>
            </div>
          </>
        ) : null}

        {showPdf ? (
          <div className="space-y-4 rounded-lg border p-4 lg:col-span-2">
            <div className="space-y-1">
              <p className="text-sm font-medium">PDF attachment</p>
              <p className="text-sm text-muted-foreground">
                Select a PDF (exercises, notes, sheet music) to attach to this teaching.
              </p>
            </div>

            <div className="grid gap-2 md:grid-cols-3">
              <div className="space-y-1 md:col-span-1">
                <Label htmlFor="pdf-title">Title (optional)</Label>
                <Input
                  id="pdf-title"
                  value={attachmentTitle}
                  onChange={(e) => setAttachmentTitle(e.target.value)}
                  disabled={busy || attachmentsBusy}
                  placeholder="e.g. Vocal exercise sheet"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <Label htmlFor="pdf-file">PDF file</Label>
                <Input
                  id="pdf-file"
                  type="file"
                  accept="application/pdf"
                  disabled={busy || attachmentsBusy}
                  onChange={(e) => setAttachmentFile(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>
            {mode === "edit" && initial?.id && (
              <div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => void uploadAttachment()}
                  disabled={busy || attachmentsBusy}
                >
                  {attachmentsBusy ? "Uploading…" : "Upload & attach now"}
                </Button>
              </div>
            )}
          </div>
        ) : null}
        <label className="flex cursor-pointer items-start gap-2 text-sm lg:col-span-2">
          <input
            type="checkbox"
            className="mt-0.5"
            checked={form.membersOnly}
            onChange={(e) => setForm((f) => ({ ...f, membersOnly: e.target.checked }))}
            disabled={busy}
          />
          <span>
            <span className="font-medium">Members only</span>
            <span className="mt-1 block text-muted-foreground">
              The embedded video, notes, and PDFs appear only to active members and signed-in admins; everyone else sees a short invitation to join.
            </span>
          </span>
        </label>
      </div>

      {mode === "edit" && initial?.id && attachments.length > 0 ? (
        <div className="space-y-4 rounded-lg border p-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">Existing PDF attachments</p>
          </div>

          <div className="space-y-2">
              {attachments.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-md border px-3 py-2 text-sm">
                  <div className="min-w-0">
                    <p className="truncate font-medium">{a.title || "PDF attachment"}</p>
                    <p className="text-xs text-muted-foreground">
                      Uploaded {new Date(a.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : null}

      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={() => router.push("/dashboard/teachings")} disabled={busy}>
          Cancel
        </Button>
        <Button type="button" onClick={() => void submitForm()} disabled={busy}>
          {busy ? "Publishing…" : "Publish"}
        </Button>
      </div>
    </div>
  );
}
