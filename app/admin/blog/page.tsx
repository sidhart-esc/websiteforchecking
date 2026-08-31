'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Plus, Edit2, Trash2, Image as ImageIcon, Upload, CheckCircle2, X } from 'lucide-react'
import Image from 'next/image'

interface BlogPostItem {
  id: string
  title: string
  slug: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: string
  authorName?: string | null
  authorRole?: string | null
  coverImageUrl?: string | null
  published: boolean
}

export default function AdminBlogPage() {
  const [blogList, setBlogList] = useState<BlogPostItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<BlogPostItem | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    category: 'Generative AI',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read',
    excerpt: '',
    content: '',
    authorName: 'Dr. Lukas Weber',
    authorRole: 'Head of AI Solutions',
    coverImageUrl: '',
    published: true,
  })

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/admin/blog')
      const data = await res.json()
      if (Array.isArray(data)) setBlogList(data)
    } catch (err) {
      console.error('Failed to fetch blog posts:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenCreate = () => {
    setEditingItem(null)
    setFormData({
      title: '',
      category: 'Generative AI',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      excerpt: '',
      content: '',
      authorName: 'Dr. Lukas Weber',
      authorRole: 'Head of AI Solutions',
      coverImageUrl: '',
      published: true,
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (item: BlogPostItem) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      category: item.category,
      date: item.date,
      readTime: item.readTime,
      excerpt: item.excerpt,
      content: item.content,
      authorName: item.authorName || '',
      authorRole: item.authorRole || '',
      coverImageUrl: item.coverImageUrl || '',
      published: item.published,
    })
    setIsModalOpen(true)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    const data = new FormData()
    data.append('file', file)

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: data,
      })
      const result = await res.json()
      if (result.url) {
        setFormData((prev) => ({ ...prev, coverImageUrl: result.url }))
      }
    } catch (err) {
      console.error('Cover image upload failed:', err)
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const method = editingItem ? 'PUT' : 'POST'
    const body = editingItem ? { id: editingItem.id, ...formData } : formData

    try {
      const res = await fetch('/api/admin/blog', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        setIsModalOpen(false)
        fetchBlogs()
      }
    } catch (err) {
      console.error('Failed to save blog post:', err)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return

    try {
      const res = await fetch(`/api/admin/blog?id=${id}`, { method: 'DELETE' })
      if (res.ok) fetchBlogs()
    } catch (err) {
      console.error('Failed to delete blog post:', err)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Blog Articles</h1>
            <p className="text-slate-400 text-sm mt-1">Publish tech insights, whitepapers, and engineering updates</p>
          </div>
          <button
            onClick={handleOpenCreate}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl shadow-lg shadow-purple-500/20 flex items-center space-x-2 transition self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Publish Tech Article</span>
          </button>
        </div>

        {/* Blog List */}
        {loading ? (
          <div className="text-center py-12 text-slate-500">Loading blog articles...</div>
        ) : blogList.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
            No blog articles found. Click "Publish Tech Article" to create one!
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {blogList.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition"
              >
                <div className="flex items-start space-x-4">
                  {item.coverImageUrl ? (
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                      <Image src={item.coverImageUrl} alt={item.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold">
                        {item.category}
                      </span>
                      <span className="text-xs text-slate-500">{item.date}</span>
                      <span className="text-xs text-slate-500">• {item.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.excerpt}</p>
                    {item.authorName && (
                      <p className="text-xs text-slate-500 mt-2">By {item.authorName} {item.authorRole ? `(${item.authorRole})` : ''}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800 justify-end shrink-0">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                    title="Edit Blog"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition"
                    title="Delete Blog"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for Create/Edit */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-6 my-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white">
                  {editingItem ? 'Edit Blog Article' : 'Publish New Blog Article'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Article Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-purple-500 focus:outline-none"
                    placeholder="How Generative AI is Transforming..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-purple-500 focus:outline-none"
                    >
                      <option value="Generative AI">Generative AI</option>
                      <option value="Automation">Automation</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Company">Company</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Read Time</label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-purple-500 focus:outline-none"
                      placeholder="5 min read"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Author Name</label>
                    <input
                      type="text"
                      value={formData.authorName}
                      onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-purple-500 focus:outline-none"
                      placeholder="Dr. Lukas Weber"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Author Role</label>
                    <input
                      type="text"
                      value={formData.authorRole}
                      onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-purple-500 focus:outline-none"
                      placeholder="Head of AI Solutions"
                    />
                  </div>
                </div>

                {/* Cover Image Upload */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Cover Image</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={formData.coverImageUrl}
                      onChange={(e) => setFormData({ ...formData, coverImageUrl: e.target.value })}
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-purple-500 focus:outline-none"
                      placeholder="Cover image URL or upload below..."
                    />
                    <label className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-4 py-3 rounded-xl border border-slate-700 cursor-pointer transition flex items-center space-x-1.5 shrink-0">
                      <Upload className="w-4 h-4" />
                      <span>{uploadingImage ? 'Uploading...' : 'Upload Image'}</span>
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>

                  {formData.coverImageUrl && (
                    <div className="mt-3 relative w-full h-40 rounded-xl overflow-hidden border border-slate-800">
                      <Image src={formData.coverImageUrl} alt="Preview" fill className="object-cover" />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Excerpt / Teaser</label>
                  <textarea
                    rows={2}
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-purple-500 focus:outline-none"
                    placeholder="Short summary for card previews..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Full Article Body</label>
                  <textarea
                    rows={6}
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-purple-500 focus:outline-none font-mono"
                    placeholder="Article text content..."
                  />
                </div>

                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-400 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition flex items-center space-x-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{editingItem ? 'Save Changes' : 'Publish Article'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
