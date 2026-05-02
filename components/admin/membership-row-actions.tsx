"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { approveMembership, rejectMembershipWithReason } from "@/lib/api/admin-memberships-client";
import { readApiErrorMessage } from "@/lib/api/error-message";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";

type MembershipRowActionsProps = {
  id: string;
};

export function MembershipRowActions({ id }: MembershipRowActionsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  const runApprove = async () => {
    setIsLoading(true);
    const response = await approveMembership(id);
    setIsLoading(false);

    if (response.error) {
      toast.error(readApiErrorMessage(response.error, "Failed to approve membership."));
      return;
    }

    const data = response.data;
    if (data?.email && !data.email.sent) {
      toast.warning(`Approved, but the welcome email was not sent: ${data.email.message}`);
    } else {
      toast.success("Membership approved. Welcome email was accepted for delivery.");
    }
    setApproveOpen(false);
    router.refresh();
  };

  const runReject = async () => {
    setIsLoading(true);
    const response = await rejectMembershipWithReason(id, rejectReason.trim() || undefined);
    setIsLoading(false);

    if (response.error) {
      toast.error(readApiErrorMessage(response.error, "Failed to reject membership."));
      return;
    }

    toast.success("Membership rejected.");
    setRejectOpen(false);
    setRejectReason("");
    router.refresh();
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button size="sm" type="button" onClick={() => setApproveOpen(true)} disabled={isLoading}>
          Approve
        </Button>
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => setRejectOpen(true)}
          disabled={isLoading}
        >
          Reject
        </Button>
      </div>

      <AlertDialog open={approveOpen} onOpenChange={setApproveOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Approve membership</AlertDialogTitle>
            <AlertDialogDescription>
              Approve this membership request? They will be marked as approved and can proceed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
            <Button type="button" disabled={isLoading} onClick={() => void runApprove()}>
              {isLoading ? "Working…" : "Approve"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={rejectOpen} onOpenChange={setRejectOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject membership</AlertDialogTitle>
            <AlertDialogDescription>
              Reject this request? You can optionally include a reason. If provided, it will be emailed to the applicant.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="reject-reason">
              Reason (optional)
            </label>
            <Textarea
              id="reject-reason"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Explain why the request was rejected (optional)."
              disabled={isLoading}
              className="min-h-24"
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
            <Button
              type="button"
              variant="destructive"
              disabled={isLoading}
              onClick={() => void runReject()}
            >
              {isLoading ? "Working…" : "Reject"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
