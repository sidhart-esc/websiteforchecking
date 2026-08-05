import Link from 'next/link'

const services = [
  'Software Engineering',
  'Generative AI',
  'Intelligent Automation',
  'IT Back-Office Services',
]

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: '#962228' }}
              >
                ESC
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold text-white">ESC Utility Services</span>
                <span className="block text-[10px] text-gray-400 tracking-widest uppercase">
                  Indo-German Technology Partner
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Delivering Software Engineering, Generative AI, Intelligent Automation,
              and IT back-office services for leading Energy and Water industry organizations.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Offices in</span>
              <span className="text-xs font-medium text-white bg-gray-800 px-2 py-1 rounded">🇮🇳 India</span>
              <span className="text-xs font-medium text-white bg-gray-800 px-2 py-1 rounded">🇩🇪 Germany</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-gray-400">
                  {s}
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-6">
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-3">
                Contact
              </h3>
              <a
                href="mailto:info@escutility.com"
                className="text-sm text-gray-400 hover:text-white transition-colors block"
              >
                info@escutility.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ESC Utility Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}