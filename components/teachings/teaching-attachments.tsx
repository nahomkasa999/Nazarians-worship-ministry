"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Attachment = {
  id: string;
  title: string | null;
  createdAt: string;
};

type TeachingAttachmentsProps = {
  attachments: Attachment[];
  /** Base path without trailing id, e.g. `/api/teachings/attachments` or `/api/blogs/attachments` */
  downloadApiPrefix?: string;
};

export function TeachingAttachments({
  attachments,
  downloadApiPrefix = "/api/teachings/attachments",
}: TeachingAttachmentsProps) {
  const [busyId, setBusyId] = useState<string | null>(null);

  const download = async (id: string) => {
    setBusyId(id);
    try {
      const res = await fetch(`${downloadApiPrefix}/${id}`, { method: "GET" });
      const data = (await res.json()) as { signedUrl?: string; error?: string };
      if (!res.ok || !data.signedUrl) {
        return;
      }
      window.open(data.signedUrl, "_blank", "noopener,noreferrer");
    } finally {
      setBusyId(null);
    }
  };

  if (attachments.length === 0) {
    return <p className="text-sm text-muted-foreground">No downloads yet.</p>;
  }

  return (
    <div className="space-y-2">
      {attachments.map((a) => (
        <div key={a.id} className="flex flex-col gap-2 rounded-md border p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{a.title || "PDF attachment"}</p>
            <p className="text-xs text-muted-foreground">{new Date(a.createdAt).toLocaleString()}</p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={busyId === a.id}
            onClick={() => void download(a.id)}
          >
            {busyId === a.id ? "Loading…" : "Download"}
          </Button>
        </div>
      ))}
    </div>
  );
}

