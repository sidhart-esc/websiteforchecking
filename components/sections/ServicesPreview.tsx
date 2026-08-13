'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Cpu,
  BrainCircuit,
  Workflow,
  Server,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Activity,
  CheckCircle2,
  MousePointer,
  Zap,
  Lock,
  LineChart,
} from 'lucide-react'


const serviceItems = [
  {
    id: '01',
    badge: 'Enterprise Core',
    icon: Cpu,
    category: 'Cloud & Custom Systems',
    title: 'Software Engineering',
    description:
      'Custom enterprise software solutions built for grid operations, smart water networks, and SCADA integrations — highly scalable, resilient, and secure.',
    tags: ['Grid Systems', 'Cloud Native', 'SCADA / IoT'],
    href: '/services',
  },
  {
    id: '02',
    badge: 'AI & Machine Learning',
    icon: BrainCircuit,
    category: 'Predictive AI & Analytics',
    title: 'Generative AI & ML',
    description:
      'Harness cutting-edge AI models for automated asset diagnostics, load forecasting, predictive maintenance, and intelligent decision-making.',
    tags: ['Predictive ML', 'LLM Agents', 'Anomaly Detection'],
    href: '/services',
  },
  {
    id: '03',
    badge: 'Process Automation',
    icon: Workflow,
    category: 'Process Optimization',
    title: 'Intelligent Automation',
    description:
      'End-to-end RPA and workflow automation that eliminates operational manual bottlenecks across billing, dispatch, and compliance workflows.',
    tags: ['RPA Workflows', 'Dispatch Auto', 'Cost Efficiency'],
    href: '/services',
  },
  {
    id: '04',
    badge: '24/7 Managed IT',
    icon: Server,
    category: 'Infrastructure & Support',
    title: 'IT Back-Office Services',
    description:
      'Mission-critical IT infrastructure management, 24/7 back-office operations, database administration, and dedicated tier-3 support.',
    tags: ['24/7 Managed IT', 'Cloud Infra', 'Database Admin'],
    href: '/services',
  },
  {
    id: '05',
    badge: 'Market Intelligence',
    icon: LineChart,
    category: 'Research & Intelligence',
    title: 'Market Research & Analysis',
    description:
      'Transform web-based market research into actionable business intelligence through systematic data capture, validation, analysis, and authentication.',
    tags: ['Market Intelligence', 'Data Validation', 'Business Insights'],
    href: '/services',
  },
]

// All cards on the 3D ring wheel
const ringCards = serviceItems

const highlights = [
  { icon: ShieldCheck, title: 'ISO/IEC 27001:2022', desc: 'Information Security Certified' },
  { icon: Lock, title: 'GDPR & EU Compliant', desc: 'Strict European Data Privacy' },
  { icon: Sparkles, title: 'Indo-German Model', desc: 'European Standard Delivery' },
]


