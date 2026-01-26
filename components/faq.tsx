"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Sparkles, Code2, ShieldCheck } from "lucide-react"

const faqs = [
    {
        question: "Do you just vibe code?",
        answer: (
            <div className="space-y-4">
                <p>Yes. And no.</p>
                <p>We use vibe coding to move fast where it makes sense—specifically, to get to a strong first draft quickly. This lets us rapidly explore layouts, validate direction early, and save days (sometimes weeks) of build time.</p>
                <p>But that’s not where it ends.</p>
            </div>
        ),
    },
    {
        question: "What happens after the first draft?",
        answer: (
            <div className="space-y-4">
                <p>Once the initial version is approved, our core team takes over. A team of young developers who are national champions in AI, data, and other technical fields, download the codebase and build the rest out properly.</p>
                <p>That means clean, maintainable code, performance optimization, and production-ready standards (not prototype hacks). You get the speed of modern tooling without the long-term risks.</p>
            </div>
        ),
    },
    {
        question: "Why does this matter?",
        answer: (
            <div className="space-y-4">
                <p>Vibe coding helps us go fast. Experienced developers make sure it lasts. The result: faster launches, higher quality builds, and a site your future team won’t hate touching. Speed upfront. Stability long-term.</p>
            </div>
        ),
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="py-24 bg-secondary/30">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black mb-6">FAQ’s</h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about how we build fast without cutting corners.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-background border border-border rounded-3xl overflow-hidden transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-secondary/50 transition-colors"
                            >
                                <span className="text-xl font-bold">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-accent" size={24} />
                                ) : (
                                    <ChevronDown className="text-muted-foreground" size={24} />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-6 lg:p-8 pt-0 border-t border-border bg-secondary/10">
                                    <div className="text-lg text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Summary */}
                <div className="mt-16 p-8 bg-accent text-accent-foreground rounded-3xl flex flex-col md:flex-row items-center gap-8">
                    <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full border-2 border-accent bg-white/10 flex items-center justify-center backdrop-blur-sm">
                            <Sparkles size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-accent bg-white/10 flex items-center justify-center backdrop-blur-sm">
                            <Code2 size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-accent bg-white/10 flex items-center justify-center backdrop-blur-sm">
                            <ShieldCheck size={20} />
                        </div>
                    </div>
                    <p className="text-lg font-medium text-center md:text-left">
                        This is how we deliver a polished website in under two weeks without cutting corners.
                    </p>
                </div>
            </div>
        </section>
    )
}
