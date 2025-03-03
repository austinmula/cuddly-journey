import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 pt-12.5 bg-[#E5EAF4]">
      {/* <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 grid-rows-auto gap-2 md:gap-4 p-4">
          <div className="bg-gray-300 sm:col-span-1 md:col-span-3 md:row-span-2">
            <div className="relative w-full h-full rounded-[10px] overflow-hidden">
              <Image
                src="/images/herro/laptops.webp"
                alt="hero bg shapes"
                className="absolute inset-0 object-cover w-full h-full"
                width={534}
                height={720}
              />
              <div className="absolute inset-0 bg-[black]/50" />
              <HeroCarousel />
            </div>
          </div>
          <div className="bg-gray-400 sm:col-span-1 md:col-start-4 md:col-span-2">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url("/images/herro/phones.jpg")` }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-[black]/40 flex items-center justify-center text-white text-xl font-bold">
              Quality SmartPhones
            </div>
          </div>
          <div className="bg-gray-500 sm:col-span-1 md:col-start-4 md:col-span-2 md:row-start-2">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{
                  backgroundImage: `url("/images/herro/printers.webp")`,
                }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-[black]/40 flex items-center justify-center text-white text-xl font-bold">
              Printers, Scanners & UPS
            </div>
          </div>
          <div className="bg-gray-600 sm:col-span-1 md:col-start-6 md:col-span-2">4</div>
          <div className="bg-gray-700 sm:col-span-1 md:col-start-6 md:col-span-2 md:row-start-2">5</div>
        </div>
      </div> */}



      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 grid-rows-2 gap-2 md:gap-4 max-md:p-4">

          {/* Laptops Hero Section (Spans 3 columns, full height) */}
          <div className="bg-[#467ebd] md:col-span-3 md:row-span-2 shadow-3 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="relative w-full h-full rounded-[10px] overflow-hidden">
              <Image
                src="/images/herro/laptops.webp"
                alt="hero bg shapes"
                className="absolute inset-0 object-cover w-full h-full"
                width={934}
                height={720}
              />
              <div className="absolute inset-0 bg-[black]/50" />
              <HeroCarousel />
            </div>
          </div>

          {/* SmartPhones Section (Spans 2 columns, row 1) */}
          <div className="md:col-start-4 md:col-span-2 shadow-3 relative z-1 overflow-hidden rounded-lg min-h-[250px] md:min-h-[210px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
              style={{ backgroundImage: `url("/images/herro/phones.jpg")` }}
            ></div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            </div>
            <div className="absolute pointer-events-none inset-0 bg-[black]/40 flex items-center justify-center text-white text-xl font-bold">
              Quality SmartPhones
            </div>
          </div>

          {/* Printers Section (Spans 2 columns, row 2) */}
          <div className="md:col-start-4 relative z-1 md:col-span-2 md:row-start-2 shadow-3 relative overflow-hidden rounded-lg min-h-[250px] md:min-h-[210px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-300 hover:scale-110"
              style={{ backgroundImage: `url("/images/herro/printers.webp")` }}
            ></div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            </div>
            <div className="absolute inset-0 pointer-events-none bg-[black]/40 flex items-center justify-center text-white text-xl font-bold">
              Printers & Scanners
            </div>
          </div>

          {/* Extra Sections to Fit 7-Column Layout */}
          <div className="md:col-start-6 md:col-span-2 shadow-3 relative z-1 overflow-hidden rounded-lg min-h-[250px] md:min-h-[210px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
              style={{ backgroundImage: `url('/images/herro/desktops.webp')` }}
            ></div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            </div>
            <div className="absolute inset-0 bg-[black]/40 flex items-center justify-center text-white text-xl font-bold pointer-events-none">
              Desktops & Monitors
            </div>
          </div>

          <div className="group md:col-start-6 md:col-span-2 md:row-start-2 shadow-3 relative z-1 overflow-hidden rounded-lg min-h-[250px] md:min-h-[210px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url('/images/herro/ups.webp')` }}
            ></div>
            {/* <div className="absolute inset-0 overflow-hidden">
            </div> */}
            <div className="absolute inset-0 bg-[black]/40 flex items-center justify-center text-white text-xl font-bold pointer-events-none">
              UPS & PowerBackups
            </div>
          </div>

        </div>
      </div>


      {/* <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-auto gap-2 max-md:p-4 md:gap-4">
        
          <div className="bg-[#467ebd] md:col-span-3 shadow-3 rounded-lg md:row-span-2 flex items-center justify-center relative overflow-hidden">
            <div className="relative w-full h-full rounded-[10px] overflow-hidden">
              <Image
                src="/images/herro/laptops.webp"
                alt="hero bg shapes"
                className="absolute inset-0 object-cover w-full h-full"
                width={934}
                height={720}
              />
              <div className="absolute inset-0 bg-[black]/50" />
              <HeroCarousel />
            </div>
          </div>

          <div className="md:col-span-2 shadow-3 relative overflow-hidden rounded-lg min-h-[250px] md:min-h-[210px]">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url("/images/herro/phones.jpg")` }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-[black]/40 flex items-center justify-center text-white text-xl font-bold">
              Quality SmartPhones
            </div>
          </div>

          <div className="md:col-span-2 shadow-3 relative overflow-hidden rounded-lg min-h-[250px] md:min-h-[210px]">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{
                  backgroundImage: `url("/images/herro/printers.webp")`,
                }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-[black]/40 flex items-center justify-center text-white text-xl font-bold">
              Printers, Scanners & UPS
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
