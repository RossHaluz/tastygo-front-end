import { createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
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
      state.categories = action.payload.categories;
      const findIndex = state.categories.findIndex(
        (item) => item._id === action.payload.updateCategory._id
      );
      state.categories[findIndex] = action.payload.updateCategory;
    },
    [deleteCategory.pending](state, action) {
      state.isLoading = true;
    },
    [deleteCategory.fulfilled](state, action) {
      state.isLoading = false;
      state.categories = state.categories.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const categoryReducer = categorySlice.reducer;
