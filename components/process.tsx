"use client"

import { motion } from "framer-motion"
import { AnimateIn } from "@/components/animate-in"

const processSteps = [
    {
        number: "01",
        title: "Strategic Discovery",
        description: "We listen to what you need. No assumptions, no filler meetings.",
    },
    {
        number: "02",
        title: "Precision Engineering",
        description: "We design and develop your product — fast, focused, no wasted effort.",
    },
    {
        number: "03",
        title: "Iterative Polish",
        description: "We refine based on your feedback until the product feels exactly right.",
    },
    {
        number: "04",
        title: "Sustainable Growth",
        description: "We set you up for scale. You own everything, and we remain available.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as any,
        },
    },
}

export function Process() {
    return (
        <section id="process" className="py-24 lg:py-32 relative overflow-hidden text-foreground">
            {/* Background elements */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="mb-16 lg:mb-24 text-center max-w-4xl mx-auto">
                    <AnimateIn direction="down">
                        <h2 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                            Our methodology. <br />
                            <span className="gradient-text">Built for precision.</span>
                        </h2>
                    </AnimateIn>
                </div>

                {/* Steps */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {processSteps.map((step, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <div className="group relative h-full bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 transition-all duration-500 hover:bg-card/60 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                <div className="relative z-10">
                                    <span className="font-[var(--font-heading)] text-6xl font-bold block mb-8 text-foreground/10 group-hover:text-accent/20 transition-colors duration-500">
                                        {step.number}
                                    </span>
                                    <h3 className="font-[var(--font-heading)] text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
