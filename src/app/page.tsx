import WithAppScreenshotOnDark from "@/components/blocks/heros/with-app-screenshot-on-dark";
import NubbleFinalCTA from "@/components/blocks/ctas/nubble-final-cta";
import { LandingAnchors } from "@/components/blocks/landing/LandingAnchors";
import { StickyNavbar } from "@/components/blocks/navbars/StickyNavbar";
import { SimpleFooterWithFourGrids } from "@/components/blocks/footers/simple-footer-with-four-grids";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#143638] to-black text-white antialiased">
      {/* Render StickyNavbar ONCE at root for persistent and proper sticky behavior */}
      <StickyNavbar />
      <WithAppScreenshotOnDark />
      <LandingAnchors />
      <NubbleFinalCTA />
      <SimpleFooterWithFourGrids />
    </main>
  );
}