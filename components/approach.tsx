"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into understanding your business, goals, and challenges to craft a strategic roadmap.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our design team creates intuitive, user-centric solutions that align with your vision and objectives.",
  },
  {
    number: "03",
    title: "Development & Innovation",
    description: "We build robust, scalable solutions using cutting-edge technologies and industry best practices.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description: "Rigorous testing and optimization ensure your solution performs flawlessly from day one.",
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Our Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A proven methodology that delivers results, every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="text-5xl font-bold text-accent/20 mb-2">{step.number}</div>
                <CardTitle className="text-2xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
