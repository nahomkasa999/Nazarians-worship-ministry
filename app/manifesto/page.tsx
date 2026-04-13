import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function ManifestoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-5xl px-[var(--page-side)] py-10 sm:py-14">
          <h1 className="text-3xl font-semibold sm:text-5xl">Manifesto</h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Nazarian Worship is a ministry committed to biblical truth, reverence, and discipleship
            through worship and teaching.
          </p>

          <div className="mt-10 space-y-8 text-base leading-8 text-foreground sm:text-lg">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold sm:text-3xl">1. Worship as Formation</h2>
              <p>
                We reject performance-driven worship culture. Worship is not a stage product, but a
                discipleship practice that forms the heart, mind, and habits of believers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold sm:text-3xl">2. Truth Before Trend</h2>
              <p>
                We prioritize Scripture over fashion, substance over hype, and clarity over noise.
                Every song, sermon, and gathering should point to Christ and the authority of God’s
                word.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold sm:text-3xl">3. Excellence with Reverence</h2>
              <p>
                We pursue musical and teaching excellence, not for applause, but to serve the church
                faithfully. Precision is our discipline; reverence is our posture.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold sm:text-3xl">4. Community and Calling</h2>
              <p>
                We build a community where people are equipped, corrected, encouraged, and sent out.
                Worship and teaching are not events to attend only; they are callings to live.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold sm:text-3xl">5. Legacy of Faithfulness</h2>
              <p>
                Our goal is not short-term visibility but long-term faithfulness. We labor to pass
                biblical worship and sound teaching to the next generation with integrity.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
