import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../lib/types/screen";

const initialState: ProductsPageState = {
  restaurant: null,
  products: [],
};

const ProductsPageSlice = createSlice({
  name: "ProductsPage",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setRestaurant, setProducts } = ProductsPageSlice.actions;

const ProductsPageReducer = ProductsPageSlice.reducer;
export default ProductsPageReducer;
