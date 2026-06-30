const DEVICE_KEY = 'mrfg_device_id'

export function getDeviceId() {
  let id = localStorage.getItem(DEVICE_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(DEVICE_KEY, id)
  }
  return id
}

export async function trackQrScan() {
  const deviceId = getDeviceId()

  try {
    const res = await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId }),
    })

    if (!res.ok) {
      return { ok: false, reason: 'api_error' }
    }

    return { ok: true }
  } catch {
    return { ok: false, reason: 'offline' }
  }
}

export async function fetchQrAnalytics() {
  const res = await fetch('/api/stats')
  if (!res.ok) {
    throw new Error('Could not load analytics. Use Vercel deploy or npm run dev for the API.')
  }
  return res.json()
}
