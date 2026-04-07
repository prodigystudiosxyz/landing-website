"use client"

import { ArrowRight } from "lucide-react"
import { InteractiveDemo } from "@/components/interactive-demo"
import { ParticleNetwork } from "@/components/particle-network"
import { AnimateIn } from "@/components/animate-in"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Background Section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background">
        {/* Animated dynamic gradients */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-accent/10 rounded-md blur-[120px] animate-[float_10s_ease-in-out_infinite]" />
        <div
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-md blur-[120px] animate-[float_12s_ease-in-out_infinite_reverse]"
          style={{ animationDelay: "-4s" }}
        />

        {/* Neural Network / Particle Graph */}
        <ParticleNetwork />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-start text-left">
          <AnimateIn direction="up" delay={0.2} distance={40}>
            <h1 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
              Software built for
              <br />
              <span className="gradient-text">the work that matters.</span>
            </h1>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.4} distance={30}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              We help charities, NGOs, and mission-driven organizations scale their impact through reliable technology. From donation platforms to volunteer management systems, we handle the tech so you can focus on your cause.
            </p>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.6} distance={20}>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-foreground text-background rounded-md px-8 py-4 text-base font-medium hover:bg-foreground/90 transition-all duration-300 group shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </AnimateIn>
        </div>

        {/* Right Column - Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full min-h-[400px] lg:min-h-[460px]"
        >
          <InteractiveDemo />
        </motion.div>
      </div>
    </section>
  )
}
