"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { deleteTeaching } from "@/lib/api/admin-teachings-client";
import { readApiErrorMessage } from "@/lib/api/error-message";
import type { AdminTeachingListItem } from "@/lib/contracts/teachings";
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
import { teachingDescriptionPreview } from "@/lib/teaching-description";
import { fallbackThumbnailUrl } from "@/lib/youtube/parse-id";

type TeachingsAdminPanelProps = {
  initialTeachings: AdminTeachingListItem[];
};

export function TeachingsAdminPanel({ initialTeachings }: TeachingsAdminPanelProps) {
  const router = useRouter();
  const [list, setList] = useState(initialTeachings);
  const [busy, setBusy] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setList(initialTeachings);
  }, [initialTeachings]);

  const runDelete = async () => {
    if (!deleteId) return;
    setBusy(true);
    const res = await deleteTeaching(deleteId);
    setBusy(false);
    if (res.error) {
      toast.error(readApiErrorMessage(res.error));
      return;
    }
    toast.success("Teaching removed.");
    setDeleteId(null);
    setList((prev) => prev.filter((item) => item.id !== deleteId));
    router.refresh();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button type="button" asChild>
          <Link href="/dashboard/teachings/new">
          Add teaching
          </Link>
        </Button>
      </div>

      {list.length === 0 ? (
        <p className="text-sm text-muted-foreground">No teachings yet. Add one with a YouTube link.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((t) => (
            <li
              key={t.id}
              className="overflow-hidden rounded-lg border bg-card"
            >
              <Link href={`/teaching/${t.id}`} className="block">
                <div className="relative aspect-video w-full bg-muted">
                  <Image
                    src={t.thumbnailUrl?.trim() || fallbackThumbnailUrl(t.youtubeId)}
                    alt={t.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-1 p-4">
                  <p className="line-clamp-2 font-medium">{t.title}</p>
                  {teachingDescriptionPreview(t.description) ? (
                    <p className="line-clamp-3 text-xs text-muted-foreground">
                      {teachingDescriptionPreview(t.description)}
                    </p>
                  ) : null}
                  <p className="text-xs text-muted-foreground">
                    {t.published ? "Published" : "Draft"} · position {t.position}
                  </p>
                </div>
              </Link>
              <div className="flex flex-wrap justify-end gap-2 border-t p-3">
                <Button type="button" size="sm" variant="outline" asChild>
                  <Link href={`/dashboard/teachings/${t.id}`}>Edit</Link>
                </Button>
                <Button type="button" size="sm" variant="destructive" onClick={() => setDeleteId(t.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <AlertDialog open={deleteId !== null} onOpenChange={(o) => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this teaching?</AlertDialogTitle>
            <AlertDialogDescription>
              It will disappear from the home page and courses catalog. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={busy}>Cancel</AlertDialogCancel>
            <Button type="button" variant="destructive" disabled={busy} onClick={() => void runDelete()}>
              {busy ? "Deleting…" : "Delete"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
