import React, { Suspense } from "react";
import { Metadata } from "next";
import SearchResults from "@/components/Search";

export const metadata: Metadata = {
  title: "Search | SharpSpace LTD",
  description: "Search across all products at SharpSpace LTD",
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
