import { createSlice } from "@reduxjs/toolkit";
import {
  createItem,
  getAllItems,
  getItemDetails,
  deleteItem,
  updateItem,
} from "./operetions";

const initialState = {
  items: [],
  itemDetails: null,
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
      state.items = action.payload;
    },
    [getItemDetails.pending](state, action) {
      state.isLoading = true;
    },
    [getItemDetails.fulfilled](state, action) {
      state.isLoading = false;
      state.itemDetails = action.payload;
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
  },
});

export const itemReducer = itemSlice.reducer;
