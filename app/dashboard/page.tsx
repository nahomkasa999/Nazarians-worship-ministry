import { AppSidebar } from "@/components/app-sidebar"
import { auth } from "@/lib/auth"
import { db } from "@/lib/prisma"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { CalendarDaysIcon, FileTextIcon, PlaySquareIcon, UserCheckIcon } from "lucide-react"

export default async function Page() {
  async function handleDeleteRecent(formData: FormData) {
    "use server"

    const session = await auth.api.getSession({
      headers: await headers(),
    })
    if (!session || session.user.role !== "admin") {
      redirect("/login")
    }

    const type = formData.get("type")
    const id = formData.get("id")
    if (typeof type !== "string" || typeof id !== "string" || !id) return

    if (type === "blog") {
      await db.blog.delete({ where: { id } })
    } else if (type === "teaching") {
      await db.teaching.delete({ where: { id } })
    }

    revalidatePath("/dashboard")
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect("/login")
  }

  if (session.user.role !== "admin") {
    redirect("/")
  }

  const [activeEvents, publishedBlogs, publishedTeachings, pendingMemberships, recentBlogs, recentTeachings] = await Promise.all([
    db.event.count({ where: { active: true } }),
    db.blog.count({ where: { status: "PUBLISHED" } }),
    db.teaching.count({ where: { published: true } }),
    db.membershipRequest.count({ where: { status: "PENDING" } }),
    db.blog.findMany({
      select: { id: true, title: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
      take: 4,
    }),
    db.teaching.findMany({
      select: { id: true, title: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
      take: 4,
    }),
  ])

  const recentPosts = [...recentBlogs.map((post) => ({ ...post, type: "blog" as const })), ...recentTeachings.map((post) => ({ ...post, type: "teaching" as const }))]
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 6)

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
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Church Admin Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 lg:gap-6 lg:p-6 lg:pt-0">
          <section className="flex flex-col gap-3 rounded-xl border bg-card p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-muted-foreground lg:text-sm">Overview</p>
              <h1 className="text-xl font-semibold lg:text-3xl">Welcome back, {session.user.name}</h1>
              <p className="text-sm text-muted-foreground lg:text-base">
                Manage church posts, teachings, and membership approvals from one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" asChild>
                <Link href="/dashboard/events">Manage events</Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="/dashboard/blogs/new">New blog</Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="/dashboard/teachings">Manage teachings</Link>
              </Button>
            </div>
          </section>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium lg:text-base">Active events</CardTitle>
                <CalendarDaysIcon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold lg:text-4xl">{activeEvents}</p>
                <p className="text-xs text-muted-foreground lg:text-sm">Publish upcoming services and announcements</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium lg:text-base">Published blogs</CardTitle>
                <FileTextIcon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold lg:text-4xl">{publishedBlogs}</p>
                <p className="text-xs text-muted-foreground lg:text-sm">Teachings and worship notes visible to all users</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium lg:text-base">Video teachings</CardTitle>
                <PlaySquareIcon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold lg:text-4xl">{publishedTeachings}</p>
                <p className="text-xs text-muted-foreground lg:text-sm">YouTube links with auto thumbnail and duration</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium lg:text-base">Pending memberships</CardTitle>
                <UserCheckIcon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold lg:text-4xl">{pendingMemberships}</p>
                <p className="text-xs text-muted-foreground lg:text-sm">Approve or reject membership requests</p>
              </CardContent>
            </Card>
          </div>

          <section className="grid gap-4 xl:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent posts</CardTitle>
                <Badge variant="outline">Latest</Badge>
              </CardHeader>
              <CardContent className="overflow-hidden">
                {recentPosts.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No recent posts yet.</p>
                ) : (
                  <ul className="space-y-2">
                    {recentPosts.map((post) => (
                      <li key={`${post.type}-${post.id}`} className="flex items-center justify-between gap-3 overflow-hidden border-b pb-2 last:border-b-0">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium lg:text-base">{post.title}</p>
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">
                            {post.type === "blog" ? "Blog" : "Teaching"}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={post.type === "blog" ? `/dashboard/blogs/${post.id}` : `/dashboard/teachings/${post.id}`}>
                              Edit
                            </Link>
                          </Button>
                          <form action={handleDeleteRecent}>
                            <input type="hidden" name="type" value={post.type} />
                            <input type="hidden" name="id" value={post.id} />
                            <Button size="sm" variant="outline" type="submit">
                              Delete
                            </Button>
                          </form>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm lg:text-base">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Events ready</span>
                  <Badge variant={activeEvents > 0 ? "default" : "outline"}>
                    {activeEvents > 0 ? "Live" : "None"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Blog pipeline</span>
                  <Badge variant={publishedBlogs > 0 ? "default" : "outline"}>
                    {publishedBlogs > 0 ? "Published" : "Needs update"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Membership queue</span>
                  <Badge variant={pendingMemberships > 0 ? "secondary" : "outline"}>
                    {pendingMemberships > 0 ? `${pendingMemberships} pending` : "Clear"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
