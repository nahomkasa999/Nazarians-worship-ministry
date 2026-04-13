import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { TeachingEditorForm } from "@/components/admin/teaching-editor-form";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { requireAdminPage } from "@/lib/admin-session";
import { db } from "@/lib/prisma";

export default async function DashboardEditTeachingPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdminPage();
  const { id } = await params;
  const row = await db.teaching.findUnique({ where: { id } });

  if (!row) {
    notFound();
  }

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
            <Separator orientation="vertical" className="mr-2 data-vertical:h-4 data-vertical:self-auto" />
            <h1 className="text-base font-medium">Edit teaching</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 lg:p-6">
          <div className="mx-auto w-full max-w-5xl">
            <TeachingEditorForm
              mode="edit"
              initial={{
                id: row.id,
                slug: row.slug,
                youtubeUrl: row.youtubeUrl,
                youtubeId: row.youtubeId,
                thumbnailUrl: row.thumbnailUrl,
                title: row.title,
                description: row.description,
                durationSeconds: row.durationSeconds,
                semesterLabel: row.semesterLabel,
                scheduleLine: row.scheduleLine,
                venueLine: row.venueLine,
                position: row.position,
                published: row.published,
                createdAt: row.createdAt.toISOString(),
                updatedAt: row.updatedAt.toISOString(),
              }}
            />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
