'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
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

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm tracking-tight"
              style={{ backgroundColor: '#962228' }}
            >
              ESC
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold text-gray-900 tracking-tight">
                ESC Utility Services
              </span>
              <span className="block text-[10px] text-gray-500 tracking-widest uppercase">
                Indo-German Technology Partner
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#962228] transition-colors rounded-md hover:bg-red-50"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#962228] hover:bg-red-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#962228] transition-colors rounded-md hover:bg-red-50"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 text-sm font-semibold text-white rounded-md transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: '#962228' }}
            >
              Get in Touch
            </Link>
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
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-6 py-2 text-sm text-gray-700 hover:text-[#962228] hover:bg-red-50 rounded-md transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#962228] hover:bg-red-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2 text-sm font-semibold text-white rounded-md transition-all hover:opacity-90"
                style={{ backgroundColor: '#962228' }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}