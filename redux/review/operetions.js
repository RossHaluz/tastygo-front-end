import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createNewReview = createAsyncThunk(
  "api/createNewReview",
  async (params, { rejectWithValue }) => {
    const { userId, reviewDesc, userName, rating, dateAdd } = params;
    console.log(params);
    try {
      await axios.post(`/api/review/create-review/${userId}`, {
        reviewDesc,
        userName,
        rating,
        dateAdd,
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getReviewsUser = createAsyncThunk(
  "api/getReviewsUser",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/review/reviews-user/${userId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
