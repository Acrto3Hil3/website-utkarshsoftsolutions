/**
 * Rule-based inquiry classification (Stage 1 — zero cost, deterministic).
 * Service dropdown first, then message keywords.
 */

export const CATEGORIES = [
  'ERP Development',
  'AI Development',
  'Cloud Services',
  'Automation',
  'Website / Web Application',
  'Mobile App Development',
  'Support',
  'Job Application',
  'Partnership',
  'Sales Inquiry',
  'General Consultation',
] as const

export type InquiryCategory = (typeof CATEGORIES)[number]

interface ClassifyInput {
  service?: string
  message: string
}

const KEYWORD_RULES: Array<{ category: InquiryCategory; patterns: RegExp[] }> = [
  { category: 'Job Application', patterns: [/\b(job|career|hiring|internship|resume|cv|vacancy|position|apply(?:ing)?)\b/i] },
  { category: 'Partnership', patterns: [/\b(partner(?:ship)?|collaborat|reseller|white.?label|agency tie.?up|joint venture)\b/i] },
  { category: 'Support', patterns: [/\b(support|bug|issue|error|broken|not working|fix|maintenance|down)\b/i] },
  { category: 'ERP Development', patterns: [/\b(erp|inventory|billing|invoice|accounting|crm|hrms|payroll)\b/i] },
  { category: 'AI Development', patterns: [/\b(ai|artificial intelligence|machine learning|ml|llm|chatbot|automation model|computer vision|nlp)\b/i] },
  { category: 'Cloud Services', patterns: [/\b(cloud|aws|azure|gcp|devops|kubernetes|docker|migration|hosting|serverless)\b/i] },
  { category: 'Automation', patterns: [/\b(automat|workflow|rpa|integration|zapier|pipeline)\b/i] },
  { category: 'Mobile App Development', patterns: [/\b(mobile ?app|android|ios|iphone|flutter|react native|play ?store|app ?store)\b/i] },
  { category: 'Website / Web Application', patterns: [/\b(website|web ?app|landing page|e-?commerce|portal|frontend|react|next\.?js)\b/i] },
]

const SERVICE_MAP: Array<{ match: RegExp; category: InquiryCategory }> = [
  { match: /ai|machine learning/i, category: 'AI Development' },
  { match: /erp|enterprise/i, category: 'ERP Development' },
  { match: /cloud|infra/i, category: 'Cloud Services' },
  { match: /mobile|app development/i, category: 'Mobile App Development' },
  { match: /web|website|application/i, category: 'Website / Web Application' },
  { match: /automation/i, category: 'Automation' },
  { match: /support/i, category: 'Support' },
]

export function classifyInquiry({ service, message }: ClassifyInput): InquiryCategory {
  // 1. Explicit service selection wins (unless "Other").
  if (service && !/other/i.test(service)) {
    const hit = SERVICE_MAP.find((r) => r.match.test(service))
    if (hit) return hit.category
  }
  // 2. Message keywords.
  for (const rule of KEYWORD_RULES) {
    if (rule.patterns.some((p) => p.test(message))) return rule.category
  }
  // 3. Fallbacks.
  if (service && /other/i.test(service)) return 'General Consultation'
  return 'Sales Inquiry'
}

/** e.g. "New AI Development Inquiry from ABC Pvt Ltd" */
export function buildSubject(category: InquiryCategory, company?: string, name?: string): string {
  const from = company?.trim() || name?.trim() || 'Website Visitor'
  return `New ${category} Inquiry from ${from}`
}
