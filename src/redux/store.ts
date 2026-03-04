import { configureStore } from "@reduxjs/toolkit";

import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailsReducer from "./features/product-details";

import { TypedUseSelectorHook, useSelector } from "react-redux";

const loadWishlistFromStorage = () => {
  try {
    if (typeof window === "undefined") return undefined;
    const serialized = localStorage.getItem("wishlist");
    if (!serialized) return undefined;
    return { items: JSON.parse(serialized) };
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    quickViewReducer,
    cartReducer,
    wishlistReducer,
    productDetailsReducer,
  },
  preloadedState: {
    wishlistReducer: loadWishlistFromStorage(),
  },
});

store.subscribe(() => {
  try {
    if (typeof window === "undefined") return;
    const items = store.getState().wishlistReducer.items;
    localStorage.setItem("wishlist", JSON.stringify(items));
  } catch {
    // ignore write errors
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
