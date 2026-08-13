'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Users2,
  Globe2,
  Award,
  Sparkles,
} from 'lucide-react'

const stats = [
  {
    icon: Award,
    value: '12+',
    label: 'Years of Engineering Excellence',
    desc: 'Deep utility domain knowledge since 2012',
  },
  {
    icon: Building2,
    value: '50+',
    label: 'Enterprise Utility Clients',
    desc: 'Trusted across Europe & India',
  },
  {
    icon: ShieldCheck,
    value: '2',
    label: 'Core Specialized Sectors',
    desc: 'Energy Grid & Smart Water Operations',
  },
  {
    icon: Globe2,
    value: '3',
    label: 'Global Delivery Centers',
    desc: 'Germany & Indian Technology Hubs',
  },
]

export default function AboutTeaser() {
  return (
    <section className="relative bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] py-24 lg:py-32 overflow-hidden border-y border-slate-300/80 shadow-inner">
      {/* Background Metallic Light Reflections & Silver Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Metallic Light Beam */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-40 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(226,232,240,0.6) 60%, transparent 100%)',
          }}
        />

        {/* Bottom Crimson Accent Glow */}
        <div
          className="absolute -bottom-40 right-10 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(150,34,40,0.5) 0%, transparent 70%)',
          }}
        />

        {/* Silver Metallic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text & Value Proposition with Motion Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6"
          >
            {/* Section Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-6 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#962228] font-outfit">
                Who We Are
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6 font-plus-jakarta"
            >
              Trusted by leading{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">
                Energy & Water
              </span>{' '}
              organizations worldwide
            </motion.h2>

            {/* Sub-Description Paragraphs */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-700 text-base sm:text-lg font-light leading-relaxed mb-4"
            >
              ESC Utility Services is a specialized Indo-German technology partner delivering mission-critical software, AI diagnostics, and RPA automation to global Energy and Water networks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-8"
            >
              Founded on the principle of combining Indian engineering speed with German industrial precision, we help utility leaders modernize SCADA infrastructure, optimize asset lifecycle, and achieve operational sustainability.
            </motion.p>

            {/* Action Link Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#962228] to-[#b82830] hover:from-[#7a1b20] hover:to-[#962228] rounded-2xl shadow-lg shadow-[#962228]/25 hover:shadow-xl hover:shadow-[#962228]/35 transition-all duration-300 font-outfit"
              >
                <span>Learn More About ESC</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Glassmorphic Silver Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {stats.map((stat, index) => {
              const IconComp = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative"
                >
                  {/* SILVER GLASS CARD CONTAINER */}
                  <div className="relative h-full p-7 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_rgba(150,34,40,0.18)] group-hover:border-[#962228]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                    
                    {/* Top Animated Crimson Specular Line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#962228] via-[#e63946] to-[#962228] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Specular White Top Highlight */}
                    <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

                    <div>
                      {/* Icon & Sparkle Row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-[#962228]/10 to-[#e63946]/10 border border-[#962228]/20 text-[#962228] group-hover:bg-[#962228] group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(150,34,40,0.3)]">
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        <Sparkles className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Animated Metallic Stat Number */}
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#962228] mb-1.5 tracking-tight font-plus-jakarta drop-shadow-sm group-hover:scale-105 origin-left transition-transform duration-300">
                        {stat.value}
                      </div>

                      {/* Title Label */}
                      <div className="text-sm font-bold text-slate-800 mb-1 leading-snug font-outfit">
                        {stat.label}
                      </div>

                      {/* Brief Sub-Description */}
                      <div className="text-xs text-slate-500 font-light leading-relaxed">
                        {stat.desc}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}