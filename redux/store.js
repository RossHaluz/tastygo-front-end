"use client";
import { configureStore } from "@reduxjs/toolkit";
import { mobileMenuReducer } from "./mobileMenu/slice";
import { modalReducer } from "./modal/slice";
import { categoryReducer } from "./catecory/slice";
import { itemReducer } from "./item/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    menu: mobileMenuReducer,
    modal: modalReducer,
    category: categoryReducer,
    item: itemReducer,
    user: authReducer,
  },
});
