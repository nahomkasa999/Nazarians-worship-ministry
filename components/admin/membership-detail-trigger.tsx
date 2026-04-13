"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type MembershipDetailTriggerProps = {
  fullName: string;
  email: string;
  phone: string;
  telegram?: string | null;
  message?: string | null;
  requestedAt: string;
};

export function MembershipDetailTrigger(props: MembershipDetailTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" size="sm" variant="outline" onClick={() => setOpen(true)}>
        View details
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
