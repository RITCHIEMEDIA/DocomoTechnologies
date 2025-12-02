import {
  contactFormSchema,
  newsletterFormSchema,
  jobApplicationFormSchema,
} from '@/lib/schema';

describe('schema', () => {
  describe('contactFormSchema', () => {
    test('validates correct data', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'Test message',
      };

      expect(() => contactFormSchema.parse(data)).not.toThrow();
    });

    test('rejects missing required fields', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        // Missing subject and message
      };

      expect(() => contactFormSchema.parse(data)).toThrow();
    });
  });

  describe('newsletterFormSchema', () => {
    test('validates correct email', () => {
      const data = { email: 'john@example.com' };
      expect(() => newsletterFormSchema.parse(data)).not.toThrow();
    });

    test('rejects invalid email', () => {
      const data = { email: 'invalid-email' };
      expect(() => newsletterFormSchema.parse(data)).toThrow();
    });
  });

  describe('jobApplicationFormSchema', () => {
    test('validates correct data', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        position: 'Developer',
        experience: '5 years',
        coverLetter: 'This is my cover letter',
      };

      expect(() => jobApplicationFormSchema.parse(data)).not.toThrow();
    });

    test('rejects missing required fields', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        // Missing position, experience, and coverLetter
      };

      expect(() => jobApplicationFormSchema.parse(data)).toThrow();
    });
  });
});