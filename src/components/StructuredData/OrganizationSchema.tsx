import React from 'react';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SharpSpaceLtd',
    url: 'https://sharpspaceltd.com',
    logo: 'https://sharpspaceltd.com/images/logo/logo.svg',
    description: 'At SharpSpaceLtd We Offer Top-Quality Computers, Accessories & Expert Laptop Repairs! Power up your tech with premium electronics and professional services.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@sharpspaceltd.com',
    },
    sameAs: [
      // Add your social media profiles here
      // 'https://www.facebook.com/sharpspaceltd',
      // 'https://twitter.com/sharpspaceltd',
      // 'https://www.instagram.com/sharpspaceltd',
      // 'https://www.linkedin.com/company/sharpspaceltd',
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sharpspaceltd.com/shop?search={search_term_string}',
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
