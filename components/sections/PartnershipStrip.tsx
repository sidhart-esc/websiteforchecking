export default function PartnershipStrip() {
  return (
    <section style={{ backgroundColor: '#962228' }} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left — Flags */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-5xl mb-2">🇮🇳</div>
              <span className="text-xs font-semibold tracking-widest uppercase text-red-200">
                India
              </span>
            </div>

            {/* Connecting line */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-red-300 opacity-60" />
              <div className="w-2 h-2 rounded-full bg-white opacity-80" />
              <div className="w-16 h-[1px] bg-red-300 opacity-60" />
              <div className="w-2 h-2 rounded-full bg-white opacity-80" />
              <div className="w-8 h-[1px] bg-red-300 opacity-60" />
            </div>

            <div className="text-center">
              <div className="text-5xl mb-2">🇩🇪</div>
              <span className="text-xs font-semibold tracking-widest uppercase text-red-200">
                Germany
              </span>
            </div>
          </div>

          {/* Center — Text */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-light text-white leading-snug mb-3">
              A bridge between{' '}
              <span className="font-bold">Indian engineering talent</span>
              {' '}and{' '}
              <span className="font-bold">German industrial standards</span>
            </h2>
            <p className="text-red-200 text-sm leading-relaxed">
              Our Indo-German model combines cost-effective delivery with
              European precision — giving Energy and Water organizations
              the best of both worlds.
            </p>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col gap-4 text-center lg:text-right">
            {[
              { value: '12+', label: 'Years of partnership' },
              { value: '3', label: 'Global offices' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-red-200 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}