import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../lib/types/screen";
const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retrieveProductPage = createSelector(
  selectProductsPage,
  (productsPage) => {
    return {
      restaurant: productsPage.restaurant,
      products: productsPage.products,
    };
  }
);
