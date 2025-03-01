import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import { getCategories, getRandomProducts, getRecentProducts } from "@/lib/api";
import { Category } from "@/models/category";
import { Product } from "@/models/product";

const Home = () => {
  // const categories: Category[] = await getCategories();
  // const recentProducts: Product[] = await getRecentProducts();
  // const topPicks: Product[] = await getRandomProducts();

  // console.log(topPicks)
  return (
    <main>
      <Categories />
      <Hero />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      {/* 
      <CounDown />
      <Testimonials /> */}
      {/* <Newsletter /> */}
    </main>
  );
};

export default Home;
