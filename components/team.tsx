"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
    {
        name: "Ibrahim Dayyan",
        role: "Co-Founder & Lead Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        bio: "Full-stack expert with a passion for building scalable digital solutions and high-performance web applications.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "Shaidozzaman Araf",
        role: "Co-Founder & Creative Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        bio: "Visionary designer focused on creating immersive user experiences and premium brand identities.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
]

export function Team() {
    return (
        <section id="team" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-accent tracking-wide uppercase mb-3">Our Team</h2>
                    <p className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-6">
                        Meet the <span className="gradient-text">minds</span> behind the magic
                    </p>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A small, elite team of developers and designers dedicated to pushing the boundaries of what's possible on the web.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="group relative bg-card border border-border rounded-3xl p-8 hover-lift"
                        >
                            <div className="relative w-32 h-32 mb-8 mx-auto">
                                <div className="absolute inset-0 bg-accent/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent/10">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                                <p className="text-accent font-medium mb-4">{member.role}</p>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {member.bio}
                                </p>

                                <div className="flex justify-center gap-4">
                                    <a
                                        href={member.social.twitter}
                                        className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        <Twitter size={20} />
                                    </a>
                                    <a
                                        href={member.social.linkedin}
                                        className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href={member.social.github}
                                        className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
