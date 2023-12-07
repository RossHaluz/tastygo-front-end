import { createSlice } from "@reduxjs/toolkit";
import {
  createItem,
  getAllItems,
  getItemDetails,
  deleteItem,
  updateItem,
  getCategoryItems,
} from "./operetions";

const initialState = {
  items: [],
  recentlyViewedItems: [],
  itemDetails: null,
  currentPage: null,
  totalPages: null,
  totalItems: null,
  limit: null,
  isLoading: false,
};

const itemSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [createItem.pending](state, action) {
      state.isLoading = true;
    },
    [createItem.fulfilled](state, action) {
      state.isLoading = false;
    },
    [getAllItems.pending](state, action) {
      state.isLoading = true;
    },
    [getAllItems.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload.items;
      state.currentPage = action.payload.meta.page;
      state.totalPages = action.payload.meta.totalPages;
      state.limit = action.payload.meta.limit;
      state.totalItems = action.payload.meta.totalItems;
    },
    [getItemDetails.pending](state, action) {
      state.isLoading = true;
    },
    [getItemDetails.fulfilled](state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.itemDetails = action.payload.item;
      state.recentlyViewedItems = [
        ...state.recentlyViewedItems,
        ...action.payload.recentlyViewedItems,
      ];
    },
    [deleteItem.pending](state, action) {
      state.isLoading = true;
    },
    [deleteItem.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
    [updateItem.pending](state, action) {
      state.isLoading = true;
    },
    [updateItem.fulfilled](state, action) {
      state.isLoading = false;
    },
    [getCategoryItems.pending](state, action) {
      state.isLoading = true;
    },
    [getCategoryItems.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload.categoryItems;
      state.currentPage = action.payload.meta.page;
      state.totalPages = action.payload.meta.totalPages;
      state.limit = action.payload.meta.limit;
      state.totalItems = action.payload.meta.totalItems;
    },
  },
});

export const itemReducer = itemSlice.reducer;
