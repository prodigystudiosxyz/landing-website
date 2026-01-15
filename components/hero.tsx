"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30 pointer-events-none" />

      {/* Scrolling Marquee */}
      <div className="absolute top-28 left-0 right-0 overflow-hidden py-4 opacity-20 select-none pointer-events-none -rotate-1 scale-105">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-[8rem] font-black tracking-tighter mx-8 text-primary">
            SOFTWARE • DESIGN • AI • INNOVATION • SOFTWARE • DESIGN • AI • INNOVATION •
          </span>
          <span className="text-[8rem] font-black tracking-tighter mx-8 text-primary">
            SOFTWARE • DESIGN • AI • INNOVATION • SOFTWARE • DESIGN • AI • INNOVATION •
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium text-accent">Award-Winning Digital Studio</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-5xl">
          Your generic website is{" "}
          <span className="gradient-text">costing you deals.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          We help ambitious companies replace underperforming websites with
          <span className="text-foreground font-medium"> conversion machines </span>
          that generate qualified leads and drive real growth.
        </p>

        {/* Value propositions */}
        <div className="flex flex-wrap gap-6 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Position above competition</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Generate qualified leads</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Convert visitors to customers</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => {
              const element = document.getElementById("contact")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-semibold inline-flex items-center gap-2 group"
          >
            Book a Free Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="border-border hover:bg-secondary bg-transparent rounded-full px-8 py-6 text-base font-semibold inline-flex items-center gap-2"
            onClick={() => {
              const element = document.getElementById("projects")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Play size={18} className="text-accent" />
            See Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">200%</div>
            <div className="text-sm text-muted-foreground">Avg. Revenue Growth</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
