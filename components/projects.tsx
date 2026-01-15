"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "E-commerce Revolution",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2064&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "AI Analytics Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Fintech Mobile App",
        category: "Mobile Development",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "SaaS Marketing Site",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        link: "#",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-base font-semibold text-accent tracking-wide uppercase mb-3">Portfolio</h2>
                        <p className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
                            Projects <span className="gradient-text">Completed</span>
                        </p>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-md">
                        A showcase of our latest work, where creativity meets technical excellence to deliver outstanding results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-card border border-border cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform">
                                <div>
                                    <p className="text-accent font-medium mb-2">{project.category}</p>
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black -rotate-45 group-hover:rotate-0 transition-transform">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
