import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 pt-12.5 bg-gradient-to-br from-[#E5EAF4] via-[#DDE4F2] to-[#D4DCEE]">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 grid-rows-2 gap-2 md:gap-4 max-md:p-4">
          {/* Laptops Hero Section (Spans 3 columns, full height) */}
          <div className="bg-[#467ebd] md:col-span-3 md:row-span-2 shadow-3 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="relative w-full h-full rounded-[10px] overflow-hidden">
              <Image
                src="/images/herro/laptops-3.jpg"
                alt="hero bg shapes"
                className="absolute inset-0 object-cover object-left w-full h-full"
                width={934}
                height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,0,0,0.7)] via-[rgba(10,22,40,0.55)] to-[rgba(26,39,68,0.45)]" />
              <HeroCarousel />
            </div>
          </div>

          {/* Quality Laptops */}
          <a
            href="/shop?category=0584954b-a331-4c4f-b100-003c94ead1a3"
            className="group md:col-start-4 md:col-span-2 shadow-3 relative z-1 overflow-hidden rounded-lg min-h-[250px] md:min-h-[190px]"
          >
            <Image
              src="/images/herro/laptops-1.webp"
              alt="Quality Laptops"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-[#000]/30 to-transparent flex items-end justify-center pb-6 pointer-events-none">
              <span className="text-white text-xl font-bold drop-shadow-lg">
                Quality Laptops
              </span>
            </div>
          </a>

          {/* Printers & Scanners */}
          <a
            href="/shop?category=b3024c53-3201-490a-b867-9126f5cf6441"
            className="group md:col-start-4 md:col-span-2 md:row-start-2 shadow-3 relative z-1 overflow-hidden rounded-lg min-h-[250px] md:min-h-[190px]"
          >
            <Image
              src="/images/herro/printers.webp"
              alt="Printers & Scanners"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-[#000]/30 to-transparent flex items-end justify-center pb-6 pointer-events-none">
              <span className="text-white text-xl font-bold drop-shadow-lg">
                Printers & Scanners
              </span>
            </div>
          </a>

          {/* Desktops & Monitors */}
          <a
            href="/shop?category=29ad7d75-9d76-403f-89a5-e1d944b9a12d"
            className="group md:col-start-6 md:col-span-2 shadow-3 relative z-1 overflow-hidden rounded-lg min-h-[250px] md:min-h-[190px]"
          >
            <Image
              src="/images/herro/desktops.webp"
              alt="Desktops & Monitors"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-[#000]/30 to-transparent flex items-end justify-center pb-6 pointer-events-none">
              <span className="text-white text-xl font-bold drop-shadow-lg">
                Desktops & Monitors
              </span>
            </div>
          </a>

          {/* UPS & PowerBackups */}
          <a
            href="/shop?category=9f7c88df-3585-47e0-a168-955029289c11"
            className="group md:col-start-6 md:col-span-2 md:row-start-2 shadow-3 relative z-1 overflow-hidden rounded-lg min-h-[250px] md:min-h-[190px]"
          >
            <Image
              src="/images/herro/ups.webp"
              alt="UPS & PowerBackups"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-[#000]/30 to-transparent flex items-end justify-center pb-6 pointer-events-none">
              <span className="text-white text-xl font-bold drop-shadow-lg">
                UPS & PowerBackups
              </span>
            </div>
          </a>
        </div>
      </div>

      <HeroFeature />
    </section>
  );
};

export default Hero;
