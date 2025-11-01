import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  previewImage: string;
};

type TGlobalDialogState = {
  open: boolean;
  cart: CartItem[];
};

const initialState: TGlobalDialogState = {
  open: false,
  cart: [],
};

const loadCart = () => {
  try {
    const storedCart = localStorage.getItem("furniroCart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
};

const saveCart = (items: CartItem[]) => {
  localStorage.setItem("furniroCart", JSON.stringify(items));
};

export const globalDialogSlice = createSlice({
  name: "globalDialog",
  initialState: { ...initialState, cart: loadCart() },
  reducers: {
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
        existing.quantity += action.payload.quantity;
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
  },
});

export const selectGlobalDialogState = (state: RootState) => state.globalDialog;
export const { showDialog, hideDialog, addItem, removeItem } =
  globalDialogSlice.actions;
export default globalDialogSlice.reducer;
