import {
  validateEmail,
  validateRequired,
  validateMinLength,
  validatePhoneNumber,
  validateUrl,
} from '@/lib/validators';

describe('validators', () => {
  describe('validateEmail', () => {
    test('returns true for valid emails', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    test('returns false for invalid emails', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
    });
  });

  describe('validateRequired', () => {
    test('returns true for non-empty values', () => {
      expect(validateRequired('test')).toBe(true);
      expect(validateRequired(' ')).toBe(true); // space is considered non-empty
    });

    test('returns false for empty values', () => {
      expect(validateRequired('')).toBe(false);
    });
  });

  describe('validateMinLength', () => {
    test('returns true for values meeting minimum length', () => {
      expect(validateMinLength('test', 4)).toBe(true);
      expect(validateMinLength('hello', 3)).toBe(true);
    });

    test('returns false for values not meeting minimum length', () => {
      expect(validateMinLength('test', 5)).toBe(false);
      expect(validateMinLength('', 1)).toBe(false);
    });
  });

  describe('validatePhoneNumber', () => {
    test('returns true for valid phone numbers', () => {
      expect(validatePhoneNumber('+2341234567890')).toBe(true);
      expect(validatePhoneNumber('1234567890')).toBe(true);
      expect(validatePhoneNumber('(123) 456-7890')).toBe(true);
    });

    test('returns false for invalid phone numbers', () => {
      expect(validatePhoneNumber('invalid')).toBe(false);
      expect(validatePhoneNumber('')).toBe(false);
    });
  });

  describe('validateUrl', () => {
    test('returns true for valid URLs', () => {
      expect(validateUrl('https://example.com')).toBe(true);
      expect(validateUrl('http://localhost:3000')).toBe(true);
    });

    test('returns false for invalid URLs', () => {
      expect(validateUrl('invalid-url')).toBe(false);
      expect(validateUrl('')).toBe(false);
      expect(validateUrl('not-a-url')).toBe(false);
    });
  });
});