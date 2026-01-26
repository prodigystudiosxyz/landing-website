"use client"

import { Check, X, Users, Target } from "lucide-react"

const whoThisIsFor = [
    "Startups with branding done, but no site",
    "Companies replatforming or redesigning fast",
    "Teams tired of slow agencies and vague timelines",
    "Founders who want clarity, not creative chaos",
]

const whoThisIsntFor = [
    "Businesses still figuring out their brand",
    "Projects that need months of strategy",
    "Teams who want unlimited revisions",
]

export function Audience() {
    return (
        <section id="audience" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                        Is this for you?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        If speed, clarity, and execution matter, you’re in the right place.
                        We’re fast because we’re focused.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Who this is for */}
                    <div className="bg-secondary/30 border border-border rounded-3xl p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                                <Users className="text-accent" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Who this is for</h3>
                        </div>
                        <ul className="space-y-6">
                            {whoThisIsFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check size={14} className="text-accent" />
                                    </div>
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who this isn't for */}
                    <div className="bg-background border border-border rounded-3xl p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center">
                                <Target className="text-muted-foreground" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Who this isn't for</h3>
                        </div>
                        <ul className="space-y-6">
                            {whoThisIsntFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X size={14} className="text-muted-foreground" />
                                    </div>
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
