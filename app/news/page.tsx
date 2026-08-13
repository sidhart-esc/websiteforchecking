'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Building2, Handshake, Trophy, Calendar, ArrowRight, UserCircle2 } from 'lucide-react'
import CTAStrip from '@/components/sections/CTAStrip'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer'

const news = [
  {
    slug: 'esc-expands-munich-office',
    category: 'Company News',
    date: 'August 1, 2026',
    title: 'ESC Utility Services Expands Munich Office to Support Growing European Demand',
    excerpt: 'ESC Utility Services announces the expansion of its Munich headquarters to accommodate a growing team serving Energy and Water clients across the DACH region.',
  },
  {
    slug: 'partnership-siemens-energy',
    category: 'Partnership',
    date: 'July 20, 2026',
    title: 'ESC Announces Strategic Technology Partnership with Leading European Energy Provider',
    excerpt: 'ESC Utility Services has entered into a strategic technology partnership to deliver AI-powered automation solutions across European energy infrastructure.',
  },
  {
    slug: 'award-best-utility-tech',
    category: 'Award',
    date: 'July 5, 2026',
    title: 'ESC Utility Services Named Top Utility Technology Partner 2026',
    excerpt: 'We are proud to be recognized as one of the top technology partners for the Energy and Water sector at the European Utility Innovation Awards 2026.',
  },
  {
    slug: 'new-ai-practice',
    category: 'Company News',
    date: 'June 18, 2026',
    title: 'ESC Launches Dedicated Generative AI Practice for Utility Sector',
    excerpt: 'ESC Utility Services has formally launched a dedicated Generative AI practice, bringing together AI engineers and energy domain experts under one roof.',
  },
]

// Per-category icon + color so each strip reads at a glance, not just a wall of text
const categoryMeta: Record<string, { icon: typeof Building2; color: string }> = {
  'Company News': { icon: Building2, color: '#962228' },
  Partnership: { icon: Handshake, color: '#475569' },
  Award: { icon: Trophy, color: '#b45309' },
}

export default function NewsPage() {
  return (
    <PageTransition>
      {/* Hero — ESC newsroom doorway */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        {/* Background image — the ESC key opening onto a newsroom desk */}
        <div className="absolute inset-0">
          <Image
            src="/images/news.png"
            alt="A man reading the daily news at a desk inside a glowing ESC key"
            fill
            priority
            sizes="100vw"
            className="object-contain"
            style={{ objectPosition: 'right center' }}
          />
          {/* Dark gradient so the text reads clearly, thinning out to let the scene show through on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/10" />
          {/* Top/bottom vignette for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
          {/* Faint red wash echoing the ESC key's glow */}
          <div
            className="absolute inset-0 mix-blend-overlay opacity-40"
            style={{ background: 'radial-gradient(ellipse 55% 65% at 78% 50%, rgba(150,34,40,0.5) 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Latest Updates
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light text-white mb-6">
              News &{' '}
              <span className="font-bold" style={{ color: '#962228' }}>
                Announcements
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              The latest news, partnerships, and announcements from ESC Utility Services.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* News grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => {
              const meta = categoryMeta[item.category] ?? { icon: Building2, color: '#962228' }
              const Icon = meta.icon

              return (
                <StaggerItem key={item.slug}>
                  <Link href={`/news/${item.slug}`} className="group block h-full">
                    <div className="h-full flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                      {/* Thumbnail — branded gradient + category icon (no stock photo needed) */}
                      <div
                        className="relative h-44 flex items-center justify-center overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${meta.color} 0%, #1c1d24 100%)` }}
                      >
                        {/* Faint diagonal grain for texture */}
                        <div
                          className="absolute inset-0 opacity-[0.08]"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(115deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)',
                          }}
                        />
                        <Icon size={56} className="relative text-white/25 group-hover:text-white/35 group-hover:scale-110 transition-all duration-300" />

                        {index === 0 && (
                          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white bg-black/30 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Latest
                          </span>
                        )}
                      </div>

                      {/* Date badge + author — overlapping the thumbnail edge */}
                      <div className="px-5 -mt-4 relative z-10 flex items-center gap-3">
                        <span
                          className="inline-flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md"
                          style={{ backgroundColor: meta.color }}
                        >
                          <Calendar size={12} />
                          {item.date}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <UserCircle2 size={14} />
                          By ESC Team
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col px-5 pt-4 pb-5">
                        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-[#962228] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                          {item.excerpt}
                        </p>
                        <span
                          className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide"
                          style={{ color: meta.color }}
                        >
                          Read More
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTAStrip />
    </PageTransition>
  )
}