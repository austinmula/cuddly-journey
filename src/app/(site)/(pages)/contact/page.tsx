import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | SharpSpaceLtd - Get in Touch",
  description: "Contact SharpSpaceLtd for inquiries about computers, laptops, accessories, and expert laptop repairs in Kenya. We are here to help you power up your tech.",
  keywords: [
    "contact SharpSpaceLtd",
    "laptop repair Nairobi",
    "computer shop contact Kenya",
    "tech support Kenya",
    "SharpSpaceLtd contact",
  ],
  alternates: {
    canonical: "https://sharpspaceltd.com/contact",
  },
  openGraph: {
    title: "Contact Us | SharpSpaceLtd",
    description: "Get in touch with SharpSpaceLtd for computers, laptops, accessories, and expert laptop repairs in Kenya.",
    url: "https://sharpspaceltd.com/contact",
    siteName: "SharpSpaceLtd",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | SharpSpaceLtd",
    description: "Get in touch with SharpSpaceLtd for computers, laptops, accessories, and expert laptop repairs in Kenya.",
  },
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
