import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";

import { Metadata } from "next";
import { getCategories, getProducts } from "@/lib/api";
import { Product } from "@/models/product";
import { Category } from "@/models/category";
export const metadata: Metadata = {
  title: "Shop Page | SharpSpaceLtd Power Up Your Tech",
  description: "TWe Offer Top-Quality Computers, Accessories & Expert Laptop Repairs!",
  // other metadata
};

const ShopWithSidebarPage = async () => {

  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;
