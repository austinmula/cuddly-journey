"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import { Product } from "@/models/product";
import { getRecentProducts } from "@/lib/api";

const NewArrival = () => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([])

  useEffect(()=> {
    getRecentProductData();
  }, [])

  const getRecentProductData = async() => {
    try {
      const data = await getRecentProducts()
      setRecentProducts(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <section className="overflow-hidden pt-10">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- section title --> */}
        <div className="mb-3 flex items-center justify-between">
          <div className="border-l-4 border-blue pl-4">
            <span className="block text-xs font-semibold text-blue uppercase tracking-widest mb-1">
              Just In
            </span>
            <h2 className="font-bold text-2xl text-dark">
              Latest Products
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-md border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-3 sm:gap-x-7.5 gap-y-5 sm:gap-y-9">
          {/* <!-- New Arrivals item --> */}
          {recentProducts.map((item, key) => (
            <ProductItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
