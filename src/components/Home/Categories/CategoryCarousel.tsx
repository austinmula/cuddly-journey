"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import SingleItem from "./SingleItem";
import { Category } from "@/models/category";

const CategoryCarousel = ({ categories }: { categories: Category[] }) => {
  return (
    <Swiper
      slidesPerView={6}
      breakpoints={{
        0: { slidesPerView: 2 },
        1000: { slidesPerView: 5 },
        1200: { slidesPerView: 9 },
      }}
    >
      {categories.map((item, key) => (
        <SwiperSlide key={key}>
          <SingleItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoryCarousel;
