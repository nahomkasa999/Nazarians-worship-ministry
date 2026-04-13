"use client";

import { type FormEvent, useState } from "react";
import { submitMembershipRequest } from "@/lib/api/community-memberships-client";
import {
  parseMembershipValidationDetails,
  readApiErrorMessage,
  type MembershipRequestFieldKey,
} from "@/lib/api/error-message";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm text-destructive" role="alert">
      {message}
    </p>
  );
}

export function MembershipRequestForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<MembershipRequestFieldKey, string>>
  >({});

  const clearFieldError = (key: MembershipRequestFieldKey) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    setFieldErrors({});

    const response = await submitMembershipRequest({
      fullName,
      email,
      phone,
      telegram: telegram.trim() || undefined,
      message,
    });

    setIsSubmitting(false);

    if (response.error) {
      const errObj = response.error as {
        details?: unknown;
        error?: string;
        message?: string;
      };
      const parsed = parseMembershipValidationDetails(errObj.details);
      setFieldErrors(parsed.fieldErrors);

      if (parsed.formErrors.length > 0) {
        const base = parsed.formErrors.join(" ");
        setErrorMessage(
          Object.keys(parsed.fieldErrors).length > 0 ?
            `${base} Please also check the highlighted fields.`
          : base,
        );
      } else if (Object.keys(parsed.fieldErrors).length > 0) {
        setErrorMessage("Please correct the highlighted fields.");
      } else {
        setErrorMessage(readApiErrorMessage(response.error, "Failed to submit request."));
      }
      return;
    }

    setFullName("");
    setEmail("");
    setPhone("");
    setTelegram("");
    setMessage("");
    setFieldErrors({});
    setSuccessMessage("Membership request submitted. Our admin team will review it soon.");
  };

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Join Our Community</CardTitle>
        <CardDescription>
          Fill in your details and submit your membership request.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="membership-fullName">
              Full name
            </label>
            <Input
              id="membership-fullName"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
                clearFieldError("fullName");
              }}
              placeholder="John Doe"
              required
              aria-invalid={!!fieldErrors.fullName}
              aria-describedby={
                fieldErrors.fullName ? "membership-fullName-error" : undefined
              }
              className={cn(fieldErrors.fullName && "border-destructive")}
            />
            <FieldError id="membership-fullName-error" message={fieldErrors.fullName} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="membership-email">
              Email
            </label>
            <Input
              id="membership-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                clearFieldError("email");
              }}
              placeholder="you@example.com"
              required
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "membership-email-error" : undefined}
              className={cn(fieldErrors.email && "border-destructive")}
            />
            <FieldError id="membership-email-error" message={fieldErrors.email} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="membership-phone">
              Phone (Ethiopian mobile)
            </label>
            <Input
              id="membership-phone"
              type="tel"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                clearFieldError("phone");
              }}
              placeholder="0912345678"
              inputMode="tel"
              autoComplete="tel"
              required
              aria-invalid={!!fieldErrors.phone}
              aria-describedby={fieldErrors.phone ? "membership-phone-error" : undefined}
              className={cn(fieldErrors.phone && "border-destructive")}
            />
            <p className="text-xs text-muted-foreground">
              Ethiopian mobile, e.g. 0912345678, 0712345678, or +251 91 234 5678.
            </p>
            <FieldError id="membership-phone-error" message={fieldErrors.phone} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="membership-telegram">
              Telegram (optional)
            </label>
            <Input
              id="membership-telegram"
              value={telegram}
              onChange={(event) => {
                setTelegram(event.target.value);
                clearFieldError("telegram");
              }}
              placeholder="@username or username"
              autoComplete="off"
              aria-invalid={!!fieldErrors.telegram}
              aria-describedby={
                fieldErrors.telegram ? "membership-telegram-error" : undefined
              }
              className={cn(fieldErrors.telegram && "border-destructive")}
            />
            <p className="text-xs text-muted-foreground">
              Username, @handle, or a t.me link. We may use this after approval.
            </p>
            <FieldError id="membership-telegram-error" message={fieldErrors.telegram} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="membership-message">
              Message (optional)
            </label>
            <Textarea
              id="membership-message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                clearFieldError("message");
              }}
              placeholder="Tell us a bit about yourself."
              className="min-h-24"
              aria-invalid={!!fieldErrors.message}
              aria-describedby={
                fieldErrors.message ? "membership-message-error" : undefined
              }
            />
            <FieldError id="membership-message-error" message={fieldErrors.message} />
          </div>
          {errorMessage ? (
            <p className="text-sm text-destructive" role="alert">
              {errorMessage}
            </p>
          ) : null}
          {successMessage ? <p className="text-sm text-emerald-600">{successMessage}</p> : null}
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? "Submitting..." : "Submit request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
