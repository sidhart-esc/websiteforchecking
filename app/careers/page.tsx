'use client'

import Link from 'next/link'
import Image from 'next/image'
import CTAStrip from '@/components/sections/CTAStrip'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer'

const openings = [
  {
    title: 'Senior Software Engineer',
    location: '🇮🇳 Bangalore, India',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Build and maintain enterprise-grade software solutions for Energy and Water clients. Strong experience with Java, Python, or Node.js required.',
  },
  {
    title: 'AI/ML Engineer',
    location: '🇮🇳 Bangalore, India',
    type: 'Full-time',
    department: 'Generative AI',
    description: 'Design and deploy machine learning models and LLM-based solutions for utility sector clients. Experience with Python, PyTorch, and LangChain preferred.',
  },
  {
    title: 'RPA Developer',
    location: '🇮🇳 Bangalore, India',
    type: 'Full-time',
    department: 'Automation',
    description: 'Develop and maintain robotic process automation solutions using UiPath or Automation Anywhere for our utility sector clients.',
  },
  {
    title: 'IT Support Engineer',
    location: '🇩🇪 Munich, Germany',
    type: 'Full-time',
    department: 'IT Back-Office',
    description: 'Provide L2/L3 IT support and infrastructure management for European Energy and Water organizations.',
  },
  {
    title: 'Business Development Manager',
    location: '🇩🇪 Munich, Germany',
    type: 'Full-time',
    department: 'Sales',
    description: 'Drive new business development across the DACH region, building relationships with utility sector decision-makers.',
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
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden flex items-center justify-center min-h-[60vh] bg-[#060608]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aboutherosection.png"
            alt="Careers Hero"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#060608] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-transparent to-[#060608] opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll direction="up">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
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
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
              Join a team of engineers, AI specialists, and industry experts
              working on technology that powers critical infrastructure worldwide.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Perks / Cinematic Punch */}
      <section className="bg-[#060608] py-24 relative overflow-hidden">
        {/* Cinematic Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#962228]/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Why ESC
              </span>
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Why work{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] to-red-500">with us</span>
            </h2>
          </AnimateOnScroll>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="group relative flex flex-col p-8 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-md hover:bg-neutral-900/80 hover:border-[#e63946]/50 hover:shadow-[0_0_40px_rgba(230,57,70,0.2)] transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e63946] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 bg-white/[0.03] border border-white/10 group-hover:bg-[#962228]/20 group-hover:border-[#e63946]/40 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  >
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-red-100 transition-colors">{perk.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">{perk.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Openings */}
      <section className="bg-black py-24 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Open Roles
              </span>
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Current{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] to-red-500">Openings</span>
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="space-y-6">
            {openings.map((job) => (
              <StaggerItem key={job.title}>
                <div className="group bg-neutral-900/60 rounded-2xl p-8 border border-white/10 hover:border-[#e63946]/70 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(230,57,70,0.2)] backdrop-blur-md transition-all duration-300 relative overflow-hidden">
                  {/* Left glowing edge on hover */}
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#962228] to-[#e63946] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pl-2">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-lg tracking-wide uppercase" style={{ backgroundColor: '#962228' }}>
                          {job.department}
                        </span>
                        <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20 tracking-wide uppercase">
                          {job.type}
                        </span>
                        <span className="text-xs font-semibold text-gray-400 bg-black/50 px-3 py-1.5 rounded-full border border-white/5">{job.location}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">{job.title}</h3>
                      <p className="text-base text-gray-400 leading-relaxed font-light line-clamp-2 md:line-clamp-none">{job.description}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-[#962228] to-[#e63946] hover:shadow-[0_0_25px_rgba(230,57,70,0.6)] hover:-translate-y-1"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll direction="up" delay={0.2} className="mt-12">
            <div className="rounded-2xl p-10 text-center border-2 border-dashed bg-neutral-900/30 backdrop-blur-sm" style={{ borderColor: '#962228' }}>
              <p className="text-xl text-white mb-3 font-bold tracking-tight">Don't see a role that fits?</p>
              <p className="text-base text-gray-400 mb-8 font-light max-w-lg mx-auto">
                We're always looking for talented people. Send us your CV and we'll keep you in mind for future openings.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-white rounded-xl transition-all duration-300 bg-white/5 border border-white/20 hover:bg-[#962228]/20 hover:border-[#e63946]/50 hover:shadow-[0_0_20px_rgba(230,57,70,0.3)]"
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