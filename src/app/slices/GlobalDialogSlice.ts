import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  previewImage: string;
  maxCount: number;
};

type TGlobalDialogState = {
  open: boolean;
  cart: CartItem[];
};

const initialState: TGlobalDialogState = {
  open: false,
  cart: [],
};

const saveCart = (items: CartItem[]) => {
  localStorage.setItem("furniroCart", JSON.stringify(items));
};

export const globalDialogSlice = createSlice({
  name: "globalDialog",
  initialState,
  reducers: {
    hydrateCart(state) {
      try {
        const stored = localStorage.getItem("furniroCart");

        state.cart = stored ? JSON.parse(stored) : [];
      } catch {}
    },
    showDialog(state) {
      state.open = true;
    },
    hideDialog(state) {
      state.open = false;
    },
    addItem(state, action: PayloadAction<CartItem>) {
      const existing = state.cart.find(
        (item: CartItem) => item.id === action.payload.id
      );
      if (existing) {
        if (existing.quantity <= action.payload.maxCount) {
          existing.quantity += action.payload.quantity;
        } else {
          return;
        }
      } else {
        state.cart.push(action.payload);
      }
      saveCart(state.cart);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter(
        (item: CartItem) => item.id !== action.payload
      );
      saveCart(state.cart);
    },
    increaseQuantity(
      state,
      action: PayloadAction<{ id: string; maxCount: number }>
    ) {
      const item = state.cart.find(
        (item: CartItem) => item.id === action.payload.id
      );
      if (item && item.quantity <= action.payload.maxCount) {
        item.quantity++;
      } else {
        return;
      }
      saveCart(state.cart);
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find(
        (item: CartItem) => item.id === action.payload
      );
      if (item) {
        if (item.quantity === 1) {
          state.cart = state.cart.filter(
            (item: CartItem) => item.id !== action.payload
          );
          saveCart(state.cart);
        } else {
          item.quantity--;
        }
      } else {
        return;
      }
      saveCart(state.cart);
    },
  },
});

export const selectGlobalDialogState = (state: RootState) => state.globalDialog;
export const {
  showDialog,
  hideDialog,
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  hydrateCart,
} = globalDialogSlice.actions;
export default globalDialogSlice.reducer;
