// Minimal in-memory rate limiter. Good enough for this app's deployment
// shape (a single self-hosted Node process) — it resets on restart and
// does not share state across instances, so if this is ever deployed as
// multiple replicas or on serverless, swap the Map below for a shared
// store (e.g. Redis) so limits apply across all instances.

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

/**
 * Returns { allowed: false, retryAfterSeconds } once `limit` attempts have
 * been recorded for `key` within `windowMs`; otherwise records this attempt
 * and returns { allowed: true }.
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): { allowed: true } | { allowed: false; retryAfterSeconds: number } {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true }
  }

  if (bucket.count >= limit) {
    return { allowed: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) }
  }

  bucket.count += 1
  return { allowed: true }
}

/** Clears the bucket for `key` — call on a successful login to reset attempts. */
export function resetRateLimit(key: string): void {
  buckets.delete(key)
}
