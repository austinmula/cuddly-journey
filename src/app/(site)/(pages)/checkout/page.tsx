import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checkout | SharpSpaceLtd",
  description: "Complete your purchase securely at SharpSpaceLtd.",
  robots: { index: false, follow: false },
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
