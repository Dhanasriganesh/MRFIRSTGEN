import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import {
  recordScan,
  getStats,
  hydrateStore,
  exportStore,
} from './src/server/analyticsStore.js'

const STORE_FILE = join(process.cwd(), 'analytics-store.json')

async function loadFileStore() {
  try {
    const raw = await readFile(STORE_FILE, 'utf8')
    hydrateStore(JSON.parse(raw))
  } catch {
    /* start fresh */
  }
}

async function saveFileStore() {
  await writeFile(STORE_FILE, JSON.stringify(exportStore(), null, 2))
}

function analyticsDevApi() {
  return {
    name: 'analytics-dev-api',
    configureServer(server) {
      loadFileStore()

      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/stats' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(getStats()))
          return
        }

        if (req.url === '/api/track' && req.method === 'POST') {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', async () => {
            try {
              const { deviceId } = JSON.parse(body)
              if (!deviceId) {
                res.statusCode = 400
                res.end(JSON.stringify({ error: 'deviceId required' }))
                return
              }
              recordScan(deviceId)
              await saveFileStore()
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true }))
            } catch {
              res.statusCode = 500
              res.end(JSON.stringify({ error: 'Failed to record' }))
            }
          })
          return
        }

        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), analyticsDevApi()],
})
