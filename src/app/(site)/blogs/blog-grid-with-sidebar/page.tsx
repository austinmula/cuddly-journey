import React from "react";
import BlogGridWithSidebar from "@/components/BlogGridWithSidebar";

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
};

const BlogGridWithSidebarPage = () => {
  return (
    <>
      <BlogGridWithSidebar />
    </>
  );
};

export default BlogGridWithSidebarPage;
