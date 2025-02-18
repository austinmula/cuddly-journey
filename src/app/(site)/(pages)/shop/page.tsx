import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";

import { Metadata } from "next";
import { getCategories, getProducts } from "@/lib/api";
import { Product } from "@/models/product";
import { Category } from "@/models/category";
export const metadata: Metadata = {
  title: "Shop Page | SharpSpaceLtd Nextjs E-commerce template",
  description: "This is Shop Page for SharpSpaceLtd Template",
  // other metadata
};

const ShopWithSidebarPage = async () => {
  const categories: Category[] = await getCategories();
  const products: Product[] = await getProducts();
  return (
    <main>
      <ShopWithSidebar products={products} categories={categories}/>
    </main>
  );
};

export default ShopWithSidebarPage;
