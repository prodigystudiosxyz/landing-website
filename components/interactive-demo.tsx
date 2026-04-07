"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    MessageSquare,
    Search,
    GitBranch,
    Layers,
    Code2,
    Rocket,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    Terminal,
    Database,
    Globe,
    Cpu,
    Zap,
    BarChart3,
} from "lucide-react"

/* ─── Phase definitions ─── */
const phases = [
    {
        id: "input",
        label: "Your Cause",
        icon: MessageSquare,
        color: "#6366f1",
        lines: [
            "We need a platform to...",
            "manage 2,000+ volunteers and...",
            "handle recurring donations securely...",
        ],
    },
    {
        id: "analyze",
        label: "We Analyze",
        icon: Search,
        color: "#818cf8",
        modules: [
            { name: "Volunteer Portal", status: "mapped" },
            { name: "Donation API", status: "mapped" },
            { name: "Admin Panel", status: "mapped" },
            { name: "Impact Tracking", status: "mapped" },
        ],
    },
    {
        id: "architect",
        label: "We Architect",
        icon: GitBranch,
        color: "#a78bfa",
        layers: [
            { name: "Client Facing", icon: Globe, tech: "Next.js" },
            { name: "Core Logic", icon: Terminal, tech: "Node.js" },
            { name: "Secure Storage", icon: Database, tech: "PostgreSQL" },
            { name: "Payment Gateway", icon: Zap, tech: "Stripe" },
        ],
    },
    {
        id: "build",
        label: "We Build",
        icon: Code2,
        color: "#6366f1",
        codeLines: [
            "const platform = initSystem({",
            "  volunteers: setupPortal(),",
            "  donations: securePayments(),",
            "  analytics: trackImpact(),",
            "});",
            "",
            "await platform.launch();",
        ],
    },
    {
        id: "launch",
        label: "Making Impact",
        icon: Rocket,
        color: "#22c55e",
        metrics: [
            { label: "Uptime", value: "99.9%", icon: CheckCircle2 },
            { label: "Security", value: "Locked", icon: Zap },
            { label: "Volunteers", value: "2k+", icon: BarChart3 },
        ],
    },
]

const phaseDurations = [3400, 2800, 2800, 3200, 3400]

/* ─── Typing hook ─── */
function useTypingEffect(text: string, isActive: boolean, speed = 35) {
    const [displayed, setDisplayed] = useState("")
    useEffect(() => {
        if (!isActive) {
            setDisplayed("")
            return
        }
        let i = 0
        setDisplayed("")
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayed(text.slice(0, i + 1))
                i++
            } else {
                clearInterval(interval)
            }
        }, speed)
        return () => clearInterval(interval)
    }, [text, isActive, speed])
    return displayed
}

/* ─── Sub-components for each phase ─── */

