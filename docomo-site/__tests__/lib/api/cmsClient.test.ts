import {
  getCMSData,
  getServices,
  getProjects,
  getBlogPosts,
  getTeamMembers,
} from '@/lib/api/cmsClient';

describe('cmsClient', () => {
  test('getCMSData returns mock data', async () => {
    const result = await getCMSData('test-query');
    expect(result).toEqual({ data: null, error: null });
  });

  test('getServices returns mock services', async () => {
    const services = await getServices();
    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);
  });

  test('getProjects returns mock projects', async () => {
    const projects = await getProjects();
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  test('getBlogPosts returns mock blog posts', async () => {
    const posts = await getBlogPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
  });

  test('getTeamMembers returns mock team members', async () => {
    const members = await getTeamMembers();
    expect(Array.isArray(members)).toBe(true);
    expect(members.length).toBeGreaterThan(0);
  });
});