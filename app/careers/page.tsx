'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CTAStrip from '@/components/sections/CTAStrip'
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

const perks = [
  { icon: '🌍', title: 'Global Exposure', description: 'Work with clients and colleagues across India and Europe' },
  { icon: '🚀', title: 'Cutting-Edge Tech', description: 'Work on AI, automation, and modern software for critical infrastructure' },
  { icon: '📈', title: 'Career Growth', description: 'Clear growth paths with mentorship from senior engineers' },
  { icon: '🏠', title: 'Flexible Work', description: 'Hybrid work model with flexible hours' },
  { icon: '🤝', title: 'Inclusive Culture', description: 'Diverse Indo-German team that values every voice' },
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
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden flex items-center justify-center min-h-[60vh] bg-[#060608]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers.png"
            alt="Careers Hero"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#060608] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#060608] via-[#060608]/80 to-transparent opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end w-full">
          <div className="max-w-2xl text-right">
            <AnimateOnScroll direction="up">
              <div className="flex items-center justify-end gap-2 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                  Join the Team
                </span>
                <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Build the future of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-400">
                  energy technology
                </span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl ml-auto leading-relaxed font-light drop-shadow-lg">
                Join a team of engineers, AI specialists, and HR domain experts working on technology that powers critical infrastructure worldwide.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

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

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="group relative flex flex-col p-8 rounded-3xl bg-white/80 border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl hover:shadow-[0_20px_40px_rgba(150,34,40,0.16)] hover:border-[#962228]/40 transition-all duration-300 overflow-hidden">
                  {/* Crimson specular hover bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#962228] via-[#e63946] to-[#962228] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-[#962228]/10 border border-[#962228]/20 text-[#962228] group-hover:bg-[#962228] group-hover:text-white transition-all duration-300 shadow-sm">
                    {perk.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950 mb-2 tracking-tight font-plus-jakarta">{perk.title}</h3>
                    <p className="text-sm text-slate-700 font-normal leading-relaxed">{perk.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
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