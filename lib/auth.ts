import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

// No fallback secret. A previous hardcoded fallback here meant any
// deployment that forgot to set JWT_SECRET would silently sign/verify
// tokens with a string committed in source — anyone reading the code could
// forge a valid admin session. Fail loudly instead.
function getSecret(): string {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error(
      'JWT_SECRET environment variable is not set. Refusing to sign or verify tokens without it.'
    )
  }
  return secret
}

export interface JWTPayload {
  userId: string
  email: string
  name: string
  role: string
}

export function signToken(payload: JWTPayload): string {
  return jwt.sign(payload, getSecret(), { expiresIn: '7d' })
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, getSecret()) as JWTPayload
  } catch {
    return null
  }
}

export async function getCurrentUser(): Promise<JWTPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('cms_session')?.value
  if (!token) return null
  return verifyToken(token)
}

// Roles allowed to manage a given resource. ADMIN can do everything; HR is
// scoped to job listings (matches the seeded "Talent Acquisition Partner"
// account) since nothing previously checked `role` at all — any
// authenticated user, including HR, could create/edit/delete blog posts,
// news, and uploads.
export type Role = 'ADMIN' | 'HR' | 'MANAGER'

export async function requireUser(): Promise<JWTPayload | { error: string; status: number }> {
  const user = await getCurrentUser()
  if (!user) {
    return { error: 'Unauthorized', status: 401 }
  }
  return user
}

export async function requireRole(
  allowedRoles: Role[]
): Promise<JWTPayload | { error: string; status: number }> {
  const user = await getCurrentUser()
  if (!user) {
    return { error: 'Unauthorized', status: 401 }
  }
  if (!allowedRoles.includes(user.role as Role)) {
    return { error: 'Forbidden — insufficient permissions', status: 403 }
  }
  return user
}

export function isAuthResult(
  result: JWTPayload | { error: string; status: number }
): result is { error: string; status: number } {
  return 'error' in result
}
