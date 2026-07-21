/**
 * Vercel adapter — thin wrapper around the portable core in server/core.
 * Only used when deploying to Vercel; every other host runs server/index.ts.
 */
import { handleContact } from '../server/core/contact'

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
  const result = await handleContact(body)
  return Response.json(result.body, { status: result.status })
}
