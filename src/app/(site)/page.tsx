import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SharpSpaceLtd | Nextjs E-commerce template",
  description: "This is Home for SharpSpaceLtd Template",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
