'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Handshake, Trophy, Calendar, ArrowRight, UserCircle2 } from 'lucide-react'
import CTAStrip from '@/components/sections/CTAStrip'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer'

interface NewsItem {
  id: string
  title: string
  slug: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: string
  imageUrl?: string | null
}

const defaultNews: NewsItem[] = [
  {
    id: '1',
    slug: 'esc-expands-munich-office',
    category: 'Company Growth',
    date: 'August 14, 2026',
    readTime: '3 min read',
    title: 'ESC Expands Munich Operations with New Innovation Lab',
    excerpt: 'To support growing European utility partnerships, ESC opens a state-of-the-art innovation lab in Munich focused on Generative AI grid control.',
    content: `ESC Utility Services is proud to announce the expansion of its European operations with a new state-of-the-art Innovation Lab in Munich, Germany.\n\nThis new facility strengthens our Indo-German technology hub, bringing together specialized software engineers, AI architects, and utility domain experts to build next-generation grid intelligence and IT back-office automation platforms for leading energy and water providers across Europe.\n\n"Expanding our footprint in Munich allows us to collaborate even more closely with European utility leaders while scaling our R&D capabilities across AI, GIS integration, and automated back-office workflows," stated the Board of Directors.`,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    slug: 'green-energy-award-2026',
    category: 'Awards',
    date: 'July 02, 2026',
    readTime: '4 min read',
    title: 'ESC Named Top Tech Partner at European Energy Summit',
    excerpt: 'Recognized for outstanding delivery in legacy system modernization and intelligent water utility platform engineering.',
    content: `ESC Utility Services has been awarded Top Technology Partner of the Year at the 2026 European Energy & Utility Summit held in Frankfurt.\n\nThe distinction recognizes ESC's decade-long commitment to engineering excellence, security-by-design, and continuous digital transformation for energy and water utilities across Germany, Austria, and Switzerland.\n\n"This award highlights the dedication of our dual-continent team in Trivandrum and Düsseldorf. By combining German process standards with agile engineering, we deliver measurable operational efficiency to our utility partners," said the ESC leadership team.`,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
]

const categoryMeta: Record<string, { icon: typeof Building2; color: string }> = {
  'Company Growth': { icon: Building2, color: '#962228' },
  'Company News': { icon: Building2, color: '#962228' },
  Partnership: { icon: Handshake, color: '#475569' },
  Awards: { icon: Trophy, color: '#b45309' },
  Award: { icon: Trophy, color: '#b45309' },
}

export default function NewsPage() {
  const [newsList, setNewsList] = useState<NewsItem[]>(defaultNews)

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch('/api/public/data')
        const data = await res.json()
        if (data.news && Array.isArray(data.news) && data.news.length > 0) {
          setNewsList(data.news)
        }
      } catch (err) {
        console.error('Error fetching public news:', err)
      }
    }
    loadNews()
  }, [])

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
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
              The latest news, press releases, and corporate announcements from ESC Utility Services.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((item, index) => {
              const meta = categoryMeta[item.category] ?? { icon: Building2, color: '#962228' }
              const Icon = meta.icon

              return (
                <StaggerItem key={item.id}>
                  <Link href={`/news/${item.slug}`} className="group block h-full">
                    <div className="h-full flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      {/* Thumbnail Image or Gradient */}
                      {item.imageUrl ? (
                        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {index === 0 && (
                            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white bg-black/60 backdrop-blur-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                              Latest
                            </span>
                          )}
                        </div>
                      ) : (
                        <div
                          className="relative h-44 flex items-center justify-center overflow-hidden"
                          style={{ background: `linear-gradient(135deg, ${meta.color} 0%, #1c1d24 100%)` }}
                        >
                          <Icon size={56} className="relative text-white/25 group-hover:text-white/35 group-hover:scale-110 transition-all duration-300" />
                          {index === 0 && (
                            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white bg-black/40 backdrop-blur-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              Latest
                            </span>
                          )}
                        </div>
                      )}

                      {/* Date Badge */}
                      <div className="px-5 -mt-4 relative z-10 flex items-center gap-3">
                        <span
                          className="inline-flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md"
                          style={{ backgroundColor: meta.color }}
                        >
                          <Calendar size={12} />
                          {item.date}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                          <UserCircle2 size={14} />
                          By ESC Team
                        </span>
                      </div>

                      {/* Content & Excerpt Description */}
                      <div className="flex-1 flex flex-col px-5 pt-4 pb-5">
                        <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug line-clamp-2 group-hover:text-[#962228] transition-colors font-plus-jakarta">
                          {item.title}
                        </h3>
                        
                        {/* News Excerpt / Summary Description */}
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                          {item.excerpt || item.content}
                        </p>

                        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                          <span>{item.readTime || '3 min read'}</span>
                          <span
                            className="inline-flex items-center gap-1 font-bold uppercase tracking-wide group-hover:translate-x-1 transition-transform"
                            style={{ color: meta.color }}
                          >
                            Read Full Press Release
                            <ArrowRight size={13} />
                          </span>
                        </div>
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