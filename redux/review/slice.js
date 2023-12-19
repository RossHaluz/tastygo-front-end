import { createSlice } from "@reduxjs/toolkit";
import { getReviewsUser } from "./operetions";

const initialState = {
  isLoading: false,
  reviews: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState: { initialState },
  reducers: {},
  extraReducers: {
    [getReviewsUser.pending](state, __) {
      state.isLoading = true;
    },
    [getReviewsUser.fulfilled](state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.reviews = action.payload.reviewsUser;
    },
  },
});

export const reviewReducer = reviewSlice.reducer;
