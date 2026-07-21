/**
 * Portable Node.js + Express server.
 * Runs identically on Hostinger, GoDaddy VPS, AWS EC2, DigitalOcean,
 * Railway, Render, or inside Docker:
 *
 *   npm install && npm run build && npm run start
 *
 * Serves the built SPA from dist/ and exposes POST /api/contact.
 */
import express, { type Request, type Response, type NextFunction } from 'express'
import path from 'node:path'
import fs from 'node:fs'
import type { ServerResponse } from 'node:http'
import { fileURLToPath } from 'node:url'
import { handleContact } from './core/contact'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.json({ limit: '100kb' }))
app.disable('x-powered-by')

// --- API -------------------------------------------------------------
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'utkarsh-soft-solutions', uptime: process.uptime() })
})

app.post('/api/contact', async (req, res) => {
  try {
    const result = await handleContact(req.body)
    res.status(result.status).json(result.body)
  } catch (err) {
    console.error('Unhandled /api/contact error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// --- Static SPA (production) ------------------------------------------
const distDir = path.resolve(__dirname, '..', 'dist')
if (fs.existsSync(distDir)) {
  app.use(
    express.static(distDir, {
      setHeaders(res: ServerResponse, filePath: string) {
        // Hashed assets are immutable; index.html must always revalidate.
        if (/\/assets\//.test(filePath)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
        } else if (filePath.endsWith('index.html')) {
          res.setHeader('Cache-Control', 'no-cache')
        }
      },
    }),
  )
  // SPA fallback for client-side routes (Express 5: named splat).
  app.get('/*splat', (req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith('/api/')) return next()
    res.sendFile(path.join(distDir, 'index.html'))
  })
}

const port = Number(process.env.PORT ?? 3000)
app.listen(port, () => {
  console.log(`Utkarsh Soft Solutions server listening on http://localhost:${port}`)
  console.log(`  email:   ${process.env.RESEND_API_KEY ? 'Resend configured' : 'NOT configured (set RESEND_API_KEY)'}`)
  console.log(
    `  AI:      ${process.env.ANTHROPIC_API_KEY ? 'Anthropic' : process.env.OPENAI_API_KEY ? 'OpenAI' : 'disabled (rule-based classification)'}`,
  )
})
