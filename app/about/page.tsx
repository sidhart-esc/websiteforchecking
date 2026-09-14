'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Webhook, FileSearch, Boxes, BrainCog, Share2, Database } from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss, SiPython, SiFastapi,
  SiDjango, SiStreamlit, SiSap, SiUipath, SiMysql, SiMongodb, SiPostgresql,
  SiGithub, SiGitlab, SiDocker, SiNginx,
} from 'react-icons/si'
import { TbBrandAzure } from 'react-icons/tb'
import { BsOpenai } from 'react-icons/bs'
import { FaThLarge, FaBolt, FaChartBar, FaGlobe } from 'react-icons/fa'
import CTAStrip from '@/components/sections/CTAStrip'
import HeroBridge from '@/components/sections/HeroBridge'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

// A few entries have no dedicated logo in any icon set available to us
// (Power Apps/Automate/BI/Pages, SharePoint, REST APIs, RAG, Vector
// Databases, Machine Learning, SQL) — these use generic icons in a
// representative brand/theme color as a stand-in until real logos are supplied.
const techCategories = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', Icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
      { name: 'Django', Icon: SiDjango, color: '#092E20' },
      { name: 'REST APIs', Icon: Webhook, color: '#4F46E5' },
    ],
  },
  {
    name: 'AI & Data',
    items: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'OpenAI', Icon: BsOpenai, color: '#10A37F' },
      { name: 'RAG', Icon: FileSearch, color: '#7C3AED' },
      { name: 'Vector Databases', Icon: Boxes, color: '#0EA5E9' },
      { name: 'Machine Learning', Icon: BrainCog, color: '#DB2777' },
      { name: 'Streamlit', Icon: SiStreamlit, color: '#FF4B4B' },
    ],
  },
  {
    name: 'Enterprise & Automation',
    items: [
      { name: 'SAP', Icon: SiSap, color: '#0FAAFF' },
      { name: 'Power Apps', Icon: FaThLarge, color: '#742774' },
      { name: 'Power Automate', Icon: FaBolt, color: '#0066FF' },
      { name: 'Power BI', Icon: FaChartBar, color: '#F2C811' },
      { name: 'Power Pages', Icon: FaGlobe, color: '#1B75BC' },
      { name: 'SharePoint', Icon: Share2, color: '#038387' },
      { name: 'UiPath', Icon: SiUipath, color: '#FA4616' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'Azure', Icon: TbBrandAzure, color: '#0078D4' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Nginx', Icon: SiNginx, color: '#009639' },
      { name: 'GitHub', Icon: SiGithub, color: '#181717' },
      { name: 'GitLab', Icon: SiGitlab, color: '#FC6D26' },
    ],
  },
  {
    name: 'Databases',
    items: [
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'SQL', Icon: Database, color: '#64748B' },
    ],
  },
]

type Value = {
  title: string
  description: string
}

const values: Value[] = [
  {
    title: 'Engineering Excellence',
    description: 'We approach every solution with precision, technical expertise, and a commitment to delivering work that stands the test of time.',
  },
  {
    title: 'Customer Partnership',
    description: 'We work as an extension of our clients\' teams, building trusted relationships through collaboration, transparency, and measurable results.',
  },
  {
    title: 'Intelligent Innovation',
    description: 'We embrace emerging technologies and automation to create practical, future-ready solutions that deliver real business value.',
  },
  {
    title: 'Quality Without Compromise',
    description: 'From planning to delivery, we maintain the highest standards to ensure reliability, security, and long-term performance.',
  },
  {
    title: 'Ownership & Accountability',
    description: 'We take responsibility for every project we undertake, delivering on our commitments with professionalism and attention to detail.',
  },
  {
    title: 'Continuous Improvement',
    description: 'We believe every process can be refined. By learning, adapting, and optimizing, we help our clients stay ahead in a changing world.',
  },
  {
    title: 'Global Standards, Local Excellence',
    description: 'Combining German engineering discipline with Indian technical expertise, we deliver solutions that meet international expectations with local agility.',
  },
  {
    title: 'Security by Design',
    description: 'Information security, data protection, and dependable systems are integrated into every solution we build—not added later.',
  },
]

