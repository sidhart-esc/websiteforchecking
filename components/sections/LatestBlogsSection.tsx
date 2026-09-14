'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  slug: string
  category: string
  date: string
  readTime: string
  title: string
  excerpt: string
  coverImageUrl?: string | null
}

const defaultBlogs: BlogPost[] = [
  {
    id: '1',
    slug: 'generative-ai-energy-sector',
    category: 'Generative AI',
    date: 'July 28, 2026',
    readTime: '5 min read',
    title: 'How Generative AI is Transforming the Energy Sector',
    excerpt: 'From predictive maintenance to automated reporting, Generative AI is reshaping how utility organizations operate.',
    coverImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    slug: 'intelligent-automation-water-utilities',
    category: 'Automation',
    date: 'July 15, 2026',
    readTime: '4 min read',
    title: 'Intelligent Automation in Water Utilities — A Practical Guide',
    excerpt: 'Water utilities face unique operational challenges. We break down how intelligent automation reduces costs.',
    coverImageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    slug: 'modern-scada-ot-integration',
    category: 'Software Engineering',
    date: 'June 30, 2026',
    readTime: '6 min read',
    title: 'Modern SCADA & OT System Integration for European Power Grids',
    excerpt: 'Integrating legacy SCADA infrastructure with cloud-native microservices for real-time grid monitoring.',
    coverImageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    slug: 'cybersecurity-iso27001-utility-infrastructure',
    category: 'IT Security',
    date: 'June 12, 2026',
    readTime: '5 min read',
    title: 'Navigating Cybersecurity & ISO 27001 in Utility Infrastructure',
    excerpt: 'Key strategies for implementing ISMS standards across critical energy networks and IT operations.',
    coverImageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
]

export default function LatestBlogsSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>(defaultBlogs)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchPublicBlogs() {
      try {
        const res = await fetch('/api/public/data')
        const data = await res.json()
        if (data.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
          setBlogs(data.blogs)
        }
      } catch (err) {
        console.error('Failed to load latest blogs:', err)
      }
    }
    fetchPublicBlogs()
  }, [])

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const cardWidth = 260
    const index = Math.round(container.scrollLeft / cardWidth)
    setActiveIndex(Math.min(Math.max(index, 0), blogs.length - 1))
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const scrollAmount = 280
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-6 bg-slate-50/80 border-t border-slate-200/60 flex flex-col items-center text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Centered Header Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-4xl mb-4">
          <div className="w-full text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-light text-slate-900 tracking-tight font-plus-jakarta">
              Our Latest <span className="font-bold text-[#962228]">Blogs</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous slide"
              className="w-7 h-7 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:text-[#962228] hover:border-[#962228]/40 shadow-xs transition-all active:scale-95"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next slide"
              className="w-7 h-7 rounded-md bg-slate-900 border border-slate-900 flex items-center justify-center text-white hover:bg-[#962228] hover:border-[#962228] shadow-xs transition-all active:scale-95"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Centered Slider Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex justify-start lg:justify-center items-stretch gap-4 w-full overflow-x-auto scrollbar-none scroll-smooth pb-2 pt-1 snap-x snap-mandatory px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogs.map((post, idx) => (
            <motion.div
              key={post.id || post.slug || idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="w-[240px] sm:w-[260px] flex-shrink-0 snap-center text-left"
            >
              <div className="group bg-white rounded-lg border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-sm hover:border-slate-300 transition-all duration-300 flex flex-col h-full">
                
                {/* Micro Thumbnail */}
                <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.coverImageUrl || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized={true}
                  />
                </div>

                {/* Content */}
                <div className="p-3 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5 font-outfit">
                      {post.category}
                    </span>

                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#962228] transition-colors leading-snug mb-1 line-clamp-1 font-plus-jakarta">
                      {post.title}
                    </h3>

                    <p className="text-slate-500 text-[11px] leading-tight font-light line-clamp-1 mb-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-800 group-hover:text-[#962228] transition-colors font-outfit"
                  >
                    <span>Read Blog</span>
                    <ArrowRight className="w-3 h-3 text-current group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Dots */}
        <div className="flex items-center justify-center gap-1 mt-3">
          {blogs.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!scrollContainerRef.current) return
                scrollContainerRef.current.scrollTo({
                  left: i * 260,
                  behavior: 'smooth',
                })
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? 'w-3.5 h-1 bg-[#962228]'
                  : 'w-1 h-1 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
