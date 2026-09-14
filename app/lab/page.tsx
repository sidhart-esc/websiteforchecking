'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion'
import {
  Bot,
  FileSearch,
  Mic,
  MapPin,
  Cpu,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Database,
  Layers,
  Network,
  Waypoints,
  Route,
  Ruler,
  ListChecks,
  Camera,
  ClipboardCheck,
  TrendingUp,
  MessagesSquare,
  ShieldAlert,
  Activity,
  Radar,
  BrainCircuit,
  HeartPulse,
  Siren,
  ScanLine,
  FileText,
  CloudRain,
  Users,
} from 'lucide-react'
import Image from 'next/image'

// Reference one-pager designs are in public/images/lab/ — drop the matching
// file in for each `image` path below and it renders immediately, no code
// changes needed.
const caseStudies = [
  {
    tag: 'CASE STUDY // GRID DIGITAL TWIN',
    title: 'Spatial Digital Twins: Automated Missing Asset Mapping',
    image: '/images/lab/case-study-digital-twin-v2.png',
    description:
      'In modern electrical distribution, unmapped physical hardware leads to costly planning delays. Our Spatial Digital Twin automatically aligns unmapped grid points with the nearest viable road network, calculates real-world street-routing distances, and computes precise cable-run estimates for trenching planning.',
    bullets: [
      { icon: Waypoints, label: 'Dynamic Snapping' },
      { icon: Route, label: 'True Road Routing' },
      { icon: Ruler, label: 'Cable Run Estimates' },
      { icon: ListChecks, label: 'Risk-Prioritized Gaps' },
    ],
  },
  {
    tag: 'CASE STUDY // CUSTOMER PLATFORM',
    title: 'Smart Meter Reading & Customer Portal',
    image: '/images/lab/case-study-smart-meter-portal-v2.png',
    // This source is a tall infographic poster (headline text up top) rather
    // than a plain photo — shift the crop down so the card shows the actual
    // tablet product screen instead of just blank header space.
    imagePosition: '50% 55%',
    description:
      'Our AI-powered utility platform empowers customers to take control of their energy data — capturing and submitting meter readings directly through the app, anytime, anywhere, with automated support bridging customer convenience and back-office operations.',
    bullets: [
      { icon: Camera, label: 'Instant Photo Capture (OCR)' },
      { icon: ClipboardCheck, label: 'Manual & Offline Entry' },
      { icon: TrendingUp, label: 'Smart Analytics' },
      { icon: MessagesSquare, label: '24/7 AI Chatbot Support' },
    ],
  },
  {
    tag: 'CASE STUDY // ENERGY FORECASTING',
    title: 'Electricity Price Forecasting',
    image: '/images/lab/case-study-price-forecasting-v2.png',
    description:
      'An automated system predicting electricity prices in the German-Luxembourg (DE-LU) market — generating 96 individual price forecasts every day, pulling official market data from ENTSO-E, and correcting anomalies before they can ruin a forecast.',
    bullets: [
      { icon: TrendingUp, label: '96 Daily Forecasts' },
      { icon: Database, label: 'Automated ENTSO-E Ingestion' },
      { icon: ShieldAlert, label: 'Smart Error Correction' },
      { icon: Activity, label: 'Live Power BI Dashboards' },
    ],
  },
  {
    tag: 'CASE STUDY // GRID VIGILANCE',
    title: 'NetzWächter AI — The Future of Grid Vigilance',
    image: '/images/lab/case-study-netzwachter-ai-v2.png',
    description:
      'A sophisticated AI-driven guard that identifies, predicts, and resolves network incidents with surgical precision — detecting the subtle signatures of potential failures long before an outage occurs, and maintaining a real-time Digital Twin of the entire grid.',
    bullets: [
      { icon: Radar, label: 'Predictive Fault Detection' },
      { icon: BrainCircuit, label: 'Real-Time Digital Twin' },
      { icon: Siren, label: 'Automated Triage' },
      { icon: HeartPulse, label: 'Toward a Self-Healing Grid' },
    ],
  },
  {
    tag: 'CASE STUDY // BILLING & VALIDATION',
    title: 'AI-Enabled Meter Reading Validation & Bill Understanding',
    image: '/images/lab/case-study-zaehlerstandverwaltung-v2.png',
    description:
      'A white-label platform for German utility providers giving customers accurate meter readings and transparent billing — extracting digits directly from photos, flagging anomalies before they become billing disputes, and answering questions in plain language.',
    bullets: [
      { icon: Camera, label: 'Photo-Based Reading' },
      { icon: ScanLine, label: 'Smart Anomaly Validation' },
      { icon: FileText, label: 'Plain-Language Bill Assistant' },
      { icon: ShieldCheck, label: 'GDPR & BDSG Compliant' },
    ],
  },
  {
    tag: 'CASE STUDY // INCIDENT RESOLUTION',
    title: 'Grid Management: Smart Grid-Störungsmanager',
    image: '/images/lab/case-study-stoerungsmanager-v2.png',
    description:
      'An intelligent copilot that works alongside grid operators and technicians — grouping technical alarms into one clear incident, cross-referencing weather and equipment data to suggest the cause, and drafting the repair paperwork automatically. A human always approves every action.',
    bullets: [
      { icon: Siren, label: 'Alarm Correlation' },
      { icon: CloudRain, label: 'Weather & Equipment Context' },
      { icon: ClipboardCheck, label: 'Auto-Drafted Repair Tickets' },
      { icon: Users, label: 'Human-Approved Actions' },
    ],
  },
]

