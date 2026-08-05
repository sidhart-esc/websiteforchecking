import CTAStrip from '@/components/sections/CTAStrip'

const values = [
  {
    title: 'Engineering Excellence',
    description:
      'We hold our work to the highest technical standards — every solution we deliver is built to perform reliably in mission-critical utility environments.',
  },
  {
    title: 'Domain Expertise',
    description:
      'Energy and Water are all we do. This focus means we understand your regulatory environment, operational constraints, and industry-specific challenges deeply.',
  },
  {
    title: 'Indo-German Precision',
    description:
      'Our unique delivery model combines Indian engineering talent with German industrial standards — giving clients quality and cost-effectiveness in equal measure.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'We don\'t do one-off projects. We build lasting relationships with clients, growing alongside their digital transformation journeys over years, not months.',
  },
]

const team = [
  { initials: 'RK', name: 'Rajesh Kumar', role: 'CEO & Co-Founder', location: '🇮🇳 India' },
  { initials: 'MH', name: 'Markus Hoffmann', role: 'CTO & Co-Founder', location: '🇩🇪 Germany' },
  { initials: 'PS', name: 'Priya Sharma', role: 'Head of AI & Automation', location: '🇮🇳 India' },
  { initials: 'TW', name: 'Thomas Weber', role: 'Head of Delivery', location: '🇩🇪 Germany' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1117] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Who We Are
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-white mb-6">
            About{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              ESC Utility Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A specialized Indo-German technology partner with over 12 years of
            experience serving the Energy and Water industry.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Powering the digital future of{' '}
                <span className="font-bold" style={{ color: '#962228' }}>
                  critical infrastructure
                </span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                ESC Utility Services was founded with a singular focus — to help
                Energy and Water organizations navigate the complexity of digital
                transformation without losing sight of what matters most:
                reliability, safety, and operational continuity.
              </p>
              <p className="text-gray-500 leading-relaxed">
                From our offices in India and Germany, we serve clients across
                Europe and Asia, delivering technology solutions that are as
                robust as the infrastructure they support.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '2012', label: 'Year Founded' },
                { value: '50+', label: 'Enterprise Clients' },
                { value: '3', label: 'Global Offices' },
                { value: '200+', label: 'Projects Delivered' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-[#962228] transition-colors duration-300"
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: '#962228' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              What Drives Us
            </span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Our{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              Core Values
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#962228] hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-8 h-1 rounded mb-4 group-hover:w-12 transition-all duration-300"
                  style={{ backgroundColor: '#962228' }}
                />
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              The People Behind ESC
            </span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Leadership{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              Team
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#962228] hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                  style={{ backgroundColor: '#962228' }}
                >
                  {member.initials}
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-xs text-gray-400">{member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}