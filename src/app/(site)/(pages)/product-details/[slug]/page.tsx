import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import { getProductBySlug } from "@/lib/api";

export const metadata: Metadata = {
  title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const ShopDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  console.log(product);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <ShopDetails productDetails={product}/>
    </div>
  );
};

export default ShopDetailsPage;
