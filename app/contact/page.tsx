'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'info@escutility.com',
      href: 'mailto:info@escutility.com',
    },
    {
      icon: '🇮🇳',
      label: 'India Office',
      value: 'Bangalore, Karnataka, India',
      href: '',
    },
    {
      icon: '🇩🇪',
      label: 'Germany Office',
      value: 'Munich, Bavaria, Germany',
      href: '',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1117] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px]" style={{ backgroundColor: '#962228' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Reach Out
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Get in{' '}
            <span className="font-bold" style={{ color: '#962228' }}>
              Touch
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            No sales pitch — just an honest conversation about your challenges
            and how ESC can help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left - Contact Info */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">
                Let's start a{' '}
                <span className="font-bold" style={{ color: '#962228' }}>
                  conversation
                </span>
              </h2>

              <div className="space-y-8">
                {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                 className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: '#fef2f2' }}
                      >
                   {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                       {item.label}
                         </p>
                     <p className="text-gray-700">{item.value}</p>
                    </div>
                    </div>
                    ))}
              </div>

              {/* Response time */}
              <div
                className="mt-12 rounded-xl p-6 border-l-4"
                style={{ backgroundColor: '#fef2f2', borderColor: '#962228' }}
              >
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Typical response time
                </p>
                <p className="text-sm text-gray-500">
                  We respond to all inquiries within 1 business day.
                  For urgent matters, email us directly.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6"
                    style={{ backgroundColor: '#fef2f2' }}
                  >
                    ✅
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you for reaching out. Our team will get back to
                    you within 1 business day.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-8 text-sm font-semibold"
                    style={{ color: '#962228' }}
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Send us a message
                  </h3>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#962228] transition-colors bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#962228] transition-colors bg-white"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your organization"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#962228] transition-colors bg-white"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#962228] transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="software">Software Engineering</option>
                      <option value="ai">Generative AI</option>
                      <option value="automation">Intelligent Automation</option>
                      <option value="backoffice">IT Back-Office Services</option>
                      <option value="other">Other / Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project or challenge..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#962228] transition-colors bg-white resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !formData.name || !formData.email || !formData.message}
                    className="w-full py-3 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#962228' }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy and never share your information.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}