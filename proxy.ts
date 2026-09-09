import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from '@/lib/auth'

export function proxy(request: NextRequest) {
  const token = request.cookies.get('cms_session')?.value
  const { pathname } = request.nextUrl

  // Previously this only checked that the cookie was *present*, not that it
  // was a valid, unexpired token — a garbage or expired cookie value still
  // passed through to the admin UI. It also never covered /api/admin/*,
  // which is why those routes had to (and now do) enforce auth themselves
  // too — this is defense in depth, not a replacement for that.
  let isValidSession = false
  if (token) {
    try {
      isValidSession = verifyToken(token) !== null
    } catch {
      // JWT_SECRET missing/misconfigured — fail closed (treat as unauthenticated)
      isValidSession = false
    }
  }

  const isApiRoute = pathname.startsWith('/api/')

  // Protect /admin pages (except /admin/login) and /api/admin/* endpoints
  const isProtectedAdminPath =
    (pathname.startsWith('/admin') && pathname !== '/admin/login') ||
    pathname.startsWith('/api/admin')

  if (isProtectedAdminPath && !isValidSession) {
    if (isApiRoute) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const loginUrl = new URL('/admin/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // If already logged in, redirect /admin/login to /admin/dashboard
  if (pathname === '/admin/login' && isValidSession) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
