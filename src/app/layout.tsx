import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | DOCOMO Technologies Limited - Civil Engineering & Construction Nigeria',
    default: 'DOCOMO Technologies Limited - Civil Engineering, Oil Field Services & Construction Company in Nigeria',
  },
  description: 'Leading civil engineering, electrical engineering, oil field services, and general contracting company in Owerri, Imo State, Nigeria. Expert road construction, building contractors, infrastructure development across Nigeria. RC: 620534. Powered by RITCHIETECH',
  keywords: ['civil engineering Nigeria', 'construction company Owerri', 'oil field services Niger Delta', 'electrical engineering Imo State', 'road construction Nigeria', 'building contractor Owerri', 'infrastructure development Nigeria', 'DOCOMO Technologies', 'general contractor Nigeria', 'engineering services Owerri'],
  authors: [{ name: 'DOCOMO Technologies Limited' }],
  creator: 'DOCOMO Technologies Limited',
  publisher: 'DOCOMO Technologies Limited - Powered by RITCHIETECH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://docomotechnologieslimited.com.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DOCOMO Technologies Limited - Civil Engineering & Construction Nigeria',
    description: 'Leading civil engineering, electrical engineering, oil field services, and general contracting company in Owerri, Imo State, Nigeria.',
    url: 'https://docomotechnologieslimited.com.ng',
    siteName: 'DOCOMO Technologies Limited',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/assets/og/og-default.png',
        width: 1200,
        height: 630,
        alt: 'DOCOMO Technologies Limited - Civil Engineering Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOCOMO Technologies Limited - Civil Engineering Nigeria',
    description: 'Leading construction and engineering company in Nigeria',
    images: ['/assets/og/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/logos/docomo-logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/logos/docomo-logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DOCOMO Technologies Limited',
    alternateName: 'Docomo Technologies',
    url: 'https://docomotechnologieslimited.com.ng',
    logo: 'https://docomotechnologieslimited.com.ng/assets/logos/docomo-logo.svg',
    description: 'Leading civil engineering, electrical engineering, oil field services, and general contracting company in Nigeria. Powered by RITCHIETECH',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'No 6th Avenue 62nd Road House 1, Federal Housing Estate Egbeda',
        addressLocality: 'Owerri',
        addressRegion: 'Imo State',
        addressCountry: 'NG',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '92 Wetheral Road',
        addressLocality: 'Owerri',
        addressRegion: 'Imo State',
        addressCountry: 'NG',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'service@docomotechnologieslimited.com.ng',
      contactType: 'Customer Service',
      areaServed: 'NG',
      availableLanguage: ['English'],
    },
    founders: [
      {
        '@type': 'Person',
        name: 'Nnajiofor Alex O.',
        jobTitle: 'Director',
      },
      {
        '@type': 'Person',
        name: 'Nnajiofor Jerry O.',
        jobTitle: 'Director',
      },
    ],
    sameAs: [
      'https://twitter.com/DocomoTech',
      'https://linkedin.com/company/docomo-technologies',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '5.4840',
        longitude: '7.0351',
      },
      geoRadius: '500000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction and Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Civil Engineering',
            description: 'Comprehensive civil engineering solutions including road construction, bridges, and drainage systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Engineering',
            description: 'Professional electrical installation and power distribution systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Oil Field Services',
            description: 'Specialized services for oil and gas sector including site preparation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'General Contracting',
            description: 'Complete project management and construction services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Building Construction',
            description: 'Residential and commercial building construction',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Infrastructure Development',
            description: 'Large-scale infrastructure projects including roads and water systems',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logos/docomo-logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}