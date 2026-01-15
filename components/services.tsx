"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Code2, Palette, Brain, Sparkles, ArrowRight } from "lucide-react"

const services = [
  {
    id: "software",
    label: "Software",
    icon: Code2,
    title: "Software Development",
    description:
      "We build high-performance software solutions that scale with your business and drive measurable results.",
    features: [
      "Full-Stack Development",
      "API Design & Integration",
      "Cloud Architecture",
      "Mobile Applications",
      "DevOps & CI/CD",
      "Performance Optimization",
      "Security Audits",
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
    title: "Design & Branding",
    description:
      "We design clear, scalable brands and interfaces that help companies earn trust and convert faster.",
    features: [
      "UI/UX Design",
      "Brand Identity",
      "Website Design",
      "Motion Design",
      "Design Systems",
      "Prototyping",
      "User Research",
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "We build custom AI solutions that automate processes, predict outcomes, and unlock insights from your data.",
    features: [
      "Custom ML Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Integration",
      "Data Pipeline Design",
      "Model Training & Tuning",
    ],
  },
]

export function Services() {
  const [activeTab, setActiveTab] = useState("software")
  const activeService = services.find((s) => s.id === activeTab)!

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Full Stack Studio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of services designed to solve complex business challenges and accelerate your digital transformation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-background rounded-full p-1.5 border border-border">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === service.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <Icon size={18} />
                  {service.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Service Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">{activeService.title}</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {activeService.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {activeService.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => {
                const element = document.getElementById("contact")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-semibold inline-flex items-center gap-2 group"
            >
              Discuss Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Visual Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                {(() => {
                  const Icon = activeService.icon
                  return <Icon className="text-accent" size={40} />
                })()}
              </div>
              <div className="space-y-6">
                {activeService.features.slice(0, 4).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-accent font-bold">{index + 1}</span>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
