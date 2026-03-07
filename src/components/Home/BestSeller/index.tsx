import React from "react";
import SingleItem from "./SingleItem";
import Link from "next/link";
import { getRandomProducts } from "@/lib/api";

const BestSeller = async () => {
  const topPicks = await getRandomProducts();

  return (
    <section className="overflow-hidden">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- section title --> */}
        <div className="mb-6 sm:mb-10 flex items-center justify-between">
          <div className="border-l-4 border-blue pl-4">
            <span className="block text-xs font-semibold text-blue uppercase tracking-widest mb-1">
              Browse Catalogue
            </span>
            <h2 className="font-bold text-2xl text-dark">
              Top Picks
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-7.5">
          {/* <!-- Best Sellers item --> */}
          {topPicks.map((item, key) => (
            <SingleItem item={item} key={key} />
          ))}
        </div>

        <div className="text-center mt-12.5">
          <Link
            href="/shop"
            className="inline-flex font-medium text-custom-sm py-3 px-7 sm:px-12.5 rounded-md border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
