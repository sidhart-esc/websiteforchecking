'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Plus, Edit2, Trash2, MapPin, Briefcase, DollarSign, CheckCircle2, X, ToggleLeft, ToggleRight } from 'lucide-react'

interface JobItem {
  id: string
  title: string
  slug: string
  department: string
  location: string
  type: string
  experience?: string | null
  salary?: string | null
  description: string
  requirements?: string | null
  active: boolean
}

export default function AdminJobsPage() {
  const [jobsList, setJobsList] = useState<JobItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<JobItem | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    department: 'Software Engineering',
    location: 'Munich, Germany / Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    salary: 'Competitive Market Rate',
    description: '',
    requirements: '',
    active: true,
  })

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/admin/jobs')
      const data = await res.json()
      if (Array.isArray(data)) setJobsList(data)
    } catch (err) {
      console.error('Failed to fetch jobs:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenCreate = () => {
    setEditingItem(null)
    setFormData({
      title: '',
      department: 'Software Engineering',
      location: 'Munich, Germany / Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'Competitive Market Rate',
      description: '',
      requirements: '',
      active: true,
    })
    setIsModalOpen(true)
  }

  const handleOpenEdit = (item: JobItem) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      department: item.department,
      location: item.location,
      type: item.type,
      experience: item.experience || '',
      salary: item.salary || '',
      description: item.description,
      requirements: item.requirements || '',
      active: item.active,
    })
    setIsModalOpen(true)
  }

  const handleToggleActive = async (item: JobItem) => {
    try {
      const res = await fetch('/api/admin/jobs', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, active: !item.active }),
      })
      if (res.ok) fetchJobs()
    } catch (err) {
      console.error('Failed to toggle status:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const method = editingItem ? 'PUT' : 'POST'
    const body = editingItem ? { id: editingItem.id, ...formData } : formData

    try {
      const res = await fetch('/api/admin/jobs', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        setIsModalOpen(false)
        fetchJobs()
      }
    } catch (err) {
      console.error('Failed to save job:', err)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job listing?')) return

    try {
      const res = await fetch(`/api/admin/jobs?id=${id}`, { method: 'DELETE' })
      if (res.ok) fetchJobs()
    } catch (err) {
      console.error('Failed to delete job:', err)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">HR Careers & Job Listings</h1>
            <p className="text-slate-400 text-sm mt-1">Manage open vacancies for candidates across Munich, Bangalore, and Remote locations</p>
          </div>
          <button
            onClick={handleOpenCreate}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-medium px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center space-x-2 transition self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Post New Job Vacancy</span>
          </button>
        </div>

        {/* Jobs List */}
        {loading ? (
          <div className="text-center py-12 text-slate-500">Loading job listings...</div>
        ) : jobsList.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
            No active job listings found. Click "Post New Job Vacancy" to add one!
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {jobsList.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      {item.department}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
                        item.active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {item.active ? 'Active' : 'Closed'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.type}</span>
                    </span>
                    {item.salary && (
                      <span className="flex items-center space-x-1">
                        <DollarSign className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.salary}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800 justify-end shrink-0">
                  <button
                    onClick={() => handleToggleActive(item)}
                    className={`p-2 rounded-lg transition flex items-center space-x-1 text-xs font-medium ${
                      item.active
                        ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                    title={item.active ? 'Click to close job' : 'Click to activate job'}
                  >
                    {item.active ? <ToggleRight className="w-5 h-5 text-emerald-400" /> : <ToggleLeft className="w-5 h-5" />}
                    <span>{item.active ? 'Live' : 'Closed'}</span>
                  </button>

                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                    title="Edit Listing"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition"
                    title="Delete Listing"
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
                  {editingItem ? 'Edit Job Vacancy' : 'Post New Job Vacancy'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Job Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="Senior Full-Stack Engineer..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Generative AI">Generative AI</option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                      <option value="Project Management">Project Management</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Employment Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Location</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-emerald-500 focus:outline-none"
                      placeholder="Munich, Germany / Hybrid"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Salary Range / Package</label>
                    <input
                      type="text"
                      value={formData.salary}
                      onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-emerald-500 focus:outline-none"
                      placeholder="€75,000 - €95,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Role Description</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="We are looking for an experienced developer to join our team..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Requirements & Qualifications</label>
                  <textarea
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-emerald-500 focus:outline-none font-mono"
                    placeholder="• 5+ years experience with Next.js&#10;• Experience with SCADA / Energy systems"
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
                    className="bg-emerald-500 hover:bg-emerald-400 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition flex items-center space-x-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{editingItem ? 'Save Changes' : 'Post Job Vacancy'}</span>
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
