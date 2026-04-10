import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { GroupCompaniesSection } from "@/components/sections/group-companies-section";
import { ProductsShowcaseSection } from "@/components/sections/products-showcase-section";
import { ServicesOverviewSection } from "@/components/sections/services-overview-section";
import { SiteFooterSection } from "@/components/sections/site-footer-section";
import { TestimonialsCtaSection } from "@/components/sections/testimonials-cta-section";

export default function HomePage() {
  return (
    <>
      <div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      <HeroSection />
      <ServicesOverviewSection />
      <ProductsShowcaseSection />
      <GroupCompaniesSection />
      <TestimonialsCtaSection />
      <SiteFooterSection />
    </>
  );
}
