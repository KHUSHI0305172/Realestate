import { Hero } from "@/components/hero"
import { FeaturedProperties } from "@/components/featured-properties"
import { WhyChoose } from "@/components/why-choose"
import { AreasServed } from "@/components/areas-served"
import { CtaBanner } from "@/components/cta-banner"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F4EFE8]">
      <Hero />
      <FeaturedProperties />
      <WhyChoose />
      <AreasServed />
      <CtaBanner />
    </main>
  )
}
