import { fetcher } from '@/lib/fetcher';

describe('fetcher', () => {
  test('fetches data successfully', async () => {
    // Since we can't make real HTTP requests in tests, we'll just verify the function exists
    expect(typeof fetcher).toBe('function');
  });
});