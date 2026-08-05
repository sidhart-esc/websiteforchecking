import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-[#0f1117] min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#962228 1px, transparent 1px), linear-gradient(90deg, #962228 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute left-0 right-0 h-[2px] top-[60%]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #962228 30%, #962228 70%, transparent 100%)',
          opacity: 0.3,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Indo-German Technology Partner
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              Engineering the future of{' '}
              <span className="font-bold" style={{ color: '#962228' }}>
                Energy & Water
              </span>{' '}
              Infrastructure
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              We deliver Software Engineering, Generative AI, Intelligent Automation,
              and IT back-office services for leading Energy and Water industry organizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-6 py-3 text-sm font-semibold text-white rounded-md transition-all hover:opacity-90 hover:shadow-lg hover:shadow-red-900/30"
                style={{ backgroundColor: '#962228' }}
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 text-sm font-semibold text-gray-300 rounded-md border border-gray-600 hover:border-gray-400 hover:text-white transition-all"
              >
                About ESC
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '12+', label: 'Years of Experience' },
              { value: '3', label: 'Countries' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '2', label: 'Industries Served' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-6 border border-gray-800 hover:border-[#962228] transition-colors duration-300"
                style={{ backgroundColor: '#161920' }}
              >
                <div className="text-4xl font-bold mb-1" style={{ color: '#962228' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
