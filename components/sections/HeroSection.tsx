'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#e2e8f0] min-h-[calc(100vh-4rem)] flex items-center overflow-hidden py-16 lg:py-24 border-b border-slate-300/80 shadow-inner">
      
      {/* Background Metallic Light Reflections & Silver Mesh Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Metallic Light Beam */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full opacity-80 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(226,232,240,0.7) 60%, transparent 100%)',
          }}
        />

        {/* Central Ambient Crimson Glow */}
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full opacity-20 blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(150,34,40,0.7) 0%, transparent 70%)',
          }}
        />

        {/* Silver Metallic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
      </div>

      {/* FULL-BACKGROUND DIORAMA CONTAINER (Perfectly Framed & Centered Right) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-end z-20">

        {/* Floating Diorama Background Graphic */}
        <motion.div
          className="relative w-full h-full max-w-[1000px] lg:max-w-[1250px] xl:max-w-[1400px] flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -22, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.3 },
            scale: { duration: 1.2, delay: 0.3 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="relative w-[80vw] sm:w-[75vw] h-[75vh] max-w-[1150px] max-h-[950px]">
            <Image
              src="/images/diaroma1.png"
              alt="ESC Utility Services — Energy and Water Infrastructure Diorama"
              fill
              className="object-contain object-right drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Content Foreground (Text column aligned strictly to the left with zero diorama overlap) */}
      <div className="relative z-30 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
        <div className="max-w-md sm:max-w-lg lg:max-w-xl">
          
          {/* Eyebrow label with line indicator */}
          <motion.div
            className="flex items-center gap-3 mb-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="w-12 h-px bg-slate-400"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            />
            <motion.span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 font-outfit"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              INDO-GERMAN TECHNOLOGY PARTNER
            </motion.span>
          </motion.div>

          {/* Main Headline — exact size & casing matching the red hero */}
          <div className="mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-950 leading-[1.1] tracking-tight drop-shadow-sm font-plus-jakarta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.span
                className="block font-bold text-slate-950"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Powering
              </motion.span>
              <motion.span
                className="block text-slate-700 font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                the Future of
              </motion.span>
              <motion.span
                className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700 whitespace-nowrap"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Utilities.
              </motion.span>
            </motion.h1>
          </div>

          {/* Description — Wrapped cleanly to fit left of diorama */}
          <motion.p
            className="text-slate-950 text-base sm:text-lg leading-relaxed mb-8 max-w-md sm:max-w-lg font-medium drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
          >
            We combine utility expertise with software, automation, data, and AI to
            simplify complex operations, accelerate digital transformation, and
            create lasting business value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/services"
                className="px-7 py-3.5 text-sm font-bold text-white bg-[#962228] hover:bg-[#7a1b20] rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-block"
              >
                Explore Services
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/about"
                className="px-7 py-3.5 text-sm font-semibold text-slate-800 hover:text-slate-950 rounded-xl border border-slate-300 hover:border-slate-400 transition-all duration-300 inline-block bg-white/80 hover:bg-white backdrop-blur-sm"
              >
                About ESC
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}