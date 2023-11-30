import { createSlice } from "@reduxjs/toolkit";
import { registerUser, getUserDetails } from "./operetions";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending](state, action) {
      state.isLoading = true;
    },
    [registerUser.fulfilled](state, action) {
      state.isLoading = false;
    },
    [registerUser.rejected](state, action) {
      state.error = action.payload;
    },
    [getUserDetails.pending](state, action) {
      state.isLoading = true;
    },
    [getUserDetails.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
