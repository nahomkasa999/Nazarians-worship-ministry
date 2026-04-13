import { Divider } from "@/components/common/divider";
import Link from "next/link";

export function MissionSection() {
  return (
    <section className="mission" id="mission">
      <Divider />
      <div className="mission__body">
        {/* Uses .mission__label for the title styling */}
        <h2 className="mission__label">
          Our Mission
        </h2>

        {/* Uses .mission__text for the specific linear-gradient text clipping */}
        <p className="mission__text">
          {`Nazarian Worship Ministry is not a collective of performers, but a guild of worshippers. We believe that music is the vessel, but truth is the anchor.\n\nOur approach is clinical in its precision and visceral in its devotion. By stripping away the commercial veneers of contemporary ministry, we return to the structural beauty of sacred liturgy and prophetic expression.`}
        </p>
      </div>

      {/* Uses .mission__manifesto for uppercase, tracking, and the 25% padding alignment */}
      <Link href="/manifesto" className="mission__manifesto">
        READ OUR FULL MANIFESTO
      </Link>
    </section>
  );
}

export default MissionSection;