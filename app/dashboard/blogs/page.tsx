import { AppSidebar } from "@/components/app-sidebar";
import { BlogsAdminPanel } from "@/components/admin/blogs-admin-panel";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { requireAdminPage } from "@/lib/admin-session";
import type { AdminBlogListItem } from "@/lib/contracts/blog";
import { db } from "@/lib/prisma";

export default async function DashboardBlogsPage() {
  const session = await requireAdminPage();

  const rows = await db.blog.findMany({
    orderBy: [{ updatedAt: "desc" }],
  });

  const initialBlogs: AdminBlogListItem[] = rows.map((b) => ({
    id: b.id,
    slug: b.slug,
    title: b.title,
    excerpt: b.excerpt,
    coverImage: b.coverImage,
    status: b.status,
    publishedAt: b.publishedAt?.toISOString() ?? null,
    viewCount: b.viewCount,
    createdAt: b.createdAt.toISOString(),
    updatedAt: b.updatedAt.toISOString(),
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
            <h1 className="text-base font-medium">Blog posts</h1>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 lg:p-6">
          <BlogsAdminPanel initialBlogs={initialBlogs} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
