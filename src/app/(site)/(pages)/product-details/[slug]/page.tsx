import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import { getProductBySlug } from "@/lib/api";

export const metadata: Metadata = {
  title: "Shop Details Page | SharpSpaceLtd Power Up Your Tech",
  description: "This is Shop Details Page for SharpSpaceLtd Template",
  // other metadata
};

const ShopDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <ShopDetails productDetails={product}/>
    </div>
  );
};

export default ShopDetailsPage;
