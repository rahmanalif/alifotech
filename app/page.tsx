import { HeroSection } from "@/components/sections/hero-section";
import { ProductsShowcaseSection } from "@/components/sections/products-showcase-section";
import { ServicesOverviewSection } from "@/components/sections/services-overview-section";
import { SiteFooterSection } from "@/components/sections/site-footer-section";
import { TestimonialsCtaSection } from "@/components/sections/testimonials-cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverviewSection />
      <ProductsShowcaseSection />
      <TestimonialsCtaSection />
      <SiteFooterSection />
    </>
  );
}
