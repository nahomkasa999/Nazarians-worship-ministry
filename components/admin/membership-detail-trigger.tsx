"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type MembershipDetailTriggerProps = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  telegram?: string | null;
  message?: string | null;
  requestedAt: string;
  paymentSubmittedAt?: string;
};

export function MembershipDetailTrigger(props: MembershipDetailTriggerProps) {
  const [open, setOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    void (async () => {
      try {
        const res = await fetch(`/api/admin/memberships/${props.id}/payment-proof`, {
          method: "GET",
        });
        const data = (await res.json()) as { signedUrl?: string; error?: string };
        if (cancelled) return;
        if (!res.ok || !data.signedUrl) {
          setPaymentError(data.error || "Could not load payment proof.");
          return;
        }
        setPaymentUrl(data.signedUrl);
      } catch {
        if (cancelled) return;
        setPaymentError("Could not load payment proof.");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open, props.id]);

  return (
    <>
      <Button type="button" size="sm" variant="outline" onClick={() => setOpen(true)}>
        View details
      </Button>
      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (next) {
            setPaymentUrl(null);
            setPaymentError(null);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{props.fullName}</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><span className="font-medium text-foreground">Email:</span> {props.email}</p>
            <p><span className="font-medium text-foreground">Phone:</span> {props.phone}</p>
            {props.telegram ? <p><span className="font-medium text-foreground">Telegram:</span> @{props.telegram}</p> : null}
            {props.message ? <p><span className="font-medium text-foreground">Message:</span> {props.message}</p> : null}
            <p><span className="font-medium text-foreground">Requested:</span> {props.requestedAt}</p>
            {props.paymentSubmittedAt ? (
              <p>
                <span className="font-medium text-foreground">Payment submitted:</span>{" "}
                {props.paymentSubmittedAt}
              </p>
            ) : null}
            <div className="space-y-2 pt-2">
              <p className="font-medium text-foreground">Payment proof</p>
              {paymentError ? (
                <p className="text-sm text-destructive">{paymentError}</p>
              ) : paymentUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={paymentUrl}
                  alt="Payment proof screenshot"
                  className="max-h-[70vh] w-full rounded-md border object-contain"
                />
              ) : (
                <p className="text-sm text-muted-foreground">Loading…</p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
