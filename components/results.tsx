"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, Zap } from "lucide-react"

const projects = [
    {
        title: "TechVenture Platform Redesign",
        description: "Helping a SaaS startup increase conversions by 240% with strategic design",
        tags: ["UI/UX Design", "Web Development", "Branding"],
        stat: "240%",
        statLabel: "Conversion Increase",
    },
    {
        title: "DataFlow ML Infrastructure",
        description: "Building scalable machine learning pipelines for enterprise analytics",
        tags: ["Machine Learning", "Cloud Architecture", "API Design"],
        stat: "$2M+",
        statLabel: "Cost Savings",
    },
    {
        title: "CloudScale Mobile App",
        description: "Full-stack mobile development from concept to App Store launch",
        tags: ["Mobile App", "Backend", "Product Design"],
        stat: "50K+",
        statLabel: "Active Users",
    },
    {
        title: "NexaAI Brand Identity",
        description: "Complete brand transformation for an AI-powered automation company",
        tags: ["Branding", "Design System", "Marketing"],
        stat: "Series A",
        statLabel: "Funding Raised",
    },
]

function ProjectCard({
    title,
    description,
    tags,
    stat,
    statLabel,
}: {
    title: string
    description: string
    tags: string[]
    stat: string
    statLabel: string
}) {
    return (
        <div className="group bg-card border border-border rounded-3xl p-8 hover-lift cursor-pointer">
            <div className="flex items-start justify-between mb-6">
                <div className="bg-accent/10 rounded-xl px-4 py-2">
                    <span className="text-2xl font-bold text-accent">{stat}</span>
                    <p className="text-xs text-muted-foreground">{statLabel}</p>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <ArrowUpRight size={20} />
                </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-muted-foreground mb-6">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs font-medium bg-secondary px-3 py-1.5 rounded-full text-muted-foreground"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export function Results() {
    return (
        <section id="results" className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                            <Zap size={16} className="text-accent" />
                            <span className="text-sm font-medium text-accent">Selected Work</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
                            See Our Results
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Work that drove business growth. Real results from real clients.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="border-border hover:bg-secondary bg-transparent rounded-full px-6 py-3 font-medium inline-flex items-center gap-2 self-start lg:self-auto"
                    >
                        View All Projects
                        <ArrowUpRight size={16} />
                    </Button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
