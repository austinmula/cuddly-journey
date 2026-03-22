import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Browse Products by Category | SharpSpaceLtd Power Up Your Tech",
  description: "Explore our product categories at SharpSpaceLtd. Find computers, laptops, accessories, and more. Quality tech products with fast delivery in Kenya.",
  keywords: [
    'SharpSpaceLtd',
    'Tech products Kenya',
    'Shop categories',
    'Computer accessories',
    'Electronics Kenya',
    'Buy computers Nairobi',
  ],
  openGraph: {
    title: "Browse Products by Category | SharpSpaceLtd",
    description: "Explore our product categories at SharpSpaceLtd. Find computers, laptops, accessories, and more.",
    url: "https://sharpspaceltd.com/mini-shop",
    siteName: "SharpSpaceLtd",
    type: "website",
    locale: "en_KE",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "SharpSpaceLtd - Power Up Your Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse Products by Category | SharpSpaceLtd",
    description: "Explore our product categories at SharpSpaceLtd. Find computers, laptops, accessories, and more.",
  },
  alternates: {
    canonical: "https://sharpspaceltd.com/mini-shop",
  },
};

const ShopWithoutSidebarPage = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default ShopWithoutSidebarPage;
