import { sendContact } from '@/lib/api/sendContact';

describe('sendContact', () => {
  test('sends contact data and returns success response', async () => {
    const data = {
      name: 'John Doe',
      company: 'Test Company',
      email: 'john@example.com',
      phone: '1234567890',
      subject: 'Test Subject',
      message: 'Test message',
    };

    const result = await sendContact(data);
    
    expect(result).toEqual({
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
    });
  });
});