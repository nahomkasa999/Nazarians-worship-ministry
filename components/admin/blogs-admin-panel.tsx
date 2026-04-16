"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { deleteAdminBlog } from "@/lib/api/admin-blogs-client";
import { readApiErrorMessage } from "@/lib/api/error-message";
import type { AdminBlogListItem } from "@/lib/contracts/blog";
import { Button } from "@/components/ui/button";
import { getRelativeDateLabel } from "@/lib/relative-date";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type BlogsAdminPanelProps = {
  initialBlogs: AdminBlogListItem[];
};

export function BlogsAdminPanel({ initialBlogs }: BlogsAdminPanelProps) {
  const router = useRouter();
  const [blogs, setBlogs] = useState(initialBlogs);
  const [busy, setBusy] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  useEffect(() => {
    setBlogs(initialBlogs);
  }, [initialBlogs]);

  const runDelete = async () => {
    if (!deleteTargetId) return;
    setBusy(true);
    const res = await deleteAdminBlog(deleteTargetId);
    setBusy(false);
    if (res.error) {
      toast.error(readApiErrorMessage(res.error));
      return;
    }
    toast.success("Post deleted.");
    setBlogs((prev) => prev.filter((b) => b.id !== deleteTargetId));
    setDeleteTargetId(null);
    router.refresh();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button type="button" asChild>
          <Link href="/dashboard/blogs/new">New post</Link>
        </Button>
      </div>

      {blogs.length === 0 ? (
        <p className="text-sm text-muted-foreground">No blog posts yet. Create one to get started.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.map((b) => (
            <li key={b.id} className="overflow-hidden rounded-lg border border-border bg-card">
              <Link href={`/blog/${b.slug}`} className="block">
                <div className="relative aspect-[16/9] w-full bg-muted">
                  <Image
                    src={b.coverImage || "/images/defult-image.jpg"}
                    alt={b.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <p className="line-clamp-2 font-semibold">{b.title}</p>
                  {b.excerpt ? (
                    <p className="line-clamp-3 text-sm text-muted-foreground">{b.excerpt}</p>
                  ) : null}
                  <p className="text-xs text-muted-foreground">
                    {b.status.toLowerCase()}
                    {b.status === "PUBLISHED" && b.publishedAt
                      ? ` · ${new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(b.publishedAt))} · ${getRelativeDateLabel(b.publishedAt)}`
                      : ""}
                    {b.viewCount > 0 ? ` · ${b.viewCount} views` : ""}
                  </p>
                </div>
              </Link>
              <div className="flex items-center justify-end gap-2 border-t p-3">
                <Button type="button" variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/blogs/${b.id}`}>Edit</Link>
                </Button>
                <Button type="button" variant="destructive" size="sm" onClick={() => setDeleteTargetId(b.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <AlertDialog open={deleteTargetId !== null} onOpenChange={(o) => !o && setDeleteTargetId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this post?</AlertDialogTitle>
            <AlertDialogDescription>
              This cannot be undone. Published URLs will stop working.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={busy}>Cancel</AlertDialogCancel>
            <Button variant="destructive" disabled={busy} onClick={runDelete}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
