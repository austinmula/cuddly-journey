import { Category } from "@/models/category";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <a href={`/shop?category=${item._id}`} className="group flex flex-col items-center">
      <div className="max-w-[90px] w-full bg-[#F2F3F8] h-20 rounded-full flex items-center justify-center mb-4">
        <Image src={urlFor(item.image).toString()} alt={item.title} width={62} height={62} />
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
          {item.title}
        </h3>
      </div>
    </a>
  );
};

export default SingleItem;
