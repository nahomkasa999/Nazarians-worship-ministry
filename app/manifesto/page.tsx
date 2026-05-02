import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function ManifestoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-5xl px-[var(--page-side)] py-10 sm:py-14">
          <h1 className="text-3xl font-semibold sm:text-5xl">Manifesto</h1>
          
          <div className="mt-10 space-y-6 text-base leading-8 text-foreground sm:text-lg max-w-4xl">
            <p>
              Nazarian Worship Ministry is not a collective of performers, but a guild of worshippers. 
              We believe that music is the vessel, but truth is the anchor. Our approach is clinical 
              in its precision and visceral in its devotion. By stripping away the commercial veneers 
              of contemporary ministry, we return to the structural beauty of sacred liturgy and 
              prophetic expression.
            </p>

            <p>
              We reject the modern inclination toward performance-driven spectacle, recognizing that 
              when the spotlight shines too brightly on the individual, the divine reflection is 
              obscured. In our guild, the musician is a secondary architect; our primary duty is 
              the construction of an environment where the transcendent can be encountered without 
              the interference of ego. We view our craft as a discipline of subtraction—removing the 
              noise of trends to reveal the resonance of the eternal.
            </p>

            <p>
              Every arrangement is a calculated response to the weight of the Word. We do not seek 
              to entertain the senses, but to orient the spirit. By honoring the rigorous foundations 
              of historical liturgy while making space for spontaneous prophetic utterance, we create 
              a bridge between ancient reverence and immediate revelation. For us, excellence is not 
              a pursuit of applause, but a prerequisite for service. We offer nothing less than a 
              precise, sacrificial expression of devotion, ensuring that every note serves the 
              singular purpose of magnifying the Truth.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}