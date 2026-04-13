import { AppSidebar } from "@/components/app-sidebar";
import { BlogEditorForm } from "@/components/admin/blog-editor-form";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { requireAdminPage } from "@/lib/admin-session";

export default async function DashboardNewBlogPage() {
  const session = await requireAdminPage();

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
            <h1 className="text-base font-medium">New blog post</h1>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 lg:p-6">
          <BlogEditorForm mode="create" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
