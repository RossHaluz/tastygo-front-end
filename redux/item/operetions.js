import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createItem = createAsyncThunk(
  "api/createItem",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/item/create-item", params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllItems = createAsyncThunk(
  "api/getAllItems",
  async (__, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/item/get-items");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getItemDetails = createAsyncThunk(
  "api/getItemDetails",
  async (itemId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/item/get-item/${itemId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  "api/deleteItem",
  async (itemId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/item/delete-item/${itemId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