import SplineRobot from '@/components/ui/SplineRobot'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer'
import PageTransition from '@/components/ui/PageTransition'
import CTAStrip from '@/components/sections/CTAStrip'
import HeroBridge from '@/components/sections/HeroBridge'

export default function LabPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Page Scroll reference
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Spring physics config for smooth parallax
  const springConfig = { stiffness: 50, damping: 20 }

  // 1. HERO PARALLAX
  const heroGridY = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 100]), springConfig)

  // 2. PROJECT CARDS PARALLAX
  const p1Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: p1Progress } = useScroll({
    target: p1Ref,
    offset: ['start end', 'end start'],
  })
  const p1BgY = useSpring(useTransform(p1Progress, [0, 1], [-40, 40]), springConfig)

  const p2Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: p2Progress } = useScroll({
    target: p2Ref,
    offset: ['start end', 'end start'],
  })
  const p2BgY = useSpring(useTransform(p2Progress, [0, 1], [-40, 40]), springConfig)

  const p3Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: p3Progress } = useScroll({
    target: p3Ref,
    offset: ['start end', 'end start'],
  })
  const p3BgY = useSpring(useTransform(p3Progress, [0, 1], [-40, 40]), springConfig)

  // 3. CAPABILITIES PARALLAX
  const capRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: capProgress } = useScroll({
    target: capRef,
    offset: ['start end', 'end start'],
  })

  // 4. MANIFESTO PARALLAX
  const manRef = useRef<HTMLDivElement>(null)

  return (
    <PageTransition>
      <div ref={containerRef} className="bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#cbd5e1] text-slate-900 min-h-screen font-sans overflow-hidden shadow-inner">
        
        {/* ========================================================= */}
        {/* 1. HERO SECTION (ULTRA-TUNED SILVERISH THEME) */}
        {/* ========================================================= */}
        <section className="relative pt-40 pb-32 overflow-hidden min-h-[90vh] flex items-center justify-start text-left bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#e2e8f0] border-b border-slate-300/80">
          {/* Parallax Background Metallic Light Reflections & Silver Mesh */}
          <motion.div
            style={{ y: isMobile ? 0 : heroGridY }}
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
          >
            {/* Top Metallic Light Beam */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-60 blur-[130px]"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(226,232,240,0.7) 60%, transparent 100%)',
              }}
            />
            {/* Central Soft Crimson Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15 blur-[150px]"
              style={{
                background: 'radial-gradient(circle, rgba(150,34,40,0.6) 0%, transparent 70%)',
              }}
            />
            {/* Silver Metallic Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
              
              {/* Left Column — Editorial Typography */}
              <div className="lg:col-span-7 max-w-3xl text-left space-y-8">
                
                <AnimateOnScroll direction="up">
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#962228] font-mono">
                      ESC // AUTOMATION & INNOVATION LAB
                    </span>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.15}>
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-950 tracking-tight uppercase leading-[0.95] font-plus-jakarta">
                    WHERE IDEAS <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">
                      BECOME REAL.
                    </span>
                  </h1>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.25}>
                  <p className="text-slate-700 text-lg sm:text-xl leading-relaxed font-light max-w-xl border-l-2 border-[#962228] pl-5">
                    ESC's internal R&D engine — building real AI systems, document intelligence models, and autonomous utility agents that solve complex real-world challenges.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.35}>
                  <div className="pt-4 flex flex-wrap items-center gap-8 text-sm font-bold tracking-wider uppercase text-slate-800 font-outfit">
                    <a href="#projects" className="flex items-center gap-2 hover:text-[#962228] transition-colors group">
                      <span>Explore Projects</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <span className="text-slate-400">|</span>
                    <a href="#case-studies" className="flex items-center gap-2 hover:text-[#962228] transition-colors group">
                      <span>View Case Studies</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <span className="text-slate-400">|</span>
                    <a href="#manifesto" className="flex items-center gap-2 hover:text-[#962228] transition-colors group">
                      <span>Read Manifesto</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </AnimateOnScroll>

              </div>

              {/* Right Column — 3D ROBOT INTEGRATION */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="w-full h-[400px] sm:h-[460px] relative overflow-hidden rounded-3xl flex items-center justify-center pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/80 bg-white/40 backdrop-blur-xl"
                >
                  <div className="w-full h-[130%] absolute -top-[5%] left-0 pointer-events-auto">
                    <SplineRobot />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Indo-German Laser Banner Bridge */}
        <HeroBridge />


        {/* ========================================================= */}
        {/* 2. PROJECTS SHOWCASE SECTION (SILVER GLASS CARDS) */}
        {/* ========================================================= */}
        <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#e2e8f0] border-b border-slate-300/80">
          {/* Silver Metallic Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            
            <AnimateOnScroll className="mb-24 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228]">
                  FEATURED WORK & MILESTONES
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none font-plus-jakarta">
                PROJECTS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">ACHIEVEMENTS</span>
              </h2>
            </AnimateOnScroll>

            <div className="space-y-24">

              {/* PROJECT 1 */}
              <div ref={p1Ref} className="relative group">
                <motion.div
                  style={{ y: isMobile ? 0 : p1BgY }}
                  className="absolute inset-0 bg-white/85 rounded-3xl border border-white/90 group-hover:border-[#962228]/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.06)] group-hover:shadow-[0_25px_60px_rgba(150,34,40,0.18)] overflow-hidden backdrop-blur-2xl"
                >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#962228]/10 rounded-full blur-3xl pointer-events-none" />
                </motion.div>

                <AnimateOnScroll className="relative z-10 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wider text-[#962228] uppercase font-bold">
                      <span>PROJECT 01 // DEPLOYED · GERMANY</span>
                    </div>

                    <h3 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight uppercase leading-none font-plus-jakarta">
                      Stadtwerke Wülfrath Smart Assistant
                    </h3>

                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-normal">
                      A natural language assistant for water and gas infrastructure in Wülfrath, Germany. Ask questions in plain language — by typing or voice — and get instant answers, map visualizations, or downloadable spreadsheets.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {[
                        { icon: Mic, label: 'Voice & Text Input' },
                        { icon: MapPin, label: 'GIS Map Layers' },
                        { icon: Zap, label: 'Spreadsheet Export' },
                        { icon: Cpu, label: 'Telemetry Dashboard' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#962228]" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full h-64 sm:h-72 rounded-2xl bg-slate-950 border border-slate-800 p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl text-white">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-slate-800 pb-3">
                        <span className="text-white font-semibold">GIS QUERY ENGINE</span>
                        <span className="text-[#e0575f]">GERMANY DE</span>
                      </div>
                      
                      <div className="my-auto space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-slate-900 text-gray-300 border border-slate-800">
                          <span className="text-gray-500">&gt; VOICE QUERY:</span> "Show water main inspection status in Zone 4"
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-[#962228]/60 text-red-300">
                          <span className="text-emerald-400">✓ AI OUTPUT:</span> Rendered 14 telemetry nodes.
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-2 border-t border-slate-800">
                        <span>Status: Operational</span>
                        <span className="text-emerald-400 font-semibold">PRODUCTION LIVE</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>


              {/* PROJECT 2 */}
              <div ref={p2Ref} className="relative group">
                <motion.div
                  style={{ y: isMobile ? 0 : p2BgY }}
                  className="absolute inset-0 bg-white/85 rounded-3xl border border-white/90 group-hover:border-[#962228]/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.06)] group-hover:shadow-[0_25px_60px_rgba(150,34,40,0.18)] overflow-hidden backdrop-blur-2xl"
                >
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#962228]/10 rounded-full blur-3xl pointer-events-none" />
                </motion.div>

                <AnimateOnScroll className="relative z-10 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wider text-[#962228] uppercase font-bold">
                      <span>PROJECT 02 // HACKATHON WINNER · AGENTIC AI</span>
                    </div>

                    <h3 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight uppercase leading-none font-plus-jakarta">
                      Community Connect — AI for Society
                    </h3>

                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-normal">
                      Built at a Generative AI & Agentic AI Hackathon. An AI-powered platform that connects local community members with skilled household workers nearby — increasing community work rates and local economic stability.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {[
                        { icon: Bot, label: 'Agentic Workflows' },
                        { icon: Network, label: 'Community Matching' },
                        { icon: MapPin, label: 'Worker Discovery' },
                        { icon: Cpu, label: 'Impact Analytics' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#962228]" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full h-64 sm:h-72 rounded-2xl bg-slate-950 border border-slate-800 p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl text-white">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-slate-800 pb-3">
                        <span className="text-white font-semibold">AGENT NODE GRAPH</span>
                        <span className="text-[#e0575f]">MATCH ENGINE</span>
                      </div>
                      
                      <div className="relative my-auto h-28 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#962228]/40 border border-[#e0575f] flex items-center justify-center text-white z-10 shadow-[0_0_20px_#e0575f]">
                          <Bot size={22} />
                        </div>
                        <div className="absolute left-2 top-2 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-gray-300">
                          Resident Request
                        </div>
                        <div className="absolute right-2 bottom-2 px-2.5 py-1 rounded bg-slate-900 border border-emerald-800 text-[10px] font-mono text-emerald-400">
                          Worker Matched (98%)
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-2 border-t border-slate-800">
                        <span>Agent Routing: Active</span>
                        <span className="text-[#e0575f] font-semibold">AWARD BUILD</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>


              {/* PROJECT 3 */}
              <div ref={p3Ref} className="relative group">
                <motion.div
                  style={{ y: isMobile ? 0 : p3BgY }}
                  className="absolute inset-0 bg-white/85 rounded-3xl border border-white/90 group-hover:border-[#962228]/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.06)] group-hover:shadow-[0_25px_60px_rgba(150,34,40,0.18)] overflow-hidden backdrop-blur-2xl"
                >
                  <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#962228]/10 rounded-full blur-3xl pointer-events-none" />
                </motion.div>

                <AnimateOnScroll className="relative z-10 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wider text-[#962228] uppercase font-bold">
                      <span>PROJECT 03 // INTERNAL PLATFORM · RAG ENGINE</span>
                    </div>

                    <h3 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight uppercase leading-none font-plus-jakarta">
                      IDA — Intelligent Document AI
                    </h3>

                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-normal">
                      An internal AI platform that lets employees upload thousands of company documents (PDFs, Word files, scanned images) and ask questions in plain language. Every answer includes precise page references back to the exact source using a private vector database.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {[
                        { icon: FileSearch, label: 'Multi-Format Ingestion' },
                        { icon: Database, label: 'Vector Search (RAG)' },
                        { icon: CheckCircle2, label: 'Exact Page Citations' },
                        { icon: ShieldCheck, label: 'Private Enterprise Corpus' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#962228]" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full h-64 sm:h-72 rounded-2xl bg-slate-950 border border-slate-800 p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl text-white">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-slate-800 pb-3">
                        <span className="text-white font-semibold">VECTOR EMBEDDINGS</span>
                        <span className="text-[#e0575f]">48,210 DOCS</span>
                      </div>
                      
                      <div className="my-auto space-y-2.5 font-mono text-xs">
                        <div className="p-2.5 rounded bg-slate-900 text-gray-300 flex items-center justify-between border border-slate-800">
                          <span className="truncate">DIN_EN_12201_Standard.pdf</span>
                          <span className="text-[10px] text-emerald-400 ml-2">Cited p.42</span>
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 text-gray-300 flex items-center justify-between border border-slate-800">
                          <span className="truncate">Maintenance_Log_2025.docx</span>
                          <span className="text-[10px] text-emerald-400 ml-2">Cited p.118</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-2 border-t border-slate-800">
                        <span>Zero Hallucinations</span>
                        <span className="text-purple-400 font-semibold">ENTERPRISE RAG</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 2B. CASE STUDIES SECTION (SILVER GLASS IMAGE CARDS) */}
        {/* ========================================================= */}
        <section id="case-studies" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] border-b border-slate-300/80">
          {/* Silver Metallic Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">

            <AnimateOnScroll className="mb-20 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228]">
                  PROVEN IN PRODUCTION
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none font-plus-jakarta">
                CASE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">STUDIES</span>
              </h2>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {caseStudies.map((study, i) => (
                <StaggerItem key={study.title}>
                  <div className="h-full bg-white/85 border border-white/90 hover:border-[#962228]/40 rounded-3xl overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(150,34,40,0.18)] backdrop-blur-2xl flex flex-col group">

                    {/* Reference Image — drop the matching file into public/images/lab/ */}
                    <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] bg-slate-950 overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectPosition: study.imagePosition ?? '50% 0%' }}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-white bg-[#962228] shadow-md">
                        Case Study
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8 sm:p-10 flex-1 flex flex-col">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#962228] uppercase mb-3">
                        {study.tag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight font-plus-jakarta mb-4">
                        {study.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal mb-6">
                        {study.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto pt-2">
                        {study.bullets.map((item, bi) => (
                          <div key={bi} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                            <item.icon size={15} className="text-[#962228] flex-shrink-0" />
                            <span>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 3. CAPABILITIES SECTION (SILVER CARDS) */}
        {/* ========================================================= */}
        <section ref={capRef} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] border-b border-slate-300/80">
          <div className="max-w-6xl mx-auto relative z-10">
            <AnimateOnScroll className="text-left mb-20">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228]">
                  CORE TECH CAPABILITIES
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 uppercase leading-none font-plus-jakarta">
                WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">BUILD WITH</span>
              </h2>
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Agentic AI Systems',
                  desc: 'Autonomous multi-agent workflows capable of decision-making, task decomposition, and tools orchestration.',
                  icon: Bot,
                },
                {
                  title: 'RAG & Document Intelligence',
                  desc: 'Enterprise vector retrieval pipelines with strict citation mapping and zero external data leaks.',
                  icon: Database,
                },
                {
                  title: 'Voice & NLP Interfaces',
                  desc: 'Natural language understanding in multiple dialects, real-time voice synthesis, and speech-to-intent.',
                  icon: Mic,
                },
                {
                  title: 'Geospatial Visualization',
                  desc: 'Interactive map engines overlaying AI insights onto GIS vector layers for infrastructure planning.',
                  icon: MapPin,
                },
                {
                  title: 'LLM Fine-Tuning',
                  desc: 'Domain-adapted language models trained on domain terminology and municipal compliance rules.',
                  icon: Layers,
                },
                {
                  title: 'Intelligent Automation',
                  desc: 'End-to-end integration connecting legacy utility databases directly to modern neural execution layers.',
                  icon: Zap,
                },
              ].map((cap, i) => (
                <StaggerItem key={i}>
                  <div className="h-full bg-white/80 hover:bg-white border border-white/90 hover:border-[#962228]/40 rounded-3xl p-8 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(150,34,40,0.16)] flex flex-col justify-between group backdrop-blur-xl">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-[#962228]/10 border border-[#962228]/20 flex items-center justify-center text-[#962228] group-hover:scale-110 group-hover:bg-[#962228] group-hover:text-white transition-all duration-300 shadow-sm">
                          <cap.icon size={22} />
                        </div>
                        <span className="text-[11px] font-mono font-bold tracking-widest text-[#962228] uppercase">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-950 uppercase tracking-tight mb-3 group-hover:text-[#962228] transition-colors font-plus-jakarta">
                        {cap.title}
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed font-normal">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 4. LAB MANIFESTO SECTION (SILVER EDITORIAL IMPACT) */}
        {/* ========================================================= */}
        <section id="manifesto" ref={manRef} className="py-36 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#e2e8f0] border-b border-slate-300/80 overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10 text-center space-y-10">
            <AnimateOnScroll direction="none" duration={1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 shadow-sm mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#962228]">
                  // THE LAB MANIFESTO
                </span>
              </div>
              
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 uppercase font-plus-jakarta leading-none">
                WE DON&apos;T CONSULT.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-700">
                  WE BUILD.
                </span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2} direction="up">
              <p className="text-xl sm:text-3xl text-slate-800 font-medium max-w-3xl mx-auto leading-relaxed border-t border-b border-slate-300/80 py-10 my-8">
                "Every project in this lab started as a problem worth solving. We pick up the hard ones."
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.4} direction="up">
              <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-xs text-slate-700 font-bold tracking-widest uppercase">
                <span>// ZERO SLIDES</span>
                <span>// PRODUCTION CODE ONLY</span>
                <span>// REAL IMPACT</span>
              </div>
            </AnimateOnScroll>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 5. CTA SECTION */}
        {/* ========================================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] text-center shadow-inner">
          <div className="max-w-4xl mx-auto relative z-10">
            <AnimateOnScroll className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300 text-xs font-mono font-bold text-[#962228] shadow-sm backdrop-blur-md">
                <Cpu size={13} />
                <span>OPEN R&D INITIATIVES</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 uppercase font-plus-jakarta">
                Have an idea worth building?
              </h2>

              <p className="text-xl text-slate-700 font-normal max-w-xl mx-auto leading-relaxed">
                Bring it to the Lab.
              </p>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all duration-300 bg-gradient-to-r from-[#962228] to-[#b82830] hover:from-[#7a1b20] hover:to-[#962228] shadow-lg shadow-[#962228]/25 hover:shadow-xl hover:shadow-[#962228]/35 hover:scale-[1.02] active:scale-[0.98] font-outfit"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Global ESC CTA Strip */}
        <CTAStrip />

      </div>
    </PageTransition>
  )
}
