import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "@/types/product";

type Product = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  brand: string;
  price: number;
  discountedPrice: number;
  stock: number;
  quantity: number;
  status?: string;
  category: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  images: Image[];
  summary: any[];
  description: any[]; // Sanity rich text format (Portable Text)
  // specifications: Specifications;
  variants: Variant[];
  reviews: Review[];
  relatedProducts: RelatedProduct[];
  createdAt: string;
};

type Image = {
  asset: {
    _ref: string;
    _type: string;
  };
};

type Specifications = {
  processor?: string;
  ram?: string;
  storage?: string;
  gpu?: string;
  display?: string;
  battery?: string;
  os?: string;
  ports?: string;
};

type Variant = {
  title: string;
  price: number;
  color?: string;
  images?: Image[];
};

type Review = {
  user?: string;
  author?: string;
  rating: number;
  comment: string;
  date?: string;
};

type RelatedProduct = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
};

type InitialState = {
  value: Product;
};

const initialState = {
  value: {
    _id: "",
    title: "",
    slug: { current: "" },
    brand: "",
    price: 0,
    discountedPrice: 0,
    stock: 0,
    quantity: 0,
    category: { _id: "", title: "", slug: { current: "" } },
    images: [],
    summary: [],
    description: [],
    variants: [],
    reviews: [],
    relatedProducts: [],
    createdAt: "",
  } as Product,
} as InitialState;

export const quickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    updateQuickView: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },

    resetQuickView: () => {
      return {
        value: initialState.value,
      };
    },
  },
});

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;
