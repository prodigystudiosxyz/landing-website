"use client"

import { motion, Variants } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const chartData = [
    { name: "Own Dedicated Platform", value: 28, color: "#a855f7" }, // purple-500
    { name: "Rely on Social Media / Templates", value: 72, color: "#1e293b" } // slate-800
]

const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
}

const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

export function WhyCustom() {
    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Background glowing gradients */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariant}
                    className="max-w-3xl mb-16 lg:mb-24"
                >
                    <motion.h2 variants={itemVariant} className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground leading-[1.05]">
                        Why a <span className="gradient-text">Custom Website?</span>
                    </motion.h2>

                    <motion.p variants={itemVariant} className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                        In an era of generic themes and rented social media space, owning your digital platform is the ultimate competitive advantage.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariant}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {/* The Chart Card */}
                    <motion.div variants={itemVariant} className="lg:col-span-2 bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2rem] p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 lg:gap-12 hover:bg-card/60 transition-colors duration-500">
                        <div className="w-56 h-56 flex-shrink-0 relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        innerRadius={70}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                        startAngle={90}
                                        endAngle={-270}
                                        cornerRadius={4}
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#f8fafc' }}
                                        itemStyle={{ color: '#f8fafc' }}
                                        formatter={(value: number) => [`${value}%`, 'Organizations']}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-4xl font-bold font-[var(--font-heading)] text-foreground">28%</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] mb-4 text-foreground">
                                Are you the 28%?
                            </h3>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                Research shows only 28% of modern organizations truly own their custom digital platforms. The remaining 72% surrender their audience to unpredictable social algorithms and rigid templates.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                    <span className="text-sm font-medium text-foreground">Custom Platform (28%)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                                    <span className="text-sm font-medium text-muted-foreground">Rented Space (72%)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Absolute Control Card */}
                    <motion.div variants={itemVariant} className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-end relative overflow-hidden group hover:bg-card/60 transition-colors duration-500">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="flex-1" />
                        <h3 className="text-2xl lg:text-3xl font-bold font-[var(--font-heading)] mb-4 text-foreground relative z-10">
                            Absolute Control
                        </h3>
                        <p className="text-muted-foreground leading-relaxed relative z-10">
                            No unexpected plugin updates breaking your site. No sudden platform subscription fee hikes. Pure architectural control engineered exactly for your workflow.
                        </p>
                    </motion.div>

                    {/* Brand Identity Card */}
                    <motion.div variants={itemVariant} className="lg:col-span-3 bg-gradient-to-br from-card/40 to-accent/5 backdrop-blur-sm border border-border/50 rounded-[2rem] p-8 lg:p-16 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 group-hover:bg-accent/20 transition-colors duration-700" />

                        <div className="max-w-4xl">
                            <h3 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
                                Your Identity. <br className="hidden sm:block" />
                                <span className="text-muted-foreground">Undiluted.</span>
                            </h3>
                            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                                Templates force you to cram your vision into someone else's box. A bespoke website ensures your brand speaks with its true voice, commanding authority from the first pixel to the final click.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
