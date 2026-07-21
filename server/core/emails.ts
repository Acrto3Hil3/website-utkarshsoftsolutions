import type { InquiryCategory } from './classify'

export interface Inquiry {
  name: string
  company?: string
  email: string
  phone?: string
  budget?: string
  service?: string
  message: string
}

const COMPANY_NAME = process.env.COMPANY_NAME ?? 'Utkarsh Soft Solutions'
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'utkarshsoftsolutions@gmail.com'
const PHONE = process.env.PHONE ?? '+91 62838 44258'

const CATEGORY_INTRO: Record<InquiryCategory, string> = {
  'ERP Development':
    'Thank you for your interest in our ERP and enterprise systems practice. Our solutions team will review your operational requirements and reply with a proposed discovery approach, typical architecture options, and indicative timelines.',
  'AI Development':
    'Thank you for reaching out about AI development. Our AI engineering team will assess your use case — including data readiness, model strategy, and integration points — and come back to you with recommended next steps.',
  'Cloud Services':
    'Thank you for contacting us about cloud services. Our cloud architects will review your current infrastructure context and respond with an initial assessment covering migration paths, security posture, and cost optimization.',
  Automation:
    'Thank you for your interest in process automation. Our team will map your described workflow against proven automation patterns and reply with a feasibility outline and expected efficiency gains.',
  'Website / Web Application':
    'Thank you for your interest in our web engineering services. Our team will review your requirements and respond with a recommended technical approach, project phases, and timeline estimate.',
  Support:
    'Thank you for contacting our support desk. Your request has been logged and routed to the on-duty engineer. We prioritize production-impacting issues and will respond as quickly as possible.',
  'Job Application':
    `Thank you for your interest in joining ${COMPANY_NAME}. Your application has been forwarded to our talent team. If your profile matches an open or upcoming role, we will contact you for the next steps.`,
  Partnership:
    `Thank you for your interest in partnering with ${COMPANY_NAME}. Our leadership team reviews all partnership proposals and will reach out to schedule an introductory conversation if there is a strategic fit.`,
  'Sales Inquiry':
    `Thank you for contacting ${COMPANY_NAME}. Our consulting team will review your inquiry and respond shortly with relevant capabilities, case studies, and a proposed next step.`,
  'General Consultation':
    'Thank you for reaching out. Our consulting team will review your message and get back to you to understand your goals and recommend the right engagement model.',
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const row = (label: string, value?: string) =>
  value
    ? `<tr><td style="padding:6px 12px;color:#64748b;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#0f172a">${esc(value)}</td></tr>`
    : ''

/** Internal notification sent to the company inbox. */
export function internalEmailHtml(category: InquiryCategory, d: Inquiry): string {
  return `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;background:#f1f5f9;padding:24px">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
    <div style="background:#0c1324;padding:20px 24px">
      <p style="margin:0;color:#adc6ff;font-size:12px;letter-spacing:2px;text-transform:uppercase">${COMPANY_NAME} — Website Inquiry</p>
      <h1 style="margin:8px 0 0;color:#ffffff;font-size:20px">${category}</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;margin:12px 0">
      ${row('Name', d.name)}
      ${row('Company', d.company)}
      ${row('Email', d.email)}
      ${row('Phone', d.phone)}
      ${row('Budget', d.budget)}
      ${row('Service', d.service)}
    </table>
    <div style="padding:0 24px 24px">
      <p style="font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;margin:0 0 6px">Message</p>
      <p style="font-size:14px;color:#0f172a;line-height:1.6;margin:0;white-space:pre-wrap">${esc(d.message)}</p>
    </div>
  </div>
</body></html>`
}

/** Category-specific acknowledgement sent to the client. */
export function acknowledgementEmailHtml(category: InquiryCategory, d: Inquiry): string {
  const firstName = d.name.trim().split(/\s+/)[0] || 'there'
  const telHref = PHONE.replace(/[^+\d]/g, '')
  return `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;background:#f1f5f9;padding:24px">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
    <div style="background:#0c1324;padding:24px">
      <h1 style="margin:0;color:#ffffff;font-size:18px">${COMPANY_NAME}</h1>
      <p style="margin:6px 0 0;color:#adc6ff;font-size:12px;letter-spacing:2px;text-transform:uppercase">Build · Automate · Scale</p>
    </div>
    <div style="padding:24px;font-size:14px;color:#0f172a;line-height:1.7">
      <p style="margin:0 0 16px">Dear ${esc(firstName)},</p>
      <p style="margin:0 0 16px">${CATEGORY_INTRO[category]}</p>
      <p style="margin:0 0 16px">We typically respond within one business day. If your request is urgent, you can reach us directly at <a href="tel:${telHref}" style="color:#005ac2">${PHONE}</a>.</p>
      <p style="margin:0 0 4px">Warm regards,</p>
      <p style="margin:0;font-weight:bold">The ${COMPANY_NAME} Team</p>
      <p style="margin:2px 0 0;color:#64748b">${CONTACT_EMAIL}</p>
    </div>
    <div style="padding:16px 24px;border-top:1px solid #e2e8f0;background:#f8fafc">
      <p style="margin:0;font-size:12px;color:#94a3b8">Reference: ${category} · This is an automated acknowledgement of your inquiry.</p>
    </div>
  </div>
</body></html>`
}

export function acknowledgementSubject(category: InquiryCategory): string {
  return `We received your ${category.toLowerCase()} inquiry — ${COMPANY_NAME}`
}
