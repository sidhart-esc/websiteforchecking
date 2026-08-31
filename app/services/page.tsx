'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import CTAStrip from '@/components/sections/CTAStrip'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const services = [
  {
    title: 'Software Engineering',
    image: '/images/softwareengineering.png',
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
    title: 'Generative AI',
    image: '/images/generative ai.png',
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
    title: 'Intelligent Automation',
    image: '/images/automation.png',
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
    title: 'IT Back-Office Services',
    image: '/images/sap.png',
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
    title: 'Market Research & Analysis',
    image: '/images/market.png',
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

const CinematicServiceSequence = ({ service, index, totalServices, progress }: { service: any, index: number, totalServices: number, progress: MotionValue<number> }) => {
  // Dynamic step per service based on total length
  const step = 1 / totalServices
  const start = index * step
  
  // Timing within each step interval: 
  // 1. Image fades in first
  const imgFadeInStart = start
  const imgFadeInEnd = start + step * 0.16
  
  // 2. Text fades in after Image
  const textFadeInStart = start + step * 0.24
  const textFadeInEnd = start + step * 0.40
  
  // 3. Both fade out together
  const fadeOutStart = start + step * 0.80
  const fadeOutEnd = start + step * 0.96

  // Opacity maps - strictly 4 points so Framer Motion correctly clamps out-of-bounds progress to 0
  const textOpacity = useTransform(
    progress,
    [textFadeInStart, textFadeInEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  )

  const imageOpacity = useTransform(
    progress,
    [imgFadeInStart, imgFadeInEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  )
  
  // Subtle cinematic zoom on the image while it is visible
  const imageScale = useTransform(
    progress,
    [imgFadeInStart, fadeOutEnd],
    [1.08, 1.0]
  )

  // Floating text effect
  const textY = useTransform(
    progress,
    [textFadeInStart, textFadeInEnd],
    [30, 0]
  )

  return (
    <>
      {/* IMAGE LAYER (Full Screen for maximum projection) */}
      <motion.div
        style={{ opacity: imageOpacity, scale: imageScale }}
        className="absolute inset-0 z-10 pointer-events-none pt-16"
      >
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          className="object-cover object-top lg:object-[center_top]" 
          priority={index === 0} 
          unoptimized={true}
        />
        {/* Dark Gradient Overlay anchored to the left for clean text readability without any box */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent w-full lg:w-[65%]" />
      </motion.div>

      {/* TEXT LAYER (Anchored to Left, cleanly without any card box container) */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute inset-y-0 left-0 w-full lg:w-[50%] flex items-center justify-center p-8 sm:p-12 lg:p-20 z-20 pointer-events-none"
      >
        <div className="w-full text-left pointer-events-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight font-plus-jakarta">
            {service.title.split(' ').map((word: string, i: number, arr: string[]) => (
              <span key={i} className={i === arr.length - 1 ? 'font-bold' : ''} style={{ color: i === arr.length - 1 ? '#e0575f' : 'white' }}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light mb-12 max-w-lg">
            {service.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 max-w-xl text-left">
            {service.capabilities.map((cap: string) => (
              <div key={cap} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: '#e0575f' }}
                />
                <span className="text-sm sm:text-base text-gray-300">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress exclusively through the 800vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <PageTransition>
      <div className="bg-black">
        {/* Original Dark Hero Section */}
        <section className="relative pt-40 pb-32 overflow-hidden min-h-[60vh] flex items-center justify-start text-left bg-black">
          {/* The ESC background image */}
          <div className="absolute inset-0 pt-16">
            <Image
              src="/images/services1.png"
              alt="ESC Services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top lg:object-[center_top] opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
          </div>

          {/* Ambient background glows */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#962228]/15 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
            <div className="max-w-2xl text-right">
              <AnimateOnScroll direction="up">
                <div className="flex items-center justify-end gap-2 mb-8">
                  <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 font-outfit">
                    What We Offer
                  </span>
                  <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
                </div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight font-plus-jakarta">
                  Our{' '}
                  <span className="font-extrabold" style={{ color: '#e0575f' }}>
                    Services
                  </span>
                </h1>
                <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed font-light mb-12">
                  Specialized technology services built exclusively for the Energy
                  and Water industry — delivered with Indo-German precision.
                </p>
                
                {/* Scroll down indicator */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-end justify-end text-gray-400 mt-16"
                >
                  <span className="text-xs uppercase tracking-widest mb-3 font-outfit font-bold">Scroll To Explore</span>
                  <div className="w-[2px] h-12 bg-gradient-to-b from-[#e0575f] to-transparent" />
                </motion.div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* The 1000vh timeline container in black */}
        <div ref={containerRef} className="relative w-full h-[1000vh] bg-black">
          {/* The sticky viewport screen */}
          <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
            
            {/* Render all sequences on top of each other; opacity is controlled by scroll */}
            {services.map((service, idx) => (
              <CinematicServiceSequence 
                key={service.title} 
                service={service} 
                index={idx} 
                totalServices={services.length}
                progress={scrollYProgress} 
              />
            ))}
            
            {/* Cinematic Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#962228] to-[#e0575f]" 
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