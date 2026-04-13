import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-6 py-10">
      <section className="w-full max-w-xl text-center">
        <p className="text-6xl font-bold tracking-tight text-foreground">404</p>
        <h1 className="mt-3 text-2xl font-semibold text-foreground">Page not found</h1>
        <Link
          href="/"
          className="mt-6 inline-block border border-foreground px-5 py-2 text-sm font-medium text-foreground"
        >
          Return to landing page
        </Link>
      </section>
    </main>
  );
}
