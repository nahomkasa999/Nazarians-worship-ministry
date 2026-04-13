import { AppSidebar } from "@/components/app-sidebar";
import { EventsAdminPanel } from "@/components/admin/events-admin-panel";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { requireAdminPage } from "@/lib/admin-session";
import { db } from "@/lib/prisma";

export default async function DashboardEventsPage() {
  const session = await requireAdminPage();

  const events = await db.event.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      imageUrl: true,
      storagePath: true,
      createdAt: true,
    },
  });

  const initialEvents = events.map((e) => ({
    id: e.id,
    imageUrl: e.imageUrl,
    storagePath: e.storagePath,
    createdAt: e.createdAt.toISOString(),
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
            <h1 className="text-base font-medium">Events</h1>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 lg:p-6">
          <EventsAdminPanel initialEvents={initialEvents} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
