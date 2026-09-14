'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Sparkles } from 'lucide-react'

interface PartnershipStripProps {
  variant?: 'default' | 'thin'
}

const ismsHighlights = [
  { icon: ShieldCheck, title: 'ISO/IEC 27001:2022', desc: 'Information Security Certified' },
  { icon: Lock, title: 'GDPR & EU Compliant', desc: 'Strict European Data Privacy' },
  { icon: Sparkles, title: 'Indo-German Model', desc: 'European Standard Delivery' },
]

export default function PartnershipStrip({ variant = 'default' }: PartnershipStripProps) {
  const isThin = variant === 'thin'

  return (
    <section className={`relative bg-gradient-to-r from-[#420b10] via-[#801b21] to-[#4c0d12] ${isThin ? 'py-10 sm:py-12' : 'py-8 lg:py-10'} overflow-hidden border-y border-[#e63946]/40 shadow-[0_0_50px_rgba(150,34,40,0.4)]`}>
      
      {/* Background Ambient Spotlights & Particle Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left India Glow */}
        <div
          className="absolute -top-24 left-1/6 w-[400px] h-[400px] rounded-full opacity-30 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,153,51,0.8) 0%, transparent 70%)',
          }}
        />

        {/* Center Crimson Core Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full opacity-35 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(230,57,70,0.9) 0%, transparent 70%)',
          }}
        />

        {/* Right Germany Glow */}
        <div
          className="absolute -bottom-24 right-1/6 w-[400px] h-[400px] rounded-full opacity-25 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,204,0,0.6) 0%, transparent 70%)',
          }}
        />

        {/* Subtle Cinematic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_80%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        {isThin ? (
          /* ISMS & Security Compliance Dark Crimson Banner */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-7 w-full max-w-5xl"
          >
            {/* Top Badges Row with Original Clean Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full">
              {ismsHighlights.map((item) => {
                const ItemIcon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.07] border border-white/15 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.12] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                  >
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-400/20 to-red-500/20 border border-amber-300/30 text-amber-300 shadow-sm flex-shrink-0">
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-outfit tracking-wide">{item.title}</div>
                      <div className="text-[11px] sm:text-xs text-red-100/80 font-light">{item.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Middle Certificate Showcase Box (Below Badges, Bigger Image + View More Button) */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.25)] w-full">
              {/* Left Certificate Image & Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                <a
                  href="/certifications"
                  className="relative w-28 sm:w-36 h-36 sm:h-44 rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-[0_0_25px_rgba(255,204,0,0.25)] hover:scale-105 transition-all duration-300 flex-shrink-0 bg-slate-900 group"
                  title="Click to view full certificate"
                >
                  <Image
                    src="/images/isms certificate.png"
                    alt="ISO/IEC 27001:2022 Certificate"
                    fill
                    className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/80 px-2.5 py-1 rounded-full font-outfit">
                      Expand
                    </span>
                  </div>
                </a>

                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-300 text-[10px] font-mono font-bold tracking-widest uppercase mb-1.5">
                    Official ISO/IEC 27001:2022
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-plus-jakarta tracking-tight">
                    Information Security Management System (ISMS)
                  </h3>
                  <p className="text-xs sm:text-sm text-red-100/85 font-light max-w-lg mt-1.5 leading-relaxed">
                    Our audited Information Security Management System guarantees enterprise-grade security, data protection, and operational resilience across all software and IT operations.
                  </p>
                </div>
              </div>

              {/* View More Button */}
              <a
                href="/certifications"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 transition-all duration-300 shadow-[0_4px_20px_rgba(255,204,0,0.3)] hover:scale-105 font-outfit shrink-0"
              >
                <span>View Certification</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ) : (
          /* Full Default Banner with Text & Stats */
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 w-full">
            {/* Left — India & Germany Emblems with Laser Bridge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex items-center gap-4 sm:gap-6"
            >
              {/* India Image Emblem */}
              <div className="flex flex-col items-center group">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 flex items-center justify-center p-2 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md shadow-[0_0_25px_rgba(255,153,51,0.25)] group-hover:scale-105 group-hover:border-[#ff9933]/60 transition-all duration-300">
                  <Image
                    src="/images/india-Photoroom.png"
                    alt="India Engineering Hub"
                    width={90}
                    height={90}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,153,51,0.5)]"
                  />
                </div>
                <span className="mt-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-red-100 group-hover:text-amber-300 transition-colors font-outfit">
                  India
                </span>
              </div>

              {/* Connecting Laser Energy Bridge Line */}
              <div className="relative flex items-center gap-1 sm:gap-2 px-1">
                <div className="w-5 sm:w-8 h-[2px] bg-gradient-to-r from-[#ff9933] via-[#e63946] to-white opacity-80 shadow-[0_0_8px_#ff9933]" />
                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff] animate-ping" />
                <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-white via-[#e63946] to-[#ffcc00] opacity-80 shadow-[0_0_8px_#ffcc00]" />
                <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#ffcc00] animate-pulse" />
                <div className="w-5 sm:w-8 h-[2px] bg-gradient-to-r from-white via-[#e63946] to-[#ffcc00] opacity-80 shadow-[0_0_8px_#ffcc00]" />
              </div>

              {/* Germany Image Emblem */}
              <div className="flex flex-col items-center group">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 flex items-center justify-center p-2 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md shadow-[0_0_25px_rgba(255,204,0,0.25)] group-hover:scale-105 group-hover:border-[#ffcc00]/60 transition-all duration-300">
                  <Image
                    src="/images/de-Photoroom.png"
                    alt="Germany Quality Hub"
                    width={90}
                    height={90}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,204,0,0.5)]"
                  />
                </div>
                <span className="mt-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-red-100 group-hover:text-yellow-300 transition-colors font-outfit">
                  Germany
                </span>
              </div>
            </motion.div>

            {/* Center — Cinematic Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center lg:text-left max-w-2xl"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight mb-3 font-outfit">
                A bridge between{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-red-100 drop-shadow-sm">
                  Indian engineering talent
                </span>{' '}
                and{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-red-100 drop-shadow-sm">
                  German industrial standards
                </span>
              </h2>
              <p className="text-red-100/90 text-sm sm:text-base leading-relaxed font-light">
                Our Indo-German model combines cost-effective delivery with European precision — giving Energy and Water organizations the best of both worlds.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}