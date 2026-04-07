"use client"

import { AnimateIn } from "@/components/animate-in"

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <div>
          <AnimateIn>
            <h2 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Ready to build something <br />
              <span className="gradient-text">extraordinary?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Let's translate your vision into a scalable, high-performance platform. Just tell us what you're working on, and we will figure out the rest.
            </p>
          </AnimateIn>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <AnimateIn delay={0.4} direction="none">
            <a
              href="mailto:hello@prodigystudios.io"
              className="inline-flex items-center gap-3 bg-foreground text-background rounded-md px-8 py-5 text-lg font-medium hover:bg-foreground/90 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Start a conversation
              <svg
                className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </AnimateIn>
        </div>

        {/* Reassurance */}
        <AnimateIn delay={0.6}>
          <div className="mt-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              We reply within 24 hours. No sales pitch, just strategy.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
