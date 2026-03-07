import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-10 sm:py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          {/* Subtle dot grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #273057 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Soft color accent orb */}
          <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full bg-[#5475E5]/8 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-[550px] w-full">
            <span className="inline-flex items-center gap-2 font-medium text-sm text-dark/60 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue inline-block shrink-0" />
              SharpSpace LTD
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              Power Up Your Tech
            </h2>

            <p className="text-dark/60 leading-relaxed">
              We Offer Top-Quality Computers, Accessories &amp; Expert Laptop Repairs!
            </p>

            <a
              href="/shop"
              className="inline-flex items-center gap-2 font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Shop Now
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <Image
            src="/images/promo/promo-01.png"
            alt="promo img"
            className="hidden sm:block absolute bottom-0 right-4 lg:right-26 -z-1"
            width={274}
            height={350}
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
