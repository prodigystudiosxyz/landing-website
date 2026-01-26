"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
    "Fixed scope & deliverables",
    "No hourly billing",
    "No surprise add-ons",
    "Launch-ready in 14 days",
    "3 feedback rounds",
    "CMS setup included",
]

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Copy */}
                    <div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">
                            Transparent pricing, <span className="gradient-text">always</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                            You’ll know the cost before we start. No mystery pricing, no surprise invoices.
                            Simple packages for teams who want results, not creative chaos.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check size={12} className="text-accent" />
                                    </div>
                                    <span className="text-foreground font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={() => {
                                const element = document.getElementById("contact")
                                element?.scrollIntoView({ behavior: "smooth" })
                            }}
                            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-semibold inline-flex items-center gap-2 group"
                        >
                            Start your build
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Right - Pricing Card */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-transparent blur-3xl rounded-[4rem] opacity-50" />
                        <div className="relative bg-card border-2 border-accent rounded-[2.5rem] p-10 lg:p-16 shadow-2xl">
                            <div className="mb-8">
                                <span className="text-sm font-bold uppercase tracking-wider text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                                    Starting From
                                </span>
                            </div>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-7xl lg:text-8xl font-black tracking-tighter">£250</span>
                                <span className="text-xl text-muted-foreground">/project</span>
                            </div>
                            <p className="text-lg text-muted-foreground mb-10">
                                Perfect for startups and small teams who need a professional, high-converting website live fast.
                            </p>
                            <div className="space-y-4 pt-8 border-t border-border">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Timeline</span>
                                    <span className="font-bold">10–14 Days</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Scope</span>
                                    <span className="font-bold">Fixed & Clear</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Revisions</span>
                                    <span className="font-bold">3 Rounds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
