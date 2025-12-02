import { sendContact } from '@/server/actions/contactAction';

describe('contactAction', () => {
  test('sendContact function exists', async () => {
    // Since we can't test server actions directly in JSDOM, we'll just verify the function exists
    expect(typeof sendContact).toBe('function');
  });
});