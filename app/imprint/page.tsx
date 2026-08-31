'use client'

import { motion } from 'framer-motion'
import { FileText, Building2, UserCheck, ShieldAlert, Palette, Mail, Phone, ExternalLink } from 'lucide-react'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CTAStrip from '@/components/sections/CTAStrip'

export default function ImprintPage() {
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
                <FileText className="w-4 h-4 text-white" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-white">
                  LEGAL INFORMATION
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[0.95] mb-6 font-plus-jakarta drop-shadow-lg">
                IMPRINT.
              </h1>

              <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl border-l-2 border-white/40 pl-5">
                Company information, legal notices and website credits for ESC Utility Services.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* REFINED EDITORIAL IMPRINT SECTIONS (Silver Glass Panels) */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#cbd5e1] relative">
          {/* Silver Metallic Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
            
            {/* 01. COMPANY INFORMATION & 02. CORPORATE HEAD OFFICE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* 01. INDIA OFFICE */}
              <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-3">
                    01 // OPERATING ENTITY (INDIA)
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    ESC Utility Services Pvt. Ltd.
                  </h2>
                  <div className="space-y-1.5 text-slate-700 text-sm font-normal mb-8 leading-relaxed">
                    <p>Module 2605, 6th Floor</p>
                    <p>Yamuna Tower</p>
                    <p>Technopark Phase III Campus</p>
                    <p>Trivandrum 695583, Kerala</p>
                    <p className="font-bold text-slate-950">India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-300/80 space-y-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] font-mono font-bold">Telephone</span>
                    <a href="tel:+914714066071" className="text-slate-950 hover:text-[#962228] font-mono font-bold transition-colors">
                      +91 471 40660 71
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] font-mono font-bold">E-Mail</span>
                    <a href="mailto:info@esc-ind.com" className="text-[#962228] hover:underline font-bold transition-colors">
                      info@esc-ind.com
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* 02. GERMANY HEAD OFFICE */}
              <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-3">
                    02 // CORPORATE HEAD OFFICE (GERMANY)
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                    ISI Consulting Group GmbH
                  </h2>
                  <div className="space-y-1.5 text-slate-700 text-sm font-normal mb-8 leading-relaxed">
                    <p>Goltsteinstraße 30–31</p>
                    <p>40211 Düsseldorf</p>
                    <p className="font-bold text-slate-950">Germany</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-300/80 space-y-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] font-mono font-bold">Telephone</span>
                    <a href="tel:+4921194684130" className="text-slate-950 hover:text-[#962228] font-mono font-bold transition-colors">
                      02 11 / 9 46 84 13-0
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] font-mono font-bold">Fax</span>
                    <span className="text-slate-600 font-mono">02 11 / 9 46 84 13-13</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] font-mono font-bold">E-Mail</span>
                    <a href="mailto:info@isi-cg.com" className="text-[#962228] hover:underline font-bold transition-colors">
                      info@isi-cg.com
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>

            {/* 03. BOARD OF DIRECTORS */}
            <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-3">
                03 // GOVERNANCE &amp; MANAGEMENT
              </span>
              <h2 className="text-3xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                Board of Directors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-300">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#962228] tracking-widest block mb-1">
                    CHAIRMAN &amp; DIRECTOR
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 font-plus-jakarta">
                    Matthias Ulrich Niederpruem
                  </h3>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-300">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#962228] tracking-widest block mb-1">
                    MANAGING DIRECTOR
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 font-plus-jakarta">
                    Manoj Nirmala Sukumaran
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 04. CORPORATE IDENTITY & REGISTRATION */}
            <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-3">
                04 // REGISTRATION METADATA
              </span>
              <h2 className="text-3xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-6">
                Judiciary &amp; Registration Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-300">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Judiciary / Court
                  </span>
                  <span className="text-sm font-bold text-slate-950 font-plus-jakarta">Trivandrum, India</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-300">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    CIN Number
                  </span>
                  <span className="text-sm font-mono font-bold text-slate-950">U72200KL2014PTC035882</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-300">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    PAN Number
                  </span>
                  <span className="text-sm font-mono font-bold text-slate-950">AADCE5866E</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-300">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    GST Number
                  </span>
                  <span className="text-sm font-mono font-bold text-slate-950">32AADCE5866E1ZS</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 05. DISCLAIMER / LIABILITY */}
            <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl space-y-6 text-slate-800 text-sm font-normal leading-relaxed">
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228] block mb-2">
                05 // LEGAL DISCLAIMER
              </span>
              <h2 className="text-3xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-4">
                Disclaimer &amp; Liability Statement
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-950 mb-1 font-plus-jakarta uppercase text-sm">Accountability for Content</h4>
                  <p>
                    The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents&apos; accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 mb-1 font-plus-jakarta uppercase text-sm">Accountability for External Links</h4>
                  <p>
                    Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations of law were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 mb-1 font-plus-jakarta uppercase text-sm">Copyright &amp; Intellectual Property</h4>
                  <p>
                    Our web pages and their contents are subject to applicable international copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 06. NEW SECTION — WEBSITE VISUALS & IMAGE CREDITS */}
            <AnimateOnScroll direction="up" className="p-8 sm:p-10 rounded-3xl bg-white/90 border border-[#962228]/30 shadow-[0_20px_50px_rgba(150,34,40,0.12)] backdrop-blur-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-5 h-5 text-[#962228]" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#962228]">
                  06 // CREATIVE ASSETS ATTRIBUTION
                </span>
              </div>
              
              <h2 className="text-3xl font-black text-slate-950 font-plus-jakarta uppercase tracking-tight mb-4">
                Website Visuals &amp; Image Credits
              </h2>
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-300 text-sm text-slate-800 leading-relaxed font-normal space-y-4">
                <p>
                  &ldquo;The visual assets and imagery used throughout the redesigned ESC website have been created and composed by the ESC design team using professional design and photo-editing tools. Certain visuals may incorporate licensed, publicly available, or reference imagery as part of the creative and design process. All such material has been adapted, edited, or used in accordance with the applicable rights, licenses, or permissions.&rdquo;
                </p>
                <p className="text-xs text-slate-600 border-t border-slate-200 pt-3 font-outfit">
                  All trademarks, brand names, and logos referenced on this website remain the property of their respective owners.
                </p>
              </div>
            </AnimateOnScroll>

          </div>
        </section>

        <CTAStrip />
      </div>
    </PageTransition>
  )
}
