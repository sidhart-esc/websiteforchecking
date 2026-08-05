import Link from 'next/link'

export default function CTAStrip() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden px-8 py-16 sm:px-16 text-center"
          style={{ backgroundColor: '#0f1117' }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#962228 1px, transparent 1px),
                linear-gradient(90deg, #962228 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Red accent line */}
          <div
            className="absolute left-0 right-0 h-[2px] top-[50%]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #962228 30%, #962228 70%, transparent 100%)',
              opacity: 0.2,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Let's Talk
              </span>
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-4 max-w-2xl mx-auto">
              Ready to modernize your{' '}
              <span className="font-bold" style={{ color: '#962228' }}>
                energy infrastructure?
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Talk to our team — no sales pitch, just an honest conversation
              about your challenges and how we can help.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 text-sm font-semibold text-white rounded-md transition-all hover:opacity-90 hover:shadow-lg hover:shadow-red-900/30"
                style={{ backgroundColor: '#962228' }}
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 text-sm font-semibold text-gray-300 rounded-md border border-gray-600 hover:border-gray-400 hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}