export default function ServicesPreview() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const targetAngleRef = useRef(0)
  const currentAngleRef = useRef(0)
  const isHoveredRef = useRef(false)
  const touchStartY = useRef<number | null>(null)
  const animFrameId = useRef<number | null>(null)

  // Smooth animation frame loop for physics momentum interpolation and auto-rotation
  useEffect(() => {
    const updatePhysics = () => {
      // Auto-rotate slowly when not interacted with
      if (!isHoveredRef.current && touchStartY.current === null) {
        targetAngleRef.current -= 0.15
      }

      const diff = targetAngleRef.current - currentAngleRef.current
      if (Math.abs(diff) > 0.01) {
        currentAngleRef.current += diff * 0.12
        setRotationAngle(currentAngleRef.current)
      }
      animFrameId.current = requestAnimationFrame(updatePhysics)
    }

    animFrameId.current = requestAnimationFrame(updatePhysics)
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [])

  // Wheel listener to hijack scroll and spin the deck while hovered
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const handleWheel = (e: WheelEvent) => {
      if (!isHoveredRef.current) return
      e.preventDefault()
      e.stopPropagation()
      targetAngleRef.current += e.deltaY * 0.12 // Sensitivity multiplier
    }

    stage.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      stage.removeEventListener('wheel', handleWheel)
    }
  }, [])

  // Touch handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return
    const diffY = touchStartY.current - e.touches[0].clientY
    targetAngleRef.current += diffY * 0.3
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    touchStartY.current = null
  }

  const numCards = ringCards.length

  return (
    <section className="relative bg-[#060608] py-24 lg:py-32 overflow-hidden border-t border-neutral-900">
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central Crimson Ambient Ring Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] lg:w-[1000px] h-[550px] rounded-full opacity-20 blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(230,57,70,0.8) 0%, rgba(150,34,40,0.3) 50%, transparent 80%)',
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Section Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#962228]/10 border border-[#962228]/30 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-400 font-outfit">
                Capabilities & Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.15] tracking-tight font-outfit">
              Engineering Excellence for{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-400">
                Next-Gen Utilities
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
              We empower Energy and Water organizations across Europe and worldwide with high-performance software, AI intelligence, and seamless automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Scroll Hint Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-gray-300 backdrop-blur-md">
              <MousePointer className="w-3.5 h-3.5 text-red-400 animate-bounce" />
              <span>Tap cards or drag to spin</span>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-white bg-white/[0.04] border border-white/10 hover:border-[#e63946]/80 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(230,57,70,0.3)] font-outfit"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* 3D TILTED OVAL RING STAGE CONTAINER - PROPER HEIGHT & TOP MARGIN TO PREVENT OVERLAP */}
        <div
          ref={stageRef}
          onMouseEnter={() => {
            isHoveredRef.current = true
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] flex items-center justify-center mt-10 sm:mt-14 mb-6 overflow-visible select-none cursor-grab active:cursor-grabbing"
          style={{
            perspective: '1400px',
            perspectiveOrigin: '50% 55%',
          }}
        >
          {/* Tilted Ring Coordinate Plane matching Reference Image */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(22deg) rotateZ(-4deg)',
            }}
          >
            {ringCards.map((service, index) => {
              const IconComponent = service.icon

              // Calculate angle position around the 4-card 360 degree ring (90 degree steps)
              const baseAngle = (360 / numCards) * index
              const currentCardAngle = baseAngle + rotationAngle
              const rad = (currentCardAngle * Math.PI) / 180

              // Tuned sleek radii parameters for 4 cards to prevent top overlap
              const rx = 390 // Horizontal radius width
              const ry = 140 // Vertical tilt depth radius

              // Compute 3D Cartesian coordinates on tilted ellipse
              const x = Math.sin(rad) * rx
              const z = Math.cos(rad) * ry
              const y = -Math.cos(rad) * 35 // Gentle elevation arc

              // Normalize depth metrics
              const depthRatio = (z + ry) / (2 * ry)
              const isFront = depthRatio > 0.72

              // Dynamic scale, opacity, and layering
              const scale = 0.72 + depthRatio * 0.35
              const opacity = 0.35 + depthRatio * 0.65
              const zIndex = Math.round((z + ry) * 10)

              return (
                <div
                  key={`${service.id}-${index}`}
                  suppressHydrationWarning
                  onClick={() => {
                    // Click card to rotate directly to front center
                    const targetCardAngle = -baseAngle
                    targetAngleRef.current = targetCardAngle
                  }}
                  className="absolute w-[270px] sm:w-[310px] transition-transform duration-75 ease-out"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateX(-15deg)`,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* SLEEK DARK GLASSMORPHIC CARD WITH CRISP READABILITY & GLOWING RED OUTLINE */}
                  <div
                    className={`relative w-full rounded-3xl p-6 sm:p-7 transition-all duration-300 overflow-hidden ${
                      isFront
                        ? 'bg-neutral-900/85 border border-[#e63946]/60 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(230,57,70,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl'
                        : 'bg-neutral-900/50 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl hover:border-white/20'
                    }`}
                  >
                    {/* Top Specular Reflection Highlight Line */}
                    <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    {/* Glowing Red Top Specular Bar for Front Card */}
                    {isFront && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#962228] via-[#e63946] to-[#962228] shadow-[0_0_15px_#e63946]" />
                    )}

                    {/* Card Inner Layout with Edge Padding */}
                    <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                      <div>
                        {/* Header: Icon & Capability Status Badge */}
                        <div className="flex items-center justify-between mb-4">
                          {/* Glowing Icon Badge */}
                          <div
                            className={`p-3 rounded-2xl transition-all duration-300 ${
                              isFront
                                ? 'bg-[#962228]/35 border border-[#e63946]/60 text-white shadow-[0_0_20px_rgba(230,57,70,0.45)] backdrop-blur-md'
                                : 'bg-white/[0.05] border border-white/10 text-[#e63946]'
                            }`}
                          >
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>

                          {/* SLEEK CAPABILITY STATUS BADGE */}
                          <div
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md border ${
                              isFront
                                ? 'bg-[#962228]/25 border-[#e63946]/50 text-red-300 shadow-[0_0_12px_rgba(230,57,70,0.25)]'
                                : 'bg-white/[0.05] border-white/10 text-gray-300'
                            }`}
                          >
                            <Zap className="w-3 h-3 text-[#e63946]" />
                            <span>{service.badge}</span>
                          </div>
                        </div>

                        {/* Category Tag */}
                        <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-red-400 mb-1 block font-outfit">
                          {service.category}
                        </span>

                        {/* SERVICE TITLE IN PLUS JAKARTA SANS TYPOGRAPHY */}
                        <h3 className="text-base sm:text-lg font-extrabold text-white mb-2 tracking-tight font-plus-jakarta">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-gray-300 font-light leading-relaxed mb-3 line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Footer Tags & Discover Button */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-3.5 pt-3.5 border-t border-white/10">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium text-gray-300 bg-white/[0.04] border border-white/10 rounded-full backdrop-blur-sm"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#e63946]" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={service.href}
                          onClick={(e) => {
                            if (!isFront) {
                              e.preventDefault()
                              targetAngleRef.current = -baseAngle
                            }
                          }}
                          className={`group/btn inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-outfit ${
                            isFront
                              ? 'text-white bg-[#962228]/40 hover:bg-[#962228]/70 border border-[#e63946]/50 shadow-[0_0_15px_rgba(230,57,70,0.25)]'
                              : 'text-gray-400 hover:text-white bg-white/[0.03] border border-white/10'
                          }`}
                        >
                          <span>Discover Capability</span>
                          <ArrowRight className="w-3.5 h-3.5 text-red-400 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Feature Strip Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 pt-10 border-t border-neutral-900 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left"
        >
          {highlights.map((item) => {
            const ItemIcon = item.icon
            return (
              <div
                key={item.title}
                className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors"
              >
                <div className="p-3 bg-[#962228]/15 border border-[#962228]/30 rounded-xl text-[#e63946]">
                  <ItemIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white font-outfit">{item.title}</div>
                  <div className="text-xs text-gray-400 font-light">{item.desc}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}