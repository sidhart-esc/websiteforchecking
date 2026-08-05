import Link from 'next/link'
import CTAStrip from '@/components/sections/CTAStrip'

const openings = [
  {
    title: 'Senior Software Engineer',
    location: '🇮🇳 Bangalore, India',
    type: 'Full-time',
    department: 'Engineering',
    description:
      'Build and maintain enterprise-grade software solutions for Energy and Water clients. Strong experience with Java, Python, or Node.js required.',
  },
  {
    title: 'AI/ML Engineer',
    location: '🇮🇳 Bangalore, India',
    type: 'Full-time',
    department: 'Generative AI',
    description:
      'Design and deploy machine learning models and LLM-based solutions for utility sector clients. Experience with Python, PyTorch, and LangChain preferred.',
  },
  {
    title: 'RPA Developer',
    location: '🇮🇳 Bangalore, India',
    type: 'Full-time',
    department: 'Automation',
    description:
      'Develop and maintain robotic process automation solutions using UiPath or Automation Anywhere for our utility sector clients.',
  },
  {
    title: 'IT Support Engineer',
    location: '🇩🇪 Munich, Germany',
    type: 'Full-time',
    department: 'IT Back-Office',
    description:
      'Provide L2/L3 IT support and infrastructure management for European Energy and Water organizations.',
  },
  {
    title: 'Business Development Manager',
    location: '🇩🇪 Munich, Germany',
    type: 'Full-time',
    department: 'Sales',
    description:
      'Drive new business development across the DACH region, building relationships with utility sector decision-makers.',
  },
]

const perks = [
  { icon: '🌍', title: 'Global Exposure', description: 'Work with clients and colleagues across India and Europe' },
  { icon: '🚀', title: 'Cutting-Edge Tech', description: 'Work on AI, automation, and modern software for critical infrastructure' },
  { icon: '📈', title: 'Career Growth', description: 'Clear growth paths with mentorship from senior engineers' },
  { icon: '🏠', title: 'Flexible Work', description: 'Hybrid work model with flexible hours' },
  { icon: '🎓', title: 'Learning Budget', description: 'Annual budget for certifications and conferences' },
  { icon: '🤝', title: 'Inclusive Culture', description: 'Diverse Indo-German team that values every voice' },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1117] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Join the Team
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Build the future of{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              energy technology
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Join a team of engineers, AI specialists, and industry experts
            working on technology that powers critical infrastructure worldwide.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Why ESC
            </span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Why work{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              with us
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 hover:border-[#962228] hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: '#fef2f2' }}
                >
                  {perk.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Open Roles
            </span>
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Current{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              Openings
            </span>
          </h2>

          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#962228] hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded text-white"
                        style={{ backgroundColor: '#962228' }}
                      >
                        {job.department}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
                        {job.type}
                      </span>
                      <span className="text-xs text-gray-400">
                        {job.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex-shrink-0 px-5 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90"
                    style={{ backgroundColor: '#962228' }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Spontaneous application */}
          <div
            className="mt-8 rounded-xl p-8 text-center border-2 border-dashed"
            style={{ borderColor: '#962228' }}
          >
            <p className="text-gray-600 mb-2 font-medium">
              Don't see a role that fits?
            </p>
            <p className="text-sm text-gray-400 mb-4">
              We're always looking for talented people. Send us your CV and we'll keep you in mind.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: '#962228' }}
            >
              Send Spontaneous Application
            </Link>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}