"use client";

import { type FormEvent, useMemo, useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import type { MembershipPaymentMethod, MembershipPaymentMethodId } from "@/lib/config/membership-payment-methods";
import { createMembershipRequest } from "@/lib/api/membership-client";
import { parseMembershipValidationDetails, readApiErrorMessage, type MembershipRequestFieldKey } from "@/lib/api/error-message";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronRight, ChevronLeft, CreditCard, User, ClipboardList, Loader2, LogIn, MessageCircle } from "lucide-react";
import { normalizeEthiopianMobile } from "@/lib/validation/ethiopian-phone";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm text-destructive mt-1" role="alert">
      {message}
    </p>
  );
}

type MembershipCheckoutFormProps = {
  paymentMethods: MembershipPaymentMethod[];
  paymentAmountBirr?: number | null;
};

export function MembershipCheckoutForm({
  paymentMethods,
  paymentAmountBirr = null,
}: MembershipCheckoutFormProps) {
  const { data, isPending } = useSession();
  const user = data?.user;

  const [currentStep, setCurrentStep] = useState(0); // 0: Auth, 1: Details, 2: Payment, 3: Success
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<MembershipPaymentMethodId>("telebirr");
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<MembershipRequestFieldKey, string>>>({});

  // Sync user data once it's loaded
  useEffect(() => {
    if (user) {
      setFullName((prev) => prev || user.name || "");
      setEmail((prev) => prev || user.email || "");
    }
  }, [user]);

  // Clean up object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const phoneValid = useMemo(() => normalizeEthiopianMobile(phone) !== null, [phone]);

  const supportUrl =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_MEMBERSHIP_SUPPORT_URL
      ? process.env.NEXT_PUBLIC_MEMBERSHIP_SUPPORT_URL
      : "https://t.me/Eba_B";

  const clearFieldError = (key: MembershipRequestFieldKey) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const nextStep = () => {
    setErrorMessage("");
    setFieldErrors({});
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setErrorMessage("");
    setFieldErrors({});
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (currentStep < 2) {
      nextStep();
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setFieldErrors({});

    if (!paymentProof) {
      setIsSubmitting(false);
      setFieldErrors({ paymentProof: "Upload a screenshot of your payment confirmation." });
      setErrorMessage("Please upload payment proof to continue.");
      return;
    }

    const response = await createMembershipRequest(
      {
        fullName,
        email,
        phone,
        telegram: telegram.trim() || undefined,
        message,
        paymentMethod,
      },
      paymentProof,
    );

    setIsSubmitting(false);

    if (response.error) {
      const errObj = response.error as { details?: unknown; error?: string; message?: string };
      const parsed = parseMembershipValidationDetails(errObj.details);
      setFieldErrors(parsed.fieldErrors);

      if (parsed.formErrors.length > 0) {
        setErrorMessage(parsed.formErrors.join(" "));
      } else if (Object.keys(parsed.fieldErrors).length > 0) {
        setErrorMessage("Please correct the highlighted fields.");
      } else {
        setErrorMessage(readApiErrorMessage(response.error, "Failed to submit request."));
      }
      return;
    }

    setCurrentStep(3); // Success
  };

  if (isPending) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress Stepper */}
      {currentStep < 3 && (
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {[
              { id: 0, label: "Account", icon: User },
              { id: 1, label: "Details", icon: ClipboardList },
              { id: 2, label: "Payment", icon: CreditCard },
            ].map((s, idx) => (
              <div key={s.id} className="flex flex-col items-center relative z-10 flex-1">
                <div 
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
                    currentStep >= s.id ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background text-muted-foreground"
                  )}
                >
                  <s.icon className="h-4 w-4" />
                </div>
                <span className={cn("mt-2 text-xs font-medium uppercase tracking-wider", currentStep >= s.id ? "text-foreground" : "text-muted-foreground")}>
                  {s.label}
                </span>
                {idx < 2 && (
                  <div className="absolute left-[50%] right-[-50%] top-5 h-[2px] bg-muted/50 -z-10">
                    <div 
                      className="h-full bg-primary transition-all duration-500" 
                      style={{ width: currentStep > s.id ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="overflow-hidden w-full">
        <div 
          className="flex transition-transform duration-500 ease-in-out w-full" 
          style={{ transform: `translateX(-${currentStep * 100}%)` }}
        >
          {/* STEP 1: AUTH / IDENTITY */}
          <div className="w-full flex-shrink-0 pt-2 pb-6 sm:pb-10">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h2 className="text-2xl font-medium tracking-tight">Verify Identity</h2>
                <p className="text-sm text-muted-foreground">Start by confirming your account details.</p>
              </div>

              {!user ? (
                <div className="rounded-lg border border-dashed p-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted/50">
                    <LogIn className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Not signed in</p>
                    <p className="text-sm text-muted-foreground">You need to be signed in to apply for membership.</p>
                  </div>
                  <Button asChild className="w-full h-12 text-base">
                    <Link href="/login?next=/membership/checkout">Sign in to continue</Link>
                  </Button>
                </div>
              ) : (
                <div className="rounded-lg border p-8 flex flex-col items-center text-center space-y-4 bg-muted/20">
                  <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-background shadow-sm">
                    {user.image ? (
                      <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-2xl font-semibold">
                        {user.name?.[0]?.toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <Badge variant="secondary" className="px-3">
                    Verified Member Account
                  </Badge>
                </div>
              )}

              <Button 
                onClick={nextStep} 
                disabled={!user} 
                className="w-full group h-12 text-base mt-4"
              >
                Continue to Details <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* STEP 2: DETAILS */}
          <div className="w-full flex-shrink-0 pt-2 pb-6 sm:pb-10">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h2 className="text-2xl font-medium tracking-tight">Personal Details</h2>
                <p className="text-sm text-muted-foreground">Tell us a bit more about yourself.</p>
              </div>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!phoneValid) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      phone:
                        "Enter a valid Ethiopian mobile number (e.g. 0912345678 or +251 91 234 5678).",
                    }));
                    return;
                  }
                  nextStep();
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      placeholder="Your full name"
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      type="email"
                      placeholder="you@example.com"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        clearFieldError("phone");
                      }}
                      onBlur={() => {
                        if (phone.trim() && !normalizeEthiopianMobile(phone)) {
                          setFieldErrors((prev) => ({
                            ...prev,
                            phone:
                              "Enter a valid Ethiopian mobile number (e.g. 0912345678 or +251 91 234 5678).",
                          }));
                        }
                      }}
                      placeholder="0912345678"
                      inputMode="tel"
                      autoComplete="tel"
                      className={cn(
                        "h-12",
                        (fieldErrors.phone || (phone.trim() && !phoneValid)) && "border-destructive"
                      )}
                      required
                    />
                    <FieldError id="phone-error" message={fieldErrors.phone} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Telegram (Optional)</label>
                    <Input 
                      value={telegram} 
                      onChange={(e) => setTelegram(e.target.value)} 
                      placeholder="@username"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Motivation (Optional)</label>
                  <Textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Why do you want to join Nazarian Worship Ministry?"
                    className="min-h-[100px] resize-y"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-12 text-base">
                    <ChevronLeft className="mr-1 h-4 w-4" /> Back
                  </Button>
                  <Button type="submit" disabled={!phoneValid} className="flex-[2] group h-12 text-base">
                    Next Step <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* STEP 3: PAYMENT */}
          <div className="w-full flex-shrink-0 pt-2 pb-6 sm:pb-10">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h2 className="text-2xl font-medium tracking-tight">Finalize Payment</h2>
                <p className="text-sm text-muted-foreground">Complete your monthly contribution.</p>
              </div>

              <div className="space-y-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {paymentMethods.map((m) => (
                    <div 
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={cn(
                        "cursor-pointer rounded-xl border p-5 transition-all",
                        paymentMethod === m.id 
                          ? "border-primary bg-primary/5 shadow-sm" 
                          : "border-border hover:border-primary/50 hover:bg-muted/30"
                      )}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-foreground">{m.label}</span>
                        <div className={cn(
                          "flex h-4 w-4 items-center justify-center rounded-full border", 
                          paymentMethod === m.id ? "border-primary" : "border-muted"
                        )}>
                          {paymentMethod === m.id && <div className="h-2 w-2 rounded-full bg-primary" />}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Account Name</p>
                        <p className="font-bold uppercase tracking-tight text-foreground text-sm">{m.accountName}</p>
                        <div className="pt-1" />
                        <p className="text-xs text-muted-foreground">Account Number</p>
                        <p className="text-lg font-bold text-foreground">{m.accountNumber}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-muted/40 p-4 text-sm text-foreground/80 border border-muted">
                  <p className="leading-relaxed">
                    Please deposit your monthly contribution to one of the accounts above. 
                    Once done, <span className="font-semibold text-foreground">take a screenshot</span> of the successful transaction and upload it below.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Upload Payment Proof</label>
                  <div className="rounded-md border border-rose-500/80 bg-rose-100 px-3 py-2 text-sm text-rose-900 dark:border-rose-700 dark:bg-rose-950/60 dark:text-rose-100">
                    Warning: the screenshot must show a transfer for exactly{" "}
                    <span className="font-semibold">
                      {typeof paymentAmountBirr === "number" && paymentAmountBirr > 0
                        ? `${paymentAmountBirr} ETB`
                        : "PAYMENT_AMOUNT_BIRR"}
                    </span>
                    .
                  </div>
                  <div className="relative">
                    <Input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setPaymentProof(file);
                        if (file) {
                          const newUrl = URL.createObjectURL(file);
                          setPreviewUrl(newUrl);
                        } else {
                          setPreviewUrl(null);
                        }
                        clearFieldError("paymentProof");
                      }}
                      className="cursor-pointer h-12"
                    />
                  </div>
                  {previewUrl && (
                    <div className="mt-3 rounded-lg border bg-muted/20 p-2 overflow-hidden flex justify-center">
                      <img 
                        src={previewUrl} 
                        alt="Payment proof preview" 
                        className="max-h-48 w-auto object-contain rounded-md shadow-sm" 
                      />
                    </div>
                  )}
                  <FieldError id="proof-error" message={fieldErrors.paymentProof || errorMessage} />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting} className="flex-1 h-12 text-base">
                    <ChevronLeft className="mr-1 h-4 w-4" /> Back
                  </Button>
                  <Button 
                    onClick={onSubmit} 
                    disabled={isSubmitting} 
                    className="flex-[2] h-12 text-base"
                  >
                    {isSubmitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : "Complete Registration"} 
                    {!isSubmitting && <CheckCircle2 className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4: SUCCESS */}
          <div className="w-full flex-shrink-0 pt-8 pb-6 sm:pb-16 text-center flex flex-col items-center justify-center">
            <div className="space-y-6 w-full max-w-sm mx-auto">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Application received</h2>
                <p className="text-muted-foreground text-sm">
                  Thank you for your commitment to Nazarian Worship Ministry.
                </p>
              </div>

              <div className="space-y-3 rounded-xl border border-muted/50 bg-muted/30 p-5 text-left text-sm leading-relaxed text-foreground/90">
                <p>
                  <span className="font-medium text-foreground">1.</span> Check your email for a confirmation message.
                </p>
                <p>
                  <span className="font-medium text-foreground">2.</span> Wait while our team verifies your payment—this often takes 24–48 hours.
                </p>
                <p>
                  <span className="font-medium text-foreground">3.</span> We will contact you once your membership is active.
                </p>
                <p>
                  <span className="font-medium text-foreground">4.</span> For support, message{" "}
                  <a
                    href={supportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-2"
                  >
                    @Eba_B
                  </a>{" "}
                  on Telegram.
                </p>
              </div>

              <Button asChild variant="outline" className="w-full h-12 text-base">
                <a href={supportUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact support on Telegram
                </a>
              </Button>

              <Button asChild className="w-full h-12 text-base">
                <Link href="/">Return to homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

