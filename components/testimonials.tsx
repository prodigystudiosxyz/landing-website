"use client"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVenture",
    content:
      "Prodigy Studios transformed our entire digital strategy. Their holistic approach delivered results that exceeded our expectations.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, DataFlow",
    content:
      "The ML solutions they built have saved us thousands in operational costs. Truly exceptional team.",
  },
  {
    name: "Elena Kowalski",
    role: "Product Lead, CloudScale",
    content:
      "From concept to launch, their attention to detail and expertise was remarkable. Highly recommended.",
  },
  {
    name: "David Park",
    role: "CTO, NexaAI",
    content:
      "Working with Prodigy Studios is like therapy meets business. They help connect the dots and align vision with execution.",
  },
  {
    name: "Amina Hassan",
    role: "Director, FinTech Global",
    content:
      "The speed at which they deliver is absurd, and the quality is always top-notch. A pleasure to work with.",
  },
  {
    name: "James Liu",
    role: "Co-founder, ScaleUp",
    content:
      "More than their professionalism, I'm touched by how they interacted with us at every stage of our engagement.",
  },
]

function TestimonialCard({ name, role, content }: { name: string; role: string; content: string }) {
  return (
    <div className="flex-shrink-0 w-[400px] p-8 bg-card border border-border rounded-2xl mx-4 hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-accent font-bold text-lg">{name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-foreground leading-relaxed">&ldquo;{content}&rdquo;</p>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Trusted by innovative companies across industries to deliver exceptional results.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>Auto-scrolling</span>
          </div>
        </div>
      </div>

      {/* First row - scrolls left */}
      <div className="relative mb-8">
        <div className="flex animate-marquee">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} {...testimonial} />
          ))}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-duplicate-${index}`} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Second row - scrolls right */}
      <div className="relative">
        <div className="flex animate-marquee-reverse">
          {[...testimonials].reverse().map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} {...testimonial} />
          ))}
          {[...testimonials].reverse().map((testimonial, index) => (
            <TestimonialCard key={`row2-duplicate-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
