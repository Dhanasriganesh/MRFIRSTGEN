/**
 * Production site URL for QR codes and absolute links.
 * Set VITE_SITE_URL in .env before build / generate:qr (e.g. https://www.mrfirstgen.com)
 */
export function getSiteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '')
  if (fromEnv) return fromEnv

  if (typeof window !== 'undefined') {
    return window.location.origin.replace(/\/$/, '')
  }

  return ''
}

export function getEnrollmentUrl() {
  const base = getSiteUrl()
  return base ? `${base}/interested` : '/interested'
}

export function isLocalUrl(url = getEnrollmentUrl()) {
  return /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?/i.test(url)
}

export function hasProductionUrlConfigured() {
  return Boolean(import.meta.env.VITE_SITE_URL?.trim())
}
