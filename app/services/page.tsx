import Link from 'next/link'
import CTAStrip from '@/components/sections/CTAStrip'

const services = [
  {
    icon: '⚙️',
    title: 'Software Engineering',
    tagline: 'Built for utility-grade reliability',
    description:
      'We design and develop custom software solutions tailored to the complex operational needs of Energy and Water organizations. From SCADA integrations to enterprise platforms, we build systems that are secure, scalable, and built to last decades.',
    capabilities: [
      'Custom application development',
      'SCADA & OT system integration',
      'Legacy system modernization',
      'API design & microservices',
      'Cloud-native architecture',
    ],
  },
  {
    icon: '🤖',
    title: 'Generative AI',
    tagline: 'Intelligence for critical infrastructure',
    description:
      'We help Energy and Water organizations harness Generative AI responsibly — automating insight generation, enabling predictive maintenance, and building AI-powered tools that augment your team\'s capabilities without replacing domain expertise.',
    capabilities: [
      'AI strategy & roadmap consulting',
      'LLM integration & fine-tuning',
      'Predictive maintenance models',
      'Document intelligence & automation',
      'AI-powered reporting dashboards',
    ],
  },
  {
    icon: '🔄',
    title: 'Intelligent Automation',
    tagline: 'Eliminate bottlenecks at scale',
    description:
      'Our automation practice helps utility organizations eliminate repetitive manual work, reduce errors, and free up your team for higher-value tasks. We combine RPA, workflow automation, and AI to deliver end-to-end process transformation.',
    capabilities: [
      'Robotic Process Automation (RPA)',
      'Business process re-engineering',
      'Workflow & approval automation',
      'Data pipeline automation',
      'Compliance & audit automation',
    ],
  },
  {
    icon: '🖥️',
    title: 'IT Back-Office Services',
    tagline: 'Reliable operations, around the clock',
    description:
      'We provide dedicated IT back-office support tailored for utility organizations — from infrastructure management to helpdesk operations. Our Indo-German delivery model ensures quality European standards at competitive costs.',
    capabilities: [
      'IT infrastructure management',
      'Service desk & L1/L2/L3 support',
      'Cloud operations & monitoring',
      'Cybersecurity & compliance',
      'Vendor & license management',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0f1117] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              What We Offer
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Our{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Specialized technology services built exclusively for the Energy
            and Water industry — delivered with Indo-German precision.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16 ${
                index !== services.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              {/* Left */}
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
                  <span className="font-bold" style={{ color: '#962228' }}>
                    {service.title}
                  </span>
                </h2>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  {service.tagline}
                </p>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right — Capabilities */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Key Capabilities
                </h3>
                <ul className="space-y-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#962228' }}
                      />
                      <span className="text-sm text-gray-600">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  )
}