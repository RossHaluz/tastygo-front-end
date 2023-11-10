"use client";
import { configureStore } from "@reduxjs/toolkit";
import { mobileMenuReducer } from "./mobileMenu/slice";

export const store = configureStore({
  reducer: {
    menu: mobileMenuReducer,
  },
});
