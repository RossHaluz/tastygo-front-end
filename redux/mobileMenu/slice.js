import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openMobileMenu(state, action) {
      state.isOpen = action.payload;
    },
    closeMobileMenu(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;

export const mobileMenuReducer = mobileMenuSlice.reducer;
