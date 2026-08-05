import Link from 'next/link'

const services = [
  {
    icon: '⚙️',
    title: 'Software Engineering',
    description:
      'Custom software solutions built for the demands of Energy and Water infrastructure — scalable, secure, and built to last.',
  },
  {
    icon: '🤖',
    title: 'Generative AI',
    description:
      'Harness the power of AI to automate insight generation, predictive maintenance, and intelligent decision-making.',
  },
  {
    icon: '🔄',
    title: 'Intelligent Automation',
    description:
      'End-to-end process automation that eliminates manual bottlenecks and drives operational efficiency at scale.',
  },
  {
    icon: '🖥️',
    title: 'IT Back-Office Services',
    description:
      'Reliable IT support, infrastructure management, and back-office operations tailored for utility organizations.',
  },
]

export default function ServicesPreview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              What We Do
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              Our <span className="font-bold" style={{ color: '#962228' }}>Services</span>
            </h2>
            <Link
              href="/services"
              className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              style={{ color: '#962228' }}
            >
              View all services →
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-lg border border-gray-100 hover:border-[#962228] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Top red accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: '#962228' }}
              />

              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}