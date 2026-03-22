import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create Account | SharpSpaceLtd",
  description: "Create a SharpSpaceLtd account to track orders and save your wishlist.",
  robots: { index: false, follow: false },
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
