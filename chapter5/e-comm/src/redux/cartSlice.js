import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.cart.indexOf(action.payload);
      state.cart.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cart.actions;
export default cart.reducer;
