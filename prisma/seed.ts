import { prisma } from '../lib/db'
import bcrypt from 'bcryptjs'

async function main() {
  console.log('Seeding database...')

  // Require real seed passwords — no guessable fallback. Set these in
  // .env.local before running `prisma db seed` (or first `npm run dev`,
  // which triggers it on an empty database).
  const rawAdminPassword = process.env.INITIAL_ADMIN_PASSWORD
  const rawHrPassword = process.env.INITIAL_HR_PASSWORD

  if (!rawAdminPassword || !rawHrPassword) {
    throw new Error(
      'INITIAL_ADMIN_PASSWORD and INITIAL_HR_PASSWORD must be set in .env.local before seeding. ' +
      'Refusing to seed with a guessable default password.'
    )
  }

  const hashedPassword = await bcrypt.hash(rawAdminPassword, 10)
  const hrPassword = await bcrypt.hash(rawHrPassword, 10)

  // `update` is intentionally non-empty: re-running the seed (e.g. after
  // rotating INITIAL_ADMIN_PASSWORD/INITIAL_HR_PASSWORD in .env.local) must
  // actually update the stored password hash, not silently no-op.
  await prisma.user.upsert({
    where: { email: 'admin@esc.com' },
    update: { password: hashedPassword },
    create: {
      email: 'admin@esc.com',
      password: hashedPassword,
      name: 'System Admin',
      role: 'ADMIN',
    },
  })

  await prisma.user.upsert({
    where: { email: 'hr@esc.com' },
    update: { password: hrPassword },
    create: {
      email: 'hr@esc.com',
      password: hrPassword,
      name: 'ESC HR Manager',
      role: 'HR',
    },
  })

  // Seed News
  const newsItems = [
    {
      slug: 'esc-expands-munich-office',
      category: 'Company Growth',
      date: 'August 14, 2026',
      readTime: '3 min read',
      title: 'ESC Expands Munich Operations with New Innovation Lab',
      excerpt: 'To support growing European utility partnerships, ESC opens a state-of-the-art innovation lab in Munich focused on Generative AI grid control.',
      content: 'ESC is proud to announce the expansion of our European footprint with a brand-new Innovation Lab located in central Munich. The facility will house 40 software engineers and AI domain specialists dedicated to developing real-time SCADA and energy grid automation tools.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
      slug: 'green-energy-award-2026',
      category: 'Awards',
      date: 'July 02, 2026',
      readTime: '4 min read',
      title: 'ESC Named Top Tech Partner at European Energy Summit',
      excerpt: 'Recognized for outstanding delivery in legacy system modernization and intelligent water utility platform engineering.',
      content: 'At this year’s European Energy Summit in Berlin, ESC was awarded the Gold Tier Tech Partner trophy. The award highlights our 12-year track record of zero-downtime migrations for utility enterprises.',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    },
  ]

  for (const item of newsItems) {
    await prisma.news.upsert({
      where: { slug: item.slug },
      update: {},
      create: item,
    })
  }

  // Seed Job Listings
  const jobs = [
    {
      slug: 'senior-fullstack-engineer-munich',
      title: 'Senior Full-Stack Engineer (Indo-German Team)',
      department: 'Software Engineering',
      location: 'Munich, Germany / Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      salary: '€75,000 - €95,000',
      description: 'We are seeking an experienced Full-Stack Engineer skilled in Next.js, React, Node.js, and Cloud Infrastructure to drive enterprise utility modernization initiatives.',
      requirements: '• 5+ years of experience with React/Next.js & TypeScript\n• Strong background in REST APIs, GraphQL, and microservices\n• Experience with AWS/Azure grid applications is a plus\n• Fluent in English; German proficiency preferred',
      active: true,
    },
    {
      slug: 'ai-solutions-architect',
      title: 'AI & Data Solutions Architect',
      department: 'Generative AI',
      location: 'Bangalore, India / Remote',
      type: 'Full-time',
      experience: '6+ years',
      salary: 'Competitive Industry Standard',
      description: 'Lead the architectural design and deployment of Large Language Models (LLMs) and Document Intelligence platforms for regulated energy client projects.',
      requirements: '• Deep understanding of Python, PyTorch/TensorFlow, and RAG architectures\n• Proven track record delivering enterprise AI products\n• Excellent client communication and technical leadership skills',
      active: true,
    },
    {
      slug: 'hr-talent-acquisition-partner',
      title: 'Talent Acquisition Partner (HR)',
      department: 'Human Resources',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'Standard Market Package',
      description: 'Join our HR team to lead tech recruitment across software development, AI, and project management for our Indo-German operations.',
      requirements: '• 3+ years tech recruitment experience in IT/Software consulting\n• Strong networking and candidate sourcing capabilities\n• Passion for building diverse, high-performing global teams',
      active: true,
    },
  ]

  for (const job of jobs) {
    await prisma.jobListing.upsert({
      where: { slug: job.slug },
      update: {},
      create: job,
    })
  }

  // Seed Blog Posts
  const blogPosts = [
    {
      slug: 'generative-ai-energy-sector',
      category: 'Generative AI',
      date: 'July 28, 2026',
      readTime: '5 min read',
      title: 'How Generative AI is Transforming the Energy Sector',
      excerpt: 'From predictive maintenance to automated reporting, Generative AI is reshaping how utility organizations operate. Here is what you need to know.',
      content: 'Generative AI is no longer a futuristic buzzword in the energy sector—it is a core operational differentiator. Utility providers across Europe are deploying customized LLM models to analyze sensor logs, generate compliance documentation, and assist field engineers in real-time.',
      authorName: 'Dr. Lukas Weber',
      authorRole: 'Head of AI Solutions',
      coverImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      slug: 'intelligent-automation-water-utilities',
      category: 'Automation',
      date: 'July 15, 2026',
      readTime: '4 min read',
      title: 'Intelligent Automation in Water Utilities — A Practical Guide',
      excerpt: 'Water utilities face unique operational challenges. We break down how intelligent automation can reduce costs and improve reliability.',
      content: 'Modernizing water distribution networks requires smart telemetry, automated pump scheduling, and leak detection algorithms. By pairing SCADA metrics with intelligent cloud pipelines, operators achieve up to 30% energy savings on pump management.',
      authorName: 'Ananya Sharma',
      authorRole: 'Lead Automation Engineer',
      coverImageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    },
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }

  console.log('Database seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
