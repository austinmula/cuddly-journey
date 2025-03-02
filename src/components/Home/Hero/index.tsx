import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 pt-12.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-auto gap-2 max-md:p-4 md:gap-4">
          {/* Laptops Hero Section */}
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

          {/* SmartPhones Section */}
          <div className="md:col-span-2 shadow-3 relative overflow-hidden rounded-lg min-h-[250px] md:min-h-[200px]">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url("/images/herro/phones.jpg")` }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-[black]/40 flex items-center justify-center text-white text-xl font-bold">
              Quality SmartPhones
            </div>
          </div>

          {/* Printers Section */}
          <div className="md:col-span-2 shadow-3 relative overflow-hidden rounded-lg min-h-[250px] md:min-h-[200px]">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
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

        <div className="flex flex-wrap gap-5">
          {/* <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div> */}

          {/* <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> Maintenance</a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        limited time offer
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          $699
                        </span>
                        <span className="font-medium text-2xl text-dark-4 line-through">
                          $999
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/hero-02.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> Wireless Headphone </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        limited time offer
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          $699
                        </span>
                        <span className="font-medium text-2xl text-dark-4 line-through">
                          $999
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/hero-01.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
