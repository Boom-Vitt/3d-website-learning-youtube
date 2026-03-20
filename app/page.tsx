import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero'
import { LogosSection } from '@/components/sections/logos'
import { FeaturesSection } from '@/components/sections/features'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { PricingSection } from '@/components/sections/pricing'
import { CtaSection } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="pt-16">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
