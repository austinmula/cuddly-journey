import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  items: WishListItem[];
};

type WishListItem = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  brand: string;
  price: number;
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
  user: string;
  rating: number;
  comment: string;
};

type RelatedProduct = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
};

const initialState: InitialState = {
  items: [],
};

export const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<WishListItem>) => {
      const { _id, title, price, quantity, images, status } = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          _id,
          title,
          slug: action.payload.slug,
          brand: action.payload.brand,
          price,
          stock: action.payload.stock,
          quantity,
          status,
          category: action.payload.category,
          images,
          description: action.payload.description,
          summary: action.payload.summary,
          variants: action.payload.variants,
          reviews: action.payload.reviews,
          relatedProducts: action.payload.relatedProducts,
          createdAt: action.payload.createdAt,
        });
      }
    },
    removeItemFromWishlist: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
    },

    removeAllItemsFromWishlist: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToWishlist,
  removeItemFromWishlist,
  removeAllItemsFromWishlist,
} = wishlist.actions;
export default wishlist.reducer;
