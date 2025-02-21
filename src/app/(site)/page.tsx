import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SharpSpaceLtd | Power Up Your Tech",
  description: "At SharpSpaceLtd We Offer Top-Quality Computers, Accessories & Expert Laptop Repairs!",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
