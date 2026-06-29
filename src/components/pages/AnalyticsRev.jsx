import { useCallback, useEffect, useState } from 'react'
import { Smartphone, ScanLine, RefreshCw } from 'lucide-react'
import { fetchQrAnalytics } from '../../utils/qrAnalytics'

function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

function AnalyticsRev() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [stats, setStats] = useState({
    uniqueDevices: 0,
    totalScans: 0,
    recent: [],
  })

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchQrAnalytics()
      setStats(data)
    } catch (err) {
      setError(err.message || 'Failed to load analytics')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
    const interval = setInterval(load, 30000)
    return () => clearInterval(interval)
  }, [load])

  return (
    <main className="min-h-screen bg-emerald-50/50 section-padding">
      <div className="container-premium max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600 mb-2">
              Private · /analytics/rev
            </p>
            <h1 className="font-display text-3xl font-bold text-emerald-950">QR Scan Analytics</h1>
            <p className="text-emerald-900/60 text-sm mt-2">
              Devices that scanned your banner QR and opened the I&apos;m Interested page.
            </p>
          </div>
          <button
            type="button"
            onClick={load}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 hover:bg-emerald-500 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {error}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <p className="text-4xl font-display font-bold text-emerald-950">
              {loading ? '…' : stats.uniqueDevices}
            </p>
            <p className="text-sm text-emerald-800/60 mt-1 font-medium">Unique devices (QR scans)</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center mb-4">
              <ScanLine className="w-6 h-6" />
            </div>
            <p className="text-4xl font-display font-bold text-emerald-950">
              {loading ? '…' : stats.totalScans}
            </p>
            <p className="text-sm text-emerald-800/60 mt-1 font-medium">Total QR page opens</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-emerald-100">
            <h2 className="font-display font-semibold text-emerald-950">Recent scans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-50/80 text-left text-emerald-800/70">
                  <th className="px-6 py-3 font-medium">Device</th>
                  <th className="px-6 py-3 font-medium">First scan</th>
                  <th className="px-6 py-3 font-medium">Last scan</th>
                  <th className="px-6 py-3 font-medium text-right">Opens</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-emerald-800/50">
                      Loading…
                    </td>
                  </tr>
                ) : stats.recent.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-emerald-800/50">
                      No QR scans recorded yet.
                    </td>
                  </tr>
                ) : (
                  stats.recent.map((row) => (
                    <tr key={row.id} className="border-t border-emerald-50">
                      <td className="px-6 py-3 font-mono text-xs text-emerald-900">
                        {row.device_id.slice(0, 8)}…
                      </td>
                      <td className="px-6 py-3 text-emerald-800/70">{formatDate(row.first_scan_at)}</td>
                      <td className="px-6 py-3 text-emerald-800/70">{formatDate(row.last_scan_at)}</td>
                      <td className="px-6 py-3 text-right font-semibold text-emerald-900">
                        {row.scan_count}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-emerald-800/50 leading-relaxed max-w-lg mx-auto">
          No database required — counts are stored via lightweight API routes. Deploy on{' '}
          <strong>Vercel</strong> for production tracking. QR links use{' '}
          <code className="bg-white px-1 rounded">/interested?src=qr</code>
        </p>
      </div>
    </main>
  )
}

export default AnalyticsRev
