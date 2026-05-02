import { redirect } from "next/navigation";
import { RegisterForm } from "./register-form";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const q = await searchParams;
  const next = q.next ?? "/members";

  if (next === "/dashboard" || next.startsWith("/dashboard/")) {
    redirect(`/login?next=${encodeURIComponent(next)}`);
  }

  return <RegisterForm defaultNext={next} />;
}
