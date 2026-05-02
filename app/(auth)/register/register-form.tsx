"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

type RegisterFormProps = {
  defaultNext: string;
};

export function RegisterForm({ defaultNext }: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const router = useRouter();
  const next = defaultNext;

  const loginHref = `/login?next=${encodeURIComponent(next)}`;

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailLoading(true);

    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
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
        style={{ backgroundImage: "url('/images/background.webp')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/55 backdrop-blur-md" />

      <div className="relative z-10 w-full max-w-sm md:max-w-4xl">
        <Card className="overflow-hidden border-border/60 bg-card/95 p-0 shadow-xl backdrop-blur-sm">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8" onSubmit={handleSignUp}>
              <div className="flex flex-col gap-6">
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold">Create your account</h1>
                  <p className="text-sm text-muted-foreground">
                    Join the community to apply for membership, sign in to the member portal, and access
                    members-only teachings and articles. Ministry staff accounts are created separately—this
                    form is only for members and supporters.
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
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Full name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email address
                  </label>
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
                  <label htmlFor="password" className="text-sm font-medium leading-none">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button className="w-full" type="submit" disabled={isEmailLoading}>
                  {isEmailLoading ? "Creating account..." : "Create account"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already registered?{" "}
                  <Link href={loginHref} className="underline underline-offset-4">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
            <div
              className="relative hidden md:flex md:flex-col md:justify-between md:p-8"
              style={{
                backgroundImage: "url('/images/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
              <div className="relative space-y-3 text-white">
                <p className="text-xs uppercase tracking-wider text-white/80">Nazarian Worship Ministry</p>
                <h2 className="text-2xl font-semibold text-white">One account for members and friends.</h2>
                <p className="text-sm text-white/80">
                  Use this page to create a login for membership checkout and the member portal. Dashboard access
                  for ministry staff is granted by your team lead, not through this sign-up form.
                </p>
              </div>
              <div className="relative rounded-xl border border-white/30 bg-black/35 p-4 text-sm text-white/85 backdrop-blur">
                Choose a strong password and keep your login private. You can reset it anytime from the sign-in page.
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
