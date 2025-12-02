import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  ogType?: string;
  robots?: string;
  keywords?: string;
}

export default function Meta({
  title,
  description = 'DOCOMO Technologies Limited - Leading civil engineering, electrical engineering, oil field services, and general contracting company in Nigeria. Expert construction services in Owerri, Imo State.',
  image = '/assets/og/og-default.png',
  canonical,
  ogType = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  keywords = 'civil engineering Nigeria, electrical engineering Owerri, oil field services Niger Delta, construction company Imo State, road construction Nigeria, building contractor Owerri, infrastructure development Nigeria, general contractor Imo State, engineering services Nigeria, DOCOMO Technologies',
}: MetaProps) {
  const siteTitle = 'DOCOMO Technologies Limited';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = 'https://docomotechnologieslimited.com.ng';
  const fullCanonical = canonical || siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content="DOCOMO Technologies Limited" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="NG-IM" />
      <meta name="geo.placename" content="Owerri" />
      <meta name="geo.position" content="5.4840;7.0351" />
      <meta name="ICBM" content="5.4840, 7.0351" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="No 6th Avenue 62nd Road House 1, Federal Housing Estate Egbeda" />
      <meta name="business:contact_data:locality" content="Owerri" />
      <meta name="business:contact_data:region" content="Imo State" />
      <meta name="business:contact_data:postal_code" content="" />
      <meta name="business:contact_data:country_name" content="Nigeria" />
      <meta name="business:contact_data:email" content="service@docomotechnologieslimited.com.ng" />
      <meta name="business:contact_data:phone_number" content="" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="DOCOMO Technologies Limited" />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@DocomoTech" />
      <meta name="twitter:creator" content="@DocomoTech" />
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Additional Links */}
      <link rel="alternate" hrefLang="en" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
    </Head>
  );
}