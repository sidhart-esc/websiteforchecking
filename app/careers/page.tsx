'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Transition } from 'framer-motion'
import { Globe, Rocket, TrendingUp, Home, HeartHandshake, HeartPulse } from 'lucide-react'
import CTAStrip from '@/components/sections/CTAStrip'
import HeroBridge from '@/components/sections/HeroBridge'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer'

interface JobListingItem {
  id: string
  title: string
  location: string
  type: string
  department: string
  description: string
  salary?: string | null
}

const defaultOpenings: JobListingItem[] = [
  {
    id: '1',
    title: 'Senior Software Engineer (Indo-German Team)',
    location: 'Munich, Germany / Hybrid',
    type: 'Full-time',
    department: 'Software Engineering',
    description: 'Build and maintain enterprise-grade software solutions for Energy and Water clients. Strong experience with Next.js, React, and Node.js required.',
  },
  {
    id: '2',
    title: 'AI & Data Solutions Architect',
    location: 'Bangalore, India / Remote',
    type: 'Full-time',
    department: 'Generative AI',
    description: 'Lead the architectural design and deployment of Large Language Models (LLMs) and Document Intelligence platforms for regulated energy clients.',
  },
  {
    id: '3',
    title: 'Talent Acquisition Partner (HR)',
    location: 'Bangalore, India',
    type: 'Full-time',
    department: 'Human Resources',
    description: 'Join our HR team to lead tech recruitment across software development, AI, and project management for our Indo-German operations.',
  },
]

// Per-icon "living" animation — a lightweight, brand-colored stand-in for an
// animated GIF. Crisper than a GIF at any size and themeable, since it's just
// the SVG icon in motion rather than a fixed-palette raster loop.
type MotionPreset = 'spin' | 'launch' | 'grow' | 'breathe' | 'heartbeat'

