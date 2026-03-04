import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import RamadanSale from "./RamadanSale";

const Home = () => {
  return (
    <main>
      <Categories />
      <Hero />
      <NewArrival />
      <RamadanSale />
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
