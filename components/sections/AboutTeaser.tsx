import Link from 'next/link'

const stats = [
  { value: '12+', label: 'Years of Experience' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '2', label: 'Industries Served' },
  { value: '3', label: 'Global Offices' },
]

export default function AboutTeaser() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight mb-6">
              Trusted by leading{' '}
              <span className="font-bold" style={{ color: '#962228' }}>
                Energy & Water
              </span>{' '}
              organizations worldwide
            </h2>

            <p className="text-gray-500 leading-relaxed mb-4">
              ESC Utility Services is a specialized Indo-German technology partner
              delivering mission-critical software and automation solutions to the
              Energy and Water sectors.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Founded on the principle of combining Indian engineering excellence
              with German industrial precision, we help utility organizations
              modernize their operations, embrace AI, and build resilient
              digital infrastructure.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
              style={{ color: '#962228' }}
            >
              Learn more about ESC →
            </Link>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-lg p-8 border border-gray-100 hover:border-[#962228] hover:shadow-md transition-all duration-300"
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: '#962228' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}