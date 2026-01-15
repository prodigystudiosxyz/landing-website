"use client"

import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-secondary border-t border-border">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Stay in the loop
              </h3>
              <p className="text-muted-foreground">
                Get the latest insights on design, development, and growth strategies.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border rounded-full h-12 px-5 flex-1"
                required
              />
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 h-12 font-medium"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-foreground">Prodigy</span>
              <span className="text-xl font-bold text-accent ml-1">Studios</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              We build digital experiences that drive business growth.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Design & Branding
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Data Science
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  About Us
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Blog
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@prodigystudios.io"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@prodigystudios.io
                </a>
              </li>
              <li>
                <Button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  variant="outline"
                  className="border-border hover:bg-background rounded-full px-4 py-2 h-auto text-sm font-medium mt-2"
                >
                  Book a Call
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Prodigy Studios. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
