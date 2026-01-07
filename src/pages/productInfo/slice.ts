import { createSlice } from "@reduxjs/toolkit";
import { ProductInfoPageState } from "../../lib/types/screen";

const initialState: ProductInfoPageState = {
  restaurant: null,
  chosenProduct: null,
  recommendedProduct: [],
};

const ProductInfoPageSlice = createSlice({
  name: "productInfoPage",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setRecommendedProduct: (state, action) => {
      state.recommendedProduct = action.payload;
    },
  },
});

export const { setRestaurant, setChosenProduct, setRecommendedProduct } =
  ProductInfoPageSlice.actions;

const ProductInfoPageReducer = ProductInfoPageSlice.reducer;
export default ProductInfoPageReducer;
