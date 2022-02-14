import { createSlice } from "@reduxjs/toolkit";

export const brandSlice = createSlice({
  name: "brand",
  initialState: {
    brands: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getBrandStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getBrandSuccess: (state, action) => {
      state.isFetching = false;
      state.brands = action.payload;
    },
    getBrandFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getBrandStart, getBrandSuccess, getBrandFailure } =
  brandSlice.actions;

export default brandSlice.reducer;
