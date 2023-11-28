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
