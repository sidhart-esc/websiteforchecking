'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Plus, Edit2, Trash2, Image as ImageIcon, Upload, CheckCircle2, X } from 'lucide-react'
import Image from 'next/image'

interface NewsItem {
  id: string
  title: string
  slug: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: string
  imageUrl?: string | null
  published: boolean
}

export default function AdminNewsPage() {
  const [newsList, setNewsList] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    category: 'Company Growth',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '3 min read',
    excerpt: '',
    content: '',
    imageUrl: '',
    published: true,
  })

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const res = await fetch('/api/admin/news')
      const data = await res.json()
      if (Array.isArray(data)) setNewsList(data)
    } catch (err) {
      console.error('Failed to fetch news:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenCreate = () => {
    setEditingItem(null)
    setFormData({
      title: '',
      category: 'Company Growth',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '3 min read',
      excerpt: '',
      content: '',
      imageUrl: '',
      published: true,
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (item: NewsItem) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      category: item.category,
      date: item.date,
      readTime: item.readTime,
      excerpt: item.excerpt,
      content: item.content,
      imageUrl: item.imageUrl || '',
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
        setFormData((prev) => ({ ...prev, imageUrl: result.url }))
      }
    } catch (err) {
      console.error('Image upload failed:', err)
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const method = editingItem ? 'PUT' : 'POST'
    const body = editingItem ? { id: editingItem.id, ...formData } : formData

    try {
      const res = await fetch('/api/admin/news', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        setIsModalOpen(false)
        fetchNews()
      }
    } catch (err) {
      console.error('Failed to save news:', err)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this news release?')) return

    try {
      const res = await fetch(`/api/admin/news?id=${id}`, { method: 'DELETE' })
      if (res.ok) fetchNews()
    } catch (err) {
      console.error('Failed to delete news:', err)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">News & Press Releases</h1>
            <p className="text-slate-400 text-sm mt-1">Manage corporate news updates and feature images shown on the public site</p>
          </div>
          <button
            onClick={handleOpenCreate}
            className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl shadow-lg shadow-sky-500/20 flex items-center space-x-2 transition self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Create News Article</span>
          </button>
        </div>

        {/* News List */}
        {loading ? (
          <div className="text-center py-12 text-slate-500">Loading news articles...</div>
        ) : newsList.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
            No news articles found. Click "Create News Article" to add one!
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {newsList.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition"
              >
                <div className="flex items-start space-x-4">
                  {item.imageUrl ? (
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-400 text-xs font-semibold">
                        {item.category}
                      </span>
                      <span className="text-xs text-slate-500">{item.date}</span>
                      <span className="text-xs text-slate-500">• {item.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.excerpt}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800 justify-end shrink-0">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                    title="Edit News"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition"
                    title="Delete News"
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
                  {editingItem ? 'Edit News Article' : 'Create News Article'}
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
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="ESC Opens New Facility in Munich..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                    >
                      <option value="Company Growth">Company Growth</option>
                      <option value="Awards">Awards</option>
                      <option value="Technology">Technology</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Publication Date</label>
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                      placeholder="August 20, 2026"
                    />
                  </div>
                </div>

                {/* Image Upload Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Article Image</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                      placeholder="Image URL or upload file below..."
                    />
                    <label className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-4 py-3 rounded-xl border border-slate-700 cursor-pointer transition flex items-center space-x-1.5 shrink-0">
                      <Upload className="w-4 h-4" />
                      <span>{uploadingImage ? 'Uploading...' : 'Upload Image'}</span>
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>

                  {formData.imageUrl && (
                    <div className="mt-3 relative w-full h-40 rounded-xl overflow-hidden border border-slate-800">
                      <Image src={formData.imageUrl} alt="Preview" fill className="object-cover" />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Excerpt / Summary</label>
                  <textarea
                    rows={2}
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="Brief 1-2 sentence description shown in news list cards..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Full Content</label>
                  <textarea
                    rows={6}
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-sky-500 focus:outline-none font-mono"
                    placeholder="Full press release details..."
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
                    className="bg-sky-500 hover:bg-sky-400 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition flex items-center space-x-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{editingItem ? 'Save Changes' : 'Publish News'}</span>
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
