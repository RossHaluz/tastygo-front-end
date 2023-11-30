import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "api/registerUser",
  async (params, { rejectWithValue }) => {
    try {
      await axios.post("/api/user/register", params);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "api/loginUser",
  async (params, { rejectWithValue }) => {
    try {
      await axios.post("/api/user/login", params);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "api/getUserDetails",
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/user/user/${email}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
