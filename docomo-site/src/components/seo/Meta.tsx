import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  ogType?: string;
  robots?: string;
}

export default function Meta({
  title,
  description = 'Reliable technology, built for African growth.',
  image = '/assets/og/og-default.png',
  canonical,
  ogType = 'website',
  robots = 'index, follow',
}: MetaProps) {
  const siteTitle = 'Docomo Technologies Ltd';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
}