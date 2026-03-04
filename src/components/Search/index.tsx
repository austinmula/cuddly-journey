"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductItem from "@/components/Common/ProductItem";
import { searchProducts } from "@/lib/api";
import { Product } from "@/models/product";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(query);
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    searchProducts(query)
      .then(setResults)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`);
  };

  return (
    <section className="py-16">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-8 xl:px-0">

        {/* Search bar */}
        <form onSubmit={handleSubmit} className="mb-10">
          <div className="flex items-center max-w-[640px] mx-auto bg-white rounded-xl overflow-hidden border border-gray-200 focus-within:border-blue transition-colors duration-200">
            <input
              ref={inputRef}
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search products, brands, categories..."
              autoComplete="off"
              className="flex-1 px-5 py-3.5 text-dark outline-none bg-transparent text-sm"
            />
            <button
              type="submit"
              className="px-5 py-3.5 bg-blue text-white text-sm font-medium hover:bg-blue-dark transition-colors duration-200 shrink-0"
            >
              Search
            </button>
          </div>
        </form>

        {/* Heading */}
        {query && (
          <div className="border-l-4 border-blue pl-4 mb-8">
            <span className="block text-xs font-semibold text-blue uppercase tracking-widest mb-1">
              Search Results
            </span>
            <h1 className="font-bold text-2xl text-dark">
              {loading ? "Searching..." : `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`}
            </h1>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-[#F8F9FA] rounded-xl h-[300px] animate-pulse" />
            ))}
          </div>
        )}

        {/* Results grid */}
        {!loading && results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {results.map((item, key) => (
              <ProductItem item={item} key={key} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && query && results.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg width="64" height="64" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300 mb-4">
              <path d="M17.2687 15.6656L12.6281 11.8969C14.5406 9.28123 14.3437 5.5406 11.9531 3.1781C10.6875 1.91248 8.99995 1.20935 7.19995 1.20935C5.39995 1.20935 3.71245 1.91248 2.44683 3.1781C-0.168799 5.79373 -0.168799 10.0687 2.44683 12.6844C3.71245 13.95 5.39995 14.6531 7.19995 14.6531C8.91558 14.6531 10.5187 14.0062 11.7843 12.8531L16.4812 16.65C16.5937 16.7344 16.7343 16.7906 16.875 16.7906C17.0718 16.7906 17.2406 16.7062 17.3531 16.5656C17.5781 16.2844 17.55 15.8906 17.2687 15.6656ZM7.19995 13.3875C5.73745 13.3875 4.38745 12.825 3.34683 11.7844C1.20933 9.64685 1.20933 6.18748 3.34683 4.0781C4.38745 3.03748 5.73745 2.47498 7.19995 2.47498C8.66245 2.47498 10.0125 3.03748 11.0531 4.0781C13.1906 6.2156 13.1906 9.67498 11.0531 11.7844C10.0406 12.825 8.66245 13.3875 7.19995 13.3875Z" fill="currentColor" />
            </svg>
            <p className="font-semibold text-dark text-lg mb-2">No results found</p>
            <p className="text-dark/60 text-sm max-w-xs">
              We couldn&apos;t find anything for &quot;{query}&quot;. Try a different keyword or browse all products.
            </p>
            <a
              href="/shop"
              className="mt-6 inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-md border border-gray-3 bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
            >
              Browse All Products
            </a>
          </div>
        )}

        {/* Initial empty state (no query yet) */}
        {!query && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-dark/50 text-sm">Type something above to search across all products</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default SearchResults;
