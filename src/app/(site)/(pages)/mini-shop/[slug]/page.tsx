import React from "react";
import { Metadata } from "next";
import { getCategories, getCategoryBySlug, getProductsByCategory } from "@/lib/api";
import { notFound } from "next/navigation";
import CategoryShop from "@/components/CategoryShop";
import { urlFor } from "@/lib/urlFor";
import CategorySchema from "@/components/StructuredData/CategorySchema";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "Category Not Found | SharpSpaceLtd",
      description: "The requested category could not be found.",
    };
  }

  const products = await getProductsByCategory(category._id);
  const categoryImage = category.image
    ? urlFor(category.image).width(1200).height(630).url()
    : '/images/og-image.jpg';

  const categoryUrl = `https://sharpspaceltd.com/mini-shop/${params.slug}`;
  const productCount = products.length;

  const description = `Shop ${category.title} at SharpSpaceLtd. Browse ${productCount} high-quality ${category.title.toLowerCase()} products including computers, accessories, and more. Fast delivery in Kenya.`;

  return {
    title: `Buy ${category.title} in Kenya | SharpSpaceLtd - ${productCount} Products`,
    description,
    keywords: [
      category.title,
      `${category.title} Kenya`,
      `Buy ${category.title}`,
      `${category.title} Nairobi`,
      'SharpSpaceLtd',
      'Tech products Kenya',
      'Computer accessories',
    ],
    authors: [{ name: 'SharpSpaceLtd' }],
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
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      url: categoryUrl,
      siteName: 'SharpSpaceLtd',
      title: `Buy ${category.title} in Kenya | SharpSpaceLtd`,
      description,
      images: [
        {
          url: categoryImage,
          width: 1200,
          height: 630,
          alt: `${category.title} products at SharpSpaceLtd`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@SharpSpaceLtd',
      creator: '@SharpSpaceLtd',
      title: `Buy ${category.title} in Kenya | SharpSpaceLtd`,
      description,
      images: [categoryImage],
    },
    alternates: {
      canonical: categoryUrl,
    },
    other: {
      'product:count': productCount.toString(),
      'product:category': category.title,
    },
  };
}

const CategoryPage = async ({ params }: Props) => {
  const category = await getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category._id);

  return (
    <>
      <CategorySchema category={category} products={products} />
      <main>
        <CategoryShop category={category} products={products} />
      </main>
    </>
  );
};

export default CategoryPage;
