import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-[#0f1117] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div
          className="text-8xl font-bold mb-4"
          style={{ color: '#962228' }}
        >
          404
        </div>

        <div className="w-16 h-[2px] mx-auto mb-6"
          style={{ backgroundColor: '#962228' }}
        />

        <h1 className="text-3xl sm:text-4xl font-light text-white mb-4">
          Page not found
        </h1>

        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 text-sm font-semibold text-white rounded-md transition-all hover:opacity-90"
            style={{ backgroundColor: '#962228' }}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 text-sm font-semibold text-gray-300 rounded-md border border-gray-600 hover:border-gray-400 hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  )
}