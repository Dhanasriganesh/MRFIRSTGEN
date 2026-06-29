import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import QRCode from 'qrcode'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

function loadSiteUrl() {
  if (process.env.VITE_SITE_URL?.trim()) {
    return process.env.VITE_SITE_URL.trim().replace(/\/$/, '')
  }

  const envPath = resolve(root, '.env')
  if (existsSync(envPath)) {
    const match = readFileSync(envPath, 'utf8').match(/^VITE_SITE_URL=(.+)$/m)
    if (match?.[1]?.trim()) {
      return match[1].trim().replace(/\/$/, '')
    }
  }

  return null
}

const siteUrl = loadSiteUrl()

if (!siteUrl) {
  console.error(`
ERROR: VITE_SITE_URL is not set.

Add your live website URL to .env before generating a banner QR:

  VITE_SITE_URL=https://www.yourdomain.com

Then run: npm run generate:qr
`)
  process.exit(1)
}

const url = `${siteUrl}/interested?src=qr`

await QRCode.toFile(resolve(root, 'public/enrollment-qr.png'), url, {
  width: 1024,
  margin: 2,
  color: { dark: '#0a1628', light: '#ffffff' },
})

console.log('Enrollment QR saved → public/enrollment-qr.png')
console.log('URL encoded:', url)
