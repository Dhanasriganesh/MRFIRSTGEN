import { getStats } from '../src/server/analyticsStore.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    return res.status(200).json(getStats())
  } catch {
    return res.status(500).json({ error: 'Failed to load stats' })
  }
}
