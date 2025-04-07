import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/models/product"

type InitialState = {
  value: Product;
};

const initialState: InitialState = {
  value: {
    _id: "",
    title: "",
    slug: {
      current: "",
    },
    brand: "",
    price: 0,
    discountedPrice: 0,
    stock: 0,
    category: {
      _id: "",
      title: "",
      slug: {
        current: "",
      },
    },
    images: [],
    summary: [],
    description: [],
    variants: [],
    reviews: [],
    relatedProducts: [],
    createdAt: "",
  },
};

export const productDetails = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
