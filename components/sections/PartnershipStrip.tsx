'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PartnershipStrip() {
  return (
    <section className="relative bg-gradient-to-r from-[#420b10] via-[#801b21] to-[#4c0d12] py-16 lg:py-20 overflow-hidden border-y border-[#e63946]/40 shadow-[0_0_50px_rgba(150,34,40,0.4)]">
      
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left — India & Germany Image Emblems with Cinematic Laser Bridge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-6 sm:gap-8"
          >
            {/* India Image Emblem */}
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center p-2 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md shadow-[0_0_25px_rgba(255,153,51,0.25)] group-hover:scale-105 group-hover:border-[#ff9933]/60 transition-all duration-300">
                <Image
                  src="/images/india-Photoroom.png"
                  alt="India Engineering Hub"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,153,51,0.5)]"
                />
              </div>
              <span className="mt-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-red-100 group-hover:text-amber-300 transition-colors font-outfit">
                India
              </span>
            </div>

            {/* Connecting Laser Energy Bridge Line */}
            <div className="relative flex items-center gap-1 sm:gap-2 px-1">
              <div className="w-6 sm:w-10 h-[2px] bg-gradient-to-r from-[#ff9933] via-[#e63946] to-white opacity-80 shadow-[0_0_8px_#ff9933]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#ffffff] animate-ping" />
              <div className="w-10 sm:w-16 h-[2px] bg-gradient-to-r from-white via-[#e63946] to-[#ffcc00] opacity-80 shadow-[0_0_8px_#ffcc00]" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#ffcc00] animate-pulse" />
              <div className="w-6 sm:w-10 h-[2px] bg-gradient-to-r from-white via-[#e63946] to-[#ffcc00] opacity-80 shadow-[0_0_8px_#ffcc00]" />
            </div>

            {/* Germany Image Emblem */}
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center p-2 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md shadow-[0_0_25px_rgba(255,204,0,0.25)] group-hover:scale-105 group-hover:border-[#ffcc00]/60 transition-all duration-300">
                <Image
                  src="/images/de-Photoroom.png"
                  alt="Germany Quality Hub"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,204,0,0.5)]"
                />
              </div>
              <span className="mt-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-red-100 group-hover:text-yellow-300 transition-colors font-outfit">
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
            className="text-center lg:text-left max-w-xl"
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

          {/* Right — Glowing Metallic Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-row lg:flex-col gap-8 lg:gap-5 text-center lg:text-right"
          >
            {[
              { value: '12+', label: 'Years of partnership' },
              { value: '3', label: 'Global offices' },
            ].map((stat) => (
              <div key={stat.label} className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-amber-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] font-outfit">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold text-red-200 uppercase tracking-widest mt-1 font-outfit">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}