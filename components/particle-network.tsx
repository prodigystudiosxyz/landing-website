"use client"

import { useEffect, useRef } from "react"

export function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        // Configuration
        const CONNECTION_DISTANCE = 140
        const MOUSE_RADIUS = 220
        // Light indigo / accent color: #6366f1 (99, 102, 241)
        const COLOR_R = 99
        const COLOR_G = 102
        const COLOR_B = 241

        // Mouse state
        let mouse = { x: -1000, y: -1000 }

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            radius: number
            baseRadius: number

            constructor(width: number, height: number) {
                this.x = Math.random() * width
                this.y = Math.random() * height
                this.vx = (Math.random() - 0.5) * 0.6
                this.vy = (Math.random() - 0.5) * 0.6
                this.baseRadius = Math.random() * 1.5 + 1
                this.radius = this.baseRadius
            }

            update(width: number, height: number) {
                this.x += this.vx
                this.y += this.vy

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1
                if (this.y < 0 || this.y > height) this.vy *= -1

                // Mouse interaction (repel gently and connect)
                const dx = mouse.x - this.x
                const dy = mouse.y - this.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < MOUSE_RADIUS) {
                    // Push away slightly
                    const forceDirectionX = dx / distance
                    const forceDirectionY = dy / distance
                    const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS
                    // Dampen force
                    this.x -= forceDirectionX * force * 1.5
                    this.y -= forceDirectionY * force * 1.5

                    // swell slightly when near mouse
                    this.radius = this.baseRadius + (force * 1.5)
                } else {
                    this.radius = this.baseRadius
                }
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${COLOR_R}, ${COLOR_G}, ${COLOR_B}, 0.6)`
                ctx.fill()
            }
        }

        const init = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.offsetWidth
                canvas.height = parent.offsetHeight
            } else {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            }

            particles = []
            // Density based on screen size
            const density = Math.floor((canvas.width * canvas.height) / 14000)
            const count = Math.min(density, 120) // Limit to prevent lag

            for (let i = 0; i < count; i++) {
                particles.push(new Particle(canvas.width, canvas.height))
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p) => {
                p.update(canvas.width, canvas.height)
                p.draw()
            })

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < CONNECTION_DISTANCE) {
                        const opacity = 1 - distance / CONNECTION_DISTANCE
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(${COLOR_R}, ${COLOR_G}, ${COLOR_B}, ${opacity * 0.25})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                }

                // Connections to mouse
                const dxMouse = particles[i].x - mouse.x
                const dyMouse = particles[i].y - mouse.y
                const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
                if (distanceMouse < CONNECTION_DISTANCE * 1.5) {
                    const opacity = 1 - distanceMouse / (CONNECTION_DISTANCE * 1.5)
                    ctx.beginPath()
                    ctx.moveTo(particles[i].x, particles[i].y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.strokeStyle = `rgba(${COLOR_R}, ${COLOR_G}, ${COLOR_B}, ${opacity * 0.4})`
                    ctx.lineWidth = 1
                    ctx.stroke()
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        init()
        animate()

        const handleResize = () => {
            init()
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        const handleMouseLeave = () => {
            mouse.x = -1000
            mouse.y = -1000
        }

        window.addEventListener("resize", handleResize)
        // Bind to window to ensure we catch all movements over the section nicely
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseout", handleMouseLeave)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseout", handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.85]"
            style={{
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
            }}
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
            />
        </div>
    )
}