type TeamMember = {
  initials: string
  name: string
  role: string
  photo: string
  bio: string
}

const team: TeamMember[] = [
  {
    initials: 'ND',
    name: 'Nagaraj Deivanayagam',
    role: 'Associate Manager & Team Lead',
    photo: '/images/em1.png',
    bio: 'Leading strategic technology initiatives, managing operational team workflows, and driving high-quality software engineering execution.',
  },
  {
    initials: 'PB',
    name: 'Pooja Babu',
    role: 'Assistant Manager & Team Lead',
    photo: '/images/em2.png',
    bio: 'Coordinating cross-functional engineering teams, facilitating technical delivery, and ensuring project milestones meet international quality standards.',
  },
  {
    initials: 'PA',
    name: 'Parvathy Ajitha',
    role: 'Team Lead',
    photo: '/images/em3.png',
    bio: 'Guiding core software engineering teams, overseeing daily technical operations, and driving project quality across client engagements.',
  },
  {
    initials: 'RS',
    name: 'Reshma Suresh',
    role: 'Assistant Manager - Operations and HRM',
    photo: '/images/em4.png',
    bio: 'Managing human resource management, operational strategy, organizational growth, and talent development across ESC.',
  },
  {
    initials: 'SA',
    name: 'Soumya Arayilvalapil',
    role: 'Team Lead',
    photo: '/images/em5.png',
    bio: 'Leading technical delivery units, orchestrating software development workflows, and maintaining rigorous QA standards.',
  },
]

// Sparkle particle component
const Sparkle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

