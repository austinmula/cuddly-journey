import React from 'react';
import { Product } from '@/models/product';
import { urlFor } from '@/lib/urlFor';

interface ProductSchemaProps {
  product: Product;
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  // Convert Portable Text to plain string for schema description
  const getTextFromPortableText = (portableText: any[]): string => {
    if (!Array.isArray(portableText)) return '';
    return portableText
      .filter((block) => block._type === 'block')
      .map((block) => block.children?.map((child: any) => child.text).join('') || '')
      .join(' ')
      .slice(0, 250);
  };

  const productDescription =
    (product.summary && getTextFromPortableText(product.summary)) ||
    (product.description && getTextFromPortableText(product.description)) ||
    product.title;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: productDescription,
    image: product.images?.[0] ? urlFor(product.images[0]).url() : undefined,
    brand: product.brand
      ? {
          '@type': 'Brand',
          name: product.brand,
        }
      : undefined,
    offers: {
      '@type': 'Offer',
      url: `https://sharpspaceltd.com/product-details/${product.slug.current}`,
      priceCurrency: 'USD',
      price: product.discountedPrice || product.price,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        .toISOString()
        .split('T')[0],
      availability:
        product.stock > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'SharpSpaceLtd',
      },
    },
    aggregateRating: product.reviews?.length
      ? {
          '@type': 'AggregateRating',
          ratingValue:
            product.reviews.reduce((sum, review) => sum + review.rating, 0) /
            product.reviews.length,
          reviewCount: product.reviews.length,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    review: product.reviews?.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author || review.user || 'Anonymous',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.comment,
      datePublished: review.date || new Date().toISOString(),
    })),
    category: product.category?.title,
    sku: product._id,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}
