'use client';

import { useEffect } from 'react';

interface JsonLdProps {
  schema: Record<string, any>;
}

export default function JsonLd({ schema }: JsonLdProps) {
  const json = JSON.stringify(schema);

  // Only render on the client side to avoid hydration issues
  useEffect(() => {
    // This component only renders JSON-LD script tags
  }, [schema]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}