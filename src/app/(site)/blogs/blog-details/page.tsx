import BlogDetails from "@/components/BlogDetails";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tech Articles | SharpSpaceLtd - In-Depth Tech Guides",
  description: "Explore in-depth tech articles and guides from SharpSpaceLtd. Find expert advice on computers, laptops, repairs and accessories in Kenya.",
  alternates: {
    canonical: "https://sharpspaceltd.com/blogs/blog-details",
  },
};

const BlogDetailsPage = () => {
  return (
    <main>
      <BlogDetails />
    </main>
  );
};

export default BlogDetailsPage;
