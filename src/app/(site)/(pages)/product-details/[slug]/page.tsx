import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import { getProductBySlug, getProducts } from "@/lib/api";
import { urlFor } from "@/lib/urlFor";
import ProductSchema from "@/components/StructuredData/ProductSchema";
import BreadcrumbSchema from "@/components/StructuredData/BreadcrumbSchema";

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for could not be found.',
    };
  }

  const productTitle = product.title;

  // Convert Portable Text to plain string for meta description, or use fallback
  const getTextFromPortableText = (portableText: any[]): string => {
    if (!Array.isArray(portableText)) return '';
    return portableText
      .filter((block) => block._type === 'block')
      .map((block) => block.children?.map((child: any) => child.text).join('') || '')
      .join(' ')
      .slice(0, 160); // Limit to 160 characters for meta description
  };

  const productDescription =
    (product.summary && getTextFromPortableText(product.summary)) ||
    (product.description && getTextFromPortableText(product.description)) ||
    `Buy ${product.title} at SharpSpaceLtd. ${product.brand ? `Brand: ${product.brand}.` : ''} High-quality tech products and accessories.`;

  const productImage = product.images?.[0] ? urlFor(product.images[0]).width(1200).height(630).url() : '/images/og-image.jpg';
  const productPrice = product.discountedPrice || product.price;
  const inStock = product.stock > 0;

  return {
    title: productTitle,
    description: productDescription,
    keywords: [
      product.title,
      product.brand || 'electronics',
      product.category?.title || 'tech',
      'computer accessories',
      'tech store',
      'buy online',
    ],
    openGraph: {
      title: productTitle,
      description: productDescription,
      type: 'website',
      url: `https://sharpspaceltd.com/product-details/${slug}`,
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: productTitle,
        },
      ],
      siteName: 'SharpSpaceLtd',
    },
    twitter: {
      card: 'summary_large_image',
      title: productTitle,
      description: productDescription,
      images: [productImage],
    },
    alternates: {
      canonical: `https://sharpspaceltd.com/product-details/${slug}`,
    },
    other: {
      'product:price:amount': productPrice.toString(),
      'product:price:currency': 'USD',
      'product:availability': inStock ? 'in stock' : 'out of stock',
      'product:condition': 'new',
    },
  };
}

const ShopDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) return <p>Product not found</p>;

  // Breadcrumb items for structured data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://sharpspaceltd.com' },
    { name: 'Shop', url: 'https://sharpspaceltd.com/shop' },
    { name: product.category?.title || 'Products', url: `https://sharpspaceltd.com/shop?category=${product.category?._id || ''}` },
    { name: product.title, url: `https://sharpspaceltd.com/product-details/${slug}` },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <div>
        <ShopDetails productDetails={product}/>
      </div>
    </>
  );
};

export default ShopDetailsPage;
