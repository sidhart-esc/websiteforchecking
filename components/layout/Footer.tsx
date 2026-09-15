import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const services = [
  'Software Engineering',
  'Generative AI',
  'Intelligent Automation',
  'IT Back-Office Services',
  'Market Research & Analysis',
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
                href="mailto:info@esc-ind.com"
                className="text-sm text-gray-400 hover:text-white transition-colors block"
              >
                info@esc-ind.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ESC Utility Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/certifications" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Certifications
            </Link>
            <Link href="/data-protection" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Data Protection
            </Link>
            <Link href="/imprint" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Imprint
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ABSOLUTE BOTTOM BAR (Mirroring Header Contact Bar at the very end of page) */}
      {/* ========================================================================= */}
      <div className="bg-[#801c21] text-white/90 border-t border-red-950/40 py-2.5">
        <div className="w-full px-3 sm:px-5 lg:px-6 flex flex-wrap items-center justify-between text-xs font-medium gap-3">
          
          {/* Left Info: Phone, Email & Address */}
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <a
              href="tel:+918086228000"
              className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone size={12} className="text-red-300" />
              <span>+91 8086 22 8000</span>
            </a>

            <a
              href="mailto:info@esc-ind.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail size={12} className="text-red-300" />
              <span>info@esc-ind.com</span>
            </a>

            <span className="flex items-center gap-1.5 text-white/90 whitespace-nowrap">
              <MapPin size={12} className="text-red-300" />
              <span>Yamuna Building, Technopark Phase 3 campus, Trivandrum</span>
            </span>
          </div>

          {/* Right Social Action: LinkedIn */}
          <div className="flex items-center gap-3 pl-3 border-l border-white/20">
            <a
              href="https://www.linkedin.com/company/esc-utility-services"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1 rounded hover:bg-white/10 flex items-center gap-1.5 text-red-200"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-3.5 h-3.5 fill-current text-red-200" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.7z"/>
              </svg>
              <span className="text-[11px] font-semibold tracking-wide">Connect on LinkedIn</span>
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}