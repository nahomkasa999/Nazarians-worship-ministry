"use client";

import type { JSONContent } from "@tiptap/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

const emptyForm = {
  youtubeUrl: "",
  title: "",
  description: "",
  semesterLabel: "",
  scheduleLine: "",
  venueLine: "",
  durationSeconds: "",
  position: "",
  published: true,
};

type TeachingEditorFormProps = {
  mode: "create" | "edit";
  initial?: AdminTeachingListItem;
};

export function TeachingEditorForm({ mode, initial }: TeachingEditorFormProps) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
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
          published: initial.published,
        }
      : emptyForm
  );
  const [descriptionDoc, setDescriptionDoc] = useState<JSONContent>(
    parseTeachingDescription(initial?.description) ?? BLOG_EMPTY_DOC
  );
  const [showAdvanced, setShowAdvanced] = useState(
    Boolean(
      initial?.semesterLabel ||
      initial?.scheduleLine ||
      initial?.venueLine ||
      initial?.durationSeconds != null ||
      (initial?.position ?? 0) > 0 ||
      initial?.published === false
    )
  );

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
      const res = await createTeaching({
        youtubeUrl: form.youtubeUrl.trim(),
        title: form.title.trim() || undefined,
        description: toTeachingDescriptionStorage(descriptionDoc),
        semesterLabel: form.semesterLabel.trim() || null,
        scheduleLine: form.scheduleLine.trim() || null,
        venueLine: form.venueLine.trim() || null,
        durationSeconds: durationParsed ?? null,
        position: positionParsed,
        published: form.published,
      });
      setBusy(false);
      if (res.error) {
        toast.error(readApiErrorMessage(res.error));
        return;
      }
      toast.success("Teaching created.");
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
      title: form.title.trim() || undefined,
      description: toTeachingDescriptionStorage(descriptionDoc),
      semesterLabel: form.semesterLabel.trim() || null,
      scheduleLine: form.scheduleLine.trim() || null,
      venueLine: form.venueLine.trim() || null,
      durationSeconds: durationParsed ?? null,
      position: positionParsed,
      published: form.published,
    });
    setBusy(false);
    if (res.error) {
      toast.error(readApiErrorMessage(res.error));
      return;
    }
    toast.success("Teaching updated.");
    router.replace("/dashboard/teachings");
    router.refresh();
  };

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
        <div className="space-y-1">
          <Label htmlFor="yt-title">Title (optional override)</Label>
          <Input
            id="yt-title"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            disabled={busy}
          />
        </div>
        <div className="space-y-2 lg:col-span-2">
          <Label>Description</Label>
          <BlogRichTextEditor
            content={descriptionDoc}
            onChange={(json) => setDescriptionDoc(json)}
            onUploadImage={async () => null}
            disabled={busy}
          />
        </div>
        <div className="lg:col-span-2">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showAdvanced}
              onChange={(e) => setShowAdvanced(e.target.checked)}
              disabled={busy}
            />
            Add optional details (semester, schedule, venue, ordering)
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
        <label className="flex items-center gap-2 text-sm lg:col-span-2">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
            disabled={busy}
          />
          Published on site
        </label>
      </div>
      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={() => router.push("/dashboard/teachings")} disabled={busy}>
          Cancel
        </Button>
        <Button type="button" onClick={() => void submitForm()} disabled={busy}>
          {busy ? "Saving…" : "Save"}
        </Button>
      </div>
    </div>
  );
}
