"use client";

import Link from "next/link";
import { navLinks } from "@/content/nav";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function Nav() {
  const { data } = useSession();
  const isAdmin = data?.user?.role === "admin";

  return (
    <nav className="nav">
      <span className="nav__logo">
        NAZARIAN WORSHIP
      </span>
      <div className="nav__right">
        <div className="nav__links">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        {isAdmin ? (
          <Button className="nav__cta nav__cta--desktop nav__cta--dashboard" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        ) : null}
        {!isAdmin ? (
          <Button className="nav__cta nav__cta--desktop" asChild>
            <Link href="/community">Join us</Link>
          </Button>
        ) : null}
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
              {isAdmin ? (
                <Button className="nav__cta nav__cta--dashboard w-full" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              ) : null}
              {!isAdmin ? (
                <Button className="nav__cta w-full" asChild>
                  <Link href="/community">Join us</Link>
                </Button>
              ) : null}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Nav;