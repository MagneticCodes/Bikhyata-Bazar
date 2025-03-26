import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'

export const store = configureStore({
  reducer: {
    // Define a top-level state field named `cart`, handled by `cartSlice`
    cart: cartSlice,
  },
})