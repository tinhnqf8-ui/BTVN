import { createSlice } from "@reduxjs/toolkit";
import { getProductList } from "@/services/product";

export interface ProductState {
  value: Array<object>;
}

const initialState: ProductState = {
  value: [],
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = productsSlice.actions;

export default productsSlice;
