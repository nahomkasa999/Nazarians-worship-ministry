"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { approveMembership, rejectMembership } from "@/lib/api/admin-memberships-client";
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

type MembershipRowActionsProps = {
  id: string;
};

export function MembershipRowActions({ id }: MembershipRowActionsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);

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
    const response = await rejectMembership(id);
    setIsLoading(false);

    if (response.error) {
      toast.error(readApiErrorMessage(response.error, "Failed to reject membership."));
      return;
    }

    toast.success("Membership rejected.");
    setRejectOpen(false);
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
              Reject this request? You can still see past activity; the applicant stays out of the approved list.
            </AlertDialogDescription>
          </AlertDialogHeader>
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
