"use client"

import { useEffect, useRef } from "react"

export function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Reveal the container itself
                        entry.target.classList.add("revealed")

                        // Reveal all children with .reveal or .reveal-scale
                        const children = entry.target.querySelectorAll(".reveal, .reveal-scale")
                        children.forEach((child) => {
                            child.classList.add("revealed")
                        })
                    }
                })
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return ref
}
