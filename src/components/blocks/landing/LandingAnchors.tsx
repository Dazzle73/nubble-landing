import { DishScanAnimationFeature } from "@/components/blocks/feature-sections/dish-scan-animation-feature";
import WithProductScreenshot from "@/components/blocks/feature-sections/with-product-screenshot";
import WithLargeScreenshotOnDark from "@/components/blocks/feature-sections/with-large-screenshot-on-dark";
import NubbleBenefitsTable from "@/components/blocks/feature-sections/nubble-benefits-table";
import ThreeTiersWithToggleOnDark from "@/components/blocks/pricing/three-tiers-with-toggle-on-dark";
import NubbleTestimonials from "@/components/blocks/testimonials/nubble-testimonials";
import NubbleFAQ from "@/components/blocks/faqs/nubble-faq";

export const LandingAnchors = () => {
  return (
    <div className="min-h-screen">
      {/* Features Section */}
      <div id="features" className="relative top-10"></div>
      <section className="py-24 px-6 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            <NubbleBenefitsTable />
            <DishScanAnimationFeature />
            <WithProductScreenshot />
            <WithLargeScreenshotOnDark />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing" className="relative top-24"></div>
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ThreeTiersWithToggleOnDark />
        </div>
      </section>

      {/* Reviews Section */}
      <div id="reviews" className="relative top-10"></div>
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <NubbleTestimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq" className="relative top-24"></div>
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <NubbleFAQ />
        </div>
      </section>
    </div>
  );
};