'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import CTAStrip from '@/components/sections/CTAStrip'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

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
  type: 'founder' | 'executive'
  location: string
  photo: string
  bio: string
}

// photo is a placeholder (employee1.png) on every card for now — swap in real
// headshots per person once available. bio text is placeholder copy too —
// replace with real bios when ready.
const team: TeamMember[] = [
  {
    initials: 'RK',
    name: 'Rajesh Kumar',
    role: 'CEO & Co-Founder',
    type: 'founder',
    location: '🇮🇳 India',
    photo: '/images/employee1.png',
    bio: 'Placeholder bio — add a couple of sentences on background, focus, and what they lead at ESC.',
  },
  {
    initials: 'MH',
    name: 'Markus Hoffmann',
    role: 'CTO & Co-Founder',
    type: 'founder',
    location: '🇩🇪 Germany',
    photo: '/images/employee1.png',
    bio: 'Placeholder bio — add a couple of sentences on background, focus, and what they lead at ESC.',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Head of AI & Automation',
    type: 'executive',
    location: '🇮🇳 India',
    photo: '/images/employee1.png',
    bio: 'Placeholder bio — add a couple of sentences on background, focus, and what they lead at ESC.',
  },
  {
    initials: 'TW',
    name: 'Thomas Weber',
    role: 'Head of Delivery',
    type: 'executive',
    location: '🇩🇪 Germany',
    photo: '/images/employee1.png',
    bio: 'Placeholder bio — add a couple of sentences on background, focus, and what they lead at ESC.',
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
    <section ref={wrapperRef} className="relative w-full bg-[#0d0e12]" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        {/* Crisp radial light in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#962228]/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 lg:pt-32 w-full">
          <AnimateOnScroll direction="up" className="mb-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                What Drives Us
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-light text-white">
              Our{' '}
              <span className="font-bold" style={{ color: '#e0575f' }}>
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
              const opacity = 0.35 + depthRatio * 0.65
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
                  {/* Card — crisp dark theme with distinct glowing edges */}
                  <div
                    className={`relative w-full rounded-3xl p-8 sm:p-10 transition-all duration-300 overflow-hidden backdrop-blur-md ${
                      isFront
                        ? 'bg-[#16171d]/90 border border-[#e0575f]/40 shadow-[0_0_40px_rgba(224,87,95,0.15),inset_0_0_20px_rgba(224,87,95,0.05)]'
                        : 'bg-[#1a1c23]/80 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    }`}
                  >
                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e0575f] to-transparent ${
                        isFront ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-300`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-3 mb-5">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isFront
                              ? 'bg-[#962228]/20 text-[#e0575f]'
                              : 'bg-white/5 text-gray-500'
                          }`}
                        >
                          <span className="text-xl font-bold">●</span>
                        </div>
                      </div>

                      <h3
                        className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                          isFront ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {value.title}
                      </h3>

                      <p
                        className={`text-base leading-relaxed transition-colors duration-300 ${
                          isFront ? 'text-gray-300' : 'text-gray-500'
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
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 pointer-events-none flex flex-col items-center gap-2"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
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
// Each scroll tick slides the next card into the center.
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

  // Non-passive wheel listener — only hijacks scroll (spins the deck) while hovered
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const handleWheel = (e: WheelEvent) => {
      if (!isHoveredRef.current) return
      e.preventDefault()
      e.stopPropagation()
      targetIndexRef.current += e.deltaY * 0.006
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
    targetIndexRef.current += diffX * 0.008
    touchStartX.current = e.touches[0].clientX
  }

  // The member currently centered — drives the bio panel below the deck
  const wrappedFrontIndex = ((Math.round(centerIndex) % numCards) + numCards) % numCards
  const frontMember = team[wrappedFrontIndex]

  // Subtle per-card duotone wash so four copies of the same placeholder photo
  // don't read as an obvious repeat — swap out once real headshots land
  const tints = ['#962228', '#4b5563', '#8a4a2e', '#3f5568']

  return (
    <div className="w-full">
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
        className="relative w-full h-[520px] sm:h-[580px] flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing pb-8"
        style={{ perspective: '1600px' }}
      >
        {/* Ambient red glow — fills the space around the deck instead of leaving it bare */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 55% 60% at 50% 45%, rgba(150,34,40,0.14) 0%, transparent 70%)',
          }}
        />
        {/* Podium glow pooling under the centered card */}
        <div
          className="absolute left-1/2 bottom-16 -translate-x-1/2 w-[420px] h-20 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(150,34,40,0.3) 0%, transparent 75%)' }}
        />

        {team.map((member, index) => {
          // Shortest signed distance from the center in a wrapping (circular) index space
          let diff = (index - centerIndex) % numCards
          if (diff > numCards / 2) diff -= numCards
          if (diff < -numCards / 2) diff += numCards

          const absDiff = Math.abs(diff)
          const isFront = absDiff < 0.5
          const isFounder = member.type === 'founder'

          // Flat, horizontal "movie poster" layout — no ring/perspective shrink.
          // The center card sits large and sharp; neighbors sit fully visible
          // right beside it, just a little smaller and dimmer.
          const spacing = 300
          const translateX = diff * spacing
          const lift = isFront ? -24 : 0

          const founderBoost = isFounder ? 1.1 : 1
          const scale = (isFront ? 1.15 : Math.max(0.82, 1 - absDiff * 0.13)) * founderBoost
          const opacity = isFront ? 1 : Math.max(0.55, 1 - absDiff * 0.22)
          const grayscale = isFront ? 0 : Math.min(absDiff * 20, 40)
          const zIndex = isFront ? 100 : 50 - Math.round(absDiff * 10)

          // Wider base card — and the center one grows taller, not just bigger
          const baseWidth = 280
          const width = baseWidth * scale
          const aspectRatio = isFront ? 1.5 : 1.3
          const height = width * aspectRatio

          return (
            <div
              key={member.name}
              className="absolute transition-transform duration-75 ease-out"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                transform: `translate3d(${translateX}px, ${lift}px, 0px)`,
                opacity,
                zIndex,
              }}
            >
              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                  isFront
                    ? 'shadow-[0_30px_60px_rgba(0,0,0,0.35),0_0_25px_rgba(150,34,40,0.25)] ring-2 ring-[#962228]/60'
                    : 'shadow-[0_15px_35px_rgba(0,0,0,0.2)] ring-1 ring-black/10'
                }`}
                style={{ filter: `grayscale(${grayscale}%) brightness(${isFront ? 1 : 0.85})` }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                  priority={isFront}
                />

                {/* Duotone wash to differentiate the repeated placeholder photo per card */}
                {!isFront && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundColor: tints[index % tints.length],
                      opacity: 0.16,
                      mixBlendMode: 'color',
                    }}
                  />
                )}

                {/* Bottom gradient overlay with name/role */}
                <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                    {member.name}
                  </h3>
                  <p
                    className="text-xs sm:text-sm mt-0.5 truncate"
                    style={{ color: isFront ? '#e0575f' : '#9ca3af' }}
                  >
                    {member.role}
                  </p>
                </div>

                {/* Founder badge */}
                {isFounder && isFront && (
                  <motion.div
                    className="absolute top-3 right-3 bg-[#962228] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Founder
                  </motion.div>
                )}
              </div>

              {/* Reflection under the centered card — polished-floor effect */}
              {isFront && (
                <div
                  className="absolute left-0 right-0 top-full h-1/2 overflow-hidden opacity-25 pointer-events-none"
                  style={{
                    transform: 'scaleY(-1)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
                  }}
                >
                  <Image src={member.photo} alt="" fill className="object-cover blur-[2px]" />
                </div>
              )}
            </div>
          )
        })}

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 pointer-events-none flex items-center gap-2"
        >
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ⟲
          </motion.span>
          Hover & scroll to spin the team
        </motion.div>
      </div>

      {/* Bio panel — crossfades to whichever member is centered */}
      <div className="relative z-10 max-w-xl mx-auto text-center px-4 min-h-[110px] -mt-8 sm:-mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={frontMember.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <h4 className="text-xl font-bold text-white">{frontMember.name}</h4>
            <p className="text-sm font-semibold mt-1" style={{ color: '#e0575f' }}>
              {frontMember.role}
            </p>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">{frontMember.bio}</p>
            <p className="text-xs text-gray-500 mt-3">{frontMember.location}</p>
          </motion.div>
        </AnimatePresence>
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
      <section className="relative bg-black py-32 overflow-hidden">
        {/* Background image — the glowing ESC key doorway */}
        <div className="absolute inset-0">
          <Image
            src="/images/About.png"
            alt="ESC"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Dark gradients to ensure perfect lighting and readability without obscuring the center */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
          {/* Subtle red wash echoing the ESC key's glow */}
          <div
            className="absolute inset-0 mix-blend-overlay opacity-50"
            style={{ background: 'radial-gradient(ellipse 60% 70% at 75% 30%, rgba(150,34,40,0.7) 0%, transparent 80%)' }}
          />
        </div>

        {/* Animated sparkles */}
        {SPARKLE_POSITIONS.map((pos, i) => (
          <Sparkle
            key={i}
            delay={i * 0.1}
            x={pos.x}
            y={pos.y}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <motion.div
                className="w-8 h-[2px]"
                style={{ backgroundColor: '#962228' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Who We Are
              </motion.span>
            </div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="block font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #962228 0%, #d42e3a 100%)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ESC Utility Services
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-xl max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A specialized Indo-German technology partner with over 12 years of
              experience serving the Energy and Water industry with precision and expertise.
            </motion.p>
          </AnimateOnScroll>
        </div>
      </section>

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