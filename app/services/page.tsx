'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import CTAStrip from '@/components/sections/CTAStrip'
import HeroBridge from '@/components/sections/HeroBridge'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const services = [
  {
    number: '01',
    title: 'Software Engineering',
    // Trimmed of the extra transparent padding the original file had around
    // the diorama, so it fills the box the same way the other images do —
    // see softwareengineering.png for the untouched original.
    image: '/images/softwareengineering-trimmed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'We design and develop custom software solutions tailored to the complex operational needs of Energy and Water organizations. From SCADA integrations to enterprise platforms, we build systems that are secure, scalable, and built to last decades.',
    capabilities: [
      'Custom application development',
      'SCADA & OT system integration',
      'Legacy system modernization',
      'API design & microservices',
      'Cloud-native architecture',
    ],
  },
  {
    number: '02',
    title: 'Generative AI',
    image: '/images/generative removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'We help Energy and Water organizations harness Generative AI responsibly — automating insight generation, enabling predictive maintenance, and building AI-powered tools that augment your team\'s capabilities without replacing domain expertise.',
    capabilities: [
      'AI strategy & roadmap consulting',
      'LLM integration & fine-tuning',
      'Predictive maintenance models',
      'Document intelligence & automation',
      'AI-powered reporting dashboards',
    ],
  },
  {
    number: '03',
    title: 'Intelligent Automation',
    image: '/images/automation removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'Our automation practice helps utility organizations eliminate repetitive manual work, reduce errors, and free up your team for higher-value tasks. We combine RPA, workflow automation, and AI to deliver end-to-end process transformation.',
    capabilities: [
      'Robotic Process Automation (RPA)',
      'Business process re-engineering',
      'Workflow & approval automation',
      'Data pipeline automation',
      'Compliance & audit automation',
    ],
  },
  {
    number: '04',
    title: 'IT Back-Office Services',
    image: '/images/backoffice removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'We provide dedicated IT back-office support tailored for utility organizations — from infrastructure management to helpdesk operations. Our Indo-German delivery model ensures quality European standards at competitive costs.',
    capabilities: [
      'IT infrastructure management',
      'Service desk & L1/L2/L3 support',
      'Cloud operations & monitoring',
      'Cybersecurity & compliance',
      'Vendor & license management',
    ],
  },
  {
    number: '05',
    title: 'Market Research & Analysis',
    image: '/images/market research removed.png',
    imageScale: 'scale-105 lg:scale-115 xl:scale-120',
    description:
      'We transform web-based market research into actionable business intelligence through systematic data capture, validation, analysis, and authentication — aligned with each client\'s specific requirements.',
    capabilities: [
      'Web-based market research',
      'Systematic data capture & validation',
      'Business intelligence & analytics',
      'Data authentication & verification',
      'Custom market insights reporting',
    ],
  },
]

const SilverServiceSequence = ({ service, index, totalServices, progress }: { service: any, index: number, totalServices: number, progress: MotionValue<number> }) => {
  // Dynamic step per service based on total length
  const step = 1 / totalServices
  const start = index * step
  
  // Timing within each step interval:
  const textFadeInStart = start + step * 0.15
  const textFadeInEnd = start + step * 0.35
  const fadeOutStart = start + step * 0.80
  const fadeOutEnd = start + step * 0.96

  // Opacity maps - strictly 4 points so Framer Motion correctly clamps out-of-bounds progress to 0
  const textOpacity = useTransform(
    progress,
    [textFadeInStart, textFadeInEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  )

  // Floating text effect
  const textY = useTransform(
    progress,
    [textFadeInStart, textFadeInEnd],
    [30, 0]
  )

  return (
    <motion.div
      style={{ opacity: textOpacity, y: textY }}
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Service Details & Capabilities */}
          <div className="lg:col-span-5 text-left relative z-10">
            {/* Step Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/90 border border-slate-300/90 mb-5 shadow-sm">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e0575f' }} />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-700 font-outfit">
                Service {service.number} of 0{totalServices}
              </span>
            </div>

            {/* Large Typography Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-5 tracking-tight leading-tight font-plus-jakarta">
              {service.title.split(' ').map((word: string, i: number, arr: string[]) => (
                <span key={i} className={i === arr.length - 1 ? 'font-bold' : ''} style={{ color: i === arr.length - 1 ? '#962228' : '#0f172a' }}>
                  {word}{' '}
                </span>
              ))}
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-6 max-w-xl">
              {service.description}
            </p>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {service.capabilities.map((cap: string) => (
                <div key={cap} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-300/80 shadow-sm hover:border-slate-400/80 transition-colors">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#e0575f' }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Prominent Floating Animated PNG Diorama */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end items-center overflow-visible">
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [-0.5, 0.5, -0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[480px] sm:h-[580px] lg:h-[680px] xl:h-[760px] w-full max-w-xl lg:max-w-3xl xl:max-w-4xl flex items-center justify-center lg:justify-end filter drop-shadow-[0_35px_70px_rgba(15,23,42,0.22)] translate-x-0 lg:translate-x-16 xl:translate-x-24"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`object-contain object-center lg:object-right transition-transform duration-500 ${service.imageScale || 'scale-105 lg:scale-115'}`}
                priority={index === 0}
                unoptimized={true}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <PageTransition>
      <div>
        {/* Silverish Hero Section */}
        <section className="relative pt-40 pb-32 overflow-hidden min-h-[60vh] flex items-center justify-start text-left bg-gradient-to-br from-slate-100 via-slate-200/60 to-slate-100">
          {/* The ESC background image first, then silver overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services1.png"
              alt="ESC Services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_75%] opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-100/85 via-slate-100/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-transparent to-slate-100/60 z-10 pointer-events-none" />
          </div>

          {/* Ambient background glows */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#962228]/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
            <div className="max-w-2xl text-right">
              <AnimateOnScroll direction="up">
                <div className="flex items-center justify-end gap-2 mb-8">
                  <span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-600 font-outfit">
                    What We Offer
                  </span>
                  <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
                </div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-slate-900 mb-8 tracking-tight font-plus-jakarta">
                  Our{' '}
                  <span className="font-extrabold" style={{ color: '#962228' }}>
                    Services
                  </span>
                </h1>
                <p className="text-slate-950 text-xl sm:text-2xl leading-relaxed font-semibold mb-12 drop-shadow-sm">
                  Specialized technology services built exclusively for the Energy
                  and Water industry — delivered with Indo-German precision.
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

        {/* The 1000vh timeline container in Silverish Metallic theme */}
        <div ref={containerRef} className="relative w-full h-[1000vh] bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200">
          {/* Ambient Silver Lighting Glows */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-slate-300/50 rounded-full blur-[160px]" />
            <div className="absolute top-2/3 right-1/4 w-[600px] h-[600px] bg-[#962228]/5 rounded-full blur-[180px]" />
          </div>

          {/* The sticky viewport screen */}
          <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
            
            {/* Render all sequences; opacity is controlled by scroll */}
            {services.map((service, idx) => (
              <SilverServiceSequence 
                key={service.title} 
                service={service} 
                index={idx} 
                totalServices={services.length}
                progress={scrollYProgress} 
              />
            ))}
            
            {/* Metallic Progress Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md h-2 bg-slate-300/90 rounded-full overflow-hidden shadow-inner z-30 p-[1px] border border-slate-300">
              <motion.div 
                className="h-full rounded-full bg-gradient-to-r from-[#962228] via-[#e0575f] to-[#962228]" 
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} 
              />
            </div>
          </div>
        </div>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}