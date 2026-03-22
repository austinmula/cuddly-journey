import React, { Suspense } from "react";
import { Metadata } from "next";
import SearchResults from "@/components/Search";

export const metadata: Metadata = {
  title: "Search | SharpSpaceLtd",
  description: "Search across all products at SharpSpaceLtd — computers, laptops, accessories, and more in Kenya.",
  robots: { index: false, follow: false },
};

const SearchPage = () => {
  return (
    <main>
      <Suspense>
        <SearchResults />
      </Suspense>
    </main>
  );
};

export default SearchPage;
