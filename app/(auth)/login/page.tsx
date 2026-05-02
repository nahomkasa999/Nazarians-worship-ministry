"use client";

import { Suspense } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/members";
  const isDashboardDest = next === "/dashboard" || next.startsWith("/dashboard/");
  const registerHref = `/register?next=${encodeURIComponent(next)}`;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: next,
    });

    setIsEmailLoading(false);

    if (error) {
      toast.error(error.message || "Something went wrong");
    } else {
      router.push(next);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: next,
    });

    if (error) {
      toast.error(error.message || "Google sign-in failed");
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden p-4 md:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/55 backdrop-blur-md" />

      <div className="relative z-10 w-full max-w-sm md:max-w-4xl">
        <Card className="overflow-hidden border-border/60 bg-card/95 p-0 shadow-xl backdrop-blur-sm">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8" onSubmit={handleSignIn}>
              <div className="flex flex-col gap-6">
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-sm text-muted-foreground">
                    {isDashboardDest ? (
                      <>
                        Sign in to open the church admin dashboard and manage teachings, events, and membership
                        workflows securely.
                      </>
                    ) : (
                      <>
                        Sign in to continue—finish membership checkout, open your member portal, and access
                        teachings and articles reserved for our community.
                      </>
                    )}
                  </p>
                </div>

                <Button variant="outline" type="button" onClick={handleGoogleSignIn} disabled={isGoogleLoading}>
                  <GoogleLogoIcon className="size-4" />
                  {isGoogleLoading ? "Redirecting..." : "Continue with Google"}
                </Button>

                <div className="relative">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                    or continue with email
                  </span>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">Email address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
                    <Link href="/forgot-password" className="text-xs text-muted-foreground underline-offset-2 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button className="w-full" type="submit" disabled={isEmailLoading}>
                  {isEmailLoading ? "Signing in..." : "Sign in"}
                </Button>

                {isDashboardDest ? (
                  <p className="text-center text-sm text-muted-foreground">
                    Staff accounts are issued by your ministry lead. This sign-in page does not create new dashboard
                    users.
                  </p>
                ) : (
                  <p className="text-center text-sm text-muted-foreground">
                    New here?{" "}
                    <Link href={registerHref} className="underline underline-offset-4">
                      Create your account
                    </Link>
                  </p>
                )}
              </div>
            </form>
            <div
              className="relative hidden md:flex md:flex-col md:justify-between md:p-8"
              style={{ backgroundImage: "url('/images/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
              <div className="relative space-y-3 text-white">
                <p className="text-xs uppercase tracking-wider text-white/80">Nazarian Worship Ministry</p>
                {isDashboardDest ? (
                  <>
                    <h2 className="text-2xl font-semibold text-white">Lead your ministry with focus and confidence.</h2>
                    <p className="text-sm text-white/80">
                      This side of the site is for trusted team members updating teachings, events, and member
                      requests.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold text-white">Grow with your worship community.</h2>
                    <p className="text-sm text-white/80">
                      Your account connects you to membership, the member portal, and resources that support your
                      walk in worship ministry—not a public bulletin board, just what we share with people who are
                      part of the journey.
                    </p>
                  </>
                )}
              </div>
              <div className="relative rounded-xl border border-white/30 bg-black/35 p-4 text-sm text-white/85 backdrop-blur">
                {isDashboardDest
                  ? "Keep admin credentials private and sign in only from trusted devices."
                  : "Use a strong password, and sign out when you’re done on shared or public devices."}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function GoogleLogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M21.35 11.1H12v2.98h5.36c-.23 1.52-1.72 4.47-5.36 4.47-3.23 0-5.86-2.67-5.86-5.95S8.77 6.64 12 6.64c1.84 0 3.07.79 3.77 1.47l2.57-2.48C16.83 4.2 14.6 3.3 12 3.3 7.03 3.3 3 7.34 3 12.3s4.03 9 9 9c5.2 0 8.65-3.65 8.65-8.8 0-.6-.07-1.04-.15-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="relative flex min-h-svh items-center justify-center overflow-hidden p-4 md:p-8">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}