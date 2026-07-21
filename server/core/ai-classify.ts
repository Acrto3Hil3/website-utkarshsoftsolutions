/**
 * Stage 2 — optional AI classification behind a feature flag.
 *
 * If ANTHROPIC_API_KEY or OPENAI_API_KEY is set, the inquiry is classified by
 * the corresponding model. On ANY failure (no key, network error, invalid
 * output, timeout) the caller falls back to rule-based classification, so the
 * site works identically with zero AI spend.
 */
import { CATEGORIES, type InquiryCategory } from './classify'

const TIMEOUT_MS = 8000

function prompt(service: string | undefined, message: string): string {
  return [
    'Classify this website inquiry for an IT consulting company into exactly one category.',
    `Categories: ${CATEGORIES.join(' | ')}`,
    service ? `Selected service: ${service}` : '',
    `Message: ${message}`,
    'Reply with ONLY the category name, nothing else.',
  ]
    .filter(Boolean)
    .join('\n')
}

function parseCategory(text: string): InquiryCategory | null {
  const cleaned = text.trim()
  return CATEGORIES.find((c) => cleaned.toLowerCase().includes(c.toLowerCase())) ?? null
}

async function fetchWithTimeout(url: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    return await fetch(url, { ...init, signal: controller.signal })
  } finally {
    clearTimeout(timer)
  }
}

async function classifyWithAnthropic(apiKey: string, service: string | undefined, message: string): Promise<InquiryCategory | null> {
  const res = await fetchWithTimeout('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL ?? 'claude-haiku-4-5-20251001',
      max_tokens: 20,
      messages: [{ role: 'user', content: prompt(service, message) }],
    }),
  })
  if (!res.ok) return null
  const data = (await res.json()) as { content?: Array<{ type: string; text?: string }> }
  const text = data.content?.find((b) => b.type === 'text')?.text ?? ''
  return parseCategory(text)
}

async function classifyWithOpenAI(apiKey: string, service: string | undefined, message: string): Promise<InquiryCategory | null> {
  const res = await fetchWithTimeout('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
      max_tokens: 20,
      messages: [{ role: 'user', content: prompt(service, message) }],
    }),
  })
  if (!res.ok) return null
  const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> }
  return parseCategory(data.choices?.[0]?.message?.content ?? '')
}

/** Returns a category from AI, or null when AI is unavailable/disabled/failed. */
export async function classifyWithAI(service: string | undefined, message: string): Promise<InquiryCategory | null> {
  // Explicit kill switch: ENABLE_AI_CLASSIFICATION=false disables AI even
  // when keys are present. Unset/true → key presence decides.
  if (String(process.env.ENABLE_AI_CLASSIFICATION ?? 'true').toLowerCase() === 'false') {
    return null
  }
  try {
    const anthropicKey = process.env.ANTHROPIC_API_KEY
    if (anthropicKey) return await classifyWithAnthropic(anthropicKey, service, message)
    const openaiKey = process.env.OPENAI_API_KEY
    if (openaiKey) return await classifyWithOpenAI(openaiKey, service, message)
    return null
  } catch (err) {
    console.error('AI classification failed, falling back to rules:', err)
    return null
  }
}
