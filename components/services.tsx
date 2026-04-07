"use client"

import { motion } from "framer-motion"
import { AnimateIn } from "@/components/animate-in"

const websiteServices = [
  {
    title: "High-Conversion Campaigns",
    description: "Seamless payment flows to maximize your fundraising potential.",
  },
  {
    title: "Audience Engagement",
    description: "Publishing tools designed to capture and retain attention.",
  },
  {
    title: "Operational Dashboards",
    description: "Real-time analytics and data visualization tailored to your mission.",
  },
  {
    title: "Frictionless Transactions",
    description: "Integrated storefronts and scheduling to streamline your services.",
  },
]

const mlServices = [
  {
    title: "Predictive Algorithms",
    description: "Deliver personalized experiences that intuitively anticipate user needs.",
  },
  {
    title: "Data-Driven Forecasting",
    description: "Transform raw data into strategic foresight for informed decision-making.",
  },
  {
    title: "Intelligent Assistants",
    description: "Always-on conversational AI to scale your support unhindered.",
  },
  {
    title: "Process Automation",
    description: "Eliminate manual overhead with resilient, autonomous workflows.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as any,
    },
  },
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-background">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <AnimateIn>
            <h2 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] max-w-3xl">
              Digital foundations <br className="hidden sm:block" />
              <span className="gradient-text">built for scale.</span>
            </h2>
          </AnimateIn>
        </div>

        {/* Two groups */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Website Systems */}
          <div>
            <AnimateIn delay={0.2} direction="right">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl lg:text-3xl font-bold">
                  Platform Engineering
                </h3>
              </div>
            </AnimateIn>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4 lg:gap-6"
            >
              {websiteServices.map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-500 hover:bg-card/60 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <h4 className="font-[var(--font-heading)] font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ML Systems */}
          <div>
            <AnimateIn delay={0.4} direction="left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455-2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl lg:text-3xl font-bold">
                  Machine Intelligence
                </h3>
              </div>
            </AnimateIn>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4 lg:gap-6"
            >
              {mlServices.map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-500 hover:bg-card/60 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <h4 className="font-[var(--font-heading)] font-semibold text-lg text-foreground mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
