import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the cart item interface with the fields used in the component
export interface CartItem {
  id: string | number;
  name: string;
  quantity: number;
  price?: number;
  selling_price?: number;
  image?: string;
  [key: string]: any; // For any additional properties
}

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartItems", // Changed to match the state structure in the component
  initialState,
  reducers: {
    addToCartItems: (
      state,
      action: PayloadAction<Omit<CartItem, "quantity"> & { quantity?: number }>
    ) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          name: action.payload.name,
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    // showCartItems: (state) => {
    //   return state.cartItems;
    // },
    cartRemoveItems: (state, action: PayloadAction<string | number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCartItems,
  // showCartItems,
  cartRemoveItems,
  updateCartQuantity,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state: { cartItems: CartState }) =>
  state.cartItems.cartItems;
export const selectCartTotal = (state: { cartItems: CartState }) =>
  state.cartItems.cartItems.reduce(
    (total, item) =>
      total + (item.selling_price || item.price || 0) * item.quantity,
    0
  );
export const selectCartItemCount = (state: { cartItems: CartState }) =>
  state.cartItems.cartItems.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;
