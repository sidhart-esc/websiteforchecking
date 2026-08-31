'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
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
  )
}