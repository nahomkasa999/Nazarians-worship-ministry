import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { BlogEditorForm } from "@/components/admin/blog-editor-form";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { requireAdminPage } from "@/lib/admin-session";
import type { AdminBlogDetail } from "@/lib/contracts/blog";
import { db } from "@/lib/prisma";

export default async function DashboardEditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdminPage();
  const { id } = await params;

  const row = await db.blog.findUnique({ where: { id } });
  if (!row) {
    notFound();
  }

  const initial: AdminBlogDetail = {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    coverImage: row.coverImage,
    status: row.status,
    publishedAt: row.publishedAt?.toISOString() ?? null,
    viewCount: row.viewCount,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };

  return (
    <SidebarProvider>
      <AppSidebar
        user={{
          name: session.user.name,
          email: session.user.email,
          avatar: session.user.image ?? "",
        }}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <h1 className="text-base font-medium">Edit blog post</h1>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 lg:p-6">
          <div className="mx-auto w-full max-w-5xl">
            <BlogEditorForm mode="edit" initial={initial} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
