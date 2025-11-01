import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  items: CartItem[];
};

type CartItem = {
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
  description: any[];
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

const initialState: InitialState = {
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const { _id, title, price, quantity, images } = action.payload;
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
          discountedPrice: action.payload.discountedPrice,
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
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },

    removeAllItemsFromCart: (state) => {
      state.items = [];
    },
  },
});

export const selectCartItems = (state: RootState) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) => {
  return items.reduce((total, item) => {
    return total + item.discountedPrice * item.quantity;
  }, 0);
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  removeAllItemsFromCart,
} = cart.actions;
export default cart.reducer;
