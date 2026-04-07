import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { WhyCustom } from "@/components/why-custom"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { WhyUs } from "@/components/why-us"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <WhyCustom />
      <Services />
      <Process />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  )
}
