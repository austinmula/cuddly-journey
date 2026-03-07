import React from "react";
import BlogDetailsWithSidebar from "@/components/BlogDetailsWithSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tech Articles | SharpSpaceLtd - In-Depth Tech Guides",
  description: "Explore in-depth tech articles and guides from SharpSpaceLtd. Find expert advice on computers, laptops, repairs and accessories in Kenya.",
  alternates: {
    canonical: "https://sharpspaceltd.com/blogs/blog-details",
  },
};

const BlogDetailsWithSidebarPage = () => {
  return (
    <main>
      <BlogDetailsWithSidebar />
    </main>
  );
};

export default BlogDetailsWithSidebarPage;
