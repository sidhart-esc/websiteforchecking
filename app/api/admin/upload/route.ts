import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { getCurrentUser } from '@/lib/auth'

export async function POST(request: Request) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadDir, { recursive: true })

    const ext = path.extname(file.name) || '.jpg'
    const sanitizeName = file.name.replace(/[^a-zA-Z0-9]/g, '_')
    const fileName = `${Date.now()}_${sanitizeName}${ext}`
    const filePath = path.join(uploadDir, fileName)

    await writeFile(filePath, buffer)
    const publicUrl = `/uploads/${fileName}`

    return NextResponse.json({ url: publicUrl, fileName })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
