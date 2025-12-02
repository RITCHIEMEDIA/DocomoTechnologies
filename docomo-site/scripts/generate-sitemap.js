#!/usr/bin/env node

/**
 * Script to generate dynamic sitemap.xml for the website
 * This script should be run as part of the build process
 */

const fs = require('fs');
const path = require('path');

// Base URL of the website
const siteUrl = 'https://docomotech.com';

// Static pages
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/projects', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/careers', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'yearly' },
  { path: '/legal/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/legal/terms', priority: '0.3', changefreq: 'yearly' },
];

// Dynamic pages - in a real implementation, these would be fetched from your CMS
const services = [
  { slug: 'web-development', date: '2023-10-15' },
  { slug: 'mobile-apps', date: '2023-09-22' },
  { slug: 'cloud-solutions', date: '2023-08-30' },
];

const projects = [
  { slug: 'ecommerce-platform', date: '2023-10-15' },
  { slug: 'banking-app', date: '2023-09-22' },
  { slug: 'healthcare-system', date: '2023-08-30' },
];

const blogPosts = [
  { slug: 'future-of-web-development-nigeria', date: '2023-10-15' },
  { slug: 'secure-mobile-applications', date: '2023-09-22' },
  { slug: 'cloud-migration-strategies-smes', date: '2023-08-30' },
];

const careers = [
  { id: '1', date: '2023-10-15' },
  { id: '2', date: '2023-09-22' },
  { id: '3', date: '2023-08-30' },
];

// Generate sitemap entries
const generateUrlEntry = (url, lastmod, changefreq, priority) => {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

// Generate sitemap
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add static pages
  staticPages.forEach(page => {
    const url = siteUrl + page.path;
    xml += generateUrlEntry(url, today, page.changefreq, page.priority) + '\n';
  });
  
  // Add service pages
  services.forEach(service => {
    const url = `${siteUrl}/services/${service.slug}`;
    xml += generateUrlEntry(url, service.date, 'monthly', '0.8') + '\n';
  });
  
  // Add project pages
  projects.forEach(project => {
    const url = `${siteUrl}/projects/${project.slug}`;
    xml += generateUrlEntry(url, project.date, 'monthly', '0.7') + '\n';
  });
  
  // Add blog post pages
  blogPosts.forEach(post => {
    const url = `${siteUrl}/blog/${post.slug}`;
    xml += generateUrlEntry(url, post.date, 'monthly', '0.7') + '\n';
  });
  
  // Add career pages
  careers.forEach(job => {
    const url = `${siteUrl}/careers/${job.id}`;
    xml += generateUrlEntry(url, job.date, 'monthly', '0.6') + '\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Write sitemap to file
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const sitemap = generateSitemap();

fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated successfully at:', sitemapPath);