import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
type Item = { id: number; name: string }

const items: Item[] = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'banana' },
  { id: 3, name: 'apricot' },
  { id: 4, name: 'blueberry' },
]

const DELAY_MS = 1200

function handleApi(
  req: any,
  res: any
) {
  const rawUrl = req.url || '/'
  const [pathname, search = ''] = rawUrl.split('?')
  if (req.method !== 'GET' || pathname !== '/api/items') return false

  const q = (() => {
    const param = search.split('&').find((s: string) => s.startsWith('q='))
    if (!param) return ''
    try {
      return decodeURIComponent(param.slice(2))
    } catch {
      return ''
    }
  })().toLowerCase()
  const filtered = q ? items.filter(i => i.name.toLowerCase().includes(q)) : items

  const timer = setTimeout(() => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(filtered))
  }, DELAY_MS);
  
  req.on('close', () => clearTimeout(timer)) // cleanup if client disconnects

  return true
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'simple-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!handleApi(req, res)) next()
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!handleApi(req, res)) next()
        })
      },
    },
  ],
})
