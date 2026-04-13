import { AppSidebar } from "@/components/app-sidebar";
import { TeachingsAdminPanel } from "@/components/admin/teachings-admin-panel";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { requireAdminPage } from "@/lib/admin-session";
import { db } from "@/lib/prisma";

export default async function DashboardTeachingsPage() {
  const session = await requireAdminPage();

  const teachings = await db.teaching.findMany({
    orderBy: [{ position: "asc" }, { createdAt: "desc" }],
  });

  const initialTeachings = teachings.map((t) => ({
    id: t.id,
    slug: t.slug,
    youtubeUrl: t.youtubeUrl,
    youtubeId: t.youtubeId,
    thumbnailUrl: t.thumbnailUrl,
    title: t.title,
    description: t.description,
    durationSeconds: t.durationSeconds,
    semesterLabel: t.semesterLabel,
    scheduleLine: t.scheduleLine,
    venueLine: t.venueLine,
    position: t.position,
    published: t.published,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  }));

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
            <h1 className="text-base font-medium">Teachings</h1>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 lg:p-6">
          <TeachingsAdminPanel initialTeachings={initialTeachings} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
