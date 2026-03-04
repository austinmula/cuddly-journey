import { Category } from "@/models/category";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <a href={`/mini-shop/${item.slug.current}`} className="group flex flex-col items-center gap-3">
      <div className="w-[88px] h-[88px] rounded-full bg-[#F2F3F8] flex items-center justify-center group-hover:bg-blue/5 transition-all duration-300">
        <Image
          src={urlFor(item.image).toString()}
          alt={item.title}
          width={54}
          height={54}
          className="mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-sm font-medium text-dark/70 group-hover:text-blue transition-colors duration-200 text-center leading-tight">
        {item.title}
      </span>
    </a>
  );
};

export default SingleItem;
