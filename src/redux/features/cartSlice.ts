import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  // Add any other product properties you need
}

interface CartState {
  items: CartItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: CartState = {
  items: [],
  status: "idle",
  error: null,
};

// Create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a single item to cart
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Item exists, increase quantity
        existingItem.quantity += newItem.quantity || 1;
      } else {
        // New item, add to cart with default quantity of 1 if not specified
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
        });
      }
    },

    // Modified to accept either an array or a single item
    addItems: (state, action) => {
        
      },

    // Update item quantity
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        // Ensure quantity is never less than 1
        item.quantity = Math.max(1, quantity);
      }
    },

    // Remove item from cart
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addItem, addItems, updateItemQuantity, removeItem, clearCart } =
  cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
