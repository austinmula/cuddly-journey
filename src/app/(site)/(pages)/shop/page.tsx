import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";

import { Metadata } from "next";
import { getCategories, getProducts } from "@/lib/api";
import { Product } from "@/models/product";
import { Category } from "@/models/category";
export const metadata: Metadata = {
  title: "Shop | SharpSpaceLtd - Computers, Laptops & Accessories in Kenya",
  description: "Browse our full range of computers, laptops, accessories and tech products at SharpSpaceLtd. Quality electronics with fast delivery in Kenya.",
  keywords: [
    "shop computers Kenya",
    "buy laptops Nairobi",
    "computer accessories Kenya",
    "electronics store Kenya",
    "SharpSpaceLtd shop",
  ],
  alternates: {
    canonical: "https://sharpspaceltd.com/shop",
  },
  openGraph: {
    title: "Shop | SharpSpaceLtd - Computers, Laptops & Accessories in Kenya",
    description: "Browse our full range of computers, laptops, accessories and tech products at SharpSpaceLtd.",
    url: "https://sharpspaceltd.com/shop",
    siteName: "SharpSpaceLtd",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SharpSpaceLtd Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | SharpSpaceLtd - Computers, Laptops & Accessories in Kenya",
    description: "Browse our full range of computers, laptops, accessories and tech products at SharpSpaceLtd.",
    images: ["/images/og-image.jpg"],
  },
};

const ShopWithSidebarPage = async () => {

  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;
