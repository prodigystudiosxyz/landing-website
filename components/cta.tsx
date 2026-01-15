"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { ArrowRight, Calendar, Mail, MessageSquare } from "lucide-react"

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ready to transform your digital presence? Let's hop on a call and see if we're a good fit.
              No pressure, no obligation — just a conversation about your goals.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Calendar className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Free 30-Minute Strategy Call</p>
                  <p className="text-sm text-muted-foreground">No commitment required</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Custom Solutions</p>
                  <p className="text-sm text-muted-foreground">Tailored to your unique needs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Quick Response</p>
                  <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
            <p className="text-muted-foreground mb-8">
              Or email us directly at{" "}
              <a href="mailto:hello@prodigystudios.io" className="text-accent hover:underline">
                hello@prodigystudios.io
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border rounded-xl h-12 px-4"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border rounded-xl h-12 px-4"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border rounded-xl min-h-32 px-4 py-3 resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-6 text-base font-semibold inline-flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
