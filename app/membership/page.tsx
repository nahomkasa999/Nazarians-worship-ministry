import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { getUserSessionFromHeaders } from "@/lib/user-session";
import { db } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Music, FileText, BookOpen, Users, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import { membershipBenefits, contributionTiers, moneyUsage } from "@/content/membership";
import { cn } from "@/lib/utils";

const iconMap = {
  Music: Music,
  FileText: FileText,
  BookOpen: BookOpen,
  Users: Users,
};

export default async function MembershipLandingPage() {
  const session = await getUserSessionFromHeaders(await headers());
  if (session?.user?.id) {
    const existing = await db.membershipRequest.findFirst({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    });
    if (existing?.status === "PENDING") {
      redirect("/members?state=pending");
    }
    if (existing?.status === "APPROVED") {
      redirect("/members");
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <Nav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <img
            src="/images/membership-bg.png"
            alt="Worship community"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.3]"
          />
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <Badge variant="outline" className="mb-4 border-white/30 text-white backdrop-blur-md">
              NAZARIAN COMMUNITY
            </Badge>
            <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              Support the Vision, <br />
              <span className="text-white">Shape the Sound.</span>
            </h1>
            <p className="max-w-2xl text-lg text-white/90 drop-shadow sm:text-xl">
              Join our membership to support the ministry and unlock exclusive worship training resources.
            </p>
          </div>
        </section>

        {/* Why Become a Member */}
        <section className="bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-medium text-foreground sm:text-4xl">Why become a member?</h2>
              <div className="mx-auto h-1.5 w-24 bg-[var(--color-border-soft)]" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {membershipBenefits.map((benefit) => {
                const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Heart;
                return (
                  <div key={benefit.title} className="group flex flex-col items-start space-y-4 rounded-none border border-[var(--border)] p-8 transition-all hover:bg-white hover:shadow-xl dark:hover:bg-neutral-900">
                    <div className="flex h-12 w-12 items-center justify-center bg-black text-white transition-transform group-hover:scale-110 dark:bg-white dark:text-black">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground group-hover:text-black dark:group-hover:text-white">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* Pricing Section */}
        <section className="bg-background px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-medium text-foreground sm:text-4xl">Choose your contribution</h2>
              <p className="text-muted-foreground">Directly support our mission and get full access.</p>
            </div>

            <div className="mx-auto md:mx-auto md:max-w-4xl md:grid-cols-2">
              {contributionTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={cn(
                    "relative flex flex-col rounded-none border-2 bg-background transition-all hover:shadow-xl",
                  )}
                >
                  {/* Header */}
                  <div className="p-8 pb-0">
                    <p className="text-2xl font-semibold text-foreground">{tier.name}</p>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                      <span className="ml-1 text-sm text-muted-foreground">/ month</span>
                    </div>
                    <p className="mt-4 text-base text-muted-foreground">{tier.description}</p>
                  </div>
                  {/* Features */}
                  <div className="flex-1 p-8">
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                          <Check className="h-5 w-5 shrink-0 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Footer - NO grey background */}
                  <div className="p-8 pt-0 bg-background">
                    <Button
                      asChild
                      className={cn(
                        "w-ful rounded-none py-6 text-lg font-medium transition-all active:scale-[0.98]",
                      )}
                    >
                      <Link href="/membership/checkout" className="flex items-center gap-2">
                        Get Started <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-center text-sm text-muted-foreground">
              Payments are handled via Telebirr or CBE. You'll upload your receipt for verification.
            </p>
          </div>
        </section>

        {/* Transparency Section - How money is used */}
        <section className="bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
                Transparency <br />
                <span className="text-muted-foreground">in every contribution.</span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We believe in being good stewards of the resources entrusted to us. Your membership dues are 100% reinvested into the ministry to improve the quality of worship training for all.
              </p>
              <div className="flex items-center gap-4 rounded-none border border-[var(--border)] p-6 bg-transparent">
                <ShieldCheck className="h-10 w-10 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Accountable & Transparent</p>
                  <p className="text-sm text-muted-foreground">Every cent is tracked and used for ministry growth.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {moneyUsage.map((usage) => (
                <div key={usage.title} className="space-y-3 rounded-none border border-[var(--border)] p-6 transition-colors hover:border-neutral-400">
                  <div className="h-1 w-12 bg-black dark:bg-white" />
                  <h4 className="font-semibold uppercase tracking-wider text-sm">{usage.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {usage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-black py-24 text-white dark:bg-white dark:text-black">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-8 text-4xl font-medium">Ready to join the movement?</h2>
            <p className="mb-10 text-xl text-white/70 dark:text-black/70">
              Start your membership today and help us raise a new generation of worshipers.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-none border-white px-10 py-8 text-xl hover:bg-white hover:text-black dark:border-black dark:hover:bg-black dark:hover:text-white"
            >
              <Link href="/membership/checkout">Continue to Membership</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
