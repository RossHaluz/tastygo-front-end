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
  async (params, { rejectWithValue }) => {
    const { page, limit } = params;
    try {
      const { data } = await axios.get(
        `/api/item/get-items?page=${page}&limit=${limit}`
      );
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

export const updateItem = createAsyncThunk(
  "api/updateItem",
  async (params, { rejectWithValue }) => {
    const { itemId, data: values } = params;
    try {
      const { data } = await axios.put(
        `/api/item/update-item/${itemId}`,
        values
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategoryItems = createAsyncThunk(
  "api/getCategoryItems",
  async (categoryName, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/item/category-items/${categoryName}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
