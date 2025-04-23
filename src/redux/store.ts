import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import { baseApi } from "./baseApi/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
