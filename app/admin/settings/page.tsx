'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { KeyRound, Shield, CheckCircle2, AlertCircle, User, Mail, Database, Server } from 'lucide-react'

export default function AdminSettingsPage() {
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; role: string } | null>(null)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch('/api/auth/me')
        const data = await res.json()
        if (data.authenticated) {
          setCurrentUser(data.user)
        }
      } catch (err) {
        console.error('Failed to load user:', err)
      }
    }
    loadUser()
  }, [])

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' })
      return
    }

    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: 'New password must be at least 6 characters' })
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to update password')
      }

      setMessage({ type: 'success', text: 'Your password has been updated securely!' })
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage({ type: 'error', text: err.message })
      } else {
        setMessage({ type: 'error', text: 'An unexpected error occurred' })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Security & Account Settings</h1>
          <p className="text-slate-400 text-sm mt-1">Manage your credentials, change password, and view self-hosted database metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Account Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">{currentUser?.name || 'Account User'}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-sky-500/10 text-sky-400">
                  Role: {currentUser?.role || 'MANAGER'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{currentUser?.email || 'hr@esc.com'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Bcrypt Encrypted Session</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-400 font-medium">100% Self-Hosted Server</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-medium">Embedded SQLite Engine</span>
              </div>
            </div>
          </div>

          {/* Change Password Form */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Change Account Password</h2>
                <p className="text-xs text-slate-400">Update your security password for accessing the CMS studio</p>
              </div>
            </div>

            {message && (
              <div
                className={`p-4 rounded-xl text-sm flex items-center space-x-2 ${
                  message.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                    : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <span>{message.text}</span>
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Current Password</label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter your current password"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">New Password</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter new password (min. 6 characters)"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
                  placeholder="Re-enter new password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-500 to-sky-600 hover:from-indigo-400 hover:to-sky-500 text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-indigo-500/20 transition flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{loading ? 'Updating Password...' : 'Save New Password'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
