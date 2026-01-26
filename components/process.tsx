"use client"

import { Calendar, CheckCircle2, Clock, Rocket, Sparkles } from "lucide-react"

const steps = [
    {
        days: "Day 1–2",
        title: "Kickoff & alignment",
        description: "You send us your brand assets, content, and goals. We confirm scope, timeline, and pricing upfront.",
        icon: Clock,
    },
    {
        days: "Day 3–6",
        title: "First build",
        description: "We design and build your site structure, layout, and core pages.",
        icon: Sparkles,
    },
    {
        days: "Day 7–10",
        title: "Refinement",
        description: "We polish design and performance. Three structured feedback rounds baked in.",
        icon: CheckCircle2,
    },
    {
        days: "Day 11–14",
        title: "Final approval & launch",
        description: "Hosting setup, QA, and go-live. Your site is ready for the world.",
        icon: Rocket,
    },
]

const feedbackRounds = [
    "Initial layout and direction",
    "Design and content refinement",
    "Final polish before launch",
]

export function Process() {
    return (
        <section id="process" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                        How this works <span className="text-muted-foreground/60">(we don’t hide our process)</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Launch-ready websites in 10–14 days. No mystery, just execution.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={index} className="relative group">
                                <div className="bg-secondary/50 border border-border rounded-3xl p-8 h-full hover-lift">
                                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="text-accent" size={24} />
                                    </div>
                                    <div className="text-sm font-bold text-accent mb-2">{step.days}</div>
                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                                        <div className="w-8 h-px bg-border" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Feedback Rounds */}
                <div className="bg-accent text-accent-foreground rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-black mb-6">
                                Three chances to get it right
                            </h3>
                            <p className="text-accent-foreground/80 text-lg mb-8">
                                You’ll have 3 structured feedback rounds baked into the process.
                                Enough flexibility to dial it in, enough structure to keep things moving.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {feedbackRounds.map((round, index) => (
                                <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                                    <div className="w-8 h-8 bg-white text-accent rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <span className="font-medium">{round}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
