import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist | SharpSpaceLtd",
  description: "View and manage your saved products on SharpSpaceLtd.",
  robots: { index: false, follow: false },
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
