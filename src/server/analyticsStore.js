/**
 * In-memory analytics store (no database).
 * On Vercel serverless, persists while the function instance is warm.
 * For local dev, synced to analytics-store.json via Vite middleware.
 */

function getStore() {
  if (!globalThis.__mrfgAnalytics) {
    globalThis.__mrfgAnalytics = { total: 0, devices: {} }
  }
  return globalThis.__mrfgAnalytics
}

export function hydrateStore(data) {
  if (data && typeof data === 'object') {
    globalThis.__mrfgAnalytics = {
      total: data.total || 0,
      devices: data.devices || {},
    }
  }
}

export function exportStore() {
  const store = getStore()
  return { total: store.total, devices: store.devices }
}

export function recordScan(deviceId) {
  const store = getStore()
  const now = Date.now()

  store.total += 1

  if (!store.devices[deviceId]) {
    store.devices[deviceId] = { first: now, last: now, count: 0 }
  }

  store.devices[deviceId].count += 1
  store.devices[deviceId].last = now

  return exportStore()
}

export function getStats() {
  const store = getStore()

  const recent = Object.entries(store.devices)
    .map(([deviceId, d]) => ({
      id: deviceId,
      device_id: deviceId,
      first_scan_at: new Date(d.first).toISOString(),
      last_scan_at: new Date(d.last).toISOString(),
      scan_count: d.count,
    }))
    .sort((a, b) => new Date(b.last_scan_at) - new Date(a.last_scan_at))
    .slice(0, 25)

  return {
    configured: true,
    uniqueDevices: Object.keys(store.devices).length,
    totalScans: store.total,
    recent,
  }
}
