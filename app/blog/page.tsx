'use client'

import Link from 'next/link'
import Image from 'next/image'
import CTAStrip from '@/components/sections/CTAStrip'
import PageTransition from '@/components/ui/PageTransition'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import StaggerContainer, { StaggerItem } from '@/components/ui/StaggerContainer'

const posts = [
  {
    slug: 'generative-ai-energy-sector',
    category: 'Generative AI',
    date: 'July 28, 2026',
    readTime: '5 min read',
    title: 'How Generative AI is Transforming the Energy Sector',
    excerpt: 'From predictive maintenance to automated reporting, Generative AI is reshaping how utility organizations operate. Here is what you need to know.',
  },
  {
    slug: 'intelligent-automation-water-utilities',
    category: 'Automation',
    date: 'July 15, 2026',
    readTime: '4 min read',
    title: 'Intelligent Automation in Water Utilities — A Practical Guide',
    excerpt: 'Water utilities face unique operational challenges. We break down how intelligent automation can reduce costs and improve reliability.',
  },
  {
    slug: 'indo-german-technology-partnership',
    category: 'Company',
    date: 'June 30, 2026',
    readTime: '3 min read',
    title: 'The Indo-German Technology Partnership Model Explained',
    excerpt: 'Why do leading European utility companies choose Indo-German delivery teams? We explain the model and the advantages it brings.',
  },
  {
    slug: 'legacy-modernization-energy',
    category: 'Software Engineering',
    date: 'June 12, 2026',
    readTime: '6 min read',
    title: 'Modernizing Legacy Systems in the Energy Sector Without Disruption',
    excerpt: 'Legacy systems are the backbone of many utility organizations. Here is how to modernize them safely without risking operational continuity.',
  },
  {
    slug: 'scada-integration-best-practices',
    category: 'Software Engineering',
    date: 'May 28, 2026',
    readTime: '7 min read',
    title: 'SCADA Integration Best Practices for Modern Utility Platforms',
    excerpt: 'Integrating SCADA systems with modern software platforms is complex. We share the lessons learned from 12 years of utility projects.',
  },
  {
    slug: 'llm-document-intelligence',
    category: 'Generative AI',
    date: 'May 10, 2026',
    readTime: '5 min read',
    title: 'Using LLMs for Document Intelligence in Regulated Industries',
    excerpt: 'Regulated industries like energy have mountains of documentation. LLMs can help — but there are important guardrails to put in place first.',
  },
]

const categories = ['All', 'Generative AI', 'Automation', 'Software Engineering', 'Company']

export default function BlogPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden flex items-center min-h-[45vh] bg-[#060608]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog.png"
            alt="Blog Hero"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#060608] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-black/50 to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <AnimateOnScroll direction="up">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Insights
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Our <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#962228] via-[#e63946] to-red-400">
                Blog
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed font-light drop-shadow-lg">
              Practical insights on AI, automation, and software engineering
              for the Energy and Water industry.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-black py-24 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll direction="up" className="flex flex-wrap gap-3 mb-16 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  cat === 'All' 
                    ? 'text-white shadow-[0_0_15px_rgba(230,57,70,0.4)]' 
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
                style={cat === 'All' ? { backgroundColor: '#962228' } : {}}
              >
                {cat}
              </button>
            ))}
          </AnimateOnScroll>

          {/* Featured post */}
          <AnimateOnScroll direction="up" className="mb-12">
            <Link href={`/blog/${posts[0].slug}`}>
              <div className="group relative rounded-3xl border border-white/10 hover:border-[#e63946]/60 hover:shadow-[0_0_40px_rgba(230,57,70,0.2)] transition-all duration-300 overflow-hidden bg-neutral-900/60 backdrop-blur-md">
                {/* Featured Top Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#962228] via-[#e63946] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="h-64 sm:h-80 flex items-end p-8 lg:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />
                  <div className="absolute inset-0 bg-[#962228]/10 group-hover:bg-[#962228]/20 transition-colors z-0 mix-blend-overlay" />
                  <div className="relative z-10">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white mb-4 inline-block tracking-wider uppercase shadow-[0_0_10px_rgba(230,57,70,0.3)]" style={{ backgroundColor: '#962228' }}>
                      {posts[0].category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-red-300 transition-colors tracking-tight leading-tight max-w-4xl">
                      {posts[0].title}
                    </h2>
                  </div>
                </div>
                <div className="p-8 lg:p-12 border-t border-white/5">
                  <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light max-w-4xl">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                    <span>{posts[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-red-500/50"></span>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>

          {/* Rest of posts */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="group relative h-full rounded-2xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-[#e63946]/40 hover:shadow-[0_0_30px_rgba(230,57,70,0.15)] transition-all duration-300 p-8 overflow-hidden backdrop-blur-sm">
                    {/* Left glowing edge on hover */}
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#962228] to-[#e63946] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    
                    <span className="text-[10px] font-bold px-3 py-1.5 rounded-full text-white mb-6 inline-block tracking-wider uppercase shadow-[0_0_10px_rgba(230,57,70,0.3)]" style={{ backgroundColor: '#962228' }}>
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-200 transition-colors leading-snug tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">{post.excerpt}</p>
                    
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3 text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-red-500/50"></span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTAStrip />
    </PageTransition>
  )
}