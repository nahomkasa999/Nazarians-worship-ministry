import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { TeachingSection } from "@/components/sections/teaching-section";
import { BlogSection } from "@/components/sections/blog-section";
import { EventsSection } from "@/components/sections/events-section";
import { JoinSection } from "@/components/sections/join-section";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <HeroSection />
        <MissionSection />
        <TeachingSection />
        <BlogSection />
        <EventsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}