"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/models/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import { useWishlistModalContext } from "@/app/context/WishlistSidebarModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { urlFor } from "@/lib/urlFor";
import { calculateDiscountPercentage } from "@/lib/discount";

const ProductItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const { openCartModal } = useCartModalContext();
  const { openWishlistModal } = useWishlistModalContext();
  const phoneNumber = "254732652000";
  const dispatch = useDispatch<AppDispatch>();

  const handleQuickViewUpdate = () => dispatch(updateQuickView({ ...item }));

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...item, quantity: 1 }));
    openCartModal();
  };

  const handleItemToWishList = () => {
    dispatch(addItemToWishlist({ ...item, status: "available", quantity: 1 }));
    openWishlistModal();
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello, I'm interested in buying ${item.title} of ${item.price} on url https://sharpspaceltd.com/product-details/${item.slug.current}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleProductDetails = () => dispatch(updateproductDetails({ ...item }));

  return (
    <div className="group relative flex flex-col bg-[#F8F9FA] rounded-xl overflow-hidden transition-all duration-300 w-full sm:max-w-[280px] sm:mx-auto">

      {/* ── Image area ─────────────────────────────────── */}
      <div className="relative bg-[#F6F7FB] overflow-hidden">

        {/* Sale badge */}
        <span className="absolute top-3 left-3 z-10 inline-flex items-center text-[11px] font-bold text-white bg-blue rounded-lg px-2 py-[3px] tracking-wide leading-none">
          -{calculateDiscountPercentage(item.price, item.discountedPrice)}%
        </span>

        {/* Wishlist — always visible */}
        <button
          onClick={handleItemToWishList}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-gray-300 hover:text-red-400 hover:shadow-md transition-all duration-200"
        >
          <svg className="fill-current" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.74949 2.94946C2.6435 3.45502 1.83325 4.65749 1.83325 6.0914C1.83325 7.55633 2.43273 8.68549 3.29211 9.65318C4.0004 10.4507 4.85781 11.1118 5.694 11.7564C5.89261 11.9095 6.09002 12.0617 6.28395 12.2146C6.63464 12.491 6.94747 12.7337 7.24899 12.9099C7.55068 13.0862 7.79352 13.1667 7.99992 13.1667C8.20632 13.1667 8.44916 13.0862 8.75085 12.9099C9.05237 12.7337 9.3652 12.491 9.71589 12.2146C9.90982 12.0617 10.1072 11.9095 10.3058 11.7564C11.142 11.1118 11.9994 10.4507 12.7077 9.65318C13.5671 8.68549 14.1666 7.55633 14.1666 6.0914C14.1666 4.65749 13.3563 3.45502 12.2503 2.94946C11.1759 2.45832 9.73214 2.58839 8.36016 4.01382C8.2659 4.11175 8.13584 4.16709 7.99992 4.16709C7.864 4.16709 7.73393 4.11175 7.63967 4.01382C6.26769 2.58839 4.82396 2.45832 3.74949 2.94946ZM7.99992 2.97255C6.45855 1.5935 4.73256 1.40058 3.33376 2.03998C1.85639 2.71528 0.833252 4.28336 0.833252 6.0914C0.833252 7.86842 1.57358 9.22404 2.5444 10.3172C3.32183 11.1926 4.2734 11.9253 5.1138 12.5724C5.30431 12.7191 5.48911 12.8614 5.66486 12.9999C6.00636 13.2691 6.37295 13.5562 6.74447 13.7733C7.11582 13.9903 7.53965 14.1667 7.99992 14.1667C8.46018 14.1667 8.88401 13.9903 9.25537 13.7733C9.62689 13.5562 9.99348 13.2691 10.335 12.9999C10.5107 12.8614 10.6955 12.7191 10.886 12.5724C11.7264 11.9253 12.678 11.1926 13.4554 10.3172C14.4263 9.22404 15.1666 7.86842 15.1666 6.0914C15.1666 4.28336 14.1434 2.71528 12.6661 2.03998C11.2673 1.40058 9.54129 1.5935 7.99992 2.97255Z" fill="" />
          </svg>
        </button>

        {/* Product image */}
        <a href={`/product-details/${item.slug.current}`} className="block" onClick={handleProductDetails}>
          <div className="flex items-center justify-center h-[160px] sm:h-[210px] p-3 sm:p-4">
            <Image
              src={
                item.images && item.images[0]
                  ? urlFor(item.images[0]).toString()
                  : "/images/quickview/quickview-big-05.png"
              }
              alt={item.title}
              width={200}
              height={200}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
              className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
            />
          </div>
        </a>

        {/* Action bar — always visible on mobile, slides up on hover for desktop */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="flex gap-2 p-3 bg-white/95 backdrop-blur-xs">
            <button
              onClick={handleAddToCart}
              className="flex flex-1 items-center justify-center gap-1.5 text-xs font-semibold py-2.5 bg-blue text-white rounded-md hover:bg-blue-dark transition-colors duration-200"
            >
              <svg className="fill-current shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.4915 1.52567C1.22953 1.43835 0.94637 1.57993 0.859046 1.8419C0.771722 2.10387 0.913302 2.38703 1.17527 2.47436L1.35188 2.53322C1.80282 2.68354 2.10095 2.78371 2.32058 2.88589C2.52856 2.98264 2.61848 3.0605 2.67609 3.14043C2.7337 3.22037 2.77914 3.33029 2.80516 3.55819C2.83263 3.79886 2.83339 4.11337 2.83339 4.5887L2.83339 6.36993C2.83337 7.28166 2.83336 8.01654 2.91107 8.59451C2.99175 9.19459 3.16434 9.69984 3.56562 10.1011C3.9669 10.5024 4.47215 10.675 5.07222 10.7557C5.6502 10.8334 6.38507 10.8334 7.29679 10.8333H12.6667C12.9429 10.8333 13.1667 10.6095 13.1667 10.3333C13.1667 10.0572 12.9429 9.83335 12.6667 9.83335H7.33339C6.37644 9.83335 5.70903 9.83228 5.20547 9.76458C4.71628 9.69881 4.45724 9.57852 4.27273 9.39401C4.20826 9.32954 4.15164 9.25598 4.10244 9.16668H10.7057C11.0046 9.1667 11.2675 9.16671 11.4858 9.14315C11.7221 9.11764 11.951 9.06096 12.1664 8.91894C12.3818 8.77692 12.524 8.58882 12.6406 8.3817C12.7482 8.19036 12.8518 7.94869 12.9695 7.67396L13.2807 6.94778C13.537 6.34978 13.7515 5.84948 13.8588 5.44258C13.9708 5.01809 13.9999 4.57488 13.7358 4.17428C13.4716 3.77367 13.0528 3.62588 12.6185 3.56159C12.2022 3.49996 11.6579 3.49999 11.0073 3.50001L3.80456 3.50001C3.80273 3.48135 3.80078 3.46293 3.7987 3.44476C3.7618 3.12155 3.6814 2.82497 3.48733 2.55572C3.29327 2.28647 3.03734 2.11641 2.74238 1.9792C2.46489 1.85011 2.11201 1.73249 1.69443 1.59331L1.4915 1.52567ZM3.83339 4.50001L3.83339 6.33335C3.83339 7.11467 3.8341 7.70297 3.87121 8.16668H10.6813C11.0119 8.16668 11.2202 8.16601 11.3785 8.14892C11.5246 8.13314 11.5808 8.10724 11.6159 8.0841C11.651 8.06097 11.6969 8.01951 11.769 7.89139C11.847 7.7527 11.9298 7.56142 12.06 7.25756L12.3457 6.59089C12.622 5.94609 12.8057 5.51422 12.8919 5.18751C12.9756 4.87003 12.9332 4.77367 12.9009 4.72477C12.8687 4.67586 12.7968 4.5989 12.472 4.55081C12.1378 4.50133 11.6685 4.50001 10.967 4.50001H3.83339Z" fill="" />
                <path fillRule="evenodd" clipRule="evenodd" d="M3.50005 13C3.50005 13.8284 4.17163 14.5 5.00005 14.5C5.82848 14.5 6.50005 13.8284 6.50005 13C6.50005 12.1716 5.82848 11.5 5.00005 11.5C4.17163 11.5 3.50005 12.1716 3.50005 13ZM5.00005 13.5C4.72391 13.5 4.50005 13.2762 4.50005 13C4.50005 12.7239 4.72391 12.5 5.00005 12.5C5.2762 12.5 5.50005 12.7239 5.50005 13C5.50005 13.2762 5.2762 13.5 5.00005 13.5Z" fill="" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11.0001 14.5001C10.1716 14.5001 9.50005 13.8285 9.50005 13.0001C9.50005 12.1716 10.1716 11.5001 11.0001 11.5001C11.8285 11.5001 12.5001 12.1716 12.5001 13.0001C12.5001 13.8285 11.8285 14.5001 11.0001 14.5001ZM10.5001 13.0001C10.5001 13.2762 10.7239 13.5001 11.0001 13.5001C11.2762 13.5001 11.5001 13.2762 11.5001 13.0001C11.5001 12.7239 11.2762 12.5001 11.0001 12.5001C10.7239 12.5001 10.5001 12.7239 10.5001 13.0001Z" fill="" />
              </svg>
              Add to Cart
            </button>
            <button
              onClick={() => { openModal(); handleQuickViewUpdate(); }}
              id="newOne"
              aria-label="Quick view"
              className="w-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-400 hover:border-blue hover:text-blue hover:bg-blue/5 transition-all duration-200 shrink-0"
            >
              <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 5.5C6.61945 5.5 5.50016 6.61929 5.50016 8C5.50016 9.38071 6.61945 10.5 8.00016 10.5C9.38087 10.5 10.5002 9.38071 10.5002 8C10.5002 6.61929 9.38087 5.5 8.00016 5.5ZM6.50016 8C6.50016 7.17157 7.17174 6.5 8.00016 6.5C8.82859 6.5 9.50016 7.17157 9.50016 8C9.50016 8.82842 8.82859 9.5 8.00016 9.5C7.17174 9.5 6.50016 8.82842 6.50016 8Z" fill="" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 2.16666C4.99074 2.16666 2.96369 3.96946 1.78721 5.49791L1.76599 5.52546C1.49992 5.87102 1.25487 6.18928 1.08862 6.5656C0.910592 6.96858 0.833496 7.40779 0.833496 8C0.833496 8.5922 0.910592 9.03142 1.08862 9.4344C1.25487 9.81072 1.49992 10.129 1.76599 10.4745L1.78721 10.5021C2.96369 12.0305 4.99074 13.8333 8.00016 13.8333C11.0096 13.8333 13.0366 12.0305 14.2131 10.5021L14.2343 10.4745C14.5004 10.129 14.7455 9.81072 14.9117 9.4344C15.0897 9.03142 15.1668 8.5922 15.1668 8C15.1668 7.40779 15.0897 6.96858 14.9117 6.5656C14.7455 6.18927 14.5004 5.87101 14.2343 5.52545L14.2131 5.49791C13.0366 3.96946 11.0096 2.16666 8.00016 2.16666ZM2.57964 6.10786C3.66592 4.69661 5.43374 3.16666 8.00016 3.16666C10.5666 3.16666 12.3344 4.69661 13.4207 6.10786C13.7131 6.48772 13.8843 6.7147 13.997 6.9697C14.1023 7.20801 14.1668 7.49929 14.1668 8C14.1668 8.50071 14.1023 8.79199 13.997 9.0303C13.8843 9.28529 13.7131 9.51227 13.4207 9.89213C12.3344 11.3034 10.5666 12.8333 8.00016 12.8333C5.43374 12.8333 3.66592 11.3034 2.57964 9.89213C2.28725 9.51227 2.11599 9.28529 2.00334 9.0303C1.89805 8.79199 1.8335 8.50071 1.8335 8C1.8335 7.49929 1.89805 7.20801 2.00334 6.9697C2.11599 6.7147 2.28725 6.48772 2.57964 6.10786Z" fill="" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Card body ───────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-2.5 sm:p-4">
        <h3
          className="text-sm font-medium text-dark line-clamp leading-snug mb-3 hover:text-blue transition-colors duration-200 flex-1 cursor-pointer"
          onClick={handleProductDetails}
        >
          <Link href={`/product-details/${item.slug.current}`}>
            {item.title}
          </Link>
        </h3>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-base font-bold text-dark">
            KShs {item.discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <span className="text-xs text-gray-400 line-through">
            KShs {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>

        {/* WhatsApp button */}
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1da851] active:scale-95 transition-all duration-200"
        >
          <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
            <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
          </svg>
          Quick Order
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
