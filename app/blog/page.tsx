import Link from 'next/link'
import CTAStrip from '@/components/sections/CTAStrip'

const posts = [
  {
    slug: 'generative-ai-energy-sector',
    category: 'Generative AI',
    date: 'July 28, 2026',
    readTime: '5 min read',
    title: 'How Generative AI is Transforming the Energy Sector',
    excerpt:
      'From predictive maintenance to automated reporting, Generative AI is reshaping how utility organizations operate. Here is what you need to know.',
  },
  {
    slug: 'intelligent-automation-water-utilities',
    category: 'Automation',
    date: 'July 15, 2026',
    readTime: '4 min read',
    title: 'Intelligent Automation in Water Utilities — A Practical Guide',
    excerpt:
      'Water utilities face unique operational challenges. We break down how intelligent automation can reduce costs and improve reliability.',
  },
  {
    slug: 'indo-german-technology-partnership',
    category: 'Company',
    date: 'June 30, 2026',
    readTime: '3 min read',
    title: 'The Indo-German Technology Partnership Model Explained',
    excerpt:
      'Why do leading European utility companies choose Indo-German delivery teams? We explain the model and the advantages it brings.',
  },
  {
    slug: 'legacy-modernization-energy',
    category: 'Software Engineering',
    date: 'June 12, 2026',
    readTime: '6 min read',
    title: 'Modernizing Legacy Systems in the Energy Sector Without Disruption',
    excerpt:
      'Legacy systems are the backbone of many utility organizations. Here is how to modernize them safely without risking operational continuity.',
  },
  {
    slug: 'scada-integration-best-practices',
    category: 'Software Engineering',
    date: 'May 28, 2026',
    readTime: '7 min read',
    title: 'SCADA Integration Best Practices for Modern Utility Platforms',
    excerpt:
      'Integrating SCADA systems with modern software platforms is complex. We share the lessons learned from 12 years of utility projects.',
  },
  {
    slug: 'llm-document-intelligence',
    category: 'Generative AI',
    date: 'May 10, 2026',
    readTime: '5 min read',
    title: 'Using LLMs for Document Intelligence in Regulated Industries',
    excerpt:
      'Regulated industries like energy have mountains of documentation. LLMs can help — but there are important guardrails to put in place first.',
  },
]

const categories = ['All', 'Generative AI', 'Automation', 'Software Engineering', 'Company']

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1117] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Insights
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Our{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Practical insights on AI, automation, and software engineering
            for the Energy and Water industry.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  cat === 'All'
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={cat === 'All' ? { backgroundColor: '#962228' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="mb-12">
            <Link href={`/blog/${posts[0].slug}`}>
              <div className="group rounded-2xl border border-gray-100 hover:border-[#962228] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div
                  className="h-64 flex items-end p-8"
                  style={{ backgroundColor: '#0f1117' }}
                >
                  <div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded text-white mb-3 inline-block"
                      style={{ backgroundColor: '#962228' }}
                    >
                      {posts[0].category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-red-300 transition-colors">
                      {posts[0].title}
                    </h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{posts[0].date}</span>
                    <span>·</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group h-full rounded-xl border border-gray-100 hover:border-[#962228] hover:shadow-md transition-all duration-300 p-6">
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded text-white mb-4 inline-block"
                    style={{ backgroundColor: '#962228' }}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 group-hover:text-[#962228] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}