const CoreValuesSection = ({ values }: { values: Value[] }) => {
  const wrapperRef = useRef<HTMLElement>(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const targetAngleRef = useRef(0)
  const currentAngleRef = useRef(0)
  const animFrameId = useRef<number | null>(null)

  // Smooth animation frame loop for physics momentum interpolation
  useEffect(() => {
    const updatePhysics = () => {
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

  // Maps scroll progress through the pinned section to a 0–360° rotation
  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // Scrollable distance is the total height of the wrapper (200vh) minus one viewport (100vh)
      const scrollableDistance = rect.height - window.innerHeight
      if (scrollableDistance <= 0) return

      // Calculate exact progress from 0 to 1
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1)

      // Map progress exactly to one full 360-degree rotation
      targetAngleRef.current = progress * 360
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const numCards = values.length

  return (
    <section ref={wrapperRef} className="relative w-full bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] border-y border-slate-300/80 shadow-inner" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        {/* Background Metallic Light Reflections & Silver Mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Metallic Light Beam */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-50 blur-[130px]"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(226,232,240,0.7) 60%, transparent 100%)',
            }}
          />

          {/* Central Soft Crimson Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15 blur-[150px]"
            style={{
              background: 'radial-gradient(circle, rgba(150,34,40,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Silver Metallic Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
        </div>

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-28 w-full">
          <AnimateOnScroll direction="up" className="mb-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#962228] font-outfit">
                What Drives Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight font-plus-jakarta">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">
                Core Values
              </span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* 3D Wheel Area */}
        <div
          className="flex-1 w-full flex items-center justify-center relative"
          style={{
            perspective: '1800px',
            perspectiveOrigin: '50% 55%',
          }}
        >
          {/* Tilted Ring */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(22deg) rotateZ(-4deg)',
            }}
          >
            {values.map((value: Value, index: number) => {
              const baseAngle = (360 / numCards) * index
              const currentCardAngle = baseAngle + rotationAngle
              const rad = (currentCardAngle * Math.PI) / 180

              const rx = 560
              const ry = 220

              const x = Math.sin(rad) * rx
              const z = Math.cos(rad) * ry
              const y = -Math.cos(rad) * 50

              const depthRatio = (z + ry) / (2 * ry)
              const isFront = depthRatio > 0.72

              const scale = 0.75 + depthRatio * 0.45
              const opacity = 0.55 + depthRatio * 0.45
              const zIndex = Math.round((z + ry) * 10)

              return (
                <div
                  key={value.title}
                  className="absolute w-[340px] sm:w-[420px] lg:w-[460px] transition-transform duration-75 ease-out"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateX(-15deg)`,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Silver Glassmorphic Card */}
                  <div
                    className={`relative w-full rounded-3xl p-7 sm:p-9 transition-all duration-300 overflow-hidden backdrop-blur-2xl ${isFront
                      ? 'bg-white border-2 border-[#962228] shadow-[0_20px_50px_rgba(150,34,40,0.22),0_10px_25px_rgba(0,0,0,0.08)]'
                      : 'bg-white/90 border border-slate-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-slate-400'
                      }`}
                  >
                    {/* Top Specular White Highlight Line */}
                    <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

                    {/* Top Crimson Specular Bar for Front Card */}
                    {isFront && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#962228] via-[#e63946] to-[#962228] shadow-[0_0_12px_#e63946]" />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isFront
                            ? 'bg-[#962228] text-white shadow-[0_0_18px_rgba(150,34,40,0.35)]'
                            : 'bg-[#962228]/10 border border-[#962228]/20 text-[#962228]'
                            }`}
                        >
                          <span className="text-lg font-bold">●</span>
                        </div>
                      </div>

                      <h3
                        className={`text-xl sm:text-2xl font-black mb-3 tracking-tight font-plus-jakarta transition-colors duration-300 ${isFront ? 'text-slate-950' : 'text-slate-900'
                          }`}
                      >
                        {value.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${isFront ? 'text-slate-900 font-medium' : 'text-slate-800 font-normal'
                          }`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-700 pointer-events-none flex flex-col items-center gap-1 px-4 py-2 rounded-full bg-white/80 border border-slate-300 shadow-sm backdrop-blur-md"
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
            Scroll to rotate
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Leadership team — flat horizontal "movie poster" selector. Same hover+wheel /
// touch-drag spin as the Core Values ring, but cards sit in a straight row
// instead of a 3D ring: the center card is large, sharp and lifted, and its
// neighbors stay fully visible (not shrunk to a sliver) right beside it.
// Leadership team — Modern 3D Coverflow Deck matching reference design.
const LeadershipWheel = ({ team }: { team: TeamMember[] }) => {
  const stageRef = useRef<HTMLDivElement>(null)
  const [centerIndex, setCenterIndex] = useState(0)
  const targetIndexRef = useRef(0)
  const currentIndexRef = useRef(0)
  const isHoveredRef = useRef(false)
  const touchStartX = useRef<number | null>(null)
  const animFrameId = useRef<number | null>(null)

  const numCards = team.length

  // Smooth momentum interpolation loop
  useEffect(() => {
    const updatePhysics = () => {
      const diff = targetIndexRef.current - currentIndexRef.current
      if (Math.abs(diff) > 0.001) {
        currentIndexRef.current += diff * 0.12
        setCenterIndex(currentIndexRef.current)
      }
      animFrameId.current = requestAnimationFrame(updatePhysics)
    }

    animFrameId.current = requestAnimationFrame(updatePhysics)
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [])

  // Non-passive wheel listener
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const handleWheel = (e: WheelEvent) => {
      if (!isHoveredRef.current) return
      e.preventDefault()
      e.stopPropagation()
      targetIndexRef.current += e.deltaY * 0.005
    }

    stage.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      stage.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diffX = touchStartX.current - e.touches[0].clientX
    targetIndexRef.current += diffX * 0.006
    touchStartX.current = e.touches[0].clientX
  }

  const handlePrev = () => {
    targetIndexRef.current = Math.round(targetIndexRef.current) - 1
  }

  const handleNext = () => {
    targetIndexRef.current = Math.round(targetIndexRef.current) + 1
  }

  // The member currently centered — drives the bio panel below the deck
  const wrappedFrontIndex = ((Math.round(centerIndex) % numCards) + numCards) % numCards
  const frontMember = team[wrappedFrontIndex]

  return (
    <div className="w-full py-6">
      {/* 3D Coverflow Stage */}
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
        className="relative w-full h-[440px] sm:h-[500px] lg:h-[540px] flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
        style={{ perspective: '1400px' }}
      >
        {/* Soft Ambient Red Radial Spotlight under the active card */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(150,34,40,0.18) 0%, transparent 75%)' }}
        />

        {team.map((member, index) => {
          // Shortest signed distance from the center in a wrapping (circular) index space
          let diff = (index - centerIndex) % numCards
          if (diff > numCards / 2) diff -= numCards
          if (diff < -numCards / 2) diff += numCards

          const absDiff = Math.abs(diff)
          const isFront = absDiff < 0.5

          // Tuned spacing & depth transformation matching reference coverflow
          const spacing = 240
          const translateX = diff * spacing
          const lift = isFront ? -15 : 0

          const scale = isFront ? 1.05 : Math.max(0.78, 1 - absDiff * 0.12)
          const opacity = isFront ? 1 : Math.max(0.65, 1 - absDiff * 0.22)
          const zIndex = isFront ? 100 : 50 - Math.round(absDiff * 10)

          return (
            <div
              key={member.name}
              onClick={() => {
                targetIndexRef.current = targetIndexRef.current + diff
              }}
              className="absolute w-[260px] sm:w-[310px] lg:w-[350px] h-[360px] sm:h-[420px] lg:h-[460px] transition-transform duration-75 ease-out group"
              style={{
                transform: `translate3d(${translateX}px, ${lift}px, 0px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              {/* Premium 3:4 Aspect Ratio Portrait Card */}
              <div
                className={`relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500 bg-slate-900 ${isFront
                  ? 'shadow-[0_25px_60px_rgba(0,0,0,0.3),0_0_35px_rgba(150,34,40,0.25)] border-2 border-[#962228]'
                  : 'shadow-[0_15px_35px_rgba(0,0,0,0.15)] border border-slate-300/80 hover:border-slate-400'
                  }`}
              >
                {/* Full Uncropped Photo */}
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="350px"
                  priority={isFront}
                />

                {/* Bottom Gradient Overlay for Text Clarity */}
                <div className="absolute inset-x-0 bottom-0 pt-24 pb-6 px-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end text-left">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#e63946] mb-1 font-outfit">
                    {member.role}
                  </span>
                  <h3 className="text-white font-extrabold text-xl sm:text-2xl font-plus-jakarta tracking-tight">
                    {member.name}
                  </h3>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrow Controls matching reference design */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          onClick={handlePrev}
          aria-label="Previous Team Member"
          className="w-12 h-12 rounded-full bg-white/80 border border-slate-300 shadow-md backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-[#962228] hover:text-white hover:border-[#962228] transition-all duration-300 group cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Team Member"
          className="w-12 h-12 rounded-full bg-white/80 border border-slate-300 shadow-md backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-[#962228] hover:text-white hover:border-[#962228] transition-all duration-300 group cursor-pointer"
        >
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  )
}

// Deterministic positions for hydration-safe sparkle rendering
const SPARKLE_POSITIONS = [
  { x: 15, y: 25 },
  { x: 35, y: 55 },
  { x: 75, y: 30 },
  { x: 85, y: 65 },
  { x: 45, y: 75 },
  { x: 20, y: 80 },
  { x: 60, y: 20 },
  { x: 90, y: 40 },
  { x: 10, y: 60 },
  { x: 50, y: 35 },
  { x: 30, y: 15 },
  { x: 70, y: 85 },
  { x: 80, y: 15 },
  { x: 25, y: 45 },
  { x: 65, y: 60 },
  { x: 40, y: 90 },
  { x: 95, y: 70 },
  { x: 5, y: 35 },
  { x: 55, y: 50 },
  { x: 88, y: 25 },
]

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Who We Are - ESC doorway hero */}
      <section className="relative pt-40 pb-32 overflow-hidden min-h-[60vh] flex items-center justify-start text-left bg-gradient-to-br from-slate-100 via-slate-200/60 to-slate-100">
        {/* Background image — ESC keyboard image first, then silver overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/About.png"
            alt="ESC About Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_75%] opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-100/85 via-slate-100/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-transparent to-slate-100/60 z-10 pointer-events-none" />
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#962228]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Animated sparkles */}
        {SPARKLE_POSITIONS.map((pos, i) => (
          <Sparkle
            key={i}
            delay={i * 0.1}
            x={pos.x}
            y={pos.y}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
          <div className="max-w-2xl text-right">
            <AnimateOnScroll direction="up">
              <div className="flex items-center justify-end gap-2 mb-8">
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-600 font-outfit">
                  Who We Are
                </span>
                <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-slate-900 mb-8 tracking-tight font-plus-jakarta">
                About{' '}
                <span className="font-extrabold" style={{ color: '#962228' }}>
                  ESC
                </span>
              </h1>
              <p className="text-slate-950 text-xl sm:text-2xl leading-relaxed font-semibold mb-12 drop-shadow-sm">
                A specialized Indo-German technology partner delivering mission-critical software, AI diagnostics, and RPA automation to global Energy and Water networks.
              </p>

              {/* Scroll down indicator */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-end justify-end text-slate-500 mt-16"
              >
                <span className="text-xs uppercase tracking-widest mb-3 font-outfit font-bold text-slate-600">Scroll To Explore</span>
                <div className="w-[2px] h-12 bg-gradient-to-b from-[#962228] to-transparent" />
              </motion.div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Indo-German Laser Banner Bridge */}
      <HeroBridge />

      {/* Mission - Silverish Modern */}
      <section className="relative py-32 overflow-hidden">
        {/* Silverish gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 50%, #f0f0f0 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: '-100px' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-600">
                Our Mission
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-8 leading-tight font-['Sora',sans-serif]">
              Powering the{' '}
              <motion.span
                className="font-bold"
                style={{ color: '#962228' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                digital future
              </motion.span>{' '}
              of critical infrastructure
            </h2>

            <div className="grid lg:grid-cols-1 gap-8 max-w-4xl">
              <motion.p
                className="text-lg text-gray-700 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                ESC Utility Services was founded with a singular focus — to help Energy and Water
                organizations navigate the complexity of digital transformation without losing sight
                of what matters most: reliability, safety, and operational continuity. From our
                offices in India and Germany, we serve clients across Europe and Asia, delivering
                technology solutions that are as robust as the infrastructure they support.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Full Screen Sticky 3D Spinning Wheel */}
      <CoreValuesSection values={values} />

      {/* Tech Stack */}
      <section className="relative bg-white py-24 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="mb-14 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#962228] font-outfit">
                Technology We Work With
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight font-plus-jakarta">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">
                Tech Stack
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#962228] mb-5 font-outfit">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((tech) => {
                    const Icon = tech.Icon
                    return (
                      <div
                        key={tech.name}
                        className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#962228]/40 hover:shadow-md transition-all duration-300"
                      >
                        <Icon size={16} style={{ color: tech.color }} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-semibold text-slate-700 font-outfit whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Premium Dark Theme */}
      <section className="relative bg-[#111216] py-32 overflow-hidden">
        {/* Deep dark backdrop with subtle radial glow */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at top, #1a1c23 0%, #111216 100%)' }}
        />
        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#e0575f' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                The People Behind ESC
              </span>
            </div>
            <motion.h2
              className="text-5xl sm:text-6xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Meet Our{' '}
              <motion.span
                className="font-bold text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #962228 0%, #e0575f 100%)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Leadership Team
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mt-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Visionary leaders driving innovation across energy and water infrastructure technology.
            </motion.p>
          </AnimateOnScroll>

          <LeadershipWheel team={team} />
        </div>
      </section>

      <CTAStrip />
    </PageTransition>
  )
}