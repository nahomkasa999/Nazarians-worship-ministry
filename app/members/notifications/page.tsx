import { requireUserPage } from "@/lib/user-session";
import { db } from "@/lib/prisma";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Bell, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function NotificationsPage() {
  const session = await requireUserPage("/members/notifications");
  const userId = session.user.id;

  const notifications = await db.membershipNotification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Increased max-width for a more expansive UI */}
        <div className="mx-auto w-full max-w-6xl space-y-6">
          
          <header className="flex flex-col gap-2 border-b pb-6">
            <Button asChild variant="ghost" className="h-auto w-fit p-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
              <Link href="/members" className="flex items-center text-xs font-medium uppercase tracking-wider">
                <ArrowLeft className="mr-2 h-3 w-3" />
                Back to Portal
              </Link>
            </Button>
            
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-foreground" />
              <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
              <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                {notifications.length}
              </span>
            </div>
          </header>

          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center border border-dashed py-20 text-center">
              <CheckCircle2 className="mb-3 h-10 w-10 text-muted-foreground/40" />
              <h2 className="text-lg font-medium">Clear skies</h2>
              <p className="text-sm text-muted-foreground">You don't have any notifications right now.</p>
            </div>
          ) : (
            <div className="divide-y border-t border-x border-b">
              {notifications.map((n) => (
                <div 
                  key={n.id} 
                  className={`group flex items-start gap-4 p-4 transition-colors hover:bg-muted/30 ${!n.readAt ? "bg-muted/10" : ""}`}
                >
                  {/* Minimized icon indicator */}
                  <div className="relative mt-1">
                    <div className="flex h-7 w-7 items-center justify-center rounded border bg-background">
                      <Bell className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    {!n.readAt && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                      </span>
                    )}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-4">
                      <p className={`text-sm font-semibold ${!n.readAt ? "text-foreground" : "text-muted-foreground"}`}>
                        {n.title}
                      </p>
                      <time className="whitespace-nowrap text-[10px] uppercase tracking-tighter text-muted-foreground/70">
                        {new Intl.DateTimeFormat('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        }).format(n.createdAt)}
                      </time>
                    </div>
                    {n.body && (
                      <p className="max-w-3xl text-sm leading-normal text-muted-foreground/80">
                        {n.body}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}