import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/common/social-icon";
import Link from "next/link";

export function JoinSection() {
  return (
    <section className="join-block" id="join">
      <div className="join-block__inner">
        {/* Uses .join-block__headline for font, size, and uppercase */}
        <h2 className="join-block__headline">
          STAY IN<br />THE LIGHT
        </h2>

        {/* Uses .join-block__sub for the text styling */}
        <p className="join-block__sub">
          Join our weekly teaching sessions and be part of a community dedicated to spiritual growth and biblical truth. We meet in-person and online to explore the depths of worship together.
        </p>

        <div className="join-block__actions">
          {/* Replaced hardcoded styles with .btn classes */}
          <Button className="btn btn--secondary" asChild>
            <Link href="/community">Join Us</Link>
          </Button>

          <div className="flex gap-4">
            {/* The .social-icon class in your CSS handles size and hover states */}
            <SocialIcon platform="Telegram" className="social-icon" />
            <SocialIcon platform="YouTube" className="social-icon" />
            <SocialIcon platform="TikTok" className="social-icon" />
            <SocialIcon platform="Facebook" className="social-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinSection;