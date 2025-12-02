// Next.js API route for generating RSS feed
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Sample blog posts data - in a real app, this would come from your CMS
  const posts = [
    {
      id: '1',
      title: 'The Future of Web Development in Nigeria',
      excerpt: 'Exploring the trends and technologies shaping the future of web development in the Nigerian tech ecosystem.',
      date: '2023-10-15',
      author: 'Adebayo Johnson',
      slug: 'future-of-web-development-nigeria',
    },
    {
      id: '2',
      title: 'Building Secure Mobile Applications',
      excerpt: 'Best practices for ensuring the security of mobile applications in the African market.',
      date: '2023-09-22',
      author: 'Chidinma Eze',
      slug: 'secure-mobile-applications',
    },
    {
      id: '3',
      title: 'Cloud Migration Strategies for SMEs',
      excerpt: 'How small and medium enterprises can successfully migrate to cloud infrastructure.',
      date: '2023-08-30',
      author: 'Emeka Okonkwo',
      slug: 'cloud-migration-strategies-smes',
    },
  ];

  const siteUrl = 'https://docomotech.com';
  const feedUrl = `${siteUrl}/rss.xml`;
  const date = new Date().toUTCString();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Docomo Technologies Blog</title>
    <description>Insights, tutorials, and thoughts on technology from the Docomo Technologies team.</description>
    <link>${siteUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${date}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
    `).join('')}
  </channel>
</rss>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(rssFeed);
  res.end();
}