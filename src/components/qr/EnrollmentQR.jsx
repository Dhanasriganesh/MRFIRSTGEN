import { useRef, useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Download, Copy, Check, AlertTriangle } from 'lucide-react'
import {
  getEnrollmentUrl,
  isLocalUrl,
  hasProductionUrlConfigured,
} from '../../utils/siteUrl'
import Button from '../common/Button'

export default function EnrollmentQR({ showDownload = true, size = 200 }) {
  const qrRef = useRef(null)
  const [url, setUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setUrl(getEnrollmentUrl())
  }, [])

  const isLocal = isLocalUrl(url)
  const showPrintWarning = isLocal && !hasProductionUrlConfigured()

  const handleDownload = () => {
    const svg = qrRef.current?.querySelector('svg')
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    canvas.width = 1024
    canvas.height = 1024

    img.onload = () => {
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      const link = document.createElement('a')
      link.download = 'MR-FIRSTGEN-Enrollment-QR.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    }

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!url) return null

  return (
    <div className="flex flex-col items-center">
      {showPrintWarning && (
        <div className="w-full mb-5 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-left">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-900">Localhost QR — not for printing</p>
              <p className="text-xs text-amber-800/80 mt-1 leading-relaxed">
                This QR only works on your computer. Before printing a banner, add your live website
                URL to <code className="bg-amber-100 px-1 rounded">.env</code> as{' '}
                <code className="bg-amber-100 px-1 rounded">VITE_SITE_URL=https://yourdomain.com</code>,
                restart the dev server, then download the QR again.
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        ref={qrRef}
        className="p-5 bg-white rounded-2xl shadow-xl shadow-navy-900/10 border border-navy-100"
      >
        <QRCodeSVG
          value={url}
          size={size}
          level="H"
          includeMargin={false}
          fgColor="#0a1628"
          bgColor="#ffffff"
        />
      </div>

      <p className="mt-4 text-xs text-navy-500 text-center max-w-xs break-all font-mono">{url}</p>

      {showDownload && (
        <div className="flex flex-wrap gap-3 mt-6 justify-center">
          <Button
            variant="outline"
            onClick={handleDownload}
            className="text-sm py-2.5 px-5"
            disabled={showPrintWarning}
          >
            <Download className="w-4 h-4" />
            Download QR (Print)
          </Button>
          <Button variant="outline" onClick={handleCopy} className="text-sm py-2.5 px-5">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy Link'}
          </Button>
        </div>
      )}
    </div>
  )
}
