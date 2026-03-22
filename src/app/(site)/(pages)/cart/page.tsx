import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Your Cart | SharpSpaceLtd",
  description: "Review your selected items and proceed to checkout.",
  robots: { index: false, follow: false },
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
