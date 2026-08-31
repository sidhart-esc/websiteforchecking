'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Mail, Phone, Lock, FileText, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTAStrip from '@/components/sections/CTAStrip'

interface NavSection {
  id: string
  title: string
}

const SECTIONS: NavSection[] = [
  { id: 'overview', title: '01. Overview & Scope' },
  { id: 'collection', title: '02. Information We Collect' },
  { id: 'purpose', title: '03. Purpose & Legal Basis' },
  { id: 'security', title: '04. Data Security & Protection' },
  { id: 'cookies', title: '05. Cookies & Local Storage' },
  { id: 'third-party', title: '06. Third-Party Transfers' },
  { id: 'rights', title: '07. User & Data Subject Rights' },
  { id: 'retention', title: '08. Data Retention' },
  { id: 'contact', title: '09. Contact Information & DPO' },
]

export default function DataProtectionPage() {
  const [activeSection, setActiveSection] = useState<string>('overview')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 120
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <PageTransition>
      <div className="w-full bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#cbd5e1] text-slate-900 min-h-screen font-sans overflow-hidden shadow-inner">
        
        {/* ========================================================================= */}
        {/* HERO SECTION (#962228 Crimson Glow Theme matching Home Hero Banner) */}
        {/* ========================================================================= */}
        <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-[#962228] overflow-hidden border-b border-red-900/50">
          {/* Ambient Glowing Crimson Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(230,57,70,0.7) 0%, rgba(150,34,40,0.98) 60%, #6e181c 100%)',
            }}
          />

          {/* Glowing Ambient Light Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[140px]"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(230,57,70,0.15) 50%, transparent 75%)' }}
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
            <AnimateOnScroll direction="up" className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-md mb-6 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-white">
                  LEGAL &amp; PRIVACY POLICY
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[0.95] mb-6 font-plus-jakarta drop-shadow-lg">
                DATA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-slate-200">
                  PROTECTION.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl border-l-2 border-white/40 pl-5">
                Transparency and responsible handling of information are fundamental to how ESC Utility Services operates across India and Germany.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOCUMENT BODY WITH LAB-STYLE SILVER GLASS CARDS & STICKY NAVIGATION */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] relative">
          {/* Silver Metallic Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* DESKTOP STICKY SIDEBAR NAVIGATION (Matching Lab Silver Glass Card Style) */}
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-28 p-6 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#962228]/10 border border-[#962228]/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#962228] animate-pulse" />
                    <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#962228]">
                      TABLE OF CONTENTS
                    </span>
                  </div>

                  <nav className="space-y-1">
                    {SECTIONS.map((sec) => {
                      const isActive = activeSection === sec.id
                      return (
                        <button
                          key={sec.id}
                          onClick={() => scrollToSection(sec.id)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer font-outfit ${
                            isActive
                              ? 'bg-[#962228] text-white font-bold shadow-md shadow-[#962228]/20'
                              : 'text-slate-700 hover:text-slate-950 hover:bg-white/80'
                          }`}
                        >
                          <span>{sec.title}</span>
                          {isActive && <ChevronRight className="w-3.5 h-3.5" />}
                        </button>
                      )
                    })}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-slate-300/80 text-xs text-slate-600 space-y-2">
                    <p className="font-bold text-slate-900 font-outfit uppercase tracking-wider text-[10px]">Compliance Standard:</p>
                    <p className="font-normal leading-relaxed">EU General Data Protection Regulation (GDPR) &amp; Digital Personal Data Protection (DPDP) Act India.</p>
                  </div>
                </div>
              </aside>

              {/* MOBILE HORIZONTAL NAVIGATION SELECTOR */}
              <div className="lg:hidden col-span-1">
                <div className="p-4 rounded-2xl bg-white/90 border border-slate-300 shadow-sm overflow-x-auto flex items-center gap-2 no-scrollbar backdrop-blur-md">
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex-shrink-0 font-outfit ${
                        activeSection === sec.id
                          ? 'bg-[#962228] text-white font-bold'
                          : 'bg-slate-200 text-slate-800'
                      }`}
                    >
                      {sec.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* MAIN CONTENT AREA (Lab Silver Glass Panels) */}
              <main className="lg:col-span-8 space-y-12 text-slate-800 font-normal leading-relaxed">
                
                {/* 01. OVERVIEW */}
                <section id="overview" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 01 // GENERAL SCOPE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    01. Overview &amp; Scope
                  </h2>
                  <div className="space-y-4 text-base">
                    <p>
                      ESC Utility Services Pvt. Ltd. (&quot;ESC&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) takes the protection of your personal data very seriously. This Data Protection Policy explains how we collect, process, store, and safeguard information provided by visitors, clients, partners, and job applicants across our digital platforms and international operational hubs in India and Germany.
                    </p>
                    <p>
                      We comply with international data privacy standards, including the European Union General Data Protection Regulation (EU GDPR) and the Digital Personal Data Protection Act (DPDP Act, India). This notice applies to all websites, web applications, customer portals, and online services operated by ESC Utility Services.
                    </p>
                  </div>
                </section>

                {/* 02. INFORMATION WE COLLECT */}
                <section id="collection" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 02 // DATA CATEGORIES
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    02. Information We Collect
                  </h2>
                  <div className="space-y-4 text-base">
                    <p>
                      Depending on your interaction with ESC, we collect and process the following categories of data:
                    </p>
                    <ul className="space-y-3 pl-4 list-disc marker:text-[#962228]">
                      <li>
                        <strong className="text-slate-950">Contact &amp; Inquiry Information:</strong> Full name, professional email address, organization name, telephone number, and the specific contents of messages submitted through our contact forms or service inquiries.
                      </li>
                      <li>
                        <strong className="text-slate-950">Technical &amp; Log Data:</strong> Internet Protocol (IP) address, browser specifications, operating system details, referring URLs, access timestamps, and device identifiers automatically generated during your site visit.
                      </li>
                      <li>
                        <strong className="text-slate-950">Recruitment Data:</strong> Curriculum vitae (CV), employment background, academic credentials, cover letter notes, and contact details submitted when applying for open career positions.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 03. PURPOSE & LEGAL BASIS */}
                <section id="purpose" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 03 // LAWFUL PROCESSING
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    03. Purpose &amp; Legal Basis for Processing
                  </h2>
                  <div className="space-y-4 text-base">
                    <p>
                      We process personal data strictly in accordance with lawful legal bases:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-300">
                        <h4 className="font-bold text-slate-950 mb-1 font-plus-jakarta text-sm uppercase">Contractual Performance</h4>
                        <p className="text-xs text-slate-600 font-normal">Processing necessary to deliver requested technology services, fulfill project proposals, or execute contractual obligations.</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-300">
                        <h4 className="font-bold text-slate-950 mb-1 font-plus-jakarta text-sm uppercase">Legitimate Business Interest</h4>
                        <p className="text-xs text-slate-600 font-normal">Ensuring network security, optimizing web performance, maintaining client relationships, and protecting system infrastructure.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 04. DATA SECURITY */}
                <section id="security" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 04 // SAFEGUARDS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    04. Data Security &amp; Protection Measures
                  </h2>
                  <div className="space-y-4 text-base">
                    <p>
                      ESC implements state-of-the-art technical and organizational security protocols (TOMs) to safeguard personal data against unauthorized access, loss, destruction, alteration, or unlawful disclosure.
                    </p>
                    <p>
                      Security controls include end-to-end TLS/SSL encryption for data in transit, AES-256 encryption at rest, strict role-based access control, periodic vulnerability scans, and ISO-compliant server infrastructure.
                    </p>
                  </div>
                </section>

                {/* 05. COOKIES */}
                <section id="cookies" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 05 // TELEMETRY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    05. Cookies &amp; Local Storage
                  </h2>
                  <div className="space-y-4 text-base">
                    <p>
                      Our website utilizes essential technical cookies required for core navigation, layout rendering, and security features. We do not engage in intrusive cross-site tracking or commercial data brokerage.
                    </p>
                    <p>
                      You may adjust your browser configuration at any time to block or notify you about cookies, though certain interactive portions of the website may function with reduced capability.
                    </p>
                  </div>
                </section>

                {/* 06. THIRD-PARTY TRANSFERS */}
                <section id="third-party" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 06 // GLOBAL TRANSFERS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    06. Third-Party Services &amp; International Transfers
                  </h2>
                  <div className="space-y-4 text-base">
                    <p>
                      As an Indo-German technology organization, personal information may be transferred between our legal entities in Germany and India under Standard Contractual Clauses (SCCs) and strict data protection agreements ensuring equivalent security safeguards.
                    </p>
                    <p>
                      We never sell, lease, or commercialize your personal data to third parties. Data is shared with specialized service providers (e.g., hosting infrastructure, cloud databases) solely for operational delivery under strict Data Processing Agreements (DPAs).
                    </p>
                  </div>
                </section>

                {/* 07. USER RIGHTS */}
                <section id="rights" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 07 // STATUTORY RIGHTS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    07. User &amp; Data Subject Rights
                  </h2>
                  <div className="space-y-4 text-base">
                    <p>
                      Under applicable statutory data protection laws, you possess fundamental rights regarding your stored personal data:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-[#962228] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-950 block text-sm font-bold">Right of Access &amp; Information</strong>
                          <span className="text-xs text-slate-600 font-normal">Request confirmation regarding whether personal data relating to you is being processed, and receive a copy of stored records.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-[#962228] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-950 block text-sm font-bold">Right to Rectification &amp; Erasure</strong>
                          <span className="text-xs text-slate-600 font-normal">Request correction of inaccurate information or deletion of records where legal storage criteria no longer apply.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-[#962228] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-950 block text-sm font-bold">Right to Object &amp; Restrict Processing</strong>
                          <span className="text-xs text-slate-600 font-normal">Object to data processing based on legitimate interests or withdraw previously given consent at any time.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 08. RETENTION */}
                <section id="retention" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 08 // RETENTION PERIODS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    08. Data Retention &amp; Storage Period
                  </h2>
                  <div className="space-y-4 text-base">
                    <p>
                      Personal data is retained only for as long as necessary to fulfill the specific purposes for which it was collected, or to comply with statutory legal, tax, or regulatory archiving requirements.
                    </p>
                    <p>
                      Upon expiration of applicable retention periods, data is securely erased or permanently anonymized in accordance with industry best practices.
                    </p>
                  </div>
                </section>

                {/* 09. CONTACT & DPO */}
                <section id="contact" className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-white/90 border border-[#962228]/30 shadow-[0_20px_50px_rgba(150,34,40,0.12)] backdrop-blur-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#962228] block mb-2">
                    SECTION 09 // PRIVACY OFFICER
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    09. Contact Information &amp; DPO
                  </h2>
                  <div className="space-y-6">
                    <p className="text-base">
                      If you have questions regarding this Data Protection Policy, wish to exercise your legal data rights, or submit a privacy inquiry, please contact our Data Protection Officer:
                    </p>

                    <div className="space-y-3 text-sm pt-4 border-t border-slate-300/80">
                      <p className="font-bold text-slate-950 font-plus-jakarta text-base">Data Protection Officer &bull; ESC Utility Services</p>
                      <p className="text-slate-700 flex items-center gap-2 font-medium">
                        <Mail className="w-4 h-4 text-[#962228]" />
                        <span>E-Mail:</span>
                        <a href="mailto:info@esc-ind.com" className="text-[#962228] hover:underline font-bold">
                          info@esc-ind.com
                        </a>
                      </p>
                      <p className="text-slate-700 flex items-center gap-2 font-medium">
                        <Phone className="w-4 h-4 text-[#962228]" />
                        <span>Telephone:</span>
                        <a href="tel:+914714066071" className="text-slate-950 hover:text-[#962228] font-mono font-bold">
                          +91 471 40660 71
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

              </main>

            </div>
          </div>
        </section>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}
