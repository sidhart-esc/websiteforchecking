'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Lab', href: '/lab', isSpecial: true },
  {
    label: 'Insights',
    href: '#',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'News', href: '/news' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

const searchablePages = [
  { title: 'Home Page', href: '/', category: 'Navigation', desc: 'Main landing page and overview' },
  { title: 'About Us', href: '/about', category: 'Company', desc: 'Company vision, leadership, and Indo-German roots' },
  { title: 'Software Engineering', href: '/services', category: 'Services', desc: 'Custom application & SCADA development' },
  { title: 'Generative AI', href: '/services', category: 'Services', desc: 'LLM integration, predictive models & automation' },
  { title: 'Intelligent Automation', href: '/services', category: 'Services', desc: 'RPA and workflow automation' },
  { title: 'IT Back-Office Services', href: '/services', category: 'Services', desc: 'Infrastructure, helpdesk & operations' },
  { title: 'Market Research & Analysis', href: '/services', category: 'Services', desc: 'Business intelligence & data validation' },
  { title: 'Careers & Jobs', href: '/careers', category: 'Company', desc: 'Open positions and working culture' },
  { title: 'ESC Innovation Lab', href: '/lab', category: 'Innovation', desc: 'AI agentic sandbox & demos' },
  { title: 'Blog & Articles', href: '/blog', category: 'Insights', desc: 'Latest technological insights' },
  { title: 'News & Announcements', href: '/news', category: 'Insights', desc: 'Press releases and company updates' },
  { title: 'Contact Us', href: '/contact', category: 'Support', desc: 'Get in touch with our team' },
  { title: 'Imprint / Legal', href: '/imprint', category: 'Legal', desc: 'Corporate registration & legal information' },
  { title: 'Data Protection', href: '/data-protection', category: 'Legal', desc: 'Privacy policy and GDPR compliance' },
  { title: 'ISO 27001 Certification', href: '/certifications', category: 'Compliance', desc: 'ISO/IEC 27001:2022 Information Security Certification' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close search on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredSearchResults = searchQuery.trim() === ''
    ? searchablePages.slice(0, 6)
    : searchablePages.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        {/* ========================================================================= */}
        {/* TOP PRE-HEADER BANNER (Collapses / Disappears on Scroll) */}
        {/* ========================================================================= */}
        <div
          className={`bg-[#801c21] text-white/90 border-b border-red-950/30 transition-all duration-300 ease-in-out overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0 py-0 border-none' : 'max-h-12 opacity-100 py-1.5'
          }`}
        >
          <div className="w-full px-3 sm:px-5 lg:px-6 flex items-center justify-between text-xs font-medium">
            
            {/* Left Info: Contact Phone, Email & Address aligned closer to far left */}
            <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto no-scrollbar py-0.5 shrink-0 pl-0 sm:pl-1">
              <a
                href="tel:+4921194684130"
                className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
              >
                <Phone size={12} className="text-red-300" />
                <span>0211 94684130</span>
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
                <span>Goltsteinstraße 30–31, 40211 Düsseldorf</span>
              </span>
            </div>

            {/* Right Action Icons: Quick Search & Social */}
            <div className="flex items-center gap-3 sm:gap-4 pl-3 border-l border-white/20">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1.5 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
                title="Search site"
                aria-label="Search site"
              >
                <Search size={13} className="text-red-200" />
                <span className="hidden lg:inline text-[11px] uppercase tracking-wider font-semibold">Search</span>
              </button>

              <a
                href="https://www.linkedin.com/company/esc-utility-services"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1 rounded hover:bg-white/10 flex items-center"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current text-red-200" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.7z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN NAVIGATION BAR */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo (Non-navigating display) */}
            <div className="flex items-center gap-2 group cursor-default">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm tracking-tight"
                style={{ backgroundColor: '#962228' }}
              >
                ESC
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold text-gray-900 tracking-tight whitespace-nowrap">
                  ESC Utility Services Pvt. Ltd
                </span>
                <span className="block text-[10px] text-gray-500 tracking-widest uppercase">
                  Indo-German Technology Partner
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.children) {
                  const isParentActive = link.children.some(
                    (child) => pathname === child.href || (child.href !== '/' && pathname?.startsWith(child.href))
                  )
                  return (
                    <div key={link.label} className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-md ${
                          isParentActive
                            ? 'font-bold text-[#962228] bg-red-50/90 border-b-2 border-[#962228]'
                            : 'font-medium text-gray-700 hover:text-[#962228] hover:bg-red-50'
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                          {link.children.map((child) => {
                            const isChildActive = pathname === child.href
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setDropdownOpen(false)}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isChildActive
                                    ? 'font-bold text-[#962228] bg-red-50 border-l-4 border-[#962228]'
                                    : 'text-gray-700 hover:text-[#962228] hover:bg-red-50'
                                }`}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }

                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm transition-colors rounded-md flex items-center gap-1.5 relative ${
                      isActive
                        ? 'font-bold text-[#962228] bg-red-50/90 border-b-2 border-[#962228] shadow-xs'
                        : 'font-medium text-gray-700 hover:text-[#962228] hover:bg-red-50'
                    }`}
                  >
                    {link.label}
                    {link.isSpecial && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]"></span>
                      </span>
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#962228] hover:bg-red-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                if (link.children) {
                  return (
                    <div key={link.label}>
                      <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        {link.label}
                      </p>
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-6 py-2 text-sm rounded-md transition-colors ${
                              isChildActive
                                ? 'font-bold text-[#962228] bg-red-50 border-l-4 border-[#962228]'
                                : 'text-gray-700 hover:text-[#962228] hover:bg-red-50'
                            }`}
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  )
                }

                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? 'font-bold text-[#962228] bg-red-50 border-l-4 border-[#962228]'
                        : 'font-medium text-gray-700 hover:text-[#962228] hover:bg-red-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.isSpecial && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]"></span>
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* QUICK SEARCH MODAL */}
      {/* ========================================================================= */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-md">
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 bg-slate-50/80">
              <Search size={18} className="text-[#962228]" />
              <input
                type="text"
                placeholder="Search services, pages, insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none font-medium"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-200/60 transition-colors"
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </div>

            {/* Search Results List */}
            <div className="max-h-80 overflow-y-auto p-3 space-y-1">
              <p className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                {searchQuery.trim() ? 'Matching Results' : 'Suggested Pages'}
              </p>
              {filteredSearchResults.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-sm">
                  No matching results found for &quot;{searchQuery}&quot;
                </div>
              ) : (
                filteredSearchResults.map((item) => (
                  <button
                    key={item.title + item.href}
                    onClick={() => {
                      setSearchOpen(false)
                      router.push(item.href)
                    }}
                    className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-red-50/80 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-[#962228] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-red-100 group-hover:text-[#962228]">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-slate-100/80 border-t border-slate-200 text-right">
              <span className="text-[11px] text-slate-500 font-mono">Press ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}