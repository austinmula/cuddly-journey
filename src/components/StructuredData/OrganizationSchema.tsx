import React from 'react';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SharpSpaceLtd',
    url: 'https://sharpspaceltd.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sharpspaceltd.com/images/logo/logo.svg',
    },
    description: 'At SharpSpaceLtd We Offer Top-Quality Computers, Accessories & Expert Laptop Repairs! Power up your tech with premium electronics and professional services.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-732-652000',
      contactType: 'Customer Service',
      email: 'info@sharpspaceltd.com',
      areaServed: 'KE',
      availableLanguage: ['English', 'Swahili'],
    },
    sameAs: [
      'https://www.facebook.com/SharpSpaceLtd',
      'https://twitter.com/SharpSpaceLtd',
      'https://www.instagram.com/SharpSpaceLtd',
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sharpspaceltd.com/shop?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
