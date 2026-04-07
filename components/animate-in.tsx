"use client"

import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

interface AnimateInProps {
    children: ReactNode
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    fullWidth?: boolean
    className?: string
    distance?: number
}

export function AnimateIn({
    children,
    delay = 0,
    direction = "up",
    fullWidth = false,
    className = "",
    distance = 30
}: AnimateInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -distance : direction === "right" ? distance : 0,
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
            scale: direction === "none" ? 0.95 : 1,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
        >
            {children}
        </motion.div>
    )
}
