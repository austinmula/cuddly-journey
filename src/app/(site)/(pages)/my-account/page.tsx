import MyAccount from "@/components/MyAccount";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Account | SharpSpaceLtd",
  description: "Manage your SharpSpaceLtd account, orders, and preferences.",
  robots: { index: false, follow: false },
};

const MyAccountPage = () => {
  return (
    <main>
      <MyAccount />
    </main>
  );
};

export default MyAccountPage;
