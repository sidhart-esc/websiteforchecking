import Link from 'next/link'
import CTAStrip from '@/components/sections/CTAStrip'

const news = [
  {
    slug: 'esc-expands-munich-office',
    category: 'Company News',
    date: 'August 1, 2026',
    title: 'ESC Utility Services Expands Munich Office to Support Growing European Demand',
    excerpt:
      'ESC Utility Services announces the expansion of its Munich headquarters to accommodate a growing team serving Energy and Water clients across the DACH region.',
  },
  {
    slug: 'partnership-siemens-energy',
    category: 'Partnership',
    date: 'July 20, 2026',
    title: 'ESC Announces Strategic Technology Partnership with Leading European Energy Provider',
    excerpt:
      'ESC Utility Services has entered into a strategic technology partnership to deliver AI-powered automation solutions across European energy infrastructure.',
  },
  {
    slug: 'award-best-utility-tech',
    category: 'Award',
    date: 'July 5, 2026',
    title: 'ESC Utility Services Named Top Utility Technology Partner 2026',
    excerpt:
      'We are proud to be recognized as one of the top technology partners for the Energy and Water sector at the European Utility Innovation Awards 2026.',
  },
  {
    slug: 'new-ai-practice',
    category: 'Company News',
    date: 'June 18, 2026',
    title: 'ESC Launches Dedicated Generative AI Practice for Utility Sector',
    excerpt:
      'ESC Utility Services has formally launched a dedicated Generative AI practice, bringing together AI engineers and energy domain experts under one roof.',
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1117] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            The latest news, partnerships, and announcements from
            ESC Utility Services.
          </p>
        </div>
      </section>

      {/* News list */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {news.map((item, index) => (
              <Link key={item.slug} href={`/news/${item.slug}`}>
                <div className="group flex gap-6 p-6 rounded-xl border border-gray-100 hover:border-[#962228] hover:shadow-md transition-all duration-300">
                  {/* Number */}
                  <div
                    className="text-2xl font-bold flex-shrink-0 w-10 text-right"
                    style={{ color: '#96222820' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded text-white"
                        style={{ backgroundColor: '#962228' }}
                      >
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#962228] transition-colors leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="flex-shrink-0 text-gray-300 group-hover:text-[#962228] transition-colors text-xl self-center"
                  >
                    →
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