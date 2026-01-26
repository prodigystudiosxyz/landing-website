import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Comparison } from "@/components/comparison"
import { Audience } from "@/components/audience"
import { Projects } from "@/components/projects"
import { Team } from "@/components/team"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Testimonials />
      <Process />
      <Pricing />
      <Comparison />
      <Audience />
      <Projects />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
