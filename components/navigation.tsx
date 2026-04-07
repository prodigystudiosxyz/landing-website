"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrolled(currentScrollY > 50)

    // Hide nav when scrolling down past 300px, but not if menu is open
    if (currentScrollY > 300 && !isOpen) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }, [isOpen])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Show nav if mouse is near the top 60px of the screen
    if (e.clientY < 60) {
      setHidden(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleScroll, handleMouseMove])

  // Update hidden state when menu opens
  useEffect(() => {
    if (isOpen) {
      setHidden(false)
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? "w-[min(90vw,720px)]" : "w-[min(90vw,800px)]"
          } ${hidden ? "-translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <div
          className={`glass rounded-md px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? "shadow-lg shadow-black/20" : ""
            }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 group">
            <span className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-foreground">
              Prodigy
            </span>
            <span className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-accent group-hover:opacity-80 transition-opacity">
              Studios
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium bg-foreground text-background rounded-md px-5 py-2 hover:bg-foreground/90 transition-colors duration-300"
            >
              Start a conversation
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${isOpen ? "max-h-[320px] mt-2" : "max-h-0"
            }`}
        >
          <div className="glass rounded-md px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium bg-foreground text-background rounded-md px-5 py-2.5 text-center hover:bg-foreground/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Start a conversation
            </a>
          </div>
        </div>
      </nav>
      {/* Invisible trigger area at top of screen to help mouse hover detection even when nav is pushed up */}
      <div
        className="fixed top-0 left-0 w-full h-8 z-40 pointer-events-auto"
        onMouseEnter={() => setHidden(false)}
      />
    </>
  )
}
