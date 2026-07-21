import { z } from 'zod'

/**
 * Shared contact-form schema. The `/api/contact` backend mirrors this shape.
 * Fields the design does not collect are optional server-side.
 */
export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  budget: z.string().optional(),
  service: z.string().min(1, 'Please select a service.'),
  message: z.string().min(10, 'Please describe your project (at least 10 characters).'),
})

export type ContactFormData = z.infer<typeof contactSchema>
