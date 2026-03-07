import { getCategories } from "@/lib/api";
import CategoryCarousel from "./CategoryCarousel";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <section className="overflow-hidden pt-[260px] sm:pt-48 lg:pt-30 xl:pt-36 relative">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-5 border-b border-gray-3">
        <div className="swiper categories-carousel common-carousel">
          <CategoryCarousel categories={categories} />
        </div>
      </div>
    </section>
  );
};

export default Categories;
