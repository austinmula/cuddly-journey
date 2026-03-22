import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign In | SharpSpaceLtd",
  description: "Sign in to your SharpSpaceLtd account.",
  robots: { index: false, follow: false },
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
