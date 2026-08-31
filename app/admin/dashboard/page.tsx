'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import AdminLayout from '@/components/admin/AdminLayout'
import { Newspaper, Briefcase, FileText, Plus, ArrowRight, ShieldCheck } from 'lucide-react'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    newsCount: 0,
    jobsCount: 0,
    blogsCount: 0,
  })
  const [user, setUser] = useState<{ name?: string; role?: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [meRes, newsRes, jobsRes, blogsRes] = await Promise.all([
          fetch('/api/auth/me'),
          fetch('/api/admin/news'),
          fetch('/api/admin/jobs'),
          fetch('/api/admin/blog'),
        ])

        const meData = await meRes.json()
        if (meData.authenticated) setUser(meData.user)

        const newsData = await newsRes.json()
        const jobsData = await jobsRes.json()
        const blogsData = await blogsRes.json()

        setStats({
          newsCount: Array.isArray(newsData) ? newsData.length : 0,
          jobsCount: Array.isArray(jobsData) ? jobsData.length : 0,
          blogsCount: Array.isArray(blogsData) ? blogsData.length : 0,
        })
      } catch (err) {
        console.error('Failed to load dashboard stats:', err)
      } finally {
        setLoading(false)
      }
    }
    loadDashboardData()
  }, [])

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-sky-950/40 border border-slate-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Role: {user?.role || 'Manager / HR'}</span>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Welcome back, {user?.name || 'Manager'}
            </h1>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Use this dashboard to manage corporate news releases, post new job vacancies for candidates, and publish industry blog articles across the company portal.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* News Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">News & Updates</p>
                <h2 className="text-3xl font-bold text-white mt-1">{loading ? '...' : stats.newsCount}</h2>
              </div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Newspaper className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">Corporate press & company updates with images</p>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <Link href="/admin/news" className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center space-x-1">
                <span>Manage News</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/admin/news" className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition">
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Careers & Jobs Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Job Listings (HR)</p>
                <h2 className="text-3xl font-bold text-white mt-1">{loading ? '...' : stats.jobsCount}</h2>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Briefcase className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">Active openings in Munich, Bangalore & Remote</p>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <Link href="/admin/jobs" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1">
                <span>Manage Careers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/admin/jobs" className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition">
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Blogs Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Blog Articles</p>
                <h2 className="text-3xl font-bold text-white mt-1">{loading ? '...' : stats.blogsCount}</h2>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <FileText className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">AI, Automation & Utility engineering insights</p>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <Link href="/admin/blog" className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center space-x-1">
                <span>Manage Blog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/admin/blog" className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition">
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Action Shortcuts */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
          <h3 className="text-base font-semibold text-white mb-4">Quick Management Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin/news"
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition flex items-center space-x-4"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Newspaper className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Post News Article</h4>
                <p className="text-xs text-slate-400">Upload announcement & header image</p>
              </div>
            </Link>

            <Link
              href="/admin/jobs"
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition flex items-center space-x-4"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Post Job Opening</h4>
                <p className="text-xs text-slate-400">Add new vacancy for HR talent sourcing</p>
              </div>
            </Link>

            <Link
              href="/admin/blog"
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 transition flex items-center space-x-4"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Publish Tech Article</h4>
                <p className="text-xs text-slate-400">Add author, tags & article content</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
