"use client"

import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight } from "lucide-react"

const whatWeDontDo = [
    "We don’t do your brand (no logo design, no strategy)",
    "No naming workshops or creative brainstorming",
    "No unlimited revisions that slow projects down",
    "No mystery pricing or hourly billing surprises",
]

const whatWeDoWell = [
    "Clean, modern, high-performance website design",
    "Fast, responsive builds that work on all devices",
    "Clear messaging hierarchy that converts visitors",
    "SEO-ready foundations and easy-to-manage CMS",
]

export function Comparison() {
    return (
        <section className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                        What we don’t do <span className="text-muted-foreground/60">(on purpose)</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Branding slows projects down. We assume you already know who you are. We just make you look good online.
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Typical Agency */}
                    <div className="bg-background border border-border rounded-3xl p-8 lg:p-10">
                        <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-8">
                            <X size={16} className="text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">What we don't do</span>
                        </div>
                        <ul className="space-y-6">
                            {whatWeDontDo.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X size={14} className="text-muted-foreground" />
                                    </div>
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Prodigy Studios */}
                    <div className="bg-card border-2 border-accent rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
                                <Check size={16} className="text-accent" />
                                <span className="text-sm font-medium text-accent">What we do exceptionally well</span>
                            </div>
                            <ul className="space-y-6">
                                {whatWeDoWell.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check size={14} className="text-accent" />
                                        </div>
                                        <span className="text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Button
                                    onClick={() => {
                                        const element = document.getElementById("contact")
                                        element?.scrollIntoView({ behavior: "smooth" })
                                    }}
                                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 py-3 font-medium inline-flex items-center gap-2 group"
                                >
                                    Book a kickoff call
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Achievements */}
                <div className="bg-background border border-border rounded-3xl p-8 lg:p-12">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                        What Our Clients Achieve
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">Grow revenue by 60–240%</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">Generate buzz and media attention</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">Attract top talent and scale teams</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">2× qualified leads from website</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">Dominate competition and grow market share</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">Raise additional rounds of funding</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
