import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sellsData } from "@/dummy/data";
import toast from "react-toastify";
import { StaticImageData } from "next/image";
// Define the CartProduct type
export interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  desc: string;
  category?: any;
}
interface SellData {
  name: string;
  category: string;
  price: number;
  desc?: string; // Optional field
  image: StaticImageData; // Assuming the image import returns a string
  id: number;
}
interface CartState {
  cart: CartProduct[];
  total: number;
  sellsPage: SellData[];
}

const initialState: CartState = {
  cart: [],
  //
  total: 0,
  sellsPage: sellsData,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      if (state.cart.length === 0) {
        state.total += 0;
      }
      if (state.cart.length !== 0) {
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      ``;
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.total -= state.cart[index].price * state.cart[index].quantity;
        state.cart.splice(index, 1);
      }
    },
    editCart(
      state,
      action: PayloadAction<{
        decision: "add" | "subtract";
        item: CartProduct;
      }>
    ) {
      const { decision, item } = action.payload;
      const CartContent = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (CartContent) {
        if (decision === "add") {
          state.cart = state.cart.map((cartItem) =>
            cartItem.id === CartContent.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else if (decision === "subtract") {
          if (CartContent.quantity > 1) {
            state.cart = state.cart.map((cartItem) =>
              cartItem.id === CartContent.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            );
          } else {
            state.cart = state.cart.filter(
              (cartItem) => cartItem.id !== item.id
            );
            // toast.success(`${item.name} removed`)
          }
        }
      }
    },
    clear(state, action: PayloadAction<CartProduct[]>) {
      state.cart = [];
    },
    resetTotal(state, action: PayloadAction<number>) {
      state.total = 0;
    },
  },
});

export const { addItemToCart, editCart, removeItem, clear, resetTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
