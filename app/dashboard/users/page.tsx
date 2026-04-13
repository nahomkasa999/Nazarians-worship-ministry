import { redirect } from "next/navigation";

/** @deprecated Use `/dashboard/memberships/approved` */
export default function DashboardUsersRedirectPage() {
  redirect("/dashboard/memberships/approved");
}