function PhaseInput({ active }: { active: boolean }) {
    const line0 = useTypingEffect(phases[0].lines![0], active, 30)
    const line1 = useTypingEffect(phases[0].lines![1], active, 30)
    const line2 = useTypingEffect(phases[0].lines![2], active, 30)
    const [lineIndex, setLineIndex] = useState(0)

    useEffect(() => {
        if (!active) {
            setLineIndex(0)
            return
        }
        const t1 = setTimeout(() => setLineIndex(1), 1200)
        const t2 = setTimeout(() => setLineIndex(2), 2400)
        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
        }
    }, [active])

    const lines = [line0, line1, line2]

    return (
        <div className="w-full space-y-3">
            <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground font-[var(--font-heading)] font-bold tracking-wide uppercase">
                    Organization Goal
                </span>
            </div>
            <div className="bg-background/90 border border-border shadow-sm rounded-md p-4 font-sans text-sm space-y-2 min-h-[120px]">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: i <= lineIndex ? 1 : 0 }}
                        className="text-foreground/80"
                    >
                        {i <= lineIndex ? line : ""}
                        {i === lineIndex && active && (
                            <span className="inline-block w-[2px] h-4 bg-accent ml-0.5 animate-cursor align-middle" />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

function PhaseAnalyze({ active }: { active: boolean }) {
    return (
        <div className="w-full space-y-3">
            <div className="flex items-center gap-2 mb-4">
                <Search className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground font-[var(--font-heading)] font-bold tracking-wide uppercase">
                    Analysis
                </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {phases[1].modules!.map((mod, i) => (
                    <motion.div
                        key={mod.name}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={
                            active
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.8, y: 10 }
                        }
                        transition={{ delay: i * 0.15, duration: 0.4 }}
                        className="bg-background/90 border border-border shadow-md rounded-md p-3 flex items-center gap-2"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={active ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                        >
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                        </motion.div>
                        <span className="text-xs font-medium text-foreground/80">
                            {mod.name}
                        </span>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={active ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="h-[2px] bg-gradient-to-r from-accent to-accent/30 rounded-full mt-3"
            />
        </div>
    )
}

function PhaseArchitect({ active }: { active: boolean }) {
    return (
        <div className="w-full space-y-3">
            <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground font-[var(--font-heading)] font-bold tracking-wide uppercase">
                    Architecture
                </span>
            </div>
            <div className="space-y-2">
                {phases[2].layers!.map((layer, i) => {
                    const Icon = layer.icon
                    return (
                        <motion.div
                            key={layer.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                                active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                            }
                            transition={{ delay: i * 0.12, duration: 0.4 }}
                            className="flex items-center gap-3 bg-background/90 border border-border shadow-sm rounded-md px-3 py-2.5"
                        >
                            <Icon className="w-4 h-4 text-accent/70" />
                            <span className="text-xs font-medium text-foreground/80 flex-1">
                                {layer.name}
                            </span>
                            <span className="text-[10px] font-[var(--font-heading)] font-medium text-muted-foreground bg-accent/10 px-2 py-0.5 rounded-md">
                                {layer.tech}
                            </span>
                            {active && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        delay: i * 0.12 + 0.4,
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                </motion.div>
                            )}
                        </motion.div>
                    )
                })}
            </div>
            {/* Connection lines */}
            <div className="flex justify-center">
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                        active ? { height: 20, opacity: 1 } : { height: 0, opacity: 0 }
                    }
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="w-[1px] bg-accent/30"
                />
            </div>
        </div>
    )
}

function PhaseBuild({ active }: { active: boolean }) {
    return (
        <div className="w-full space-y-3">
            <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground font-[var(--font-heading)] font-bold tracking-wide uppercase">
                    Building
                </span>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="ml-auto flex items-center gap-1"
                    >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-[10px] text-green-500 font-mono">
                            compiling
                        </span>
                    </motion.div>
                )}
            </div>
            <div className="bg-[#1a1a2e] rounded-md p-4 font-mono text-xs space-y-1 min-h-[120px] overflow-hidden">
                {phases[3].codeLines!.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                            active ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                        }
                        transition={{ delay: i * 0.12, duration: 0.3 }}
                        className="flex"
                    >
                        <span className="text-muted-foreground/40 w-5 text-right mr-3 select-none">
                            {line ? i + 1 : ""}
                        </span>
                        <span>
                            {line.includes("const") && (
                                <>
                                    <span className="text-purple-400">const </span>
                                    <span className="text-blue-300">
                                        {line.replace("const ", "").split(" =")[0]}
                                    </span>
                                    <span className="text-foreground/60">
                                        {" "}
                                        = {line.split("= ")[1]}
                                    </span>
                                </>
                            )}
                            {line.includes("auth:") && (
                                <span className="text-green-400 ml-4">{line.trim()}</span>
                            )}
                            {line.includes("ai:") && (
                                <span className="text-blue-400 ml-4">{line.trim()}</span>
                            )}
                            {line.includes("analytics:") && (
                                <span className="text-yellow-400 ml-4">{line.trim()}</span>
                            )}
                            {line.includes("});") && (
                                <span className="text-foreground/60">{line}</span>
                            )}
                            {line.includes("await") && (
                                <>
                                    <span className="text-purple-400">await </span>
                                    <span className="text-orange-300">app.deploy()</span>
                                    <span className="text-foreground/60">;</span>
                                </>
                            )}
                        </span>
                    </motion.div>
                ))}
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-center gap-1 mt-2 pt-2 border-t border-foreground/10"
                    >
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                        <span className="text-green-400">Build successful</span>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

function PhaseLaunch({ active }: { active: boolean }) {
    return (
        <div className="w-full space-y-3">
            <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-4 h-4 text-green-500" />
                <span className="text-xs text-muted-foreground font-[var(--font-heading)] font-bold tracking-wide uppercase">
                    Deployed
                </span>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="ml-auto flex items-center gap-1"
                    >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] text-green-500 font-mono">live</span>
                    </motion.div>
                )}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {phases[4].metrics!.map((metric, i) => {
                    const Icon = metric.icon
                    return (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 15, scale: 0.9 }}
                            animate={
                                active
                                    ? { opacity: 1, y: 0, scale: 1 }
                                    : { opacity: 0, y: 15, scale: 0.9 }
                            }
                            transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                            className="bg-background/90 border border-border shadow-sm rounded-md p-3 text-center"
                        >
                            <Icon className="w-4 h-4 text-accent mx-auto mb-2" />
                            <div className="text-lg font-bold text-foreground font-[var(--font-heading)]">
                                {metric.value}
                            </div>
                            <div className="text-[10px] text-muted-foreground mt-0.5">
                                {metric.label}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            {/* Success bar */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center gap-2 mt-3 bg-green-500/10 border border-green-500/50 shadow-sm rounded-md py-2 px-3"
            >
                <Sparkles className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs font-medium text-green-600">
                    Your product is live
                </span>
            </motion.div>
        </div>
    )
}

/* ─── Main Component ─── */
export function InteractiveDemo() {
    const [mounted, setMounted] = useState(false)
    const [activePhase, setActivePhase] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

    const [progress, setProgress] = useState(0)

    // Ensure client side mounting for framer-motion loading consistency
    useEffect(() => {
        setMounted(true)
    }, [])

    // Auto-cycle through phases precisely synced with the progress bar
    useEffect(() => {
        if (!mounted) return

        let startTime = Date.now()
        let animationFrameId: number

        const updateProgress = () => {
            const elapsed = Date.now() - startTime
            const duration = phaseDurations[activePhase]
            const nextProgress = Math.min(100, (elapsed / duration) * 100)

            setProgress(nextProgress)

            if (nextProgress < 100) {
                animationFrameId = requestAnimationFrame(updateProgress)
            } else {
                setActivePhase((prev) => (prev + 1) % phases.length)
            }
        }

        animationFrameId = requestAnimationFrame(updateProgress)
        return () => cancelAnimationFrame(animationFrameId)
    }, [activePhase, mounted])

    // Track mouse for parallax
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
        })
    }, [])

    const phaseComponents = [
        PhaseInput,
        PhaseAnalyze,
        PhaseArchitect,
        PhaseBuild,
        PhaseLaunch,
    ]

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-full flex flex-col"
        >
            {/* Subtle parallax glow that follows cursor */}
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
                    filter: "blur(40px)",
                }}
                animate={{
                    x: mousePos.x * 100 - 50,
                    y: mousePos.y * 100 - 50,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />

            {/* Phase timeline at top */}
            <div className="flex items-center gap-1 mb-6 w-full relative z-10">
                {phases.map((phase, i) => {
                    const Icon = phase.icon
                    const isActive = i === activePhase
                    const isPast = i < activePhase
                    return (
                        <button
                            key={phase.id}
                            onClick={() => setActivePhase(i)}
                            className="flex-1 group cursor-pointer"
                        >
                            <div className="flex flex-col items-center gap-1.5">
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.15 : 1,
                                        opacity: isActive || isPast ? 1 : 0.4,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon
                                        className="w-4 h-4"
                                        style={{
                                            color: isActive
                                                ? phase.color
                                                : isPast
                                                    ? "#22c55e"
                                                    : undefined,
                                        }}
                                    />
                                </motion.div>
                                <span
                                    className={`text-[10px] font-[var(--font-heading)] font-bold tracking-wider transition-colors duration-300 ${isActive
                                        ? "text-foreground"
                                        : isPast
                                            ? "text-green-600"
                                            : "text-muted-foreground"
                                        }`}
                                >
                                    {phase.label}
                                </span>
                            </div>
                            {/* Progress line */}
                            <div className="h-[2px] mt-2 bg-border/30 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        background: phase.color,
                                        width: isPast ? "100%" : isActive ? `${progress}%` : "0%"
                                    }}
                                />
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Main demo area */}
            <div className="flex-1 relative z-10 glass border-2 border-border/80 shadow-md rounded-md p-5 overflow-hidden min-h-[220px]">
                {/* Window chrome bar */}
                <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-border/50">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    <span className="ml-3 text-[10px] font-mono text-muted-foreground/50">
                        prodigystudios.dev
                    </span>
                </div>

                <AnimatePresence mode="wait">
                    {mounted ? (
                        <motion.div
                            key={activePhase}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                        >
                            {phaseComponents.map((PhaseComp, i) =>
                                i === activePhase ? (
                                    <PhaseComp key={phases[i].id} active={true} />
                                ) : null
                            )}
                        </motion.div>
                    ) : (
                        <div className="w-full min-h-[120px] flex items-center justify-center">
                            <span className="w-4 h-4 rounded-full border-2 border-border border-t-accent animate-spin" />
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
