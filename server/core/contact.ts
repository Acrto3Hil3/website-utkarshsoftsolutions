/**
 * Framework-agnostic contact handler — the single source of truth used by
 * BOTH the Express server (any Node host) and the Vercel adapter.
 *
 * Flow: validate → classify (AI if enabled, rules otherwise) → email the
 * team via Resend → send category-specific acknowledgement to the client.
 */
import { classifyInquiry, buildSubject, type InquiryCategory } from './classify'
import { classifyWithAI } from './ai-classify'
import {
  internalEmailHtml,
  acknowledgementEmailHtml,
  acknowledgementSubject,
  type Inquiry,
} from './emails'

export interface ContactResult {
  status: number
  body: { ok: true; category: InquiryCategory } | { error: string }
}

const str = (v: unknown): string | undefined =>
  typeof v === 'string' && v.trim() !== '' ? v.trim() : undefined

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function sendEmail(payload: Record<string, unknown>): Promise<Response> {
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

export async function handleContact(raw: unknown): Promise<ContactResult> {
  if (!process.env.RESEND_API_KEY) {
    return { status: 503, body: { error: 'Email service is not configured. Set RESEND_API_KEY.' } }
  }
  if (typeof raw !== 'object' || raw === null) {
    return { status: 400, body: { error: 'Invalid request body' } }
  }
  const b = raw as Record<string, unknown>

  // Mirror of src/lib/contact-schema.ts
  const name = str(b.name)
  const email = str(b.email)
  const message = str(b.message)
  const service = str(b.service)
  const data: Inquiry = {
    name: name ?? '',
    company: str(b.company),
    email: email ?? '',
    phone: str(b.phone),
    budget: str(b.budget),
    service,
    message: message ?? '',
  }

  if (!name || name.length < 2) return { status: 400, body: { error: 'Please enter your full name.' } }
  if (!email || !EMAIL_RE.test(email)) return { status: 400, body: { error: 'Please enter a valid email address.' } }
  if (!message || message.length < 10) {
    return { status: 400, body: { error: 'Please describe your project (at least 10 characters).' } }
  }

  // Stage 2 (feature-flagged AI) with automatic Stage 1 (rules) fallback.
  const category =
    (await classifyWithAI(service, data.message)) ??
    classifyInquiry({ service, message: `${data.message} ${service ?? ''}` })

  const from = process.env.CONTACT_FROM ?? process.env.FROM_EMAIL ?? 'Utkarsh Soft Solutions <onboarding@resend.dev>'
  const to = process.env.CONTACT_TO ?? process.env.CONTACT_EMAIL ?? 'utkarshsoftsolutions@gmail.com'

  // 1. Internal notification (must succeed).
  try {
    const internal = await sendEmail({
      from,
      to: [to],
      reply_to: data.email,
      subject: buildSubject(category, data.company, data.name),
      html: internalEmailHtml(category, data),
    })
    if (!internal.ok) {
      const detail = await internal.text().catch(() => '')
      console.error('Resend internal email failed:', internal.status, detail)
      return { status: 502, body: { error: 'Failed to send your inquiry. Please try again later.' } }
    }
  } catch (err) {
    console.error('Resend request failed (network):', err)
    return { status: 502, body: { error: 'Failed to send your inquiry. Please try again later.' } }
  }

  // 2. Client acknowledgement (best-effort; category-specific).
  try {
    const ack = await sendEmail({
      from,
      to: [data.email],
      subject: acknowledgementSubject(category),
      html: acknowledgementEmailHtml(category, data),
    })
    if (!ack.ok) {
      console.error('Resend acknowledgement failed:', ack.status, await ack.text().catch(() => ''))
    }
  } catch (err) {
    console.error('Resend acknowledgement failed (network):', err)
  }

  return { status: 200, body: { ok: true, category } }
}
