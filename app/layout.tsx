import type { Metadata } from 'next'
import { Geist, Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/ui/PageTransition'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })

export const metadata: Metadata = {
  title: 'ESC Utility Services | Indo-German Technology Partner',
  description:
    'Delivering Software Engineering, Generative AI, Intelligent Automation, and IT back-office services for Energy and Water industry organizations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${outfit.variable} ${plusJakarta.variable} bg-black antialiased font-sans`}>
        <Navbar />
        <main className="pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}