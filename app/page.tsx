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
import { FadeInOnScroll } from "@/components/fade-in-on-scroll"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function Home() {
  return (
    <>
      <main className="min-h-screen font-sans pb-[calc(5.75rem+env(safe-area-inset-bottom))] md:pb-0">
        <HeroSection />
        <FadeInOnScroll delayIndex={0}>
          <ProblemSection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={1}>
          <SolutionSection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={2}>
          <FeaturesSection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={3}>
          <GrowthSection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={4}>
          <LecturersSection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={5}>
          <SubsidySection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={6}>
          <UniversitySection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={7}>
          <AppEventSection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={8}>
          <AboutMediaSection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={9}>
          <ContactSection />
        </FadeInOnScroll>
        <FadeInOnScroll delayIndex={10}>
          <PricingFooterSection />
        </FadeInOnScroll>
      </main>
      <MobileCtaBar />
    </>
  )
}
