'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Award, Lock, FileText, CheckCircle2, Maximize2, Download, ExternalLink, ArrowRight } from 'lucide-react'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTAStrip from '@/components/sections/CTAStrip'

export default function CertificationsPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <PageTransition>
      <div className="w-full bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#cbd5e1] text-slate-900 min-h-screen font-sans overflow-hidden shadow-inner">
        
        {/* ========================================================================= */}
        {/* HERO SECTION (#962228 Crimson Glow Theme matching Imprint & Data Protection) */}
        {/* ========================================================================= */}
        <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-[#962228] overflow-hidden border-b border-red-900/50">
          {/* Ambient Glowing Crimson Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(230,57,70,0.75) 0%, rgba(150,34,40,0.98) 60%, #6e181c 100%)',
            }}
          />

          {/* Glowing Ambient Light Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[140px]"
              style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(230,57,70,0.15) 50%, transparent 75%)' }}
              animate={{
                scale: [0.95, 1.1, 0.95],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Subtle Metallic Grid Line Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimateOnScroll direction="up" className="max-w-4xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-amber-300/30 shadow-md mb-6 backdrop-blur-md">
                <Award className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-white">
                  OFFICIAL CERTIFICATION &amp; ISMS COMPLIANCE
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.0] mb-6 font-plus-jakarta drop-shadow-lg">
                ISO/IEC 27001:2022 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-slate-200">
                  CERTIFIED.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl border-l-2 border-amber-400/50 pl-5">
                Commitment to Information Security Excellence — protecting customer data, utility infrastructure, and enterprise intelligence.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CERTIFICATION BODY (Silver Glass Panels matching Imprint/Data Protection) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] relative">
          {/* Silver Metallic Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* ========================================================================= */}
              {/* LEFT COLUMN: CERTIFICATE IMAGE DISPLAY & METADATA */}
              {/* ========================================================================= */}
              <div className="lg:col-span-5 space-y-8 sticky top-28">
                
                {/* Main High-Res Certificate Card */}
                <AnimateOnScroll direction="up" className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl text-center group">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#962228]/10 border border-[#962228]/20 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#962228]">
                      OFFICIAL DOCUMENTATION
                    </span>
                  </div>

                  {/* Interactive Certificate Preview Box */}
                  <div
                    onClick={() => setModalOpen(true)}
                    className="relative w-full aspect-[1/1.4] rounded-2xl overflow-hidden border border-slate-300 shadow-md group-hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-900"
                  >
                    <Image
                      src="/images/isms certificate.png"
                      alt="ISO/IEC 27001:2022 Certificate"
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Hover Overlay Badge */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest bg-slate-900/80 px-3 py-1 rounded-full">
                        Click to Expand
                      </span>
                    </div>
                  </div>

                  {/* Document Actions */}
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 border border-slate-300 hover:bg-slate-200 transition-colors font-outfit"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#962228]" />
                      <span>Expand View</span>
                    </button>
                    <a
                      href="/images/isms certificate.png"
                      download="ISO_27001_2022_Certificate_ESC.png"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#962228] hover:bg-[#7e1c21] transition-colors shadow-sm font-outfit"
                    >
                      <Download className="w-3.5 h-3.5 text-white" />
                      <span>Download</span>
                    </a>
                  </div>
                </AnimateOnScroll>

                {/* Certificate Quick Metadata Box */}
                <AnimateOnScroll direction="up" className="p-6 rounded-3xl bg-white/85 border border-white/90 shadow-md backdrop-blur-2xl space-y-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-3">
                    REGISTRATION METADATA
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-mono">Standard:</span>
                      <span className="font-bold text-slate-950 font-mono">ISO/IEC 27001:2022</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-mono">Domain:</span>
                      <span className="font-bold text-slate-950">Information Security (ISMS)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-mono">Verification:</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified Active
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-mono">Scope:</span>
                      <span className="font-bold text-slate-950">Software &amp; Utility Services</span>
                    </div>
                  </div>
                </AnimateOnScroll>

              </div>

              {/* ========================================================================= */}
              {/* RIGHT COLUMN: WRITINGS & DETAILS ABOUT THE CERTIFICATE */}
              {/* ========================================================================= */}
              <div className="lg:col-span-7 space-y-10 text-slate-800 font-normal leading-relaxed">
                
                {/* 01. HEADER & COMMITMENT STATEMENT */}
                <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-3">
                    01 // CERTIFICATION STATEMENT
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta tracking-tight mb-2">
                    ISO/IEC 27001:2022 Certified
                  </h2>
                  <p className="text-base sm:text-lg font-semibold text-[#962228] mb-6 font-outfit">
                    Commitment to Information Security Excellence
                  </p>

                  <div className="space-y-4 text-base text-slate-700 leading-relaxed font-light">
                    <p>
                      We are proud to maintain certification to <strong className="text-slate-950 font-semibold">ISO/IEC 27001:2022</strong>, the internationally recognized standard for Information Security Management Systems (ISMS). This certification demonstrates our commitment to protecting the confidentiality, integrity, and availability of information through the implementation of robust security controls, risk management practices, and continuous improvement processes.
                    </p>
                    <p>
                      Our Information Security Management System is designed to identify, assess, and manage information security risks while ensuring that business operations and customer data remain secure and resilient. Through adherence to ISO/IEC 27001:2022 requirements, we maintain a structured approach to safeguarding information assets and supporting regulatory and contractual obligations.
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* 02. WHAT ISO/IEC 27001:2022 MEANS */}
                <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-3">
                    02 // STANDARD FRAMEWORK
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-plus-jakarta tracking-tight mb-4">
                    What ISO/IEC 27001:2022 Means
                  </h2>

                  <p className="text-base text-slate-700 leading-relaxed font-light mb-6">
                    ISO/IEC 27001:2022 provides a comprehensive framework for establishing, implementing, maintaining, and continually improving an Information Security Management System. The standard promotes a risk-based approach to information security, helping organizations effectively manage threats, vulnerabilities, and emerging security challenges.
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                      By achieving this certification, our organization demonstrates that:
                    </p>
                    {[
                      'Information security risks are systematically identified, assessed, and managed.',
                      'Appropriate security controls are implemented and regularly reviewed.',
                      'Sensitive information is protected against unauthorized access, disclosure, alteration, and loss.',
                      'Security processes are continually monitored and improved.',
                      'Compliance with applicable legal, regulatory, and contractual requirements is maintained.',
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-[#962228] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-800">{point}</span>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>

                {/* 03. OUR SECURITY OBJECTIVES */}
                <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-3">
                    03 // CORE OBJECTIVES
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-plus-jakarta tracking-tight mb-4">
                    Our Security Objectives
                  </h2>

                  <p className="text-base text-slate-700 leading-relaxed font-light mb-6">
                    As part of our ISO/IEC 27001:2022 commitment, we strive to:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Protect customer, employee, and business information.',
                      'Ensure the secure operation of business processes and technology platforms.',
                      'Promote a culture of security awareness across the organization.',
                      'Maintain business continuity and operational resilience.',
                      'Continuously improve our information security controls and practices.',
                    ].map((obj, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-300 flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#962228] mt-2 flex-shrink-0" />
                        <span className="text-sm font-semibold text-slate-900 leading-snug">{obj}</span>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>

                {/* 04. ONGOING COMMITMENT */}
                <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/90 border border-[#962228]/30 shadow-[0_20px_50px_rgba(150,34,40,0.12)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-3">
                    04 // CONTINUOUS GOVERNANCE
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-plus-jakarta tracking-tight mb-4">
                    Ongoing Commitment
                  </h2>

                  <div className="space-y-4 text-base text-slate-700 font-light leading-relaxed">
                    <p>
                      Information security is an ongoing responsibility. Through regular audits, risk assessments, management reviews, and continuous monitoring activities, we ensure that our Information Security Management System remains effective and aligned with evolving business and security requirements.
                    </p>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-medium text-sm leading-relaxed">
                      Our ISO/IEC 27001:2022 certification reflects our dedication to maintaining the highest standards of information security and delivering trusted services to our customers and stakeholders.
                    </div>
                  </div>
                </AnimateOnScroll>

              </div>

            </div>
          </div>
        </section>

        {/* Modal Lightbox Viewer */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-3xl p-4 overflow-hidden border border-slate-700 shadow-2xl flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-[75vh]">
                  <Image
                    src="/images/isms certificate.png"
                    alt="ISO 27001 Full View"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-full pt-4 flex items-center justify-between border-t border-slate-800 text-white px-2">
                  <span className="text-xs font-mono font-bold text-slate-300">ISO/IEC 27001:2022 ISMS Certificate</span>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-xs font-bold font-outfit"
                  >
                    Close Viewer
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}
