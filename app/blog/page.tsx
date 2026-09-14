'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAStrip from '@/components/sections/CTAStrip'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer'

interface BlogPostItem {
  id: string
  slug: string
  category: string
  date: string
  readTime: string
  title: string
  excerpt: string
  authorName?: string | null
  authorRole?: string | null
  coverImageUrl?: string | null
}

const defaultPosts: BlogPostItem[] = [
  {
    id: '1',
    slug: 'generative-ai-energy-sector',
    category: 'Generative AI',
    date: 'July 28, 2026',
    readTime: '5 min read',
    title: 'How Generative AI is Transforming the Energy Sector',
    excerpt: 'From predictive maintenance to automated reporting, Generative AI is reshaping how utility organizations operate. Here is what you need to know.',
    authorName: 'Dr. Lukas Weber',
    authorRole: 'Head of AI Solutions',
    coverImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    slug: 'intelligent-automation-water-utilities',
    category: 'Automation',
    date: 'July 15, 2026',
    readTime: '4 min read',
    title: 'Intelligent Automation in Water Utilities — A Practical Guide',
    excerpt: 'Water utilities face unique operational challenges. We break down how intelligent automation can reduce costs and improve reliability.',
    authorName: 'Priya Sharma',
    authorRole: 'Head of AI & Automation',
    coverImageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
]

const categories = ['All', 'Generative AI', 'Automation', 'Software Engineering', 'Company']

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostItem[]>(defaultPosts)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await fetch('/api/public/data')
        const data = await res.json()
        if (data.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
          setPosts(data.blogs)
        }
      } catch (err) {
        console.error('Error loading public blogs:', err)
      }
    }
    loadBlogs()
  }, [])

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden min-h-[60vh] flex items-center justify-start text-left bg-black">
        {/* Unclipped Hero Image showing full glowing Red ESC Key diorama */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-9/12 pt-12 sm:pt-16 z-0">
          <Image
            src="/images/blog.png"
            alt="ESC Blog"
            fill
            priority
            sizes="100vw"
            className="object-contain object-left lg:object-[0%_center] opacity-95 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] transform scale-125 lg:scale-[1.3] origin-left -translate-x-44 lg:-translate-x-[380px] transition-transform duration-300"
            unoptimized={true}
          />
        </div>

        {/* Ambient Gradients - protecting right text readability while keeping left diorama fully clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-0 pointer-events-none" />

        {/* Ambient background glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#962228]/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
          <div className="max-w-xl lg:max-w-2xl text-right">
            <AnimateOnScroll direction="up">
              <div className="flex items-center justify-end gap-2 mb-8">
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 font-outfit">
                  Insights
                </span>
                <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight font-plus-jakarta">
                Our{' '}
                <span className="font-extrabold" style={{ color: '#e0575f' }}>
                  Blog
                </span>
              </h1>
              <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed font-light mb-12">
                Practical insights on AI, automation, and software engineering for the Energy and Water industry.
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

      {/* Posts Section — Silverish White Theme matching News Page */}
      <section className="bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#cbd5e1] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="flex flex-wrap gap-3 mb-16 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'text-white shadow-md' 
                    : 'bg-white/80 border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-white shadow-sm'
                }`}
                style={selectedCategory === cat ? { backgroundColor: '#962228' } : {}}
              >
                {cat}
              </button>
            ))}
          </AnimateOnScroll>

          {filteredPosts.length > 0 && (
            <>
              {/* Featured post */}
              <AnimateOnScroll direction="up" className="mb-12">
                <Link href={`/blog/${filteredPosts[0].slug}`} className="block">
                  <div className="group relative rounded-3xl border border-slate-300/90 hover:border-[#962228] hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/85 backdrop-blur-2xl">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#962228] via-[#e63946] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <div className="h-64 sm:h-80 flex items-end p-8 lg:p-12 relative overflow-hidden">
                      {filteredPosts[0].coverImageUrl ? (
                        <Image
                          src={filteredPosts[0].coverImageUrl}
                          alt={filteredPosts[0].title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[#962228]/10 group-hover:bg-[#962228]/20 transition-colors z-0 mix-blend-overlay" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-0" />
                      <div className="relative z-10">
                        <span className="text-xs font-bold px-3.5 py-1.5 rounded-full text-white mb-4 inline-block tracking-wider uppercase shadow-sm" style={{ backgroundColor: '#962228' }}>
                          {filteredPosts[0].category}
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-red-300 transition-colors tracking-tight leading-tight max-w-4xl">
                          {filteredPosts[0].title}
                        </h2>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 border-t border-slate-200 space-y-6 bg-white">
                      <p className="text-slate-700 text-lg leading-relaxed font-normal max-w-4xl">{filteredPosts[0].excerpt}</p>
                      
                      {/* Author Meta Section */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#962228] text-white flex items-center justify-center font-bold text-sm shadow-md">
                            {filteredPosts[0].authorName ? filteredPosts[0].authorName.charAt(0) : 'E'}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-[#962228] transition-colors">
                              {filteredPosts[0].authorName || 'ESC Technical Specialist'}
                            </p>
                            <p className="text-xs text-slate-500 font-medium">
                              {filteredPosts[0].authorRole || 'Author & Tech Consultant'}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                          <span>{filteredPosts[0].date}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#962228]"></span>
                          <span>{filteredPosts[0].readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>

              {/* Rest of posts */}
              {filteredPosts.length > 1 && (
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.slice(1).map((post) => (
                    <StaggerItem key={post.id}>
                      <Link href={`/blog/${post.slug}`} className="block h-full">
                        <div className="group relative h-full rounded-3xl border border-slate-300/90 bg-white/85 hover:bg-white hover:border-[#962228] hover:shadow-xl transition-all duration-300 p-8 overflow-hidden backdrop-blur-xl flex flex-col justify-between">
                          <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#962228] to-[#e63946] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                          
                          <div>
                            <span className="text-[10px] font-bold px-3 py-1.5 rounded-full text-white mb-6 inline-block tracking-wider uppercase shadow-sm" style={{ backgroundColor: '#962228' }}>
                              {post.category}
                            </span>
                            <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-[#962228] transition-colors leading-snug tracking-tight">
                              {post.title}
                            </h3>
                            <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">{post.excerpt}</p>
                          </div>
                          
                          {/* Author Info */}
                          <div className="pt-6 border-t border-slate-200 flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-[#962228] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                                {post.authorName ? post.authorName.charAt(0) : 'E'}
                              </div>
                              <div className="leading-tight">
                                <p className="text-xs font-bold text-slate-900">{post.authorName || 'ESC Technical Team'}</p>
                                <p className="text-[10px] text-slate-500 font-medium">{post.authorRole || 'Author'}</p>
                              </div>
                            </div>
                            <div className="text-[10px] text-slate-500 font-semibold text-right font-mono">
                              <p>{post.date}</p>
                              <p className="text-[#962228] font-bold">{post.readTime}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}
            </>
          )}
        </div>
      </section>

      <CTAStrip />
    </PageTransition>
  )
}