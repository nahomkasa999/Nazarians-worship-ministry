import { MembershipCheckoutForm } from "@/components/membership/membership-checkout-form";
import {
  MEMBERSHIP_PAYMENT_AMOUNT_BIRR,
  MEMBERSHIP_PAYMENT_METHODS,
} from "@/lib/config/membership-payment-methods";
import { requireUserPage } from "@/lib/user-session";
import { db } from "@/lib/prisma";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function MembershipCheckoutPage() {
  const session = await requireUserPage("/membership/checkout");
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

  return (
    <div className="flex min-h-screen flex-col bg-background lg:flex-row">
      {/* Left Column: Context & Value Proposition */}
      <div className="relative flex-1 p-6 sm:p-12 lg:p-20 flex flex-col justify-between overflow-hidden text-white">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/membership-bg.png"
            alt="Ministry Impact Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto">
          <Link href="/membership" className="flex items-center text-sm font-medium text-white/80 hover:text-white mb-16 w-fit transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Membership
          </Link>
          
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6 leading-tight text-white">
                Partner with Nazarian Worship
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Your monthly contribution empowers us to train worshipers, produce spiritual resources, and organize transformative events across the nation.
              </p>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/20">
              <h3 className="font-medium text-sm text-white/90 uppercase tracking-wider">What your membership supports</h3>
              <ul className="space-y-4">
                {[
                  "Funding for ministry events and worship nights",
                  "Production of high-quality bilingual teachings",
                  "Training programs for aspiring worship leaders",
                  "Administrative and operational costs"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-white/80 items-start">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5 opacity-90" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Checkout Form */}
      <div className="flex-1 bg-background p-6 sm:p-12 lg:p-20 flex flex-col justify-center border-l">
        <div className="w-full max-w-xl mx-auto lg:mx-0">
          <MembershipCheckoutForm
            paymentMethods={MEMBERSHIP_PAYMENT_METHODS}
            paymentAmountBirr={MEMBERSHIP_PAYMENT_AMOUNT_BIRR}
          />
        </div>
      </div>
    </div>
  );
}
