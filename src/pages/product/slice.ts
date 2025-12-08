import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../lib/types/screen";

const initialState: ProductsPageState = {
  products: [],
};

const ProductsPageSlice = createSlice({
  name: "ProductsPage",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = ProductsPageSlice.actions;

const ProductsPageReducer = ProductsPageSlice.reducer;
export default ProductsPageReducer;