const motionPresets: Record<MotionPreset, { animate: Record<string, number[]>; transition: Transition }> = {
  spin: {
    animate: { rotateY: [0, 360] },
    transition: { duration: 4, repeat: Infinity, ease: 'linear' },
  },
  launch: {
    animate: { y: [0, -6, 0], rotate: [-6, 6, -6] },
    transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
  },
  grow: {
    animate: { y: [0, -4, 0] },
    transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
  },
  breathe: {
    animate: { scale: [1, 1.1, 1] },
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
  heartbeat: {
    animate: { scale: [1, 1.2, 1, 1.12, 1] },
    transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
  },
}

const perks = [
  {
    icon: Globe,
    motion: 'spin' as MotionPreset,
    title: 'Global Exposure',
    description: 'Work with clients and colleagues across India and Europe, collaborating daily across time zones and engineering disciplines on infrastructure that matters.',
    featured: true,
  },
  {
    icon: Rocket,
    motion: 'launch' as MotionPreset,
    title: 'Cutting-Edge Tech',
    description: 'Work on AI, automation, and modern software for critical infrastructure — solving problems most engineers never get the chance to touch.',
    featured: true,
  },
  { icon: TrendingUp, motion: 'grow' as MotionPreset, title: 'Career Growth', description: 'Clear growth paths with mentorship from senior engineers.' },
  { icon: Home, motion: 'breathe' as MotionPreset, title: 'Flexible Work', description: 'Hybrid work model with flexible hours that fit your life.' },
  { icon: HeartHandshake, motion: 'heartbeat' as MotionPreset, title: 'Inclusive Culture', description: 'A diverse Indo-German team that values every voice at the table.' },
  { icon: HeartPulse, motion: 'heartbeat' as MotionPreset, title: 'Health & Wellness', description: 'Comprehensive health coverage and wellness support for you and your family.' },
]

export default function CareersPage() {
  const [openings, setOpenings] = useState<JobListingItem[]>(defaultOpenings)

  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await fetch('/api/public/data')
        const data = await res.json()
        if (data.jobs && Array.isArray(data.jobs) && data.jobs.length > 0) {
          setOpenings(data.jobs)
        }
      } catch (err) {
        console.error('Error loading public jobs:', err)
      }
    }
    loadJobs()
  }, [])

  return (
    <PageTransition>
      {/* Silverish Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden min-h-[60vh] flex items-center justify-start text-left bg-gradient-to-br from-slate-100 via-slate-200/60 to-slate-100">
        {/* Background image — ESC keyboard image first, then silver overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers.png"
            alt="ESC Careers"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
          <div className="max-w-2xl text-right">
            <AnimateOnScroll direction="up">
              <div className="flex items-center justify-end gap-2 mb-8">
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-600 font-outfit">
                  Join the Team
                </span>
                <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-slate-900 mb-8 tracking-tight font-plus-jakarta">
                Our{' '}
                <span className="font-extrabold" style={{ color: '#962228' }}>
                  Careers
                </span>
              </h1>
              <p className="text-slate-950 text-xl sm:text-2xl leading-relaxed font-semibold mb-12 drop-shadow-sm">
                Join a team of engineers, AI specialists, and utility domain experts building technology for critical infrastructure worldwide.
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

      {/* Perks (Why ESC) Section in Silver Theme */}
      <section className="bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#e2e8f0] py-24 relative overflow-hidden border-b border-slate-300/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#962228]/10 rounded-full blur-[150px] pointer-events-none" />
        {/* Silver Metallic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="mb-16 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#962228] font-outfit">
                Why ESC
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-plus-jakarta">
              Why work{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">with us</span>
            </h2>
          </AnimateOnScroll>

          {/* Featured pair — the two most compelling reasons get room to breathe */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {perks.filter((perk) => perk.featured).map((perk) => {
              const Icon = perk.icon
              return (
                <StaggerItem key={perk.title}>
                  <div className="group relative h-full flex flex-col justify-center p-8 sm:p-10 rounded-3xl bg-white/80 border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl hover:shadow-[0_25px_50px_rgba(150,34,40,0.18)] hover:border-[#962228]/40 transition-all duration-500 overflow-hidden">
                    {/* Giant watermark icon */}
                    <Icon className="absolute -right-8 -bottom-8 w-44 h-44 text-[#962228]/[0.06] group-hover:text-[#962228]/[0.1] group-hover:scale-105 transition-all duration-500" strokeWidth={1} />
                    {/* Top accent reveal */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#962228] via-[#e63946] to-[#962228] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="relative z-10 flex items-start gap-5">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#962228] to-[#e63946] text-white shadow-lg shadow-[#962228]/30 group-hover:scale-110 transition-transform duration-300"
                        style={{ perspective: 300 }}
                      >
                        <motion.div
                          animate={motionPresets[perk.motion].animate}
                          transition={motionPresets[perk.motion].transition}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <Icon size={28} />
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate-950 mb-2 tracking-tight font-plus-jakarta">{perk.title}</h3>
                        <p className="text-base text-slate-600 font-normal leading-relaxed max-w-md">{perk.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          {/* Remaining perks — tighter supporting grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.filter((perk) => !perk.featured).map((perk) => {
              const Icon = perk.icon
              return (
                <StaggerItem key={perk.title}>
                  <div className="group relative h-full flex flex-col p-7 rounded-2xl bg-white/80 border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl hover:shadow-[0_20px_40px_rgba(150,34,40,0.16)] hover:border-[#962228]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#962228] via-[#e63946] to-[#962228] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#962228]/10 border border-[#962228]/20 text-[#962228] group-hover:bg-[#962228] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm"
                      style={{ perspective: 300 }}
                    >
                      <motion.div
                        animate={motionPresets[perk.motion].animate}
                        transition={motionPresets[perk.motion].transition}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Icon size={22} />
                      </motion.div>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-950 mb-1.5 tracking-tight font-plus-jakarta">{perk.title}</h3>
                    <p className="text-sm text-slate-600 font-normal leading-relaxed">{perk.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Openings Section in Silver Metallic Theme */}
      <section className="bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] py-24 relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="mb-16 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#962228] font-outfit">
                Open Roles
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-plus-jakarta">
              Current{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">Openings</span>
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="space-y-6">
            {openings.map((job) => (
              <StaggerItem key={job.id}>
                <div className="group bg-white/90 rounded-3xl p-8 border border-slate-300/80 hover:border-[#962228]/50 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(150,34,40,0.18)] backdrop-blur-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#962228] to-[#e63946] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pl-2">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-bold px-3.5 py-1.5 rounded-full text-white shadow-md tracking-wide uppercase font-outfit" style={{ backgroundColor: '#962228' }}>
                          {job.department}
                        </span>
                        <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 border border-slate-300 tracking-wide uppercase font-outfit">
                          {job.type}
                        </span>
                        <span className="text-xs font-semibold text-slate-700 bg-slate-100/90 px-3.5 py-1.5 rounded-full border border-slate-300 font-outfit">
                          {job.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-950 mb-3 tracking-tight font-plus-jakarta">{job.title}</h3>
                      <p className="text-base text-slate-700 leading-relaxed font-normal line-clamp-2 md:line-clamp-none">{job.description}</p>
                    </div>

                    <Link
                      href="/contact"
                      className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-white rounded-2xl transition-all duration-300 bg-gradient-to-r from-[#962228] to-[#b82830] hover:from-[#7a1b20] hover:to-[#962228] shadow-lg shadow-[#962228]/25 hover:shadow-xl hover:shadow-[#962228]/35 hover:-translate-y-1 font-outfit"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll direction="up" delay={0.2} className="mt-12">
            <div className="rounded-3xl p-10 text-center border-2 border-dashed border-[#962228]/50 bg-white/80 backdrop-blur-md shadow-lg">
              <p className="text-xl text-slate-950 mb-3 font-extrabold tracking-tight font-plus-jakarta">Don't see a role that fits?</p>
              <p className="text-base text-slate-700 mb-8 font-normal max-w-lg mx-auto leading-relaxed">
                We're always looking for talented people. Send us your CV and we'll keep you in mind for future openings.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-slate-900 rounded-2xl transition-all duration-300 bg-white border border-slate-300 hover:border-[#962228] hover:text-[#962228] shadow-md hover:shadow-lg font-outfit"
              >
                Send Spontaneous Application
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTAStrip />
    </PageTransition>
  )
}