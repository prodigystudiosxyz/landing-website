"use client"

import { motion } from "framer-motion"
import { AnimateIn } from "@/components/animate-in"

const statements = [
    {
        heading: "Absolute Ownership.",
        body: "No vendor lock-in or proprietary traps. Your code, your data, your strategic assets.",
    },
    {
        heading: "Radical Clarity.",
        body: "No jargon, no hand-waving. You'll always know exactly what we are building, and why.",
    },
    {
        heading: "Engineered for Longevity.",
        body: "We architect systems tailored for your future trajectory, not just launching the MVP.",
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as any,
        },
    },
}

export function WhyUs() {
    return (
        <section id="why-us" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <AnimateIn>
                        <h2 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                            Uncompromising Standards. <br className="hidden sm:block" />
                            <span className="gradient-text">Delivered.</span>
                        </h2>
                    </AnimateIn>
                </div>

                {/* Statements Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8 text-left"
                >
                    {statements.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <div className="group relative h-full bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:bg-card/60 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/30 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:text-indigo-400">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                                <div className="relative z-10 h-full flex flex-col justify-end mt-16 text-left">
                                    <h3 className="font-[var(--font-heading)] text-2xl lg:text-3xl font-bold tracking-tight mb-4 text-foreground group-hover:text-indigo-400 transition-colors duration-300">
                                        {item.heading}
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {item.body}
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
