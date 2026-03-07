import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SharpSpaceLtd | Power Up Your Tech",
  description: "At SharpSpaceLtd We Offer Top-Quality Computers, Accessories & Expert Laptop Repairs! Power up your tech with premium electronics and professional services in Kenya.",
  keywords: [
    "computers Kenya",
    "laptops Nairobi",
    "computer accessories",
    "laptop repair Nairobi",
    "tech store Kenya",
    "buy electronics Kenya",
    "SharpSpaceLtd",
  ],
  alternates: {
    canonical: "https://sharpspaceltd.com",
  },
  openGraph: {
    title: "SharpSpaceLtd | Power Up Your Tech",
    description: "Top-Quality Computers, Accessories & Expert Laptop Repairs in Kenya.",
    url: "https://sharpspaceltd.com",
    siteName: "SharpSpaceLtd",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SharpSpaceLtd - Power Up Your Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SharpSpaceLtd | Power Up Your Tech",
    description: "Top-Quality Computers, Accessories & Expert Laptop Repairs in Kenya.",
    images: ["/images/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
