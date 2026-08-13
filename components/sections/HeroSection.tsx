'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative bg-black min-h-[calc(100vh-4rem)] flex items-center overflow-hidden py-16 lg:py-24">
      {/* Deep black background base */}
      <div className="absolute inset-0 bg-black" />

      {/* FULL-BACKGROUND DIORAMA CONTAINER with Smooth Floating Motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center lg:justify-end">
        
        {/* Animated Glow Rings behind Full Background Diorama */}
        <div className="absolute right-0 lg:right-[5%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] lg:w-[1200px] lg:h-[1200px] pointer-events-none">
          {/* Outer glowing ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: '3px solid #962228',
              boxShadow: '0 0 200px rgba(150, 34, 40, 0.5), inset 0 0 180px rgba(150, 34, 40, 0.25)',
              opacity: 0.6,
            }}
            animate={{
              opacity: [0.5, 0.85, 0.5],
              boxShadow: [
                '0 0 200px rgba(150, 34, 40, 0.5), inset 0 0 180px rgba(150, 34, 40, 0.25)',
                '0 0 260px rgba(150, 34, 40, 0.7), inset 0 0 220px rgba(150, 34, 40, 0.35)',
                '0 0 200px rgba(150, 34, 40, 0.5), inset 0 0 180px rgba(150, 34, 40, 0.25)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Inner pulsing red glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              backgroundColor: '#962228',
              opacity: 0.25,
            }}
            animate={{
              opacity: [0.2, 0.45, 0.2],
              scale: [0.95, 1.15, 0.95],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Floating Diorama Background Graphic */}
        <motion.div
          className="relative w-full h-full max-w-[1200px] lg:max-w-[1450px] xl:max-w-[1650px] flex items-center justify-center lg:justify-end lg:pr-6"
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
          <div className="relative w-[90vw] h-[75vh] max-w-[1300px] max-h-[1000px]">
            <Image
              src="/images/diaroma.png"
              alt="ESC Utility Services — Energy and Water Infrastructure Diorama"
              fill
              className="object-contain object-center lg:object-right drop-shadow-[0_20px_70px_rgba(150,34,40,0.35)]"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Cinematic Dark Overlays to ensure perfect text contrast & readability */}
      {/* Horizontal gradient overlay: dark left for text, semi-transparent right for diorama */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 lg:via-black/75 to-transparent pointer-events-none z-10" />

      {/* Top & Bottom vignetting */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none z-10" />

      {/* Spotlight effect container */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute"
          style={{
            width: '1400px',
            height: '1400px',
            left: '30%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(150,34,40,0.25) 0%, rgba(150,34,40,0.08) 35%, transparent 75%)',
            filter: 'blur(100px)',
          }}
          animate={{
            scale: [0.92, 1.08, 0.92],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Dramatic red accent line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none z-10"
        style={{
          top: '82%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(150,34,40,0.4) 20%, rgba(150,34,40,0.4) 80%, transparent 100%)',
        }}
        initial={{ opacity: 0, scaleX: 0, originX: 0 }}
        animate={{ opacity: 0.5, scaleX: 1 }}
        transition={{
          duration: 1.2,
          delay: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />

      {/* Content Foreground */}
      <div className="relative z-20 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Label line + text */}
          <motion.div
            className="flex items-center gap-3 mb-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="w-12 h-px"
              style={{ backgroundColor: '#962228' }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            />
            <motion.span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Indo-German Technology Partner
            </motion.span>
          </motion.div>

          {/* Main headline — word by word reveal */}
          <div className="mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Powering
              </motion.span>
              <motion.span
                className="block text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                the Future of
              </motion.span>
              <motion.span
                className="block font-bold text-transparent bg-clip-text whitespace-nowrap"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #962228 0%, #e63946 100%)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Utilities.
              </motion.span>
            </motion.h1>
          </div>

          {/* Description with delayed fade-in */}
          <motion.p
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
          >
            We combine utility expertise with software, automation, data, and AI to
            simplify complex operations, accelerate digital transformation, and
            create lasting business value.
          </motion.p>

          {/* CTA buttons with staggered reveal */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="px-7 py-3.5 text-sm font-semibold text-white rounded-none transition-all duration-300 border border-[#962228] inline-block shadow-lg shadow-[#962228]/30"
                style={{ backgroundColor: '#962228' }}
              >
                Explore Services
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="px-7 py-3.5 text-sm font-semibold text-gray-300 rounded-none border border-gray-600 hover:border-gray-400 hover:text-white transition-all duration-300 inline-block bg-black/40 backdrop-blur-sm"
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