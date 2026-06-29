import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { trackQrScan } from '../utils/qrAnalytics'

export default function useQrScanTracker() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.get('src') !== 'qr') return

    trackQrScan()
  }, [searchParams])
}
