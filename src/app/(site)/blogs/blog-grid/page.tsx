import React from "react";
import BlogGrid from "@/components/BlogGrid";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tech Blog | SharpSpaceLtd - Tips, Reviews & News",
  description: "Read the latest tech tips, product reviews, and news from SharpSpaceLtd. Stay up to date with computers, laptops, accessories and more in Kenya.",
  keywords: [
    "tech blog Kenya",
    "computer tips Kenya",
    "laptop reviews",
    "SharpSpaceLtd blog",
    "tech news Kenya",
  ],
  alternates: {
    canonical: "https://sharpspaceltd.com/blogs/blog-grid",
  },
  openGraph: {
    title: "Tech Blog | SharpSpaceLtd - Tips, Reviews & News",
    description: "Read the latest tech tips, product reviews, and news from SharpSpaceLtd.",
    url: "https://sharpspaceltd.com/blogs/blog-grid",
    siteName: "SharpSpaceLtd",
    type: "website",
    locale: "en_KE",
  },
};

const BlogGridPage = () => {
  return (
    <main>
      <BlogGrid />
    </main>
  );
};

export default BlogGridPage;
