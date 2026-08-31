import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
  try {
    const jobs = await prisma.jobListing.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, department, location, type, experience, salary, description, requirements, active } = body

    if (!title || !department || !location || !type || !description) {
      return NextResponse.json({ error: 'Title, department, location, type, and description are required' }, { status: 400 })
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + '-' + Date.now().toString().slice(-4)

    const job = await prisma.jobListing.create({
      data: {
        title,
        slug,
        department,
        location,
        type,
        experience: experience || null,
        salary: salary || null,
        description,
        requirements: requirements || null,
        active: active ?? true,
      },
    })

    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    console.error('Error creating job listing:', error)
    return NextResponse.json({ error: 'Failed to create job listing' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { id, title, department, location, type, experience, salary, description, requirements, active } = body

    if (!id) {
      return NextResponse.json({ error: 'Job ID required' }, { status: 400 })
    }

    const job = await prisma.jobListing.update({
      where: { id },
      data: {
        title,
        department,
        location,
        type,
        experience,
        salary,
        description,
        requirements,
        active,
      },
    })

    return NextResponse.json(job)
  } catch (error) {
    console.error('Error updating job listing:', error)
    return NextResponse.json({ error: 'Failed to update job listing' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID parameter required' }, { status: 400 })
    }

    await prisma.jobListing.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting job listing:', error)
    return NextResponse.json({ error: 'Failed to delete job listing' }, { status: 500 })
  }
}
