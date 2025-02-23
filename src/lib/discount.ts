export const calculateDiscountPercentage = (
  originalPrice: number,
  discountedPrice: number
): number => {
//   if (
//     originalPrice <= 0 ||
//     discountedPrice < 0 ||
//     discountedPrice > originalPrice
//   ) {
//     throw new Error("Invalid price values");
//   }

  const discountPercentage =
    ((originalPrice - discountedPrice) / originalPrice) * 100;
  return Math.ceil(discountPercentage);
};
