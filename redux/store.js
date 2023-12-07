"use client";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { mobileMenuReducer } from "./mobileMenu/slice";
import { modalReducer } from "./modal/slice";
import { categoryReducer } from "./catecory/slice";
import { itemReducer } from "./item/slice";
import { authReducer } from "./auth/slice";

const persistConfig = {
  key: "viewedItems",
  whitelist: ["recentlyViewedItems"],
  storage,
};

export const store = configureStore({
  reducer: {
    menu: mobileMenuReducer,
    modal: modalReducer,
    category: categoryReducer,
    item: persistReducer(persistConfig, itemReducer),
    user: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
