import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { GrowthSection } from "@/components/growth-section"
import { LecturersSection } from "@/components/lecturers-section"
import { SubsidySection } from "@/components/subsidy-section"
import { UniversitySection } from "@/components/university-section"
import { AppEventSection } from "@/components/app-event-section"
import { AboutMediaSection } from "@/components/about-media-section"
import { ContactSection } from "@/components/contact-section"
import { PricingFooterSection } from "@/components/pricing-footer-section"

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <GrowthSection />
      <LecturersSection />
      <SubsidySection />
      <UniversitySection />
      <AppEventSection />
      <AboutMediaSection />
      <ContactSection />
      <PricingFooterSection />
    </main>
  )
}
