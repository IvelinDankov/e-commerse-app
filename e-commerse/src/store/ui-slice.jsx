import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, checkoutIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    checkoutPage(state) {
      state.checkoutIsVisible = !state.checkoutIsVisible;
    },
    showNotification() {
      
    }
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
