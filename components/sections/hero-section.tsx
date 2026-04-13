import { figmaAssets } from "@/content/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="w-full relative">
        {/* Uses .hero__rule from global.css */}
        <div className="hero__rule" />

        {/* Uses .hero__headline from global.css */}
        <h1 className="hero__headline">
          Spreading The Heart of Worship
        </h1>

        {/* Uses .hero__sub from global.css */}
        <p className="hero__sub">
          A ministry dedicated to restoring the authentic biblical essence of worship though music,
          teaching, and community alignment.
        </p>

        {/* Uses .hero__actions from global.css */}
        <div className="hero__actions">
          {/* Note: Ensure your shadcn/ui Button component accepts 'className'
            to override its internal styles with these global classes.
          */}
          <Button className="btn btn--primary" asChild>
            <Link href="/community">
            JOIN OUR MINISTRY
            </Link>
          </Button>
        </div>
      </div>

      {/* Uses .hero__img-wrap from global.css */}
      <div className="hero__img-wrap">
        <img
          src={figmaAssets.imgHeroImage}
          alt="Nazarian Worship congregation"
        />
      </div>
    </section>
  );
}

export default HeroSection;
