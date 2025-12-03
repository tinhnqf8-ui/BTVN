import callApi from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductList = createAsyncThunk("product/fetchProduct", async () => {
  const response = await callApi.get(`/posts`, {});
  return response;
});