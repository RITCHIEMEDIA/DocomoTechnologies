// Zod schemas for form validation
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const newsletterFormSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const jobApplicationFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  position: z.string().min(1, 'Position is required'),
  experience: z.string().min(1, 'Experience is required'),
  coverLetter: z.string().min(1, 'Cover letter is required'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
export type JobApplicationFormData = z.infer<typeof jobApplicationFormSchema>;