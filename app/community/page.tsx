import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { MembershipRequestForm } from "@/components/community/membership-request-form";

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1 px-4 py-8 sm:py-12">
        <section className="mx-auto w-full max-w-5xl space-y-3 pb-6 text-center sm:pb-8">
          <h1 className="text-2xl font-semibold sm:text-4xl">Community Membership</h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Submit your request to become a member. Admins can review and approve requests from
            the dashboard.
          </p>
        </section>
        <MembershipRequestForm />
      </main>
      <Footer />
    </div>
  );
}
