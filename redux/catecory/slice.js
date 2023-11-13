import { createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} from "./operetions";

const initialState = {
  categories: [],
  category: null,
  isLoading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState: { initialState },
  reducers: {},
  extraReducers: {
    [createCategory.pending](state, action) {
      state.isLoading = true;
    },
    [createCategory.fulfilled](state, action) {
      state.isLoading = false;
    },
    [getAllCategories.pending](state, action) {
      state.isLoading = true;
    },
    [getAllCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [getCategory.pending](state, action) {
      state.isLoading = true;
    },
    [getCategory.fulfilled](state, action) {
      state.isLoading = false;
      state.category = action.payload;
    },
    [updateCategory.pending](state, action) {
      state.isLoading = true;
    },
    [updateCategory.fulfilled](state, action) {
      state.isLoading = false;
      const findIndex = state.categories?.findIndex(
        (item) => item._id === action.payload._id
      );
      state.categories = state.categories[findIndex] = action.payload;
    },
  },
});

export const categoryReducer = categorySlice.reducer;
