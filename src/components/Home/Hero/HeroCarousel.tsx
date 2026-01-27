"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

const slides = [
  {
    tag: "New Arrivals",
    title: "Brand New Laptops",
    description:
      "Explore a curated selection of the latest laptops from top brands. Consult with our knowledgeable staff to find the perfect laptop that suits your needs.",
    cta: "Shop Now",
    href: "/shop",
  },
  {
    tag: "Expert Services",
    title: "Device Maintenance & Repairs",
    description:
      "Expert diagnosis and repair services for laptops of all brands. Quick turnaround times to minimize downtime and disruption.",
    cta: "Create Inquiry",
    href: "/contact",
  },
  {
    tag: "Stay Protected",
    title: "Virus and Malware Protection",
    description:
      "Thorough scans and removal of viruses, malware, and other security threats. Implementation of security measures to prevent future infections.",
    cta: "Create Inquiry",
    href: "/contact",
  },
];

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative z-2 flex flex-col justify-end min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] p-6 sm:p-8 lg:p-12">
            <span className="inline-block w-fit text-xs font-semibold uppercase tracking-widest text-white/90 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              {slide.tag}
            </span>

            <h1 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-3 drop-shadow-md">
              {slide.title}
            </h1>

            <p className="text-white text-sm sm:text-base max-w-[460px] leading-relaxed mb-8">
              {slide.description}
            </p>

            <div>
              <a
                href={slide.href}
                className="inline-flex font-medium text-blue text-sm rounded-full bg-white px-8 py-3 transition-all duration-200 hover:bg-blue/80 hover:text-white hover:shadow-lg"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;
