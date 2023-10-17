import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import todoSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    todo: todoSlice,
  },
});
