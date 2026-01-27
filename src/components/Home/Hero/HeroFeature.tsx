import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Shipping Available",
    description: "Anywhere in Kenya",
  },
  // {
  //   img: "/images/icons/icon-02.svg",
  //   title: "1 & 1 Returns",
  //   description: "Cancellation after 1 day",
  // },
  // {
  //   img: "/images/icons/icon-03.svg",
  //   title: "100% Secure Payments",
  //   description: "Gurantee secure payments",
  // },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Dedicated Support",
    description: "Anywhere & anytime",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center justify-center gap-5 xl:gap-8 mt-10">
        {featureData.map((item, key) => (
          <div
            className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            key={key}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 shrink-0">
              <Image src={item.img} alt="icons" width={28} height={28} />
            </div>

            <div>
              <h3 className="font-semibold text-base text-dark">
                {item.title}
              </h3>
              <p className="text-sm text-dark-3/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
