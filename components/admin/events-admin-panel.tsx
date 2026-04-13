"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import {
  createAdminEventPoster,
  deleteAdminEvent,
  replaceAdminEventPoster,
} from "@/lib/api/admin-events-client";
import { readApiErrorMessage } from "@/lib/api/error-message";
import type { AdminEventListItem } from "@/lib/contracts/events";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type EventsAdminPanelProps = {
  initialEvents: AdminEventListItem[];
};

export function EventsAdminPanel({ initialEvents }: EventsAdminPanelProps) {
  const router = useRouter();
  const [events, setEvents] = useState(initialEvents);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEvents(initialEvents);
  }, [initialEvents]);

  const openNew = () => {
    setEditingId(null);
    setDialogOpen(true);
    if (fileRef.current) fileRef.current.value = "";
  };

  const openReplace = (id: string) => {
    setEditingId(id);
    setDialogOpen(true);
    if (fileRef.current) fileRef.current.value = "";
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingId(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const onSubmitPoster = async () => {
    const input = fileRef.current;
    const file = input?.files?.[0];
    if (!file) {
      toast.error("Choose a poster image.");
      return;
    }

    const fd = new FormData();
    fd.set("poster", file);

    setBusy(true);
    const res = editingId
      ? await replaceAdminEventPoster(editingId, fd)
      : await createAdminEventPoster(fd);
    setBusy(false);

    if (res.error) {
      toast.error(readApiErrorMessage(res.error));
      return;
    }

    toast.success(editingId ? "Poster updated." : "Event poster added.");
    closeDialog();
    router.refresh();
  };

  const runDelete = async () => {
    if (!deleteTargetId) return;
    setBusy(true);
    const res = await deleteAdminEvent(deleteTargetId);
    setBusy(false);
    if (res.error) {
      toast.error(readApiErrorMessage(res.error));
      return;
    }
    toast.success("Event deleted.");
    setEvents((prev) => prev.filter((e) => e.id !== deleteTargetId));
    setDeleteTargetId(null);
    router.refresh();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button type="button" onClick={openNew} disabled={busy}>
          Add event
        </Button>
      </div>

      {events.length === 0 ? (
        <p className="text-sm text-muted-foreground">No event posters yet. Click New to upload one.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="overflow-hidden rounded-lg border bg-card shadow-sm"
            >
              <div className="relative min-h-[220px] w-full bg-muted sm:min-h-[300px]">
                <Image
                  src={ev.imageUrl}
                  alt="Event poster"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-3">
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  disabled={busy}
                  onClick={() => openReplace(ev.id)}
                >
                  Replace image
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  disabled={busy}
                  onClick={() => setDeleteTargetId(ev.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={(o) => !o && closeDialog()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? "Replace poster" : "New event poster"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 py-2">
            <Label htmlFor="poster-file">Poster image</Label>
            <input
              id="poster-file"
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className={cn(
                "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm file:mr-2 file:text-sm"
              )}
            />
            <p className="text-xs text-muted-foreground">JPEG, PNG, or WebP. Max 8 MB.</p>
          </div>
          <DialogFooter className="gap-2 sm:gap-2">
            <Button type="button" variant="outline" onClick={closeDialog} disabled={busy}>
              Cancel
            </Button>
            <Button type="button" onClick={() => void onSubmitPoster()} disabled={busy}>
              {busy ? "Uploading…" : "Upload"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteTargetId !== null} onOpenChange={(o) => !o && setDeleteTargetId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete event poster?</AlertDialogTitle>
            <AlertDialogDescription>
              This removes the event from the site and deletes the stored image. You cannot undo this.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={busy}>Cancel</AlertDialogCancel>
            <Button
              type="button"
              variant="destructive"
              disabled={busy}
              onClick={() => void runDelete()}
            >
              {busy ? "Deleting…" : "Delete"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
