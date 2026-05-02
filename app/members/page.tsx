import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { requireUserPage } from "@/lib/user-session";
import { db } from "@/lib/prisma";
import { BLOG_FALLBACK_IMAGE } from "@/lib/blog/fallback-image";
import { getRelativeDateLabel } from "@/lib/relative-date";
import { Calendar, Clock, PlayCircle, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teachingDescriptionPreview } from "@/lib/teaching-description";
import { Button } from "@/components/ui/button";

export default async function MembersHomePage() {
  const session = await requireUserPage("/members");
  const userId = session.user.id;
  const now = new Date();

  // 1. Try to find an active APPROVED request
  let membership = await db.membershipRequest.findFirst({
    where: { userId, status: "APPROVED" },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      status: true,
      membershipExpiresAt: true,
      membershipStartsAt: true,
      paymentSubmittedAt: true,
      rejectionReason: true,
      createdAt: true,
    },
  });

  // 2. If no approved request, check for PENDING
  if (!membership) {
    membership = await db.membershipRequest.findFirst({
      where: { userId, status: "PENDING" },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        status: true,
        membershipExpiresAt: true,
        membershipStartsAt: true,
        paymentSubmittedAt: true,
        rejectionReason: true,
        createdAt: true,
      },
    });
  }

  // 3. Fallback to any latest request
  if (!membership) {
    membership = await db.membershipRequest.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        status: true,
        membershipExpiresAt: true,
        membershipStartsAt: true,
        paymentSubmittedAt: true,
        rejectionReason: true,
        createdAt: true,
      },
    });
  }

  const isActive =
    membership?.status === "APPROVED" &&
    (membership.membershipExpiresAt == null || membership.membershipExpiresAt > now);

  const isPending = membership?.status === "PENDING";
  const isAdmin = session.user.role === "admin";
  const requiresMembershipPayment = !isAdmin && !isActive && !isPending;

  const portalSubtitle =
    isAdmin && !isActive
      ? "Signed in as staff: use this space to preview everything marked members-only before members ever see it."
      : isAdmin && isActive
        ? "You have member access and administrator tools—the catalog below stays off the public site."
        : requiresMembershipPayment
          ? "Member resources are unlocked only after your membership payment is submitted and approved."
          : "Welcome back. Lessons, articles, and posters here are reserved for people with an active Nazarian membership.";

  const memberTeachings = isActive || isAdmin
    ? await db.teaching.findMany({
      where: { published: true, membersOnly: true },
      orderBy: [{ position: "asc" }, { createdAt: "desc" }],
      take: 12,
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        thumbnailUrl: true,
        createdAt: true,
      },
    })
    : [];

  const blogs = isActive || isAdmin
    ? await db.blog.findMany({
      where: { status: "PUBLISHED", membersOnly: true },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      take: 12,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        coverImage: true,
        publishedAt: true,
        viewCount: true,
      },
    })
    : [];

  const events = isActive || isAdmin
    ? await db.event.findMany({
      where: { active: true, membersOnly: true },
      orderBy: [{ date: "asc" }, { createdAt: "desc" }],
      take: 12,
      select: { id: true, title: true, imageUrl: true, date: true },
    })
    : [];

  const teachingsEmptyHint = isAdmin
    ? "No published members-only teachings yet. In the dashboard, open Teachings, publish the lesson, and turn on Members only."
    : "No exclusive lessons yet—your leaders will drop new teachings here when they are ready.";

  const blogsEmptyHint = isAdmin
    ? "No members-only articles yet. Edit a post in Blog and enable Members only when you publish."
    : "No member articles yet—when something new is published for members, it will appear here.";

  const eventsEmptyHint = isAdmin
    ? "No members-only event posters yet. On Dashboard → Events, tick Members only on a poster to pin it here."
    : "No member-only events posted yet—watch this tab after the team shares something special.";

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <Nav />
      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl space-y-10">

          <header className="border-b pb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">Member Portal</h1>
              <p className="text-lg text-muted-foreground">
                {isPending
                  ? "Your membership application is currently under review."
                  : portalSubtitle}
              </p>
            </div>
          </header>

          {isPending ? (
            <Card className="rounded-none border-2 border-dashed bg-muted/30 p-12 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Clock className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="mt-6 text-2xl font-medium">Application Pending</h2>
              <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                We have received your payment submission. Our team is currently reviewing it. You will be notified here once you are approved.
              </p>
              <div className="mt-8">
                <Badge variant="outline" className="px-4 py-2 text-sm rounded-none">
                  Submitted: {membership?.paymentSubmittedAt ? membership.paymentSubmittedAt.toLocaleDateString() : membership?.createdAt?.toLocaleDateString()}
                </Badge>
              </div>
            </Card>
          ) : requiresMembershipPayment ? (
            <Card className="rounded-none border-2 border-dashed bg-muted/30 p-12 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <BookOpen className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="mt-6 text-2xl font-medium">Membership payment required</h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                This portal contains member-only teachings, blogs, and events. To access this content, please submit
                your membership payment first.
              </p>
              {membership?.status === "REJECTED" && membership.rejectionReason ? (
                <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/80">
                  Previous submission note: {membership.rejectionReason}
                </p>
              ) : null}
              <div className="mt-8 flex items-center justify-center gap-3">
                <Button asChild>
                  <Link href="/membership/checkout">Complete payment</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/membership">View membership details</Link>
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-10">

              <section className="flex flex-col">
                <Tabs defaultValue="teachings" className="flex w-full flex-col items-start gap-8">
                  <TabsList className="inline-flex h-auto w-fit max-w-full flex-row flex-wrap items-stretch justify-start rounded-none border bg-transparent p-0">
                    <TabsTrigger
                      value="teachings"
                      className="min-h-12 flex-none rounded-none px-4 py-3 shadow-none transition-none hover:text-foreground/60 dark:hover:text-muted-foreground data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none data-[state=active]:hover:bg-foreground data-[state=active]:hover:text-background"
                    >
                      <PlayCircle className="mr-2 h-4 w-4 shrink-0" />
                      Teachings
                    </TabsTrigger>
                    <TabsTrigger
                      value="blogs"
                      className="min-h-12 flex-none rounded-none px-4 py-3 shadow-none transition-none hover:text-foreground/60 dark:hover:text-muted-foreground data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none data-[state=active]:hover:bg-foreground data-[state=active]:hover:text-background"
                    >
                      <BookOpen className="mr-2 h-4 w-4 shrink-0" />
                      Blogs
                    </TabsTrigger>
                    <TabsTrigger
                      value="events"
                      className="min-h-12 flex-none rounded-none px-4 py-3 shadow-none transition-none hover:text-foreground/60 dark:hover:text-muted-foreground data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none data-[state=active]:hover:bg-foreground data-[state=active]:hover:text-background"
                    >
                      <Calendar className="mr-2 h-4 w-4 shrink-0" />
                      Events
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="teachings" className="mt-0 w-full outline-none">
                    {memberTeachings.length === 0 ? (
                      <Card className="rounded-none border border-dashed p-12 text-center text-muted-foreground">
                        <p>{teachingsEmptyHint}</p>
                      </Card>
                    ) : (
                      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {memberTeachings.map((t, index) => {
                          const excerpt = teachingDescriptionPreview(t.description);
                          return (
                            <li key={t.id} className="overflow-hidden rounded-lg border bg-card">
                              <article>
                                <Link href={`/teaching/${t.slug || t.id}`} className="group block h-full">
                                  <div className="relative aspect-video w-full bg-muted">
                                    {t.thumbnailUrl ? (
                                      <Image
                                        src={t.thumbnailUrl}
                                        alt={t.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        loading={index === 0 ? "eager" : "lazy"}
                                        priority={index === 0}
                                      />
                                    ) : (
                                      <div className="flex h-full min-h-[12rem] w-full items-center justify-center">
                                        <PlayCircle className="h-8 w-8 text-muted-foreground/50" />
                                      </div>
                                    )}
                                  </div>
                                  <div className="space-y-3 p-4">
                                    <h2 className="text-lg font-semibold group-hover:underline sm:text-xl">{t.title}</h2>
                                    {excerpt ? (
                                      <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
                                    ) : null}
                                    <p className="text-xs text-muted-foreground">
                                      {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(t.createdAt)}
                                      {` · ${getRelativeDateLabel(t.createdAt)}`}
                                    </p>
                                  </div>
                                </Link>
                              </article>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </TabsContent>

                  <TabsContent value="blogs" className="mt-0 w-full outline-none">
                    {blogs.length === 0 ? (
                      <Card className="rounded-none border border-dashed p-12 text-center text-muted-foreground">
                        <p>{blogsEmptyHint}</p>
                      </Card>
                    ) : (
                      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((post, index) => (
                          <li key={post.id} className="overflow-hidden rounded-lg border bg-card">
                            <article>
                              <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <div className="relative aspect-[16/9] w-full bg-muted">
                                  <Image
                                    src={post.coverImage || BLOG_FALLBACK_IMAGE}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    priority={index === 0}
                                  />
                                </div>
                                <div className="space-y-3 p-4">
                                  <h2 className="text-lg font-semibold group-hover:underline sm:text-xl">{post.title}</h2>
                                  {post.excerpt ? (
                                    <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                                  ) : null}
                                  <p className="text-xs text-muted-foreground">
                                    {post.publishedAt
                                      ? `${new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(post.publishedAt)} · ${getRelativeDateLabel(post.publishedAt)}`
                                      : ""}
                                    {post.viewCount > 0 ? ` · ${post.viewCount} views` : null}
                                  </p>
                                </div>
                              </Link>
                            </article>
                          </li>
                        ))}
                      </ul>
                    )}
                  </TabsContent>

                  <TabsContent value="events" className="mt-0 w-full outline-none">
                    {events.length === 0 ? (
                      <Card className="rounded-none border border-dashed p-12 text-center text-muted-foreground">
                        <p>{eventsEmptyHint}</p>
                      </Card>
                    ) : (
                      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {events.map((e, index) => {
                          const dateLine = e.date
                            ? `${new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(e.date)} · ${getRelativeDateLabel(e.date)}`
                            : "Date TBD";
                          return (
                            <li key={e.id} className="overflow-hidden rounded-lg border bg-card">
                              <article>
                                <Link href="/events" className="group block h-full">
                                  <div className="relative aspect-video w-full bg-muted">
                                    {e.imageUrl ? (
                                      <Image
                                        src={e.imageUrl}
                                        alt={e.title || "Event"}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        loading={index === 0 ? "eager" : "lazy"}
                                        priority={index === 0}
                                      />
                                    ) : (
                                      <div className="flex h-full min-h-[12rem] w-full items-center justify-center">
                                        <Calendar className="h-8 w-8 text-muted-foreground/50" />
                                      </div>
                                    )}
                                  </div>
                                  <div className="space-y-3 p-4">
                                    <h2 className="text-lg font-semibold group-hover:underline sm:text-xl">
                                      {e.title || "Upcoming event"}
                                    </h2>
                                    <p className="line-clamp-3 text-sm text-muted-foreground">{dateLine}</p>
                                    <p className="text-xs text-muted-foreground">Members-only event</p>
                                  </div>
                                </Link>
                              </article>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </TabsContent>
                </Tabs>
              </section>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
