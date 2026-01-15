import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Projects } from "@/components/projects"
import { Comparison } from "@/components/comparison"
import { Team } from "@/components/team"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Testimonials />
      <Services />
      <Results />
      <Projects />
      <Comparison />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
