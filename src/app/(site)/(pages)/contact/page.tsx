import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Page | SharpSpaceLtd Power Up Your Tech",
  description: "Reach out to SharpSpaceLtd for Top-Quality Computers, Accessories & Expert Laptop Repairs!",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
