"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/content/nav";
import { useSession, signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, Bell, LogOut } from "lucide-react";

export function Nav() {
  const { data } = useSession();
  const isAdmin = data?.user?.role === "admin";
  const dashboardHref = isAdmin ? "/dashboard" : "/members";
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (!data?.user) {
      setUnreadCount(0);
      return;
    }
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/members/notifications/unread-count", { credentials: "include" });
        const json = (await res.json()) as { count?: number };
        if (!cancelled && typeof json.count === "number") setUnreadCount(json.count);
      } catch {
        if (!cancelled) setUnreadCount(0);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [data?.user]);

  const logoutClass =
    "nav__cta nav__cta--desktop border-rose-200 bg-transparent text-rose-600 hover:bg-rose-50 hover:text-rose-700 dark:border-rose-900/60 dark:text-rose-400 dark:hover:bg-rose-950/40";

   const notificationClass =
    "nav__cta nav__cta--desktop nav__cta--dashboard relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-transparent";

  return (
    <nav className="nav">
      <Link href="/" className="nav__logo">
        NAZARIAN WORSHIP
      </Link>
      <div className="nav__right">
        <div className="nav__links">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        {data?.user ? (
          <div className="hidden items-center gap-2 md:flex">
            <Button className="nav__cta nav__cta--desktop nav__cta--dashboard" asChild>
              <Link href={dashboardHref}>Dashboard</Link>
            </Button>
            <Link
              href="/members/notifications"
              className={notificationClass}
              aria-label={unreadCount > 0 ? `Notifications, ${unreadCount} unread` : "Notifications"}
            >
               <Bell className="h-5 w-5" aria-hidden />
              {unreadCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-medium text-background">
                  {unreadCount > 99 ? "99+" : unreadCount}
                </span>
              ) : null}
            </Link>
            <Button
              variant="outline"
              className={`nav__cta ${logoutClass}`}
              onClick={async () => {
                await signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      window.location.href = "/";
                    },
                  },
                });
              }}
            >
              <LogOut className="mr-2 h-4 w-4" aria-hidden />
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="outline" className="nav__cta nav__cta--desktop bg-transparent text-foreground hover:bg-muted" asChild>
              <Link href="/login?next=/members">Sign in</Link>
            </Button>
          </div>
        )}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="nav__hamburger" aria-label="Open menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="nav__sheet">
            <SheetHeader>
              <SheetTitle>Nazarian Worship</SheetTitle>
            </SheetHeader>
            <div className="nav__mobile-links">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
              {data?.user ? (
                <div className="mt-4 flex w-full flex-col gap-2">
                  <Button className="nav__cta nav__cta--dashboard w-full" asChild>
                    <Link href={dashboardHref}>Dashboard</Link>
                  </Button>
                   <Link
                     href="/members/notifications"
                     className="relative flex h-11 w-full items-center justify-center rounded-md border border-transparent bg-foreground text-background hover:bg-foreground/80"
                     aria-label={unreadCount > 0 ? `Notifications, ${unreadCount} unread` : "Notifications"}
                   >
                     <Bell className="h-8 w-8 color-foreground" aria-hidden />
                    {unreadCount > 0 ? (
                      <span className="absolute right-4 top-1/2 flex h-6 min-w-6 -translate-y-1/2 items-center justify-center rounded-full bg-foreground px-1.5 text-xs font-medium text-background">
                        {unreadCount > 99 ? "99+" : unreadCount}
                      </span>
                    ) : null}
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700 dark:border-rose-900/60 dark:text-rose-400 dark:hover:bg-rose-950/40"
                    onClick={async () => {
                      await signOut({
                        fetchOptions: {
                          onSuccess: () => {
                            window.location.href = "/";
                          },
                        },
                      });
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" aria-hidden />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="mt-4 flex w-full flex-col gap-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/login?next=/members">Sign in</Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Nav;
