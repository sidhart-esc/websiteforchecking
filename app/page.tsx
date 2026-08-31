import HeroSection from '@/components/sections/HeroSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import PartnershipStrip from '@/components/sections/PartnershipStrip'
import AboutTeaser from '@/components/sections/AboutTeaser'
import CTAStrip from '@/components/sections/CTAStrip'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnershipStrip />
      <ServicesPreview />
      <PartnershipStrip variant="thin" />
      <AboutTeaser />
      <CTAStrip />
    </>
  )
}